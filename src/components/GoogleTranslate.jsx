import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

export default function GoogleTranslate() {
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState("EN");
  const langRef = useRef(null);

  const languages = [
    { name: "English", code: "en", label: "EN" },
    { name: "Hindi", code: "hi", label: "HI" },
    { name: "Spanish", code: "es", label: "ES" },
    { name: "Russian", code: "ru", label: "RU" },
    { name: "Portuguese", code: "pt", label: "PT" },
    { name: "German", code: "de", label: "DE" },
  ]



  useEffect(() => {
    if (!window.googleTranslateElementInit) {
      window.googleTranslateElementInit = () => {
        if (window.google?.translate) {
          new window.google.translate.TranslateElement(
            {
              pageLanguage: "en",
              includedLanguages:
                "en,hi,es,zh-CN,ar,fr,ru,pt,de",
              autoDisplay: false,
            },
            "google_translate_element"
          );
        }
      };

      const script = document.createElement("script");

      script.src =
        "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";

      script.async = true;

      document.body.appendChild(script);
    }

    const match = document.cookie.match(
      /googtrans=\/en\/([^;]+)/
    );

    if (match) {
      const lang = languages.find(
        (item) => item.code === match[1]
      );

      if (lang) {
        setCurrentLang(lang.label);
      }
    }

    const handleClickOutside = (event) => {
      if (
        langRef.current &&
        !langRef.current.contains(event.target)
      ) {
        setIsLangOpen(false);
      }
    };

    document.addEventListener(
      "mousedown",
      handleClickOutside
    );

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };
  }, []);


  useEffect(() => {
    const removeGoogleBanner = () => {
      const banners = document.querySelectorAll(
        ".goog-te-banner-frame, iframe.goog-te-banner-frame"
      );

      banners.forEach((banner) => {
        banner.remove();
      });

      const balloons = document.querySelectorAll(
        ".goog-te-balloon-frame"
      );

      balloons.forEach((balloon) => {
        balloon.remove();
      });

      document.body.style.top = "0px";

      document.documentElement.style.top = "0px";

      document.body.style.marginTop = "0px";
    };

    removeGoogleBanner();

    const observer = new MutationObserver(() => {
      removeGoogleBanner();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    const interval = setInterval(() => {
      removeGoogleBanner();
    }, 500);

    return () => {
      observer.disconnect();
      clearInterval(interval);
    };
  }, []);


  const handleLangChange = (langCode, label) => {
    document.cookie = `googtrans=/en/${langCode}; path=/`;

    document.cookie = `googtrans=/en/${langCode}; path=/; domain=${window.location.hostname}`;

    setCurrentLang(label);
    setIsLangOpen(false);

    window.location.reload();
  };

  return (
    <>
      <div
        id="google_translate_element"
        className="hidden"
      />

      <div
        className="relative"
        ref={langRef}
      >
        <button
          type="button"
          onClick={() =>
            setIsLangOpen(!isLangOpen)
          }
          className="flex items-center gap-2 px-4 py-2 bg-gray-50 hover:bg-gray-100 rounded-full border border-gray-200 text-xs font-bold text-gray-700 uppercase tracking-wider transition-all"
        >
          <span className="text-emerald-500 text-sm">
            •
          </span>

          {currentLang}

          <ChevronDown
            size={14}
            className={`transition-transform duration-300 ${
              isLangOpen ? "rotate-180" : ""
            }`}
          />
        </button>

        {isLangOpen && (
          <div className="absolute right-0 mt-3 w-48 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden z-[9999]">
            {languages.map((lang) => (
              <button
                type="button"
                key={lang.code}
                onClick={() =>
                  handleLangChange(
                    lang.code,
                    lang.label
                  )
                }
                className="w-full text-left px-4 py-3 hover:bg-indigo-50 hover:text-indigo-600 text-sm font-semibold transition-colors border-b last:border-0 border-gray-50"
              >
                {lang.name}
              </button>
            ))}
          </div>
        )}
      </div>
    </>
  );
}