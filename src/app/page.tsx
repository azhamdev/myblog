import { CardBlog } from "@/components/card-blog"
import { fetchPages } from "@/lib/notion"

export default async function Home() {
  const posts = await fetchPages()
  return (
    <div className="p-10">
      <div className="flex flex-col gap-4">
        {posts.results.map((post: any) => {
          return (
            <div key={post.id}>
              <CardBlog
                link={`/blog/${post.properties.slug.rich_text[0].plain_text}`}
                title={post.properties.Title.title[0].plain_text}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}
