import React from 'react';
import PropertyView from './components/PropertyView'; // Import the PropertyView component
import bgImage from './assets/landscape.jpg'; // Import the background image.

function App() {
  return (
    <div
      className="min-h-screen bg-cover bg-center relative"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Include the PropertyView component here */}
      <PropertyView />
    </div>
  );
}

export default App;
