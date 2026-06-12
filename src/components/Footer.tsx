import Link from "next/link";
import { Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted border-t border-border py-12 md:py-20">
      <div className="container px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="text-2xl font-bold text-primary tracking-tight uppercase italic">
              Rizz&apos;s <span className="text-accent">Evo</span>
            </Link>
            <p className="mt-4 text-secondary max-w-sm leading-relaxed">
              Sviluppatore Full-Stack specializzato in soluzioni digitali scalabili e performanti per aziende moderne.
            </p>
            <div className="flex space-x-5 mt-6">
              <Link href="#" className="text-secondary hover:text-primary transition-colors">
                <Mail size={20} />
              </Link>
              <Link href="#" className="text-secondary hover:text-primary transition-colors">
                <Mail size={20} />
              </Link>
              <Link href="#" className="text-secondary hover:text-primary transition-colors">
                <Mail size={20} />
              </Link>
              <Link href="mailto:simorizz569@gmail.com" className="text-secondary hover:text-primary transition-colors">
                <Mail size={20} />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-foreground mb-6">Navigazione</h3>
            <ul className="space-y-4">
              <li><Link href="#about" className="text-secondary hover:text-primary transition-colors">Chi Sono</Link></li>
              <li><Link href="#projects" className="text-secondary hover:text-primary transition-colors">Progetti</Link></li>
              <li><Link href="#experience" className="text-secondary hover:text-primary transition-colors">Esperienza</Link></li>
              <li><Link href="/blog" className="text-secondary hover:text-primary transition-colors">Blog</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-foreground mb-6">Contatti</h3>
            <ul className="space-y-4">
              <li className="text-secondary">Forlì, Italia</li>
              <li>
                <a href="mailto:simorizz569@gmail.com" className="text-secondary hover:text-primary transition-colors">
                  simorizz569@gmail.com
                </a>
              </li>
              <li className="text-secondary">+39 347 946 7266</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center text-sm text-secondary">
          <p>© {new Date().getFullYear()} Portfolio. Tutti i diritti riservati.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-primary transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
