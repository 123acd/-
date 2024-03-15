const { After } = require('cucumber');
const { BeforeAll, AfterAll, Given, When, Then, setDefaultTimeout } = require('cucumber');
const assert = require('assert');
const { chromium } = require('leanpro.web');
// Open new page

setDefaultTimeout(30 * 1000);

let browser, context, page;

BeforeAll(async function () {
    browser = await chromium.launch({
        headless: false
    });
    context = await browser.newContext();
    // 打开新页面
    page = await context.newPage();
   
    
});

AfterAll(async function () {
    // 清理会话，关闭浏览器
    // ---------------------
    await context.close();
    await browser.close();
});
//每张都截屏
After(async function (testCase) {
    //TODO: add your code here
    const screen = await page.screenshot();
    this.attach(screen,"image/png");
})




When("浏览到注册网页 {string}", async function (arg1) {

    // Go to http://localhost:9876/
    await page.goto('http://localhost:9876/');

    // Go to http://localhost:9876/home
    await page.goto('http://localhost:9876/home');

    // Go to http://localhost:9876/login
    await page.goto('http://localhost:9876/login');

    // Click :nth-match(button, 2)
    await page.click(':nth-match(button, 2)');
  // assert.equal(page.url(), 'http://localhost:9876/register');
});

Then("输入用户名{string}，密码{string}，确认密码{string}，回到登录页面", async function (arg1, arg2, arg3) {

    // Click input[type="text"]
    await page.click('input[type="text"]');

    // Fill input[type="text"]
    await page.fill('input[type="text"]', 'admin');

    // Click input[type="password"]
    await page.click('input[type="password"]');

    // Fill input[type="password"]
    await page.fill('input[type="password"]', 'admin');

    // Click :nth-match(input[type="password"], 2)
    await page.click(':nth-match(input[type="password"], 2)');

    // Fill :nth-match(input[type="password"], 2)
    await page.fill(':nth-match(input[type="password"], 2)', 'admin');

    // Click .el-input__icon.el-icon-view
    await page.click('.el-input__icon.el-icon-view');

    // Click div:nth-child(3) .el-form-item__content .el-input .el-input__suffix .el-input__suffix-inner .el-input__icon
    await page.click('div:nth-child(3) .el-form-item__content .el-input .el-input__suffix .el-input__suffix-inner .el-input__icon');
});


    

When("浏览到登录页面 {string}", async function (arg1) {

    await page.goto('http://localhost:9876/login');
  // Click [placeholder="请输入账号"]
});

Then("输入用户名{string}，密码{string}，验证码{string}，登录账号导航到主页", async function (arg1, arg2, arg3) {

    await page.click('[placeholder="请输入账号"]');

    // Fill [placeholder="请输入账号"]
    await page.fill('[placeholder="请输入账号"]', 'admin');

    // Click [placeholder="请输入密码"]
    await page.click('[placeholder="请输入密码"]');

    // Fill [placeholder="请输入密码"]
    await page.fill('[placeholder="请输入密码"]', 'admin');

    // Click [placeholder="请输入验证码"]
    await page.click('[placeholder="请输入验证码"]');

    // Fill [placeholder="请输入验证码"]
    await page.fill('[placeholder="请输入验证码"]', '0000');

    // Click button:has-text("登 录")
    await page.click('button:has-text("登 录")');
  // assert.equal(page.url(), 'http://localhost:9876/home');
});

When("浏览汽车类型 {string}", async function (arg1) {
    // Click text=汽车类型
    await Promise.all([
        page.waitForNavigation(/*{ url: 'http://localhost:9876/book' }*/),
        page.click('text=汽车类型')
    ]);
   
});

