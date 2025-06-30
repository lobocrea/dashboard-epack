'use client'

import { useState } from 'react'
import { Upload, Download, ChevronDown, Edit, Trash2 } from 'lucide-react'
import { productosData } from '@/lib/data'

export default function ProductosPage() {
  const [selectedContract, setSelectedContract] = useState('CT-INV-2024-01')

  const handleEdit = (producto: any) => {
    console.log('Editar producto:', producto)
  }

  const handleDelete = (producto: any) => {
    console.log('Eliminar producto:', producto)
  }

  const handleUploadCatalog = () => {
    console.log('Cargar catálogo')
  }

  const handleDownloadPDF = () => {
    console.log('Descargar PDF')
  }

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
      {/* Header */}
      <div className="px-6 py-4 border-b border-gray-100">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <h1 className="text-2xl font-semibold text-[#2F6AE8]">Productos</h1>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={handleUploadCatalog}
              className="flex items-center justify-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors text-sm font-medium"
            >
              <Upload className="w-4 h-4" />
              Cargar catálogo
            </button>
            <button
              onClick={handleDownloadPDF}
              className="flex items-center justify-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors text-sm font-medium"
            >
              <Download className="w-4 h-4" />
              Descargar PDF
            </button>
            
            {/* Contract Filter */}
            <div className="relative">
              <select
                value={selectedContract}
                onChange={(e) => setSelectedContract(e.target.value)}
                className="appearance-none bg-gray-100 text-gray-700 px-4 py-2 pr-10 rounded-lg hover:bg-gray-200 transition-colors text-sm font-medium cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#2F6AE8] focus:border-transparent"
              >
                <option value="CT-INV-2024-01">CT-INV-2024-01</option>
                <option value="CT-TCH-2024-02">CT-TCH-2024-02</option>
                <option value="CT-DIG-2024-03">CT-DIG-2024-03</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
              <span className="absolute -top-2 right-2 text-xs text-gray-500 bg-white px-1">
                Filtrar por contratos
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-[#2F6AE8] uppercase tracking-wider">
                Imagen
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-[#2F6AE8] uppercase tracking-wider">
                SKU
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-[#2F6AE8] uppercase tracking-wider">
                Categoría
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-[#2F6AE8] uppercase tracking-wider">
                Descripción
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-[#2F6AE8] uppercase tracking-wider">
                Acciones
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-100">
            {productosData.map((producto, index) => (
              <tr key={producto.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="w-16 h-16 bg-gray-100 rounded-lg overflow-hidden">
                    <img
                      src={producto.imagen}
                      alt={`Producto ${producto.sku}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {producto.sku}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {producto.categoria}
                </td>
                <td className="px-6 py-4 text-sm text-gray-900 max-w-md">
                  {producto.descripcion}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => handleEdit(producto)}
                      className="text-gray-400 hover:text-gray-600 transition-colors"
                      title="Editar"
                    >
                      <Edit className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleDelete(producto)}
                      className="text-gray-400 hover:text-red-600 transition-colors"
                      title="Eliminar"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}