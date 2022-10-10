import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';

import ns1 from '../../public/shared/locales/ru/translation.json';
import ns2 from '../../public/shared/locales/en/translation.json';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translations: ns1,
    },
    ru: {
      translations: ns2,
    },
  },
  lng: 'ru',
  fallbackLng: 'en',
  ns: ['translations'],

  interpolation: {
    escapeValue: false,
  },
});

declare module 'react-i18next' {
  // eslint-disable-next-line
  interface Resources {
    ns1: typeof ns1;
    ns2: typeof ns2;
  }
}

declare module 'react-i18next' {
  // eslint-disable-next-line
  interface CustomTypeOptions {
    defaultNS: 'ns1';
    resources: {
      ns1: typeof ns1;
      ns2: typeof ns2;
    };
  }
}

export default i18n;
