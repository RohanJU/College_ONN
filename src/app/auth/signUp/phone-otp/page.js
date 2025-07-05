
import AuthLayout from "../../layout/AuthLayout"
import PhoneOTP from "@/components/auth/PhoneOTP"


export default function page() {
    return (
        <>
            <AuthLayout>
                <PhoneOTP/>
            </AuthLayout>
        </>
    )
}; 