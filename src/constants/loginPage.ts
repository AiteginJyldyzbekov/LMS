export interface icons {
  id: number;
  img: string;
}

export interface form {
  password: string;
  showPassword: boolean;
}

export const icons: icons[] = [
  {
    id: 1,
    img: './images/loginImgs/google.png'
  },
  {
    id: 2,
    img: './images/loginImgs/facebook.png'
  },
  {
    id: 3,
    img: "./images/loginImgs/twitter.png"
  }
]
