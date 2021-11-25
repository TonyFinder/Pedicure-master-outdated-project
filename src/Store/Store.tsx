export type ItemsType = {
    items: ItemType[]
}
export type ItemType = {
    id: number
    category: string
    name: string
    volume: number
    priceRegular: number
    priceDiscounted: number
    discount: string
}
export type DescriptionItemsType = {
    description: DescriptionItemType[]
}
export type DescriptionItemType = {
    id: number
    action: string[]
    ingredients: string[]
    apply: string
    picture: string
}
export type CategoriesType = {
    categories: CategoryType[]
}
export type CategoryType = {
    id: number
    category: string
}
export type StoreType = DescriptionItemsType & ItemsType & CategoriesType

export const store: StoreType = {
    description: [
        {
        id: 372,
        action: ['Мгновенное и продолжительное увлажнение 24 часа (подтверждено с помощью корнеометрии)', 'Заживление трещин и дефектов, заметное сокращение гиперкератоза за 7 дней', 'Значительное улучшение состояния сухой и грубой кожи через две недели', 'Восстановление кожи: рост синтеза коллагена типа III', 'Насыщенная текстура, легко впитывается, не липкий, без парабенов'],
        ingredients: ['Натуральное масло ши, масло макадамии и растительный глицерин способствуют увлажнению, питанию и восстановлению кожи. Восстанавливают барьерную функцию и гидролипидную пленку', 'Конский каштан и масло арники улучшают оксигенацию тканей, стимулируют микроциркуляцию, снимают воспаления', 'Ипарзин® 4А – эксклюзивный запатентованный ингредиент, поддерживает молодость кожи, способствует восстановлению, снимает воспаления'],
        apply: 'Применять 1-2 раза в день. Нанести на сухую чистую кожу, впитать массажными движениями.',
        picture: 'https://lh3.googleusercontent.com/wzK2jVj0pcAhIrteB4RtZTF0r6P8Lb2QQm1mWJZTR8lVIRMBuT6D_YiETTWRXMVOqZPexjWbBmJ_yzqKHDoNbMKs0EqCHukBeSAI8xjB9xTHDCyUHMtAzSEci-T2aPUYeY1pwgOhfJ6OkGgQRx3h4VCqmidBrktvwenWIFVwJ3zkECyj8yba_peW_u0dRq6X7r5jUErC13DWmr67IAc3ZC4cKLkrQkVWu_Do9FtoV7qgFLPdVCsxO-Ap3nkIOrNKcjELj5sjJWeQdkvNzfFBOl9Y8_jq7CNQuLuPanLbTT1vYy0jqecNgP5ll8bPsJ9O5qonF2hnLGMIO9xQ2EksrvJl7wpOR6a2opO6bOyg8dLKFiEYcHpCneg-sS2FzVisBQR2XNCevQXENhCNSSI52CwfiNEebmNKBQvNAhOtgCUs1LWe1MzqOmZP5UxqwnwvVUPyWgQuNmIZdG7zPfwtg3Pb56S7_Tc8HytaVrLBgYm-ujhb4JFmeUzdYYtg9MylvkV80ru6kSO07tH9SRg8B9I3ZDv1npUnsI1aStJ01oJoUamVaLhuGL7YFxsEp3Qm2dncD3obRqwINQruLiNebqBj0gVplhlBjTX-Nj0693XrsYimks65yipQ-on9pKK7yaZjNZ98QruUiAYhVPfR1M-MBLlHvL5072qKNuiejpOSTzfq1FXyB-5oQeX-yFRTf3zI32B7iJm24GPqBiG8pjK1=w150-h408-no?authuser=0'
    }, {
        id: 306,
        action: ['Мгновенное и продолжительное увлажнение 24 часа (подтверждено с помощью корнеометрии)', 'Заживление трещин и дефектов, заметное сокращение гиперкератоза за 7 дней', 'Значительное улучшение состояния сухой и грубой кожи через две недели', 'Восстановление кожи: рост синтеза коллагена типа III', 'Насыщенная текстура, легко впитывается, не липкий, без парабенов'],
        ingredients: ['Натуральное масло ши, масло макадамии и растительный глицерин способствуют увлажнению, питанию и восстановлению кожи. Восстанавливают барьерную функцию и гидролипидную пленку', 'Конский каштан и масло арники улучшают оксигенацию тканей, стимулируют микроциркуляцию, снимают воспаления', 'Ипарзин® 4А – эксклюзивный запатентованный ингредиент, поддерживает молодость кожи, способствует восстановлению, снимает воспаления'],
        apply: 'Применять 1-2 раза в день. Нанести на сухую чистую кожу, впитать массажными движениями.',
        picture: 'https://lh3.googleusercontent.com/wzK2jVj0pcAhIrteB4RtZTF0r6P8Lb2QQm1mWJZTR8lVIRMBuT6D_YiETTWRXMVOqZPexjWbBmJ_yzqKHDoNbMKs0EqCHukBeSAI8xjB9xTHDCyUHMtAzSEci-T2aPUYeY1pwgOhfJ6OkGgQRx3h4VCqmidBrktvwenWIFVwJ3zkECyj8yba_peW_u0dRq6X7r5jUErC13DWmr67IAc3ZC4cKLkrQkVWu_Do9FtoV7qgFLPdVCsxO-Ap3nkIOrNKcjELj5sjJWeQdkvNzfFBOl9Y8_jq7CNQuLuPanLbTT1vYy0jqecNgP5ll8bPsJ9O5qonF2hnLGMIO9xQ2EksrvJl7wpOR6a2opO6bOyg8dLKFiEYcHpCneg-sS2FzVisBQR2XNCevQXENhCNSSI52CwfiNEebmNKBQvNAhOtgCUs1LWe1MzqOmZP5UxqwnwvVUPyWgQuNmIZdG7zPfwtg3Pb56S7_Tc8HytaVrLBgYm-ujhb4JFmeUzdYYtg9MylvkV80ru6kSO07tH9SRg8B9I3ZDv1npUnsI1aStJ01oJoUamVaLhuGL7YFxsEp3Qm2dncD3obRqwINQruLiNebqBj0gVplhlBjTX-Nj0693XrsYimks65yipQ-on9pKK7yaZjNZ98QruUiAYhVPfR1M-MBLlHvL5072qKNuiejpOSTzfq1FXyB-5oQeX-yFRTf3zI32B7iJm24GPqBiG8pjK1=w150-h408-no?authuser=0'
    }, {
        id: 832,
        action: ['Решает проблему сильно обезвоженной кожи с жесткими ороговениями и гиперкератозом', 'Интенсивно увлажняет с первого применения', 'Заметно снижает гиперкератоз уже за 7 дней', 'Снижает риск инфекции, восстанавливает естественный защитный барьер кожи'],
        ingredients: ['Масла рыжика посевного (Camelina Sativa) и виноградных косточек восстанавливают защитные функции кожи', 'Императа цилиндрическая обладает мощным увлажняющим действием', 'Липестеры®* шелка, серин и провитамин B5 защищают кожу от бактерий, увлажняют и предотвращают образование гиперкератоза'],
        apply: 'Наносить на сухую чистую кожу стопы 1-2 раза в день, впитывать массажными движениями. Быстро впитывается, не оставляет пленку на коже.',
        picture: 'https://lh3.googleusercontent.com/I4enN7heyhvYZHiDcHM_zPj9Ah2nQpllCQ9_478XyQ--Iiw2OACTHOHH8QMb-dwzEPrLBYZGt6Oyk3HBk-IooJdqEXeB7O2UU-lZWFMf64Osf_BJm1mD12YI0p9-h5NVKeGa5S4zCRrTafuzS9cLbksVig3rh61Afh34vATso40H0-iXaK8CdaADmDwfsujli51Y5b0Okq847XUSbcwhcy_sPUBw-eyTVEdiqxM-9KiXcDT8Kv2bjvIvP2-jPPlCnNzzl0uti06llX4zZPUJ-xussLrvhHGOU884EBYYCtwJ-X-_W705gMUs252XgKtwg1rxJjGmhmjPq53EYvQJk1Jm1OZ6i9yY6E0zkGNrs2CuBsZ68tKuTmSELxMWRjsR5MB4vHR3NmCsbll0-nI-uQlxP9606-Meo4B1SV7YSd6T0l9mNhL8OrDzQ4dTrG3oNiiLnTtoj8VHXT3YaAPPiuH45YVamvuuQi6Mli9g5lBvthps1nscKfrKMsTUrdN9p1mWQ-R_M85O6MkMsD1Mf-KwK3g49oI8jNgw_Myv7zMHFwlW8NCILzY7YiOZGMTq7x_IKxMtYjVO8FnJCpHlK89hnhS-7J2j2rxhWPiChsdPn-SXEj_MCQNsNxHNRAwQLMrRUO3IMFlmeotuMXe5Iw_gQccSnyyIV-NrVXbt40Q6vATefGK8k7DcKi3NEhwoo7OFR-N6y8zBy-iqHPkdxGII=w150-h413-no?authuser=0'
    }, {
        id: 1111,
        action: ['Интенсивное увлажение с первого применения, подтвержденное корнеометрией', 'За неделю применения заживляет мелкие трещины', 'Разглаживает проявления гиперкератоза', 'Создаёт эффект гладкой, увлажнённой и восстановленной кожи'],
        ingredients: ['Масло виноградной косточки восстанавливает барьерную функцию кожи, сокращает трансэпидермальную потерю влаги', 'Мочевина 15% обладает кератолитическим и отшелушивающим эффектом, стимулирует обновление эпидермиса', 'Папаин – энзим с отшелушивающим эффектом', 'Экстракт императы цилиндрической – растения из пустыни с мощным увлажняющим действием', 'Аллантоин увлажняет, успокаивает и заживляет микроповреждения'],
        apply: 'Наносить утром и вечером на чистую кожу стопы, впитать массажными движениями. Приятная консистенция облегчает полное впитывание.',
        picture: 'https://lh3.googleusercontent.com/32WSazOqs8eoTJUQhXMnAOQ79ePLCEIx8MmkxbSxOzR24XFDK04fFb-G1_29SShhFm221l8ZYT9vRKjladA77jGf3beUq9_P-KyGhY6Mlcflzh8YfrX31o_DGF9cOWFFzMzYWV0GNIrV-6fn-3_FEzGU8wMasS9F1W_lzAFy6tFSSCUoqeywhM1AGPncRCi4_ro9pnT6kAYmaiOEQ4G-BXVhGlcWVhrFhSoR6ApQn9xNY69h4DJD6Uc3s9ZsRk0TLnfKVq6k57PyRB8w0wVS0LeMiUBlGMW-w29wexvvLA7C4FPSmvgcQl03bjL2KCZj5LfIxCGZnZAqHTPZMTnCZNvTQiTHQQ-aYpJ5CAJr6Atu3nFMLw-XdmoMTbKXlsOybSVPTCWojJuM3gl87xiacvbFlXKCnLlKaRBw_oCLZYu0rkpxMLVKkCztpJ3wT6lFSBVjdCiTDeW-2CQpD5gTVN75En5BDbf5V01tpQ95eyMzHqTL4CquvxaeXuMlZUUBbgplXA-xEYAbd25mkkbUdlHNCp4ezcVkQ6EX2jnhysIYG16xiEXxWOcV13N-bR1NI6SXsaNrIvgrwS8P-xJbtLUTtHtRh6zV99WYKqrFrAYAzXc0MgFY8WiynxRKBiDEvLUZOiY5j3FNVvOES8-aisaBKKctd3nCm_a_x1Ou0BwsQ2TCZj6SX9O-SmKRpft4LIRdbK_tInUL5I7pP1HNwjXq=w150-h283-no?authuser=0'
    }, {
        id: 991312,
        action: ['Интенсивное увлажение с первого применения, подтвержденное корнеометрией', 'За неделю применения заживляет мелкие трещины', 'Разглаживает проявления гиперкератоза', 'Создаёт эффект гладкой, увлажнённой и восстановленной кожи'],
        ingredients: ['Масло виноградной косточки восстанавливает барьерную функцию кожи, сокращает трансэпидермальную потерю влаги', 'Мочевина 15% обладает кератолитическим и отшелушивающим эффектом, стимулирует обновление эпидермиса', 'Папаин – энзим с отшелушивающим эффектом', 'Экстракт императы цилиндрической – растения из пустыни с мощным увлажняющим действием', 'Аллантоин увлажняет, успокаивает и заживляет микроповреждения'],
        apply: 'Наносить утром и вечером на чистую кожу стопы, впитать массажными движениями. Приятная консистенция облегчает полное впитывание.',
        picture: 'https://lh3.googleusercontent.com/xARtvZ7grSdgQcpbEZ4hE5YZehg1KX9duP8cY27OD_-S2acavYHM8ntiYdCRGUvVbVvmck8uNTymmzjsK5Os5kkFBGnrbZXRjAkLBXViokz6AoCJhIfYC8XWNsnpf9LHwfcgTBZAUogpwMAHdRrhvQc7Z25yX0PiMGxyfgLGmY2U03UKOr0aLlgoD_w3WH1MXIjdUg8gYJK2KmcJUIOjDmfLje_RuJfUIHmjiarSII6JaHq_x-aWnsRWNh7UYOdV-Yp5yUtctfor_edyaDqv_4Lf-QDIezVaSx4AA-qAhx_bnqTMD7Isj8zxd09Iz-YMyr7F4kwbRKyjluQ8EIeJwYtxhnH5SZtUfItXRbOtU8favpzsk6aei6BLgSPQwcuHNyy7DV5gbv5EKxNkRvUautBt1AfxjOSbpc9iHxiAqz1UVxtA9xN6cdVvLwe4HPQoQ2o5s3WZxtgIsEfWd_Kh4FBJ_JQvwrVX3WRA0WULc9fPCmneKa4KBfhhoEWVh_lTfzpGdv-gLIueOfTkrJ3-MNqA72i2TeCpD4e2fU3Fp46wQ2QxZ7jTaZH--eQYoRNs4aT3zvnSr0EJGJRYoWOx6EK-hz4Osa1IWlI9ogFvutuh1pyVI2nwfTBbG8AVVyefD-ZhfeU94ZYI0s669K44A4lHJDgFUo6XJEaZ7EfUXYm6Kv787skwewdiJKEYpGmUGfv_HzVb2drEU9AnC4MvY0PF=w150-h283-no?authuser=0'
    }, {
        id: 1302,
        action: ['Эффект интенсивного увлажнения (+203%) за 15 минут', 'Возвращает грубой коже стопы незаменимые элементы, обеспечивающие мягкость и эластичность', 'Применяется для немедленного эффекта (15 минут) и оптимального эффекта (на ночь)', 'Нежирная консистенция, формула адаптирована для сильно обезвоженной кожи стоп'],
        ingredients: ['Масло Ши и масло жожоба: обладают смягчающим и питательным эффектом, обеспечивающим комфорт и защиту Вашей кожи', 'Витамин Е и Algisium® C – комплекс, препятствующий воспалениям и подавляющий свободные радикалы, комбинация органического силикона и витамина Е снимает ощущения натянутости и дискомфорта, защищая кожу', 'Экстракты моркови и персика: богатые питательными и смягчающими компонентами экстракты стимулируют обновление эпидермиса'],
        apply: 'Для быстрого эффекта: нанести на чистую и сухую кожу стопы, выждать 15 минут, излишки снять салфеткой. Для оптимального эффекта: перед сном нанести на чистую и сухую кожу стопы, надеть носки, оставить на ночь.',
        picture: 'https://lh3.googleusercontent.com/AnTirQtipmdKMQfRtBiipBNMaDJ2AvyII-Dt7yaX4kCU4Su_5SH3LA65vYSjiGZ5eva5dZXP23UGcOisx59UFJnhrQfTgq4ps7ut3U08rtnZkEnRtQ4MNlL8idpZg5POgMXIMGV6-Ohhg0uZWQ9vm7Jiw67LLV_-h7v02hwOBQRe3MOl2ztIs5j3CPWh-eXDKGHr7OkmffZqCOpWJEaene9_-RhSsUiIHyYHy_3Fk1VW-vsAj-QtvFkXmgQQVvIXg7glTMy7oDN7NIku0yogB2tYOG6LYRidwJFQtx2QaOfVxDG5aRIp3fbWXg5-MtXsTgdIsUIQkkdazEE5fwSEDXD3OpPaTmWwSMEiEffnZDu2OKN-7OR9I_l3AtFO2YG6NzQ__XH73sRGRAk2bug0EREk25n4VCNSdp696c1lVNPWqAZmiECRs5PFE4Wf2Xy85Q7KZA1quVqA_c9uKo-qBhkjoPu-O2cwJfur4TDpLQSK6twQisofU5TrVxyXTLswlx-YZbiN7-3lphkXHztWIJCQFr9MxWmbgx0qa-RRZsyf9mHU5nbiZ5xds6Di7MyLn-_Yuc8HCjcGtcw90OGSL9pXWDY86CtNW4o8cfgOEB2j8ia_gQxvJ2CVhNB4t_dh8I5tAL3J3Cr3nxdRh-c8dy2eY_jbrwT_P82zmVwGiPE3-hRZ6wTPLJCZD-teol4CitbzjELoczGQ22Ty9E3BtJvo=w150-h288-no?authuser=0'
    }, {
        id: 889,
        action: ['Регулирует потоотделение и нейтрализует неприятные запахи, дарит приятное ощущение прохлады «горящей» стопе', 'Эффективен даже при патологическом гипергидрозе'],
        ingredients: ['Липоаминокислоты регулируют потоотделение не нарушая естественный pH и физиологию кожи', 'Экстракт лишайника обладает антибактериальным действием, предотвращает развитие неприятных запахов, возникающих из-за разложения пота бактериями', 'Двойная система поглощения запахов поглощает и нейтрализует неприятные запахи с момента их появления'],
        apply: 'Применять 1-2 раза в день. Нанести на сухую чистую кожу стопы, уделяя внимание пространству между пальцами. Впитать массажными движениями.',
        picture: 'https://lh3.googleusercontent.com/hsy8i8f4Ui19L_N1OeDtdAaSGDTjfA2_7oTmHTulIG6CwS9WO3UWOTL-7aAuv3CwgwZi2dM2pbkyXbmJdFpMlNzNf0fTsL35m-Ms726u3rv3LaM3VOi-4rRdC50UGsklJmn2b9U45VCmtvn5kz3z7_QVXib_5sgdAVsRIgjyjHECRjPBqn9htuFW-FRQg-fNzSmZ1GWLp2OazYyfQqYEO_LN21pn2N2l2ok2GW0pF0SDW7JgoUNHQiCZ2Xx4wMfCR_Aw5M7Uud6sWKI5qO7fnNiAVUvlxZ8riJpIxO5W-YGKqLD3CWPUfKlRzi_Cyb5DBEJprnJaCAOH5OoE3iMTzTunZlY2v4wWOPEFx7gl7kt7_oyOWYxp9xz9IZRSUaQib2aSH9fnUC-M9vTOgzB5GObYO-W1ghRgSarQd1ZhkLlO3LKQIpw6cstp26CYkJv_CP2V9-0LCw1h9M2eDH0_5i_ReoWtzWg0NZ2nzDDTcP09xbUBDLmcUwmdOehKpW44tyjFuEl2WPyEOWitH52h5PpGdIfpaCpjjt_QNR-xApjHWr8lTjPsE4_C7_JFqnuNQbeXXHsTpk22kt5qUMqhe7TevU4qHr9KIxUU_egcasluMs-I-SsWIjT_LmrQ9fT8iijQk9nNloJimeHAay_DIVmkijRMetWi3pltKJ8GDQjJWqb_oZG9PvoCNPp5ToCu0kBwRUBoi3FpocGJkFQ0lUz8=w150-h298-no?authuser=0'
    }, {
        id: 367,
        action: ['Быстро регулирует сильное потоотделение, защищает кожу от раздражения и агрессивного воздействия пота', 'Формула приспособлена для очень чувствительной кожи: подходит для детей от 6 лет и взрослых с чувствительной кожей (микозы, мацерация, сахарный диабет)'],
        ingredients: ['Липестеры® шелка и серина – запатентованная противогрибковая формула защищает и дезодорирует кожу', 'Липоаминокислота C8G/Al – производная глицина, аминокислота с заживляющим действием'],
        apply: 'Применять 1-2 раза в день. Нанести на сухую чистую кожу стопы, уделяя внимание пространству между пальцами.',
        picture: 'https://lh3.googleusercontent.com/n5-sJdUD_Zwfdow2zOG6j7_Oor2zrAHzfFFyyDDdvvxGex9z-eZiVc-QEhzmOxGK-YaGnRovXcsS14r4kFyCeO-pW3ypmEP6C_YsOGYFuXm4w7UbnC98X1uZpTpfYBthfm0fLXwV5Bqgc3R35Kk_V28tNK8HGyFfbdwMrMA4_ssKhuGa6ewHpvrBXtAuhKRMkJe5n0JNGSZ4S8l110N7NlYaetMZh49h2nJLbKdKmL5s3iYd5iL1Ywv7KeEcoRb323hbkM6Tb7axDLiM2qJ1gvcif4sC0qdx8qgmnzXFJ4nknRYYpwKr_IHLtpBpRtEpHTka7DShdOVT0cij4DOguZqTkvlMrxA_cmzatTEqYqPDEHpHHTrsrwX6MoIhBOOUjBRGOByrIH7BH7M3koPCL2PUY1KZCYS4WQaZhLYdYmblB7txSUGtzJBxNdY0uq4zNPkVqTXIP8IysRj4IZ9E0LCGQhwVXHgM1vY-yEm3vO38-n-ILCEdyZeATSoHSdfF39Fn6n268YSVCsZ4eI8IhXQfRkJUBfHYU_-ub0XoOV2zzdmqybFHvxxP6NcrMqHjJFkFwV6MEXVvuHKzHFENwM26YxsjMztewaPQR4fkpiCY90niHnlcD_xZiDl-YXhwIvqdYkiEF401ZNCAj22jJHuXbctwRX5by4T79G_9pfmOuQZJUbZ-LFZKmZgJ7ymmsO_CQ6QEbG_jncTNnOqoZ8rw=w150-h408-no?authuser=0'
    }, {
        id: 888,
        action: ['Мгновенный освежающий эффект', 'Регулирует потоотделение и неприятные запахи', 'Надежно действует в течение всего дня', 'Имеет приятный запах, очень прост и комфортен в применении'],
        ingredients: ['Хлоргидрат алюминия, соли аллантоина регулируют потоотделение, снижают раздражение кожи', 'Экстракт лишайника с высоким содержанием усниновой кислоты, мощного природного антибактериального средства, предотвращает развитие запахов, возникающих из-за разложения пота бактериями', 'Двойная система поглощения запахов поглощает и нейтрализует неприятные запахи с момента их появления'],
        apply: 'Применять 1 раз в день по утрам. Нанести на сухую чистую кожу стопы. Дать высохнуть на коже одну минуту.',
        picture: 'https://lh3.googleusercontent.com/RoEdi_SlVxwZzI9zYO-8QmCnVO3hAIU30mhm_VClpyUf-4PfHQuJSpDdJKG456frcd76MHh3uGbJsl06dAkSuem51-5hWI73wZdJ9whZx6enjc0NDvdOmI_ABtUiwk37dB0WZjJdm4NT3zblMRLpIr_6_-eHkzNWf2-F9c0LQYgtHvSRXYGufFY2MgvF_KEZiAsAmgAmXW1QBIxIF52MazbJnhjUlXYS7zzXata309pl_huAcsW_HckHQk6WJzqLmZYnIw_pT7nwPUaro1ewzQFA84XFo1WTxdlymYK3hqM0UaK7oqsZmGvDxjxaTPOSKU5JjV96sVdHQOPlLIIRIBO8HUhb3y1quDZzo8OkzDoK-2aAelcn0mHp-jV7UE20WvJO2IVf17P8FWTnc3EU66bkTMIBxVaG7JBDbZnVrAxEnr_cI_Od7ksSWMgWqVlVEnLt6grV5Q3PyGLj-9waTLaEI4x2qcBLmjdZSmQgjMJgB-LKKgdcNIu_tr715F4qOBlHoCu7xjo37BBr76d35LxYqZ_IengmPzgyb6_WQNw41jBr5cStopA37l_pHeD81yNDVsNKA712J_B8eLIKKBaJYJc5MdyaK7NI_ZUDQcvFTF1YN2vHzvXajttx6oUQQLpz-y4OyqCnFJIctQ9eI4WpD_1qQ0ab-fyHUGkIsU4cKkyvsT7jiv75J1JdZ2ZfpBurikY0OBS-ZYK-e4hhznvt=w150-h593-no?authuser=0'
    }, {
        id: 370,
        action: ['Регулируют потоотделение, дезодорируют, создают немедленный комфорт', 'Создают защитную пленку, предотвращающую перегрев стопы', 'Быстро впитывают излишки влаги', 'Идеальная формула для проблемной (склонной к микозам) кожи'],
        ingredients: ['Липестеры® шелка и серина – запатентованная противогрибковая формула, защищает и дезодорирует кожу', 'Липоаминокислота C8G/Al – производная глицина, аминокислота с заживляющим действием – регулирует потоотделение, не нарушая pH и физиологию кожи', 'Микронизированный тальк создает защитную пленку, впитывает влагу и защищает от перегрева'],
        apply: 'Применять 1 раз в день утром. Нанести на сухую чистую кожу стопы.',
        picture: 'https://lh3.googleusercontent.com/xoiYNo3Sez6qxJuPiePRyzmaLWLQOJ1YJreqYEG33cLOz7uoHQpvFIL-lAhVBcdmgmCZzOxEO33lWyFzCpN_H9Ez8WwPDqc6pXDtY9UMCnsUwIIPubPHPYT_A4zYeztOdVHo1jMH5wv0DKOI1d8XXa1nc2fm-8C0KI_N0x_FupdQJmzGfc6NeCmjX7fEiDLftG6WDtSAZioQPMu265hxNFCNUL-LiGQDaawJb3sP_7U1pPH25v_fp_45B34nRJR9tVwM_oKORV_OgSzxnJKGwEfC68tkfzvTbZT288aPfN03qx1VaBNeHmsSa1WqHiMX90V9SiawHQ68n5MUQD-LXFq0aPpOP74yrx-DAE9yA_Y6Lde5vSLZd0AC06MAaI-s_R7WkD70qYqNMy7wTTAj3GStd0nJxMTheZ3JQfJDWGM09WIt440pkQ4KIxlyYemnvLBo_qjwsgsz56GXNgoiAQz0oDqvCUNNcZ5Fai89aM6FvuE-UQfMkUW6anfKqZZRw7qBYS20NSFgfNVV1eHPqk20ExcFLyqiBCaBo6Nf7nUmQ7pBbIj1Nfh2t_-T7kG5tv3_tPcZgAjlukw9rsZkGCOJPeUp86OdROxN3dtQJIO6vTKS61asMXr3b9xAGj8ps5YJntNTsmv4IAqFwArtojNNxkuetCybK3jXGf2YdjUSXGl4KPopIyb1aTrjCPqZU5DYqSELsyYjN3V6bdATrGG4=w150-h646-no?authuser=0'
    }, {
        id: 369,
        action: ['Антисептик, который дезодорирует и дезинфицирует внутреннюю поверхность обуви', 'Обеспечивает приятное ощущение чистоты на продолжительное время', 'Увеличивает срок службы обуви', 'Предупреждает развитие инфекций, обладает антибактериальным эффектом', 'Эффективен против плесени, дрожжей, дерматофитов'],
        ingredients: ['Липестеры® шелка и серина – запатентованная противогрибковая формула, защищает и дезодорирует кожу', 'Липоаминокислота C8G/Al – производная глицина, аминокислота с заживляющим действием – регулирует потоотделение, не нарушая pH и физиологию кожи', 'Мелкодисперсный тальк создает защитную пленку, впитывает влагу.'],
        apply: 'Вечером распылить средство на внутреннюю поверхность обуви и оставить на ночь. Специальная форсунка позволяет использовать его даже в полностью перевернутом положении. Можно использовать для обуви детей от 3-х лет.',
        picture: 'https://lh3.googleusercontent.com/0pMPqcOXOSrXxv8PZ6lQq4SgGN_6MPYs8_OsovK0bZ_cwAXblWTNNy_g4TEXDJ7Yy0r5mJU-R2g2GSl0wltCTeGx4AIk0K285LVQN-hAEHKwrYLfm4DH5pxTHIViXXwViPUlCOBQmS23NikjdMFGjDwVSxM0xn2pscFnOIn5VU7WsbUTj7wSKaTgW2vl6MbjKql1HXe_7pwYbroE4eqUq82Wq005sJ591d3UyWRs-GxaMyMbxEdaHnkb5iGg0PO7M5xHdHkPRiFoyjJrgWQ3h0QVHoDubVTKncR54jF5HO2VoK76vrB_kX7_oozK9s621EOIZimOtLvAUzA47_iwcEWWTf0mL7l_7ia-Z96xVT3qtnbg8H6FmtSla9YjnCUIO-Um4D3zKGe_0a08lxlzw54er-lbt8RUGRbeHiRpbHEwfHc5ZGsjw4WdusHq955Fr7Cs_9kn6bqBiZHxO6CLVnSypidpzMUi0RrEDwS8cG6sI-GZjnD6gJ-HpN2OC8L1af1d0TjdOfX3b3SPds1gLWhL9InavRbYOe3ax_Tid_9A70nWpf10DBM6Y7MSgmeOxKABb-5dPcB-w3EHVUALlF5o5XUjQkSfZwhhBkLq9tQ4zXcObQZEo53zqdFAxJLjqJIyKNfQ9ys0YCirW6iDCXrFt2Q_BPLu1odWfAQlUhA3kY6YnREUCgArs9RZa1ml-beK6ZbJf240rmELCN-38D9i=w150-h511-no?authuser=0'
    }, {
        id: 991039,
        action: ['Способствует заживлению трещин', 'Видимые улучшения с первой недели', 'Увлажняет кожу, предотвращает образование гиперкератоза (натоптышей)', 'Дает облегчение при болезненных трещинах с первой недели', 'Снимает воспаления'],
        ingredients: ['Липестеры® шелка и серина предотвращают гиперкератоз', 'D-пантенол, центелла азиатская ускоряют заживление', 'Полиненасыщенные жирные кислоты восстанавливают липидный барьер', 'Растительный глицерин, пчелиный воск увлажняют кожу', 'Эноксолон (экстракт корня лакрицы) снимает воспаления и зуд'],
        apply: 'Наносить 2 раза в день локально в области трещин или гиперкератоза',
        picture: 'https://lh3.googleusercontent.com/KaGJGgIct0DggL682P48WcDJ1Cg7pw5anO-OW52v6NgP8LLTj2IWR2cqgDJPbhSH-a5FaLlzcpSJ5-eGhEWISwdzdZt37X3MG3iWQp-41S1m1HUQ9C7ePSZPgKRuKJz2VKqbQeb--cVqTUgloK1sy0VDno3Hj0oYicj2Nv-uQtWxgA-1C2CNJCTeMgwh4nEn3z1pVwc9XRrXCRgbHPCejyKA7KcPvydTxZZnamEojCLyraos964D5OBiG4J6yzlFg_McBicNKJjQJD4sC48Ut0Kl_GJISsQFQBHjMd2DdY8rtN1xSReQ-Y7E3h9BANnqxeW5FI9AD6ut-WAdQMtdYsE4gCEuJ-alZvDNe0XOfGSbfPdg-2T5U1uoW-09Maw9FV_HiA_QMOR1I0GNCfCyy6NzRkRwiLzfjFcMFAmQuE8n4pJcRwcjWB8U9wRz6U5SK6xo4EyK3UPFzqnXjcSGmO5uS4fjGROwweRdphUFcGC8kdlZDxDMd6tLTyjbLTTeQARVr39hIhPj2_DUJ3EzB1S4Erh4FuIviJhXwCs0ov8NqKggbfPzexHw2DcGwTqC0RRs1b16O2fn0OKD4nrPSn8hC8D1-ZkRxVmKe_urgILufYBGjpBmrDn6g0AoCHyJcW769p4jSsjXC5nwx85vmKREfghD0aOuxijVLQvGPeLbpqqzM8n8Yza8CguLpLCiFH0LSDNxYaaOKU1L5fE1osBV=w150-h420-no?authuser=0'
    }],
    items: [
        {
            id: 372,
            category: 'Сухая кожа стопы',
            name: 'Крем. Питание и Восстановление',
            volume: 50,
            priceRegular: 1050,
            priceDiscounted: 850,
            discount: '19%'
        }, {
            id: 306,
            category: 'Сухая кожа стопы',
            name: 'Крем. Питание и Восстановление',
            volume: 150,
            priceRegular: 2450,
            priceDiscounted: 1950,
            discount: '20%'
        }, {
            id: 832,
            category: 'Сухая кожа стопы',
            name: 'Бальзам. Гидро-защита',
            volume: 125,
            priceRegular: 1200,
            priceDiscounted: 950,
            discount: '20%'
        }, {
            id: 1111,
            category: 'Сухая кожа стопы',
            name: 'Бальзам. Идеальная гладкость',
            volume: 75,
            priceRegular: 1200,
            priceDiscounted: 950,
            discount: '20%'
        }, {
            id: 991312,
            category: 'Сухая кожа стопы',
            name: 'Бальзам. Идеальная гладкость',
            volume: 150,
            priceRegular: 2450,
            priceDiscounted: 1950,
            discount: '20%'
        }, {
            id: 1302,
            category: 'Сухая кожа стопы',
            name: 'Ночная маска для ног.',
            volume: 100,
            priceRegular: 1400,
            priceDiscounted: 1100,
            discount: '21%'
        }, {
            id: 889,
            category: 'Избыточное потоотдение и неприятный запах',
            name: 'Гель. Антиперспирант',
            volume: 75,
            priceRegular: 1100,
            priceDiscounted: 900,
            discount: '18%'
        }, {
            id: 367,
            category: 'Избыточное потоотдение и неприятный запах',
            name: 'Крем. Антиперспирант',
            volume: 50,
            priceRegular: 1100,
            priceDiscounted: 900,
            discount: '18%'
        }, {
            id: 888,
            category: 'Избыточное потоотдение и неприятный запах',
            name: 'Спрей. Антиперспирант',
            volume: 100,
            priceRegular: 1500,
            priceDiscounted: 1200,
            discount: '2%'
        }, {
            id: 370,
            category: 'Избыточное потоотдение и неприятный запах',
            name: 'Спрей-пудра.',
            volume: 150,
            priceRegular: 1850,
            priceDiscounted: 1500,
            discount: '18%'
        }, {
            id: 369,
            category: 'Избыточное потоотдение и неприятный запах',
            name: 'Спрей для обуви.',
            volume: 150,
            priceRegular: 1850,
            priceDiscounted: 1500,
            discount: '18%'
        }, {
            id: 991039,
            category: 'Специальные продукты',
            name: 'Бальзам от трещин.',
            volume: 75,
            priceRegular: 1350,
            priceDiscounted: 1100,
            discount: '18%'
        }],
    categories: [
        {id: 1, category: 'Сухая кожа стопы'},
        {id: 2, category: 'Избыточное потоотдение и неприятный запах'},
        {id: 3, category: 'Специальные продукты'}
    ]
}