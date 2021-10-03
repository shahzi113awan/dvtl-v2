import React from "react";

export default function AddDriver() {
  function callBack(callBack3, clalBack2, callBack4) {
    console.log("Call Back hell");
    callBack3();

    clalBack2();

    callBack4();
  }
  callBack(callBack3, clalBack2, callBack4);
  function clalBack2() {
    console.log("callBack 2");
  }
  function callBack3() {
    console.log("callBack 3");
  }
  function callBack4() {
    console.log("callBack 4");
  }

  // Promises
  const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("foo");
    }, 300);
  });

  myPromise
    .then(handleResolvedA, handleRejectedA)
    .then(handleResolvedB, handleRejectedB)
    .then(handleResolvedC, handleRejectedC);

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
        <div className="mb-3 ">
          <input
            placeholder="Driver Name"
            type="text"
            className="form-control"
          />
        </div>
        <div className="mb-3 ">
          <input
            placeholder="Driver Email"
            type="text"
            className="form-control"
          />
        </div>
        <div className="mb-3 ">
          <input
            placeholder="Driver Password"
            type="text"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <input
            placeholder="Vehicle No"
            type="text"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <input placeholder="GrossRate" type="text" className="form-control" />
        </div>

        <button type="submit" className="btn btn-primary">
          Save
        </button>
      </form>
    </div>
  );
}
