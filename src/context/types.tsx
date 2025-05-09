import { StaticImageData } from 'next/image';

/** ENUMS */
export enum PROFICIENCY {
  EXPERT = 'EXPERT',
  EXPERIENCED = 'EXPERIENCED',
  INTERMEDIATE = 'INTERMEDIATE',
  BEGINNER = 'BEGINNER',
}

export enum PROJECT_TYPE {
  FRONTEND = 'FRONTEND',
  FULL_STACK = 'FULL_STACK',
  BACKEND = 'BACKEND',
  MOBILE = 'MOBILE',
  EMBEDDED_SYSTEMS = 'EMBEDDED_SYSTEMS',
}

/** TYPES  */
export type Skill = {
  id: string;
  title: string;
  proficiency: PROFICIENCY;
};

export type Language = {
  id: string;
  title: string;
  proficiency: PROFICIENCY;
};

export type Link = {
  id: string;
  title: string;
  url: string;
};

export type Education = {
  id: string;
  start: string;
  end: string;
  certificate: string;
  school: string;
  country: string;
  notes: string[];
};

export type EmploymentHistory = {
  id: string;
  start: string;
  end: string;
  position_held: string;
  company_name: string;
  country: string;
  points: string[];
};

export type Course = {
  id: string;
  title: string;
  organization: string;
  url: string;
  start: string;
  end: string;
};

export type Project = {
  id: string;
  img: string | StaticImageData;
  previews: (string | StaticImageData)[];
  github: string;
  url: string | null;
  title: string;
  description: string;
  type: PROJECT_TYPE;
  tags: string[];
};

export type ProgrammingLanguages = {
  id: string;
  title: string;
  proficiency: string;
};

export type Service = {
  id: string;
  title: string;
  summary: string;
  proficiency: PROFICIENCY;
  skills: Skill[];
};

/** CONSUMATED */
export type Portfolio = {
  id: string;
  started_programming_at: string; // year started programming
  started_professions_at: string; // year started working professionally
  name: {
    complete: string;
    last: string;
    first: string;
    other: string[];
  };
  role: string;
  professional_summary: string;
  avatar: string | StaticImageData;
  imgs: (string | StaticImageData)[];
  nationality: string;
  phone_number: string;
  email: string;
  address: {
    country: string;
    state: string;
    region: string;
    street: string;
    apartment: string;
    city: string;
    zip_code: number;
    address: string;
  };
  date_of_birth: string;
  services: Service[];
  skills: Skill[];
  languages: Language[];
  links: Link[];
  education: Education[];
  hobbies: string[];
  other: Record<string, any>;
  socials: {
    github: string;
    linkedin: string;
    twitter: string;
  };
  courses: Course[];
  work_experience: EmploymentHistory[];
  programming_languages: ProgrammingLanguages[];
  projects: Project[];
};
