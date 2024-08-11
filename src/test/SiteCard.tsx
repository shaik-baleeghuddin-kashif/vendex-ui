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

interface SiteCardProps {
    site: Site;
  }

const SiteCard: React.FC<SiteCardProps> = ({ site }) => {
    const navigate = useNavigate();

    const handleCardClick = () => {
        navigate(`/sites/${site.code}`);
    };
    const address = `${site.address.building}, ${site.address.street}, ${site.address.city}, ${site.address.country} (${site.address.zip})`
    const image_url = (username) => {
        return `https://employeeprofile.deshaw.com/api/employees/${username}/photo`
    }
    const userprofile = (username) => {
        return `http://go/who/${username}`
    }
    return (
      <div className="h-[375px] w-[500px] rounded-2xl flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer self-center whitespace-normal" onClick={handleCardClick}>
          <div className="h-[40%] w-full flex items-center justify-center overflow-hidden">
              <img className="w-full object-cover object-center"
                  src={site.image}
              />
          </div>
          <div className="h-[60%] w-full py-4 px-8 bg-gradient-to-br from-green-500 via-cyan-500 to-blue-500 text-white gap-5">
            <div className="flex justify-between text-lg font-bold">
                <div>{site.legal_name}</div>
                <div className="flex gap-5">
                    <div className="text-purple-600 border-2 px-1 text-sm self-center whitespace-normal rounded-lg border-purple-600">{site.site_type}</div>
                    <div className="text-red-600 text-lg">{site.code}</div>
                </div>
            </div>
            <div className="flex flex-col mt-3">
                <div className="font-bold">Address: </div>
                <div className="px-3">{address}</div>
            </div>
            <div className="flex flex-col mt-2 gap-2">
                <div className="font-bold">System's POC</div>
                <div className="px-3 flex gap-5">
                    {site.poc.map((user, index) => (
                        <div key={index} className="border-2 p-1 text-sm self-center whitespace-normal rounded-3xl flex gap-2 items-center pr-3">
                            <a href={userprofile(user.username)} target="_blank"><img src={image_url(user.username)} className="rounded-full w-6 h-6"/></a>
                            <div className="self-center whitespace-normal">{user.fullname}</div>
                        </div>
                    ))}

                </div>
            </div>
          </div>
      </div>
    )
}

export default SiteCard