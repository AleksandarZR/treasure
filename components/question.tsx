'use client'

import React, { useEffect, useState } from "react";
import styles from "./question.module.css";
import { useRouter } from 'next/router';

interface Props {
    questionText: string,
    answerText: string | undefined,
    answerExpected: string,
    cipher: string
};

export default function Question(props: Props) {
    const [isCipherVisible, setIsCipherVisible] = useState(false);
    const [answer, setAnswer] = useState("");

    useEffect(() => {
        console.log("useEffect called");

        props.answerText = (document.getElementById(props.answerExpected) as HTMLInputElement | null)?.value;
        if (props.answerText) {
            if (props.answerText === props.answerExpected) {
                setIsCipherVisible(true);
            } else {
                setIsCipherVisible(false);
            }
        }
    }, [props.answerText]);

    const isAnswerCorrect = () => {
        /*console.log("called");
        if (isCipherVisible) {
            return true;
        } else {
            return false;
        }*/
        if (answer === props.answerExpected) {
            return true;
        } else {
            return false;
        }
    }

    const returnStyle = () => {
        /*if (isCipherVisible) {
            return styles.cipherVisible;
        } else {
            return styles.cipherInvisible;
        }*/

        const answer = (document.getElementById(props.answerExpected) as HTMLInputElement | null)?.value;
        if (answer) {
            if (answer === props.answerExpected) {
                return styles.cipherVisible;
            } else {
                return styles.cipherInvisible;
            }
        }

        styles.cipherInvisible;
    }

    return (
        <div className={styles.main}>
            <p className={styles.question}>{props.questionText}</p>
            <input className={styles.answer} type="text" id={props.answerExpected} value={answer} onChange={e => setAnswer(e.target.value)}></input>
            <div className={isAnswerCorrect() ? styles.cipherVisible : styles.cipherInvisible}>{props.cipher} </div>
            {/* <div className={returnStyle()}>{props.cipher}</div>  */}
        </div>
    );
}