interface PlaceCardProps {
  name: string;
  rating: number;
  priceRange: '₱' | '₱₱' | '₱₱₱';
  distance: string;
  tags: string[];
}

export default function PlaceCard({ name, rating, priceRange, distance, tags }: PlaceCardProps) {
  return (
    <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow animate-fadeIn">
      <div className="flex justify-between items-start mb-2">
        <h3 className="font-semibold text-gray-900 text-base">{name}</h3>
        <span className="text-indigo-600 font-medium text-sm">{priceRange}</span>
      </div>
      
      <div className="flex items-center gap-3 mb-3">
        <div className="flex items-center gap-1">
          <span className="text-yellow-400">⭐</span>
          <span className="text-sm font-medium text-gray-700">{rating}</span>
        </div>
        <div className="text-sm text-gray-500">• {distance}</div>
      </div>
      
      <div className="flex flex-wrap gap-2 mb-3">
        {tags.map((tag, index) => (
          <span 
            key={index}
            className="px-2 py-1 bg-sky-50 text-sky-700 rounded-full text-xs font-medium"
          >
            {tag}
          </span>
        ))}
      </div>
      
      <button className="w-full py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-sm font-medium transition-colors">
        View on Map 📍
      </button>
    </div>
  );
}
