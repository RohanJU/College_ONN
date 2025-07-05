
export function handleApiError(error) {
    if (error.code === 11000) {
        return new Response(JSON.stringify({
            message: 'User already exists'

        }), { status: 409 })
    }
    return new Response(JSON.stringify({
        message: "Server error",
        error: error.message || "Something went wrong",
    }), { status: 500 });
}