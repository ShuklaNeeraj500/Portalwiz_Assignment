import React ,{useEffect , useState, forwardRef} from "react"
import {Link, useHistory , useParams} from "react-router-dom"
import { CsvBuilder } from "filefy";
import Heading from "../../../../Common-To-All/Heading";
import {toast} from "react-toastify"
import { createMuiTheme , MuiThemeProvider} from '@material-ui/core/styles'
import MaterialTable , {MTableBodyRow}  from "material-table"

import Add from '@material-ui/icons/Add';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import VisibilityIcon from '@material-ui/icons/Visibility';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';

import axios from "axios";

const Teacher_table = ()=>{

    const { id } = useParams();
    const history = useHistory();
    const [data , setData]= useState([]);
    const[state ,setState]= useState({
        uname: sessionStorage.getItem("username"),
    })

    const Column = [
      { title: "ID", render: rowData => rowData.tableData.id + 1 , sorting:false, searchable:false},
      { title: 'First Name', field: 'fname' },
      { title: 'Last Name', field: 'lname' },
      { title: 'Email', field: 'email', sorting:false },
      { title: 'Status', field: 'active', lookup: { 1: 'Active', 0: 'Inactive' }, sorting:false},
      { title: 'Location', field: 'location_name' },
      { title: 'Batch', field: 'batch_name' },
      { title: 'Level', field: 'level_name' },
    //   { title: 'Join Date', field: 'join_date'}
    ]

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

// ------------------------Fetching Teacher table's data-------------------------------------
    useEffect(() => {
        loadHistory();
       }, []);
 
    const loadHistory =  () =>{
        const obj = { uname:state.uname , id :id }
        axios.post("http://sandbox.portalwiz.com/php/teachers/teacher_history.php", obj)
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
// ------------------------Deleting Teacher table's data-------------------------------------

//     const onDelete=(id)=> {
//       const delobj = {
//         id: id,
//         uname: state.uname,
//         tokenId: 123,
//       };
//         axios.post("http://sandbox.portalwiz.com/php/teachers/delete_teacher.php", delobj)
//             .then((res) => console.log(res))
//             .catch((err) => console.log(err));
//     }
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
    <div className="container-fluid ">
    <nav aria-label="breadcrumb">
        <ol className="breadcrumb Breadcrumb align-items-center">
            <li className="breadcrumb-item"><Link to="/bulletin">Home</Link></li>
            <li className="breadcrumb-item"><strong>Setup</strong></li>
            <li className="breadcrumb-item" ><Link to="/teacher">Teachers list</Link></li>
            <li className="breadcrumb-item"><Link to={"/edit-teacher/" + id}>Edit Teacher</Link></li>
            <li className="breadcrumb-item active" aria-current="page">History Log</li>
        </ol>
    </nav> 
       <Heading name="History log" />

        <div className="container mb-5">
            {/* <div className="row my-4">
                <div className="col-12 mx-auto d-flex justify-content-end ">
                    <Link to="/add-teacher" className="btn btn-primary btn_link">Add Teacher <Add /></Link>
                </div>
            </div> */}
                <div className="row">
                   <div className="col-12 mx-auto">

                   <MuiThemeProvider theme={theme}>
                        <MaterialTable
                          icons = {tableIcons}
                          title=""
                          style={{background:"#f8f9fa"}}
                          columns={columns}
                          data={data}
                          // styling the Rows of table using mtable_row id in css file
                          components={{ Row: props => ( <MTableBodyRow id="mtable_Row" {...props} />  ) }}
                          options={{
                            draggable:false,
                            emptyRowsWhenPaging:false,
                            pageSize:10,
                            pageSizeOptions: [10, 25, 50, 100, 200],
                            showFirstLastPageButtons: false,
                            actionsColumnIndex:-1,
                            exportButton:true,
                            exportAllData:true,
                            headerStyle: {
                              fontWeight:"bolder",
                              background:"#f8f9fa",
                              boxShadow:"5px .1px 5px 0px "
                             },
                          }}
                          actions={[
                            // ---------------Edit Icon---------------------
                            rowData => ({
                              icon : VisibilityIcon,
                              tooltip: 'Edit',
                              onClick: (event, rowData) => history.push("/tch-history-data/" + rowData.teacher_history_id),
                              hidden: rowData.length > 1
                            }),
                            // ---------------Delete Icon---------------------
                            // rowData => ({
                            //   icon: DeleteOutline,
                            //   tooltip: 'Delete Teacher(s)',
                            //   onClick: (event, rowData) => {
                            //       rowData.map((data)=>{
                            //         onDelete(data.teacher_id)
                            //   })
                            //   loadHistory();
                            //   toast.info(rowData.length + " Row(s) Deleted!")
                            //   }
                            // }),
                            // ---------------Export Icon---------------------
                            {
                              position: "toolbarOnSelect",
                              icon: SaveAlt,
                              tooltip: 'Export selected data in CSV format!',
                              onClick: (e, rowData) => {
                                const fileName = "data";
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
export default Teacher_table



 
