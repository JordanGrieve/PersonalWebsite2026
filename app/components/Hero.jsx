import MyLinks from "./MyLinks";

function Hero({ className }) {
  return (
    <div className={`inter-font ${className || ""} flex flex-col gap-4`}>
      <h1 className="calistoga-font text-5xl">hi joe here.</h1>
      <p className="max-w-87.5">26yo frontend developer from Scotland</p>
      <p className="max-w-93.75">
        Frontend by profession, full-stack by passion. i build and self-host the
        lot.
      </p>
      <p className="max-w-87.5">For Q&A, start a chat with Jordan Support</p>
      <MyLinks />
    </div>
  );
}

export default Hero;
