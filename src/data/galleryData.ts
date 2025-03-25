export interface GalleryCategory {
  title: string;
  images: string[];
}

type ImageModule = {
  default: string;
};

// Import all gallery images
// const achievementImages = import.meta.glob<ImageModule>('../assets/gallery/achievements/*.{png,jpg,jpeg,gif}', { eager: true });
// const majuliImages = import.meta.glob<ImageModule>('../assets/gallery/projects/majuli/*.{png,jpg,jpeg,gif}', { eager: true });
// const ddugjyImages = import.meta.glob<ImageModule>('../assets/gallery/projects/ddugjy/*.{png,jpg,jpeg,gif}', { eager: true });
// const epcImages = import.meta.glob<ImageModule>('../assets/gallery/projects/epcMobileSubstation/*.{png,jpg,jpeg,gif}', { eager: true });
// const lkhepImages = import.meta.glob<ImageModule>('../assets/gallery/projects/lkhep/*.{png,jpg,jpeg,gif}', { eager: true });
// const foodDistImages = import.meta.glob<ImageModule>('../assets/gallery/foodDistribution/*.{png,jpg,jpeg,gif}', { eager: true });
const selectedImages = import.meta.glob<ImageModule>('../assets/gallery/selected/*.{png,jpg,jpeg,gif}', { eager: true });

// Helper function to get image URLs from the import result
const getImageUrls = (images: Record<string, ImageModule>) => {
  return Object.values(images).map(module => module.default);
};

export const galleryData: GalleryCategory[] = [
  {
    title: 'Achievement',
    images: getImageUrls(selectedImages)
  },
  // {
  //   title: 'Honorable Chief Minister of Assam Sri Sarbananda Sonowal Inaugurates 33/11 KV Substation at Majuli',
  //   images: getImageUrls(majuliImages)
  // },
  // {
  //   title: 'Inaugartion of 33/11 KV Substation under DDUGJY Scheme by Honorable MP of Jorhat Shri Topon Kumar Gogoi, Honorable MLA Shri Rupjyoti Kurmi, Honorable MD Shri Dhurbajyoti Hazarika , AEGCL cum CGM,(RE) and the officres for APDCL, AEGCL and Power Grid',
  //   images: getImageUrls(ddugjyImages)
  // },
  // {
  //   title: '1st EPC Company to Supply and install 33/11 KV Mobile Substation in North East Region.',
  //   images: getImageUrls(epcImages)
  // },
  // {
  //   title: '33/11 KV 2x2.5 MVA Sub-Station at Lower Kopili Hydro Electric Project. (LKHEP) Longku.',
  //   images: getImageUrls(lkhepImages)
  // },
  // {
  //   title: 'SOLIDARITY TOWARS BATTLE FOR COVID-19 - BLANKET & FOOD DISTRIBUTION',
  //   images: getImageUrls(foodDistImages)
  // }
];
