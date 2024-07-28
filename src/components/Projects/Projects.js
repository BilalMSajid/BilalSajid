import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/PRO.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/PNS.PNG";
import OrganizationBehaviour from "../../Assets/Projects/OB.jpg";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/taskrabbit.webp";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={OrganizationBehaviour}
              isBlog={false}
              title="Workplace Motivation"
              description="We aimed to explore the question, What motivates different personalities in the workplace? To investigate, we conducted primary research through interviews at Carrefour headquarters in Lahore. Using MBTI and Big Five Model tests, followed by semi-structured interviews, we identified key motivational factors for each personality type."
              ghLink="https://drive.google.com/drive/folders/13Bajv2LKt_wi5vywtyA1XbCVjPNAtHGe?usp=drive_link"
              demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="TaskRabbit Pakistan"
              description="Our marketing project focused on bringing TaskRabbit, a renowned handyman services app, to Pakistan. We analyzed market needs, competitor landscapes, and potential opportunities, considering cultural nuances, regulatory requirements, and economic factors. Our strategy emphasized TaskRabbit's unique value proposition of price, quality, convenience, and safety."
              ghLink="https://drive.google.com/drive/folders/18njSgqQIr3H9BEQVggZBMWTfmlKG2WR6?usp=drive_link"
              demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Regression Analysis"
              description="Our project investigates the impact of international tourism on GDP growth in South Asia and similar countries. By analyzing secondary data from eight countries over two decades, we examined how various factors within the tourism sector influence GDP growth. We utilized R to run multiple regression models and assess variables such as tourist arrivals per capita, political stability, inflation, exchange rates, life expectancy, government expenditure, rural population, and labor force."
              ghLink="https://drive.google.com/drive/folders/1n6Evb-jub0H7bCW5trFNpX8VL0GJ_WUf?usp=drive_link"
              demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Business Communication"
              description="In this project, we implemented a structured approach to understand and document Nazia's journey. We began by conducting thorough research into her background, business challenges, and achievements. This involved interviews and data collection to accurately portray her experiences and the impact of her efforts."
              ghLink="https://drive.google.com/drive/folders/1uxp3-nweWDq0jsb1JshUC8_7SlVh156x?usp=drive_link"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
