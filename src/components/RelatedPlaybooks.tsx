
import { ExternalLink, Clock, BookOpen, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const RelatedPlaybooks = () => {
  const playbooks = [
    {
      title: "How to Identify Exportable Products",
      description: "Learn systematic approaches to evaluate your products for international markets and identify the most promising opportunities.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=200&fit=crop",
      difficulty: "Intermediate",
      readTime: "20 min",
      status: "Coming Soon",
      category: "Product Development"
    },
    {
      title: "Understanding Incoterms",
      description: "Master the international commercial terms that define responsibilities in global trade transactions.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=200&fit=crop",
      difficulty: "Advanced",
      readTime: "25 min",
      status: "Available",
      category: "Legal & Compliance"
    },
    {
      title: "Trade Documentation Basics",
      description: "Navigate the essential paperwork and documentation required for successful international trade operations.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=200&fit=crop",
      difficulty: "Beginner",
      readTime: "18 min",
      status: "Available",
      category: "Documentation"
    },
    {
      title: "Export Pricing & Costing Toolkit",
      description: "Develop competitive pricing strategies that account for all costs and market factors in international sales.",
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400&h=200&fit=crop",
      difficulty: "Intermediate",
      readTime: "22 min",
      status: "Coming Soon",
      category: "Finance & Pricing"
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-800';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'Advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Available': return 'bg-blue-100 text-blue-800';
      case 'Coming Soon': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-8">
      {/* Introduction */}
      <div className="text-center max-w-2xl mx-auto">
        <p className="text-lg text-gray-600 leading-relaxed">
          Continue building your trade expertise with these carefully curated playbooks. 
          Each guide builds upon fundamental concepts while diving deeper into specific areas of international commerce.
        </p>
      </div>

      {/* Playbooks Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {playbooks.map((playbook, index) => (
          <Card key={index} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
            {/* Image */}
            <div className="relative overflow-hidden">
              <img 
                src={playbook.image} 
                alt={playbook.title}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-4 left-4">
                <Badge className={getStatusColor(playbook.status)}>
                  {playbook.status}
                </Badge>
              </div>
            </div>

            <CardHeader>
              {/* Category and Metadata */}
              <div className="flex items-center justify-between mb-2">
                <Badge variant="outline" className="text-xs">
                  {playbook.category}
                </Badge>
                <div className="flex items-center gap-3 text-xs text-gray-500">
                  <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {playbook.readTime}
                  </span>
                  <Badge className={getDifficultyColor(playbook.difficulty)} variant="secondary">
                    {playbook.difficulty}
                  </Badge>
                </div>
              </div>

              <CardTitle className="group-hover:text-blue-600 transition-colors">
                {playbook.title}
              </CardTitle>
              <CardDescription>
                {playbook.description}
              </CardDescription>
            </CardHeader>

            <CardContent>
              <Button 
                variant={playbook.status === 'Available' ? 'default' : 'outline'}
                className="w-full flex items-center gap-2"
                disabled={playbook.status === 'Coming Soon'}
              >
                {playbook.status === 'Available' ? (
                  <>
                    <BookOpen className="h-4 w-4" />
                    Read Playbook
                  </>
                ) : (
                  <>
                    <TrendingUp className="h-4 w-4" />
                    Notify Me
                  </>
                )}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Learning Path Suggestion */}
      <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-8">
        <div className="text-center max-w-3xl mx-auto">
          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            Recommended Learning Path
          </h3>
          <p className="text-gray-600 mb-6">
            For optimal learning, we recommend following this sequence: Start with trade basics, 
            then move to product identification, understand documentation requirements, 
            master pricing strategies, and finally dive into legal frameworks.
          </p>
          
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            <Badge variant="outline" className="px-3 py-1">1. Why Trade?</Badge>
            <span className="text-gray-400">→</span>
            <Badge variant="outline" className="px-3 py-1">2. Product ID</Badge>
            <span className="text-gray-400">→</span>
            <Badge variant="outline" className="px-3 py-1">3. Documentation</Badge>
            <span className="text-gray-400">→</span>
            <Badge variant="outline" className="px-3 py-1">4. Pricing</Badge>
            <span className="text-gray-400">→</span>
            <Badge variant="outline" className="px-3 py-1">5. Incoterms</Badge>
          </div>

          <Button className="bg-green-600 hover:bg-green-700">
            <ExternalLink className="h-4 w-4 mr-2" />
            View Complete Learning Path
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RelatedPlaybooks;
