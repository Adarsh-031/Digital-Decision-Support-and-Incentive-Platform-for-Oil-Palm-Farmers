"use client";

import React from 'react';
import { Sprout, Menu, X } from 'lucide-react';
import { Language } from '@/app/page';
import { Translation } from '../../lib/data';

// Define props type
interface HeaderProps {
  t: Translation;
  language: Language;
  setLanguage: (lang: Language) => void;
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ t, language, setLanguage, menuOpen, setMenuOpen }) => {
  return (
    <header className="bg-green-700 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-4xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <Sprout className="w-8 h-8 mr-2" />
          <div>
            <h1 className="font-bold text-lg leading-tight">{t.title}</h1>
            <p className="text-xs text-green-100">NMEO-OP Digital Platform</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value as Language)}
            className="bg-green-600 border border-green-500 rounded px-2 py-1 text-sm"
          >
            <option value="english">English</option>
            <option value="hindi">हिंदी</option>
            <option value="telugu">తెలుగు</option>
          </select>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2"
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
