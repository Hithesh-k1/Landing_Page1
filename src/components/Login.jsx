import React from "react";
import "./Login.css";

export default function Login() {
  return (
    <>
      <body>
        <form class="form-signin">
          <div class="text-center mb-4">
    <img class="mb-4" src="../assets/brand/bootstrap-solid.svg" alt="" width="72" height="72"/>
    <h1 class="h3 mb-3 font-weight-normal">Floating labels</h1>
    <p>Build form controls with floating labels via the <code>:placeholder-shown</code> pseudo-element. <a href="https://caniuse.com/#feat=css-placeholder-shown">Works in latest Chrome, Safari, Firefox, and IE 10/11 (prefixed).</a></p>
  </div>

          <div class="form-label-group">
            <input
              type="email"
              id="inputEmail"
              class="form-control"
              placeholder="Email address"
              required
              autofocus
            />
            <label for="inputEmail">Email address</label>
          </div>

          <div class="form-label-group">
            <input
              type="password"
              id="inputPassword"
              class="form-control"
              placeholder="Password"
              required
            />
            <label for="inputPassword">Password</label>
          </div>

          <div class="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me" /> Remember me
            </label>
          </div>
          <button class="btn btn-lg btn-primary btn-block" type="submit">
            Sign in
          </button>
          <p class="mt-5 mb-3 text-muted text-center">&copy; 2017-2020</p>
        </form>
      </body>
    </>
  );
}
