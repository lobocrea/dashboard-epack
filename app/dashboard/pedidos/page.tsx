'use client'

import { useState } from 'react'
import DataTable from '@/components/DataTable'
import PedidoModal from '@/components/PedidoModal'
import { pedidosData, Pedido } from '@/lib/data'

const columns = [
  { key: 'numero', label: 'Nro.' },
  { key: 'empresa', label: 'Empresa' },
  { key: 'fechaOrden', label: 'Fecha de Orden' },
  { key: 'direccionDespacho', label: 'Dirección Despacho' },
  { key: 'montoTotal', label: 'Monto Total' },
  { key: 'estatus', label: 'Estatus' },
]

export default function PedidosPage() {
  const [selectedPedido, setSelectedPedido] = useState<Pedido | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleView = (pedido: Pedido) => {
    setSelectedPedido(pedido)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedPedido(null)
  }

  const handleEdit = (pedido: any) => {
    console.log('Editar pedido:', pedido)
  }

  const handleDelete = (pedido: any) => {
    console.log('Eliminar pedido:', pedido)
  }

  const handleDownload = (pedido: any) => {
    console.log('Descargar pedido:', pedido)
  }

  return (
    <>
      <DataTable
        title="Pedidos"
        columns={columns}
        data={pedidosData}
        onView={handleView}
        onEdit={handleEdit}
        onDelete={handleDelete}
        onDownload={handleDownload}
      />
      
      <PedidoModal
        pedido={selectedPedido}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </>
  )
}