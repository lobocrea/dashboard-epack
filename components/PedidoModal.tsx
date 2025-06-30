'use client'

import { X } from 'lucide-react'
import { Pedido } from '@/lib/data'

interface PedidoModalProps {
  pedido: Pedido | null
  isOpen: boolean
  onClose: () => void
}

export default function PedidoModal({ pedido, isOpen, onClose }: PedidoModalProps) {
  if (!isOpen || !pedido) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <h2 className="text-2xl font-semibold text-[#2F6AE8]">Detalles de la Orden</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Basic Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-[#2F6AE8] mb-2">Nro.</h3>
              <p className="text-gray-900">{pedido.numero}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#2F6AE8] mb-2">Empresa</h3>
              <p className="text-gray-900">{pedido.empresa}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#2F6AE8] mb-2">Fecha de la orden</h3>
              <p className="text-gray-900">28 de Junio de 2025</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#2F6AE8] mb-2">Dirección de despacho</h3>
              <p className="text-gray-900">
                Avenida Principal, 123,<br />
                Urbanización Las Acacias,<br />
                Valencia, Estado Carabobo,<br />
                Venezuela.
              </p>
            </div>
          </div>

          {/* Client Requirements Section */}
          <div className="bg-gray-50 rounded-lg p-4">
            <h3 className="text-lg font-semibold text-[#2F6AE8] mb-4">Requerimientos del Cliente</h3>
            <div className="space-y-3">
              <div>
                <span className="font-medium text-gray-900">Orden de Compra (PO):</span>
                <p className="text-gray-700">{pedido.ordenCompra}</p>
              </div>
              <div>
                <span className="font-medium text-gray-900">Fecha Sugerida de Entrega:</span>
                <p className="text-gray-700">{pedido.fechaSugeridaEntrega}</p>
              </div>
              <div>
                <span className="font-medium text-gray-900">Nota Adicional:</span>
                <p className="text-gray-700">{pedido.notaAdicional}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}