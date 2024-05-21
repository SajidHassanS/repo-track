"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { useJobsData } from "@/context/jobsData";
import { baseUrl } from "@/utils/constants";

const useFetchJobs = () => {
  const { activeTab, changePagination, page } = useJobsData();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<null | Error>(null);

  const endpoint =
    activeTab === "active" ? "jobs" : "job-applications/all-job-applications";
  const api = `${baseUrl}/${endpoint}?page=${page}`;

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const token = localStorage.getItem("token");

      if (!token) {
        setError(new Error("No token found") as Error);

        setLoading(false);
        return;
      }

      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      try {
        const response = await axios.get(api, config);
        setData(response.data);
        changePagination(response.data.pagination);
      } catch (error: any) {
        setError(error);
      }
      setLoading(false);
    };

    fetchData();
  }, [activeTab, page, api, changePagination]);

  return { data, loading, error };
};

export default useFetchJobs;
