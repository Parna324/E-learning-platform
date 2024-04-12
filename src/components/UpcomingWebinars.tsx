'use client'
import Link from "next/link"
import { HoverEffect } from "./ui/card-hover-effect";

function UpcomingCourses() {

  const featuredCourses = [
    {
      title: 'Introduction to Python Programming',
      description:
        'Learn the fundamentals of Python programming language from scratch.',
      slug: 'introduction-to-python-programming',
      isFeatured: true,
    },
    {
      title: 'Web Development Bootcamp',
      description:
        'Build responsive and dynamic websites with HTML, CSS, and JavaScript.',
      slug: 'web-development-bootcamp',
      isFeatured: true,
    },
    {
      title: 'Data Science Fundamentals',
      description:
        'Explore the principles of data analysis and machine learning with Python.',
      slug: 'data-science-fundamentals',
      isFeatured: true,
    },
    {
      title: 'Cybersecurity Essentials',
      description:
        'Understand the basics of cybersecurity and learn how to protect against cyber threats.',
      slug: 'cybersecurity-essentials',
      isFeatured: true,
    },
    {
      title: 'UI/UX Design Principles',
      description:
        'Master the principles of user interface and user experience design for digital products.',
      slug: 'ui-ux-design-principles',
      isFeatured: true,
    },
    {
      title: 'Digital Marketing Strategies',
      description:
        'Learn effective digital marketing strategies to promote products and services online.',
      slug: 'digital-marketing-strategies',
      isFeatured: true,
    },
  ];

  return (
    <div className="p-12 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">FEATURED COURSES</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Advance Your Skills with Our E-Learning Courses</p>
        </div>

        <div className="mt-10">
          <HoverEffect
          items={featuredCourses.map(course => (
            {
              title: course.title,
              description: course.description,
              link: '/'
            }
          ))}
          />
        </div>

        <div className="mt-10 text-center">
          <Link href={"/"}
          className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200"
          >
            View All Courses
          </Link>
        </div>
      </div>
    </div>
  )
}

export default UpcomingCourses;
