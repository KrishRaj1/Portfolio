import { Link } from 'react-router-dom';
import IconShared from './IconShared';

function Footer() {
  return (
    <footer className="mt-16 border-t border-neutral-200 dark:border-neutral-800 text-sm">
      <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-neutral-600 dark:text-neutral-400">
          © {new Date().getFullYear()} Krish Raj. All rights reserved.
        </div>
        <div className="flex items-center gap-4">
          <a href="mailto:shivharekrishraj@gmail.com" className="underline">Email</a>
          <Link to="https://github.com/KrishRaj1"><IconShared icon={"skill-icons:github-light"} fontsize={20} /></Link>
          <Link to="https://www.linkedin.com/in/krish-raj-shivhare-7a4806251?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><IconShared icon={"devicon:linkedin"} fontsize={20} /></Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;