import { FaArrowRight } from 'react-icons/fa';
const ServiceCard = ({ service }) => {
    const { title, img, price } = service
    return (
        <div className="card w-96 bg-base-100 shadow-xl ">
            <figure className="px-10 pt-10 ">
                <img src={img} alt="Shoes" className="rounded-xl " />
            </figure>
            <div className="card-body ">
                <h2 className="card-title ">{title}</h2>
                <div className='flex justify-between items-center'>
                <p className="text-xl font-semibold text-orange-500">Price : ${price}</p>
                <div className="card-actions">
                    <button className="btn btn-circle btn-accent btn-outline outline-white hover:bg-orange-600 text-orange-500 hover:text-white">
                        <FaArrowRight className='h-5 w-5'></FaArrowRight>
                    </button>
                </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;