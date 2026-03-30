
import './App.css'
import Navbar from './components/Navbar/Navbar'
// import Hero from './components/Hero/Hero'
import { Suspense } from 'react';
import PricingOptions from './components/PricingOptions/PricingOptions';


const pricingPromise = fetch('pricingData.json').then(res=>res.json());

function App() {

  return (
    <>
      <header>
        <Navbar></Navbar>
        {/* <Hero></Hero> */}
      </header>
      <main>
        <Suspense
          fallback={
            <span className="loading loading-spinner loading-xl"></span>
          }
        >
          <PricingOptions
            pricingPromise={pricingPromise}
          ></PricingOptions>
        </Suspense>
      </main>
    </>
  );
}

export default App
