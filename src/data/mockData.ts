/**
 * @description Figma设计稿中的所有静态数据
 * 来源: 800965013241925.html
 */

export const COLORS = {
  primary: '#030202',
  accent: '#FEE61D',
  danger: '#DD3333',
  white: '#FFFFFF',
  navBg: '#111111',
  navShadow: 'rgba(68,27,28,1)',
  white80: 'rgba(255,255,255,0.8)',
  white60: 'rgba(255,255,255,0.6)',
  charBgGold: '#674B09',
  charBgRed: '#4A1B11',
  placeholder: '#D9D9D9',
} as const;

export const FIGMA_IMAGES = {
  bgHero: 'https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cd249123-8198-4acd-acfb-cd08c133b768',
  logo: 'https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/912d7d1b-b06c-4131-a408-47daf6c782d9',

  storyboard: {
    drawing: 'https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6874acfa-13f6-4f50-885c-4cd040b7e6fb',
    oc: 'https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1c36a9fb-44db-4a7e-8eae-e2195e1a1634',
    comics: 'https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d2627481-abae-477e-9afc-d4279deb2c57',
    video: 'https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/483ae83b-49f5-4bb7-954f-61dbd913097e',
  },

  characters: {
    active: 'https://s3-alpha-sig.figma.com/img/d311/b8a6/e5b36e422beeaeaa9ab650db588d8185?Expires=1774224000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=WL~bhfmlWF83TkUhU5jsODL~u0D0rsd7~AninxfQag~Pm9PZkXUy~JdOcgUtTVR2QrJH-vsQRWShDaX1h7GRBdFzY9KFBdsmQpqWPzy2D-Q4TLwYhPhU6JcuOtzRHXukYQJXp-fubdh1QuSkhLVlEtuOFzJBTBZjNof~0q5DhWqm46cFEytWSiL7aLF9Ggp5YvWGpmN16DrrBFO0hMlZ8J1QIln9Bv5YL1p0pxE1-HvHXCz94G3Dc5HOBU6BczwJ2XdKCW9RoiiBWg5xx48OjxyE2B4AdS7oNlKhWBhWjEa1lxElq9kX3tIb0o-PERZHJ667qme-DRbELDF62jDrTw__',
    scarlett: 'https://s3-alpha-sig.figma.com/img/e98e/5e81/9e7bdd93c4cf547db8bbfa1abf2a592b?Expires=1774224000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=jkg59ROyTyzkftv7dJBOzNjIOhrw8seiyC~sWkEf0l8P3UKwe3YpQ5FAnuNH5zaL4M3S28oEGzDvsh2ndjdInyC-jDH-w7Wwu79HG1sOy0SWAjLNx9pHSkkwzp5SYywyKvBshuCvrSPgnwv3v2eu8MvSeCMjzfAO72yzf1Y~Av6PkHk0FazkPudEOuVhgDVmR3cjXyAnkaOHUK-t9OczgwpNlu8YWnQakntW9CjFHcflFf~w9uIv~s3cixue4bGJYUjfMj4l3QCf0SSstaDN~4GUIjTnApzax8AnFruYI8SCGtjhfVD33uA3s9hoLG7nz1GnI2h8x13-ODJ6W4CmAA__',
  },

  ocComposite: 'https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/aa9330b1-ea9d-46b4-97a2-d9afb1c7c5d2',

  sceneThumbs: {
    nanoEdit: 'https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a615d384-385c-41ee-99e7-1e6eb0ecb11c',
    positionSwap: 'https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/311e1869-500f-46e9-bcb8-45288e76def7',
    styleTransfer: 'https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8bfe07df-8e09-4fb4-bdee-6a4fcb2caa02',
    grid4: 'https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a86ebedb-512e-4817-8e41-901a59f59671',
    grid9: 'https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/83b27bb0-d353-4b84-a290-19437a04ce1d',
    video5s: 'https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/63bf7c67-e26e-4f98-b873-1ef42164110c',
  },

  sceneSelector: {
    comics: 'https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/12abbe8f-a21b-4a4c-b017-c43c318347e4',
    video: 'https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bd01ca57-5804-4c0a-868b-852040b4b265',
  },

  outfits: [
    'https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/40a8c8dc-a9a1-4eb7-965d-2433afb2519e',
    'https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/af8b85f1-d89d-435d-88bb-49e114840c24',
    'https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ef7449a2-9fbd-4073-984e-8e98be507fa7',
    'https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/96299719-b88b-4737-a63c-81327b441e2c',
    'https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d68ce443-f9a0-446b-9e02-48c362b08b09',
    'https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e3a85a66-58b1-4dc7-a74d-d49fbb968b1f',
    'https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2275d7bc-476a-4370-846c-15c579962681',
    'https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b6bce614-8722-4ae3-9ec3-908742d8ab66',
  ],

  playIcon: 'https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8cbef9e2-db28-44c1-bed6-ad78f3ace123',
} as const;

