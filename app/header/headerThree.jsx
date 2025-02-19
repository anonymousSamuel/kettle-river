import React, { useState } from "react";
import { Blog, Home, Page, Room } from "./Menu";
import Social from "../socials/page";
import Link from "next/link";
import DropDown from "./Down";

const HeaderThree = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <>
      <div className="header__sticky">
        <div className="header__area two">
          <div className="container custom__container">
            <div className="header__area-menubar">
              <div className="header__area-menubar-left">
                <div className="header__area-menubar-left-logo">
                <Link href="/">
                  <img src="/logo.png" alt="logo"  />
                </Link>
                  <div className="responsive-menu"></div>
                </div>
              </div>
              <div className="header__area-menubar-right">
                <div className="header__area-menubar-right-info">
                  <span>
                    <a href="#">
                      <i className="fal fa-map-marker-alt"></i>119 RAILWAY AVE (W) GILLAM MB ROB OLO
                    </a>
                  </span>
                </div>
                <div className="header__area-menubar-right-sidebar">
                  <div
                    className="header__area-menubar-right-sidebar-popup-icon"
                    onClick={() => setSidebarOpen(true)}
                  >
                    <i className="fal fa-bars"></i>
                  </div>
                </div>
                {/* Menu Sidebar Area */}
                <div
                  className={`header__area-menubar-right-sidebar-popup two ${
                    sidebarOpen ? "active" : ""
                  }`}
                >
                  <div
                    className="sidebar-close-btn"
                    onClick={() => setSidebarOpen(false)}
                  >
                    <i className="fal fa-times"></i>
                  </div>
                  <div className="header__area-menubar-right-sidebar-popup-logo">
                    <Link href="/">
                      <img src="/logo-1.png" alt="logo" />
                    </Link>
                  </div>
                  <div className="header__area-menubar-right-sidebar-popup-menu">
                    <ul className="side__menu">
                      <li className="menu-item-has-children">
                        <a href="/">Home</a>
                        <ul className="sub-menu">
                          <Home />
                        </ul>
                      </li>
                      <li className="menu-item-has-children">
                        <a href="/about">About</a>
                        <ul className="sub-menu">
                          <Page />
                        </ul>
                      </li>
                      <li className="menu-item-has-children">
                        <a href="/room-list">Room</a>
                        <DropDown />
                        <ul className="sub-menu">
                          <Room />
                        </ul>
                      </li>
                      <li className="menu-item-has-children">
                        <a href="/blog-grid">Blog</a>
                        <DropDown />
                        <ul className="sub-menu">
                          <Blog />
                        </ul>
                      </li>
                      <li>
                        <Link href="/contact">Contact</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="header__area-menubar-right-sidebar-popup-bottom">
                    <p>
                      Copyright © 2025{" "}
                      KETTLE RIVER INN & SUITES
                    </p>
                    <div className="header__area-menubar-right-sidebar-popup-social">
                      <Social />
                    </div>
                  </div>
                </div>
                <div
                  className={`sidebar-overlay ${sidebarOpen ? "show" : ""}`}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderThree;
