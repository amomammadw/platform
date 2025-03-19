'use client';
import { homepageShowCaseData } from '#/data/homepage.data';
import { useDialogStore } from '@platform/ui';

export const HomepageShowcaseList = () => {
  const openDialog = useDialogStore((state) => state.openDialog);

  function onClickItem(index: number) {
    openDialog({
      title: homepageShowCaseData.items[index].title,
      content: homepageShowCaseData.items[index].description,
    });
  }

  return (
    <>
      <ul className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-items-center gap-4">
        {homepageShowCaseData.items.map((item, index) => (
          <li
            key={item.title}
            onClick={() => onClickItem(index)}
            className="h-20 xl:last:col-span-1 md:last:col-span-full last:col-span-1 w-full cursor-pointer bg-secondary-50 transition-all hover:bg-secondary-100 flex items-center justify-center rounded-lg"
          >
            {item.title}
          </li>
        ))}
      </ul>
    </>
  );
};
