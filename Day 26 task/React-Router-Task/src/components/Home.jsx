import React from "react";
import BlogCard from "./BlogCard";

const Home = ({ cardData }) => {
  return (
    <>
      {cardData.map((item, index) => {
        return (
          <>
            {/* <div Key={index}>
              <div className="container">
                <div className="row row-cols-1 row-cols-md-3 g-4">
                  <div className="col">
                    <div className="card h-100">
                      <img
                        src={item.image}
                        className="card-img-top"
                        alt="..."
                      />
                      <div className="card-body">
                        <h5 className="card-title">
                          {item.corse}
                        </h5>
                        <p className="card-text">
                          In today’s digital age, the intersection of economics
                          and technology offers exciting career opportunities
                          for
                          <span className="read-more">
                            <strong>Read more</strong>
                          </span>
                        </p>
                      </div>
                      <div className="card-footer">
                        <small className="text-body-secondary">
                          04 June 2023
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}

            {/* <div className="container text-center mt-5"> */}
            <div className="row row-cols-1 row-cols-md-3 g-4">
              <BlogCard item={item} index={index} />
            </div>

            {/* </div> */}
          </>
        );
      })}
    </>
  );
};

export default Home;
