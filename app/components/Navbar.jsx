import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <header className="w-full mx-auto backdrop-blur-md sticky top-0 z-50">
      <nav>
        <ul>
          <Link href="/">home</Link>
          <Link href="/">projects</Link>
          <Link href="/">blog</Link>
          <Link href="/">contact</Link>
        </ul>
        sun
      </nav>
    </header>
  );
};
export default Navbar;
