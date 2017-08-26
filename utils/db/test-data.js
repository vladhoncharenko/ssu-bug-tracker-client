/**
 * Created by Vlad on 31.07.2017.
 */

let bugs = [
    {
        bugId: '0001',
        author: {_id:23123213,_firstName: 'Vlad', _lastName: 'Honcharenko', _username: 'null'},
        date: '1495519348',
        location: {building: 'ET', room: 'ET-228'},
        description: 'Солнце составляет 99,8 процентов массы Солнечной системы',
        file_name: '0001.jpg',
        status: 'not_reviewed',
        rating: 16
    },
    {
        bugId: '0002',
        author: {_firstName: 'Евгений', _lastName: 'Письменный', _username: 'null'},
        date: '1495969348',
        location: {building: 'АН', room: 'АН-114/2'},
        description: 'Газовое облако в созвездии Орел содержит достаточно алкоголя, чтобы создать 200 септиллионов литров пива',
        file_name: '0001.jpg',
        status: 'new',
        rating: 17
    },
    {
        bugId: '0003',
        author: {_firstName: 'Владислав', _lastName: 'Філатов', _username: 'null'},
        date: '1495569308',
        location: {building: 'АН', room: 'АН-128-3'},
        description: 'Мы обнаружили больше тысячи планет за пределами Солнечной системы за последние 20 лет',
        file_name: '0001.jpg',
        status: 'new',
        rating: 1
    },
    {
        bugId: '0004',
        author: {_firstName: 'Антон', _lastName: 'Щебень', _username: 'null'},
        date: '1495569340',
        location: {building: 'Г', room: 'Г-1105'},
        description: 'Звук межзвёздного пространства звучит жутковато',
        file_name: '0001.jpg',
        status: 'resolved',
        rating: 19
    },
    {
        bugId: '0005',
        author: {_firstName: 'Анна', _lastName: 'Домина', _username: 'null'},
        date: '1495969348',
        location: {building: 'Г', room: 'Г-1212'},
        description: 'Все планеты Солнечной системы могли бы уместиться между Землей и Луной',
        file_name: '0001.jpg',
        status: 'resolved',
        rating: 18
    },
    {
        bugId: '0006',
        author: {_firstName: 'Ivan', _lastName: 'Makarenko', _username: 'null'},
        date: '1494569348',
        location: {building: 'Г', room: 'Г-1310'},
        description: 'Фотону требуется в среднем 170 000 лет, чтобы пройти от ядра Солнца к поверхности',
        file_name: '0001.jpg',
        status: 'in_progress',
        rating: 13
    },
    {
        bugId: '0007',
        author: {_firstName: 'Яна', _lastName: 'Выдумка', _username: 'null'},
        date: '1495069348',
        location: {building: 'ET', room: 'ЕТ-207'},
        description: 'Мы не сможем услышать никаких звуков в космосе',
        file_name: '0001.jpg',
        status: 'in_progress',
        rating: 1
    },
    {
        bugId: '0008',
        author: {_firstName: 'Толя', _lastName: 'Пигуль', _username: 'null'},
        date: '1490569348',
        location: {building: 'ET', room: 'ЕТ-304'},
        description: 'Кольца Сатурна время от времени исчезают',
        file_name: '0001.jpg',
        status: 'in_progress',
        rating: 17
    },
    {
        bugId: '0009',
        author: {_firstName: 'Дима', _lastName: 'Шыма', _username: 'null'},
        date: '1495509348',
        location: {building: 'ET', room: 'ЕТ-413'},
        description: 'У Сатурна есть дополнительное огромное кольцо, открытое только в 2009 году',
        file_name: '0001.jpg',
        status: 'deleted',
        rating: 1
    },
    {
        bugId: '0010',
        author: {_firstName: 'Алена', _lastName: 'Иванченко', _username: 'null'},
        date: '1495579348',
        location: {building: 'ET', room: 'ЕТ-503'},
        description: 'На северном полюсе Сатурна есть шестиугольное облако',
        file_name: '0001.jpg',
        status: 'deleted',
        rating: 16
    },
    {
        bugId: '0011',
        author: {_firstName: 'Anton', _lastName: 'Kach', _username: 'null'},
        date: '1495569398',
        location: {building: 'ЛА', room: 'ЛА-112'},
        description: 'В нашей Солнечной системе есть астероид с кольцами, как у Сатурна',
        file_name: '0001.jpg',
        status: 'new',
        rating: 15
    },
    {
        bugId: '0012',
        author: {_firstName: 'Dima', _lastName: 'Tokarev', _username: 'null'},
        date: '1492569348',
        location: {building: 'ЛА', room: 'ЛА-213'},
        description: 'Юпитер в 2,5 раза массивнее (тяжелее), чем все планеты Солнечной системы вместе взятые',
        file_name: '0001.jpg',
        status: 'in_progress',
        rating: 12
    },
    {
        bugId: '0013',
        author: {_firstName: 'Женя', _lastName: 'Копытин', _username: 'null'},
        date: '1495569948',
        location: {building: 'М', room: 'М-110'},
        description: 'За полтора часа на Землю попадает больше солнечной энергии, чем мы использовали за весь 2001 год',
        file_name: '0001.jpg',
        status: 'in_progress',
        rating: 13
    },
    {
        bugId: '0014',
        author: {_firstName: 'Инна', _lastName: 'Додова', _username: 'null'},
        date: '1495570348',
        location: {building: 'M', room: 'М-306'},
        description: 'Если бы вы упали в черную дыру, вас бы растянуло как лапшу',
        file_name: '0001.jpg',
        status: 'not_reviewed',
        rating: 13
    },
    {
        bugId: '0015',
        author: {_firstName: 'Алина', _lastName: 'Тутова', _username: 'null'},
        date: '1495579348',
        location: {building: 'Н', room: 'Н-210'},
        description: 'Если ничто не потревожит Луну (например, метеорит), то следы, оставленные на ее поверхности, останутся нетронутыми навсегда',
        file_name: '0001.jpg',
        status: 'resolved',
        rating: 13
    }
];

module.exports = {
    'bugs': bugs
};
