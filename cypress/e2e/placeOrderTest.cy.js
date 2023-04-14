import { Cart } from "../page-objects/pages/CartPage";
import { Home } from "../page-objects/pages/HomePage";
import { Product } from "../page-objects/pages/ProductPage";

const homePage = new Home();
const product = new Product();
const cart = new Cart();
const productNames = ['Samsung galaxy s6', 'Nokia lumia 1520']
const clientData = {
  "name": "test name",
  "country": "test country",
  "city": "test city",
  "card": "5432600223492132",
  "month": "01",
  "year": "2024"
}

describe('Place order, e2e test', () => {

  it('select a product', () => {
    
    homePage.navigate()
    
    homePage.selectProductByLinkText(productNames[0])

    product.addToCart()

    homePage.navigateTo("Cart")

    cart.checkCartItems(['Samsung galaxy s6'])

    homePage.navigateTo("Home")

    homePage.selectProductByLinkText(productNames[1])

    product.addToCart()

    homePage.navigateTo("Cart")

    cart.checkCartItems(productNames)
    cart.placeOrder(clientData)
  })
})