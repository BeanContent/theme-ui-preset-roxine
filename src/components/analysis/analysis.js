/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import "./analysis.css";
import CountUp from "react-countup";
import toUpperCase from "../../libs/toUpperCase";
import { useInView } from "react-intersection-observer";

const data = [
  {
    icon: "custom-icon-projects",
    name: "total projects",
    quantity: 505,
  },
  {
    icon: "custom-icon-smile",
    name: "satisfied clients",
    quantity: 220,
  },
  {
    icon: "custom-icon-award",
    name: "awards won",
    quantity: 720,
  },
  {
    icon: "custom-icon-celebrate",
    name: "milestones met",
    quantity: 707,
  },
];


function Analysis() {
  const [ref, inView] = useInView({
    triggerOnce: false, // Only trigger once when the element becomes visible
    threshold: 0.1, // Set the percentage of visibility needed to trigger the change
  });
  return (
    <section className="analysis">
      <div className="analysis__wrapper">
        <ul className="analysis__list">
          {data.map((item, index) => {
            return (
              <li key={index} className="analysis__list-item">
                <div className="item__wrapper">
                  <span className={item.icon}></span>
                  <h2 ref={ref} className="item__quantity ">
                    {inView && (
                      <CountUp
                        className="animate__animated animate__fadeIn"
                        end={item.quantity}
                      />
                    )}
                  </h2>
                  <p className="item__name">{toUpperCase(item.name)}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export default Analysis;
