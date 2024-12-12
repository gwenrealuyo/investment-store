import Header from "./components/Header";
import Card from "./components/Card";
import bgImage from "./assets/background.jpg"; // Import the background image.

function App() {
  return (
    <div
      className="min-h-screen bg-cover bg-center relative"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <Header />
      <div className="flex flex-col items-center justify-center h-screen space-y-8">
        <h1 className="text-white text-5xl font-bold">Investment Store</h1>
        <div className="flex space-x-10">
          <Card
            title="Money"
            description="Earn interest income."
            icon="💰" // Replace with an SVG or image for real implementation
          />
          <Card title="Property" description="Buy real estate." icon="🏠" />
        </div>
        <p className="text-white text-lg">Make money or pick up property</p>
      </div>
    </div>
  );
}

export default App;
