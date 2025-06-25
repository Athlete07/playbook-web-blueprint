
import { useState, useEffect } from 'react';
import { ChevronDown, Download, BookOpen, Globe, TrendingUp, FileText, Users, Award, ExternalLink, Menu, X, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import Header from '@/components/Header';
import TableOfContents from '@/components/TableOfContents';
import HeroSection from '@/components/HeroSection';
import ContentSection from '@/components/ContentSection';
import GlossaryWidget from '@/components/GlossaryWidget';
import QuizWidget from '@/components/QuizWidget';
import DownloadSection from '@/components/DownloadSection';
import RelatedPlaybooks from '@/components/RelatedPlaybooks';
import Footer from '@/components/Footer';

const Index = () => {
  const [activeSection, setActiveSection] = useState('introduction');
  const [isTocOpen, setIsTocOpen] = useState(false);

  // Sample content data - this would come from CMS in production
  const playbookData = {
    title: "Why Trade? The Global Economic Engine",
    subtitle: "Understanding the fundamental drivers and benefits of international trade",
    description: "Explore how international trade creates prosperity, drives innovation, and connects economies worldwide.",
    heroImage: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1920&h=1080&fit=crop",
    estimatedReadTime: "15 min read",
    difficulty: "Beginner",
    lastUpdated: "December 2024"
  };

  // Handle scroll-based section highlighting
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['introduction', 'core-concepts', 'how-it-works', 'real-world-impact', 'legal-frameworks', 'interactive', 'downloads'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main id="main-content" className="relative">
        <HeroSection data={playbookData} />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8 py-8">
            {/* Table of Contents Sidebar */}
            <aside className="lg:w-80 lg:flex-shrink-0">
              <div className="sticky top-8">
                <TableOfContents 
                  activeSection={activeSection}
                  isOpen={isTocOpen}
                  onToggle={() => setIsTocOpen(!isTocOpen)}
                />
              </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1 max-w-4xl">
              <ContentSection 
                id="introduction"
                title="Introduction"
                subtitle="The Foundation of Global Prosperity"
              >
                <div className="prose prose-lg max-w-none">
                  <p className="text-xl text-gray-700 leading-relaxed mb-6">
                    International trade has been the cornerstone of human civilization for millennia, connecting distant lands, 
                    cultures, and economies. In today's interconnected world, understanding the mechanisms and benefits of 
                    trade is essential for anyone looking to participate in the global economy.
                  </p>
                  
                  <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8">
                    <blockquote className="text-lg italic text-blue-900">
                      "Trade is not about countries competing against each other, but about countries competing together 
                      against poverty, isolation, and economic stagnation."
                      <footer className="text-sm mt-2 text-blue-700">— Global Trade Principles</footer>
                    </blockquote>
                  </div>

                  <p>
                    This playbook will guide you through the fundamental concepts of international trade, exploring why 
                    nations engage in trade, how it benefits all participants, and the frameworks that govern global 
                    commerce in the 21st century.
                  </p>
                </div>
              </ContentSection>

              <ContentSection 
                id="core-concepts"
                title="Core Concepts"
                subtitle="Understanding Trade Fundamentals"
              >
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <Card className="border-green-200 bg-green-50">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-green-800">
                        <TrendingUp className="h-5 w-5" />
                        Comparative Advantage
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-green-700">
                        Countries specialize in producing goods where they have the lowest opportunity cost, 
                        leading to more efficient global resource allocation.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-blue-200 bg-blue-50">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-blue-800">
                        <Globe className="h-5 w-5" />
                        Economic Integration
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-blue-700">
                        The process of eliminating trade barriers and creating deeper economic ties between 
                        nations through agreements and partnerships.
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <div className="bg-gray-100 rounded-lg p-6">
                  <h4 className="font-semibold text-lg mb-4">Key Trade Metrics</h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-blue-600">$28.5T</div>
                      <div className="text-sm text-gray-600">Global Trade Volume</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-green-600">195</div>
                      <div className="text-sm text-gray-600">WTO Member Countries</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-purple-600">15%</div>
                      <div className="text-sm text-gray-600">Average Tariff Reduction</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-orange-600">3.2B</div>
                      <div className="text-sm text-gray-600">People Lifted from Poverty</div>
                    </div>
                  </div>
                </div>
              </ContentSection>

              <ContentSection 
                id="how-it-works"
                title="How Trade Works"
                subtitle="The Mechanics of International Commerce"
              >
                <div className="space-y-6">
                  <div className="bg-white rounded-lg shadow-sm border p-6">
                    <h4 className="font-semibold mb-4 flex items-center gap-2">
                      <Users className="h-5 w-5 text-blue-500" />
                      Trade Flow Process
                    </h4>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="text-center">
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                          <span className="font-bold text-blue-600">1</span>
                        </div>
                        <h5 className="font-medium mb-2">Market Research</h5>
                        <p className="text-sm text-gray-600">Identify opportunities and assess demand in target markets</p>
                      </div>
                      <div className="text-center">
                        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                          <span className="font-bold text-green-600">2</span>
                        </div>
                        <h5 className="font-medium mb-2">Documentation</h5>
                        <p className="text-sm text-gray-600">Prepare all necessary trade documents and compliance materials</p>
                      </div>
                      <div className="text-center">
                        <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                          <span className="font-bold text-purple-600">3</span>
                        </div>
                        <h5 className="font-medium mb-2">Execution</h5>
                        <p className="text-sm text-gray-600">Ship goods and manage payment through secure channels</p>
                      </div>
                    </div>
                  </div>

                  <div className="prose max-w-none">
                    <p>
                      Modern international trade operates through a complex network of agreements, institutions, and 
                      digital platforms that facilitate the exchange of goods and services across borders. Understanding 
                      these mechanisms is crucial for successful participation in global markets.
                    </p>
                  </div>
                </div>
              </ContentSection>

              <ContentSection 
                id="real-world-impact"
                title="Real-World Impact"
                subtitle="Trade's Transformative Effects on Societies"
              >
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-lg mb-4">Economic Benefits</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <Award className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>Job creation in export industries and supporting services</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Award className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>Access to larger markets increases business opportunities</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Award className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>Technology transfer and knowledge sharing</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Award className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>Lower consumer prices through competition</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-lg mb-4">Social Impact</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <Globe className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                        <span>Cultural exchange and international understanding</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Globe className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                        <span>Improved living standards in developing nations</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Globe className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                        <span>Environmental cooperation and sustainability initiatives</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Globe className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                        <span>Peaceful relations through economic interdependence</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </ContentSection>

              <ContentSection 
                id="legal-frameworks"
                title="Legal Frameworks"
                subtitle="The Rules That Govern Global Trade"
              >
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6 mb-6">
                  <h4 className="font-semibold text-lg mb-4 text-blue-900">Key International Organizations</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-white rounded-lg p-4">
                      <h5 className="font-medium text-blue-800 mb-2">World Trade Organization (WTO)</h5>
                      <p className="text-sm text-gray-700">
                        Sets global trade rules and resolves disputes between member countries
                      </p>
                    </div>
                    <div className="bg-white rounded-lg p-4">
                      <h5 className="font-medium text-blue-800 mb-2">International Chamber of Commerce</h5>
                      <p className="text-sm text-gray-700">
                        Develops standards for international trade practices and documentation
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="prose max-w-none">
                  <p>
                    International trade operates within a comprehensive legal framework designed to ensure fair, 
                    transparent, and predictable commerce between nations. These frameworks provide the foundation 
                    for business confidence and economic growth.
                  </p>
                </div>
              </ContentSection>

              <ContentSection 
                id="interactive"
                title="Test Your Knowledge"
                subtitle="Interactive Learning Experience"
              >
                <QuizWidget />
              </ContentSection>

              <ContentSection 
                id="downloads"
                title="Resources & Downloads"
                subtitle="Take Learning Materials With You"
              >
                <DownloadSection />
              </ContentSection>

              <ContentSection 
                id="related-playbooks"
                title="Related Playbooks"
                subtitle="Continue Your Learning Journey"
              >
                <RelatedPlaybooks />
              </ContentSection>
            </div>
          </div>
        </div>

        {/* Glossary Widget */}
        <GlossaryWidget />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
