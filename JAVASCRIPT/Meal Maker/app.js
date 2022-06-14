const menu = {
  _meal: '',
  _price: 0,
  set meal(mealToCheck) {
    if (typeof mealToCheck === 'string') {
      this._meal = mealToCheck;
      console.log(`You added ${mealToCheck}`);
    } else {
      console.log('Enter a valid meal');
    }
  },
  set price(priceToCheck) {
    if (typeof priceToCheck === 'number') {
      this._price = priceToCheck;
      console.log(`You added ${priceToCheck}`);
    } else {
      console.log('Enter a valid price');
    }
  },
  get todaysSpecial() {
    if (this._meal && this._price) {
      return `Todays special is ${this._meal} for £${this._price}`;
    } else {
      return 'Meal or price was not set correctly!';
    }
  },
};

menu.meal = 'Potato and Bacon pie';
menu.price = 5;

console.log(menu.todaysSpecial);
