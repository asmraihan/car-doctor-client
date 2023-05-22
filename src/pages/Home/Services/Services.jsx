import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
    const [services, setServices] = useState([])
    const [asc, setAsc] = useState(true)
    useEffect(()=>{
        fetch(`http://localhost:5000/services?sort=${asc ? 'asc' : 'desc'}`)
        .then(res=> res.json())
        .then(data=> setServices(data))
    },[asc])
    return (
        <div>
            <div className="text-center space-y-3">
                <h3 className='text-2xl font-bold text-orange-600'>Service</h3>
                <h1 className='text-5xl font-semibold'>Our Service Area</h1>
                <p className=''>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which dont look even slightly believable. </p>
                <button className="btn btn-primary"
                onClick={()=> setAsc(!asc)}
                >{asc ? 'Price High to Low' : 'Price Low to High'}</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    services.map(service=> <ServiceCard
                    key={service._id}
                    service={service}
                    ></ServiceCard>)
                }

            </div>
        </div>
    );
};

export default Services;