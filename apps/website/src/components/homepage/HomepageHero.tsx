import { HomepageCta } from './HomepageCta';

export const HomepageHero = () => {
  return (
    <section className="bg-secondary-100 dark py-10">
      <div className="container flex md:flex-row flex-col lg:justify-between justify-center items-center gap-5 text-secondary-20">
        <div>
          <h1 className="xl:text-5xl text-secondary-950 lg:text-3xl text-2xl mb-5">
            تایتل نسبتا طولانی اینجا میاد
          </h1>
          <h3 className="font-extralight text-secondary-900">
            ساب تایتل اینجا
          </h3>
        </div>

        <div>
          <HomepageCta />
        </div>
      </div>
    </section>
  );
};
