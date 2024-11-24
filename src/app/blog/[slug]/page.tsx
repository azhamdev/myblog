import { fetchByBlocks, fetchBySlug, notion } from "@/lib/notion"
import bookmarkPlugin from "@notion-render/bookmark-plugin"
import { NotionRenderer } from "@notion-render/client"
import hljsPlugin from "@notion-render/hljs-plugin"

interface PageProps {
  params: {
    slug: string
  }
}

export default async function Page({ params }: PageProps) {
  const post = await fetchBySlug(params.slug)

  if (!post) {
    return <div>Page Not Found</div>
  }

  const blocks = await fetchByBlocks(post.id)

  const renderer = new NotionRenderer({
    client: notion,
  })

  renderer.use(hljsPlugin({}))
  renderer.use(bookmarkPlugin(undefined))

  const html = await renderer.render(...blocks)

  const title =
    post.properties.Title.type === "title"
      ? post.properties.Title.title[0]?.plain_text
      : "Untitled"

  return (
    <div>
      <p className="text-sm text-slate-400 font-semibold mb-2">
        /blog/<span className="text-black">{title}</span>
      </p>
      <div className="prose" dangerouslySetInnerHTML={{ __html: html }}></div>
    </div>
  )
}
