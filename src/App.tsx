import GithubCorners from "./components";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";

const scope = { GithubCorners };
const code = `
  <GithubCorners href="https://github.com/Yukiniro/react-github-corners" size={80} />
`;

function App() {
  return (
    <div className="w-screen h-screen bg-base-100 text-center flex flex-col items-center justify-center relative">
      <h1 className="text-6xl font-bold mb-24">React Github Corners</h1>
      <span className="opacity-80 italic mb-4">Edit the code below, preview will be updated automatically</span>
      <LiveProvider code={code} scope={scope}>
        <LiveEditor />
        <LiveError />
        <LivePreview />
      </LiveProvider>
    </div>
  );
}

export default App;
