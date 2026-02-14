import { useEffect } from "react";
import { Route, Switch, useLocation } from "wouter";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import RoomDetails from "./pages/RoomDetails";
import Gallery from "./pages/Gallery";
import Restaurant from "./pages/Restaurant";
import Attractions from "./pages/Attractions";
import Contact from "./pages/Contact";
import Booking from "./pages/Booking";
import Policies from "./pages/Policies";
import NotFound from "./pages/NotFound";
import { ToastProvider } from "./hooks/useToast.jsx";
import About from "./pages/About.jsx";

function ScrollManager() {
  const [location] = useLocation();

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (!hash) {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      return;
    }

    requestAnimationFrame(() => {
      const target = document.getElementById(hash);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  }, [location]);

  useEffect(() => {
    const onHashChange = () => {
      const hash = window.location.hash.replace("#", "");
      if (!hash) return;
      const target = document.getElementById(hash);
      if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  return null;
}

function App() {
  return (
    <ToastProvider>
      <ScrollManager />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/rooms" component={Rooms} />
        <Route path="/rooms/:slug" component={RoomDetails} />
        <Route path="/gallery" component={Gallery} />
        <Route path="/about" component={About} />
        <Route path="/restaurant" component={Restaurant} />
        <Route path="/attractions" component={Attractions} />
        <Route path="/contact" component={Contact} />
        <Route path="/booking" component={Booking} />
        <Route path="/policies" component={Policies} />
        <Route component={NotFound} />
      </Switch>
    </ToastProvider>
  );
}

export default App;