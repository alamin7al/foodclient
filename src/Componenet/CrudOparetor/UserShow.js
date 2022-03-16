
import { Table } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
const UserShow = () => {
    const [table, setTable] = useState([])


    const [page, setPage] = useState(0);
    const [pageSize, setPageSize] = useState(0)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch(`http://localhost:5000/table?page=${page}&&size=5`)
            .then(res => res.json())
            .then(data => {
                setTable(data.payload)
                setLoading(false)

                const count = data.count
                const pageNumber = Math.ceil(count / 5)
                setPageSize(pageNumber);

            })
    }, [page,table])
    if (loading) {
        return (

            <>
                <div className="col-md-12">
                    <h3>Loading...</h3>

                </div>



            </>
        )
    }
    const handleDeleted = (id) => {
        const procces = window.confirm('Are You Sure, You Want To Delet')
        if (procces) {
            fetch(`http://localhost:5000/table/${id}`, {
                method: 'DELETE',
                headers: {
                    'content-type': 'application/json'
                }
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount >= 0) {
                        alert('deleted SuccessFully ')
                        const rstrongainignData = table.filter(x => x._id !== id)
                        setTable(rstrongainignData)
                    }

                })
        }
    }






    return (
        <div className='my-5 mx-2' id='user'>
            <Table striped bordered hover className='p-5'>
                <thead>
                    <tr>

                        <th> Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Title</th>
                        <th>Gender</th>


                        <th>Date</th>
                        <th colSpan={2}>Action</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        table.map((t,i) =>
                            <tr>
                                <td> <strong className='text-start'> ({i})  </strong>  {t.name}      </td>
                                <td> {t.email}         </td>
                                <td> {t.phone}         </td>
                                <td>     {t.title}     </td>

                                <td>    {t.gender}      </td>

                                <td>   {t.date}       </td>
                                <div className="d-flex">

                                    <Link to={`/useredit/${t._id}`}>
                                        <button className='button-41 me-2 px-4'>Edit</button>
                                    </Link>
                                    <button  onClick={() => handleDeleted(t._id)} className='button-42 m-0 p-0 ms-3'>Delete</button>
                                </div>

                            </tr>

                        )
                    }


                </tbody>
            </Table>
            {
                [...Array(pageSize).keys()].map(pageNum => <button className='button-37 ms-2' style={{ width: '60px' }} onClick={() => setPage(pageNum)}>{pageNum + 1}</button>)
            }
        </div>
    );
};

export default UserShow;