import React, { useState, useEffect } from "react";
import axios from "axios";
import "./faq.css";
const Faq = () => {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    const result = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    console.log(result.data);
    setData(result?.data);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="faq">
        <h1>Frequently asked questions</h1>
        <p>
          Stuck on something? We're here to help with all your questions and
          answers in one place.
        </p>
        {/* {data.map((det) => (
          <div className="card">
            <div className="emoji"></div>
            <h4> {det.title}?</h4>
            <p>
              {det.body}
            </p>
          </div>
        ))} */}
        <div className="card">
            <div className="emoji"></div>
            <h4> sdghhghbb,n?</h4>
            <p>
              Lorem ipsum dolor sit amet.
            </p>
          </div>
          <div className="card">
            <div className="emoji"></div>
            <h4> sdghhghbb,n?</h4>
            <p>
              Lorem ipsum dolor sit amet.
            </p>
          </div>
          <div className="card">
            <div className="emoji"></div>
            <h4> sdghhghbb,n?</h4>
            <p>
              Lorem ipsum dolor sit amet.
            </p>
          </div>
          <div className="card">
            <div className="emoji"></div>
            <h4> sdghhghbb,n?</h4>
            <p>
              Lorem ipsum dolor sit amet.
            </p>
          </div>
      </div>
    </>
  );
};

export default Faq;
