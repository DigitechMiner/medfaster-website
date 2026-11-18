// Creates (or promotes) an admin account from ADMIN_EMAIL and ADMIN_PASSWORD.
// Usage: ADMIN_EMAIL=you@example.com ADMIN_PASSWORD=... npm run payload run scripts/cms/create-admin.ts
import { getPayload } from "payload";
import config from "@payload-config";

const email = process.env.ADMIN_EMAIL;
const password = process.env.ADMIN_PASSWORD;
if (!email || !password) {
  console.error("Set ADMIN_EMAIL and ADMIN_PASSWORD first.");
  process.exit(1);
}

const payload = await getPayload({ config });
const existing = await payload.find({ collection: "users", where: { email: { equals: email } }, limit: 1 });

if (existing.docs[0]) {
  await payload.update({ collection: "users", id: existing.docs[0].id, data: { roles: ["admin"], password } });
  console.log(`Updated ${email}: admin role and new password set.`);
} else {
  await payload.create({ collection: "users", data: { email, password, name: "Admin", roles: ["admin"] } });
  console.log(`Created admin ${email}.`);
}
process.exit(0);
