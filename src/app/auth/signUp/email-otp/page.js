
import AuthLayout from "../../layout/AuthLayout"
import EmailOTP from "@/components/auth/EmailOTP"

export default function page() {
    return (
        <>
            <AuthLayout>
                <EmailOTP/>
            </AuthLayout>
        </>
    )
}; 