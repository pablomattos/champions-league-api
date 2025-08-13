import { PlayerModel } from "../models/player-model";
import { StatisticsModel } from "../models/statistic-model";

const database: PlayerModel[] = [
    {
      id: 1,
      name: "Gianluigi Donnarumma",
      club: "Paris Saint-Germain",
      nationality: "Italy",
      position: "Goalkeeper",
      statistics: {
          Overall: 8,
          Pace: 70,
          Shooting: 86,
          Passing: 37,
          Dribling: 22,
          Defending: 30,
          Physical: 65
      }
    },
    {
      id: 2,
      name: "Achraf Hakimi",
      club: "Paris Saint-Germain",
      nationality: "Morocco",
      position: "Right Back",
      statistics: {
          Overall: 51,
          Pace: 97,
          Shooting: 44,
          Passing: 0,
          Dribling: 80,
          Defending: 46,
          Physical: 66
      }
    },
    {
      id: 3,
      name: "Marquinhos",
      club: "Paris Saint-Germain",
      nationality: "Brazil",
      position: "Center Back",
      statistics: {
          Overall: 87,
          Pace: 31,
          Shooting: 13,
          Passing: 68,
          Dribling: 19,
          Defending: 50,
          Physical: 12
      }
    },
    {
      id: 4,
      name: "Alessandro Bastoni",
      club: "Inter Milan",
      nationality: "Italy",
      position: "Center Back",
      statistics: {
          Overall: 22,
          Pace: 69,
          Shooting: 69,
          Passing: 64,
          Dribling: 25,
          Defending: 31,
          Physical: 98
      }
    },
    {
      id: 5,
      name: "Nuno Mendes",
      club: "Paris Saint-Germain",
      nationality: "Portugal",
      position: "Left Back",
      statistics: {
          Overall: 93,
          Pace: 64,
          Shooting: 2,
          Passing: 29,
          Dribling: 15,
          Defending: 16,
          Physical: 58
      }
    },
    {
      id: 6,
      name: "Vitinha",
      club: "Paris Saint-Germain",
      nationality: "Portugal",
      position: "Midfielder",
      statistics: {
          Overall: 58,
          Pace: 69,
          Shooting: 10,
          Passing: 38,
          Dribling: 6,
          Defending: 80,
          Physical: 29
      }
    },
    {
      id: 7,
      name: "Declan Rice",
      club: "Arsenal",
      nationality: "England",
      position: "Defensive Midfielder",
      statistics: {
          Overall: 87,
          Pace: 55,
          Shooting: 60,
          Passing: 83,
          Dribling: 17,
          Defending: 3,
          Physical: 29
      }
    },
    {
      id: 8,
      name: "Lamine Yamal",
      club: "Barcelona",
      nationality: "Spain",
      position: "Winger",
      statistics: {
          Overall: 45,
          Pace: 59,
          Shooting: 93,
          Passing: 72,
          Dribling: 82,
          Defending: 70,
          Physical: 13
      }
    },
    {
      id: 9,
      name: "Désiré Doué",
      club: "Paris Saint-Germain",
      nationality: "France",
      position: "Midfielder",
      statistics: {
          Overall: 22,
          Pace: 73,
          Shooting: 68,
          Passing: 83,
          Dribling: 67,
          Defending: 28,
          Physical: 73
      }
    },
    {
      id: 10,
      name: "Ousmane Dembélé",
      club: "Paris Saint-Germain",
      nationality: "France",
      position: "Winger",
      statistics: {
          Overall: 18,
          Pace: 65,
          Shooting: 14,
          Passing: 23,
          Dribling: 44,
          Defending: 18,
          Physical: 80
      }
    },
    {
      id: 11,
      name: "Raphinha",
      club: "Barcelona",
      nationality: "Brazil",
      position: "Winger",
      statistics: {
          Overall: 46,
          Pace: 32,
          Shooting: 54,
          Passing: 79,
          Dribling: 23,
          Defending: 51,
          Physical: 64
      }
    },
    {
      id: 12,
      name: "Willian Pacho",
      club: "Paris Saint-Germain",
      nationality: "Ecuador",
      position: "Center Back",
      statistics: {
          Overall: 81,
          Pace: 12,
          Shooting: 29,
          Passing: 9,
          Dribling: 7,
          Defending: 26,
          Physical: 77
      }
    },
    {
      id: 13,
      name: "Lautaro Martínez",
      club: "Inter Milan",
      nationality: "Argentina",
      position: "Striker",
      statistics: {
          Overall: 65,
          Pace: 64,
          Shooting: 36,
          Passing: 22,
          Dribling: 97,
          Defending: 50,
          Physical: 63
      }
    }
  ];

  export const findAllPlayers = async (): Promise<PlayerModel[]> => {
    return database;
  };

export const findPlayerById = async (id: number): Promise<PlayerModel | undefined> => {
  return database.find((player) => player.id === id );
};

export const insertPlayer = async ( player: PlayerModel) => {
  database.push(player);
}

export const deleteOnePlayer = async ( id: number) => {
  const index = database.findIndex((p) => p.id === id);
  if( index !== -1 ){
    database.splice(index, 1);
    return true;
  }
  return false;
}

export const findAndModifyPlayer = async ( id: number, statistics: StatisticsModel): 
Promise<PlayerModel> => {
  const playerIndex = database.findIndex( player => player.id === id);
  if(playerIndex !== -1){
    database[playerIndex].statistics = statistics
  }
  
  return database[playerIndex];
}