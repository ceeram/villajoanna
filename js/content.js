/* =============================================================================
 *  Villa Joanna — site content
 * -----------------------------------------------------------------------------
 *  THIS IS THE ONLY FILE YOU NEED TO EDIT TO UPDATE THE SITE'S CONTENT.
 *
 *  1. PROPERTY  — language-independent facts (price, address, photos, contact).
 *  2. I18N      — translated copy for English / Dutch / German / Spanish.
 *
 *  Anything written as "[[...]]" is placeholder text — replace it with the real
 *  details. To add or replace photos: put originals in images/_originals/, run
 *  `make images`, then list the file names in PROPERTY.gallery below.
 * ===========================================================================*/

const PROPERTY = {
  name: "Villa Joanna",

  // Shown in the hero. Keep it short.
  price: "€ 1.085.000",

  // Map / address. Set coords to your real lat,lng so the map points correctly.
  // (Approximate location of Badia Gran, Mallorca — refine if you like.)
  coords: { lat: 39.4039, lng: 2.7456 },

  // How far out the map is zoomed (half-view width in degrees; larger = wider).
  mapRadius: 0.16,

  // Photos. Give just the file name — the site looks in images/photos/ for the
  // full version and images/photos/thumb/ for the gallery thumbnail. (Put your
  // originals in images/_originals/ and run `make images` to (re)generate both.)

  // The big image at the top of the page.
  heroImage: "kmal4642.jpg",

  // The image shown next to the "About" text (portrait works best here).
  aboutImage: "89a0602.jpg",

  // Gallery photos, in display order. Reorder / add / remove freely.
  gallery: [
    // — Exterior & pool —
    "kmal4683.jpg",
    "kmal4676.jpg",
    "kmal4656.jpg",
    "kmal5116.jpg",
    "kmal5072.jpg",
    "kmal5080.jpg",
    "kmal5037.jpg",
    // — Living room —
    "kmal4824.jpg",
    "kmal4802.jpg",
    "kmal4817.jpg",
    "kmal4845.jpg",
    "kmal4859.jpg",
    "89a0592.jpg",
    // — Kitchen & dining —
    "kmal4740.jpg",
    "kmal4747.jpg",
    "kmal4762.jpg",
    "kmal4776.jpg",
    // — Conservatory —
    "kmal4734.jpg",
    "kmal4719.jpg",
    // — Bedrooms —
    "kmal5013.jpg",
    "kmal5027.jpg",
    "kmal4999-bis.jpg",
    "kmal4951.jpg",
    "kmal4972.jpg",
    "kmal4873.jpg",
    "kmal4908.jpg",
    "kmal4937.jpg",
    // — Bathrooms —
    "kmal4915.jpg",
    "89a0596.jpg",
    "kmal5060.jpg",
    // — Study & extras —
    "kmal4985.jpg",
    "89a0610.jpg",
    "kmal5040.jpg",
  ],

  // Downloadable documents (PDFs in /documents). Run `make docs` to generate the
  // first-page previews into /documents/previews. Leave the list empty to hide
  // the Documents section. Each entry:
  //   key     — matches a title in I18N[lang].documents.items
  //   file    — the PDF file name in /documents
  //   preview — the preview image in /documents/previews
  documents: [
    { key: "label", file: "energy-label.pdf", preview: "energy-label.jpg" },
    { key: "certificate", file: "energy-certificate.pdf", preview: "energy-certificate.jpg" },
  ],

  // Key facts shown in the stats bar. `value` is language-independent;
  // the label comes from I18N[lang].stats[key].
  stats: [
    { key: "bedrooms", value: "5" },
    { key: "bathrooms", value: "2" },
    { key: "living", value: "300 m²" },
    { key: "plot", value: "600 m²" },
    { key: "year", value: "1990" },
  ],

  // How buyers reach you. Remove any card you don't want.
  contact: {
    agent: "[[Name]]",
    phone: "[[+34 600 000 000]]",
    email: "[[your@email.com]]",
  },
};

/* -------------------------------------------------------------------------- */

