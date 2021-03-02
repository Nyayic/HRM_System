/**
 * App Header
 */
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Sidebar extends Component {
   render() {
    
    const {  location } = this.props
    let pathname = location.pathname

    return (
        <div className="sidebar" id="sidebar">
        <div className="sidebar-inner slimscroll">
          <div id="sidebar-menu" className="sidebar-menu">
            <ul>
              <li className="menu-title"> 
                <span>Main</span>
              </li>
              <li className="submenu">
                <a href="#"><i className="la la-dashboard" /> <span> Dashboard</span> <span className="menu-arrow" /></a>
                <ul style={{display: 'none'}}>
                  <li><a className={pathname.includes('main/dashboard') ?"active" :""} href="/light/app/main/dashboard">Admin Dashboard</a></li>
                  
                  {/* Eliminated employee dash in the admin dashboard */}
                  {/* <li>
                    <a className={pathname.includes('main/employee-') ?"active" :""} 
                        href="/light/app/main/employee-dashboard">Employee Dashboard
                        </a>
                  </li> */}
                </ul>
              </li>
              <li className="submenu">
                <a href="#">
                  <i className="la la-cube" /> 
                  <span> Apps</span> <span className="menu-arrow" />
                </a>
                <ul style={{display: 'none'}}>
                  <li><a href="/light/conversation/chat">Chat</a></li>
                  <li className="submenu">
                    <a href="#"><span> Calls</span> <span className="menu-arrow" /></a>
                    <ul style={{display: 'none'}}>
                      <li><a href="/light/conversation/voice-call">Voice Call</a></li>
                      <li><a href="/light/conversation/video-call">Video Call</a></li>
                      <li><a href="/light/conversation/outgoing-call">Outgoing Call</a></li>
                      <li><a href="/light/conversation/incoming-call">Incoming Call</a></li>
                    </ul>
                  </li>
                  <li><a className={pathname.includes('apps/calendar') ?"active" :""} href="/light/app/apps/calendar">Calendar</a></li>
                  <li><a className={pathname.includes('contacts') ?"active" :""} href="/light/app/apps/contacts">Contacts</a></li>
                  <li><a href="/light/email/inbox">Email</a></li>
                  <li><a className={pathname.includes('file-manager') ?"active" :""} href="/light/app/apps/file-manager">File Manager</a></li>
                </ul>
              </li>
              <li className="menu-title"> 
                <span>Employees</span>
              </li>
              <li className="submenu">
                <a href="#" className="noti-dot"><i className="la la-user" /> <span> Employees</span> <span className="menu-arrow" /></a>
                <ul style={{display: 'none'}}>
                  <li><a className={pathname.includes('allemployees') ?"active" :pathname.includes('employees-list') ?"active" :""} 
                        href="/light/app/employee/allemployees">All Employees</a></li>
                  <li><a className={pathname.includes('holidays') ?"active" :""} href="/light/app/employee/holidays">Holidays</a></li>
                  <li><a className={pathname.includes('es-admin') ?"active" :""} href="/light/app/employee/leaves-admin">Leaves (Admin) <span className="badge badge-pill bg-primary float-right">1</span></a></li>
                 
                 {/* Eliminated employee dash */}
                  {/* <li><a className={pathname.includes('ves-employee') ?"active" :""} 
                  href="/light/app/employee/leaves-employee">Leaves (Employee)</a></li> */}

                  <li><a className={pathname.includes('e-settings') ?"active" :""} href="/light/app/employee/leave-settings">Leave Settings</a></li>
                  <li><a className={pathname.includes('nce-admin') ?"active" :""} href="/light/app/employee/attendance-admin">Attendance (Admin)</a></li>

                  {/* <li><a className={pathname.includes('ce-employee') ?"active" :""} href="/light/app/employee/attendance-employee">Attendance (Employee)</a></li> */}
                  
                  <li><a className={pathname.includes('departments') ?"active" :""} href="/light/app/employee/departments">Departments</a></li>
                  <li><a className={pathname.includes('designations') ?"active" :""} href="/light/app/employee/designations">Designations</a></li>
                  <li><a className={pathname.includes('timesheet') ?"active" :""} href="/light/app/employee/timesheet">Timesheet</a></li>
                  <li><a className={pathname.includes('overtime') ?"active" :""} href="/light/app/employee/overtime">Overtime</a></li>
                </ul>
              </li>
              <li className={pathname.includes('clients') ?"active" :""}> 
                <a href="/light/app/employees/clients"><i className="la la-users" /> <span>Clients</span></a>
              </li>
              <li className="submenu">
                <a href="#"><i className="la la-rocket" /> <span> Projects</span> <span className="menu-arrow" /></a>
                <ul style={{display: 'none'}}>
                  <li><a className={pathname.includes('t_dashboard' ) ?"active" : pathname.includes('projects-list' ) ?
                  "active" : pathname.includes('cts-view' ) ? "active" : ""} 
                      href="/light/app/projects/project_dashboard">Projects</a></li>
                  <li><a href="/light/tasks/tasks">Tasks</a></li>
                  <li><a className={pathname.includes('task-board') ?"active" :""} href="/light/app/projects/task-board">Task Board</a></li>
                </ul>
              </li>
              <li className={pathname.includes('leads') ?"active" :""}> 
                <a href="/light/app/employees/leads"><i className="la la-user-secret" /> <span>Leads</span></a>
              </li>
              <li className={pathname.includes('tickets') ?"active" :""}> 
                <a href="/light/app/employees/tickets"><i className="la la-ticket" /> <span>Tickets</span></a>
              </li>
              <li className="menu-title"> 
                <span>HR</span>
              </li>
              <li className="submenu">
                <a href="#"><i className="la la-files-o" /> <span> Accounts </span> <span className="menu-arrow" /></a>
                <ul style={{display: 'none'}}>
                  <li><a className={pathname.includes('estimates') ?"active" :""} href="/light/app/accounts/estimates">Estimates</a></li>
                  <li><a className={pathname.includes('invoices') ?"active" :""} href="/light/app/accounts/invoices">Invoices</a></li>
                  <li><a className={pathname.includes('payments') ?"active" :""} href="/light/app/accounts/payments">Payments</a></li>
                  <li><a className={pathname.includes('expenses') ?"active" :""} href="/light/app/accounts/expenses">Expenses</a></li>
                  <li><a className={pathname.includes('provident-fund') ?"active" :""} href="/light/app/accounts/provident-fund">Provident Fund</a></li>
                  <li><a className={pathname.includes('taxes') ?"active" :""} href="/light/app/accounts/taxes">Taxes</a></li>
                </ul>
              </li>
              <li className="submenu">
                <a href="#"><i className="la la-money" /> <span> Payroll </span> <span className="menu-arrow" /></a>
                <ul style={{display: 'none'}}>
                  <li><a className={pathname.includes('_salary') ?"active" :""} href="/light/app/payroll/_salary"> Employee Salary </a></li>
                  <li><a className={pathname.includes('y-view') ?"active" :""} href="/light/app/payroll/salary-view"> Payslip </a></li>
                  <li><a className={pathname.includes('payroll-items') ?"active" :""} href="/light/app/payroll/payroll-items"> Payroll Items </a></li>
                </ul>
              </li>
              <li className={pathname.includes('policies') ?"active" :""}> 
                <a href="/light/app/hr/policies"><i className="la la-file-pdf-o" /> <span>Policies</span></a>
              </li>
              <li className="submenu">
                <a href="#"><i className="la la-pie-chart" /> <span> Reports </span> <span className="menu-arrow" /></a>
                <ul style={{display: 'none'}}>
                  <li><a className={pathname.includes('expense-') ?"active" :""} href="/light/app/reports/expense-reports"> Expense Report </a></li>
                  <li><a className={pathname.includes('invoice-') ?"active" :""} href="/light/app/reports/invoice-reports"> Invoice Report </a></li>
                </ul>
              </li>
              <li className="menu-title"> 
                <span>Performance</span>
              </li>
              <li className="submenu">
                <a href="#"><i className="la la-graduation-cap" /> <span> Performance </span> <span className="menu-arrow" /></a>
                <ul style={{display: 'none'}}>
                  <li><a className={pathname.includes('-indicator') ?"active" :""} href="/light/app/performances/performance-indicator"> Performance Indicator </a></li>
                  <li><a className={pathname.includes('-review') ?"active" :""} href="/light/app/performances/performance-review"> Performance Review </a></li>
                  <li><a className={pathname.includes('-appraisal') ?"active" :""} href="/light/app/performances/performance-appraisal"> Performance Appraisal </a></li>
                </ul>
              </li>
              <li className="submenu">
                <a href="#"><i className="la la-crosshairs" /> <span> Goals </span> <span className="menu-arrow" /></a>
                <ul style={{display: 'none'}}>
                  <li><a className={pathname.includes('-tracking') ?"active" :""} href="/light/app/goals/goal-tracking"> Goal List </a></li>
                  <li><a className={pathname.includes('l-type') ?"active" :""} href="/light/app/goals/goal-type"> Goal Type </a></li>
                </ul>
              </li>
              <li className="submenu">
                <a href="#"><i className="la la-edit" /> <span> Training </span> <span className="menu-arrow" /></a>
                <ul style={{display: 'none'}}>
                  <li><a className={pathname.includes('training-list') ?"active" :""} href="/light/app/training/training-list"> Training List </a></li>
                  <li><a className={pathname.includes('trainer') ?"active" :""} href="/light/app/training/trainer"> Trainers</a></li>
                  <li><a className={pathname.includes('training-type') ?"active" :""} href="/light/app/training/training-type"> Training Type </a></li>
                </ul>
              </li>
              <li className={pathname.includes('promotion') ?"active" :""}><a href="/light/app/performance/promotion"><i className="la la-bullhorn" /> <span>Promotion</span></a></li>
              <li className={pathname.includes('resignation') ?"active" :""}><a href="/light/app/performance/resignation"><i className="la la-external-link-square" /> <span>Resignation</span></a></li>
              <li className={pathname.includes('termination') ?"active" :""}><a href="/light/app/performance/termination"><i className="la la-times-circle" /> <span>Termination</span></a></li>
              <li className="menu-title"> 
                <span>Administration</span>
              </li>
              <li className={pathname.includes('assets') ?"active" :""}> 
                <a href="/light/app/administrator/assets"><i className="la la-object-ungroup" /> <span>Assets</span></a>
              </li>
              <li className="submenu">
                <a href="#"><i className="la la-briefcase" /> <span> Jobs </span> <span className="menu-arrow" /></a>
                <ul style={{display: 'none'}}>
                  <li><a className={pathname.includes('jobs') ?"active" :""} href="/light/app/administrator/jobs"> Manage Jobs </a></li>
                  <li><a className={pathname.includes('job-applicants') ?"active" :""} href="/light/app/administrator/job-applicants"> Applied Candidates </a></li>
                </ul>
              </li>
              <li className={pathname.includes('knowledgebase') ?"active" :""}> 
                <a href="/light/app/administrator/knowledgebase"><i className="la la-question" /> <span>Knowledgebase</span></a>
              </li>
              <li className={pathname.includes('activities') ?"active" :""}> 
                <a href="/light/app/administrator/activities"><i className="la la-bell" /> <span>Activities</span></a>
              </li>
              <li className={pathname.includes('administrator/users') ?"active" :""}> 
                <a href="/light/app/administrator/users"><i className="la la-user-plus" /> <span>Users</span></a>
              </li>
              <li> 
                <a href="/light/settings/companysetting"><i className="la la-cog" /> <span>Settings</span></a>
              </li>
              <li className="menu-title"> 
                <span>Pages</span>
              </li>
              <li className="submenu">
                <a href="#"><i className="la la-user" /> <span> Profile </span> <span className="menu-arrow" /></a>
                <ul style={{display: 'none'}}>
                  <li><a className={pathname.includes('profile/employee-') ?"active" :""} href="/light/app/profile/employee-profile"> Employee Profile </a></li>
                  <li><a className={pathname.includes('client-') ?"active" :""} href="/light/app/profile/client-profile"> Client Profile </a></li>
                </ul>
              </li>
              <li className="submenu">
                <a href="#"><i className="la la-key" /> <span> Authentication </span> <span className="menu-arrow" /></a>
                <ul style={{display: 'none'}}>
                  <li><a href="/light/login"> Login </a></li>
                  <li><a href="/light/register"> Register </a></li>
                  <li><a href="/light/forgotpassword"> Forgot Password </a></li>
                  <li><a href="/light/otp"> OTP </a></li>
                  <li><a href="/light/lockscreen"> Lock Screen </a></li>
                </ul>
              </li>
              <li className="submenu">
                <a href="#"><i className="la la-exclamation-triangle" /> <span> Error Pages </span> <span className="menu-arrow" /></a>
                <ul style={{display: 'none'}}>
                  <li><a href="/light/error-404">404 Error </a></li>
                  <li><a href="/light/error-500">500 Error </a></li>
                </ul>
              </li>
              <li className="submenu">
                <a href="#"><i className="la la-hand-o-up" /> <span> Subscriptions </span> <span className="menu-arrow" /></a>
                <ul style={{display: 'none'}}>
                  <li><a className={pathname.includes('subscriptionadmin') ?"active" :""} href="/light/app/subscription/subscriptionadmin"> 
                  Subscriptions (Admin) </a></li>
                  <li><a className={pathname.includes('subscriptioncompany') ?"active" :""} href="/light/app/subscription/subscriptioncompany">
                     Subscriptions (Company) </a></li>
                  <li><a className={pathname.includes('subscribedcompanies') ?"active" :""} href="/light/app/subscription/subscribedcompanies">
                     Subscribed Companies</a></li>
                </ul>
              </li>
              <li className="submenu">
                <a href="#"><i className="la la-columns" /> <span> Pages </span> <span className="menu-arrow" /></a>
                <ul style={{display: 'none'}}>
                  <li><a className={pathname.includes('pages/search') ?"active" :""} href="/light/app/pages/search"> Search </a></li>
                  <li><a className={pathname.includes('pages/faq') ?"active" :""} href="/light/app/pages/faq"> FAQ </a></li>
                  <li><a className={pathname.includes('pages/terms') ?"active" :""} href="/light/app/pages/terms"> Terms </a></li>
                  <li><a className={pathname.includes('privacypolicy') ?"active" :""} href="/light/app/pages/privacypolicy"> Privacy Policy </a></li>
                  <li><a className={pathname.includes('pages/blank') ?"active" :""} href="/light/app/pages/blank"> Blank Page </a></li>
                </ul>
              </li>
              <li className="menu-title"> 
                <span>UI Interface</span>
              </li>
              <li> 
                <a href="/light/ui-components"><i className="la la-puzzle-piece" /> <span>Components</span></a>
              </li>
              <li className="submenu">
                <a href="#"><i className="la la-object-group" /> <span> Forms </span> <span className="menu-arrow" /></a>
                <ul style={{display: 'none'}}>
                  <li><a className={pathname.includes('basicinputs') ?"active" :""}
                      href="/light/app/ui-interface/forms/basicinputs">Basic Inputs </a></li>
                  <li><a className={pathname.includes('inputgroups') ?"active" :""} 
                      href="/light/app/ui-interface/forms/inputgroups">Input Groups </a></li>
                  <li><a className={pathname.includes('horizontalform') ?"active" :""}
                     href="/light/app/ui-interface/forms/horizontalform">Horizontal Form </a></li>
                  <li><a className={pathname.includes('verticalform') ?"active" :""} 
                    href="/light/app/ui-interface/forms/verticalform"> Vertical Form </a></li>
                  <li><a className={pathname.includes('formmask') ?"active" :""}
                      href="/light/app/ui-interface/forms/formmask"> Form Mask </a></li>
                  <li><a className={pathname.includes('formvalidation') ?"active" :""}
                      href="/light/app/ui-interface/forms/formvalidation"> Form Validation </a></li>
                </ul>
              </li>
              <li className="submenu">
                <a href="/light/app/ui-interface/tables/basic"><i className="la la-table" /> <span> Tables </span> <span className="menu-arrow" /></a>
                <ul style={{display: 'none'}}>
                  <li><a className={pathname.includes('tables/basic') ?"active" :""} href="/light/app/ui-interface/tables/basic">Basic Tables </a></li>
                  <li><a className={pathname.includes('tables/data-table') ?"active" :""} href="/light/app/ui-interface/tables/data-table">Data Table </a></li>
                </ul>
              </li>
              <li className="menu-title"> 
                <span>Extras</span>
              </li>
              <li> 
                <a href="#"><i className="la la-file-text" /> <span>Documentation</span></a>
              </li>
              <li> 
                <a href=""><i className="la la-info" /> <span>Change Log</span> <span className="badge badge-primary ml-auto">v3.4</span></a>
              </li>
              <li className="submenu">
                <a href=""><i className="la la-share-alt" /> <span>Multi Level</span> <span className="menu-arrow" /></a>
                <ul style={{display: 'none'}}>
                  <li className="submenu">
                    <a href=""> <span>Level 1</span> <span className="menu-arrow" /></a>
                    <ul style={{display: 'none'}}>
                      <li><a href=""><span>Level 2</span></a></li>
                      <li className="submenu">
                        <a href=""> <span> Level 2</span> <span className="menu-arrow" /></a>
                        <ul style={{display: 'none'}}>
                          <li><a href="">Level 3</a></li>
                          <li><a href="">Level 3</a></li>
                        </ul>
                      </li>
                      <li><a href=""> <span>Level 2</span></a></li>
                    </ul>
                  </li>
                  <li>
                    <a href=""> <span>Level 1</span></a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
       
      );
   }
}

export default withRouter(Sidebar);
