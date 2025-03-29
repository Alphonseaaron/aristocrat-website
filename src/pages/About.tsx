
import React from 'react';

const About = () => {
  const teamMembers = [
    {
      name: "Mr. Aasif Karim",
      position: "C.E.O",
      description: "Businessman, Arbitrator/Mediator, and International Sportsman with extensive experience in the insurance industry.",
      photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      featured: true
    },
    {
      name: "John Muli",
      position: "P.A to the CEO",
      description: "18 years of service. \"I joined the Group in 1998 and have had a wonderful experience both professionally and personally. God bless Safinaz Group of Companies.\"",
      photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Joyce Mutuku",
      position: "Secretary to the CEO",
      description: "15 years of service. \"It's exciting and motivating to be part of this ever-expanding company. AIB has no limitations for growth, and I've been encouraged to improve my skills continuously. I'm proud to have worked here for 15 years. Long Live Aristocrats!\"",
      photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Johnson Ndunge",
      position: "Senior Manager (Underwriting / Claims – General Insurance)",
      description: "25 years of service. \"I am grateful to the MD for believing in me and providing opportunities for growth. The work environment has been conducive, and I cherish the beautiful memories made over the past 25 years.\"",
      photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Peter Kariuki",
      position: "Accountant",
      description: "5 years of service. \"Being part of Aristocrats has been enriching. I have the opportunity to improve my skills daily, solve complex problems, and grow professionally. I'm grateful to be part of a goal-oriented and visionary company.\"",
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Carolyne Mutio",
      position: "Underwriter",
      description: "1 year of service. \"In my first year at Aristocrats, I've gained confidence in handling various insurance classes beyond my initial experience in Motor & Medical. I appreciate the learning opportunities and am proud to be associated with Aristocrats.\"",
      photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Nancy Ayuma",
      position: "Receptionist",
      description: "2 years of service. \"I have gained valuable experience as a Receptionist over the past two years. I'm delighted to be part of Aristocrats and look forward to contributing more in the future.\"",
      photo: "https://images.unsplash.com/photo-1590649681928-4b179f773bd5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Ali Wechuli",
      position: "Clerk",
      description: "12 years of service. \"I am proud to be associated with Aristocrats. Over the years, I have grown across multiple departments and gained hands-on experience. Experience is the best teacher, and I've learned so much from my seniors.\"",
      photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Juma Genge",
      position: "Clerk",
      description: "3 years of service. \"Aristocrats has provided opportunities for both personal and professional growth. Our Managing Director is a dynamic leader who motivates us to excel. I am blessed to be part of this wonderful company. God bless Aristocrats!\"",
      photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <div>
      {/* Page Header */}
      <div className="bg-aristocrat-green py-12">
        <div className="container-custom">
          <h1 className="text-3xl md:text-4xl font-bold text-white text-center">About Us</h1>
        </div>
      </div>

      {/* History Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title">Our History</h2>
              <p className="mb-4">
                The roots of Aristocrats can be traced back to 1986 as Al-Karim Insurance Agency in Mombasa. 
                It later moved to the Prudential Building on Wabera Street, Nairobi, and changed its name to 
                Aristocrats Insurance Brokers Ltd.
              </p>
              <p className="mb-4">
                In 1996, Aristocrats relocated to the 9th floor of Loita House, occupying an entire floor. 
                In August 2006, the company moved to its own building, Aristocrats House, located on James 
                Gichuru Road in Lavington, Nairobi.
              </p>
              <p>
                Aristocrats is a general insurance broker transacting all classes of general insurance business. 
                The company has grown significantly, thanks to the support of clients and intermediaries over the years.
              </p>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" 
                alt="Aristocrats Insurance History" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-16 bg-aristocrat-gray">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">Our Vision & Mission</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-aristocrat-green">Vision</h3>
              <p className="text-lg">
                To be a reputable company providing security and service to clients in the East African Region.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-aristocrat-green">Mission</h3>
              <p className="text-lg">
                To grow profitably while providing excellent customer service and good returns to shareholders.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">Our Values</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-aristocrat-gray p-6 rounded-lg shadow-md text-center">
              <div className="bg-aristocrat-green w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Integrity</h3>
              <p>
                We uphold the highest ethical standards in all our dealings, ensuring transparency and honesty with our clients.
              </p>
            </div>
            <div className="bg-aristocrat-gray p-6 rounded-lg shadow-md text-center">
              <div className="bg-aristocrat-green w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Commitment</h3>
              <p>
                We are dedicated to meeting our clients' needs and delivering on our promises with unwavering commitment.
              </p>
            </div>
            <div className="bg-aristocrat-gray p-6 rounded-lg shadow-md text-center">
              <div className="bg-aristocrat-green w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Passion</h3>
              <p>
                We approach our work with enthusiasm and passion, striving for excellence in everything we do.
              </p>
            </div>
            <div className="bg-aristocrat-gray p-6 rounded-lg shadow-md text-center">
              <div className="bg-aristocrat-green w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Speed</h3>
              <p>
                We value efficiency and quick response times, ensuring our clients receive timely service and solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-aristocrat-gray">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">Our Team</h2>
            <p className="text-lg max-w-3xl mx-auto">
              Meet our dedicated professionals who are committed to providing you with the best insurance services.
            </p>
          </div>

          {/* Featured Team Member - CEO */}
          {teamMembers.filter(member => member.featured).map((member, index) => (
            <div key={index} className="mb-16">
              <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="h-full">
                    <img 
                      src={member.photo} 
                      alt={member.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-8 flex flex-col justify-center">
                    <h3 className="text-3xl font-bold mb-2 text-aristocrat-dark">{member.name}</h3>
                    <p className="text-aristocrat-green text-xl font-medium mb-4">{member.position}</p>
                    <p className="mb-6">{member.description}</p>
                    <div>
                      <p className="font-medium">A World Shaped by Sports (Nov 4th, 2016) – By Aasif Karim</p>
                      <a href="#" className="text-aristocrat-green hover:text-aristocrat-lightGreen font-medium transition-colors">
                        Watch video →
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Regular Team Members */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.filter(member => !member.featured).map((member, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:-translate-y-2">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={member.photo} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1 text-aristocrat-dark">{member.name}</h3>
                  <p className="text-aristocrat-green font-medium mb-3">{member.position}</p>
                  <p className="text-sm">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">Our Milestones</h2>
          </div>

          <div className="space-y-6 max-w-3xl mx-auto">
            <div className="flex">
              <div className="flex flex-col items-center mr-6">
                <div className="w-6 h-6 rounded-full bg-aristocrat-green"></div>
                <div className="h-full w-0.5 bg-aristocrat-green"></div>
              </div>
              <div className="pb-6">
                <h3 className="text-xl font-bold text-aristocrat-green">1986</h3>
                <p>Started as Al-Karim Insurance Agency in Mombasa.</p>
              </div>
            </div>
            <div className="flex">
              <div className="flex flex-col items-center mr-6">
                <div className="w-6 h-6 rounded-full bg-aristocrat-green"></div>
                <div className="h-full w-0.5 bg-aristocrat-green"></div>
              </div>
              <div className="pb-6">
                <h3 className="text-xl font-bold text-aristocrat-green">1992</h3>
                <p>Moved to Nairobi and rebranded as Aristocrats Insurance Brokers Ltd.</p>
              </div>
            </div>
            <div className="flex">
              <div className="flex flex-col items-center mr-6">
                <div className="w-6 h-6 rounded-full bg-aristocrat-green"></div>
                <div className="h-full w-0.5 bg-aristocrat-green"></div>
              </div>
              <div className="pb-6">
                <h3 className="text-xl font-bold text-aristocrat-green">1996</h3>
                <p>Relocated to the 9th floor of Loita House, occupying an entire floor.</p>
              </div>
            </div>
            <div className="flex">
              <div className="flex flex-col items-center mr-6">
                <div className="w-6 h-6 rounded-full bg-aristocrat-green"></div>
                <div className="h-full w-0.5 bg-aristocrat-green"></div>
              </div>
              <div className="pb-6">
                <h3 className="text-xl font-bold text-aristocrat-green">2006</h3>
                <p>Moved to our own building, Aristocrats House, on James Gichuru Road in Lavington, Nairobi.</p>
              </div>
            </div>
            <div className="flex">
              <div className="flex flex-col items-center mr-6">
                <div className="w-6 h-6 rounded-full bg-aristocrat-green"></div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-aristocrat-green">2016-2017</h3>
                <p>Celebrated 25 years of service to clients across East Africa.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16 bg-aristocrat-green text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Celebrating 25+ Years in Service</h2>
          <p className="text-xl mb-12 max-w-3xl mx-auto">
            Thank you to all our clients and partners who have been with us on this journey.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            <div className="bg-white bg-opacity-10 p-6 rounded-lg">
              <h3 className="text-4xl font-bold mb-2">25+</h3>
              <p>Years in Business</p>
            </div>
            <div className="bg-white bg-opacity-10 p-6 rounded-lg">
              <h3 className="text-4xl font-bold mb-2">1000+</h3>
              <p>Satisfied Clients</p>
            </div>
            <div className="bg-white bg-opacity-10 p-6 rounded-lg">
              <h3 className="text-4xl font-bold mb-2">50+</h3>
              <p>Team Members</p>
            </div>
            <div className="bg-white bg-opacity-10 p-6 rounded-lg">
              <h3 className="text-4xl font-bold mb-2">2</h3>
              <p>Office Locations</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
