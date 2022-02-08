import React from 'react';

import Container from 'components/shared/container';
import Heading from 'components/shared/heading';

import AWSLogo from './images/aws.inline.svg';
import AzureLogo from './images/azure.inline.svg';
import DockerLogo from './images/docker.inline.svg';
import GCPLogo from './images/gcp.inline.svg';
import GitlabLogo from './images/gitlab.inline.svg';
import GoLogo from './images/go.inline.svg';
import JavaLogo from './images/java.inline.svg';
import KotlinLogo from './images/kotlin.inline.svg';
import KubernetesLogo from './images/kubernetes.inline.svg';
import lines from './images/lines.svg';
import MongoDBLogo from './images/mongodb.inline.svg';
import PythonLogo from './images/python.inline.svg';
import TerraformLogo from './images/terraform.inline.svg';

const logos = [
  { name: 'AWS', logo: AWSLogo },
  { name: 'Kotlin', logo: KotlinLogo },
  { name: 'Terraform', logo: TerraformLogo },
  { name: 'Docker', logo: DockerLogo },
  { name: 'Python', logo: PythonLogo },
  { name: 'Kubernetes', logo: KubernetesLogo },
  { name: 'GCP', logo: GCPLogo },
  { name: 'Azure', logo: AzureLogo },
  { name: 'Java', logo: JavaLogo },
  { name: 'Gitlab', logo: GitlabLogo },
  { name: 'Go', logo: GoLogo },
  { name: 'MongoDB', logo: MongoDBLogo },
];

const Technologies = () => (
  <section className="py-20 lg:py-30 xl:py-40" id="technologies">
    <Container size="md">
      <Heading className="text-center lg:text-left" size="lg" tag="h2" theme="black">
        Technologies
      </Heading>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-8 auto-rows-[128px] xs:auto-rows-[176px] mt-12 lg:mt-16">
        {logos.map(({ name, logo: Logo }, index) => (
          <div
            className="relative flex items-center justify-center transition-colors duration-200 cursor-default group hover:bg-black bg-secondary"
            key={index}
          >
            <Logo className="transition-colors duration-200 group-hover:text-white" />
            <img
              className="absolute top-0 invisible transition-opacity duration-200 -translate-x-1/2 opacity-0 left-1/2 group-hover:opacity-100 group-hover:visible"
              src={lines}
              alt=""
              aria-hidden
            />
            <span className="absolute bottom-0 left-0 transition-opacity duration-200 invisible group-hover:visible opacity-0 py-2.5 px-3 uppercase tracking-widest group-hover:opacity-100 font-semibold text-xs bg-primary leading-none">
              {name}
            </span>
          </div>
        ))}
      </div>
    </Container>
  </section>
);

export default Technologies;
