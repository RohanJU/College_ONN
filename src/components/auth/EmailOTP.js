'use client';
import { useState } from "react";

const EmailOTP = () => {
  const [formData, setFormData] = useState({
    email: 'avinash@gmail.com',
    email_otp: '',
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
      if (formData.email_otp === '123456') {
        setMessage('✅ Email verified successfully!');
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
      <h1 className="text-center text-[40px] font-poppins font-medium py-6">Email Verification</h1>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-7 lg:w-[40%] mx-auto px-10 text-[#666666] font-poppins font-normal text-[16px]"
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="email">OTP Sent to</label>
          <input
            id="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            className="border rounded-xl px-2 py-3"
            disabled
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="email_otp">Please enter OTP</label>
          <input
            id="email_otp"
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
            {isSubmitting ? 'Verifying...' : 'Verify Email'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default EmailOTP;
