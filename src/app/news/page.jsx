const News = () => {
    return ( 
        <div className="bg-white py-6 px-3">
            <h2 className="font-bold text-3xl text-center text-black">News and press-releases</h2>
            <p className="font-base text-black text-[.8rem] text-center mt-8">For all media inquiries, please send an email to pr@neurodactyl.com</p>
            <div className="flex gap-8  w-[90%] mx-auto mt-16">
                <div className=" flex flex-col w-[33%] cursor-pointer">
                <img src="https://thumb.tildacdn.com/tild6266-3438-4430-a432-636135623663/-/cover/720x540/center/center/-/format/webp/demoapp.jpg" alt="img">
                 </img>
                 <div className="mt-4">
                    <h2 className="text-black font-medium ">New modes of mobile capture SDK: two and four fingers</h2>
                    <p className="font-base text-black text-[.8rem] mt-4">Different capturing modes – for 1, 2 or 4 fingers – are now available in our demo application in web. All modes have user-friendly design with fast capturing process.</p>
                    <p className="font-base text-[#444] text-[.7rem] mt-4">09.05.2023</p>
                 </div>

                </div>

                <div className=" flex flex-col w-[33%] cursor-pointer">
                <img src="https://thumb.tildacdn.com/tild6266-3438-4430-a432-636135623663/-/cover/720x540/center/center/-/format/webp/demoapp.jpg" alt="img">
                 </img>
                 <div className="mt-4">
                    <h2 className="text-black font-medium ">NNeurodactyl Fingerprint recognition algorithm shows top-tier results in NIST PFT III evaluation</h2>
                    <p className="font-base text-black text-[.8rem] mt-4">Neurodactyl achieves world’s top recognition accuracy for border control and visa application datasets.</p>
                    <p className="font-base text-[#444] text-[.7rem] mt-4">09.05.2023</p>
                 </div>

                </div>
               

            </div>
        </div>
     );
}
 
export default News;