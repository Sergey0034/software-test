import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {LibraryType} from '../types/library.types';

@Injectable({
  providedIn: 'root'
})
export class LibrariesService {

  constructor(
    private http: HttpClient
  ) {
  }

  localLibraries: LibraryType[] = [
    {
      "is_deleted": 0,
      "Category": "Библиотека",
      "CommonName": "Библиотека №192",
      "FullName": "Государственное бюджетное учреждение культуры города Москвы «Объединение культурных центров Юго-Западного административного округа», Библиотека №192",
      "ShortName": "ГБУК г. Москвы «ОКЦ ЮЗАО», Библиотека №192",
      "OrgInfo": [
        {
          "is_deleted": 0,
          "ChiefPhone": [
            {
              "is_deleted": 0,
              "global_id": 152575,
              "ChiefPhone": "(495) 420-05-37"
            }
          ],
          "FullName": "Государственное бюджетное учреждение культуры города Москвы «Объединение культурных центров Юго-Западного административного округа»",
          "INN": "7728812089",
          "KPP": "772801001",
          "OGRN": "1127746506634",
          "LegalAddress": "117513, город Москва, Ленинский проспект, дом 127",
          "ChiefName": "Корчагин Олег Николаевич",
          "ChiefPosition": "генеральный директор",
          "global_id": 139624
        }
      ],
      "ObjectAddress": [
        {
          "is_deleted": 0,
          "AdmArea": "Юго-Западный административный округ",
          "District": "район Северное Бутово",
          "PostalCode": "117628",
          "Address": "город Москва, Старобитцевская улица, дом 23, корпус 2",
          "Availability": [
            {
              "is_deleted": 0,
              "global_id": 135910,
              "available_k": "полностью",
              "available_o": "полностью",
              "available_z": "частично",
              "available_s": "частично",
              "available_element": [
                {
                  "is_deleted": 0,
                  "global_id": 5352608,
                  "Group_mgn": "инвалиды-опорники",
                  "Area_mgn": "входная группа",
                  "Element_mgn": "нулевой вход",
                  "available_degree": "частично",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5352796,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "санитарный узел",
                  "Element_mgn": "зона у раковины для кресла-коляски",
                  "available_degree": "полностью",
                  "available_index": "есть"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5356119,
                  "Group_mgn": "инвалиды по зрению",
                  "Area_mgn": "пути движения и эвакуации",
                  "Element_mgn": "контрастная маркировка ступеней",
                  "available_degree": "частично",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5357657,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "территория объекта",
                  "Element_mgn": "машино-место для инвалидов",
                  "available_degree": "частично",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5357721,
                  "Group_mgn": "инвалиды по слуху",
                  "Area_mgn": "пути движения и эвакуации",
                  "Element_mgn": "наличие надписей",
                  "available_degree": "частично",
                  "available_index": "есть"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5359721,
                  "Group_mgn": "инвалиды по зрению",
                  "Area_mgn": "пути движения и эвакуации",
                  "Element_mgn": "лестницы на пути движения",
                  "available_degree": "частично",
                  "available_index": "есть"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5359886,
                  "Group_mgn": "инвалиды по зрению",
                  "Area_mgn": "входная группа",
                  "Element_mgn": "поручни на имеющейся лестнице",
                  "available_degree": "частично",
                  "available_index": "есть"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5359887,
                  "Group_mgn": "инвалиды-опорники",
                  "Area_mgn": "пути движения и эвакуации",
                  "Element_mgn": "ширина полосы движения",
                  "available_degree": "частично",
                  "available_index": "соответствует"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5359888,
                  "Group_mgn": "инвалиды-опорники",
                  "Area_mgn": "зона оказания услуги",
                  "Element_mgn": "габариты зоны сидения (глубина)",
                  "available_degree": "полностью",
                  "available_index": "соответствует"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5363490,
                  "Group_mgn": "инвалиды-опорники",
                  "Area_mgn": "пути движения и эвакуации",
                  "Element_mgn": "поручни на имеющейся лестнице",
                  "available_degree": "частично",
                  "available_index": "есть"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5363491,
                  "Group_mgn": "инвалиды-опорники",
                  "Area_mgn": "пути движения и эвакуации",
                  "Element_mgn": "лифт",
                  "available_degree": "частично",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5367094,
                  "Group_mgn": "инвалиды по слуху",
                  "Area_mgn": "зона оказания услуги",
                  "Element_mgn": "места для инвалидов по слуху в зале",
                  "available_degree": "частично",
                  "available_index": "есть"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5367095,
                  "Group_mgn": "инвалиды по зрению",
                  "Area_mgn": "санитарный узел",
                  "Element_mgn": "тактильное обозначение санузла",
                  "available_degree": "частично",
                  "available_index": "есть"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5367720,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "пути движения и эвакуации",
                  "Element_mgn": "пандус с поручнями и его уклон",
                  "available_degree": "частично",
                  "available_index": "соответствует"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5369905,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "санитарный узел",
                  "Element_mgn": "ширина двери",
                  "available_degree": "полностью",
                  "available_index": "соответствует"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5370138,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "входная группа",
                  "Element_mgn": "нулевой вход",
                  "available_degree": "частично",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5370139,
                  "Group_mgn": "инвалиды-опорники",
                  "Area_mgn": "санитарный узел",
                  "Element_mgn": "поручни у унитаза",
                  "available_degree": "полностью",
                  "available_index": "есть"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5372584,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "пути движения и эвакуации",
                  "Element_mgn": "лифт",
                  "available_degree": "частично",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5377393,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "зона оказания услуги",
                  "Element_mgn": "ширина полосы движения (при обслуживании с перемещением)",
                  "available_degree": "частично",
                  "available_index": "соответствует"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5379686,
                  "Group_mgn": "инвалиды-опорники",
                  "Area_mgn": "пути движения и эвакуации",
                  "Element_mgn": "лестницы на пути движения",
                  "available_degree": "частично",
                  "available_index": "есть"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5382910,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "санитарный узел",
                  "Element_mgn": "зона рядом с унитазом",
                  "available_degree": "полностью",
                  "available_index": "есть"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5387761,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "зона оказания услуги",
                  "Element_mgn": "места для инвалидов-колясочников в зале",
                  "available_degree": "частично",
                  "available_index": "есть"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5388314,
                  "Group_mgn": "инвалиды по зрению",
                  "Area_mgn": "территория объекта",
                  "Element_mgn": "безбарьерный путь до главного входа",
                  "available_degree": "частично",
                  "available_index": "есть"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5392432,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "территория объекта",
                  "Element_mgn": "безбарьерный путь до главного входа",
                  "available_degree": "частично",
                  "available_index": "есть"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5392433,
                  "Group_mgn": "инвалиды-опорники",
                  "Area_mgn": "территория объекта",
                  "Element_mgn": "безбарьерный путь до главного входа",
                  "available_degree": "частично",
                  "available_index": "есть"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5394086,
                  "Group_mgn": "инвалиды по зрению",
                  "Area_mgn": "пути движения и эвакуации",
                  "Element_mgn": "поручни на имеющейся лестнице",
                  "available_degree": "частично",
                  "available_index": "есть"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5395442,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "территория объекта",
                  "Element_mgn": "информационные указатели",
                  "available_degree": "частично",
                  "available_index": "есть"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5395443,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "входная группа",
                  "Element_mgn": "платформа подъемная (мобильный лестничный подъемник)",
                  "available_degree": "частично",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5395857,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "зона оказания услуги",
                  "Element_mgn": "ширина дверей в кабинеты",
                  "available_degree": "частично",
                  "available_index": "соответствует"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5396841,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "входная группа",
                  "Element_mgn": "пандус с поручнями и его уклон",
                  "available_degree": "частично",
                  "available_index": "соответствует"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5396842,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "санитарный узел",
                  "Element_mgn": "габариты кабины",
                  "available_degree": "полностью",
                  "available_index": "соответствует"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5397559,
                  "Group_mgn": "инвалиды по зрению",
                  "Area_mgn": "входная группа",
                  "Element_mgn": "нулевой вход",
                  "available_degree": "частично",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5397560,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "пути движения и эвакуации",
                  "Element_mgn": "ширина полосы движения",
                  "available_degree": "частично",
                  "available_index": "соответствует"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5397561,
                  "Group_mgn": "инвалиды-опорники",
                  "Area_mgn": "зона оказания услуги",
                  "Element_mgn": "ширина полосы движения (при обслуживании с перемещением)",
                  "available_degree": "полностью",
                  "available_index": "соответствует"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5398677,
                  "Group_mgn": "инвалиды по зрению",
                  "Area_mgn": "территория объекта",
                  "Element_mgn": "поручни на имеющейся лестнице",
                  "available_degree": "частично",
                  "available_index": "есть"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5399758,
                  "Group_mgn": "инвалиды по зрению",
                  "Area_mgn": "территория объекта",
                  "Element_mgn": "тактильная полоса перед лестницей",
                  "available_degree": "частично",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5399759,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "входная группа",
                  "Element_mgn": "информационные указатели",
                  "available_degree": "частично",
                  "available_index": "есть"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5401508,
                  "Group_mgn": "инвалиды по слуху",
                  "Area_mgn": "пути движения и эвакуации",
                  "Element_mgn": "наличие указателей, пиктограмм",
                  "available_degree": "частично",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5402980,
                  "Group_mgn": "инвалиды-опорники",
                  "Area_mgn": "территория объекта",
                  "Element_mgn": "машино-место для инвалидов",
                  "available_degree": "частично",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5402981,
                  "Group_mgn": "инвалиды по слуху",
                  "Area_mgn": "зона оказания услуги",
                  "Element_mgn": "визуальные средства информации о предоставлении услуги",
                  "available_degree": "частично",
                  "available_index": "есть"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5404989,
                  "Group_mgn": "инвалиды по слуху",
                  "Area_mgn": "территория объекта",
                  "Element_mgn": "указатели направления движения",
                  "available_degree": "частично",
                  "available_index": "есть"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5405262,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "пути движения и эвакуации",
                  "Element_mgn": "платформа подъемная (мобильный лестничный подъемник)",
                  "available_degree": "частично",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5406180,
                  "Group_mgn": "инвалиды по зрению",
                  "Area_mgn": "зона оказания услуги",
                  "Element_mgn": "тактильные средства информации",
                  "available_degree": "частично",
                  "available_index": "есть"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5407440,
                  "Group_mgn": "инвалиды по зрению",
                  "Area_mgn": "входная группа",
                  "Element_mgn": "тактильная полоса перед входной лестницей",
                  "available_degree": "частично",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5408106,
                  "Group_mgn": "инвалиды-опорники",
                  "Area_mgn": "территория объекта",
                  "Element_mgn": "поручни на имеющейся лестнице",
                  "available_degree": "частично",
                  "available_index": "есть"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5408107,
                  "Group_mgn": "инвалиды-опорники",
                  "Area_mgn": "входная группа",
                  "Element_mgn": "поручни на имеющейся лестнице",
                  "available_degree": "частично",
                  "available_index": "есть"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5408108,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "пути движения и эвакуации",
                  "Element_mgn": "лестницы на пути движения",
                  "available_degree": "частично",
                  "available_index": "есть"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5409085,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "входная группа",
                  "Element_mgn": "ширина входной двери",
                  "available_degree": "частично",
                  "available_index": "соответствует"
                }
              ]
            }
          ],
          "global_id": 265153
        }
      ],
      "ChiefOrg": "Департамент культуры города Москвы",
      "ChiefName": "Гарбуз Римма Викторовна",
      "ChiefPosition": "заведующий",
      "PublicPhone": [
        {
          "is_deleted": 0,
          "PublicPhone": "(495) 711-80-45",
          "global_id": 200450
        },
        {
          "is_deleted": 0,
          "PublicPhone": "(495) 713-11-18",
          "global_id": 200821
        },
        {
          "is_deleted": 0,
          "PublicPhone": "(495) 713-11-27",
          "global_id": 201054
        }
      ],
      "Fax": [
        {
          "is_deleted": 0,
          "Fax": "(495) 713-11-18",
          "global_id": 136753
        }
      ],
      "Email": [
        {
          "is_deleted": 0,
          "Email": "okcuzao-lib-192@culture.mos.ru",
          "global_id": 147363
        }
      ],
      "WorkingHours": [
        {
          "is_deleted": 0,
          "DayWeek": "понедельник",
          "WorkHours": "выходной",
          "global_id": 998609
        },
        {
          "is_deleted": 0,
          "DayWeek": "вторник",
          "WorkHours": "12:00-22:00",
          "global_id": 998701
        },
        {
          "is_deleted": 0,
          "DayWeek": "среда",
          "WorkHours": "12:00-22:00",
          "global_id": 1001665
        },
        {
          "is_deleted": 0,
          "DayWeek": "четверг",
          "WorkHours": "12:00-22:00",
          "global_id": 1002315
        },
        {
          "is_deleted": 0,
          "DayWeek": "пятница",
          "WorkHours": "12:00-22:00",
          "global_id": 1002262
        },
        {
          "is_deleted": 0,
          "DayWeek": "суббота",
          "WorkHours": "12:00-22:00",
          "global_id": 998398
        },
        {
          "is_deleted": 0,
          "DayWeek": "воскресенье",
          "WorkHours": "12:00-20:00",
          "global_id": 1001191
        }
      ],
      "ClarificationOfWorkingHours": "Санитарный день - последний вторник месяца",
      "WebSite": "kulturauzao.ru",
      "NumOfSeats": 46,
      "NumOfReaders": 5628,
      "NumOfVisitors": 43503,
      "global_id": 2639269557,
      "geoData": {
        "coordinates": [
          [
            37.573442179,
            55.578687848
          ]
        ],
        "type": "MultiPoint"
      },
      "geodata_center": null
    },
    {
      "is_deleted": 0,
      "Category": "Библиотека",
      "CommonName": "Детская библиотека №203",
      "FullName": "Государственное бюджетное учреждение культуры города Москвы «Объединение культурных центров Западного административного округа», Детская библиотека №203",
      "ShortName": "ГБУК г. Москвы «ОКЦ ЗАО», Детская библиотека №203",
      "OrgInfo": [
        {
          "is_deleted": 0,
          "ChiefPhone": [
            {
              "is_deleted": 0,
              "global_id": 153039,
              "ChiefPhone": "(495) 415-90-54"
            }
          ],
          "FullName": "Государственное бюджетное учреждение культуры города Москвы «Объединение культурных центров Западного административного округа»",
          "INN": "7731022796",
          "KPP": "773101001",
          "OGRN": "1037700088051",
          "LegalAddress": "121614, город Москва, улица Крылатские холмы, дом 34",
          "ChiefName": "Орлова Ольга Анатольевна",
          "ChiefPosition": "генеральный директор",
          "global_id": 139433
        }
      ],
      "ObjectAddress": [
        {
          "is_deleted": 0,
          "AdmArea": "Западный административный округ",
          "District": "район Филёвский Парк",
          "PostalCode": "121096",
          "Address": "Российская Федерация, город Москва, внутригородская территория муниципальный округ Филевский Парк, Кастанаевская улица, дом 7",
          "Availability": [
            {
              "is_deleted": 0,
              "global_id": 136355,
              "available_k": "полностью",
              "available_o": "полностью",
              "available_z": "частично",
              "available_s": "частично",
              "available_element": [
                {
                  "is_deleted": 0,
                  "global_id": 5348652,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "зона оказания услуги",
                  "Element_mgn": "места для инвалидов-колясочников в зале",
                  "available_degree": "частично",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5351070,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "пути движения и эвакуации",
                  "Element_mgn": "пандус с поручнями и его уклон",
                  "available_degree": "полностью",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5353070,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "санитарный узел",
                  "Element_mgn": "габариты кабины",
                  "available_degree": "полностью",
                  "available_index": "соответствует"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5355611,
                  "Group_mgn": "инвалиды-опорники",
                  "Area_mgn": "санитарный узел",
                  "Element_mgn": "поручень у раковины",
                  "available_degree": "частично",
                  "available_index": "не соответствует"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5356692,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "зона оказания услуги",
                  "Element_mgn": "ширина дверей в кабинеты",
                  "available_degree": "частично",
                  "available_index": "не соответствует"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5357049,
                  "Group_mgn": "инвалиды по зрению",
                  "Area_mgn": "входная группа",
                  "Element_mgn": "нулевой вход",
                  "available_degree": "частично",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5357213,
                  "Group_mgn": "инвалиды-опорники",
                  "Area_mgn": "пути движения и эвакуации",
                  "Element_mgn": "поручни на имеющейся лестнице",
                  "available_degree": "полностью",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5361537,
                  "Group_mgn": "инвалиды-опорники",
                  "Area_mgn": "пути движения и эвакуации",
                  "Element_mgn": "лестницы на пути движения",
                  "available_degree": "полностью",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5364251,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "санитарный узел",
                  "Element_mgn": "ширина двери",
                  "available_degree": "полностью",
                  "available_index": "соответствует"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5364593,
                  "Group_mgn": "инвалиды по слуху",
                  "Area_mgn": "зона оказания услуги",
                  "Element_mgn": "места для инвалидов по слуху в зале",
                  "available_degree": "частично",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5366419,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "входная группа",
                  "Element_mgn": "платформа подъемная (мобильный лестничный подъемник)",
                  "available_degree": "полностью",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5366420,
                  "Group_mgn": "инвалиды по слуху",
                  "Area_mgn": "зона оказания услуги",
                  "Element_mgn": "визуальные средства информации о предоставлении услуги",
                  "available_degree": "частично",
                  "available_index": "есть"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5367864,
                  "Group_mgn": "инвалиды по зрению",
                  "Area_mgn": "зона оказания услуги",
                  "Element_mgn": "тактильные средства информации",
                  "available_degree": "частично",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5369083,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "входная группа",
                  "Element_mgn": "информационные указатели",
                  "available_degree": "полностью",
                  "available_index": "есть"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5369084,
                  "Group_mgn": "инвалиды-опорники",
                  "Area_mgn": "зона оказания услуги",
                  "Element_mgn": "габариты зоны сидения (глубина)",
                  "available_degree": "полностью",
                  "available_index": "соответствует"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5373670,
                  "Group_mgn": "инвалиды по зрению",
                  "Area_mgn": "пути движения и эвакуации",
                  "Element_mgn": "поручни на имеющейся лестнице",
                  "available_degree": "частично",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5374174,
                  "Group_mgn": "инвалиды-опорники",
                  "Area_mgn": "входная группа",
                  "Element_mgn": "поручни на имеющейся лестнице",
                  "available_degree": "полностью",
                  "available_index": "есть"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5377925,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "пути движения и эвакуации",
                  "Element_mgn": "платформа подъемная (мобильный лестничный подъемник)",
                  "available_degree": "полностью",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5377926,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "зона оказания услуги",
                  "Element_mgn": "обслуживание через окно/прилавок",
                  "available_degree": "частично",
                  "available_index": "соответствует"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5380535,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "санитарный узел",
                  "Element_mgn": "зона рядом с унитазом",
                  "available_degree": "полностью",
                  "available_index": "есть"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5380885,
                  "Group_mgn": "инвалиды по слуху",
                  "Area_mgn": "пути движения и эвакуации",
                  "Element_mgn": "наличие указателей, пиктограмм",
                  "available_degree": "частично",
                  "available_index": "есть"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5381628,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "входная группа",
                  "Element_mgn": "ширина входной двери",
                  "available_degree": "полностью",
                  "available_index": "соответствует"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5385094,
                  "Group_mgn": "инвалиды-опорники",
                  "Area_mgn": "пути движения и эвакуации",
                  "Element_mgn": "ширина полосы движения",
                  "available_degree": "полностью",
                  "available_index": "соответствует"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5386485,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "входная группа",
                  "Element_mgn": "пандус с поручнями и его уклон",
                  "available_degree": "полностью",
                  "available_index": "соответствует"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5390360,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "входная группа",
                  "Element_mgn": "нулевой вход",
                  "available_degree": "полностью",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5392254,
                  "Group_mgn": "инвалиды по зрению",
                  "Area_mgn": "пути движения и эвакуации",
                  "Element_mgn": "контрастная маркировка ступеней",
                  "available_degree": "частично",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5394687,
                  "Group_mgn": "инвалиды по зрению",
                  "Area_mgn": "пути движения и эвакуации",
                  "Element_mgn": "лестницы на пути движения",
                  "available_degree": "частично",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5395027,
                  "Group_mgn": "инвалиды-опорники",
                  "Area_mgn": "пути движения и эвакуации",
                  "Element_mgn": "лифт",
                  "available_degree": "полностью",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5395028,
                  "Group_mgn": "инвалиды-опорники",
                  "Area_mgn": "зона оказания услуги",
                  "Element_mgn": "ширина полосы движения (при обслуживании с перемещением)",
                  "available_degree": "полностью",
                  "available_index": "соответствует"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5395029,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "санитарный узел",
                  "Element_mgn": "зона у раковины для кресла-коляски",
                  "available_degree": "полностью",
                  "available_index": "есть"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5395878,
                  "Group_mgn": "инвалиды по зрению",
                  "Area_mgn": "санитарный узел",
                  "Element_mgn": "тактильное обозначение санузла",
                  "available_degree": "недоступно",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5396604,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "пути движения и эвакуации",
                  "Element_mgn": "ширина полосы движения",
                  "available_degree": "полностью",
                  "available_index": "соответствует"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5396605,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "пути движения и эвакуации",
                  "Element_mgn": "лифт",
                  "available_degree": "полностью",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5396606,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "зона оказания услуги",
                  "Element_mgn": "ширина полосы движения (при обслуживании с перемещением)",
                  "available_degree": "частично",
                  "available_index": "соответствует"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5397661,
                  "Group_mgn": "инвалиды-опорники",
                  "Area_mgn": "входная группа",
                  "Element_mgn": "нулевой вход",
                  "available_degree": "полностью",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5400990,
                  "Group_mgn": "инвалиды по слуху",
                  "Area_mgn": "пути движения и эвакуации",
                  "Element_mgn": "наличие надписей",
                  "available_degree": "частично",
                  "available_index": "есть"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5400991,
                  "Group_mgn": "инвалиды-опорники",
                  "Area_mgn": "санитарный узел",
                  "Element_mgn": "поручни у унитаза",
                  "available_degree": "частично",
                  "available_index": "есть"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5404579,
                  "Group_mgn": "инвалиды по зрению",
                  "Area_mgn": "входная группа",
                  "Element_mgn": "тактильная полоса перед входной лестницей",
                  "available_degree": "частично",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5405385,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "пути движения и эвакуации",
                  "Element_mgn": "лестницы на пути движения",
                  "available_degree": "полностью",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5407453,
                  "Group_mgn": "инвалиды по зрению",
                  "Area_mgn": "входная группа",
                  "Element_mgn": "поручни на имеющейся лестнице",
                  "available_degree": "частично",
                  "available_index": "есть"
                }
              ]
            }
          ],
          "global_id": 263909
        }
      ],
      "ChiefOrg": "Департамент культуры города Москвы",
      "ChiefName": "Стрельникова Вера Михайловна",
      "ChiefPosition": "заведующий",
      "PublicPhone": [
        {
          "is_deleted": 0,
          "PublicPhone": "(499) 142-45-04",
          "global_id": 200776
        }
      ],
      "Fax": [],
      "Email": [
        {
          "is_deleted": 0,
          "Email": "okczao-203@culture.mos.ru",
          "global_id": 147659
        }
      ],
      "WorkingHours": [
        {
          "is_deleted": 0,
          "DayWeek": "понедельник",
          "WorkHours": "выходной",
          "global_id": 1003266
        },
        {
          "is_deleted": 0,
          "DayWeek": "вторник",
          "WorkHours": "12:00-21:00",
          "global_id": 999818
        },
        {
          "is_deleted": 0,
          "DayWeek": "среда",
          "WorkHours": "12:00-21:00",
          "global_id": 1001746
        },
        {
          "is_deleted": 0,
          "DayWeek": "четверг",
          "WorkHours": "12:00-21:00",
          "global_id": 1001336
        },
        {
          "is_deleted": 0,
          "DayWeek": "пятница",
          "WorkHours": "12:00-21:00",
          "global_id": 1000735
        },
        {
          "is_deleted": 0,
          "DayWeek": "суббота",
          "WorkHours": "12:00-21:00",
          "global_id": 1002277
        },
        {
          "is_deleted": 0,
          "DayWeek": "воскресенье",
          "WorkHours": "12:00-20:00",
          "global_id": 999819
        }
      ],
      "ClarificationOfWorkingHours": "Санитарный день - последний вторник месяца",
      "WebSite": "kulturazao.ru",
      "NumOfSeats": 23,
      "NumOfReaders": 2696,
      "NumOfVisitors": 19944,
      "global_id": 2639269558,
      "geoData": {
        "coordinates": [
          [
            37.495954251,
            55.738589911
          ]
        ],
        "type": "MultiPoint"
      },
      "geodata_center": null
    },
    {
      "is_deleted": 0,
      "Category": "Библиотека",
      "CommonName": "Библиотека № 96",
      "FullName": "Государственное бюджетное учреждение культуры города Москвы «Объединение культурных центров Восточного административного округа». Библиотека № 96",
      "ShortName": "ГБУК г. Москвы «ОКЦ ВАО». Библиотека № 96",
      "OrgInfo": [
        {
          "is_deleted": 0,
          "ChiefPhone": [
            {
              "is_deleted": 0,
              "global_id": 152717,
              "ChiefPhone": "(499) 162-97-57"
            }
          ],
          "FullName": "Государственное бюджетное учреждение культуры города Москвы «Объединение культурных центров Восточного административного округа»",
          "INN": "7718106782",
          "KPP": "771801001",
          "OGRN": "1037739145751",
          "LegalAddress": "107392, город Москва, улица Халтуринская, дом 18",
          "ChiefName": "Худайбердин Дамир Шамилевич",
          "ChiefPosition": "исполняющий обязанности генерального директора",
          "global_id": 139191
        }
      ],
      "ObjectAddress": [
        {
          "is_deleted": 0,
          "AdmArea": "Восточный административный округ",
          "District": "район Новогиреево",
          "PostalCode": "111396",
          "Address": "Российская Федерация, город Москва, внутригородская территория муниципальный округ Новогиреево, Свободный проспект, дом 24",
          "Availability": [
            {
              "is_deleted": 0,
              "global_id": 136093,
              "available_k": "полностью",
              "available_o": "частично",
              "available_z": "частично",
              "available_s": "частично",
              "available_element": [
                {
                  "is_deleted": 0,
                  "global_id": 5350336,
                  "Group_mgn": "инвалиды-опорники",
                  "Area_mgn": "пути движения и эвакуации",
                  "Element_mgn": "лифт",
                  "available_degree": "частично",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5353882,
                  "Group_mgn": "инвалиды-опорники",
                  "Area_mgn": "санитарный узел",
                  "Element_mgn": "поручни у унитаза",
                  "available_degree": "частично",
                  "available_index": "есть"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5356375,
                  "Group_mgn": "инвалиды-опорники",
                  "Area_mgn": "пути движения и эвакуации",
                  "Element_mgn": "лестницы на пути движения",
                  "available_degree": "частично",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5356376,
                  "Group_mgn": "инвалиды по зрению",
                  "Area_mgn": "пути движения и эвакуации",
                  "Element_mgn": "контрастная маркировка ступеней",
                  "available_degree": "частично",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5356451,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "пути движения и эвакуации",
                  "Element_mgn": "лифт",
                  "available_degree": "частично",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5356452,
                  "Group_mgn": "инвалиды по зрению",
                  "Area_mgn": "пути движения и эвакуации",
                  "Element_mgn": "лестницы на пути движения",
                  "available_degree": "частично",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5357243,
                  "Group_mgn": "инвалиды по зрению",
                  "Area_mgn": "санитарный узел",
                  "Element_mgn": "тактильное обозначение санузла",
                  "available_degree": "недоступно",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5358622,
                  "Group_mgn": "инвалиды-опорники",
                  "Area_mgn": "входная группа",
                  "Element_mgn": "поручни на имеющейся лестнице",
                  "available_degree": "частично",
                  "available_index": "есть"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5363258,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "входная группа",
                  "Element_mgn": "ширина входной двери",
                  "available_degree": "частично",
                  "available_index": "соответствует"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5366756,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "пути движения и эвакуации",
                  "Element_mgn": "платформа подъемная (мобильный лестничный подъемник)",
                  "available_degree": "частично",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5367036,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "зона оказания услуги",
                  "Element_mgn": "ширина дверей в кабинеты",
                  "available_degree": "частично",
                  "available_index": "соответствует"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5367581,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "санитарный узел",
                  "Element_mgn": "ширина двери",
                  "available_degree": "полностью",
                  "available_index": "соответствует"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5367885,
                  "Group_mgn": "инвалиды по зрению",
                  "Area_mgn": "входная группа",
                  "Element_mgn": "тактильная полоса перед входной лестницей",
                  "available_degree": "частично",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5370177,
                  "Group_mgn": "инвалиды по слуху",
                  "Area_mgn": "зона оказания услуги",
                  "Element_mgn": "места для инвалидов по слуху в зале",
                  "available_degree": "частично",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5373577,
                  "Group_mgn": "инвалиды-опорники",
                  "Area_mgn": "пути движения и эвакуации",
                  "Element_mgn": "ширина полосы движения",
                  "available_degree": "частично",
                  "available_index": "соответствует"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5373836,
                  "Group_mgn": "инвалиды-опорники",
                  "Area_mgn": "зона оказания услуги",
                  "Element_mgn": "ширина полосы движения (при обслуживании с перемещением)",
                  "available_degree": "полностью",
                  "available_index": "не соответствует"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5374515,
                  "Group_mgn": "инвалиды-опорники",
                  "Area_mgn": "пути движения и эвакуации",
                  "Element_mgn": "поручни на имеющейся лестнице",
                  "available_degree": "частично",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5374516,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "зона оказания услуги",
                  "Element_mgn": "ширина полосы движения (при обслуживании с перемещением)",
                  "available_degree": "частично",
                  "available_index": "не соответствует"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5375057,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "пути движения и эвакуации",
                  "Element_mgn": "лестницы на пути движения",
                  "available_degree": "частично",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5375805,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "санитарный узел",
                  "Element_mgn": "зона у раковины для кресла-коляски",
                  "available_degree": "полностью",
                  "available_index": "есть"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5375906,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "входная группа",
                  "Element_mgn": "нулевой вход",
                  "available_degree": "частично",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5381451,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "пути движения и эвакуации",
                  "Element_mgn": "пандус с поручнями и его уклон",
                  "available_degree": "частично",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5381452,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "санитарный узел",
                  "Element_mgn": "зона рядом с унитазом",
                  "available_degree": "полностью",
                  "available_index": "есть"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5384294,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "входная группа",
                  "Element_mgn": "пандус с поручнями и его уклон",
                  "available_degree": "частично",
                  "available_index": "соответствует"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5384750,
                  "Group_mgn": "инвалиды по зрению",
                  "Area_mgn": "входная группа",
                  "Element_mgn": "нулевой вход",
                  "available_degree": "частично",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5387447,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "пути движения и эвакуации",
                  "Element_mgn": "ширина полосы движения",
                  "available_degree": "частично",
                  "available_index": "не соответствует"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5390631,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "зона оказания услуги",
                  "Element_mgn": "обслуживание через окно/прилавок",
                  "available_degree": "частично",
                  "available_index": "не соответствует"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5390705,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "санитарный узел",
                  "Element_mgn": "габариты кабины",
                  "available_degree": "полностью",
                  "available_index": "не соответствует"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5392273,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "входная группа",
                  "Element_mgn": "информационные указатели",
                  "available_degree": "частично",
                  "available_index": "есть"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5392274,
                  "Group_mgn": "инвалиды-опорники",
                  "Area_mgn": "входная группа",
                  "Element_mgn": "нулевой вход",
                  "available_degree": "частично",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5392581,
                  "Group_mgn": "инвалиды-опорники",
                  "Area_mgn": "санитарный узел",
                  "Element_mgn": "поручень у раковины",
                  "available_degree": "частично",
                  "available_index": "не соответствует"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5392825,
                  "Group_mgn": "инвалиды по зрению",
                  "Area_mgn": "входная группа",
                  "Element_mgn": "поручни на имеющейся лестнице",
                  "available_degree": "частично",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5395365,
                  "Group_mgn": "инвалиды по зрению",
                  "Area_mgn": "пути движения и эвакуации",
                  "Element_mgn": "поручни на имеющейся лестнице",
                  "available_degree": "частично",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5399176,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "зона оказания услуги",
                  "Element_mgn": "места для инвалидов-колясочников в зале",
                  "available_degree": "частично",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5401102,
                  "Group_mgn": "инвалиды по зрению",
                  "Area_mgn": "зона оказания услуги",
                  "Element_mgn": "тактильные средства информации",
                  "available_degree": "недоступно",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5402420,
                  "Group_mgn": "инвалиды-опорники",
                  "Area_mgn": "зона оказания услуги",
                  "Element_mgn": "габариты зоны сидения (глубина)",
                  "available_degree": "полностью",
                  "available_index": "соответствует"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5402421,
                  "Group_mgn": "инвалиды по слуху",
                  "Area_mgn": "зона оказания услуги",
                  "Element_mgn": "визуальные средства информации о предоставлении услуги",
                  "available_degree": "частично",
                  "available_index": "есть"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5405222,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "входная группа",
                  "Element_mgn": "платформа подъемная (мобильный лестничный подъемник)",
                  "available_degree": "частично",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5407804,
                  "Group_mgn": "инвалиды по слуху",
                  "Area_mgn": "пути движения и эвакуации",
                  "Element_mgn": "наличие указателей, пиктограмм",
                  "available_degree": "частично",
                  "available_index": "есть"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5408519,
                  "Group_mgn": "инвалиды по слуху",
                  "Area_mgn": "пути движения и эвакуации",
                  "Element_mgn": "наличие надписей",
                  "available_degree": "частично",
                  "available_index": "есть"
                }
              ]
            }
          ],
          "global_id": 265178
        }
      ],
      "ChiefOrg": "Департамент культуры города Москвы",
      "ChiefName": "Новикова Людмила Юрьевна",
      "ChiefPosition": "заведующий",
      "PublicPhone": [
        {
          "is_deleted": 0,
          "PublicPhone": "(495) 302-22-22",
          "global_id": 199957
        }
      ],
      "Fax": [],
      "Email": [
        {
          "is_deleted": 0,
          "Email": "biblioteka96@culture.mos.ru",
          "global_id": 147923
        }
      ],
      "WorkingHours": [
        {
          "is_deleted": 0,
          "DayWeek": "понедельник",
          "WorkHours": "12:00-22:00",
          "global_id": 999557
        },
        {
          "is_deleted": 0,
          "DayWeek": "вторник",
          "WorkHours": "12:00-22:00",
          "global_id": 1002255
        },
        {
          "is_deleted": 0,
          "DayWeek": "среда",
          "WorkHours": "12:00-20:00",
          "global_id": 1003633
        },
        {
          "is_deleted": 0,
          "DayWeek": "четверг",
          "WorkHours": "12:00-22:00",
          "global_id": 998711
        },
        {
          "is_deleted": 0,
          "DayWeek": "пятница",
          "WorkHours": "12:00-22:00",
          "global_id": 1002581
        },
        {
          "is_deleted": 0,
          "DayWeek": "суббота",
          "WorkHours": "12:00-22:00",
          "global_id": 998799
        },
        {
          "is_deleted": 0,
          "DayWeek": "воскресенье",
          "WorkHours": "выходной",
          "global_id": 998268
        }
      ],
      "ClarificationOfWorkingHours": "Санитарный день - последний вторник месяца.",
      "WebSite": "kulturavao.ru",
      "NumOfSeats": 4,
      "NumOfReaders": 761,
      "NumOfVisitors": 7309,
      "global_id": 2639269559,
      "geoData": {
        "coordinates": [
          [
            37.815729808,
            55.749848985
          ]
        ],
        "type": "MultiPoint"
      },
      "geodata_center": null
    },
    {
      "is_deleted": 0,
      "Category": "Библиотека",
      "CommonName": "Библиотека № 102",
      "FullName": "Государственное бюджетное учреждение культуры города Москвы «Объединение культурных центров Восточного административного округа». Библиотека № 102",
      "ShortName": "ГБУК г. Москвы «ОКЦ ВАО». Библиотека № 102",
      "OrgInfo": [
        {
          "is_deleted": 0,
          "ChiefPhone": [
            {
              "is_deleted": 0,
              "global_id": 153362,
              "ChiefPhone": "(499) 162-97-57"
            }
          ],
          "FullName": "Государственное бюджетное учреждение культуры города Москвы «Объединение культурных центров Восточного административного округа»",
          "INN": "7718106782",
          "KPP": "771801001",
          "OGRN": "1037739145751",
          "LegalAddress": "107392, город Москва, улица Халтуринская, дом 18",
          "ChiefName": "Худайбердин Дамир Шамилевич",
          "ChiefPosition": "исполняющий обязанности генерального директора",
          "global_id": 139206
        }
      ],
      "ObjectAddress": [
        {
          "is_deleted": 0,
          "AdmArea": "Восточный административный округ",
          "District": "район Перово",
          "PostalCode": "111398",
          "Address": "Российская Федерация, город Москва, внутригородская территория муниципальный округ Перово, улица Плеханова, дом 26, корпус 4",
          "Availability": [
            {
              "is_deleted": 0,
              "global_id": 136407,
              "available_k": "недоступно",
              "available_o": "частично",
              "available_z": "частично",
              "available_s": "частично",
              "available_element": [
                {
                  "is_deleted": 0,
                  "global_id": 5354155,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "санитарный узел",
                  "Element_mgn": "габариты кабины",
                  "available_degree": "недоступно",
                  "available_index": "не соответствует"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5355014,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "санитарный узел",
                  "Element_mgn": "зона у раковины для кресла-коляски",
                  "available_degree": "недоступно",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5355210,
                  "Group_mgn": "инвалиды по зрению",
                  "Area_mgn": "входная группа",
                  "Element_mgn": "нулевой вход",
                  "available_degree": "частично",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5355211,
                  "Group_mgn": "инвалиды по зрению",
                  "Area_mgn": "пути движения и эвакуации",
                  "Element_mgn": "поручни на имеющейся лестнице",
                  "available_degree": "частично",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5358064,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "пути движения и эвакуации",
                  "Element_mgn": "ширина полосы движения",
                  "available_degree": "недоступно",
                  "available_index": "не соответствует"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5362041,
                  "Group_mgn": "инвалиды-опорники",
                  "Area_mgn": "входная группа",
                  "Element_mgn": "нулевой вход",
                  "available_degree": "частично",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5363159,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "входная группа",
                  "Element_mgn": "пандус с поручнями и его уклон",
                  "available_degree": "недоступно",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5363160,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "пути движения и эвакуации",
                  "Element_mgn": "лестницы на пути движения",
                  "available_degree": "недоступно",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5364377,
                  "Group_mgn": "инвалиды-опорники",
                  "Area_mgn": "входная группа",
                  "Element_mgn": "поручни на имеющейся лестнице",
                  "available_degree": "частично",
                  "available_index": "есть"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5364929,
                  "Group_mgn": "инвалиды по зрению",
                  "Area_mgn": "входная группа",
                  "Element_mgn": "тактильная полоса перед входной лестницей",
                  "available_degree": "частично",
                  "available_index": "есть"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5366162,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "санитарный узел",
                  "Element_mgn": "зона рядом с унитазом",
                  "available_degree": "недоступно",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5368248,
                  "Group_mgn": "инвалиды по зрению",
                  "Area_mgn": "пути движения и эвакуации",
                  "Element_mgn": "контрастная маркировка ступеней",
                  "available_degree": "частично",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5370338,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "санитарный узел",
                  "Element_mgn": "ширина двери",
                  "available_degree": "недоступно",
                  "available_index": "не соответствует"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5373498,
                  "Group_mgn": "инвалиды по зрению",
                  "Area_mgn": "входная группа",
                  "Element_mgn": "поручни на имеющейся лестнице",
                  "available_degree": "частично",
                  "available_index": "есть"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5378778,
                  "Group_mgn": "инвалиды-опорники",
                  "Area_mgn": "зона оказания услуги",
                  "Element_mgn": "габариты зоны сидения (глубина)",
                  "available_degree": "частично",
                  "available_index": "соответствует"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5378779,
                  "Group_mgn": "инвалиды-опорники",
                  "Area_mgn": "санитарный узел",
                  "Element_mgn": "поручни у унитаза",
                  "available_degree": "недоступно",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5383795,
                  "Group_mgn": "инвалиды по слуху",
                  "Area_mgn": "зона оказания услуги",
                  "Element_mgn": "визуальные средства информации о предоставлении услуги",
                  "available_degree": "частично",
                  "available_index": "есть"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5385901,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "входная группа",
                  "Element_mgn": "нулевой вход",
                  "available_degree": "недоступно",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5389652,
                  "Group_mgn": "инвалиды-опорники",
                  "Area_mgn": "пути движения и эвакуации",
                  "Element_mgn": "поручни на имеющейся лестнице",
                  "available_degree": "частично",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5389653,
                  "Group_mgn": "инвалиды по слуху",
                  "Area_mgn": "пути движения и эвакуации",
                  "Element_mgn": "наличие надписей",
                  "available_degree": "частично",
                  "available_index": "есть"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5389715,
                  "Group_mgn": "инвалиды по слуху",
                  "Area_mgn": "пути движения и эвакуации",
                  "Element_mgn": "наличие указателей, пиктограмм",
                  "available_degree": "частично",
                  "available_index": "есть"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5391342,
                  "Group_mgn": "инвалиды по зрению",
                  "Area_mgn": "зона оказания услуги",
                  "Element_mgn": "тактильные средства информации",
                  "available_degree": "недоступно",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5391541,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "входная группа",
                  "Element_mgn": "ширина входной двери",
                  "available_degree": "недоступно",
                  "available_index": "не соответствует"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5391830,
                  "Group_mgn": "инвалиды-опорники",
                  "Area_mgn": "зона оказания услуги",
                  "Element_mgn": "ширина полосы движения (при обслуживании с перемещением)",
                  "available_degree": "частично",
                  "available_index": "соответствует"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5392714,
                  "Group_mgn": "инвалиды-опорники",
                  "Area_mgn": "санитарный узел",
                  "Element_mgn": "поручень у раковины",
                  "available_degree": "недоступно",
                  "available_index": "не соответствует"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5393928,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "пути движения и эвакуации",
                  "Element_mgn": "платформа подъемная (мобильный лестничный подъемник)",
                  "available_degree": "недоступно",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5393929,
                  "Group_mgn": "инвалиды по слуху",
                  "Area_mgn": "зона оказания услуги",
                  "Element_mgn": "места для инвалидов по слуху в зале",
                  "available_degree": "частично",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5395169,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "зона оказания услуги",
                  "Element_mgn": "ширина дверей в кабинеты",
                  "available_degree": "недоступно",
                  "available_index": "не соответствует"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5398527,
                  "Group_mgn": "инвалиды по зрению",
                  "Area_mgn": "пути движения и эвакуации",
                  "Element_mgn": "лестницы на пути движения",
                  "available_degree": "частично",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5400236,
                  "Group_mgn": "инвалиды-опорники",
                  "Area_mgn": "пути движения и эвакуации",
                  "Element_mgn": "лестницы на пути движения",
                  "available_degree": "частично",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5400237,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "зона оказания услуги",
                  "Element_mgn": "ширина полосы движения (при обслуживании с перемещением)",
                  "available_degree": "недоступно",
                  "available_index": "не соответствует"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5400708,
                  "Group_mgn": "инвалиды-опорники",
                  "Area_mgn": "пути движения и эвакуации",
                  "Element_mgn": "ширина полосы движения",
                  "available_degree": "частично",
                  "available_index": "соответствует"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5405057,
                  "Group_mgn": "инвалиды-опорники",
                  "Area_mgn": "пути движения и эвакуации",
                  "Element_mgn": "лифт",
                  "available_degree": "частично",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5405058,
                  "Group_mgn": "инвалиды по зрению",
                  "Area_mgn": "санитарный узел",
                  "Element_mgn": "тактильное обозначение санузла",
                  "available_degree": "недоступно",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5406376,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "пути движения и эвакуации",
                  "Element_mgn": "пандус с поручнями и его уклон",
                  "available_degree": "недоступно",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5407127,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "входная группа",
                  "Element_mgn": "платформа подъемная (мобильный лестничный подъемник)",
                  "available_degree": "недоступно",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5407583,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "пути движения и эвакуации",
                  "Element_mgn": "лифт",
                  "available_degree": "недоступно",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5407584,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "зона оказания услуги",
                  "Element_mgn": "места для инвалидов-колясочников в зале",
                  "available_degree": "недоступно",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5408730,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "входная группа",
                  "Element_mgn": "информационные указатели",
                  "available_degree": "недоступно",
                  "available_index": "нет"
                }
              ]
            }
          ],
          "global_id": 263809
        }
      ],
      "ChiefOrg": "Департамент культуры города Москвы",
      "ChiefName": "Амелина Елена Сергеевна",
      "ChiefPosition": "заведующий",
      "PublicPhone": [
        {
          "is_deleted": 0,
          "PublicPhone": "(495) 309-07-39",
          "global_id": 200047
        }
      ],
      "Fax": [],
      "Email": [
        {
          "is_deleted": 0,
          "Email": "biblioteka102@culture.mos.ru",
          "global_id": 147523
        }
      ],
      "WorkingHours": [
        {
          "is_deleted": 0,
          "DayWeek": "понедельник",
          "WorkHours": "12:00-22:00",
          "global_id": 1001012
        },
        {
          "is_deleted": 0,
          "DayWeek": "вторник",
          "WorkHours": "12:00-20:00",
          "global_id": 1001200
        },
        {
          "is_deleted": 0,
          "DayWeek": "среда",
          "WorkHours": "12:00-22:00",
          "global_id": 998475
        },
        {
          "is_deleted": 0,
          "DayWeek": "четверг",
          "WorkHours": "12:00-22:00",
          "global_id": 998873
        },
        {
          "is_deleted": 0,
          "DayWeek": "пятница",
          "WorkHours": "12:00-22:00",
          "global_id": 1001537
        },
        {
          "is_deleted": 0,
          "DayWeek": "суббота",
          "WorkHours": "12:00-22:00",
          "global_id": 999915
        },
        {
          "is_deleted": 0,
          "DayWeek": "воскресенье",
          "WorkHours": "выходной",
          "global_id": 998364
        }
      ],
      "ClarificationOfWorkingHours": "Санитарный день - последний вторник месяца.",
      "WebSite": "kulturavao.ru",
      "NumOfSeats": 30,
      "NumOfReaders": 879,
      "NumOfVisitors": 15138,
      "global_id": 2639269560,
      "geoData": {
        "coordinates": [
          [
            37.768016249,
            55.740506974
          ]
        ],
        "type": "MultiPoint"
      },
      "geodata_center": null
    },
    {
      "is_deleted": 0,
      "Category": "Библиотека",
      "CommonName": "Библиотека №44 им. В.Г. Короленко",
      "FullName": "Государственное бюджетное учреждение культуры города Москвы «Объединение культурных центров Северного административного округа», Библиотека №44 им. В.Г. Короленко",
      "ShortName": "ГБУК г. Москвы «ОКЦ САО», Библиотека №44 им. В.Г. Короленко",
      "OrgInfo": [
        {
          "is_deleted": 0,
          "ChiefPhone": [
            {
              "is_deleted": 0,
              "global_id": 153219,
              "ChiefPhone": "(495) 450-68-00"
            }
          ],
          "FullName": "Государственное бюджетное учреждение культуры города Москвы «Объединение культурных центров Северного административного округа»",
          "INN": "7743842112",
          "KPP": "774301001",
          "OGRN": "1127746035394",
          "LegalAddress": "127299, город Москва, улица Клары Цеткин, дом 11, корпус 2",
          "ChiefName": "Ильина Александра Валерьевна",
          "ChiefPosition": "генеральный директор",
          "global_id": 139784
        }
      ],
      "ObjectAddress": [
        {
          "is_deleted": 0,
          "AdmArea": "Северный административный округ",
          "District": "Головинский район",
          "PostalCode": "125493",
          "Address": "Российская Федерация, город Москва, внутригородская территория муниципальный округ Головинский, Смольная улица, дом 11",
          "Availability": [
            {
              "is_deleted": 0,
              "global_id": 136259,
              "available_k": "частично",
              "available_o": "частично",
              "available_z": "частично",
              "available_s": "полностью",
              "available_element": [
                {
                  "is_deleted": 0,
                  "global_id": 5353463,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "зона оказания услуги",
                  "Element_mgn": "ширина полосы движения (при обслуживании с перемещением)",
                  "available_degree": "полностью",
                  "available_index": "соответствует"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5353624,
                  "Group_mgn": "инвалиды по зрению",
                  "Area_mgn": "зона оказания услуги",
                  "Element_mgn": "тактильные средства информации",
                  "available_degree": "полностью",
                  "available_index": "есть"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5358232,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "территория объекта",
                  "Element_mgn": "информационные указатели",
                  "available_degree": "частично",
                  "available_index": "есть"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5358373,
                  "Group_mgn": "инвалиды-опорники",
                  "Area_mgn": "зона оказания услуги",
                  "Element_mgn": "ширина полосы движения (при обслуживании с перемещением)",
                  "available_degree": "полностью",
                  "available_index": "соответствует"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5359450,
                  "Group_mgn": "инвалиды по слуху",
                  "Area_mgn": "пути движения и эвакуации",
                  "Element_mgn": "наличие указателей, пиктограмм",
                  "available_degree": "полностью",
                  "available_index": "есть"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5360895,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "территория объекта",
                  "Element_mgn": "машино-место для инвалидов",
                  "available_degree": "частично",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5361666,
                  "Group_mgn": "инвалиды-опорники",
                  "Area_mgn": "пути движения и эвакуации",
                  "Element_mgn": "ширина полосы движения",
                  "available_degree": "частично",
                  "available_index": "соответствует"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5363336,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "санитарный узел",
                  "Element_mgn": "габариты кабины",
                  "available_degree": "полностью",
                  "available_index": "соответствует"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5365894,
                  "Group_mgn": "инвалиды-опорники",
                  "Area_mgn": "пути движения и эвакуации",
                  "Element_mgn": "лестницы на пути движения",
                  "available_degree": "частично",
                  "available_index": "есть"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5365895,
                  "Group_mgn": "инвалиды по зрению",
                  "Area_mgn": "санитарный узел",
                  "Element_mgn": "тактильное обозначение санузла",
                  "available_degree": "полностью",
                  "available_index": "есть"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5368214,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "пути движения и эвакуации",
                  "Element_mgn": "лифт",
                  "available_degree": "частично",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5368215,
                  "Group_mgn": "инвалиды-опорники",
                  "Area_mgn": "пути движения и эвакуации",
                  "Element_mgn": "лифт",
                  "available_degree": "частично",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5368478,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "пути движения и эвакуации",
                  "Element_mgn": "ширина полосы движения",
                  "available_degree": "частично",
                  "available_index": "соответствует"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5369974,
                  "Group_mgn": "инвалиды по зрению",
                  "Area_mgn": "пути движения и эвакуации",
                  "Element_mgn": "лестницы на пути движения",
                  "available_degree": "частично",
                  "available_index": "есть"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5370952,
                  "Group_mgn": "инвалиды по слуху",
                  "Area_mgn": "пути движения и эвакуации",
                  "Element_mgn": "наличие надписей",
                  "available_degree": "полностью",
                  "available_index": "есть"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5373003,
                  "Group_mgn": "инвалиды-опорники",
                  "Area_mgn": "территория объекта",
                  "Element_mgn": "поручни на имеющейся лестнице",
                  "available_degree": "частично",
                  "available_index": "есть"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5374823,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "санитарный узел",
                  "Element_mgn": "зона рядом с унитазом",
                  "available_degree": "полностью",
                  "available_index": "есть"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5375286,
                  "Group_mgn": "инвалиды по зрению",
                  "Area_mgn": "территория объекта",
                  "Element_mgn": "безбарьерный путь до главного входа",
                  "available_degree": "частично",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5377182,
                  "Group_mgn": "инвалиды по зрению",
                  "Area_mgn": "пути движения и эвакуации",
                  "Element_mgn": "поручни на имеющейся лестнице",
                  "available_degree": "частично",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5378588,
                  "Group_mgn": "инвалиды-опорники",
                  "Area_mgn": "территория объекта",
                  "Element_mgn": "безбарьерный путь до главного входа",
                  "available_degree": "частично",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5378589,
                  "Group_mgn": "инвалиды по зрению",
                  "Area_mgn": "пути движения и эвакуации",
                  "Element_mgn": "контрастная маркировка ступеней",
                  "available_degree": "частично",
                  "available_index": "есть"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5382679,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "входная группа",
                  "Element_mgn": "пандус с поручнями и его уклон",
                  "available_degree": "частично",
                  "available_index": "соответствует"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5383679,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "территория объекта",
                  "Element_mgn": "машино-место для инвалидов",
                  "available_degree": "частично",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5383680,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "территория объекта",
                  "Element_mgn": "безбарьерный путь до главного входа",
                  "available_degree": "частично",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5383917,
                  "Group_mgn": "инвалиды по слуху",
                  "Area_mgn": "зона оказания услуги",
                  "Element_mgn": "визуальные средства информации о предоставлении услуги",
                  "available_degree": "полностью",
                  "available_index": "есть"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5389359,
                  "Group_mgn": "инвалиды по зрению",
                  "Area_mgn": "территория объекта",
                  "Element_mgn": "тактильная полоса перед лестницей",
                  "available_degree": "частично",
                  "available_index": "есть"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5389360,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "пути движения и эвакуации",
                  "Element_mgn": "пандус с поручнями и его уклон",
                  "available_degree": "частично",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5390768,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "пути движения и эвакуации",
                  "Element_mgn": "платформа подъемная (мобильный лестничный подъемник)",
                  "available_degree": "частично",
                  "available_index": "есть"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5390967,
                  "Group_mgn": "инвалиды по слуху",
                  "Area_mgn": "зона оказания услуги",
                  "Element_mgn": "места для инвалидов по слуху в зале",
                  "available_degree": "полностью",
                  "available_index": "есть"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5391175,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "санитарный узел",
                  "Element_mgn": "ширина двери",
                  "available_degree": "полностью",
                  "available_index": "соответствует"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5391176,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "санитарный узел",
                  "Element_mgn": "зона у раковины для кресла-коляски",
                  "available_degree": "полностью",
                  "available_index": "есть"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5392654,
                  "Group_mgn": "инвалиды по слуху",
                  "Area_mgn": "территория объекта",
                  "Element_mgn": "указатели направления движения",
                  "available_degree": "полностью",
                  "available_index": "есть"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5392655,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "входная группа",
                  "Element_mgn": "нулевой вход",
                  "available_degree": "частично",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5393199,
                  "Group_mgn": "инвалиды-опорники",
                  "Area_mgn": "территория объекта",
                  "Element_mgn": "машино-место для инвалидов",
                  "available_degree": "частично",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5398806,
                  "Group_mgn": "инвалиды-опорники",
                  "Area_mgn": "санитарный узел",
                  "Element_mgn": "поручни у унитаза",
                  "available_degree": "полностью",
                  "available_index": "есть"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5398931,
                  "Group_mgn": "инвалиды по зрению",
                  "Area_mgn": "входная группа",
                  "Element_mgn": "нулевой вход",
                  "available_degree": "частично",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5399594,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "входная группа",
                  "Element_mgn": "информационные указатели",
                  "available_degree": "частично",
                  "available_index": "есть"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5399595,
                  "Group_mgn": "инвалиды по зрению",
                  "Area_mgn": "входная группа",
                  "Element_mgn": "поручни на имеющейся лестнице",
                  "available_degree": "частично",
                  "available_index": "есть"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5401952,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "пути движения и эвакуации",
                  "Element_mgn": "лестницы на пути движения",
                  "available_degree": "частично",
                  "available_index": "есть"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5402363,
                  "Group_mgn": "инвалиды-опорники",
                  "Area_mgn": "зона оказания услуги",
                  "Element_mgn": "габариты зоны сидения (глубина)",
                  "available_degree": "полностью",
                  "available_index": "соответствует"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5404024,
                  "Group_mgn": "инвалиды-опорники",
                  "Area_mgn": "пути движения и эвакуации",
                  "Element_mgn": "поручни на имеющейся лестнице",
                  "available_degree": "частично",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5404025,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "зона оказания услуги",
                  "Element_mgn": "ширина дверей в кабинеты",
                  "available_degree": "полностью",
                  "available_index": "соответствует"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5406002,
                  "Group_mgn": "инвалиды по зрению",
                  "Area_mgn": "входная группа",
                  "Element_mgn": "тактильная полоса перед входной лестницей",
                  "available_degree": "частично",
                  "available_index": "есть"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5406505,
                  "Group_mgn": "инвалиды-опорники",
                  "Area_mgn": "входная группа",
                  "Element_mgn": "нулевой вход",
                  "available_degree": "частично",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5408157,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "входная группа",
                  "Element_mgn": "платформа подъемная (мобильный лестничный подъемник)",
                  "available_degree": "частично",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5408299,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "входная группа",
                  "Element_mgn": "ширина входной двери",
                  "available_degree": "частично",
                  "available_index": "соответствует"
                }
              ]
            }
          ],
          "global_id": 263315
        },
        {
          "is_deleted": 0,
          "AdmArea": "Северный административный округ",
          "District": "Головинский район",
          "PostalCode": "125413",
          "Address": "Российская Федерация, город Москва, внутригородская территория муниципальный округ Головинский, Фестивальная улица, дом 46, корпус 1",
          "Availability": [
            {
              "is_deleted": 0,
              "global_id": 136051,
              "available_k": "частично",
              "available_o": "частично",
              "available_z": "полностью",
              "available_s": "полностью",
              "available_element": [
                {
                  "is_deleted": 0,
                  "global_id": 5348637,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "пути движения и эвакуации",
                  "Element_mgn": "лестницы на пути движения",
                  "available_degree": "частично",
                  "available_index": "есть"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5349471,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "санитарный узел",
                  "Element_mgn": "ширина двери",
                  "available_degree": "полностью",
                  "available_index": "соответствует"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5353082,
                  "Group_mgn": "инвалиды-опорники",
                  "Area_mgn": "территория объекта",
                  "Element_mgn": "машино-место для инвалидов",
                  "available_degree": "частично",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5353866,
                  "Group_mgn": "инвалиды по слуху",
                  "Area_mgn": "зона оказания услуги",
                  "Element_mgn": "визуальные средства информации о предоставлении услуги",
                  "available_degree": "полностью",
                  "available_index": "есть"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5356362,
                  "Group_mgn": "инвалиды по зрению",
                  "Area_mgn": "санитарный узел",
                  "Element_mgn": "тактильное обозначение санузла",
                  "available_degree": "полностью",
                  "available_index": "есть"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5356957,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "территория объекта",
                  "Element_mgn": "безбарьерный путь до главного входа",
                  "available_degree": "частично",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5357068,
                  "Group_mgn": "инвалиды-опорники",
                  "Area_mgn": "пути движения и эвакуации",
                  "Element_mgn": "ширина полосы движения",
                  "available_degree": "частично",
                  "available_index": "соответствует"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5360794,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "санитарный узел",
                  "Element_mgn": "зона рядом с унитазом",
                  "available_degree": "полностью",
                  "available_index": "есть"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5363184,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "входная группа",
                  "Element_mgn": "нулевой вход",
                  "available_degree": "частично",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5363430,
                  "Group_mgn": "инвалиды по зрению",
                  "Area_mgn": "входная группа",
                  "Element_mgn": "поручни на имеющейся лестнице",
                  "available_degree": "полностью",
                  "available_index": "есть"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5364607,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "пути движения и эвакуации",
                  "Element_mgn": "пандус с поручнями и его уклон",
                  "available_degree": "частично",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5365633,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "входная группа",
                  "Element_mgn": "пандус с поручнями и его уклон",
                  "available_degree": "частично",
                  "available_index": "соответствует"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5367242,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "территория объекта",
                  "Element_mgn": "машино-место для инвалидов",
                  "available_degree": "частично",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5367243,
                  "Group_mgn": "инвалиды-опорники",
                  "Area_mgn": "санитарный узел",
                  "Element_mgn": "поручень у раковины",
                  "available_degree": "полностью",
                  "available_index": "есть"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5367855,
                  "Group_mgn": "инвалиды по слуху",
                  "Area_mgn": "территория объекта",
                  "Element_mgn": "указатели направления движения",
                  "available_degree": "полностью",
                  "available_index": "есть"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5372764,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "пути движения и эвакуации",
                  "Element_mgn": "лифт",
                  "available_degree": "частично",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5372765,
                  "Group_mgn": "инвалиды-опорники",
                  "Area_mgn": "зона оказания услуги",
                  "Element_mgn": "ширина полосы движения (при обслуживании с перемещением)",
                  "available_degree": "полностью",
                  "available_index": "соответствует"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5374444,
                  "Group_mgn": "инвалиды по зрению",
                  "Area_mgn": "территория объекта",
                  "Element_mgn": "безбарьерный путь до главного входа",
                  "available_degree": "полностью",
                  "available_index": "есть"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5374445,
                  "Group_mgn": "инвалиды-опорники",
                  "Area_mgn": "входная группа",
                  "Element_mgn": "поручни на имеющейся лестнице",
                  "available_degree": "частично",
                  "available_index": "есть"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5374754,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "входная группа",
                  "Element_mgn": "платформа подъемная (мобильный лестничный подъемник)",
                  "available_degree": "частично",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5374946,
                  "Group_mgn": "инвалиды по зрению",
                  "Area_mgn": "пути движения и эвакуации",
                  "Element_mgn": "лестницы на пути движения",
                  "available_degree": "полностью",
                  "available_index": "есть"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5375742,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "санитарный узел",
                  "Element_mgn": "зона у раковины для кресла-коляски",
                  "available_degree": "полностью",
                  "available_index": "есть"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5377782,
                  "Group_mgn": "инвалиды-опорники",
                  "Area_mgn": "входная группа",
                  "Element_mgn": "нулевой вход",
                  "available_degree": "частично",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5377946,
                  "Group_mgn": "инвалиды по зрению",
                  "Area_mgn": "территория объекта",
                  "Element_mgn": "поручни на имеющейся лестнице",
                  "available_degree": "полностью",
                  "available_index": "есть"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5377947,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "пути движения и эвакуации",
                  "Element_mgn": "платформа подъемная (мобильный лестничный подъемник)",
                  "available_degree": "частично",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5383568,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "входная группа",
                  "Element_mgn": "ширина входной двери",
                  "available_degree": "частично",
                  "available_index": "соответствует"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5384280,
                  "Group_mgn": "инвалиды-опорники",
                  "Area_mgn": "пути движения и эвакуации",
                  "Element_mgn": "поручни на имеющейся лестнице",
                  "available_degree": "частично",
                  "available_index": "есть"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5384733,
                  "Group_mgn": "инвалиды по зрению",
                  "Area_mgn": "входная группа",
                  "Element_mgn": "нулевой вход",
                  "available_degree": "полностью",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5385477,
                  "Group_mgn": "инвалиды-опорники",
                  "Area_mgn": "пути движения и эвакуации",
                  "Element_mgn": "лестницы на пути движения",
                  "available_degree": "частично",
                  "available_index": "есть"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5388177,
                  "Group_mgn": "инвалиды по слуху",
                  "Area_mgn": "пути движения и эвакуации",
                  "Element_mgn": "наличие надписей",
                  "available_degree": "полностью",
                  "available_index": "есть"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5390379,
                  "Group_mgn": "инвалиды-опорники",
                  "Area_mgn": "зона оказания услуги",
                  "Element_mgn": "габариты зоны сидения (глубина)",
                  "available_degree": "полностью",
                  "available_index": "соответствует"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5390380,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "санитарный узел",
                  "Element_mgn": "габариты кабины",
                  "available_degree": "полностью",
                  "available_index": "соответствует"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5390477,
                  "Group_mgn": "инвалиды по слуху",
                  "Area_mgn": "зона оказания услуги",
                  "Element_mgn": "места для инвалидов по слуху в зале",
                  "available_degree": "полностью",
                  "available_index": "есть"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5392764,
                  "Group_mgn": "инвалиды по слуху",
                  "Area_mgn": "пути движения и эвакуации",
                  "Element_mgn": "наличие указателей, пиктограмм",
                  "available_degree": "полностью",
                  "available_index": "есть"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5394645,
                  "Group_mgn": "инвалиды по зрению",
                  "Area_mgn": "входная группа",
                  "Element_mgn": "тактильная полоса перед входной лестницей",
                  "available_degree": "полностью",
                  "available_index": "есть"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5394646,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "пути движения и эвакуации",
                  "Element_mgn": "ширина полосы движения",
                  "available_degree": "частично",
                  "available_index": "соответствует"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5394647,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "зона оказания услуги",
                  "Element_mgn": "ширина дверей в кабинеты",
                  "available_degree": "полностью",
                  "available_index": "соответствует"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5394893,
                  "Group_mgn": "инвалиды по зрению",
                  "Area_mgn": "зона оказания услуги",
                  "Element_mgn": "тактильные средства информации",
                  "available_degree": "полностью",
                  "available_index": "есть"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5397767,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "входная группа",
                  "Element_mgn": "информационные указатели",
                  "available_degree": "частично",
                  "available_index": "есть"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5398465,
                  "Group_mgn": "инвалиды по зрению",
                  "Area_mgn": "пути движения и эвакуации",
                  "Element_mgn": "поручни на имеющейся лестнице",
                  "available_degree": "полностью",
                  "available_index": "есть"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5401321,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "зона оказания услуги",
                  "Element_mgn": "ширина полосы движения (при обслуживании с перемещением)",
                  "available_degree": "полностью",
                  "available_index": "соответствует"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5402103,
                  "Group_mgn": "инвалиды по зрению",
                  "Area_mgn": "пути движения и эвакуации",
                  "Element_mgn": "контрастная маркировка ступеней",
                  "available_degree": "полностью",
                  "available_index": "есть"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5404600,
                  "Group_mgn": "инвалиды-опорники",
                  "Area_mgn": "санитарный узел",
                  "Element_mgn": "поручни у унитаза",
                  "available_degree": "полностью",
                  "available_index": "есть"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5405164,
                  "Group_mgn": "инвалиды по зрению",
                  "Area_mgn": "территория объекта",
                  "Element_mgn": "тактильная полоса перед лестницей",
                  "available_degree": "полностью",
                  "available_index": "есть"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5406339,
                  "Group_mgn": "инвалиды-опорники",
                  "Area_mgn": "территория объекта",
                  "Element_mgn": "поручни на имеющейся лестнице",
                  "available_degree": "частично",
                  "available_index": "есть"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5407888,
                  "Group_mgn": "инвалиды-опорники",
                  "Area_mgn": "территория объекта",
                  "Element_mgn": "безбарьерный путь до главного входа",
                  "available_degree": "частично",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5408500,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "территория объекта",
                  "Element_mgn": "информационные указатели",
                  "available_degree": "частично",
                  "available_index": "есть"
                }
              ]
            }
          ],
          "global_id": 263880
        },
        {
          "is_deleted": 0,
          "AdmArea": "Северный административный округ",
          "District": "Головинский район",
          "PostalCode": "125438",
          "Address": "Российская Федерация, город Москва, внутригородская территория муниципальный округ Головинский, Онежская улица, дом 17, корпус 4",
          "Availability": [
            {
              "is_deleted": 0,
              "global_id": 136610,
              "available_k": "частично",
              "available_o": "частично",
              "available_z": "частично",
              "available_s": "частично",
              "available_element": [
                {
                  "is_deleted": 0,
                  "global_id": 5350002,
                  "Group_mgn": "инвалиды-опорники",
                  "Area_mgn": "пути движения и эвакуации",
                  "Element_mgn": "ширина полосы движения",
                  "available_degree": "частично",
                  "available_index": "соответствует"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5356361,
                  "Group_mgn": "инвалиды-опорники",
                  "Area_mgn": "пути движения и эвакуации",
                  "Element_mgn": "лестницы на пути движения",
                  "available_degree": "частично",
                  "available_index": "есть"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5356956,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "входная группа",
                  "Element_mgn": "ширина входной двери",
                  "available_degree": "частично",
                  "available_index": "соответствует"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5360793,
                  "Group_mgn": "инвалиды по зрению",
                  "Area_mgn": "входная группа",
                  "Element_mgn": "нулевой вход",
                  "available_degree": "частично",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5361013,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "пути движения и эвакуации",
                  "Element_mgn": "ширина полосы движения",
                  "available_degree": "частично",
                  "available_index": "соответствует"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5361014,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "пути движения и эвакуации",
                  "Element_mgn": "лестницы на пути движения",
                  "available_degree": "частично",
                  "available_index": "есть"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5363183,
                  "Group_mgn": "инвалиды-опорники",
                  "Area_mgn": "территория объекта",
                  "Element_mgn": "машино-место для инвалидов",
                  "available_degree": "частично",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5363429,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "санитарный узел",
                  "Element_mgn": "ширина двери",
                  "available_degree": "полностью",
                  "available_index": "соответствует"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5365631,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "входная группа",
                  "Element_mgn": "нулевой вход",
                  "available_degree": "частично",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5365632,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "зона оказания услуги",
                  "Element_mgn": "обслуживание через окно/прилавок",
                  "available_degree": "частично",
                  "available_index": "соответствует"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5367854,
                  "Group_mgn": "инвалиды по зрению",
                  "Area_mgn": "пути движения и эвакуации",
                  "Element_mgn": "контрастная маркировка ступеней",
                  "available_degree": "полностью",
                  "available_index": "есть"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5368711,
                  "Group_mgn": "инвалиды по зрению",
                  "Area_mgn": "территория объекта",
                  "Element_mgn": "поручни на имеющейся лестнице",
                  "available_degree": "частично",
                  "available_index": "есть"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5371511,
                  "Group_mgn": "инвалиды по слуху",
                  "Area_mgn": "территория объекта",
                  "Element_mgn": "указатели направления движения",
                  "available_degree": "полностью",
                  "available_index": "есть"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5375741,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "территория объекта",
                  "Element_mgn": "информационные указатели",
                  "available_degree": "частично",
                  "available_index": "есть"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5377781,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "санитарный узел",
                  "Element_mgn": "зона рядом с унитазом",
                  "available_degree": "полностью",
                  "available_index": "есть"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5381759,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "территория объекта",
                  "Element_mgn": "безбарьерный путь до главного входа",
                  "available_degree": "частично",
                  "available_index": "есть"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5383567,
                  "Group_mgn": "инвалиды-опорники",
                  "Area_mgn": "зона оказания услуги",
                  "Element_mgn": "габариты зоны сидения (глубина)",
                  "available_degree": "полностью",
                  "available_index": "соответствует"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5390378,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "территория объекта",
                  "Element_mgn": "машино-место для инвалидов",
                  "available_degree": "частично",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5390476,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "санитарный узел",
                  "Element_mgn": "зона у раковины для кресла-коляски",
                  "available_degree": "полностью",
                  "available_index": "есть"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5392237,
                  "Group_mgn": "инвалиды по зрению",
                  "Area_mgn": "зона оказания услуги",
                  "Element_mgn": "тактильные средства информации",
                  "available_degree": "полностью",
                  "available_index": "есть"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5392238,
                  "Group_mgn": "инвалиды-опорники",
                  "Area_mgn": "санитарный узел",
                  "Element_mgn": "поручни у унитаза",
                  "available_degree": "полностью",
                  "available_index": "есть"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5392763,
                  "Group_mgn": "инвалиды-опорники",
                  "Area_mgn": "входная группа",
                  "Element_mgn": "поручни на имеющейся лестнице",
                  "available_degree": "частично",
                  "available_index": "есть"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5394891,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "входная группа",
                  "Element_mgn": "информационные указатели",
                  "available_degree": "частично",
                  "available_index": "есть"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5394892,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "пути движения и эвакуации",
                  "Element_mgn": "платформа подъемная (мобильный лестничный подъемник)",
                  "available_degree": "частично",
                  "available_index": "есть"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5396497,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "входная группа",
                  "Element_mgn": "платформа подъемная (мобильный лестничный подъемник)",
                  "available_degree": "частично",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5397765,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "входная группа",
                  "Element_mgn": "пандус с поручнями и его уклон",
                  "available_degree": "частично",
                  "available_index": "соответствует"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5397766,
                  "Group_mgn": "инвалиды-опорники",
                  "Area_mgn": "пути движения и эвакуации",
                  "Element_mgn": "лифт",
                  "available_degree": "частично",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5398464,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "зона оказания услуги",
                  "Element_mgn": "ширина полосы движения (при обслуживании с перемещением)",
                  "available_degree": "частично",
                  "available_index": "соответствует"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5401317,
                  "Group_mgn": "инвалиды-опорники",
                  "Area_mgn": "территория объекта",
                  "Element_mgn": "безбарьерный путь до главного входа",
                  "available_degree": "частично",
                  "available_index": "есть"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5401318,
                  "Group_mgn": "инвалиды-опорники",
                  "Area_mgn": "пути движения и эвакуации",
                  "Element_mgn": "поручни на имеющейся лестнице",
                  "available_degree": "частично",
                  "available_index": "есть"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5401319,
                  "Group_mgn": "инвалиды по зрению",
                  "Area_mgn": "пути движения и эвакуации",
                  "Element_mgn": "лестницы на пути движения",
                  "available_degree": "полностью",
                  "available_index": "есть"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5401320,
                  "Group_mgn": "инвалиды по зрению",
                  "Area_mgn": "пути движения и эвакуации",
                  "Element_mgn": "поручни на имеющейся лестнице",
                  "available_degree": "полностью",
                  "available_index": "есть"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5402405,
                  "Group_mgn": "инвалиды-опорники",
                  "Area_mgn": "зона оказания услуги",
                  "Element_mgn": "ширина полосы движения (при обслуживании с перемещением)",
                  "available_degree": "полностью",
                  "available_index": "соответствует"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5402406,
                  "Group_mgn": "инвалиды по слуху",
                  "Area_mgn": "зона оказания услуги",
                  "Element_mgn": "визуальные средства информации о предоставлении услуги",
                  "available_degree": "полностью",
                  "available_index": "есть"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5405163,
                  "Group_mgn": "инвалиды-опорники",
                  "Area_mgn": "входная группа",
                  "Element_mgn": "нулевой вход",
                  "available_degree": "частично",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5405367,
                  "Group_mgn": "инвалиды по слуху",
                  "Area_mgn": "пути движения и эвакуации",
                  "Element_mgn": "наличие указателей, пиктограмм",
                  "available_degree": "полностью",
                  "available_index": "есть"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5405368,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "санитарный узел",
                  "Element_mgn": "габариты кабины",
                  "available_degree": "полностью",
                  "available_index": "соответствует"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5406338,
                  "Group_mgn": "инвалиды по зрению",
                  "Area_mgn": "санитарный узел",
                  "Element_mgn": "тактильное обозначение санузла",
                  "available_degree": "полностью",
                  "available_index": "есть"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5407727,
                  "Group_mgn": "инвалиды по зрению",
                  "Area_mgn": "территория объекта",
                  "Element_mgn": "безбарьерный путь до главного входа",
                  "available_degree": "частично",
                  "available_index": "есть"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5408499,
                  "Group_mgn": "инвалиды по слуху",
                  "Area_mgn": "пути движения и эвакуации",
                  "Element_mgn": "наличие надписей",
                  "available_degree": "полностью",
                  "available_index": "есть"
                }
              ]
            }
          ],
          "global_id": 264865
        },
        {
          "is_deleted": 0,
          "AdmArea": "Северный административный округ",
          "District": "Головинский район",
          "PostalCode": "125438",
          "Address": "Российская Федерация, город Москва, внутригородская территория муниципальный округ Головинский, Онежская улица, дом 17, корпус 5",
          "Availability": [
            {
              "is_deleted": 0,
              "global_id": 137481,
              "available_k": "частично",
              "available_o": "частично",
              "available_z": "частично",
              "available_s": "частично",
              "available_element": [
                {
                  "is_deleted": 0,
                  "global_id": 5348639,
                  "Group_mgn": "инвалиды-опорники",
                  "Area_mgn": "зона оказания услуги",
                  "Element_mgn": "габариты зоны сидения (глубина)",
                  "available_degree": "полностью",
                  "available_index": "соответствует"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5350003,
                  "Group_mgn": "инвалиды-опорники",
                  "Area_mgn": "территория объекта",
                  "Element_mgn": "поручни на имеющейся лестнице",
                  "available_degree": "частично",
                  "available_index": "есть"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5353085,
                  "Group_mgn": "инвалиды-опорники",
                  "Area_mgn": "территория объекта",
                  "Element_mgn": "безбарьерный путь до главного входа",
                  "available_degree": "частично",
                  "available_index": "есть"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5356146,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "пути движения и эвакуации",
                  "Element_mgn": "платформа подъемная (мобильный лестничный подъемник)",
                  "available_degree": "полностью",
                  "available_index": "есть"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5357069,
                  "Group_mgn": "инвалиды по зрению",
                  "Area_mgn": "входная группа",
                  "Element_mgn": "поручни на имеющейся лестнице",
                  "available_degree": "частично",
                  "available_index": "есть"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5357070,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "зона оказания услуги",
                  "Element_mgn": "ширина дверей в кабинеты",
                  "available_degree": "полностью",
                  "available_index": "соответствует"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5357878,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "территория объекта",
                  "Element_mgn": "информационные указатели",
                  "available_degree": "частично",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5358609,
                  "Group_mgn": "инвалиды по зрению",
                  "Area_mgn": "пути движения и эвакуации",
                  "Element_mgn": "контрастная маркировка ступеней",
                  "available_degree": "полностью",
                  "available_index": "есть"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5361015,
                  "Group_mgn": "инвалиды-опорники",
                  "Area_mgn": "входная группа",
                  "Element_mgn": "поручни на имеющейся лестнице",
                  "available_degree": "частично",
                  "available_index": "есть"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5361016,
                  "Group_mgn": "инвалиды-опорники",
                  "Area_mgn": "пути движения и эвакуации",
                  "Element_mgn": "лестницы на пути движения",
                  "available_degree": "частично",
                  "available_index": "есть"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5363211,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "санитарный узел",
                  "Element_mgn": "ширина двери",
                  "available_degree": "полностью",
                  "available_index": "соответствует"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5366435,
                  "Group_mgn": "инвалиды-опорники",
                  "Area_mgn": "пути движения и эвакуации",
                  "Element_mgn": "поручни на имеющейся лестнице",
                  "available_degree": "частично",
                  "available_index": "есть"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5370163,
                  "Group_mgn": "инвалиды по зрению",
                  "Area_mgn": "входная группа",
                  "Element_mgn": "нулевой вход",
                  "available_degree": "частично",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5372768,
                  "Group_mgn": "инвалиды по слуху",
                  "Area_mgn": "территория объекта",
                  "Element_mgn": "указатели направления движения",
                  "available_degree": "полностью",
                  "available_index": "есть"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5374447,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "санитарный узел",
                  "Element_mgn": "зона рядом с унитазом",
                  "available_degree": "полностью",
                  "available_index": "есть"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5374755,
                  "Group_mgn": "инвалиды по зрению",
                  "Area_mgn": "пути движения и эвакуации",
                  "Element_mgn": "поручни на имеющейся лестнице",
                  "available_degree": "полностью",
                  "available_index": "есть"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5374948,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "пути движения и эвакуации",
                  "Element_mgn": "лифт",
                  "available_degree": "полностью",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5375743,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "территория объекта",
                  "Element_mgn": "безбарьерный путь до главного входа",
                  "available_degree": "частично",
                  "available_index": "есть"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5377784,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "входная группа",
                  "Element_mgn": "информационные указатели",
                  "available_degree": "частично",
                  "available_index": "есть"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5377802,
                  "Group_mgn": "инвалиды по слуху",
                  "Area_mgn": "пути движения и эвакуации",
                  "Element_mgn": "наличие надписей",
                  "available_degree": "полностью",
                  "available_index": "есть"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5379775,
                  "Group_mgn": "инвалиды-опорники",
                  "Area_mgn": "зона оказания услуги",
                  "Element_mgn": "ширина полосы движения (при обслуживании с перемещением)",
                  "available_degree": "полностью",
                  "available_index": "соответствует"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5384281,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "пути движения и эвакуации",
                  "Element_mgn": "лестницы на пути движения",
                  "available_degree": "полностью",
                  "available_index": "есть"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5384734,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "входная группа",
                  "Element_mgn": "платформа подъемная (мобильный лестничный подъемник)",
                  "available_degree": "частично",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5384735,
                  "Group_mgn": "инвалиды по зрению",
                  "Area_mgn": "санитарный узел",
                  "Element_mgn": "тактильное обозначение санузла",
                  "available_degree": "полностью",
                  "available_index": "есть"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5385478,
                  "Group_mgn": "инвалиды по зрению",
                  "Area_mgn": "территория объекта",
                  "Element_mgn": "поручни на имеющейся лестнице",
                  "available_degree": "недоступно",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5386003,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "входная группа",
                  "Element_mgn": "пандус с поручнями и его уклон",
                  "available_degree": "частично",
                  "available_index": "соответствует"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5386004,
                  "Group_mgn": "инвалиды-опорники",
                  "Area_mgn": "пути движения и эвакуации",
                  "Element_mgn": "лифт",
                  "available_degree": "частично",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5390381,
                  "Group_mgn": "инвалиды-опорники",
                  "Area_mgn": "входная группа",
                  "Element_mgn": "нулевой вход",
                  "available_degree": "частично",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5390382,
                  "Group_mgn": "инвалиды-опорники",
                  "Area_mgn": "пути движения и эвакуации",
                  "Element_mgn": "ширина полосы движения",
                  "available_degree": "частично",
                  "available_index": "соответствует"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5390383,
                  "Group_mgn": "инвалиды по слуху",
                  "Area_mgn": "пути движения и эвакуации",
                  "Element_mgn": "наличие указателей, пиктограмм",
                  "available_degree": "полностью",
                  "available_index": "есть"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5394895,
                  "Group_mgn": "инвалиды по зрению",
                  "Area_mgn": "зона оказания услуги",
                  "Element_mgn": "тактильные средства информации",
                  "available_degree": "полностью",
                  "available_index": "есть"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5395043,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "санитарный узел",
                  "Element_mgn": "габариты кабины",
                  "available_degree": "полностью",
                  "available_index": "соответствует"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5396499,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "входная группа",
                  "Element_mgn": "нулевой вход",
                  "available_degree": "частично",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5397768,
                  "Group_mgn": "инвалиды по зрению",
                  "Area_mgn": "пути движения и эвакуации",
                  "Element_mgn": "лестницы на пути движения",
                  "available_degree": "полностью",
                  "available_index": "есть"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5401345,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "зона оказания услуги",
                  "Element_mgn": "ширина полосы движения (при обслуживании с перемещением)",
                  "available_degree": "полностью",
                  "available_index": "соответствует"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5402107,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "территория объекта",
                  "Element_mgn": "машино-место для инвалидов",
                  "available_degree": "частично",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5402407,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "входная группа",
                  "Element_mgn": "ширина входной двери",
                  "available_degree": "частично",
                  "available_index": "соответствует"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5402408,
                  "Group_mgn": "инвалиды-опорники",
                  "Area_mgn": "санитарный узел",
                  "Element_mgn": "поручни у унитаза",
                  "available_degree": "полностью",
                  "available_index": "есть"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5404601,
                  "Group_mgn": "инвалиды по зрению",
                  "Area_mgn": "территория объекта",
                  "Element_mgn": "безбарьерный путь до главного входа",
                  "available_degree": "недоступно",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5404602,
                  "Group_mgn": "инвалиды по слуху",
                  "Area_mgn": "зона оказания услуги",
                  "Element_mgn": "визуальные средства информации о предоставлении услуги",
                  "available_degree": "частично",
                  "available_index": "есть"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5405189,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "санитарный узел",
                  "Element_mgn": "зона у раковины для кресла-коляски",
                  "available_degree": "полностью",
                  "available_index": "есть"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5406341,
                  "Group_mgn": "инвалиды-опорники",
                  "Area_mgn": "территория объекта",
                  "Element_mgn": "машино-место для инвалидов",
                  "available_degree": "частично",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5406342,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "пути движения и эвакуации",
                  "Element_mgn": "ширина полосы движения",
                  "available_degree": "полностью",
                  "available_index": "соответствует"
                }
              ]
            }
          ],
          "global_id": 264962
        }
      ],
      "ChiefOrg": "Департамент культуры города Москвы",
      "ChiefName": "Зайцева Светлана Вячеславна",
      "ChiefPosition": "заведующий",
      "PublicPhone": [
        {
          "is_deleted": 0,
          "PublicPhone": "(495) 453-81-05",
          "global_id": 199995
        },
        {
          "is_deleted": 0,
          "PublicPhone": "(495) 456-47-76",
          "global_id": 200083
        },
        {
          "is_deleted": 0,
          "PublicPhone": "(495) 452-07-97",
          "global_id": 201148
        }
      ],
      "Fax": [],
      "Email": [
        {
          "is_deleted": 0,
          "Email": "bib44@culture.mos.ru",
          "global_id": 148158
        }
      ],
      "WorkingHours": [
        {
          "is_deleted": 0,
          "DayWeek": "понедельник",
          "WorkHours": "выходной",
          "global_id": 1002276
        },
        {
          "is_deleted": 0,
          "DayWeek": "вторник",
          "WorkHours": "12:00-22:00",
          "global_id": 1001333
        },
        {
          "is_deleted": 0,
          "DayWeek": "среда",
          "WorkHours": "12:00-22:00",
          "global_id": 1001334
        },
        {
          "is_deleted": 0,
          "DayWeek": "четверг",
          "WorkHours": "12:00-22:00",
          "global_id": 1000190
        },
        {
          "is_deleted": 0,
          "DayWeek": "пятница",
          "WorkHours": "12:00-22:00",
          "global_id": 1002829
        },
        {
          "is_deleted": 0,
          "DayWeek": "суббота",
          "WorkHours": "12:00-22:00",
          "global_id": 999817
        },
        {
          "is_deleted": 0,
          "DayWeek": "воскресенье",
          "WorkHours": "12:00-20:00",
          "global_id": 1000953
        }
      ],
      "ClarificationOfWorkingHours": "Последний вторник месяца - санитарный день",
      "WebSite": "kulturasao.ru",
      "NumOfSeats": 125,
      "NumOfReaders": 2077,
      "NumOfVisitors": 33626,
      "global_id": 2639269566,
      "geoData": {
        "coordinates": [
          [
            37.517167758,
            55.851123873
          ],
          [
            37.498518443,
            55.846122692
          ],
          [
            37.512122607,
            55.862593078
          ],
          [
            37.517399895,
            55.8511749
          ]
        ],
        "type": "MultiPoint"
      },
      "geodata_center": null
    },
    {
      "is_deleted": 0,
      "Category": "Библиотека",
      "CommonName": "Дом Н. В. Гоголя - мемориальный музей и научная библиотека",
      "FullName": "Государственное бюджетное учреждение культуры города Москвы «Дом Н. В. Гоголя - мемориальный музей и научная библиотека»",
      "ShortName": "ГБУК г. Москвы «Дом Н. В. Гоголя - мемориальный музей и научная библиотека»",
      "OrgInfo": [
        {
          "is_deleted": 0,
          "ChiefPhone": [
            {
              "is_deleted": 0,
              "global_id": 152609,
              "ChiefPhone": "(495) 691-15-50"
            }
          ],
          "FullName": "Государственное бюджетное учреждение культуры города Москвы «Дом Н.В. Гоголя - мемориальный музей и научная библиотека»",
          "INN": "7703395806",
          "KPP": "770301001",
          "OGRN": "1037739549980",
          "LegalAddress": "119019, город Москва, Никитский бульвар, дом 7а",
          "ChiefName": "Викулова Вера Павловна",
          "ChiefPosition": "директор",
          "global_id": 139772
        }
      ],
      "ObjectAddress": [
        {
          "is_deleted": 0,
          "AdmArea": "Центральный административный округ",
          "District": "район Арбат",
          "PostalCode": "119019",
          "Address": "Российская Федерация, город Москва, внутригородская территория муниципальный округ Арбат, Никитский бульвар, дом 7",
          "Availability": [
            {
              "is_deleted": 0,
              "global_id": 137117,
              "available_k": "недоступно",
              "available_o": "недоступно",
              "available_z": "частично",
              "available_s": "частично",
              "available_element": [
                {
                  "is_deleted": 0,
                  "global_id": 5349698,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "пути движения и эвакуации",
                  "Element_mgn": "лифт",
                  "available_degree": "недоступно",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5349699,
                  "Group_mgn": "инвалиды по слуху",
                  "Area_mgn": "пути движения и эвакуации",
                  "Element_mgn": "наличие надписей",
                  "available_degree": "частично",
                  "available_index": "есть"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5352740,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "территория объекта",
                  "Element_mgn": "информационные указатели",
                  "available_degree": "частично",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5352741,
                  "Group_mgn": "инвалиды по зрению",
                  "Area_mgn": "территория объекта",
                  "Element_mgn": "поручни на имеющейся лестнице",
                  "available_degree": "частично",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5352969,
                  "Group_mgn": "инвалиды по зрению",
                  "Area_mgn": "санитарный узел",
                  "Element_mgn": "тактильное обозначение санузла",
                  "available_degree": "частично",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5353739,
                  "Group_mgn": "инвалиды по зрению",
                  "Area_mgn": "зона оказания услуги",
                  "Element_mgn": "тактильные средства информации",
                  "available_degree": "недоступно",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5353740,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "санитарный узел",
                  "Element_mgn": "габариты кабины",
                  "available_degree": "недоступно",
                  "available_index": "не соответствует"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5353741,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "санитарный узел",
                  "Element_mgn": "зона у раковины для кресла-коляски",
                  "available_degree": "недоступно",
                  "available_index": "не соответствует"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5358003,
                  "Group_mgn": "инвалиды по зрению",
                  "Area_mgn": "пути движения и эвакуации",
                  "Element_mgn": "контрастная маркировка ступеней",
                  "available_degree": "частично",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5358004,
                  "Group_mgn": "инвалиды по слуху",
                  "Area_mgn": "зона оказания услуги",
                  "Element_mgn": "визуальные средства информации о предоставлении услуги",
                  "available_degree": "частично",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5358335,
                  "Group_mgn": "инвалиды-опорники",
                  "Area_mgn": "входная группа",
                  "Element_mgn": "нулевой вход",
                  "available_degree": "частично",
                  "available_index": "есть"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5360552,
                  "Group_mgn": "инвалиды-опорники",
                  "Area_mgn": "санитарный узел",
                  "Element_mgn": "поручень у раковины",
                  "available_degree": "недоступно",
                  "available_index": "не соответствует"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5360643,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "зона оказания услуги",
                  "Element_mgn": "обслуживание через окно/прилавок",
                  "available_degree": "недоступно",
                  "available_index": "не соответствует"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5360644,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "санитарный узел",
                  "Element_mgn": "зона рядом с унитазом",
                  "available_degree": "недоступно",
                  "available_index": "не соответствует"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5361765,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "входная группа",
                  "Element_mgn": "информационные указатели",
                  "available_degree": "недоступно",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5366177,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "входная группа",
                  "Element_mgn": "пандус с поручнями и его уклон",
                  "available_degree": "недоступно",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5366178,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "входная группа",
                  "Element_mgn": "ширина входной двери",
                  "available_degree": "недоступно",
                  "available_index": "не соответствует"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5367106,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "зона оказания услуги",
                  "Element_mgn": "места для инвалидов-колясочников в зале",
                  "available_degree": "недоступно",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5367687,
                  "Group_mgn": "инвалиды по зрению",
                  "Area_mgn": "территория объекта",
                  "Element_mgn": "безбарьерный путь до главного входа",
                  "available_degree": "частично",
                  "available_index": "есть"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5367688,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "зона оказания услуги",
                  "Element_mgn": "ширина дверей в кабинеты",
                  "available_degree": "недоступно",
                  "available_index": "не соответствует"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5372332,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "территория объекта",
                  "Element_mgn": "безбарьерный путь до главного входа",
                  "available_degree": "частично",
                  "available_index": "есть"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5372558,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "входная группа",
                  "Element_mgn": "платформа подъемная (мобильный лестничный подъемник)",
                  "available_degree": "недоступно",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5373983,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "санитарный узел",
                  "Element_mgn": "ширина двери",
                  "available_degree": "недоступно",
                  "available_index": "не соответствует"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5374126,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "пути движения и эвакуации",
                  "Element_mgn": "платформа подъемная (мобильный лестничный подъемник)",
                  "available_degree": "недоступно",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5374127,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "зона оказания услуги",
                  "Element_mgn": "ширина полосы движения (при обслуживании с перемещением)",
                  "available_degree": "недоступно",
                  "available_index": "не соответствует"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5376463,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "входная группа",
                  "Element_mgn": "нулевой вход",
                  "available_degree": "недоступно",
                  "available_index": "есть"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5376464,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "пути движения и эвакуации",
                  "Element_mgn": "пандус с поручнями и его уклон",
                  "available_degree": "недоступно",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5377598,
                  "Group_mgn": "инвалиды по слуху",
                  "Area_mgn": "зона оказания услуги",
                  "Element_mgn": "места для инвалидов по слуху в зале",
                  "available_degree": "частично",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5379356,
                  "Group_mgn": "инвалиды-опорники",
                  "Area_mgn": "пути движения и эвакуации",
                  "Element_mgn": "поручни на имеющейся лестнице",
                  "available_degree": "недоступно",
                  "available_index": "есть"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5380977,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "пути движения и эвакуации",
                  "Element_mgn": "лестницы на пути движения",
                  "available_degree": "недоступно",
                  "available_index": "есть"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5382099,
                  "Group_mgn": "инвалиды-опорники",
                  "Area_mgn": "территория объекта",
                  "Element_mgn": "безбарьерный путь до главного входа",
                  "available_degree": "полностью",
                  "available_index": "есть"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5382131,
                  "Group_mgn": "инвалиды по зрению",
                  "Area_mgn": "пути движения и эвакуации",
                  "Element_mgn": "поручни на имеющейся лестнице",
                  "available_degree": "частично",
                  "available_index": "есть"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5383224,
                  "Group_mgn": "инвалиды по слуху",
                  "Area_mgn": "территория объекта",
                  "Element_mgn": "указатели направления движения",
                  "available_degree": "частично",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5389938,
                  "Group_mgn": "инвалиды по зрению",
                  "Area_mgn": "входная группа",
                  "Element_mgn": "тактильная полоса перед входной лестницей",
                  "available_degree": "частично",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5389939,
                  "Group_mgn": "инвалиды-опорники",
                  "Area_mgn": "пути движения и эвакуации",
                  "Element_mgn": "ширина полосы движения",
                  "available_degree": "недоступно",
                  "available_index": "не соответствует"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5392565,
                  "Group_mgn": "инвалиды-опорники",
                  "Area_mgn": "зона оказания услуги",
                  "Element_mgn": "габариты зоны сидения (глубина)",
                  "available_degree": "частично",
                  "available_index": "не соответствует"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5392566,
                  "Group_mgn": "инвалиды-опорники",
                  "Area_mgn": "зона оказания услуги",
                  "Element_mgn": "ширина полосы движения (при обслуживании с перемещением)",
                  "available_degree": "частично",
                  "available_index": "соответствует"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5393670,
                  "Group_mgn": "инвалиды по зрению",
                  "Area_mgn": "территория объекта",
                  "Element_mgn": "тактильная полоса перед лестницей",
                  "available_degree": "частично",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5395717,
                  "Group_mgn": "инвалиды-опорники",
                  "Area_mgn": "санитарный узел",
                  "Element_mgn": "поручни у унитаза",
                  "available_degree": "недоступно",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5396525,
                  "Group_mgn": "инвалиды-опорники",
                  "Area_mgn": "пути движения и эвакуации",
                  "Element_mgn": "лестницы на пути движения",
                  "available_degree": "недоступно",
                  "available_index": "есть"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5398101,
                  "Group_mgn": "инвалиды по зрению",
                  "Area_mgn": "входная группа",
                  "Element_mgn": "поручни на имеющейся лестнице",
                  "available_degree": "частично",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5398102,
                  "Group_mgn": "инвалиды-опорники",
                  "Area_mgn": "пути движения и эвакуации",
                  "Element_mgn": "лифт",
                  "available_degree": "недоступно",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5398103,
                  "Group_mgn": "инвалиды по слуху",
                  "Area_mgn": "пути движения и эвакуации",
                  "Element_mgn": "наличие указателей, пиктограмм",
                  "available_degree": "частично",
                  "available_index": "есть"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5403324,
                  "Group_mgn": "инвалиды по зрению",
                  "Area_mgn": "входная группа",
                  "Element_mgn": "нулевой вход",
                  "available_degree": "частично",
                  "available_index": "есть"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5404704,
                  "Group_mgn": "инвалиды-опорники",
                  "Area_mgn": "территория объекта",
                  "Element_mgn": "машино-место для инвалидов",
                  "available_degree": "полностью",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5406543,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "пути движения и эвакуации",
                  "Element_mgn": "ширина полосы движения",
                  "available_degree": "недоступно",
                  "available_index": "не соответствует"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5406544,
                  "Group_mgn": "инвалиды по зрению",
                  "Area_mgn": "пути движения и эвакуации",
                  "Element_mgn": "лестницы на пути движения",
                  "available_degree": "частично",
                  "available_index": "есть"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5407392,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "территория объекта",
                  "Element_mgn": "машино-место для инвалидов",
                  "available_degree": "частично",
                  "available_index": "нет"
                }
              ]
            }
          ],
          "global_id": 264523
        },
        {
          "is_deleted": 0,
          "AdmArea": "Центральный административный округ",
          "District": "район Арбат",
          "PostalCode": "119019",
          "Address": "Российская Федерация, город Москва, внутригородская территория муниципальный округ Арбат, Никитский бульвар, дом 7А",
          "Availability": [
            {
              "is_deleted": 0,
              "global_id": 136445,
              "available_k": "частично",
              "available_o": "частично",
              "available_z": "частично",
              "available_s": "частично",
              "available_element": [
                {
                  "is_deleted": 0,
                  "global_id": 5349697,
                  "Group_mgn": "инвалиды по зрению",
                  "Area_mgn": "территория объекта",
                  "Element_mgn": "поручни на имеющейся лестнице",
                  "available_degree": "частично",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5352737,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "входная группа",
                  "Element_mgn": "ширина входной двери",
                  "available_degree": "частично",
                  "available_index": "соответствует"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5352738,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "пути движения и эвакуации",
                  "Element_mgn": "пандус с поручнями и его уклон",
                  "available_degree": "частично",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5352739,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "санитарный узел",
                  "Element_mgn": "ширина двери",
                  "available_degree": "недоступно",
                  "available_index": "не соответствует"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5352968,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "санитарный узел",
                  "Element_mgn": "габариты кабины",
                  "available_degree": "недоступно",
                  "available_index": "не соответствует"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5354530,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "территория объекта",
                  "Element_mgn": "безбарьерный путь до главного входа",
                  "available_degree": "частично",
                  "available_index": "есть"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5354531,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "входная группа",
                  "Element_mgn": "информационные указатели",
                  "available_degree": "частично",
                  "available_index": "есть"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5358333,
                  "Group_mgn": "инвалиды по зрению",
                  "Area_mgn": "пути движения и эвакуации",
                  "Element_mgn": "поручни на имеющейся лестнице",
                  "available_degree": "частично",
                  "available_index": "есть"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5358334,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "зона оказания услуги",
                  "Element_mgn": "ширина полосы движения (при обслуживании с перемещением)",
                  "available_degree": "частично",
                  "available_index": "соответствует"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5359698,
                  "Group_mgn": "инвалиды по зрению",
                  "Area_mgn": "территория объекта",
                  "Element_mgn": "тактильная полоса перед лестницей",
                  "available_degree": "частично",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5359898,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "территория объекта",
                  "Element_mgn": "информационные указатели",
                  "available_degree": "частично",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5360525,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "пути движения и эвакуации",
                  "Element_mgn": "платформа подъемная (мобильный лестничный подъемник)",
                  "available_degree": "частично",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5360526,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "зона оказания услуги",
                  "Element_mgn": "обслуживание через окно/прилавок",
                  "available_degree": "частично",
                  "available_index": "соответствует"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5360527,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "санитарный узел",
                  "Element_mgn": "зона рядом с унитазом",
                  "available_degree": "недоступно",
                  "available_index": "не соответствует"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5360642,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "входная группа",
                  "Element_mgn": "пандус с поручнями и его уклон",
                  "available_degree": "частично",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5361763,
                  "Group_mgn": "инвалиды по слуху",
                  "Area_mgn": "зона оказания услуги",
                  "Element_mgn": "визуальные средства информации о предоставлении услуги",
                  "available_degree": "частично",
                  "available_index": "есть"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5361764,
                  "Group_mgn": "инвалиды по слуху",
                  "Area_mgn": "зона оказания услуги",
                  "Element_mgn": "места для инвалидов по слуху в зале",
                  "available_degree": "частично",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5363168,
                  "Group_mgn": "инвалиды по зрению",
                  "Area_mgn": "входная группа",
                  "Element_mgn": "тактильная полоса перед входной лестницей",
                  "available_degree": "частично",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5365339,
                  "Group_mgn": "инвалиды по зрению",
                  "Area_mgn": "пути движения и эвакуации",
                  "Element_mgn": "контрастная маркировка ступеней",
                  "available_degree": "частично",
                  "available_index": "есть"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5366175,
                  "Group_mgn": "инвалиды по слуху",
                  "Area_mgn": "пути движения и эвакуации",
                  "Element_mgn": "наличие указателей, пиктограмм",
                  "available_degree": "частично",
                  "available_index": "есть"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5366176,
                  "Group_mgn": "инвалиды-опорники",
                  "Area_mgn": "санитарный узел",
                  "Element_mgn": "поручень у раковины",
                  "available_degree": "недоступно",
                  "available_index": "не соответствует"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5372331,
                  "Group_mgn": "инвалиды по зрению",
                  "Area_mgn": "пути движения и эвакуации",
                  "Element_mgn": "лестницы на пути движения",
                  "available_degree": "частично",
                  "available_index": "есть"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5373952,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "входная группа",
                  "Element_mgn": "нулевой вход",
                  "available_degree": "частично",
                  "available_index": "есть"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5374568,
                  "Group_mgn": "инвалиды-опорники",
                  "Area_mgn": "пути движения и эвакуации",
                  "Element_mgn": "поручни на имеющейся лестнице",
                  "available_degree": "частично",
                  "available_index": "есть"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5376149,
                  "Group_mgn": "инвалиды по зрению",
                  "Area_mgn": "территория объекта",
                  "Element_mgn": "безбарьерный путь до главного входа",
                  "available_degree": "частично",
                  "available_index": "есть"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5376150,
                  "Group_mgn": "инвалиды-опорники",
                  "Area_mgn": "входная группа",
                  "Element_mgn": "нулевой вход",
                  "available_degree": "частично",
                  "available_index": "есть"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5376151,
                  "Group_mgn": "инвалиды по зрению",
                  "Area_mgn": "зона оказания услуги",
                  "Element_mgn": "тактильные средства информации",
                  "available_degree": "недоступно",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5376152,
                  "Group_mgn": "инвалиды-опорники",
                  "Area_mgn": "санитарный узел",
                  "Element_mgn": "поручни у унитаза",
                  "available_degree": "недоступно",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5379230,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "пути движения и эвакуации",
                  "Element_mgn": "лифт",
                  "available_degree": "частично",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5379231,
                  "Group_mgn": "инвалиды-опорники",
                  "Area_mgn": "пути движения и эвакуации",
                  "Element_mgn": "лестницы на пути движения",
                  "available_degree": "частично",
                  "available_index": "есть"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5379355,
                  "Group_mgn": "инвалиды по зрению",
                  "Area_mgn": "входная группа",
                  "Element_mgn": "поручни на имеющейся лестнице",
                  "available_degree": "частично",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5380975,
                  "Group_mgn": "инвалиды по слуху",
                  "Area_mgn": "пути движения и эвакуации",
                  "Element_mgn": "наличие надписей",
                  "available_degree": "частично",
                  "available_index": "есть"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5380976,
                  "Group_mgn": "инвалиды-опорники",
                  "Area_mgn": "зона оказания услуги",
                  "Element_mgn": "габариты зоны сидения (глубина)",
                  "available_degree": "частично",
                  "available_index": "не соответствует"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5382098,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "пути движения и эвакуации",
                  "Element_mgn": "ширина полосы движения",
                  "available_degree": "частично",
                  "available_index": "соответствует"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5386961,
                  "Group_mgn": "инвалиды-опорники",
                  "Area_mgn": "пути движения и эвакуации",
                  "Element_mgn": "ширина полосы движения",
                  "available_degree": "частично",
                  "available_index": "соответствует"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5387699,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "входная группа",
                  "Element_mgn": "платформа подъемная (мобильный лестничный подъемник)",
                  "available_degree": "частично",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5388244,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "территория объекта",
                  "Element_mgn": "машино-место для инвалидов",
                  "available_degree": "частично",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5388668,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "зона оказания услуги",
                  "Element_mgn": "ширина дверей в кабинеты",
                  "available_degree": "частично",
                  "available_index": "не соответствует"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5392090,
                  "Group_mgn": "инвалиды-опорники",
                  "Area_mgn": "пути движения и эвакуации",
                  "Element_mgn": "лифт",
                  "available_degree": "частично",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5393669,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "пути движения и эвакуации",
                  "Element_mgn": "лестницы на пути движения",
                  "available_degree": "частично",
                  "available_index": "есть"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5395715,
                  "Group_mgn": "инвалиды-опорники",
                  "Area_mgn": "территория объекта",
                  "Element_mgn": "безбарьерный путь до главного входа",
                  "available_degree": "частично",
                  "available_index": "есть"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5395716,
                  "Group_mgn": "инвалиды по слуху",
                  "Area_mgn": "территория объекта",
                  "Element_mgn": "указатели направления движения",
                  "available_degree": "частично",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5398186,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "санитарный узел",
                  "Element_mgn": "зона у раковины для кресла-коляски",
                  "available_degree": "недоступно",
                  "available_index": "не соответствует"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5401481,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "зона оказания услуги",
                  "Element_mgn": "места для инвалидов-колясочников в зале",
                  "available_degree": "частично",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5402952,
                  "Group_mgn": "инвалиды по зрению",
                  "Area_mgn": "санитарный узел",
                  "Element_mgn": "тактильное обозначение санузла",
                  "available_degree": "недоступно",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5407389,
                  "Group_mgn": "инвалиды-опорники",
                  "Area_mgn": "территория объекта",
                  "Element_mgn": "машино-место для инвалидов",
                  "available_degree": "частично",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5407390,
                  "Group_mgn": "инвалиды по зрению",
                  "Area_mgn": "входная группа",
                  "Element_mgn": "нулевой вход",
                  "available_degree": "частично",
                  "available_index": "есть"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5407391,
                  "Group_mgn": "инвалиды-опорники",
                  "Area_mgn": "зона оказания услуги",
                  "Element_mgn": "ширина полосы движения (при обслуживании с перемещением)",
                  "available_degree": "частично",
                  "available_index": "соответствует"
                }
              ]
            }
          ],
          "global_id": 265116
        }
      ],
      "ChiefOrg": "Государственное бюджетное учреждение культуры города Москвы «Дом Н.В. Гоголя - мемориальный музей и научная библиотека»",
      "ChiefName": "Викулова Вера Павловна",
      "ChiefPosition": "директор",
      "PublicPhone": [
        {
          "is_deleted": 0,
          "PublicPhone": "(495) 691-15-50",
          "global_id": 199938
        }
      ],
      "Fax": [
        {
          "is_deleted": 0,
          "Fax": "(495) 691-15-50",
          "global_id": 136513
        }
      ],
      "Email": [
        {
          "is_deleted": 0,
          "Email": "gogolinfo@yandex.ru",
          "global_id": 147328
        }
      ],
      "WorkingHours": [
        {
          "is_deleted": 0,
          "DayWeek": "понедельник",
          "WorkHours": "выходной",
          "global_id": 1000975
        },
        {
          "is_deleted": 0,
          "DayWeek": "вторник",
          "WorkHours": "10:00-22:00",
          "global_id": 1002813
        },
        {
          "is_deleted": 0,
          "DayWeek": "среда",
          "WorkHours": "10:00-22:00",
          "global_id": 1001584
        },
        {
          "is_deleted": 0,
          "DayWeek": "четверг",
          "WorkHours": "10:00-22:00",
          "global_id": 1001863
        },
        {
          "is_deleted": 0,
          "DayWeek": "пятница",
          "WorkHours": "10:00-22:00",
          "global_id": 1000136
        },
        {
          "is_deleted": 0,
          "DayWeek": "суббота",
          "WorkHours": "10:00-22:00",
          "global_id": 999691
        },
        {
          "is_deleted": 0,
          "DayWeek": "воскресенье",
          "WorkHours": "10:00-20:00",
          "global_id": 999076
        }
      ],
      "ClarificationOfWorkingHours": "Последний вторник месяца - санитарный день. Читальный зал и нотно-музыкальный отдел: ПН – выходной; ВТ - ПТ - 10.00-22.00; СБ, ВС - 10.00-20.00. Абонемент:",
      "WebSite": "domgogolya.ru",
      "NumOfSeats": 43,
      "NumOfReaders": 15001,
      "NumOfVisitors": 108814,
      "global_id": 2639269567,
      "geoData": {
        "coordinates": [
          [
            37.599788671,
            55.753687004
          ],
          [
            37.599759805,
            55.754126696
          ]
        ],
        "type": "MultiPoint"
      },
      "geodata_center": null
    },
    {
      "is_deleted": 0,
      "Category": "Библиотека",
      "CommonName": "Библиотека №182",
      "FullName": "Государственное бюджетное учреждение культуры города Москвы «Объединение культурных центров Юго-Западного административного округа», Библиотека №182",
      "ShortName": "ГБУК г. Москвы «ОКЦ ЮЗАО», Библиотека №182",
      "OrgInfo": [
        {
          "is_deleted": 0,
          "ChiefPhone": [
            {
              "is_deleted": 0,
              "global_id": 152932,
              "ChiefPhone": "(495) 420-05-37"
            }
          ],
          "FullName": "Государственное бюджетное учреждение культуры города Москвы «Объединение культурных центров Юго-Западного административного округа»",
          "INN": "7728812089",
          "KPP": "772801001",
          "OGRN": "1127746506634",
          "LegalAddress": "117513, город Москва, Ленинский проспект, дом 127",
          "ChiefName": "Корчагин Олег Николаевич",
          "ChiefPosition": "генеральный директор",
          "global_id": 139458
        }
      ],
      "ObjectAddress": [
        {
          "is_deleted": 0,
          "AdmArea": "Юго-Западный административный округ",
          "District": "Академический район",
          "PostalCode": "117449",
          "Address": "Российская Федерация, город Москва, внутригородская территория муниципальный округ Академический, Новочерёмушкинская улица, дом 4, корпус 2",
          "Availability": [
            {
              "is_deleted": 0,
              "global_id": 137317,
              "available_k": "частично",
              "available_o": "частично",
              "available_z": "частично",
              "available_s": "частично",
              "available_element": [
                {
                  "is_deleted": 0,
                  "global_id": 5349821,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "территория объекта",
                  "Element_mgn": "безбарьерный путь до главного входа",
                  "available_degree": "частично",
                  "available_index": "есть"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5349822,
                  "Group_mgn": "инвалиды по зрению",
                  "Area_mgn": "входная группа",
                  "Element_mgn": "поручни на имеющейся лестнице",
                  "available_degree": "частично",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5350080,
                  "Group_mgn": "инвалиды-опорники",
                  "Area_mgn": "входная группа",
                  "Element_mgn": "поручни на имеющейся лестнице",
                  "available_degree": "частично",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5350081,
                  "Group_mgn": "инвалиды по слуху",
                  "Area_mgn": "пути движения и эвакуации",
                  "Element_mgn": "наличие указателей, пиктограмм",
                  "available_degree": "частично",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5352610,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "территория объекта",
                  "Element_mgn": "машино-место для инвалидов",
                  "available_degree": "частично",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5352611,
                  "Group_mgn": "инвалиды по слуху",
                  "Area_mgn": "зона оказания услуги",
                  "Element_mgn": "визуальные средства информации о предоставлении услуги",
                  "available_degree": "частично",
                  "available_index": "есть"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5352798,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "входная группа",
                  "Element_mgn": "ширина входной двери",
                  "available_degree": "частично",
                  "available_index": "соответствует"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5352799,
                  "Group_mgn": "инвалиды по зрению",
                  "Area_mgn": "входная группа",
                  "Element_mgn": "нулевой вход",
                  "available_degree": "частично",
                  "available_index": "есть"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5352800,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "зона оказания услуги",
                  "Element_mgn": "ширина полосы движения (при обслуживании с перемещением)",
                  "available_degree": "частично",
                  "available_index": "соответствует"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5354056,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "пути движения и эвакуации",
                  "Element_mgn": "лестницы на пути движения",
                  "available_degree": "частично",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5354057,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "санитарный узел",
                  "Element_mgn": "ширина двери",
                  "available_degree": "частично",
                  "available_index": "соответствует"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5354058,
                  "Group_mgn": "инвалиды по зрению",
                  "Area_mgn": "санитарный узел",
                  "Element_mgn": "тактильное обозначение санузла",
                  "available_degree": "частично",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5354228,
                  "Group_mgn": "инвалиды-опорники",
                  "Area_mgn": "пути движения и эвакуации",
                  "Element_mgn": "лифт",
                  "available_degree": "частично",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5356617,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "входная группа",
                  "Element_mgn": "информационные указатели",
                  "available_degree": "частично",
                  "available_index": "есть"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5356618,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "пути движения и эвакуации",
                  "Element_mgn": "платформа подъемная (мобильный лестничный подъемник)",
                  "available_degree": "частично",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5357658,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "территория объекта",
                  "Element_mgn": "информационные указатели",
                  "available_degree": "частично",
                  "available_index": "есть"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5357722,
                  "Group_mgn": "инвалиды-опорники",
                  "Area_mgn": "территория объекта",
                  "Element_mgn": "поручни на имеющейся лестнице",
                  "available_degree": "частично",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5357723,
                  "Group_mgn": "инвалиды по слуху",
                  "Area_mgn": "зона оказания услуги",
                  "Element_mgn": "места для инвалидов по слуху в зале",
                  "available_degree": "частично",
                  "available_index": "есть"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5359722,
                  "Group_mgn": "инвалиды по зрению",
                  "Area_mgn": "территория объекта",
                  "Element_mgn": "тактильная полоса перед лестницей",
                  "available_degree": "частично",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5359889,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "санитарный узел",
                  "Element_mgn": "зона у раковины для кресла-коляски",
                  "available_degree": "частично",
                  "available_index": "не соответствует"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5364983,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "зона оказания услуги",
                  "Element_mgn": "ширина дверей в кабинеты",
                  "available_degree": "частично",
                  "available_index": "соответствует"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5367724,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "пути движения и эвакуации",
                  "Element_mgn": "пандус с поручнями и его уклон",
                  "available_degree": "частично",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5369907,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "пути движения и эвакуации",
                  "Element_mgn": "ширина полосы движения",
                  "available_degree": "частично",
                  "available_index": "соответствует"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5369908,
                  "Group_mgn": "инвалиды-опорники",
                  "Area_mgn": "пути движения и эвакуации",
                  "Element_mgn": "ширина полосы движения",
                  "available_degree": "частично",
                  "available_index": "соответствует"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5372586,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "входная группа",
                  "Element_mgn": "платформа подъемная (мобильный лестничный подъемник)",
                  "available_degree": "частично",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5374294,
                  "Group_mgn": "инвалиды по зрению",
                  "Area_mgn": "территория объекта",
                  "Element_mgn": "безбарьерный путь до главного входа",
                  "available_degree": "частично",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5374295,
                  "Group_mgn": "инвалиды по зрению",
                  "Area_mgn": "пути движения и эвакуации",
                  "Element_mgn": "поручни на имеющейся лестнице",
                  "available_degree": "частично",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5374406,
                  "Group_mgn": "инвалиды по слуху",
                  "Area_mgn": "территория объекта",
                  "Element_mgn": "указатели направления движения",
                  "available_degree": "частично",
                  "available_index": "есть"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5376320,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "входная группа",
                  "Element_mgn": "нулевой вход",
                  "available_degree": "частично",
                  "available_index": "есть"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5377418,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "санитарный узел",
                  "Element_mgn": "зона рядом с унитазом",
                  "available_degree": "частично",
                  "available_index": "не соответствует"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5377918,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "входная группа",
                  "Element_mgn": "пандус с поручнями и его уклон",
                  "available_degree": "частично",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5382914,
                  "Group_mgn": "инвалиды-опорники",
                  "Area_mgn": "входная группа",
                  "Element_mgn": "нулевой вход",
                  "available_degree": "частично",
                  "available_index": "есть"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5382915,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "санитарный узел",
                  "Element_mgn": "габариты кабины",
                  "available_degree": "частично",
                  "available_index": "соответствует"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5388048,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "пути движения и эвакуации",
                  "Element_mgn": "лифт",
                  "available_degree": "частично",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5389997,
                  "Group_mgn": "инвалиды-опорники",
                  "Area_mgn": "зона оказания услуги",
                  "Element_mgn": "габариты зоны сидения (глубина)",
                  "available_degree": "частично",
                  "available_index": "соответствует"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5390101,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "территория объекта",
                  "Element_mgn": "машино-место для инвалидов",
                  "available_degree": "частично",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5390351,
                  "Group_mgn": "инвалиды по зрению",
                  "Area_mgn": "входная группа",
                  "Element_mgn": "тактильная полоса перед входной лестницей",
                  "available_degree": "частично",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5392469,
                  "Group_mgn": "инвалиды-опорники",
                  "Area_mgn": "территория объекта",
                  "Element_mgn": "машино-место для инвалидов",
                  "available_degree": "частично",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5394088,
                  "Group_mgn": "инвалиды-опорники",
                  "Area_mgn": "санитарный узел",
                  "Element_mgn": "поручень у раковины",
                  "available_degree": "частично",
                  "available_index": "есть"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5398171,
                  "Group_mgn": "инвалиды по зрению",
                  "Area_mgn": "территория объекта",
                  "Element_mgn": "поручни на имеющейся лестнице",
                  "available_degree": "частично",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5398172,
                  "Group_mgn": "инвалиды-опорники",
                  "Area_mgn": "пути движения и эвакуации",
                  "Element_mgn": "поручни на имеющейся лестнице",
                  "available_degree": "частично",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5398678,
                  "Group_mgn": "инвалиды по зрению",
                  "Area_mgn": "пути движения и эвакуации",
                  "Element_mgn": "лестницы на пути движения",
                  "available_degree": "частично",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5400864,
                  "Group_mgn": "инвалиды-опорники",
                  "Area_mgn": "пути движения и эвакуации",
                  "Element_mgn": "лестницы на пути движения",
                  "available_degree": "частично",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5400865,
                  "Group_mgn": "инвалиды по зрению",
                  "Area_mgn": "зона оказания услуги",
                  "Element_mgn": "тактильные средства информации",
                  "available_degree": "частично",
                  "available_index": "есть"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5400866,
                  "Group_mgn": "инвалиды-опорники",
                  "Area_mgn": "санитарный узел",
                  "Element_mgn": "поручни у унитаза",
                  "available_degree": "частично",
                  "available_index": "есть"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5402985,
                  "Group_mgn": "инвалиды-опорники",
                  "Area_mgn": "зона оказания услуги",
                  "Element_mgn": "ширина полосы движения (при обслуживании с перемещением)",
                  "available_degree": "частично",
                  "available_index": "соответствует"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5403666,
                  "Group_mgn": "инвалиды по зрению",
                  "Area_mgn": "пути движения и эвакуации",
                  "Element_mgn": "контрастная маркировка ступеней",
                  "available_degree": "частично",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5405009,
                  "Group_mgn": "инвалиды по слуху",
                  "Area_mgn": "пути движения и эвакуации",
                  "Element_mgn": "наличие надписей",
                  "available_degree": "частично",
                  "available_index": "есть"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5408110,
                  "Group_mgn": "инвалиды-опорники",
                  "Area_mgn": "территория объекта",
                  "Element_mgn": "безбарьерный путь до главного входа",
                  "available_degree": "частично",
                  "available_index": "есть"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5408111,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "зона оказания услуги",
                  "Element_mgn": "места для инвалидов-колясочников в зале",
                  "available_degree": "частично",
                  "available_index": "есть"
                }
              ]
            }
          ],
          "global_id": 263616
        },
        {
          "is_deleted": 0,
          "AdmArea": "Юго-Западный административный округ",
          "District": "район Котловка",
          "PostalCode": "117447",
          "Address": "Российская Федерация, город Москва, внутригородская территория муниципальный округ Котловка, улица Дмитрия Ульянова, дом 43, корпус 1",
          "Availability": [
            {
              "is_deleted": 0,
              "global_id": 136846,
              "available_k": "недоступно",
              "available_o": "полностью",
              "available_z": "частично",
              "available_s": "частично",
              "available_element": [
                {
                  "is_deleted": 0,
                  "global_id": 5349128,
                  "Group_mgn": "инвалиды по зрению",
                  "Area_mgn": "входная группа",
                  "Element_mgn": "поручни на имеющейся лестнице",
                  "available_degree": "частично",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5349714,
                  "Group_mgn": "инвалиды по зрению",
                  "Area_mgn": "территория объекта",
                  "Element_mgn": "поручни на имеющейся лестнице",
                  "available_degree": "частично",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5350738,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "территория объекта",
                  "Element_mgn": "информационные указатели",
                  "available_degree": "недоступно",
                  "available_index": "есть"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5350739,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "пути движения и эвакуации",
                  "Element_mgn": "лифт",
                  "available_degree": "недоступно",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5352717,
                  "Group_mgn": "инвалиды по зрению",
                  "Area_mgn": "пути движения и эвакуации",
                  "Element_mgn": "поручни на имеющейся лестнице",
                  "available_degree": "частично",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5352718,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "зона оказания услуги",
                  "Element_mgn": "ширина дверей в кабинеты",
                  "available_degree": "недоступно",
                  "available_index": "соответствует"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5359704,
                  "Group_mgn": "инвалиды по слуху",
                  "Area_mgn": "пути движения и эвакуации",
                  "Element_mgn": "наличие надписей",
                  "available_degree": "частично",
                  "available_index": "есть"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5359705,
                  "Group_mgn": "инвалиды по зрению",
                  "Area_mgn": "зона оказания услуги",
                  "Element_mgn": "тактильные средства информации",
                  "available_degree": "частично",
                  "available_index": "есть"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5360488,
                  "Group_mgn": "инвалиды-опорники",
                  "Area_mgn": "территория объекта",
                  "Element_mgn": "поручни на имеющейся лестнице",
                  "available_degree": "частично",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5361464,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "санитарный узел",
                  "Element_mgn": "зона рядом с унитазом",
                  "available_degree": "недоступно",
                  "available_index": "есть"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5362929,
                  "Group_mgn": "инвалиды по слуху",
                  "Area_mgn": "зона оказания услуги",
                  "Element_mgn": "визуальные средства информации о предоставлении услуги",
                  "available_degree": "частично",
                  "available_index": "есть"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5369611,
                  "Group_mgn": "инвалиды-опорники",
                  "Area_mgn": "пути движения и эвакуации",
                  "Element_mgn": "ширина полосы движения",
                  "available_degree": "частично",
                  "available_index": "соответствует"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5369612,
                  "Group_mgn": "инвалиды-опорники",
                  "Area_mgn": "санитарный узел",
                  "Element_mgn": "поручни у унитаза",
                  "available_degree": "частично",
                  "available_index": "есть"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5370567,
                  "Group_mgn": "инвалиды-опорники",
                  "Area_mgn": "зона оказания услуги",
                  "Element_mgn": "ширина полосы движения (при обслуживании с перемещением)",
                  "available_degree": "частично",
                  "available_index": "соответствует"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5373338,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "санитарный узел",
                  "Element_mgn": "ширина двери",
                  "available_degree": "недоступно",
                  "available_index": "не соответствует"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5374698,
                  "Group_mgn": "инвалиды по слуху",
                  "Area_mgn": "пути движения и эвакуации",
                  "Element_mgn": "наличие указателей, пиктограмм",
                  "available_degree": "частично",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5376367,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "входная группа",
                  "Element_mgn": "ширина входной двери",
                  "available_degree": "недоступно",
                  "available_index": "соответствует"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5376368,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "пути движения и эвакуации",
                  "Element_mgn": "лестницы на пути движения",
                  "available_degree": "недоступно",
                  "available_index": "есть"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5377712,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "входная группа",
                  "Element_mgn": "нулевой вход",
                  "available_degree": "недоступно",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5377879,
                  "Group_mgn": "инвалиды-опорники",
                  "Area_mgn": "входная группа",
                  "Element_mgn": "поручни на имеющейся лестнице",
                  "available_degree": "частично",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5377880,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "зона оказания услуги",
                  "Element_mgn": "места для инвалидов-колясочников в зале",
                  "available_degree": "недоступно",
                  "available_index": "есть"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5378204,
                  "Group_mgn": "инвалиды по слуху",
                  "Area_mgn": "территория объекта",
                  "Element_mgn": "указатели направления движения",
                  "available_degree": "частично",
                  "available_index": "есть"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5379527,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "пути движения и эвакуации",
                  "Element_mgn": "ширина полосы движения",
                  "available_degree": "недоступно",
                  "available_index": "не соответствует"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5381951,
                  "Group_mgn": "инвалиды-опорники",
                  "Area_mgn": "входная группа",
                  "Element_mgn": "нулевой вход",
                  "available_degree": "частично",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5384527,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "пути движения и эвакуации",
                  "Element_mgn": "платформа подъемная (мобильный лестничный подъемник)",
                  "available_degree": "недоступно",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5385401,
                  "Group_mgn": "инвалиды-опорники",
                  "Area_mgn": "зона оказания услуги",
                  "Element_mgn": "габариты зоны сидения (глубина)",
                  "available_degree": "частично",
                  "available_index": "соответствует"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5387316,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "входная группа",
                  "Element_mgn": "информационные указатели",
                  "available_degree": "недоступно",
                  "available_index": "есть"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5387317,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "санитарный узел",
                  "Element_mgn": "зона у раковины для кресла-коляски",
                  "available_degree": "недоступно",
                  "available_index": "есть"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5391563,
                  "Group_mgn": "инвалиды по зрению",
                  "Area_mgn": "входная группа",
                  "Element_mgn": "нулевой вход",
                  "available_degree": "частично",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5393092,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "пути движения и эвакуации",
                  "Element_mgn": "пандус с поручнями и его уклон",
                  "available_degree": "недоступно",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5394346,
                  "Group_mgn": "инвалиды-опорники",
                  "Area_mgn": "пути движения и эвакуации",
                  "Element_mgn": "лифт",
                  "available_degree": "частично",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5394347,
                  "Group_mgn": "инвалиды по зрению",
                  "Area_mgn": "пути движения и эвакуации",
                  "Element_mgn": "контрастная маркировка ступеней",
                  "available_degree": "частично",
                  "available_index": "есть"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5395565,
                  "Group_mgn": "инвалиды-опорники",
                  "Area_mgn": "территория объекта",
                  "Element_mgn": "безбарьерный путь до главного входа",
                  "available_degree": "частично",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5395566,
                  "Group_mgn": "инвалиды по зрению",
                  "Area_mgn": "территория объекта",
                  "Element_mgn": "тактильная полоса перед лестницей",
                  "available_degree": "частично",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5395757,
                  "Group_mgn": "инвалиды по слуху",
                  "Area_mgn": "зона оказания услуги",
                  "Element_mgn": "места для инвалидов по слуху в зале",
                  "available_degree": "частично",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5398198,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "входная группа",
                  "Element_mgn": "платформа подъемная (мобильный лестничный подъемник)",
                  "available_degree": "недоступно",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5399834,
                  "Group_mgn": "инвалиды по зрению",
                  "Area_mgn": "территория объекта",
                  "Element_mgn": "безбарьерный путь до главного входа",
                  "available_degree": "частично",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5399835,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "зона оказания услуги",
                  "Element_mgn": "ширина полосы движения (при обслуживании с перемещением)",
                  "available_degree": "недоступно",
                  "available_index": "не соответствует"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5400669,
                  "Group_mgn": "инвалиды по зрению",
                  "Area_mgn": "входная группа",
                  "Element_mgn": "тактильная полоса перед входной лестницей",
                  "available_degree": "частично",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5400670,
                  "Group_mgn": "инвалиды-опорники",
                  "Area_mgn": "пути движения и эвакуации",
                  "Element_mgn": "лестницы на пути движения",
                  "available_degree": "частично",
                  "available_index": "есть"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5401490,
                  "Group_mgn": "инвалиды по зрению",
                  "Area_mgn": "пути движения и эвакуации",
                  "Element_mgn": "лестницы на пути движения",
                  "available_degree": "частично",
                  "available_index": "есть"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5402796,
                  "Group_mgn": "инвалиды-опорники",
                  "Area_mgn": "пути движения и эвакуации",
                  "Element_mgn": "поручни на имеющейся лестнице",
                  "available_degree": "частично",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5402797,
                  "Group_mgn": "инвалиды по зрению",
                  "Area_mgn": "санитарный узел",
                  "Element_mgn": "тактильное обозначение санузла",
                  "available_degree": "частично",
                  "available_index": "есть"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5402959,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "территория объекта",
                  "Element_mgn": "безбарьерный путь до главного входа",
                  "available_degree": "недоступно",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5403901,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "санитарный узел",
                  "Element_mgn": "габариты кабины",
                  "available_degree": "недоступно",
                  "available_index": "соответствует"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5405047,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "территория объекта",
                  "Element_mgn": "машино-место для инвалидов",
                  "available_degree": "недоступно",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5405048,
                  "Group_mgn": "инвалиды-опорники",
                  "Area_mgn": "территория объекта",
                  "Element_mgn": "машино-место для инвалидов",
                  "available_degree": "частично",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5408831,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "входная группа",
                  "Element_mgn": "пандус с поручнями и его уклон",
                  "available_degree": "недоступно",
                  "available_index": "нет"
                }
              ]
            }
          ],
          "global_id": 264212
        }
      ],
      "ChiefOrg": "Департамент культуры города Москвы",
      "ChiefName": "Волкова Наталья Анатольевна",
      "ChiefPosition": "заведующий",
      "PublicPhone": [
        {
          "is_deleted": 0,
          "PublicPhone": "(499) 129-56-11",
          "global_id": 199946
        },
        {
          "is_deleted": 0,
          "PublicPhone": "(499) 126-24-22",
          "global_id": 200078
        },
        {
          "is_deleted": 0,
          "PublicPhone": "(499) 126-67-94",
          "global_id": 200855
        }
      ],
      "Fax": [
        {
          "is_deleted": 0,
          "Fax": "(499) 129-56-11",
          "global_id": 136596
        }
      ],
      "Email": [
        {
          "is_deleted": 0,
          "Email": "okcuzao-lib-182@culture.mos.ru",
          "global_id": 147920
        }
      ],
      "WorkingHours": [
        {
          "is_deleted": 0,
          "DayWeek": "понедельник",
          "WorkHours": "выходной",
          "global_id": 1002568
        },
        {
          "is_deleted": 0,
          "DayWeek": "вторник",
          "WorkHours": "12:00-22:00",
          "global_id": 1001384
        },
        {
          "is_deleted": 0,
          "DayWeek": "среда",
          "WorkHours": "12:00-22:00",
          "global_id": 1002855
        },
        {
          "is_deleted": 0,
          "DayWeek": "четверг",
          "WorkHours": "12:00-22:00",
          "global_id": 1003569
        },
        {
          "is_deleted": 0,
          "DayWeek": "пятница",
          "WorkHours": "12:00-22:00",
          "global_id": 1001804
        },
        {
          "is_deleted": 0,
          "DayWeek": "суббота",
          "WorkHours": "12:00-22:00",
          "global_id": 1002394
        },
        {
          "is_deleted": 0,
          "DayWeek": "воскресенье",
          "WorkHours": "12:00-20:00",
          "global_id": 998399
        }
      ],
      "ClarificationOfWorkingHours": "Последний вторник месяца - санитарный день. Библиотека по адресу ул. Дмитрия Ульянова, д.43, корп.1 временно закрыт на ремонт",
      "WebSite": "kulturauzao.ru",
      "NumOfSeats": 24,
      "NumOfReaders": 2888,
      "NumOfVisitors": 33546,
      "global_id": 2639269568,
      "geoData": {
        "coordinates": [
          [
            37.585851168,
            55.690242954
          ],
          [
            37.592591476,
            55.681689973
          ]
        ],
        "type": "MultiPoint"
      },
      "geodata_center": null
    },
    {
      "is_deleted": 0,
      "Category": "Библиотека",
      "CommonName": "Библиотека №196",
      "FullName": "Государственное бюджетное учреждение культуры города Москвы «Объединение культурных центров Юго-Западного административного округа», Библиотека №196",
      "ShortName": "ГБУК г. Москвы «ОКЦ ЮЗАО», Библиотека №196",
      "OrgInfo": [
        {
          "is_deleted": 0,
          "ChiefPhone": [
            {
              "is_deleted": 0,
              "global_id": 153232,
              "ChiefPhone": "(495) 420-05-37"
            }
          ],
          "FullName": "Государственное бюджетное учреждение культуры города Москвы «Объединение культурных центров Юго-Западного административного округа»",
          "INN": "7728812089",
          "KPP": "772801001",
          "OGRN": "1127746506634",
          "LegalAddress": "117513, город Москва, Ленинский проспект, дом 127",
          "ChiefName": "Корчагин Олег Николаевич",
          "ChiefPosition": "генеральный директор",
          "global_id": 139095
        }
      ],
      "ObjectAddress": [
        {
          "is_deleted": 0,
          "AdmArea": "Юго-Западный административный округ",
          "District": "район Зюзино",
          "PostalCode": "117452",
          "Address": "Российская Федерация, город Москва, внутригородская территория муниципальный округ Зюзино, Симферопольский бульвар, дом 24, корпус 1",
          "Availability": [
            {
              "is_deleted": 0,
              "global_id": 135866,
              "available_k": "частично",
              "available_o": "полностью",
              "available_z": "частично",
              "available_s": "частично",
              "available_element": [
                {
                  "is_deleted": 0,
                  "global_id": 5350078,
                  "Group_mgn": "инвалиды-опорники",
                  "Area_mgn": "входная группа",
                  "Element_mgn": "поручни на имеющейся лестнице",
                  "available_degree": "полностью",
                  "available_index": "есть"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5350079,
                  "Group_mgn": "инвалиды-опорники",
                  "Area_mgn": "зона оказания услуги",
                  "Element_mgn": "ширина полосы движения (при обслуживании с перемещением)",
                  "available_degree": "полностью",
                  "available_index": "соответствует"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5352609,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "пути движения и эвакуации",
                  "Element_mgn": "лестницы на пути движения",
                  "available_degree": "частично",
                  "available_index": "есть"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5354055,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "входная группа",
                  "Element_mgn": "информационные указатели",
                  "available_degree": "частично",
                  "available_index": "есть"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5354225,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "территория объекта",
                  "Element_mgn": "безбарьерный путь до главного входа",
                  "available_degree": "частично",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5354226,
                  "Group_mgn": "инвалиды-опорники",
                  "Area_mgn": "территория объекта",
                  "Element_mgn": "машино-место для инвалидов",
                  "available_degree": "полностью",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5354227,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "санитарный узел",
                  "Element_mgn": "зона рядом с унитазом",
                  "available_degree": "частично",
                  "available_index": "есть"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5356616,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "пути движения и эвакуации",
                  "Element_mgn": "пандус с поручнями и его уклон",
                  "available_degree": "частично",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5360330,
                  "Group_mgn": "инвалиды-опорники",
                  "Area_mgn": "санитарный узел",
                  "Element_mgn": "поручень у раковины",
                  "available_degree": "полностью",
                  "available_index": "не соответствует"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5360460,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "пути движения и эвакуации",
                  "Element_mgn": "ширина полосы движения",
                  "available_degree": "частично",
                  "available_index": "не соответствует"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5367723,
                  "Group_mgn": "инвалиды-опорники",
                  "Area_mgn": "территория объекта",
                  "Element_mgn": "поручни на имеющейся лестнице",
                  "available_degree": "полностью",
                  "available_index": "есть"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5372585,
                  "Group_mgn": "инвалиды-опорники",
                  "Area_mgn": "территория объекта",
                  "Element_mgn": "безбарьерный путь до главного входа",
                  "available_degree": "полностью",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5374265,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "входная группа",
                  "Element_mgn": "платформа подъемная (мобильный лестничный подъемник)",
                  "available_degree": "частично",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5374524,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "пути движения и эвакуации",
                  "Element_mgn": "лифт",
                  "available_degree": "частично",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5376559,
                  "Group_mgn": "инвалиды-опорники",
                  "Area_mgn": "входная группа",
                  "Element_mgn": "нулевой вход",
                  "available_degree": "полностью",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5376560,
                  "Group_mgn": "инвалиды по слуху",
                  "Area_mgn": "пути движения и эвакуации",
                  "Element_mgn": "наличие указателей, пиктограмм",
                  "available_degree": "частично",
                  "available_index": "есть"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5377917,
                  "Group_mgn": "инвалиды по слуху",
                  "Area_mgn": "территория объекта",
                  "Element_mgn": "указатели направления движения",
                  "available_degree": "частично",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5379716,
                  "Group_mgn": "инвалиды по зрению",
                  "Area_mgn": "зона оказания услуги",
                  "Element_mgn": "тактильные средства информации",
                  "available_degree": "частично",
                  "available_index": "есть"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5380763,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "территория объекта",
                  "Element_mgn": "машино-место для инвалидов",
                  "available_degree": "частично",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5381928,
                  "Group_mgn": "инвалиды-опорники",
                  "Area_mgn": "пути движения и эвакуации",
                  "Element_mgn": "лестницы на пути движения",
                  "available_degree": "полностью",
                  "available_index": "есть"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5382912,
                  "Group_mgn": "инвалиды-опорники",
                  "Area_mgn": "зона оказания услуги",
                  "Element_mgn": "габариты зоны сидения (глубина)",
                  "available_degree": "полностью",
                  "available_index": "соответствует"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5382913,
                  "Group_mgn": "инвалиды по зрению",
                  "Area_mgn": "санитарный узел",
                  "Element_mgn": "тактильное обозначение санузла",
                  "available_degree": "частично",
                  "available_index": "есть"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5386129,
                  "Group_mgn": "инвалиды по зрению",
                  "Area_mgn": "территория объекта",
                  "Element_mgn": "безбарьерный путь до главного входа",
                  "available_degree": "частично",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5386130,
                  "Group_mgn": "инвалиды по зрению",
                  "Area_mgn": "пути движения и эвакуации",
                  "Element_mgn": "поручни на имеющейся лестнице",
                  "available_degree": "частично",
                  "available_index": "есть"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5386261,
                  "Group_mgn": "инвалиды по зрению",
                  "Area_mgn": "пути движения и эвакуации",
                  "Element_mgn": "контрастная маркировка ступеней",
                  "available_degree": "частично",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5388047,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "территория объекта",
                  "Element_mgn": "машино-место для инвалидов",
                  "available_degree": "частично",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5388274,
                  "Group_mgn": "инвалиды по зрению",
                  "Area_mgn": "входная группа",
                  "Element_mgn": "нулевой вход",
                  "available_degree": "частично",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5388275,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "пути движения и эвакуации",
                  "Element_mgn": "платформа подъемная (мобильный лестничный подъемник)",
                  "available_degree": "частично",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5388276,
                  "Group_mgn": "инвалиды-опорники",
                  "Area_mgn": "пути движения и эвакуации",
                  "Element_mgn": "поручни на имеющейся лестнице",
                  "available_degree": "полностью",
                  "available_index": "есть"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5388277,
                  "Group_mgn": "инвалиды-опорники",
                  "Area_mgn": "пути движения и эвакуации",
                  "Element_mgn": "лифт",
                  "available_degree": "полностью",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5388316,
                  "Group_mgn": "инвалиды по зрению",
                  "Area_mgn": "входная группа",
                  "Element_mgn": "поручни на имеющейся лестнице",
                  "available_degree": "частично",
                  "available_index": "есть"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5389492,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "зона оказания услуги",
                  "Element_mgn": "ширина полосы движения (при обслуживании с перемещением)",
                  "available_degree": "частично",
                  "available_index": "не соответствует"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5389994,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "территория объекта",
                  "Element_mgn": "информационные указатели",
                  "available_degree": "частично",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5389995,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "санитарный узел",
                  "Element_mgn": "зона у раковины для кресла-коляски",
                  "available_degree": "частично",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5389996,
                  "Group_mgn": "инвалиды-опорники",
                  "Area_mgn": "санитарный узел",
                  "Element_mgn": "поручни у унитаза",
                  "available_degree": "полностью",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5390350,
                  "Group_mgn": "инвалиды по слуху",
                  "Area_mgn": "зона оказания услуги",
                  "Element_mgn": "визуальные средства информации о предоставлении услуги",
                  "available_degree": "частично",
                  "available_index": "есть"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5394087,
                  "Group_mgn": "инвалиды по слуху",
                  "Area_mgn": "зона оказания услуги",
                  "Element_mgn": "места для инвалидов по слуху в зале",
                  "available_degree": "частично",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5397912,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "входная группа",
                  "Element_mgn": "нулевой вход",
                  "available_degree": "частично",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5399761,
                  "Group_mgn": "инвалиды-опорники",
                  "Area_mgn": "пути движения и эвакуации",
                  "Element_mgn": "ширина полосы движения",
                  "available_degree": "полностью",
                  "available_index": "соответствует"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5400863,
                  "Group_mgn": "инвалиды по слуху",
                  "Area_mgn": "пути движения и эвакуации",
                  "Element_mgn": "наличие надписей",
                  "available_degree": "частично",
                  "available_index": "есть"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5401510,
                  "Group_mgn": "инвалиды по зрению",
                  "Area_mgn": "территория объекта",
                  "Element_mgn": "поручни на имеющейся лестнице",
                  "available_degree": "частично",
                  "available_index": "есть"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5402983,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "входная группа",
                  "Element_mgn": "пандус с поручнями и его уклон",
                  "available_degree": "частично",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5402984,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "входная группа",
                  "Element_mgn": "ширина входной двери",
                  "available_degree": "частично",
                  "available_index": "не соответствует"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5406181,
                  "Group_mgn": "инвалиды по зрению",
                  "Area_mgn": "пути движения и эвакуации",
                  "Element_mgn": "лестницы на пути движения",
                  "available_degree": "частично",
                  "available_index": "есть"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5408109,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "зона оказания услуги",
                  "Element_mgn": "места для инвалидов-колясочников в зале",
                  "available_degree": "частично",
                  "available_index": "есть"
                }
              ]
            }
          ],
          "global_id": 264121
        }
      ],
      "ChiefOrg": "Департамент культуры города Москвы",
      "ChiefName": "Пронина Елена Николаевна",
      "ChiefPosition": "заведующий",
      "PublicPhone": [
        {
          "is_deleted": 0,
          "PublicPhone": "(495) 318-23-85",
          "global_id": 199889
        }
      ],
      "Fax": [
        {
          "is_deleted": 0,
          "Fax": "(495) 318-23-85",
          "global_id": 136539
        }
      ],
      "Email": [
        {
          "is_deleted": 0,
          "Email": "okcuzao-info@culture.mos.ru",
          "global_id": 147646
        }
      ],
      "WorkingHours": [
        {
          "is_deleted": 0,
          "DayWeek": "понедельник",
          "WorkHours": "выходной",
          "global_id": 1003824
        },
        {
          "is_deleted": 0,
          "DayWeek": "вторник",
          "WorkHours": "12:00-22:00",
          "global_id": 1002377
        },
        {
          "is_deleted": 0,
          "DayWeek": "среда",
          "WorkHours": "12:00-22:00",
          "global_id": 1001999
        },
        {
          "is_deleted": 0,
          "DayWeek": "четверг",
          "WorkHours": "12:00-22:00",
          "global_id": 1003749
        },
        {
          "is_deleted": 0,
          "DayWeek": "пятница",
          "WorkHours": "12:00-22:00",
          "global_id": 1002317
        },
        {
          "is_deleted": 0,
          "DayWeek": "суббота",
          "WorkHours": "12:00-22:00",
          "global_id": 1003628
        },
        {
          "is_deleted": 0,
          "DayWeek": "воскресенье",
          "WorkHours": "12:00-20:00",
          "global_id": 1001255
        }
      ],
      "ClarificationOfWorkingHours": "Санитарный день -Последний вторник месяца. В отделении по адресу улица Азовская, д. 33, корп. 1 расположен Обменно-резервный фонд. Население не обслуживается.",
      "WebSite": "kulturauzao.ru",
      "NumOfSeats": 22,
      "NumOfReaders": 4039,
      "NumOfVisitors": 24524,
      "global_id": 2639269569,
      "geoData": {
        "coordinates": [
          [
            37.602947569,
            55.645774702
          ]
        ],
        "type": "MultiPoint"
      },
      "geodata_center": null
    },
    {
      "is_deleted": 0,
      "Category": "Библиотека",
      "CommonName": "Библиотека № 185",
      "FullName": "Государственное бюджетное учреждение культуры города Москвы «Объединение культурных центров Юго-Западного административного округа», Библиотека №185",
      "ShortName": "ГБУК г. Москвы «ОКЦ ЮЗАО», Библиотека №185",
      "OrgInfo": [
        {
          "is_deleted": 0,
          "ChiefPhone": [
            {
              "is_deleted": 0,
              "global_id": 152719,
              "ChiefPhone": "(495) 420-05-37"
            }
          ],
          "FullName": "Государственное бюджетное учреждение культуры города Москвы «Объединение культурных центров Юго-Западного административного округа»",
          "INN": "7728812089",
          "KPP": "772801001",
          "OGRN": "1127746506634",
          "LegalAddress": "117513, город Москва, Ленинский проспект, дом 127",
          "ChiefName": "Корчагин Олег Николаевич",
          "ChiefPosition": "генеральный директор",
          "global_id": 139512
        }
      ],
      "ObjectAddress": [
        {
          "is_deleted": 0,
          "AdmArea": "Юго-Западный административный округ",
          "District": "район Котловка",
          "PostalCode": "117186",
          "Address": "Российская Федерация, город Москва, внутригородская территория муниципальный округ Котловка, Нагорный бульвар, дом 3",
          "Availability": [
            {
              "is_deleted": 0,
              "global_id": 136859,
              "available_k": "частично",
              "available_o": "частично",
              "available_z": "частично",
              "available_s": "частично",
              "available_element": [
                {
                  "is_deleted": 0,
                  "global_id": 5349823,
                  "Group_mgn": "инвалиды по зрению",
                  "Area_mgn": "зона оказания услуги",
                  "Element_mgn": "тактильные средства информации",
                  "available_degree": "частично",
                  "available_index": "есть"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5350082,
                  "Group_mgn": "инвалиды по зрению",
                  "Area_mgn": "пути движения и эвакуации",
                  "Element_mgn": "лестницы на пути движения",
                  "available_degree": "частично",
                  "available_index": "есть"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5354059,
                  "Group_mgn": "инвалиды по слуху",
                  "Area_mgn": "территория объекта",
                  "Element_mgn": "указатели направления движения",
                  "available_degree": "частично",
                  "available_index": "есть"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5356122,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "входная группа",
                  "Element_mgn": "нулевой вход",
                  "available_degree": "частично",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5356619,
                  "Group_mgn": "инвалиды по зрению",
                  "Area_mgn": "санитарный узел",
                  "Element_mgn": "тактильное обозначение санузла",
                  "available_degree": "частично",
                  "available_index": "есть"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5358679,
                  "Group_mgn": "инвалиды по зрению",
                  "Area_mgn": "территория объекта",
                  "Element_mgn": "безбарьерный путь до главного входа",
                  "available_degree": "частично",
                  "available_index": "есть"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5358680,
                  "Group_mgn": "инвалиды-опорники",
                  "Area_mgn": "входная группа",
                  "Element_mgn": "поручни на имеющейся лестнице",
                  "available_degree": "частично",
                  "available_index": "есть"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5358681,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "пути движения и эвакуации",
                  "Element_mgn": "лестницы на пути движения",
                  "available_degree": "частично",
                  "available_index": "есть"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5359890,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "санитарный узел",
                  "Element_mgn": "зона у раковины для кресла-коляски",
                  "available_degree": "частично",
                  "available_index": "есть"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5360461,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "зона оказания услуги",
                  "Element_mgn": "ширина дверей в кабинеты",
                  "available_degree": "частично",
                  "available_index": "соответствует"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5360610,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "территория объекта",
                  "Element_mgn": "машино-место для инвалидов",
                  "available_degree": "частично",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5360611,
                  "Group_mgn": "инвалиды-опорники",
                  "Area_mgn": "территория объекта",
                  "Element_mgn": "машино-место для инвалидов",
                  "available_degree": "частично",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5360612,
                  "Group_mgn": "инвалиды-опорники",
                  "Area_mgn": "входная группа",
                  "Element_mgn": "нулевой вход",
                  "available_degree": "частично",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5360613,
                  "Group_mgn": "инвалиды-опорники",
                  "Area_mgn": "пути движения и эвакуации",
                  "Element_mgn": "лестницы на пути движения",
                  "available_degree": "частично",
                  "available_index": "есть"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5364984,
                  "Group_mgn": "инвалиды по зрению",
                  "Area_mgn": "входная группа",
                  "Element_mgn": "поручни на имеющейся лестнице",
                  "available_degree": "частично",
                  "available_index": "есть"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5366787,
                  "Group_mgn": "инвалиды по слуху",
                  "Area_mgn": "зона оказания услуги",
                  "Element_mgn": "места для инвалидов по слуху в зале",
                  "available_degree": "частично",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5372587,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "входная группа",
                  "Element_mgn": "ширина входной двери",
                  "available_degree": "частично",
                  "available_index": "соответствует"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5372588,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "зона оказания услуги",
                  "Element_mgn": "обслуживание через окно/прилавок",
                  "available_degree": "частично",
                  "available_index": "не соответствует"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5374296,
                  "Group_mgn": "инвалиды по зрению",
                  "Area_mgn": "входная группа",
                  "Element_mgn": "нулевой вход",
                  "available_degree": "частично",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5374297,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "санитарный узел",
                  "Element_mgn": "зона рядом с унитазом",
                  "available_degree": "частично",
                  "available_index": "есть"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5374550,
                  "Group_mgn": "инвалиды по зрению",
                  "Area_mgn": "территория объекта",
                  "Element_mgn": "тактильная полоса перед лестницей",
                  "available_degree": "частично",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5376140,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "входная группа",
                  "Element_mgn": "платформа подъемная (мобильный лестничный подъемник)",
                  "available_degree": "частично",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5376434,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "пути движения и эвакуации",
                  "Element_mgn": "пандус с поручнями и его уклон",
                  "available_degree": "частично",
                  "available_index": "соответствует"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5376561,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "пути движения и эвакуации",
                  "Element_mgn": "лифт",
                  "available_degree": "частично",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5376562,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "зона оказания услуги",
                  "Element_mgn": "ширина полосы движения (при обслуживании с перемещением)",
                  "available_degree": "частично",
                  "available_index": "соответствует"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5376563,
                  "Group_mgn": "инвалиды по слуху",
                  "Area_mgn": "зона оказания услуги",
                  "Element_mgn": "визуальные средства информации о предоставлении услуги",
                  "available_degree": "частично",
                  "available_index": "есть"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5377419,
                  "Group_mgn": "инвалиды-опорники",
                  "Area_mgn": "пути движения и эвакуации",
                  "Element_mgn": "поручни на имеющейся лестнице",
                  "available_degree": "частично",
                  "available_index": "есть"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5377420,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "санитарный узел",
                  "Element_mgn": "габариты кабины",
                  "available_degree": "частично",
                  "available_index": "соответствует"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5379717,
                  "Group_mgn": "инвалиды по зрению",
                  "Area_mgn": "территория объекта",
                  "Element_mgn": "поручни на имеющейся лестнице",
                  "available_degree": "частично",
                  "available_index": "есть"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5379718,
                  "Group_mgn": "инвалиды по зрению",
                  "Area_mgn": "пути движения и эвакуации",
                  "Element_mgn": "поручни на имеющейся лестнице",
                  "available_degree": "частично",
                  "available_index": "есть"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5381929,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "пути движения и эвакуации",
                  "Element_mgn": "платформа подъемная (мобильный лестничный подъемник)",
                  "available_degree": "частично",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5381930,
                  "Group_mgn": "инвалиды по зрению",
                  "Area_mgn": "пути движения и эвакуации",
                  "Element_mgn": "контрастная маркировка ступеней",
                  "available_degree": "частично",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5382944,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "санитарный узел",
                  "Element_mgn": "ширина двери",
                  "available_degree": "частично",
                  "available_index": "соответствует"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5389493,
                  "Group_mgn": "инвалиды-опорники",
                  "Area_mgn": "пути движения и эвакуации",
                  "Element_mgn": "ширина полосы движения",
                  "available_degree": "частично",
                  "available_index": "соответствует"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5389494,
                  "Group_mgn": "инвалиды по слуху",
                  "Area_mgn": "пути движения и эвакуации",
                  "Element_mgn": "наличие надписей",
                  "available_degree": "частично",
                  "available_index": "есть"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5392470,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "входная группа",
                  "Element_mgn": "информационные указатели",
                  "available_degree": "частично",
                  "available_index": "есть"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5393721,
                  "Group_mgn": "инвалиды-опорники",
                  "Area_mgn": "территория объекта",
                  "Element_mgn": "безбарьерный путь до главного входа",
                  "available_degree": "частично",
                  "available_index": "есть"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5396141,
                  "Group_mgn": "инвалиды-опорники",
                  "Area_mgn": "пути движения и эвакуации",
                  "Element_mgn": "лифт",
                  "available_degree": "частично",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5398173,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "входная группа",
                  "Element_mgn": "пандус с поручнями и его уклон",
                  "available_degree": "частично",
                  "available_index": "соответствует"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5399782,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "территория объекта",
                  "Element_mgn": "безбарьерный путь до главного входа",
                  "available_degree": "частично",
                  "available_index": "есть"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5399783,
                  "Group_mgn": "инвалиды по зрению",
                  "Area_mgn": "входная группа",
                  "Element_mgn": "тактильная полоса перед входной лестницей",
                  "available_degree": "частично",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5399784,
                  "Group_mgn": "инвалиды по слуху",
                  "Area_mgn": "пути движения и эвакуации",
                  "Element_mgn": "наличие указателей, пиктограмм",
                  "available_degree": "частично",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5400867,
                  "Group_mgn": "инвалиды-опорники",
                  "Area_mgn": "зона оказания услуги",
                  "Element_mgn": "ширина полосы движения (при обслуживании с перемещением)",
                  "available_degree": "частично",
                  "available_index": "соответствует"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5403667,
                  "Group_mgn": "инвалиды-опорники",
                  "Area_mgn": "зона оказания услуги",
                  "Element_mgn": "габариты зоны сидения (глубина)",
                  "available_degree": "частично",
                  "available_index": "соответствует"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5405010,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "зона оказания услуги",
                  "Element_mgn": "места для инвалидов-колясочников в зале",
                  "available_degree": "частично",
                  "available_index": "есть"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5405011,
                  "Group_mgn": "инвалиды-опорники",
                  "Area_mgn": "санитарный узел",
                  "Element_mgn": "поручни у унитаза",
                  "available_degree": "частично",
                  "available_index": "есть"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5407443,
                  "Group_mgn": "инвалиды-опорники",
                  "Area_mgn": "территория объекта",
                  "Element_mgn": "поручни на имеющейся лестнице",
                  "available_degree": "частично",
                  "available_index": "есть"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5408112,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "территория объекта",
                  "Element_mgn": "информационные указатели",
                  "available_degree": "частично",
                  "available_index": "есть"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5408113,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "пути движения и эвакуации",
                  "Element_mgn": "ширина полосы движения",
                  "available_degree": "частично",
                  "available_index": "соответствует"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5409118,
                  "Group_mgn": "инвалиды-опорники",
                  "Area_mgn": "санитарный узел",
                  "Element_mgn": "поручень у раковины",
                  "available_degree": "частично",
                  "available_index": "есть"
                }
              ]
            }
          ],
          "global_id": 263549
        }
      ],
      "ChiefOrg": "Департамент культуры города Москвы",
      "ChiefName": "Корешкова Наталья Петровна",
      "ChiefPosition": "заведующий",
      "PublicPhone": [
        {
          "is_deleted": 0,
          "PublicPhone": "(499) 127-57-07",
          "global_id": 199879
        }
      ],
      "Fax": [
        {
          "is_deleted": 0,
          "Fax": "(499) 127-57-07",
          "global_id": 136862
        }
      ],
      "Email": [
        {
          "is_deleted": 0,
          "Email": "okcuzao-lib-185@culture.mos.ru",
          "global_id": 147310
        }
      ],
      "WorkingHours": [
        {
          "is_deleted": 0,
          "DayWeek": "понедельник",
          "WorkHours": "выходной",
          "global_id": 998937
        },
        {
          "is_deleted": 0,
          "DayWeek": "вторник",
          "WorkHours": "12:00-22:00",
          "global_id": 1000034
        },
        {
          "is_deleted": 0,
          "DayWeek": "среда",
          "WorkHours": "12:00-22:00",
          "global_id": 998088
        },
        {
          "is_deleted": 0,
          "DayWeek": "четверг",
          "WorkHours": "12:00-22:00",
          "global_id": 1003318
        },
        {
          "is_deleted": 0,
          "DayWeek": "пятница",
          "WorkHours": "12:00-22:00",
          "global_id": 1000262
        },
        {
          "is_deleted": 0,
          "DayWeek": "суббота",
          "WorkHours": "12:00-22:00",
          "global_id": 1002836
        },
        {
          "is_deleted": 0,
          "DayWeek": "воскресенье",
          "WorkHours": "12:00-20:00",
          "global_id": 999072
        }
      ],
      "ClarificationOfWorkingHours": "Санитарный день: последний вторник месяца",
      "WebSite": "kulturauzao.ru",
      "NumOfSeats": 20,
      "NumOfReaders": 3215,
      "NumOfVisitors": 26711,
      "global_id": 2639269578,
      "geoData": {
        "coordinates": [
          [
            37.592723568,
            55.674989714
          ]
        ],
        "type": "MultiPoint"
      },
      "geodata_center": null
    },
    {
      "is_deleted": 0,
      "Category": "Библиотека",
      "CommonName": "Библиотека №53",
      "FullName": "Государственное бюджетное учреждение культуры города Москвы «Объединение культурных центров Северо-Восточного административного округа», Библиотека №53",
      "ShortName": "ГБУК г. Москвы «ОКЦ СВАО», Библиотека №53",
      "OrgInfo": [
        {
          "is_deleted": 0,
          "ChiefPhone": [
            {
              "is_deleted": 0,
              "global_id": 153332,
              "ChiefPhone": "(495) 687-75-71"
            }
          ],
          "FullName": "Государственное бюджетное учреждение культуры города Москвы «Объединение культурных центров Северо-Восточного административного округа»",
          "INN": "7717694852",
          "KPP": "771501001",
          "OGRN": "1117746181497",
          "LegalAddress": "127521, г. Москва, улица Октябрьская, д. 58",
          "ChiefName": "Бурмистрова Марина Эдуардовна",
          "ChiefPosition": "генеральный директор",
          "global_id": 139049
        }
      ],
      "ObjectAddress": [
        {
          "is_deleted": 0,
          "AdmArea": "Северо-Восточный административный округ",
          "District": "район Свиблово",
          "PostalCode": "129323",
          "Address": "Российская Федерация, город Москва, внутригородская территория муниципальный округ Свиблово, улица Седова, дом 3",
          "Availability": [
            {
              "is_deleted": 0,
              "global_id": 137437,
              "available_k": "частично",
              "available_o": "частично",
              "available_z": "полностью",
              "available_s": "частично",
              "available_element": [
                {
                  "is_deleted": 0,
                  "global_id": 5348659,
                  "Group_mgn": "инвалиды по зрению",
                  "Area_mgn": "входная группа",
                  "Element_mgn": "поручни на имеющейся лестнице",
                  "available_degree": "полностью",
                  "available_index": "есть"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5350278,
                  "Group_mgn": "инвалиды по зрению",
                  "Area_mgn": "пути движения и эвакуации",
                  "Element_mgn": "лестницы на пути движения",
                  "available_degree": "полностью",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5356335,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "зона оказания услуги",
                  "Element_mgn": "ширина полосы движения (при обслуживании с перемещением)",
                  "available_degree": "полностью",
                  "available_index": "соответствует"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5360515,
                  "Group_mgn": "инвалиды-опорники",
                  "Area_mgn": "пути движения и эвакуации",
                  "Element_mgn": "лестницы на пути движения",
                  "available_degree": "полностью",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5360516,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "санитарный узел",
                  "Element_mgn": "ширина двери",
                  "available_degree": "полностью",
                  "available_index": "соответствует"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5364142,
                  "Group_mgn": "инвалиды-опорники",
                  "Area_mgn": "входная группа",
                  "Element_mgn": "поручни на имеющейся лестнице",
                  "available_degree": "полностью",
                  "available_index": "есть"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5364775,
                  "Group_mgn": "инвалиды по зрению",
                  "Area_mgn": "пути движения и эвакуации",
                  "Element_mgn": "контрастная маркировка ступеней",
                  "available_degree": "полностью",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5366386,
                  "Group_mgn": "инвалиды-опорники",
                  "Area_mgn": "пути движения и эвакуации",
                  "Element_mgn": "ширина полосы движения",
                  "available_degree": "полностью",
                  "available_index": "соответствует"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5366990,
                  "Group_mgn": "инвалиды по слуху",
                  "Area_mgn": "пути движения и эвакуации",
                  "Element_mgn": "наличие надписей",
                  "available_degree": "полностью",
                  "available_index": "есть"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5368686,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "входная группа",
                  "Element_mgn": "пандус с поручнями и его уклон",
                  "available_degree": "полностью",
                  "available_index": "соответствует"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5373870,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "входная группа",
                  "Element_mgn": "ширина входной двери",
                  "available_degree": "полностью",
                  "available_index": "соответствует"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5374176,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "пути движения и эвакуации",
                  "Element_mgn": "лестницы на пути движения",
                  "available_degree": "полностью",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5374778,
                  "Group_mgn": "инвалиды по зрению",
                  "Area_mgn": "входная группа",
                  "Element_mgn": "нулевой вход",
                  "available_degree": "полностью",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5375932,
                  "Group_mgn": "инвалиды-опорники",
                  "Area_mgn": "пути движения и эвакуации",
                  "Element_mgn": "поручни на имеющейся лестнице",
                  "available_degree": "полностью",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5378061,
                  "Group_mgn": "инвалиды по зрению",
                  "Area_mgn": "зона оказания услуги",
                  "Element_mgn": "тактильные средства информации",
                  "available_degree": "полностью",
                  "available_index": "есть"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5388419,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "пути движения и эвакуации",
                  "Element_mgn": "ширина полосы движения",
                  "available_degree": "полностью",
                  "available_index": "соответствует"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5388420,
                  "Group_mgn": "инвалиды-опорники",
                  "Area_mgn": "санитарный узел",
                  "Element_mgn": "поручни у унитаза",
                  "available_degree": "полностью",
                  "available_index": "есть"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5392753,
                  "Group_mgn": "инвалиды по зрению",
                  "Area_mgn": "пути движения и эвакуации",
                  "Element_mgn": "поручни на имеющейся лестнице",
                  "available_degree": "полностью",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5392754,
                  "Group_mgn": "инвалиды-опорники",
                  "Area_mgn": "зона оказания услуги",
                  "Element_mgn": "габариты зоны сидения (глубина)",
                  "available_degree": "полностью",
                  "available_index": "соответствует"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5394625,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "санитарный узел",
                  "Element_mgn": "зона рядом с унитазом",
                  "available_degree": "полностью",
                  "available_index": "есть"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5394731,
                  "Group_mgn": "инвалиды по слуху",
                  "Area_mgn": "пути движения и эвакуации",
                  "Element_mgn": "наличие указателей, пиктограмм",
                  "available_degree": "полностью",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5395468,
                  "Group_mgn": "инвалиды по зрению",
                  "Area_mgn": "входная группа",
                  "Element_mgn": "тактильная полоса перед входной лестницей",
                  "available_degree": "полностью",
                  "available_index": "есть"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5396522,
                  "Group_mgn": "инвалиды-опорники",
                  "Area_mgn": "зона оказания услуги",
                  "Element_mgn": "ширина полосы движения (при обслуживании с перемещением)",
                  "available_degree": "полностью",
                  "available_index": "соответствует"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5399390,
                  "Group_mgn": "инвалиды по слуху",
                  "Area_mgn": "зона оказания услуги",
                  "Element_mgn": "визуальные средства информации о предоставлении услуги",
                  "available_degree": "полностью",
                  "available_index": "есть"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5401223,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "пути движения и эвакуации",
                  "Element_mgn": "пандус с поручнями и его уклон",
                  "available_degree": "полностью",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5405388,
                  "Group_mgn": "инвалиды-опорники",
                  "Area_mgn": "входная группа",
                  "Element_mgn": "нулевой вход",
                  "available_degree": "полностью",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5405389,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "санитарный узел",
                  "Element_mgn": "зона у раковины для кресла-коляски",
                  "available_degree": "полностью",
                  "available_index": "есть"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5407457,
                  "Group_mgn": "инвалиды по зрению",
                  "Area_mgn": "санитарный узел",
                  "Element_mgn": "тактильное обозначение санузла",
                  "available_degree": "полностью",
                  "available_index": "есть"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5407678,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "входная группа",
                  "Element_mgn": "нулевой вход",
                  "available_degree": "полностью",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5407918,
                  "Group_mgn": "инвалиды-опорники",
                  "Area_mgn": "санитарный узел",
                  "Element_mgn": "поручень у раковины",
                  "available_degree": "полностью",
                  "available_index": "есть"
                }
              ]
            }
          ],
          "global_id": 264366
        },
        {
          "is_deleted": 0,
          "AdmArea": "Северо-Восточный административный округ",
          "District": "район Свиблово",
          "PostalCode": "129329",
          "Address": "Российская Федерация, город Москва, внутригородская территория муниципальный округ Свиблово, Тенистый проезд, дом 2, корпус 1",
          "Availability": [
            {
              "is_deleted": 0,
              "global_id": 137088,
              "available_k": "частично",
              "available_o": "частично",
              "available_z": "частично",
              "available_s": "частично",
              "available_element": [
                {
                  "is_deleted": 0,
                  "global_id": 5348640,
                  "Group_mgn": "инвалиды по зрению",
                  "Area_mgn": "пути движения и эвакуации",
                  "Element_mgn": "контрастная маркировка ступеней",
                  "available_degree": "недоступно",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5353871,
                  "Group_mgn": "инвалиды по слуху",
                  "Area_mgn": "пути движения и эвакуации",
                  "Element_mgn": "наличие указателей, пиктограмм",
                  "available_degree": "недоступно",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5356363,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "входная группа",
                  "Element_mgn": "платформа подъемная (мобильный лестничный подъемник)",
                  "available_degree": "частично",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5357201,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "входная группа",
                  "Element_mgn": "ширина входной двери",
                  "available_degree": "частично",
                  "available_index": "соответствует"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5357905,
                  "Group_mgn": "инвалиды-опорники",
                  "Area_mgn": "санитарный узел",
                  "Element_mgn": "поручень у раковины",
                  "available_degree": "недоступно",
                  "available_index": "не соответствует"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5358611,
                  "Group_mgn": "инвалиды-опорники",
                  "Area_mgn": "входная группа",
                  "Element_mgn": "нулевой вход",
                  "available_degree": "полностью",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5360795,
                  "Group_mgn": "инвалиды-опорники",
                  "Area_mgn": "пути движения и эвакуации",
                  "Element_mgn": "ширина полосы движения",
                  "available_degree": "частично",
                  "available_index": "соответствует"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5367275,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "зона оказания услуги",
                  "Element_mgn": "ширина полосы движения (при обслуживании с перемещением)",
                  "available_degree": "частично",
                  "available_index": "соответствует"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5370164,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "пути движения и эвакуации",
                  "Element_mgn": "пандус с поручнями и его уклон",
                  "available_degree": "частично",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5371513,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "пути движения и эвакуации",
                  "Element_mgn": "лестницы на пути движения",
                  "available_degree": "частично",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5375233,
                  "Group_mgn": "инвалиды по зрению",
                  "Area_mgn": "входная группа",
                  "Element_mgn": "поручни на имеющейся лестнице",
                  "available_degree": "частично",
                  "available_index": "есть"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5378232,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "входная группа",
                  "Element_mgn": "пандус с поручнями и его уклон",
                  "available_degree": "частично",
                  "available_index": "соответствует"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5379777,
                  "Group_mgn": "инвалиды по слуху",
                  "Area_mgn": "пути движения и эвакуации",
                  "Element_mgn": "наличие надписей",
                  "available_degree": "недоступно",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5381412,
                  "Group_mgn": "инвалиды по зрению",
                  "Area_mgn": "пути движения и эвакуации",
                  "Element_mgn": "лестницы на пути движения",
                  "available_degree": "недоступно",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5381413,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "зона оказания услуги",
                  "Element_mgn": "ширина дверей в кабинеты",
                  "available_degree": "частично",
                  "available_index": "соответствует"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5381761,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "санитарный узел",
                  "Element_mgn": "ширина двери",
                  "available_degree": "недоступно",
                  "available_index": "не соответствует"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5383600,
                  "Group_mgn": "инвалиды по слуху",
                  "Area_mgn": "зона оказания услуги",
                  "Element_mgn": "визуальные средства информации о предоставлении услуги",
                  "available_degree": "частично",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5384738,
                  "Group_mgn": "инвалиды-опорники",
                  "Area_mgn": "санитарный узел",
                  "Element_mgn": "поручни у унитаза",
                  "available_degree": "недоступно",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5384739,
                  "Group_mgn": "инвалиды по зрению",
                  "Area_mgn": "санитарный узел",
                  "Element_mgn": "тактильное обозначение санузла",
                  "available_degree": "недоступно",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5386032,
                  "Group_mgn": "инвалиды-опорники",
                  "Area_mgn": "зона оказания услуги",
                  "Element_mgn": "ширина полосы движения (при обслуживании с перемещением)",
                  "available_degree": "частично",
                  "available_index": "соответствует"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5394649,
                  "Group_mgn": "инвалиды-опорники",
                  "Area_mgn": "пути движения и эвакуации",
                  "Element_mgn": "лестницы на пути движения",
                  "available_degree": "частично",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5394896,
                  "Group_mgn": "инвалиды по зрению",
                  "Area_mgn": "входная группа",
                  "Element_mgn": "тактильная полоса перед входной лестницей",
                  "available_degree": "частично",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5395045,
                  "Group_mgn": "инвалиды-опорники",
                  "Area_mgn": "входная группа",
                  "Element_mgn": "поручни на имеющейся лестнице",
                  "available_degree": "полностью",
                  "available_index": "есть"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5396769,
                  "Group_mgn": "инвалиды по зрению",
                  "Area_mgn": "входная группа",
                  "Element_mgn": "нулевой вход",
                  "available_degree": "частично",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5398491,
                  "Group_mgn": "инвалиды-опорники",
                  "Area_mgn": "пути движения и эвакуации",
                  "Element_mgn": "поручни на имеющейся лестнице",
                  "available_degree": "частично",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5400820,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "пути движения и эвакуации",
                  "Element_mgn": "ширина полосы движения",
                  "available_degree": "частично",
                  "available_index": "соответствует"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5404604,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "санитарный узел",
                  "Element_mgn": "зона рядом с унитазом",
                  "available_degree": "недоступно",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5405372,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "зона оказания услуги",
                  "Element_mgn": "обслуживание через окно/прилавок",
                  "available_degree": "частично",
                  "available_index": "не соответствует"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5407767,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "входная группа",
                  "Element_mgn": "нулевой вход",
                  "available_degree": "частично",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5408010,
                  "Group_mgn": "инвалиды по зрению",
                  "Area_mgn": "пути движения и эвакуации",
                  "Element_mgn": "поручни на имеющейся лестнице",
                  "available_degree": "недоступно",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5408011,
                  "Group_mgn": "инвалиды по зрению",
                  "Area_mgn": "зона оказания услуги",
                  "Element_mgn": "тактильные средства информации",
                  "available_degree": "недоступно",
                  "available_index": "нет"
                },
                {
                  "is_deleted": 0,
                  "global_id": 5408501,
                  "Group_mgn": "инвалиды-колясочники",
                  "Area_mgn": "санитарный узел",
                  "Element_mgn": "зона у раковины для кресла-коляски",
                  "available_degree": "недоступно",
                  "available_index": "нет"
                }
              ]
            }
          ],
          "global_id": 265177
        }
      ],
      "ChiefOrg": "Департамент культуры города Москвы",
      "ChiefName": "Гребенщикова Елена Анатольевна",
      "ChiefPosition": "заведующий",
      "PublicPhone": [
        {
          "is_deleted": 0,
          "PublicPhone": "(499) 180-05-85",
          "global_id": 200113
        }
      ],
      "Fax": [],
      "Email": [
        {
          "is_deleted": 0,
          "Email": "biblioteka53@culture.mos.ru",
          "global_id": 148162
        }
      ],
      "WorkingHours": [
        {
          "is_deleted": 0,
          "DayWeek": "понедельник",
          "WorkHours": "выходной",
          "global_id": 1001873
        },
        {
          "is_deleted": 0,
          "DayWeek": "вторник",
          "WorkHours": "12:00-22:00",
          "global_id": 1002273
        },
        {
          "is_deleted": 0,
          "DayWeek": "среда",
          "WorkHours": "12:00-22:00",
          "global_id": 999101
        },
        {
          "is_deleted": 0,
          "DayWeek": "четверг",
          "WorkHours": "12:00-22:00",
          "global_id": 1000248
        },
        {
          "is_deleted": 0,
          "DayWeek": "пятница",
          "WorkHours": "12:00-22:00",
          "global_id": 1001393
        },
        {
          "is_deleted": 0,
          "DayWeek": "суббота",
          "WorkHours": "12:00-22:00",
          "global_id": 1003108
        },
        {
          "is_deleted": 0,
          "DayWeek": "воскресенье",
          "WorkHours": "12:00-20:00",
          "global_id": 999813
        }
      ],
      "ClarificationOfWorkingHours": "График работы библиотеки №53 по адресу Тенистый проезд, д.2, к.1: понедельник-пятница 12:00-20:00, суббота-воскресенье 12:00-18:00, понедельник - выходной, санитарный день — последний вторник месяца",
      "WebSite": "культурасвао.рф",
      "NumOfSeats": 23,
      "NumOfReaders": 1608,
      "NumOfVisitors": 32400,
      "global_id": 2639269580,
      "geoData": {
        "coordinates": [
          [
            37.635117983,
            55.85863721
          ],
          [
            37.643122914,
            55.851171359
          ]
        ],
        "type": "MultiPoint"
      },
      "geodata_center": null
    }
  ]

  getLibraries(): LibraryType[] {
    // заглушка для запроса списка библиотек
    return this.localLibraries
  }

}
