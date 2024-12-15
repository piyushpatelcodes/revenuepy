"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Star, StarOffIcon } from "lucide-react"; 
import { addFavoriteCrypto } from "../actions/actions";

interface CryptoCardProps {
  name: string;
  value: number;
  change: number;
  period: string;
  symbol: string;
  username: string;
  image: string;
  isSelected: boolean;
  isFavorite: boolean; 
  onSelect: () => void;
  onAddToFavorites: () => void; 
}

export function CryptoCard({
  name,
  value,
  change,
  period,
  symbol,
  image,
  username,
  isSelected,
  isFavorite, 
  onSelect,
  onAddToFavorites, 
}: CryptoCardProps) {
  const [favorite, setFavorite] = useState(isFavorite); 
  const [loading, setLoading] = useState(false); 

  const handleAddToFavorites = async () => {
    setLoading(true); 
    try {
      const result = await addFavoriteCrypto(username, name); 
      if (result.success) {
        setFavorite(true);
        console.log(result.success);
        window.location.reload();
      } else if (result.info) {
        console.log(result.info);
      } else {
        console.error(result.error);
      }
    } catch (error) {
      console.error("Error adding to favorites:", error);
    } finally {
      setLoading(false); 
    }
  };

  return (
    <div
      className={`relative p-4 rounded-xl shadow-md cursor-pointer transition-all duration-300 ${
        isSelected
          ? "bg-emerald-500/30 border-4 border-emerald-500"
          : "bg-zinc-900"
      }`}
      onClick={onSelect}
    >
      <button
        className="absolute top-2 right-2 text-2xl"
        onClick={(e) => {
          e.stopPropagation(); 
          if (!favorite) handleAddToFavorites(); 
        }}
        disabled={loading}
      >
        {isFavorite ? (
        "🌟"
        ) : (
          <StarOffIcon className="text-gray-500" /> 
        )}
      </button>

      <div className="flex items-center gap-2 mb-4">
        <Image
          src={image}
          alt={`${name} logo`}
          width={24}
          height={24}
          className="rounded-full"
        />
        <span className="font-semibold text-white">{name}</span>
      </div>

      <div className="text-2xl font-semibold text-white mb-2">
        {symbol} {value?.toFixed(2)}
      </div>
      <div className="flex items-center gap-1 text-sm">
        <span className={change >= 0 ? "text-green-400" : "text-red-500"}>
          {change >= 0 ? `+${change?.toFixed(2)}%` : `${change?.toFixed(2)}%`}
        </span>
        <span className="text-gray-400">{period}</span>
      </div>
    </div>
  );
}
