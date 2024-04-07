"use strict";

/*
###Задание 1
Создайте обычный объект "Музыкальная коллекция", который можно итерировать. 
Каждая итерация должна возвращать следующий альбом из коллекции. Коллекция 
альбомов - это массив внутри нашего объекта (создать несколько альбомов самому).
Каждый альбом имеет следующую структуру:
{
  title: "Название альбома",
  artist: "Исполнитель",
  year: "Год выпуска"
}
Используйте цикл for...of для перебора альбомов в музыкальной коллекции и 
вывода их в консоль в формате:
"Название альбома - Исполнитель (Год выпуска)"
*/

const myCollection = [
  { title: "Алтбом_1", artist: "Исполнитель_1", year: "2001" },
  { title: "Алтбом_2", artist: "Исполнитель_2", year: "2002" },
  { title: "Алтбом_3", artist: "Исполнитель_3", year: "2003" }
];

const musicCollection = {
  myCollection,
  [Symbol.iterator]() {
    let countAlbums = 0;
    return {
      next: (() => {
        if (countAlbums >= this.myCollection.length) {
          return { done: true }
        } else {
          return {
            value: this.myCollection[countAlbums++],
            done: false
          }
        }
      })
    }
  }
}

for (const album of musicCollection) {
  console.log(`${album.title} - ${album.artist} (${album.year})`);
}