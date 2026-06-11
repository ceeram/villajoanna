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

  // How buyers reach you. Each contact shows a Call link and a WhatsApp link
  // (both derived from the phone number). Add or remove people freely.
  contacts: [
    { name: "Joanna", phone: "+49 1512 9133198" },
    { name: "Dirk", phone: "+31 6 12147667" },
  ],
};

/* -------------------------------------------------------------------------- */

const I18N = {
  /* ===================== ENGLISH ===================== */
  en: {
    meta: { description: "Spacious detached villa with private saltwater pool for sale in Badia Gran, Mallorca. Class A energy rating, beautifully renovated — view the photos and arrange a viewing." },
    nav: { about: "About", gallery: "Gallery", features: "Features", documents: "Documents", location: "Location", contact: "Contact" },
    hero: { eyebrow: "For sale", location: "Badia Gran, Mallorca", cta: "Arrange a viewing" },
    stats: { bedrooms: "Bedrooms", bathrooms: "Bathrooms", living: "Living area", plot: "Plot", year: "Built" },
    about: {
      eyebrow: "The home",
      title: "Relaxed island living with your own pool",
      body: [
        "Picture slow Mediterranean mornings beside your own pool. This spacious detached villa in Badia Gran sits on a generous 600 m² plot with a private 8 × 4 m saltwater pool, a detached garage and parking on its own grounds — easy island living with comfort already built in.",
        "The entire ground floor has been renovated to a high standard, from the wiring and plumbing to the VEKA windows and doors. Only the kitchen is left to finish: the groundwork is done and the matching floor tiles are already on site, ready for you to make the space your own.",
        "Built in 1990 with the original plans available, the villa has been carefully improved over the years — every modification verified as fully legal by our lawyer at the time of purchase. With a documented class A energy rating, solar generation and smart climate control throughout, it is as efficient as it is comfortable.",
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
        "5 double bedrooms — 3 on the ground floor, 2 above — fully rewired and renovated",
        "2 bathrooms, the ground-floor bath recently finished to a high specification",
        "Bright, generously proportioned living room",
        "Spacious kitchen opening onto a sun-filled conservatory",
        "Class A energy & consumption rating, officially certified",
        "Mitsubishi central air conditioning (2026): heating, cooling and ventilation by thermostat or app",
        "An individual electric radiator in every room, all controllable from one app",
        "Cosy pellet stove that warms several rooms at once",
        "Private 8 × 4 m saltwater pool — softer on the skin and simpler to maintain",
        "Enphase solar array (16 east–west panels) generating approx. 8 MWh a year",
        "Pre-wired for your own EV charging point",
        "Large detached garage plus private parking on your own grounds",
      ],
    },
    location: {
      eyebrow: "Where",
      title: "Location",
      body: "Tucked along the west coast of Mallorca, Badia Gran is just 20 minutes from the airport and 25 from the heart of Palma. It's a quiet, friendly village where everything is on your doorstep — supermarket, pharmacy, medical centre, physiotherapist, a well-regarded primary school, restaurants and cafés, all within an easy stroll.",
      address: "Badia Gran, Llucmajor — Mallorca, Spain",
    },
    contact: {
      eyebrow: "Get in touch",
      title: "Arrange a viewing",
      lead: "Taken with Villa Joanna? Get in touch and we'd be delighted to show you around in person.",
      callLabel: "Call",
      whatsappLabel: "WhatsApp",
      message: "Hello, I'm interested in Villa Joanna in Badia Gran. Could we arrange a viewing?",
    },
    footer: { rights: "All rights reserved" },
  },

  /* ===================== DUTCH ===================== */
  nl: {
    meta: { description: "Ruim vrijstaand huis met privé-zoutwaterzwembad te koop in Badia Gran, Mallorca. Energielabel A, hoogwaardig gerenoveerd — bekijk de foto's en plan een bezichtiging." },
    nav: { about: "Over", gallery: "Foto's", features: "Kenmerken", documents: "Documenten", location: "Locatie", contact: "Contact" },
    hero: { eyebrow: "Te koop", location: "Badia Gran, Mallorca", cta: "Plan een bezichtiging" },
    stats: { bedrooms: "Slaapkamers", bathrooms: "Badkamers", living: "Woonoppervlak", plot: "Perceel", year: "Bouwjaar" },
    about: {
      eyebrow: "De woning",
      title: "Heerlijk buitenleven met eigen zwembad",
      body: [
        "Welkom in deze ruime, vrijstaande villa in Badia Gran. Op een royaal perceel van 600 m² vindt u een eigen zoutwaterzwembad van 8 × 4 m, een vrijstaande garage en parkeergelegenheid op eigen terrein. Hier geniet u van het ontspannen Mallorcaanse buitenleven, met alle comfort al aanwezig.",
        "De volledige benedenverdieping is hoogwaardig gerenoveerd: van de elektra en waterleidingen tot de VEKA ramen en deuren. Alleen de keuken wacht nog op de laatste hand — het voorwerk is gedaan en de bijpassende vloertegels liggen al klaar, zodat u er meteen uw eigen draai aan kunt geven.",
        "De villa is gebouwd in 1990 en de originele bouwtekeningen zijn aanwezig. In de loop der jaren zijn enkele aanpassingen gedaan, die bij aankoop door onze advocaat allemaal als legaal zijn bevonden. Met een gedocumenteerd energielabel A, zonnepanelen en slimme klimaatregeling woont u hier net zo comfortabel als energiezuinig.",
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
        "5 slaapkamers (3 beneden, 2 boven), volledig gerenoveerd inclusief nieuwe bedrading",
        "2 badkamers, waarvan de benedenbadkamer recent hoogwaardig is afgewerkt",
        "Lichte, zeer ruime woonkamer",
        "Ruime keuken met aangrenzende serre vol daglicht",
        "Energie- en verbruiksklasse A — officieel gecertificeerd",
        "Centrale airconditioning (Mitsubishi, 2026): verwarmen, koelen én ventileren via thermostaat of app",
        "In elke kamer een elektrische radiator, gezamenlijk te bedienen via de app",
        "Sfeervolle pelletkachel die meerdere ruimtes verwarmt",
        "Privézwembad van 8 × 4 m met zoutwaterinstallatie — prettiger voor de huid en eenvoudig in onderhoud",
        "Enphase zonnepanelen (16 stuks, oost–west), goed voor ca. 8 MWh per jaar",
        "Voorbereid op een eigen laadpunt voor de auto",
        "Ruime vrijstaande garage én parkeren op eigen terrein",
      ],
    },
    location: {
      eyebrow: "Waar",
      title: "Locatie",
      body: "Badia Gran ligt aan de westkust van Mallorca, op zo'n 20 minuten van het vliegveld en 25 minuten van Palma. Een rustig en gemoedelijk dorp waar u toch werkelijk alles binnen handbereik heeft: supermarkt, apotheek, artsencentrum, fysiotherapeut, een fijne basisschool, restaurants en gezellige cafés — allemaal op loopafstand.",
      address: "Badia Gran, Llucmajor — Mallorca, Spanje",
    },
    contact: {
      eyebrow: "Neem contact op",
      title: "Plan een bezichtiging",
      lead: "Enthousiast geworden? Neem gerust contact op, dan leiden wij u graag persoonlijk rond.",
      callLabel: "Bel",
      whatsappLabel: "WhatsApp",
      message: "Hallo, ik heb interesse in Villa Joanna in Badia Gran. Kunnen we een bezichtiging plannen?",
    },
    footer: { rights: "Alle rechten voorbehouden" },
  },

  /* ===================== GERMAN ===================== */
  de: {
    meta: { description: "Großzügige freistehende Villa mit privatem Salzwasserpool zu verkaufen in Badia Gran, Mallorca. Energieklasse A, hochwertig saniert — Fotos ansehen und Besichtigung vereinbaren." },
    nav: { about: "Über", gallery: "Galerie", features: "Ausstattung", documents: "Dokumente", location: "Lage", contact: "Kontakt" },
    hero: { eyebrow: "Zu verkaufen", location: "Badia Gran, Mallorca", cta: "Besichtigung vereinbaren" },
    stats: { bedrooms: "Schlafzimmer", bathrooms: "Badezimmer", living: "Wohnfläche", plot: "Grundstück", year: "Baujahr" },
    about: {
      eyebrow: "Das Zuhause",
      title: "Entspanntes Inselleben mit eigenem Pool",
      body: [
        "Willkommen in dieser großzügigen, freistehenden Villa in Badia Gran. Auf einem weitläufigen Grundstück von 600 m² erwarten Sie ein privater Salzwasserpool (8 × 4 m), eine freistehende Garage und Stellplätze auf dem eigenen Grundstück — entspanntes mediterranes Wohnen mit modernem Komfort, der bereits vorhanden ist.",
        "Das gesamte Erdgeschoss wurde hochwertig saniert — von der Elektrik und den Wasserleitungen bis zu den VEKA-Fenstern und -Türen. Lediglich die Küche wartet noch auf den letzten Schliff: Die Vorarbeiten sind erledigt und die passenden Bodenfliesen liegen bereits bereit, sodass Sie sie ganz nach Ihrem Geschmack gestalten können.",
        "Die Villa wurde 1990 erbaut, die ursprünglichen Baupläne liegen vor. Spätere Anpassungen wurden beim Kauf von unserem Anwalt vollständig geprüft und für legal befunden. Mit dokumentierter Energieklasse A, Photovoltaik und intelligenter Klimasteuerung wohnen Sie hier ebenso komfortabel wie energieeffizient.",
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
        "5 Schlafzimmer (3 im Erdgeschoss, 2 im Obergeschoss), komplett saniert inkl. neuer Verkabelung",
        "2 Badezimmer — das untere Bad kürzlich hochwertig fertiggestellt",
        "Helles, sehr großzügiges Wohnzimmer",
        "Geräumige Küche mit angrenzendem, lichtdurchflutetem Wintergarten",
        "Energie- und Verbrauchsklasse A — offiziell zertifiziert",
        "Zentrale Klimaanlage (Mitsubishi, 2026): Heizen, Kühlen und Lüften per Thermostat oder App",
        "In jedem Zimmer ein elektrischer Heizkörper, zentral per App steuerbar",
        "Gemütlicher Pelletofen, der mehrere Räume zugleich erwärmt",
        "Privater Salzwasserpool 8 × 4 m — hautfreundlich und pflegeleicht",
        "Enphase-Photovoltaikanlage (16 Module, Ost–West) mit ca. 8 MWh pro Jahr",
        "Vorbereitet für Ihre eigene E-Auto-Ladestation",
        "Großzügige freistehende Garage sowie Stellplätze auf dem eigenen Grundstück",
      ],
    },
    location: {
      eyebrow: "Wo",
      title: "Lage",
      body: "Badia Gran liegt an der Westküste Mallorcas, nur etwa 20 Minuten vom Flughafen und 25 Minuten von Palma entfernt. Ein ruhiger, gemütlicher Ort, in dem Sie dennoch alles in unmittelbarer Nähe haben: Supermarkt, Apotheke, Ärztezentrum, Physiotherapie, eine schöne Grundschule sowie Restaurants und Cafés — alles bequem zu Fuß erreichbar.",
      address: "Badia Gran, Llucmajor — Mallorca, Spanien",
    },
    contact: {
      eyebrow: "Kontakt aufnehmen",
      title: "Besichtigung vereinbaren",
      lead: "Interesse geweckt? Melden Sie sich bei uns — wir zeigen Ihnen die Villa gerne persönlich.",
      callLabel: "Anrufen",
      whatsappLabel: "WhatsApp",
      message: "Hallo, ich interessiere mich für Villa Joanna in Badia Gran. Können wir eine Besichtigung vereinbaren?",
    },
    footer: { rights: "Alle Rechte vorbehalten" },
  },

  /* ===================== SPANISH ===================== */
  es: {
    meta: { description: "Amplia villa independiente con piscina privada de agua salada en venta en Badia Gran, Mallorca. Clase energética A, reformada con calidad — vea las fotos y concierte una visita." },
    nav: { about: "La villa", gallery: "Galería", features: "Características", documents: "Documentos", location: "Ubicación", contact: "Contacto" },
    hero: { eyebrow: "En venta", location: "Badia Gran, Mallorca", cta: "Concertar una visita" },
    stats: { bedrooms: "Dormitorios", bathrooms: "Baños", living: "Superficie", plot: "Parcela", year: "Año" },
    about: {
      eyebrow: "La vivienda",
      title: "Vida mediterránea con piscina privada",
      body: [
        "Bienvenido a esta amplia villa independiente en Badia Gran. Sobre una generosa parcela de 600 m², disfrutará de una piscina privada de agua salada (8 × 4 m), garaje independiente y aparcamiento en la propia finca. Una casa pensada para vivir la luz y la calma del Mediterráneo, con todas las comodidades ya resueltas.",
        "Toda la planta baja se ha reformado con materiales de alta calidad: desde la instalación eléctrica y las tuberías hasta las ventanas y puertas VEKA. Solo falta rematar la cocina — el trabajo previo ya está hecho y los azulejos a juego están disponibles para que la deje a su gusto.",
        "La villa se construyó en 1990 y se conservan los planos originales. Las modificaciones posteriores fueron revisadas y declaradas legales por nuestro abogado en el momento de la compra. Con clase energética A documentada, placas solares y climatización inteligente, vivirá con tanta comodidad como eficiencia.",
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
        "5 dormitorios (3 en la planta baja y 2 en la superior), totalmente reformados, incluido el cableado",
        "2 baños; el de la planta baja reformado recientemente con acabados de calidad",
        "Luminoso salón de grandes dimensiones",
        "Cocina amplia junto a una galería acristalada llena de luz",
        "Clase energética y de consumo A — certificada oficialmente",
        "Aire acondicionado central (Mitsubishi, 2026): calefacción, refrigeración y ventilación por termostato o app",
        "Un radiador eléctrico en cada estancia, todos controlables desde la app",
        "Acogedora estufa de pellets que caldea varias estancias",
        "Piscina privada de 8 × 4 m con sistema de agua salada — más suave para la piel y fácil de mantener",
        "Instalación solar Enphase (16 paneles, este–oeste), unos 8 MWh al año",
        "Preparada para instalar su propio punto de carga para el coche",
        "Amplio garaje independiente y aparcamiento en la propia parcela",
      ],
    },
    location: {
      eyebrow: "Dónde",
      title: "Ubicación",
      body: "Badia Gran se encuentra en la costa oeste de Mallorca, a tan solo 20 minutos del aeropuerto y 25 de Palma. Un pueblo tranquilo y acogedor en el que, sin embargo, lo tendrá todo a mano: supermercado, farmacia, centro médico, fisioterapeuta, una estupenda escuela de primaria, restaurantes y cafeterías — todo a un agradable paseo.",
      address: "Badia Gran, Llucmajor — Mallorca, España",
    },
    contact: {
      eyebrow: "Contacto",
      title: "Concertar una visita",
      lead: "¿Le ha enamorado? Póngase en contacto con nosotros y estaremos encantados de enseñársela en persona.",
      callLabel: "Llamar",
      whatsappLabel: "WhatsApp",
      message: "Hola, estoy interesado en Villa Joanna en Badia Gran. ¿Podríamos concertar una visita?",
    },
    footer: { rights: "Todos los derechos reservados" },
  },
};

// Languages offered, in display order.
const LANGS = ["en", "nl", "de", "es"];
