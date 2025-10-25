"use client";

import React, { useState } from 'react';
import { Sprout, AlertCircle, TrendingUp, Phone } from 'lucide-react';
import { Translation } from '../../lib/data';

// Define props type
interface AdvisoryPageProps {
  t: Translation;
}

// Define type for farmer profile
interface FarmerProfile {
  created: boolean;
  // Add other profile fields here later
}

const AdvisoryPage: React.FC<AdvisoryPageProps> = ({ t }) => {
  const [farmerProfile, setFarmerProfile] = useState<FarmerProfile | null>(null);

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold text-gray-800">Personalized Advisory</h2>

      {!farmerProfile ? (
        <div className="bg-white rounded-lg border border-gray-200 p-6 text-center">
          <Sprout className="w-12 h-12 text-green-600 mx-auto mb-3" />
          <h3 className="font-semibold mb-2 text-black">Create Your Farmer Profile</h3>
          <p className="text-sm text-gray-600 mb-4">Get personalized recommendations based on your land and location</p>
          <button
            onClick={() => setFarmerProfile({ created: true })}
            className="bg-green-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-700 transition"
          >
            {t.createProfile}
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          <div className="bg-green-50 border-l-4 border-green-500 p-4">
            <p className="text-sm font-semibold text-green-800">Today&apos;s Recommendation</p>
            <p className="text-sm text-green-700 mt-1">Good time to apply organic fertilizer. Soil moisture is optimal.</p>
          </div>

          <div className="grid gap-4">
            <div className="bg-white rounded-lg border border-gray-200 p-4">
              <div className="flex items-center mb-3">
                <AlertCircle className="w-5 h-5 text-blue-600 mr-2" />
                <h3 className="font-semibold text-black">{t.weather}</h3>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Temperature</span>
                  <span className="font-semibold text-gray-600">28-34°C</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Rainfall</span>
                  <span className="font-semibold text-gray-600">15mm expected</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Humidity</span>
                  <span className="font-semibold text-gray-600">75%</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-4">
              <div className="flex items-center mb-3">
                <TrendingUp className="w-5 h-5 text-purple-600 mr-2" />
                <h3 className="font-semibold text-black">{t.market}</h3>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">FFB Price (Today)</span>
                  <span className="font-bold text-green-600">₹12.5/kg</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Nearest Mill</span>
                  <span className="font-semibold text-gray-600">15 km</span>
                </div>
                <button className="w-full mt-2 bg-purple-500 text-white py-2 rounded text-sm font-semibold hover:bg-purple-600 transition">
                  View All Mills
                </button>
              </div>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-4">
              <div className="flex items-center mb-3">
                <Phone className="w-5 h-5 text-orange-600 mr-2" />
                <h3 className="font-semibold text-black">{t.experts}</h3>
              </div>
              <p className="text-sm text-gray-600 mb-3">Connect with agriculture experts for personalized advice</p>
              <div className="space-y-2">
                <button className="w-full bg-orange-500 text-white py-2 rounded text-sm font-semibold hover:bg-orange-600 transition">
                  Call Expert (Toll-Free)
                </button>
                <button className="w-full bg-white border border-orange-500 text-orange-600 py-2 rounded text-sm font-semibold hover:bg-orange-50 transition">
                  Schedule Video Call
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdvisoryPage;
