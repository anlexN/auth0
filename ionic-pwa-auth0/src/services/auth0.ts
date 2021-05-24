import { Auth0Client } from "@auth0/auth0-spa-js";

const auth0 = new Auth0Client( {
    domain: "anlexn.auth0.com",
    client_id: "OoDl9FcX4e4YFW76LWm9zBpTTYPsk54c",
    audience: "http://localhost:3000/api/",
    redirect_uri: window.location.origin,
    cacheLocation: 'localstorage'
} )

export { auth0 };