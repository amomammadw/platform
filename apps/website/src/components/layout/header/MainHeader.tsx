import { HeaderAuthButton } from './HeaderAuthButton';
import { useGetServerDevice } from '@platform/utils';
import { HeaderItems } from './HeaderItems';
import { HeaderMobile } from './HeaderMobile';

export const MainHeader = async () => {
  const { type } = await useGetServerDevice();

  return (
    <header className="sticky bg-secondary-1000 top-0 py-3">
      <nav className="container dark">
        <ul className="flex items-center w-full gap-10">
          {type !== 'mobile' ? (
            <>
              <HeaderItems />
              <li className="last:mr-auto">
                <HeaderAuthButton />
              </li>
            </>
          ) : (
            <HeaderMobile />
          )}
        </ul>
      </nav>
    </header>
  );
};
