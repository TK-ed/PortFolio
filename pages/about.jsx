import { AiFillHtml5 } from "react-icons/ai";
import { FaCss3Alt, FaReact } from "react-icons/fa";
import { IoLogoNodejs } from "react-icons/io";
import {
	SiDocker,
	SiExpress,
	SiFastapi,
	SiGit,
	SiGithubactions,
	SiMongodb,
	SiNextdotjs,
	SiPostgresql,
	SiPostman,
	SiTailwindcss,
	SiTypescript,
	SiVercel,
	SiZedindustries,
} from "react-icons/si";

import IconCloud from "../components/icon-cloud";
import { slugs } from "../components/slugs";

const myResume = "./TK-ed.pdf";

export default function AboutPage() {
	return (
		<div className="about-page">
			<h3 className="!text-base sm:!text-xl md:!text-2xl font-semibold">
				About Me
			</h3>

			<br />

			<ul className="space-y-2 !text-sm sm:!text-base">
				<li>
					👋 I’m Tharun Kumar, a Software Engineer passionate about building
					scalable systems, AI-powered applications, and developer-focused
					tools.
				</li>

				<li>
					🧠 Building <b>Lore</b> — an AI knowledge and memory platform that
					helps teams capture, understand, and leverage their collective
					knowledge.
				</li>

				<li>
					🔍 Building <b>Sherlog</b> — an intelligent observability tool that
					analyzes logs, detects anomalies, and helps engineers investigate
					incidents faster.
				</li>

				<li>
					💻 I work with Python, TypeScript, Next.js, FastAPI, cloud-native
					technologies, and open-source tools while continuously exploring
					better ways to build software.
				</li>
			</ul>

			<br />

			<h2 className="!text-sm sm:!text-lg md:!text-xl font-semibold">
				Relevant skills:
			</h2>

			<div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-8 items-center mt-6">
				{/* Skills */}
				<div>
					<div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
						{/* Frontend */}
						<div>
							<h3 className="!text-sm sm:!text-base font-semibold mb-2">
								Front-end:
							</h3>

							<ul className="space-y-1 !text-sm">
								<li className="flex items-center gap-2">
									<AiFillHtml5 /> HTML
								</li>

								<li className="flex items-center gap-2">
									<FaCss3Alt /> CSS
								</li>

								<li className="flex items-center gap-2">
									<FaReact /> <SiNextdotjs /> React / Next.js
								</li>

								<li className="flex items-center gap-2">
									<SiTypescript /> TypeScript
								</li>

								<li className="flex items-center gap-2">
									<SiTailwindcss /> Tailwind CSS
								</li>
							</ul>
						</div>

						{/* Backend */}
						<div>
							<h3 className="!text-sm sm:!text-base font-semibold mb-2">
								Back-end:
							</h3>

							<ul className="space-y-1 !text-sm">
								<li className="flex items-center gap-2">
									<SiFastapi /> FastAPI
								</li>

								<li className="flex items-center gap-2">
									<IoLogoNodejs /> Node.js
								</li>

								<li className="flex items-center gap-2">
									<SiExpress /> Express
								</li>

								<li className="flex items-center gap-2">
									<SiPostgresql /> PostgreSQL
								</li>

								<li className="flex items-center gap-2">
									<SiMongodb /> MongoDB
								</li>

								<li className="flex items-center gap-2">
									<SiDocker /> Docker
								</li>
							</ul>
						</div>

						{/* Tools */}
						<div>
							<h3 className="!text-sm sm:!text-base font-semibold mb-2">
								Tools:
							</h3>

							<ul className="space-y-1 !text-sm">
								<li className="flex items-center gap-2">
									<SiGit /> Git
								</li>

								<li className="flex items-center gap-2">
									<SiGithubactions /> GitHub Actions
								</li>

								<li className="flex items-center gap-2">
									<SiVercel /> Vercel
								</li>

								<li className="flex items-center gap-2">
									<SiZedindustries /> Zed
								</li>

								<li className="flex items-center gap-2">
									<SiPostman /> Postman
								</li>
							</ul>
						</div>

						{/* AI */}
						<div>
							<h3 className="!text-sm sm:!text-base font-semibold mb-2">AI:</h3>

							<ul className="space-y-1 !text-sm">
								<li>🐍 Python</li>
								<li>🦙 Ollama</li>
								<li>🧠 LangChain</li>
								<li>🔎 Qdrant</li>
								<li>🕸 Neo4j</li>
								<li>⚡ MCP</li>
							</ul>
						</div>
					</div>

					<div className="mt-8">
						<h3 className="!text-sm sm:!text-base font-semibold">
							Resume (
							<a
								href={myResume}
								download="Resume-TK-ed.pdf"
								className="text-blue-500 hover:underline"
							>
								Download
							</a>
							)
						</h3>
					</div>
				</div>

				{/* Cloud */}
				<div className="flex justify-center mt-8 lg:mt-0">
					<div className="w-[250px] sm:w-[320px] lg:w-[420px]">
						<IconCloud iconSlugs={slugs} />
					</div>
				</div>
			</div>
		</div>
	);
}

export async function getStaticProps() {
	return {
		props: {
			title: "About",
		},
	};
}
