import React from 'react';
import Header from 'components/Header';
import PromoBar from 'components/PromoBar';
import Category from 'components/Category';
import Product from 'components/Product';
import Sale from 'components/Sale';
import Subscribe from 'components/Subscribe';
import Footer from 'components/Footer';
import Hero from 'components/Hero';

const App: React.FC = () => {
  return (
    <div>
      <PromoBar />
      <Header />
      <Hero />
      <Category />
      <Product />
      <Sale />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default App;
