import React from 'react';
import { FaBook, FaVideo, FaDownload, FaChessKnight } from 'react-icons/fa';
import resourcesImg from '../assets/resources.jpg';
import { toast } from 'react-toastify';

const ResourcesPage = () => {
  const categories = [
    {
      name: "Beginner Guides",
      resources: [
        { title: "Photography Basics", type: "PDF Guide", icon: <FaBook /> },
        { title: "Knitting Starter Kit", type: "Video Series", icon: <FaVideo /> }
      ]
    },
    {
      name: "Advanced Techniques",
      resources: [
        { title: "Oil Painting Masterclass", type: "E-book", icon: <FaBook /> },
        { title: "Chess Strategies", type: "Interactive Guide", icon: <FaChessKnight /> }
      ]
    }
  ];

  const unknownButton =(e)=>{
    e.preventDefault()
    toast.success('Downloaded successfully.')
  }

  return (
    <div className="min-h-screen pt-30 bg-gradient-to-br from-base-100 to-base-200 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="flex flex-col md:flex-row items-center gap-12 mb-16">
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Hobby <span className="text-base-content">Resources</span>
            </h1>
            <p className="text-xl text-base-content/80 mb-6">
              Level up your skills with our curated collection of tutorials, guides, and learning materials.
            </p>
          </div>
          <div className="md:w-1/2">
            <img 
              src={resourcesImg} 
              alt="Learning resources" 
              className="rounded-xl shadow-xl w-full h-auto max-h-96 object-cover" 
            />
          </div>
        </div>

        {/* Resource Categories */}
        <div className="space-y-12">
          {categories.map((category, index) => (
            <div key={index} className="card bg-base-100/30 backdrop-blur-sm border border-white/10 shadow-xl p-8">
              <h2 className="text-2xl font-bold mb-6 text-primary">{category.name}</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {category.resources.map((resource, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-4 hover:bg-base-100/20 rounded-lg transition-all">
                    <div className="p-3 rounded-full bg-primary/10 text-primary text-xl">
                      {resource.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">{resource.title}</h3>
                      <p className="text-base-content/70">{resource.type}</p>
                      <button onClick={unknownButton} className="btn btn-sm btn-ghost mt-2 gap-2">
                        <FaDownload /> Download
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResourcesPage;