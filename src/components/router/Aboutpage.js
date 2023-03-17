import { Container } from "react-bootstrap";

import Header from "../layouts/Navbar";

const AboutPage = () => {
  return (
    <>
      <Header />
      <div></div>
      <div className="mt-5">
        {
          <Container>
            <h1>About Us</h1>
            <p>
                  To develop monitoring and surveillance robots for practical
              implementation in a home environment, a range of issues must be
              resolved. These include working in cluttered environments , the
              need to perform surveillance in conjunction with simultaneous
              localization and mapping , object recognition and tracking ,
              integration of static and mobile surveillance systems , and
              simplifying the computing requirements whilst maintaining fully
              autonomous monitoring capabilities . In addition, making them
              truly autonomous in a way that they can act in different scenarios
              and environments without any human intervention is a challenging
              task. Deep learning using deep neural networks (DNN) are being
              applied to solve many complicated tasks where the machine itself
              will try to learn the task, provided that it has enough data. This
              approach has achieved amazing results in all sorts of applications
              from image processing tasks such as object detection and
              segmentation of images , speech recognition and generation , and
              the development of self-driving cars . The possibilities are
              endless with deep learning in applications from a wide variety of
              fields including robotics. A variety of approaches are utilized in
              applying neural networks to mobile robotic applications, in
              particular to obstacle avoidance and path planning with most using
              distance measuring approaches to determine obstacle location. Cost
              effective approaches utilize sensors such as infrared and
              ultrasonics. Janglová demonstrated neural network approaches to
              mapping and path planning by successfully implementing two neural
              networks on a differential drive robot named Auro containing
              ultrasound range finds.
            </p>
          </Container>
        }
      </div>

      <footer className="mb-1">
        <Container>contact</Container>
      </footer>
    </>
  );
};
export default AboutPage;
