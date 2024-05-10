import Link from "next/link";

export default function Other({ count, onAddCount }) {
  console.log("RENDER OTHER");
  return (
    <>
      Current Count: {count}
      <button onClick={onAddCount}>{count}</button>
      <hr />
      <Link href="/">Back to Home</Link>
    </>
  );
}
