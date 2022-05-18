
const {Builder,Capabilities,By} = require('selenium-webdriver')

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
   await driver.get('http://127.0.0.1:5500/public/index.html')
})

afterAll(async () => {
   await driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
    await driver.sleep(200)
})

test('clicking the Draw button displays the div',async ()=>{
    let drawBtn = await driver.findElement(By.id('draw'))

    await drawBtn.click()

    await driver.sleep(200)

    let choicesDiv = await driver.findElement(By.id('choices'))

    await choicesDiv.isEnabled

    await driver.sleep(200)
    
})

test('clicking the See All Bots btn adds all bots', async()=>{
let seeAllBtn = await driver.findElement(By.id('see-all'))

await seeAllBtn.click()

await driver.sleep(200)
})