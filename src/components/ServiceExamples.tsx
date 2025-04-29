
import React from 'react';

const ServiceExamples = () => {
  return (
    <section id="service-examples" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-science-dark">Our Work Examples</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore some of our recent projects that showcase our expertise and commitment to excellence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <div key={item} className="bg-gray-50 rounded-lg overflow-hidden shadow-md transition-all hover:shadow-xl">
              <div className="h-48 bg-gray-200"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-science-dark">Project Example {item}</h3>
                <p className="text-gray-600 mb-4">
                  A brief description of this project and the solutions we provided to meet our client's needs.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">Technology</span>
                  <span className="px-3 py-1 bg-green-100 text-green-800 text-xs rounded-full">Innovation</span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-800 text-xs rounded-full">Design</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <button className="px-6 py-3 bg-science-blue text-white rounded-md hover:bg-blue-700 transition-colors">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServiceExamples;
