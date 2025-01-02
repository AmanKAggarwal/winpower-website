// src/pages/HomePage.tsx
// test comment to verify deployment trigger
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Images } from '../data/images';
import { testimonials } from '../data/testimonials';
import { ROUTES } from "../Routes";

const HeroSection = styled.section`
  position: relative;
  height: 80vh;
  background: linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7)), 
              linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), 
              url(${Images.PowerGridBannerHomeImage});
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  padding: 0 20px;
`;

const HeroContent = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 0 2rem;
`;

const HeroTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
  max-width: 800px;
`;

const TitleLine = styled.h1`
  font-size: 4rem;
  font-weight: bold;
  line-height: 1.2;
  margin: 0;
  color: #000000;
  text-transform: uppercase;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const ColoredSpan = styled.span`
  color: #e95d22;
`;

const HeroSubtitle = styled.p`
  font-size: 1.5rem;
  line-height: 1.5;
  margin: 1.5rem 0 0 0;
  color: #000000;
  max-width: 600px;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const ProjectsSection = styled.section`
  background: #f8f9fa;
  padding: 5rem 1rem;
  text-align: center;

  @media (max-width: 768px) {
    padding: 3rem 1rem;
  }
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 0 1rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const ProjectCard = styled.div`
  position: relative;
  height: 300px;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  &:hover img {
    transform: scale(1.1);
  }
`;

const Section = styled.section<{ $dark?: boolean }>`
  padding: 5rem 2rem;
  background: ${props => props.$dark ? '#1a1a1a' : '#fff'};
  color: ${props => props.$dark ? '#fff' : '#333'};
`;

const SectionTitle = styled.h2<{ $dark?: boolean }>`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: ${props => props.$dark ? '#fff' : '#333'};
  position: relative;
  
  &:after {
    content: '';
    display: block;
    width: 60px;
    height: 4px;
    background: #e95d22;
    margin: 1rem auto 0;
    border-radius: 2px;
  }
`;

const WhoWeAreContent = styled.div<{ $dark?: boolean }>`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  line-height: 1.8;
  font-size: 1.1rem;
  color: ${props => props.$dark ? '#f5f5f5' : '#333'};

  p {
    margin-bottom: 1.5rem;
  }
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2.5rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

const ServiceCard = styled.div`
  background: white;
  padding: 2.5rem;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  border: 1px solid #eee;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-5px);
    border-color: #e95d22;
    box-shadow: 0 12px 48px rgba(233, 93, 34, 0.15);
  }

  img {
    width: 140px;
    height: 140px;
    object-fit: cover;
    margin-bottom: 2rem;
    border-radius: 10px;
    border: 4px solid #f5f5f5;
    transition: all 0.3s ease;
  }

  &:hover img {
    border-color: #e95d22;
    transform: scale(1.05);
  }

  h3 {
    color: #333;
    margin: 1rem 0;
    font-size: 1.4rem;
    font-weight: 500;
  }
`;

const TestimonialsSection = styled.section`
  background: #fff;
  padding: 5rem 2rem;
  text-align: center;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 3rem 1rem;
  }
`;

const TestimonialWrapper = styled.div`
  position: relative;
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 3rem;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

const TestimonialContainer = styled.div`
  overflow: hidden;
  width: 100%;
  border-radius: 12px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
`;

const TestimonialSlider = styled.div`
  display: flex;
  transition: transform 0.5s ease;
  width: 100%;
`;

const TestimonialSlide = styled.div`
  min-width: 100%;
  padding: 3rem 2rem;
  text-align: center;
  background: #000;
  color: white;

  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

const TestimonialText = styled.p`
  font-size: 1.2rem;
  line-height: 1.8;
  margin: 1.5rem auto;
  color: white;
  max-width: 800px;

  @media (max-width: 768px) {
    font-size: 1rem;
    line-height: 1.6;
    margin: 1rem auto;
  }
`;

const QuoteIcon = styled.div`
  font-size: 4rem;
  color: #e95d22;
  height: 40px;
  line-height: 1;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 3rem;
    height: 30px;
    margin-bottom: 0.5rem;
  }
`;

