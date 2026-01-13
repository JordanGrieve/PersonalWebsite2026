"use client";

import {
  InputGroup,
  InputGroupInput,
  InputGroupTextarea,
} from "@/components/ui/input-group";
import { ArrowRight } from "lucide-react";

function Contact() {
  return (
    <>
      <h1 className="calistoga-font text-5xl mb-10">contact me.</h1>
      <form
        action={process.env.NEXT_PUBLIC_FORMSPREE_URL}
        method="POST"
        className="grid w-full gap-4"
      >
        <div className="grid md:grid-cols-2 gap-4">
          <InputGroup className="border border-white/20">
            <InputGroupInput
              name="name"
              placeholder="full name"
              required
              className="text-white/70"
            />
          </InputGroup>
          <InputGroup className="border border-white/20">
            <InputGroupInput
              name="email"
              placeholder="example.com"
              required
              className="text-white/70"
            />
          </InputGroup>
        </div>
        <InputGroup className="border border-white/20">
          <InputGroupTextarea
            name="message"
            placeholder="drop a note with any website feedback or career opportunities, or just to say hi!"
            required
            className="text-white/70"
          />
        </InputGroup>
        <button
          type="submit"
          className="inline-flex items-center justify-center gap-2 h-10 px-4 text-sm font-medium rounded-md text-white/80 border border-white/10 transition hover:bg-white/10 hover:border-white/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/20"
        >
          <span>Send Message</span>
          <ArrowRight size={18} className="text-white/80" />
        </button>
      </form>
    </>
  );
}

export default Contact;
