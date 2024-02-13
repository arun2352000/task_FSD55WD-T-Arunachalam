import React from "react";
import CardPrice from "./components/CardPrice";
const App = () => {
  const cardObject = [
    {
      title: "FREE",
      price: "$0",
      user: "Single user",
      storage: "50GB Storage",
      domain: "Free Subdomain",
      project: "text-muted",
      projectIcon: "fas fa-times",
      phone: "text-muted",
      phoneIcon: "fas fa-times",
      subdomain: "text-muted",
      subdomainIcon: "fas fa-times",
      Reports: "text-muted",
      ReportsIcon: "fas fa-times",
    },
    {
      title: "PLUS",
      price: "$9",
      user: "Single user",
      storage: "50GB Storage",
      domain: "Free Subdomain",
      project: "",
      projectIcon: "fas fa-check",
      phone: "",
      phoneIcon: "fas fa-check",
      subdomain: "",
      subdomainIcon: "fas fa-check",
      Reports: "text-muted",
      ReportsIcon: "fas fa-times",
    },
    {
      title: "Pro",
      price: "$49",
      user: "Single user",
      storage: "50GB Storage",
      domain: "Free Subdomain",
      project: "",
      projectIcon: "fas fa-check",
      phone: "",
      phoneIcon: "fas fa-check",
      subdomain: "",
      subdomainIcon: "fas fa-check",
      Reports: "",
      ReportsIcon: "fas fa-check",
    },
  ];
  return (
    <div>
      <h1 className="text-center" >React Price Card Task</h1>
      <br />
      <br />
      <CardPrice cardObject={cardObject} />
    </div>
  );
};

export default App;
