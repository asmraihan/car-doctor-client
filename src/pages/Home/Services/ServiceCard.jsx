import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const ServiceCard = ({ service }) => {
    const {_id, title, img, price } = service
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl h-52" />
            </figure>
            <div className="card-body ">
                <h2 className="card-title ">{title}</h2>
                <div className='flex justify-between items-center'>
                <p className="text-xl font-semibold text-orange-500">Price : ${price}</p>
                <div className="card-actions">
                    <Link to={`/checkout/${_id}`}>
                    <button className="btn btn-circle btn-md btn-accent btn-outline border-none outline-white hover:bg-orange-600 text-orange-500 hover:text-white">
                        <FaArrowRight className='h-5 w-5'></FaArrowRight>
                    </button>
                    </Link>
                </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;