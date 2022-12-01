import {useEffect, useState} from 'react';

const About = () => { 
    const[about, setAbout] = useState([
        {title: "About Me", body: "I am Stefhani Alba Siregar, a 5th semester student at the Syiah Kuala University majoring in informatics. And now participating the independent campus program, namely independent study while working part time as an assistant in three laboratories. My goal is to make an application that can be useful for everyone.", id:1},
        {title: "Why Make This Website", body: "I made this website to learn what actually goes into web development. From planning, design, development, launch, and maintenance. For sure there are other things that I have yet to encounter, and I'm ready to learn them. This also serves a motivation for me to continue making projects because now I finally have a place to showcase them.", id:2},
        {title: "What Else", body: "I also love watching movies and listening to music. You can catch me on library sometimes when i'm waiting for class in the lab.", id:3}
    ]);
    
    return(
        <div className="about">
            {about.map((about) => (
            <div className='about-preview' key={about.id}>
            <h2>{ about.title }</h2>
            <p>{ about.body }</p>
            </div>
            ))}  
        </div>
    );  
}

export default About;