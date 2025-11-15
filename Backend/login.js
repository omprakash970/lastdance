// Backend/login.js
exports.handler = async (event) => {
  const CLIENT_ID = process.env.CLIENT_ID || "7e0ebb38-a6d2-4f80-9a32-82419a864169";
  // Use the Netlify subdomain (the one Microsoft accepts)
  const REDIRECT_URI = process.env.REDIRECT_URI || "https://tourmaline-entremet-f23eac.netlify.app/.netlify/functions/callback";

  const authUrl = `https://login.microsoftonline.com/common/oauth2/v2.0/authorize` +
    `?client_id=${encodeURIComponent(CLIENT_ID)}` +
    `&response_type=code` +
    `&redirect_uri=${encodeURIComponent(REDIRECT_URI)}` +
    `&response_mode=query` +
    `&scope=${encodeURIComponent("openid profile email offline_access")}`;

  return {
    statusCode: 302,
    headers: {
      Location: authUrl
    }
  };
};
