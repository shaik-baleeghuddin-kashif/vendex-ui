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
            <div className="w-full h-full justify-between items-center flex flex-col">
                <div className="flex flex-col gap-6">
                    <Link to="/" className="w-full">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3 }}
                            className={`w-full bg-gradient-to-br from-green-500 via-teal-500 to-blue-500 rounded-lg  ${isHomePage ? 'text-white' : 'p-[2px]'}`}
                        >
                            <div className={`flex gap-2 ${isHomePage ? '' : 'bg-slate-100 rounded-lg text-green-500'} ${isExpanded ? 'px-4 py-2' : 'p-1'}`}>
                            <MdDashboard size={isExpanded ? 24 : 32} />
                            {isExpanded ? (
                                <motion.div
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3 }}
                                >
                                    Dashboard
                                </motion.div>
                            ) : (
                                <div className="hidden"></div>
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
                            <div className={`flex gap-2 ${isVendorsPage ? '' : 'bg-slate-100 rounded-lg text-green-500'} ${isExpanded ? 'px-4 py-2' : 'p-1'}`}>
                            <FaUserCog size={isExpanded ? 24 : 32} />
                            {isExpanded ? (
                                <motion.div
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3 }}
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
                            <div className={`flex gap-2 ${isCircuitsPage ? '' : 'bg-slate-100 rounded-lg text-green-500'} ${isExpanded ? 'px-4 py-2' : 'p-1'}`}>
                            <MdCable size={isExpanded ? 24 : 32} />
                            {isExpanded ? (
                                <motion.div
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3 }}
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
                            <div className={`flex gap-2 ${isSitesPage ? '' : 'bg-slate-100 rounded-lg text-green-500'} ${isExpanded ? 'px-4 py-2' : 'p-1'}`}>
                            <BsBuildingsFill size={isExpanded ? 24 : 32} />
                            {isExpanded ? (
                                <motion.div
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3 }}
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
                            <div className={`flex gap-2 ${isMaintenancesPage ? '' : 'bg-slate-100 rounded-lg text-green-500'} ${isExpanded ? 'px-4 py-2' : 'p-1'}`}>
                            <GiAutoRepair size={isExpanded ? 24 : 32} />
                            {isExpanded ? (
                                <motion.div
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3 }}
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
                            <div className={`flex gap-2 ${isAdminPage ? '' : 'bg-slate-100 rounded-lg text-green-500'} ${isExpanded ? 'px-4 py-2' : 'p-1'}`}>
                            <MdAdminPanelSettings size={isExpanded ? 24 : 32} />
                            {isExpanded ? (
                                <motion.div
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3 }}
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
                <div className="flex w-full gap-2 justify-center items-center">
                    <img src="https://ui-avatars.com/api/?size=128" alt="user-image" className="h-[40px] w-[40px] rounded-lg border-2 border-green-500" />
                    {isExpanded ? (
                        <div className="font-bold text-sm text-center">@johhndaniels</div>
                    ) : (
                        <div className="hidden"></div>
                    )}
                </div>
            </div>
        </motion.div>
    );
};

export default SideBar;
