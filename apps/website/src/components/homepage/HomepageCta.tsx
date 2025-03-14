import { homepageData } from '#/data/homepage.data';
import { Button } from '@platform/ui';

export const HomepageCta = () => {
  return (
    <div className="rounded-lg bg-secondary-1100 gap-4 p-4 grid grid-cols-3">
      {[...Array(9)].map((_, index) => (
        <div
          key={index}
          className="border transition-all hover:bg-secondary-850 cursor-pointer size-20 rounded-md flex items-center justify-center"
        >
          آیتم {index + 1}
        </div>
      ))}
      <Button block className="col-span-full">
        {homepageData.buttonText}
      </Button>
    </div>
  );
};
