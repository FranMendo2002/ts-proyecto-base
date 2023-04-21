import { Exportable } from "./Exportable";

export interface AdapterExportadorPDF {
    exportarPDF(exportable: Exportable): string;
}