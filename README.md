# React Github Corners

![npm](https://img.shields.io/npm/v/@yukiniro/react-github-corners)
![GitHub License](https://img.shields.io/github/license/yukiniro/react-github-corners)

SSR friendly React component for _Github Corners_ that can add a _Github Corner_ to your React project.

## Installation

```bash
# npm
npm i @yukiniro/react-github-corners -S

# yarn
yarn add @yukiniro/react-github-corners -S

# pnpm
pnpm add @yukiniro/react-github-corners -S
```

## Usage

```jsx
import React from "react";
import GithubCorners from "@yukiniro/react-github-corners";

const App = () => {
  return <GithubCorners href="https://github.com/Yukiniro/react-github-corners" />;
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
