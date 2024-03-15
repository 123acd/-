const { Given, When, Then } = require('cucumber')
const { chromium } = require('leanpro.web');

(async () => {
  const browser = await chromium.launch({
    headless: false
  });
  const context = await browser.newContext();

  // Go to http://localhost:9876/
  await page.goto('http://localhost:9876/');

  // Go to http://localhost:9876/home
  await page.goto('http://localhost:9876/home');

  // Go to http://localhost:9876/login
  await page.goto('http://localhost:9876/login');

  // Click :nth-match(button, 2)
  await page.click(':nth-match(button, 2)');
  // assert.equal(page.url(), 'http://localhost:9876/register');

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

//   // Click button:has-text("注册")
//   await Promise.all([
//     page.waitForNavigation(/*{ url: 'http://localhost:9876/login' }*/),
//     page.click('button:has-text("注册")')
//   ]);
    // Go to http://localhost:9876/login
    await page.goto('http://localhost:9876/login');
  // Click [placeholder="请输入账号"]
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

  // Click text=汽车类型
  await Promise.all([
    page.waitForNavigation(/*{ url: 'http://localhost:9876/book' }*/),
    page.click('text=汽车类型')
  ]);

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

  // Click [placeholder="请输入关键字"]
  await page.click('[placeholder="请输入关键字"]');

  // Fill [placeholder="请输入关键字"]
  await page.fill('[placeholder="请输入关键字"]', '特斯');

  // Click button:has-text("查询")
  await page.click('button:has-text("查询")');

  // Click text=特斯拉3000002023-06-04详情编辑删除 >> span[role="false"] span
  await page.click('text=特斯拉3000002023-06-04详情编辑删除 >> span[role="false"] span');

  // Click text=特斯拉4000002023-06-04详情编辑删除 >> span[role="false"] span
  await page.click('text=特斯拉4000002023-06-04详情编辑删除 >> span[role="false"] span');

  // Click button:has-text("批量删除")
  await page.click('button:has-text("批量删除")');

  // Click button:has-text("确定")
  await page.click('button:has-text("确定")');

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

    // Click button:has-text("确 定")
    await page.click('button:has-text("确 定")');

  // Click text=宝马5400002023-06-04详情编辑删除 >> :nth-match(button, 3)
    await page.click('#app > div > div:nth-child(2) > div:nth-child(2) > div.el-table--fit.el-table--striped.el-table--border.el-table--enable-row-hover.el-table--enable-row-transition.el-table--small.el-table > div.el-table__body-wrapper.is-scrolling-none > table > tbody > tr:nth-child(6) > td.el-table_3_column_15 > div > button.el-button.el-button--danger.el-button--mini');

    // // Click button:has-text("确定")
    // await page.click('el-button el-button--primary el-button--mini');

    // await page.waitForTimeout(5000);


  // Click text=动态
  await page.click('text=动态');
  // assert.equal(page.url(), 'http://localhost:9876/news');

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

//   // Click #el-popper-2856 button:has-text("确定")
//     await page.click('#el-popper-6856 > div.el-popconfirm > div > button.el-button.el-button--primary.el-button--mini');
    // Click text=系统管理
    await page.click('text=系统管理');

    // Click text=用户管理
    await page.click('text=用户管理');
    // assert.equal(page.url(), 'http://localhost:9876/user');

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


    // Click text=主页
    await page.click('text=主页');
    // assert.equal(page.url(), 'http://localhost:9876/home');

    // Click canvas
    await page.click('canvas');

    await page.waitForTimeout(1000);


    // // Click text=用户管理
    // await page.click('text=用户管理');
    // // assert.equal(page.url(), 'http://localhost:9876/user');

    // // Click text=44222234女三峡大学查看在售车辆编辑删除 >> :nth-match(button, 3)
    // await page.click('text=44222234女三峡大学查看在售车辆编辑删除 >> :nth-match(button, 3)');

    // // Click #el-popper-8826 button:has-text("确定")
    // await page.click('#el-popper-8826 button:has-text("确定")');

    // // Click text=43111111男三峡大学查看在售车辆编辑删除 >> :nth-match(button, 3)
    // await page.click('#app > div > div:nth-child(2) > div:nth-child(2) > div.el-table--fit.el-table--striped.el-table--border.el-table--enable-row-hover.el-table--enable-row-transition.el-table--small.el-table > div.el-table__body-wrapper.is-scrolling-none > table > tbody > tr:nth-child(10) > td.el-table_5_column_28 > div > button.el-button.el-button--danger.el-button--mini');

    // Click #el-popper-6832 button:has-text("确定")


 

  // Click text=聊天室
  await Promise.all([
    page.waitForNavigation(/*{ url: 'http://localhost:9876/im' }*/),
    page.click('text=聊天室')
  ]);

  // Open new page
  const page1 = await context.newPage();

  // Go to http://localhost:9876/
  await page1.goto('http://localhost:9876/');

  // Go to http://localhost:9876/home
  await page1.goto('http://localhost:9876/home');

  // Go to http://localhost:9876/login
  await page1.goto('http://localhost:9876/login');

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
  // Close page
  await page1.close();

  // Close page
  await page.close();

//   // ---------------------
//   await context.close();
//   await browser.close();
})();



