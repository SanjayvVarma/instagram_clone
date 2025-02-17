const UserData = [
    {
        id: 1,
        name: 'Elon Musk',
        username: 'muskelon',
        profile: require('../../assets/data/elondp.png'),
        story: {
            time: 10,
            image: require('../../assets/data/elonstory.png'),
        },
        post: {
            time: '09:00:00',
            date: '01/05/2023',
            image: require('../../assets/data/elonpost.png'),
            caption: 'Hi Everyone, Elon musk is here',
            like: 30,
        }
    },
    {
        id: 2,
        name: 'Harsh Beniwal',
        username: 'harsh',
        profile: require('../../assets/data/harshdp.png'),
        story: {
            time: 8,
            image: require('../../assets/data/harshs.png'),
        },
        post: {
            time: '04:00 PM',
            date: '08/04/2023',
            image: require('../../assets/data/harshp.png'),
            caption: 'hi....',
            like: 25,
        }
    },
    {
        id: 5,
        name: 'Juhi',
        username: 'juhinigam',
        profile: require('../../assets/data/sonamdp.png'),
        story: {
            time: 13,
            image: require('../../assets/data/sonams.png'),
        },
        post: {
            time: '07:00 AM',
            date: '12/05/2023',
            image: require('../../assets/data/sonmp.png'),
            caption: 'i love you Sanjay',
            like: 88,
        }
    },
    {
        id: 3,
        name: 'Modi',
        username: 'nmodi',
        profile: require('../../assets/data/modidp.png'),
        story: {
            time: 15,
            image: require('../../assets/data/modip.png'),
        },
        post: {
            time: '07:00 AM',
            date: '12/05/2023',
            image: require('../../assets/data/modis.png'),
            caption: '2000 ke note band',
            like: 99,
        }
    },
    {
        id: 4,
        name: 'Sanjay',
        username: 'sanjayazad_',
        profile: require('../../assets/sanjay.png'),
        story: {
            time: 13,
            image: require('../../assets/sanjay.png'),
        },
        post: {
            time: '07:00 AM',
            date: '12/05/2023',
            image: require('../../assets/sanjay.png'),
            caption: 'carry on jatta',
            like: 88,
        }
    },

]

export default UserData;


export const typeData = [
    { id: 1, image: require('../../assets/gridIcon2.png') },
    { id: 2, image: require('../../assets/tagsIcon2.png') },
]