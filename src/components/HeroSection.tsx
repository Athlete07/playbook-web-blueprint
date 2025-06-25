
import { Clock, BookOpen, TrendingUp, Download, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface HeroSectionProps {
  data: {
    title: string;
    subtitle: string;
    description: string;
    heroImage: string;
    estimatedReadTime: string;
    difficulty: string;
    lastUpdated: string;
  };
}

const HeroSection = ({ data }: HeroSectionProps) => {
  return (
    <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={data.heroImage} 
          alt="Global trade visualization"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-indigo-900/90"></div>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="max-w-4xl">
          {/* Badges */}
          <div className="flex flex-wrap gap-2 mb-6">
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              <BookOpen className="w-3 h-3 mr-1" />
              {data.difficulty}
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              <Clock className="w-3 h-3 mr-1" />
              {data.estimatedReadTime}
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              <TrendingUp className="w-3 h-3 mr-1" />
              Updated {data.lastUpdated}
            </Badge>
          </div>

          {/* Title */}
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
            {data.title}
          </h1>

          {/* Subtitle */}
          <h2 className="text-xl lg:text-2xl text-blue-100 mb-8 leading-relaxed">
            {data.subtitle}
          </h2>

          {/* Description */}
          <p className="text-lg text-blue-50 mb-10 leading-relaxed max-w-3xl">
            {data.description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <Button 
              size="lg" 
              className="bg-white text-blue-900 hover:bg-blue-50 font-semibold px-8 py-3"
            >
              <Play className="w-5 h-5 mr-2" />
              Start Learning
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3"
            >
              <Download className="w-5 h-5 mr-2" />
              Download PDF
            </Button>
          </div>

          {/* Key Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-12 border-t border-white/20">
            <div className="text-center">
              <div className="text-2xl lg:text-3xl font-bold text-white mb-1">7</div>
              <div className="text-sm text-blue-200">Chapters</div>
            </div>
            <div className="text-center">
              <div className="text-2xl lg:text-3xl font-bold text-white mb-1">15</div>
              <div className="text-sm text-blue-200">Minutes</div>
            </div>
            <div className="text-center">
              <div className="text-2xl lg:text-3xl font-bold text-white mb-1">5</div>
              <div className="text-sm text-blue-200">Downloads</div>
            </div>
            <div className="text-center">
              <div className="text-2xl lg:text-3xl font-bold text-white mb-1">Quiz</div>
              <div className="text-sm text-blue-200">Included</div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-48 translate-x-48"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-white/5 rounded-full translate-y-36 -translate-x-36"></div>
    </section>
  );
};

export default HeroSection;