Then("点击{string}按钮，输入品牌{string}，价格{string}，点击{string}按钮，点击{string}按钮，输入品牌{string}，价格{string}，点击{string}按钮", async function (arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8) {

    // Click [placeholder="请输入关键字"]
    await page.click('[placeholder="请输入关键字"]');

    // Click button:has-text("新增")
    await page.click('button:has-text("新增")');

    // Click text=品牌价格车辆详细信息 请输入正文 >> input[type="text"]
    await page.click('text=品牌价格车辆详细信息 请输入正文 >> input[type="text"]');

    // Fill text=品牌价格车辆详细信息 请输入正文 >> input[type="text"]
    await page.fill('text=品牌价格车辆详细信息 请输入正文 >> input[type="text"]', '特斯拉');

    // Click :nth-match(input[type="text"], 4)
    await page.click(':nth-match(input[type="text"], 4)');

    // Fill :nth-match(input[type="text"], 4)
    await page.fill(':nth-match(input[type="text"], 4)', '300000');

    // Click button:has-text("确 定")
    await page.click('button:has-text("确 定")');

    // Click button:has-text("新增")
    await page.click('button:has-text("新增")');

    // Click text=品牌价格车辆详细信息 请输入正文 >> input[type="text"]
    await page.click('text=品牌价格车辆详细信息 请输入正文 >> input[type="text"]');

    // Fill text=品牌价格车辆详细信息 请输入正文 >> input[type="text"]
    await page.fill('text=品牌价格车辆详细信息 请输入正文 >> input[type="text"]', '特斯拉');

    // Click :nth-match(input[type="text"], 4)
    await page.click(':nth-match(input[type="text"], 4)');

    // Fill :nth-match(input[type="text"], 4)
    await page.fill(':nth-match(input[type="text"], 4)', '400000');

    // Click button:has-text("确 定")
    await page.click('button:has-text("确 定")');

   
});

When("输入{string}模糊查询特斯拉车型", async function (arg1) {

    // Click [placeholder="请输入关键字"]
    await page.click('[placeholder="请输入关键字"]');

    // Fill [placeholder="请输入关键字"]
    await page.fill('[placeholder="请输入关键字"]', '特斯');

    
});

Then("验证是否查询成功", async function () {

    // Click button:has-text("查询")
    await page.click('button:has-text("查询")');
});

When("删除{string}车型", async function (arg1) {

    // Click text=特斯拉3000002023-06-04详情编辑删除 >> span[role="false"] span
    await page.click('text=特斯拉3000002023-06-05详情编辑删除 >> span[role="false"] span');

    // Click text=特斯拉4000002023-06-04详情编辑删除 >> span[role="false"] span
    await page.click('text=特斯拉4000002023-06-05详情编辑删除 >> span[role="false"] span');

    // Click button:has-text("批量删除")
    await page.click('button:has-text("批量删除")');

});

Then("验证是否删除成功", async function () {

    // Click button:has-text("确定")
    await page.click('button:has-text("确定")');
});

When("点击{string}按钮修改{string}价格{string},再修改回{string}", async function (arg1, arg2, arg3, arg4) {

    // Click text=动态
    await page.click('text=动态');
    // assert.equal(page.url(), 'http://localhost:9876/news');

    await Promise.all([
        page.waitForNavigation(/*{ url: 'http://localhost:9876/book' }*/),
        page.click('text=汽车类型')
    ]);


    // Click text=宝马5000002023-06-04详情编辑删除 >> button
    await page.click('text=宝马5000002023-06-04详情编辑删除 >> button');

    // Click text=详情去结算与卖家聊 >> [aria-label="close"]
    await page.click('text=详情去结算与卖家聊 >> [aria-label="close"]');

    // Click :nth-match(button:has-text("编辑"), 5)
    await page.click(':nth-match(button:has-text("编辑"), 5)');

    // Click :nth-match(input[type="text"], 4)
    await page.click(':nth-match(input[type="text"], 4)');

    // Fill :nth-match(input[type="text"], 4)
    await page.fill(':nth-match(input[type="text"], 4)', '540000');

    // Click button:has-text("确 定")
    await page.click('button:has-text("确 定")');

    // Click :nth-match(button:has-text("编辑"), 5)
    await page.click(':nth-match(button:has-text("编辑"), 5)');

    // Click :nth-match(input[type="text"], 4)
    await page.click(':nth-match(input[type="text"], 4)');

    // Fill :nth-match(input[type="text"], 4)
    await page.fill(':nth-match(input[type="text"], 4)', '500000');

});

Then("验证是否修改成功", async function () {

    // Click button:has-text("确 定")
    await page.click('button:has-text("确 定")');
});

When("跳转到动态网站 {string}", async function (arg1) {

    // Click text=动态
    await page.click('text=动态');
  // assert.equal(page.url(), 'http://localhost:9876/news');

});

