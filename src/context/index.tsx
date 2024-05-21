import { TimeFilterProvider } from "./TimeFilterProvider";
import { JobsDataProvider } from "./jobsData";

const AppDataProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <TimeFilterProvider>
      <JobsDataProvider>{children}</JobsDataProvider>
    </TimeFilterProvider>
  );
};

export default AppDataProvider;
