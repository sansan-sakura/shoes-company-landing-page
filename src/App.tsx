import { Button } from "./components/Button";
import { Detail } from "./components/Detail";
import { Header } from "./components/Header";
import { Slider } from "./components/Slider";

function App() {
  return (
    <>
      <div>
        <Header />
        <Slider />
        <div className="flex flex-col items-center gap-8">
          <Detail />
          <Button />
        </div>
      </div>
    </>
  );
}

export default App;
