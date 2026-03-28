export interface Outfit {
  id: string;
  name: string;
  thumbnail: string;
  image: string;
}

export interface Scene {
  id: string;
  name: string;
  thumbnail: string;
}

export interface Character {
  id: string;
  name: string;
  nameEn: string;
  age: string;
  birthday: string;
  zodiac: string;
  thumbnail: string;
  image: string;
  outfits: Outfit[];
}

export interface Tab {
  id: string;
  label: string;
  content: React.ReactNode;
}
