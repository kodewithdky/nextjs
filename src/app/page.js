import Link from "next/link";

export default function Home() {

  return (
    <main style={{display:'grid', gap:10,}}>
        <Link href="/addproduct">Add Product</Link>
        <Link href="/productlist"> Product List</Link>
    </main>
  );
}
