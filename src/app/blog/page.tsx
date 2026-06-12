import Link from "next/link";
import { getSortedPostsData } from "@/lib/posts";
import { ArrowRight, Calendar, Tag } from "lucide-react";

export default function BlogPage() {
  const allPostsData = getSortedPostsData();

  return (
    <div className="pt-32 pb-20">
      <div className="container px-4 md:px-8">
        <div className="max-w-2xl mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Blog Tecnico</h1>
          <p className="text-secondary text-lg">
            Riflessioni, tutorial e guide approfondite sul mondo dello sviluppo web, 
            performance e architetture enterprise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {allPostsData.map((post) => (
            <Link 
              key={post.slug} 
              href={`/blog/${post.slug}`}
              className="bg-background border border-border rounded-xl overflow-hidden flex flex-col group hover:border-accent/30 transition-all hover:shadow-xl"
            >
              <div className="aspect-video bg-muted flex items-center justify-center text-secondary">
                {/* Placeholder per immagine post */}
                <span className="italic">Blog Post Preview</span>
              </div>
              <div className="p-8">
                <div className="flex items-center gap-4 text-xs font-bold text-accent uppercase tracking-widest mb-4">
                  <span className="flex items-center gap-1">
                    <Calendar size={14} />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Tag size={14} />
                    {post.category}
                  </span>
                </div>
                <h2 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                  {post.title}
                </h2>
                <p className="text-secondary leading-relaxed mb-6">
                  {post.excerpt}
                </p>
                <div className="flex items-center text-primary font-bold group-hover:gap-2 transition-all">
                  Leggi l'articolo <ArrowRight size={18} className="ml-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
