import { useState } from "react";
import Sidenav from "./components/Sidenav.tsx";
import Photo from "./components/Photo.tsx";
import { ThemeProvider } from "@/components/theme-provider";


export default function App() {
  return (
    
    <div>
      <Sidenav/>
      <Photo/>
    </div>
  );
}
