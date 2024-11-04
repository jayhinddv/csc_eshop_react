import React, { useEffect, useState } from 'react';
import axios from 'axios';
import aaImage from '../../assets/image/aa.jpg';
import '../update.css';

function Update() {
  const [scrollContent, setScrollContent] = useState([]);

  useEffect(() => {
    // Fetch scroll content from the API
    axios.get('https://api.cscsohnag.in/get-note')
      .then(response => {
        console.log(response.data);
        setScrollContent(response.data.data);
      })
      .catch(error => {
        console.error("Error fetching scroll content:", error);
      });
  }, []);

  return (
    <section>
      <div className="container pt-1">
        <div className="row d-flex justify-content-center align-items-center my-4">
          <div className="d-flex justify-content-center align-items-center mx-auto">
            <h1 className="text-center heading">Latest Updates</h1>
          </div>
        </div>

        <div className="row py-2">
          <div className="col-md-6">
            <div
              className="scroll-container"
              onMouseOver={(e) => e.currentTarget.classList.add('paused')}
              onMouseOut={(e) => e.currentTarget.classList.remove('paused')}
            >
              <div className="scroll-content">
                {scrollContent.map((data) => (
                  <p key={data._id}>{data.content}</p>
                ))}
              </div>
            </div>
          </div>

          <div className="col-md-6 d-flex justify-content-center align-items-center">
            <img src={aaImage} width="100%" alt="Update Illustration" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Update;
