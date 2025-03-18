import { homepageHeroData } from '#/data/homepage.data';
import { MainSection } from '../layout/section/MainSection';
import { HomepageCta } from './HomepageCta';

export const HomepageHero = () => {
  return (
    <MainSection className="bg-secondary-100 dark">
      <div className="container flex md:flex-row flex-col lg:justify-between justify-center items-center gap-5 text-secondary-20">
        <div>
          <h1 className="xl:text-5xl text-secondary-950 lg:text-4xl text-2xl mb-5">
            {homepageHeroData.title}
          </h1>
          <h3 className="font-extralight text-secondary-900">
            {homepageHeroData.subtitle}
          </h3>
        </div>

        <div>
          <HomepageCta />
        </div>
      </div>
    </MainSection>
  );
};
