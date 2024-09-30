import { AstroIcon, ExpressIcon, NestIcon, NextIcon, ReactIcon } from "../../constants";

import Image1 from "../../assets/ecommerce-1.webp";
import Image2 from "../../assets/ecommerce-2.webp";
import Image3 from "../../assets/ecommerce-3.webp";
import Image4 from "../../assets/ecommerce-4.webp";

import Image5 from "../../assets/landing-1.webp";
import Image6 from "../../assets/landing-2.webp";
import Image7 from "../../assets/landing-3.webp";

import Image8 from "../../assets/aniden-1.webp";

import { useContext } from "react";
import Image9 from "../../assets/dishdelight-1.webp";
import Image10 from "../../assets/dishdelight-2.webp";
import Image11 from "../../assets/dishdelight-3.webp";
import Image12 from "../../assets/dishdelight-4.webp";
import { Context } from "../../context/LangContext/LangContext";

export const useProjectsData = () => {
    const { mainTxt } = useContext(Context);

    const projectsData = [
        {
            id: 1,
            title: mainTxt.sections.projects.project_1.title,
            description: [
                mainTxt.sections.projects.project_1.desc_1,
                mainTxt.sections.projects.project_1.desc_2,
            ],
            badges: [{ Icon: ReactIcon, title: "React" }, { Icon: NextIcon, title: "Next" }, { Icon: ExpressIcon, title: "Express" }],
            images: [Image1, Image2, Image3, Image4],
            codeUrl: "https://github.com/azumbado11/next-one",
            live: null
        },
        {
            id: 2,
            title: mainTxt.sections.projects.project_2.title,
            description: [
                mainTxt.sections.projects.project_2.desc_1,
            ],
            badges: [{ Icon: AstroIcon, title: "Astro" }],
            images: [Image5, Image6, Image7],
            codeUrl: null,
            live: null
        },
        {
            id: 3,
            title: mainTxt.sections.projects.project_3.title,
            description: [mainTxt.sections.projects.project_3.desc_1],
            badges: [{ Icon: ReactIcon, title: "React" }],
            images: [Image8],
            codeUrl: "https://github.com/azumbado11/AniDen",
            live: null
        },
        {
            id: 4,
            title: mainTxt.sections.projects.project_4.title,
            description: [mainTxt.sections.projects.project_4.desc_1, mainTxt.sections.projects.project_4.desc_2],
            badges: [{ Icon: ReactIcon, title: "React" }, { Icon: NestIcon, title: "NestJS" }],
            images: [Image9, Image10, Image11, Image12],
            codeUrl: "https://github.com/azumbado11/DishDelight",
            live: null
        }
    ]
    return projectsData
}