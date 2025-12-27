import { authOptions } from "@/app/helpers/authOptions";
import { getServerSession } from "next-auth";

const DashboardHomePage =async () => {

  const session=await getServerSession(authOptions)
  console.log(session);
  return (
    <div>
      <h1>Dashboard Home Page</h1>
      <p>Welcome , {session?.user?.name}</p>
      <p>Welcome , {session?.user?.email}</p>
    </div>
  );
};

export default DashboardHomePage;
