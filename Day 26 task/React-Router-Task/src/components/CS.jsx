import React from 'react';
import BlogCard from './BlogCard';

const CS = ({ cardData }) => {
  const csdata = cardData.filter((item) => item.corse === "CS");
  return (
    <div>
      {csdata.map((item, index) => {
        return (
          <>
            <div>
              <div className="container text-center mt-5">
                <div className="row">
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

export default CS;