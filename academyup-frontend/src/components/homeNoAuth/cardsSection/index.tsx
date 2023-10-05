import {Container } from "reactstrap";
import styles from "./styles.module.scss";

const CardsSection = function (){
    return(
        <>
            <p className={styles.sectionTitle}>O QUE VOCÊ VAI ACESSAR</p>
            <Container className="d-flex flex-wrap justify-content-center gap-4 pb-5">
                <div className={styles.card1}>
                    <p className={styles.cardTitle}>FRONT-END</p>
                    <p className={styles.cardDescription}>
                       Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque eveniet tenetur sapiente rerum aut culpa inventore veniam libero accusamus ipsa explicabo suscipit facere nobis, consequatur itaque nostrum deleniti illum quis.
                    </p>
                </div>
                <div className={styles.card2}>
                    <p className={styles.cardTitle}>BACK-END</p>
                    <p className={styles.cardDescription}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam eos in vel modi dignissimos, reiciendis quidem cumque earum pariatur dolor quas suscipit, harum nesciunt veritatis? Consectetur omnis labore assumenda eius!
                    </p>
                </div>
                <div className={styles.card3}>
                    <p className={styles.cardTitle}>MOBILE</p>
                    <p className={styles.cardDescription}>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque iste adipisci id ea mollitia dolorem expedita in, deserunt veniam magnam maiores aperiam porro et? Tempore repellat libero accusamus provident dolor.
                    </p>
                </div>
                <div className={styles.card4}>
                    <p className={styles.cardTitle}>GIT E GITHUB</p>
                    <p className={styles.cardDescription}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi neque non, magni, adipisci minima harum dignissimos ab perferendis expedita reprehenderit optio, sit nobis laudantium voluptates quibusdam? Excepturi ad cum nesciunt!
                    </p>
                </div>
                <div className={styles.card5}>
                    <p className={styles.cardTitle}>PROJETOS</p>
                    <p className={styles.cardDescription}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti ad ipsa nam ea, quisquam quidem distinctio ipsam veniam veritatis perspiciatis enim. Provident placeat adipisci consectetur quisquam temporibus cumque vero. Commodi?
                    </p>
                </div>
                <div className={styles.card6}>
                    <p className={styles.cardTitle}>CARREIRA</p>
                    <p className={styles.cardDescription}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio eligendi a cum. Velit itaque est iure expedita? Sunt libero praesentium inventore quae! Necessitatibus ab esse excepturi animi facilis iusto. Ipsa?
                    </p>
                </div>
            </Container>
        </>
    );
}

export default CardsSection;