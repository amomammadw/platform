import { HomepageHero } from '#/components/homepage/HomepageHero';
import { HomepageShowcase } from '#/components/homepage/HomepageShowcase';
import { Switch } from '@platform/ui';

export default function Index() {
  return (
    <div>
      <HomepageHero />
      <HomepageShowcase />
    </div>
  );
}
