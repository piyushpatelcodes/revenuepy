"use client"

import { Home } from "lucide-react";
import { CryptoCard } from "../../components/CryptoCard";
import React, { useEffect, useState } from "react";

interface CryptoData {
  symbol: string;
  name: string;
  value: number;
  change: number;
  image: string;
  graphData: [];
  selectedCrypto: CryptoData;
}

function Dashboard() {
  const [cryptoData, setCryptoData] = useState<CryptoData[]>([]);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  // const [selectedCrypto, setSelectedCrypto] = useState<CryptoData | null>(null);

  const handleAddToFavorites = (cryptoName: string) => {
    setFavorites((prev) =>
      prev.includes(cryptoName)
        ? prev.filter((name) => name !== cryptoName) 
        : [...prev, cryptoName] 
    );
  };

  const fetchCryptoData = async () => {
    try {
      const response = await fetch(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=true",
        { method: "GET", headers: { accept: "application/json" } }
      );
      const data = await response.json();
      const formattedData = data?.map((coin: any) => ({
        name: coin.name,
        value: coin.current_price,
        change: coin.price_change_percentage_24h,
        image: coin.image,
        symbol: "$",
        graphData: coin.sparkline_in_7d.price?.map((value: number) => ({
          value,
        })),
      }));

      setCryptoData(formattedData);
    } catch (error) {
      throw new Error("Crypto API error");
    }
  };

  // Fetch favorite cryptos from the server
  const fetchFavorites = async () => {
    try {
      const response = await fetch("/api/favorites");
      const data = await response.json();
      if (data.favoriteCrypto) {
        setFavorites(data.favoriteCrypto); 
      }
    } catch (error) {
      console.error("Failed to fetch favorites", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCryptoData();
    fetchFavorites();
  }, []);

  const mergedCryptoData = cryptoData.filter(crypto =>
    favorites.includes(crypto.name)
  );

  const remainingCryptoData = cryptoData.filter(crypto =>
    !favorites.includes(crypto.name)
  );

  const displayCryptoData = [...mergedCryptoData, ...remainingCryptoData];

  return (
    <div className="mt-16 p-3">
      <div className="flex">
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            window.location.href = "/";
          }}
          className="m-5 group relative flex items-center w-40 gap-2 bg-zinc-900 text-white px-6 py-3 rounded-full shadow-lg cursor-pointer hover:bg-white/20 transition-all duration-300 overflow-hidden"
        >
          <span className="relative z-10 flex items-center gap-2 text-sm font-medium">
            <Home className="w-5 h-5 text-green-400" /> Go to Home
          </span>
        </button>

      </div>

      <div className="grid grid-cols-4 gap-4 mb-6">
        {/* Render favorite cryptocurrencies first */}
        {displayCryptoData.map((crypto) => (
          <CryptoCard
            key={crypto.name}
            name={crypto.name}
            value={crypto.value}
            change={crypto.change}
            period="24h"
            symbol={crypto.symbol}
            image={crypto.image}
            isSelected={false}
            onSelect={() => {}}
            isFavorite={favorites.includes(crypto.name)}
            onAddToFavorites={() => handleAddToFavorites(crypto.name)}
            username={""}
          />
        ))}

        {/* Selected crypto details */}
        <div className="mt-4">
          {/* Selected Crypto Display Logic */}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
