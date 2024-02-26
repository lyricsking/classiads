import Header from "~/shared/component/header";
import SvgDeveloper from "./developer";
import Search from "~/shared/component/search";

type Props = {
  callToAction: () => void;
};

export default function Hero(props: Props) {
  return (
    <div className="hero" style={{backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)'}}>
      <div className="hero-content p-0">
        <div className="flex flex-col justify-center space-y-20 min-h-screen">
          <div className="max-w-md rounded py-6 px-3 bg-base-200 bg-opacity-60">
            <h1 className="mb-5 text-3xl text-center font-bold px-3">Browse over 95,000,000 ads listing.</h1>
            
            <Search 
              className="mx-3 p-2 rounded" 
              searchInput={
                {
                  id: "",
                  className:"w-full input line-clamp-1",
                  name: '',
                  defaultValue: '',
                  placeholder:"Search by ads title, keyword, category, etc"
                
                }
              }
              locationInput={
                {
                  id: "",
                  className:"w-full input",
                  name: '', 
                  defaultValue: '',
                  placeholder: ''
                }
              }
            />      
          </div>
        </div>
      </div>
    </div>
  );
}
