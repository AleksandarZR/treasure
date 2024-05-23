import Image from "next/image";
import styles from "./page.module.css";
import Question from "../components/question";

export default function Home() {
    return (
        <main className={styles.main}>
            <div className={styles.picture}>
                <Image
                    src="/pirate.png"
                    alt="Vercel Logo"
                    className={styles.vercelLogo}
                    width={500}
                    height={500}
                    priority
                />
            </div>

            <div className={styles.center}>
                <Question questionText={"Koje godine se odigrala Kosovska bitka?"} answerText={""} answerExpected={"1389"} cipher={"5"}/>
                <Question questionText={"2 + 5 x 3 - 10 / 2 ="} answerText={""} answerExpected={"12"} cipher={"2"}/>
                <Question questionText={"Koliko krakova ima oktopod?"} answerText={""} answerExpected={"8"} cipher={"7"}/>
                <Question questionText={"Kako se zove prestonica Italije?"} answerText={""} answerExpected={"Rim"} cipher={"3"}/>
            </div>

            {/* <div className={styles.grid}>
                <a
                    href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                    className={styles.card}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <h2>
                        Docs <span>-&gt;</span>
                    </h2>
                    <p>Find in-depth information about Next.js features and API.</p>
                </a>

                <a
                    href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                    className={styles.card}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <h2>
                        Learn <span>-&gt;</span>
                    </h2>
                    <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
                </a>

                <a
                    href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                    className={styles.card}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <h2>
                        Templates <span>-&gt;</span>
                    </h2>
                    <p>Explore starter templates for Next.js.</p>
                </a>

                <a
                    href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                    className={styles.card}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <h2>
                        Deploy <span>-&gt;</span>
                    </h2>
                    <p>
                        Instantly deploy your Next.js site to a shareable URL with Vercel.
                    </p>
                </a> 
            </div>*/}
        </main>
    );
}
