import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Header from './Header';
import Footer from './Footer';
import { Button } from "./ui/button";
import { Calendar, Clock, User, BookOpen, Scale, Gavel, TrendingUp, Filter, Search, ArrowRight } from 'lucide-react';

const AktuellesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('alle');
  const [searchTerm, setSearchTerm] = useState('');

  // Mock-Artikel über betriebliche Altersvorsorge
  const articles = [
    {
      id: 1,
      title: "Haftung des Arbeitgebers in der betrieblichen Altersversorgung und Minimierungsstrategien",
      excerpt: "Ein umfassender Überblick über die Haftungsrisiken von Arbeitgebern in der bAV und bewährte Strategien zur Risikominimierung. Rechtliche Grundlagen und praktische Lösungsansätze für Unternehmen.",
      date: "2024-12-20",
      category: "Expertenmeinung",
      author: "Bettina Glaab",
      readTime: "12 Min.",
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400&h=240&fit=crop",
      tags: ["Haftung", "Arbeitgeber", "Risikominimierung"],
      url: "https://www.anwalt.de/rechtstipps/haftung-des-arbeitgebers-in-der-betrieblichen-altersversorgung-und-minimierungsstrategien_185184.html"
    },
    {
      id: 2,
      title: "BAG-Urteil: Neue Pflichten bei der Entgeltumwandlung",
      excerpt: "Das Bundesarbeitsgericht hat in einem wegweisenden Urteil die Arbeitgeberpflichten bei der Entgeltumwandlung präzisiert. Unternehmen müssen künftig über steuerliche Auswirkungen informieren.",
      date: "2024-12-15",
      category: "Rechtsprechung",
      author: "Dr. Maria Schmidt",
      readTime: "5 Min.",
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400&h=240&fit=crop",
      tags: ["BAG", "Entgeltumwandlung", "Arbeitgeberpflichten"],
      url: "#"
    },
    {
      id: 3,
      title: "Betriebsrentenstärkungsgesetz: Änderungen ab 2025",
      excerpt: "Mit dem neuen Jahr treten wichtige Änderungen des Betriebsrentenstärkungsgesetzes in Kraft. Wir erläutern die wichtigsten Neuerungen für Arbeitgeber und Arbeitnehmer.",
      date: "2024-12-10",
      category: "Gesetzgebung",
      author: "Prof. Dr. Thomas Weber",
      readTime: "8 Min.",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=240&fit=crop",
      tags: ["BRSG", "Gesetzesänderung", "2025"],
      url: "#"
    },
    {
      id: 4,
      title: "Digitalisierung der bAV: Chancen und Herausforderungen",
      excerpt: "Expertenmeinung zur fortschreitenden Digitalisierung in der betrieblichen Altersvorsorge. Welche Potentiale bieten moderne HR-Technologien?",
      date: "2024-12-05",
      category: "Expertenmeinung",
      author: "Sarah Mueller",
      readTime: "6 Min.",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=240&fit=crop",
      tags: ["Digitalisierung", "HR-Tech", "Innovation"],
      url: "#"
    },
    {
      id: 5,
      title: "BFH stärkt Arbeitnehmerrechte bei Direktversicherung",
      excerpt: "Der Bundesfinanzhof hat in einem aktuellen Urteil die Rechte von Arbeitnehmern bei der Direktversicherung gestärkt. Die Auswirkungen für die Praxis.",
      date: "2024-11-28",
      category: "Rechtsprechung",
      author: "Dr. Klaus Weber",
      readTime: "4 Min.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=240&fit=crop",
      tags: ["BFH", "Direktversicherung", "Urteil"],
      url: "#"
    },
    {
      id: 6,
      title: "Nachhaltige bAV: ESG-Kriterien im Fokus",
      excerpt: "Immer mehr Unternehmen setzen bei der betrieblichen Altersvorsorge auf nachhaltige Anlagestrategien. Wie ESG-Kriterien die bAV verändern.",
      date: "2024-11-20",
      category: "Expertenmeinung",
      author: "Lisa Hoffmann",
      readTime: "7 Min.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=240&fit=crop",
      tags: ["ESG", "Nachhaltigkeit", "Investments"],
      url: "#"
    }
  ];

  const categories = ['alle', 'Rechtsprechung', 'Gesetzgebung', 'Expertenmeinung'];

  // Filter articles
  const filteredArticles = articles.filter(article => {
    const matchesCategory = selectedCategory === 'alle' || article.category === selectedCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Rechtsprechung': return <Gavel className="w-4 h-4" />;
      case 'Gesetzgebung': return <Scale className="w-4 h-4" />;
      case 'Expertenmeinung': return <User className="w-4 h-4" />;
      default: return <BookOpen className="w-4 h-4" />;
    }
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case 'Rechtsprechung': return 'bg-red-50 text-red-700 border-red-200';
      case 'Gesetzgebung': return 'bg-blue-50 text-blue-700 border-blue-200';
      case 'Expertenmeinung': return 'bg-green-50 text-green-700 border-green-200';
      default: return 'bg-gray-50 text-gray-700 border-gray-200';
    }
  };

  return (
    <div className="min-h-screen" style={{backgroundColor: '#001f3d'}}>
      <Header />
      
      {/* Hero Section - Same structure as main pages */}
      <section className="py-16 md:py-24" style={{backgroundColor: '#001f3d'}}>
        <div className="max-w-[1200px] mx-auto px-6 md:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-semibold text-white mb-6 leading-tight tracking-tight">
              Aktuelles zur <span className="text-acencia-accent">bAV</span>
            </h1>
            <p className="text-xl text-gray-300 mb-4 leading-relaxed">
              Bleiben Sie informiert über die neuesten Entwicklungen, Gesetze und Trends in der bAV
            </p>
            <p className="text-sm text-gray-400">
              Informationen aus dem Geschäftsbetrieb gemäß §93 HGB
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-16 md:py-20" style={{backgroundColor: '#001f3d'}}>
        <div className="max-w-[1200px] mx-auto px-6 md:px-8">
          <div className="bg-black/30 backdrop-blur-sm rounded-lg p-8 border border-white/10 mb-12">
            <div className="flex flex-col md:flex-row gap-6 items-center">
              {/* Search */}
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Artikel durchsuchen..."
                  className="w-full pl-10 pr-4 py-3 bg-black/40 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-acencia-accent focus:border-transparent transition-all duration-150"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-150 ${
                      selectedCategory === category
                        ? 'bg-acencia-accent text-white'
                        : 'bg-black/40 border border-white/20 text-gray-300 hover:bg-black/60'
                    }`}
                  >
                    {category === 'alle' ? 'Alle Kategorien' : category}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article, index) => (
              <a 
                key={article.id}
                href={article.url}
                target={article.url !== '#' ? '_blank' : '_self'}
                rel={article.url !== '#' ? 'noopener noreferrer' : ''}
                className="block group"
              >
                <article className="bg-black/30 backdrop-blur-sm rounded-lg border border-white/10 overflow-hidden hover:bg-black/40 transition-all duration-150 h-full">
                  <div className="aspect-w-16 aspect-h-9">
                    <img 
                      src={article.image} 
                      alt={article.title}
                      className="w-full h-48 object-cover"
                    />
                  </div>
                  
                  <div className="p-6">
                    {/* Category Badge */}
                    <div className="flex items-center gap-2 mb-4">
                      <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium border ${getCategoryColor(article.category)}`}>
                        {getCategoryIcon(article.category)}
                        {article.category}
                      </span>
                      {article.url !== '#' && (
                        <span className="inline-flex items-center gap-1 px-3 py-1 bg-blue-50 text-blue-700 text-xs rounded-full border border-blue-200">
                          <ArrowRight className="w-3 h-3" />
                          Extern
                        </span>
                      )}
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-semibold text-gray-900 mb-3 leading-tight group-hover:text-orange-600 transition-colors duration-150 line-clamp-2">
                      {article.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>

                    {/* Meta Info */}
                    <div className="flex items-center justify-between text-xs text-gray-500 pt-4 border-t border-gray-100">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <User className="w-3 h-3" />
                          <span className="truncate max-w-20">{article.author}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          <span>{article.readTime}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        <span>{new Date(article.date).toLocaleDateString('de-DE')}</span>
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mt-4">
                      {article.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              </a>
            ))}
          </div>

          {/* No Results */}
          {filteredArticles.length === 0 && (
            <div className="text-center py-12">
              <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Keine Artikel gefunden</h3>
              <p className="text-gray-600">Versuchen Sie andere Suchbegriffe oder wählen Sie eine andere Kategorie.</p>
            </div>
          )}

          {/* Back to bAV Button */}
          <div className="text-center mt-12">
            <Link to="/die-bav">
              <Button className="bg-white border border-gray-200 hover:bg-gray-50 text-gray-900 px-6 py-3 rounded-lg font-medium transition-colors duration-150">
                Zurück zur bAV Übersicht
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default AktuellesPage;