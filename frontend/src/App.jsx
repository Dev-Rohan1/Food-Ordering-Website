import Category from "./components/Category";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import { Button } from "./components/ui/button";
import AppLayout from "./layout/AppLayout";

const App = () => {
  return (
    <AppLayout>
      <Navbar />
      <Hero />
      <Category />
    </AppLayout>
  );
};

export default App;
