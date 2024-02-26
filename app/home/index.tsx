import { json, LoaderFunctionArgs, type MetaFunction } from "@remix-run/node";
import Stats from "./stats";
import ProjectList from "~/shared/component/project.list";
import { useLoaderData, useNavigate } from "@remix-run/react";
import Hero from "./hero";
import { projects } from "~/shared/data/projects";
import Social from "~/shared/component/social";
import Header from "~/shared/component/header";

export const meta: MetaFunction = () => {
  return [
    { title: "Jamiu's Portfolio" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const url = new URL(request.url);
  const q = url.searchParams.get("q") || "";

  return json({ q, projects });
};

export default function Home() {
  const { q, projects } = useLoaderData<typeof loader>();

  const navigate = useNavigate();
  const callToAction = () => {
    navigate("#socials");
  };
  return (
    <>
      <Header className="fixed top-0 z-50 bg-base-200 bg-opacity-60" title="ClassiAds" titleLink="" />
      <Hero callToAction={callToAction} />
      <div id="stats">
        <Stats className="bg-base-100" />
      </div>

      <div id="projects">
        <ProjectList projects={projects} q={q} />
      </div>

      <div id="socials" className="mt-8 px-4">
        <h3 className="font-semibold text-2xl py-4">Socials</h3>
        <Social
          className="flex items-center gap-2"
          socials={["whatsapp", "facebook"]}
          sizeClass="h-7 w-7"
          wrapperClass="btn"
        />
      </div>
    </>
  );
}
