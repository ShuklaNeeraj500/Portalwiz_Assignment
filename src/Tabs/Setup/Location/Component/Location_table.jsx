import React ,{useState , useEffect, forwardRef} from "react"
import {Link , useHistory} from "react-router-dom"
import { CsvBuilder } from "filefy";
import Heading from "../../../../Common-To-All/Heading"
import { createMuiTheme , MuiThemeProvider } from '@material-ui/core/styles'
import {toast} from "react-toastify"
import MaterialTable , {MTableBodyRow}  from "material-table"

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

const Location_table = ()=>{
    const history = useHistory();

    const[datas , setData]= useState([]);
    const[state ,setState]= useState({
        uname: sessionStorage.getItem("username"),
    })

    const Column = [
      { title: 'ID', field: 'location_id',sorting:false, searchable:false },
      { title: 'Location Name', field: 'name' },
      { title: 'Address Line 1', field: 'addressline1' },
      { title: 'Address Line 2', field: 'addressline2' },
      { title: 'City', field: 'city' },
      { title: "Location Manager", field: 'manager_name' },
      { title: "Location Manager's contact", field: 'phone' },
   
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

// ------------------------Fetching Location table's data-------------------------------------
    useEffect(() => {
        loadLocations();
      }, []);

      const loadLocations = async () =>{
        const obj = { uname:state.uname}
       await axios.post("http://sandbox.portalwiz.com/php/locations/locations.php", obj)
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
// ------------------------Deleting Location table's data-------------------------------------

      const onDelete =(id) =>{
        const delobj = {
          id: id,
          uname: state.uname,
          tokenId: 123,
        };
        axios.post("http://sandbox.portalwiz.com/php/locations/delete_location.php", delobj)
          .then((res) => console.log(res))
          .then((res) => loadLocations())
          .catch((err) => console.log(err));
      }
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
    <div className="container-fluid">
    <nav aria-label="breadcrumb">
        <ol className="breadcrumb Breadcrumb align-items-center">
            <li className="breadcrumb-item"><Link to="/bulletin">Home</Link></li>
            <li className="breadcrumb-item"><strong>Setup</strong></li>
            <li className="breadcrumb-item active" aria-current="page">Location List</li>
        </ol>
    </nav> 

    <Heading name="Location List" />

        <div className="container">
            <div className="row my-4">
                <div className="col-11 mx-auto d-flex justify-content-end">
                    <Link to="/add-location" className="btn btn-primary btn_link">Add Location <Add /></Link>
                </div>
            </div>
                <div className="row">
                   <div className="col-11 mx-auto">

                        <MuiThemeProvider theme={theme}>
                        <MaterialTable
                          icons = {tableIcons}
                          title=""
                          style={{background:"#f8f9fa"}}
                          columns={columns}
                          data={datas}
                          components={{ Row: props => ( <MTableBodyRow id="mtable_Row" {...props} />  )}} 
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
                            // // ---------------View Icon--------------------
                            // rowData => ({
                            //   icon : View,
                            //   tooltip: 'View Location',
                            //   onClick: (event, rowData) => history.push("/view-location/" + rowData[0].location_id),
                            //   hidden: rowData.length > 1
                            // }),
                            // -----------------Edit Icon----------------
                            rowData => ({
                              icon : Edit,
                              tooltip: 'Edit Location',
                              onClick: (event, rowData) => history.push("/edit-location/" + rowData[0].location_id),
                              hidden: rowData.length > 1
                            }),
                            // -----------------Delete Icon----------------
                            rowData => ({
                              icon: DeleteOutline,
                              tooltip: 'Delete Location',
                              onClick: (event, rowData) => {
                                  rowData.map((data)=>{
                                    onDelete(data.location_id)
                              })
                              loadLocations();
                              toast.info(rowData.length  +" Row(s) Deleted!")
                              }
                            }),
                            // -----------------Export Icon----------------
                            {
                              position: "toolbarOnSelect",
                              icon: SaveAlt,
                              tooltip: 'Export selected Locations in CSV format!',
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
                          onRowClick={
                              (event,rowData)=>{
                                console.log(rowData)
                                history.push("/view-location/" + rowData.location_id)
                              }
                          }
                        />
                        </MuiThemeProvider>
                   </div>
                </div>
            
        </div>
    </div>

    </>
   )

}
export default Location_table



 
