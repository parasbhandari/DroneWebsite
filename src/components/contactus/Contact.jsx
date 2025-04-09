import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";

const Contact = () => {
  return (
    <div className="wrapper py-2 sm:py-4 md:py-8">
      <div className="w-full mb-[10px] sm:mb-[60px] md:mb-[80px] flex flex-col-reverse md:flex-row gap-4 lg:gap-6 mt-[120px]">
        {/* first column  */}
        <div className="w-full md:w-4/12 lg:w-3/12 flex flex-col justify-between gap-4 sm:gap-6 md:gap-8">
          {/* address  */}
          <div className="flex-1 rounded-md flex flex-col items-center justify-center bg-[#0F334C] shadow-md px-2 py-6 cursor-pointer transition-transform duration-300 hover:scale-108 hover:bg-[#F26122]">
            <FaLocationDot className="w-4 h-4 md:w-6 md:h-6 text-[white] " />
            <h2 className="text-[14px] md:text-[16px] lg:text-[20px] font-[600] text-white">
              Address
            </h2>
            <p className="text-[10px] md:text-[12px] lg:text-[14px] xl:text-[16px] font-[500] text-white text-center">
              Bharatpur-4, Gaindachowck, Chitwan, Nepal
            </p>
          </div>

          {/* phone  */}
          <a href="tel:+9779849081900">
            <div className="flex-1 rounded-md flex flex-col items-center justify-center bg-[#0F334C] shadow-md px-2 py-6 cursor-pointer transition-transform duration-300 hover:scale-108 hover:bg-[#F26122]">
              <FaPhone className="w-4 h-4 md:w-6 md:h-6 text-[white] " />
              <h2 className="text-[14px] md:text-[16px] lg:text-[20px] font-[600] text-white">
                Phone
              </h2>
              <p className="text-[10px] md:text-[12px] lg:text-[14px] xl:text-[16px] font-[500] text-white">
                +977 9849081900
              </p>
            </div>
          </a>

          {/* gmail  */}
          <a href="mailto:eversetskyflyingacademy@gmail.com" aria-label="Send an email">
            <div className="flex-1 rounded-md flex flex-col items-center justify-center bg-[#0F334C] shadow-md px-2 py-6 cursor-pointer transition-transform duration-300 hover:scale-108 hover:bg-[#F26122]">
              <IoMdMail className="w-4 h-4 md:w-6 md:h-6 text-[white] " />
              <h2 className="text-[14px] md:text-[16px] lg:text-[20px] font-[600] text-white">
                Email
              </h2>
              <p className="text-[10px] md:text-[12px] lg:text-[14px] xl:text-[16px] font-[500] text-white">
                eversetskyflyingacademy@gmail.com
              </p>
            </div>
          </a>

          {/* map  */}
          <div className="flex-1 rounded-md cursor-pointer transition-transform duration-300 hover:scale-108">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.808764142357!2d84.4153034739154!3d27.692304876191173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3994fb2c84c668e9%3A0xb57386dac846bebb!2sW3%20Developers%20Pvt.%20Ltd.!5e0!3m2!1sen!2snp!4v1738839379320!5m2!1sen!2snp"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-64 md:h-fit rounded-md shadow-md"
            ></iframe>
          </div>
        </div>
        {/* second column: form section */}
        <div className="w-full md:w-8/12 lg:w-9/12 bg-white p-6 md:p-8 rounded-md shadow-2xl">
          <form action="" className="flex flex-col gap-3 md:gap-5">
            <div className="flex flex-col gap-2">
              <label
                htmlFor=""
                className="text-[16px] sm:text-[18px] md:text-[20px] font-[600]"
              >
                Name <span className="text-orange-400">*</span>
              </label>
              <input
                type="text"
                className="w-full border border-[#53768B] outline-none text-[#B2B1B9] text-[14px] md:text-[12px] font-[400] p-2 sm:p-3 md:p-4 rounded-md"
                placeholder="Eg: John Doe"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor=""
                className="text-[16px] sm:text-[18px] md:text-[20px] font-[600]"
              >
                Email <span className="text-orange-400">*</span>
              </label>
              <input
                type="text"
                className="w-full border border-[#53768B] outline-none text-[#B2B1B9] text-[14px] md:text-[12px] font-[400] p-2 sm:p-3 md:p-4 rounded-md"
                placeholder="Eg: johndoe@gmail.com"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor=""
                className="text-[16px] sm:text-[18px] md:text-[20px] font-[600]"
              >
                Mobile <span className="text-orange-400">*</span>
              </label>
              <input
                type="text"
                className="w-full border border-[#53768B] outline-none text-[#B2B1B9] text-[14px] md:text-[12px] font-[400] p-2 sm:p-3 md:p-4 rounded-md"
                placeholder="Eg: 9845******"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor=""
                className="text-[16px] sm:text-[18px] md:text-[20px] font-[600]"
              >
                Subject <span className="text-orange-400">*</span>
              </label>
              <input
                type="text"
                className="w-full border border-[#53768B] outline-none text-[#B2B1B9] text-[14px] md:text-[12px] font-[400] p-2 sm:p-3 md:p-4 rounded-md"
                placeholder="Enter Your Subject"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor=""
                className="text-[16px] sm:text-[18px] md:text-[20px] font-[600]"
              >
                Message <span className="text-orange-400">*</span>
              </label>
              <textarea
                rows={3}
                type="text"
                className="w-full border border-[#53768B] outline-none text-[#B2B1B9] text-[14px] md:text-[12px] font-[400] p-2 sm:p-3 md:p-4 rounded-md"
                placeholder="Enter Your Message"
              ></textarea>
            </div>
            <button className="w-fit text-[16px] md:text-[20px] rounded-md font-[600]  py-1 sm:py-2 px-10 sm:px-16 md:px-20 bg-[#0F334C] text-white hover:bg-(--secondary-color)  cursor-pointer">
              Submit
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default Contact;
