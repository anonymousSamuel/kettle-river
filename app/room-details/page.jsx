"use client"
import SEO from "@/components/seo";
import BreadCrumb from "../breadcrumb/breadcrumb";
import Footer from "../footer/footer";
import HeaderThree from "../header/HeaderThree";
import ScrollToTopButton from "../scroll-to-top/scrollToTop";
import Roomdetailscontainer from "./room-details-container";

const Roomdetails = () => {
  return (
    <>
      <SEO pageTitle='Room Details' />
        <HeaderThree />
        <BreadCrumb title='Room Details' innerTitle='Room Details' bgImage='/img/banner/page-banner-6.jpg' />
        <Roomdetailscontainer />
        <Footer />
        <ScrollToTopButton />
    </>
  );
};

export default Roomdetails;
