"use client";

import React, { useState, useMemo } from 'react'; // Import useMemo
import { IndianRupee, CheckCircle, DollarSign } from 'lucide-react';
import { Translation } from '../../lib/data';

// Define props type
interface FinancePageProps {
  t: Translation;
}

// Define type for subsidy data
interface SubsidyData {
  plantingSubsidy: number;
  maintenanceSubsidy: number;
  totalSubsidy: number;
  intercroppingIncome: number;
  year4Income: number;
  year7Income: number;
}

const FinancePage: React.FC<FinancePageProps> = ({ t }) => {
  const [showCalculator, setShowCalculator] = useState(false);
  const [landSize, setLandSize] = useState(2);
  // const [subsidyData, setSubsidyData] = useState<SubsidyData | null>(null); // Removed state

  // Calculate subsidyData using useMemo
  const subsidyData: SubsidyData | null = useMemo(() => {
    // Only calculate if the calculator is shown
    if (!showCalculator) {
      return null;
    }

    const hectares = landSize;
    const plantingSubsidy = hectares * 29000;
    const maintenanceSubsidy = hectares * 12000 * 3; // 3 years
    const year4Income = hectares * 50000; // Conservative estimate
    const year7Income = hectares * 180000; // Mature yield
    const intercroppingIncome = hectares * 30000 * 3; // First 3 years

    return {
      plantingSubsidy,
      maintenanceSubsidy,
      totalSubsidy: plantingSubsidy + maintenanceSubsidy,
      intercroppingIncome,
      year4Income,
      year7Income
    };
  }, [landSize, showCalculator]); // Recalculates when these dependencies change

  // Removed calculateReturns function as it's now in useMemo

  // Removed useEffect that was causing the lint error

  const handleCalculateClick = () => {
    setShowCalculator(true);
    // No need to call calculateReturns, useMemo handles recalculation
  };

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold text-gray-800">Financial Support</h2>

      <div className="bg-linear-to-br from-green-600 to-green-700 text-white rounded-lg p-5">
        <h3 className="font-bold text-lg mb-3 ">{t.calculate}</h3>
        <div className="bg-white/10 rounded p-3 mb-3">
          <label className="text-sm mb-2 block">Your Land Size (hectares)</label>
          <input
            type="range"
            min="0.5"
            max="10"
            step="0.5"
            value={landSize}
            onChange={(e) => setLandSize(parseFloat(e.target.value))}
            className="w-full"
          />
          <div className="text-center text-xl font-bold mt-2">{landSize} ha</div>
        </div>
        <button
          onClick={handleCalculateClick}
          className="w-full bg-white text-green-700 py-2 rounded font-semibold hover:bg-green-50 transition"
        >
          Calculate Returns
        </button>
      </div>

      {showCalculator && subsidyData && (
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
          <div className="bg-blue-600 text-white p-3 font-semibold">
            Financial Projection for {landSize} hectares
          </div>
          <div className="p-4 space-y-3">
            <div className="flex justify-between items-center p-3 bg-green-50 rounded">
              <span className="text-sm font-semibold text-black">Planting Subsidy</span>
              <span className="text-green-700 font-bold">₹{subsidyData.plantingSubsidy.toLocaleString()}</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-green-50 rounded">
              <span className="text-sm font-semibold text-black">Maintenance Subsidy (3 yrs)</span>
              <span className="text-green-700 font-bold">₹{subsidyData.maintenanceSubsidy.toLocaleString()}</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-blue-50 rounded">
              <span className="text-sm font-semibold text-black">Intercropping Income (Yrs 1-3)</span>
              <span className="text-blue-700 font-bold">₹{subsidyData.intercroppingIncome.toLocaleString()}</span>
            </div>
            <div className="border-t-2 border-gray-200 pt-3">
              <div className="flex justify-between items-center p-3 bg-purple-50 rounded">
                <span className="text-sm font-semibold text-black">Year 4 Income (First harvest)</span>
                <span className="text-purple-700 font-bold">₹{subsidyData.year4Income.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-orange-50 rounded mt-2">
                <span className="text-sm font-semibold text-black">Year 7+ Income (Mature yield)</span>
                <span className="text-orange-700 font-bold">₹{subsidyData.year7Income.toLocaleString()}/year</span>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="grid gap-4">
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <div className="flex items-center mb-2">
            <div className="bg-orange-100 p-2 rounded-lg mr-3">
              <IndianRupee className="w-5 h-5 text-orange-600" />
            </div>
            <div>
              <h3 className="font-semibold text-sm text-black">{t.subsidies}</h3>
              <p className="text-xs text-gray-600">Check eligibility & apply</p>
            </div>
          </div>
          <button className="w-full mt-3 bg-orange-500 text-white py-2 rounded text-sm font-semibold hover:bg-orange-600 transition">
            Apply for Subsidy
          </button>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <div className="flex items-center mb-2">
            <div className="bg-blue-100 p-2 rounded-lg mr-3">
              <CheckCircle className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <h3 className="font-semibold text-sm text-black">{t.insurance}</h3>
              <p className="text-xs text-gray-600">PMFBY coverage for oil palm</p>
            </div>
          </div>
          <button className="w-full mt-3 bg-blue-500 text-white py-2 rounded text-sm font-semibold hover:bg-blue-600 transition">
            Get Insurance Quote
          </button>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <div className="flex items-center mb-2">
            <div className="bg-purple-100 p-2 rounded-lg mr-3">
              <DollarSign className="w-5 h-5 text-purple-600" />
            </div>
            <div>
              <h3 className="font-semibold text-sm text-black">{t.loans}</h3>
              <p className="text-xs text-gray-600">Pre-qualify for KCC loans</p>
            </div>
          </div>
          <button className="w-full mt-3 bg-purple-500 text-white py-2 rounded text-sm font-semibold hover:bg-purple-600 transition">
            Check Loan Eligibility
          </button>
        </div>
      </div>
    </div>
  );
};

export default FinancePage;

