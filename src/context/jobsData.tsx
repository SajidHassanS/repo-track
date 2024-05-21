"use client";
import { createContext, useContext, useState, ReactNode } from "react";

interface JobsDataContextType {
  activeTab: string;
  changeTab: (tab: string) => void;
  page: number;
  changePage: (page: number) => void;
  pagination: Pagination | null;
  changePagination: (pagination: Pagination) => void;
}

const JobsDataContext = createContext<JobsDataContextType | undefined>(
  undefined
);

export const JobsDataProvider = ({ children }: { children: ReactNode }) => {
  const [activeTab, setActiveTab] = useState<string>("active");
  const [page, setPage] = useState<number>(1);
  const [pagination, setPagination] = useState<Pagination | null>(null);

  const changeTab = (tab: string) => {
    setActiveTab(tab);
    setPage(1);
  };

  const changePage = (page: number) => {
    setPage(page);
  };

  const changePagination = (pagination: Pagination) => {
    setPagination(pagination);
  };

  return (
    <JobsDataContext.Provider
      value={{
        activeTab,
        changeTab,
        page,
        changePage,
        pagination,
        changePagination,
      }}
    >
      {children}
    </JobsDataContext.Provider>
  );
};

export const useJobsData = () => {
  const context = useContext(JobsDataContext);
  if (context === undefined) {
    throw new Error("useJobsData must be used within a JobsDataProvider");
  }
  return context;
};
