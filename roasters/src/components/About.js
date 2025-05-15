import React from "react";
import hero from "../images/Ink.svg";
export default function About() {
    return (
        <div className="about__wrapper">
            <div className="about__information">
                <p className="about__information-title">о нас</p>
                <div>
                    <p className="about__information-text">
                        <span className="main__word">Кофе Бриз</span> — это мастерская <br />
                        свежей обжарки, где каждое зерно <br />
                        раскрывает свой характер.
                    </p>
                    <p className="about__information-text">
                        Мы отбираем <span className="main__word">лучшие урожаи</span>, <br />
                        чтобы подарить Вам чашку, полную <br />
                        вкуса, аромата и уюта.
                    </p>
                    <p className="about__information-text">
                        Наша <span className="main__word">обжарка</span> — это не <br/>
                        производство, <br />
                        а искусство, вдохновлённое ветром <br/>
                        странствий и любовью к кофе.
                    </p>
                </div>
                <div classNane="about__btn-wrapper">
                    <a href="#" class="about__btn">ХОЧУ ЗАКАЗАТЬ</a>
                </div>
            </div>
            <div className="about__image">
                <img src={hero} alt=""/>
            </div>
        </div>
    )
}