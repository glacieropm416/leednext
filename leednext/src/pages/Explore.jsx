import React from "react";
import "./Explore.css";

const courses = [
  {
    title: "The LeetNext Beginner's Guide",
    chapters: 4,
    items: 17,
    progress: 0,
    link: "https://leetcode.com/explore/learn/card/the-leetcode-beginners-guide/",
  },
  {
    title: "Detailed Explanation of Dynamic Programming",
    chapters: 6,
    items: 55,
    progress: 0,
    link: "https://leetcode.com/explore/learn/card/dynamic-programming/",
  },
  {
    title: "Introduction to Data Structure\nArrays 101",
    chapters: 6,
    items: 31,
    progress: 0,
    link: "https://leetcode.com/explore/learn/card/fun-with-arrays/",
  },
  {
    title: "Detailed Explanation of\nSQL Language",
    chapters: 4,
    items: 36,
    progress: 0,
    link: "https://leetcode.com/explore/learn/card/sql-language/",
  },
];

const Explore = () => {
  return (
    <div className="explore-wrapper">
      <video
        className="background-video"
        autoPlay
        loop
        muted
        playsInline
      >
        <source
          src="https://v.ftcdn.net/10/81/90/28/700_F_1081902801_2ecmUJ11y720Co5o0gQ25skFgz0m91DJ_ST.mp4"
          type="video/mp4"
        />
      </video>

      <div className="explore-container">
        {courses.map((course, index) => {
          let cardClass = "shared-bg";
          if (index === 1) cardClass = "dynamic-bg";
          else if (index === 2) cardClass = "array-bg";
          else if (index === 3) cardClass = "sql-bg";

          return (
            <div className={`explore-card ${cardClass}`} key={index}>
              <div className="card-content">
                <h3>{course.title}</h3>
              </div>
              <div className="card-footer">
                <div>
                  <strong>{course.chapters}</strong> <br /> Chapters
                </div>
                <div>
                  <strong>{course.items}</strong> <br /> Items
                </div>
                <div className="play-section">
                  {course.link ? (
                    <a
                      href={course.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="play-button"
                    >
                      &#9658;
                    </a>
                  ) : (
                    <div className="play-button">&#9658;</div>
                  )}
                  <div>{course.progress}%</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Explore;
