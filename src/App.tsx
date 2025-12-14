import { Header, Button  } from "./components/ui/";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { BookOpenIcon, UserCircleIcon, SpeakerWaveIcon } from '@heroicons/react/24/solid'

const valueCards = [
  {
    title: "Centralized Access",
    description: "One login grants full access to all enrolled courses, content creation tools, and administrative dashboards. Everything revolves around the Axis.",
    iconName: "BiHomeCircle" 
  },
  {
    title: "Minimalist Interface",
    description: "A clean, modern design focuses user attention solely on learning or teaching, enhancing comprehension and efficiency.",
    iconName: "FiFeather" 
  },
  {
    title: "Intuitive Course Builder",
    description: "Drag-and-drop tools allow instructors to quickly structure, upload, and organize rich multimedia content without needing technical skills.",
    iconName: "MdOutlineDraw" 
  },
  {
    title: "Personalized Learning Paths",
    description: "Learners can track precise progress, review mastery levels, and easily see next steps to achieve their skill goals.",
    iconName: "FaChalkboardTeacher" 
  },
  {
    title: "Automated Grading & Feedback",
    description: "Streamline the evaluation process with automated assessment grading and scheduled feedback delivery, freeing up instructor time.",
    iconName: "AiOutlineRobot" 
  },
  {
    title: "Seamless Mobile Experience",
    description: "Fully responsive design ensures learners can access and interact with course materials flawlessly on any device (phone, tablet, desktop).",
    iconName: "RiDeviceLine" 
  },
  {
    title: "Robust Analytics Dashboard",
    description: "Instructors gain deep insights into student engagement, course popularity, and performance metrics to continuously improve content.",
    iconName: "SiSimpleanalytics" 
  },
  {
    id: 8,
    title: "Scalable Architecture",
    description: "Built on InnovoTech Lab's robust technology, Axis handles unlimited users and growing content libraries without performance dips.",
    iconName: "HiOutlineScale" 
  }
];

const targetAudiences = [
  {
    role: "Learners",
    description: "Individuals focused on skill mastery, enrolling in courses, and tracking personal progress through an intuitive interface."
  },
  {
    role: "Instructors",
    description: "Educators who need to create, manage, and deliver engaging course content efficiently, utilizing analytics for improved teaching."
  },
  {
    role: "Administrators",
    description: "Organizational leaders managing user accounts, security, and ensuring the platform’s scalability and stable architecture."
  }
];

const testimonials = [
  {
    quote: "Axis makes learning feel effortless. The clean interface means I spend zero time navigating and 100% of my time focused on the material. My progress tracking is clear, motivating me to finish every course.",
    name: "Anya Sharma",
    role: "Learner (Data Science Course)",
  },
  {
    quote: "Moving my curriculum to Axis was seamless. The intuitive drag-and-drop course builder saved me days of setup time, and the robust analytics dashboard finally gives me the clear data I need to improve my teaching.",
    name: "Dr. Ethan Cole",
    role: "Instructor (University History Dept.)",
  },
  {
    quote: "From an organizational standpoint, Axis is a game-changer. The scalability is excellent, and having a single, centralized platform for all our training and compliance needs has dramatically simplified our workflow.",
    name: "Maria Rodriguez",
    role: "Administrator (Training Director)",
  },
  {
    quote: "The minimalist design of Axis is its superpower. It keeps our students engaged and ensures accessibility across all devices. It's the stable foundation our educational initiative required.",
    name: "Kenji Tanaka",
    role: "Instructor (Vocational Training)",
  },
  {
    quote: "The mobile experience is flawless. I can complete my assignments and watch lectures during my commute, which is vital for balancing work and studying. Axis truly lets me learn anywhere.",
    name: "David Lee",
    role: "Learner (Certification Program)",
  },
  {
    quote: "Automated grading and feedback tools on Axis have cut my administrative time in half. I can now focus on personalized student interaction instead of manual paperwork.",
    name: "Sarah Chen",
    role: "Instructor (Online Business Academy)",
  },
  {
    quote: "We needed a robust LMS that could handle thousands of simultaneous users without performance dips. Axis's stable architecture has proven to be the future-proof solution we were looking for.",
    name: "Omar Hassan",
    role: "Administrator (Tech Startup HR)",
  },
  {
    quote: "The centralized access means I never have to dig for materials. All my resources, communication tools, and grades are on one intuitive dashboard. It’s exactly what a modern learner needs.",
    name: "Olivia Green",
    role: "Learner (College Prep Course)",
  },
];

