
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {Link} from 'react-router-dom'
import studentListAction   from '../actions/studentsAction';


function List() {
    const dispatch = useDispatch()
    

    const studentReducer = useSelector(state => state.studentReducer)
    const { students } = studentReducer;

    

    useEffect(() => {
        
        dispatch(studentListAction())
    }, [dispatch])
    console.log(students)

    

    async function deleteOperation(id){
        let result = await fetch(`http://localhost:5000/api/register/delete/${id}`, {
            method: 'DELETE'
        });
        window.location.reload(true);
    }

    
    return (
        <div className='listpage'>
            <h3>Total students</h3>
            <div className='displaylist'>
                <table>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Points</th>
                        <th>Action</th>
                    </tr>
                    {
                        students.map((stu) => (

                            <tr key={stu._id}>
                                <td>{stu.fname}</td>
                                <td>{stu.lname}</td>
                                <td>{stu.contact}</td>
                                <td><Link to={`/editscreen/${stu._id}`}><button type="button" className="btn btn-primary" >Edit</button></Link>
                                    <button type="submit" className="btn btn-danger" onClick={() => deleteOperation(stu._id)}>Delete</button></td>
                            </tr>
                        ))
                    }


                </table>
            </div>
        </div>
    )
}

export default List
