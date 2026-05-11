const PDFDocument = require('pdfkit');
const fs = require('fs');

const doc = new PDFDocument({ margin: 50, size: 'A4' });
const stream = fs.createWriteStream('./public/Abhijeet_Shrimali_Resume.pdf');

doc.pipe(stream);

// Title
doc.fontSize(22).font('Helvetica-Bold').text('ABHIJEET SHRIMALI', { align: 'center' });
doc.fontSize(11).font('Helvetica').text('FULL STACK WEB DEVELOPER', { align: 'center' });
doc.moveTo(50, doc.y + 5).lineTo(550, doc.y + 5).stroke();
doc.moveDown(0.3);

// Contact Info
doc.fontSize(9).text('Phone: +92 311 2964673 | Email: abbi.shrimali@gmail.com | Karachi, Pakistan', { align: 'center' });
doc.text('LinkedIn: https://www.linkedin.com/in/abhijeet-shrimali-39aa20224 | GitHub: https://github.com/Abshrimali', { align: 'center' });
doc.moveDown(0.4);

// Professional Summary
doc.fontSize(11).font('Helvetica-Bold').text('PROFESSIONAL SUMMARY');
doc.fontSize(9).font('Helvetica').text('Full Stack Developer with hands-on expertise in React, Node.js, Express, and MongoDB (MERN stack). Proficient in PHP, .NET, and database design. Strong foundation in RESTful API development, responsive UI design, and teaching technical concepts. Proven ability to build scalable web applications and mentor 100+ junior developers.', { align: 'justify' });
doc.moveDown(0.3);

// Technical Skills
doc.fontSize(11).font('Helvetica-Bold').text('TECHNICAL SKILLS');
doc.fontSize(9);
doc.font('Helvetica-Bold').text('Frontend: ', { continued: true }).font('Helvetica').text('React.js, Next.js, JavaScript, TypeScript, HTML5, CSS3, Responsive Design, Redux, API Integration');
doc.font('Helvetica-Bold').text('Backend: ', { continued: true }).font('Helvetica').text('Node.js, Express.js, REST APIs, PHP, .NET, Authentication, Middleware');
doc.font('Helvetica-Bold').text('Databases: ', { continued: true }).font('Helvetica').text('MongoDB, MySQL, Database Modeling, Optimization');
doc.font('Helvetica-Bold').text('Tools: ', { continued: true }).font('Helvetica').text('Git, GitHub, Vercel, Vite, npm, VS Code, Postman, Docker');
doc.moveDown(0.3);

// Professional Experience
doc.fontSize(11).font('Helvetica-Bold').text('PROFESSIONAL EXPERIENCE');
doc.fontSize(9).font('Helvetica-Bold').text('Teaching Assistant - Aptech Shahrah-e-Faisal, Karachi');
doc.font('Helvetica-Bold').text('(Current)').font('Helvetica');
doc.text('• Teaching web development (HTML, CSS, JavaScript, MERN) to 100+ students');
doc.text('• Real-time debugging and problem-solving for student coding projects');
doc.text('• Mentoring students in building dynamic web applications');
doc.text('• Supporting lab sessions and hands-on project development');
doc.moveDown(0.2);

doc.font('Helvetica-Bold').text('Student Developer - Aptech Learning Pakistan');
doc.font('Helvetica-Bold').text('(In Progress)').font('Helvetica');
doc.text('• Developing full-stack applications using MERN stack');
doc.text('• Building responsive UIs and backend logic with MongoDB integration');
doc.text('• Gaining practical experience in production-ready application development');
doc.moveDown(0.3);

// Featured Projects
doc.fontSize(11).font('Helvetica-Bold').text('FEATURED PROJECTS');

doc.fontSize(9).font('Helvetica-Bold').text('MERN Portfolio - Full-Stack Web Application');
doc.font('Helvetica-Bold').text('(React | Express | MongoDB | Three.js | Vite)').font('Helvetica');
doc.text('GitHub: https://github.com/Abshrimali/mern-portfolio');
doc.text('• Built complete portfolio application with modern MERN stack');
doc.text('• Integrated Three.js for 3D visualizations and interactive elements');
doc.text('• Deployed using Vercel with optimized Vite build configuration');
doc.moveDown(0.15);

doc.font('Helvetica-Bold').text('Weather API Dashboard - Frontend Application');
doc.font('Helvetica-Bold').text('(React | JavaScript | REST API | CSS)').font('Helvetica');
doc.text('GitHub: https://github.com/Abshrimali/Weather_API');
doc.text('• Integrated external weather API with async state management');
doc.text('• Implemented loading states and error handling for robust UX');
doc.moveDown(0.15);

doc.font('Helvetica-Bold').text('REST API Express - Backend Development');
doc.font('Helvetica-Bold').text('(Node.js | Express | REST Architecture)').font('Helvetica');
doc.text('GitHub: https://github.com/Abshrimali/REST_API_Express');
doc.text('• Developed clean REST API with structured routes and controllers');
doc.text('• Implemented middleware patterns and error handling');
doc.moveDown(0.3);

// Education
doc.fontSize(11).font('Helvetica-Bold').text('EDUCATION');
doc.fontSize(9).font('Helvetica-Bold').text('Bachelor of Science in Computer Science (BSCS)');
doc.font('Helvetica').text('Virtual University of Pakistan (In Progress)');
doc.moveDown(0.1);

doc.font('Helvetica-Bold').text('Advance Diploma in Software Engineering (ADSE)');
doc.font('Helvetica').text('Aptech Learning Pakistan (In Progress)');
doc.moveDown(0.1);

doc.font('Helvetica-Bold').text('Bridge Course (SBTE)');
doc.font('Helvetica').text('Aptech Learning Pakistan | Completed: April 2024');
doc.moveDown(0.3);

// Core Competencies
doc.fontSize(11).font('Helvetica-Bold').text('CORE COMPETENCIES');
doc.fontSize(9).font('Helvetica').text('• Full-Stack Web Development | • MERN Stack Expertise | • RESTful API Design\n• Responsive UI/UX Development | • Database Design & Optimization | • Teaching & Mentoring\n• Problem Solving | • Clean Code Practices | • Git Version Control');
doc.moveDown(0.2);

// Languages
doc.fontSize(11).font('Helvetica-Bold').text('LANGUAGES');
doc.fontSize(9).font('Helvetica').text('English (Fluent) | Urdu (Native) | Gujarati (Native)');

doc.end();

stream.on('finish', () => {
    console.log('✅ Professional Resume PDF Created: Abhijeet_Shrimali_Resume.pdf');
});

stream.on('error', (err) => {
    console.error('❌ Error creating PDF:', err);
});
