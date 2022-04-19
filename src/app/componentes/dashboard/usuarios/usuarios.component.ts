import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ServInsertService } from 'src/app/servicios/serv-insert.service';
import { Empleados } from './empleados';





@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  @ViewChild(MatPaginator) paginator!: MatPaginator; //nota paginator pide que se inicialize, se le pone ! para que no de error y no tenga qeu inizializarse al instante

  constructor(private query: ServInsertService) { }


  //preparo la tabla que hereda el modelo de la clase o interfaz Empleados
  ELEMENT_DATA: Empleados[] = [
    {
        local:'GVMG',
        num_empleado: '1223256',
        nombre:'JOEL MOJICA',
        cedula: '00119390730',
        telefono:'8296558795'
    } //ej: de datos
  ];

 
  //despliego la tabla
  displayedColumns: string[] = ['local', 'num_empleado', 'nombre', 'cedula', 'telefono','opciones']; //# de columnas, bindiar con matColumnDef en html
  dataSource:any = ''; //bindeo con html para despues llenarlo

//paso los datos a la tabla
  traerTabla(){
    this.query.query().subscribe(data =>{
      console.log(data)

      for (let i = 0; i < data.length; i++) {
        this.ELEMENT_DATA.push(
                                {     
                                  local: data[i].LOCAL,
                                  num_empleado: data[i].NUM_EMPLEADO,
                                  nombre: data[i].NOMBRE,
                                  cedula: data[i].CEDULA,
                                  telefono: data[i].TELEFONO
                                }
                              )
      }

      //paso los datos al modelo / tabla
      this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
      
      //creo un paginador para la tabla
      this.dataSource.paginator = this.paginator;
    });
  }

  //filtro table angular material
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnInit(): void {
    
   this.traerTabla()
  }



}
