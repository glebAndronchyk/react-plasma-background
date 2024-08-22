import { PropsWithChildren, useState } from "react";
import { PlasmaBlocks } from "./entities";
import {
  AnimationConfigurationContext,
  PlasmaBackgroundContext,
} from "./context";
import { usePlasmaConfig } from "./hooks";
import { PlasmaBackgroundProps } from "./types";
import { defaultAnimationConfig } from "./constants";
import { PlasmaBlock } from "./components";

import "./styles.css";

export const PlasmaBackground = ({
  children,
  initial,
  animationConfiguration = defaultAnimationConfig,
}: PropsWithChildren<PlasmaBackgroundProps>) => {
  const [plasmaBlocks] = useState(new PlasmaBlocks(animationConfiguration));
  const [config, controls] = usePlasmaConfig(initial);

  return (
    <PlasmaBackgroundContext.Provider value={{ ...controls, config }}>
      <AnimationConfigurationContext.Provider
        value={{ animationConfiguration }}
      >
        <div
          style={{
            filter: `blur(${config.blur}px)`,
          }}
          className="plasma-wrapper"
        >
          {plasmaBlocks.blocks.map((block, i) => (
            <PlasmaBlock {...block} key={i} colorIndex={i} />
          ))}
        </div>
      </AnimationConfigurationContext.Provider>
      {children}
    </PlasmaBackgroundContext.Provider>
  );
};
