export type Language = 'en' | 'fr'

export interface Translations {
  nav: {
    allPages: string
    home: string
    about: string
    team: string
    contact: string
    joinUs: string
    menu: string
  }
  hero: {
    quote: string
    badge: string
    titlePart1: string
    titleHighlight: string
    titlePart2: string
    subtitle: string
    getStarted: string
    learnMore: string
  }
  silverThreads: {
    badge: string
    title: string
    subtitle: string
    description: string
    joinUs: string
    availableIn: string
    langBadge: string
    p1Title: string
    p1Desc: string
    p2Title: string
    p2Desc: string
    p3Title: string
    p3Desc: string
  }
  support: {
    badge: string
    title: string
    subtitle: string
    description: string
    supporting: string
    seniorsAcrossCanada: string
    p1Title: string
    p1Desc: string
    p2Title: string
    p2Desc: string
    p3Title: string
    p3Desc: string
  }
  about: {
    badge: string
    titlePart1: string
    titleHighlight: string
    text1Bold: string
    text1Rest: string
    text2: string
    v1Title: string
    v1Desc: string
    v2Title: string
    v2Desc: string
    v3Title: string
    v3Desc: string
    learnMore: string
    communityDriven: string
  }
  aboutPage: {
    heroBadge: string
    heroTitle1: string
    heroTitleHighlight: string
    heroSubtitle: string
    whyTitle: string
    whyP1Bold: string
    whyP1Rest: string
    whyP2: string
    whyP3Bold: string
    whyP3Rest: string
    pillarsTitle: string
    pillarsSubtitle: string
    pillar1Title: string
    pillar1Desc: string
    pillar2Title: string
    pillar2Desc: string
    pillar3Title: string
    pillar3Desc: string
    locationTitle: string
    locationValue: string
    contactUs: string
  }
  teamPage: {
    eyebrow: string
    heroTitle1: string
    heroTitleHighlight: string
    heroSubtitle: string
    statEst: string
    statLangs: string
    statCity: string
    sideQuote: string
    sideQuoteAuthor: string
    sectionLabel: string
    getInTouch: string
    ctaEyebrow: string
    ctaTitle1: string
    ctaTitleHighlight: string
    ctaSubtitle: string
    ctaContact: string
    ctaAbout: string
  }
  contactPage: {
    heroBadge: string
    heroTitle1: string
    heroTitleHighlight: string
    heroSubtitle: string
    emailTitle: string
    instagramTitle: string
    locationTitle: string
    locationValue: string
    hoursTitle: string
    hoursLine1: string
    hoursLine2: string
    hoursLine3: string
    openInMaps: string
    formTitle: string
    fieldName: string
    fieldNamePlaceholder: string
    fieldEmail: string
    fieldEmailPlaceholder: string
    fieldSubject: string
    optionGeneral: string
    optionVolunteering: string
    optionProgram: string
    optionPartnership: string
    fieldMessage: string
    fieldMessagePlaceholder: string
    sendButton: string
  }
}

