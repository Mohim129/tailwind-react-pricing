import { CircleCheck } from 'lucide-react';
import React from 'react';

const PricingCard = ({pricing}) => {
    // console.log(pricing)
    const {name, price, description, features} = pricing
    return (
      <div>
        {/* card header */}
        <div className="border bg-accent-content rounded-2xl p-4 m-6 ">
          <h2 className="text-7xl">{name}</h2>
          <h4 className="text-3xl">{price}</h4>
          <div>
            {/* card body */}
            <p>{description}</p>
            <ul className='p-5'>
              {features.map((feature) => (
                <li className='flex gap-4 mb-4'><CircleCheck></CircleCheck>{feature}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
};

export default PricingCard;