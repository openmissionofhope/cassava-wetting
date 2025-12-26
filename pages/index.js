import Head from 'next/head';
import Navbar from '../components/Navbar';
import { useLanguage, languages } from '../lib/LanguageContext';
import { useTranslation } from '../lib/translations';

// SAWBO video IDs for different language versions
const videoIds = {
  // Amharic (Ethiopia)
  am: '0YVuTejs-Hg',
  // Lingala (DRC)
  ln: 'T2Agb2XroDY',
  // French (DRC accent) - for Francophone Africa
  fr: 'IsK0aZqI9-o',
  kg: 'IsK0aZqI9-o',  // Kikongo (DRC) - French widely spoken
  lu: 'IsK0aZqI9-o',  // Tshiluba (DRC) - French widely spoken
  sg: 'IsK0aZqI9-o',  // Sango (CAR)
  rw: 'IsK0aZqI9-o',  // Kinyarwanda (Rwanda)
  rn: 'IsK0aZqI9-o',  // Kirundi (Burundi)
  mg: 'IsK0aZqI9-o',  // Malagasy (Madagascar)
  wo: 'IsK0aZqI9-o',  // Wolof (Senegal)
  ewo: 'IsK0aZqI9-o', // Ewondo (Cameroon)
  fan: 'IsK0aZqI9-o', // Fang (Gabon)
  fon: 'IsK0aZqI9-o', // Fongbe (Benin)
  bm: 'IsK0aZqI9-o',  // Bambara (Mali)
  dyu: 'IsK0aZqI9-o', // Dioula (Ivory Coast)
  mos: 'IsK0aZqI9-o', // Moore (Burkina Faso)
  mnk: 'IsK0aZqI9-o', // Mandinka (Gambia - French influence)
  // Portuguese (Brazil)
  pt: 'XBtKtT29kXI',
  umb: 'XBtKtT29kXI', // Umbundu (Angola) - Portuguese widely spoken
  // Ewe/Anlo (Ghana)
  ee: 'RLxAa0uttPw',
  ak: 'RLxAa0uttPw',  // Akan/Twi (Ghana) - Ewe version as closest
  // English (USA) - for international English
  en: 'p_JqS9kwueI',
  es: 'p_JqS9kwueI',  // Spanish speakers - US English as fallback
  // Default: English (Nigeria accent) for African English speakers
};

const getVideoId = (lang) => videoIds[lang] || '09UHqc313Us';

export default function Home() {
  const { language } = useLanguage();
  const t = useTranslation(language);
  const isRtl = languages[language]?.rtl || false;
  const videoId = getVideoId(language);

  return (
    <div className="min-h-screen flex flex-col" dir={isRtl ? 'rtl' : 'ltr'}>
      <Head>
        <title>{t.pageTitle} | Open Mission of Hope</title>
        <meta name="description" content={t.metaDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#15803d" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={t.pageTitle} />
        <meta property="og:description" content={t.metaDescription} />
        <meta property="og:site_name" content="Open Mission of Hope" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t.pageTitle} />
        <meta name="twitter:description" content={t.metaDescription} />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </Head>

      <Navbar />

      <main className="flex-grow container mx-auto px-4 py-8 max-w-4xl">
        <h1 className="text-3xl font-bold text-green-700 mb-6">{t.pageTitle}</h1>

        <section className="mb-10">
          <h2 className="text-xl font-semibold text-green-600">{t.dangerTitle}</h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p>{t.dangerP1}</p>
            <p>{t.dangerP2}</p>
            <p>{t.dangerP3}</p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold text-green-600">{t.methodTitle}</h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p>{t.methodP1}</p>
            <p>{t.methodP2}</p>
            <p>{t.methodP3}</p>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-xl font-semibold text-green-600 mb-4">{t.learnMoreTitle}</h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="font-medium mb-3">{t.researchArticles}</h3>
            <ul className="list-disc pl-5 mb-6 space-y-2">
              <li>
                <a
                  href="https://biology-assets.anu.edu.au/hosted_sites/CCDN/papers/Howard_06.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  {t.article1}
                </a>
              </li>
              <li>
                <a
                  href="https://biology-assets.anu.edu.au/hosted_sites/CCDN/papers/Cumbana_2007.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  {t.article2}
                </a>
              </li>
              <li>
                <a
                  href="https://biology-assets.anu.edu.au/hosted_sites/CCDN/papers/Bradbury_Denton_2010.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  {t.article3}
                </a>
              </li>
            </ul>

            <h3 className="font-medium mb-3">{t.instructionalVideo}</h3>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                className="w-full h-80"
                src={`https://www.youtube.com/embed/${videoId}`}
                title="How To Remove The Poison From Cassava Flour by SAWBO"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-green-700 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p className="font-medium">
            {t.projectBy}{' '}
            <a
              href="https://openmissionofhope.org"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-green-200"
            >
              Open Mission of Hope
            </a>
          </p>
          <p className="text-sm mt-2">{t.footerDescription}</p>
          <p className="text-sm mt-2">
            {t.translationHelp}{' '}
            <a
              href="mailto:info@openmissionofhope.org"
              className="underline hover:text-green-200"
            >
              info@openmissionofhope.org
            </a>
          </p>
          <p className="text-xs mt-3 text-green-200">{t.shareEncouragement}</p>
        </div>
      </footer>
    </div>
  );
}
