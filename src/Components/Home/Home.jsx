import React from "react";

const Home = () => {
    return (
        <>
        <div className='container-10' id='body'>
          {/* Carosal with path */}

          <div className="container-11">
       
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
          <h6 className="pathtitle"> <center>Home</center></h6>
          </div>
     </div>
        {/* Carosal with path end */}

<br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
<div className="container align-content-start">
  <div className="row g-4">

    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
      <br /><br /><br />
      <h6 id="homeheading">ICTAK Curriculum Tracker</h6><br />
      <p className='bodyheadcontent'>ICT Academy of Kerala (ICTAK) is a social enterprise officially launched on the 24th of June, 2014. The organization had a humble beginning providing skill training programs to selected academic institutions. Over the years, ICTAK has grown to a prime service provider of all ICT and innovation-related training and capacity-building programs in the state.</p>
      <br />
      <center><a href="#"><img src="./assets/Knowmore1.png" alt="" width="150" /></a></center>
    </div>
    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
      <img className="image-fluid" src="./assets/HomeImage1.gif" alt="" srcset="" width='600' height='400' />
    </div>
  </div>
</div>
<br /><br /><br /><br /><br /><br /><br />



{/* company icons*/}
<br /><br />
<div className="container-4">
  <center><h2 className="ourclients"><b>Our Clients</b></h2></center> <br /><br />
  <div className="row g-5">

    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
      <marquee behavior="scroll" direction="left" scrollamount="17" >
        <img src="./assets/CompLogo4.png" width="200" height="80" alt="Natural" />&emsp;&emsp;&emsp;&emsp;&emsp;
        <img src="./assets/CompLogo8.png" width="200" height="80" alt="Natural" />&emsp;&emsp;&emsp;&emsp;&emsp;
        <img src="./assets/CompLogo7.png" width="200" height="80" alt="Natural" />&emsp;&emsp;&emsp;&emsp;&emsp;
        <img src="./assets/CompLogo6.png" width="200" height="80" alt="Natural" />&emsp;&emsp;&emsp;&emsp;&emsp;
        <img src="./assets/CompLogo5.png" width="200" height="80" alt="Natural" />&emsp;&emsp;&emsp;&emsp;&emsp;
        <img src="./assets/CompLogo1.png" width="200" height="80" alt="Natural" />&emsp;&emsp;&emsp;&emsp;&emsp;
        <img src="./assets/CompLogo3.png" width="200" height="80" alt="Natural" />&emsp;&emsp;&emsp;&emsp;&emsp;
        <img src="./assets/CompLogo2.png" width="200" height="80" alt="Natural" />&emsp;&emsp;&emsp;&emsp;&emsp;
        <img src="./assets/CompLogo4.png" width="200" height="80" alt="Natural" />&emsp;&emsp;&emsp;&emsp;&emsp;
        <img src="./assets/CompLogo16.png" width="200" height="80" alt="Natural" />&emsp;&emsp;&emsp;&emsp;&emsp;
        <img src="./assets/CompLogo15.png" width="200" height="80" alt="Natural" />&emsp;&emsp;&emsp;&emsp;&emsp;
        <img src="./assets/CompLogo14.png" width="200" height="80" alt="Natural" />&emsp;&emsp;&emsp;&emsp;&emsp;
        <img src="./assets/CompLogo13.png" width="200" height="80" alt="Natural" />&emsp;&emsp;&emsp;&emsp;&emsp;
        <img src="./assets/CompLogo12.png" width="200" height="80" alt="Natural" />&emsp;&emsp;&emsp;&emsp;&emsp;
        <img src="./assets/CompLogo11.png" width="200" height="80" alt="Natural" />&emsp;&emsp;&emsp;&emsp;&emsp;
        <img src="./assets/CompLogo10.png" width="200" height="80" alt="Natural" />&emsp;&emsp;&emsp;&emsp;&emsp;

      </marquee>
    </div>


  </div>
</div>
<br /><br /><br />
{/* finish */}



{/* Get in touch details */}





{/* <!-- Section: Design Block --> */}

<center>



  <div className="container-fluid-6">
    <br /><br />
    <div class="col-lg-6 mb-5 mb-lg-0">

      <h1 className='question'>Got a Question?</h1>
      <h2 className="connectictak">Connect ICTAK</h2>
      <p className="carddiscription">we are here to answer any <br />question you might have <br />we look forward <br />to hearing from you.</p>
      <div class="card">

        <div class="card-body py-5 px-md-5">
          <form href="#">
            {/* <!-- 2 column grid layout with text inputs for the first and last names --> */}
            <div class="row">
              <div class="col-md-6 mb-4">
                <div class="form-outline">
                  <input type="text" id="fname" class="form-control" placeholder='Enter your First Name' />
                  {/* <label class="form-label" for="form3Example1">First name</label> */}
                </div>

              </div>
              <div class="col-md-6 mb-4">
                <div class="form-outline">
                  <input type="text" id="lname" class="form-control" placeholder='Enter your Last Name' />
                  {/* <label class="form-label" for="form3Example2">Last name</label> */}
                </div>
              </div>
            </div>

            {/* <!-- Email input --> */}
            <div class="form-outline mb-4">
              <input type="email" id="email" class="form-control" placeholder='Enter your Email id' />
              {/* <label class="form-label" for="form3Example3">Email address</label> */}
            </div>

            {/* <!-- Messege input --> */}
            <div class="form-outline mb-4">
              <textarea type="text" id="messege" class="form-control" placeholder='Type Your Message' />
              {/* <label htmlFor="" className="form-label">Messege</label> */}
            </div>


            {/* upload files*/}

            <div class="form-outline mb-4">
              <input type="file" id="uploadfile" class="form-control" placeholder='Please upload file' />
              {/* <label htmlFor="" className="form-label">Select a file</label> */}
            </div>



            {/* <!-- Submit button --> */}
            <button type="submit" class="btn">
              Submit
            </button>


          </form>
        </div>
      </div>
    </div>
  </div>







</center>




</div>
        </>
    );
};

export default Home;
