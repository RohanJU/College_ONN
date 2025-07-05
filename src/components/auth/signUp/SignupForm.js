'use client';

import { useState } from 'react';

export default function SignUpForm() {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        mobile: '',
        studying: '',
        city: '',
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
        if (!formData.fullName) newErrors.fullName = '*Required';
        if (!formData.email) newErrors.email = '*Required';
        if (!formData.mobile) newErrors.mobile = '*Required';
        if (!formData.studying) newErrors.studying = '*Required';
        if (!formData.city) newErrors.city = '*Required';

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            setIsSubmitting(false);
            return;
        }

        try {
            // Simulate sending data
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
                Sign Up
            </h1>

            <form
                onSubmit={handleSubmit}
                className="grid md:grid-cols-2 gap-x-16 gap-y-8 lg:w-[60%] mx-auto px-10 text-[#666666] font-poppins font-normal text-[16px]"
            >
                <div className="flex flex-col gap-2">
                    <label htmlFor="fullName" className="flex justify-between items-center w-full">
                        <span>Full Name</span>
                        {errors.fullName && <span className="text-red-500 text-sm">{errors.fullName}</span>}
                    </label>
                    <input
                        id="fullName"
                        type="text"
                        className="border rounded-xl px-2 py-3"
                        placeholder="Enter your full name"
                        value={formData.fullName}
                        onChange={handleChange}
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="flex justify-between items-center w-full">
                        <span>Email address</span>
                        {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}
                    </label>
                    <input
                        id="email"
                        type="email"
                        className="border rounded-xl px-2 py-3"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="mobile" className="flex justify-between items-center w-full">
                        <span>Mobile number</span>
                        {errors.mobile && <span className="text-red-500 text-sm">{errors.mobile}</span>}
                    </label>
                    <input
                        id="mobile"
                        type="text"
                        className="border rounded-xl px-2 py-3"
                        placeholder="Phone number"
                        value={formData.mobile}
                        onChange={handleChange}
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="studying" className="flex justify-between items-center w-full">
                        <span>Studying In</span>
                        {errors.studying && <span className="text-red-500 text-sm">{errors.studying}</span>}
                    </label>
                    <select
                        id="studying"
                        className="border rounded-xl px-2 py-3"
                        value={formData.studying}
                        onChange={handleChange}
                    >
                        <option value="">Select your course</option>
                        <option value="btech">B.Tech</option>
                        <option value="be">B.E</option>
                        <option value="other">Other</option>
                    </select>
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="city" className="flex justify-between items-center w-full">
                        <span>City You Live In</span>
                        {errors.city && <span className="text-red-500 text-sm">{errors.city}</span>}
                    </label>
                    <select
                        id="city"
                        className="border rounded-xl px-3 py-3"
                        value={formData.city}
                        onChange={handleChange}
                    >
                        <option value="">Select your city</option>
                        <option value="kolkata">Kolkata</option>
                        <option value="delhi">Delhi</option>
                        <option value="other">Other</option>
                    </select>
                </div>

                <div className="col-span-1 col-start-1">
                    <button
                        type="submit"
                        className="w-full bg-[#00FFF0] text-white px-5 py-2 rounded-full text-[22px] cursor-pointer"
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? 'Sending OTP...' : 'Get OTP'}
                    </button>
                </div>

                {message && (
                    <p className="col-span-2 text-center text-green-600 font-medium mt-4">
                        {message}
                    </p>
                )}
            </form>
        </div>
    );
}
