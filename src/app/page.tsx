import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return(
    <main>
      <h1 className="text-3xl font-bold underline">Hello world</h1>
      <Link href="/users">Users</Link>
      </main>
  );
}
