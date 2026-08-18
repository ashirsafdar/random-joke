
"use client";

import { useEffect, useState } from "react";

const RandomJokes = () => {
  const [joke, setJoke] = useState(null);

  const URL = "https://official-joke-api.appspot.com/random_joke";

  const fetchRandomJokes = async () => {
    try {
      const res = await fetch(URL);
      const data = await res.json();

      setJoke(data);
    } catch (error) {
      console.error("Error fetching joke:", error);
    }
  };

  useEffect(() => {
    fetchRandomJokes();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center px-4">
      
      <div className="w-full max-w-lg rounded-2xl bg-white p-8 shadow-2xl">
        
        {/* Heading */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800">
            😂 Random Joke
          </h1>

          <p className="mt-2 text-gray-500">
            Need a laugh? Get a random joke!
          </p>
        </div>

        {/* Joke */}
        {joke && (
          <div className="mt-8 rounded-xl bg-gray-100 p-6 text-center">
            <h2 className="text-xl font-semibold leading-relaxed text-gray-800">
              {joke.setup}
            </h2>

            <div className="my-4 h-px bg-gray-300" />

            <p className="text-lg font-medium text-purple-600">
              {joke.punchline}
            </p>
          </div>
        )}

        {/* Button */}
        <button
          onClick={fetchRandomJokes}
          className="mt-8 w-full rounded-xl bg-purple-600 px-6 py-3 text-lg font-semibold text-white shadow-lg transition duration-200 hover:bg-purple-700 hover:shadow-xl active:scale-95"
        >
          🎲 Get New Joke
        </button>

      </div>
    </div>
  );
};

export default RandomJokes;