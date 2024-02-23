import { LoaderFunctionArgs, json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import Social from "~/shared/component/social";
import { projects } from "~/shared/data/projects";
import { Project as ProjectData } from "~/shared/types/project";

export const loader = async ({ params }: LoaderFunctionArgs) => {
  const project = projects.find((project) => project.id == params.projectId);
  return json({ project });
};

export default function Project() {
  const { project } = useLoaderData<typeof loader>();

  return (
    <div className="min-h-screen">
      {project ? <ProjectContent {...project} /> : <NoProjectFound />}
    </div>
  );
}

function ProjectContent(project: ProjectData) {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold text-center mt-4 py-2">
        {project.title}
      </h1>

      <div className="divider my-2" />
      <div className="flex items-center gap-6">
        <div></div>
        <div>{project.tag}</div>
      </div>
      <div className="divider my-2" />
      <figure className="bg-gray-300 rounded-lg p-2">
        <img src={project.img} alt={project.title} />
      </figure>

      <div className="text-start mt-16">
        <h3 className="font-semibold text-2xl">Client</h3>
        <p className="pt-2">Name: {project.client.name}</p>
        <p className="pt-2">Service: {project.client.services}</p>
        <p className="pt-2">
          Website:{" "}
          <Link
            className="btn-link"
            to={project.client.website}
            prefetch="render"
          >
            {project.client.website}
          </Link>
        </p>
        <p className="pt-2">
          Phone:{" "}
          <Link
            to={`${project.client.phone}`}
            className="btn-link"
            prefetch="render"
          >
            {project.client.phone}
          </Link>
        </p>
      </div>

      <div className="mt-8">
        <h3 className="font-semibold text-2xl">Description</h3>
        <p className="pt-2">{project.description}</p>
      </div>

      <div className="mt-8">
        <h3 className="font-semibold text-2xl">Tech stack</h3>
        {project.techstack.map((value) => (
          <li key={value} className="pt-2">
            {value}
          </li>
        ))}
      </div>

      <div className="mt-8">
        <h3 className="font-semibold text-2xl">Limitations</h3>
        {project.limitations.map((value) => (
          <li key={value} className="pt-2">
            {value}
          </li>
        ))}
      </div>

      <div className="mt-8">
        <h3 className="font-semibold text-2xl py-4">Socials: </h3>
          <Social
            className="flex items-center gap-2"
            wrapperClass="btn"
            sizeClass="h-5 w-5"
            socials={["facebook", "whatsapp"]}
          />
      </div>
    </div>
  );
}

function NoProjectFound() {
  return (
    <div className="flex flex-col justify-center items-center">
      <p className="text-lg">No Project Found</p>
    </div>
  );
}
