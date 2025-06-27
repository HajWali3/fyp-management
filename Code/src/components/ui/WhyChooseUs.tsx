"use client";
import React from "react";
import { StickyScroll } from "./sticky-scroll-reveal";

const musicSchoolContent = [
  {
    title: "Collaborative Jamming",
    description:
      "Join fellow musicians in real-time jam sessions. Whether you're practicing or composing, collaborate seamlessly with other students and instructors to improve your skills and create beautiful music together.",
  },
  {
    title: "Live Feedback",
    description:
      "Get instant feedback from instructors during practice sessions. Watch improvements unfold in real time as your teacher guides you through techniques and performance tips, all within a dynamic digital environment.",
  },
  {
    title: "Performance History",
    description:
      "Keep track of your progress with a versioned history of your performances and practice sessions. Listen back, compare, and monitor your growth as a musician with ease and clarity.",
  },
  {
    title: "Musical Inspiration",
    description:
      "Never run out of creative energy! Our library of curated music content, tips, and community recordings will keep you inspired and motivated to explore new sounds and styles.",
  },
];

function WhyChooseUs() {
  return (
    <div>
      <StickyScroll content={musicSchoolContent} />
    </div>
  );
}

export default WhyChooseUs;
