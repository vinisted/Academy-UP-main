import Head from 'next/head'
import {useEffect} from "react";
import styles from "../styles/HomeNoAuth.module.scss"
import HeaderNoAuth from '@/src/components/homeNoAuth/headerNoAuth';
import PresentationSection from '@/src/components/homeNoAuth/presentationSection';
import CardsSection from '@/src/components/homeNoAuth/cardsSection';
import SlideSection from '@/src/components/homeNoAuth/slideSection';
import Footer from '@/src/components/common/footer';
import courseService, { CourseType } from '@/src/services/courseService';
import { ReactNode } from 'react';
import { GetStaticProps } from 'next';
import AOS from "aos";
import "aos/dist/aos.css";


interface IndexPageProps {
  children?: ReactNode;
  course: CourseType[];
}

const HomeNoAuth  = ({ course }: IndexPageProps) => {

  useEffect(()=>{
    AOS.init();
  },[]);

  return(
    <>
      <Head>
        <title>AcademyUp</title>
        <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
        <meta property="og:title" content="AcademyUp" key="title"/>
        <meta 
          name="description"
          content="Tenha acesso aos melhores conteúdos de programação de uma forma simples e fácil!"
        />
      </Head>
      <main>
          <div className={styles.sectionBackground} data-aos="fade-zoom-in" data-aos-duration="1600" >
            <HeaderNoAuth/>
            <PresentationSection/>
          </div>
          
          <div data-aos="fade-right" data-aos-duration="1200" >
          </div>

          <div data-aos="fade-up" data-aos-duration="1350">
            <SlideSection newestCourses={course} />
          </div>
          
          <Footer/>
      </main>
    </>
  );
};

export const getStaticProps : GetStaticProps = async () => {
  const res = await courseService.getNewestCourses();
  return{
    props:{
      course:res.data,
    },
    revalidate: 3600 * 24,
  };
};

export default HomeNoAuth;
