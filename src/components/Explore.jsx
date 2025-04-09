import React, { useState } from "react";
import Spinner from "./Spinner";
import Repos from "./Repos";
import toast from "react-hot-toast";

const Explore = () => {
  const [loading, setLoading] = useState(false);
  const [repos, setRepos] = useState([]);
  const [selectedLanguage, setSelectedLanguage] = useState("");

  const exploreRepos = async (language) => {
    setLoading(true);
    setRepos([]);
    setSelectedLanguage(language);

    try {
      const res = await fetch(
        `https://api.github.com/search/repositories?q=language:${language}&sort=stars&order=desc&per_page=10`,{
         headers: {
            Authorization: `token ${import.meta.env.VITE_GITHUB_API_KEY}`,
         }
        }
      );
      if (!res.ok) throw new Error("Failed to fetch repositories");

      const data = await res.json();
      setRepos(data.items);
	  
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="px-4 overflow-hidden">
      <div className="bg-glass max-w-2xl mx-auto rounded-md p-4">
        <h1 className="text-xl font-bold text-center">Explore Popular Repositories</h1>
        <div className="flex flex-wrap gap-2 my-2 justify-center">
          <img
            src="/javascript.svg"
            alt="JavaScript"
            className="h-11 sm:h-20 cursor-pointer"
            onClick={() => exploreRepos("javascript")}
          />
          <img
            src="/typescript.svg"
            alt="TypeScript"
            className="h-11 sm:h-20 cursor-pointer"
            onClick={() => exploreRepos("typescript")}
          />
          <img
            src="/c++.svg"
            alt="C++"
            className="h-11 sm:h-20 cursor-pointer"
            onClick={() => exploreRepos("c++")}
          />
          <img
            src="/python.svg"
            alt="Python"
            className="h-11 sm:h-20 cursor-pointer"
            onClick={() => exploreRepos("python")}
          />
          <img
            src="/java.svg"
            alt="Java"
            className="h-11 sm:h-20 cursor-pointer"
            onClick={() => exploreRepos("java")}
          />
        </div>

        {repos.length > 0 && (
          <h2 className="text-lg font-semibold text-center my-4">
            <span className="bg-blue-100 text-blue-800 font-medium me-2 px-2.5 py-0.5 rounded-full">
              {selectedLanguage.toUpperCase()}{" "}
            </span>
            Repositories
          </h2>
        )}
        {!loading && repos.length > 0 && <Repos repos={repos} alwaysFullWidth />}
        {loading && <Spinner />}
        {!loading && repos.length === 0 && selectedLanguage && (
          <p className="text-center text-gray-600 mt-4">
            No repositories found for {selectedLanguage.toUpperCase()}.
          </p>
        )}
      </div>
    </div>
  );
};

export default Explore;
