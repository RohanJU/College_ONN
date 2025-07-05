'use client';

import { useState } from 'react';

export default function LoginForm() {
    const [formData, setFormData] = useState({
        email: '',
        mobile: '',
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [id]: value,
        }));
        setErrors((prev) => ({
            ...prev,
            [id]: '',
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setMessage('');

        const newErrors = {};
        if (!formData.email) newErrors.email = '*Required';
        if (!formData.mobile) newErrors.mobile = '*Required';

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            setIsSubmitting(false);
            return;
        }

        try {
            // Simulate sending OTP
            setMessage('✅ OTP has been sent to your email.');
        } catch (error) {
            setMessage('❌ Something went wrong. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="items-center">
            <h1 className="text-center text-[40px] font-poppins font-medium py-6">
                Log In
            </h1>

            <form
                onSubmit={handleSubmit}
                className="grid gap-y-8 w-full md:w-[60%] lg:w-[40%] mx-auto px-10 text-[#666666] font-poppins text-[16px]"
            >
                {/* Email Field */}
                <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="flex justify-between items-center">
                        <span>Email address</span>
                        {errors.email && (
                            <span className="text-red-500 text-sm">{errors.email}</span>
                        )}
                    </label>
                    <input
                        id="email"
                        type="email"
                        className="border rounded-xl px-3 py-3 focus:outline-none focus:ring-2 focus:ring-[#00FFF0]"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>

                {/* Mobile Field */}
                <div className="flex flex-col gap-2">
                    <label htmlFor="mobile" className="flex justify-between items-center">
                        <span>Mobile number</span>
                        {errors.mobile && (
                            <span className="text-red-500 text-sm">{errors.mobile}</span>
                        )}
                    </label>
                    <input
                        id="mobile"
                        type="text"
                        className="border rounded-xl px-3 py-3 focus:outline-none focus:ring-2 focus:ring-[#00FFF0]"
                        placeholder="Enter your mobile number"
                        value={formData.mobile}
                        onChange={handleChange}
                    />
                </div>

                {/* Submit Button */}
                <div>
                    <button
                        type="submit"
                        className="w-full bg-[#00FFF0] text-white px-5 py-3 rounded-full text-[20px] font-medium hover:bg-[#00e6d8] transition-all"
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? 'Sending OTP...' : 'Get OTP'}
                    </button>
                </div>

                {/* Message Display */}
                {/* {message && (
                    <p className="text-center text-green-600 font-medium mt-2">
                        {message}
                    </p>
                )} */}
            </form>
        </div>
    );
}
