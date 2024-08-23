import { forwardRef, PropsWithChildren, useState } from "react";
import { PlasmaBlocks } from "./entities";
import {
  AnimationConfigurationContext,
  PlasmaBackgroundContext,
} from "./context";
import { useConfigExpose, usePlasmaConfig } from "./hooks";
import { PlasmaBackgroundProps, UsePlasmaReturn } from "./types";
import { defaultAnimationConfig } from "./constants";
import { PlasmaBlock } from "./components";

import "./styles.css";

export const PlasmaBackground = forwardRef<
  UsePlasmaReturn,
  PropsWithChildren<PlasmaBackgroundProps>
>(
  (
    { children, initial, animationConfiguration = defaultAnimationConfig },
    exposeConfigRef,
  ) => {
    const [plasmaBlocks] = useState(new PlasmaBlocks(animationConfiguration));
    const plasmaConfig = usePlasmaConfig(initial);

    useConfigExpose(exposeConfigRef, plasmaConfig);

    return (
      <PlasmaBackgroundContext.Provider
        value={{ ...plasmaConfig[1], config: plasmaConfig[0] }}
      >
        <AnimationConfigurationContext.Provider
          value={{ animationConfiguration }}
        >
          <div
            style={{
              filter: `blur(${plasmaConfig[0].blur}px)`,
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
  },
);
