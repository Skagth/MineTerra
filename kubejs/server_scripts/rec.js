














ServerEvents.recipes(event => {
	
	
 	

	// Remove Dreadfuldirt feed

  // Pattern : Clayball to Clay
 event.shapeless('minecraft:clay', ['4x minecraft:clay_ball'])

   // Pattern : Wool to String
 event.shapeless('4x minecraft:string', ['#forge:wool'])
  
	// Pattern : Soul campfire
	event.shaped('minecraft:soul_campfire', [
		'BBB',
		'BAB',
		'BBB'
	  ], {
		A: 'minecraft:campfire',
		B: 'minecraft:fermented_spider_eye'	
	})

	// Belt from rubber 
	event.shapeless('create:belt_connector', ['3x kubejs:rubber']) 


 //event.shapeless('byg:embur_gel_ball', ['minecraft:redstone', 'minecraft:slime_ball'])

 //event.shapeless('powah:uraninite_raw', ['4x kubejs:uranium_dust'])

});
