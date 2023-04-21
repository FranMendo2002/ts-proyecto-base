import { Exportador } from "./main/Exportador";
import { ListadoDeAlumnos } from "./main/ListadoDeAlumnos";
import { AdapterPDFBox } from "./main/exportables/AdapterPDFBox";
import { ExportarAExcel } from "./main/exportables/ExportarAExcel";
import { ExportarAPDF } from "./main/exportables/ExportarAPDF";

console.log("Hola TS!");

// Estos son diccioanrios
//const alumnos = new Map<number, string[]>();
//alumnos.set(0, ["Nombre", "Apellido"])
//alumnos.set(1, ["Franco", "Mendoza"])
//console.log(alumnos);

const exportador = new Exportador();
const listadoDeAlumnos = new ListadoDeAlumnos();

const rutaAlArchivoExcel = exportador.exportar(listadoDeAlumnos, new ExportarAExcel());
const rutaAlPDF1 = exportador.exportar(listadoDeAlumnos, new ExportarAPDF(new AdapterPDFBox()));