const MiniFooter = () => {
  return (
    <div className="bg-(--primary-color)">
      <div className="wrapper flex flex-col sm:flex-row items-center justify-between sm:mb-[30px] ">
        <p className="font-[400] font-poppins text-[9px] sm:text-[13px] md:text-[14px] lg:text-[16px] mr-0 text-white">
          © 2025 | All Right Reserved by Everest Sky Flying Academy
        </p>
        <p className=" text-[8px] sm:text-[10px] lg:text-[14px] text-white">
          Designed and Developed by-
          <a
            href="https://w3developers.com.np/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-400 hover:text-orange-500"
          >
            w3developers
          </a>
        </p>
      </div>
    </div>
  );
};
export default MiniFooter;
