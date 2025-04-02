import zod from 'zod'
export const signupobject = zod.object({
    name:zod.string().regex(/^[a-zA-Z]+$/),
    password:zod.string().min(6).regex(/^[a-z0-9]*$/i),
    experience:zod.number(),
    rating:zod.number(),
    skills:zod.string().array().nonempty()

})

export const signinobject = zod.object({
    email:zod.string().email({ message: "Invalid email address" }),
    password:zod.string().min(6).regex(/^[a-z0-9]*$/i)
})