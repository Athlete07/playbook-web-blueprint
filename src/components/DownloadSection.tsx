
import { Download, FileText, CheckSquare, Book, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const DownloadSection = () => {
  const downloads = [
    {
      title: "Complete Playbook PDF",
      description: "Full comprehensive guide with all sections, examples, and resources",
      icon: Book,
      fileSize: "2.4 MB",
      format: "PDF",
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      title: "Trade Basics Checklist",
      description: "Essential steps and requirements for starting international trade",
      icon: CheckSquare,
      fileSize: "145 KB",
      format: "PDF",
      color: "text-green-600",
      bgColor: "bg-green-50"
    },
    {
      title: "Key Terms Summary",
      description: "Glossary of important trade terminology and definitions",
      icon: FileText,
      fileSize: "380 KB",
      format: "PDF",
      color: "text-purple-600",
      bgColor: "bg-purple-50"
    },
    {
      title: "Resource Links",
      description: "Curated list of useful websites, tools, and additional reading",
      icon: ExternalLink,
      fileSize: "95 KB",
      format: "PDF",
      color: "text-orange-600",
      bgColor: "bg-orange-50"
    }
  ];

  const handleDownload = (title: string) => {
    // In a real application, this would trigger the actual download
    console.log(`Downloading: ${title}`);
    // Simulate download
    const link = document.createElement('a');
    link.href = '#';
    link.download = `${title.toLowerCase().replace(/\s+/g, '-')}.pdf`;
    link.click();
  };

  return (
    <div className="space-y-8">
      {/* Introduction */}
      <div className="text-center max-w-2xl mx-auto">
        <p className="text-lg text-gray-600 leading-relaxed">
          Take your learning offline with our comprehensive collection of downloadable resources. 
          Each document is designed to complement your reading and provide practical tools for implementation.
        </p>
      </div>

      {/* Download Cards Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {downloads.map((item, index) => (
          <Card key={index} className="group hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-lg ${item.bgColor}`}>
                  <item.icon className={`h-6 w-6 ${item.color}`} />
                </div>
                <div className="flex-1">
                  <CardTitle className="text-lg group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </CardTitle>
                  <CardDescription className="mt-2">
                    {item.description}
                  </CardDescription>
                  <div className="flex items-center gap-4 mt-3 text-sm text-gray-500">
                    <span>{item.format}</span>
                    <span>•</span>
                    <span>{item.fileSize}</span>
                  </div>
                </div>
              </div>
            </CardHeader>
            
            <CardContent>
              <Button 
                onClick={() => handleDownload(item.title)}
                className="w-full flex items-center gap-2"
                variant="outline"
              >
                <Download className="h-4 w-4" />
                Download
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Bulk Download Option */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-8 text-center">
        <h3 className="text-xl font-semibold text-gray-900 mb-3">
          Download Everything
        </h3>
        <p className="text-gray-600 mb-6 max-w-md mx-auto">
          Get all resources in one convenient package. Perfect for offline reading and reference.
        </p>
        <Button 
          size="lg"
          onClick={() => handleDownload('Complete Resource Package')}
          className="bg-blue-600 hover:bg-blue-700"
        >
          <Download className="h-5 w-5 mr-2" />
          Download All Resources (3.1 MB)
        </Button>
      </div>

      {/* Usage Instructions */}
      <div className="bg-gray-50 rounded-lg p-6">
        <h4 className="font-semibold text-gray-900 mb-3">How to Use These Resources</h4>
        <ul className="space-y-2 text-sm text-gray-700">
          <li className="flex items-start gap-2">
            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
            <span>Start with the Complete Playbook PDF for comprehensive understanding</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
            <span>Use the checklist as a practical implementation guide</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
            <span>Keep the key terms summary handy for quick reference</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
            <span>Explore additional resources for deeper learning</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DownloadSection;
