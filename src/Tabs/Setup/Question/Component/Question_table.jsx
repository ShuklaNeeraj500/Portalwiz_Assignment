import React ,{useEffect , useState, forwardRef} from "react"
import {Link, useHistory} from "react-router-dom"
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
import Edit from '@material-ui/icons/Edit';
import View from '@material-ui/icons/Visibility';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';

import axios from "axios";


const Question_table = ()=>{
    const history = useHistory();
    const [datas , setData]= useState([]);

    const[state ,setState]= useState({
        uname: sessionStorage.getItem("username"),
    })

    const Column = [
      { title: 'ID', field: 'ques_id', sorting:false, searchable:false },
      { title: 'Level', field: 'level_name' },
      { title: 'Category', field: 'category_name' },
      { title: 'I', field: 'ques_num1' },
      { title: 'II', field: 'ques_num2' },
      { title: 'III', field: 'ques_num3' },
      { title: 'IV', field: 'ques_num4' },
      { title: 'V', field: 'ques_num5' },
      { title: 'VI', field: 'ques_num6' },
      { title: 'VII', field: 'ques_num7' },
      { title: 'Answer', field: 'answer' },
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

// ------------------------Fetching Student table's data-------------------------------------
    useEffect(() => {
        loadQuestions();
       }, []);
 
    const loadQuestions =  () =>{
        const obj = { uname:state.uname}
        axios.post("http://sandbox.portalwiz.com/php/questions/questions.php", obj)
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
// ------------------------Deleting Student table's data-------------------------------------

    const onDelete=(id)=> {
        //alert(id);
      const delobj = {
        id: id,
        uname: state.uname,
        tokenId: 123,
      };
        axios.post("http://sandbox.portalwiz.com/php/questions/delete_questions.php", delobj)
            .then((res) => console.log(res))
            .then((res) => loadQuestions())
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
            <li className="breadcrumb-item active" aria-current="page">Question List</li>
        </ol>
    </nav> 

    <Heading name="Question List" />

        <div className="container">
            <div className="row my-4">
                <div className="col-11 mx-auto d-flex justify-content-end">
                    <Link to="/add-question" className="btn btn-primary btn_link">Add Question<Add /></Link>
                </div>
            </div>
            
        <div className="row">
            <div className="col-11 mx-auto mb-5">
                <MuiThemeProvider theme={theme}>
                        <MaterialTable
                          icons = {tableIcons}
                          title=""
                          style={{background:"#f8f9fa"}}
                          columns={columns}
                          data={datas}
                          // styling the Rows of table using mtable_row id in css file
                          components={{ Row: props => ( <MTableBodyRow id="mtable_Row" {...props} /> ) }} 
                          options={{
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
                              boxShadow:"5px .1px 5px 0px "
                             },
                          }}
                          actions={[
                            // // ---------------View Icon--------------------
                            // rowData => ({
                            //   icon : View,
                            //   tooltip: 'View Student',
                            //   onClick: (event, rowData) => history.push("/view-student/" + rowData[0].stud_id),
                            //   hidden: rowData.length > 1
                            // }),
                            // ---------------Edit Icon--------------------
                            rowData => ({
                              icon : Edit,
                              tooltip: 'Edit',
                              onClick: (event, rowData) => history.push("/edit-question/" + rowData[0].ques_id),
                              hidden: rowData.length > 1
                            }),
                            // ---------------Delete Icon--------------------
                            rowData => ({
                              icon: DeleteOutline,
                              tooltip: 'Delete',
                              onClick: (event, rowData) => {
                                  rowData.map((data)=>{
                                    onDelete(data.ques_id)
                              })
                              loadQuestions();
                              toast.info(rowData.length +" Row(s) Deleted!")
                              }
                            }),
                            // ---------------Export Icon--------------------
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
                          onRowClick={
                            (event,rowData)=>{
                              console.log(rowData)
                              history.push("/view-question/" + rowData.ques_id)
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
export default Question_table



 
