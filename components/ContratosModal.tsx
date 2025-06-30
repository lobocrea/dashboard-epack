'use client'

import { X } from 'lucide-react'

export interface Contrato {
  codigo: string
  empresa: string
  cantidadProductos: number
  cantidadPedidos: number
  compradoresActivos: number
  estatus: string
  descripcion?: string
  observaciones?: string
}

interface ContratosModalProps {
  contrato: Contrato | null
  isOpen: boolean
  onClose: () => void
}

export default function ContratosModal({ contrato, isOpen, onClose }: ContratosModalProps) {
  if (!isOpen || !contrato) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <h2 className="text-2xl font-semibold text-[#2F6AE8]">Detalles del Contrato</h2>
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
              <h3 className="text-lg font-semibold text-[#2F6AE8] mb-2">Código</h3>
              <p className="text-gray-900">{contrato.codigo}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#2F6AE8] mb-2">Empresa</h3>
              <p className="text-gray-900">{contrato.empresa}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#2F6AE8] mb-2">Cantidad de Productos</h3>
              <p className="text-gray-900">{contrato.cantidadProductos}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#2F6AE8] mb-2">Cantidad de Pedidos</h3>
              <p className="text-gray-900">{contrato.cantidadPedidos}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#2F6AE8] mb-2">Compradores Activos</h3>
              <p className="text-gray-900">{contrato.compradoresActivos}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#2F6AE8] mb-2">Estatus</h3>
              <p className="text-gray-900">{contrato.estatus}</p>
            </div>
          </div>

          {/* Descripción y Observaciones */}
          <div className="bg-gray-50 rounded-lg p-4">
            <h3 className="text-lg font-semibold text-[#2F6AE8] mb-4">Detalles Adicionales</h3>
            <div className="space-y-3">
              <div>
                <span className="font-medium text-gray-900">Descripción:</span>
                <p className="text-gray-700">{contrato.descripcion || 'No especificada'}</p>
              </div>
              <div>
                <span className="font-medium text-gray-900">Observaciones:</span>
                <p className="text-gray-700">{contrato.observaciones || 'N/A'}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}