import React from 'react';
import BlogCard from './BlogCard';

const FSD = ({ cardData }) => {
    const fsddata = cardData.filter((item) => item.corse==='FSD');
    return (
        <div>
            {fsddata.map((item, index) => {
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

export default FSD;