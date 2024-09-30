import React, { createContext, useState } from "react";

export const Context = createContext();

const LangContext = ({ children }) => {
  const engTxt = {
    navlinks: [
      { title: "Projects", url: "#projects" },
      { title: "About", url: "#about" },
    ],
    language: "English",
    hero: {
      title: "Web Developer",
      desc: "Self-taught. Proficient in React, Express and the web stack.",
    },
    sections: {
      projects: {
        title: "Projects",
        project_1: {
          title: "E-Commerce",
          desc_1:
            "An E-Commerce website build with React and NextJS with a fully responsive UI, server-side rendering to improve performance and SEO and dynamic routing based on user interactions and data changes via filters and URL.",
          desc_2:
            "Backend powered by Express, with an own REST API with custom endpoints to handle different operations. Data serialized in JSON format, ensuring compatibility by the client-side application.",
        },
        project_2: {
          title: "E-Tech911 Website",
          desc_1:
            "A landing page developed using Astro JS, that it's a rebuild of an old website for a IT solutions company, resulting in a site with fast page loads, improved SEO, responsive design and optimized performance, all of this using modern web development principles.",
        },
        project_3: {
          title: "Aniden",
          desc_1:
            "Anime and manga database project built using React 19 release candidate to showcase the latest features and improvements of React, focusing on optimizing user experience and performance while providing a robust media filtering interface.",
        },
        project_4: {
          title: "Dish Delight",
          desc_1:
            "Recipes social network fullstack project designed to allow users to discover, share, and manage their favorite recipes. Built with React for the frontend and NestJS for the backend, this app provides a seamless user experience and robust functionality for recipe enthusiasts.",
          desc_2:
            "The primary goal of this project is to create an interactive platform to share recipes, while implementing secure authentication with JSON Web Tokens and efficient data management through two separate CRUD operations with two well-structured APIs, one for users and another for recipes. ",
        },
      },
      about: {
        title: "About me",
        desc: "I'm Alonso. I started programming because I always found it fascinating to know how applications work on the inside. Since then, I've been dedicated to self-learning technologies and good practices that help me create engaging user experiences.",
      },
    },
  };

  const espTxt = {
    navlinks: [
      { title: "Proyectos", url: "#projects" },
      { title: "Sobre mí", url: "#about" },
    ],
    language: "Español",
    hero: {
      title: "Desarrollador Web",
      desc: "Autodidacta. Competente en React, Express y el stack web.",
    },
    sections: {
      projects: {
        title: "Proyectos",
        project_1: {
          title: "Comercio Electrónico",
          desc_1:
            "Comercio electrónico construido con React y NextJS con una interfaz de usuario adaptable a todo dispositivo, uso de renderizado desde el servidor para mejorar el rendimiento y SEO, enrutamiento dinámico basado en las interacciones del usuario y cambios de datos mediante filtros y URL.",
          desc_2:
            "Backend propulsado con Express, propia API REST con rutas dinámicas. Datos en formato JSON, asegurando la compatibilidad de la aplicación del lado del cliente.",
        },
        project_2: {
          title: "Sitio web E-Tech911",
          desc_1:
            "Página web desarrollada con Astro JS, la cual es una reconstrucción de un sitio web antiguo para una compañia de soluciones informáticas, cuenta con SEO optimizado, diseño adaptable y rendimiento mejorado, todo esto utilizando principios modernos de desarrollo web.",
        },
        project_3: {
          title: "Aniden",
          desc_1:
            "Proyecto de base de datos de anime y manga construido con la versión candidata de React 19 para mostrar las últimas características y mejoras de React, centrándose en optimizar la experiencia del usuario y el rendimiento, mientras se proporciona una interfaz de filtrado de contenido robusta.",
        },
        project_4: {
          title: "Dish Delight",
          desc_1:
            "Proyecto de red social de recetas fullstack que permite a los usuarios descubrir, compartir y gestionar sus recetas favoritas. Desarrollada con React y NestJS, esta aplicación ofrece una experiencia de usuario fluida y funcionalidades robustas para los amantes de la cocina.",
          desc_2:
            "El objetivo principal de este proyecto es crear una plataforma interactiva para compartir recetas, implementando autenticación segura con JSON Web Tokens y una gestión eficiente de datos a través de dos operaciones CRUD separadas con dos APIs bien estructuradas.",
        },
      },
      about: {
        title: "Sobre mí",
        desc: "Soy Alonso. Comencé en la programación porque siempre encontré fascinante el saber cómo funcionan las aplicaciones por dentro. Desde entonces, me dedico a aprender por mi cuenta tecnologías y buenas prácticas que me ayuden a crear experiencias de usuario atractivas.",
      },
    },
  };

  let mainTxt = {};

  const [language, setLanguage] = useState(false);

  if (language) {
    mainTxt = espTxt;
  } else {
    mainTxt = engTxt;
  }

  return (
    <Context.Provider value={{ mainTxt, setLanguage }}>
      {children}
    </Context.Provider>
  );
};

export default LangContext;
