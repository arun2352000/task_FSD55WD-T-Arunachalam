import React from 'react';
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import FSD from './components/FSD';
import DS from './components/DS';
import CS from './components/CS';
import Career from './components/Career';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const App = () => {
  const cardData = [
    {
      image:
        " https://www.guvi.in/blog/wp-content/uploads/2024/02/Feature-image-Backend-Developer-Salary-in-India-USA.webp ",
      corse: "FSD",
      header: "Backend Developer Salary in India & USA [2024]",
      content:
        "If you’re into making websites and apps work smoothly behind the scenes, you’re probably curious",
      date: "15 February 2024 ",
      comments: "No Comments",
    },
    {
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2024/02/Feature-image-Top-Backend-Frameworks-That-You-Should-Know.webp",
      corse: "FSD",
      header: "Top 6 Backend Frameworks That You Should Know in 2024",
      content:
        "If you are looking to ace the field of backend development, you must be able",
      date: "15 February 2024",
      comments: "No Comments",
    },
    {
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Non-Coding-Jobs-in-Cybersecurity.webp",
      corse: "CS",
      header: "Non-Coding Jobs in Cybersecurity: A Comprehensive Guide",
      content:
        "In the rapidly evolving field of cybersecurity, there is a common misconception that coding skills",
      date: "4 December 2023 ",
      comments: "No Comments",
    },
    {
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2024/02/Feature-image-What-Does-a-Top-Backend-Developer-Do-The-Ultimate-Guide.webp",
      corse: "FSD",
      header: "What Does a Top Backend Developer Do? The Ultimate Guide",
      content:
        "Backend development plays a vital role in the functioning of websites and web applications. While",
      date: "15 February 2024 ",
      comments: "No Comments",
    },
    {
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2024/02/who_is_a_front_end_developer.webp",
      corse: "FSD",
      header:
        "What is Frontend Development? Roles, Responsibilities, Skills & Salary",
      content:
        "Frontend development is all about making websites that look good and work well for people",
      date: "15 February 2024",
      comments: "No Comments",
    },
    {
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2024/02/Feature-image-Top-Full-Stack-Development-Trends-What-to-Expect.webp",
      corse: "FSD",
      header: "Top Full Stack Development Trends for 2024: What to Expect",
      content:
        "In the ever-evolving world of technology, developers must stay up-to-date with the latest trends. Full",
      date: "9 February 2024 ",
      comments: " No Comments",
    },
    {
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2024/02/Feature-image-Top-CSS-Frameworks-for-Front-End-Developers-A-Comprehensive-Guide.webp",
      corse: "FSD",
      header:
        "Top 11 CSS Frameworks for Front-End Developers: A Comprehensive Guide",
      content:
        "In the world of web development, Cascading Style Sheets (CSS) play a crucial role in",
      date: "8 February 2024",
      comments: "No Comments",
    },
    {
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Top-High-Paying-Non-Coding-Jobs-in-Data-Science.webp",
      corse: "DS",
      header: "Top 10 High Paying Non-Coding Jobs in Data Science in 2024",
      content:
        "Are you someone who’s not interested in coding, but wants to get placed in tech",
      date: "28 November 2023 ",
      comments: "No Comments",
    },
    {
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-1-1200x600.webp",
      corse: "DS",
      header: "Impact of Certification Programs on Hiring Data Scientists",
      content:
        "Data scientists are the creators behind transforming the raw data into edible data insights. These",
      date: "15 November 2023 ",
      comments: "No Comments",
    },
    {
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/11/feature-image-product-based-companies-for-data-science-freshers.webp",
      corse: "DS",
      header: "Top Product-Based Companies for Data Science Freshers",
      content:
        "In today’s data-driven world, data science has emerged as a crucial field, with companies harnessing",
      date: "10 November 2023 ",
      comments: " No Comments",
    },
    {
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/10/Feature-image-Difference-between-Data-Science-and-Data-Engineering.webp",
      corse: "DS",
      header:
        "What is the Difference between Data Science and Data Engineering?",
      content:
        "India has been making some serious waves in the world of data. Just like the",
      date: "8 November 2023 ",
      comments: "No Comments",
    },
    {
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/11/Top-10-Data-Science-Tools-1-1200x628.png",
      corse: "DS",
      header: "Top 10 Data Science Tools in 2024",
      content:
        "Data Science is an in-demand profession and will continue growing in the coming years. From",
      date: "1 November 2023 ",
      comments: " No Comments",
    },
    {
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/10/Feature-image-Best-books-to-learn-data-science.webp",
      corse: "DS",
      header: "Best Data Science Books to Learn in 2024",
      content:
        "Today, we’re going to talk about something really cool: data science. It’s all about using",
      date: "26 October 2023 ",
      comments: " No Comments",
    },
    {
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-What-Is-Hacking_-Types-of-Hacking-More.webp",
      corse: "CS",
      header: "What Is Hacking? Types of Hacking & More",
      content:
        "Have you ever wondered what hacking is all about? It’s a big deal in today’s",
      date: "25 September 2023",
      comments: "No Comments",
    },
    {
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2022/12/Yellow-Blue-Illustration-Business-Blog-Banner-1200x675.png",
      corse: "CS",
      header: "Cybersecurity Vs Ethical Hacking: Top 10 Differences",
      content:
        "Cybersecurity & Ethical hacking and have been key in making sure that your data online",
      date: "27 December 2022",
      comments: " No Comments",
    },
    {
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2022/12/cybersecuity-.gif",
      corse: "CS",
      header:
        "What is Cybersecurity? Importance and its uses & the growing challenges in 2023!",
      content:
        "Look around today, you will witness that we are more reliant on technology and devices",
      date: "20 December 2022 ",
      comments: " 1 Comment",
    },
    {
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2022/11/Teal-Illustration-Digital-Business-Blog-Banner-1-1200x675.png",
      corse: "CS",
      header: "8 Different Types of Cybersecurity and Threats Involved",
      content:
        "Cybersecurity refers to the protection of devices, processes, infrastructure, and assets of the organization from",
      date: "9 November 2022",
      comments: "1 Comment",
    },
    {
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2022/06/8bfd01c18be1b5059bc0d7770d9dabf1.gif",
      corse: "CS",
      header:
        "Is coding required for cybersecurity? If yes, how crucial is coding for cybersecurity?",
      content:
        "Many people ask how important is coding for cybersecurity, and the lawyerly answer is: Well,",
      date: "22 June 2022 ",
      comments: " No Comments",
    },
    {
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/04/javascript-animated-image-1200x675.jpg",
      corse: "Career",
      header:
        "Master JavaScript Frontend Roadmap: From Novice to Expert [2024]",
      content: "2 February 2024",
      date: "Are you eager to learn JavaScript? Want to dive deep into the JavaScript frontend roadmap?",
      comments: "No Comments",
    },
    {
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2024/01/Feature-image-Top-Technologies-to-Learn-Jumpstart-a-Successful-Tech-Career.webp",
      corse: "Career",
      header:
        "Top Technologies to Learn in 2024: Jumpstart a Successful Tech Career",
      content:
        "If your New Year resolution consists of building a successful tech career in 2024, then",
      date: "13 December 2023 ",
      comments: "No Comments",
    },
    {
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/07/feature-image-UIUX-Designer-Roles-Responsibilities-Job-Description.jpg",
      corse: "Career",
      header: "UI/UX Designer Job Description and Roles & Responsibilities",
      content:
        "UI UX is the abbreviated word that’s been rocking the trend over the years, especially",
      date: "2 February 2024",
      comments: "No Comments",
    },
    {
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Top-IT-Jobs-for-Economics-Students.webp",
      corse: "Career",
      header: "Top 5 IT Jobs for Economics Students",
      content:
        "In today’s digital age, the intersection of economics and technology offers exciting career opportunities for",
      date: "4 December 2023 ",
      comments: "No Comments",
    },
    {
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Top-IT-Jobs-for-Commerce-Students.webp",
      corse: "Career",
      header: "Top IT Jobs for Commerce Students: A Lucrative Career Path",
      content:
        "With the rapid advancement of technology, the demand for IT professionals has soared in recent",
      date: "2 December 2023 ",
      comments: "No Comments",
    },
    {
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Automation-Test-Engineer-Resume-Important-Things-To-Consider.webp",
      corse: "Career",
      header:
        "Automation Test Engineer Resume: 10 Important Things To Consider",
      content:
        "The world is moving towards automating the testing of products in order to increase work",
      date: "1 December 2023 ",
      comments: "No Comments",
    },
  ];
  return (
    <div>
      <BrowserRouter>
        
          <Navbar />
         
        <Routes>
          <Route path="/" element={<Home cardData={cardData} />} />
          <Route path="/FSD" element={<FSD cardData={cardData} />} />
          <Route path="/DS" element={<DS cardData={cardData} />} />
          <Route path="/CS" element={<CS cardData={cardData} />} />
          <Route path="/Career" element={<Career cardData={cardData} />} />
        
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;