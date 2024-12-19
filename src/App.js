import React from "react";
import PropertyView from "./components/PropertyView";
import bgImage from "./assets/landscape.jpg";

function App() {
  return (
    <div
      className="min-h-screen bg-cover bg-center relative"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Include the PropertyView component here */}
      <PropertyView />
    </div>
  );
}

export default App;
