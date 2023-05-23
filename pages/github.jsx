import Image from 'next/image';
import GitHubCalendar from 'react-github-calendar';
import RepoCard from '../components/RepoCard';
import styles from '../styles/GithubPage.module.css';

const GithubPage = ({ repos, user }) => {
  // console.log(repos);
  const theme = {
    level0: '#161B22',
    level1: '#0e4429',
    level2: '#006d32',
    level3: '#26a641',
    level4: '#39d353',
  };

  return (
    <>
      <a href="https://github.com/TK-ed" target="_blank" rel="noopener" className={styles.no_color}>
        <div className={styles.user}>
          <div>
            <Image
              src={user.avatar_url}
              className={styles.avatar}
              alt={user.login}
              width={50}
              height={50}
            />
            <h3 className={styles.username}>{user.login}</h3>
          </div>
          <div>
            <h3>{user.public_repos} repos</h3>
          </div>
          <div>
            <h3>{user.followers} followers</h3>
          </div>
        </div>
      </a>
      <div> <center><h3>My Most Popular Repositories on Github</h3></center></div>
      {/* <div className={styles.container}>
        {repos.map((repo) => (
          <RepoCard key={repo.id} repo={repo} />
        ))}
      </div> */}
      <div><center><h3>My Github Calendar</h3></center></div>
      <br />
      <center>
        <div className={styles.contributions}>
          <GitHubCalendar
            username='TK-ed'
            theme={theme}
            hideColorLegend
          // hideMonthLabels
          />
        </div>
      </center>
    </>
  );
};

export async function getStaticProps() {
  const auth = process.env.NEXT_PUBLIC_GITHUB_API
  const userRes = await fetch(
    `https://api.github.com/users/TK-ed`,
    {
      headers: {
        Authorization: `token ${auth}`,
      },
    }
  );
  const user = await userRes.json();

  const repoRes = await fetch(
    `https://api.github.com/users/TK-ed/repos?per_page=100`,
    {
      headers: {
        Authorization: `token ${auth}`,
      },
    }
  );
  let repos = await repoRes.json();
  // repos = repos
  //   .sort((a, b) => {
  //     if (a.html_url.includes('EESTech') || a.html_url.includes('COSC')) {
  //       return b
  //     }
  //     if (b.html_url.includes('EESTech') || b.html_url.includes('COSC')) {
  //       return a
  //     }

  //     return (b.stargazers_count + b.watchers_count + b.forks_count) - (a.stargazers_count + a.watchers_count + a.forks_count)
  //   })
  //   .slice(0, 8);

  return {
    props: { title: 'GitHub', repos, user },
    revalidate: 10,
  };
}

export default GithubPage;
