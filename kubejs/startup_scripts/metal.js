// priority: 0


StartupEvents.registry('block', event => {
	
  event.create('machineframe01')
  	   .material('metal')
       .hardness(0.5)
       .displayName('Machine Frame')
 
  event.create('side_materialcomp')
  	   .material('metal')
       .hardness(0.5)
       .displayName('Machine Case')

  event.create('sheet_iron1')
  	   .material('metal')
       .hardness(-1)
       .displayName('Metal Block')

  event.create('sheet_iron2')
  	   .material('metal')
       .hardness(-1)
       .displayName('Metal Block')
	
})