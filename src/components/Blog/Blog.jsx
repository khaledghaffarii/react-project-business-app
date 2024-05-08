import React from "react";
import "./Blog.css";
import BlogImage from "../../assets/blog/TextToImage_14_20240508.jpeg";
import { detectMobileOrTablet } from "../../utils";

export default function Blog() {
  var deviceInfo = detectMobileOrTablet();
  return (
    <>
      <section id="blog">
        <div className="container">
          <div className="blog_wrapper">
            <div className="blog_col">
              <h3>WE HELP BUSINESSES LAUNCH, GROW AND SUCCEED</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. At,
                corrupti odit? At iure facere, porro repellat officia quas,
                dolores magnam assumenda soluta odit harum voluptate inventore
                ipsa maiores fugiat accusamus eos nulla. Iure voluptatibus
                explicabo officia.
              </p>
              <div className="btn_wrapper">
                <a className="btn" href="/">
                  Get Started
                </a>
              </div>
            </div>
            <div className="blog_col">
              <div className="blog_image">
                <img
                  style={{ height: 400, width: 400 }}
                  src={BlogImage}
                  alt="Blog"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
