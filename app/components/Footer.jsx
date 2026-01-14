import Button from "./Button";
import { Linkedin, Github, Mail } from "lucide-react";

function Footer() {
  return (
    <footer className="flex flex-row justify-between w-full pl-6 pr-6 md:w-2xl m-auto text-sm text-white/60 text-center items-center">
      <p>2026 © Jordan Grieve.</p>
      <div className="gap-1 flex">
        <Button
          title="LinkedIn"
          icon={Linkedin}
          href="https://www.linkedin.com/in/jordan-grieve-48818a170/"
          variant="icon"
        />

        <Button
          title="GitHub"
          icon={Github}
          href="https://github.com/JordanGrieve"
          variant="icon"
        />

        <Button
          title="Email"
          icon={Mail}
          href="mailto:info@jordangrieve.com"
          variant="icon"
        />
      </div>
    </footer>
  );
}

export default Footer;
