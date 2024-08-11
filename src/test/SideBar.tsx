import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom"
import { Button } from "flowbite-react"
import { MdAdminPanelSettings, MdCable, MdDashboard } from "react-icons/md";
import { ImOffice } from "react-icons/im";
import { GiAutoRepair } from "react-icons/gi";
import { FaUserGear } from "react-icons/fa6";

const SideBar = () => {
    const [username, setUsername] = useState<string>('');
    const fetchUsername = async () => {
        try {
        const response = await fetch('/api/me');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        let fetchedUsername = data.username;
        if (fetchedUsername.length > 13) {
            fetchedUsername = fetchedUsername.slice(0, 11) + "...";
        }
        return fetchedUsername;
        } catch (error) {
        console.error('Error fetching the username:', error);
        return '';
        }}
    const location = useLocation();
    const isHomePage = location.pathname === "/";
    const isAdminPage = location.pathname === "/admin";
    const isMaintenancePage = location.pathname === "/maintenance";
    const isCircuitsPage = location.pathname === "/circuits";
    const isSitesPage = location.pathname === "/sites";
    const isVendorsPage = location.pathname === "/vendors";
    // let username = fetchUsername
    // if (username.length > 13) {
    //     username = username.slice(0, 11) + "...";
    //   }
    if (username == "") {
        setUsername("guest-user")
    }
    useEffect(() => {
        fetchUsername().then(fetchedUsername => setUsername(fetchedUsername));
      }, []);
  return (
    <div className="h-screen w-48 p-4 m-0 flex flex-col justify-between bg-green-100 border-r-4 border-green-500 rounded-r-lg fixed">
        <div className="flex flex-col gap-10">
            <div className="self-center whitespace-nowrap p-5">
                <Link to="/" className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white">
                    <span className="px-2 py-1 bg-gradient-to-br from-green-500 via-cyan-500 to-blue-500 rounded-lg text-white">Ven</span>
                    dex
                </Link>
            </div>
            <div className="flex flex-col gap-4">
                <Link to="/">
                    {isHomePage ? (
                        <Button gradientDuoTone="greenToBlue" className="flex justify-start w-full focus:outline-none focus:ring-0 ">
                            <div className="p-0 w-full flex ">
                                <MdDashboard size="16px" />
                                <span className="ml-2 self-center whitespace-nowrap text-xs">Dashboard</span>
                            </div>
                        </Button>
                    ) : (
                        <Button gradientDuoTone="greenToBlue" className="flex justify-start w-full focus:outline-none focus:ring-0 " outline>
                            <div className="p-0 w-full flex ">
                                <MdDashboard size="16px" />
                                <span className="ml-2 self-center whitespace-nowrap text-xs">Dashboard</span>
                            </div>
                        </Button>
                    )}
                </Link>
                <Link to="/vendors">
                    {isVendorsPage ? (
                        <Button gradientDuoTone="greenToBlue" className="flex justify-start w-full focus:outline-none focus:ring-0 ">
                            <div className="p-0 w-full flex">
                                <FaUserGear size="16px" />
                                <span className="ml-2 self-center whitespace-nowrap text-xs">Vendors</span>
                            </div>
                        </Button>
                    ) : (
                        <Button gradientDuoTone="greenToBlue" className="flex justify-start w-full focus:outline-none focus:ring-0 " outline>
                            <div className="p-0 w-full flex ">
                                <FaUserGear size="16px" />
                                <span className="ml-2 self-center whitespace-nowrap text-xs">Vendors</span>
                            </div>
                        </Button>
                    )}
                </Link>
                <Link to="/circuits">
                    {isCircuitsPage ? (
                        <Button gradientDuoTone="greenToBlue" className="flex justify-start w-full focus:outline-none focus:ring-0 ">
                            <div className="p-0 w-full flex ">
                                <MdCable size="16px" />
                                <span className="ml-2 self-center whitespace-nowrap text-xs">Circuits</span>
                            </div>
                        </Button>
                    ) : (
                        <Button gradientDuoTone="greenToBlue" className="flex justify-start w-full focus:outline-none focus:ring-0 " outline>
                            <div className="p-0 w-full flex ">
                                <MdCable size="16px" />
                                <span className="ml-2 self-center whitespace-nowrap text-xs">Circuits</span>
                            </div>
                        </Button>
                    )}
                </Link>
                <Link to="/sites">
                    {isSitesPage ? (
                        <Button gradientDuoTone="greenToBlue" className="flex justify-start w-full focus:outline-none focus:ring-0">
                            <div className="p-0 w-full flex ">
                                <ImOffice size="16px" />
                                <span className="ml-2 self-center whitespace-nowrap text-xs">Sites</span>
                            </div>
                        </Button>
                    ) : (
                        <Button gradientDuoTone="greenToBlue" className="flex justify-start w-full focus:outline-none focus:ring-0 " outline>
                            <div className="p-0 w-full flex ">
                                <ImOffice size="16px" />
                                <span className="ml-2 self-center whitespace-nowrap text-xs">Sites</span>
                            </div>
                        </Button>
                    )}
                </Link>
                <Link to="/maintenance">
                    {isMaintenancePage ? (
                        <Button gradientDuoTone="greenToBlue" className="flex justify-start w-full focus:outline-none focus:ring-0 ">
                            <div className="p-0 w-full flex active:outline-none active:ring-0 no-focus-ring">
                                <GiAutoRepair size="16px" />
                                <span className="ml-2 self-center whitespace-nowrap text-xs">Maintenance</span>
                            </div>
                        </Button>
                    ) : (
                        <Button gradientDuoTone="greenToBlue" className="flex justify-start w-full focus:outline-none focus:ring-0" outline>
                            <div className="p-0 w-full flex active:outline-none active:ring-0 no-focus-ring">
                                <GiAutoRepair size="16px" />
                                <span className="ml-2 self-center whitespace-nowrap text-xs">Maintenance</span>
                            </div>
                        </Button>
                    )}
                </Link>
                <Link to="/admin">
                    {isAdminPage ? (
                        <Button gradientDuoTone="greenToBlue" className="flex justify-start w-full focus:outline-none focus:ring-0 ">
                            <div className="p-0 w-full flex">
                                <MdAdminPanelSettings size="16px" />
                                <span className="ml-2 self-center whitespace-nowrap text-xs">Admin</span>
                            </div>
                        </Button>
                    ) : (
                        <Button gradientDuoTone="greenToBlue" className="flex justify-start w-full focus:outline-none focus:ring-0 " outline>
                            <div className="p-0 w-full flex">
                                <MdAdminPanelSettings size="16px" />
                                <span className="ml-2 self-center whitespace-nowrap text-xs">Admin</span>
                            </div>
                        </Button>
                    )}
                </Link>
            </div>
        </div>
        <div className="flex bg-emerald-200 p-0 border-2 border-green-300 rounded-full">
            <img src="https://employeeprofile.deshaw.com/api/me/photo" className="rounded-full border border-gray-200 h-10 w-10" />
            <span className="text-xs self-center whitespace-nowrap p-1 font-bold">@{username.toLocaleLowerCase()}</span>
        </div>
    </div>
  )
}

export default SideBar