import Link from "next/link"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="p-10">
      <Link href={"/"}>Back</Link>
      <main className="">
        <div className="p-10">{children}</div>
      </main>
    </div>
  )
}
