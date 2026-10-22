// ============================================
// NTL — Nordic Travel Luggage
// Det här är den enda filen du behöver ändra för att uppdatera sortimentet.
// ============================================
//
// PRIS:
//   price: "2 499 kr"          → visas som pris
//   price: ""                  → visas som "Pris på förfrågan"
//   originalPrice: "2 999 kr"  → (valfritt) visas överstruket, som rea
//
// BILDER:
//   Lägg bilder i images/<modell>/ — inga mellanslag eller å/ä/ö i filnamnen.
//   Första bilden i listan blir huvudbilden.
//
// ============================================

// WhatsApp-nummer: landskod + nummer, utan +, 00 eller inledande 0.
// Exempel: 070-123 45 67 → "46701234567"
const WHATSAPP_NUMBER = "46739844185";

// Sociala medier — lämna tomt ("") för att dölja.
const SOCIAL = {
  instagram: "",   // t.ex. "https://www.instagram.com/ntl.se"
  tiktok: "",
  facebook: ""
};

const MODELS = [
  {
    id: "wave",
    name: "NTL Wave",
    material: "PP (polypropylen)",
    description: "Hårdskalsväska i seg och lätt PP-plast med vågmönstrad yta som förstärker skalet. Fyra dubbla snurrhjul som roterar 360°, teleskophandtag i aluminium, TSA-lås och en expanderbar dragkedja när du behöver lite extra plats.",

    features: [
      "TSA-lås med sifferkod",
      "4 dubbla snurrhjul, 360°",
      "Expanderbar för extra packutrymme",
      "Teleskophandtag i aluminium",
      "Bärhandtag på ovansida och sida",
      "Lätt och slagtåligt PP-skal"
    ],

    // Storlekar. dims = [höjd, bredd, djup] i cm.
    // OBS: måtten nedan är standardmått för den här typen av set — mät väskorna och justera.
    // Ta bort de storlekar som inte säljs styckvis.
    sizes: [
      { id: "set",    name: "Komplett set (4 delar)", detail: "Beautybox + kabin + mellan + stor", price: "", originalPrice: "" },
      { id: "kabin",  name: "Kabinväska",   inch: '20"', dims: [55, 38, 22], volume: "ca 38 L",  use: "Handbagage · 1–4 nätter",       price: "" },
      { id: "mellan", name: "Mellanstor",   inch: '24"', dims: [65, 44, 26], volume: "ca 65 L",  use: "Incheckat · ungefär en vecka",  price: "" },
      { id: "stor",   name: "Stor",         inch: '28"', dims: [75, 50, 30], volume: "ca 100 L", use: "Incheckat · två veckor eller mer", price: "" },
      { id: "beauty", name: "Beautybox",    inch: '14"', dims: [25, 33, 17], volume: "",         use: "Smink, necessär och småsaker",  price: "" }
    ],

    // swatch = färgen på färgpricken. accent (valfritt) = andra färgen för tvåfärgade väskor.
    colors: [
      { id: "isbla",     name: "Isblå",            swatch: "#a3b9cc", images: ["images/wave/isbla-set.jpg", "images/wave/isbla-vinkel.jpg", "images/wave/isbla-front.jpg"] },
      { id: "petrol",    name: "Petrol",           swatch: "#0d5272", images: ["images/wave/petrol-set.jpg"] },
      { id: "skogsgron", name: "Skogsgrön/Orange", swatch: "#26362a", accent: "#d9661f", images: ["images/wave/skogsgron-set.jpg"] },
      { id: "grafit",    name: "Grafit",           swatch: "#3e3f42", images: ["images/wave/grafit-set.jpg"] },
      { id: "svart",     name: "Svart",            swatch: "#151517", images: ["images/wave/svart-set.jpg"] },
      { id: "rose",      name: "Rosé",             swatch: "#cf8a82", images: ["images/wave/rose-set.jpg"] }
    ],

    // Närbilder som visas under "Detaljerna" (fotade i färgen nedan).
    detailsColor: "Isblå",
    details: [
      { src: "images/detaljer/teleskophandtag.jpg", title: "Teleskophandtag", text: "Stadigt draghandtag i aluminium." },
      { src: "images/detaljer/snurrhjul.jpg",       title: "Dubbla snurrhjul", text: "Roterar 360° – lätt att styra, även fullpackad." },
      { src: "images/detaljer/tsa-las.jpg",         title: "TSA-lås",          text: "Sifferlås som tullen kan öppna utan att skada väskan." },
      { src: "images/detaljer/expander.jpg",        title: "Expanderbar",      text: "Öppna dragkedjan för extra packutrymme." },
      { src: "images/detaljer/barhandtag.jpg",      title: "Bärhandtag",       text: "Greppvänligt handtag för att lyfta väskan." },
      { src: "images/detaljer/emblem.jpg",          title: "NTL-emblem",       text: "Diskret emblem på framsidan." }
    ]
  }
];
