import { createContext } from "react";
import { PlasmaConfig, PlasmaControls } from "../types";

export const PlasmaBackgroundContext = createContext<
  (PlasmaControls & { config: PlasmaConfig }) | null
>(null);
