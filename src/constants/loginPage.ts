export interface Iicons {
  id: number;
  img: string;
}

export interface form {
  password: string;
  showPassword: boolean;
}

export const icons: Iicons[] = [
  {
    id: 1,
    img: '',
  },
  {
    id: 2,
    img: '/images/loginImgs/facebook.png',
  },
  {
    id: 3,
    img: '/images/loginImgs/twitter.png',
  },
];
