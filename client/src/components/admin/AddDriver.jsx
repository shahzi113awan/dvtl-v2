import React from "react";

export default function AddDriver() {
  return (
    <div className="container">
      <div style={{ marginTop: "25%" }}>
        <h6>ADD Driver</h6>
      </div>
      <form
        style={{
          width: "50%",
          margin: "auto",

          padding: "3%",
          // marginTop: "25%",
          borderRadius: "3%",
        }}
      >
        <div class="mb-3 ">
          <input placeholder="Driver Name" type="text" class="form-control" />
        </div>
        <div class="mb-3 ">
          <input placeholder="Driver Email" type="text" class="form-control" />
        </div>
        <div class="mb-3 ">
          <input
            placeholder="Driver Password"
            type="text"
            class="form-control"
          />
        </div>
        <div class="mb-3">
          <input placeholder="Vehicle No" type="text" class="form-control" />
        </div>
        <div class="mb-3">
          <input placeholder="GrossRate" type="text" class="form-control" />
        </div>

        <button type="submit" class="btn btn-primary">
          Save
        </button>
      </form>
    </div>
  );
}
