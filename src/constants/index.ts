import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  windev,
  tailwind,
  nodejs,
  visionbudget,
  php,
  firebase,
  reactnative,
  sifa,
  pimpme,
  bdoc,
  lmgc,
  nutrimoi,
  siteweb,
} from "../assets";

export const navLinks: TNavLink[] = [
  {
    id: "apropos",
    title: "A propos",
  },
  {
    id: "portfolio",
    title: "Portfolio",
  },
  {
    id: "experience",
    title: "Expériences",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services: TService[] = [
  {
    title: "Développeur logiciels",
    icon: web,
  },
  {
    title: "Développeur React native",
    icon: mobile,
  },
  {
    title: "Développeur web",
    icon: backend,
  },
  {
    title: "Créateur de contenu",
    icon: creator,
  },
];

const technologies: TTechnology[] = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "ReactNative",
    icon: reactnative,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Windev",
    icon: windev,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Firebase",
    icon: firebase,
  },
  {
    name: "PHP",
    icon: php,
  },
  
  
];

const experiences: TExperience[] = [
  {
    title: "Développeur Windev/SQL",
    companyName: "SIFA",
    icon: sifa, //Mettre icon sifa
    iconBg: "#383E56",
    date: "Mars 2024 - Présent",
    points: [
      "Missions : Je participe au développement et à l’évolution d’un ERP en créant de nouvelles fonctionnalités adaptées aux besoins des utilisateurs. L’intégration de données et l’échange d’informations avec d’autres systèmes font parti de mes missions.",
      "Méthodologie Agile : je collabore avec l’équipe pour garantir des livraisons efficaces et continues.",
    ],
  },
  {
    title: "Alternant Développeur Windev",
    companyName: "PIM-PME",
    icon: pimpme,  //Mettre icon pimpme
    iconBg: "#E6DEDD",
    date: "Sept. 2020 - Nov. 2023",
    points: [
      "Projet IWS : Récupération de devis & facture depuis leur plateforme web vers l'ERP Codial.",
      "Projet URSSAF (Facturation directe) : Envoi de facture Codial vers la plateforme de l'URSSAF. Le but étant d'anticiper la facturation directe.",
      "Projet INTENT : Synchronisation de bon d'intervention de Codial vers la plateforme web Intent.",
      "Maintenance et évolution de l'ERP Codial : Assistance client et développement de macros.",
    ],
  },
  {
    title: "Développeur/Concepteur",
    companyName: "BDOC (Groupe GFI)",
    icon: bdoc,  //Mettre icon groupe GFI
    iconBg: "#383E56",
    date: "Sept. 2019 - Juil. 2020",
    points: [
      "Mission ALPTIS : Interventon chez le client pour la conception des modèles de document analysés. Maintenance et migration de modèles existants sur la version BDOC Suite V7.",
      "Projet Yamaha : Maintenance et correction de modèles existants sur la version BDOC V5",
    ],
  },
  {
    title: "Développeur PHP",
    companyName: "LMGC",  //Mettre icon LMGC
    icon: lmgc,
    iconBg: "#E6DEDD",
    date: "Janv. 2019 - Sept. 2019",
    points: [
      "Evolution d'une application web de gestion de contrats du LMGC.",
      "Elaboration d'un cahier des charges et échanges avec utilisateurs finals de l'application web.",
      "Rédaction d'une documentation utilisateur et développeur",
      "Maintenance de l'application web",
    ],
  },
];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects: TProject[] = [
  {
    name: "Vision Budget",
    description:
      "Application mobile conçue pour suivre et gérer facilement ses prélèvements mensuels, en offrant une vue claire sur les finances personnelles.",
    tags: [
      {
        name: "react-native",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: visionbudget,
    sourceCodeLink: "https://github.com/orandri",
  },
  {
    name: "Nutri-moi",
    description:
      "Application mobile de suivi de nutrition. Axée sur la personnalisation et pour aider les utilisateurs à atteindre leurs objectifs de santé et de nutrition.",
    tags: [
      {
        name: "react-native",
        color: "blue-text-gradient",
      },
      {
        name: "sql",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: nutrimoi,
    sourceCodeLink: "https://github.com/orandri",
  },
  {
    name: "Site web perso",
    description:
      "Site retraçant tout mon parcours. Il comprend mes compétences, activités, pacours pro et perso ainsi que les projets développés.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "blue-text-gradient",
      },
      {
        name: "JS",
        color: "green-text-gradient",
      },
      {
        name: "PHP",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: siteweb,
    sourceCodeLink: "https://randriaolivier.fr",
  },
  
];

export { services, technologies, experiences, testimonials, projects };
