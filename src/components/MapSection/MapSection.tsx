'use client';

import React, { useState, useEffect } from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import { motion } from "framer-motion";

interface Location {
  lat: number;
  lng: number;
}

interface Star {
  id: number;
  top: string;
  left: string;
  size: number;
  duration: number;
}

const MapSection = () => {
  const [currentLocation] = useState<Location>({ lat: 59.95, lng: 30.33 });
  const [path, setPath] = useState<{ left: string; top: string }[]>([]);
  const [times, setTimes] = useState<number[]>([]);
  const [stars, setStars] = useState<Star[]>([]);
  const GOOGLE_MAP_LIBRARIES: ("places" | "drawing" | "geometry" | "visualization")[] = ["places"];
  const { isLoaded } = useJsApiLoader({
    libraries: GOOGLE_MAP_LIBRARIES,
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "",
  });

  useEffect(() => {
    // Generate starfield
    const generateStars = () => {
      const starsArray: Star[] = [];
      const numberOfStars = 100; // Adjust the number of stars
      for (let i = 0; i < numberOfStars; i++) {
        starsArray.push({
          id: i,
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          size: Math.random() * 3 + 1, // 1px to 4px
          duration: Math.random() * 5 + 2, // 2s to 7s
        });
      }
      setStars(starsArray);
    };

    // Generate path animation
    const generatePathAndTimes = () => {
      const keyframes = [];
      let currentEdgeType = Math.random() < 0.5 ? "vertical" : "horizontal";
      const numKeyframes = 8;

      // Generate initial keyframe
      if (currentEdgeType === "vertical") {
        const edge = Math.random() < 0.5 ? "left" : "right";
        keyframes.push({
          left: edge === "left" ? "0%" : "100%",
          top: `${Math.random() * 100}%`,
        });
        currentEdgeType = "horizontal";
      } else {
        const edge = Math.random() < 0.5 ? "top" : "bottom";
        keyframes.push({
          left: `${Math.random() * 100}%`,
          top: edge === "top" ? "0%" : "100%",
        });
        currentEdgeType = "vertical";
      }

      // Generate remaining keyframes
      for (let i = 1; i < numKeyframes; i++) {
        if (currentEdgeType === "vertical") {
          const edge = Math.random() < 0.5 ? "left" : "right";
          keyframes.push({
            left: edge === "left" ? "0%" : "100%",
            top: `${Math.random() * 100}%`,
          });
          currentEdgeType = "horizontal";
        } else {
          const edge = Math.random() < 0.5 ? "top" : "bottom";
          keyframes.push({
            left: `${Math.random() * 100}%`,
            top: edge === "top" ? "0%" : "100%",
          });
          currentEdgeType = "vertical";
        }
      }

      // Close the loop
      keyframes.push(keyframes[0]);

      // Calculate times based on distance
      const distances = [];
      let totalDistance = 0;

      for (let i = 0; i < keyframes.length - 1; i++) {
        const start = keyframes[i];
        const end = keyframes[i + 1];
        const dx = parseFloat(end.left) - parseFloat(start.left);
        const dy = parseFloat(end.top) - parseFloat(start.top);
        const distance = Math.sqrt(dx * dx + dy * dy);
        distances.push(distance);
        totalDistance += distance;
      }

      const times = [0];
      let accumulatedTime = 0;

      for (const distance of distances) {
        accumulatedTime += distance / totalDistance;
        times.push(accumulatedTime);
      }

      // Ensure last time is exactly 1
      times[times.length - 1] = 1;

      return { path: keyframes, times };
    };

    generateStars();
    const { path, times } = generatePathAndTimes();
    setPath(path);
    setTimes(times);
  }, []);

  if (!isLoaded) return <div className="text-white">Loading...</div>;

  return (
    <motion.div
      className="w-full max-w-[1400px] mt-10 py-28 px-4 sm:px-20 m-auto relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Global CSS for twinkle animation */}
      <style jsx global>{`
        @keyframes twinkle {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
      `}</style>

      {/* Animated Gradient */}
      <motion.div
        className="absolute inset-0"
        initial={{ backgroundPosition: "0% 50%" }}
        animate={{ backgroundPosition: "100% 50%" }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          background: `
            linear-gradient(
              45deg,
              hsl(250deg 60% 10%) 0%,
              hsl(270deg 50% 15%) 20%,
              hsl(290deg 40% 12%) 40%,
              hsl(230deg 40% 5%) 60%,
              hsl(210deg 60% 8%) 80%,
              hsl(250deg 60% 10%) 100%
            )
          `,
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
        }}
      />

      {/* 3D Star Effect */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {stars.map((star) => (
          <div
            key={star.id}
            className="absolute rounded-full bg-white/80"
            style={{
              top: star.top,
              left: star.left,
              width: `${star.size}px`,
              height: `${star.size}px`,
              animation: `twinkle ${star.duration}s ease-in-out infinite`,
              transform: `translateZ(${Math.random() * 100}px)`, // Creates depth perception
            }}
          />
        ))}
      </div>
{path.length > 0 && times.length > 0 && (
  <motion.div
    className="absolute w-24 h-24 rounded-full pointer-events-none transform-antialiased"
    animate={{
      rotate: 360,
      left: path.map((p) => p.left),
      top: path.map((p) => p.top),
    }}
    transition={{
      duration: 120, // Increased from 24 to slow down
      times: times,
      repeat: Infinity,
      ease: "linear",
    }}
    style={{
      translateX: "-50%",
      translateY: "-50%",
      width: "300px",
      height: "300px",
      //  boxShadow: '0 0 40px rgba(65, 105, 225, 0.5)',
      // border: '2px solid rgba(100, 150, 255, 0.3)' ,
    }}
  >
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="300" height="300">
      <circle cx="100" cy="100" r="95" fill="url(#earthTexture)" stroke="#000" strokeWidth="2"/>
      <defs>
        <pattern id="earthTexture" patternUnits="userSpaceOnUse" width="200" height="200">
          <image href="https://upload.wikimedia.org/wikipedia/commons/9/97/The_Earth_seen_from_Apollo_17.jpg" x="0" y="0" width="200" height="200"/>
        </pattern>
      </defs>
    </svg>
  </motion.div>
)}
      <motion.div
        className="rounded-2xl shadow-2xl max-w-[1200px] m-auto relative z-10 border-2 border-white/20 backdrop-blur-md"
        style={{ width: "80%", height: "54vh" }}
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm" />
        <GoogleMap
          mapContainerStyle={{
            width: "100%",
            height: "100%",
            borderRadius: "1rem",
            border: "1px solid rgba(255,255,255,0.1)",
          }}
          center={currentLocation}
          zoom={17}
          options={{
            mapTypeId: "hybrid",
            styles: [
              {
                featureType: "all",
                elementType: "labels",
                stylers: [{ visibility: "on" }],
              },
              {
                featureType: "water",
                elementType: "geometry",
                stylers: [{ color: "#193341" }],
              },
              {
                featureType: "all",
                elementType: "geometry",
                stylers: [{ visibility: "on" }],
              },
            ],
          }}
        >
          <Marker
            position={currentLocation}
            draggable={true}
            icon={{
              url: "https://img.icons8.com/fluency/48/street-view.png",
              scaledSize: new window.google.maps.Size(48, 48),
            }}
          />
        </GoogleMap>
      </motion.div>
    </motion.div>
  );
};

export default MapSection;