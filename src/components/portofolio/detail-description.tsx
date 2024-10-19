import Link from "next/link";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardContent } from "@/components/ui/card";

interface ColumnProps {
  title: string;
  key: string;
}

function DetailDescription({ data, columns }: { data: any; columns: ColumnProps[] }) {
  const renderCellContent = (column: ColumnProps) => {
    const value = data[column.key];

    if (column.key === 'links') {
      if (data.is_confidential === 'N' && Array.isArray(value) && value.length > 0) {
        return value.map((link: string, idx: number) => (
          <Link 
            key={idx} 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-blue-500 hover:underline block"
          >
            {link}
          </Link>
        ));
      } else {
        return <Badge variant="destructive">Confidential</Badge>;
      }
    }

    return Array.isArray(value) ? value.join(', ') : value;
  };

  return (
    <Card className="mt-4">
      <CardHeader>
        <h3 className="text-lg font-semibold tracking-tight">Project Detail Info</h3>
      </CardHeader>
      <CardContent>
        <Table>
          <TableBody>
            {columns.map((column: ColumnProps) => (
              <TableRow key={column.title}>
                <TableCell className="font-medium">{column.title}</TableCell>
                <TableCell>{renderCellContent(column)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}

export default DetailDescription;