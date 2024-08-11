import { Link, useLocation } from "react-router-dom"
import { Button } from "flowbite-react"
import { MdAdminPanelSettings, MdCable  } from "react-icons/md";
import { ImOffice } from "react-icons/im";
import { GiAutoRepair } from "react-icons/gi";
import { FaUserGear } from "react-icons/fa6";
import { FaHistory  } from "react-icons/fa";

const AdminNav = () => {

    const location = useLocation();
    const isAdminPage = location.pathname === "/admin";
    const isHomePage = location.pathname === "/";
    const isMaintenancePage = location.pathname === "/maintenance";
    const isCircuitsPage = location.pathname === "/circuits";
    const isSitesPage = location.pathname === "/sites";
    const isVendorsPage = location.pathname === "/vendors";
  return (
    <div className="w-full p-4 m-0 flex justify-between ">
        <div className="flex gap-10 w-full">
            <div className="flex gap-4 justify-evenlt w-full">
                <Link to="/admin">
                    {isAdminPage ? (
                        <Button gradientDuoTone="greenToBlue" className="flex justify-center w-30 focus:outline-none focus:ring-0 ">
                            <div className="p-0 w-full flex ">
                                <FaHistory  size="16px" />
                                <span className="ml-2 self-center whitespace-nowrap text-xs">Change Log</span>
                            </div>
                        </Button>
                    ) : (
                        <Button gradientDuoTone="greenToBlue" className="flex justify-center w-30 focus:outline-none focus:ring-0 " outline>
                            <div className="p-0 w-full flex ">
                                <FaHistory  size="16px" />
                                <span className="ml-2 self-center whitespace-nowrap text-xs">Change Log</span>
                            </div>
                        </Button>
                    )}
                </Link>
                <Link to="/admin/vendors">
                    {isVendorsPage ? (
                        <Button gradientDuoTone="greenToBlue" className="flex justify-center w-30 focus:outline-none focus:ring-0 ">
                            <div className="p-0 w-full flex">
                                <FaUserGear size="16px" />
                                <span className="ml-2 self-center whitespace-nowrap text-xs">Vendors</span>
                            </div>
                        </Button>
                    ) : (
                        <Button gradientDuoTone="greenToBlue" className="flex justify-center w-30 focus:outline-none focus:ring-0 " outline>
                            <div className="p-0 w-full flex ">
                                <FaUserGear size="16px" />
                                <span className="ml-2 self-center whitespace-nowrap text-xs">Vendors</span>
                            </div>
                        </Button>
                    )}
                </Link>
                <Link to="/admin/circuits">
                    {isCircuitsPage ? (
                        <Button gradientDuoTone="greenToBlue" className="flex justify-center w-30 focus:outline-none focus:ring-0 ">
                            <div className="p-0 w-full flex ">
                                <MdCable size="16px" />
                                <span className="ml-2 self-center whitespace-nowrap text-xs">Circuits</span>
                            </div>
                        </Button>
                    ) : (
                        <Button gradientDuoTone="greenToBlue" className="flex justify-center w-30 focus:outline-none focus:ring-0 " outline>
                            <div className="p-0 w-full flex ">
                                <MdCable size="16px" />
                                <span className="ml-2 self-center whitespace-nowrap text-xs">Circuits</span>
                            </div>
                        </Button>
                    )}
                </Link>
                <Link to="/admin/sites">
                    {isSitesPage ? (
                        <Button gradientDuoTone="greenToBlue" className="flex justify-center w-30 focus:outline-none focus:ring-0">
                            <div className="p-0 w-full flex ">
                                <ImOffice size="16px" />
                                <span className="ml-2 self-center whitespace-nowrap text-xs">Sites</span>
                            </div>
                        </Button>
                    ) : (
                        <Button gradientDuoTone="greenToBlue" className="flex justify-center w-30 focus:outline-none focus:ring-0 " outline>
                            <div className="p-0 w-full flex ">
                                <ImOffice size="16px" />
                                <span className="ml-2 self-center whitespace-nowrap text-xs">Sites</span>
                            </div>
                        </Button>
                    )}
                </Link>
                <Link to="/admin/maintenance">
                    {isMaintenancePage ? (
                        <Button gradientDuoTone="greenToBlue" className="flex justify-center w-30 focus:outline-none focus:ring-0 ">
                            <div className="p-0 w-full flex active:outline-none active:ring-0 no-focus-ring">
                                <GiAutoRepair size="16px" />
                                <span className="ml-2 self-center whitespace-nowrap text-xs">Maintenance</span>
                            </div>
                        </Button>
                    ) : (
                        <Button gradientDuoTone="greenToBlue" className="flex justify-center w-30 focus:outline-none focus:ring-0" outline>
                            <div className="p-0 w-full flex active:outline-none active:ring-0 no-focus-ring">
                                <GiAutoRepair size="16px" />
                                <span className="ml-2 self-center whitespace-nowrap text-xs">Maintenance</span>
                            </div>
                        </Button>
                    )}
                </Link>
                <Link to="admin/access">
                    {isHomePage ? (
                        <Button gradientDuoTone="greenToBlue" className="flex justify-center w-30 focus:outline-none focus:ring-0 ">
                            <div className="p-0 w-full flex">
                                <MdAdminPanelSettings size="16px" />
                                <span className="ml-2 self-center whitespace-nowrap text-xs">Admin Access</span>
                            </div>
                        </Button>
                    ) : (
                        <Button gradientDuoTone="greenToBlue" className="flex justify-center w-30 focus:outline-none focus:ring-0 " outline>
                            <div className="p-0 w-full flex">
                                <MdAdminPanelSettings size="16px" />
                                <span className="ml-2 self-center whitespace-nowrap text-xs">Admin Access</span>
                            </div>
                        </Button>
                    )}
                </Link>
            </div>
        </div>
    </div>
  )
}

export default AdminNav