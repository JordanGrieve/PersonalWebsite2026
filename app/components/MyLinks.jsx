import Button from "./Button";
import { FileText, Linkedin, Github, Mail } from "lucide-react";

function MyLinks() {
  return (
    <div className="flex items-center gap-3">
      <Button
        title="Resume"
        icon={FileText}
        href="/resume.pdf"
        variant="pill"
      />

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
        href="mailto:jordangrieve.dev@outlook.com"
        variant="icon"
      />
    </div>
  );
}

export default MyLinks;