Then("点击{string}按钮，输入标题{string}，点击{string}按钮", async function (arg1, arg2, arg3) {

    // Click button:has-text("新增")
    await page.click('button:has-text("新增")');

    // Click text=标题 请输入正文 >> input[type="text"]
    await page.click('text=标题 请输入正文 >> input[type="text"]');

    // Fill text=标题 请输入正文 >> input[type="text"]
    await page.fill('text=标题 请输入正文 >> input[type="text"]', '今天喜提宝马，开着很爽');

    // Click button:has-text("确 定")
    await page.click('button:has-text("确 定")');

    // Click text=27今天喜提宝马，开着很爽管理员2023-06-04 18:47:55删除 >> button
    await page.click('#app > div > div:nth-child(2) > div:nth-child(2) > div.el-table--fit.el-table--striped.el-table--border.el-table--enable-row-hover.el-table--enable-row-transition.el-table--small.el-table > div.el-table__body-wrapper.is-scrolling-none > table > tbody > tr:nth-child(8) > td.el-table_4_column_20 > div > button');
});

When("浏览到网地址 {string}", async function (arg1) {

    await page.click('text=系统管理');

    // Click text=用户管理
    await page.click('text=用户管理');
    // assert.equal(page.url(), 'http://localhost:9876/user');
});

Then("点击{string}按钮，输入用户名{string}，昵称{string}，年龄{string}，性别选择{string}，地址{string}，点击{string}按钮，点击{string}按钮，输入用户名{string}，昵称{string}，年龄{string}，性别选择{string}，地址{string}，点击{string}按钮", async function (arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11, arg12, arg13, arg14) {

    // Click button:has-text("新增")
    await page.click('button:has-text("新增")');

    // Click text=用户名昵称年龄性别男女未知地址 >> input[type="text"]
    await page.click('text=用户名昵称年龄性别男女未知地址 >> input[type="text"]');

    // Fill text=用户名昵称年龄性别男女未知地址 >> input[type="text"]
    await page.fill('text=用户名昵称年龄性别男女未知地址 >> input[type="text"]', '11');

    // Click :nth-match(input[type="text"], 3)
    await page.click(':nth-match(input[type="text"], 3)');

    // Fill :nth-match(input[type="text"], 3)
    await page.fill(':nth-match(input[type="text"], 3)', '11');

    // Click :nth-match(input[type="text"], 4)
    await page.click(':nth-match(input[type="text"], 4)');

    // Fill :nth-match(input[type="text"], 4)
    await page.fill(':nth-match(input[type="text"], 4)', '11');

    // Click label[role="radio"]:has-text("男")
    await page.click('#app > div > div:nth-child(2) > div:nth-child(2) > div:nth-child(5) > div > div.el-dialog__body > form > div:nth-child(4) > div > label:nth-child(1) > span.el-radio__input');

    // Click textarea
    await page.click('textarea');

    // Fill textarea
    await page.fill('textarea', '三峡大学');

    // Click button:has-text("确 定")
    await page.click('button:has-text("确 定")');

    // Click button:has-text("新增")
    await page.click('button:has-text("新增")');

    // Click text=用户名昵称年龄性别男女未知地址 >> input[type="text"]
    await page.click('text=用户名昵称年龄性别男女未知地址 >> input[type="text"]');

    // Fill text=用户名昵称年龄性别男女未知地址 >> input[type="text"]
    await page.fill('text=用户名昵称年龄性别男女未知地址 >> input[type="text"]', '22');

    // Click :nth-match(input[type="text"], 3)
    await page.click(':nth-match(input[type="text"], 3)');

    // Fill :nth-match(input[type="text"], 3)
    await page.fill(':nth-match(input[type="text"], 3)', '22');

    // Click :nth-match(input[type="text"], 4)
    await page.click(':nth-match(input[type="text"], 4)');

    // Fill :nth-match(input[type="text"], 4)
    await page.fill(':nth-match(input[type="text"], 4)', '22');


    // Click label[role="radio"]:has-text("女")
    await page.click('#app > div > div:nth-child(2) > div:nth-child(2) > div:nth-child(5) > div > div.el-dialog__body > form > div:nth-child(4) > div > label:nth-child(2) > span.el-radio__input > span');

    // Click textarea
    await page.click('textarea');

    // Fill textarea
    await page.fill('textarea', '三峡大学');

    // Click button:has-text("确 定")
    await page.click('button:has-text("确 定")');
});

