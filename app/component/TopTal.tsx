import { motion } from "framer-motion";
import React from "react";

const steps = [
  { title: "Share your needs", content: "Discuss your requirements and refine your scope in a call with a Toptal domain expert." },
  { title: "Choose your talent", content: "Get a shortlist of expertly matched talent within 24 hours to review, interview, and choose from." },
  { title: "Start your risk-free talent trial", content: "Work with your chosen talent on a trial basis for up to two weeks. Pay only if you decide to hire them." },
];

const App = () => {
  return (
    <div className="container">
      {steps.map((step, index) => (
        <div className="circle-container" key={index}>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 1, duration: 0.5 }}
            className="circle"
          >
            <div className="circle-number">{index + 1}</div>
          </motion.div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: index * 1.5, duration: 0.5 }}
            className="content"
          >
            <h3>{step.title}</h3>
            <p>{step.content}</p>
          </motion.div>

          {index < steps.length - 1 && (
            <motion.div
              className="arrow"
              initial={{ width: 0 }}
              animate={{ width: "200%" }}
              transition={{ delay: (index + 1) * 1.5, duration: 0.5 }}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default App;
