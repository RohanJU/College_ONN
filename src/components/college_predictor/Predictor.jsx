'use client';

import { useState } from 'react';

export default function Predictor() {
    const [formData, setFormData] = useState({
        exam: '',
        rank: '',
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
        if (!formData.exam) newErrors.exam = '*Required';
        if (!formData.rank) newErrors.rank = '*Required';

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            setIsSubmitting(false);
            return;
        }

        try {
            // Simulate successful verification
            setMessage('✅ Email successfully verified!');
        } catch (error) {
            setMessage('❌ Verification failed. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };


    return (
        <div className="items-center bg-[rgba(157,204,255,0.4)] lg:p-10 lg:pb-[100px]">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mx-auto p-4 lg:w-[70%]">
                <div className='flex flex-col justify-between'>
                    <h1 className='font-medium text-[36px] text-[#2F327D] mb-3'>Find Your College</h1>
                    <p>
                        <strong>College onn</strong> is a platform that helps students explore career paths, discover top colleges, get expert counseling, and stay updated on entrance exams — all in one place. From choosing the right course to preparing for JEE, NEET, CUET, and more, College onn makes your college journey simple, smart, and stress-free.
                    </p>
                    <a href="#" className="text-blue-500 underline mt-2 inline-block">Learn more</a>
                </div>
                <div className='mx-auto'>
                    <img src="./image/predictor/image.png" width={400} height={400}></img>
                </div>
            </div>

            <form
                onSubmit={handleSubmit}
                className="mt-10 flex flex-col gap-7 lg:w-[40%] mx-auto px-10 text-[#666666] font-poppins text-[16px]"
            >
                {/* Exam Selection */}
                <div className="flex flex-col gap-2">
                    <label htmlFor="exam" className="flex justify-between items-center">
                        <span>Select Your Exam</span>
                        {errors.exam && (
                            <span className="text-red-500 text-sm">{errors.exam}</span>
                        )}
                    </label>
                    <select
                        id="exam"
                        className="border rounded-xl px-2 py-3 focus:outline-none"
                        value={formData.exam}
                        onChange={handleChange}
                    >
                        <option value="">Select your course</option>
                        <option value="btech">B.Tech</option>
                        <option value="be">B.E</option>
                        <option value="other">Other</option>
                    </select>
                </div>

                {/* Rank Input */}
                <div className="flex flex-col gap-2">
                    <label htmlFor="rank" className="flex justify-between items-center">
                        <span>Enter Your Rank</span>
                        {errors.rank && (
                            <span className="text-red-500 text-sm">{errors.rank}</span>
                        )}
                    </label>
                    <input
                        id="rank"
                        type="text"
                        value={formData.rank}
                        onChange={handleChange}
                        className="border rounded-xl px-2 py-3 focus:outline-none"
                        placeholder="Enter your rank"
                    />
                </div>

                {/* Submit Button */}
                <div>
                    <button
                        type="submit"
                        className="w-full bg-[#00FFF0] text-white px-5 py-3 rounded-full text-[20px] font-medium hover:bg-[#00e6d8] transition-all cursor-pointer"
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? 'Finding....' : 'Find Your College'}
                    </button>
                </div>
            </form>
        </div>
    );
}
