var SITE_URL;

if (process.env.NODE_ENV === "production") {

    SITE_URL = "http://next.chiragghosh.me";
}

else if (process.env.NODE_ENV === "development") {

    SITE_URL = "http://localhost:3000";
}

const API_URL = `${SITE_URL}/api`;

export { SITE_URL, API_URL };