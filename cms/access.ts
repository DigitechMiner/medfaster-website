import type { Access, FieldAccess } from "payload";

type RoleUser = { roles?: string[] | null } | null | undefined;

export const hasRole = (user: RoleUser, role: "admin" | "editor") =>
  Boolean(user?.roles?.includes(role));

// Anyone signed in to the admin panel
export const isLoggedIn: Access = ({ req: { user } }) => Boolean(user);

export const isAdmin: Access = ({ req: { user } }) => hasRole(user as RoleUser, "admin");

export const isAdminField: FieldAccess = ({ req: { user } }) => hasRole(user as RoleUser, "admin");

export const anyone: Access = () => true;

// Public site sees published documents only; signed-in editors also see drafts
export const publishedOrLoggedIn: Access = ({ req: { user } }) => {
  if (user) return true;
  return { _status: { equals: "published" } };
};

// Admins manage everyone; other users can only see and edit themselves
export const isAdminOrSelf: Access = ({ req: { user } }) => {
  if (!user) return false;
  if (hasRole(user as RoleUser, "admin")) return true;
  return { id: { equals: user.id } };
};
