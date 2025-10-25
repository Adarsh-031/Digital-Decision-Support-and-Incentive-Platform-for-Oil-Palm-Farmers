// This file stores static translations and data

export const translations = {
  english: {
    title: 'Oil Palm Farmer Platform',
    home: 'Home',
    learn: 'Learn',
    finance: 'Finance',
    advisory: 'Advisory',
    community: 'Community',
    welcome: 'Welcome to NMEO-OP Digital Platform',
    subtitle: 'Empowering smallholder farmers with knowledge and support',
    getStarted: 'Get Started',
    createProfile: 'Create Farmer Profile',
    myths: 'Common Myths Debunked',
    success: 'Success Stories',
    calculate: 'Income Calculator',
    subsidies: 'Available Subsidies',
    insurance: 'Crop Insurance',
    loans: 'Micro Credit',
    experts: 'Expert Advisory',
    weather: 'Weather Alerts',
    market: 'Market Prices',
    farmers: 'Farmer Network',
    // --- New translations for Community Page ---
    discussions: 'Recent Discussions',
    farmersNearYou: 'Farmers Near You',
    rewards: 'Referral Rewards',
    joinForum: 'Join Discussion Forum',
    connect: 'Connect',
    shareReferral: 'Share Referral Code',
    activeFarmers: 'Active Farmers',
    joinCommunityPrompt: 'Join the fastest growing oil palm community',
    invitePrompt: 'Invite fellow farmers and earn rewards when they join the platform!',
  },
  hindi: {
    title: 'ऑयल पाम किसान मंच',
    home: 'होम',
    learn: 'सीखें',
    finance: 'वित्त',
    advisory: 'सलाह',
    community: 'समुदाय',
    welcome: 'NMEO-OP डिजिटल प्लेटफॉर्म में आपका स्वागत है',
    subtitle: 'छोटे किसानों को ज्ञान और सहायता प्रदान करना',
    getStarted: 'शुरू करें',
    createProfile: 'किसान प्रोफ़ाइल बनाएं',
    myths: 'आम मिथक खंडित',
    success: 'सफलता की कहानियां',
    calculate: 'आय कैलकुलेटर',
    subsidies: 'उपलब्ध सब्सिडी',
    insurance: 'फसल बीमा',
    loans: 'सूक्ष्म ऋण',
    experts: 'विशेषज्ञ सलाह',
    weather: 'मौसम अलर्ट',
    market: 'बाजार मूल्य',
    farmers: 'किसान नेटवर्क',
    // --- New translations for Community Page ---
    discussions: 'हाल की चर्चाएँ',
    farmersNearYou: 'आपके आस-पास के किसान',
    rewards: 'रेफरल पुरस्कार',
    joinForum: 'चर्चा मंच से जुड़ें',
    connect: 'जुड़ें',
    shareReferral: 'रेफरल कोड साझा करें',
    activeFarmers: 'सक्रिय किसान',
    joinCommunityPrompt: 'सबसे तेजी से बढ़ते ऑयल पाम समुदाय से जुड़ें',
    invitePrompt: ' साथी किसानों को आमंत्रित करें और जब वे मंच से जुड़ें तो पुरस्कार अर्जित करें!',
  },
  telugu: {
    title: 'ఆయిల్ పామ్ రైతు వేదిక',
    home: 'హోమ్',
    learn: 'నేర్చుకోండి',
    finance: 'ఫైనాన్స్',
    advisory: 'సలహా',
    community: 'కమ్యూనిటీ',
    welcome: 'NMEO-OP డిజిటల్ ప్లాట్‌ఫారమ్‌కు స్వాగతం',
    subtitle: 'చిన్న రైతులకు జ్ఞానం మరియు మద్దతు అందించడం',
    getStarted: 'ప్రారంభించండి',
    createProfile: 'రైతు ప్రొఫైల్ సృష్టించండి',
    myths: 'సాధారణ అపోహలు తొలగింపు',
    success: 'విజయ కథలు',
    calculate: 'ఆదాయ కాలిక్యులేటర్',
    subsidies: 'అందుబాటులో ఉన్న సబ్సిడీలు',
    insurance: 'పంట బీమా',
    loans: 'సూక్ష్మ రుణాలు',
    experts: 'నిపుణుల సలహా',
    weather: 'వాతావరణ హెచ్చరికలు',
    market: 'మార్కెట్ ధరలు',
    farmers: 'రైతు నెట్‌వర్క్',
    // --- New translations for Community Page ---
    discussions: 'ఇటీవలి చర్చలు',
    farmersNearYou: 'మీకు సమీపంలో ఉన్న రైతులు',
    rewards: 'రెఫరల్ రివార్డులు',
    joinForum: 'చర్చా వేదికలో చేరండి',
    connect: 'కనెక్ట్ అవ్వండి',
    shareReferral: 'రెఫరల్ కోడ్‌ను షేర్ చేయండి',
    activeFarmers: 'క్రియాశీల రైతులు',
    joinCommunityPrompt: 'వేగంగా అభివృద్ధి చెందుతున్న ఆయిల్ పామ్ సంఘంలో చేరండి',
    invitePrompt: ' తోటి రైతులను ఆహ్వానించండి మరియు వారు ప్లాట్‌ఫారమ్‌లో చేరినప్పుడు బహుమతులు పొందండి!',
  }
};

// Define a type for the translation object
export type Translation = typeof translations.english;

export const myths = [
  {
    myth: "Oil palm causes deforestation",
    fact: "In India, oil palm is planted on degraded lands and wastelands, not forests. Satellite monitoring ensures no forest conversion.",
    verified: true
  },
  {
    myth: "No income for 5 years",
    fact: "Intercropping with banana, pineapple, or vegetables generates income from year 1. Palm starts yielding from year 3-4.",
    verified: true
  },
  {
    myth: "Only for large farmers",
    fact: "Government provides ₹29,000/ha subsidy + ₹12,000/ha maintenance support specifically for small and marginal farmers.",
    verified: true
  }
];

export const successStories = [
  {
    name: "Ramesh Kumar",
    location: "West Godavari, AP",
    land: "1.5 hectares",
    income: "₹2.8 lakhs/year",
    year: "Since 2019",
    story: "Started with government subsidy, now earning 3x more than paddy farming"
  },
  {
    name: "Lakshmi Devi",
    location: "Mizoram",
    land: "0.8 hectares",
    income: "₹1.5 lakhs/year",
    year: "Since 2020",
    story: "Intercropping with pineapple provided income during gestation period"
  }
];

