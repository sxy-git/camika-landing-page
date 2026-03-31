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
  nameEn: string;
  age: string;
  birthday: string;
  zodiac: string;
  image: string;
  outfits: Outfit[];
  video?: string;
}

export interface Tab {
  id: string;
  label: string;
  content: React.ReactNode;
}
