import Link from "next/link";
import RandomComponent from "@/components/RandomComponent";

export default function HomePage({ count, onAddCount }) {
  console.log("RENDER HOMEPAGE");
  return (
    <>
      <button onClick={onAddCount}>{count}</button>
      <hr />
      <Link href="/other">Other</Link>
      <hr />
      <RandomComponent />
    </>
  );
}
