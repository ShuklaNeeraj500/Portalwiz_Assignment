import React, {useState, useEffect} from "react"
import {Readonly_Input} from "../../Student/Component/Input"
import {Link, useParams} from "react-router-dom"
import {toast} from "react-toastify"
import Heading from "../../../../Common-To-All/Heading"
import axios from "axios"

const  View_question_comp = ()=>{
    let message="";

    const { id } = useParams();

    const[state ,setState]= useState({
       uname: sessionStorage.getItem("username"),
       ques_num1:"", ques_num2:"", ques_num3:"", ques_num4:"",
       ques_num5:"", ques_num6:"", ques_num7:"", answer:"",level_name:"",
       location_name:"",category_name:"",
    })

    useEffect(()=>{
        Questiondetails();
      },[])


// ------------------------------
const Questiondetails = async () =>{
    const obj ={
      uname :state.uname,
      id:id
    }
    axios.post("http://sandbox.portalwiz.com/php/questions/select_questions.php", obj)
    .then( (response) => {
        let resData = JSON.parse(response.data.data);
        console.log(response);
        setState({
            ques_num1:resData[0].ques_num1, ques_num2:resData[0].ques_num2, ques_num3:resData[0].ques_num3, 
            ques_num4:resData[0].ques_num4, ques_num5:resData[0].ques_num5, ques_num6:resData[0].ques_num6, 
            ques_num7:resData[0].ques_num7, answer:resData[0].answer,
            level_name:resData[0].level_name, location_name:resData[0].location_name,
            category_name:resData[0].category_name,
           
        })
    })
    .catch( (err) => console.log(err) );
  }
 //---------------One onChange function is used for setting the state of various types of input fields ---------------     
    const onChange = (e)=>{
    
        const input = e.target;
        const name = input.name;
        const value = input.type === 'checkbox' ? input.checked : input.value;

        setState((preValue)=>{
            return{
                ...preValue ,
                [name] :value
            }
        })
    }
    const onSubmit =(e) =>{
        
        e.preventDefault();

/*---------------Fetching Date in YEAR-MONTH-DATE  format-------------------------- */ 
        var dateObj = new Date();
        var month = dateObj.getUTCMonth() + 1; //months from 1-12
        var day = dateObj.getUTCDate();
        var year = dateObj.getUTCFullYear();

        var newdate = year + "-" + month + "-" + day;

/*---------------Creating object to send data through Axios------------------------- */
        const obj = {
            updated_by :state.uname ,updated_date:newdate, uname:sessionStorage.getItem("username"),id:id,
            ques_num1:state.ques_num1, ques_num2:state.ques_num2, ques_num3:state.ques_num3, ques_num4:state.ques_num4,
            ques_num5:state.ques_num5, ques_num6:state.ques_num6, ques_num7:state.ques_num7, answer:state.answer,
            level_name:state.level_name, location_name:state.location_name,category_name:state.category_name,
        }
        axios.post("http://sandbox.portalwiz.com/php/test/edit_test.php", obj)
        .then((res) => {
            console.log(res)
            if (res.data.message === "Question Updated") {
              toast.success("Question's data updated successfully!")
              Questiondetails();
            } else {
              message = res.data.message;
              alert(message)
            }
        })
        .catch( (err) => console.log(err) );
    }
 return(
    <>
        <div className="container-fluid Setup_form" >
{/*-----------------------Bread crumb------------------------- */}
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb Breadcrumb align-items-center">
                        <li className="breadcrumb-item"><Link to="/bulletin">Home</Link></li>
                        <li className="breadcrumb-item"><strong>Setup</strong></li>
                        <li className="breadcrumb-item "><Link to="/question">Questions</Link></li>
                        <li className="breadcrumb-item active">Add Questions</li>
                    </ol>
                </nav> 
                <Heading name={`View Question - ID  ${id}`} />
{/* -------------------------------------------------Two Columns for Inputs--------------------------------------- */}
            <form onSubmit={onSubmit}> 
        <div className="container mt-3">
                    {/* <div className="row my-4">
                        <div className = "col-11 d-flex justify-content-end mx-auto">
                            <button type ="submit" className="btn btn-primary btn_link">Add</button>
                        </div>
                    </div> */}

                <div className="row">

            {/*-----------------------Column-1 for Inputs------------------------- */}
                <div className="col-11 col-md-6 mx-auto">

                    <h5 className="mb-4">Add Question</h5>

                        {/* <div class="form-group row">
                            <label class="col-sm-5 col-form-label">Quesdtion ID</label>
                            <div class="col-sm-7 col-md-6 ">
                            <input type="text" readonly class="form-control-plaintext" value="<Auto generated>"  />
                            </div>
                        </div> */}
  

                        <Readonly_Input field="Number 1" name="ques_num1" type="text" placeholder="--" class="form-control bg-light border-0 text-center"  value={state.ques_num1}/>
          
                          
                            
                        <Readonly_Input field="Number 2" name="ques_num2" type="text" placeholder="--" class="form-control bg-light border-0 text-center"  value={state.ques_num2}/>
          
                          
                            
                        <Readonly_Input field="Number 3" name="ques_num3" type="text" placeholder="--" class="form-control bg-light border-0 text-center"  value={state.ques_num3}/>
          
                          
                            
                        <Readonly_Input field="Number 4" name="ques_num4" type="text" placeholder="--" class="form-control bg-light border-0 text-center"  value={state.ques_num4}/>
          
                          
                            
                        <Readonly_Input field="Number 5" name="ques_num5" type="text" placeholder="--" class="form-control bg-light border-0 text-center"  value={state.ques_num5}/>
          
                          
                            
                        <Readonly_Input field="Number 6" name="ques_num6" type="text" placeholder="--" class="form-control bg-light border-0 text-center"  value={state.ques_num6}/>
          
                          
                            
                        <Readonly_Input field="Number 7" name="ques_num7" type="text" placeholder="--" class="form-control bg-light border-0 text-center"  value={state.ques_num7}/><br />

                        <Readonly_Input field="Answer" name="answer" type="text" placeholder="Enter Answer" class="form-control bg-light border-0 text-center"  value={state.answer}/>
                    </div>

                        {/*-----------------------Column-2 for Inputs------------------------- */}
                        <div className="col-11 col-md-6 mx-auto">
                           <h5 className="mb-4">Question Infotmation</h5>
                         
                        {/* ---Select Input---- */}
                        {/* <Readonly_Input field="Location" type="text" placeholder="--" class="form-control bg-light border-0 "  value={state.location_name}/> */}
                 
                        {/* ---Select Input---- */}
                        <Readonly_Input field="Level" type="text" placeholder="--" class="form-control bg-light border-0 "  value={state.level_name}/>
                        

                        <div className="form-group row">
                            <label className="col-sm-5 col-form-label">Category</label>
                            <div className="col-sm-7 col-md-6 align-items-center d-flex ">
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" 
                                            name="category_name" 
                                            id="inlineRadio1" 
                                            value="Mind Math" 
                                            checked={state.category_name === "Mind Math"}
                                            />
                                    <label className="form-check-label" htmlFor="inlineRadio1">Mind Math</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" 
                                        name="category_name" 
                                        id="inlineRadio2" 
                                        value="Abacus" 
                                        checked={state.category_name === "Abacus"}
                                        />
                                    <label className="form-check-label" htmlFor="inlineRadio2">Abacus</label>
                                </div>
                            </div>
                        </div> 
                         {/*     <div class="form-group row">
                                <label class="col-sm-5 col-md-3 col-form-label">Test 1</label>
                                <div class="col-sm-7 col-md-6 mt-2 ">
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="invalidCheck2"  />
                                    </div>
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="col-sm-5 col-md-3 col-form-label">Test 2</label>
                                <div class="col-sm-7 col-md-6 mt-2 ">
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="invalidCheck2"  />
                                    </div>
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="col-sm-5 col-md-3 col-form-label">Test 3</label>
                                <div class="col-sm-7 col-md-6 mt-2 ">
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="invalidCheck2"  />
                                    </div>
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="col-sm-5 col-md-3 col-form-label">Test 4</label>
                                <div class="col-sm-7 col-md-6 mt-2 ">
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="invalidCheck2"  />
                                    </div>
                                </div>
                            </div> */}
                     
                        </div>

                    </div>
                </div>
            </form>

           </div>
    
    </>
    )
 }

export default View_question_comp