"use client";

import React from 'react';
import { Users, MapPin, Award } from 'lucide-react';
import { Translation } from '../../lib/data';

// Define props type
interface CommunityPageProps {
  t: Translation;
}

const CommunityPage: React.FC<CommunityPageProps> = ({ t }) => {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold text-gray-800">Farmer Community</h2>

      <div className="bg-linear-to-br from-emerald-600 to-emerald-700 text-white rounded-lg p-5">
        <Users className="w-10 h-10 mb-2" />
        <h3 className="font-bold text-lg">10,847 Active Farmers</h3>
        <p className="text-emerald-100 text-sm">Join the fastest growing oil palm community</p>
      </div>

      <div className="bg-white rounded-lg border border-gray-200 p-4">
        <h3 className="font-semibold mb-3 text-black">Recent Discussions</h3>
        <div className="space-y-3">
          <div className="border-b pb-3">
            <p className="text-sm font-semibold text-gray-600">Intercropping with banana - yield experiences?</p>
            <p className="text-xs text-gray-600 mt-1">Posted by Suresh M. • 24 replies</p>
          </div>
          <div className="border-b pb-3">
            <p className="text-sm font-semibold text-gray-600">Best time for pest control treatment</p>
            <p className="text-xs text-gray-600 mt-1">Posted by Kavitha R. • 18 replies</p>
          </div>
          <div className="pb-3">
            <p className="text-sm font-semibold text-gray-600">Subsidy application process clarification</p>
            <p className="text-xs text-gray-600 mt-1">Posted by Ravi K. • 31 replies</p>
          </div>
        </div>
        <button className="w-full mt-3 bg-emerald-500 text-white py-2 rounded text-sm font-semibold hover:bg-emerald-600 transition">
          Join Discussion Forum
        </button>
      </div>

      <div className="bg-white rounded-lg border border-gray-200 p-4">
        <h3 className="font-semibold mb-3 flex items-center text-black">
          <MapPin className="w-5 h-5 text-red-500 mr-2" />
          Farmers Near You
        </h3>
        <div className="space-y-2">
          <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
            <div>
              <p className="text-sm font-semibold text-gray-600">Kumar S.</p>
              <p className="text-xs text-gray-600">2.3 km away • 3 ha</p>
            </div>
            <button className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded font-semibold">
              Connect
            </button>
          </div>
          <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
            <div>
              <p className="text-sm font-semibold text-gray-600">Manjula P.</p>
              <p className="text-xs text-gray-600">4.7 km away • 1.5 ha</p>
            </div>
            <button className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded font-semibold">
              Connect
            </button>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
        <h3 className="font-semibold mb-2 flex items-center text-black">
          <Award className="w-5 h-5 text-yellow-600 mr-2" />
          Referral Rewards
        </h3>
        <p className="text-sm text-gray-700 mb-3">Invite fellow farmers and earn rewards when they join the platform!</p>
        <button className="w-full bg-yellow-500 text-white py-2 rounded text-sm font-semibold hover:bg-yellow-600 transition">
          Share Referral Code
        </button>
      </div>
    </div>
  );
};

export default CommunityPage;
