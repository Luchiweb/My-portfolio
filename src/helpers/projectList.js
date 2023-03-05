import musicWebsite from "../img/projects/01.jpg";
import musicWebsiteBig from "../img/projects/01-big.jpg";

import portfolio from "../img/projects/02.jpg";
import portfolioBig from "../img/projects/02-big.jpg";

import hungman from "../img/projects/03.jpg";
import hungmanBig from "../img/projects/03-big.jpg";

export const projects = [
  {
    title: "Landing of music website",
    skills: "TailwindCSS, HTML, Flowbite",
    images: {
      smallImage: musicWebsite,
      bigImage: musicWebsiteBig,
    },
    gitHubLink: "https://github.com/Luchiweb/MusicVibe",
  },
  {
    title: "Portfolio landing",
    skills: "JavaScript, CSS, HTML",
    images: {
      smallImage: portfolio,
      bigImage: portfolioBig,
    },
    gitHubLink: "https://github.com/Luchiweb/Portfolio",
  },
  {
    title: "Game Hungman",
    skills: "TypeScript, HTML, CSS",
    images: {
      smallImage: hungman,
      bigImage: hungmanBig,
    },
    gitHubLink: "https://github.com/Luchiweb/hungman",
  },
];
