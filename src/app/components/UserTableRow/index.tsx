import { ArrowRight, Search, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { TableCell, TableRow } from "@/components/ui/table";

import { UserDetails } from "../UserDetails";

export function UserTableRow() {
  return (
    <TableRow>
      <TableCell>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" size="sm">
              <Search className="h-3 w-3" />
              <span className="sr-only">Detalhes do pedido</span>
            </Button>
          </DialogTrigger>
          <UserDetails />
        </Dialog>
      </TableCell>
      <TableCell className="font-mono text-xs font-medium">
        qweqwewqeqw
      </TableCell>
      <TableCell className="text-muted-foreground">há 15 minutos</TableCell>
      <TableCell>
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-slate-400" />
          <span className="font-medium text-muted-foreground">Pendente</span>
        </div>
      </TableCell>
      <TableCell className="font-medium">Rafael Costa Palma</TableCell>
      <TableCell className="font-medium"> R$ 149.90</TableCell>
      <TableCell>
        <Button variant="outline" size="sm">
          <ArrowRight className="mr-2 h-3 w-3" />
          Aprovar
        </Button>
      </TableCell>
      <TableCell>
        <Button variant="ghost" size="sm">
          <X className="mr-2 h-3 w-3" />
          Cancelar
        </Button>
      </TableCell>
      <TableCell></TableCell>
    </TableRow>
  );
}
