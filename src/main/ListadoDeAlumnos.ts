import { Exportable } from "./interfaces/Exportable";


export class ListadoDeAlumnos implements Exportable {
    getDatos(): Map<number, string[]> {
        const alumnos = new Map<number, string[]>();
        alumnos.set(0, ["Nombre", "Apellido"])
        alumnos.set(1, ["Franco", "Mendoza"])
        alumnos.set(2, ["Juan", "Perez"])
        alumnos.set(3, ["Marina", "Rodriguez"])
        return alumnos;
    }
}