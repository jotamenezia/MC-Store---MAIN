export interface Solution {
  id: number;
  nombre: string;
  precio: number;
  horasAhorro: number;
  opcional?: boolean;
}

export interface PackData {
  nombre: string;
  precio: number;
}

export const solutions: Solution[] = [
  { id: 1, nombre: "Formularios de clientes", precio: 900, horasAhorro: 25 },
  { id: 2, nombre: "Base de datos optimizada en Airtable", precio: 1800, horasAhorro: 6 },
  { id: 3, nombre: "Inventario conectado con alertas", precio: 2400, horasAhorro: 14 },
  { id: 4, nombre: "Reactivación de clientes inactivos", precio: 1150, horasAhorro: null },
  { id: 5, nombre: "Avisos de cobro programados", precio: 1250, horasAhorro: 8 },
  { id: 6, nombre: "Notificaciones de entrega con confirmación", precio: 975, horasAhorro: 10 },
  { id: 7, nombre: "Gráficas contables automatizadas", precio: 1150, horasAhorro: 4 },
  { id: 8, nombre: "Formulario interno de pedidos", precio: 750, horasAhorro: 10 }
];

export const pack: PackData = {
  nombre: "Fase 1 (sin OCR)",
  precio: 9900
};

export const defaultCosteHora = 30;