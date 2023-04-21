import { AdapterExportadorPDF } from "../interfaces/AdapterExportadorPDF";
import { Exportable } from "../interfaces/Exportable";

export class AdapterPDFBox implements AdapterExportadorPDF {
    exportarPDF(exportable: Exportable): string {
        return "";
    }

}