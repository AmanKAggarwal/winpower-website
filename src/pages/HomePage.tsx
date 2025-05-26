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
  margin-top: -60px; /* Offset the PageWrapper padding */

  @media (max-width: 768px) {
    margin-top: -55px; /* Offset the mobile PageWrapper padding */
  }
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
    object-fit: contain;
    transition: transform 0.3s ease;
  }

  &:hover img {
    transform: scale(1.1);
  }
`;

const Section = styled.section<{ $dark?: boolean }>`
  padding: 5rem 1rem;
  background: ${props => props.$dark ? '#000000' : '#ffffff'};
  color: ${props => props.$dark ? '#ffffff' : '#000000'};
`;

const SectionTitle = styled.h2<{ $dark?: boolean }>`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 3rem;
  color: ${props => props.$dark ? '#ffffff' : '#000000'};
`;

const WhoWeAreContent = styled.div<{ $dark?: boolean }>`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  text-align: center;

  p {
    font-size: 1.2rem;
    line-height: 1.8;
    color: ${props => props.$dark ? '#ffffff' : '#000000'};
    margin: 0;
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
  background-color: #e95d22;
  color: white;
  padding: 2rem;
  border-radius: 10px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  transition: transform 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: translateY(-5px);
  }

  h3 {
    color: white;
    margin: 1rem 0;
    font-size: 1.5rem;
  }

  img {
    width: 140px;
    height: 140px;
    object-fit: contain;
    margin-bottom: 1rem;
    border-radius: 10px;
    background-color: white;
    padding: 1rem;
    transition: transform 0.3s ease;
  }

  &:hover img {
    transform: scale(1.05);
  }
`;

const LearnMoreButton = styled(Link)`
  display: inline-block;
  padding: 0.5rem 1.5rem;
  border: 2px solid white;
  border-radius: 5px;
  color: white;
  text-decoration: none;
  font-weight: bold;
  transition: all 0.3s ease;

  &:hover {
    background-color: white;
    color: #e95d22;
  }
`;

const TestimonialsSection = styled.section`
  background-color: #ffffff;
  padding: 5rem 1rem;
  position: relative;
  overflow: hidden;
`;

const TestimonialWrapper = styled.div`
  position: relative;
  max-width: 800px;
  margin: 0 auto;
  padding: 0 6rem;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

const TestimonialContainer = styled.div`
  overflow: hidden;
  width: 100%;
  border-radius: 12px;
  border: 2px solid #000000;
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
  background: #f7f7f7;
  border-radius: 10px;
  margin: 0;

  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

const TestimonialText = styled.p`
  font-size: 1.2rem;
  line-height: 1.8;
  margin: 1.5rem auto;
  color: #000000;
  max-width: 800px;

  @media (max-width: 768px) {
    font-size: 1rem;
    line-height: 1.6;
    margin: 1rem auto;
  }
`;

const QuoteIcon = styled.div`
  font-size: 4rem;
  color: #000000;
  opacity: 0.2;
  font-family: Georgia, serif;
  margin-bottom: -2rem;
`;

const TestimonialAuthor = styled.div`
  text-align: center;
  margin-top: 2rem;

  h4 {
    font-size: 1.2rem;
    color: #000000;
    margin: 0;
    font-weight: bold;
  }

  p {
    font-size: 1rem;
    color: #000000;
    margin: 0.5rem 0 0;
  }
`;

// TODO: uncomment this when dot navigation is needed
// const DotContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   gap: 0.5rem;
//   margin-top: 2rem;
// `;

// const Dot = styled.button<{ $active: boolean }>`
//   width: 12px;
//   height: 12px;
//   border-radius: 50%;
//   border: none;
//   background-color: ${props => props.$active ? '#e95d22' : 'rgba(233, 93, 34, 0.3)'};
//   cursor: pointer;
//   transition: all 0.3s ease;
//   padding: 0;

//   &:hover {
//     background-color: ${props => props.$active ? '#e95d22' : 'rgba(233, 93, 34, 0.5)'};
//   }
// `;

// const ArrowButton = styled.button<{ $direction: 'left' | 'right' }>`
//   background: none;
//   border: none;
//   color: #e95d22;
//   font-size: 2rem;
//   cursor: pointer;
//   padding: 1rem;
//   transition: transform 0.3s ease;
//   position: absolute;
//   top: 50%;
//   transform: translateY(-50%);
//   ${props => props.$direction === 'left' ? 'left: -4rem;' : 'right: -4rem;'}
//   z-index: 2;
//   background-color: white;
//   border-radius: 50%;
//   width: 50px;
//   height: 50px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   border: 2px solid #e95d22;

