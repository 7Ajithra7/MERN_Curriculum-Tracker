import React from "react";

const ViewCurriculum = () => {
  return (
    <>
      {/* card */}

      <div className="details">
        <div className="recentOrders">
          <div className="cardHeader">
            <div class="cardBox">
              <div
                class="card"
                onClick={() => alert("View Present Curriculum")}
              >
                <div>
                  <div class="numbers">Present Curriculum</div>
                  <div class="cardName">view</div>
                </div>

                <div class="iconBx">
                  <ion-icon name="eye-outline"></ion-icon>
                </div>
              </div>

              <div class="card">
                <div>
                  <div
                    class="numbers"
                    onClick={() => alert("View Past Curriculumsn")}
                  >
                    Past Curriculum
                  </div>
                  <div class="cardName">view</div>
                </div>

                <div class="iconBx">
                  <ion-icon name="eye-outline"></ion-icon>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewCurriculum;
