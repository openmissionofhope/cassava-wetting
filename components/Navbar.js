import Link from 'next/link';
import { useLanguage, languages } from '../lib/LanguageContext';
import { useTranslation } from '../lib/translations';

export default function Navbar() {
  const { language, changeLanguage } = useLanguage();
  const t = useTranslation(language);

  return (
    <nav className="bg-green-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold hover:text-green-200 transition-colors">
          {t.siteTitle}
        </Link>
        <select
          value={language}
          onChange={(e) => changeLanguage(e.target.value)}
          className="bg-white text-gray-800 rounded px-3 py-1 text-sm cursor-pointer"
          aria-label="Select language"
        >
          {Object.entries(languages).map(([code, { name, flag }]) => (
            <option key={code} value={code}>
              {flag} {name}
            </option>
          ))}
        </select>
      </div>
    </nav>
  );
}
