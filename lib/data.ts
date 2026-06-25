// ─── EDIT THIS FILE TO UPDATE YOUR PORTFOLIO ───────────────────────────────
// Everything on the site is driven from this data object.

export const data = {
  name: "Alvin Yan",
  role: "Embedded Systems Engineer",
  location: "Boston, MA",
  email: "alviny05@bu.edu",
  github: "https://github.com/alviny05",       // update with your actual handle
  linkedin: "https://www.linkedin.com/in/alvinyan0831/", // update with your actual URL
  resume: "/resume.pdf",                          // drop resume.pdf into /public/

  tagline:
    "I build software that runs close to hardware — from bare-metal firmware to real-time embedded systems.",

  about: `Computer Engineering senior at Boston University (May 2027). I work at the intersection of hardware and software: writing firmware in C/C++, designing RTOS-based systems, and building data pipelines that connect physical devices to the cloud. Currently Embedded Systems Engineer on BU Terrier Motorsport Formula SAE Electric and a Teaching Assistant for various CE core curriculums.`,

  skills: [
    {
      category: "Languages",
      items: ["C", "C++", "Python", "JavaScript"],
    },
    {
      category: "Embedded / RTOS",
      items: ["FreeRTOS", "ESP32", "STM32", "CAN bus", "I2C", "UART"],
    },
    {
      category: "Tools",
      items: ["CMake", "Git", "Docker", "Wireshark"],
    },
  ],

  projects: [
    {
      title: "Autonomous Vehicle Navigation",
      tags: ["Python", "ROS2", "CNN", "LiDAR"], // Swapped PID for LiDAR to highlight the obstacle detection
      description:
        "Developed a CNN regression model and teleoperation pipeline for real-time steering and autonomous track following on an AgileX Limo. Integrated a LiDAR-based obstacle detection system for dynamic collision avoidance and automated emergency braking.",
      github: "https://github.com/alviny05/Autonomous-Vehicle-Navigation",
      demo: "",
    },
    {
      title: "Wearable Activity Tracker & Edge Gateway",
      tags: ["ESP32", "Raspberry Pi", "TensorFlow", "IMU"], // Added the specific hardware used
      description:
        "Built an end-to-end wearable system streaming high-frequency IMU data from an ESP32 to a Raspberry Pi edge server. Deployed a custom CNN for real-time activity recognition and visualized the live inferences via a remote web dashboard.",
      github: "https://github.com/alviny05/Wearable-Activity-Tracker",
      demo: "",
    },
    {
      title: "Sensor Fusion Localization",
      tags: ["ESP32", "Node.js", "p5.js", "Sensor Fusion"], // Fixed the copy-paste error to reflect the actual web/hardware stack
      description:
        "Engineered an ESP32 multi-sensor fusion system integrating an accelerometer, LiDAR, and sonar to accurately track 3D positional movement. Developed a Node.js and p5.js web interface to render live, drift-corrected movement telemetry.",
      github: "https://github.com/alviny05/Sensor-Fusion-Localization",
      demo: "",
    },
    {
      title: "Four Legged Locomotion",
      tags: ["ESP32", "FreeRTOS", "Robotics", "Power Management"], // Shifted tags to focus on the broader engineering skills applied
      description:
        "Programmed FreeRTOS-based ESP32 firmware to manage concurrent servo actuation, state machine transitions, and UI interrupts for a walking robot. Optimized the mechanical and power delivery architecture to ensure stable system operation under strict current limits.",
      github: "https://github.com/alviny05/Four-Legged-Locomotion",
      demo: "",
    },
  ],

  experience: [
    {
      role: "Embedded Systems Engineer",
      org: "BU Terrier Motorsport (Formula SAE Electric)",
      period: "September 2024 — present",
      bullets: [
        "Develop firmware for safety-critical vehicle control systems in C",
        "Design and debug CAN bus communication between multiple ECUs",
        "Implement real-time sensor acquisition using FreeRTOS task scheduling",
      ],
    },
    {
      role: "Web Development Intern",
      org: "TekFinder",
      period: "March - May 2025",
      bullets: [
        "Built and maintained frontend features for a B2B platform",
        "Collaborated with the engineering team in an agile workflow",
      ],
    },
    {
      role: "Teaching Assistant",
      org: "Boston University",
      period: "September 2024 — present",
      bullets: [
        "TA for calculus-based physics, physics lab, and computer organization",
        "Hold office hours, grade assignments, and support 100+ students per semester",
      ],
    },
  ],
};
