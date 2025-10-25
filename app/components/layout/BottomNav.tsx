"use client";

import React from 'react';
import { Sprout, BookOpen, DollarSign, TrendingUp, Users } from 'lucide-react';
import { Tab } from '@/app/page';
import { Translation } from '../../lib/data';

// Define props type
interface BottomNavProps {
  t: Translation;
  activeTab: Tab;
  setActiveTab: (tab: Tab) => void;
}

// Define nav items
const navItems = [
  { id: 'home', label: 'home', icon: Sprout },
  { id: 'learn', label: 'learn', icon: BookOpen },
  { id: 'finance', label: 'finance', icon: DollarSign },
  { id: 'advisory', label: 'advisory', icon: TrendingUp },
  { id: 'community', label: 'community', icon: Users },
] as const; // Use 'as const' for stricter type checking

const BottomNav: React.FC<BottomNavProps> = ({ t, activeTab, setActiveTab }) => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg">
      <div className="max-w-4xl mx-auto px-2 py-2">
        <div className="flex justify-around">
          {navItems.map((item) => {
            const Icon = item.icon;
            const label = t[item.label]; // Get translated label
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex flex-col items-center px-3 py-2 rounded-lg transition ${
                  activeTab === item.id
                    ? 'text-green-700 bg-green-50'
                    : 'text-gray-600'
                }`}
              >
                <Icon className="w-6 h-6 mb-1" />
                <span className="text-xs font-semibold">{label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default BottomNav;
