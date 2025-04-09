import React, { useCallback, useEffect, useState } from "react";
import Profileinfo from "./Profileinfo";
import Repos from "./Repos";
import Search from "./Search";
import Sortrepo from "./Sortrepo";
import Spinner from "./Spinner";
import { toast } from "react-hot-toast";

const HomePage = () => {
  const [userProfile, setUserProfile] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [sortType, setSortType] = useState("recent");

  const getUserProfile = useCallback(async (username = "ashu-1403") => {
    setLoading(true);
    try {
      const userRes = await fetch(`https://api.github.com/users/${username}`, {
        headers: {
          Authorization: `token ${import.meta.env.VITE_GITHUB_API_KEY}`,
        },
      });
      if (!userRes.ok) throw new Error("Failed to fetch user profile");
      const userProfile = await userRes.json();
      setUserProfile(userProfile);

      const repoRes = await fetch(userProfile.repos_url);
      if (!repoRes.ok) throw new Error("Failed to fetch repositories");
      const repos = await repoRes.json();
      setRepos(repos);

      // Return both userProfile and repos
      return { userProfile, repos };
    } catch (error) {
      toast.error("There was an error fetching the user profile");
      return { userProfile: null, repos: [] }; // Return default object in case of error
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getUserProfile();
  }, [getUserProfile]);

  const onSearch = async (e, username) => {
    e.preventDefault();
    setLoading(true);
    setRepos([]);
    setUserProfile(null);

    const { userProfile, repos } = await getUserProfile(username); // Destructure returned data

    if (userProfile && repos.length) {
      setUserProfile(userProfile);
      setRepos(repos);
    } else {
      toast.error("No data found for the provided username");
    }

    setLoading(false);
  };

  const onSort = (sortType) => {
    if (sortType === "recent") {
      repos.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
    } else if (sortType === "stars") {
      repos.sort((a, b) => b.stargazers_count - a.stargazers_count);
    } else if (sortType === "forks") {
      repos.sort((a, b) => b.forks_count - a.forks_count);
    }
    setSortType(sortType);
    setRepos([...repos]);
  };

  return (
    <div className="m-4">
      <Search onSearch={onSearch} />
      <Sortrepo onSort={onSort} sortType={sortType} />

      <div className="flex gap-4 flex-col lg:flex-row justify-center items-start">
        <Profileinfo userProfile={userProfile} />
        <Repos repos={repos} />
        {loading && <Spinner />}
      </div>
    </div>
  );
};

export default HomePage;
