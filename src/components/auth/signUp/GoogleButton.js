import { FcGoogle } from "react-icons/fc";

export default function GoogleButton({text}) {
    return (
        <div className="flex flex-col gap-6 items-center mt-10">
            {/* Divider with OR */}
            <div className="flex items-center w-[400px]">
                <div className="flex-grow border-b-2 border-[#666666]"></div>
                <p className="px-4 text-[#666666]">OR</p>
                <div className="flex-grow border-b-2 border-[#666666]"></div>
            </div>

            {/* Google Sign-in Button */}
            <button className="flex items-center gap-2 justify-center border-2 border-[#666666] py-2 px-6 rounded-full w-[300px] cursor-pointer">
                <FcGoogle size={30} />
                <span className="text-xl">Continue with Google</span>
            </button>

            {/* Login Link */}
            <a className="font-bold underline cursor-pointer">
                {text}
            </a>

            {/* reCAPTCHA Message */}
            <p className="text-center text-[#666666] text-sm">
                Secure login with reCAPTCHA subject to <br />
                Google <span className="font-bold underline cursor-pointer">Terms</span> &{" "}
                <span className="font-bold underline cursor-pointer">Privacy</span>
            </p>
        </div>
    );
}
