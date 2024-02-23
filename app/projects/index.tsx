import { LoaderFunctionArgs, json } from "@remix-run/node";
import { MetaFunction } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "Projects" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const url = new URL(request.url);
  const q = url.searchParams.get("q") || "";
  
  return json({ q })
};

export default function Projects() {
  return (
    <>
    </>
  );
}