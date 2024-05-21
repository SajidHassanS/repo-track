import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export default function PaginationComponent({
  path,
  pagination,
}: {
  path: string;
  pagination: any;
}) {
  const { totalPages, currentPage, hasNextPage, hasPreviousPage } = pagination;

  const renderPaginationLinks = () => {
    const links = [];

    if (totalPages > 0) {
      links.push(
        <PaginationItem key="prev" aria-disabled={!hasPreviousPage}>
          <PaginationPrevious href={`${path}/${currentPage - 1}`} />
        </PaginationItem>
      );

      for (let i = 1; i <= totalPages; i++) {
        if (
          i === 1 ||
          i === totalPages ||
          (i >= currentPage - 1 && i <= currentPage + 1)
        ) {
          links.push(
            <PaginationItem
              key={i}
              aria-current={i === currentPage ? "page" : undefined}
            >
              <PaginationLink href={`${path}/${i}`}>{i}</PaginationLink>
            </PaginationItem>
          );
        } else if (i === currentPage - 2 || i === currentPage + 2) {
          links.push(
            <PaginationItem key={`ellipsis${i}`}>
              <PaginationEllipsis />
            </PaginationItem>
          );
        }
      }

      links.push(
        <PaginationItem key="next" aria-disabled={!hasNextPage}>
          <PaginationNext href={`${path}/${currentPage + 1}`} />
        </PaginationItem>
      );
    }

    return links;
  };

  return (
    <Pagination>
      <PaginationContent>{renderPaginationLinks()}</PaginationContent>
    </Pagination>
  );
}
