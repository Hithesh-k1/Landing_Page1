import React from "react";
import '../layout/LandingPage.css'

export default function Footer_() {
  return (
    <>
      <footer className="container">
        <p className="float-right">
          <a href="#">Back to top</a>
        </p>
        <p>
          &copy; 2017-2020 Company, Inc. &middot; <a href="#">Privacy</a>{" "}
          &middot; <a href="#">Terms</a>
        </p>
      </footer>
    </>
  );
}
