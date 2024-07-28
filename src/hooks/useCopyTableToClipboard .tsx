import { useCallback } from "react";
import toast from "react-hot-toast";

const useCopyTableToClipboard = (target: string) => {
  const copyTableToClipboard = useCallback(() => {
    let headerRow: string = "";
    let output: string = `${headerRow}\n`;

    const table = document.querySelector<HTMLDivElement>(`${target}`);
    const tableBody = document.querySelector<HTMLDivElement>(`${target} .rs-table-body-wheel-area`);
    const rows = tableBody?.querySelectorAll<HTMLDivElement>(".rs-table-cell-group");

    const headers = table?.querySelector<HTMLDivElement>(".rs-table-row-header");
    const headerItems = headers?.querySelectorAll<HTMLDivElement>(".rs-table-cell-content");

    headerItems?.forEach((headerItem: HTMLDivElement): void => {
      headerRow += `${headerItem?.innerText}\t`;
    });

    rows?.forEach((element: HTMLDivElement): void => {
      const cells = element.querySelectorAll<HTMLDivElement>(".rs-table-cell-content");
      let rowText: string = "";
      cells.forEach((cell: HTMLDivElement, index: number) => {
        rowText += cell.innerText;
        if (index < cells.length - 1) {
          rowText += "\t";
        }
      });
      output += rowText + "\n";
    });

    navigator.clipboard.writeText(output).then(
      () => {
        toast.success("داده‌ها به کلیپ بورد کپی شد");
      },
      (err) => {
        toast.error("کپی کردن به کلیپ بورد موفقیت آمیز نبود: ", err);
      }
    );
  }, [target]);

  return copyTableToClipboard;
};

export default useCopyTableToClipboard;
