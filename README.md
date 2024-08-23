# react-plasma-background

A small library for React that provides a background component with a simple plasma effect. The effect is generated randomly based on the passed animation configuration and is built using the Web Animations API🔮.

![Example](https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExbnhmeHUzdmQ5NWdnNWtpd3BvYXNsaDFpcHpvazZlMXFtNTlpc28ydyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/JCOSNOudS0WPTTPuky/giphy-downsized-large.gif)

(Quality cropped because of .gif format)

## Usage

1. Install using any available package manager:

```
// Yarn
yarn add react-plasma-background

// npm
npm i react-plasma-background
```

2. Import the `PlasmaBackground` component and use it as is. Pass all your content via `children`.

```javascript
import { PlasmaBackground } from "react-plasma-background";

function App() {
  return (
    <PlasmaBackground
      initial={{
        blocksColors: ["#ff0000", "#00ff00", "#0000ff"],
      }}
    >
      ...
    </PlasmaBackground>
  );
}
```

3. To control the animation at runtime, the library provides a hook that works only within the scope of the `PlasmaBackground` component.

```javascript
import { usePlasmaContext } from 'react-plasma-background'

function ChildComponent() {
  const {
    changeColor,
    changeSpeed,
    changeOpacity,
    changeBlur,
    updateConfig,
    shake,
  } = usePlasmaContext();

  return ...
}
```

- If you want to control the animation outside of the `PlasmaBackground` context, you can pass a `Ref` object as a prop.

```typescript
import { useRef, useEffect } from "react"
import { PlasmaBackground, UsePlasmaReturn } from 'react-plasma-background'

function App() {
  const plasmaBackgroundRef = useRef<UsePlasmaReturn>(null);

  useEffect(() => {
    const [config, controls] = plasmaBackgroundRef.current;
  }, [])

  return (
    <PlasmaBackground
      ref={plasmaBackgroundRef}
      initial={{
        blocksColors: ["#ff0000", "#00ff00", "#0000ff"]
      }}
    >
      ...
    </PlasmaBackground>
  )
}
```

- The library also exposes default configurations, so feel free to use them and override as needed.

```typescript
import { defaultPlasmaConfig, defaultAnimationConfig } from 'react-plasma-background'

function App() {
  return (
    <PlasmaBackground
      initial={{
        ...defaultPlasmaConfig,
        blocksColors: ["#ff0000", "#00ff00", "#0000ff"],
        speed: 20
      }}
      animationConfiguration={{
        ...defaultAnimationConfig,
        block: {
          ...defaultAnimationConfig.block,
          widthRange: [10, 20],
        }
      }}
    >
      ...
    </PlasmaBackground>
  )
}
```

### API Reference

#### Types

##### `PlasmaConfig`

```typescript
type PlasmaConfig = {
  blocksColors: PlasmaColorTuple;
  speed: number;
  opacity: number;
  blur: number;
};
```

- **blocksColors**: `PlasmaColorTuple` - Array of colors for the plasma blocks. Colors available in HEX and RGB formats.
- **speed**: `number` - Speed of the plasma animation.
- **opacity**: `number` - Opacity of the plasma blocks.
- **blur**: `number` - Blur effect applied to the plasma blocks.

##### `InitialPlasmaConfig`

```typescript
type InitialPlasmaConfig = Pick<PlasmaConfig, "blocksColors"> &
  Omit<Partial<PlasmaConfig>, "blocksColors">;
```

- Same as `PlasmaConfig`, except `blocksColors` is required (used in `PlasmaBackground` props).

##### `PlasmaControls`

```typescript
type PlasmaControls = {
  changeColor: (blocksColors: PlasmaColorTuple) => void;
  changeSpeed: (speed: number) => void;
  changeOpacity: (opacity: number) => void;
  changeBlur: (blur: number) => void;
  updateConfig: (config: Partial<PlasmaConfig>) => void;
  shake: (duration: number, colors?: PlasmaColorTuple) => void;
};
```

