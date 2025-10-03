import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, ExternalLink, Code, Database, Cloud, Brain, ChevronDown, Menu, X } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const resumeProjects = [
    {
      title: "Intelligent Document Q&A System with RAG",
      description: "Production-ready document intelligence system processing 10K+ PDFs with 92% answer accuracy using RAG architecture",
      tech: ["HuggingFace", "FAISS", "Langchain", "FastAPI", "MongoDB", "Vercel"],
      impact: "Reduced document review time by 60% for legal teams",
      category: "NLP/RAG"
    },
    {
      title: "Real-Time Fraud Detection System",
      description: "Real-time fraud detection pipeline processing 100K+ transactions/day with 96% precision using ensemble models",
      tech: ["TensorFlow", "Redis", "PostgreSQL", "AWS", "LightGBM"],
      impact: "Prevented $50K+ potential fraud losses during testing phase",
      category: "ML/Production"
    },
    {
      title: "MediQ — RAG-Powered Medical Chatbot",
      description: "Intelligent medical chatbot using FAISS vector database and LLMs, achieving 94% response accuracy with 40k medical responses",
      tech: ["HuggingFace", "FAISS", "Langchain", "FastAPI", "MongoDB"],
      impact: "Improved medical information accessibility for healthcare professionals",
      category: "NLP/Healthcare"
    },
    {
      title: "Automated Data Pipeline for Business Intelligence",
      description: "ETL pipeline processing data from multiple sources with automated quality checks and anomaly detection",
      tech: ["Apache Spark", "PySpark", "Tableau", "Python", "PostgreSQL"],
      impact: "Reduced manual reporting time and improved data accuracy",
      category: "Data Engineering"
    },
    {
      title: "Computer Vision Quality Control System",
      description: "Defect detection system using pre-trained CNN models with automated annotation tools",
      tech: ["TensorFlow", "CNN", "Flask", "MongoDB", "Streamlit"],
      impact: "Reduced manual inspection time and improved defect detection",
      category: "Computer Vision"
    }
  ];

  const githubProjects = [
    {
      title: "AI-Powered Code Review Assistant",
      description: "Automated code review system using LLMs to identify bugs, security vulnerabilities, and suggest improvements",
      tech: ["OpenAI API", "Python", "FastAPI", "React"],
      category: "DevTools"
    },
    {
      title: "Sentiment Analysis Dashboard",
      description: "Real-time sentiment analysis of social media data with interactive visualizations and trend predictions",
      tech: ["BERT", "Plotly", "Streamlit", "MongoDB"],
      category: "NLP"
    },
    {
      title: "Recommendation Engine Framework",
      description: "Scalable recommendation system framework supporting collaborative filtering and content-based methods",
      tech: ["PyTorch", "FastAPI", "Redis", "PostgreSQL"],
      category: "ML Systems"
    },
    {
      title: "IoT Sensor Data Analytics",
      description: "Real-time analytics platform for IoT sensor data with predictive maintenance capabilities",
      tech: ["Apache Kafka", "PySpark", "InfluxDB", "Grafana"],
      category: "IoT/Analytics"
    },
    {
      title: "Text Summarization API",
      description: "RESTful API for extractive and abstractive text summarization using transformer models",
      tech: ["HuggingFace", "FastAPI", "Docker", "AWS"],
      category: "NLP"
    }
  ];

  const skills = {
    "Programming": ["Python", "SQL", "HTML/CSS", "Bash"],
    "ML/AI": ["TensorFlow", "PyTorch", "Scikit-learn", "LightGBM", "HuggingFace"],
    "Cloud": ["AWS EC2", "S3", "SageMaker", "GCP Vertex AI", "Vercel", "Heroku"],
    "Databases": ["MongoDB", "PostgreSQL", "MySQL", "ChromaDB", "Pinecone", "FAISS"],
    "Big Data": ["Apache Spark", "Hadoop", "PySpark", "Redis"]
  };

  const experience = [
    {
      company: "Brainovision.org",
      role: "Data Science Intern",
      period: "Apr 2025 – Jun 2025",
      achievements: [
        "Engineered predictive ML pipeline for hospital Length-of-Stay achieving R² = 0.84",
        "Implemented ensemble learning with LightGBM and Random Forest",
        "Deployed model on AWS EC2 with <200ms latency"
      ]
    },
    {
      company: "Cognifyz Technologies",
      role: "Machine Learning Intern",
      period: "May 2024 – Jul 2024",
      achievements: [
        "Developed restaurant rating prediction system with 85% accuracy",
        "Built collaborative filtering recommendation engine increasing engagement by 23%",
        "Conducted geospatial analysis for optimal restaurant locations"
      ]
    }
  ];

  const ProjectCard = ({ project, index }) => (
    <div 
      className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-700"
      style={{
        animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
      }}
    >
      <div className="flex items-start justify-between mb-3">
        <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs px-3 py-1 rounded-full font-semibold">
          {project.category}
        </div>
        <ExternalLink className="w-5 h-5 text-gray-400 hover:text-blue-400 transition-colors" />
      </div>
      <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
      <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tech.map((tech, i) => (
          <span key={i} className="bg-gray-700 text-gray-200 px-3 py-1 rounded-full text-xs font-medium">
            {tech}
          </span>
        ))}
      </div>
      {project.impact && (
        <div className="bg-green-900/30 border border-green-500/30 rounded-lg p-3 mt-4">
          <p className="text-green-300 text-sm font-medium">
            <span className="text-green-400">Impact:</span> {project.impact}
          </p>
        </div>
      )}
    </div>
  );

  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 min-h-screen text-white">
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .gradient-text {
          background: linear-gradient(to right, #60a5fa, #a78bfa, #ec4899);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      `}</style>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrollY > 50 ? 'bg-gray-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold gradient-text">Basheer Ahmed</h1>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Experience', 'Projects', 'Skills', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => setActiveSection(item.toLowerCase())}
                  className={`hover:text-blue-400 transition-colors ${activeSection === item.toLowerCase() ? 'text-blue-400 font-semibold' : ''}`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 space-y-3">
              {['Home', 'About', 'Experience', 'Projects', 'Skills', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    setActiveSection(item.toLowerCase());
                    setIsMenuOpen(false);
                  }}
                  className="block w-full text-left hover:text-blue-400 transition-colors py-2"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Home Section */}
      {activeSection === 'home' && (
        <section className="min-h-screen flex items-center justify-center px-6 pt-20">
          <div className="text-center max-w-4xl" style={{animation: 'fadeInUp 1s ease-out'}}>
            <div className="mb-6" style={{animation: 'float 3s ease-in-out infinite'}}>
              <Brain className="w-20 h-20 mx-auto text-blue-400" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text">
              ML Engineer & Data Scientist
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Building production-ready AI solutions with expertise in ML pipelines, 
              cloud deployment, and full-stack development
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <a href="mailto:basheerahmedshk@gmail.com" className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg transition-all">
                <Mail className="w-5 h-5" />
                Get in Touch
              </a>
              <button onClick={() => setActiveSection('projects')} className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 px-6 py-3 rounded-lg transition-all">
                <Code className="w-5 h-5" />
                View Projects
              </button>
            </div>
            <div className="flex justify-center gap-6">
              <a href="https://linkedin.com/in/basheerahmedshaik" target="_blank" className="hover:text-blue-400 transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="https://github.com/BasheerAhmedshk" target="_blank" className="hover:text-blue-400 transition-colors">
                <Github className="w-6 h-6" />
              </a>
            </div>
            <ChevronDown className="w-8 h-8 mx-auto mt-12 animate-bounce text-gray-400" />
          </div>
        </section>
      )}

      {/* About Section */}
      {activeSection === 'about' && (
        <section className="min-h-screen py-24 px-6">
          <div className="container mx-auto max-w-4xl" style={{animation: 'fadeInUp 0.8s ease-out'}}>
            <h2 className="text-4xl md:text-5xl font-bold mb-12 gradient-text">About Me</h2>
            <div className="bg-gray-800 rounded-2xl p-8 shadow-2xl border border-gray-700">
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                Results-driven ML Engineer and Data Scientist with hands-on experience in end-to-end machine
                learning pipelines, cloud deployment, and full-stack development. Proven track record of delivering
                production-ready AI solutions that drive business impact, including predictive models achieving 84%
                accuracy and recommendation systems serving 10K+ users.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 p-6 rounded-xl border border-blue-500/30">
                  <h3 className="text-xl font-bold mb-4 text-blue-300">Education</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="font-semibold text-white">PGDM in AI & Data Science</p>
                      <p className="text-gray-400">Ashoka School of Business</p>
                      <p className="text-sm text-gray-500">Aug 2023 – Jun 2025</p>
                    </div>
                    <div>
                      <p className="font-semibold text-white">BSc in IoT</p>
                      <p className="text-gray-400">KBN College</p>
                      <p className="text-sm text-gray-500">Jul 2019 – Jun 2022</p>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-green-900/30 to-teal-900/30 p-6 rounded-xl border border-green-500/30">
                  <h3 className="text-xl font-bold mb-4 text-green-300">Certifications</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• SQL Analytics (IIT Guwahati)</li>
                    <li>• Certified Web Application Penetration Tester</li>
                    <li>• Deloitte STEM Virtual Internship</li>
                    <li>• PicoCTF Competition</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Experience Section */}
      {activeSection === 'experience' && (
        <section className="min-h-screen py-24 px-6">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 gradient-text" style={{animation: 'fadeInUp 0.8s ease-out'}}>
              Experience
            </h2>
            <div className="space-y-8">
              {experience.map((exp, index) => (
                <div 
                  key={index}
                  className="bg-gray-800 rounded-2xl p-8 shadow-2xl border border-gray-700"
                  style={{animation: `fadeInUp 0.6s ease-out ${index * 0.2}s both`}}
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-1">{exp.role}</h3>
                      <p className="text-blue-400 font-semibold">{exp.company}</p>
                    </div>
                    <span className="text-gray-400 mt-2 md:mt-0">{exp.period}</span>
                  </div>
                  <ul className="space-y-3 mt-6">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-300">
                        <span className="text-blue-400 mt-1">▹</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Projects Section */}
      {activeSection === 'projects' && (
        <section className="min-h-screen py-24 px-6">
          <div className="container mx-auto max-w-7xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text" style={{animation: 'fadeInUp 0.8s ease-out'}}>
              Featured Projects
            </h2>
            <p className="text-gray-400 mb-12 text-lg">Production-ready AI solutions with measurable impact</p>
            
            {/* Resume Projects */}
            <div className="mb-16">
              <h3 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
                <Database className="w-8 h-8 text-blue-400" />
                Flagship Projects
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {resumeProjects.map((project, index) => (
                  <ProjectCard key={index} project={project} index={index} />
                ))}
              </div>
            </div>

            {/* GitHub Projects */}
            <div>
              <h3 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
                <Github className="w-8 h-8 text-purple-400" />
                Open Source & Personal Projects
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {githubProjects.map((project, index) => (
                  <ProjectCard key={index} project={project} index={index + resumeProjects.length} />
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Skills Section */}
      {activeSection === 'skills' && (
        <section className="min-h-screen py-24 px-6">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 gradient-text" style={{animation: 'fadeInUp 0.8s ease-out'}}>
              Technical Skills
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Object.entries(skills).map(([category, items], index) => (
                <div 
                  key={category}
                  className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 shadow-xl border border-gray-700"
                  style={{animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`}}
                >
                  <h3 className="text-xl font-bold mb-4 text-blue-400">{category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill, i) => (
                      <span key={i} className="bg-gray-700 text-gray-200 px-3 py-1 rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Contact Section */}
      {activeSection === 'contact' && (
        <section className="min-h-screen flex items-center justify-center px-6">
          <div className="text-center max-w-2xl" style={{animation: 'fadeInUp 0.8s ease-out'}}>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 gradient-text">Get In Touch</h2>
            <p className="text-xl text-gray-300 mb-12">
              I'm currently available for new opportunities. Whether you have a question or just want to say hi, 
              I'll get back to you!
            </p>
            <div className="space-y-4">
              <a href="mailto:basheerahmedshk@gmail.com" className="flex items-center justify-center gap-3 bg-gray-800 hover:bg-gray-700 px-6 py-4 rounded-xl transition-all">
                <Mail className="w-5 h-5 text-blue-400" />
                <span>basheerahmedshk@gmail.com</span>
              </a>
              <a href="tel:+918340676856" className="flex items-center justify-center gap-3 bg-gray-800 hover:bg-gray-700 px-6 py-4 rounded-xl transition-all">
                <Phone className="w-5 h-5 text-green-400" />
                <span>+91 8340676856</span>
              </a>
              <div className="flex items-center justify-center gap-3 bg-gray-800 px-6 py-4 rounded-xl">
                <MapPin className="w-5 h-5 text-red-400" />
                <span>Vijayawada, Andhra Pradesh, India</span>
              </div>
            </div>
            <div className="flex justify-center gap-6 mt-8">
              <a href="https://linkedin.com/in/basheerahmedshaik" target="_blank" className="bg-blue-600 hover:bg-blue-700 p-4 rounded-full transition-all">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="https://github.com/BasheerAhmedshk" target="_blank" className="bg-gray-700 hover:bg-gray-600 p-4 rounded-full transition-all">
                <Github className="w-6 h-6" />
              </a>
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="bg-gray-900 py-8 text-center text-gray-400 border-t border-gray-800">
        <p>© 2025 Shaik Basheer Ahmed. Built with React & Tailwind CSS</p>
      </footer>
    </div>
  );
};

export default Portfolio;