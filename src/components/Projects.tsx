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

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await axios.get('https://api.github.com/users/PinchaoRamiro/repos');
        setRepos(response.data);
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
      <h2>Mis Proyectos</h2>
      {loading ? (
        <p>Cargando proyectos...</p>
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