function App() {

  return (
    <>
      <Header/>
      <main className="flex flex-col justify-center items-center gap-15 ">

      {/* Section 1 */}
      <section id="home" className="min-h-screen py-7">
        <div className="flex justify-center pt-15">
          <img src="hero.avif" alt="hero animation" className="rounded-4xl"/>
        </div>
        <h1 className="text-5xl font-semibold flex justify-center p-7">Axis Learning Platform</h1>
        <p className="text-lg mx-auto max-w-3xl line-clamp-4 text-center ">
          Axis is a modern <span className="text-primary font-semibold">Learning Platform</span> 
          designed as the central hub for the academic community. 
          It allows <span className="text-primary font-semibold">Learners</span> to easily find and master new skills and enables 
          <span className="text-primary font-semibold"> Instructors </span>  to efficiently create, manage, and deliver engaging courses, 
          by providing the necessary structure and tools for success.
        </p>
        <div className="flex justify-center p-5">
           <Button variant="secondary">Request Demo</Button>
        </div>
      </section>

      {/* Section 2 */}
      <section className="bg-white min-h-screen py-15" id="about">
        <h1 className="text-4xl font-semibold line-clamp-2 mx-auto max-w-3xl text-center p-5">Created to adapt <br /> to your learning and teaching style</h1>
        <p className="text-lg mx-auto max-w-3xl line-clamp-4 text-center">
          Get Access to hundreds of different Courses, taught by <br /> experienced and globally trusted Instructors
        </p>
        <div className="grid grid-cols-4 gap-5 px-50 py-10">
          {
            valueCards.map((value) => (
              <Card>
                <CardHeader>
                  <BookOpenIcon className="size-6 text-primary"/>
                  <CardTitle>{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{value.description}</p>
                </CardContent>
              </Card>
            ))
          }
        </div>
      </section>

      {/* Section 3 */}
      <section className="bg-white min-h-screen py-20" id="audience">
        <p className="text-lg mx-auto max-w-3xl line-clamp-4 text-center font-semibold text-primary"> OUR AUDIENCE </p>
        <h1 className="text-4xl font-semibold line-clamp-2 mx-auto max-w-3xl text-center pt-3">Specially designed for <br /> learners and instructors </h1>
        <div className="grid grid-cols-3 gap-5 px-50 py-10">
          {
            targetAudiences.map((audience) => (
              <Card className="h-100 ">
                <CardHeader className="pt-10">
                  <UserCircleIcon className="size-15 text-primary"/>
                  <CardTitle className="font-bold text-xl">{audience.role}</CardTitle>
                </CardHeader>
                <CardContent  className="font-semi-bold text-lg">
                  {audience.description}
                </CardContent>
              </Card>
            ))
          }
        </div>
      </section>

      {/* Section 4 */}
      <section className="bg-white min-h-screen py-20" id="faqs">
        <h1 className="text-4xl font-semibold line-clamp-2 mx-auto max-w-3xl text-center">Hear about our credibility<br /> from our trusted customers </h1>
        <p className="text-lg mx-auto max-w-3xl line-clamp-4 text-center pt-2">
          We are here to deliver to you nothing but the best service
        </p>
        <div className="grid md:grid-cols-3 grid-cols-4 gap-5 px-50 py-10">
          {
            testimonials.map((testimonial) => (
              <Card className="h-100 ">
                <CardHeader className="pt-5">
                  <SpeakerWaveIcon className="size-15 text-primary-foreground"/>
                </CardHeader>
                <CardContent  className="font-semi-bold text-lg flex flex-col gap-5">
                  <p>{testimonial.quote}</p>
                  <div className="flex gap-5">
                    <div className="bg-primary w-10 h-10 rounded-4xl my-1"></div>
                    <div className="flex flex-col gap-1">
                      <p className="text-sm">{testimonial.name}</p>
                      <p className="text-sm">{testimonial.role}</p>
                    </div>
                    
                  </div>
                </CardContent>
              </Card>
            ))
          }
        </div>
      </section>
    </main>
    </>
  );
}

export default App;
