import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';

import Button from 'components/shared/button';
import Container from 'components/shared/container';
import Heading from 'components/shared/heading';

const items = [
  {
    imageName: 'andreasGehrig',
    name: 'Andreas Gehrig',
    position: 'arch.cloud Co-Founder',
    position2: 'Cloud Software Engineer',
    url: 'https://www.linkedin.com/in/andreasgehrig/',
  },
  {
    imageName: 'nemanjaKostic',
    name: 'Nemanja Kostic',
    position: 'arch.cloud Co-Founder',
    position2: 'Cloud Software Engineer',
    url: 'https://www.linkedin.com/in/nemanjakostic/',
  },
];

const AboutUs = () => {
  const { andreasGehrig, nemanjaKostic } = useStaticQuery(graphql`
    query {
      andreasGehrig: file(relativePath: { eq: "pages/home/about-us/gehrig.jpg" }) {
        childImageSharp {
          gatsbyImageData(width: 312)
        }
      }

      nemanjaKostic: file(relativePath: { eq: "pages/home/about-us/kostic.jpg" }) {
        childImageSharp {
          gatsbyImageData(width: 312)
        }
      }
    }
  `);

  const imageCollection = { andreasGehrig, nemanjaKostic };
  return (
    <section className="justify-center py-20 lg:py-30 xl:pb-32 bg-secondary xl:pt-28" id="about-us">
      <Container size="sm">
        <Heading
          tag="h2"
          className="justify-center text-center max-w-[1006px] mx-auto"
          theme="black"
          size="md"
        >
          We lead a team of highly experienced cloud software engineers based in Switzerland and
          Serbia
        </Heading>
        <div className="grid grid-cols-1 max-w-[320px] sm:max-w-none sm:grid-cols-2 gap-x-6 gap-y-8 lg:gap-x-16 mt-12 lg:mt-16 md:max-w-[688px] mx-auto">
          {items.map(({ imageName, name, position, position2, url }) => {
            const image = imageCollection[imageName];
            return (
              <div className="flex flex-col" key={name}>
                <GatsbyImage className="bg-black" image={getImage(image)} alt="" />
                <span className="text-xl font-semibold leading-none lg:leading-none lg:text-2xl mt-7">
                  {name}
                </span>
                <span className="mt-4 text-base leading-none lg:leading-none lg:text-lg">
                  {position}
                </span>
                <span className="mt-4 text-base leading-none lg:leading-none lg:text-lg">
                  {position2}
                </span>
                <Button
                  target="_blank"
                  to={url}
                  size="small"
                  theme="secondary"
                  className="self-start mt-6 uppercase"
                >
                  LinkedIn
                </Button>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
export default AboutUs;
