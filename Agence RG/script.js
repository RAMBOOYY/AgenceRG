/* =========================================
   NOVAWEB — INTERACTIONS PREMIUM
========================================= */


/* CURSEUR PERSONNALISÉ */

const cursorDot = document.querySelector(".cursor-dot");
const cursorRing = document.querySelector(".cursor-ring");
const mouseGlow = document.querySelector(".mouse-glow");

let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;

let ringX = mouseX;
let ringY = mouseY;

document.addEventListener("mousemove", (e) => {

    mouseX = e.clientX;
    mouseY = e.clientY;

    cursorDot.style.left = mouseX + "px";
    cursorDot.style.top = mouseY + "px";

    mouseGlow.style.left = mouseX + "px";
    mouseGlow.style.top = mouseY + "px";

});


function animateCursor() {

    ringX += (mouseX - ringX) * 0.15;
    ringY += (mouseY - ringY) * 0.15;

    cursorRing.style.left = ringX + "px";
    cursorRing.style.top = ringY + "px";

    requestAnimationFrame(animateCursor);
}

animateCursor();


/* CURSEUR SUR LES ÉLÉMENTS INTERACTIFS */

const interactiveElements = document.querySelectorAll(
    "a, button, .service-card, .price-card, .project-card"
);

interactiveElements.forEach((element) => {

    element.addEventListener("mouseenter", () => {
        cursorRing.classList.add("active");
    });

    element.addEventListener("mouseleave", () => {
        cursorRing.classList.remove("active");
    });

});


/* =========================================
   BOUTONS MAGNÉTIQUES
========================================= */

const magneticElements = document.querySelectorAll(".magnetic");

magneticElements.forEach((element) => {

    element.addEventListener("mousemove", (e) => {

        const rect = element.getBoundingClientRect();

        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        element.style.transform =
            `translate(${x * 0.15}px, ${y * 0.15}px)`;

    });

    element.addEventListener("mouseleave", () => {

        element.style.transform = "translate(0, 0)";

    });

});


/* =========================================
   ANIMATION AU SCROLL
========================================= */

const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.12
    }
);

revealElements.forEach((element) => {

    observer.observe(element);

});


/* =========================================
   MENU MOBILE
========================================= */

const menuButton = document.querySelector(".menu-button");
const mobileMenu = document.querySelector(".mobile-menu");

menuButton.addEventListener("click", () => {

    mobileMenu.classList.toggle("open");
    menuButton.setAttribute(
        "aria-expanded",
        mobileMenu.classList.contains("open")
    );

});


const mobileLinks = document.querySelectorAll(".mobile-menu a");

mobileLinks.forEach((link) => {

    link.addEventListener("click", () => {

        mobileMenu.classList.remove("open");
        menuButton.setAttribute("aria-expanded", "false");

    });

});


/* =========================================
   EFFET 3D SUR LES CARTES
========================================= */

const tiltCards = document.querySelectorAll(".tilt-card");

tiltCards.forEach((card) => {

    card.addEventListener("mousemove", (e) => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX =
            ((y - centerY) / centerY) * -4;

        const rotateY =
            ((x - centerX) / centerX) * 4;

        card.style.transform =
            `perspective(1000px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             translateY(-5px)`;

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =
            "perspective(1000px) rotateX(0) rotateY(0) translateY(0)";

    });

});


/* =========================================
   PARALLAX SOURIS POUR LES ORBES
========================================= */

const orbs = document.querySelectorAll(".hero-orb");

document.addEventListener("mousemove", (e) => {

    const x = (e.clientX / window.innerWidth - 0.5);
    const y = (e.clientY / window.innerHeight - 0.5);

    orbs.forEach((orb, index) => {

        const speed = (index + 1) * 15;

        orb.style.transform =
            `translate(${x * speed}px, ${y * speed}px)`;

    });

});


/* =========================================
   NAVBAR : LÉGER EFFET AU SCROLL
========================================= */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.style.background =
            "rgba(5,5,7,.88)";

    } else {

        navbar.style.background =
            "rgba(5,5,7,.65)";

    }

});


/* =========================================
   ANNÉE AUTOMATIQUE
========================================= */

const footerYear = document.querySelector(".footer-bottom span");

if (footerYear) {

    footerYear.textContent =
        `© ${new Date().getFullYear()} Agence RG. Tous droits réservés.`;

}


/* =========================================
   FORMULAIRE / CONTACT
========================================= */

const contactLinks =
    document.querySelectorAll('a[href^="mailto:"]');

contactLinks.forEach((link) => {

    link.addEventListener("click", () => {

        console.log("Contact NovaWeb");

    });

});


/* TRADUCTION FRANÇAIS / ANGLAIS */

