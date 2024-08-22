import { useContext } from "react";
import { AnimationConfigurationContext } from "../context";

export const useAnimationConfiguration = () => {
  const context = useContext(AnimationConfigurationContext);
  if (!context) {
    throw new Error("useAnimationConfiguration must be used within a AnimationConfigurationContext");
  }
  return context;
};
