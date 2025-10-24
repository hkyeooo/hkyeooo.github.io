import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Architecture from "./pages/Architecture";
import Music from "./pages/Music";
import Multimedia from "./pages/Multimedia";
import SonicResearch from "./pages/SonicResearch";
import GraphicDesign from "./pages/GraphicDesign";
import Photos from "./pages/Photos";
import Events from "./pages/Events";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/architecture" element={<Architecture />} />
          <Route path="/music" element={<Music />} />
          <Route path="/multimedia" element={<Multimedia />} />
          <Route path="/sonic-research" element={<SonicResearch />} />
          <Route path="/graphic-design" element={<GraphicDesign />} />
          <Route path="/photos" element={<Photos />} />
          <Route path="/events" element={<Events />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
