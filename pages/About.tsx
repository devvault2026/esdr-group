import React from 'react';

export const About: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-3xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-slate-900 mb-8">More than just a landlord.</h1>
        
        <div className="prose prose-slate prose-lg">
          <p className="lead text-xl text-slate-600 mb-8">
            ESDR Group was founded on a simple principle: <span className="text-slate-900 font-semibold">Treat rentals like homes, and tenants like family.</span>
          </p>

          <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-4">Our Story</h3>
          <p>
            Operating in Eastern Ontario, we saw a gap in the market. Tenants were tired of unresponsive property managers, corporate facelessness, and the rising fear of rental scams. We decided to build something different.
          </p>
          <p>
            We are a locally owned and operated investment group. When you rent from ESDR, you aren't dealing with a call center in another time zone. You're dealing with us—real people who care about the condition of your home and the quality of your stay.
          </p>

          <h3 className="text-2xl font-bold text-slate-900 mt-12 mb-4">Our Values</h3>
          <ul className="space-y-4 list-none pl-0">
            <li className="flex items-start">
              <span className="font-bold text-emerald-700 mr-2">Trust:</span>
              <span>We believe transparency is the foundation of a good landlord-tenant relationship. No hidden fees, clear leases.</span>
            </li>
            <li className="flex items-start">
              <span className="font-bold text-emerald-700 mr-2">Responsiveness:</span>
              <span>We address maintenance issues promptly. A leaky tap isn't just an annoyance; it's our property, and we want it fixed too.</span>
            </li>
            <li className="flex items-start">
              <span className="font-bold text-emerald-700 mr-2">Community:</span>
              <span>We invest in neighborhoods we believe in. We want our properties to add value to the street and the community.</span>
            </li>
          </ul>

          <div className="mt-12 p-6 bg-slate-50 rounded-xl border border-slate-200">
             <p className="italic text-slate-700 font-medium">
               "We focus on long-term ownership. We aren't here to flip houses; we are here to provide stable, quality housing for years to come."
             </p>
          </div>
        </div>
      </div>
    </div>
  );
};