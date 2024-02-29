import { FC } from "react";
import Header from "components/Header";
interface IApp {}

const App: FC<IApp> = () => {
  return (
    <div>
      this is App module
      <br />
      <Header />
    </div>
  );
};

export default App;
