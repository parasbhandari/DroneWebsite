import React from 'react'

const OrderDetails = () => {
    return (
        <div className='mt-[120px]'>
            <div className='wrapper '>
                <div>
                    <h2 className='font-semibold text-xl text-(--primary-color)'>Thank You For Your Order.</h2>
                    <div className='flex gap-8 sm:gap-20 mt-5'>
                        <div>
                            <p className='text-[10px] sm:text-sm font-medium'>Order No.</p>
                            <p className='font-semibold text-xs sm:text-base'>19219</p>
                        </div>
                        <div>
                            <p className='text-[10px] sm:text-sm font-medium'>Date</p>
                            <p className='font-semibold text-xs sm:text-base'>January 24, 2024</p>
                        </div>
                        <div>
                            <p className='text-[10px] sm:text-sm font-medium'>Subtotal</p>
                            <p className='font-semibold text-xs sm:text-base'>Rs. 2099.00</p>
                        </div>
                        <div>
                            <p className='text-[10px] sm:text-sm font-medium'>Payment Method</p>
                            <p className='font-semibold text-xs sm:text-base'>Cash On Delivery</p>
                        </div>
                    </div>
                    <hr className='mt-2 w-40 sm:w-80 text-[#7B7B7B]' />
                </div>
                <div className='mt-14 max-w-[600px]'>
                    <p className='text-xl font-semibold'>Pay with Cash on delivery</p>
                    <h2 className='font-bold text-4xl text-(--primary-color) mt-2'>Order Details</h2>
                    <div className='mt-10'>
                        <div className='flex justify-between '>
                            <p className='text-sm sm:text-base font-semibold'>Product Details</p>
                            <p className='text-sm sm:text-base font-semibold'>Total</p>
                        </div>
                        <div className='flex justify-between mt-4'>
                            <p className='text-sm sm:text-base font-medium text-(--primary-color)'>DJI Smart Controller * 1</p>
                            <p className='text-base font-medium text-(--primary-color)'>Rs 50,000</p>
                        </div>
                        <div className='flex  justify-between mt-4'>
                            <p className='text-sm sm:text-base font-semibold'>Subtotal</p>
                            <p className='text-sm sm:text-base font-medium text-(--primary-color)'>Rs 50,000</p>
                        </div>
                        <div className='flex justify-between mt-4'>
                            <p className='text-sm sm:text-base font-medium text-(--primary-color)'>Shipping</p>
                            <p className='text-sm sm:text-base font-medium text-(--primary-color)'>Rs 100</p>
                        </div>
                        <div className='flex justify-between mt-4' >
                            <p className='text-sm sm:text-base font-medium text-(--primary-color)'>Payment Method</p>
                            <p className='text-base font-medium text-(--primary-color)'>Cash On Delivery</p>
                        </div>
                        <div className='flex justify-between mt-4'>
                            <p className='text-sm sm:text-base font-medium text-(--primary-color)'>Total</p>
                            <p className='text-sm sm:text-base font-semibold'>Rs 100,100.00</p>
                        </div>
                    </div>
                </div>
                <div className='mt-14 flex flex-col gap-4 pb-10'>
                    <h2 className='font-bold text-4xl text-(--primary-color) mt-2'>Billing Address</h2>
                    <p className='text-sm sm:text-base font-medium text-(--primary-color)'>Ram Sharma</p>
                    <p className='text-sm sm:text-base font-medium text-(--primary-color)'>Bharatpur-07, Chitwan</p>
                    <p className='text-sm sm:text-base font-medium text-(--primary-color)'>ameraica -04, california</p>
                    <p className='text-sm sm:text-base font-medium text-(--primary-color)'>Bharatpur</p>
                    <p className='text-sm sm:text-base font-medium text-(--primary-color)'>44200</p>
                    <p className='text-sm sm:text-base font-medium text-(--primary-color)'>+977 9876543210</p>
                    <p className='text-sm sm:text-base font-medium text-(--primary-color)'>abc@gmail.com</p>

                </div>
            </div>
        </div>
    )
}

export default OrderDetails