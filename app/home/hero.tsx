import SvgDeveloper from "./developer";

type Props = {
  callToAction: () => void;
};

export default function Hero(props: Props) {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row px-3">
        <div className="flex flex-col justify-center ">
          <h1 className="text-5xl font-bold">Hi 👋, I'm Jamiu Adeniyi</h1>
          <p className="mt-2">I am fullstack web and mobile app developer.</p>
          <p className="mt-2">
            <span className="font-bold my-2">Welcome 🤗</span> to my new
            portfolio website built 😘 with React{" "}
            <a href="https://remix.run">(Remix framework)</a> and{" "}
            <a href="https://tailwindcss.com">TailwindCSS</a>.
          </p>
          <p className="mt-2">
            I will continually post my new projects on here so you can see the
            projects have worked easily. You can search or filter through these
            project list below.
            <br />
            <br />
            If you have any question and/or enquiry, feel free to reach oit to
            me.
          </p>
          <button
            className="btn bg-gray-200 uppercase mt-6 dark:text-base-200"
            onClick={props.callToAction}
          >
            Get in touch
          </button>
        </div>

        <SvgDeveloper />
      </div>
    </div>
  );
}
