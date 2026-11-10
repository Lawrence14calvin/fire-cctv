/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { TopBar } from './components/TopBar';
import { Hero } from './components/Hero';
import { KenyanStandardsSection } from './components/KenyanStandardsSection';
import { ServicesOverview } from './components/ServicesOverview';
import { PricingPackages } from './components/PricingPackages';
import { InteractiveQuoteEstimator } from './components/InteractiveQuoteEstimator';
import { ProjectPortfolio } from './components/ProjectPortfolio';
import { DedicatedInquiryForm, PreloadedInquiryData } from './components/DedicatedInquiryForm';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { PackageItem } from './data/kenyaData';

export default function App() {
  const [preloadedInquiry, setPreloadedInquiry] = useState<PreloadedInquiryData | null>(null);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenInquiry = (serviceName?: string) => {
    if (serviceName) {
      setPreloadedInquiry({
        serviceType: serviceName,
        notes: `Customer requested inquiry for ${serviceName}`
      });
    }
    scrollToSection('inquiry');
  };

  const handleOpenEstimator = () => {
    scrollToSection('estimator');
  };

  const handleSelectPackage = (pkg: PackageItem) => {
    setPreloadedInquiry({
      serviceType: pkg.name,
      propertyType: pkg.target === 'residential' ? 'Residential Home / Villa' : 'Commercial Office / Plaza',
      estimatedCost: pkg.priceFormatted,
      notes: `Interested in standard package: ${pkg.name} (${pkg.priceFormatted}). Features: ${pkg.features.slice(0, 3).join(', ')}.`
    });
    scrollToSection('inquiry');
  };

  const handleTransferEstimatorQuote = (data: {
    propertyType: string;
    serviceType: string;
    points: number;
    county: string;
    estimatedCost: string;
    selectedAddons: string[];
  }) => {
    setPreloadedInquiry({
      propertyType: data.propertyType,
      serviceType: data.serviceType,
      county: data.county,
      estimatedCost: data.estimatedCost,
      notes: `Calculated Estimate: ${data.estimatedCost} for ${data.points} points in ${data.county}. Add-ons: ${data.selectedAddons.join(', ') || 'None'}.`
    });
    scrollToSection('inquiry');
  };

  const handleInquireSimilarProject = (projectName: string) => {
    setPreloadedInquiry({
      notes: `Inquiring about engineering design similar to completed portfolio site: "${projectName}". Please advise on feasibility and site survey.`
    });
    scrollToSection('inquiry');
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-red-600 selection:text-white">
      {/* 3-Zone Top Navigation Bar & Kenyan Regulatory Strip */}
      <TopBar onOpenInquiry={handleOpenInquiry} />

      <main className="flex-grow">
        {/* Hero Section */}
        <Hero
          onOpenInquiry={handleOpenInquiry}
          onOpenEstimator={handleOpenEstimator}
        />

        {/* National Standards & Regulatory Compliance */}
        <KenyanStandardsSection />

        {/* Services Scope: Residential & Commercial */}
        <ServicesOverview onSelectService={handleOpenInquiry} />

        {/* Transparent Local Pricing in KES */}
        <PricingPackages onSelectPackage={handleSelectPackage} />

        {/* Interactive Kenyan Project Cost Estimator */}
        <InteractiveQuoteEstimator onTransferToForm={handleTransferEstimatorQuote} />

        {/* Clear Project Portfolio */}
        <ProjectPortfolio onInquireSimilar={handleInquireSimilarProject} />

        {/* Dedicated Service Inquiry & Easy Contact Form */}
        <DedicatedInquiryForm
          preloadedData={preloadedInquiry}
          onClearPreload={() => setPreloadedInquiry(null)}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Quick Connect Button */}
      <FloatingWhatsApp />
    </div>
  );
}
