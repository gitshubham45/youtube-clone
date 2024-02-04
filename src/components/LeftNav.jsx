import React, { useContext } from 'react'

import { Context } from '../context/contextApi';
import LeftNavMenuItem from './LeftNavMenuItem';
import { categories } from "../utils/constants";
import { useNavigate } from 'react-router-dom';

const LeftNav = () => {

  const { selectedCategory, setSelectedCategory, mobileMenu } = useContext(Context);

  const navigate = useNavigate();

  const clickHandler = (name, type) => {
    switch (type) {
      case "category":
        return setSelectedCategory(name);
      case "home":
        return setSelectedCategory(name);
      case "menu":
        return false;
      default:
        break;
    }
  };

  const className = mobileMenu ? "visible" : "hidden";

  return (
    <div className={"w-[240px] overflow-y-auto h-[calc(100%-56px)] py-4 bg-black absolute ms:relative z-10 translate-x-[-240] md:translate-x-0 transition-all " +className}>
      <div className='flex px-5 flex-col '>
        {categories.map((item) => {
          return (
            <React.Fragment key={item.name}>
              <LeftNavMenuItem
                text={item.type === "Home" ? "Home" : item.name}
                icon={item.icon}
                action = {()=>{
                  clickHandler(item.name , item.type);
                  navigate("/");
                }}
                className={`${
                  selectedCategory === item.name 
                          ? "bg-white/[0/15]" 
                          : ""
                  }`}
              />
              {item.divider && (
                <hr className='my-5 border-white/[0.2]' />
              )}
            </React.Fragment>
          )
        })}
        <hr className='my-5 border-white/[0.2]' />
        <div className="text-white/[0.5] text-[12px]">
          Youtube clone
        </div>
      </div>
    </div>
  )
}

export default LeftNav;
