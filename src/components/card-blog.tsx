import Link from "next/link"
import React from "react"

interface Props {
  link: string
  title: string
}

export const CardBlog = ({ link, title }: Props) => {
  return (
    <div className="w-fit border border-slate-500 px-4 py-2 rounded-lg">
      <Link className="text-black hover:underline" href={link}>
        {title}
      </Link>
    </div>
  )
}