- **changeColor**: `(blocksColors: PlasmaColorTuple) => void` - Change the colors of the plasma blocks.
- **changeSpeed**: `(speed: number) => void` - Change the speed of the plasma animation.
- **changeOpacity**: `(opacity: number) => void` - Change the opacity of the plasma blocks.
- **changeBlur**: `(blur: number) => void` - Change the blur effect of the plasma blocks.
- **updateConfig**: `(config: Partial<PlasmaConfig>) => void` - Update the plasma configuration.
- **shake**: `(duration: number, colors?: PlasmaColorTuple) => void` - Apply a shake effect to the plasma blocks.

##### `PlasmaColorTuple`

```typescript
type PlasmaColorTuple = [PlasmaColor, PlasmaColor, PlasmaColor];
type HexColor = `#\${string}`;
type RgbColor = `rgb(\${number}, \${number}, \${number})`;

type PlasmaColor = HexColor | RgbColor;
```

- Tuple of three color strings.

##### `UsePlasmaReturn`

```typescript
type UsePlasmaReturn = [PlasmaConfig, PlasmaControls];
```

- **PlasmaConfig**: `PlasmaConfig` - Configuration object for the plasma.
- **PlasmaControls**: `PlasmaControls` - Object containing functions to control the plasma.

##### `PlasmaRange`

```typescript
type PlasmaRange = [number, number];
```

- Simple range type where `PlasmaRange[0]` is the lowest and `PlasmaRange[1]` is the highest value in the range.

##### `PlasmaBackgroundProps`

```typescript
interface PlasmaBackgroundProps {
  initial: InitialPlasmaConfig;
  animationConfiguration?: AnimationConfig;
}
```

- **initial**: `InitialPlasmaConfig` - Initial configuration for the plasma.
- **animationConfiguration**: `AnimationConfiguration` - Configuration for the animation.

##### `AnimationConfig`

```typescript
interface AnimationConfig {
  startPositions: PlasmaGradientPosition[];
  block: {
    widthRange: PlasmaRange;
    heightRange: PlasmaRange;
  };
  keyframesConfig: {
    skewRange: PlasmaRange;
    rotateRange: PlasmaRange;
    translatePercentRange: PlasmaRange;
  };
}
```

Configuration where you can define generation ranges for different options. All metrics will be generated randomly within the provided ranges.

- **startPositions**: `PlasmaGradientPosition[]` - Array of starting positions for the plasma gradient (top, left CSS properties) which will be selected randomly.
- **block**: `{ widthRange: PlasmaRange; heightRange: PlasmaRange; }` - Configuration for the block dimensions.
  - **widthRange**: `PlasmaRange` - Range for the block width.
  - **heightRange**: `PlasmaRange` - Range for the block height.
- **keyframesConfig**: `{ skewRange: PlasmaRange; rotateRange: PlasmaRange; translatePercentRange: PlasmaRange; }` - Configuration for the keyframe animations.
  - **skewRange**: `PlasmaRange` - Range for the skew transformation.
  - **rotateRange**: `PlasmaRange` - Range for the rotation transformation.
  - **translatePercentRange**: `PlasmaRange` - Range for the translation transformation in percentage.

#### Components

##### `PlasmaBackground`

```typescript
const PlasmaBackground: ForwardRefExoticComponent<
  PlasmaBackgroundProps & {
    children?: ReactNode | undefined;
  } & RefAttributes<UsePlasmaReturn>
>;
```

- **exposeConfigRef**: `React.RefObject<PlasmaConfig>` - Ref object to expose the plasma configuration.

#### Hooks

##### `usePlasmaContext`

```typescript
const usePlasmaContext = (): PlasmaControls & { config: PlasmaConfig } => { ... }
```

- **Returns**: `PlasmaControls & { config: PlasmaConfig }` - The current context value for the plasma configuration and controls.

## Feedback

This is my first JS library, so feel free to criticize :D. Also, I've never built something related to graphics, so if you find any issues, please refer to [GitHub](https://github.com/glebAndronchyk/react-plasma-background/issues) and create them there.

Want to discuss the library logic?

- Telegram: @kozenya390
- Discord: hjkdasfbgnc

This project was inspired by an awesome plasma background generator: https://github.com/fracergu/css-plasma-background-generator