export const translations: Record<Language, Translations> = {
  en: {
    nav: {
      allPages: 'All Pages',
      home: 'Home',
      about: 'About',
      team: 'Team',
      contact: 'Contact',
      joinUs: 'Join Us',
      menu: 'Menu',
    },
    hero: {
      quote: 'Bienvenue à Silverswan.',
      badge: 'Black-owned · Black-led · Black-serving',
      titlePart1: 'Building',
      titleHighlight: 'inclusive',
      titlePart2: 'communities through digital literacy',
      subtitle:
        "We equip BIPOC communities and seniors across Canada with the digital skills, business tools, and technology resources to navigate today's world with confidence.",
      getStarted: 'Get Started',
      learnMore: 'Learn more',
    },
    silverThreads: {
      badge: 'Program Spotlight',
      title: 'Silver Threads',
      subtitle: 'Connecting Seniors',
      description:
        'A holistic bilingual program keeping seniors socially connected, intellectually active, and community-led.',
      joinUs: 'Join Us',
      availableIn: 'Available in',
      langBadge: 'English & French 🇨🇦',
      p1Title: 'Social Connection & Inclusion',
      p1Desc:
        'Social sessions, community outings, and bilingual events in English & French help seniors build friendships and stay active.',
      p2Title: 'Skills for Independence',
      p2Desc:
        'Workshops on digital literacy, financial literacy, and skill-sharing in arts & crafts build confidence and self-sufficiency.',
      p3Title: 'Senior-Led Leadership & Mentorship',
      p3Desc:
        'Seniors shape the program, lead discussions, support newcomers, and connect with volunteers through peer mentorship.',
    },
    support: {
      badge: 'Community Initiative',
      title: 'Integrated Support',
      subtitle: 'For Seniors',
      description:
        'Silverswan Integrated Hub presents a bilingual initiative for BIPOC communities to foster social connections, reduce isolation, and empower seniors across Canada.',
      supporting: 'Supporting',
      seniorsAcrossCanada: 'Seniors Across Canada',
      p1Title: 'Financial & Digital Literacy',
      p1Desc:
        'Workshops designed to prevent fraud, build self-sufficiency, and master digital tools for everyday confidence and communication.',
      p2Title: 'Social Participation & Diversity',
      p2Desc:
        'Preserving BIPOC cultural heritage through arts, music, and networking events to build strong, inclusive community bonds.',
      p3Title: 'Access & Mobility Support',
      p3Desc:
        'Assistance with transportation and navigating government benefits to ensure essential services are accessible to everyone.',
    },
    about: {
      badge: 'Who We Are',
      titlePart1: 'Building Bridges,',
      titleHighlight: 'Not Barriers.',
      text1Bold: 'Black-owned, Black-led and Black-serving organization,',
      text1Rest:
        "we believe that digital literacy is a fundamental right. We are dedicated to dismantling systemic barriers by equipping our community with the tools to navigate today's world with confidence in this digital age.",
      text2:
        'Whether that means securely accessing online health resources, navigating essential government services, or scaling a small business, we champion the socio-economic advancement of our community in an open, welcoming environment.',
      v1Title: 'Digital Health & Connection.',
      v1Desc:
        'Equipping individuals with the confidence to use telehealth and vital government platforms (like the CRA and Service Canada) to improve daily life.',
      v2Title: 'Intergenerational Impact',
      v2Desc:
        'Bridging the gap between youth and elders through shared learning experiences and mentorship.',
      v3Title: 'Economic Empowerment.',
      v3Desc:
        'Closing the digital gap for Black-led ventures, fostering entrepreneurship, and building long-term financial security.',
      learnMore: 'Learn More About Us',
      communityDriven: 'Community-Driven',
    },
    aboutPage: {
      heroBadge: 'About Silverswan',
      heroTitle1: 'We are building a',
      heroTitleHighlight: 'legacy of connection.',
      heroSubtitle:
        'Silverswan Integrated Hub is a bilingual non-profit dedicated to reducing isolation and fostering resilience among seniors and newcomers across Canada through technology integration and community support.',
      whyTitle: 'Why we started.',
      whyP1Bold: '8% of seniors in Canada',
      whyP1Rest:
        ' are low-income and socially vulnerable. For those living alone, especially women in their 80s, the risk of isolation doubles.',
      whyP2:
        'We recognized that as the senior population grows more diverse in age, origin, and ability, the services supporting them must evolve. Traditional support systems weren\'t enough.',
      whyP3Bold: 'Silverswan Integrated Hub',
      whyP3Rest:
        ' was born from a desire to bridge this gap. We leverage the skills of newcomers and the wisdom of seniors to create a reciprocal, integrated support network that empowers communities through technology.',
      pillarsTitle: 'Our Integrated Approach',
      pillarsSubtitle:
        'We don\'t just provide services; we build capacity. Our program focuses on three core pillars to ensure holistic well-being.',
      pillar1Title: 'Financial Security',
      pillar1Desc:
        'Educating seniors on fraud prevention and financial literacy to foster self-sufficiency and peace of mind.',
      pillar2Title: 'Digital Inclusion',
      pillar2Desc:
        'Bridging the digital divide by training seniors to use modern tools for communication, health, and networking.',
      pillar3Title: 'Cultural Harmony',
      pillar3Desc:
        'Celebrating diversity through bilingual events (English & French) that connect newcomers with established residents.',
      locationTitle: 'Location',
      locationValue: 'Montreal, Quebec',
      contactUs: 'Contact Us',
    },
    teamPage: {
      eyebrow: 'Silverswan Leadership',
      heroTitle1: 'Built by people',
      heroTitleHighlight: 'who genuinely care.',
      heroSubtitle:
        'Our leadership team brings lived experience, community roots, and a shared belief that every senior and newcomer deserves a real seat at the digital table.',
      statEst: 'Est.',
      statLangs: 'Languages',
      statCity: 'Montreal, Quebec',
      sideQuote: '"We don\'t just provide services; we build capacity and connection."',
      sideQuoteAuthor: 'Maryam Mohammed, Founder',
      sectionLabel: 'Our Team',
      getInTouch: 'Get in Touch',
      ctaEyebrow: 'Ready to connect?',
      ctaTitle1: 'Become part of the',
      ctaTitleHighlight: 'Silverswan',
      ctaSubtitle:
        'Whether you want to volunteer, partner, or just say hello — our doors are open and our team is here.',
      ctaContact: 'Get in Touch',
      ctaAbout: 'About Silverswan',
    },
    contactPage: {
      heroBadge: 'Contact Us',
      heroTitle1: 'We\'re here to',
      heroTitleHighlight: 'help & connect.',
      heroSubtitle:
        'Have a question about our programs, volunteering, or partnerships? Reach out to the Silverswan team directly.',
      emailTitle: 'Email Us',
      instagramTitle: 'Instagram',
      locationTitle: 'Location',
      locationValue: 'Montreal, Quebec',
      hoursTitle: 'Office Hours',
      hoursLine1: 'Mon - Fri: 9:00 AM - 5:00 PM',
      hoursLine2: 'Sat: 10:00 AM - 2:00 PM',
      hoursLine3: 'Sun: Closed',
      openInMaps: 'Open in Maps',
      formTitle: 'Send us a message',
      fieldName: 'Full Name',
      fieldNamePlaceholder: 'Jane Doe',
      fieldEmail: 'Email Address',
      fieldEmailPlaceholder: 'jane@example.com',
      fieldSubject: 'I\'m interested in...',
      optionGeneral: 'General Inquiry',
      optionVolunteering: 'Volunteering with Seniors',
      optionProgram: 'Program Registration',
      optionPartnership: 'Partnership & Sponsorship',
      fieldMessage: 'Message',
      fieldMessagePlaceholder: 'How can we help you?',
      sendButton: 'Send Message',
    },
  },
  fr: {
    nav: {
      allPages: 'Toutes les pages',
      home: 'Accueil',
      about: 'À propos',
      team: 'Notre équipe',
      contact: 'Contact',
      joinUs: 'Rejoignez-nous',
      menu: 'Menu',
    },
    hero: {
      quote: 'Bienvenue à Silverswan.',
      badge: 'Détenu · Dirigé · Au service des Noirs',
      titlePart1: 'Bâtir des communautés',
      titleHighlight: 'inclusives',
      titlePart2: 'grâce à la littératie numérique',
      subtitle:
        "Nous outillons les communautés racisées et les aînés à travers le Canada avec les compétences numériques, les outils d'affaires et la technologie pour naviguer le monde d'aujourd'hui en toute confiance.",
      getStarted: 'Commencer',
      learnMore: 'En savoir plus',
    },
    silverThreads: {
      badge: 'Pleins feux sur le programme',
      title: 'Silver Threads',
      subtitle: 'Connecter les aînés',
      description:
        'Un programme bilingue holistique gardant les aînés connectés socialement, intellectuellement actifs et guidés par la communauté.',
      joinUs: 'Rejoignez-nous',
      availableIn: 'Disponible en',
      langBadge: 'Français & Anglais 🇨🇦',
      p1Title: 'Connexion sociale & Inclusion',
      p1Desc:
        'Des séances de groupe, des sorties communautaires et des événements bilingues en français et en anglais aident les aînés à nouer des amitiés durables.',
      p2Title: 'Compétences pour l’autonomie',
      p2Desc:
        'Des ateliers de littératie numérique, d’éducation financière et de partage créatif renforcent la confiance et l’autonomie quotidienne.',
      p3Title: 'Leadership & Mentorat par les aînés',
      p3Desc:
        'Les aînés façonnent le programme, animent des discussions, accueillent les nouveaux arrivants et créent des liens avec les bénévoles.',
    },
    support: {
      badge: 'Initiative communautaire',
      title: 'Soutien intégré',
      subtitle: 'Pour les aînés',
      description:
        'Silverswan Integrated Hub présente une initiative bilingue pour les communautés racisées afin de stimuler les liens sociaux, réduire l’isolement et autonomiser les aînés à travers le Canada.',
      supporting: 'Soutien accordé aux',
      seniorsAcrossCanada: 'Aînés à travers le Canada',
      p1Title: 'Littératie financière & numérique',
      p1Desc:
        'Des ateliers conçus pour prévenir les fraudes, développer l’autonomie et maîtriser les outils technologiques au quotidien.',
      p2Title: 'Participation sociale & Diversité',
      p2Desc:
        'Préservation du patrimoine culturel par les arts, la musique et des événements de réseautage pour tisser des liens solides.',
      p3Title: 'Soutien à la mobilité & à l’accès',
      p3Desc:
        'Assistance pour le transport et l’accès aux programmes gouvernementaux essentiels afin que chacun reçoive les services nécessaires.',
    },
    about: {
      badge: 'Qui nous sommes',
      titlePart1: 'Bâtir des ponts,',
      titleHighlight: 'Pas des barrières.',
      text1Bold: 'organisation détenue, dirigée et au service des communautés noires,',
      text1Rest:
        "nous croyons fermement que la littératie numérique est un droit fondamental. Nous nous consacrons à éliminer les barrières systémiques en offrant à notre communauté les outils nécessaires pour naviguer le monde d'aujourd'hui avec confiance.",
      text2:
        "Qu'il s'agisse d'accéder en toute sécurité à des soins de télésanté, de naviguer dans les services publics essentiels ou de développer une entreprise, nous soutenons l'avancement socio-économique de notre communauté dans un cadre chaleureux et inclusif.",
      v1Title: 'Santé numérique & Connexion.',
      v1Desc:
        'Donner à chacun la confiance nécessaire pour utiliser la télésanté et les plateformes gouvernementales clés (comme l’ARC et Service Canada).',
      v2Title: 'Impact intergénérationnel',
      v2Desc:
        'Rapprocher les générations entre les jeunes et les aînés grâce à l’apprentissage partagé et au mentorat bienveillant.',
      v3Title: 'Autonomie économique.',
      v3Desc:
        'Combler le fossé numérique pour les entreprises dirigées par des personnes noires, encourager l’entrepreneuriat et assurer une sécurité financière durable.',
      learnMore: 'En savoir plus sur nous',
      communityDriven: 'Axé sur la communauté',
    },
    aboutPage: {
      heroBadge: 'À propos de Silverswan',
      heroTitle1: 'Nous bâtissons un',
      heroTitleHighlight: 'héritage de connexion.',
      heroSubtitle:
        'Silverswan Integrated Hub est un organisme bilingue à but non lucratif dédié à réduire l\'isolement et à renforcer la résilience des aînés et des nouveaux arrivants à travers le Canada grâce à l\'intégration technologique et au soutien communautaire.',
      whyTitle: 'Pourquoi nous avons commencé.',
      whyP1Bold: '8 % des aînés au Canada',
      whyP1Rest:
        ' sont à faibles revenus et socialement vulnérables. Pour ceux qui vivent seuls, en particulier les femmes dans la quatrième vingtaine, le risque d\'isolement double.',
      whyP2:
        'Nous avons reconnu que, à mesure que la population des aînés devient plus diverse en âge, en origine et en capacité, les services qui les soutiennent doivent évoluer. Les systèmes de soutien traditionnels ne suffisaient plus.',
      whyP3Bold: 'Silverswan Integrated Hub',
      whyP3Rest:
        ' est né du désir de combler ce fossé. Nous tirons parti des compétences des nouveaux arrivants et de la sagesse des aînés pour créer un réseau de soutien réciproque et intégré qui responsabilise les communautés grâce à la technologie.',
      pillarsTitle: 'Notre approche intégrée',
      pillarsSubtitle:
        'Nous ne faisons pas que fournir des services ; nous renforçons les capacités. Notre programme repose sur trois piliers essentiels pour assurer un bien-être holistique.',
      pillar1Title: 'Sécurité financière',
      pillar1Desc:
        'Sensibiliser les aînés à la prévention de la fraude et à la littératie financière pour favoriser l\'autonomie et la tranquillité d\'esprit.',
      pillar2Title: 'Inclusion numérique',
      pillar2Desc:
        'Combler le fossé numérique en formant les aînés à l\'utilisation des outils modernes de communication, de santé et de réseautage.',
      pillar3Title: 'Harmonie culturelle',
      pillar3Desc:
        'Célébrer la diversité par des événements bilingues (français et anglais) qui relient les nouveaux arrivants aux résidents établis.',
      locationTitle: 'Localisation',
      locationValue: 'Montréal, Québec',
      contactUs: 'Nous contacter',
    },
    teamPage: {
      eyebrow: 'Direction de Silverswan',
      heroTitle1: 'Bâti par des personnes',
      heroTitleHighlight: 'qui se soucient vraiment.',
      heroSubtitle:
        'Notre équipe de direction apporte une expérience vécue, des racines communautaires et une conviction partagée que chaque aîné et chaque nouveau venu mérite une vraie place à la table numérique.',
      statEst: 'Fondé',
      statLangs: 'Langues',
      statCity: 'Montréal QC',
      sideQuote: '« Nous ne faisons pas que fournir des services ; nous bâtissons la capacité et la connexion. »',
      sideQuoteAuthor: 'Maryam Mohammed, Fondatrice',
      sectionLabel: 'Notre équipe',
      getInTouch: 'Nous contacter',
      ctaEyebrow: 'Prêt à vous connecter ?',
      ctaTitle1: 'Faites partie de la famille',
      ctaTitleHighlight: 'Silverswan',
      ctaSubtitle:
        'Que vous souhaitiez faire du bénévolat, vous associer ou simplement dire bonjour — nos portes sont ouvertes et notre équipe est là.',
      ctaContact: 'Nous contacter',
      ctaAbout: 'À propos de Silverswan',
    },
    contactPage: {
      heroBadge: 'Contactez-nous',
      heroTitle1: 'Nous sommes là pour',
      heroTitleHighlight: 'aider & connecter.',
      heroSubtitle:
        'Vous avez une question sur nos programmes, le bénévolat ou les partenariats ? Contactez directement l\'équipe Silverswan.',
      emailTitle: 'Courriel',
      instagramTitle: 'Instagram',
      locationTitle: 'Localisation',
      locationValue: 'Montréal, Québec',
      hoursTitle: 'Heures d\'ouverture',
      hoursLine1: 'Lun - Ven : 9h00 - 17h00',
      hoursLine2: 'Sam : 10h00 - 14h00',
      hoursLine3: 'Dim : Fermé',
      openInMaps: 'Ouvrir dans Maps',
      formTitle: 'Envoyez-nous un message',
      fieldName: 'Nom complet',
      fieldNamePlaceholder: 'Jane Doe',
      fieldEmail: 'Adresse courriel',
      fieldEmailPlaceholder: 'jane@exemple.com',
      fieldSubject: 'Je suis intéressé(e) par...',
      optionGeneral: 'Demande générale',
      optionVolunteering: 'Bénévolat auprès des aînés',
      optionProgram: 'Inscription au programme',
      optionPartnership: 'Partenariat & commandite',
      fieldMessage: 'Message',
      fieldMessagePlaceholder: 'Comment pouvons-nous vous aider ?',
      sendButton: 'Envoyer le message',
    },
  },
}

