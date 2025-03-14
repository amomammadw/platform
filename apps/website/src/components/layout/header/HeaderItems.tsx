import { headerItems } from '#/data/header.data';
import Link from 'next/link';

interface IProps {
  onLinkClick?: () => void;
}

export const HeaderItems = ({ onLinkClick }: IProps) => {
  return (
    <>
      {headerItems.map((headerItem) => (
        <li key={headerItem.text}>
          <Link
            href={headerItem.link}
            onClick={onLinkClick}
            className="font-light transition-all hover:text-secondary-700"
          >
            {headerItem.text}
          </Link>
        </li>
      ))}
    </>
  );
};
