import React from 'react';
import styled from 'styled-components';
import { galleryData } from '../data/galleryData';
import { MaxWidthWrapper, SectionContainer } from '../components/GenericPageComponents';
import PageTitleSection from '../components/PageTitleSection';
import galleryHeadlineImage from '../assets/gallery/galleryheadlineimage.png';

const GalleryContainer = styled(SectionContainer)`
  padding: 2rem 1rem;
  background-color: white;
`;

const HeadlineImageContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 2rem 0 2rem;
`;

const HeadlineImage = styled.img`
  max-width: 300px;
  height: auto;
`;

const StyledMaxWidthWrapper = styled(MaxWidthWrapper)`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CategorySection = styled.section`
  margin-bottom: 1rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  &:last-child {
    margin-bottom: 1rem;
  }
`;

const CategoryTitle = styled.h2`
  font-size: 1.2rem;
  color: #333;
  margin: 0.75rem 0;
  text-align: center;
  font-weight: 500;
`;

const ThreeColumnGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  width: 100%;
  justify-items: center;
  
  @media (min-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const FourColumnGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  width: 100%;
  justify-items: center;
  
  @media (min-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const ImageCard = styled.div<{ isLarge?: boolean }>`
  width: 100%;
  max-width: ${props => props.isLarge ? '320px' : '280px'};
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: white;
  border: 1px solid #000;
`;

const Image = styled.img`
  width: 100%;
  aspect-ratio: 4/3;
  object-fit: cover;
`;

const GalleryPage: React.FC = () => {
  return (
    <>
      <PageTitleSection title="Gallery" />
      <GalleryContainer>
        <StyledMaxWidthWrapper>
          <HeadlineImageContainer>
            <HeadlineImage src={galleryHeadlineImage} alt="Gallery Headline" />
          </HeadlineImageContainer>
          {galleryData.map((category, index) => {
            const isAchievement = category.title === 'Achievement';
            const Grid = isAchievement ? ThreeColumnGrid : FourColumnGrid;
            
            return (
              <CategorySection key={index}>
                <CategoryTitle>{category.title}</CategoryTitle>
                <Grid>
                  {category.images.map((imagePath, imageIndex) => (
                    <ImageCard key={imageIndex} isLarge={isAchievement}>
                      <Image src={imagePath} alt={`${category.title} image ${imageIndex + 1}`} />
                    </ImageCard>
                  ))}
                </Grid>
              </CategorySection>
            );
          })}
        </StyledMaxWidthWrapper>
      </GalleryContainer>
    </>
  );
};

export default GalleryPage;
