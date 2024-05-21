import Map from "./Map";
import Header from "./Header";
import Loading from "./Loading";
import Error from "./Error";
import { useContext } from "react";
import { DataContext } from "../contexts/DataContext";

function App() {
  const { isLoading, error } = useContext(DataContext);

  return (
    <div className="md:px-6 md:py-8">
      <Header />
      {error && <Error message={error} />}
      {isLoading ? <Loading /> : <Map />}
    </div>
  );
}

export default App;
