import {SiGithub, SiGoogle} from "react-icons/si";
import React from "react";

export const authProviders = [
    {
        name: "Google",
        provider: "google",
        icon: <SiGoogle/>
    },
    {
        name: "Github",
        provider: "github",
        icon: <SiGithub/>
    }
]