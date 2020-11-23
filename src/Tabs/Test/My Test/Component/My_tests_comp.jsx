import React, { useState , useEffect } from "react";

import {toast} from "react-toastify";
import Countdown  from 'react-countdown';
// import Enter_Answer_Tablecell from "./Enter_Answer_Tablecell"
import {Link} from "react-router-dom";
import Heading from "../../../../Common-To-All/Heading";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import axios from "axios";

const My_tests_comp =()=>{

   
    const [head_id, setHead_id] = useState({
        table1:[], table2:[], table3:[], table4:[], table5:[],
    });

    const [answer, setAnswer] = useState({
        answer1:[], answer2:[], answer3:[], answer4:[], answer5:[],
    });

    const [data, setData] = useState({
    main_arr1:[], main_arr2:[], main_arr3:[], main_arr4:[], main_arr5:[],
    });

    const [field, setField] = useState({
        uname: sessionStorage.getItem("username"),
        level_name:"",
        val1 :"", val2:"", val3:"", val4:"", val5:"", val6:"", val7:"", val8:"", val9:"", val10:"", val11:"", val12:"", val13:"", val14:"", val15:"", val16:"", val17:"", val18:"", val19:"", val20:"", val21:"", val22:"", val23:"", val24:"", val25:"",
        val26:"", val27:"", val28:"", val29:"", val30:"", val31:"", val32:"", val33:"", val34:"", val35:"", val36:"", val37:"", val38:"", val39:"", val40:"", val41:"", val42:"", val43:"", val44:"", val45:"", val46:"", val47:"", val48:"", val49:"", val50:"",
        val51:"", val52:"", val53:"", val54:"", val55:"", val56:"", val57:"", val58:"", val59:"", val60:"", val61:"", val62:"", val63:"", val64:"", val65:"", val66:"", val67:"", val68:"", val69:"", val70:"", val71:"", val72:"", val73:"", val74:"", val75:"",
        val76:"", val77:"", val78:"", val79:"", val80:"", val81:"", val82:"", val83:"", val84:"", val85:"", val86:"", val87:"", val88:"", val89:"", val90:"", val91:"", val92:"", val93:"", val94:"", val95:"", val96:"", val97:"", val98:"", val99:"", val100:"",
        val101:"", val102:"", val103:"", val104:"", val105:"", val106:"", val107:"", val108:"", val109:"", val110:"", val111:"", val112:"", val113:"", val114:"", val115:"", val116:"", val117:"", val118:"", val119:"", val120:"", val121:"", val122:"", val123:"", val124:"", val125:"",
    })
    const [lev , setLev] = useState([]);

    const [value , setValue] = useState(false)
    const [show , setShow] = useState(false);
    const [result, setResult] = useState(false);
    const [date , setDate] = useState()

useEffect(() => {
    loadLevel();
   }, []);


// -----------This function will Fetch all the Existing Levels--------------------
const loadLevel = async () => {
    const obj = {
      uname: sessionStorage.getItem("username"),
    };

    await axios.post("http://sandbox.portalwiz.com/php/levels.php", obj)
    .then( (response) => {
      let a = JSON.parse(response.data.data);
    //   console.log(a);
      setLev(a);
    })
    .catch( (err) => console.log(err) );
    }


// ------------------------Fetching Question table's data-------------------------------------
const loadQuestions =  () =>{
    var Table1_id=[], answer1=[], Table1_arr1 = [], Table1_arr2= [], Table1_arr3= [] ,
        Table2_id=[], answer2=[], Table2_arr1 = [], Table2_arr2= [], Table2_arr3= [] ,Table2_arr4=[],
        Table3_id=[], answer3=[], Table3_arr1 = [], Table3_arr2= [], Table3_arr3= [] ,Table3_arr4=[],
        Table4_id=[], answer4=[], Table4_arr1 = [], Table4_arr2= [], Table4_arr3= [] ,Table4_arr4=[],
        Table5_id=[], answer5=[], Table5_arr1 = [], Table5_arr2= [], Table5_arr3= [] ,Table5_arr4=[];

    var Table1_arr =[], Table2_arr =[], Table3_arr =[], Table4_arr =[], Table5_arr =[] ;
    var arr1=[], arr2=[], arr3=[], arr4=[], arr5=[];

    const obj = { uname:sessionStorage.getItem("username"),
                  level_name:field.level_name,
                }
    axios.post("http://sandbox.portalwiz.com/php/questions/questions_level.php", obj)
    .then( (response) => {
    console.log(response)

    if(response.data.message !== "No Data"){
        var a = JSON.parse(response.data.data);
        console.log(a);

        Table1_arr.push((a.splice(0,25)));
        Table2_arr.push((a.splice(0,25)));
        Table3_arr.push((a.splice(0,25)));
        Table4_arr.push((a.splice(0,25)));
        Table5_arr.push((a.splice(0,25)));

    // console.log(Table1_arr);console.log(Table2_arr);console.log(Table3_arr);console.log(Table4_arr);console.log(Table5_arr);

    //Storing header values for the 5 tables
        Table1_id.push(Table1_arr.map((x)=>x.map(x=>x.ques_id)))
        Table2_id.push(Table2_arr.map((x)=>x.map(x=>x.ques_id)))
        Table3_id.push(Table3_arr.map((x)=>x.map(x=>x.ques_id)))
        Table4_id.push(Table4_arr.map((x)=>x.map(x=>x.ques_id)))
        Table5_id.push(Table5_arr.map((x)=>x.map(x=>x.ques_id)))

    setHead_id({
        table1:Table1_id, table2:Table2_id, table3:Table3_id, table4:Table4_id, table5:Table5_id,
    })

     //Storing Answer of each questions for the 5 tables
        answer1.push(Table1_arr.map((x)=>x.map(x=>x.answer)))
        answer2.push(Table2_arr.map((x)=>x.map(x=>x.answer)))
        answer3.push(Table3_arr.map((x)=>x.map(x=>x.answer)))
        answer4.push(Table4_arr.map((x)=>x.map(x=>x.answer)))
        answer5.push(Table5_arr.map((x)=>x.map(x=>x.answer)))

    setAnswer({
        answer1:answer1 ,answer2:answer2 ,answer3:answer3 ,answer4:answer4 ,answer5:answer5 ,
    })


/*----------------------------------------------------------------------*/
    // Storing Values for table 1
        Table1_arr1.push(Table1_arr.map((x)=>x.map(x=>x.ques_num1)))
        Table1_arr2.push(Table1_arr.map((x)=>x.map(x=>x.ques_num2)))
        Table1_arr3.push(Table1_arr.map((x)=>x.map(x=>x.ques_num3)))

    // Now storing the above 3 arrays into One array named "arr1" 
       arr1 = [...Table1_arr1 ,...Table1_arr2 ,...Table1_arr3];
        console.log(arr1)
/*----------------------------------------------------------------------*/

    // Storing Values for table 2
        Table2_arr1.push(Table2_arr.map((x)=>x.map(x=>x.ques_num1)))    
        Table2_arr2.push(Table2_arr.map((x)=>x.map(x=>x.ques_num2)))
        Table2_arr3.push(Table2_arr.map((x)=>x.map(x=>x.ques_num3)))
        Table2_arr4.push(Table2_arr.map((x)=>x.map(x=>x.ques_num4)))

    // Now storing the above 4 arrays into One array named "arr2" 
        arr2 = [...Table2_arr1 ,...Table2_arr2 ,...Table2_arr3, ...Table2_arr4];
/*----------------------------------------------------------------------*/
        // Storing Values for table 3
        Table3_arr1.push(Table3_arr.map((x)=>x.map(x=>x.ques_num1)))    
        Table3_arr2.push(Table3_arr.map((x)=>x.map(x=>x.ques_num2)))
        Table3_arr3.push(Table3_arr.map((x)=>x.map(x=>x.ques_num3)))
        Table3_arr4.push(Table3_arr.map((x)=>x.map(x=>x.ques_num4)))

    // Now storing the above 4 arrays into One array named "arr3" 
        arr3 = [...Table3_arr1 ,...Table3_arr2 ,...Table3_arr3, ...Table3_arr4];
/*----------------------------------------------------------------------*/
         // Storing Values for table 4
         Table4_arr1.push(Table4_arr.map((x)=>x.map(x=>x.ques_num1)))    
         Table4_arr2.push(Table4_arr.map((x)=>x.map(x=>x.ques_num2)))
         Table4_arr3.push(Table4_arr.map((x)=>x.map(x=>x.ques_num3)))
         Table4_arr4.push(Table4_arr.map((x)=>x.map(x=>x.ques_num4)))
 
     // Now storing the above 4 arrays into One array named "arr3" 
         arr4 = [...Table4_arr1 ,...Table4_arr2 ,...Table4_arr3, ...Table4_arr4];
/*----------------------------------------------------------------------*/
         // Storing Values for table 4
         Table5_arr1.push(Table5_arr.map((x)=>x.map(x=>x.ques_num1)))    
         Table5_arr2.push(Table5_arr.map((x)=>x.map(x=>x.ques_num2)))
         Table5_arr3.push(Table5_arr.map((x)=>x.map(x=>x.ques_num3)))
         Table5_arr4.push(Table5_arr.map((x)=>x.map(x=>x.ques_num4)))
 
     // Now storing the above 4 arrays into One array named "arr3" 
         arr5 = [...Table5_arr1 ,...Table5_arr2 ,...Table5_arr3, ...Table5_arr4];
/*----------------------------------------------------------------------*/
        setData({
            main_arr1:arr1, main_arr2:arr2, main_arr3:arr3, main_arr4:arr4, main_arr5:arr5,
        })
        
    //    console.log(data)
    //    console.log(head_id)
    }else{
        // setData([]);
    }
    })
    .catch( (err) => console.log(err) );
}

// -------Function to load countdown Timer -------------------------
const timer_style ={
        time:{border:"2px solid #174873" , letterSpacing:"2px", fontWeight:"600" , color:"#174873" ,
        width:"6.5em" ,height:"2em" } ,
        time_over :{backgroundColor:"#174873" , color:"#fff", height:"100%", width:"100%" , textAlign:"center"}
    }

const Timer =()=>{
    return(
        <div className="rounded d-flex justify-content-center align-items-center" style={timer_style.time}>     
        <Countdown 
            date ={date}
            renderer={renderer} 
            onComplete={AutoSubmit}
        />
        </div>
    )}
    
// this function will render the countdown----------------- 
const renderer = ({minutes, seconds }) => {  return <span >{minutes}:{seconds}</span>; };

// This function runs when The countdown timer reaches zero and makes the test submit automatically
const AutoSubmit =()=>{
   
    const obj = {
      uname:sessionStorage.getItem("username"),
      level_name:field.level_name,
        val1 :field.val1, val2:field.val2, val3:field.val3, val4:field.val4, val5:field.val5, val6:field.val6, val7:field.val7, val8:field.val8, val9:field.val9, val10:field.val10, val11:field.val11, val12:field.val12, val13:field.val13, val14:field.val14, val15:field.val15, val16:field.val16, val17:field.val17, val18:field.val18, val19:field.val19, val20:field.val20, val21:field.val21, val22:field.val22, val23:field.val23, val24:field.val24, val25:field.val25,
        val26:field.val26, val27:field.val27, val28:field.val28, val29:field.val29, val30:field.val30, val31:field.val31, val32:field.val32, val33:field.val33, val34:field.val34, val35:field.val35, val36:field.val36, val37:field.val37, val38:field.val38, val39:field.val39, val40:field.val40, val41:field.val41, val42:field.val42, val43:field.val43, val44:field.val44, val45:field.val45, val46:field.val46, val47:field.val47, val48:field.val48, val49:field.val49, val50:field.val50,
        val51:field.val51, val52:field.val52, val53:field.val53, val54:field.val54, val55:field.val55, val56:field.val56, val57:field.val57, val58:field.val58, val59:field.val59, val60:field.val60, val61:field.val61, val62:field.val62, val63:field.val63, val64:field.val64, val65:field.val65, val66:field.val66, val67:field.val67, val68:field.val68, val69:field.val69, val70:field.val70, val71:field.val71, val72:field.val72, val73:field.val73, val74:field.val74, val75:field.val75,
        val76:field.val76, val77:field.val77, val78:field.val78, val79:field.val79, val80:field.val80, val81:field.val81, val82:field.val82, val83:field.val83, val84:field.val84, val85:field.val85, val86:field.val86, val87:field.val87, val88:field.val88, val89:field.val89, val90:field.val90, val91:field.val91, val92:field.val92, val93:field.val93, val94:field.val94, val95:field.val95, val96:field.val96, val97:field.val97, val98:field.val98, val99:field.val99, val100:field.val100,
        val101:field.val101, val102:field.val102, val103:field.val103, val104:field.val104, val105:field.val105, val106:field.val106, val107:field.val107, val108:field.val108, val109:field.val109, val110:field.val110, val111:field.val111, val112:field.val112, val113:field.val113, val114:field.val114, val115:field.val115, val116:field.val116, val117:field.val117, val118:field.val118, val119:field.val119, val120:field.val120, val121:field.val121, val122:field.val122, val123:field.val123, val123:field.val123, val125:field.val125,
    }
    console.log(obj);
    axios.post("http://sandbox.portalwiz.com/php/questions/match_level_ans.php", obj)
      .then( (res) => {console.log(res) 
          if(res.data.message === "Correct Answer"){
              toast.error("Time over, test submitted successfully")
              let a =res.data.count;
              setValue(a)
            //   setField({
            //       uname: sessionStorage.getItem("username"),
            //       level_name:"",
            //       val1 :"", val2:"", val3:"", val4:"", val5:"", val6:"", val7:"", val8:"", val9:"", val10:"", val11:"", val12:"", val13:"", val14:"", val15:"", val16:"", val17:"", val18:"", val19:"", val20:"", val21:"", val22:"", val23:"", val24:"", val25:"",
            //       val26:"", val27:"", val28:"", val29:"", val30:"", val31:"", val32:"", val33:"", val34:"", val35:"", val36:"", val37:"", val38:"", val39:"", val40:"", val41:"", val42:"", val43:"", val44:"", val45:"", val46:"", val47:"", val48:"", val49:"", val50:"",
            //       val51:"", val52:"", val53:"", val54:"", val55:"", val56:"", val57:"", val58:"", val59:"", val60:"", val61:"", val62:"", val63:"", val64:"", val65:"", val66:"", val67:"", val68:"", val69:"", val70:"", val71:"", val72:"", val73:"", val74:"", val75:"",
            //       val76:"", val77:"", val78:"", val79:"", val80:"", val81:"", val82:"", val83:"", val84:"", val85:"", val86:"", val87:"", val88:"", val89:"", val90:"", val91:"", val92:"", val93:"", val94:"", val95:"", val96:"", val97:"", val98:"", val99:"", val100:"",
            //       val101:"", val102:"", val103:"", val104:"", val105:"", val106:"", val107:"", val108:"", val109:"", val110:"", val111:"", val112:"", val113:"", val114:"", val115:"", val116:"", val117:"", val118:"", val119:"", val120:"", val121:"", val122:"", val123:"", val124:"", val125:"", 
            //     })
              setResult(true);
              setShow(false);
          }else{
              alert("Test not submited")
          }
      })
      .catch( (err) => console.log(err) );
   }

//  This function is used to make normal Inputs into Controlled inputs and storing values into state variables
    const onChange = (e)=>{
        const input = e.target;
        const name = input.name;
        const value =  input.value;
        setField((preValue)=>{
            return{
                ...preValue ,
                [name] :value
            }})}

// This function runs when the Submit button is Clicked
     const onSubmitTest =(e)=>{
      e.preventDefault();
      const obj = {
        uname:sessionStorage.getItem("username"),
        level_name:field.level_name,
        val1 :field.val1, val2:field.val2, val3:field.val3, val4:field.val4, val5:field.val5, val6:field.val6, val7:field.val7, val8:field.val8, val9:field.val9, val10:field.val10, val11:field.val11, val12:field.val12, val13:field.val13, val14:field.val14, val15:field.val15, val16:field.val16, val17:field.val17, val18:field.val18, val19:field.val19, val20:field.val20, val21:field.val21, val22:field.val22, val23:field.val23, val24:field.val24, val25:field.val25,
        val26:field.val26, val27:field.val27, val28:field.val28, val29:field.val29, val30:field.val30, val31:field.val31, val32:field.val32, val33:field.val33, val34:field.val34, val35:field.val35, val36:field.val36, val37:field.val37, val38:field.val38, val39:field.val39, val40:field.val40, val41:field.val41, val42:field.val42, val43:field.val43, val44:field.val44, val45:field.val45, val46:field.val46, val47:field.val47, val48:field.val48, val49:field.val49, val50:field.val50,
        val51:field.val51, val52:field.val52, val53:field.val53, val54:field.val54, val55:field.val55, val56:field.val56, val57:field.val57, val58:field.val58, val59:field.val59, val60:field.val60, val61:field.val61, val62:field.val62, val63:field.val63, val64:field.val64, val65:field.val65, val66:field.val66, val67:field.val67, val68:field.val68, val69:field.val69, val70:field.val70, val71:field.val71, val72:field.val72, val73:field.val73, val74:field.val74, val75:field.val75,
        val76:field.val76, val77:field.val77, val78:field.val78, val79:field.val79, val80:field.val80, val81:field.val81, val82:field.val82, val83:field.val83, val84:field.val84, val85:field.val85, val86:field.val86, val87:field.val87, val88:field.val88, val89:field.val89, val90:field.val90, val91:field.val91, val92:field.val92, val93:field.val93, val94:field.val94, val95:field.val95, val96:field.val96, val97:field.val97, val98:field.val98, val99:field.val99, val100:field.val100,
        val101:field.val101, val102:field.val102, val103:field.val103, val104:field.val104, val105:field.val105, val106:field.val106, val107:field.val107, val108:field.val108, val109:field.val109, val110:field.val110, val111:field.val111, val112:field.val112, val113:field.val113, val114:field.val114, val115:field.val115, val116:field.val116, val117:field.val117, val118:field.val118, val119:field.val119, val120:field.val120, val121:field.val121, val122:field.val122, val123:field.val123, val123:field.val123, val125:field.val125,
      }
      console.log(obj);
      axios.post("http://sandbox.portalwiz.com/php/questions/match_level_ans.php", obj)
        .then( (res) => {console.log(res) 
            if(res.data.message === "Correct Answer"){
                toast.success("Test Submitted")
                let a =res.data.count;
                setValue(a)
                // setField({
                //     uname: sessionStorage.getItem("username"),
                //     level_name:"",
                //     val1 :"", val2:"", val3:"", val4:"", val5:"", val6:"", val7:"", val8:"", val9:"", val10:"", val11:"", val12:"", val13:"", val14:"", val15:"", val16:"", val17:"", val18:"", val19:"", val20:"", val21:"", val22:"", val23:"", val24:"", val25:"",
                //     val26:"", val27:"", val28:"", val29:"", val30:"", val31:"", val32:"", val33:"", val34:"", val35:"", val36:"", val37:"", val38:"", val39:"", val40:"", val41:"", val42:"", val43:"", val44:"", val45:"", val46:"", val47:"", val48:"", val49:"", val50:"",
                //     val51:"", val52:"", val53:"", val54:"", val55:"", val56:"", val57:"", val58:"", val59:"", val60:"", val61:"", val62:"", val63:"", val64:"", val65:"", val66:"", val67:"", val68:"", val69:"", val70:"", val71:"", val72:"", val73:"", val74:"", val75:"",
                //     val76:"", val77:"", val78:"", val79:"", val80:"", val81:"", val82:"", val83:"", val84:"", val85:"", val86:"", val87:"", val88:"", val89:"", val90:"", val91:"", val92:"", val93:"", val94:"", val95:"", val96:"", val97:"", val98:"", val99:"", val100:"",
                //     val101:"", val102:"", val103:"", val104:"", val105:"", val106:"", val107:"", val108:"", val109:"", val110:"", val111:"", val112:"", val113:"", val114:"", val115:"", val116:"", val117:"", val118:"", val119:"", val120:"", val121:"", val122:"", val123:"", val124:"", val125:"",
                //   })
                setResult(true);
                setShow(false);
            }else{
                alert("Test not submited")
            }
        })
        .catch( (err) => console.log(err) );
     }

// This function will show the Result in place of Submit button on test Submit -----
    function Show_result(){
        return(
            <div className="row my-4">
                <div className="col-12 mx-auto d-flex justify-content-center bg-light ">
                    <h6>{"You have entered "+value+" correct answers"}</h6>
                </div>
            </div>
        )
    }

//  Creating Styles form Answer input fields and result Input fields 
     const style ={
         ansField : { width:"3em", textAlign:"center"},

     }

// Function will show generated test in table and make the submit button appear  
     const generateTest = ()=>{
        setField((preValue)=>{ 
            return{
                ...preValue , uname: sessionStorage.getItem("username"),
                val1 :"", val2:"", val3:"", val4:"", val5:"", val6:"", val7:"", val8:"", val9:"", val10:"", val11:"", val12:"", val13:"", val14:"", val15:"", val16:"", val17:"", val18:"", val19:"", val20:"", val21:"", val22:"", val23:"", val24:"", val25:"",
                val26:"", val27:"", val28:"", val29:"", val30:"", val31:"", val32:"", val33:"", val34:"", val35:"", val36:"", val37:"", val38:"", val39:"", val40:"", val41:"", val42:"", val43:"", val44:"", val45:"", val46:"", val47:"", val48:"", val49:"", val50:"",
                val51:"", val52:"", val53:"", val54:"", val55:"", val56:"", val57:"", val58:"", val59:"", val60:"", val61:"", val62:"", val63:"", val64:"", val65:"", val66:"", val67:"", val68:"", val69:"", val70:"", val71:"", val72:"", val73:"", val74:"", val75:"",
                val76:"", val77:"", val78:"", val79:"", val80:"", val81:"", val82:"", val83:"", val84:"", val85:"", val86:"", val87:"", val88:"", val89:"", val90:"", val91:"", val92:"", val93:"", val94:"", val95:"", val96:"", val97:"", val98:"", val99:"", val100:"",
                val101:"", val102:"", val103:"", val104:"", val105:"", val106:"", val107:"", val108:"", val109:"", val110:"", val111:"", val112:"", val113:"", val114:"", val115:"", val116:"", val117:"", val118:"", val119:"", val120:"", val121:"", val122:"", val123:"", val124:"", val125:"",
                }
            })
        setDate((Date.now()+ 1500000))
        
        loadQuestions();
        setResult(false);
        setShow(true);
        toast.success("Test Generated successfully")
     }

return(
    <>
    <div className="container-fluid  ">
        <nav aria-label="breadcrumb">
        <ol className="breadcrumb Breadcrumb align-items-center">
            <li className="breadcrumb-item"><Link to="/bulletin">Home</Link></li>
                <li className="breadcrumb-item"><strong>Tests</strong></li>
                <li className="breadcrumb-item active" aria-current="page">My Tests</li>
            </ol>
        </nav> 

        <Heading name={ show ? ("Test - " + field.level_name ):("My Tests")}/>

        <div className="container">

        <form onSubmit={onSubmitTest}>

            <div className="row my-4"> 
                <div className="col-12 mx-auto d-flex justify-content-end">
                    {show? <Timer />: <> <span className="mr-3"> 
                                            <select className="custom-select form-control" 
                                                name="level_name" onChange={onChange} 
                                                value={field.level_name}>
                                                <option value="" >Select Level</option>
                                                {lev.map((data , i)=>(<option key={i} value={data.level_name}>{data.level_name}</option>)) } 
                                            </select>
                                        </span>
                        <button onClick={generateTest} disabled={!field.level_name} className="btn btn-primary btn_link">Generate Test </button>
                        </>}
                </div>
            </div>

            <div className="row">
                <div className="col-12 mx-auto ">

            <TableContainer component={Paper}>
                <Table>
                    <TableHead style={{ fontWeight:"bolder", background:"#f8f9fa", letterSpacing:"1px", boxShadow:"5px .1px 5px 0px "}}>
                        <TableRow> {head_id.table1.map(x=>x[0].map(x=> <TableCell className="text-center">{x}</TableCell> ))} </TableRow>
                    </TableHead>
                <TableBody>
        
                {show && data.main_arr1.map(x=> x.map(x =>{
                    return(
                        <TableRow >
                                {x.map(x=><TableCell className="text-center">{x}</TableCell>)} 
                        </TableRow>
                    )}))}
                            
                    <TableRow style={{background:"#f8f9fa"}}> 
                
                        <TableCell className="text-center"><input  type="number" onChange={onChange} name="val1" style={style.ansField} value={field.val1} /></TableCell>
                        <TableCell className="text-center"><input  type="number" onChange={onChange} name="val2" style={style.ansField} value={field.val2} /></TableCell>
                        <TableCell className="text-center"><input  type="number" onChange={onChange} name="val3" style={style.ansField} value={field.val3} /></TableCell>
                        <TableCell className="text-center"><input  type="number" onChange={onChange} name="val4" style={style.ansField} value={field.val4} /></TableCell>
                        <TableCell className="text-center"><input  type="number" onChange={onChange} name="val5" style={style.ansField} value={field.val5} /></TableCell>
                        <TableCell className="text-center"><input  type="number" onChange={onChange} name="val6" style={style.ansField} value={field.val6} /></TableCell>
                        <TableCell className="text-center"><input  type="number" onChange={onChange} name="val7" style={style.ansField} value={field.val7} /></TableCell>
                        <TableCell className="text-center"><input  type="number" onChange={onChange} name="val8" style={style.ansField} value={field.val8} /></TableCell>
                        <TableCell className="text-center"><input  type="number" onChange={onChange} name="val9" style={style.ansField} value={field.val9} /></TableCell>
                        <TableCell className="text-center"><input  type="number" onChange={onChange} name="val10" style={style.ansField} value={field.val10} /></TableCell>
                        <TableCell className="text-center"><input  type="number" onChange={onChange} name="val11" style={style.ansField} value={field.val11} /></TableCell>
                        <TableCell className="text-center"><input  type="number" onChange={onChange} name="val12" style={style.ansField} value={field.val12} /></TableCell>
                        <TableCell className="text-center"><input  type="number" onChange={onChange} name="val13" style={style.ansField} value={field.val13} /></TableCell>
                        <TableCell className="text-center"><input  type="number" onChange={onChange} name="val14" style={style.ansField} value={field.val14} /></TableCell>
                        <TableCell className="text-center"><input  type="number" onChange={onChange} name="val15" style={style.ansField} value={field.val15} /></TableCell>
                        <TableCell className="text-center"><input  type="number" onChange={onChange} name="val16" style={style.ansField} value={field.val16} /></TableCell>
                        <TableCell className="text-center"><input  type="number" onChange={onChange} name="val17" style={style.ansField} value={field.val17} /></TableCell>
                        <TableCell className="text-center"><input  type="number" onChange={onChange} name="val18" style={style.ansField} value={field.val18} /></TableCell>
                        <TableCell className="text-center"><input  type="number" onChange={onChange} name="val19" style={style.ansField} value={field.val19} /></TableCell>
                        <TableCell className="text-center"><input  type="number" onChange={onChange} name="val20" style={style.ansField} value={field.val20} /></TableCell>
                        <TableCell className="text-center"><input  type="number" onChange={onChange} name="val21" style={style.ansField} value={field.va21} /></TableCell>
                        <TableCell className="text-center"><input  type="number" onChange={onChange} name="val22" style={style.ansField} value={field.va22} /></TableCell>
                        <TableCell className="text-center"><input  type="number" onChange={onChange} name="va23" style={style.ansField} value={field.va23} /></TableCell>
                        <TableCell className="text-center"><input  type="number" onChange={onChange} name="va24" style={style.ansField} value={field.val24} /></TableCell>
                        <TableCell className="text-center"><input  type="number" onChange={onChange} name="val25" style={style.ansField} value={field.val25} /></TableCell>
                    </TableRow>

                    <TableRow style={{border:"2px solid #E99732"}}>
                            {result && answer.answer1.map(x=>x[0].map(x=> <TableCell style={{background:"#fff" , color:"#29567D" ,fontWeight:"bolder"}} className="text-center">{x}</TableCell> ))}
                    </TableRow>
    
                </TableBody>
                    </Table>
                    </TableContainer>
                </div>
            </div>

            <div className="row my-5">
                <div className="col-12 mx-auto ">

            <TableContainer component={Paper}>
                <Table>
                    <TableHead style={{ fontWeight:"bolder", background:"#f8f9fa", letterSpacing:"1px", boxShadow:"5px .1px 5px 0px "}}>
                        <TableRow>
                    
                            {head_id.table2.map(x=>x[0].map(x=> <TableCell className="text-center">{x}</TableCell> ))}

                        </TableRow>
                    </TableHead>
                <TableBody>
        
                {show && data.main_arr2.map(x=> x.map(x =>{
                    return(
                        <TableRow >
                                {x.map(x=><TableCell className="text-center">{x}</TableCell>)} 
                        </TableRow>
                    )}))}
                            
                    <TableRow style={{background:"#f8f9fa"}}> 
                
                        <TableCell className="text-center"><input  type="number" onChange={onChange} name="val26" style={style.ansField} value={field.val26} /></TableCell>
                        <TableCell className="text-center"><input  type="number" onChange={onChange} name="val27" style={style.ansField} value={field.val27} /></TableCell>
                        <TableCell className="text-center"><input  type="number" onChange={onChange} name="val28" style={style.ansField} value={field.val28} /></TableCell>
                        <TableCell className="text-center"><input  type="number" onChange={onChange} name="val29" style={style.ansField} value={field.val29} /></TableCell>
                        <TableCell className="text-center"><input  type="number" onChange={onChange} name="val30" style={style.ansField} value={field.val30} /></TableCell>
                        <TableCell className="text-center"><input  type="number" onChange={onChange} name="val31" style={style.ansField} value={field.val31} /></TableCell>
                        <TableCell className="text-center"><input  type="number" onChange={onChange} name="val32" style={style.ansField} value={field.val32} /></TableCell>
                        <TableCell className="text-center"><input  type="number" onChange={onChange} name="val33" style={style.ansField} value={field.val33} /></TableCell>
                        <TableCell className="text-center"><input  type="number" onChange={onChange} name="val34" style={style.ansField} value={field.val34} /></TableCell>
                        <TableCell className="text-center"><input  type="number" onChange={onChange} name="val35" style={style.ansField} value={field.val35} /></TableCell>
                        <TableCell className="text-center"><input  type="number" onChange={onChange} name="val36" style={style.ansField} value={field.val36} /></TableCell>
                        <TableCell className="text-center"><input  type="number" onChange={onChange} name="val37" style={style.ansField} value={field.val37} /></TableCell>
                        <TableCell className="text-center"><input  type="number" onChange={onChange} name="val38" style={style.ansField} value={field.val38} /></TableCell>
                        <TableCell className="text-center"><input  type="number" onChange={onChange} name="val39" style={style.ansField} value={field.val39} /></TableCell>
                        <TableCell className="text-center"><input  type="number" onChange={onChange} name="val40" style={style.ansField} value={field.val40} /></TableCell>
                        <TableCell className="text-center"><input  type="number" onChange={onChange} name="val41" style={style.ansField} value={field.val41} /></TableCell>
                        <TableCell className="text-center"><input  type="number" onChange={onChange} name="val42" style={style.ansField} value={field.val42} /></TableCell>
                        <TableCell className="text-center"><input  type="number" onChange={onChange} name="val43" style={style.ansField} value={field.val43} /></TableCell>
                        <TableCell className="text-center"><input  type="number" onChange={onChange} name="val44" style={style.ansField} value={field.val44} /></TableCell>
                        <TableCell className="text-center"><input  type="number" onChange={onChange} name="val45" style={style.ansField} value={field.val45} /></TableCell>
                        <TableCell className="text-center"><input  type="number" onChange={onChange} name="val46" style={style.ansField} value={field.val46} /></TableCell>
                        <TableCell className="text-center"><input  type="number" onChange={onChange} name="val47" style={style.ansField} value={field.val47}/></TableCell>
                        <TableCell className="text-center"><input  type="number" onChange={onChange} name="val48" style={style.ansField} value={field.val48} /></TableCell>
                        <TableCell className="text-center"><input  type="number" onChange={onChange} name="val49" style={style.ansField} value={field.val49} /></TableCell>
                        <TableCell className="text-center"><input  type="number" onChange={onChange} name="val50" style={style.ansField} value={field.val50} /></TableCell>
                    </TableRow>

                    <TableRow style={{border:"2px solid #E99732"}}>
                            {result && answer.answer2.map(x=>x[0].map(x=> <TableCell style={{background:"#fff" , color:"#29567D" ,fontWeight:"bolder"}} className="text-center">{x}</TableCell> ))}
                    </TableRow>
    
                </TableBody>
                    </Table>
                    </TableContainer>
                </div>
            </div>


            <div className="row my-5">
                <div className="col-12 mx-auto ">

            <TableContainer component={Paper}>
                <Table>
                    <TableHead style={{ fontWeight:"bolder", background:"#f8f9fa", letterSpacing:"1px", boxShadow:"5px .1px 5px 0px "}}>
                        <TableRow>
                    
                            {head_id.table3.map(x=>x[0].map(x=> <TableCell className="text-center">{x}</TableCell> ))}

                        </TableRow>
                    </TableHead>
                <TableBody>
        
                {show && data.main_arr3.map(x=> x.map(x =>{
                    return(
                        <TableRow >
                                {x.map(x=><TableCell className="text-center">{x}</TableCell>)} 
                        </TableRow>
                    )}))}
                            
                    <TableRow style={{background:"#f8f9fa"}}> 
                
                        <TableCell className="text-center"><input  type="number" onChange={onChange} name="val51" style={style.ansField} value={field.val51} /></TableCell>
                        <TableCell className="text-center"><input  type="number" onChange={onChange} name="val52" style={style.ansField} value={field.val52} /></TableCell>
                        <TableCell className="text-center"><input  type="number" onChange={onChange} name="val53" style={style.ansField} value={field.val53} /></TableCell>
                        <TableCell className="text-center"><input  type="number" onChange={onChange} name="val54" style={style.ansField} value={field.val54} /></TableCell>
                        <TableCell className="text-center"><input  type="number" onChange={onChange} name="val55" style={style.ansField} value={field.val55} /></TableCell>
                        <TableCell className="text-center"><input  type="number" onChange={onChange} name="val56" style={style.ansField} value={field.val56} /></TableCell>
                        <TableCell className="text-center"><input  type="number" onChange={onChange} name="val57" style={style.ansField} value={field.val57} /></TableCell>
                        <TableCell className="text-center"><input  type="number" onChange={onChange} name="val58" style={style.ansField} value={field.val58} /></TableCell>
                        <TableCell className="text-center"><input  type="number" onChange={onChange} name="val59" style={style.ansField} value={field.val59} /></TableCell>
                        <TableCell className="text-center"><input  type="number" onChange={onChange} name="val60" style={style.ansField} value={field.val60} /></TableCell>
                        <TableCell className="text-center"><input  type="number" onChange={onChange} name="val61" style={style.ansField} value={field.val61} /></TableCell>
                        <TableCell className="text-center"><input  type="number" onChange={onChange} name="val62" style={style.ansField} value={field.val62} /></TableCell>
                        <TableCell className="text-center"><input  type="number" onChange={onChange} name="val63" style={style.ansField} value={field.val63} /></TableCell>
                        <TableCell className="text-center"><input  type="number" onChange={onChange} name="val64" style={style.ansField} value={field.val64} /></TableCell>
                        <TableCell className="text-center"><input  type="number" onChange={onChange} name="val65" style={style.ansField} value={field.val65} /></TableCell>
                        <TableCell className="text-center"><input  type="number" onChange={onChange} name="val66" style={style.ansField} value={field.val66} /></TableCell>
                        <TableCell className="text-center"><input  type="number" onChange={onChange} name="val67" style={style.ansField} value={field.val67} /></TableCell>
                        <TableCell className="text-center"><input  type="number" onChange={onChange} name="val68" style={style.ansField} value={field.val68} /></TableCell>
                        <TableCell className="text-center"><input  type="number" onChange={onChange} name="val69" style={style.ansField} value={field.val69} /></TableCell>
                        <TableCell className="text-center"><input  type="number" onChange={onChange} name="val70" style={style.ansField} value={field.val70} /></TableCell>
                        <TableCell className="text-center"><input  type="number" onChange={onChange} name="val71" style={style.ansField} value={field.val71} /></TableCell>
                        <TableCell className="text-center"><input  type="number" onChange={onChange} name="val72" style={style.ansField} value={field.val72} /></TableCell>
                        <TableCell className="text-center"><input  type="number" onChange={onChange} name="val73" style={style.ansField} value={field.val73} /></TableCell>
                        <TableCell className="text-center"><input  type="number" onChange={onChange} name="val74" style={style.ansField} value={field.val74} /></TableCell>
                        <TableCell className="text-center"><input  type="number" onChange={onChange} name="val75" style={style.ansField} value={field.val75} /></TableCell>
                    </TableRow>

                    <TableRow style={{border:"2px solid #E99732"}}>
                            {result && answer.answer3.map(x=>x[0].map(x=> <TableCell style={{background:"#fff" , color:"#29567D" ,fontWeight:"bolder"}} className="text-center">{x}</TableCell> ))}
                    </TableRow>
    
                </TableBody>
                    </Table>
                    </TableContainer>
                </div>
            </div>



            <div className="row my-5">
                <div className="col-12 mx-auto ">

            <TableContainer component={Paper}>
                <Table>
                    <TableHead style={{ fontWeight:"bolder", background:"#f8f9fa", letterSpacing:"1px", boxShadow:"5px .1px 5px 0px "}}>
                        <TableRow>
                    
                            {head_id.table4.map(x=>x[0].map(x=> <TableCell s className="text-center">{x}</TableCell> ))}

                        </TableRow>
                    </TableHead>
                <TableBody>
        
                {show && data.main_arr4.map(x=> x.map(x =>{
                    return(
                        <TableRow >
                                {x.map(x=><TableCell className="text-center">{x}</TableCell>)} 
                        </TableRow>
                    )}))}
                            
                    <TableRow style={{background:"#f8f9fa"}}> 
                
                        <TableCell className="text-center"><input  type="number" onChange={onChange} name="val76" style={style.ansField} value={field.val76} /></TableCell>
                        <TableCell className="text-center"><input  type="number" onChange={onChange} name="val77" style={style.ansField} value={field.val77} /></TableCell>
                        <TableCell className="text-center"><input  type="number" onChange={onChange} name="val78" style={style.ansField} value={field.val78} /></TableCell>
                        <TableCell className="text-center"><input  type="number" onChange={onChange} name="val79" style={style.ansField} value={field.val79} /></TableCell>
                        <TableCell className="text-center"><input  type="number" onChange={onChange} name="val80" style={style.ansField} value={field.val80} /></TableCell>
                        <TableCell className="text-center"><input  type="number" onChange={onChange} name="val81" style={style.ansField} value={field.val81} /></TableCell>
                        <TableCell className="text-center"><input  type="number" onChange={onChange} name="val82" style={style.ansField} value={field.val82} /></TableCell>
                        <TableCell className="text-center"><input  type="number" onChange={onChange} name="val83" style={style.ansField} value={field.val83} /></TableCell>
                        <TableCell className="text-center"><input  type="number" onChange={onChange} name="val84" style={style.ansField} value={field.val84} /></TableCell>
                        <TableCell className="text-center"><input  type="number" onChange={onChange} name="val85" style={style.ansField} value={field.val85} /></TableCell>
                        <TableCell className="text-center"><input  type="number" onChange={onChange} name="val86" style={style.ansField} value={field.val86} /></TableCell>
                        <TableCell className="text-center"><input  type="number" onChange={onChange} name="val87" style={style.ansField} value={field.val87} /></TableCell>
                        <TableCell className="text-center"><input  type="number" onChange={onChange} name="val88" style={style.ansField} value={field.val88} /></TableCell>
                        <TableCell className="text-center"><input  type="number" onChange={onChange} name="val89" style={style.ansField} value={field.val89} /></TableCell>
                        <TableCell className="text-center"><input  type="number" onChange={onChange} name="val90" style={style.ansField} value={field.val90} /></TableCell>
                        <TableCell className="text-center"><input  type="number" onChange={onChange} name="val91" style={style.ansField} value={field.val91} /></TableCell>
                        <TableCell className="text-center"><input  type="number" onChange={onChange} name="val92" style={style.ansField} value={field.val92} /></TableCell>
                        <TableCell className="text-center"><input  type="number" onChange={onChange} name="val93" style={style.ansField} value={field.val93} /></TableCell>
                        <TableCell className="text-center"><input  type="number" onChange={onChange} name="val94" style={style.ansField} value={field.val94} /></TableCell>
                        <TableCell className="text-center"><input  type="number" onChange={onChange} name="val95" style={style.ansField} value={field.val95} /></TableCell>
                        <TableCell className="text-center"><input  type="number" onChange={onChange} name="val96" style={style.ansField} value={field.val96} /></TableCell>
                        <TableCell className="text-center"><input  type="number" onChange={onChange} name="val97" style={style.ansField} value={field.val97} /></TableCell>
                        <TableCell className="text-center"><input  type="number" onChange={onChange} name="val98" style={style.ansField} value={field.val98} /></TableCell>
                        <TableCell className="text-center"><input  type="number" onChange={onChange} name="val99" style={style.ansField} value={field.val99} /></TableCell>
                        <TableCell className="text-center"><input  type="number" onChange={onChange} name="val100" style={style.ansField} value={field.val00} /></TableCell>
                    </TableRow>

                    <TableRow style={{border:"2px solid #E99732"}}>
                            {result && answer.answer4.map(x=>x[0].map(x=> <TableCell style={{background:"#fff" , color:"#29567D" ,fontWeight:"bolder"}} className="text-center">{x}</TableCell> ))}
                    </TableRow>
    
                </TableBody>
                    </Table>
                    </TableContainer>
                </div>
            </div>



            <div className="row my-5">
                <div className="col-12 mx-auto ">

            <TableContainer component={Paper}>
                <Table>
                    <TableHead style={{ fontWeight:"bolder", background:"#f8f9fa", letterSpacing:"1px", boxShadow:"5px .1px 5px 0px "}}>
                        <TableRow>
                    
                            {head_id.table5.map(x=>x[0].map(x=> <TableCell  className="text-center">{x}</TableCell> ))}

                        </TableRow>
                    </TableHead>
                <TableBody>
        
                {show && data.main_arr5.map(x=> x.map(x =>{
                    return(
                        <TableRow >
                                {x.map(x=><TableCell className="text-center">{x}</TableCell>)} 
                        </TableRow>
                    )}))}
                            
                    <TableRow style={{background:"#f8f9fa"}}> 
                
                        <TableCell className="text-center"><input  type="number" onChange={onChange} name="val101" style={style.ansField} value={field.val101} /></TableCell>
                        <TableCell className="text-center"><input  type="number" onChange={onChange} name="val102" style={style.ansField} value={field.val102} /></TableCell>
                        <TableCell className="text-center"><input  type="number" onChange={onChange} name="val103" style={style.ansField} value={field.val103} /></TableCell>
                        <TableCell className="text-center"><input  type="number" onChange={onChange} name="val104" style={style.ansField} value={field.val104} /></TableCell>
                        <TableCell className="text-center"><input  type="number" onChange={onChange} name="val105" style={style.ansField} value={field.val105} /></TableCell>
                        <TableCell className="text-center"><input  type="number" onChange={onChange} name="val106" style={style.ansField} value={field.val106} /></TableCell>
                        <TableCell className="text-center"><input  type="number" onChange={onChange} name="val107" style={style.ansField} value={field.val107} /></TableCell>
                        <TableCell className="text-center"><input  type="number" onChange={onChange} name="val108" style={style.ansField} value={field.val108} /></TableCell>
                        <TableCell className="text-center"><input  type="number" onChange={onChange} name="val109" style={style.ansField} value={field.val109} /></TableCell>
                        <TableCell className="text-center"><input  type="number" onChange={onChange} name="val110" style={style.ansField} value={field.val110} /></TableCell>
                        <TableCell className="text-center"><input  type="number" onChange={onChange} name="val111" style={style.ansField} value={field.val111} /></TableCell>
                        <TableCell className="text-center"><input  type="number" onChange={onChange} name="val112" style={style.ansField} value={field.val112} /></TableCell>
                        <TableCell className="text-center"><input  type="number" onChange={onChange} name="val113" style={style.ansField} value={field.val113} /></TableCell>
                        <TableCell className="text-center"><input  type="number" onChange={onChange} name="val114" style={style.ansField} value={field.val114} /></TableCell>
                        <TableCell className="text-center"><input  type="number" onChange={onChange} name="val115" style={style.ansField} value={field.val115} /></TableCell>
                        <TableCell className="text-center"><input  type="number" onChange={onChange} name="val116" style={style.ansField} value={field.val116} /></TableCell>
                        <TableCell className="text-center"><input  type="number" onChange={onChange} name="val117" style={style.ansField} value={field.val117} /></TableCell>
                        <TableCell className="text-center"><input  type="number" onChange={onChange} name="val118" style={style.ansField} value={field.val118} /></TableCell>
                        <TableCell className="text-center"><input  type="number" onChange={onChange} name="val119" style={style.ansField} value={field.val119} /></TableCell>
                        <TableCell className="text-center"><input  type="number" onChange={onChange} name="val120" style={style.ansField} value={field.val20} /></TableCell>
                        <TableCell className="text-center"><input  type="number" onChange={onChange} name="val121" style={style.ansField} value={field.val121} /></TableCell>
                        <TableCell className="text-center"><input  type="number" onChange={onChange} name="val122" style={style.ansField} value={field.val122} /></TableCell>
                        <TableCell className="text-center"><input  type="number" onChange={onChange} name="val123" style={style.ansField} value={field.val123} /></TableCell>
                        <TableCell className="text-center"><input  type="number" onChange={onChange} name="val124" style={style.ansField} value={field.val124} /></TableCell>
                        <TableCell className="text-center"><input  type="number" onChange={onChange} name="val125" style={style.ansField} value={field.val125} /></TableCell>
                    </TableRow>

                    <TableRow style={{border:"2px solid #E99732"}}>
                            {result && answer.answer5.map(x=>x[0].map(x=> <TableCell style={{background:"#fff" , color:"#29567D" ,fontWeight:"bolder"}} className="text-center">{x}</TableCell> ))}
                    </TableRow>
    
                </TableBody>
                    </Table>
                    </TableContainer>
                </div>
            </div>


        {/* after clicking of above submit button below  Result will be shown on the screen  and above submit button will get dissappear*/}
           {result && (<Show_result />)}

           {show &&  (<div className="row my-4">
                        <div className="col-12 mx-auto d-flex justify-content-end ">
                            <button type="submit" className="btn btn-success btn_link">Submit</button>
                        </div>
                    </div>)
           }
          </form>
        </div>
    </div>
    </>

);
}

export default My_tests_comp;
