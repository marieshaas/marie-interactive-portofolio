const responses = {
 'education':{
    title: "My Education",
    content: "Here is my educational background:",
    details: [
      {
        major: "Mechatronics and Artificial Intelligence",
        university: "Universitas Pendidikan Indonesia",
        period: "2022 - Present",
        courses: [
          "Object-Oriented Programming", 
          "Data Structures and Algorithms", 
          "Computer Networks", 
          "Parallel Computing", 
          "Data Science", 
          "Cloud Computing", 
          "Artificial Intelligence", 
          "Machine Learning",
          "Expert Systems"
        ]
      },
    ]
  },
 
  'skills':{
    title: "Technical Skills",
    content: "These are my technical skills:",
    details: [
      {
        category: "• Programming & Scripting",
        items: ["C#", "C", "Python", "HTML", "CSS", "JavaScript", "Bash", "SQL"]
      },
      {
        category: "• Database, Data Analysis & Visualization",
        items: ["Tableau", "MySQL", "phpMyAdmin", "MATLAB", "Google Colab"]
      },
      {
        category: "• Design Tools",
        items: ["Figma", "Canva", "Maze"]
      }
    ]
  },
  'projects': {
    title: "My Projects",
    content: "Here are some of my projects:",
    details: [
      {
        name: "🧾 Distributed Work Guide Sheet (WGS) System",
        description: "Deployed real-time work instruction system using Raspberry Pi network across production lines.",
        tech: "Raspberry Pi • Bash • MySQL • LAN Networking • Linux (Debian)",
        status: "Deployed internally at PT Omron"
      },
      {
        name: "📦 Inventory Management Web App",
        description: "Web-based inventory system with RFID & barcode integration for warehouse automation.",
        tech: "Streamlit • Python • MySQL • Pandas • RFID • Barcode Scanner",
        status: "Live across 2 divisions at PT Omron"
      },
      {
        name: "🥗 Freshly Dropped – Smart Recipe App",
        description: "Recipe recommendation app with integrated online shopping and user-centered UX design.",
        tech: "Figma • Maze • UX Research • Design Thinking",
        status: "Completed – Kelas.work Final Project"
      },
      {
        name: "🎶 TikTok Song Data Analysis",
        description: "Analyzed TikTok music trends using ML models to classify and cluster popular songs.",
        tech: "Python • Scikit-learn • Google Colab • Matplotlib • Seaborn",
        status: "Completed"
      },
      {
        name: "🏥 BPJS Healthcare Utilization & Demand Prediction",
        description: "Predicted patient service demand using ML on healthcare data to improve service planning.",
        tech: "Python • Scikit-learn • Pandas • Google Colab • Seaborn",
        status: "Completed"
      }
    ]
  },
  'experience': {
    title: "Internship/Organization",
    content: "All of my experiences are:",
    details: [
      {
        role: "Research and Development Intern",
        company: "PT. Omron Manufacturing of Indonesia",
        period: "Feb – July 2025",
        achievements: [
          "Developed a full stack inventory management web app using Python and Streamlit integrated with RFID and barcode scanners, deployed across two divisions.",
          "Configured 14 Raspberry Pi units as a client-server system for a real-time work instruction app (WGS) using Linux and Bash scripts.",
          "Handled network setup (static IP, LAN), MySQL server-client communication, and optimized system with parallel execution across nodes."
        ]
      },
      {
        role: "Staff of Communication and Information Technology (Kominfo) Dept.",
        company: "HIMATRONIKA-AI",
        period: "Feb – Nov 2024",
        achievements: [
          "Led the Visual Communication Design (DKV) team, resulting in a 75% increase in social media engagement.",
          "Delivered on-time designs for social media content under tight deadlines using Canva.",
          "Collaborated with team members to turn ideas and scripts into compelling visual content."
        ]
      }
    ]
  },
  'contact': {
    title: "My Contact",
    content: "Want to collaborate with me? Feel free to reach out:",
    details: [
          {
                platform: "Email",
                handle: "maritzakhansa.24@upi.edu",
                icon: "📧",
            },
            {
                platform: "LinkedIn",
                handle: "https://in/maritza-khansa-203365234", 
                icon: "💼",
            },
            {
                platform: "Github",
                handle: "https://github.com/marieshaas", 
                icon: "💻",
            }
    ]
  }
};

export default responses;
