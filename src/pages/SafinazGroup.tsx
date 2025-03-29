
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
      description: "Deals in sports equipment/goods, a sports magazine (www.sportsmonthly.co.ke), and media work. 2013 – Produced "The Karims – A Sporting Dynasty" Documentary (www.thekarims.co.ke)."
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
