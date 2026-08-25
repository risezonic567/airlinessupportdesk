import { useState, useMemo, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { blogPosts, categories } from "../data/blog";
import BlogCard from "../components/BlogCard";
import CategoryFilter from "../components/CategoryFilter";
import SearchBar from "../components/SearchBar";
import { SearchX } from "lucide-react";
import { Helmet } from "react-helmet";

export default function Blog() {
  const [searchParams, setSearchParams] = useSearchParams();
  const urlCategory = searchParams.get("category") || "All";
  const urlQuery = searchParams.get("search") || "";

  const [selectedCategory, setSelectedCategory] = useState(urlCategory);
  const [searchQuery, setSearchQuery] = useState(urlQuery);

  useEffect(() => {
    setSelectedCategory(urlCategory);
    setSearchQuery(urlQuery);
  }, [urlCategory, urlQuery]);

  const handleCategorySelect = (cat) => {
    setSelectedCategory(cat);
    const params = new URLSearchParams(searchParams);
    if (cat === "All") {
      params.delete("category");
    } else {
      params.set("category", cat);
    }
    setSearchParams(params);
  };

  const handleSearchChange = (query) => {
    setSearchQuery(query);
    const params = new URLSearchParams(searchParams);
    if (!query.trim()) {
      params.delete("search");
    } else {
      params.set("search", query);
    }
    setSearchParams(params);
  };

  const filteredBlogs = useMemo(() => {
    return blogPosts.filter((post) => {
      const matchesCategory =
        selectedCategory === "All" || post.category.toLowerCase() === selectedCategory.toLowerCase();

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        post.title.toLowerCase().includes(q) ||
        post.excerpt.toLowerCase().includes(q) ||
        post.category.toLowerCase().includes(q) ||
        post.tags.some((tag) => tag.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <>
     <Helmet>
  <title>
     Airline Customer Support & Travel Assistance | Airlines 
  </title>

  <meta
    name="description"
    content="Get airline customer support, booking help, cancellation and refund guides, baggage assistance, and travel tips for a smoother journey"
  />

  <link
    rel="canonical"
    href="https://airlinessupport-desk.com/blog"
  />

  <script type="application/ld+json">
{`{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://airlinessupport-desk.com/#website",
      "url": "https://airlinessupport-desk.com/",
      "name": "Airlines Support Desk",
      "description": "Your trusted platform for flight bookings, airline assistance, cancellation guides, and travel support information.",
      "publisher": {
        "@id": "https://airlinessupport-desk.com/#organization"
      },
      "inLanguage": "en"
    },
    {
      "@type": "Organization",
      "@id": "https://airlinessupport-desk.com/#organization",
      "name": "Airlines Support Desk",
      "url": "https://airlinessupport-desk.com/",
      "logo": {
        "@type": "ImageObject",
        "url": "https://airlinessupport-desk.com/images/ASD%20Logo.png"
      },
      "email": "support@airlinessupportdesk.com"
    },
    {
      "@type": "CollectionPage",
      "@id": "https://airlinessupport-desk.com/blog#webpage",
      "url": "https://airlinessupport-desk.com/blog",
      "name": "Explore Our Articles | Airlines Support Desk",
      "description": "Explore airline customer support, flight bookings, cancellations, refunds, baggage policies, travel guides, and other travel assistance articles.",
      "isPartOf": {
        "@id": "https://airlinessupport-desk.com/#website"
      },
      "about": {
        "@type": "Thing",
        "name": "Airline Customer Support and Travel Assistance"
      },
      "publisher": {
        "@id": "https://airlinessupport-desk.com/#organization"
      },
      "inLanguage": "en",
      "mainEntity": {
        "@id": "https://airlinessupport-desk.com/blog#itemlist"
      }
    },
    {
      "@type": "ItemList",
      "@id": "https://airlinessupport-desk.com/blog#itemlist",
      "name": "Airlines Support Desk Articles",
      "description": "Latest travel assistance and airline customer support articles from Airlines Support Desk.",
      "numberOfItems": 10,
      "itemListOrder": "https://schema.org/ItemListOrderDescending",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "url": "https://airlinessupport-desk.com/blog/numero-de-telefono-de-jetblue-usa-informacion-de-ayuda-y-contacto",
          "name": "Número de teléfono de JetBlue USA: Información de Ayuda y Contacto"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "url": "https://airlinessupport-desk.com/blog/contactar-a-un-agente-de-jetBlue-en-espanol-consejos-y-recomendaciones",
          "name": "Contactar a un Agente de JetBlue en Español: Consejos y Recomendaciones"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "url": "https://airlinessupport-desk.com/blog/servizio-clienti-wizz-air-italia-tutti-i-canali-di-supporto",
          "name": "Servizio Clienti Wizz Air Italia +39-800-974-732 – Tutti i Canali di Supporto"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "url": "https://airlinessupport-desk.com/blog/reembolso-de-vuelo-de-ryanair-usa-una-guia-para-solicitar-un-reembolso",
          "name": "Reembolso de vuelo de Ryanair USA: Una guía para solicitar un reembolso"
        },
        {
          "@type": "ListItem",
          "position": 5,
          "url": "https://airlinessupport-desk.com/blog/como-cancelar-un-vuelo-de-spirit-airlines-usa-guia-para-los-pasajeros-que-desean-cancelar-un-vuelo.",
          "name": "Cómo cancelar un vuelo de Spirit Airlines USA?"
        },
        {
          "@type": "ListItem",
          "position": 6,
          "url": "https://airlinessupport-desk.com/blog/ita-airwaysnumero-telefonic-assistenza-clienti-modifica-volo-rimborso-e-cancellazione",
          "name": "ITA Airways: Numero Telefonico, Assistenza Clienti, Modifica Volo, Rimborso e Cancellazione"
        },
        {
          "@type": "ListItem",
          "position": 7,
          "url": "https://airlinessupport-desk.com/blog/assistenza-clienti-easyJet-italia-come-contattare-il-servizio-clienti-qual-%C3%A8-il-numero-di-contatto-di-easyJet-per-l-assistenza-speciale",
          "name": "Assistenza Clienti easyJet Italia: Come Contattare il Servizio Clienti"
        },
        {
          "@type": "ListItem",
          "position": 8,
          "url": "https://airlinessupport-desk.com/blog/numero-di-contatto-di-frontier-airlines-marca-el-18888434146-usa-o-el-34900680866-espana",
          "name": "Numero de contacto de Frontier Airlines: Marca el 18888434146 (USA.) o el 34900680866 (España)"
        },
        {
          "@type": "ListItem",
          "position": 9,
          "url": "https://airlinessupport-desk.com/blog/volotea-servizio-centi-guida-a-prenotazioni-modifiche-cancellazioni-e-rimborsi",
          "name": "Volotea Servizio Clienti: Guida a Prenotazioni, Modifiche, Cancellazioni e Rimborsi"
        },
        {
          "@type": "ListItem",
          "position": 10,
          "url": "https://airlinessupport-desk.com/blog/assistenza-clienti-ryanair-italia-come-posso-contattare-ryanair-telefonicamente-ryanair-italy-customer-service-how-can-i-contact-ryanair-by-phone",
          "name": "Assistenza clienti Ryanair Italia: come posso contattare Ryanair telefonicamente?"
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://airlinessupport-desk.com/blog#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://airlinessupport-desk.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Blog",
          "item": "https://airlinessupport-desk.com/blog"
        }
      ]
    }
  ]
}
`}
</script>


</Helmet>
    <div className="min-h-screen bg-gray-50/50 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            Explore Our Articles
          </h1>
          <p className="text-gray-600 text-sm sm:text-base mt-2">
            Filter by topic or search keywords to find exact content tailored to your tech journey.
          </p>
        </div>

        {/* Search */}
        <SearchBar searchQuery={searchQuery} setSearchQuery={handleSearchChange} />

        {/* Category Filters */}
        <CategoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={handleCategorySelect}
        />

        {/* Blog Grid */}
        {filteredBlogs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-8">
            {filteredBlogs.map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-3xl border border-gray-100 my-8 shadow-sm">
            <SearchX className="w-12 h-12 text-gray-500 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-gray-900 mb-1">No articles found</h3>
            <p className="text-gray-500 text-sm max-w-md mx-auto mb-6">
              We couldn't find anything matching your search query or category filter. Try clearing your search parameters.
            </p>
            <button
              onClick={() => {
                handleCategorySelect("All");
                handleSearchChange("");
              }}
              className="px-4 py-2 bg-indigo-600 text-white text-md font-semibold rounded-xl hover:bg-indigo-500 transition-colors"
            >
              Reset All Filters
            </button>
          </div>
        )}

      </div>
    </div>
    </>
  );
}