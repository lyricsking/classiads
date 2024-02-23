import SummaryCard from "~/shared/component/summary.card";
import Search from "./search";
import { useSubmit } from "@remix-run/react";
import { ChangeEvent } from "react";
import SelectInput from "./select.input";
import { Project } from "../types/project";

type Props = {
  q: string,
  projects: Project[]
}

const options = [
  {
    name: 'All Projects',
    selected: true
  }
];

export default function ProjectList(prop: Props) { 
  const { q, projects } = prop;

  const submit = useSubmit()
  const handleOnchange = (e: ChangeEvent<HTMLInputElement>) => {
    submit({ 'q': e.currentTarget.value }, {
      action: '#projects'
    })
  }

  const filteredProjects = !q ? projects : projects.filter((project: Project) => {
      return Object.values(project).some((value, index) => {
        return String(value).toLowerCase().includes(q.toLowerCase()) && Object.keys(project)[index] != 'img';
      });
    });

  return (
    <div className="min-h-screen py-10 px-3">
      <h3 className="text-3xl font-bold text-center mb-6">Portfolio Projects</h3>
      <div className="grid grid-cols-5 gap-2">
        <Search
          id="project-search"
          className="col-span-3" 
          inputClass="w-full input input-sm bg-base-100" 
          name="q" 
          defaultValue={q} 
          placeholder="Search Projects" 
          onChange={handleOnchange}
        />
        <SelectInput className="col-span-2 select w-full max-w-xs select-sm bg-base-100" options={options} />
      </div>
      <div className="divider mt-0" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4 pt-6">
        {
            filteredProjects && filteredProjects.map((project: Project) => (
              <SummaryCard 
                key={project.title}
                className="mb-6"
                id={project.id}
                title={project.title}
                img={project.img}
                description={project.description}
              />
            ))
          }
      </div>
    </div>
  );
}
