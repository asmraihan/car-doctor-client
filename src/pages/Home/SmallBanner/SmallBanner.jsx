import { FaCalendar, FaMapMarkerAlt, FaPhone } from "react-icons/fa";

const SmallBanner = () => {
    return (

        <div className="flex flex-col lg:flex-row justify-between bg-[#151515] rounded-lg py-6 px-6 lg:py-20 lg:px-20 w-11/12 mx-auto my-20">
            <div className="flex justify-center items-center gap-4">
                <div><FaCalendar className="text-white h-8 w-8"></FaCalendar></div>
                <div>
                    <p className="text-base  text-white mt-2">
                        We are open monday-friday
                    </p>
                    <h1 className="text-2xl font-semibold text-white">
                        7:00 am - 9:00 pm
                    </h1>
                </div>

            </div>
            <div className="flex justify-center items-center gap-4">
                <div><FaPhone className="text-white h-8 w-8"></FaPhone></div>
                <div>
                    <p className="text-base  text-white mt-2">
                    Have a question?
                    </p>
                    <h1 className="text-2xl font-semibold text-white">
                    +2546 251 2658
                    </h1>
                </div>

            </div>
            <div className="flex justify-center items-center gap-4">
                <div><FaMapMarkerAlt className="text-white h-8 w-8"></FaMapMarkerAlt></div>
                <div>
                    <p className="text-base  text-white mt-2">
                    Need a repair? our address
                    </p>
                    <h1 className="text-2xl font-semibold text-white">
                    Liza Street, New York
                    </h1>
                </div>

            </div>

        </div>


    );
};

export default SmallBanner;