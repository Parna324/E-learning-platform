"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const technicalCoursesContent = [
    {
      title: 'Unlock Your Potential: A Journey in Technical Mastery',
      description:
        'Embark on a journey to master technical skills tailored to your individual needs. Our personalized instruction adapts to your learning pace, laying the groundwork for unparalleled growth and expertise. At our learning platform, your ambitions meet our dedicated support, fostering a harmonious path to mastery.',
    },
    {
      title: 'Unlock Your Potential: A Journey in Technical Mastery',
      description:
        'Embark on a journey to master technical skills tailored to your individual needs. Our personalized instruction adapts to your learning pace, laying the groundwork for unparalleled growth and expertise. At our learning platform, your ambitions meet our dedicated support, fostering a harmonious path to mastery.',
    },
    {
      title: 'Unlock Your Potential: A Journey in Technical Mastery',
      description:
        'Embark on a journey to master technical skills tailored to your individual needs. Our personalized instruction adapts to your learning pace, laying the groundwork for unparalleled growth and expertise. At our learning platform, your ambitions meet our dedicated support, fostering a harmonious path to mastery.',
    },
    {
      title: 'Real-Time Feedback & Collaboration',
      description:
        'Immerse yourself in an interactive learning experience where feedback is immediate, akin to real-time changes in collaborative projects. This approach enriches your understanding and mastery of technical concepts and problem-solving techniques.',
    },
    {
      title: 'Cutting-Edge Curriculum',
      description:
        'Our curriculum is continuously updated to incorporate the latest trends and technologies in technical education, ensuring you’re always learning with the most current and effective methods. Bid farewell to outdated materials and embrace an education that evolves with industry demands.',
    },
    {
      title: 'Limitless Learning Opportunities',
      description:
        'With our extensive resource library and diverse course offerings, you’ll never run out of new avenues to explore. Our platform provides continuous opportunities for skill enhancement, ensuring your technical prowess is always advancing.',
    },
  ];

function WhyChooseUs() {
  return (
    <div>
        <StickyScroll content={technicalCoursesContent} />
    </div>
  )
}

export default WhyChooseUs;
