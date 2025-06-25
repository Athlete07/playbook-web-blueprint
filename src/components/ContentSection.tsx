
import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface ContentSectionProps {
  id: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}

const ContentSection = ({ id, title, subtitle, children, className }: ContentSectionProps) => {
  return (
    <section 
      id={id}
      className={cn('scroll-mt-8 mb-16', className)}
      aria-labelledby={`${id}-heading`}
    >
      <div className="mb-8">
        <h2 
          id={`${id}-heading`}
          className="text-3xl font-bold text-gray-900 mb-3"
        >
          {title}
        </h2>
        {subtitle && (
          <p className="text-xl text-gray-600 leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
      
      <div className="space-y-6">
        {children}
      </div>
    </section>
  );
};

export default ContentSection;
