import { Link, useLoaderData } from "react-router";
import GroupCard from "../components/GroupCard";
import SectionTitle from "../components/SectionTitle";
import {
  FaFilter,
  FaSortAmountDown,
  FaCalendarAlt,
  FaTags,
} from "react-icons/fa";
import { useState } from "react";

const AllGroups = () => {
  const groups = useLoaderData();
  const [filters, setFilters] = useState({
    sort: "newest",
    category: "all",
  });
 
  const categories = ["all", "Drawing & Painting", "Photography", "Video Gaming", "Fishing", "Gardening", "Running", "Cooking", "Reading", "Writing", "Other"];

  const filteredGroups = [...groups]
    .sort((a, b) => {
      if (filters.sort === "newest") {
        return new Date(b.startDate) - new Date(a.startDate);
      } else if (filters.sort === "oldest") {
        return new Date(a.startDate) - new Date(b.startDate);
      }
      return 0;
    })
    .filter((group) => {
      if (filters.category === "all") return true;
      return group.category.toLowerCase() === filters.category.toLowerCase();
    });

  return (
    <div className="px-4 sm:px-6 lg:px-8 pt-32 pb-12">
      <div className="max-w-7xl mx-auto">
        <SectionTitle title="Explore All Hobby Groups" subtitle=" Find your perfect community from our diverse collection of hobby
          groups"></SectionTitle>
      

        {/* Filter Panel */}
        <div className="mb-8 p-4 rounded-md md:rounded-full backdrop-blur-md bg-base-100/30 border border-white/10 shadow-sm flex flex-wrap justify-center items-center gap-4 sticky top-20 z-50">
          {/* Filter label */}
          <div className="flex items-center gap-2 bg-base-100/50 px-4 py-2 rounded-full z-50">
            <FaFilter className="text-primary" />
            <span className="font-medium">Filters:</span>
          </div>

          {/* Sort by Date */}
          <div className="dropdown dropdown-hover z-50">
            <label
              tabIndex={0}
              className="btn btn-sm rounded-full gap-2 bg-base-100/50 hover:bg-base-200/50 z-50"
            >
              <FaSortAmountDown />
              Sort:{" "}
              {filters.sort === "newest" ? "Newest First" : "Oldest First"}
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu p-2 shadow-lg rounded-box bg-base-100/80 backdrop-blur-sm w-52 z-50"
            >
              <li>
                <button
                  onClick={() => setFilters({ ...filters, sort: "newest" })}
                >
                  Newest First
                </button>
              </li>
              <li>
                <button
                  onClick={() => setFilters({ ...filters, sort: "oldest" })}
                >
                  Oldest First
                </button>
              </li>
            </ul>
          </div>

          {/* Filter by Category */}
          <div className="dropdown dropdown-hover z-50">
            <label
              tabIndex={0}
              className="btn btn-sm rounded-full gap-2 bg-base-100/50 hover:bg-base-200/50 z-50"
            >
              <FaTags />
              Category: {filters.category === "all" ? "All" : filters.category}
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu p-2 shadow-lg rounded-box bg-base-200/80 backdrop-blur-sm min-w-65 grid grid-cols-2 gap-2 z-50"
            >
              {categories.map((cat) => (
                <li key={cat}>
                  <button className="text-nowrap text-xs"
                    onClick={() => setFilters({ ...filters, category: cat })}
                  >
                    {cat.charAt(0).toUpperCase() + cat.slice(1)}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Reset Filters */}
          <button
            onClick={() => setFilters({ sort: "newest", category: "all" })}
            className="btn btn-sm btn-ghost rounded-full z-50"
          >
            Reset Filters
          </button>
        </div>

        {/* Groups Grid */}
        {filteredGroups.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredGroups.map((group) => (
              <GroupCard key={group._id} group={group} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <h3 className="text-xl font-medium text-base-content/70">
              No groups found matching your filters
            </h3>
            <button
              onClick={() => setFilters({ sort: "newest", category: "all" })}
              className="btn btn-primary mt-4 rounded-full"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllGroups;
