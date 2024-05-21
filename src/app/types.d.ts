interface Menu {
  name: string;
  path: string;
  icon?: React.ComponentElement;
}

interface StatsData {
  icon: React.ComponentElement;
  title: string;
  value: string;
  percentage: number;
  change: boolean;
}

interface Pagination {
  totalPages: number;
  currentPage: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  nextPage: number | null;
  previousPage: number | null;
}
