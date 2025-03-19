import { HomepageHero } from '#/components/homepage/HomepageHero';
import { HomepageShowcase } from '#/components/homepage/HomepageShowcase';
import { Login } from '@platform/auth';
import { ITabItem, Tab } from '@platform/ui';

export default function Index() {
  const items: ITabItem[] = [
    { title: 'asdas', content: 'asdasd' },
    { title: 'asdas2', content: 'Content' },
    { title: 'asdas3', content: 'asdasd3' },
  ];

  return (
    <div>
      <HomepageHero />
      <HomepageShowcase />
      <Tab className="w-full" items={items} />
    </div>
  );
}
