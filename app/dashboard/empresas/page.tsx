'use client'

import DataTable from '@/components/DataTable'
import { empresasData } from '@/lib/data'

const columns = [
  { key: 'nombre', label: 'Nombre' },
  { key: 'direccion', label: 'Dirección' },
  { key: 'telefono', label: 'Teléfono' },
  { key: 'usuarioPrincipal', label: 'Usuario Principal' },
  { key: 'registro', label: 'Registro' },
]

export default function EmpresasPage() {
  const handleView = (empresa: any) => {
    console.log('Ver empresa:', empresa)
  }

  const handleEdit = (empresa: any) => {
    console.log('Editar empresa:', empresa)
  }

  const handleDelete = (empresa: any) => {
    console.log('Eliminar empresa:', empresa)
  }

  return (
    <DataTable
      title="Empresas"
      columns={columns}
      data={empresasData}
      onView={handleView}
      onEdit={handleEdit}
      onDelete={handleDelete}
    />
  )
}