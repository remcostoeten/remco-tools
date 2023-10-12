'use client'
import { motion } from "framer-motion";
import React, { useState } from "react";
import styles from "@s/module/logo.module.scss"
import classNames from "classnames";
type logoProps = {
  fill?: string;
};

export default function LogoIcon({ fill }: logoProps) {
  const [isReplaying, setIsReplaying] = useState(false);

  const handleReplay = () => {
    setIsReplaying(true);
    setTimeout(() => setIsReplaying(false), 500);
  };

  const replayButton = () => {
    return (
      // <button
      //   className="absolute top-1/2 right-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black text-white rounded-full p-2 opacity-50 hover:opacity-100 transition-opacity duration-300"
      //   onClick={handleReplay}
      // >
        <svg
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          width="30px"
          height="30px"
          viewBox="0 0 487.4 487.401"
          fill="#fff"
        >
          <g>
            <g>
              <path
                d="M438.711,179.056c-3.809,3.554-7.485,7.221-11.116,10.933c-6.21-33.555-19.778-65.638-44.463-94.257
        c-66.725-77.368-187.115-108.46-274.952-49.48C30.157,98.631-12.736,197.753,3.355,288.938
        C21.248,390.35,104.405,484.181,220.274,470.547c63.107-7.419,119.863-38.558,159.552-83.67c0.812-0.722,1.534-1.514,2.25-2.326
        c0.873-0.995,1.681-2.026,2.392-3.148c1.584-2.509,2.809-5.261,3.393-8.292l0.492-2.529c2.661-13.816-7.227-27.68-21.734-30.478
        c-8.516-1.646-16.904,0.924-22.973,6.058c-2.412,2.037-4.397,4.484-5.91,7.257c-0.335,0.624-0.752,1.198-1.036,1.854
        c-0.122-0.066-0.264-0.132-0.386-0.203c-39.248,44.95-98.559,74.412-160.152,63.013C74.351,399.222,37.952,282.073,62.234,197.377
        C83.194,124.259,152.93,50.461,240.281,68.843c52.138,10.974,105.568,47.616,125.134,96.467
        c2.041,5.098,3.788,10.217,5.302,15.366c-7.125-5.941-14.614-11.517-22.444-16.656c-12.264-8.043-27.676-9.374-38.167,2.072
        c-8.744,9.537-9.414,28.467,2.859,36.516c16.433,10.781,30.742,23.075,43.193,37.024c7.53,8.435,14.36,17.498,20.515,27.248
        c1.346,2.138,2.722,4.25,4.007,6.454c6.23,10.684,16.062,13.649,25.232,11.725c7.378-0.056,14.573-2.69,18.89-8.541
        c2.956-3.996,6.003-7.911,9.039-11.836c3.301-4.266,6.688-8.455,10.105-12.614c11.126-13.507,22.866-26.502,35.795-38.557
        C504.547,190.354,463.272,156.144,438.711,179.056z"
              />
            </g>
          </g>
        </svg>
    );
  };

  return (
    <div className={styles["logo-svg"]}>
      <motion.svg
        key={isReplaying ? "replay" : "logo"}
        initial={{ opacity: 0, rotate: -75, scale: 0.9 }}
        animate={{ opacity: 1, rotate: 0, scale: 1 }}
        transition={{ duration: 0.5, tween: 50, stiffness: 10, repeat: isReplaying ? Infinity : 0 }}
        width="46.8"
        height="46"
        x="0"
        y="0"
        className={classNames("st0", "svgElem-2", "logo__iconLeft", "text-path", styles.moduleClassName)}
        enableBackground="new 0 0 209.8 46"
        fill={fill}
      >
        <path
          d="M23.885 19.583a13.83 13.83 0 001.604-3.552c1.474 3.161 4.679 5.36 8.39 5.36v3.219h-.029c-5.098 0-9.25 4.156-9.25 9.265h-3.214c-.01-4.669 2.557-8.743 6.355-10.884a12.485 12.485 0 01-3.856-3.408z"
          fill={fill}
          className={classNames("st0", "svgElem-2", "logo__iconLeft", "text-path", styles.moduleClassName)}
          opacity="1"
          pathLength="1"
          strokeDashoffset="0px"
          strokeDasharray="1px 1px"
        />
        <path
          d="M20.499 29.92c-1.426-3.025-4.432-5.156-7.95-5.316-.14.005-.28.005-.426.005V21.37c.14 0 .286.005.426.005a9.175 9.175 0 006.118-2.697 9.204 9.204 0 002.707-6.554h3.219c0 3.335-1.296 6.467-3.654 8.825a12.464 12.464 0 01-2.673 2.045 12.559 12.559 0 013.842 3.392A13.93 13.93 0 0020.5 29.92z"
          fill={fill.toString()}
          className={classNames("st0", "svgElem-2", "logo__iconLeft", "text-path", styles.moduleClassName)}
          opacity="1"
          pathLength="1"
          strokeDashoffset="0px"
          strokeDasharray="1px 1px"
        />
      </motion.svg>

      {replayButton()}
    </div>
  );
}


