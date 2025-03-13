import { HeaderAuthButton } from './HeaderAuthButton';
import { useGetServerDevice } from '@platform/utils';
import { HeaderItems } from './HeaderItems';

export const MainHeader = async () => {
  const { type } = await useGetServerDevice();

  return (
    <header className="sticky bg-white top-0 py-5 shadow-md">
      <nav className="container">
        <ul className="flex w-full gap-10">
          {type !== 'mobile' && (
            <>
              <HeaderItems />
              <li className="last:mr-auto">
                <HeaderAuthButton />
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};
