
const breakfastMenu = ['Pancakes- $12', 'Eggs Benedict -$22.99', 'Oatmeal -$21.99', 'Frittata -$15'];
const mainCourse=['Steak', 'Pasta', 'Burger', 'Salmon'];
const dessertMenu=['Cake', 'Ice Cream', 'Pudding', 'Fruit Salad'];


//USING MAP TO CREATE/MAP A NEW ARRAY(and or a concatinated string in this case) USING USING THE ELEMNTS AND INDEX OF BREAKFASTMENU ARRAY
const breakfastMenuItemsHtml= breakfastMenu.map((item,index)=> `<p> item ${index+1}: ${item}</p>`).join('');
document.getElementById('breakfastMenuItems').innerHTML= breakfastMenuItemsHtml;

//READ ONLY IF UNABLE TO UNDERSTAND SOMETHING IN ABOVE LINE OTHERWISE JUST WASTAGE OF TIME
//map(arrayelement,inndexofelement) map automatically iterates thorugh the all the indexes as well as elements of array along which it used, one-by-one!
//The map method creates a new array by applying a function to each element of the original array, one-by-one.
//When the join('') method is removed from the map function, the result is an array of strings stored in breakFastMenuHtml variable rather than a single concatenated string. In JavaScript, when you try to assign an array to an HTML element's innerHTML, the array is converted to a comma-separated string by default. This is why you see commas between the elements.
//Also using join('') converts the array of strings into a single string, which is suitable for setting as the innerHTML of an HTML element. Without join(''), you are left with an array, which, when assigned to innerHTML, gets converted to a comma-separated string by default, hence the appearance of commas.
//New line for each element because every <p> element always displayed on a new line


//USING FOREACH TO ITERATE THROUGH ALL ELEMENTS OF MAINCOURSEITEMS ARRAY AND EXECUTE THE GIVEN ARROW FUNCTION EVERY TIME MOVING TO/VISITNG THE NEXT ELEMENT
let mainCourseItems="";
mainCourse.forEach((item, index)=> {mainCourseItems+=`<p>item ${index+1}: ${item}</p>`;});
document.getElementById('maincourseMenuItems').innerHTML= mainCourseItems;

//USING FOR LOOP TO ITERATE THROUGH ALL ELEMENTS OF MAINCOURSEITEMS ARRAY AND EXECUTE THE GIVEN CODE IN FOR LOOPS BODY EVERY TIME MOVING TO THE NEXT ELEMENT
let dessertMenuItem="";
for(let index=0; index<dessertMenu.length; index++)
{
    dessertMenuItem +=`<p>item ${index+1}: ${dessertMenu[index]}</p>`;
    document.getElementById('dessertMenuItems').innerHTML= dessertMenuItem;
}