const TestimonialAuthor = styled.div`
  h4 {
    color: #e95d22;
    font-size: 1.1rem;
    margin-bottom: 0.5rem;
  }
  
  p {
    color: #ddd;
    font-size: 0.9rem;
  }

  @media (max-width: 768px) {
    h4 {
      font-size: 1rem;
    }
    p {
      font-size: 0.8rem;
    }
  }
`;

const ArrowButton = styled.button<{ $direction: 'left' | 'right' }>`
  position: absolute;
  top: 50%;
  ${props => props.$direction === 'left' ? 'left: 0;' : 'right: 0;'}
  transform: translateY(-50%);
  background: white;
  border: 2px solid #e95d22;
  color: #e95d22;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  z-index: 2;
  font-size: 1.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  &:hover {
    background: #e95d22;
    color: white;
  }

  @media (max-width: 768px) {
    width: 36px;
    height: 36px;
    font-size: 1.2rem;
  }
`;

const DotContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 2rem;

  @media (max-width: 768px) {
    margin-top: 1rem;
    gap: 0.3rem;
  }
`;

const Dot = styled.button<{ $active: boolean }>`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: none;
  background-color: ${props => props.$active ? '#e95d22' : '#ddd'};
  cursor: pointer;
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    width: 8px;
    height: 8px;
  }
`;

const AboutSection = styled.section`
  background: linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), url(${Images.PowerlineImage});
  background-size: cover;
  background-position: center;
  color: #333;
  padding: 5rem 2rem;
  text-align: center;

  p {
    max-width: 1000px;
    margin: 0 auto;
    line-height: 1.8;
    font-size: 1.1rem;
    opacity: 0.8;
  }

  @media (max-width: 768px) {
    padding: 3rem 1rem;
  }
`;

const DiscussSection = styled(Section)`
  background: #e95d22;
  color: white;
  text-align: left;
  padding: 2.5rem 2rem;
  position: relative;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0) 100%);
  }

  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

const DiscussContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  z-index: 1;
  gap: 3rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1.5rem;
    text-align: center;
  }
`;

const DiscussText = styled.div`
  flex: 1;
  max-width: 700px;

  h2 {
    font-size: 2.5rem;
    margin-bottom: 0.75rem;
    font-weight: 600;
  }

  p {
    font-size: 1.1rem;
    line-height: 1.4;
    margin-bottom: 0.5rem;
    opacity: 0.9;
  }

  @media (max-width: 768px) {
    h2 {
      font-size: 2rem;
    }
  }
`;

const DiscussButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  background: white;
  color: #e95d22;
  padding: 0.75rem 2rem;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1rem;
  text-decoration: none;
  transition: all 0.3s ease;
  border: 2px solid white;
  white-space: nowrap;
  height: fit-content;
  align-self: center;

  &:hover {
    background: transparent;
    color: white;
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    margin-top: 0.5rem;
  }
`;

const Button = styled.button`
  background: transparent;
  color: #e95d22;
  border: 2px solid #e95d22;
  padding: 0.8rem 2rem;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.3s ease;
  margin-top: 1.5rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 0.9rem;

  &:hover {
    background: #e95d22;
    color: white;
    transform: translateY(-2px);
  }
`;

