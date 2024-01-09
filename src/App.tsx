import GithubCorners from "./components";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";

const scope = { GithubCorners };
const code = `
  <GithubCorners 
    href="https://github.com/Yukiniro/react-github-corners" 
    size={80}
    bgColor="#151513"
    color="#fff"
    position="right" // left or right
    zIndex={999999}
  />
`;

function App() {
  return (
    <div className="w-screen h-screen bg-base-100 flex flex-col items-center justify-center relative">
      <h1 className="text-6xl font-bold my-16">React Github Corners</h1>
      <div className="flex">
        <img className="mx-1" alt="npm" src="https://img.shields.io/npm/v/@yukiniro/react-github-corners" />
        <img
          className="mx-1"
          alt="GitHub License"
          src="https://img.shields.io/github/license/yukiniro/react-github-corners"
        />
      </div>
      <span className="opacity-80 italic my-8">
        SSR friendly React component for <i>Github Corners</i> that can add a <i>Github Corner</i> to your React
        project.
      </span>
      <LiveProvider code={code} scope={scope}>
        <LiveEditor />
        <LiveError />
        <LivePreview />
      </LiveProvider>
    </div>
  );
}

export default App;
