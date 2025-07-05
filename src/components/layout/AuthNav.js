import { IoIosArrowRoundBack } from "react-icons/io";



const AuthNav = () => {
    return (
        <div className="border-b-2 border-[#666666] h-[50px] text-[#666666] flex items-center px-4">
            <div className="flex items-center gap-2 cursor-pointer">
                <IoIosArrowRoundBack size={30} />
                <p>Back</p>
            </div>
        </div>
    );
};

export default AuthNav;