const HomePage: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [_, setDirection] = useState(1);

  const servicesRoutes = ROUTES.find((route) => route.title === "Services")?.children || [];
  const contactRoute = ROUTES.find((route) => route.title === "Contact Us")?.path || "/contact";

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentTestimonial((prev) => 
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const handlePrevious = () => {
    setDirection(-1);
    setCurrentTestimonial((prev) => 
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentTestimonial((prev) => 
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const handleDotClick = (index: number) => {
    setDirection(index > currentTestimonial ? 1 : -1);
    setCurrentTestimonial(index);
  };

  const serviceImages = {
    "/services/substations-transmission-distribution-line": Images.SubstationHQImage,
    "/services/designing": Images.DesignBuildingImage,
    "/services/survey-inspection": Images.SurveyInspectionImage,
  };

  return (
    <>
      <HeroSection>
        <HeroContent>
          <HeroTitle>
            <TitleLine>
              BUILDING <ColoredSpan>FOUNDATION</ColoredSpan>
            </TitleLine>
            <TitleLine>
              FOR A BETTER FUTURE
            </TitleLine>
            <HeroSubtitle>
              Our objective is to bridge the gap of sustainable development worldwide.
            </HeroSubtitle>
          </HeroTitle>
        </HeroContent>
      </HeroSection>

      <ProjectsSection>
        <SectionTitle>PROJECT HIGHLIGHTS</SectionTitle>
        <ProjectGrid>
          <ProjectCard>
            <img src={Images.SubstationHQImage} alt="Substation HQ" />
          </ProjectCard>
          <ProjectCard>
            <img src={Images.Powerline2Image} alt="Transmission Line" />
          </ProjectCard>
          <ProjectCard>
            <img src={Images.CraneImage} alt="Construction" />
          </ProjectCard>
        </ProjectGrid>
      </ProjectsSection>

      <Section $dark>
        <SectionTitle $dark>WHAT WE OFFER</SectionTitle>
        <ServicesGrid>
          {servicesRoutes.map((service) => (
            <ServiceCard key={service.path}>
              <img 
                src={serviceImages[service.path as keyof typeof serviceImages]} 
                alt={service.title}
              />
              <h3>{service.title}</h3>
              <Link to={service.path}>
                <Button>Learn More</Button>
              </Link>
            </ServiceCard>
          ))}
        </ServicesGrid>
      </Section>

      <TestimonialsSection>
        <SectionTitle>WHAT THEY'RE SAYING</SectionTitle>
        <TestimonialWrapper>
          <ArrowButton $direction="left" onClick={handlePrevious}>
            &#8592;
          </ArrowButton>
          <TestimonialContainer>
            <TestimonialSlider
              style={{
                transform: `translateX(-${currentTestimonial * 100}%)`,
              }}
            >
              {testimonials.map((testimonial, _) => (
                <TestimonialSlide key={testimonial.id}>
                  <QuoteIcon>"</QuoteIcon>
                  <TestimonialText>
                    {testimonial.text}
                  </TestimonialText>
                  <TestimonialAuthor>
                    <h4>{testimonial.author}</h4>
                    <p>{testimonial.position}</p>
                  </TestimonialAuthor>
                </TestimonialSlide>
              ))}
            </TestimonialSlider>
          </TestimonialContainer>
          <ArrowButton $direction="right" onClick={handleNext}>
            &#8594;
          </ArrowButton>
          <DotContainer>
            {testimonials.map((_, index) => (
              <Dot
                key={index}
                $active={currentTestimonial === index}
                onClick={() => handleDotClick(index)}
              />
            ))}
          </DotContainer>
        </TestimonialWrapper>
      </TestimonialsSection>

      <Section $dark>
        <SectionTitle $dark>WHO WE ARE</SectionTitle>
        <WhoWeAreContent $dark>
          <p>
          Win Power Infra Pvt. Ltd. is a pillar of Singhi group of companies, and a diversified company established in 1993 with an objective to bridge the gap of sustainable development of power in Rural & semi urban areas in North Eastern region. The North eastern region is one of typical & remote terrain where we are successfully delivering our goal and brought smile to millions of people in the hinterland of the country.
          </p>
        </WhoWeAreContent>
      </Section>

      <DiscussSection>
        <DiscussContent>
          <DiscussText>
            <h2>LET'S DISCUSS!</h2>
            <p>Want to start your dream project? But have many doubts in your mind.</p>
            <p>We are always here to help you. Sit back and let us take care of your project.</p>
          </DiscussText>
          <DiscussButton to={contactRoute}>Contact Us</DiscussButton>
        </DiscussContent>
      </DiscussSection>
    </>
  );
};

export default HomePage;
