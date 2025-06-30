'use client'

import { useState } from 'react'
import DataTable from '@/components/DataTable'
import ContratosModal, { Contrato } from '@/components/ContratosModal'
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
  const [selectedContrato, setSelectedContrato] = useState<Contrato | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleView = (contrato: Contrato) => {
    setSelectedContrato(contrato)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedContrato(null)
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
    <>
      <DataTable
        title="Contratos"
        columns={columns}
        data={contratosData}
        onView={handleView}
        onRefresh={handleRefresh}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
      <ContratosModal
        contrato={selectedContrato}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </>
  )
}