import React from "react";

const CardPrice = ({ cardObject }) => {
  return (
    <div>
      <section className="pricing py-5">
        <div className="container">
          <div className="row">
            {cardObject.map((item, index) => {
              return (
                <>
                  <div className="col-lg-4">
                    <div className="card mb-5 mb-lg-0">
                      <div className="card-body">
                        <h5 className="card-title text-muted text-uppercase text-center">
                          {item.title}
                        </h5>
                        <h1 className="card-price text-center">
                          {item.price}
                          /month
                        </h1>
                        <hr />
                        <ul className="fa-ul">
                          <li>
                            <span className="fa-li">
                              <i className="fas fa-check"></i>
                            </span>
                            {item.user}
                          </li>
                          <li>
                            <span className="fa-li">
                              <i className="fas fa-check"></i>
                            </span>
                            {item.storage}
                          </li>
                          <li>
                            <span className="fa-li">
                              <i className="fas fa-check"></i>
                            </span>
                            Unlimited Public Project
                          </li>
                          <li>
                            <span className="fa-li">
                              <i className="fas fa-check"></i>
                            </span>
                            comunity Access
                          </li>
                          <li className={item.project}>
                            <span className="fa-li">
                              <i className={item.projectIcon}></i>
                            </span>
                            Unlimited Private Project
                          </li>
                          <li className={item.phone}>
                            <span className="fa-li">
                              <i className={item.phoneIcon}></i>
                            </span>
                            Dedicated Phone Support
                          </li>
                          <li className={item.subdomain}>
                            <span className="fa-li">
                              <i className={item.subdomainIcon}></i>
                            </span>
                            Free subdomine
                          </li>
                          <li className={item.Reports}>
                            <span className="fa-li">
                              <i className={item.ReportsIcon}></i>
                            </span>
                            Monthly Status Report
                          </li>
                        </ul>
                        <div className="d-grid">
                          <a
                            href="#"
                            className="btn btn-primary text-uppercase"
                          >
                            Button
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CardPrice;
