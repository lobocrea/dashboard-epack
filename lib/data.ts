// Datos dummy para el dashboard - fácil de adaptar cuando se conecten las tablas reales

export interface Empresa {
  id: string
  nombre: string
  direccion: string
  telefono: string
  usuarioPrincipal: string
  registro: string
}

export interface Contrato {
  id: string
  codigo: string
  empresaId: string
  empresa: string
  cantidadProductos: number
  cantidadPedidos: number
  compradoresActivos: number
  estatus: 'Activo' | 'Inactivo'
}

export interface Pedido {
  id: string
  numero: string
  empresaId: string
  empresa: string
  fechaOrden: string
  direccionDespacho: string
  montoTotal: number
  estatus: 'Enviado' | 'Pendiente' | 'Entregado'
  // Datos adicionales para el modal
  ordenCompra: string
  fechaSugeridaEntrega: string
  notaAdicional: string
}

export interface Categoria {
  id: string
  codigo: string
  cantidad: string
  nombre: string
  direccionDespacho: string
  categoraSuperior: string
  estatus: 'Activo' | 'Inactivo'
}

export interface Producto {
  id: string
  imagen: string
  sku: string
  categoria: string
  descripcion: string
}

// Datos dummy
export const empresasData: Empresa[] = [
  {
    id: '1',
    nombre: 'Innovatech Solutions C.A.',
    direccion: 'Av. Bolívar, Valencia',
    telefono: '+58 414-1234567',
    usuarioPrincipal: 'Carlos Rodríguez',
    registro: '21/01/2024'
  },
  {
    id: '2',
    nombre: 'TechCorp Venezuela',
    direccion: 'Av. Libertador, Caracas',
    telefono: '+58 414-7654321',
    usuarioPrincipal: 'María González',
    registro: '15/02/2024'
  },
  {
    id: '3',
    nombre: 'Digital Solutions',
    direccion: 'Av. Universidad, Maracay',
    telefono: '+58 414-9876543',
    usuarioPrincipal: 'José Martínez',
    registro: '10/03/2024'
  }
]

export const contratosData: Contrato[] = [
  {
    id: '1',
    codigo: 'CT-INV-2024-01',
    empresaId: '1',
    empresa: 'Innovatech Solutions C.A.',
    cantidadProductos: 240,
    cantidadPedidos: 100,
    compradoresActivos: 20,
    estatus: 'Activo'
  },
  {
    id: '2',
    codigo: 'CT-TCH-2024-02',
    empresaId: '2',
    empresa: 'TechCorp Venezuela',
    cantidadProductos: 180,
    cantidadPedidos: 75,
    compradoresActivos: 15,
    estatus: 'Activo'
  },
  {
    id: '3',
    codigo: 'CT-DIG-2024-03',
    empresaId: '3',
    empresa: 'Digital Solutions',
    cantidadProductos: 320,
    cantidadPedidos: 150,
    compradoresActivos: 25,
    estatus: 'Inactivo'
  }
]

export const pedidosData: Pedido[] = [
  {
    id: '1',
    numero: 'EP-1056',
    empresaId: '1',
    empresa: 'Innovatech Solutions C.A.',
    fechaOrden: '25/06/2024',
    direccionDespacho: 'Avenida Principal, 123, Urb. Las Acacias, Valencia',
    montoTotal: 150.00,
    estatus: 'Enviado',
    ordenCompra: 'PO-98765',
    fechaSugeridaEntrega: 'No especificada',
    notaAdicional: 'Entregar en la garita de vigilancia y preguntar por el Sr. Carlos Rodríguez. Dejar la mercancía en el andén de carga número 3.'
  },
  {
    id: '2',
    numero: 'EP-1057',
    empresaId: '2',
    empresa: 'TechCorp Venezuela',
    fechaOrden: '26/06/2024',
    direccionDespacho: 'Calle Comercio, 456, Centro, Caracas',
    montoTotal: 275.50,
    estatus: 'Pendiente',
    ordenCompra: 'PO-98766',
    fechaSugeridaEntrega: '30/06/2024',
    notaAdicional: 'Contactar con María González antes de la entrega.'
  },
  {
    id: '3',
    numero: 'EP-1058',
    empresaId: '3',
    empresa: 'Digital Solutions',
    fechaOrden: '27/06/2024',
    direccionDespacho: 'Av. Bolívar Norte, 789, Maracay',
    montoTotal: 420.75,
    estatus: 'Entregado',
    ordenCompra: 'PO-98767',
    fechaSugeridaEntrega: '29/06/2024',
    notaAdicional: 'Entrega realizada exitosamente.'
  }
]

