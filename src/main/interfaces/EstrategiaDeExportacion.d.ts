import { Exportable } from "./Exportable";


export interface EstrategiaDeExportacion {
    exportar(exportable: Exportable): string;
}