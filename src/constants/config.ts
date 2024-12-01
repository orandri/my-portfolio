type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };
  hero: {
    name: string;
    p: string[];
  };
  contact: {
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    experience: TSection;
    feedbacks: TSection;
    works: Required<TSection>;
  };
};

export const config: TConfig = {
  html: {
    title: "Olivier Randriamitantsoa",
    fullName: "Olivier Randriamitantsoa",
    email: "olivier.randria@outlok.fr",
  },
  hero: {
    name: "Olivier R.",
    p: ["Développeur Windev Full-stack","Développement de logiciels, sites web et applications mobiles"],
  },
  contact: {
    p: "Contactez-moi",
    h2: "Contact",
    form: {
      name: {
        span: "Votre Nom",
        placeholder: "Quel est votre nom?",
      },
      email: { span: "Votre Email", placeholder: "Quel est votre email?" },
      message: {
        span: "Votre Message",
        placeholder: "Ecrivez votre message",
      },
    },
  },
  sections: {
    about: {
      p: "Introduction",
      h2: "A propos",
      content: `Je m'appelle Olivier, j’ai 27 ans et je suis développeur Windev. Mon parcours m’a conduit à l’EFREI Paris, où j’ai obtenu mon diplôme en 2023. Aujourd’hui, je travaille sur des projets qui mêlent technique et créativité.
Ce qui m’anime le plus, c’est de donner vie à des idées, que ce soit en développant des applications mobiles ou des sites web. J’aime aussi explorer la création digitale, des domaines où je peux vraiment exprimer ma créativité tout en restant proche de la technologie.
Je suis toujours curieux d’apprendre de nouvelles choses et de m’améliorer dans ce que je fais. Mon objectif est simple : continuer à m’épanouir dans ce que j’aime et contribuer à des projets qui ont du sens, que ce soit pour moi ou pour les autres.`,
    },
    experience: {
      p: "Mon parcours",
      h2: "Expérience professionnel",
    },
    feedbacks: {
      p: "Ce qu'on dit sur moi",
      h2: "Témoignages",
    },
    works: {
      p: "Mes projets",
      h2: "Portfolio",
      content: `Différents projets personnels ou professionnels réalisés au cours de mon parcours. Cela va d'un développement d'une application web à des événements réalisés tel que l'animation de soirée.`,
    },
  },
};
