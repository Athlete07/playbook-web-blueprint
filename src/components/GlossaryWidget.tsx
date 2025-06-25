
import { useState } from 'react';
import { ChevronDown, BookOpen, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

const GlossaryWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLetter, setSelectedLetter] = useState('A');

  const glossaryTerms = {
    A: [
      { term: "Absolute Advantage", definition: "The ability of a country to produce a good more efficiently than another country." },
      { term: "Ad Valorem Tariff", definition: "A tariff based on a percentage of the value of the imported goods." }
    ],
    B: [
      { term: "Balance of Trade", definition: "The difference between a country's exports and imports." },
      { term: "Bill of Lading", definition: "A document that serves as a receipt for goods shipped and a contract for their delivery." }
    ],
    C: [
      { term: "Comparative Advantage", definition: "The ability to produce a good at a lower opportunity cost than competitors." },
      { term: "Customs Union", definition: "A trade agreement where member countries eliminate tariffs among themselves." }
    ],
    D: [
      { term: "Dumping", definition: "Selling goods in a foreign market below the price charged in the domestic market." }
    ],
    E: [
      { term: "Export Credit", definition: "Financial assistance provided to exporters to help them sell goods internationally." },
      { term: "Exchange Rate", definition: "The value of one currency in terms of another currency." }
    ]
  };

  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  if (!isOpen) {
    return (
      <div className="fixed bottom-6 right-6 z-40">
        <Button
          onClick={() => setIsOpen(true)}
          className="bg-blue-600 hover:bg-blue-700 shadow-lg rounded-full p-4"
          aria-label="Open glossary"
        >
          <BookOpen className="h-6 w-6" />
        </Button>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-4xl max-h-[80vh] overflow-hidden">
        <CardHeader className="border-b">
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-blue-600" />
              Trade Glossary
            </CardTitle>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(false)}
              aria-label="Close glossary"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </CardHeader>
        
        <CardContent className="p-0">
          <div className="flex h-96">
            {/* Alphabet Navigation */}
            <div className="w-16 bg-gray-50 border-r overflow-y-auto">
              <div className="p-2 space-y-1">
                {alphabet.map((letter) => (
                  <button
                    key={letter}
                    onClick={() => setSelectedLetter(letter)}
                    className={cn(
                      'w-full h-8 text-sm font-medium rounded transition-colors',
                      selectedLetter === letter
                        ? 'bg-blue-600 text-white'
                        : 'text-gray-600 hover:bg-gray-200'
                    )}
                    disabled={!glossaryTerms[letter as keyof typeof glossaryTerms]}
                  >
                    {letter}
                  </button>
                ))}
              </div>
            </div>

            {/* Terms Content */}
            <div className="flex-1 overflow-y-auto">
              <div className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Badge variant="outline">{selectedLetter}</Badge>
                  <span className="text-sm text-gray-600">
                    {glossaryTerms[selectedLetter as keyof typeof glossaryTerms]?.length || 0} terms
                  </span>
                </div>

                <div className="space-y-4">
                  {glossaryTerms[selectedLetter as keyof typeof glossaryTerms]?.map((item, index) => (
                    <div key={index} className="border-b border-gray-200 pb-4 last:border-b-0">
                      <h4 className="font-semibold text-gray-900 mb-2">{item.term}</h4>
                      <p className="text-gray-700 text-sm leading-relaxed">{item.definition}</p>
                    </div>
                  )) || (
                    <p className="text-gray-500 italic">No terms available for letter {selectedLetter}</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default GlossaryWidget;
