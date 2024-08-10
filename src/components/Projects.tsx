import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Repo {
  id: number;
  name: string;
  html_url: string;
  description: string;
}

const Projects: React.FC = () => {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);
  const excludedRepos = ["PinchaoRamiro", "proyecto1", "Proyecto3","Proyecto4","Proyecto5", "proyecto6"
    ,"Portafolio_Ramiro_Pinchao"
  ];

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await axios.get('https://api.github.com/users/PinchaoRamiro/repos');
        const filteredRepos = response.data.filter((repo: Repo) => !excludedRepos.includes(repo.name));
        setRepos(filteredRepos);
      } catch (error) {
        console.error('Error fetching the repositories', error);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  return (
    <section className="projects" id='projects'>
      <h2>My Projects</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul className='ul-projects' >
          {repos.map(repo => (
            <li key={repo.id}>
              <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                {repo.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default Projects;
