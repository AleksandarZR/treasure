import Image from "next/image";
import styles from "./page.module.css";
import Question from "../components/question";

export default function Home() {
    return (
        <main className={styles.main}>
            <div className={styles.picture}>
                <Image
                    src="/pirate.png"
                    alt="Pirate"
                    className={styles.pictureInner}
                    width={500}
                    height={500}
                />
            </div>

            <div className={styles.center}>
                <Question questionText={"Koje godine se odigrala Kosovska bitka?"} answerExpected={"1389"} cipher={"5"}/>
                <Question questionText={"2 + 5 x 3 - 10 / 2 ="} answerExpected={"12"} cipher={"2"}/>
                <Question questionText={"Koliko krakova ima oktopod?"} answerExpected={"8"} cipher={"7"}/>
                <Question questionText={"Kako se zove prestonica Italije?"} answerExpected={"Rim"} cipher={"3"}/>
            </div>

            <div className={styles.picture}>
                <Image
                    src="/treasure.png"
                    alt="Treasure"
                    className={styles.pictureInner}
                    width={500}
                    height={500}
                />
            </div>
        </main>
    );
}   
