import { ArrowRight, Search, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function Users() {
  return (
    <>
      <div className="mb-5 flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Users</h1>
      </div>
      <div className="space-y-2.5 ">
        <form className="flex items-center gap-2 pb-5">
          <span className="text-sm font-semibold">Filtros</span>
          <Input placeholder="Nome do cliente" className="h-8 w-[320px]" />
        </form>
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[64px]"></TableHead>
                <TableHead className="w-[140px]">Identificador</TableHead>
                <TableHead className="w-[180px]">Realizado há</TableHead>
                <TableHead className="w-[140px]">Status</TableHead>
                <TableHead>Cliente</TableHead>
                <TableHead className="w-[140px]">Total do Pedido</TableHead>
                <TableHead className="w-[164px]"></TableHead>
                <TableHead className="w-[132px]"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>
                  <Button variant="outline" size="sm">
                    <Search className="h-3 w-3" />
                    <span className="sr-only">Detalhes do pedido</span>
                  </Button>
                </TableCell>
                <TableCell className="font-mono text-xs font-medium">
                  qweqwewqeqw
                </TableCell>
                <TableCell className="text-muted-foreground">
                  há 15 minutos
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-slate-400" />
                    <span className="font-medium text-muted-foreground">
                      Pendente
                    </span>
                  </div>
                </TableCell>
                <TableCell className="font-medium">
                  Rafael Costa Palma
                </TableCell>
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
            </TableBody>
          </Table>
        </div>
      </div>
    </>
  );
}
