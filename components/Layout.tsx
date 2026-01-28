import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Home, Building2, Info, Mail } from 'lucide-react';
import { COMPANY_NAME } from '../constants';
import { Button } from './Button';
import { ChatWidget } from './ChatWidget';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'Properties', path: '/properties', icon: Building2 },
    { name: 'About', path: '/about', icon: Info },
    { name: 'Contact', path: '/contact', icon: Mail },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      {/* Navigation */}
      <nav className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="flex items-center space-x-2">
                <div className="h-8 w-8 bg-emerald-700 rounded-lg flex items-center justify-center text-white font-bold">E</div>
                <span className="text-xl font-bold text-slate-900 tracking-tight">{COMPANY_NAME}</span>
              </Link>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-sm font-medium transition-colors hover:text-emerald-700 ${
                    location.pathname === link.path ? 'text-emerald-700' : 'text-slate-600'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link to="/apply">
                <Button size="sm">Apply Now</Button>
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="flex items-center md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-slate-600 hover:text-slate-900 p-2"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav Panel */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-200">
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center space-x-3 px-3 py-4 rounded-md text-base font-medium ${
                    location.pathname === link.path
                      ? 'bg-emerald-50 text-emerald-700'
                      : 'text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  <link.icon size={20} />
                  <span>{link.name}</span>
                </Link>
              ))}
              <div className="pt-4 px-3">
                <Link to="/apply" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button fullWidth>Apply to Rent</Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-white text-lg font-bold mb-4">{COMPANY_NAME}</h3>
              <p className="max-w-xs text-slate-400 text-sm leading-relaxed">
                Providing high-quality rental homes and commercial spaces across Eastern Ontario. 
                Built on trust, transparency, and family values.
              </p>
            </div>
            <div>
              <h4 className="text-white font-medium mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/properties" className="hover:text-white">Available Rentals</Link></li>
                <li><Link to="/apply" className="hover:text-white">Tenant Application</Link></li>
                <li><Link to="/about" className="hover:text-white">Our Values</Link></li>
                <li><Link to="/contact" className="hover:text-white">Report Maintenance</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-medium mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>Eastern Ontario, Canada</li>
                <li>rentals@esdrgroup.ca</li>
                <li>Mon-Fri: 9am - 5pm</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-12 pt-8 text-xs text-slate-500 text-center">
            &copy; {new Date().getFullYear()} {COMPANY_NAME}. All rights reserved.
          </div>
        </div>
      </footer>

      {/* AI Chat Widget */}
      <ChatWidget />
    </div>
  );
};