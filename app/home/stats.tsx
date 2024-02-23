import { Params } from "@remix-run/react";

export default function Stats(params: {className: string}){
  return (
	<div className={`mt-10 sm:mt-20 shadow-sm ${params.className}`}>
	  <div className="font-general-medium container mx-auto py-20 block sm:flex sm:justify-between items-center">
		<StatItem 
		  title="Years of experience"
		  counter={7}
		  measurement="+"
		/>
	  </div>
    </div>
  )
}

type StatItemProp = {
  title: string,
  counter: number,
  measurement: string
}

const StatItem = ({ title, counter, measurement }: StatItemProp) => {
	return (
		<div className="mb-20 sm:mb-0">
			<h2 className="text-4xl text-center text-secondary-dark dark:text-secondary-light mb-2">
				{counter} {measurement}
			</h2>
			<span className="font-general-regular block text-md text-center text-ternary-dark dark:text-ternary-light">
				{title}
			</span>
		</div>
	);
};
