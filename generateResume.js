const { Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell, WidthType, BorderStyle } = require('docx');
const fs = require('fs');

const doc = new Document({
    sections: [{
        children: [
            new Paragraph({
                text: "ABHIJEET SHRIMALI",
                bold: true,
                size: 28,
                spacing: { after: 0 }
            }),
            new Paragraph({
                text: "FULL STACK WEB DEVELOPER",
                bold: true,
                size: 22,
                spacing: { after: 200 }
            }),

            // Contact Info
            new Paragraph({
                text: "Phone: +92 311 2964673 | Email: abbi.shrimali@gmail.com",
                size: 20,
                spacing: { after: 0 }
            }),
            new Paragraph({
                text: "Location: Karachi, Pakistan",
                size: 20,
                spacing: { after: 0 }
            }),
            new Paragraph({
                text: "LinkedIn: https://www.linkedin.com/in/abhijeet-shrimali-39aa20224",
                size: 20,
                spacing: { after: 0 }
            }),
            new Paragraph({
                text: "GitHub: https://github.com/Abshrimali",
                size: 20,
                spacing: { after: 200 }
            }),

            // Professional Summary
            new Paragraph({
                text: "PROFESSIONAL SUMMARY",
                bold: true,
                size: 24,
                spacing: { after: 100 }
            }),
            new Paragraph({
                text: "Full Stack Developer with hands-on expertise in React, Node.js, Express, and MongoDB (MERN stack). Proficient in PHP, .NET, and database design. Strong foundation in RESTful API development, responsive UI design, and teaching technical concepts. Proven ability to build scalable web applications and mentor junior developers.",
                size: 20,
                spacing: { after: 200 }
            }),

            // Technical Skills
            new Paragraph({
                text: "TECHNICAL SKILLS",
                bold: true,
                size: 24,
                spacing: { after: 100 }
            }),
            new Paragraph({
                text: "Frontend:",
                bold: true,
                size: 20
            }),
            new Paragraph({
                text: "React.js, Next.js, JavaScript, TypeScript, HTML5, CSS3, Responsive Design, State Management (Redux), API Integration",
                size: 20,
                spacing: { after: 100 }
            }),
            new Paragraph({
                text: "Backend:",
                bold: true,
                size: 20
            }),
            new Paragraph({
                text: "Node.js, Express.js, REST API Development, PHP, .NET Framework, Middleware & Authentication",
                size: 20,
                spacing: { after: 100 }
            }),
            new Paragraph({
                text: "Databases:",
                bold: true,
                size: 20
            }),
            new Paragraph({
                text: "MongoDB, MySQL, Database Modeling & Optimization",
                size: 20,
                spacing: { after: 100 }
            }),
            new Paragraph({
                text: "Tools & DevOps:",
                bold: true,
                size: 20
            }),
            new Paragraph({
                text: "Git, GitHub, Vercel, Vite, npm, VS Code, Postman",
                size: 20,
                spacing: { after: 200 }
            }),

            // Professional Experience
            new Paragraph({
                text: "PROFESSIONAL EXPERIENCE",
                bold: true,
                size: 24,
                spacing: { after: 100 }
            }),
            new Paragraph({
                text: "Teaching Assistant - Aptech Shahrah-e-Faisal, Karachi (Current)",
                bold: true,
                size: 20
            }),
            new Paragraph({
                text: "• Teaching web development (HTML, CSS, JavaScript) to 30+ students",
                size: 20
            }),
            new Paragraph({
                text: "• Real-time debugging and problem-solving for student projects",
                size: 20
            }),
            new Paragraph({
                text: "• Mentoring students in building dynamic web applications",
                size: 20,
                spacing: { after: 100 }
            }),
            new Paragraph({
                text: "Student Developer - Aptech Learning Pakistan (In Progress)",
                bold: true,
                size: 20
            }),
            new Paragraph({
                text: "• Developing full-stack applications using MERN stack",
                size: 20
            }),
            new Paragraph({
                text: "• Building responsive UIs and backend logic with database integration",
                size: 20,
                spacing: { after: 200 }
            }),

            // Featured Projects
            new Paragraph({
                text: "FEATURED PROJECTS",
                bold: true,
                size: 24,
                spacing: { after: 100 }
            }),
            new Paragraph({
                text: "MERN Portfolio - Full-Stack Web Application",
                bold: true,
                size: 20
            }),
            new Paragraph({
                text: "GitHub: https://github.com/Abshrimali/mern-portfolio | Live: https://mern-portfolio-pi.vercel.app",
                size: 20
            }),
            new Paragraph({
                text: "• Built portfolio with React frontend and Express backend with MongoDB integration",
                size: 20
            }),
            new Paragraph({
                text: "• Implemented Three.js for 3D visualizations and Vite for optimized deployment",
                size: 20,
                spacing: { after: 100 }
            }),
            new Paragraph({
                text: "Weather API Dashboard - Frontend Application",
                bold: true,
                size: 20
            }),
            new Paragraph({
                text: "GitHub: https://github.com/Abshrimali/Weather_API",
                size: 20
            }),
            new Paragraph({
                text: "• Integrated external weather API with async state handling and responsive design",
                size: 20,
                spacing: { after: 100 }
            }),
            new Paragraph({
                text: "REST API Express - Backend Development",
                bold: true,
                size: 20
            }),
            new Paragraph({
                text: "GitHub: https://github.com/Abshrimali/REST_API_Express",
                size: 20
            }),
            new Paragraph({
                text: "• Developed Express-based REST API with clean route, controller, and middleware patterns",
                size: 20,
                spacing: { after: 200 }
            }),

            // Education
            new Paragraph({
                text: "EDUCATION",
                bold: true,
                size: 24,
                spacing: { after: 100 }
            }),
            new Paragraph({
                text: "BSCS - Bachelor of Science in Computer Science",
                bold: true,
                size: 20
            }),
            new Paragraph({
                text: "Virtual University of Pakistan",
                size: 20,
                spacing: { after: 50 }
            }),
            new Paragraph({
                text: "ADSE - Advance Diploma in Software Engineering",
                bold: true,
                size: 20
            }),
            new Paragraph({
                text: "Aptech Learning Pakistan",
                size: 20,
                spacing: { after: 50 }
            }),
            new Paragraph({
                text: "SBTE - Bridge Course",
                bold: true,
                size: 20
            }),
            new Paragraph({
                text: "Aptech Learning Pakistan | Batch: April 2024",
                size: 20,
                spacing: { after: 200 }
            }),

            // Soft Skills
            new Paragraph({
                text: "SOFT SKILLS",
                bold: true,
                size: 24,
                spacing: { after: 100 }
            }),
            new Paragraph({
                text: "Full-Stack Problem Solving, Technical Teaching & Mentoring, Clean Code Practices, Time Management, Communication & Collaboration",
                size: 20,
                spacing: { after: 200 }
            }),

            // Languages
            new Paragraph({
                text: "LANGUAGES",
                bold: true,
                size: 24,
                spacing: { after: 100 }
            }),
            new Paragraph({
                text: "English (Fluent), Urdu (Native), Gujarati (Native)",
                size: 20
            })
        ]
    }]
});

Packer.toBuffer(doc).then(buffer => {
    fs.writeFileSync('./public/Abhijeet_Shrimali_Resume.docx', buffer);
    console.log('✅ Resume updated: Abhijeet_Shrimali_Resume.docx');
});