export const TABS = ['OC', 'DRAWING', 'COMICS', 'VIDEO'] as const;
export type TabName = (typeof TABS)[number];

export interface CharacterData {
  id: string;
  name: string;
  nameEn: string;
  age: string;
  birthday: string;
  zodiac: string;
  image: string;
}

export interface SceneData {
  id: string;
  name: string;
  thumb: string;
}

export interface OutfitData {
  id: string;
  name: string;
  image: string;
}

export const CHARACTERS: CharacterData[] = [
  {
    id: 'active',
    name: 'ACTIVE',
    nameEn: '',
    age: '',
    birthday: '',
    zodiac: '',
    image: FIGMA_IMAGES.characters.active,
  },
  {
    id: 'scarlett_blaze',
    name: 'SCARLETT BLAZE',
    nameEn: '',
    age: '',
    birthday: '',
    zodiac: '',
    image: FIGMA_IMAGES.characters.scarlett,
  },
];

export const OC_CHARACTER: CharacterData = {
  id: 'asher_frost',
  name: '霜凛',
  nameEn: 'ASHER FROST',
  age: '17',
  birthday: 'DEC.22',
  zodiac: 'CAPRICORN',
  image: FIGMA_IMAGES.storyboard.oc,
};

export const DRAWING_SCENES: SceneData[] = [
  { id: 'nano_edit', name: '_Nano修图', thumb: FIGMA_IMAGES.sceneThumbs.nanoEdit },
  { id: 'position_swap', name: '位置转换', thumb: FIGMA_IMAGES.sceneThumbs.positionSwap },
  { id: 'style_transfer', name: '风格转绘', thumb: FIGMA_IMAGES.sceneThumbs.styleTransfer },
  { id: 'grid_4', name: '4宫格', thumb: FIGMA_IMAGES.sceneThumbs.grid4 },
  { id: 'grid_9', name: '9宫格', thumb: FIGMA_IMAGES.sceneThumbs.grid9 },
  { id: 'video_5s', name: '5s视频', thumb: FIGMA_IMAGES.sceneThumbs.video5s },
];

export const OUTFITS: OutfitData[] = FIGMA_IMAGES.outfits.map((img, i) => ({
  id: `outfit_${String(i + 1).padStart(2, '0')}`,
  name: `OUTFIT ${String(i + 1).padStart(2, '0')}`,
  image: img,
}));

export const BOTTOM_FEATURES = [
  {
    id: 'create_oc',
    title: 'CREATE YOUR OC',
    description: 'Create your OC and design armor.',
  },
  {
    id: 'ai_studio',
    title: 'AI ART STUDIO',
    description: 'Immerse in Al Art studio brandiated ai art.',
  },
  {
    id: 'share_discover',
    title: 'SHARE & DISCOVER',
    description: 'Share & discover to collections and colors.',
  },
];
