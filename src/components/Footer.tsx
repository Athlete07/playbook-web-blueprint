
import { Globe, Mail, Facebook, Linkedin, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';

const Footer = () => {
  const footerLinks = {
    Playbooks: [
      { name: 'Trade Fundamentals', href: '#' },
      { name: 'Export Strategies', href: '#' },
      { name: 'Import Procedures', href: '#' },
      { name: 'Digital Trade', href: '#' }
    ],
    Resources: [
      { name: 'Downloads', href: '#' },
      { name: 'Templates', href: '#' },
      { name: 'Calculators', href: '#' },
      { name: 'Webinars', href: '#' }
    ],
    Support: [
      { name: 'Help Center', href: '#' },
      { name: 'Contact Us', href: '#' },
      { name: 'Community', href: '#' },
      { name: 'Feedback', href: '#' }
    ],
    Company: [
      { name: 'About Us', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' }
    ]
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Globe className="w-5 h-5 text-white" />
                </div>
                <span className="font-bold text-xl">Global Trade Academy</span>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed mb-6 max-w-md">
                Empowering businesses and individuals with comprehensive trade education, 
                practical tools, and expert insights for success in the global marketplace.
              </p>
              
              {/* Newsletter Signup */}
              <div className="space-y-3">
                <h4 className="font-semibold text-sm">Stay Updated</h4>
                <div className="flex gap-2">
                  <Input 
                    placeholder="Enter your email" 
                    className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                  />
                  <Button size="sm" className="bg-blue-600 hover:bg-blue-700 flex-shrink-0">
                    <Mail className="h-4 w-4" />
                  </Button>
                </div>
                <p className="text-xs text-gray-400">
                  Get weekly insights and new playbook notifications
                </p>
              </div>
            </div>

            {/* Links Sections */}
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h4 className="font-semibold text-sm mb-4">{category}</h4>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.name}>
                      <a 
                        href={link.href}
                        className="text-gray-300 hover:text-white text-sm transition-colors duration-200"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <Separator className="bg-gray-800" />

        {/* Bottom Footer */}
        <div className="py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-gray-400">
            © 2024 Global Trade Academy. All rights reserved.
          </div>
          
          {/* Social Links */}
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-400">Follow us:</span>
            <div className="flex space-x-3">
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white p-2">
                <Facebook className="h-4 w-4" />
                <span className="sr-only">Facebook</span>
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white p-2">
                <Twitter className="h-4 w-4" />
                <span className="sr-only">Twitter</span>
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white p-2">
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
