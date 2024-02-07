$(document).ready(function(){

	let pokemons = [];


	// let xhr = new XMLHttpRequest();
	// xhr.open("GET", "https://pokeapi.co/api/v2/pokemon-color/yellow", true);

	function addStripes() {
		$('table tr').removeClass('striped');
		$('table tr:nth-child(even)').addClass('striped');
	}


	function afterRender(){

		$('table th').css('color', 'darkBlue');
		addStripes();


   $('table tr').on('mouseenter', event => {
		$(event.currentTarget).css('backgroundColor', 'yellow');
	 })

	 $('table tr').on('mouseleave', event =>{
		$(event.currentTarget).removeAttr('style');
	 });


		setTimeout(function() {
			
			const hideElements = $("table td a:contains('p')").filter(function(){
				return this.innerHTML.indexOf('p') == 0;
			});
			
			hideElements.closest('tr').remove();
			addStripes();

			$('<div></div>').insertAfter($('#hb-template')).text('Skriveno: ' + hideElements.length);
		}, 2000);

    
	}

	function fillList() {
		// const data = JSON.parse(xhr.response);
		const source = document.getElementById("hb-template").innerHTML;
		const template = Handlebars.compile(source);
		const context = { pokemon: pokemons.slice(0, 20), tableClass: 'table' };
		const html = template(context);
	  document.getElementById('hb-result').innerHTML = html;

		afterRender();
	}


	// xhr.onload = function() {
		// fillList();
	// };

	$(window).resize(() => {
		console.log($( window ).width());
	});


	// xhr.send();

	function getDetails(pokemon) {		

		return $.ajax(pokemon.url, {
			
			success: function(data) {
			
				const hab = data.habitat ? data.habitat.name : "";
				const grow = data.growth_rate ? data.growth_rate.name : "";
			
				const pokData = {
					name: pokemon.name, 
					url: pokemon.url, 
					habitat: hab, 
					growth_rate: grow
				};
				
				pokemons.push(pokData);
			}
		});
	}


$.ajax ("https://pokeapi.co/api/v2/pokemon-color/yellow", {

succes: function(data, status, jqXHR) {

	$when.apply($, data.pokemon_species.map(function(pokemon){
    return getDetails(pokemon);
	})).done(function(){

console.log(pokemons);
fillList();

	});
},
error:function(jqXHR, testSTatus, errorThrown) {
	console.log(jqXHR);
}


})

});