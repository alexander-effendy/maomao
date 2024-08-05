import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
import { useEffect, useState } from "react";
import Sidebar from "@/components/Sidebar";
import DashboardContent from "@/components/DashboardContent";

const Dashboard = () => {

  const { user, getToken } = useKindeAuth();

  useEffect(() => {
    const fetchUser = async () => {
      const token = await getToken();
      console.log(token);
      console.log(user);
    }
    fetchUser();
  }, [user]);

  // const handleLogout = () => logout();

  const [sidebarOpen, setSidebarOpen] = useState<boolean>(true);

  return (
    <MaxWidthWrapper className="h-screen flex">
      <Sidebar 
        className={`transition-transform transform ${sidebarOpen ? 'translate-x-0 shrink-0' : '-translate-x-full'}`}
        open={sidebarOpen}
        setOpen={setSidebarOpen}
      />
      {/* main content */}
      <DashboardContent 
      className={`flex-grow transition-all duration-500 ${sidebarOpen ? 'ml-0' : 'ml-[-230px]'}`}
        open={sidebarOpen}
        setOpen={setSidebarOpen}
      /> 
    </MaxWidthWrapper>
  )
}

export default Dashboard;