import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Building2, Briefcase, Warehouse, Home as HomeIcon } from 'lucide-react';
import { PropertyCard } from '../components/PropertyCard';
import { PROPERTIES } from '../constants';
import { PropertyCategory } from '../types';

export const Home: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  
  const categories = [
    { label: 'All', icon: null },
    { label: PropertyCategory.RESIDENTIAL, icon: HomeIcon },
    { label: PropertyCategory.AIRBNB, icon: Building2 },
    { label: PropertyCategory.MULTI_UNIT, icon: Briefcase },
    { label: PropertyCategory.STORAGE, icon: Warehouse },
  ];

  const filteredProperties = activeCategory === 'All' 
    ? PROPERTIES 
    : PROPERTIES.filter(p => p.category === activeCategory);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      
      {/* Search Bar / Categories Section (Sticky-ish feel) */}
      <div className="pt-6 pb-2 px-4 sm:px-6 lg:px-8 border-b border-slate-100 sticky top-16 bg-white z-20">
        
        {/* Fake Search Bar for Aesthetic */}
        <div className="max-w-3xl mx-auto mb-8 hidden md:flex items-center justify-between bg-white border border-slate-200 rounded-full shadow-md hover:shadow-lg transition-shadow py-2.5 px-6 cursor-pointer">
          <div className="flex-1 border-r border-slate-200 px-4">
            <div className="text-xs font-bold text-slate-800">Where</div>
            <div className="text-sm text-slate-500">Eastern Ontario</div>
          </div>
          <div className="flex-1 border-r border-slate-200 px-4">
             <div className="text-xs font-bold text-slate-800">Type</div>
             <div className="text-sm text-slate-500">All rentals</div>
          </div>
          <div className="flex-1 px-4">
             <div className="text-xs font-bold text-slate-800">Who</div>
             <div className="text-sm text-slate-500">Add guests</div>
          </div>
          <div className="bg-emerald-600 rounded-full p-3 text-white ml-4">
            <Search size={16} strokeWidth={3} />
          </div>
        </div>

        {/* Category Filter Scroll */}
        <div className="max-w-7xl mx-auto flex gap-8 overflow-x-auto scrollbar-hide pb-2">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setActiveCategory(cat.label)}
              className={`flex flex-col items-center gap-2 min-w-[64px] cursor-pointer group transition-colors pb-2 border-b-2 ${
                activeCategory === cat.label 
                  ? 'border-emerald-600 text-black' 
                  : 'border-transparent text-slate-500 hover:text-slate-800 hover:border-slate-200'
              }`}
            >
              {cat.icon ? <cat.icon size={24} className={activeCategory === cat.label ? 'text-black' : 'text-slate-500 group-hover:text-slate-800'} /> : <Search size={24} />}
              <span className="text-xs font-medium whitespace-nowrap">{cat.label === 'Short-Term / Airbnb' ? 'Short-Term' : cat.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Main Listing Grid */}
      <main className="flex-grow max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
        {filteredProperties.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-6 gap-y-10">
            {filteredProperties.map(prop => (
              <PropertyCard key={prop.id} property={prop} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <div className="bg-slate-100 p-4 rounded-full mb-4">
               <HomeIcon size={32} className="text-slate-400" />
            </div>
            <h3 className="text-lg font-medium text-slate-900">No properties found</h3>
            <p className="text-slate-500 max-w-sm mt-2">Try adjusting your filters or check back later for new listings.</p>
            <button onClick={() => setActiveCategory('All')} className="mt-6 text-emerald-600 font-semibold hover:underline">
              Show all properties
            </button>
          </div>
        )}
      </main>

       {/* Trust Banner (Smaller, footer-like) */}
       <div className="bg-slate-50 border-t border-slate-200 py-12 mt-auto">
         <div className="max-w-7xl mx-auto px-6">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
             <div>
               <h4 className="font-bold text-slate-900">Verified Ownership</h4>
               <p className="text-sm text-slate-600 mt-1">We own every property listed here. Direct to landlord.</p>
             </div>
             <div>
               <h4 className="font-bold text-slate-900">Premium Standards</h4>
               <p className="text-sm text-slate-600 mt-1">Every unit is inspected and professionally cleaned.</p>
             </div>
             <div>
               <h4 className="font-bold text-slate-900">24/7 Support</h4>
               <p className="text-sm text-slate-600 mt-1">Real local people ready to help whenever you need.</p>
             </div>
           </div>
         </div>
       </div>

    </div>
  );
};