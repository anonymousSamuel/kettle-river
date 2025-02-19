"use client"
import SEO from "@/components/seo";
import BreadCrumb from "../breadcrumb/breadcrumb";
import Footer from "../footer/footer";
import HeaderThree from "../header/HeaderThree";
import ScrollToTopButton from "../scroll-to-top/scrollToTop";
import Roomlistblogs from "./room-list-blogs";

const Roomlist = () => {
  return (
    <>
      <SEO pageTitle='Room List' />
        <HeaderThree />
        <BreadCrumb title='Room List' innerTitle='Room List' bgImage='/img/banner/page-banner-7.jpg' />
        <Roomlistblogs />
        <Footer />
        <ScrollToTopButton />
    </>
  );
};

export default Roomlist;
