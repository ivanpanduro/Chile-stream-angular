import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [CommonModule] 
})
export class HomeComponent {
  peliculas = [
    {
      titulo: 'Romper el Círculo',
      descripcion: 'Lily Bloom se enamora de un neurocirujano tras mudarse a Boston.',
      imagen: 'assets/peliculas/Romper.jpeg'
    },
    {
      titulo: 'Contrataque',
      descripcion: 'El capitán Guerrero se enfrenta a un grupo criminal.',
      imagen: 'assets/peliculas/Contrataque.jpeg'
    },
    {
      titulo: "El Robo Perfecto",
      descripcion: "Un grupo de policías de élite se enfrenta a una banda de exmilitares...",
      imagen: "assets/peliculas/Robo-perfecto.jpeg"
    },
    {
      titulo: "Amigos Intocables",
      descripcion: "Un hombre tetraplégico y millonario contrata a Driss como cuidador. Nace una amistad única.",
      imagen: "assets/peliculas/Amigos.jpeg"
    },
    {
      titulo: "Son como Niños",
      descripcion: "Cinco amigos de la infancia se reencuentran para pasar un fin de semana lleno de diversión.",
      imagen: "assets/peliculas/Niños.jpeg"
    },
    {
      titulo: "Siempre a tu Lado",
      descripcion: "Un perro fiel llamado Hachiko espera todos los días a su amo después del trabajo.",
     imagen: "assets/peliculas/Hachiko.jpeg"
    },
    {
      titulo: "Un Lugar en Silencio",
      descripcion: "En un mundo invadido por criaturas con audición extrema, el silencio es la clave para sobrevivir.",
     imagen: "assets/peliculas/Silencio.jpeg"
    },
    {
      titulo: "Blancanieves y el Cazador",
      descripcion: "Un cazador enviado por la reina malvada debe capturar a Blancanieves, pero decide protegerla.",
      imagen: "assets/peliculas/Blanca.jpeg"
      
    }



    

    
  
  ];
}
