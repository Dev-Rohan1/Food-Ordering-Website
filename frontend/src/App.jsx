import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import { Button } from "./components/ui/button";
import AppLayout from "./layout/AppLayout";

const App = () => {
  return (
    <AppLayout>
      <Navbar />
      <Hero />
    </AppLayout>
  );
};

export default App;
