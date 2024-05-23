import styles from "./question-block.module.css";
import Question from "./question";

export default function QuestionBlock() {
    return (
        <div className={styles.main}>
            <Question questionText={"Kada se odigrala Kosovska bitka?"} answerText={""}/>
            <Question questionText={"Kada se odigrala Kosovska bitka?"} answerText={""}/>
            <Question questionText={"Kada se odigrala Kosovska bitka?"} answerText={""}/>
            <Question questionText={"Kada se odigrala Kosovska bitka?"} answerText={""}/>
        </div>
    );
}