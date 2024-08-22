import { PlasmaConfig } from "./PlasmaConfig";

export type InitialPlasmaConfig = Pick<PlasmaConfig, "blocksColors"> & Omit<Partial<PlasmaConfig>, "blocksColors">
