import Link from "next/link";
import { getPostData, getSortedPostsData } from "@/lib/posts";
import { ArrowLeft, Calendar, Tag } from "lucide-react";
import { marked } from "marked";

// Mappa immagini (stessa usata nel preview per coerenza)
const postImages: Record<string, string> = {
  "nextjs-per-business": "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=1200",
  "impatto-ai-sviluppo": "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1200",
  "futuro-nextjs": "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200",
  "core-web-vitals": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200"
};

// Genera i parametri statici per tutte le pagine del blog
export async function generateStaticParams() {
  const posts = getSortedPostsData();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const postData = getPostData(slug);
  const contentHtml = marked(postData.content);
  const imageUrl = postImages[slug] || "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1200";

  return (
    <article className="pt-32 pb-20">
      <div className="container px-4 md:px-8 max-w-4xl mx-auto">
        <Link 
          href="/blog" 
          className="inline-flex items-center text-primary font-bold mb-12 hover:gap-2 transition-all group"
        >
          <ArrowLeft size={18} className="mr-2 group-hover:-translate-x-1 transition-transform" /> Torna al blog
        </Link>

        <header className="mb-12">
          <div className="flex items-center gap-4 text-sm font-bold text-accent uppercase tracking-widest mb-6">
            <span className="flex items-center gap-1">
              <Calendar size={16} />
              {postData.date}
            </span>
            <span className="flex items-center gap-1">
              <Tag size={16} />
              {postData.category}
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
            {postData.title}
          </h1>
        </header>

        <div className="aspect-video rounded-2xl mb-12 overflow-hidden shadow-2xl border border-border">
          <img 
            src={imageUrl} 
            alt={postData.title}
            className="w-full h-full object-cover"
          />
        </div>

        <div 
          className="prose prose-lg md:prose-xl dark:prose-invert max-w-none text-secondary leading-relaxed 
          prose-headings:text-foreground prose-a:text-primary hover:prose-a:text-accent prose-strong:text-foreground"
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />
      </div>
    </article>
  );
}
