import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PROPERTIES } from '../constants';
import { Button } from '../components/Button';
import { Star, MapPin, Share, Heart, CheckCircle2, ShieldCheck, User, Wifi, Car, Utensils, Wind } from 'lucide-react';

export const PropertyDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const property = PROPERTIES.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!property) {
    return <div className="p-10 text-center">Property not found</div>;
  }

  // Helper to map string amenities to icons
  const getIcon = (amenity: string) => {
    const lower = amenity.toLowerCase();
    if (lower.includes('wifi')) return <Wifi size={18} />;
    if (lower.includes('parking')) return <Car size={18} />;
    if (lower.includes('kitchen') || lower.includes('dishwasher')) return <Utensils size={18} />;
    if (lower.includes('air') || lower.includes('heat')) return <Wind size={18} />;
    return <CheckCircle2 size={18} />;
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        
        {/* Title Header */}
        <div className="mb-6">
          <h1 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-2">{property.title}</h1>
          <div className="flex flex-wrap justify-between items-center text-sm">
            <div className="flex items-center gap-4 text-slate-800 font-medium">
              <span className="flex items-center gap-1">
                <Star size={14} className="fill-current" /> {property.rating} · 
                <span className="underline cursor-pointer">{property.reviews} reviews</span>
              </span>
              <span className="hidden sm:inline">·</span>
              <span className="flex items-center gap-1 text-slate-600 underline">
                <MapPin size={14} /> {property.location}
              </span>
            </div>
            <div className="flex gap-4 mt-2 sm:mt-0">
              <button className="flex items-center gap-2 px-3 py-2 hover:bg-slate-100 rounded-lg transition-colors text-slate-700 font-medium text-sm">
                <Share size={16} /> Share
              </button>
              <button className="flex items-center gap-2 px-3 py-2 hover:bg-slate-100 rounded-lg transition-colors text-slate-700 font-medium text-sm">
                <Heart size={16} /> Save
              </button>
            </div>
          </div>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-2 h-[300px] md:h-[400px] lg:h-[500px] rounded-2xl overflow-hidden relative mb-12">
          <div className="md:col-span-2 h-full">
            <img 
              src={property.images[0]} 
              alt={property.title} 
              className="w-full h-full object-cover hover:brightness-95 transition-all cursor-pointer" 
            />
          </div>
          <div className="hidden md:grid grid-cols-1 gap-2 h-full">
            <img src={property.images[1]} alt="Interior" className="w-full h-full object-cover hover:brightness-95 transition-all cursor-pointer" />
            <img src={property.images[2]} alt="Interior" className="w-full h-full object-cover hover:brightness-95 transition-all cursor-pointer" />
          </div>
          <div className="hidden md:grid grid-cols-1 gap-2 h-full">
            <img src={property.images[3]} alt="Interior" className="w-full h-full object-cover hover:brightness-95 transition-all cursor-pointer" />
            <img src={property.images[4]} alt="Interior" className="w-full h-full object-cover hover:brightness-95 transition-all cursor-pointer" />
          </div>
          <div className="absolute bottom-4 right-4">
            <button className="bg-white px-4 py-2 rounded-lg border border-slate-900 text-sm font-medium shadow-sm hover:bg-slate-50 transition-colors">
              Show all photos
            </button>
          </div>
        </div>

        {/* Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Left Column: Details */}
          <div className="lg:col-span-2">
            
            {/* Host Info */}
            <div className="flex justify-between items-center border-b border-slate-200 pb-8 mb-8">
              <div>
                <h2 className="text-xl font-semibold text-slate-900 mb-1">
                  {property.category} hosted by ESDR Group
                </h2>
                <p className="text-slate-600">
                  {property.maxGuests > 0 && `${property.maxGuests} guests · `}
                  {property.bedrooms > 0 && `${property.bedrooms} bedrooms · `}
                  {property.bathrooms > 0 && `${property.bathrooms} baths`}
                </p>
              </div>
              <div className="h-12 w-12 rounded-full bg-emerald-700 text-white flex items-center justify-center font-bold text-lg border-2 border-slate-100 shadow-sm">
                E
              </div>
            </div>

            {/* Highlights */}
            <div className="border-b border-slate-200 pb-8 mb-8 space-y-6">
              <div className="flex gap-4">
                <ShieldCheck className="text-emerald-700 w-6 h-6 shrink-0" />
                <div>
                  <h3 className="font-medium text-slate-900">Verified Listing</h3>
                  <p className="text-slate-500 text-sm">ESDR Group owns and manages this property directly.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <User className="text-slate-700 w-6 h-6 shrink-0" />
                <div>
                  <h3 className="font-medium text-slate-900">Professional Management</h3>
                  <p className="text-slate-500 text-sm">Responsive support team available 24/7 for emergencies.</p>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="border-b border-slate-200 pb-8 mb-8">
              <h2 className="text-xl font-semibold text-slate-900 mb-4">About this space</h2>
              <p className="text-slate-700 leading-relaxed whitespace-pre-line">
                {property.description}
              </p>
            </div>

            {/* Amenities */}
            <div className="border-b border-slate-200 pb-8 mb-8">
              <h2 className="text-xl font-semibold text-slate-900 mb-6">What this place offers</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {property.amenities.map((amenity, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-slate-700">
                    {getIcon(amenity)}
                    <span>{amenity}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Sticky Application Card */}
          <div className="lg:col-span-1">
             <div className="sticky top-28 bg-white border border-slate-200 rounded-xl shadow-xl p-6">
                <div className="flex justify-between items-baseline mb-6">
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl font-bold text-slate-900">{property.price}</span>
                    <span className="text-slate-500"> / {property.priceUnit}</span>
                  </div>
                  <div className="flex items-center gap-1 text-sm font-medium text-slate-900">
                    <Star size={14} className="fill-current" /> {property.rating}
                  </div>
                </div>

                <div className="border border-slate-300 rounded-lg mb-4 overflow-hidden">
                  <div className="grid grid-cols-2 border-b border-slate-300">
                     <div className="p-3 border-r border-slate-300">
                        <div className="text-[10px] font-bold uppercase text-slate-600">Check-in</div>
                        <div className="text-sm text-slate-400">Add date</div>
                     </div>
                     <div className="p-3">
                        <div className="text-[10px] font-bold uppercase text-slate-600">Check-out</div>
                        <div className="text-sm text-slate-400">Add date</div>
                     </div>
                  </div>
                  <div className="p-3">
                    <div className="text-[10px] font-bold uppercase text-slate-600">Guests</div>
                    <div className="text-sm text-slate-900">1 guest</div>
                  </div>
                </div>

                <Link to="/apply">
                  <Button fullWidth size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                    {property.priceUnit === 'night' ? 'Reserve' : 'Apply to Rent'}
                  </Button>
                </Link>

                <p className="text-center text-xs text-slate-500 mt-4">
                  You won't be charged yet
                </p>

                {property.priceUnit === 'mo' && (
                  <div className="mt-6 pt-6 border-t border-slate-100 flex justify-between text-sm text-slate-600">
                    <span className="underline">Security Deposit</span>
                    <span>One Month</span>
                  </div>
                )}
             </div>
          </div>

        </div>
      </div>
    </div>
  );
};