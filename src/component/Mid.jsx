// // Mid.js
import img1 from './img/user1.jpg'
import img2 from './img/user2.jpg'

function Mid() {

    const Player = [
        {
            id:1,
            name1 : 'Player 1 vs 1',
            title:'241 games payed'
        },
        {
            id:2,
            name1 : 'Player 2 vs 1',
            title:'234 games payed'
        },
        {
            id:3,
            name1 : 'Player 4 vs 1',
            title:'654 games payed'
        },
    ]
    const Variants = [
        {
            id:1,
            name1 : 'Debug',
            title:'241 games payed'
        },
        {
            id:2,
            name1 : 'Reverse',
            title:'234 games payed'
        },
        {
            id:3,
            name1 : 'More',
            title:'654 games payed'
        },
    ]
    const Battle = [
        {
            id:1,
            img :img1,
            title:'Player',
            number:'1234.34',
            sub:'(200 Target)',
            top: '#04'
        },
        {
            id:2,
           img :img2,
            title:'Plants',
            number:'1234.34',
            sub:'(200 Target)',
            top: '#04'
        },
        {
            id:3,
           img :img1,
            title:'Plants',
            number:'1234.34',
            sub:'(200 Target)',
            top: '#04'
        },
        {
            id:4,
           img :img2,
            title:'Plants',
            number:'1234.34',
            sub:'(200 Target)',
            top: '#04'
        },
        {
            id:5,
           img :img1,
            title:'Plants',
            number:'1234.34',
            sub:'(200 Target)',
            top: '#04'
        },
        {
            id:6,
           img :img2,
            title:'Plants',
            number:'1234.34',
            sub:'(200 Target)',
            top: '#04'
        }
       

        
    ]
  return (
    <div className='  w-3/4 h-lvh'>
      
<div className="mt-6 ml-4">
<h1 className=" ml-2 text-white font-semibold">Play Options</h1>

<div className=" md:justify-between flex ">

{Player.map(player => (
                        <div key={player.id} className="container rounded text-center border-2 border-gray-500 md:w-1/2 md:h-14 w-1/3 m-2">
                            <h1 className="text-yellow-400 font-semibold">{player.name1}</h1>
                            <p className="text-gray-500">{player.title}</p>
                        </div>
                    ))}
 
</div>
</div>

<div className="mt-12 ml-4">
<h1 className=" ml-2 text-white font-semibold">Variants</h1>

<div className=" md:justify-between  ">

<div className=" md:justify-between flex ">

{Variants.map(variants => (
                        <div key={variants.id} className="container rounded text-center border-2 border-gray-500 md:w-1/2 md:h-14 w-1/3 m-2">
                            <h1 className="text-yellow-400 font-semibold">{variants.name1}</h1>
                            <p className="text-gray-500">{variants.title}</p>
                        </div>
                    ))}
 
</div>
</div>
</div>


<div className="mt-6 ml-4">
<h1 className=" ml-2 text-white font-semibold">Battle History</h1>

<div className=" md:justify-between flex  flex-col">
{Battle.map(battle => (
                        <div key={battle.id} className="container flex  rounded-xl text-center bg-gray-600 w-[450px] md:w-[900px] m-2">
                           <img src={battle.img} alt={battle.title} className=" w-6  rounded-full m-2 h-8" /> 
                            <p className=" text-white mt-2">{battle.title}</p>

                            <p className=' md:ml-96 ml-40 mt-2 text-gray-800'>{battle.number}</p>
                            <p className=' md:ml-20 mt-2 ml-4 text-gray-800'>{battle.sub}</p>
                            <p className='md:ml-36 mt-2 ml-4 text-gray-800'>{battle.top}</p>
                           
                            
                        </div>
                    ))}
   
</div>
</div>
    </div>
  );
}

export default Mid;
