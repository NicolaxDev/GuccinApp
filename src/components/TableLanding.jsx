import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react"

export default function TableLanding() {
  return (
    <Table aria-label="Example static collection table">
      <TableHeader>
        <TableColumn>BENEFICIO</TableColumn>
        <TableColumn>DESCRIPCION</TableColumn>
      </TableHeader>
      <TableBody>
        <TableRow key="1">
          <TableCell>Ahorro de Tiempo</TableCell>
          <TableCell>Olvídate de pasar horas buscando recetas adecuadas; deja que GuccinApp haga el trabajo por ti.</TableCell>
        </TableRow>
        <TableRow key="2">
          <TableCell>Mejora de la Salud</TableCell>
          <TableCell>Recibe recomendaciones que no solo son deliciosas, sino también beneficiosas para tu salud.</TableCell>
        </TableRow>
        <TableRow key="3">
          <TableCell>Diversidad Culinaria</TableCell>
          <TableCell>Descubre una amplia variedad de recetas que te permitirán experimentar y disfrutar de diferentes tipos de cocina.</TableCell>
        </TableRow>
        <TableRow key="4">
          <TableCell>Facilidad y Comodidad</TableCell>
          <TableCell>Con instrucciones claras y detalladas, cocinar se convierte en una actividad placentera y accesible para todos.</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  )
}
