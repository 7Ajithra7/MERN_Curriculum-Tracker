import React from "react";

const AssignedReqForm = () => {
  return (
    <>
      <div className="user">
        <img src="" alt="" />
      </div>

      <div className="details">
        <div className="recentOrders">
          <div className="cardHeader">
            {/* requirement form */}
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
              <center>
                <h4 id="progresscurriculum">Progressing Curriculum</h4>
              </center>
            </div>
          </div>
          <br />
          <div className="row g-3">
            <div className="col col-4 col-sm-4 col-md-4 col-lg-4 col-xxl-4 col-xl-4 col-lg-4">
              <center className="Curriculum">MERN </center>
            </div>
            <div className="col col-4 col-sm-4 col-md-4 col-lg-4 col-xxl-4 col-xl-4 col-lg-4">
              <center className="Curriculum"> MEAN</center>
            </div>
            <div className="col col-4 col-sm-4 col-md-4 col-lg-4 col-xxl-4 col-xl-4 col-lg-4">
              <center className="Curriculum">NODE</center>
            </div>
          </div>
          <br />
          <br />
          <hr />
          <center>
            <button type="button" className="btn btn-secondary btn-lg ms-2">
              Accept/Reject
            </button>
          </center>
          <center>
            {" "}
            <h3>MERN</h3>
          </center>
          <br />
          <br />

          {/* Comment*/}

          <div className="row g-3">
            <div className="col 6 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
              <label htmlFor="" className="form-label-2">
                Comment
              </label>
            </div>
            {/*  Text area*/}
            <div className="col 6 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
              <input
                type="textarea"
                className="form-control form-control-lg"
                id="commentinput"
                placeholder="Text Area"
              />
            </div>

            {/* upload */}

            <div className="col 6 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
              <label htmlFor="" className="form-label-2">
                upload a Curriculum
              </label>
            </div>

            {/*  Upload */}
            <div className="col 6 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
              <input
                type="file"
                className="form-control form-control-lg"
                id="uploadfileinput"
                placeholder="Text Area"
              />
            </div>

            {/* status */}
            <div className="col 6 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
              <label htmlFor="" className="form-label-2">
                status
              </label>
            </div>

            {/*  Upload */}
            <div className="col 6 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
              {/* fetch data or status */}
              <label htmlFor="" className="form-label-2" id="statusalign">
                Approved/Progressing/pending
              </label>
            </div>

            {/* buttons */}
            <div className="d-flex justify-content-center pt-3">
              <button
                type="button"
                className="btn btn-secondary btn-lg"
                id="editassignreqbtn"
              >
                Edit
              </button>

              <button
                type="button"
                className="btn btn-secondary btn-lg ms-2"
                id="saveassignreqbtn"
              >
                Save
              </button>
            </div>
          </div>
          <center>
            <button type="button" className="btn btn-secondary btn-lg ms-2">
              Respond
            </button>
          </center>
        </div>
      </div>
      <br />
    </>
  );
};

export default AssignedReqForm;
