// import React from "react";
// import { color, motion } from "framer-motion";
// import { useNavigate } from "react-router-dom";
// import "./index.css"; // Import global CSS

// const Home = () => {
//   const navigate = useNavigate();

//   return (
//     <div className="home-container">
//       {/* Animated Logo */}
//       <motion.img
//         src="/p12.png" // Make sure logo.png is in the public folder
//         alt="Event Logo"
//         className="logo"
//         initial={{ opacity: 0, scale: 0.5 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 1 }}
//       />

//       {/* Event Title and Description */}
//       <motion.h1
//         className="title"
//         initial={{ y: -20, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ duration: 0.8 }}
//       >
//         Welcome to Tharangam
//       </motion.h1>
//       <p className="description noto-sans">
//         <span className="highlight">Welcome to Synthesia, the heartbeat of creativity and culture.</span>
//         <br />
//         <b>Tharangam '25 is here!</b>
//         <br />
//         <span className="highlight">Join us on April 4th & 5th for an unforgettable celebration of talent and tradition.</span>
//       </p>
      

//       {/* Register Button */}
//       <motion.button
//         className="register-button"
//         onClick={() => navigate("/register")}
//         whileHover={{ scale: 1.1 }}
//         whileTap={{ scale: 0.9 }}
//       >
//         Register Now
//       </motion.button>

//       {/* Footer */}
//       <footer className="footer">
//             <a href="https://www.instagram.com/tharangam_cet?igsh=Z2lnaWlpMDZ6ZWVm" target="_blank" rel="noopener noreferrer">
//                 📸 Follow us on Instagram
//             </a>
//             <a href="/guidelines.pdf" target="_blank" rel="noopener noreferrer">
//                 📄 Event Guidelines (PDF)
//             </a>
//             <p className="copyright">
//                 © {new Date().getFullYear()} Tharangam. All Rights Reserved.
//             </p>
            
//         </footer>
//     </div>
//   );
// };

// export default Home;




import React from "react";
import { motion } from "framer-motion";
import "./index.css"; // Import global CSS

const Home = () => {
  return (
    <div className="home-container">
      {/* Animated Logo */}
      <motion.img
        src="/p12.png" // Make sure logo.png is in the public folder
        alt="Event Logo"
        className="logo"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      />

      {/* Event Title and Description */}
      <motion.h1
        className="title"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        Welcome to Tharangam
      </motion.h1>
      <p className="description noto-sans">
        <span className="highlight">Welcome to Synthesia, the heartbeat of creativity and culture.</span>
        <br />
        <b>Tharangam '25 is here!</b>
        <br />
        <span className="highlight">Join us on April 4th & 5th for an unforgettable celebration of talent and tradition.</span>
      </p>

      {/* Register Button */}
      <a href="https://forms.gle/roK9CNUCFxaLq2Bp7" target="_blank" rel="noopener noreferrer">
        <motion.button
          className="register-button"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Register Now
        </motion.button>
      </a>

      {/* Footer */}
      <footer className="footer">
        <a href="https://www.instagram.com/tharangam_cet?igsh=Z2lnaWlpMDZ6ZWVm" target="_blank" rel="noopener noreferrer">
          📸 Follow us on Instagram
        </a>
        <a href="/guidelines25.pdf" target="_blank" rel="noopener noreferrer">
          📄 Event Guidelines (PDF)
        </a>
        <p className="copyright">
          © {new Date().getFullYear()} Tharangam. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
};

export default Home;
