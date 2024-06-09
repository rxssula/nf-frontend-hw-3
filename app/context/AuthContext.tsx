// import * as React from "react";
// import axios from "axios";
// import { useRouter } from "next/router";

// export const AuthContext = React.createContext<AuthContextType | undefined>(
//   undefined
// );

// const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
//   children,
// }) => {
//   const [user, setUser] = React.useState<any>(null);
//   const router = useRouter();

//   React.useEffect(() => {
//     const token = localStorage.getItem("authToken");
//     if (token) {
//       fetchUserData(token);
//     }
//   }, []);

//   const fetchUserData = async (token: string) => {
//     try {
//       const response = await axios.get("https://dummyjson.com/auth/user", {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       setUser(response.data);
//     } catch (error) {
//       console.error("Failed to fetch user data:", error);
//     }
//   };

//   const login = async (username: string, password: string) => {
//     try {
//       const response = await axios.post("https://dummyjson.com/auth/login", {
//         username,
//         password,
//         expiresInMins: 30,
//       });

//       const { token, refreshToken } = response.data;

//       localStorage.setItem("authToken", token);
//       localStorage.setItem("refreshToken", refreshToken);

//       fetchUserData(token);

//       router.push("/protected");
//     } catch (error) {
//       console.error("Failed to login: ", error);
//     }
//   };

//   const logout = () => {
//     localStorage.removeItem("authToken");
//     localStorage.removeItem("refreshToken");
//     setUser(null);
//     router.push("/login");
//   };

//   const refreshAuthToken = async () => {
//     try {
//       const refreshToken = localStorage.getItem("refreshToken");
//       if (!refreshToken) {
//         throw new Error("No refresh token available");
//       }

//       const response = await axios.post("https://dummyjson.com/auth/refresh", {
//         refreshToken,
//       });

//       const { token } = response.data;

//       localStorage.setItem("authToken", token);
//       fetchUserData(token);
//     } catch (error) {
//       console.error("Failed to refresh auth token: ", error);
//     }
//   };

//   const valueToShare = {
//     user,
//     login,
//     logout,
//     refreshAuthToken,
//   };

//   return (
//     <AuthContext.Provider value={valueToShare}>{children}</AuthContext.Provider>
//   );
// };

// const useAuth = () => {
//   const context = React.useContext(AuthContext);
//   if (context === undefined) {
//     throw new Error("useAuth must be used within an AuthProvider");
//   }
//   return context;
// };

// export { AuthProvider, useAuth };
