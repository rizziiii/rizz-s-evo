"use client";

import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import { FadeIn } from "./motion/FadeIn";

interface Post {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  category: string;
}

const postImages: Record<string, string> = {
  "nextjs-per-business": "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800",
  "impatto-ai-sviluppo": "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
  "futuro-nextjs": "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
  "core-web-vitals": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
};

const BlogPreviewClient = ({ latestPosts }: { latestPosts: Post[] }) => {
  return (
    <section id="blog-preview" className="overflow-hidden">
      <div className="container px-4 md:px-8">
        <FadeIn direction="up">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Dal Mio Blog</h2>
              <p className="text-secondary text-lg">
                Condivido regolarmente approfondimenti tecnici e lezioni imparate sul campo. 
                Ecco i miei ultimi articoli.
              </p>
            </div>
            <Link 
              href="/blog" 
              className="text-primary font-bold hover:text-accent transition-colors flex items-center mt-6 md:mt-0"
            >
              Vai al blog completo <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {latestPosts.map((post, index) => (
            <FadeIn key={post.slug} direction="up" delay={index * 0.1}>
              <Link 
                href={`/blog/${post.slug}`}
                className="group block h-full"
              >
                <div className="aspect-video bg-muted rounded-xl mb-6 flex items-center justify-center border border-border group-hover:border-accent/30 transition-all overflow-hidden relative">
                   <img 
                    src={postImages[post.slug] || "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800"} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                   />
                </div>
                <div className="flex items-center gap-2 text-xs font-bold text-accent uppercase tracking-widest mb-3">
                  <Calendar size={14} />
                  {post.date}
                </div>
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors mb-3">
                  {post.title}
                </h3>
                <p className="text-secondary line-clamp-2 text-sm leading-relaxed">
                  {post.excerpt}
                </p>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPreviewClient;
