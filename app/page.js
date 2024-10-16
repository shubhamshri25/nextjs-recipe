import Link from "next/link";

export default function Home() {
  return (
    <>
      <div> Weclome to recipe app </div>
      <Link href="/recipe-list">Explore all recipes</Link>
    </>
  );
}
