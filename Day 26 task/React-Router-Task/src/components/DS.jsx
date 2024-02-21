import React from 'react';
import BlogCard from './BlogCard';

const DS = ({cardData}) => {
    
    const dsdata = cardData.filter((item) => item.corse === "DS");
    return (
      <div>
        {dsdata.map((item, index) => {
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

export default DS;