import React from 'react'
import { useNavigate } from 'react-router';

const Contact = () => {
    const navigate = useNavigate();
  return (
      <div>
          <h1>Contact Page</h1>
          <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident laborum porro ullam voluptatibus quaerat earum, voluptate unde possimus libero totam nesciunt omnis temporibus
              similique minus sint pariatur hic aperiam odit sed aliquid obcaecati commodi ex eveniet dolores! Saepe, voluptatibus atque.
          </p>
          <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit culpa quas quia dolor consequuntur ratione, voluptates nam pariatur, veritatis ex atque. Explicabo, atque? Sint
              quidem, veniam nam aliquid quibusdam illum?
          </p>
          <button onClick={() =>{
            navigate("/")
          }}>Go to Home Page</button>
      </div>
  );
}

export default Contact