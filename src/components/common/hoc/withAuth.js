import { useRouter } from "next/router"
import { useEffect } from "react"

export const withAuth = (Component)=>(props)=>{
	const router = useRouter()

	useEffect(()=>{
		if(!localStorage.getItem("accessToken")){
			alert("로그인을 먼저 해주세요")
			void router.push("/auth/login");
		}
	},[])

	return <Component {...props} />
}