//   &:hover {
//     transform: translateY(-50%) scale(1.1);
//   }

//   @media (max-width: 768px) {
//     display: none;
//   }
// `;

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

const HomePageContainer = styled.div`
  width: 100%;
  min-height: 100vh;
`;

const MainContent = styled.main`
  width: 100%;
`;

const HomePage: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const contactRoute = ROUTES.find(route => route.path === '/contact-us')?.path || '#';

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // const handlePrevTestimonial = () => {
  //   setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  // };

  // const handleNextTestimonial = () => {
  //   setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  // };

  return (
    <HomePageContainer>
      <MainContent>
        <HeroSection>
          <HeroContent>
            <HeroTitle>
              <TitleLine>
                EMPOWERING THE FUTURE
              </TitleLine>
              <TitleLine>
                WITH <ColoredSpan>SUSTAINABLE</ColoredSpan>
              </TitleLine>
              <TitleLine>
                <ColoredSpan>POWER SOLUTIONS</ColoredSpan>
              </TitleLine>
            </HeroTitle>
            <HeroSubtitle>
              Delivering innovative electrical solutions for a brighter, more sustainable tomorrow
            </HeroSubtitle>
          </HeroContent>
        </HeroSection>

        <Section style={{ background: '#f8f9fa' }}>
          <SectionTitle>WHO WE ARE</SectionTitle>
          <WhoWeAreContent>
            <p>
            Win Power Infracon LLP focuses on sustainable power development in rural and semi-urban North Eastern India. Led by CEO Suresh Kr. Agarwalla, the company has roots in United Hardware & Electrical Stores (founded in 1959) and is expanding into civil, real estate, and infrastructure projects while maintaining quality and environmental responsibility.
            </p>
          </WhoWeAreContent>
        </Section>

        <Section>
          <SectionTitle>WHAT WE OFFER</SectionTitle>
          <ServicesGrid>
            {ROUTES.find((route) => route.title === "Services")?.children?.map((service) => (
              <ServiceCard key={service.path}>
                <img 
                  src={service.title === "Substations, Transmission & Distribution Line" ? Images.SubstationHQImage :
                      service.title === "Designing" ? Images.DesignBuildingImage :
                      Images.SurveyInspectionImage}
                  alt={service.title}
                />
                <h3>{service.title}</h3>
                <LearnMoreButton to={service.path}>Learn More</LearnMoreButton>
              </ServiceCard>
            ))}
          </ServicesGrid>
        </Section>

        <ProjectsSection>
          <SectionTitle>Clients</SectionTitle>
          <ProjectGrid>
            <ProjectCard>
              <img src={Images.AEGCLLogoImage} alt="Substation HQ" />
            </ProjectCard>
            <ProjectCard>
              <img src={Images.APDCLLogoImage} alt="Transmission Line" />
            </ProjectCard>
            <ProjectCard>
              <img src={Images.AssamPowerGenerationLogoImage} alt="Construction" />
            </ProjectCard>
            <ProjectCard>
              <img src={Images.OilIndiaLogoImage} alt="Construction" />
            </ProjectCard>
          </ProjectGrid>
        </ProjectsSection>

        <TestimonialsSection>
          <SectionTitle>Testimonials</SectionTitle>
          <TestimonialWrapper>
            {/* Uncomment the arrows if you want to enable manual navigation */}
            {/* <ArrowButton $direction="left" onClick={handlePrevTestimonial}>
              &#8592;
            </ArrowButton>
            <ArrowButton $direction="right" onClick={handleNextTestimonial}>
              &#8594;
            </ArrowButton> */}
            <TestimonialContainer>
              <TestimonialSlider
                style={{
                  transform: `translateX(-${currentTestimonial * 100}%)`,
                }}
              >
                {testimonials.map((testimonial) => (
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
            {/* <DotContainer>
              {testimonials.map((_, index) => (
                <Dot
                  key={index}
                  $active={currentTestimonial === index}
                  onClick={() => setCurrentTestimonial(index)}
                />
              ))}
            </DotContainer> */}
          </TestimonialWrapper>
        </TestimonialsSection>

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
      </MainContent>
    </HomePageContainer>
  );
};

export default HomePage;
