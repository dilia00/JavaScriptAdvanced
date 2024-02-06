'use strict';

// • Используя Symbol.iterator, создайте объект "Музыкальная коллекция", который можно итерировать. Каждая итерация должна возвращать следующий альбом из коллекции.

// • Создайте объект musicCollection, который содержит массив альбомов и имеет свойство-символ Symbol.iterator. Каждый альбом имеет следующую структуру:

// {
//     title: "Название альбома",
//         artist: "Исполнитель",
//             year: "Год выпуска"
// }

// • Реализуйте кастомный итератор для объекта musicCollection. Итератор должен перебирать альбомы по порядку.
// • Используйте цикл for...of для перебора альбомов в музыкальной коллекции и вывода их на консоль в формате: Название альбома - Исполнитель (Год выпуска)

const collection = [
    { title: "Алтбом_1", artist: "Исполнитель_1", year: "2001" },
    { title: "Алтбом_2", artist: "Исполнитель_2", year: "2002" },
    { title: "Алтбом_3", artist: "Исполнитель_3", year: "2003" }
];

const musicCollection = {
    collection: [...collection],
    [Symbol.iterator]: function () {
        let countAlbums = 0;
        return {
            next: (() => {
                if (countAlbums >= this.collection.length) {
                    return { done: true }
                } else {
                    return {
                        value: this.collection[countAlbums++],
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

