import React, {useState, useEffect, forwardRef} from "react"
import {Link , useHistory} from "react-router-dom"
import { CsvBuilder } from "filefy";
import Heading from "../../../Common-To-All/Heading"
import {toast} from "react-toastify"

import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'
import MaterialTable , {MTableBodyRow}  from "material-table"

import Add from '@material-ui/icons/Add';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';

import axios from "axios";

const Message_comp =()=>{
    const history = useHistory();
    const[state ,setState]= useState({
        uname: sessionStorage.getItem("username"),
    })

    const Column = [
      { title: 'ID', field: 'mail_id',sorting:false, searchable:false },
      { title: 'Sent By', field: 'sent_by' },
      { title: 'Subject', field: 'subject' },
      { title: 'Message', field: 'message' },
      { title: 'Sent On', field: 'sent_date', type:"date" },
    ]
    const [datas , setData]= useState([]);
    const [columns, setColumns] = useState(Column);
    
// ------------------------Fetching Icons for Tbale-------------------------------------
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

// ------------------------Fetching Role table data-------------------------------------
    useEffect(() => {
       loadMessages();
      },[]);

      const loadMessages =  () =>{
        const obj = { uname:state.uname}
        axios.post("http://sandbox.portalwiz.com/php/mail/select_mail.php", obj)
        .then( (response) => {
          console.log(response)
          if(response.data.message !== "No Data"){
            let a = JSON.parse(response.data.data);
            console.log(a);
            setData(a);
          }else{
            setData([]);
          }
            
        })
        .catch( (err) => console.log(err) );
      }
// // ------------------------Deleting Role table's data-------------------------------------
//       function onDelete(id) {
//           //alert(id);
//         const delobj = {
//           id: id,
//           uname: state.uname,
//           tokenId: 123,
//         };
//           axios.post("http://sandbox.portalwiz.com/php/delete_role.php", delobj)
//             .then((res) => console.log(res))
//             .catch((err) => console.log(err));
//       }
// ------------------------Custom Theme in table------------------------------------
      const theme = createMuiTheme({
        palette: {
          secondary: {
            main: "#3282b8",
          }
        },
      });


    return(
        <>
          <div className="container-fluid message_body ">
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb Breadcrumb align-items-center">
                    <li className="breadcrumb-item"><Link to="/bulletin">Home</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">Messages</li>
                </ol>
             </nav>

             <Heading name="Messages" />
             <div className="container mb-5">

                <div className="row my-4">
                    <div className="col-12 col-md-11 mx-auto d-flex justify-content-end btn_compose">
                        <Link to="/compose" className="btn btn-primary btn_link">Compose <Add fontSize="default" /></Link>
                    </div>
                </div>
                    <div className="row">
                        <div className="col-12 col-md-11 mx-auto">
                            
                    <MuiThemeProvider theme={theme}>
                        <MaterialTable
                          icons = {tableIcons}
                          title=""
                          style={{background:"#f8f9fa"}}
                          columns={columns}
                          data={datas}
                          components={{ Row: props => ( <MTableBodyRow id="mtable_Row" {...props} />)}}
                          options={{
                            actionsColumnIndex: -1,
                            draggable:false,
                            emptyRowsWhenPaging:false,
                            pageSize:10,
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
                            // --------------------Edit Icon-------------------
                            // rowData => ({
                            //   icon : Edit,
                            //   tooltip: 'Edit User',
                            //   onClick: (event, rowData) => history.push("/edit-role/" + rowData[0].role_id),
                            //   hidden: rowData.length > 1
                            // }),
                            // --------------------Delete Icon-------------------
                            // rowData => ({
                            //   icon: DeleteOutline,
                            //   tooltip: 'Delete User',
                            //   onClick: (event, rowData) => {
                            //       rowData.map((data)=>{
                            //         onDelete(data.role_id)
                            //   })
                            //   loadMessages();
                            //   toast.info(rowData.length +" Row(s) Deleted!")
                            //   }
                            // }),
                            // --------------------Export Icon-------------------
                            {
                              position: "toolbarOnSelect",
                              icon: SaveAlt,
                              tooltip: 'Export selected Roles in CSV format!',
                              onClick: (e, rowData) => {
                                const fileName = "Role_data";
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
                        />
                        </MuiThemeProvider>

                        </div>
                    </div>
            
            </div>


          </div>
         

        </>
    )
}
export default Message_comp;