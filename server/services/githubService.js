import axios from 'axios';

export const fetchGithubRepos = async (username) => {
  try {
    const response = await axios.get(
      `https://api.github.com/users/${username}/repos`,
      {
        params: {
          sort: 'updated',
          per_page: 10,
        },
      }
    );

    return response.data.map(repo => ({
      title: repo.name,
      description: repo.description || '',
      githubUrl: repo.html_url,
      technologies: repo.language ? [repo.language] : [],
      githubStars: repo.stargazers_count,
      githubForks: repo.forks_count,
      isFromGithub: true,
      startDate: new Date(repo.created_at),
      endDate: new Date(repo.updated_at),
    }));
  } catch (error) {
    console.error('GitHub Service Error:', error);
    throw new Error('Failed to fetch GitHub repositories');
  }
};

export const fetchGithubUser = async (username) => {
  try {
    const response = await axios.get(`https://api.github.com/users/${username}`);
    
    return {
      githubUsername: response.data.login,
      profileImage: response.data.avatar_url,
      bio: response.data.bio,
      location: response.data.location,
      website: response.data.blog,
      github: response.data.html_url,
    };
  } catch (error) {
    console.error('GitHub Service Error:', error);
    throw new Error('Failed to fetch GitHub user data');
  }
};