/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from 'react';
import { Alert } from "flowbite-react";
import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper } from "@mui/material";
import SiteCard from "../components/SiteCard"
import SearchBar from "../components/SearchBar"
import PageStyle from "../layouts/PageStyle"
import { HiInformationCircle } from 'react-icons/hi';
import { FaTable } from 'react-icons/fa6';
import SiteTable from '../components/SiteTable';

interface Site {
  id: string;
  code: string;
  name: string;
  legal_name: string;
  site_type: string;
  website: string;
  address: {
    building: string;
    street: string;
    city: string;
    country: string;
    zip: string;
  };
  poc: [{
    username: string;
    fullname: string;
    email: string;
    mobile: string;
  }];
  image: string;
}

const Sites = () => {
  const [sites, setSites] = useState<Site[]>([]);
  const [filteredSites, setFilteredSites] = useState<Site[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isTable, setIsTable] = useState(false)

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const response = await fetch('/api/v1/sites');
      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }
      const data = await response.json();
    //   console.log(data);
      setSites(data);
      setFilteredSites(data);
      setError(null);
    } catch (error: any) {
      console.error('There was a problem with the fetch operation:', error);
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleTable = () => {
    setIsTable(!isTable)
  }

  const handleSearch = (searchTerm: string) => {
    const lowercasedTerm = searchTerm.toLowerCase();
    console.log("Search Term:", lowercasedTerm); // Log the search term

    const filteredSites = sites.filter((site) => {
      const matchesPoc = site.poc?.some(poc =>
        poc.username?.toLowerCase().includes(lowercasedTerm) ||
        poc.fullname?.toLowerCase().includes(lowercasedTerm) ||
        poc.email?.toLowerCase().includes(lowercasedTerm) ||
        poc.mobile?.toLowerCase().includes(lowercasedTerm)
      );

      return (
        site.legal_name?.toLowerCase().includes(lowercasedTerm) ||
        site.code?.toLowerCase().includes(lowercasedTerm) ||
        site.site_type?.toLowerCase().includes(lowercasedTerm) ||
        matchesPoc ||
        site.address.building?.toLowerCase().includes(lowercasedTerm) ||
        site.address.street?.toLowerCase().includes(lowercasedTerm) ||
        site.address.city?.toLowerCase().includes(lowercasedTerm) ||
        site.address.country?.toLowerCase().includes(lowercasedTerm) ||
        site.address.zip?.toLowerCase().includes(lowercasedTerm)
      );
    });

    console.log("Filtered Sites:", filteredSites); // Log the filtered sites
    setFilteredSites(filteredSites);
  };

  return (
    <PageStyle>
      <div className="m-5 flex flex-col gap-4">
        <div className="flex py-2 px-10 w-[95%] self-center whitespace-normal gap-5">
            {isTable ? (
                <FaTable size="24" className='self-center whitespace-normal text-green-600 cursor-pointer' onClick={handleTable} />
            ) : (
                <FaTable size="24" className='self-center whitespace-normal text-green-200 cursor-pointer' onClick={handleTable} />
            )}
            <SearchBar onSearch={handleSearch} />
            <span className='self-center whitespace-normal text-gray-400 italic'>(Displaying {filteredSites.length} site results)</span>
        </div>
        <div className="w-[95%] h-[3px] bg-green-500 rounded-lg self-center whitespace-normal"></div>
        {error ? (
          <div className="w-[95%] self-center mt-20">
            <Alert color="failure" icon={HiInformationCircle}>
              <span className="font-medium">{error}</span>
            </Alert>
          </div>
        ) : (
          <>
            {isLoading ? (
              <div className="w-[95%] self-center mt-20">
                <Alert color="info" icon={HiInformationCircle}>
                  <span className="font-medium">Loading data...</span>
                </Alert>
              </div>
            ) : (
              <>
                {filteredSites.length === 0 ? (
                  <div className="w-[95%] self-center mt-20">
                    <Alert color="warning" icon={HiInformationCircle}>
                      <span className="font-medium">(404) What you are searching for could not be found in our records.</span>
                    </Alert>
                  </div>
                ) : (
                    <>
                        {isTable ? (
                            <div className="w-[95%] self-center mt-10">
                                <div className="w-full overflow-hidden">
                                    <TableContainer component={Paper}>
                                        <Table aria-label='customized table'>
                                            <TableHead sx={{
                                                background: 'linear-gradient(to bottom right, #10B981, #06B6D4, #3B82F6)',
                                                fontWeight: 'bold',
                                                '& .MuiTableCell-root': {
                                                color: 'white',
                                                },
                                            }}>
                                                <TableRow>
                                                    <TableCell>ID</TableCell>
                                                    <TableCell>Site Code</TableCell>
                                                    <TableCell>Firm Legal Name</TableCell>
                                                    <TableCell>Office Type</TableCell>
                                                    <TableCell>POC</TableCell>
                                                    <TableCell>Office Address</TableCell>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                {filteredSites.map((site) => (
                                                    <SiteTable key={site.id} site={site} />
                                                ))}
                                            </TableBody>
                                        </Table>
                                    </TableContainer>
                                </div>
                            </div>
                        ) : (
                            <div className="w-[95%] self-center mt-10">
                                <div className="flex flex-wrap justify-start gap-10">
                                {filteredSites.map((site) => (
                                    <SiteCard key={site.id} site={site} />
                                ))}
                                </div>
                            </div>
                        )}
                    </>
                )}
              </>
            )}
          </>
        )}
      </div>
    </PageStyle>
  );
};

export default Sites;
