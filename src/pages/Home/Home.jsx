import React, { useState } from "react";
import './home.scss';
import InformationBannerHome from '../../widgets/HomePage/InformationBannerHome/InformationBannerHome'
import ServicesBannerHome from '../../widgets/HomePage/ServicesBannerHome/ServicesBannerHome';
import CompanyBannerHome from "../../widgets/HomePage/CompanyBannerHome/CompanyBannerHome";
import NewsBannerHome from "../../widgets/HomePage/NewsBannerHome/NewsBannerHome";
import AnimationBannerHome from "../../widgets/HomePage/AnimationBannerHome/AnimationBannerHome";

export default function Home({Banner, CatalogBanner}) {

  return (
    <main>
      <Banner />
      <InformationBannerHome/>
      <CatalogBanner/>
      <ServicesBannerHome/>
      <CompanyBannerHome/>
      <NewsBannerHome/>
      <AnimationBannerHome/>
    </main>
  );
}
