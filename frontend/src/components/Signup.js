import React from "react";

const signup = () => {
  return (
    <>
      <form action="/login" method="POST">
        <div class="container">
          <h1>Sign Up</h1>
          <label for="firstname">Firstname:</label>
          <input type="text" id="firstname" required />

          <label for="lastname">Lastname:</label>
          <input type="text" id="lastname" required />

          <label for="email">Email:</label>
          <input type="text" id="email" required />

          <label for="password">Password:</label>
          <input type="password" id="password" required />

          <label for="confirmpassword">Confirm Password:</label>
          <input type="password" id="password" required />

          <label for="registrationno">Registration No:</label>
          <input type="text" id="registrationno" required />

          <button type="submit">Sign up</button>
        </div>
      </form>
    </>
  );
};

export default signup;
