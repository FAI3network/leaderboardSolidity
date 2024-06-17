import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between mx-10 mb-12 mt-[1.5rem] items-center">
      <h1 className="text-2xl">
        <Link href={"/"}>FAI3</Link>
      </h1>
      <ul className="flex gap-12 items-center">
        <li>
          <Link href="/">Leaderboard</Link>
        </li>
        <li>
          <Link href="/">About</Link>
        </li>
        <li>
          <Link href="/">Connect</Link>
        </li>
      </ul>
    </nav>
  );
}
