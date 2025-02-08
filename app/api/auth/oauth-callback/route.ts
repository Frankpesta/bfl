// app/api/auth/oauth-callback/route.ts
import { OAuth2Client } from "google-auth-library";
import { NextResponse } from "next/server";

const oauth2Client = new OAuth2Client({
	clientId: process.env.GOOGLE_CLIENT_ID,
	clientSecret: process.env.GOOGLE_CLIENT_SECRET,
	redirectUri: "http://localhost:3000/api/auth/oauth-callback",
});

export async function GET(request: Request) {
	const url = new URL(request.url);
	const code = url.searchParams.get("code");

	if (!code) {
		return NextResponse.json({ error: "No code provided" }, { status: 400 });
	}

	try {
		const { tokens } = await oauth2Client.getToken(code);
		return NextResponse.json({ refresh_token: tokens.refresh_token });
	} catch (error) {
		console.error("Error getting tokens:", error);
		return NextResponse.json(
			{ error: "Failed to get tokens" },
			{ status: 500 }
		);
	}
}
