"use client";

import { useState, useEffect } from "react";
import PhotoCard from "@/components/PhotoCard";

const AllCards = () => {
  const [photos, setPhotos] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://a-8-orange-kawp.vercel.app/data.json", {
          cache: "no-store",
        });
        const data = await res.json();
        setPhotos(data);
      } catch (error) {
        console.error("Error fetching photos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

 
  const filteredPhotos = photos.filter((photo) =>
    photo.title?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto p-5">
      <h1 className="text-2xl font-bold mb-5 text-center">All Courses</h1>

      
      <div className="max-w-md mx-auto mb-8">
        <input
          type="text"
          placeholder="Search course name..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full px-4 py-2.5 rounded-full border border-gray-300 dark:border-white/10 bg-white dark:bg-[#0a0a0b] text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-sm text-black dark:text-white"
        />
      </div>

    
      {loading ? (
        <div className="text-center py-10 text-gray-500">Loading...</div>
      ) : (
       
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPhotos.length > 0 ? (
            filteredPhotos.map((photo) => (
              <PhotoCard key={photo.id} photo={photo} />
            ))
          ) : (
            <div className="col-span-full text-center py-10 text-gray-500">
              No courses found for "{searchQuery}"
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default AllCards;