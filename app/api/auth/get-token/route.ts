// app/api/auth/get-token/route.ts
import { OAuth2Client } from "google-auth-library";
import { NextResponse } from "next/server";

const oauth2Client = new OAuth2Client({
	clientId: process.env.GOOGLE_CLIENT_ID,
	clientSecret: process.env.GOOGLE_CLIENT_SECRET,
	redirectUri: "http://localhost:3000/api/auth/oauth-callback", // Updated path
});

export async function GET() {
	const url = oauth2Client.generateAuthUrl({
		access_type: "offline",
		scope: ["https://www.googleapis.com/auth/calendar"],
		prompt: "consent",
	});

	return NextResponse.redirect(url);
}
