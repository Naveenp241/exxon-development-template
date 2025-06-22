const ResultCard = ({ result }: { result: LocationProfile }) => {
  const { name, address, mainPhone, distance } = result.rawData;

  return (
    <div className="p-4 border rounded shadow-sm bg-white mb-3 hover:shadow-lg transition">
      <div className="flex justify-between items-start">
        <div>
          <h2 className="font-bold text-lg text-gray-800">{name}</h2>
          <p className="text-sm text-gray-600">{address.line1}, {address.city}</p>
          {mainPhone && <p className="text-sm text-gray-500">{mainPhone}</p>}
        </div>
        <span className="text-sm text-blue-600 font-medium">{distance?.toFixed(1)} mi</span>
      </div>
      <a
        href={`https://maps.google.com/?q=${encodeURIComponent(`${address.line1}, ${address.city}`)}`}
        className="text-blue-500 text-sm inline-block mt-2"
        target="_blank" rel="noopener noreferrer"
      >
        🚗 Get Directions
      </a>
    </div>
  );
};
