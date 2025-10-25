"use client";

import React, { useState } from 'react';
import { translations } from './lib/data';
import Header from './components/layout/Header';
import BottomNav from './components/layout/BottomNav';
import HomePage from './components/tabs/HomePage';
import LearnPage from './components/tabs/LearnPage';
import FinancePage from './components/tabs/FinancePage';
import AdvisoryPage from './components/tabs/AdvisoryPage';
import CommunityPage from './components/tabs/CommunityPage';

// Define type for language keys
export type Language = 'english' | 'hindi' | 'telugu';

// Define type for tab keys
export type Tab = 'home' | 'learn' | 'finance' | 'advisory' | 'community';

export default function Page() {
  const [language, setLanguage] = useState<Language>('english');
  const [activeTab, setActiveTab] = useState<Tab>('home');
  const [menuOpen, setMenuOpen] = useState(false);

  // Get the correct translation object
  const t = translations[language];

  // Helper function to render the active tab
  const renderActiveTab = () => {
    switch (activeTab) {
      case 'home':
        return <HomePage t={t} setActiveTab={setActiveTab} />;
      case 'learn':
        return <LearnPage t={t} />;
      case 'finance':
        return <FinancePage t={t} />;
      case 'advisory':
        return <AdvisoryPage t={t} />;
      case 'community':
        return <CommunityPage t={t} />;
      default:
        return <HomePage t={t} setActiveTab={setActiveTab} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header
        t={t}
        language={language}
        setLanguage={setLanguage}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 pb-20 pt-4">
        {renderActiveTab()}
      </main>

      <BottomNav t={t} activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
}
