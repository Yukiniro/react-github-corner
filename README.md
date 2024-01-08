# React Github Corners

SSR friendly React component for _Github Corners_ that can add a _Github Corner_ to your React project.

## Installation

```bash
npm install @yukiniro/react-github-corners
```

## Usage

```jsx
import React from "react";
import GithubCorner from "@yukiniro/react-github-corners";

const App = () => {
  return <GithubCorner href="https://github.com/Yukiniro/react-github-corners" />;
};
```

## Props

| Name      | Type   | Default | Description                        |
| --------- | ------ | ------- | ---------------------------------- |
| href      | string | -       | The link of your Github repository |
| size      | number | 80      | The size of the corner             |
| bgColor   | string | #151513 | The background color of the corner |
| color     | string | #fff    | The color of the octocat           |
| position  | string | right   | The position of the corner         |
| zIndex    | number | 999999  | The z-index of the corner          |
| className | string | -       | The class name of the corner       |
| style     | object | -       | The style of the corner            |