When("跳到搜索网站 {string}", async function (arg1) {

    // Click text=主页
    await page.click('text=主页');
    // assert.equal(page.url(), 'http://localhost:9876/home');

   
});

Then("查看echars图是否发生改变", async function () {

    // Click canvas
    await page.click('canvas');

    await page.waitForTimeout(1000);
});

When("跳到登录网页 {string}", async function (arg1) {

    // Click text=聊天室
    await Promise.all([
        page.waitForNavigation(/*{ url: 'http://localhost:9876/im' }*/),
        page.click('text=聊天室')
    ]);

});


Then("输入用户名{string}，密码{string}，验证码{string}，导航到主页", async function (arg1, arg2, arg3) {

    const page1 = await context.newPage();
    // Go to http://localhost:9876/
    await page1.goto('http://localhost:9876/');
    // Click [placeholder="请输入账号"]
    await page1.click('[placeholder="请输入账号"]');

    // Fill [placeholder="请输入账号"]
    await page1.fill('[placeholder="请输入账号"]', 'zhang');

    // Click [placeholder="请输入密码"]
    await page1.click('[placeholder="请输入密码"]');

    // Fill [placeholder="请输入密码"]
    await page1.fill('[placeholder="请输入密码"]', '123');

    // Click [placeholder="请输入验证码"]
    await page1.click('[placeholder="请输入验证码"]');

    // Fill [placeholder="请输入验证码"]
    await page1.fill('[placeholder="请输入验证码"]', '0000');

    // Click label[role="radio"]:has-text("普通用户")
    await page1.click('#app > div > div > form > div:nth-child(4) > div > label:nth-child(2) > span.el-radio__input > span');

    // Click button:has-text("登 录")
    await page1.click('button:has-text("登 录")');
  // assert.equal(page1.url(), 'http://localhost:9876/home');
  // Close page
    await page1.close();
});


Then("跳转到 {string}，点击{string}与{string}发起聊天，admin发送信息{string}，输入{string}，并点击{string}按钮，关闭页面", async function (arg1, arg2, arg3, arg4, arg5, arg6) {

    const page1 = await context.newPage();
    // Go to http://localhost:9876/
    await page1.goto('http://localhost:9876/');
    // Click [placeholder="请输入账号"]
    await page1.click('[placeholder="请输入账号"]');

    // Fill [placeholder="请输入账号"]
    await page1.fill('[placeholder="请输入账号"]', 'zhang');

    // Click [placeholder="请输入密码"]
    await page1.click('[placeholder="请输入密码"]');

    // Fill [placeholder="请输入密码"]
    await page1.fill('[placeholder="请输入密码"]', '123');

    // Click [placeholder="请输入验证码"]
    await page1.click('[placeholder="请输入验证码"]');

    // Fill [placeholder="请输入验证码"]
    await page1.fill('[placeholder="请输入验证码"]', '0000');

    // Click label[role="radio"]:has-text("普通用户")
    await page1.click('#app > div > div > form > div:nth-child(4) > div > label:nth-child(2) > span.el-radio__input > span');

    // Click button:has-text("登 录")
    await page1.click('button:has-text("登 录")');
    // assert.equal(page1.url(), 'http://localhost:9876/home');

    // Click text=聊天室
    await page1.click('text=聊天室');
    // assert.equal(page1.url(), 'http://localhost:9876/im');




    // Click text=在线用户（点击聊天气泡开始聊天）admin >> i
    await page1.click('text=在线用户（点击聊天气泡开始聊天）admin >> i');

    // Click text=在线用户（点击聊天气泡开始聊天）zhang >> i
    await page.click('text=在线用户（点击聊天气泡开始聊天）zhang >> i');





    // Click textarea
    await page.click('textarea');

    // Fill textarea
    await page.fill('textarea', '你好有什么需要帮助的吗');

    // Click button:has-text("发送")
    await page.click('button:has-text("发送")');

    // Click textarea
    await page1.click('textarea');

    // Fill textarea
    await page1.fill('textarea', '请问可以跟我说一下平台支付步骤吗？');
    // Click button:has-text("发送")
    await page1.click('button:has-text("发送")');
    //延长时间观察页面
    await page.waitForTimeout(1000);
//测试项目自动关闭
    // // Close page
    // await page1.close();

    // // Close page
    // await page.close();
});






