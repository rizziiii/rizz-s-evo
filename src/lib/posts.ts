import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// Correzione del path: Next.js a volte ha problemi con process.cwd() in certe configurazioni di build.
// Puntiamo esplicitamente alla cartella src/content/blog
const postsDirectory = path.join(process.cwd(), 'src/content/blog');

export function getSortedPostsData() {
  try {
    if (!fs.existsSync(postsDirectory)) {
      console.warn(`Directory non trovata: ${postsDirectory}`);
      return [];
    }

    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData = fileNames
      .filter(fileName => fileName.endsWith('.md'))
      .map((fileName) => {
        const slug = fileName.replace(/\.md$/, '');
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const matterResult = matter(fileContents);

        return {
          slug,
          title: matterResult.data.title || "Senza Titolo",
          date: matterResult.data.date || "2026-01-01",
          excerpt: matterResult.data.excerpt || "",
          category: matterResult.data.category || "Generale",
        };
      });

    return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
  } catch (error) {
    console.error("Errore durante il recupero dei post:", error);
    return [];
  }
}

export function getPostData(slug: string) {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const matterResult = matter(fileContents);

  return {
    slug,
    content: matterResult.content,
    title: matterResult.data.title || "Senza Titolo",
    date: matterResult.data.date || "2026-01-01",
    excerpt: matterResult.data.excerpt || "",
    category: matterResult.data.category || "Generale",
  };
}
