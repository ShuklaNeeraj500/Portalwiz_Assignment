import React from "react"
import {Switch, Route, Redirect} from "react-router-dom"

import { ToastContainer , cssTransition , Slide} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Bulletin from "./Tabs/Bulletin/Bulletin"

import Student from "./Tabs/Setup/Student/Student"
import Add_student from "./Tabs/Setup/Student/Add_student"
import Edit_student from "./Tabs/Setup/Student/Edit_student"
import View_student from "./Tabs/Setup/Student/View_student"
import Student_history_table  from "./Tabs/Setup/Student/Student_history_table"
import Student_history_data from "./Tabs/Setup/Student/Student_history_data"

import Teacher from "./Tabs/Setup/Teacher/Teacher"
import Add_teacher from "./Tabs/Setup/Teacher/Add_teacher"
import Edit_teacher from "./Tabs/Setup/Teacher/Edit_teacher"
import View_teacher from "./Tabs/Setup/Teacher/View_teacher"
import Teacher_history_table  from "./Tabs/Setup/Teacher/Teacher_history_table"
import Teacher_history_data from "./Tabs/Setup/Teacher/Teacher_history_data"

import User from "./Tabs/Setup/User/User"
import Edit_user from "./Tabs/Setup/User/Edit_user"
import View_user from "./Tabs/Setup/User/View_user"
import AddUser from "./Tabs/Setup/User/AddUser"

import Location from "./Tabs/Setup/Location/Location"
import Add_location from "./Tabs/Setup/Location/Add_location"
import Edit_location from "./Tabs/Setup/Location/Edit_location"
import View_location from "./Tabs/Setup/Location/View_location"

import Batch from "./Tabs/Setup/Batch/Batch"
import Add_batch from "./Tabs/Setup/Batch/Add_batch"
import Edit_batch from "./Tabs/Setup/Batch/Edit_batch"
import View_batch from "./Tabs/Setup/Batch/View_batch"

import Level from "./Tabs/Setup/Levels/Level"
import Add_level from "./Tabs/Setup/Levels/Add_level"
import Edit_level from "./Tabs/Setup/Levels/Edit_level"
import View_level from "./Tabs/Setup/Levels/View_level"

import Question from "./Tabs/Setup/Question/Question"
import Add_question from "./Tabs/Setup/Question/Add_question"
import Edit_question from "./Tabs/Setup/Question/Edit_question"
import View_question from "./Tabs/Setup/Question/View_question"

import Test from "./Tabs/Setup/Test/Test"
import Add_test from "./Tabs/Setup/Test/Add_test"
import Edit_test from "./Tabs/Setup/Test/Edit_test"
import View_test from "./Tabs/Setup/Test/View_test"

import Preference from "./Tabs/Setup/Preference/Preference"
import Add_preference from "./Tabs/Setup/Preference/Add_preference"
import Edit_preference from "./Tabs/Setup/Preference/Edit_preference"
import View_preference from "./Tabs/Setup/Preference/View_preference"

import Role from "./Tabs/Setup/Role/Role"
import Add_role from "./Tabs/Setup/Role/Add_role"
import Edit_role from "./Tabs/Setup/Role/Edit_role"
import View_role from "./Tabs/Setup/Role/View_role"

import Landing_page from "./Tabs/Setup/Landing Page/Landing_page"

import Message from "./Tabs/Message/Message"
import Batch_Student from "./Tabs/Student/Batch_Student/Batch_Student"
import Batch_test from "./Tabs/Student/Batch Test/Batch_test"
import Student_detail from "./Tabs/Student/Batch_Student/Student_detail"
import Compose from "./Tabs/Message/Compose"
import Contact_parent from "./Tabs/Student/Batch_Student/Contact_parent"

import Abacus from "./Tabs/Test/Abacus/Abacus"
import Mind_math from "./Tabs/Test/Mind Math/Mind_math"
import My_assignments from "./Tabs/Test/My Assignment/My_assignments"
import My_exams from "./Tabs/Test//My Exam/My_exams"
import My_tests from "./Tabs/Test/My Test/My_tests"

import Location_manager_profile from "./Tabs/My-Profile/Location Manager Profile/Location_manager_profile"
import Student_profile from "./Tabs/My-Profile/Student Profile/Student_profile"
import Teacher_profile from "./Tabs/My-Profile/Teacher Profile/Teacher_profile"

