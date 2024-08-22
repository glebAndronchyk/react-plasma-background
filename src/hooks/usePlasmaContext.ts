import { useContext } from "react";
import { PlasmaBackgroundContext } from "../context";

export const usePlasmaContext = () => {
  const context = useContext(PlasmaBackgroundContext);
  if (!context) {
    throw new Error("usePlasmaContext must be used within a PlasmaProvider");
  }
  return context;
};
