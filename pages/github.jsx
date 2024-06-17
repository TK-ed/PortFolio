import Image from "next/image";
import GitHubCalendar from "react-github-calendar";
import RepoCard from "../components/RepoCard";
import styles from "../styles/GithubPage.module.css";
import { Octokit } from "octokit";
import { request as req } from "@octokit/request";

const GithubPage = ({ user, totalCommits, favRepos }) => {
  const theme = {
    level0: "#161B22",
    level1: "#0e4429",
    level2: "#006d32",
    level3: "#26a641",
    level4: "#39d353",
  };
  const GITHUB_USERNAME = process.env.GITHUB_USERNAME;
  const GITHUB_API = process.env.GITHUB_API;

  const octokit = new Octokit({
    auth: GITHUB_API,
  });

  const fetchGithub = async () => {
    let result = [(totalRepos = 0), (totalStars = 0), (totalCommits = 0)];

    console.log("Fetching Github Stats");

    let { data } = await octokit.request(
      `GET /users/${GITHUB_USERNAME}/repos?per_page=300`
    );
    let repos = data;
    result.totalRepos += repos.length;

    console.log("Github Stats fetched successfully");
  };

  return (
    <>
      <a
        href="https://github.com/TK-ed"
        target="_blank"
        rel="noopener"
        className={styles.no_color}
      >
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
            {user.public_repos ? (
              <h3>{user.public_repos + 16} repos</h3>
            ) : (
              <h3>...</h3>
            )}
          </div>
          <div>
            {totalCommits ? <h3>{totalCommits} commits</h3> : <h3>...</h3>}
          </div>
        </div>
      </a>
      <div>
        {" "}
        <center>
          <h3>My Most Popular Repositories on Github</h3>
        </center>
      </div>
      <div className={styles.container}>
        {favRepos.map((repo) => (
          <RepoCard key={repo.id} repo={repo} />
        ))}
      </div>
      <br />
      <hr
        style={{
          width: "80%",
          textAlign: "left",
          marginLeft: "9%",
        }}
      />
      <br />
      <div>
        <center>
          <h3>My Github Calendar</h3>
        </center>
      </div>
      <br />
      <center>
        <div className={styles.contributions}>
          <GitHubCalendar
            username="TK-ed"
            theme={theme}
            hideColorLegend
            hideMonthLabels
          />
        </div>
      </center>
    </>
  );
};
export async function getStaticProps() {
  const auth = process.env.GITHUB_API; // Ensure this is only used server-side if sensitive
  const octokit = new Octokit({ auth });

  const userRes = await fetch(`https://api.github.com/users/TK-ed`, {
    headers: { Authorization: `token ${auth}` },
  });
  const user = await userRes.json();

  const reposRes = await fetch(
    `https://api.github.com/users/TK-ed/repos?per_page=1000`,
    { headers: { Authorization: `token ${auth}` } }
  );
  let repos = await reposRes.json();

  let totalCommits = 0;
  for (const repo of repos) {
    const commitsRes = await octokit.request(
      `GET /repos/TK-ed/${repo.name}/commits`,
      {
        owner: "TK-ed",
        repo: repo.name,
      }
    );
    totalCommits += commitsRes.data.length; // Counting each commit
  }

  // Make a request to GitHub GraphQL API using the imported queryz
  const GetPinnedRepos = `
  query GetPinnedRepos {
    user(login: "TK-ed") {
      pinnedItems(first: 6, types: REPOSITORY) {
        nodes {
          ... on Repository {
            name
            description
            url
            stargazerCount
            forkCount
            homepageUrl
          }
        }
      }
    }
  }
`;

  const pinnedResponse = await req("POST /graphql", {
    headers: {
      authorization: `token ${auth}`,
      "content-type": "application/json",
    },
    query: GetPinnedRepos, // Use the imported query
  });

  // Extract the pinned repositories from the response
  const pinnedRepos = pinnedResponse.data.data.user.pinnedItems.nodes;

  const reps = [
    "fronvo-server",
    "awesome-interview-questions",
    "CheatSheets",
    "archcraft",
  ];
  const filteredRepos = repos.filter((repo) => reps.includes(repo.name));

  return {
    props: {
      user,
      totalCommits,
      favRepos: [...pinnedRepos, ...filteredRepos],
      title: "GitHub",
    },
    revalidate: 10,
  };
}

export default GithubPage;
