'use client';

import ChatBubble from './ChatBubble';
import PlaceCard from './PlaceCard';

const mockConversation = [
  {
    id: 1,
    message: "Gusto ko ng ramen date night near QC, budget 500 each.",
    isUser: true,
    timestamp: "2:30 PM"
  },
  {
    id: 2,
    message: "Sige, eto mga spots na bagay sa vibe nyo. 😉",
    isUser: false,
    timestamp: "2:31 PM"
  }
];

const mockPlaces = [
  {
    id: 1,
    name: "Ramen Kuroda",
    rating: 4.5,
    priceRange: '₱₱' as const,
    distance: "2.3 km away",
    tags: ["Ramen", "Japanese", "Date-friendly"]
  },
  {
    id: 2,
    name: "Mendokoro Ramenba",
    rating: 4.7,
    priceRange: '₱₱' as const,
    distance: "3.1 km away",
    tags: ["Ramen", "Cozy", "Authentic"]
  },
  {
    id: 3,
    name: "Yabu House of Katsu",
    rating: 4.6,
    priceRange: '₱₱₱' as const,
    distance: "1.8 km away",
    tags: ["Japanese", "Upscale", "Romantic"]
  }
];

export default function ChatUI() {
  return (
    <div className="flex-1 overflow-y-auto pb-32">
      <div className="max-w-4xl mx-auto px-4 py-6">
        {/* Chat Messages */}
        <div className="space-y-1 mb-6">
          {mockConversation.map((msg) => (
            <ChatBubble
              key={msg.id}
              message={msg.message}
              isUser={msg.isUser}
              timestamp={msg.timestamp}
            />
          ))}
        </div>

        {/* Place Cards */}
        <div className="space-y-4">
          {mockPlaces.map((place) => (
            <PlaceCard
              key={place.id}
              name={place.name}
              rating={place.rating}
              priceRange={place.priceRange}
              distance={place.distance}
              tags={place.tags}
            />
          ))}
        </div>

        {/* Map Placeholder */}
        <div className="mt-6 bg-gray-200 rounded-2xl h-64 flex items-center justify-center border-2 border-gray-300">
          <div className="text-center">
            <div className="text-4xl mb-2">🗺️</div>
            <p className="text-gray-600 font-medium">Map View</p>
            <p className="text-sm text-gray-500 mt-1">Coming soon</p>
          </div>
        </div>
      </div>
    </div>
  );
}
