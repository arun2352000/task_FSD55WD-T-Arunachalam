import React from "react";

const BlogCard = ({ item, index }) => {
  return (
    
        <div key={index} className="align-baselinecol-sm-12 col-md-4 col-lg-3 col-lg-3 mb-4">
          <div className="card h-100 cardstyle">
            <img src={item.image} className="card-img-top" alt="..." />
            <div className="card-body ">
              <h1>{ index }</h1>
              <h5 className="card-title">{item.header}</h5>
              <p className="card-text fw-lighter mt-3">{item.content}.</p>
              <p>
                <a href="#" className="link-primary link-opacity-75">
                  Read More
                </a>
              </p>
            </div>
            <div className="card-footer p-3 fw-lighter">
              {item.date}.{item.comments}
            </div>
          </div>
        </div>
      
  );
};

export default BlogCard;
