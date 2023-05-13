import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import BookingRow from "./BookingRow";
import { useNavigate } from "react-router-dom";

const Bookings = () => {
    const { user } = useContext(AuthContext)
    const [bookings, setBookings] = useState([])
    const navigate = useNavigate()
    const url = `https://car-doctor-server-woad-ten.vercel.app/bookings?email=${user?.email}`
    useEffect(() => {
        fetch(url, {
            method : 'GET',
            headers : {
                authorization: `Bearer ${localStorage.getItem('car-access-token')}`
            },
        })
            .then(res => res.json())
            .then(data => {
                if(!data.error){
                    setBookings(data)
                }
                else{
                    navigate('/')
                }
            })
    }, [url, navigate])

    const handleDelete =(id)=>{
        const proceed = confirm('Are you sure you want to delete?')
        if(proceed){
            fetch(`https://car-doctor-server-woad-ten.vercel.app/bookings/${id}`,{
                method : 'DELETE'
            })
            .then(res=> res.json())
            .then(data=> {
                console.log(data)
                if(data.deletedCount > 0){
                    alert('Order Deleted')
                    const remaining = bookings.filter(booking=> booking._id !== id)
                    setBookings(remaining)
                }
            })
        }
    }
    const handleConfirm=(id)=>{
        fetch(`https://car-doctor-server-woad-ten.vercel.app/bookings/${id}`,{
            method: 'PATCH',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify({status: 'confirmed'})
        })
        .then(res=> res.json())
        .then(data=>{
            console.log(data)
            if(data.modifiedCount > 0){
                const remaining = bookings.filter(booking => booking._id !== id)
                const updated = bookings.find(booking=> booking._id === id)
                updated.status = 'confirmed'
                const newBookings = [updated, ...remaining]
                setBookings(newBookings)
            }
        })
    }

    return (
        <div className="my-10">
            <h2 className="text-3xl font-bold text-center my-8">Your total bookings: {bookings.length}</h2>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Image</th>
                            <th>Service</th>
                            <th>Date</th>
                            <th>Price</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        bookings.map(booking => <BookingRow
                        key={booking._id}
                        booking={booking}
                        handleDelete={handleDelete}
                        handleConfirm={handleConfirm}
                        ></BookingRow>)
                    }
                                                
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Bookings;