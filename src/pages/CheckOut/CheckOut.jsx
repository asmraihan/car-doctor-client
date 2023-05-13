import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
// checkout or booking component
const CheckOut = () => {
    const service = useLoaderData()
    const { _id, title, price, img } = service
    const {user} = useContext(AuthContext)
    const handleCheckOut =(event)=>{
        event.preventDefault()
        const form = event.target
        const name = form.name.value
        const date = form.date.value
        const email = user?.email
        // const name = form.name.value
        // const name = form.name.value
        const booking = {
            customerName: name,
            email,
            img,
            date,
            service: title,
            service_id: _id,
            price: price
        }
        console.log(booking)

        fetch('https://car-doctor-server-woad-ten.vercel.app/bookings', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(booking)
        })
        .then(res=> res.json())
        .then(data=> {
            console.log(data)
            if(data.insertedId){
                alert('Service booked successfully')
            }
        })
    }
    return (
        <div className="bg-zinc-100 p-10 rounded-lg">
            <h2 className="text-3xl text-center">Book Service : {title}</h2>
            <form onSubmit={handleCheckOut} className="p-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="name" defaultValue={user?.displayName} className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Date</span>
                        </label>
                        <input type="date" name="date" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" name="email" placeholder="email" defaultValue={user?.email} className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Due Ammount</span>
                        </label>
                        <input type="text" defaultValue={'$'+price} className="input input-bordered" />
                    </div>
                </div>
                <div className="form-control mt-10">
                    <input type="submit" value="Order Confirm" className="btn btn-accent" />
                </div>
            </form>
            <div className="card-body">
            </div>
            
        </div>
    );
};

export default CheckOut;