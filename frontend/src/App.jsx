import AboutUs from "./components/AboutUs";
import Category from "./components/Category";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import { Button } from "./components/ui/button";
import AppLayout from "./layout/AppLayout";

const App = () => {
  return (
    <AppLayout>
      <Navbar />
      <Hero />
      <Category />
      <AboutUs />
      <Menu />
    </AppLayout>
  );
};

export default App;
