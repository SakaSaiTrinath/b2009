import React from "react";

const SuggestionList = [
	"Favorite fast food restaurant?",
	"Favorite ice cream flavor?",
	"Favorite chocolate candy?",
	"Favorite fruity candy?",
	"Favorite flavor Starburst?",
	"Favorite dish at Olive Garden?",
	"Favorite kind of sushi?",
	"Favorite Asian dish?",
	"Favorite Italian dish?",
	"Favorite food of all time?",
	"Favorite way to cook a steak?",
	"Favorite pasta dish?",
	"Favorite cookie?",
	"Favorite fast food French fries?",
	"Favorite cereal?",
	"Favorite breakfast food?",
	"Favorite pizza toppings?",
	"Favorite fruit?",
	"Favorite vegetable?",
	"Favorite dessert?",
	"Favorite comfort food?",
	"Favorite way to eat bacon?",
	"Favorite thing at a buffet?",
	"Favorite pumpkin-flavored treat?",
	"Favorite dish at Thanksgiving?",
	"Favorite cake?",
	"Favorite ice cream sundae toppings?",
	"Favorite thing to cook?",
	"Favorite soda?",
	"Favorite alcoholic drink?",
	"Favorite drink at Starbucks?",
	"Favorite flavor coffee?"
];

function NeedSuggestions(props) {
	return (
		<div>
			{props.state.from === "FirstThingsPanel" && (
				<ul>
					{SuggestionList.map(favQue => (
						<li>{favQue}</li>
					))}
				</ul>
			)}
		</div>
	);
}

export default NeedSuggestions;
