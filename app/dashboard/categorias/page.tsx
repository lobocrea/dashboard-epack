'use client'

import DataTable from '@/components/DataTable'
import { categoriasData } from '@/lib/data'

const columns = [
  { key: 'codigo', label: 'ID' },
  { key: 'cantidad', label: 'Cantidad' },
  { key: 'nombre', label: 'Nombre' },
  { key: 'direccionDespacho', label: 'Dirección Despacho' },
  { key: 'categoraSuperior', label: 'Cat. Superior' },
  { key: 'estatus', label: 'Estatus' },
]

export default function CategoriasPage() {
  const handleView = (categoria: any) => {
    console.log('Ver categoría:', categoria)
  }

  const handleEdit = (categoria: any) => {
    console.log('Editar categoría:', categoria)
  }

  const handleDelete = (categoria: any) => {
    console.log('Eliminar categoría:', categoria)
  }

  return (
    <DataTable
      title="Categorías"
      columns={columns}
      data={categoriasData}
      onView={handleView}
      onEdit={handleEdit}
      onDelete={handleDelete}
    />
  )
}