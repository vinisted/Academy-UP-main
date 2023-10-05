import NewestCategory from "../src/components/homeAuth/newestCategory";
import Head from "next/head";
import FeaturedSection from "../src/components/homeAuth/featuredSection";
import FavoriteCategory from "../src/components/homeAuth/favoriteCategory";
import FeaturedCategory from "../src/components/homeAuth/featuredCategory";
import ListCategories from "../src/components/homeAuth/listCategories";
import Footer from "../src/components/common/footer";

import { useRouter } from "next/router";
import { useEffect, useState } from "react";
//import PageSpinner from "../src/components/common/spinner";

const HomeAuth = function (){
    const router = useRouter();
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        if(!sessionStorage.getItem("academyup-token")){
            router.push("/login");
        }else{
            setLoading(false);
        }
    },[]);

    // if(loading){
    //     return <PageSpinner/>;
    // }

    return(
        <>
        <Head>
            <title>Academy UP - Home</title>
            <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
        </Head>
        <main>
            <FeaturedSection/>
            <NewestCategory/>
            <FavoriteCategory/>
            <FeaturedCategory/>
            <ListCategories/>
            <Footer/>
        </main>
        </>
    );
};

export default HomeAuth;