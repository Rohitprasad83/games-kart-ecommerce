import { v4 as uuid } from 'uuid'
/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [{
        _id: uuid(),
        title: 'Super Mario',
        img: 'https://github.com/Rohitprasad83/images-setup/blob/dev/E-com/SuperMario.jpg?raw=true',
        price: 2999,
        oldPrice: 3999,
        discount: '25%',
        categoryName: 'Adventure',
        description: 'Super Mario is a 2D and 3D platform game series created by Nintendo based on and starring the fictional plumber Mario. Alternatively called the Super Mario Bros. series or simply the Mario series, it is the central series of the greater Mario franchise.',
        rating: 4.6,
    },
    {
        _id: uuid(),
        title: 'Call of Duty',
        img: 'https://github.com/Rohitprasad83/images-setup/blob/dev/E-com/call_of_duty.jpg?raw=true',
        price: 5999,
        oldPrice: 6999,
        discount: '20%',
        categoryName: 'Action',
        description: 'Call of Duty is a first-person shooter video game franchise published by Activision. Starting out in 2003, it first focused on games set in World War II. Over time, the series has seen games set in the midst of the Cold War, futuristic worlds, and outer space.',
        rating: 4.8,
    },
    {
        _id: uuid(),
        title: 'Gta V',
        img: 'https://github.com/Rohitprasad83/images-setup/blob/dev/E-com/GtaV.jpg?raw=true',
        price: 9999,
        oldPrice: 12999,
        discount: '35%',
        categoryName: 'Arcade',
        description: 'Grand Theft Auto V is a 2013 action-adventure game developed by Rockstar North and published by Rockstar Games. It is the seventh main entry in the Grand Theft Auto series, following 2008`s Grand Theft Auto IV, and the fifteenth instalment overall.',
        rating: 3.1,
    },
    {
        _id: uuid(),
        title: 'Valorant',
        img: 'https://github.com/Rohitprasad83/images-setup/blob/dev/E-com/valorant.jpg?raw=true',
        price: 1999,
        oldPrice: 4999,
        discount: '35%',
        categoryName: 'Sports',
        description: 'Valorant is a free-to-play first-person hero shooter developed and published by Riot Games, for Microsoft Windows. First teased under the codename Project A in October 2019, the game began a closed beta period with limited access on April 7, 2020, followed by an official release on June 2, 2020.',
        rating: 3.5,
    },
    {
        _id: uuid(),
        title: 'Minecraft',
        img: 'https://github.com/Rohitprasad83/images-setup/blob/dev/E-com/Minecraft.png?raw=true',
        price: 999,
        oldPrice: 2999,
        discount: '45%',
        categoryName: 'Strategy',
        description: 'Minecraft is a video game in which players create and break apart various kinds of blocks in three-dimensional worlds. The game`s two main modes are Survival and Creative. In Survival, players must find their own building supplies and food. They also interact with blocklike mobs, or moving creatures',
        rating: 2.2,
    },
    {
        _id: uuid(),
        title: 'Max Payne 3',
        img: 'https://github.com/Rohitprasad83/images-setup/blob/dev/E-com/Max_Payne_3.jpg?raw=true',
        price: 4999,
        oldPrice: 7999,
        discount: '30%',
        categoryName: 'Action',
        description: 'Max Payne 3 is a third-person shooter video game developed by Rockstar Studios and published by Rockstar Games. It was released on May 15, 2012 for the PlayStation 3 and Xbox 360; a Microsoft Windows port was released on May 29, 2012, followed by an OS X port on June 20, 2013.',
        rating: 3.6,
    },
    {
        _id: uuid(),
        title: 'Fifa 19',
        img: 'https://github.com/Rohitprasad83/images-setup/blob/dev/E-com/fifa.png?raw=true',
        price: 2999,
        oldPrice: 3999,
        discount: '25%',
        categoryName: 'Sports',
        description: 'FIFA 19 is a football simulation video game developed by EA Vancouver and released by Electronic Arts on 28 September 2018 for PlayStation 3, PlayStation 4, Xbox 360, Xbox One, Nintendo Switch, and Microsoft Windows. It is the 26th installment in the FIFA series.',
        rating: 2.8,
    },
    {
        _id: uuid(),
        title: 'Cs Go',
        img: 'https://github.com/Rohitprasad83/images-setup/blob/dev/E-com/cs%20go.jpg?raw=true',
        price: 3999,
        oldPrice: 6999,
        discount: '25%',
        categoryName: 'Sports',
        description: 'Counter-Strike: Global Offensive is a 2012 multiplayer first-person shooter developed by Valve and Hidden Path Entertainment. It is the fourth game in the Counter-Strike series.',
        rating: 1.4,
    },
    {
        _id: uuid(),
        title: 'SanAndreas',
        img: 'https://github.com/Rohitprasad83/images-setup/blob/dev/E-com/sanandreas.jpg?raw=true',
        price: 1999,
        oldPrice: 2999,
        discount: '25%',
        categoryName: 'Arcade',
        description: 'Grand Theft Auto: San Andreas is a 2004 action-adventure game developed by Rockstar North and published by Rockstar Games. It is the fifth main entry in the Grand Theft Auto series, following 2002`s Grand Theft Auto: Vice City, and the seventh installment overall. ',
        rating: 2.9,
    },
    {
        _id: uuid(),
        title: 'Dota 2',
        img: 'https://raw.githubusercontent.com/Rohitprasad83/images-setup/dev/E-com/Dota%202.webp',
        price: 1999,
        oldPrice: 2999,
        discount: '25%',
        categoryName: 'Strategy',
        description: 'Dota 2 is a multiplayer online battle arena video game developed and published by Valve. The game is a sequel to Defense of the Ancients, which was a community-created mod for Blizzard Entertainment`s Warcraft III: Reign of Chaos.',
        rating: 3.7,
    },
    {
        _id: uuid(),
        title: 'Far Cry 3',
        img: 'https://github.com/Rohitprasad83/images-setup/blob/dev/E-com/Far%20Cry%203.jpg?raw=true',
        price: 1999,
        oldPrice: 2999,
        discount: '25%',
        categoryName: 'Adventure',
        description: 'Far Cry 3 is a 2012 first-person shooter game developed by Ubisoft Montreal and published by Ubisoft. It is the third main installment in the Far Cry series after Far Cry 2. The game takes place on the fictional Rook Islands, a tropical archipelago which can be freely explored by players.',
        rating: 4.8,
    },
    {
        _id: uuid(),
        title: 'God of War 2',
        img: 'https://github.com/Rohitprasad83/images-setup/blob/dev/E-com/godofwar2.png?raw=true',
        price: 1999,
        oldPrice: 2999,
        discount: '25%',
        categoryName: 'Arcade',
        description: 'God of War II is an action-adventure hack and slash video game developed by Santa Monica Studio and published by Sony Computer Entertainment.',
        rating: 1.9,
    },
]