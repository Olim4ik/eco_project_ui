export type Language = 'en' | 'ru' | 'uz';

export interface LanguageInfo {
  code: Language;
  name: string;
  nativeName: string;
  flag: string;
}

export interface TranslationKeys {
  // Navigation
  nav: {
    home: string;
    aboutProject: string;
    services: string;
    ecoCoins: string;
    volunteers: string;
    games: string;
    callEcoTeam: string;
  };

  // Hero Section
  hero: {
    title: string;
    description: string;
    callEcoTeamBtn: string;
    learnMoreBtn: string;
  };

  // Core Services
  services: {
    title: string;
    description: string;
    callEcoTeam: {
      title: string;
      description: string;
    };
    trackVehicle: {
      title: string;
      description: string;
    };
    smartContainers: {
      title: string;
      description: string;
    };
    ecoCoins: {
      title: string;
      description: string;
    };
    volunteerNetwork: {
      title: string;
      description: string;
    };
    gamesLearning: {
      title: string;
      description: string;
    };
  };

  // User Types
  userTypes: {
    title: string;
    description: string;
    residents: {
      title: string;
      features: string[];
    };
    volunteers: {
      title: string;
      features: string[];
    };
    companies: {
      title: string;
      features: string[];
    };
    operators: {
      title: string;
      features: string[];
    };
  };

  // How It Works
  howItWorks: {
    title: string;
    description: string;
    steps: {
      register: {
        title: string;
        description: string;
      };
      bookOrDrop: {
        title: string;
        description: string;
      };
      scanQR: {
        title: string;
        description: string;
      };
      compete: {
        title: string;
        description: string;
      };
      redeem: {
        title: string;
        description: string;
      };
    };
  };

  // Technology & Innovation
  technology: {
    title: string;
    description: string;
    smartIoT: {
      title: string;
      description: string;
    };
    gamification: {
      title: string;
      description: string;
    };
    mobilePWA: {
      title: string;
      description: string;
    };
    apiEcosystem: {
      title: string;
      description: string;
    };
  };

  // Statistics
  stats: {
    title: string;
    description: string;
    tonsRecycled: string;
    activeUsers: string;
    ecoCoinsEarned: string;
    citiesParticipating: string;
  };

  // Call to Action
  cta: {
    title: string;
    description: string;
    callEcoTeamBtn: string;
    startEarningBtn: string;
    benefits: string;
  };

  // Footer
  footer: {
    description: string;
    quickLinks: string;
    services: string;
    support: string;
    followUs: string;
    allRightsReserved: string;
  };
}

export interface I18nContextType {
  currentLanguage: Language;
  translations: TranslationKeys;
  changeLanguage: (lang: Language) => void;
  availableLanguages: LanguageInfo[];
}