import Image from 'next/image';
import GitHubCalendar from 'react-github-calendar';
import RepoCard from '../components/RepoCard';
import styles from '../styles/GithubPage.module.css';
import {IoIosCodeWorking} from 'react-icons/io'
import { Octokit } from 'octokit';

const GithubPage = ({ repos, user }) => {
  // console.log(repos);
  const theme = {
    level0: '#161B22',
    level1: '#0e4429',
    level2: '#006d32',
    level3: '#26a641',
    level4: '#39d353',
  };

  const NEXT_PUBLIC_GITHUB_USERNAME = process.env.NEXT_PUBLIC_GITHUB_USERNAME
  const NEXT_PUBLIC_GITHUB_API = process.env.NEXT_PUBLIC_GITHUB_API

  const octokit = new Octokit({
    auth: NEXT_PUBLIC_GITHUB_API
  })

  const fetchGithub = async() => {
    let result = [
      totalRepos = 0,
      totalStars = 0,
      // totalCommits = 0
    ]

    console.log('Fetching Github Stats');

    // let { data } = await octokit.request(
    //   `GET /users/${NEXT_PUBLIC_GITHUB_USERNAME}/repos?per_page=300`
    // );
    let repos = data;
    result.totalRepos += repos.length;






    console.log(repos);
    console.log('Github Stats fetched successfully');
  }

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
          {/* <div>
            <h3>{user.commits} commits</h3>
          </div> */}
        </div>
      </a>
      {/* <div> <center><h1>Still workin' on <IoIosCodeWorking size={28}/></h1></center></div> */}
      <div> <center><h3>My Most Popular Repositories on Github</h3></center></div>
      <div className={styles.container}>
        {repos.map((repo) => (
          <RepoCard key={repo.id} repo={repo} />
        ))}
      </div>
      <br />
      <hr style={{
        width: '80%',
        textAlign: 'left',
        marginLeft: '9%',
      }}/>
      <br/>
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


  const octokit = new Octokit({
    auth: auth
  })

  // let commits = await octokit.request('GET /repos/TK-ed/{repo}/commits', {
  //   owner: 'TK-ed',
  //   repo: 'REPO',
  //   headers: {
  //     'X-GitHub-Api-Version': '2022-11-28'
  //   }
  // })

  let repos = await repoRes.json();
  console.log(repos);
  repos = repos
    .sort((a, b) => {
      if (a.html_url.includes('Login-MERN') || a.html_url.includes('Guess-What')) {
        return b
      }
      if (b.html_url.includes('dE-Vote') || b.html_url.includes('TK-ed')) {
        return a
      }

      return (b.stargazers_count + b.watchers_count + b.forks_count) - (a.stargazers_count + a.watchers_count + a.forks_count)
    })
    .slice(0, 8);

    // const repos = await fetch(`https://api.github.com/${NEXT_PUBLIC_GITHUB_USERNAME}/repos`)
    console.log(repos);
  return {
    props: { title: 'GitHub', repos, user },
    revalidate: 10,
  };
}

export default GithubPage;
