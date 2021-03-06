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
        
                </ul>
              </li>
              <li className="submenu">
                <a href="#">
                  <i className="la la-cube" /> 
                  <span> Apps</span> <span className="menu-arrow" />
                </a>

                {/* eliminated calls and left only calendar */}
                <ul style={{display: 'none'}}>

                  <li>
                    <a className={pathname.includes('apps/calendar') ?"active" :""} 
                    href="/light/app/apps/calendar">HR Calendar
                    </a>
                  </li>
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
                 
              
                  <li><a className={pathname.includes('e-settings') ?"active" :""} href="/light/app/employee/leave-settings">Leave Settings</a></li>
                  <li><a className={pathname.includes('nce-admin') ?"active" :""} href="/light/app/employee/attendance-admin">Attendance (Admin)</a></li>
                  
                  <li><a className={pathname.includes('departments') ?"active" :""} href="/light/app/employee/departments">Departments</a></li>
                  <li><a className={pathname.includes('designations') ?"active" :""} href="/light/app/employee/designations">Designations</a></li>
                  <li><a className={pathname.includes('timesheet') ?"active" :""} href="/light/app/employee/timesheet">Timesheet</a></li>
                  <li><a className={pathname.includes('overtime') ?"active" :""} href="/light/app/employee/overtime">Overtime</a></li>
                </ul>
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
              
              <li className="submenu">
                <a href="#"><i className="la la-briefcase" /> <span> Jobs </span> <span className="menu-arrow" /></a>
                <ul style={{display: 'none'}}>
                  <li><a className={pathname.includes('jobs') ?"active" :""} href="/light/app/administrator/jobs"> Manage Jobs </a></li>
                  <li><a className={pathname.includes('job-applicants') ?"active" :""} href="/light/app/administrator/job-applicants"> Applied Candidates </a></li>
                </ul>
              </li>
             
              <li className={pathname.includes('administrator/users') ?"active" :""}> 
                <a href="/light/app/administrator/users"><i className="la la-user-plus" /> <span>Users</span></a>
              </li>
              <li> 
                <a href="/light/settings/companysetting"><i className="la la-cog" /> <span>Settings</span></a>
              </li>

            </ul>
          </div>
        </div>
      </div>
       
      );
   }
}

export default withRouter(Sidebar);
