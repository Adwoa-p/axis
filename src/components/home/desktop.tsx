import { Button } from "../ui"

export function Desktop(){
    return (
        <>
        <div className="flex justify-center pt-15">
            <img src="hero.avif" alt="hero animation" className="rounded-4xl"/>
            </div>
            <h1 className="text-5xl font-semibold flex justify-center p-7">Axis Learning Platform</h1>
            <p className="text-lg mx-auto max-w-3xl line-clamp-4 text-center ">
                Axis is a modern <span className="text-primary font-semibold">Learning Platform </span> 
                designed as the central hub for the academic community. 
                It allows <span className="text-primary font-semibold">Learners</span> to easily find and master new skills and enables 
                <span className="text-primary font-semibold"> Instructors </span>  to efficiently create, manage, and deliver engaging courses, 
                  by providing the necessary structure and tools for success.
            </p>
            <div className="flex justify-center p-5">
                   <Button variant="secondary">Request Demo</Button>
            </div>
        </>
    )
}