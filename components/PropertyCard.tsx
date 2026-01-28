import React from 'react';
import { Property } from '../types';
import { Link } from 'react-router-dom';
import { Star, Heart } from 'lucide-react';

interface PropertyCardProps {
  property: Property;
}

export const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  return (
    <Link to={`/properties/${property.id}`} className="group block">
      <div className="flex flex-col h-full">
        {/* Image Container */}
        <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-slate-200">
          <img 
            src={property.images[0]} 
            alt={property.title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {/* Badge */}
          <div className="absolute top-3 left-3">
             <span className={`inline-flex items-center px-2.5 py-1 rounded-md text-xs font-bold shadow-sm ${
                property.available 
                  ? 'bg-white/90 text-slate-800' 
                  : 'bg-slate-800/90 text-white'
              }`}>
                {property.available ? 'Guest Favorite' : 'Leased'}
              </span>
          </div>
          {/* Like Button (Visual Only) */}
          <button className="absolute top-3 right-3 p-2 rounded-full hover:bg-white/10 transition-colors">
            <Heart size={20} className="text-white fill-black/20" />
          </button>
        </div>
        
        {/* Content */}
        <div className="mt-3 flex justify-between items-start">
          <div>
            <h3 className="font-semibold text-slate-900 leading-tight group-hover:underline decoration-1 underline-offset-2">
              {property.location}
            </h3>
            <p className="text-slate-500 text-sm mt-1">
              {property.title}
            </p>
            <p className="text-slate-500 text-sm mt-0.5">
               {property.bedrooms > 0 ? `${property.bedrooms} beds` : property.category}
            </p>
            <div className="flex items-baseline gap-1 mt-2">
              <span className="font-semibold text-slate-900">{property.price}</span>
              <span className="text-slate-500 text-sm">/ {property.priceUnit}</span>
            </div>
          </div>
          
          <div className="flex items-center gap-1 text-sm text-slate-900">
            <Star size={14} className="fill-current" />
            <span>{property.rating}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};