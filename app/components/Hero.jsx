import MyLinks from "./MyLinks";

function Hero({ className }) {
  return (
    <div
      className={`inter-font ${
        className || ""
      } flex flex-col gap-4 m-w-200px bg-amber-200`}
    >
      <h1 className="calistoga-font text-5xl">hi jordan here.</h1>
      <p className="inter-font">26yo frontend developer from Scotland</p>
      <p>
        Frontend by profession, full-stack by passion. i build and self-host the
        lot.
      </p>
      <p>For Q&A, start a chat with Jordan Support</p>
      <MyLinks />
    </div>
  );
}

export default Hero;
