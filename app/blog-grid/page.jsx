"use client";
import SEO from "@/components/seo";
import BreadCrumb from "../breadcrumb/breadcrumb";
import Footer from "../footer/footer";
import HeaderThree from "../header/HeaderThree";
import ScrollToTopButton from "../scroll-to-top/scrollToTop";
import Bloggridcontainer from "./blog-grid-container";

const Bloggrid = () => {
  return (
    <>
      <SEO pageTitle='Blog Grid' />
        <HeaderThree />
        <BreadCrumb title='Blog Grid' innerTitle='Blog Grid' bgImage='/img/banner/page-banner-3.jpg' />
        <Bloggridcontainer />
        <Footer />
        <ScrollToTopButton />
    </>
  );
};

export default Bloggrid;
