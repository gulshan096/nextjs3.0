import React from 'react';
import Head from 'next/head';
export default function gallery(){
    return(
        <div>

<       Head>
            <title>gallery</title>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous"></link>
                 <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
                 <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx" crossorigin="anonymous"></script>
        </Head>     
        
    
        <div className="container">
             <h5 className="bg-white text-center text-dark p-5 shadow-lg mt-5">My Gallery</h5>
        </div>

        <div className="jumbotron mt-5 bg-muted">

         

         <div className="container  bg-muted p-2">
          <div className="row mt-5">
            <div className="col-lg-4 col-md-4 col-sm-4 col-12 ">
               <img src="https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" className="img-fluid  shadow-lg bg-white"></img>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4 col-12">
               <img src="https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" className="img-fluid shadow-lg bg-white"></img>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4 col-12">
               <img src="https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" className="img-fluid shadow-lg bg-white"></img>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-lg-4 col-md-4 col-sm-4 col-12 ">
               <img src="https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" className="img-fluid shadow-lg bg-white"></img>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4 col-12">
               <img src="https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" className="img-fluid shadow-lg bg-white"></img>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4 col-12">
               <img src="https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" className="img-fluid shadow-lg bg-white"></img>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-lg-4 col-md-4 col-sm-4 col-12 ">
               <img src="https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" className="img-fluid shadow-lg bg-white"></img>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4 col-12">
               <img src="https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" className="img-fluid shadow-lg bg-white"></img>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4 col-12">
               <img src="https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" className="img-fluid shadow-lg bg-white"></img>
            </div>
          </div>
         </div>
        </div>
        </div>
    )
}