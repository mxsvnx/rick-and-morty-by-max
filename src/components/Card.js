export default function Card({ type, item }) {
  return (
    <div className="bg-transparent text-white rounded-lg overflow-hidden shadow-md flex w-[360px] h-44">
      {type === 'character' && (
        <>
          <img
            src={item.image}
            alt={item.name}
            className="w-44 h-44 object-cover flex-shrink-0"
          />
          <div className="bg-black p-4 flex flex-col justify-between w-full">
            <h2 className="text-lg font-bold leading-tight">{item.name}</h2>

            <p className="flex items-center gap-2 text-sm text-gray-200">
              <span
                className={`w-3 h-3 rounded-full inline-block ${
                  item.status === 'Alive'
                    ? 'bg-green-500'
                    : item.status === 'Dead'
                    ? 'bg-red-500'
                    : 'bg-yellow-400'
                }`}
              ></span>
              <strong>{item.status}</strong> - {item.species}
            </p>

            <p className="text-xs leading-tight">
              <span className="text-gray-400">Last known location:</span><br />
              {item.location?.name || 'Unknown'}
            </p>

            <p className="text-xs leading-tight">
              <span className="text-gray-400">First seen in:</span><br />
              {item.firstEpisodeName || 'Unknown'}
            </p>
          </div>
        </>
      )}

      {type === 'location' && (
        <div className="bg-black p-4 rounded-lg w-full h-full flex flex-col justify-between">
          <h2 className="text-xl font-bold mb-2">{item.name}</h2>
          <p className="text-sm text-gray-400">Тип: {item.type}</p>
          <p className="text-sm text-gray-400">Измерение: {item.dimension}</p>
        </div>
      )}

      {type === 'episode' && (
        <div className="bg-black p-4 rounded-lg w-full h-full flex flex-col justify-between">
          <h2 className="text-xl font-bold mb-2">{item.name}</h2>
          <p className="text-sm text-gray-400">Эпизод: {item.episode}</p>
          <p className="text-sm text-gray-400">Дата выхода: {item.air_date}</p>
        </div>
      )}
    </div>
  );
}
