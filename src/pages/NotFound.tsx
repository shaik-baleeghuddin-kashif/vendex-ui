import { Button } from "flowbite-react"
import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <div className="w-full h-screen max-h-screen p-5 justify-center items-center flex flex-col gap-5 text-green-500 font-bold"> 
      <div className="">Oops...</div>
      <div className="text-9xl font-bold ">404</div>
      <div>The Page you are searching for is not found.</div>
      <Link to="/">
        <Button gradientDuoTone="greenToBlue" className="">Go Back to Home Page</Button>
      </Link>
    </div>
  )
}

export default NotFound