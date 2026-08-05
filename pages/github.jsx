import Image from "next/image";
import { Octokit } from "octokit";
import GitHubCalendar from "react-github-calendar";
import RepoCard from "../components/RepoCard";
import styles from "../styles/GithubPage.module.css";

const REPOSITORIES = [
	"lore",
	"sherlog",
	"streamforge",
	"portfolio",
	"portfolio-framer-motion",
	"de-Vote",
	"archcraft",
	"bun",
];

const GithubPage = ({ user, favRepos }) => {
	const theme = {
		level0: "#161B22",
		level1: "#0e4429",
		level2: "#006d32",
		level3: "#26a641",
		level4: "#39d353",
	};

	return (
		<>
			<a
				href="https://github.com/TK-ed"
				target="_blank"
				rel="noopener noreferrer"
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
						<h3>{user.public_repos} repos</h3>
					</div>
				</div>
			</a>

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

			<div className="my-2">
				<center>
					<h3>My Github Contributions</h3>
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
						blockSize={10}
						blockMargin={3}
						fontSize={12}
					/>
				</div>
			</center>
		</>
	);
};

export async function getStaticProps() {
	const username = "TK-ed";
	const auth = process.env.GITHUB_API;

	const octokit = new Octokit({
		auth,
	});

	const userResponse = await octokit.request("GET /users/{username}", {
		username,
	});

	const repos = [];

	for (const repoName of REPOSITORIES) {
		try {
			const response = await octokit.request("GET /repos/{owner}/{repo}", {
				owner: username,
				repo: repoName,
			});

			repos.push(response.data);
		} catch (error) {
			console.error(`Failed fetching ${repoName}`, error.message);
		}
	}

	return {
		props: {
			user: userResponse.data,
			favRepos: repos,
			title: "GitHub",
		},
		revalidate: 3600,
	};
}

export default GithubPage;
