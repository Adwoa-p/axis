import { NavLink } from "react-router"
import { Button } from "../ui"

export function Mobile (){
    return (
            <div>
                <h1 className="text-2xl font-semibold mx-auto max-w-3xl text-center p-5"> Join the Axis Community </h1>
                <p className="text-lg mx-auto max-w-3xl text-center px-3">
                Take the next step: Become an instructor or enroll as a learner today 👇!
                </p>
                <div className="flex gap-4 items-center justify-center py-10">
                    <NavLink to="/signup/learner"><Button className="active:translate-1 " size="sm" > Sign Up as Learner </Button></NavLink>
                    <p className="font-bold text-neutral-600">OR</p>
                    <NavLink to="/signup/instructor"><Button variant="secondary" className="active:translate-1"> Sign Up as Instructor</Button></NavLink>
                </div>
            </div>
        )
}