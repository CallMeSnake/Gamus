import { Component } from '@angular/core';
import { environment } from '../../../../../../environments/environment';

interface Game {
  genre: string;
  imgSrc: string;
  imgAlt: string;
  title: string;
  description: string;
  price: string;
}

@Component({
  selector: 'homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent {
  homePage = environment.homePage;

  weeklyGames: Game[] = [
    {
      genre: 'Action',
      imgSrc: '../../../../../../assets/images/posters/pubg.jpg',
      imgAlt: 'pubg',
      title: 'PUBG',
      description: 'Here one hundred players fight in a battle royale.',
      price: '34.99',
    },
    {
      genre: 'Action',
      imgSrc: '../../../../../../assets/images/posters/overwatch.jpeg',
      imgAlt: 'overwatch',
      title: 'Overwatch',
      description: 'A team-based game starring a diverse cast of powerful heroes.',
      price: '29.99',
    },
    {
      genre: 'Action',
      imgSrc: '../../../../../../assets/images/posters/rock.jpg',
      imgAlt: 'dwarfs',
      title: 'Deep Rock Galactic',
      description: 'A 1-4 player cooperative first-person shooter.',
      price: '29.99',
    },
    {
      genre: 'Action',
      imgSrc: '../../../../../../assets/images/posters/dying.jpg',
      imgAlt: 'dying-light',
      title: 'Dying Light',
      description: 'Fight for survival in a post-apocalyptic open world.',
      price: '29.99',
    },
    {
      genre: 'Adventure',
      imgSrc: '../../../../../../assets/images/posters/space.jpg',
      imgAlt: 'space-engineers',
      title: 'Space Engineers',
      description: 'A sandbox game about engineering in space.',
      price: '29.99',
    },
    {
      genre: 'Action',
      imgSrc: '../../../../../../assets/images/posters/siege.jpg',
      imgAlt: 'siege',
      title: "Tom Clancy's Rainbow Six Siege",
      description: 'A tactical shooter that prioritises careful planning.',
      price: '29.99',
    },
    {
      genre: 'Intellectual',
      imgSrc: '../../../../../../assets/images/posters/vscode.png',
      imgAlt: 'vscode',
      title: 'Visual Studio Code',
      description: 'Play neverending quiz & brain games to train your thinking.',
      price: 'FREE',
    },
    {
      genre: 'Action',
      imgSrc: '../../../../../../assets/images/posters/warface.jpg',
      imgAlt: 'warface',
      title: 'Warface',
      description: 'A free-to-play FPS game similar to tactical shooters.',
      price: 'FREE',
    },
  ];

  popularGames: Game[] = [
    {
      imgSrc: '../../../../../../assets/images/posters/mini-posters/elden-ring.jpg',
      imgAlt: 'elden-ring',
      genre: 'Adventure',
      title: 'Elden Ring',
      description: 'A World Created By Hidetaka Miyazaki.',
      price: '59.99',
    },
    {
      imgSrc: '../../../../../../assets/images/posters/mini-posters/god-of-war.jpg',
      imgAlt: 'god-of-war',
      genre: 'Adventure',
      title: 'God of War',
      description: 'The God of War has changed...',
      price: '39.99',
    },
    {
      imgSrc: '../../../../../../assets/images/posters/mini-posters/stanley-parable.jpg',
      imgAlt: 'stanley-parable',
      genre: 'Casual',
      title: 'Stanley Parable: UD',
      description: 'Re-imagining of The Stanley Parable.',
      price: '14.99',
    },
    {
      imgSrc: '../../../../../../assets/images/posters/mini-posters/rogue-legacy.jpg',
      imgAlt: 'rogue-legacy-2',
      genre: 'Adventure',
      title: 'Rogue Legacy 2',
      description: 'Rogue Legacy and a sequel together.',
      price: '29.99',
    },
    {
      imgSrc: '../../../../../../assets/images/posters/mini-posters/13-sentinels.jpg',
      imgAlt: '13-sentinels',
      genre: 'Adventure',
      title: '13 Sentinels',
      description: 'The storytellers behind Odin Sphere.',
      price: '19.99',
    },
    {
      imgSrc: '../../../../../../assets/images/posters/mini-posters/norco.jpg',
      imgAlt: 'norco',
      genre: 'Adventure',
      title: 'NORCO',
      description: 'A Southern Gothic narrative adventure.',
      price: '19.99',
    },
    {
      imgSrc: '../../../../../../assets/images/posters/mini-posters/horizon.jpg',
      imgAlt: 'horizon',
      genre: 'Adventure',
      title: 'Horizon FW',
      description: 'Join Aloy as she braves the West.',
      price: '59.99',
    },
    {
      imgSrc: '../../../../../../assets/images/posters/mini-posters/gran-turismo.jpg',
      imgAlt: 'gran-turismo',
      genre: 'Racing',
      title: 'Gran Turismo 7',
      description: 'Legendary GT Simulator.',
      price: '59.99',
    },
  ];
}
