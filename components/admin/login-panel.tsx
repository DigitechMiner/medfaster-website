import { CircleCheck } from "lucide-react";
import { KeRaevaLogo } from "./logo";

// Orange brand panel shown beside the sign-in form
export function LoginPanel() {
  return (
    <aside className="kr-login-panel" aria-hidden="false">
      <div className="kr-login-panel__circles" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
      <div className="kr-login-panel__logo">
        <KeRaevaLogo className="kr-logo" />
      </div>
      <div className="kr-login-panel__pitch">
        <p className="kr-overline">KeRaeva admin</p>
        <h1>Run the KeRaeva website from one calm place.</h1>
        <p>Edit pages, publish jobs and blog posts, manage the team and answer every message from the site, without touching code.</p>
        <ul>
          {["Edit every page section, button and image", "Every website form lands in one inbox", "Roles for admins and editors"].map((item) => (
            <li key={item}>
              <CircleCheck aria-hidden="true" strokeWidth={1.75} />
              {item}
            </li>
          ))}
        </ul>
      </div>
      <p className="kr-login-panel__foot">© {new Date().getFullYear()} MedFaster Health Tech Inc.</p>
    </aside>
  );
}

// Heading above the sign-in form
export function LoginIntro() {
  return (
    <div className="kr-login-intro">
      <h2>Welcome back</h2>
      <p>Sign in to manage keraeva.com</p>
    </div>
  );
}
