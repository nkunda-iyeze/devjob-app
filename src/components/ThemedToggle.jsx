import { useEffect, useState, useCallback} from 'react'
const ThemedToggle = () => {
    const [theme,setTheme] =  useState(
        localStorage.getItem('theme') ? localStorage.getItem('theme') : 'system'
      ); 
      const element = document.documentElement;
      const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");
      
      const options = [
        {
          icon:"sunny-sharp",  
          text:"light",
        },
        {
          icon:"moon-sharp",  
          text:"dark",
        },
        {
          icon:"desktop-sharp",  
          text:"system",
        }
      ];
      const onwindowMatch = useCallback(() => {
        if (localStorage.theme === "dark" || (!("theme" in localStorage) && darkQuery.matches)) {
          element.classList.add("dark");
        } else {
          element.classList.remove("dark");
        }
      }, [darkQuery.matches, element.classList]);
      
      onwindowMatch ();
      useEffect(()=>{
        switch (theme) {
          case "dark":
            element.classList.add("dark");
            localStorage.setItem("theme", "dark");
            break;
          case "light":
            element.classList.remove("dark");
            localStorage.setItem("theme", "light");
            break;
            default:
              localStorage.removeItem("theme");
              onwindowMatch()
              break;
        }
      },[theme,element.classList, onwindowMatch]);
      darkQuery.addEventListener("change", (e)=>{
          if(!("theme" in localStorage)){
            if(e.matches){
              element.classList.add("dark");
            }else{
              element.classList.remove("dark");
            }
          }
      });
  return (
    <div className='flex text-2xl text-white'>
            {
              options?.map(option =>(
                <button key={option.text} className={`mx-4 text-3xl font-bold ${theme === option.text &&' text-slate-900'}`} onClick={()=> setTheme(option.text)}>
                <ion-icon name={option.icon} ></ion-icon>
                </button>
              ))
            }
            

        </div>
  )
}

export default ThemedToggle