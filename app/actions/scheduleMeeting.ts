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
): Promise<{ success: boolean; meetingLink?: string; error?: string }> {
	try {
		const startTime = formData.get("startTime") as string;
		const duration = parseInt(formData.get("duration") as string);
		const clientEmail = formData.get("clientEmail") as string;
		const ownerEmail = formData.get("ownerEmail") as string;
		const meetingTitle = formData.get("meetingTitle") as string;
		const description = formData.get("description") as string;

		// Calculate end time
		const startDateTime = new Date(startTime);
		const endDateTime = new Date(startDateTime.getTime() + duration * 60000);

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

		const response = await calendar.events.insert({
			calendarId: "primary",
			requestBody: event,
			conferenceDataVersion: 1,
			sendUpdates: "all", // Sends emails to attendees
		});

		return {
			success: true,
			meetingLink:
				response.data.hangoutLink ??
				response.data.conferenceData?.entryPoints?.[0]?.uri ??
				undefined,
		};
	} catch (error) {
		console.error("Error scheduling meeting:", error);
		return {
			success: false,
			error: "Failed to schedule meeting. Please try again.",
		};
	}
}
