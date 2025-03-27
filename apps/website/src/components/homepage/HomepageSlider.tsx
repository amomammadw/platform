import { Carousel } from '@platform/ui';
import { MainSection } from '../layout/section/MainSection';
import { homepageSliderData } from '#/data/homepage.data';

export const HomepageSlider = () => {
  return (
    <MainSection title={homepageSliderData.title} className="container">
      <Carousel
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        loop
        slides={homepageSliderData.items}
      />
    </MainSection>
  );
};
