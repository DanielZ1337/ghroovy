import {TbMail} from "react-icons/tb";
import {SiGithub, SiInstagram, SiLinkedin, SiTwitter, SiYoutube} from "react-icons/si";

export const siteMetadata = {
    title: "Ghroovy - Simplistic E-Commerce",
    name: "Ghroovy",
    creator: "Daniel Bermann Schmidt",
    url: "https://ghroovy.danielz.dev",
    email: "ghroovy@danielz.dev",
    ogImage: "/og.png",
    description: "Explore and shop the finest selection of products at Ghroovy, built with Next.js",
    links: {
        twitter: {
            url: "https://twitter.com/danielz1337",
            icon: <SiTwitter/>,
        },
        instagram: {
            url: "https://www.instagram.com/danielz1337",
            icon: <SiInstagram/>,
        },
        github: {
            url: "https://github.com/DanielZ1337",
            icon: <SiGithub/>,
        },
        linkedin: {
            url: "https://www.linkedin.com/in/daniel-bermann-schmidt",
            icon: <SiLinkedin/>,
        },
        emailto: {
            url: "mailto:danielz2nd@hotmail.com",
            icon: <TbMail/>,
        },
        email: {
            url: "danielz2nd@hotmail.com",
            icon: <TbMail/>,
        },
        github_repo: {
            url: "https://github.com/DanielZ1337/ghroovy",
            icon: <SiGithub/>,
        },
        youtube: {
            url: "https://www.youtube.com/@danielz1337tm",
            icon: <SiYoutube/>,
        },
        dev_email: {
            url: "daniel@danielz.dev",
            icon: <TbMail/>,
        },
        dev_emailto: {
            url: "mailto:daniel@danielz.dev",
            icon: <TbMail/>,
        }
    },
}


export type SiteMetadata = typeof siteMetadata