const translations = {
    "À propos": "About",
    "Démarrer": "Get started",
    "Démarrer un projet": "Start a project",
    "Agence Web indépendante": "Independent web agency",
    "Un site à votre image.": "A website that reflects you.",
    "Des sites web rapides, beaux et simples à utiliser.": "Fast, beautiful websites that are easy to use.",
    "Créer mon site": "Build my website",
    "Voir notre approche": "See our approach",
    "sur mesure": "custom-built",
    "votre site en ligne": "your site, online",
    "localisation": "based here",
    "Entreprise Québécoise": "Quebec-based business",
    "votreentreprise.ca": "yourbusiness.ca",
    "Votre entreprise.": "Your business.",
    "Nouvelle dimension.": "A new dimension.",
    "Service Rapide": "Fast service",
    "DESING PERSONNALISÉ": "CUSTOM DESIGN",
    "FACILE D'UTLISATION": "EASY TO USE",
    "SASTISFAIT OU REMBOURSER": "SATISFACTION GUARANTEED",
    "SUPPORT CLIENT 24H": "24/7 CUSTOMER SUPPORT",
    "LIVRÉ RAPIDEMENT": "FAST DELIVERY",
    "01 — SERVICES": "01 — SERVICES",
    "Tout ce dont votre": "Everything your",
    "entreprise": "business",
    "a besoin.": "needs.",
    "Nous combinons design, technologie et stratégie pour créer une présence numérique qui travaille pour votre entreprise.": "We combine design, technology, and strategy to build a digital presence that works for your business.",
    "Sites vitrines": "Business websites",
    "Un site professionnel qui présente votre entreprise et transforme vos visiteurs en clients.": "A professional website that showcases your business and turns visitors into customers.",
    "En savoir plus →": "Learn more →",
    "E-commerce": "E-commerce",
    "Une boutique en ligne élégante, rapide et pensée pour maximiser vos ventes.": "An elegant, fast online store designed to maximize sales.",
    "Refonte web": "Website redesign",
    "Votre site est dépassé ? Nous le transformons en une expérience moderne et performante.": "Is your website outdated? We can turn it into a modern, high-performing experience.",
    "SEO & performance": "SEO & performance",
    "Optimisation technique pour améliorer la vitesse, l'expérience et votre visibilité.": "Technical optimization to improve speed, user experience, and visibility.",
    "Un résultat qui donne": "A result that inspires",
    "confiance.": "confidence.",
    "02 — APPROCHE": "02 — OUR APPROACH",
    "Chaque détail est pensé pour donner à votre entreprise une image professionnelle et mémorable.": "Every detail is designed to give your business a professional, memorable image.",
    "AGENCE IMMOBILIÈRE": "REAL ESTATE AGENCY",
    "Trouvez votre": "Find your",
    "prochain chez-vous.": "next home.",
    "Immobilier premium": "Premium real estate",
    "Site vitrine": "Business website",
    "Plateforme": "Platform",
    "Entreprise": "Business",
    "Boutique": "Online store",
    "03 — TARIFS": "03 — PRICING",
    "Nos forfaits": "Our plans",
    "Des prix de départ transparents. Chaque projet est ensuite adapté à vos besoins.": "Clear starting prices. Every project is then tailored to your needs.",
    "OFFRE DE LANCEMENT": "LAUNCH OFFER",
    "Nous sommes une nouvelle agence au Québec. Des rabais sont actuellement disponibles pour nos premiers clients.": "We're a new agency in Quebec. Special pricing is currently available for our first clients.",
    "ESSENTIEL": "ESSENTIAL",
    "à partir de": "starting at",
    "Tout ce qu'il faut pour avoir une présence professionnelle en ligne.": "Everything you need for a professional online presence.",
    "✓ Design personnalisé": "✓ Custom design",
    "✓ Jusqu'à 5 pages": "✓ Up to 5 pages",
    "✓ Adapté mobile et ordinateur": "✓ Mobile and desktop ready",
    "✓ Formulaire de contact": "✓ Contact form",
    "✓ Optimisation Google de base": "✓ Basic Google optimization",
    "Choisir Essentiel": "Choose Essential",
    "LE PLUS POPULAIRE": "MOST POPULAR",
    "PROFESSIONNEL": "PROFESSIONAL",
    "SIGNATURE": "SIGNATURE",
    "Pour les entreprises qui veulent une image haut de gamme.": "For businesses looking for a high-end image.",
    "✓ Tout ce qui est inclus dans Essentiel": "✓ Everything in Essential",
    "✓ Jusqu'à 10 pages": "✓ Up to 10 pages",
    "✓ Animations et interactions modernes": "✓ Modern animations and interactions",
    "✓ SEO avancé": "✓ Advanced SEO",
    "✓ Galerie / portfolio": "✓ Gallery / portfolio",
    "✓ Intégration des réseaux sociaux": "✓ Social media integration",
    "✓ Optimisation de la vitesse": "✓ Speed optimization",
    "✓ Statistiques du site": "✓ Website analytics",
    "Choisir Signature": "Choose Signature",
    "E-COMMERCE": "E-COMMERCE",
    "SUR MESURE": "CUSTOM",
    "Pour les entreprises qui veulent vendre directement en ligne.": "For businesses ready to sell directly online.",
    "✓ Tout ce qui est inclus dans Signature": "✓ Everything in Signature",
    "✓ Design entièrement sur mesure": "✓ Fully custom design",
    "✓ Boutique en ligne ou fonctionnalités avancées": "✓ Online store or advanced features",
    "✓ Système de réservation ou demandes de soumission": "✓ Booking system or quote requests",
    "✓ Optimisation mobile": "✓ Mobile optimization",
    "✓ Intégrations personnalisées": "✓ Custom integrations",
    "✓ Animations avancées": "✓ Advanced animations",
    "Démarrer sur mesure": "Get a custom quote",
    "mission": "mission",
    "04 — À PROPOS": "04 — ABOUT",
    "Une petite agence.": "A small agency.",
    "Une grande ambition.": "A big ambition.",
    "Agence RG est une nouvelle agence web indépendante basée au Québec.": "Agence RG is a new independent web agency based in Quebec.",
    "Notre objectif est simple : offrir aux entreprises une présence numérique moderne, professionnelle et accessible.": "Our goal is simple: give businesses a modern, professional, and accessible online presence.",
    "Nous privilégions la qualité, la communication directe et des solutions réellement adaptées à chaque entreprise.": "We focus on quality, direct communication, and solutions tailored to each business.",
    "Parlons de votre projet →": "Let's talk about your project →",
    "De l'idée au": "From idea to",
    "05 — PROCESSUS": "05 — OUR PROCESS",
    "lancement.": "launch.",
    "Discussion": "Discovery",
    "Nous discutons de votre entreprise, de vos objectifs et de vos besoins.": "We discuss your business, goals, and needs.",
    "Design": "Design",
    "Nous créons l'expérience visuelle et la structure de votre site.": "We create the visual experience and structure of your website.",
    "Développement": "Development",
    "Votre site est développé et optimisé pour ordinateur et mobile.": "Your website is built and optimized for desktop and mobile.",
    "Lancement": "Launch",
    "Nous mettons votre site en ligne et vous aidons à partir du bon pied.": "We launch your website and help you get off to a great start.",
    "06 — VOTRE PROJET": "06 — YOUR PROJECT",
    "Votre prochain site": "Your next website",
    "commence ici.": "starts here.",
    "Parlez-nous de votre projet. Les premiers échanges sont sans engagement.": "Tell us about your project. The first conversations are no-obligation.",
    "Démarrer mon projet": "Start my project",
    "Offre de lancement disponible pour les nouveaux clients.": "Launch offer available for new clients.",
    "Des expériences numériques qui donnent une nouvelle dimension aux entreprises québécoises.": "Digital experiences that take Quebec businesses to a new dimension.",
    "Navigation": "Navigation",
    "Contact": "Contact",
    "Québec, Canada": "Quebec, Canada",
    "Fait au Québec ✦": "Made in Quebec ✦"
};

