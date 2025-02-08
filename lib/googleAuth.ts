// lib/googleAuth.ts
import { google, Auth } from "googleapis";

const oauth2Client: Auth.OAuth2Client = new google.auth.OAuth2(
	process.env.GOOGLE_CLIENT_ID,
	process.env.GOOGLE_CLIENT_SECRET,
	process.env.GOOGLE_REDIRECT_URI
);

oauth2Client.setCredentials({
	refresh_token: process.env.GOOGLE_REFRESH_TOKEN,
});

export { oauth2Client };
