import { useForm } from "react-hook-form";
import errorIcon from "./images/icon-error.svg";

function App() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  return (
    <div className="App">
      <div className="main-wrapper min-h-screen bg-[url('./images/bg-intro-mobile.png')] md:bg-[url('./images/bg-intro-desktop.png')] bg-center bg-cover bg-[red] bg-opacity-50 font-[Poppins] px-5 py-14 md:flex md:justify-center md:items-center">
        <div className="content-wrapper md:flex max-w-8xl justify-center md:gap-10">
          <div className="left-side text-center flex flex-col gap-5 md:w-1/2 md:justify-center lg:w-1/3 xl:w-[29%] md:text-left">
            <h1 className="text-white text-2xl font-semibold px-4 md:p-0 md:text-5xl">Learn to code by watching others</h1>
            <p className="text-slate-200 text-sm">See how experienced developers solve problems in real-time. Watching scripted tutorials is great, 
      but understanding how developers think is invaluable.</p>
          </div>
          <div className="right-side mt-9 flex flex-col gap-5">
            <div className="try-it-free-div shadow-xl bg-blue rounded-lg text-sm py-5 px-20 text-center">
              <p className="text-slate-200"><span className="text-white font-semibold">Try it free 7 days</span> then $20/mo. thereafter</p>
            </div>
            <form id="form1" className="bg-white shadow-xl p-5 flex flex-col gap-5 rounded-lg" onSubmit={handleSubmit(onSubmit)}>

              <div className="flex flex-col gap-2">
                <div className="relative">
                  {errors.firstName && (
                    <div className="absolute right-0 inset-y-0 flex items-center pr-4">
                      <img src={errorIcon} alt="error"/>
                    </div>
                  )}
                  <input className={`w-full border rounded p-4 text-sm placeholder-gray-500 font-semibold focus:outline focus:outline-1 focus:outline-blue ${errors.firstName && ("outline outline-1 outline-red focus:outline-red")}`} type="text" placeholder="First Name" {...register("firstName", { required: "First Name cannot be empty"})}/>
                </div>
                
                {errors.firstName && (
                  <p className="text-right text-xs text-red font-semibold">{errors.firstName.message}</p>
                )}
              </div>

            <div className="flex flex-col gap-2">
                <div className="relative">
                    {errors.lastName && (
                      <div className="absolute right-0 inset-y-0 flex items-center pr-4">
                        <img src={errorIcon} alt="error"/>
                      </div>
                    )}
                <input className={`w-full border rounded p-4 text-sm placeholder-gray-500 font-semibold focus:outline focus:outline-1 focus:outline-blue ${errors.lastName && ("outline outline-1 outline-red focus:outline-red")}`} type="text" placeholder="Last Name " {...register("lastName", { required: "Last Name cannot be empty"})}/>
              </div>  
                {errors.lastName && (
                  <p className="text-right text-xs text-red font-semibold">{errors.lastName.message}</p>
                )}
            </div>

              <div className="flex flex-col gap-2">
                <div className="relative">
                      {errors.email && (
                        <div className="absolute right-0 inset-y-0 flex items-center pr-4">
                          <img src={errorIcon} alt="error"/>
                        </div>
                      )}
                  <input className={`w-full border rounded p-4 text-sm placeholder-gray-500 font-semibold focus:outline focus:outline-1 focus:outline-blue ${errors.email && ("outline outline-1 outline-red focus:outline-red")}`} type="text" placeholder="Email Address"   {...register("email", {
                      required: "Email cannot be empty",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Looks like this is not an email"
                      }
                    })}/>
                  </div>
                  {errors.email && (
                    <p className="text-right text-xs text-red font-semibold">{errors.email.message}</p>
                  )}
              </div>

              <div className="flex flex-col gap-2">
                <div className="relative">
                        {errors.lastName && (
                          <div className="absolute right-0 inset-y-0 flex items-center pr-4">
                            <img src={errorIcon} alt="error"/>
                          </div>
                        )}
                  <input className={`w-full border rounded p-4 text-sm placeholder-gray-500 font-semibold focus:outline focus:outline-1 focus:outline-blue ${errors.password && ("outline outline-1 outline-red focus:outline-red")}`} type="text" placeholder="Password" {...register("password", { required: "Password cannot be empty"})}/>
                </div>
              {errors.password && (
                  <p className="text-right text-xs text-red font-semibold">{errors.password.message}</p>
                )}
              </div>
            
              <button type="submit" form="form1" className="w-full shadow-xl bg-green rounded uppercase text-sm text-white py-3 tracking-wider font-semibold cursor-pointer hover:opacity-70 transition-all duration-[25] ease-in-out">Claim your free trial</button>
              <div className="terms-and-services text-xs text-center px-4 text-grayishBlue">
              By clicking the button, you are agreeing to our <span className="text-red font-bold">Terms and Services</span> 
              </div>
            </form>
          </div>
        </div>
       
      </div>
    </div>
  );
}

export default App;
