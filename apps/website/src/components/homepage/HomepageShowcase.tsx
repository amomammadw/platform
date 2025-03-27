import { homepageShowCaseData } from '#/data/homepage.data';
import { MainSection } from '../layout/section/MainSection';
import { HomepageShowcaseList } from './HomepageShowcaseList';

export const HomepageShowcase = () => {
  return (
    <MainSection className="container" title={homepageShowCaseData.title}>
      <HomepageShowcaseList />
    </MainSection>
  );
};
