import React , {useState, useEffect, forwardRef} from "react"
import {Link , useHistory} from "react-router-dom"
import { CsvBuilder } from "filefy";
import Navbar from "../../../Common-To-All/Navbar";
import Footer from "../../../Common-To-All/Footer";
import Sidebar from "../../../Sidebar/Sidebar";
import Heading from "../../../Common-To-All/Heading"

import {toast} from "react-toastify"

import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'
import MaterialTable , {MTableBodyRow }  from "material-table"

import Add from '@material-ui/icons/Add';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import View from '@material-ui/icons/Visibility';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';


import axios from "axios";

const User =()=>{
  const history = useHistory();
  const [state, setState]= useState({
    uname: sessionStorage.getItem("username"),
  })

  const Column = [
    { title: 'ID', field: 'id',sorting:false, searchable:false },
    { title: 'UserName', field: 'username' },
   
    {
      title: 'Status', field: 'active',
      lookup: { 1: 'Active', 0: 'Inactive' },
      sorting:false
    }
  ]
  const [indata , setIndata]= useState([]);
  const [columns, setColumns] = useState(Column);

// ------------------------Fetching Icons for Table-------------------------------------
const tableIcons = {
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
};


// ------------------------Fetching users table data-------------------------------------
  useEffect(()=>{
    loadUsers();
  },[])

  const loadUsers = async () =>{
    const obj = { uname:state.uname }
    axios.post("http://sandbox.portalwiz.com/php/users.php", obj)
    .then( (response) => {
      console.log(response)
      if(response.data.message !== "No Data"){
        let a = JSON.parse(response.data.data);
        console.log(a);
        setIndata(a);
      }else{
        setIndata([]);
      }
        
    })
    .catch( (err) => console.log(err) );
  }
  
// ---------------------------------deleting a User from the Users Table---------------------------
  function onDelete(id) {
    const delobj = {
      id: id,
      uname: state.uname,
      tokenId: 123,
    };
      axios.post("http://sandbox.portalwiz.com/php/user_delete.php", delobj)
        .then((res) => console.log(res))
        .then((res) => loadUsers())
        .catch((err) => console.log(err));
  }
  // ------------------------Custom Theme in table------------------------------------
        const theme = createMuiTheme({
          MuiTableRow: {
              hover: {
                backgroundColor: 'green',
              }
            },
          palette: {
            secondary: {
              main: "#3282b8",
            }
          },
        });

  return(
    <>
       <Navbar />
        <div className="d-flex Tab_page">
          <Sidebar />
          <div className="container-fluid">

            <nav aria-label="breadcrumb">
                <ol className="breadcrumb bg-light py-1 mt-2 align-items-center">
                    <li className="breadcrumb-item"><Link to="/bulletin">Home</Link></li>
                    <li className="breadcrumb-item"><strong>Setup</strong></li>
                    <li className="breadcrumb-item active" aria-current="page">Users</li>
                </ol>
             </nav>

             <Heading name="Users" />
             
            <div className="container">
      
            <div className="row my-4">
            <div className="col-11 mx-auto d-flex justify-content-end">
                <Link to="/add-user" className="btn btn-primary btn_link">Add User <Add /></Link>
            </div>
            </div>
            <div className="row ">
                   <div className="col-11 mx-auto mb-5">
                <MuiThemeProvider theme={theme}>
                        <MaterialTable
                          icons = {tableIcons}
                          title=""
                          style={{background:"#f8f9fa"}}
                          columns={columns}
                          data={indata}
                          components={{ Row: props => ( <MTableBodyRow id="mtable_Row" {...props} />  )}}
                          options={{
                            actionsColumnIndex: -1,
                            draggable:false,
                            emptyRowsWhenPaging:false,
                            pageSize: 10,
                            pageSizeOptions: [10, 25, 50, 100, 200],
                            showFirstLastPageButtons: false,
                            selection:true,
                            exportButton:true,
                            exportAllData:true,
                            headerStyle: {
                              fontWeight:"bolder",
                              background:"#f8f9fa",
                              letterSpacing:"1px",
                              boxShadow:"5px .1px 5px 0px "
                             },
                          }}
                          actions={[
                            // // ---------------View Icon--------------------
                            // rowData => ({
                            //   icon : View,
                            //   tooltip: 'View User',
                            //   onClick: (event, rowData) => history.push("/view-user/" + rowData[0].id),
                            //   hidden: rowData.length > 1
                            // }),
                            //----------------------Edit Icon--------------- 
                            rowData => ({
                              icon : Edit,
                              tooltip: 'Edit User',
                              onClick: (event, rowData) => history.push("/edit-user/" + rowData[0].id),
                              hidden: rowData.length > 1
                            }),
                            //----------------------Delete Icon--------------- 
                            rowData => ({
                              icon: DeleteOutline,
                              tooltip: 'Delete User',
                              onClick: (event, rowData) => {
                                  rowData.map((data)=>{
                                    onDelete(data.id)
                              })
                              loadUsers();
                              toast.info(rowData.length + " Row(s) Deleted!")
                              }
                            }),
                            //----------------------Export Icon--------------- 
                            {
                              position: "toolbarOnSelect",
                              icon: SaveAlt,
                              tooltip: 'Export selected Levels in CSV format!',
                              onClick: (e, rowData) => {
                                const fileName = "User_data";
                                const builder = new CsvBuilder(fileName + ".csv");
                                builder
                                  .setColumns(columns.map((columnDef) => columnDef.title))
                                  .addRows(rowData.map((rowData) =>
                                    columns.map((columnDef) => rowData[columnDef.field]
                                    )))
                                  .exportFile();
                              }
                            },
                          ]}
                          onRowClick={
                              (event,rowData)=>{
                                console.log(rowData)
                                history.push("/view-user/" + rowData.id)
                              }
                          }
                        />
                        </MuiThemeProvider>
                 </div>
               </div>
            </div>
          </div>
        </div>
        <Footer />
    </>
  )
}

export default User

