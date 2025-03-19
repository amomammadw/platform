import {
  Tab as TabPrimitive,
  TabGroup as TabGroupPrimitive,
  TabList as TabListPrimitive,
  TabPanel as TabPanelPrimitive,
  TabPanels as TabPanelsPrimitive,
} from '@headlessui/react';
import { ReactNode, useMemo } from 'react';
import { cn } from '../../utils/cn';

export interface ITabItem {
  title: string;
  content: ReactNode;
}

export interface ITabProps {
  items: ITabItem[];
  className?: string;
  contentClassName?: string;
}

export const Tab = ({ items, className, contentClassName }: ITabProps) => {
  const titleItems = useMemo(() => items.map((item) => item.title), [items]);
  const contentItems = useMemo(
    () => items.map((item) => item.content),
    [items]
  );
  return (
    <TabGroupPrimitive className={cn('transition-all w-fit', className)}>
      <TabListPrimitive
        className={'flex justify-center border-b border-b-secondary-100 mb-5'}
      >
        {titleItems.map((title, index) => (
          <TabPrimitive
            className={
              'outline-none transition-all px-4 py-2 border-b border-b-transparent data-[selected]:border-b-primary-500'
            }
            key={`tab-title-${index}`}
          >
            {title}
          </TabPrimitive>
        ))}
      </TabListPrimitive>

      <TabPanelsPrimitive className={cn('px-2', contentClassName)}>
        {contentItems.map((content, index) => (
          <TabPanelPrimitive key={`tab-content-${index}`}>
            {content}
          </TabPanelPrimitive>
        ))}
      </TabPanelsPrimitive>
    </TabGroupPrimitive>
  );
};
