import React from 'react';
import PageHeader from '../components/PageHeader';
import FAQSection from '../components/FAQSection';

const FAQPage = () => {
  return (
    <>
      <PageHeader title="FAQ" subtitle="Everything You Need To Know" />
      <div className="page-content animate-fade-in" style={{ animationDelay: '0.3s' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '2rem' }}>
          <FAQSection />
        </div>
      </div>
    </>
  );
};

export default FAQPage;
