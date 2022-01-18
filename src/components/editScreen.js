import axios from 'axios';
import React, { useEffect ,useState} from 'react'
import { useSelector , useDispatch} from 'react-redux';
import { useParams ,useNavigate} from 'react-router-dom';
import { studentDetailAction, studentUpdateAction } from '../actions/studentsAction';



function EditScreen() {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const params = useParams()
    const{id: studentId} = params;

    

    const studentDetail = useSelector(state => state.studentDetail)
    const {students} = studentDetail;

    const[input, setInput] = useState({
        fname: '', lname: '', contact: ''
    })
   
    

    const handleSubmit = (e) => {
        e.preventDefault();
        const updateData = {
            fname: input.fname,
            lname: input.lname,
            contact: input.contact,
        }
        axios.put(`http://localhost:5000/api/register/update/${students._id}`,updateData)
        navigate('/studentList')
        window.location.reload(false)
       
    }
    const handleChange = (e) => {
        const{name, value} = e.target;
        setInput({
            ...input,
            [name]: value
        })
    }

    useEffect(() => {
        dispatch(studentDetailAction(studentId))
    },[dispatch, studentId])

    console.log(students)

    return (
        <div>
           <form className='form'>
               <h3>Update : {students.fname}</h3>
                <label htmlFor='name'>First name :</label>
                <input className='inputfield' type='text' name='fname'  placeholder={students.fname}
                value={input.fname} onChange={handleChange} /><br/>

                <label htmlFor='name'>Last name :</label>
                <input className='inputfield' type='text' name='lname' placeholder={students.lname}
                value={input.lname} onChange={handleChange} /><br/>

                <label htmlFor='name'>Contact :</label>
                <input className='inputfield' type='text' name='contact'  placeholder={students.contact}
                 value={input.contact} onChange={handleChange} /><br/>

                <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Update</button>
            </form>
        </div>
    )
}

export default EditScreen
