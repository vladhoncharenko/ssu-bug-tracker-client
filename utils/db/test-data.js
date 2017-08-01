/**
 * Created by Vlad on 31.07.2017.
 */

let bugs = [
    {
        bugId: '0001',
        author: {firstName: 'Vlad', lastName: 'Honcharenko', username: 'null'},
        date: '1495519348',
        location: {building: 'ET', room: 'ET-228'},
        description: 'Солнце составляет 99,8 процентов массы Солнечной системы',
        picId: '0001.jpg',
        status: 'new'
    },
    {
        bugId: '0002',
        author: {firstName: 'Евгений', lastName: 'Письменный', username: 'null'},
        date: '1495969348',
        location: {building: 'АН', room: 'АН-114/2'},
        description: 'Газовое облако в созвездии Орел содержит достаточно алкоголя, чтобы создать 200 септиллионов литров пива',
        picId: '0001.jpg',
        status: 'new'
    },
    {
        bugId: '0003',
        author: {firstName: 'Владислав', lastName: 'Філатов', username: 'null'},
        date: '1495569308',
        location: {building: 'АН', room: 'АН-128-3'},
        description: 'Мы обнаружили больше тысячи планет за пределами Солнечной системы за последние 20 лет',
        picId: '0001.jpg',
        status: 'new'
    },
    {
        bugId: '0004',
        author: {firstName: 'Антон', lastName: 'Щебень', username: 'null'},
        date: '1495569340',
        location: {building: 'Г', room: 'Г-1105'},
        description: 'Звук межзвёздного пространства звучит жутковато',
        picId: '0001.jpg',
        status: 'resolved'
    },
    {
        bugId: '0005',
        author: {firstName: 'Анна', lastName: 'Домина', username: 'null'},
        date: '1495969348',
        location: {building: 'Г', room: 'Г-1212'},
        description: 'Все планеты Солнечной системы могли бы уместиться между Землей и Луной',
        picId: '0001.jpg',
        status: 'resolved'
    },
    {
        bugId: '0006',
        author: {firstName: 'Ivan', lastName: 'Makarenko', username: 'null'},
        date: '1494569348',
        location: {building: 'Г', room: 'Г-1310'},
        description: 'Фотону требуется в среднем 170 000 лет, чтобы пройти от ядра Солнца к поверхности',
        picId: '0001.jpg',
        status: 'in_progress'
    },
    {
        bugId: '0007',
        author: {firstName: 'Яна', lastName: 'Выдумка', username: 'null'},
        date: '1495069348',
        location: {building: 'ET', room: 'ЕТ-207'},
        description: 'Мы не сможем услышать никаких звуков в космосе',
        picId: '0001.jpg',
        status: 'in_progress'
    },
    {
        bugId: '0008',
        author: {firstName: 'Толя', lastName: 'Пигуль', username: 'null'},
        date: '1490569348',
        location: {building: 'ET', room: 'ЕТ-304'},
        description: 'Кольца Сатурна время от времени исчезают',
        picId: '0001.jpg',
        status: 'in_progress'
    },
    {
        bugId: '0009',
        author: {firstName: 'Дима', lastName: 'Шыма', username: 'null'},
        date: '1495509348',
        location: {building: 'ET', room: 'ЕТ-413'},
        description: 'У Сатурна есть дополнительное огромное кольцо, открытое только в 2009 году',
        picId: '0001.jpg',
        status: 'deleted'
    },
    {
        bugId: '0010',
        author: {firstName: 'Алена', lastName: 'Иванченко', username: 'null'},
        date: '1495579348',
        location: {building: 'ET', room: 'ЕТ-503'},
        description: 'На северном полюсе Сатурна есть шестиугольное облако',
        picId: '0001.jpg',
        status: 'deleted'
    },
    {
        bugId: '0011',
        author: {firstName: 'Anton', lastName: 'Kach', username: 'null'},
        date: '1495569398',
        location: {building: 'ЛА', room: 'ЛА-112'},
        description: 'В нашей Солнечной системе есть астероид с кольцами, как у Сатурна',
        picId: '0001.jpg',
        status: 'new'
    },
    {
        bugId: '0012',
        author: {firstName: 'Dima', lastName: 'Tokarev', username: 'null'},
        date: '1492569348',
        location: {building: 'ЛА', room: 'ЛА-213'},
        description: 'Юпитер в 2,5 раза массивнее (тяжелее), чем все планеты Солнечной системы вместе взятые',
        picId: '0001.jpg',
        status: 'in_progress'
    },
    {
        bugId: '0013',
        author: {firstName: 'Женя', lastName: 'Копытин', username: 'null'},
        date: '1495569948',
        location: {building: 'М', room: 'М-110'},
        description: 'За полтора часа на Землю попадает больше солнечной энергии, чем мы использовали за весь 2001 год',
        picId: '0001.jpg',
        status: 'in_progress'
    },
    {
        bugId: '0014',
        author: {firstName: 'Инна', lastName: 'Додова', username: 'null'},
        date: '1495570348',
        location: {building: 'M', room: 'М-306'},
        description: 'Если бы вы упали в черную дыру, вас бы растянуло как лапшу',
        picId: '0001.jpg',
        status: 'resolved'
    },
    {
        bugId: '0015',
        author: {firstName: 'Алина', lastName: 'Тутова', username: 'null'},
        date: '1495579348',
        location: {building: 'Н', room: 'Н-210'},
        description: 'Если ничто не потревожит Луну (например, метеорит), то следы, оставленные на ее поверхности, останутся нетронутыми навсегда',
        picId: '0001.jpg',
        status: 'resolved'
    }
];

module.exports = {
    'bugs': bugs
};
