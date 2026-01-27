// placeholder for github status activity
'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import {
  CodeBracketIcon,
  StarIcon,
  ArrowTrendingUpIcon,
  UserGroupIcon,
  FolderIcon,
  FireIcon
} from '@heroicons/react/24/outline';

interface GitHubStats {
  publicRepos: number;
  followers: number;
  following: number;
  totalStars: number;
  contributions: number;
  streak: number;
}

interface Repository {
  name: string;
  description: string;
  stars: number;
  forks: number;
  language: string;
  url: string;
}

export default function GitHubStats() {
  const [stats, setStats] = useState<GitHubStats>({
    publicRepos: 42,
    followers: 250,
    following: 100,
    totalStars: 520,
    contributions: 1250,
    streak: 180,
  });

  const [topRepos, setTopRepos] = useState<Repository[]>([
    {
      name: 'Lorem Ipsum dolor sit amet',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      stars: 150,
      forks: 45,
      language: 'Python',
      url: 'https://github.com/xiaoggx',
    },
    {
      name: 'Lorem Ipsum dolor sit amet',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      stars: 120,
      forks: 30,
      language: 'Python',
      url: 'https://github.com/xiaoggx',
    },
    {
      name: 'Lorem Ipsum dolor sit amet',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      stars: 95,
      forks: 25,
      language: 'Python',
      url: 'https://github.com/xiaoggx',
    },
  ]);

  const [loading, setLoading] = useState(false);

  // Uncomment and modify when ready to fetch real GitHub data
  // useEffect(() => {
  //   const fetchGitHubData = async () => {
  //     setLoading(true);
  //     try {
  //       const username = 'xiaoggx';
  //       
  //       // Fetch user stats
  //       const userResponse = await fetch(`https://api.github.com/users/${username}`);
  //       const userData = await userResponse.json();
  //       
  //       // Fetch repositories
  //       const reposResponse = await fetch(`https://api.github.com/users/${username}/repos?sort=stars&per_page=100`);
  //       const reposData = await reposResponse.json();
  //       
  //       // Calculate total stars
  //       const totalStars = reposData.reduce((acc: number, repo: any) => acc + repo.stargazers_count, 0);
  //       
  //       // Get top repositories
  //       const topRepos = reposData
  //         .sort((a: any, b: any) => b.stargazers_count - a.stargazers_count)
  //         .slice(0, 3)
  //         .map((repo: any) => ({
  //           name: repo.name,
  //           description: repo.description || 'No description',
  //           stars: repo.stargazers_count,
  //           forks: repo.forks_count,
  //           language: repo.language || 'Unknown',
  //           url: repo.html_url,
  //         }));
  //       
  //       setStats({
  //         publicRepos: userData.public_repos,
  //         followers: userData.followers,
  //         following: userData.following,
  //         totalStars,
  //         contributions: 1250,
  //         streak: 180,
  //       });
  //       
  //       setTopRepos(topRepos);
  //     } catch (error) {
  //       console.error('Error fetching GitHub data:', error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  //   
  //   fetchGitHubData();
  // }, []);

  const statCards = [
    { icon: FolderIcon, label: 'Repositories', value: stats.publicRepos, color: 'from-lime-500 to-emerald-500' },
    { icon: UserGroupIcon, label: 'Followers', value: stats.followers, color: 'from-blue-500 to-cyan-500' },
    { icon: StarIcon, label: 'Total Stars', value: stats.totalStars, color: 'from-yellow-500 to-orange-500' },
    { icon: ArrowTrendingUpIcon, label: 'Contributions', value: stats.contributions, color: 'from-purple-500 to-pink-500' },
    { icon: FireIcon, label: 'Day Streak', value: stats.streak, color: 'from-red-500 to-orange-500' },
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 bg-gray-100 dark:bg-gray-800 rounded-full">
            <CodeBracketIcon className="w-5 h-5 text-gray-700 dark:text-gray-300" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Open Source Contributions
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            GitHub Activity
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            My open source contributions and popular repositories
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
          {statCards.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-shadow"
            >
              <div className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${stat.color} mb-3`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <p className="text-3xl font-bold text-gray-900 dark:text-white mb-1">
                {stat.value.toLocaleString()}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Contribution Graph Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg border border-gray-100 dark:border-gray-700 mb-12"
        >
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
            Contribution Activity
          </h3>
          <div className="flex items-end justify-between h-40 gap-1">
            {[...Array(52)].map((_, i) => (
              <div
                key={i}
                className={`flex-1 rounded-t transition-all hover:opacity-80 cursor-pointer ${Math.random() > 0.3
                  ? 'bg-gradient-to-t from-lime-500 to-emerald-500'
                  : 'bg-gray-200 dark:bg-gray-700'
                  }`}
                style={{ height: `${Math.random() * 100}%` }}
                title={`Week ${i + 1}`}
              />
            ))}
          </div>
          <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-4">
            <span>Jan</span>
            <span>Mar</span>
            <span>May</span>
            <span>Jul</span>
            <span>Sep</span>
            <span>Nov</span>
          </div>
        </motion.div>

        {/* Top Repositories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Popular Repositories
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {topRepos.map((repo, index) => (
              <motion.a
                key={repo.name}
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all"
              >
                <div className="flex items-start justify-between mb-3">
                  <FolderIcon className="w-6 h-6 text-lime-600 dark:text-lime-400" />
                  <span className="px-2 py-1 text-xs font-medium bg-lime-100 dark:bg-lime-900/30 text-lime-700 dark:text-lime-300 rounded-full">
                    {repo.language}
                  </span>
                </div>
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  {repo.name}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                  {repo.description}
                </p>
                <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                  <span className="flex items-center gap-1">
                    <StarIcon className="w-4 h-4" />
                    {repo.stars}
                  </span>
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M7.707 3.293a1 1 0 010 1.414L5.414 7H11a7 7 0 017 7v2a1 1 0 11-2 0v-2a5 5 0 00-5-5H5.414l2.293 2.293a1 1 0 11-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {repo.forks}
                  </span>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* CTA to GitHub Profile */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 1 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/xiaoggx"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-xl font-semibold hover:shadow-xl transition-all"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.268 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.027 2.747-1.027.546 1.377.202 2.398.1 2.651.64.699 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
            View Full GitHub Profile
          </a>
        </motion.div>
      </div>
    </section>
  );
}
