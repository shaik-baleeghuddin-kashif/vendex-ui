import React from 'react';
import { TableRow, TableCell } from "@mui/material";
import { useNavigate } from 'react-router-dom';

interface Site {
    id: string;
    code: string;
    legal_name: string;
    site_type: string;
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
    }];
    image: string;
  }

interface SiteTableProps {
  site: Site;
}

const SiteTable: React.FC<SiteTableProps> = ({ site }) => {
  const navigate = useNavigate();

  const handleTableClick = () => {
    navigate(`/sites/${site.code}`);
  };
  const address = `${site.address.building}, ${site.address.street}, ${site.address.city}, ${site.address.country} (${site.address.zip})`
  const pocs = site.poc.map(poc => poc.fullname).join(', ');

  return (
    <TableRow className="w-full cursor-pointer bg-green-50 hover:bg-green-100" onClick={handleTableClick}>
        <TableCell>{site.id}</TableCell>
        <TableCell>{site.code}</TableCell>
        <TableCell>{site.legal_name}</TableCell>
        <TableCell>{site.site_type}</TableCell>
        <TableCell>{pocs}</TableCell>
        <TableCell>{address}</TableCell>
    </TableRow>
  );
};

export default SiteTable;
