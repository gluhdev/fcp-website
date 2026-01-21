export interface ContentData {
  version: number;
  lastUpdated: string;
  pages: {
    home: HomePageContent;
    packaging: PageContent;
    apparel: PageContent;
    signage: PageContent;
    sportsEquipment: PageContent;
    ppe: PageContent;
  };
}

export interface HomePageContent {
  hero: {
    slides: HeroSlide[];
  };
  about: {
    title: string;
    description: string;
    features: Feature[];
  };
  mission: {
    title: string;
    subtitle: string;
    categories: Category[];
  };
  contact: {
    title: string;
    subtitle: string;
    businessHours: string;
  };
}

export interface PageContent {
  hero: {
    title: string;
    description: string;
  };
  categories: CategoryItem[];
}

export interface HeroSlide {
  id: string;
  title: string;
  subtitle: string;
}

export interface Feature {
  id: string;
  title: string;
  desc: string;
}

export interface Category {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  detailedInfo: string;
  features: string[];
}

export interface CategoryItem {
  id: string;
  title: string;
  description: string;
  features: string[];
}

export interface CMSContextType {
  isAdmin: boolean;
  isEditing: boolean;
  content: ContentData | null;
  pendingChanges: Record<string, string>;
  login: (password: string) => Promise<boolean>;
  logout: () => void;
  toggleEditing: () => void;
  updateContent: (path: string, value: string) => void;
  saveChanges: () => Promise<boolean>;
  hasUnsavedChanges: boolean;
  isLoading: boolean;
}
