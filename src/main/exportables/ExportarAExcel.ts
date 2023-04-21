import { EstrategiaDeExportacion } from "../interfaces/EstrategiaDeExportacion";
import { Exportable } from "../interfaces/Exportable";

export class ExportarAExcel implements EstrategiaDeExportacion {
    // Exportar devuelve la ruta donde se guarda el archivo
    exportar(exportable: Exportable): string {
        // Aca deberiamos acoplarnos con la biblioteca de terceros
        return "";
    }
    
}