// Scroll to top button
const scrollBtn = document.createElement("button");
scrollBtn.innerText = "↑ Top";
scrollBtn.style.position = "fixed";
scrollBtn.style.bottom = "20px";
scrollBtn.style.right = "20px";
scrollBtn.style.display = "none";
document.body.appendChild(scrollBtn);

document.addEventListener("DOMContentLoaded", () => {
  const langSelect = document.getElementById("language-select");
  const currentLang = new URLSearchParams(window.location.search).get("lang") || "en";

  // Set dropdown to current language
  langSelect.value = currentLang;

  // Handle change
  langSelect.addEventListener("change", () => {
    const selectedLang = langSelect.value;
    const url = new URL(window.location.href);
    url.searchParams.set("lang", selectedLang);
    window.location.href = url.toString();
  });

  // Apply translations
  for (const id in translations[currentLang]) {
    const element = document.getElementById(id);
    if (element) {
      element.textContent = translations[currentLang][id];
    }
  }
});


//Language toggle functionality
const translations = {
  en: {
    // Home Page
    "home-heading": "Reliable Car Repairs & Servicing",
    "home-subheading": "We keep your vehicle running smoothly and safely.",
    "services-heading": "Our Services",
    "service-1": "Engine Diagnostics",
    "service-2": "Brake Repairs",
    "service-3": "Oil Changes",
    "service-4": "Battery Replacement",

    // Video Tips Section
    videoTipsTitle: "🔧 Video Tips for Car Owners",
    videoTipsIntro: "Explore these helpful videos to learn basic car maintenance, safety tips, and DIY repair techniques.",
    video1Desc: "Skip the mechanic: 10 DIY car repairs",
    video2Desc: "Top 5 DIY tips for beginners",
    video3Desc: "How to perfectly maintain your first car",

    // About Page
    "about-heading": "About AutoCare Solutions",
    "about-text-1": "AutoCare Solutions is a proudly South African car repair and servicing business.",
    "about-text-2": "Our mission is to keep your car running safely and efficiently.",
    "about-caption": "Meet our certified mechanics",
    "values-heading": "Why Choose Us?",
    "value-1": "✅ Experienced and certified mechanics",
    "value-2": "✅ Transparent pricing and honest advice",
    "value-3": "✅ Fast turnaround and quality parts",
    "value-4": "✅ Friendly service and customer care",

    // Contact Page
    "contact-heading": "Get in Touch",
    "contact-intro": "Need a quote or want to book a service? Fill out the form below or reach us directly.",
    "label-name": "Name:",
    "label-email": "Email:",
    "label-message": "Message:",
    "submit-button": "Send Message",
    "contact-details-heading": "Contact Details"
  },
  zu: {
    // Home Page
    "home-heading": "Ukulungiswa Nokugcinwa Kwezimoto Okuthembekile",
    "home-subheading": "Sigcina imoto yakho isebenza kahle futhi iphephile.",
    "services-heading": "izinsizakalo zethu",
    "service-1": "Ukuhlolwa Kwenjini",
    "service-2": "Ukulungiswa Kwamabhuleki",
    "service-3": "Ukushintshwa Kukawoyela",
    "service-4": "Ukufakwa Kwebhethri Elisha",

    // Video Tips Section
    videoTipsTitle: "🔧 Amavidiyo Wamathiphu Wabanikazi Bezimoto",
    videoTipsIntro: "Hlola lawa mavidiyo asizayo ukuze ufunde ukugcinwa okuyisisekelo kwezimoto, amathiphu okuphepha, nezindlela zokuzilungisa ngokwakho.",
    video1Desc: "Gxuma kumakhenikha: Ukulungiswa kwezimoto eziyi-10 ongazenza wedwa",
    video2Desc: "Amathiphu ayi-5 wokuzilungisa ngokwakho wabaqalayo",
    video3Desc: "Indlela yokugcina imoto yakho yokuqala kahle kakhulu",

    // About Page
    "about-heading": "Mayelana ne-AutoCare Solutions",
    "about-text-1": "I-AutoCare Solutions iyibhizinisi laseNingizimu Afrika elise-Emfuleni.",
    "about-text-2": "Inhloso yethu wukugcina imoto yakho iphephile futhi isebenza kahle.",
    "about-caption": "Hlangana nochwepheshe bethu abaqinisekisiwe",
    "values-heading": "Kungani Ukhetha Thina?",
    "value-1": "✅ Ochwepheshe abanolwazi nabaqinisekisiwe",
    "value-2": "✅ Amanani acacile kanye neseluleko esiqotho",
    "value-3": "✅ Ukulungiswa okusheshayo nezinto ezisezingeni eliphezulu",
    "value-4": "✅ Insizakalo enobungane nokunakekelwa kwamakhasimende",

    // Contact Page
    "contact-heading": "Xhumana Nathi",
    "contact-intro": "Udinga ikhotheshini noma ufuna ukubhuka insizakalo? Gcwalisa ifomu elingezansi noma uxhumane nathi ngokuqondile.",
    "label-name": "Igama Eligcwele:",
    "label-email": "Ikheli le-imeyili:",
    "label-message": "Umlayezo Wakho:",
    "submit-button": "Thumela Umlayezo",
    "contact-details-heading": "Imininingwane Yokuxhumana"
  }
};

const lang = new URLSearchParams(window.location.search).get("lang") || "en";

document.addEventListener("DOMContentLoaded", () => {
  for (const id in translations[lang]) {
    const element = document.getElementById(id);
    if (element) {
      element.textContent = translations[lang][id];
    }
  }
});
// End of language toggle functionality 





