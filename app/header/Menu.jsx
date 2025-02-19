import Link from "next/link";
import { Fragment } from "react";
export const Home = () => (
    <Fragment>
        <Link href="/home-three">Home</Link>
    </Fragment>
);
export const Page = () => (
    <Fragment>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/team">Team</Link></li>
        <li><Link href="/services-details">Services Details</Link></li>
        <li><Link href="/404-error">404 Page</Link></li>
    </Fragment>
);
export const Room = () => (
    <Fragment>
        <li><Link href="/room-list">Room List</Link></li>
        <li><Link href="/room-details">Room Details</Link></li>
    </Fragment>
);
export const Blog = () => (
    <Fragment>
        <li><Link href="/blog-grid">Blog Grid</Link></li>
        <li><Link href="/blog-standard">Blog Standard</Link></li>
        <li><Link href="/blog-details/1">Blog Details</Link></li>
    </Fragment>
);