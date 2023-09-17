/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { Button ,Container } from "reactstrap";
import styles from "./styles.module.scss";

const HeaderNoAuth = function () {
    return(
        <>
            <div className={styles.ctaSection}>
                <p>Se cadastre para ter acesso aos cursos</p>
            </div>
            <Container className={styles.nav}>
                <img 
                    src="/logoAcUp.svg" 
                    alt="logoAcUp" 
                    className={styles.imgLogoNav}
                />
                <div>
                    <Link href="/login">
                        <Button className={styles.navBtn} outline >Entrar</Button>
                    </Link>
                    <Link href="/register">
                        <Button className={styles.navBtn} outline >Quero fazer parte</Button>
                    </Link>
                    
                </div>
            </Container>
            <div className={styles.borda}></div>
        </>
    );
};


export default HeaderNoAuth;