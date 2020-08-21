# React Native Aspect Ratio Calculator

## Usage

### Import the module

```js
import { Screen } from "react-native-aspect-ratio";
```

### Config

#### Set an width/height
```jsx
  // You can use in your style.
  height: Screen.setDimension(90, "h", {411, 736}), // x, y values of designed component. x: 411, y: 736
  width: Screen.setDimension(80, 'w', {411, 736}),
```

#### Get full width/height

Returns screen width and height.

```jsx
  height: Screen.getDimension().height,
  width: Screen.getDimension().width,
```