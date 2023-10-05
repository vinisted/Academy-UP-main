/* eslint-disable @next/next/no-img-element */
import { Container } from "reactstrap";
import styles from "./styles.module.scss"

const Footer = function (){
    return(
        <>
        <Container className={styles.footer}>
            <img 
                src="/AcademyUP.png" 
                alt="logoFooter"
                className={styles.footerLogo} 
            />
            <a 
                href="http://acamedyup.com"
                target={"_blank"}
                className={styles.footerLink}
            >
                ACADEMYUP.COM
            </a>
        </Container>
        </>
    );
};

export default Footer;