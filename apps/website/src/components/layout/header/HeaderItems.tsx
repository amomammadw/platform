import { headerItems } from '#/data/header.data';
import Link from 'next/link';

export const HeaderItems = () => {
  return (
    <>
      {headerItems.map((headerItem) => (
        <li key={headerItem.text}>
          <Link
            href={headerItem.link}
            className="font-light transition-all hover:text-secondary-200"
          >
            {headerItem.text}
          </Link>
        </li>
      ))}
    </>
  );
};
