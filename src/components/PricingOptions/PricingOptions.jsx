import React, { use } from 'react';
import PricingCard from '../PricingCard/PricingCard';

const PricingOptions = ({ pricingPromise }) => {
    const pricingDataFull = use(pricingPromise);
    const pricingData = pricingDataFull.pricingOptions;
    console.log(pricingData)
  return (
    <div>
      <h2 className="text-5xl">Get our Membership</h2>
      <div className='grid md:grid-cols-3'>
        {
            pricingData.map(pricing => <PricingCard 
            key={pricing.id}    
            pricing={pricing}></PricingCard>)
        }
      </div>
    </div>
  );
};

export default PricingOptions;