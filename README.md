# React Native Aspect Ratio Calculator
![aspect-ratio](https://user-images.githubusercontent.com/10114716/90861313-39a4fb80-e394-11ea-9b1c-022092512150.png)

[![GitHub issues](https://img.shields.io/github/issues/buraksakalli/react-native-aspect-ratio)](https://github.com/buraksakalli/react-native-aspect-ratio/issues)
[![npm (scoped)](https://img.shields.io/npm/v/react-native-aspect-ratio.svg)](https://www.npmjs.com/package/react-native-aspect-ratio)

## Installation

```bash
npm i react-native-aspect-ratio
```

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
