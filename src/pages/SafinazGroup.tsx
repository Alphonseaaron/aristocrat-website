
import React from 'react';

const SafinazGroup = () => {
  const companies = [
    {
      year: "1992",
      name: "Aristocrats Insurance Brokers",
      description: "Insurance brokerage company dealing with various insurance products."
    },
    {
      year: "1992",
      name: "Alpha Sports Ltd",
      description: "Deals in sports equipment/goods, a sports magazine (www.sportsmonthly.co.ke), and media work. 2013 - Produced \"The Karims - A Sporting Dynasty\" Documentary (www.thekarims.co.ke)."
    },
    {
      year: "1993",
      name: "Safinaz Investments Ltd",
      description: "Investment Company in various companies."
    },
    {
      year: "1994",
      name: "Safinaz Properties Ltd",
      description: "Investment Company in real estate."
    },
    {
      year: "1999",
      name: "Jaffery Investment Ltd",
      description: "Investment Company in real estate and related business."
    },
    {
      year: "2016",
      name: "Safinaz Foundation",
      description: "Safinaz Foundation was formed to promote Sports, Education, and social needs in society. The Foundation is in honour of Late Yusuf and Nargis Karim/Late Sheralibhai and Late Kulsumbhai Kassam and families. Website coming up soon."
    }
  ];

  return (
    <div className="py-16 bg-white">
      <div className="container-custom">
        <h1 className="section-title text-center mb-12">Safinaz Group of Companies</h1>
        
        {/* Founder Profile Section */}
        <div className="mb-16 bg-aristocrat-gray p-8 rounded-lg shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-bold text-aristocrat-green mb-4">Mr. Aasif Karim (Founder)</h2>
              <p className="mb-4">Businessman, Arbitrator/Mediator and International Sportsman</p>
              <a 
                href="https://www.youtube.com/watch?v=0Okzz1Ld5LA" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-aristocrat-green hover:underline flex items-center gap-2 mb-6"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
                Watch video
              </a>
              <blockquote className="italic text-lg border-l-4 border-aristocrat-green pl-4 py-2">
                "The Purpose of a Business is to create a Customer."
              </blockquote>
            </div>
            <div className="flex justify-center">
              <img 
                src="/lovable-uploads/047dbb9e-a1c7-4e2c-8c35-ee8e0ce68724.png" 
                alt="Mr. Aasif Karim" 
                className="rounded-lg shadow-md max-w-xs mx-auto h-auto"
              />
            </div>
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {companies.map((company, index) => (
              <div key={index} className="bg-aristocrat-gray rounded-lg overflow-hidden shadow-md">
                <div className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-aristocrat-green text-white font-bold text-xl h-10 w-20 flex items-center justify-center rounded">
                      {company.year}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2">{company.name}</h3>
                      <p>{company.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SafinazGroup;
