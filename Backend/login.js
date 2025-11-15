exports.handler = async () => {
  const CLIENT_ID = process.env.CLIENT_ID;
  const TENANT_ID = process.env.TENANT_ID;
  const REDIRECT_URI = process.env.REDIRECT_URI;

  const url = `https://login.microsoftonline.com/${TENANT_ID}/oauth2/v2.0/authorize?client_id=${CLIENT_ID}&response_type=code&redirect_uri=${encodeURIComponent(
    REDIRECT_URI
  )}&response_mode=query&scope=openid%20profile%20email`;

  return {
    statusCode: 302,
    headers: {
      Location: url,
    },
  };
};
