import { headerItems } from 'apps/website/src/data/header.data';
import Link from 'next/link';
import { HeaderAuthButton } from './HeaderAuthButton';

export const MainHeader = () => {
  return (
    <header className="sticky top-0 py-5 bg-slate-500 shadow-md">
      <nav className="container">
        <ul className="flex w-full gap-10">
          {headerItems.map((headerItem) => (
            <li key={headerItem.text}>
              <Link
                href={headerItem.link}
                className="text-white font-light transition-all hover:text-slate-200"
              >
                {headerItem.text}
              </Link>
            </li>
          ))}

          <li className="last:mr-auto">
            <HeaderAuthButton />
          </li>
        </ul>
      </nav>
    </header>
  );
};
