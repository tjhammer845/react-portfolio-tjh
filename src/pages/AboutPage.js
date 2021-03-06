import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';


function AboutPage(props) {
    return (
        <div>
            <Hero title={props.title} />
            <Content>
                <div className='d-flex flex-column-reverse flex-xl-row justify-content-xl-between'>
                    <div>
                        <p className='lead'>I am a regular guy focused on making things pretty and writing clean, readable code. With an education and background in digital design, I understand the entire process of creating quality web applications from conception to completion. In the past, I’ve worked on a variety of web projects and gained invaluable experiences through daily operations within Information Technology and Creative.</p>
                        <p>Outside of the office, I tend to be the fun-loving adventurous type, always seeking new sites and taking on new types of challenges. I like to spend my time cooking, gardening, drawing, weightlifting, running, and mountain biking. I love to stay busy and on the move, both in and out of the workplace.</p>
                    </div>
                    <div className='d-flex justify-content-center justify-content-xl-end'>
                        {props.about.images.map(({ id, src, title, description }) => <img key={id} src={src} title={title} alt={description}
                            className='about-img border-gold mb-5 ml-0 ml-xl-5 mb-xl-0' />)}
                    </div>
                </div>
            </Content>
        </div >
    );
}

export default AboutPage;