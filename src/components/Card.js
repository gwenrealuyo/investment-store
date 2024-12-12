function Card({ title, description, icon }) {
  return (
    <div className="bg-white bg-opacity-80 p-8 rounded-lg shadow-lg flex flex-col items-center justify-center text-center">
      <div className="text-6xl">{icon}</div>
      <h2 className="text-2xl font-bold mt-4">{title}</h2>
      <p className="text-gray-700 mt-2">{description}</p>
    </div>
  );
}

export default Card;
