import { createContext } from "react";
import { AnimationConfig } from "../types";

export const AnimationConfigurationContext = createContext<
    { animationConfiguration: AnimationConfig } | null
>(null);
