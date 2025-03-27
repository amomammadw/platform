import { ISectionContent } from '#/types/sections.type';
import type { ReactNode } from 'react';

export const homepageHeroData = {
  title: 'به پلتفرم ما خوش آمدید',
  subtitle: 'ما بهترین خدمات را برای موفقیت شما ارائه می‌دهیم.',
  buttonText: 'شروع کنید',
};

export const homepageShowCaseData: ISectionContent = {
  title: 'چرا از سرویس ما استفاده میکنید',
  items: [
    {
      title: '1تایتل',
      description: '1دسکریپشن',
    },
    {
      title: '2تایتل',
      description: '2دسکریپشن',
    },
    {
      title: '3تایتل',
      description: '3دسکریپشن',
    },
  ],
};

export const homepageSliderData: ISectionContent<ReactNode> = {
  title: 'تمامی خدمات ما در یک قاب',
  items: new Array(5).fill(0).map((_, index) => (
    <div
      className="lg:size-96 size-80 mx-auto flex items-center justify-center bg-primary-50"
      key={`slide-item-${index}`}
    >
      Slide Here
    </div>
  )),
};
