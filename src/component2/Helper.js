import React from 'react'


const Helper = () => {
  return (
    <>
  <header>
    <h1>Your Name</h1>
    <p>Full Stack Web Developer | C++ Programmer</p>
    <nav>
      <ul>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  </header>
  <section id="about">
    <h2>About Me</h2>
    <p>
      Hello! I am a passionate full-stack web developer skilled in HTML, CSS,
      JavaScript, and C++. I enjoy building web applications that are both
      efficient and user-friendly.
    </p>
  </section>
  <section id="projects">
    <h2>Projects</h2>
    <div className="project">
      <h3>E-commerce Website</h3>
      <p>
        A full-fledged e-commerce site built using React, Node.js, and MongoDB.
      </p>
    </div>
    <div className="project">
      <h3>Tic Tac Toe Game</h3>
      <p>
        A fun game built using HTML, CSS, and JavaScript with a winning line
        animation.
      </p>
    </div>
  </section>
  <section id="contact">
    <h2>Contact Me</h2>
    <p>Email: your.email@example.com</p>
    <p>
      LinkedIn: <a href="#">linkedin.com/in/yourname</a>
    </p>
    <p>
      GitHub: <a href="#">github.com/yourgithub</a>
    </p>
  </section>
  <footer>
    <p>© 2025 Your Name. All rights reserved.</p>
  </footer>
</>

  )
}


export function CreateHelper(){
    return(
        <>
            <p>How can i help You?</p>
        </>
    )
}
export function CreateHelper2(){
    return(
        <>
            <p>Thank You for your Help</p>
        </>
    )
}
export default Helper