const I18N = {
  /* ===================== ENGLISH ===================== */
  en: {
    meta: { description: "Villa Joanna — a spacious detached house with private pool for sale in Badia Gran, Mallorca. View photos, details and arrange a viewing." },
    nav: { about: "About", gallery: "Gallery", features: "Features", documents: "Documents", location: "Location", contact: "Contact" },
    hero: { eyebrow: "For sale", location: "Badia Gran, Mallorca", cta: "Arrange a viewing" },
    stats: { bedrooms: "Bedrooms", bathrooms: "Bathrooms", living: "Living area", plot: "Plot", year: "Built" },
    about: {
      eyebrow: "The home",
      title: "A spacious villa in the heart of Mallorca",
      body: [
        "We are selling our wonderful, spacious detached house in Badia Gran, Mallorca — with a private swimming pool, a detached garage and countless recent upgrades.",
        "The house was built in 1990 and the building plans are of course available. As is customary on Mallorca, some modifications have been made since then; everything was checked and found to be legal by our lawyer when we bought the house.",
        "The ground floor has been completely renovated to a high standard, including the electrics, water pipes, windows (VEKA) and doors. Only the kitchen is still to be done — the preparations are in place and the matching tiles, the same as the rest of the floor, are already in stock.",
      ],
    },
    gallery: { eyebrow: "Photos", title: "Gallery" },
    documents: {
      eyebrow: "Documents",
      title: "Documents & certificates",
      view: "View PDF",
      items: {
        label: "Energy label",
        certificate: "Energy performance certificate",
      },
    },
    features: {
      eyebrow: "Details",
      title: "Features & amenities",
      items: [
        "5 bedrooms (3 downstairs, 2 upstairs), fully renovated including wiring",
        "2 bathrooms; the downstairs bathroom recently renovated to a high standard",
        "Wonderful, very spacious living room",
        "Spacious kitchen and a conservatory",
        "Energy and consumption class A (documented)",
        "Central air conditioning (Mitsubishi, 2026): heating, cooling and ventilation via thermostat or app",
        "An electric radiator in every room, all controllable together via app",
        "Cosy pellet stove that warms several rooms",
        "Private 8 × 4 m pool with a saltwater system — gentler on the skin and easier to maintain",
        "Enphase solar system (16 panels, east–west), approx. 8 MWh per year",
        "Option to install your own car charging station",
        "Spacious detached garage and parking on your own grounds",
      ],
    },
    location: {
      eyebrow: "Where",
      title: "Location",
      body: "Badia Gran lies on the west coast of Mallorca, about 20 minutes from the airport and 25 minutes from Palma. A cosy, quiet village that nonetheless has everything close by: a supermarket, pharmacy, medical centre, physiotherapist, a lovely primary school, restaurants and cafés — all within walking distance.",
      address: "Badia Gran, Llucmajor — Mallorca, Spain",
    },
    contact: {
      eyebrow: "Get in touch",
      title: "Arrange a viewing",
      lead: "Interested? Reach out and we'll be happy to show you around.",
      callLabel: "Call",
      emailLabel: "Email",
      mailSubject: "Viewing request — Villa Joanna, Badia Gran",
    },
    footer: { rights: "All rights reserved" },
  },

  /* ===================== DUTCH ===================== */
  nl: {
    meta: { description: "Villa Joanna — ruim vrijstaand huis met privézwembad te koop in Badia Gran, Mallorca. Bekijk foto's, details en plan een bezichtiging." },
    nav: { about: "Over", gallery: "Foto's", features: "Kenmerken", documents: "Documenten", location: "Locatie", contact: "Contact" },
    hero: { eyebrow: "Te koop", location: "Badia Gran, Mallorca", cta: "Plan een bezichtiging" },
    stats: { bedrooms: "Slaapkamers", bathrooms: "Badkamers", living: "Woonoppervlak", plot: "Perceel", year: "Bouwjaar" },
    about: {
      eyebrow: "De woning",
      title: "Een ruime villa in het hart van Mallorca",
      body: [
        "Wij verkopen ons heerlijke, ruime vrijstaande huis in Badia Gran, Mallorca — met privézwembad, vrijstaande garage en talloze recente verbeteringen.",
        "Het huis is gebouwd in 1990; de bouwtekeningen zijn uiteraard aanwezig. Sindsdien zijn er, zoals gebruikelijk op Mallorca, nog aanpassingen gedaan. Alles is gecontroleerd en door onze advocaat legaal bevonden toen wij het huis kochten.",
        "De benedenverdieping is compleet en hoogwaardig gerenoveerd, inclusief elektra, waterleidingen, ramen (VEKA) en deuren. Alleen de keuken nog niet — de voorbereidingen daarvoor zijn getroffen en de bijpassende tegels, dezelfde als op de rest van de verdieping, liggen al klaar.",
      ],
    },
    gallery: { eyebrow: "Foto's", title: "Galerij" },
    documents: {
      eyebrow: "Documenten",
      title: "Documenten & certificaten",
      view: "Bekijk pdf",
      items: {
        label: "Energielabel",
        certificate: "Energieprestatiecertificaat",
      },
    },
    features: {
      eyebrow: "Details",
      title: "Kenmerken & voorzieningen",
      items: [
        "5 slaapkamers (3 beneden, 2 boven), compleet gerenoveerd inclusief bedrading",
        "2 badkamers; de benedenbadkamer recent hoogwaardig gerenoveerd",
        "Heerlijke, zeer ruime woonkamer",
        "Ruime keuken en een serre",
        "Energie- en verbruiksklasse A (gedocumenteerd)",
        "Centrale airconditioning (Mitsubishi, 2026): verwarmen, koelen én ventileren, via thermostaat of app",
        "Elektrische radiator in elke kamer, samen te bedienen via app",
        "Gezellige pelletkachel die meerdere ruimtes van warme lucht voorziet",
        "Privézwembad 8 × 4 m met zoutwaterinstallatie — beter voor de huid en makkelijker in onderhoud",
        "Enphase zonnepanelensysteem (16 panelen, oost–west), ca. 8 MWh per jaar",
        "Optie voor een eigen laadstation voor de auto",
        "Vrijstaande ruime garage en parkeren op eigen terrein",
      ],
    },
    location: {
      eyebrow: "Waar",
      title: "Locatie",
      body: "Badia Gran ligt aan de westkust van Mallorca, op ongeveer 20 minuten van het vliegveld en 25 minuten van Palma. Een gezellig, rustig dorp waar toch alles voorhanden is: supermarkt, apotheek, artsencentrum, fysiotherapeut, een fijne basisschool, restaurants en cafés — allemaal te voet bereikbaar.",
      address: "Badia Gran, Llucmajor — Mallorca, Spanje",
    },
    contact: {
      eyebrow: "Neem contact op",
      title: "Plan een bezichtiging",
      lead: "Interesse? Neem contact op en we leiden u graag rond.",
      callLabel: "Bel",
      emailLabel: "E-mail",
      mailSubject: "Bezichtigingsverzoek — Villa Joanna, Badia Gran",
    },
    footer: { rights: "Alle rechten voorbehouden" },
  },

  /* ===================== GERMAN ===================== */
  de: {
    meta: { description: "Villa Joanna — geräumiges freistehendes Haus mit privatem Pool zu verkaufen in Badia Gran, Mallorca. Fotos und Details ansehen und eine Besichtigung vereinbaren." },
    nav: { about: "Über", gallery: "Galerie", features: "Ausstattung", documents: "Dokumente", location: "Lage", contact: "Kontakt" },
    hero: { eyebrow: "Zu verkaufen", location: "Badia Gran, Mallorca", cta: "Besichtigung vereinbaren" },
    stats: { bedrooms: "Schlafzimmer", bathrooms: "Badezimmer", living: "Wohnfläche", plot: "Grundstück", year: "Baujahr" },
    about: {
      eyebrow: "Das Zuhause",
      title: "Eine großzügige Villa im Herzen Mallorcas",
      body: [
        "Wir verkaufen unser herrliches, großzügiges freistehendes Haus in Badia Gran, Mallorca — mit privatem Swimmingpool, freistehender Garage und zahlreichen modernen Verbesserungen.",
        "Das Haus wurde 1990 gebaut, die Baupläne sind selbstverständlich vorhanden. Seitdem wurden, wie auf Mallorca üblich, einige Anpassungen vorgenommen. Beim Kauf wurde alles von unserem Anwalt geprüft und für legal befunden.",
        "Das Erdgeschoss wurde vollständig und hochwertig renoviert, einschließlich Elektrik, Wasserleitungen, Fenster (VEKA) und Türen. Lediglich die Küche steht noch aus — die Vorbereitungen dafür sind getroffen und die passenden Fliesen, dieselben wie im übrigen Geschoss, liegen bereits bereit.",
      ],
    },
    gallery: { eyebrow: "Fotos", title: "Galerie" },
    documents: {
      eyebrow: "Dokumente",
      title: "Dokumente & Zertifikate",
      view: "PDF ansehen",
      items: {
        label: "Energielabel",
        certificate: "Energieausweis",
      },
    },
    features: {
      eyebrow: "Details",
      title: "Ausstattung & Annehmlichkeiten",
      items: [
        "5 Schlafzimmer (3 unten, 2 oben), komplett renoviert inkl. Verkabelung",
        "2 Badezimmer; das untere Bad kürzlich hochwertig renoviert",
        "Herrliches, sehr großzügiges Wohnzimmer",
        "Geräumige Küche und ein Wintergarten",
        "Energie- und Verbrauchsklasse A (dokumentiert)",
        "Zentrale Klimaanlage (Mitsubishi, 2026): Heizen, Kühlen und Lüften, per Thermostat oder App",
        "In jedem Zimmer ein elektrischer Heizkörper, alle gemeinsam per App steuerbar",
        "Gemütlicher Pelletofen, der mehrere Räume mit Warmluft versorgt",
        "Privater Pool 8 × 4 m mit Salzwasseranlage — schonender für die Haut und pflegeleichter",
        "Enphase-Solaranlage (16 Module, Ost–West), ca. 8 MWh pro Jahr",
        "Option für eine eigene Ladestation fürs Auto",
        "Großzügige freistehende Garage und Parken auf eigenem Grundstück",
      ],
    },
    location: {
      eyebrow: "Wo",
      title: "Lage",
      body: "Badia Gran liegt an der Westküste Mallorcas, etwa 20 Minuten vom Flughafen und 25 Minuten von Palma entfernt. Ein gemütliches, ruhiges Dorf, in dem dennoch alles in der Nähe ist: Supermarkt, Apotheke, Ärztezentrum, Physiotherapeut, eine schöne Grundschule, Restaurants und Cafés — alles zu Fuß erreichbar.",
      address: "Badia Gran, Llucmajor — Mallorca, Spanien",
    },
    contact: {
      eyebrow: "Kontakt aufnehmen",
      title: "Besichtigung vereinbaren",
      lead: "Interesse? Melden Sie sich, wir zeigen Ihnen das Haus gerne.",
      callLabel: "Anrufen",
      emailLabel: "E-Mail",
      mailSubject: "Besichtigungsanfrage — Villa Joanna, Badia Gran",
    },
    footer: { rights: "Alle Rechte vorbehalten" },
  },

  /* ===================== SPANISH ===================== */
  es: {
    meta: { description: "Villa Joanna — amplia casa independiente con piscina privada en venta en Badia Gran, Mallorca. Vea fotos, detalles y concierte una visita." },
    nav: { about: "Inicio", gallery: "Galería", features: "Características", documents: "Documentos", location: "Ubicación", contact: "Contacto" },
    hero: { eyebrow: "En venta", location: "Badia Gran, Mallorca", cta: "Concertar una visita" },
    stats: { bedrooms: "Dormitorios", bathrooms: "Baños", living: "Superficie", plot: "Parcela", year: "Año" },
    about: {
      eyebrow: "La vivienda",
      title: "Una amplia villa en el corazón de Mallorca",
      body: [
        "Vendemos nuestra maravillosa y amplia casa independiente en Badia Gran, Mallorca — con piscina privada, garaje independiente y numerosas mejoras recientes.",
        "La casa se construyó en 1990 y, por supuesto, se conservan los planos. Desde entonces se han realizado algunas modificaciones, como es habitual en Mallorca. Todo fue revisado y declarado legal por nuestro abogado cuando compramos la casa.",
        "La planta baja ha sido completamente renovada con materiales de alta calidad, incluidas la electricidad, las tuberías, las ventanas (VEKA) y las puertas. Solo falta la cocina — los preparativos ya están hechos y los azulejos a juego, los mismos que en el resto de la planta, ya están disponibles.",
      ],
    },
    gallery: { eyebrow: "Fotos", title: "Galería" },
    documents: {
      eyebrow: "Documentos",
      title: "Documentos y certificados",
      view: "Ver PDF",
      items: {
        label: "Etiqueta energética",
        certificate: "Certificado de eficiencia energética",
      },
    },
    features: {
      eyebrow: "Detalles",
      title: "Características y comodidades",
      items: [
        "5 dormitorios (3 en la planta baja, 2 arriba), totalmente renovados incl. cableado",
        "2 baños; el de la planta baja renovado recientemente con alta calidad",
        "Maravilloso salón muy amplio",
        "Cocina amplia y una galería acristalada",
        "Clase energética y de consumo A (documentada)",
        "Aire acondicionado central (Mitsubishi, 2026): calefacción, refrigeración y ventilación, por termostato o app",
        "Un radiador eléctrico en cada habitación, todos controlables juntos mediante app",
        "Acogedora estufa de pellets que calienta varias estancias",
        "Piscina privada de 8 × 4 m con sistema de agua salada — más suave para la piel y más fácil de mantener",
        "Sistema solar Enphase (16 paneles, este–oeste), aprox. 8 MWh al año",
        "Opción de instalar tu propio punto de carga para el coche",
        "Amplio garaje independiente y aparcamiento en la propia parcela",
      ],
    },
    location: {
      eyebrow: "Dónde",
      title: "Ubicación",
      body: "Badia Gran se encuentra en la costa oeste de Mallorca, a unos 20 minutos del aeropuerto y 25 minutos de Palma. Un pueblo acogedor y tranquilo que, aun así, lo tiene todo cerca: supermercado, farmacia, centro médico, fisioterapeuta, una estupenda escuela primaria, restaurantes y cafeterías — todo accesible a pie.",
      address: "Badia Gran, Llucmajor — Mallorca, España",
    },
    contact: {
      eyebrow: "Contacto",
      title: "Concertar una visita",
      lead: "¿Interesado? Póngase en contacto y estaremos encantados de enseñársela.",
      callLabel: "Llamar",
      emailLabel: "Correo",
      mailSubject: "Solicitud de visita — Villa Joanna, Badia Gran",
    },
    footer: { rights: "Todos los derechos reservados" },
  },
};

// Languages offered, in display order.
const LANGS = ["en", "nl", "de", "es"];
