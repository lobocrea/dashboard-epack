'use client'

import { Eye, Edit, Trash2, RefreshCw, Download } from 'lucide-react'

interface Column {
  key: string
  label: string
  className?: string
}

interface DataTableProps {
  title: string
  columns: Column[]
  data: any[]
  onView?: (item: any) => void
  onEdit?: (item: any) => void
  onDelete?: (item: any) => void
  onRefresh?: (item: any) => void
  onDownload?: (item: any) => void
  showActions?: boolean
}

export default function DataTable({
  title,
  columns,
  data,
  onView,
  onEdit,
  onDelete,
  onRefresh,
  onDownload,
  showActions = true
}: DataTableProps) {
  const renderCellContent = (item: any, column: Column) => {
    const value = item[column.key]
    
    // Renderizado especial para estatus
    if (column.key === 'estatus') {
      const statusColors = {
        'Activo': 'bg-green-100 text-green-800',
        'Inactivo': 'bg-red-100 text-red-800',
        'Enviado': 'bg-blue-100 text-blue-800',
        'Pendiente': 'bg-yellow-100 text-yellow-800',
        'Entregado': 'bg-green-100 text-green-800'
      }
      
      return (
        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${statusColors[value as keyof typeof statusColors] || 'bg-gray-100 text-gray-800'}`}>
          <div className="w-1.5 h-1.5 bg-current rounded-full mr-1.5"></div>
          {value}
        </span>
      )
    }
    
    // Renderizado especial para montos
    if (column.key === 'montoTotal') {
      return `$ ${value.toFixed(2)}`
    }
    
    return value
  }

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
      {/* Header */}
      <div className="px-6 py-4 border-b border-gray-100">
        <h1 className="text-2xl font-semibold text-[#2F6AE8]">{title}</h1>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              {columns.map((column) => (
                <th
                  key={column.key}
                  className={`px-6 py-3 text-left text-xs font-medium text-[#2F6AE8] uppercase tracking-wider ${column.className || ''}`}
                >
                  {column.label}
                </th>
              ))}
              {showActions && (
                <th className="px-6 py-3 text-left text-xs font-medium text-[#2F6AE8] uppercase tracking-wider">
                  Acciones
                </th>
              )}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-100">
            {data.map((item, index) => (
              <tr key={item.id || index} className="hover:bg-gray-50 transition-colors">
                {columns.map((column) => (
                  <td key={column.key} className={`px-6 py-4 whitespace-nowrap text-sm text-gray-900 ${column.className || ''}`}>
                    {renderCellContent(item, column)}
                  </td>
                ))}
                {showActions && (
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <div className="flex items-center space-x-2">
                      {onView && (
                        <button
                          onClick={() => onView(item)}
                          className="text-gray-400 hover:text-gray-600 transition-colors"
                          title="Ver"
                        >
                          <Eye className="w-4 h-4" />
                        </button>
                      )}
                      {onRefresh && (
                        <button
                          onClick={() => onRefresh(item)}
                          className="text-gray-400 hover:text-gray-600 transition-colors"
                          title="Actualizar"
                        >
                          <RefreshCw className="w-4 h-4" />
                        </button>
                      )}
                      {onEdit && (
                        <button
                          onClick={() => onEdit(item)}
                          className="text-gray-400 hover:text-gray-600 transition-colors"
                          title="Editar"
                        >
                          <Edit className="w-4 h-4" />
                        </button>
                      )}
                      {onDownload && (
                        <button
                          onClick={() => onDownload(item)}
                          className="text-gray-400 hover:text-gray-600 transition-colors"
                          title="Descargar"
                        >
                          <Download className="w-4 h-4" />
                        </button>
                      )}
                      {onDelete && (
                        <button
                          onClick={() => onDelete(item)}
                          className="text-gray-400 hover:text-red-600 transition-colors"
                          title="Eliminar"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}