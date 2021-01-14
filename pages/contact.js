
import Head from 'next/head'
 import React from 'react';
 export default function contact(){
     return(
         <div>
             <Head>
                 <title>Contact us</title>
                 
                 <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous"></link>
                 <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
                 <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx" crossorigin="anonymous"></script>
             </Head>
          
          <nav className="navbar navbar-expand-lg navbar-light bg-light fixed container">
  <a className="navbar-brand text-danger text-bold" href="#">NBTechnical</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse container" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto text-center">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">About us</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/gallery">Gallery</a>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Services
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="#">Action</a>
          <a className="dropdown-item" href="#">Another action</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#" tabindex="-1" aria-disabled="true">Contact us</a>
      </li>
    </ul>
    
  </div>
</nav>

<div className="jumbotron mt-5"> 
   <div className="container">
    <div className="row">
       <div className="col-lg-6 col-md-6 col-sm-6 col-12">
         <form className="mt-1">
         <input className="form-control" type="text" placeholder="Your Name"></input>
           <input className="form-control" type="email" placeholder="Your Email"></input>
           <input className="form-control" type="date" placeholder=""></input>
           <input className="form-control" type="tel" placeholder="Your Number"></input>
           <input className="form-control" type="password" placeholder="Your Password"></input>
           <button type="submit" className="btn btn-success btn-block mt-3">Register </button>
         </form>
       </div>

       <div className="col-lg-6 col-md-6 col-sm-6 col-12 mt-5">
         <form>
           <input className="form-control" type="text" placeholder="Your Name"></input>
           <input className="form-control" type="email" placeholder="Your Email"></input>
           <input className="form-control" type="date" placeholder=""></input>
           <input className="form-control" type="tel" placeholder="Your Number"></input>
           <input className="form-control" type="password" placeholder="Your Password"></input>
           <button type="submit" className="btn btn-primary btn-block mt-3">Register </button>
         </form>
       </div>
    </div>
    </div>
</div>
                 
             
       
    
         </div>
        
     )
 }