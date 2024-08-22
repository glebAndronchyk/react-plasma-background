import { usePlasmaBlockAnimation, usePlasmaContext } from "../../hooks";
import { PlasmaBlockProps } from "../../types";

export const PlasmaBlock = ({
  width,
  height,
  top,
  left,
  zIndex,
  animationType,
  colorIndex,
}: PlasmaBlockProps) => {
  const { blockRef } = usePlasmaBlockAnimation(animationType);
  const {
    config: { opacity, blocksColors },
  } = usePlasmaContext();

  return (
    <div
      ref={blockRef}
      className="plasma-block"
      style={{
        opacity,
        width,
        height,
        top,
        left,
        zIndex,
        background: blocksColors[colorIndex],
      }}
    />
  );
};
