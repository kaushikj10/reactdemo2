import Navbar from "../navbar/Navbar"
import { Outlet } from "react-router-dom"
export default function Layout(){
    return(<>
    <img src="https://tse3.mm.bing.net/th/id/OIP.0JbmuwCitqcLtiRar3oBkgHaHT?pid=Api&P=0&h=180" width={"60px"} height={"60px"} />
    <Navbar/>
    <Outlet/>
    </>)
}