import { homepageShowCaseData } from '#/data/homepage.data';
import { MainSection } from '../layout/section/MainSection';

export const HomepageShowcase = () => {
  return (
    <MainSection>
      <h2>{homepageShowCaseData.title}</h2>
      <ul>
        {homepageShowCaseData.items.map((item) => (
          <li key={item.title}>{item.title}</li>
        ))}
      </ul>
    </MainSection>
  );
};
