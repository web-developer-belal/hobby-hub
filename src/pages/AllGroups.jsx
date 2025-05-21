import { Link, useLoaderData } from "react-router";
import GroupCard from "../components/GroupCard";
const AllGroups = () => {
const groups = useLoaderData();

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6 text-center">Explore All Hobby Groups</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {groups.map((group)=> <GroupCard group={group}></GroupCard>) }
      </div>
    </div>
  );
};

export default AllGroups;
