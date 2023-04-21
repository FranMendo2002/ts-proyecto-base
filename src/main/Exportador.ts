import { EstrategiaDeExportacion } from "./interfaces/EstrategiaDeExportacion";
import { Exportable } from "./interfaces/Exportable";


export class Exportador {
    public exportar(exportable: Exportable, estrategia: EstrategiaDeExportacion): string {
        // Voy a devolver la ruta al archivo que generé
        return estrategia.exportar(exportable);
    }
}