export const categoriasData: Categoria[] = [
  {
    id: '1',
    codigo: 'CAT-01',
    cantidad: '100 prod.',
    nombre: 'Cajas Pequeñas',
    direccionDespacho: 'Avenida Principal, 123, Urb. Las Acacias, Valencia',
    categoraSuperior: 'Caja de cartón',
    estatus: 'Activo'
  },
  {
    id: '2',
    codigo: 'CAT-02',
    cantidad: '150 prod.',
    nombre: 'Cajas Medianas',
    direccionDespacho: 'Calle Comercio, 456, Centro, Caracas',
    categoraSuperior: 'Caja de cartón',
    estatus: 'Activo'
  },
  {
    id: '3',
    codigo: 'CAT-03',
    cantidad: '80 prod.',
    nombre: 'Cajas Grandes',
    direccionDespacho: 'Av. Bolívar Norte, 789, Maracay',
    categoraSuperior: 'Caja de cartón',
    estatus: 'Inactivo'
  },
  {
    id: '4',
    codigo: 'CAT-04',
    cantidad: '200 prod.',
    nombre: 'Sobres Acolchados',
    direccionDespacho: 'Av. Universidad, 321, Maracay',
    categoraSuperior: 'Sobre',
    estatus: 'Activo'
  }
]

export const productosData: Producto[] = [
  {
    id: '1',
    imagen: 'https://images.pexels.com/photos/4553618/pexels-photo-4553618.jpeg?auto=compress&cs=tinysrgb&w=400',
    sku: 'CP-001',
    categoria: 'Cajas',
    descripcion: 'Ideal para envíos de productos pequeños y frágiles. Medidas: 20x20x10 cm.'
  },
  {
    id: '2',
    imagen: 'https://images.pexels.com/photos/4553618/pexels-photo-4553618.jpeg?auto=compress&cs=tinysrgb&w=400',
    sku: 'CP-002',
    categoria: 'Cajas',
    descripcion: 'Ideal para envíos de productos pequeños y frágiles. Medidas: 20x20x10 cm.'
  },
  {
    id: '3',
    imagen: 'https://images.pexels.com/photos/4553618/pexels-photo-4553618.jpeg?auto=compress&cs=tinysrgb&w=400',
    sku: 'CP-003',
    categoria: 'Cajas',
    descripcion: 'Ideal para envíos de productos pequeños y frágiles. Medidas: 20x20x10 cm.'
  },
  {
    id: '4',
    imagen: 'https://images.pexels.com/photos/4553618/pexels-photo-4553618.jpeg?auto=compress&cs=tinysrgb&w=400',
    sku: 'CP-004',
    categoria: 'Cajas',
    descripcion: 'Ideal para envíos de productos pequeños y frágiles. Medidas: 20x20x10 cm.'
  },
  {
    id: '5',
    imagen: 'https://images.pexels.com/photos/4553618/pexels-photo-4553618.jpeg?auto=compress&cs=tinysrgb&w=400',
    sku: 'CP-005',
    categoria: 'Cajas',
    descripcion: 'Ideal para envíos de productos pequeños y frágiles. Medidas: 20x20x10 cm.'
  },
  {
    id: '6',
    imagen: 'https://images.pexels.com/photos/4553618/pexels-photo-4553618.jpeg?auto=compress&cs=tinysrgb&w=400',
    sku: 'CP-006',
    categoria: 'Cajas',
    descripcion: 'Ideal para envíos de productos pequeños y frágiles. Medidas: 20x20x10 cm.'
  }
]