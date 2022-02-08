import React from 'react';

import AboutUs from 'components/pages/home/about-us/about-us';
import CustomersAndPartners from 'components/pages/home/customers-and-partners/customers-and-partners';
import Hero from 'components/pages/home/hero/hero';
import Slider from 'components/pages/home/slider/slider';
import Technologies from 'components/pages/home/technologies';
import Values from 'components/pages/home/values/values';
import MainLayout from 'layouts/main';

const IndexPage = () => (
  <MainLayout>
    <Hero />
    <Values />
    <Slider />
    <CustomersAndPartners />
    <AboutUs />
    <Technologies />
  </MainLayout>
);

export default IndexPage;
