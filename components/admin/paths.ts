// The admin panel lives at /website (set in payload.config.ts routes.admin).
// Every admin link is built from this so the path is changed in one place.
export const ADMIN_PATH = "/website";

export const adminUrl = (path = "") => `${ADMIN_PATH}${path}`;
