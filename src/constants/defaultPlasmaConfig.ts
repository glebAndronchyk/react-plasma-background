import { PlasmaConfig } from "../types";

export const defaultPlasmaConfig: Omit<PlasmaConfig, "blocksColors"> = {
  speed: 11,
  opacity: 0.6,
  blur: 150,
};
