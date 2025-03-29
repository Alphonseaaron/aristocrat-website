
import React from 'react';

const Team = () => {
  const teamMembers = [
    {
      name: "Mr. Aasif Karim",
      position: "C.E.O",
      description: "Businessman, Arbitrator/Mediator, and International Sportsman",
      photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Johnson Ndunge",
      position: "Senior Manager (Underwriting / Claims)",
      description: "25 years of service",
      photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Joyce Mutuku",
      position: "Secretary to the CEO",
      description: "15 years of service",
      photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "John Muli",
      position: "P.A to the CEO",
      description: "18 years of service",
      photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">Our Team</h2>
          <p className="text-lg max-w-3xl mx-auto">
            Meet our dedicated professionals who are committed to providing you with the best insurance services.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-aristocrat-gray rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:-translate-y-2">
              <div className="h-48 overflow-hidden">
                <img 
                  src={member.photo} 
                  alt={member.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1 text-aristocrat-dark">{member.name}</h3>
                <p className="text-aristocrat-green font-medium mb-2">{member.position}</p>
                <p className="text-sm">{member.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="#" className="btn-primary">
            Meet The Full Team
          </a>
        </div>
      </div>
    </section>
  );
};

export default Team;
