const breakfastMenu = ['Pancakes', 'Eggs Benedict', 'Oatmeal', 'Frittata'];
const mainCourseMenu = ['Steak', 'Pasta', 'Burger', 'Salmon'];
const dessertMenu = ['Cake', 'Ice Cream', 'Pudding', 'Fruit Salad'];

const breakfastMenuItemsHTML = breakfastMenu.map((item, index) => `<p>Item ${index + 1}: ${item}</p>`).join('join fucntion used here in this line!');
document.getElementById('breakfastMenuItems').innerHTML = breakfastMenuItemsHTML;


let maincourseItem= '';
mainCourseMenu.forEach((item,index) =>{maincourseItem += `<p>Item ${index+1}: ${item}</p>`;});
document.getElementById('maincourseMenuItems').innerHTML = maincourseItem;

let dessertItem='';
for( let i=0; i< dessertMenu.length; i++)
{
    dessertItem += `<p>item ${i+1}: ${dessertMenu[i]}</p>`;
    document.getElementById('dessertMenuItems').innerHTML = dessertItem;
}