import LoginForm from "@/components/auth/login/LoginForm"
import AuthLayout from "../layout/AuthLayout"
import GoogleButton from "@/components/auth/signUp/GoogleButton"

export default function page(){
    return (
        <>
            <AuthLayout>
                 <LoginForm/>
                 <GoogleButton text="Can’t log in?"/>
            </AuthLayout>
        </>
    )
}