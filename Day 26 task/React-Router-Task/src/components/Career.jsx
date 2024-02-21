import React from 'react';
import BlogCard from './BlogCard';

const Career = ({ cardData }) => {
  const careerdata = cardData.filter((item) => item.corse === "Career");
  return (
    <div>
      {careerdata.map((item, index) => {
        return (
          <>
            <div>
              <div className="container text-center mt-5">
                <div className="row ">
                  <BlogCard item={item} index={index} />
                </div>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Career;