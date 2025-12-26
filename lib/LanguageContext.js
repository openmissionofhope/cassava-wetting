import { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const languages = {
  ach: { name: 'Acholi', flag: '🇺🇬' },
  ak: { name: 'Akan/Twi', flag: '🇬🇭' },
  am: { name: 'አማርኛ', flag: '🇪🇹' },
  ar: { name: 'العربية', flag: '🇸🇦', rtl: true },
  bem: { name: 'Bemba', flag: '🇿🇲' },
  bm: { name: 'Bambara', flag: '🇲🇱' },
  dyu: { name: 'Dioula', flag: '🇨🇮' },
  ee: { name: 'Eʋegbe', flag: '🇬🇭' },
  en: { name: 'English', flag: '🌍' },
  es: { name: 'Español', flag: '🇪🇸' },
  ewo: { name: 'Ewondo', flag: '🇨🇲' },
  fan: { name: 'Fang', flag: '🇬🇦' },
  ff: { name: 'Fulfulde', flag: '🇳🇬' },
  fon: { name: 'Fongbe', flag: '🇧🇯' },
  fr: { name: 'Français', flag: '🇫🇷' },
  ha: { name: 'Hausa', flag: '🇳🇬' },
  ig: { name: 'Igbo', flag: '🇳🇬' },
  kg: { name: 'Kikongo', flag: '🇨🇩' },
  ki: { name: 'Gĩkũyũ', flag: '🇰🇪' },
  kr: { name: 'Kanuri', flag: '🇳🇬' },
  kri: { name: 'Krio', flag: '🇸🇱' },
  lg: { name: 'Luganda', flag: '🇺🇬' },
  ln: { name: 'Lingála', flag: '🇨🇩' },
  lua: { name: 'Tshiluba', flag: '🇨🇩' },
  luo: { name: 'Dholuo', flag: '🇰🇪' },
  mg: { name: 'Malagasy', flag: '🇲🇬' },
  mnk: { name: 'Mandinka', flag: '🇬🇲' },
  mos: { name: 'Mooré', flag: '🇧🇫' },
  ny: { name: 'Chichewa', flag: '🇲🇼' },
  om: { name: 'Oromoo', flag: '🇪🇹' },
  pga: { name: 'عربي جوبا', flag: '🇸🇸', rtl: true },
  pt: { name: 'Português', flag: '🇵🇹' },
  rn: { name: 'Kirundi', flag: '🇧🇮' },
  rw: { name: 'Kinyarwanda', flag: '🇷🇼' },
  sg: { name: 'Sängö', flag: '🇨🇫' },
  sn: { name: 'chiShona', flag: '🇿🇼' },
  so: { name: 'Soomaali', flag: '🇸🇴' },
  st: { name: 'Sesotho', flag: '🇱🇸' },
  sw: { name: 'Kiswahili', flag: '🇰🇪' },
  ti: { name: 'ትግርኛ', flag: '🇪🇷' },
  tn: { name: 'Setswana', flag: '🇧🇼' },
  umb: { name: 'Umbundu', flag: '🇦🇴' },
  wo: { name: 'Wolof', flag: '🇸🇳' },
  xh: { name: 'isiXhosa', flag: '🇿🇦' },
  yo: { name: 'Yorùbá', flag: '🇳🇬' },
  zu: { name: 'isiZulu', flag: '🇿🇦' },
};

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('en');

  useEffect(() => {
    const saved = localStorage.getItem('language');
    if (saved && languages[saved]) {
      setLanguage(saved);
    }
  }, []);

  const changeLanguage = (lang) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, languages }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
