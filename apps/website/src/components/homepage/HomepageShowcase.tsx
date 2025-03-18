import { homepageShowCaseData } from '#/data/homepage.data';
import { MainSection } from '../layout/section/MainSection';
import { HomepageShowcaseList } from './HomepageShowcaseList';

export const HomepageShowcase = () => {
  return (
    <MainSection className="container">
      <h2 className="lg:text-3xl font-medium mb-7">
        {homepageShowCaseData.title}
      </h2>

      <HomepageShowcaseList />
    </MainSection>
  );
};
