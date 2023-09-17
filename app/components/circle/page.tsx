const Circle = () => {
    return (
      <div className="mx-auto my-10 flex justify-between">
      <div className="relative rounded-[50%] bg-purple1 w-[60px] h-[60px] mx-24 z-10">
        <span className="absolute inset-0 text-[20px] font-Poppins flex justify-center items-center ">1.</span>
      </div>
      <div className="relative rounded-[50%] bg-purple1 w-[60px] h-[60px] mx-24 z-10">
        <span className="absolute inset-0 text-[20px] font-Poppins flex justify-center items-center ">2.</span>
      </div>
      <div className="relative rounded-[50%] bg-purple1 w-[60px] h-[60px] mx-24 z-10">
        <span className="absolute inset-0 text-[20px] font-Poppins flex justify-center items-center ">3.</span>
      </div>
      <div className="relative rounded-[50%] bg-purple1 w-[60px] h-[60px] mx-24 z-10">
        <span className="absolute inset-0 text-[20px] font-Poppins flex justify-center items-center ">4.</span>
      </div>
      <div className="absolute bg-purple1 h-2 w-[1140px] mx-24 mt-7"></div>
        </div>
        
    );
  };
  
  export default Circle;