export interface Outfit {
  id: string;
  name: string;
  image: string;
}

export interface Scene {
  id: string;
  name: string;
  image: string;
}

export interface Character {
  id: string;
  name: string;
  info: string;
  image?: string;
  previewImage?: string;
  video?: string;
  images?: string[];
  scenes?: string[];
}

export interface Tab {
  id: string;
  label: string;
  content: React.ReactNode;
}
