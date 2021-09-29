import React from "react";

export default function Login() {
  return (
    <div className="container">
      <form
        style={{
          width: "50%",
          margin: "auto",
          border: "2px solid black",
          padding: "3%",
          marginTop: "25%",
          borderRadius: "3%",
        }}
      >
        <div class="mb-3 ">
          <label class="form-label">Email address</label>
          <input type="email" class="form-control" />
        </div>
        <div class="mb-3">
          <label class="form-label">Password</label>
          <input type="password" class="form-control" />
        </div>

        <button type="submit" class="btn btn-primary">
          Login As Admin
        </button>
        <button type="submit" class="btn btn-primary">
          Login As Driver
        </button>
      </form>
    </div>
  );
}
