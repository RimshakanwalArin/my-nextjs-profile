import React from 'react';
import Link from 'next/link'; // Import Link from next/link

const About = () => {
  return (
    <div className="p-6 bg-blue-300">
      <div className="max-w-4xl mx-auto bg-blue-100 shadow-lg rounded-lg overflow-hidden" style={{ marginTop: '70px' }}>
        <div className="text-center p-8 bg-gradient-to-r from-blue-400 to-blue-900 text-white">
          <h1 className="text-5xl font-bold mb-2">Rimsha Kanwal</h1>
          <p className="text-xl">Web Developer</p>
          <p className="text-xl">arinrimshakanwal@gmail.com</p>
          <p >+923101026509 </p>
          <p className="text-xl mt-4">
            {/* Update anchor tags to Link components */}
            <Link href="https://www.linkedin.com/in/arin-rimshakanwal-6b7a062b9"
              className="text-blue-300 hover:underline">LinkedIn Profile
            </Link> 
            {" | "}
            <Link href="https://github.com/RimshakanwalArin " 
               className="text-blue-200 hover:underline">GitHub Profile
            </Link> 
            {" | "}
            {/* <Link href="#"
               className="text-blue-200 hover:underline" >Website Project
            </Link> */}
          </p>
        </div>

        <div className="p-8">
          <div className="mb-8">
            <h2 className="text-3xl font-semibold mb-4 text-blue-800">Professional Summary</h2>
            <p className="text-lg text-blue-600">A passionate Web Developer with over 2 years of experience in building and maintaining responsive websites using Python and Django. Skilled in creating dynamic web applications, implementing RESTful APIs, and integrating third-party services. Proficient in both front-end and back-end development, with a keen eye for detail and a commitment to delivering high-quality solutions.</p>
          </div>

          <div className="mb-8">
            <h2 className="text-3xl font-semibold mb-4 text-blue-800">Technical Skills</h2>
            <ul className="list-disc list-inside text-lg text-blue-600">
              <li><strong>Languages:</strong> Python, JavaScript, TypeScript, HTML, CSS</li>
              <li><strong>Frameworks:</strong> Django, Flask, Next.js, React, Tailwind CSS</li>
              <li><strong>Databases:</strong> MySQL, PostgreSQL, MongoDB</li>
              <li><strong>Tools:</strong> Git, Docker, Jenkins, AWS, Heroku</li>
              <li><strong>Other:</strong> RESTful APIs, OAuth, WebSockets, Agile Methodologies</li>
            </ul>
          </div>

          <div className="mb-8">
            <h2 className="text-3xl font-semibold mb-4 text-blue-800">Professional Experience</h2>
            <div className="mb-6">
              <h3 className="text-2xl font-semibold text-blue-700">Web Developer</h3>
              <p className="text-lg text-gray-700">Governor House, Karachi, Sindh</p>
              <p className="text-lg text-blue-600">08, 2023 – Onsite</p>
              <ul className="list-disc list-inside text-lg text-blue-800">
                <li>Designed and developed web applications using Python and Django, handling both front-end and back-end tasks.</li>
                <li>Implemented responsive web designs using HTML, CSS, and JavaScript frameworks like React.</li>
                <li>Developed RESTful APIs for seamless communication between the front end and back end.</li>
                <li>Collaborated with cross-functional teams to deliver projects on time and within budget.</li>
                <li>Utilized version control systems like Git for code management and collaboration.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-blue-800">Junior Web Developer</h3>
              <p className="text-lg text-gray-700">Previous Company Name, City, State</p>
              <p className="text-lg text-gray-700">Month, Year – Month, Year</p>
              <ul className="list-disc list-inside text-lg text-blue-600">
                <li>Assisted in the development of web applications using Python and Django.</li>
                <li>Participated in code reviews, bug fixing, and testing of web applications.</li>
                <li>Maintained and updated existing web applications to ensure optimal performance.</li>
                <li>Worked closely with designers to implement UI/UX designs.</li>
                <li>Gained experience in using cloud platforms like AWS for deployment.</li>
              </ul>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-3xl font-semibold mb-4 text-blue-800">Education</h2>
            <p className="text-lg text-blue-600"><strong>Bachelor of Science in Computer Science</strong></p>
            <p className="text-lg text-blue-600">University Name = Piaic, Karachi, Sindh</p>
            <p className="text-lg text-blue-600">Month, Year – Month, Year</p>
          </div>

          <div className="mb-8">
            <h2 className="text-3xl font-semibold mb-4 text-blue-800">Certifications</h2>
            <ul className="list-disc list-inside text-lg text-blue-600">
              <li>Django for Web Development – Certification Authority, 2023</li>
              <li>Full-Stack Web Development with React – Certification Authority, 2024</li>
              <li>Web Developer Certified Solutions Architect – Certification Authority, 2024</li>
            </ul>
          </div>

          <div className="mb-8">
            <h2 className="text-3xl font-semibold mb-4 text-blue-800">Projects Name</h2>
            <ul className="list-disc list-inside text-lg text-blue-600">
              <li><strong>Calculator:</strong> A brief description of the project, technologies used, and your role.</li>
              <li><strong>CLI Guessing Game:</strong> A brief description of the project, technologies used, and your role.</li>
              <li><strong>ATM:</strong> A brief description of the project, technologies used, and your role.</li>
              <li><strong>Quiz:</strong> A brief description of the project, technologies used, and your role.</li>
              <p>etc</p>
            </ul>
          </div>

          <div className="section">
            <h2 className="text-3xl font-semibold mb-4 text-blue-800">Languages</h2>
            <ul className="list-disc list-inside text-lg text-blue-600">
              <li>English (Basic)</li>
              <li>Urdu (Fluent)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
