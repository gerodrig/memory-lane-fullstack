
import style from './HeroIntro.module.css';

type HeroIntroProps = {
    image: string;
    title: string;
    text: string;
    button: string;
}

export const HeroIntro = ({image, title, text, button}: HeroIntroProps) => {
    return (
        <section id='Hero'>
            <div className={`${style['image-background']} ${style.hero}`} style={{backgroundImage:  `url(${image})`}}>
                <div className={`${style.container}`}>
                    <h2>{title}</h2>
                    <p>{text}</p>
                    {/* <button className={`${style.button}`}>{button}</button> */}
                </div>
            </div>
        </section>
    );

}