import Help from "./Tabs/Help/Help"

import Login from "./Login/Login"
import Signup from "./Signup/Signup"

const App = () =>
{
    return (
        <>    
        <ToastContainer 
            position="top-center"
            autoClose="5000"
            hideProgressBar={true}
            closeButton={false}
            transition={Slide}
        />
        <Switch>
            <Route exact path="/bulletin" component={Bulletin} />
            <Route exact path="/student" component={Student} />
            <Route exact path="/add-student" component={Add_student} />
            <Route exact path="/edit-student/:id" component={Edit_student} />
            <Route exact path="/view-student/:id" component={View_student} />
            <Route exact path="/stu-history-data/:id" component={Student_history_data} />
            <Route exact path="/stu-history-table/:id" component={Student_history_table} />
            <Route exact path="/teacher" component={Teacher} />
            <Route exact path="/add-teacher" component={Add_teacher} />
            <Route exact path="/edit-teacher/:id" component={Edit_teacher} />
            <Route exact path="/view-teacher/:id" component={View_teacher} />
            <Route exact path="/tch-history-data/:id" component={Teacher_history_data} />
            <Route exact path="/tch-history-table/:id" component={Teacher_history_table} />
            <Route exact path="/user" component={User} />
            <Route exact path="/edit-user/:id" component={Edit_user} />
            <Route exact path="/view-user/:id" component={View_user} />
            <Route exact path="/add-user" component={AddUser} />
            <Route exact path="/location" component={Location} />
            <Route exact path="/add-location" component={Add_location} /> 
            <Route exact path="/edit-location/:id" component={Edit_location} /> 
            <Route exact path="/view-location/:id" component={View_location} /> 
            <Route exact path="/batch" component={Batch} />
            <Route exact path="/add-batch" component={Add_batch} />
            <Route exact path="/edit-batch/:id" component={Edit_batch} />
            <Route exact path="/view-batch/:id" component={View_batch} />
            <Route exact path="/level" component={Level} />
            <Route exact path="/add-Level" component={Add_level} />
            <Route exact path="/edit-Level/:id" component={Edit_level} />
            <Route exact path="/view-Level/:id" component={View_level} />
            <Route exact path="/question" component={Question} />
            <Route exact path="/add-question" component={Add_question} />
            <Route exact path="/edit-question/:id" component={Edit_question} />
            <Route exact path="/view-question/:id" component={View_question} />
            <Route exact path="/test" component={Test} />
            <Route exact path="/add-test" component={Add_test} /> 
            <Route exact path="/edit-test/:id" component={Edit_test} /> 
            <Route exact path="/view-test/:id" component={View_test} /> 
            <Route exact path="/message" component={Message} /> 
            <Route exact path="/batch-student" component={Batch_Student} /> 
            <Route exact path="/batch-test" component={Batch_test} />
            <Route exact path="/student-detail" component={Student_detail} /> 
            <Route exact path="/compose" component={Compose} /> 
            <Route exact path="/contact_parent" component={Contact_parent} /> 

            <Route exact path="/preference" component={Preference}/>
            <Route exact path="/add-preference" component={Add_preference} />
            <Route exact path="/edit-preference/:id" component={Edit_preference} />
            <Route exact path="/view-preference/:id" component={View_preference} />

            <Route exact path="/role" component={Role}/>
            <Route exact path="/add-role" component={Add_role}/>
            <Route exact path="/edit-role/:id" component={Edit_role}/>
            <Route exact path="/view-role/:id" component={View_role}/>
            <Route exact path="/landing-page" component={Landing_page}/>

            <Route exact path="/abacus" component={Abacus} /> 
            <Route exact path="/mind-math" component={Mind_math} /> 
            <Route exact path="/my-assignment" component={My_assignments} /> 
            <Route exact path="/my-exam" component={My_exams} /> 
            <Route exact path="/my-test" component={My_tests} />

            <Route exact path="/location-manager-profile" component={Location_manager_profile} />
            <Route exact path="/student-profile" component={Student_profile} />
            <Route exact path="/teacher-profile" component={Teacher_profile} />


            <Route exact path="/help" component={Help} /> 


            <Route exact path="/" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Redirect to="/bulletin" />
        </Switch>
        </>
    )
}

export default App;


