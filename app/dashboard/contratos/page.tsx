'use client'

import DataTable from '@/components/DataTable'
import { contratosData } from '@/lib/data'

const columns = [
  { key: 'codigo', label: 'Código' },
  { key: 'empresa', label: 'Empresa' },
  { key: 'cantidadProductos', label: 'Cantidad de Productos' },
  { key: 'cantidadPedidos', label: 'Cantidad de Pedidos' },
  { key: 'compradoresActivos', label: 'Compradores Activos' },
  { key: 'estatus', label: 'Estatus' },
]

export default function ContratosPage() {
  const handleView = (contrato: any) => {
    console.log('Ver contrato:', contrato)
  }

  const handleRefresh = (contrato: any) => {
    console.log('Actualizar contrato:', contrato)
  }

  const handleEdit = (contrato: any) => {
    console.log('Editar contrato:', contrato)
  }

  const handleDelete = (contrato: any) => {
    console.log('Eliminar contrato:', contrato)
  }

  return (
    <DataTable
      title="Contratos"
      columns={columns}
      data={contratosData}
      onView={handleView}
      onRefresh={handleRefresh}
      onEdit={handleEdit}
      onDelete={handleDelete}
    />
  )
}