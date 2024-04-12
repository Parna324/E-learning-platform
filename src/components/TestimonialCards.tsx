'use client'
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const eLearningTestimonials = [
  {
    quote:
      'The technical courses on this e-learning platform have been invaluable in my career development. The instructors provide clear explanations and practical examples that make complex concepts easy to understand.',
    name: 'Sarah Johnson',
    title: 'Software Engineering Student',
  },
  {
    quote:
      "I've greatly benefited from the cybersecurity courses offered here. The hands-on labs and real-world scenarios helped me apply theoretical knowledge to practical situations, making me feel confident in my skills.",
    name: 'David Smith',
    title: 'Cybersecurity Student',
  },
  {
    quote:
      "The web development courses on this platform exceeded my expectations. The interactive lessons and projects allowed me to build real-world applications while learning new concepts.",
    name: 'Jessica Williams',
    title: 'Web Development Student',
  },
  {
    quote:
      'The data science program here provided me with a solid foundation in data analysis and machine learning. The course material is comprehensive, and the instructors are knowledgeable and supportive.',
    name: 'Michael Brown',
    title: 'Data Science Student',
  },
  {
    quote:
      'Im impressed by the artificial intelligence courses on this platform. The content is up-to-date, and the practical exercises helped me develop skills that are directly applicable in the field.',
    name: 'Emily Chen',
    title: 'Artificial Intelligence Student',
  },
];


function MusicSchoolTestimonials() {
  return (
    <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
        <h2 className="text-3xl font-bold text-center mb-8 z-10">Hear our Harmony: Voices of success</h2>
        <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-6xl">
            <InfiniteMovingCards
                items={eLearningTestimonials}
                direction="right"
                speed="slow"
      />
            </div>
        </div>
    </div>
  )
}

export default MusicSchoolTestimonials