"use client"
import Accommodations from "./accommodations/accommodations";
import Banner from "./banner/banner";
import Blog from "./blog/blog";
import Deluxe from "./deluxe/deluxe";
import Feature from "./feature/feature";
import Footer from "./footer/footer";
import HeaderThree from "./header/HeaderThree";
import ScrollToTopButton from "./scroll-to-top/scrollToTop";
import Services from "./services/services";
import Testimonial from "./testimonial/testimonial";
import Videoarea from "./videoarea/videoarea";
import SEO from "@/components/seo";

export default function Home() {
  return (
    <>
      <SEO pageTitle="Home Default" />
        <HeaderThree />
        <Banner />
        <Accommodations />
        {/* <Deluxe /> */}
        <Videoarea />
        <Services />
        {/* <Feature /> */}
        <Testimonial />
        {/* <Blog /> */}
        <Footer />
        <ScrollToTopButton />
    </>
  );
}
