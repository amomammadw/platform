import { headerItems } from '#/data/header.data';
import Link from 'next/link';

export const HeaderItems = () => {
  return (
    <>
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
    </>
  );
};
