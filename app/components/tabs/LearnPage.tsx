"use client";

import React from 'react';
import { X, CheckCircle, Video, Phone, Award, MapPin } from 'lucide-react';
import { Translation, myths, successStories } from '../../lib/data';

// Define props type
interface LearnPageProps {
  t: Translation;
}

const LearnPage: React.FC<LearnPageProps> = ({ t }) => {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold text-gray-800">Knowledge Center</h2>

      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <div className="bg-red-600 text-white p-3 font-semibold">
          {t.myths}
        </div>
        <div className="p-4 space-y-4">
          {myths.map((item, idx) => (
            <div key={idx} className="border-b last:border-b-0 pb-4 last:pb-0">
              <div className="flex items-start mb-2">
                <X className="w-5 h-5 text-red-500 mr-2 shrink-0 mt-0.5" />
                <p className="font-semibold text-sm text-gray-800">{item.myth}</p>
              </div>
              <div className="flex items-start ml-7">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                <p className="text-sm text-gray-700">{item.fact}</p>
              </div>
              {item.verified && (
                <div className="ml-7 mt-2">
                  <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">
                    ✓ Verified by ICAR-IIOPR
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <button className="bg-linear-to-br from-red-500 to-red-600 text-white p-4 rounded-lg shadow hover:shadow-lg transition">
          <Video className="w-6 h-6 mb-2" />
          <span className="text-sm font-semibold">Video Tutorials</span>
        </button>
        <button className="bg-linear-to-br from-blue-500 to-blue-600 text-white p-4 rounded-lg shadow hover:shadow-lg transition">
          <Phone className="w-6 h-6 mb-2" />
          <span className="text-sm font-semibold">Expert Helpline</span>
        </button>
      </div>

      <div className="bg-white rounded-lg border border-gray-200 p-4">
        <h3 className="font-semibold mb-3 flex items-center text-black">
          <Award className="w-5 h-5 text-yellow-500 mr-2" />
          {t.success}
        </h3>
        <div className="space-y-3">
          {successStories.map((story, idx) => (
            <div key={idx} className="bg-green-50 p-3 rounded-lg border border-green-200">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <p className="font-semibold text-sm text-black">{story.name}</p>
                  <p className="text-xs text-gray-600 flex items-center">
                    <MapPin className="w-3 h-3 mr-1" />
                    {story.location}
                  </p>
                </div>
                <span className="bg-green-600 text-white text-xs px-2 py-1 rounded">{story.income}</span>
              </div>
              <p className="text-xs text-gray-700 italic">&quot;{story.story}&quot;</p>
              <p className="text-xs text-gray-500 mt-1">Land: {story.land} | {story.year}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LearnPage;
