
import img2 from '../../../assets/images/banner/2.jpg'
import img3 from '../../../assets/images/banner/3.jpg'
import img4 from '../../../assets/images/banner/4.jpg'
import img5 from '../../../assets/images/banner/5.jpg'


const Banner = () => {
    return (
        <div className="carousel w-full h-[600px] rounded-lg">
            <div id="slide1" className="carousel-item relative w-full ">
                <img src={img5} className="w-full  object-cover " />
                <div className="absolute flex items-center h-full left-0 w-1/2 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='text-white space-y-7 pl-28'><h2 className='text-6xl font-bold'>Affordable Price For Car Servicing</h2>
                        <p className='text-lg font-semibold'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div>
                            <button className='btn btn-accent mr-5'>Discover More</button>
                            <button className='btn btn-accent btn-outline'>Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide4" className="btn btn-circle bg-white/20 mr-5">❮</a>
                    <a href="#slide2" className="btn btn-circle bg-white/20">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full ">
                <img src={img4} className="w-full  object-cover " />
                <div className="absolute flex items-center h-full left-0 w-1/2 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='text-white space-y-7 pl-28'><h2 className='text-6xl font-bold'>Affordable Price For Car Servicing</h2>
                        <p className='text-lg font-semibold'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div>
                            <button className='btn btn-accent mr-5'>Discover More</button>
                            <button className='btn btn-accent btn-outline'>Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide1" className="btn btn-circle mr-5 bg-white/20">❮</a>
                    <a href="#slide3" className="btn btn-circle bg-white/20">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full ">
                <img src={img2} className="w-full  object-cover " />
                <div className="absolute flex items-center h-full left-0 w-1/2 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='text-white space-y-7 pl-28'><h2 className='text-6xl font-bold'>Affordable Price For Car Servicing</h2>
                        <p className='text-lg font-semibold'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div>
                            <button className='btn btn-accent mr-5'>Discover More</button>
                            <button className='btn btn-accent btn-outline'>Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide2" className="btn btn-circle mr-5 bg-white/20">❮</a>
                    <a href="#slide4" className="btn btn-circle bg-white/20">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full ">
                <img src={img3} className="w-full  object-cover " />
                <div className="absolute flex items-center h-full left-0 w-1/2 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='text-white space-y-7 pl-28'><h2 className='text-6xl font-bold'>Affordable Price For Car Servicing</h2>
                        <p className='text-lg font-semibold'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div>
                            <button className='btn btn-accent mr-5'>Discover More</button>
                            <button className='btn btn-outline btn-accent'>Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide3" className="btn btn-circle mr-5 bg-white/20">❮</a>
                    <a href="#slide1" className="btn btn-circle bg-white/20">❯</a>
                </div>
            </div>
           
        </div>
    );
};

export default Banner;