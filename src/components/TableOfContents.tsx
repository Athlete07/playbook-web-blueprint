
import { ChevronDown, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface TableOfContentsProps {
  activeSection: string;
  isOpen: boolean;
  onToggle: () => void;
}

const TableOfContents = ({ activeSection, isOpen, onToggle }: TableOfContentsProps) => {
  const sections = [
    { id: 'introduction', title: 'Introduction', subsections: [] },
    { id: 'core-concepts', title: 'Core Concepts', subsections: ['Comparative Advantage', 'Economic Integration'] },
    { id: 'how-it-works', title: 'How Trade Works', subsections: ['Trade Flow Process', 'Documentation'] },
    { id: 'real-world-impact', title: 'Real-World Impact', subsections: ['Economic Benefits', 'Social Impact'] },
    { id: 'legal-frameworks', title: 'Legal Frameworks', subsections: ['WTO', 'International Organizations'] },
    { id: 'interactive', title: 'Test Your Knowledge', subsections: [] },
    { id: 'downloads', title: 'Downloads', subsections: [] }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200">
      {/* Header */}
      <div 
        className="flex items-center justify-between p-4 border-b border-gray-200 cursor-pointer lg:cursor-default"
        onClick={onToggle}
      >
        <div className="flex items-center gap-2">
          <BookOpen className="h-5 w-5 text-blue-600" />
          <h3 className="font-semibold text-gray-900">Table of Contents</h3>
        </div>
        <Button
          variant="ghost"
          size="sm"
          className="lg:hidden"
          aria-label={isOpen ? 'Collapse table of contents' : 'Expand table of contents'}
        >
          <ChevronDown className={cn('h-4 w-4 transition-transform', isOpen && 'rotate-180')} />
        </Button>
      </div>

      {/* Content */}
      <div className={cn('lg:block', !isOpen && 'hidden')}>
        <nav className="p-4 space-y-2" role="navigation" aria-label="Table of contents">
          {sections.map((section) => (
            <div key={section.id}>
              <button
                onClick={() => scrollToSection(section.id)}
                className={cn(
                  'w-full text-left px-3 py-2 rounded-md text-sm transition-colors duration-200',
                  activeSection === section.id
                    ? 'bg-blue-100 text-blue-700 font-medium'
                    : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                )}
              >
                {section.title}
              </button>
              
              {section.subsections.length > 0 && (
                <div className="ml-4 mt-1 space-y-1">
                  {section.subsections.map((subsection) => (
                    <div
                      key={subsection}
                      className="px-3 py-1 text-xs text-gray-600 hover:text-gray-800 cursor-pointer"
                    >
                      {subsection}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Progress Indicator */}
        <div className="px-4 pb-4 border-t border-gray-200 mt-4 pt-4">
          <div className="text-xs text-gray-600 mb-2">Reading Progress</div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(sections.findIndex(s => s.id === activeSection) + 1) / sections.length * 100}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableOfContents;
