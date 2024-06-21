// import { useState } from "react";
// import { Eye, EyeSlash } from "phosphor-react";
// import { useFormContext } from "react-hook-form";

// export function InputPassword() {
//   const [showPassword, setShowPassword] = useState<boolean>(false);
//   const { register } = useFormContext();

//   const toggleShowPassword = () => {
//     setShowPassword((prevState) => !prevState);
//   };

//   return (
//     <div className="relative">
//       <input
//         type={showPassword ? "text" : "password"}
//         id="password"
//         className="mb-4 rounded border border-gray-300 p-2 pr-10"
//         {...register("password")}
//       />
//       <button
//         type="button"
//         onClick={toggleShowPassword}
//         className="absolute right-2 top-1/2 -translate-y-1/2 transform"
//       >
//         {showPassword ? <EyeSlash size={20} /> : <Eye size={20} />}
//       </button>
//     </div>
//   );
// }
