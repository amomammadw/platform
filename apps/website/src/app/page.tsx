import { HomepageHero } from '#/components/homepage/HomepageHero';
import { HomepageShowcase } from '#/components/homepage/HomepageShowcase';
import { HomepageSlider } from '#/components/homepage/HomepageSlider';

export default function Index() {
  return (
    <div>
      <HomepageHero />
      <HomepageShowcase />
      <HomepageSlider />
    </div>
  );
}
