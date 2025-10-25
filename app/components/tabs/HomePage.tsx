"use client";

import React from 'react';
import { BookOpen, Calculator, DollarSign, Users, AlertCircle, ChevronRight } from 'lucide-react';
import { Translation } from '../../lib/data';
import { Tab } from '@/app/page';

// Define props type
interface HomePageProps {
  t: Translation;
  setActiveTab: (tab: Tab) => void;
}

const HomePage: React.FC<HomePageProps> = ({ t, setActiveTab }) => {
  return (
    <div className="space-y-6">
      <div className="bg-linear-to-r from-green-600 to-green-700 text-white rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-2 ">{t.welcome}</h2>
        <p className="text-green-100 mb-4">{t.subtitle}</p>
        <button
          onClick={() => setActiveTab('learn')}
          className="bg-white text-green-700 px-6 py-2 rounded-lg font-semibold hover:bg-green-50 transition"
        >
          {t.getStarted} <ChevronRight className="inline w-4 h-4" />
        </button>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
          <BookOpen className="w-8 h-8 text-blue-600 mb-2" />
          <h3 className="font-semibold text-sm mb-1 text-black">Learn About Oil Palm</h3>
          <p className="text-xs text-gray-600">Verified information & tutorials</p>
        </div>
        <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
          <Calculator className="w-8 h-8 text-purple-600 mb-2" />
          <h3 className="font-semibold text-sm mb-1 text-black">Income Calculator</h3>
          <p className="text-xs text-gray-600">Plan your finances</p>
        </div>
        <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
          <DollarSign className="w-8 h-8 text-orange-600 mb-2" />
          <h3 className="font-semibold text-sm mb-1 text-black">₹41,000/ha Subsidy</h3>
          <p className="text-xs text-gray-600">Government support available</p>
        </div>
        <div className="bg-emerald-50 p-4 rounded-lg border border-emerald-200">
          <Users className="w-8 h-8 text-emerald-600 mb-2" />
          <h3 className="font-semibold text-sm mb-1 text-black">10,000+ Farmers</h3>
          <p className="text-xs text-gray-600">Join the community</p>
        </div>
      </div>

      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
        <div className="flex">
          <AlertCircle className="w-5 h-5 text-yellow-600 mr-2 shrink-0" />
          <div>
            <p className="text-sm font-semibold text-yellow-800">Weather Alert</p>
            <p className="text-xs text-yellow-700">Moderate rainfall expected this week. Good time for fertilizer application.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
