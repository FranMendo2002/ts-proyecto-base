import { AdapterExportadorPDF } from "../interfaces/AdapterExportadorPDF";
import { EstrategiaDeExportacion } from "../interfaces/EstrategiaDeExportacion";
import { Exportable } from "../interfaces/Exportable";

export class ExportarAPDF implements EstrategiaDeExportacion {
    private adapter: AdapterExportadorPDF;

    constructor(adapter: AdapterExportadorPDF) {
        this.adapter = adapter;
    }

    // Exportar devuelve la ruta donde se guarda el archivo
    exportar(exportable: Exportable): string {
        return this.adapter?.exportarPDF(exportable)!;
    }

}