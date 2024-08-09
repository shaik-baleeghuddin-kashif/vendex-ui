import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MdAdminPanelSettings, MdCable, MdDashboard } from "react-icons/md";
import { useLocation } from "react-router-dom";
import { FaUserCog } from "react-icons/fa";
import { BsBuildingsFill } from "react-icons/bs";
import { GiAutoRepair } from "react-icons/gi";


const SideBar = () => {
    const location = useLocation();
    const [isExpanded, setIsExpanded] = useState<boolean>(() => {
        const saved = localStorage.getItem('isExpanded');
        return saved === null ? true : JSON.parse(saved);
    });

    useEffect(() => {
        localStorage.setItem('isExpanded', JSON.stringify(isExpanded));
    }, [isExpanded]);
    const isHomePage = location.pathname === "/";
    const isVendorsPage = location.pathname === "/vendors";
    const isCircuitsPage = location.pathname === "/circuits";
    const isSitesPage = location.pathname === "/sites";
    const isMaintenancesPage = location.pathname === "/maintenances";
    const isAdminPage = location.pathname === "/admin";

    const handlesidebar = () => {
        setIsExpanded(open => !open);
    };

    return (
        <motion.div
            initial={{ width: isExpanded ? 200 : 80 }}
            animate={{ width: isExpanded ? 200 : 80 }}
            transition={{ duration: 0.3 }}
            className="bg-green-100 flex flex-col border-r-4 border-r-green-500 rounded-r-lg py-10 px-2 items-center gap-10"
        >
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
            >
            {isExpanded ? (
                <div className="flex w-full justify-center items-center cursor-pointer" onClick={handlesidebar}>
                    <div className="bg-gradient-to-br from-green-500 via-cyan-500 to-blue-500 text-white py-1 px-2 rounded-md">Ven</div>
                    <span>dex</span>
                </div>
            ) : (
                <div className="flex w-full justify-center items-center cursor-pointer" onClick={handlesidebar}>
                    <img src="/logo.svg" className="w-[40px] h-[40px]" alt="vendex-logo" />
                </div>
            )}
            </motion.div>
            <div className="w-full h-full justify-between items-center flex flex-col">
                <div className="flex flex-col gap-4">
                    <Link to="/" className="w-full">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3 }}
                            className={`w-full bg-gradient-to-br from-green-500 via-teal-500 to-blue-500 rounded-lg  ${isHomePage ? 'text-white' : 'p-[2px]'}`}
                        >
                            <div className={`flex ${isHomePage ? '' : 'bg-slate-100 rounded-lg text-green-500'} ${isExpanded ? 'px-4 py-2 gap-2' : 'p-2 justify-center'}`}>
                            <MdDashboard size={isExpanded ? 18 : 20} />
                            {isExpanded ? (
                                <motion.div
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3 }}
                                className="text-xs"
                                >
                                    Dashboard
                                </motion.div>
                            ) : (
                                <></>
                            )}
                            </div>
                        </motion.div>
                    </Link>
                    <Link to="/vendors" className="w-full">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3 }}
                            className={`w-full bg-gradient-to-br from-green-500 via-teal-500 to-blue-500 rounded-lg  ${isVendorsPage ? 'text-white' : 'p-[2px]'}`}
                        >
                            <div className={`flex ${isVendorsPage ? '' : 'bg-slate-100 rounded-lg text-green-500'} ${isExpanded ? 'px-4 py-2 gap-2' : 'p-2 justify-center'}`}>
                            <FaUserCog size={isExpanded ? 18 : 20} />
                            {isExpanded ? (
                                <motion.div
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3 }}
                                className="text-xs"
                                >
                                    Vendors
                                </motion.div>
                            ) : (
                                <div className="hidden"></div>
                            )}
                            </div>
                        </motion.div>
                    </Link>
                    <Link to="/circuits" className="w-full">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3 }}
                            className={`w-full bg-gradient-to-br from-green-500 via-teal-500 to-blue-500 rounded-lg  ${isCircuitsPage ? 'text-white' : 'p-[2px]'}`}
                        >
                            <div className={`flex ${isCircuitsPage ? '' : 'bg-slate-100 rounded-lg text-green-500'} ${isExpanded ? 'px-4 py-2 gap-2' : 'p-2 justify-center'}`}>
                            <MdCable size={isExpanded ? 18 : 20} />
                            {isExpanded ? (
                                <motion.div
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3 }}
                                className="text-xs"
                                >
                                    Circuits
                                </motion.div>
                            ) : (
                                <div className="hidden"></div>
                            )}
                            </div>
                        </motion.div>
                    </Link>
                    <Link to="/sites" className="w-full">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3 }}
                            className={`w-full bg-gradient-to-br from-green-500 via-teal-500 to-blue-500 rounded-lg  ${isSitesPage ? 'text-white' : 'p-[2px]'}`}
                        >
                            <div className={`flex ${isSitesPage ? '' : 'bg-slate-100 rounded-lg text-green-500'} ${isExpanded ? 'px-4 py-2 gap-2' : 'p-2 justify-center'}`}>
                            <BsBuildingsFill size={isExpanded ? 18 : 20} />
                            {isExpanded ? (
                                <motion.div
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3 }}
                                className="text-xs"
                                >
                                    Sites
                                </motion.div>
                            ) : (
                                <div className="hidden"></div>
                            )}
                            </div>
                        </motion.div>
                    </Link>
                    <Link to="/maintenances" className="w-full">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3 }}
                            className={`w-full bg-gradient-to-br from-green-500 via-teal-500 to-blue-500 rounded-lg  ${isMaintenancesPage ? 'text-white' : 'p-[2px]'}`}
                        >
                            <div className={`flex ${isMaintenancesPage ? '' : 'bg-slate-100 rounded-lg text-green-500'} ${isExpanded ? 'px-4 py-2 gap-2' : 'p-2 justify-center'}`}>
                            <GiAutoRepair size={isExpanded ? 18 : 20} />
                            {isExpanded ? (
                                <motion.div
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3 }}
                                className="text-xs"
                                >
                                    Maintenances
                                </motion.div>
                            ) : (
                                <div className="hidden"></div>
                            )}
                            </div>
                        </motion.div>
                    </Link>
                    <Link to="/admin" className="w-full">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3 }}
                            className={`w-full bg-gradient-to-br from-green-500 via-teal-500 to-blue-500 rounded-lg  ${isAdminPage ? 'text-white' : 'p-[2px]'}`}
                        >
                            <div className={`flex ${isAdminPage ? '' : 'bg-slate-100 rounded-lg text-green-500'} ${isExpanded ? 'px-4 py-2 gap-2' : 'p-2 justify-center'}`}>
                            <MdAdminPanelSettings size={isExpanded ? 18 : 20} />
                            {isExpanded ? (
                                <motion.div
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3 }}
                                className="text-xs"
                                >
                                    Admin
                                </motion.div>
                            ) : (
                                <div className="hidden"></div>
                            )}
                            </div>
                        </motion.div>
                    </Link>
                </div>
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <div className="flex w-full gap-2 justify-center items-center">
                        <img src="https://ui-avatars.com/api/?size=128" alt="user-image" className="h-[32px] w-[32px] rounded-lg border-2 border-green-500" />
                        {isExpanded ? (
                            <div className="font-bold text-xs text-center">@johhndaniels</div>
                        ) : (
                            <div className="hidden"></div>
                        )}
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default SideBar;
