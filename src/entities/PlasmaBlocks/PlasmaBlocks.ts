import { Random } from "../../utils/Random";
import { PlasmaGradientBlock, AnimationConfig } from "../../types";

export class PlasmaBlocks {
  blocks: PlasmaGradientBlock[] = [];

  constructor(private configuration: AnimationConfig) {
    this.generate();
  }

  private generate() {
    const dummyList = Array.from({ length: 3 }).map((_, i) => i);

    this.blocks = dummyList.map(this.generateBlock.bind(this));
  }

  private generateBlock(index: number): PlasmaGradientBlock {
    const {
      block: { widthRange, heightRange },
      startPositions,
    } = this.configuration;

    const width = Random.pickInRange(widthRange);
    const height = Random.pickInRange(heightRange);
    const position = startPositions[Random.pickInRange([0, 2], "int")];
    const zIndex = -index - 1;

    return {
      width: `${width}px`,
      height: `${height}px`,
      top: position.top,
      left: position.left,
      zIndex,
      animationType: index === 0 ? "deformation" : "move",
    };
  }
}
