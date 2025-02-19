"use client";
import BreadCrumb from "@/app/breadcrumb/breadcrumb";
import Footer from "../../footer/footer";
import Blogdetailscontainer from "./blog-details-container";
import HeaderThree from "@/app/header/HeaderThree";
import ScrollToTopButton from "@/app/scroll-to-top/scrollToTop";
import SEO from "@/components/seo";

const Blogdetails = () => {
  return (
    <>
      <SEO pageTitle='Blog Details' />
        <HeaderThree />
        <BreadCrumb title='Blog Details' innerTitle='Blog Details' bgImage='/img/banner/page-banner-2.jpg' />
        <Blogdetailscontainer />
        <Footer />
        <ScrollToTopButton />
    </>
  );
};

export default Blogdetails;
