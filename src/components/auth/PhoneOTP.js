'use client';
import { useState } from "react";

const EmailOTP = () => {
  const [formData, setFormData] = useState({
    mobileNo: '9113464628',
    mobileNo_otp: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage('');

    try {
      // Example verification logic
      if (formData.mobileNo_otp === '123456') {
        setMessage('✅ mobile number verified successfully!');
      } else {
        setMessage('❌ Invalid OTP. Please try again.');
      }
    } catch (error) {
      setMessage('❌ An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="items-center">
      <h1 className="text-center text-[40px] font-poppins font-medium py-6">OTP Verification</h1>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-7 lg:w-[40%] mx-auto px-10 text-[#666666] font-poppins font-normal text-[16px]"
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="mobileNo">OTP Sent to</label>
          <input
            id="mobile"
            type="number"
            value={formData.mobileNo}
            onChange={handleChange}
            className="border rounded-xl px-2 py-3"
            disabled
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="mobile_otp">Please enter OTP</label>
          <input
            id="mobile_otp"
            type="text"
            value={formData.email_otp}
            onChange={handleChange}
            className="border rounded-xl px-2 py-3"
            placeholder="Enter your OTP"
          />
        </div>

        <div>
          <button
            type="submit"
            className="w-full bg-[#00FFF0] text-white px-5 py-2 rounded-full text-[22px] cursor-pointer"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Verifying...' : 'Verify OTP'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default EmailOTP;
