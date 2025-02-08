export interface MeetingDetails {
	clientEmail: string;
	ownerEmail: string;
	meetingTime: string; // ISO string format
	meetingTitle: string;
}

export interface GoogleCalendarEvent {
	id?: string;
	summary: string;
	start: {
		dateTime: string;
		timeZone: string;
	};
	end: {
		dateTime: string;
		timeZone: string;
	};
	attendees: { email: string }[];
	reminders: {
		useDefault: boolean;
		overrides: { method: string; minutes: number }[];
	};
	conferenceData?: {
		createRequest: {
			requestId: string;
			conferenceSolutionKey: {
				type: string;
			};
		};
	};
}
