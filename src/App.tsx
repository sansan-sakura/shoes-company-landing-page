import { Buttons } from "./components/Buttons";
import { Detail } from "./components/Detail";
import { Gallery } from "./components/Gallery";
import { Header } from "./components/Header";
import { Slider } from "./components/Slider";

function App() {
  return (
    <>
      <div className="w-full mx-auto">
        <div className="max-w-[900px] mx-auto">
          <Header />
          <div className="md:flex gap-10 md:pt-10">
            <Slider />
            <Gallery />
            <div className="flex flex-col items-center gap-8 w-[400px] mx-auto mb-20">
              <Detail />
              <Buttons />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