const languageToggle = document.querySelector(".language-toggle");
const translatableTextNodes = [];
const textWalker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
        return node.parentElement.closest("script, style")
            ? NodeFilter.FILTER_REJECT
            : NodeFilter.FILTER_ACCEPT;
    }
});

while (textWalker.nextNode()) {
    const node = textWalker.currentNode;
    if (node.nodeValue.trim()) {
        translatableTextNodes.push({ node, french: node.nodeValue });
    }
}

let currentLanguage = "fr";
try {
    currentLanguage = localStorage.getItem("agencerg-language") === "en" ? "en" : "fr";
} catch {
    currentLanguage = "fr";
}

function applyLanguage(language) {
    currentLanguage = language;

    translatableTextNodes.forEach(({ node, french }) => {
        const normalized = french.trim().replace(/\s+/g, " ");
        const leadingWhitespace = french.match(/^\s*/)[0];
        const trailingWhitespace = french.match(/\s*$/)[0];
        const translated = language === "en" ? translations[normalized] : null;

        node.nodeValue = `${leadingWhitespace}${translated || normalized}${trailingWhitespace}`;
    });

    document.documentElement.lang = language;
    document.title = language === "en"
        ? "Agence RG — Independent Web Agency"
        : "Agence RG — Agence Web Indépendante";
    document.querySelector('meta[name="description"]').content = language === "en"
        ? "Agence RG builds modern, fast, premium websites for businesses in Quebec."
        : "Agence RG crée des sites web modernes, rapides et premium pour les entreprises du Québec.";

    const year = new Date().getFullYear();
    if (footerYear) {
        footerYear.textContent = language === "en"
            ? `© ${year} Agence RG. All rights reserved.`
            : `© ${year} Agence RG. Tous droits réservés.`;
    }

    languageToggle.textContent = language === "fr" ? "EN" : "FR";
    languageToggle.setAttribute(
        "aria-label",
        language === "fr" ? "Switch to English" : "Passer en français"
    );
    menuButton.setAttribute(
        "aria-label",
        language === "fr" ? "Ouvrir le menu" : "Open menu"
    );
}

languageToggle.addEventListener("click", () => {
    const nextLanguage = currentLanguage === "fr" ? "en" : "fr";
    applyLanguage(nextLanguage);
    try {
        localStorage.setItem("agencerg-language", nextLanguage);
    } catch {
        // Language switching still works when browser storage is unavailable.
    }
});

applyLanguage(currentLanguage);