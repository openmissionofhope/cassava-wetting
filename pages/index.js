import Head from 'next/head';
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>Cassava Wetting Method - Safe Processing Guide | Open Mission of Hope</title>
        <meta name="description" content="Learn about Howard Bradbury's wetting method for safely processing cassava to remove cyanide and prevent konzo disease." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#15803d" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Cassava Wetting Method - Safe Processing Guide" />
        <meta property="og:description" content="Learn about Howard Bradbury's wetting method for safely processing cassava to remove cyanide and prevent konzo disease." />
        <meta property="og:site_name" content="Open Mission of Hope" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Cassava Wetting Method - Safe Processing Guide" />
        <meta name="twitter:description" content="Learn about Howard Bradbury's wetting method for safely processing cassava to remove cyanide and prevent konzo disease." />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </Head>

      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-8 max-w-4xl">
        <h1 className="text-3xl font-bold text-green-700 mb-6">Howard Bradbury's Wetting Method for Safe Cassava Processing</h1>
        
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-green-600">Why raw cassava can be dangerous</h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p>
              Cassava (also known as manioc, yuca, or tapioca) is a staple food for over 800 million people worldwide, particularly in tropical regions of Africa, Asia, and South America. However, raw or improperly processed cassava contains naturally occurring cyanogenic glucosides, primarily linamarin, which can release hydrogen cyanide when the plant tissue is damaged. This cyanide compound is toxic to humans and can cause serious health problems when consumed.
            </p>
            <p>
              The most severe health impact of prolonged exposure to cyanide from cassava is a neurological disorder called konzo. This irreversible condition causes sudden paralysis of the legs (spastic paraparesis), particularly affecting children and women of childbearing age during periods of food shortage. Konzo outbreaks typically occur in rural communities with limited food diversity who rely heavily on bitter cassava varieties, which contain higher levels of cyanogenic compounds, without adequate processing methods to remove these toxins.
            </p>
            <p>
              Traditional processing methods such as soaking, fermenting, or sun-drying can reduce cyanide levels to some degree. However, during drought or conflict when food security is threatened, these time-consuming techniques may be shortened or bypassed, increasing health risks. This is where Howard Bradbury's wetting method becomes particularly valuable as a simple, effective approach to make cassava safe for consumption.
            </p>
          </div>
        </section>
        
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-green-600">How the wetting method makes cassava safe</h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p>
              The wetting method, developed by Dr. Howard Bradbury of the Australian National University, is a simple yet effective technique that significantly reduces cyanide content in cassava flour. This method leverages the natural enzymatic process already present in the cassava plant. When cassava tissue is damaged, an enzyme called linamarase comes into contact with linamarin (the cyanogenic glucoside), breaking it down and eventually releasing hydrogen cyanide gas, which can then safely evaporate.
            </p>
            <p>
              The process is remarkably straightforward: cassava flour is placed in a shallow bowl and mixed with water in a 1:1 ratio by volume, creating a damp but not soggy mixture. This mixture is then spread out to a thin layer (about 1 cm thick) and left in an open, well-ventilated space for 5-6 hours at tropical room temperature (25-30°C). During this time, the moisture activates the residual linamarase enzyme in the flour, breaking down the remaining linamarin into hydrogen cyanide, which then dissipates into the air. After the waiting period, the flour can be used to prepare traditional dishes as usual.
            </p>
            <p>
              Studies have shown that the wetting method can remove up to 98% of the remaining cyanide in cassava flour, dramatically reducing the risk of cyanide poisoning and konzo. What makes this method particularly valuable is its simplicity, requiring no special equipment, minimal additional time, and no extra fuel. This accessibility makes it practical for implementation in resource-limited settings where konzo risk is highest. The wetting method represents a remarkable example of how a simple, science-based intervention can address a significant public health challenge.
            </p>
          </div>
        </section>
        
        <section className="mt-12">
          <h2 className="text-xl font-semibold text-green-600 mb-4">Learn More</h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="font-medium mb-3">Research Articles:</h3>
            <ul className="list-disc pl-5 mb-6 space-y-2">
              <li>
                <a 
                  href="https://biology-assets.anu.edu.au/hosted_sites/CCDN/papers/Howard_06.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Bradbury, J. H. (2006). Simple wetting method to reduce cyanogen content of cassava flour. Journal of Food Composition and Analysis, 19(4), 388-393.
                </a>
              </li>
              <li>
                <a 
                  href="https://biology-assets.anu.edu.au/hosted_sites/CCDN/papers/Cumbana_2007.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Cumbana, A., Mirione, E., Cliff, J., & Bradbury, J. H. (2007). Reduction of cyanide content of cassava flour in Mozambique by the wetting method. Food Chemistry, 101(3), 894-897.
                </a>
              </li>
              <li>
                <a 
                  href="https://biology-assets.anu.edu.au/hosted_sites/CCDN/papers/Bradbury_Denton_2010.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Bradbury, J. H., & Denton, I. C. (2010). Rapid wetting method to reduce cyanogen content of cassava flour. Food Chemistry, 121(2), 591-594.
                </a>
              </li>
            </ul>
            
            <h3 className="font-medium mb-3">Instructional Video:</h3>
            <div className="aspect-w-16 aspect-h-9">
              <iframe 
                className="w-full h-80"
                src="https://www.youtube.com/embed/09UHqc313Us"
                title="How To Remove The Poison From Cassava Flour in English by SAWBO"
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
            A project by{' '}
            <a
              href="https://openmissionofhope.org"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-green-200"
            >
              Open Mission of Hope
            </a>
          </p>
          <p className="text-sm mt-2">Educational information on safely processing cassava to prevent cyanide poisoning.</p>
          <p className="text-xs mt-3 text-green-200">© {new Date().getFullYear()} Open Mission of Hope. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
