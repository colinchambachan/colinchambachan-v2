import ExperienceClient from "./ExperienceClient";
import experiencesData from "@/public/data/experiences.json";

interface Experience {
  org: string;
  role: string;
  link: string;
  time: string;
  desc: string;
  skills: Array<string>;
}

export default function Experience() {
  const experiences = experiencesData as Experience[];

  return <ExperienceClient experiences={experiences} />;
}
