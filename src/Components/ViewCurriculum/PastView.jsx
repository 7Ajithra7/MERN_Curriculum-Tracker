import React from "react";

const PastView = () => {
  return (
    <>
      <div className="container-bodymain">
        {/* main */}
        <div className="main" id="mainassignreqbg">
          <div className="topbar" id="">
            <div className="toggle">
              <ion-icon name="menu-outline"></ion-icon>
            </div>

            <div className="search">
              <label>
                <input type="text" placeholder="Search here" />
                <ion-icon name="search-outline"></ion-icon>
              </label>
            </div>

            <div className="user">
              <img src="" alt="" />
            </div>
          </div>

          <div className="details">
            <div className="recentOrders">
              <div className="cardHeader">
              </div>

              <center>
                <div className="container-pastcurriculum">
                  <h2>PAST CURRICULUM</h2>
                </div>
              </center>

              <center>
                <h3 className="curriculum">Curriculum 1</h3>
              </center>
              {/* Table 1*/}

              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">Name of Curriculum</th>
                    <th scope="col">Duration</th>
                    <th scope="col">Faculty Name</th>
                    <th scope="col">Admin Name</th>
                    <th scope="col">status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>curriculum 1</td>
                    <td>60hrs</td>
                    <td>faculty 1 </td>
                    <td>admin 1 </td>
                    <td>Approved </td>
                  </tr>
                </tbody>
              </table>

              {/* curriculum 2 */}
              <center>
                <h3 className="curriculum">Curriculum 2</h3>
              </center>
              {/* Table 1*/}

              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">Name of Curriculum</th>
                    <th scope="col">Duration</th>
                    <th scope="col">Faculty Name</th>
                    <th scope="col">Admin Name</th>
                    <th scope="col">status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>curriculum 2</td>
                    <td>60hrs</td>
                    <td>faculty 2 </td>
                    <td>admin 1 </td>
                    <td>Approved </td>
                  </tr>
                </tbody>
              </table>

              {/* curriculum 2 */}
              <center>
                <h3 className="curriculum">Curriculum 3</h3>
              </center>
              {/* Table 1*/}

              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">Name of Curriculum</th>
                    <th scope="col">Duration</th>
                    <th scope="col">Faculty Name</th>
                    <th scope="col">Admin Name</th>
                    <th scope="col">status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>curriculum 3</td>
                    <td>60hrs</td>
                    <td>faculty 2 </td>
                    <td>admin 1 </td>
                    <td>Approved </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PastView;
