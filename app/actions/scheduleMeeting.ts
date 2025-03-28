"use server";

import { google } from "googleapis";
import { OAuth2Client } from "google-auth-library";

// First, set up your Google OAuth2 credentials
const oauth2Client = new OAuth2Client({
	clientId: process.env.GOOGLE_CLIENT_ID,
	clientSecret: process.env.GOOGLE_CLIENT_SECRET,
	redirectUri: process.env.GOOGLE_REDIRECT_URI,
});

// Set credentials (you'll need to implement token management)
oauth2Client.setCredentials({
	refresh_token: process.env.GOOGLE_REFRESH_TOKEN,
});

// Create calendar instance
const calendar = google.calendar({ version: "v3", auth: oauth2Client });

// Server action to schedule meeting
export async function scheduleMeeting(
	formData: FormData
): Promise<{
	success: boolean;
	meetingLink?: string;
	error?: string;
	details?: any;
}> {
	try {
		const startTime = formData.get("startTime") as string;
		const duration = parseInt(formData.get("duration") as string);
		const clientEmail = formData.get("clientEmail") as string;
		const ownerEmail = formData.get("ownerEmail") as string;
		const meetingTitle = formData.get("meetingTitle") as string;
		const description = formData.get("description") as string;

		// Validate inputs
		if (
			!startTime ||
			isNaN(duration) ||
			!clientEmail ||
			!ownerEmail ||
			!meetingTitle
		) {
			const validationError = {
				missingFields: {
					startTime: !startTime,
					duration: isNaN(duration),
					clientEmail: !clientEmail,
					ownerEmail: !ownerEmail,
					meetingTitle: !meetingTitle,
				},
				message: "Missing required fields",
			};
			console.error("Validation Error:", validationError);
			return {
				success: false,
				error: "Missing required fields",
				details: validationError,
			};
		}

		// Calculate end time
		const startDateTime = new Date(startTime);
		const endDateTime = new Date(startDateTime.getTime() + duration * 60000);

		// Validate dates
		if (isNaN(startDateTime.getTime()) || isNaN(endDateTime.getTime())) {
			const dateError = {
				startTime,
				startDateTime: startDateTime.toString(),
				endDateTime: endDateTime.toString(),
				message: "Invalid date format",
			};
			console.error("Date Validation Error:", dateError);
			return {
				success: false,
				error: "Invalid date/time format",
				details: dateError,
			};
		}

		// Create calendar event
		const event = {
			summary: meetingTitle,
			description: description,
			start: {
				dateTime: startDateTime.toISOString(),
				timeZone: "UTC",
			},
			end: {
				dateTime: endDateTime.toISOString(),
				timeZone: "UTC",
			},
			attendees: [{ email: clientEmail }, { email: ownerEmail }],
			conferenceData: {
				createRequest: {
					requestId: `${Date.now()}-${Math.random().toString(36).substring(7)}`,
					conferenceSolutionKey: { type: "hangoutsMeet" },
				},
			},
			reminders: {
				useDefault: false,
				overrides: [
					{ method: "email", minutes: 24 * 60 }, // 24 hours before
					{ method: "popup", minutes: 30 }, // 30 minutes before
				],
			},
		};

		console.log(
			"Attempting to create event with payload:",
			JSON.stringify(event, null, 2)
		);

		const response = await calendar.events.insert({
			calendarId: "primary",
			requestBody: event,
			conferenceDataVersion: 1,
			sendUpdates: "all", // Sends emails to attendees
		});

		console.log("Google API Response:", JSON.stringify(response.data, null, 2));

		return {
			success: true,
			meetingLink:
				response.data.hangoutLink ??
				response.data.conferenceData?.entryPoints?.[0]?.uri ??
				undefined,
			details: response.data,
		};
	} catch (error: any) {
		console.error("Full Error Details:", {
			message: error.message,
			stack: error.stack,
			response: error.response?.data,
			code: error.code,
			config: {
				method: error.config?.method,
				url: error.config?.url,
				data: error.config?.data,
			},
		});

		return {
			success: false,
			error: error.message || "Failed to schedule meeting. Please try again.",
			details: {
				message: error.message,
				code: error.code,
				response: error.response?.data,
			},
		};
	}
}
