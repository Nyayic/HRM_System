/**
 * Signin Firebase
 */

import React, { Component } from 'react';
import { Helmet } from "react-helmet";

class Settings extends Component {

   render() {
     
      return ( 
       <div className="page-wrapper">
       <Helmet>
           <title>Settings - HRMS Seeta High School</title>
           <meta name="description" content="Login page"/>					
       </Helmet>
       {/* Page Content */}
       <div className="content container-fluid">
         <div className="row">
           <div className="col-md-8 offset-md-2">
             {/* Page Header */}
             <div className="page-header">
               <div className="row">
                 <div className="col-sm-12">
                   <h3 className="page-title">Company Settings</h3>
                 </div>
               </div>
             </div>
             {/* /Page Header */}
             <form>
               <div className="row">
                 <div className="col-sm-6">
                   <div className="form-group">
                     <label>Company Name <span className="text-danger">*</span></label>
                     <input className="form-control" type="text" 
                     defaultValue="Seeta High School" />
                   </div>
                 </div>
                 <div className="col-sm-6">
                   <div className="form-group">
                     <label>Contact Person</label>
                     <input className="form-control " defaultValue="Arthur" type="text" />
                   </div>
                 </div>
               </div>
               <div className="row">
                 <div className="col-sm-12">
                   <div className="form-group">
                     <label>Address</label>
                     <input className="form-control " 
                     defaultValue="Seeta, Mukono" 
                     type="text" />
                   </div>
                 </div>
                 <div className="col-sm-6 col-md-6 col-lg-3">
                   <div className="form-group">
                     <label>Country</label>
                     <select className="form-control select">
                       <option>Uganda</option>
                       <option>United Kingdom</option>
                     </select>
                   </div>
                 </div>
                 <div className="col-sm-6 col-md-6 col-lg-3">
                   <div className="form-group">
                     <label>City</label>
                     <input className="form-control" defaultValue="Mukono" type="text" />
                   </div>
                 </div>
                 <div className="col-sm-6 col-md-6 col-lg-3">
                   <div className="form-group">
                     <label>State/Province</label>
                     <select className="form-control select">
                       <option>kampala</option>
                       <option>Mukono</option>
                       <option>Wakiso</option>
                     </select>
                   </div>
                 </div>
                 <div className="col-sm-6 col-md-6 col-lg-3">
                   <div className="form-group">
                     <label>Postal Code</label>
                     <input className="form-control" defaultValue={91403} type="text" />
                   </div>
                 </div>
               </div>
               <div className="row">
                 <div className="col-sm-6">
                   <div className="form-group">
                     <label>Email</label>
                     <input className="form-control" defaultValue="admin@seetahigh.com" type="email" />
                   </div>
                 </div>
                 <div className="col-sm-6">
                   <div className="form-group">
                     <label>Phone Number</label>
                     <input className="form-control" defaultValue="0-818-978-7102" type="text" />
                   </div>
                 </div>
               </div>
               <div className="row">
                 <div className="col-sm-6">
                   <div className="form-group">
                     <label>Mobile Number</label>
                     <input className="form-control" defaultValue="(+256)818-635-5579" type="text" />
                   </div>
                 </div>
                 <div className="col-sm-6">
                   <div className="form-group">
                     <label>Fax</label>
                     <input className="form-control" defaultValue="818-978-7102" type="text" />
                   </div>
                 </div>
               </div>
               <div className="row">
                 <div className="col-sm-12">
                   <div className="form-group">
                     <label>Website Url</label>
                     <input className="form-control" defaultValue="https://www.seetahigh.com" type="text" />
                   </div>
                 </div>
               </div>
               <div className="submit-section">
                 <button className="btn btn-primary submit-btn">Save</button>
               </div>
             </form>
           </div>
         </div>
       </div>
       {/* /Page Content */}
     </div>
      );
   }
}

export default Settings;
