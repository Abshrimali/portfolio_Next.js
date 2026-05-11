const PDFDocument = require('pdfkit');
const fs = require('fs');

const doc = new PDFDocument({ margin: 40 });
const stream = fs.createWriteStream('./public/Abhijeet_Shrimali_Resume.pdf');

doc.pipe(stream);

// Header
doc.fontSize(24).font('Helvetica-Bold').text('ABHIJEET SHRIMALI', { align: 'center' });
doc.fontSize(12).font('Helvetica').text('FULL STACK WEB DEVELOPER', { align: 'center' });
doc.moveDown(0.3);

// Contact Info
doc.fontSize(10).text('Phone: +92 311 2964673 | Email: abbi.shrimali@gmail.com', { align: 'center' });
doc.text('Location: Karachi, Pakistan', { align: 'center' });
doc.text('LinkedIn: https://www.linkedin.com/in/abhijeet-shrimali-39aa20224', { align: 'center' });
doc.text('GitHub: https://github.com/Abshrimali', { align: 'center' });
doc.moveDown(0.5);

// Professional Summary
doc.fontSize(12).font('Helvetica-Bold').text('PROFESSIONAL SUMMARY');
doc.fontSize(10).font('Helvetica').text('Full Stack Developer with hands-on expertise in React, Node.js, Express, and MongoDB (MERN stack). Proficient in PHP, .NET, and database design. Strong foundation in RESTful API development, responsive UI design, and teaching technical concepts. Proven ability to build scalable web applications and mentor junior developers.', { align: 'justify' });
doc.moveDown(0.4);

// Technical Skills
doc.fontSize(12).font('Helvetica-Bold').text('TECHNICAL SKILLS');
doc.fontSize(10).font('Helvetica-Bold').text('Frontend: ');
doc.font('Helvetica').text('React.js, Next.js, JavaScript, TypeScript, HTML5, CSS3, Responsive Design, State Management (Redux), API Integration', { continued: false });
doc.moveDown(0.2);

doc.font('Helvetica-Bold').text('Backend: ');
doc.font('Helvetica').text('Node.js, Express.js, REST API Development, PHP, .NET Framework, Middleware & Authentication', { continued: false });
doc.moveDown(0.2);

doc.font('Helvetica-Bold').text('Databases: ');
doc.font('Helvetica').text('MongoDB, MySQL, Database Modeling & Optimization', { continued: false });
doc.moveDown(0.2);

doc.font('Helvetica-Bold').text('Tools & DevOps: ');
doc.font('Helvetica').text('Git, GitHub, Vercel, Vite, npm, VS Code, Postman', { continued: false });
doc.moveDown(0.4);

// Professional Experience
doc.fontSize(12).font('Helvetica-Bold').text('PROFESSIONAL EXPERIENCE');
doc.fontSize(10).font('Helvetica-Bold').text('Teaching Assistant - Aptech Shahrah-e-Faisal, Karachi (Current)');
doc.font('Helvetica').text('• Teaching web development (HTML, CSS, JavaScript) to 30+ students');
doc.text('• Real-time debugging and problem-solving for student projects');
doc.text('• Mentoring students in building dynamic web applications');
doc.moveDown(0.2);

doc.font('Helvetica-Bold').text('Student Developer - Aptech Learning Pakistan (In Progress)');
doc.font('Helvetica').text('• Developing full-stack applications using MERN stack');
doc.text('• Building responsive UIs and backend logic with database integration');
doc.moveDown(0.4);

// Featured Projects
doc.fontSize(12).font('Helvetica-Bold').text('FEATURED PROJECTS');
doc.fontSize(10).font('Helvetica-Bold').text('MERN Portfolio - Full-Stack Web Application');
doc.font('Helvetica').text('GitHub: https://github.com/Abshrimali/mern-portfolio | Live: https://mern-portfolio-pi.vercel.app');
doc.text('• Built portfolio with React frontend and Express backend with MongoDB integration');
doc.text('• Implemented Three.js for 3D visualizations and Vite for optimized deployment');
doc.moveDown(0.2);

doc.font('Helvetica-Bold').text('Weather API Dashboard - Frontend Application');
doc.font('Helvetica').text('GitHub: https://github.com/Abshrimali/Weather_API');
doc.text('• Integrated external weather API with async state handling and responsive design');
doc.moveDown(0.2);

doc.font('Helvetica-Bold').text('REST API Express - Backend Development');
doc.font('Helvetica').text('GitHub: https://github.com/Abshrimali/REST_API_Express');
doc.text('• Developed Express-based REST API with clean route, controller, and middleware patterns');
doc.moveDown(0.4);

// Education
doc.fontSize(12).font('Helvetica-Bold').text('EDUCATION');
doc.fontSize(10).font('Helvetica-Bold').text('BSCS - Bachelor of Science in Computer Science');
doc.font('Helvetica').text('Virtual University of Pakistan', { continued: false });
doc.moveDown(0.1);

doc.font('Helvetica-Bold').text('ADSE - Advance Diploma in Software Engineering');
doc.font('Helvetica').text('Aptech Learning Pakistan', { continued: false });
doc.moveDown(0.1);

doc.font('Helvetica-Bold').text('SBTE - Bridge Course');
doc.font('Helvetica').text('Aptech Learning Pakistan | Batch: April 2024', { continued: false });
doc.moveDown(0.4);

// Soft Skills
doc.fontSize(12).font('Helvetica-Bold').text('SOFT SKILLS');
doc.fontSize(10).font('Helvetica').text('Full-Stack Problem Solving, Technical Teaching & Mentoring, Clean Code Practices, Time Management, Communication & Collaboration');
doc.moveDown(0.3);

// Languages
doc.fontSize(12).font('Helvetica-Bold').text('LANGUAGES');
doc.fontSize(10).font('Helvetica').text('English (Fluent), Urdu (Native), Gujarati (Native)');

doc.end();

stream.on('finish', () => {
    console.log('✅ PDF Resume created: Abhijeet_Shrimali_Resume.pdf');
});
