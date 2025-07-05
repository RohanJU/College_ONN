import SignupForm from "@/components/auth/signUp/SignupForm"
import AuthLayout from "../layout/AuthLayout"
import GoogleButton from "@/components/auth/signUp/GoogleButton"

export default function page() {
    return (
        <>
            <AuthLayout>
                <SignupForm />
                <GoogleButton text="Have log in?"/>
            </AuthLayout>
        </>
    )
}; 