var nodemailer = require("nodemailer");

var transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: "lov3rinve146@gmail.com",
    pass: "muecnbhgdcaflxgd",
  },
});

var mailOptions = {
  from: "lov3rinve146@gmail.com",
  to: "lxbach1608@gmail.com",
  subject: "Sending Email using Node.js",
  html: ``,
};

const sendEmail = async (products = []) => {
  const colors = ["Gold", "Silver", "Bronze"];
  const sizes = ["16.0", "17.0", "18.0", "19.0"];

  let total = 0;

  let lines = products.map((item) => {
    const price = item.price - item.price * (item.promotion / 100);
    const subtotal = item.quantity * price;

    total += subtotal;

    return `<tr>
    <td class="product">
        <img src="https://mldrbgfat3wx.i.optimole.com/SQPHnU0-fDNzwSu7/w:300/h:300/q:auto/rt:fill/g:ce/https://dici.themes.zone/main/wp-content/uploads/sites/8/2018/04/DC_Products_8.jpg"
            alt="" class="img">
        <div class="ml-15">
            <h4 class="name">${item.name}</h4>
            <div class="flex flex-col mt-15 ml-10">
                <span class="variation">Color: ${colors[item.color]}</span>
                <span class="variation">Size: ${sizes[item.size]}</span>
            </div>
        </div>
    </td>
    <td class="quantity">${item.quantity}</td>
    <td class="price">$ ${price}</td>
    <td class="amount">$ ${subtotal}</td>
</tr>`;
  });

  let summary = `<tr style="border-bottom: none;">
  <td></td>
  <td></td>
  <td class="price" style="padding: 20px 0; text-align: left;">Subtotal</td>
  <td class="amount" style="text-align: right;">$ ${total.toFixed(2)}</td>
</tr>
<tr style="border-bottom: none;">
  <td></td>
  <td></td>
  <td class="price" style="padding: 20px 0; text-align: left;">Shipping</td>
  <td class="amount" style="text-align: right;">$ 30.00</td>
</tr>
<tr style="border-bottom: none;">
  <td></td>
  <td></td>
  <td class="price" style="padding: 20px 0; text-align: left;">Total</td>
  <td class="amount" style="text-align: right;">$ ${(total + 30).toFixed(
    2
  )}</td>
</tr>`;

  let html = `<!DOCTYPE html>
  <html lang="en">
  
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
  
      <style>
          * {
              box-sizing: border-box;
              padding: 0;
              margin: 0;
          }
  
          html {
              font-size: 62.5%;
              font-family: "Poppins", sans-serif;
              -webkit-font-smoothing: antialiased;
              scroll-behavior: smooth;
          }
  
          body {
              font-size: 1.6rem;
          }
  
          .section-1200 {
              width: 1200px;
              margin: 0 auto;
          }
  
          .mt-10 {
              margin-top: 10px !important;
          }
  
          .mt-15 {
              margin-top: 15px !important;
          }
  
          .mt-20 {
              margin-top: 20px !important;
          }
  
          .ml-10 {
              margin-left: 10px;
          }
  
          .ml-15 {
              margin-left: 15px;
          }
  
          .flex {
              display: flex;
          }
  
          .flex.flex-col {
              flex-direction: column;
          }
  
          .flex.justify-center {
              justify-content: center;
          }
  
          .flex.align-center {
              align-items: center;
          }
  
          table {
              border-collapse: collapse;
              border-spacing: 0;
              width: 100%;
          }
  
          tr {
              border-bottom: 1px solid #ccc;
          }
  
          tr th {
              text-align: center;
          }
  
          tr td {
              text-align: center;
          }
  
          th.product {
              padding: 14px 12px 14px 24px;
          }
  
          th.quantity {
              padding: 14px 12px;
          }
  
          th.price {
              padding: 14px 12px;
          }
  
          th.product {
              padding: 14px 24px 14px 12px;
          }
  
          img.img {
              width: 100px;
              height: 100px;
              border: 1px solid #e1e1e1;
          }
  
          td.product {
              display: flex;
              align-items: center;
              padding: 20px 0;
          }
  
          td.amount {
              font-weight: 600;
          }
  
          .name {
              font-size: 15px;
              font-weight: 600;
          }
  
          .variation {
              font-size: 14px;
              color: #888686;
  
              line-height: 1.4;
              text-align: left;
          }
      </style>
  
  </head>
  <body style="font-size: 16px">
  <section class="section-1200">
      <table>
          <thead>
              <tr>
                  <th class="product">Product</th>
                  <th class="quantity">Quantity</th>
                  <th class="price">Price</th>
                  <th class="amount">Amount</th>
              </tr>
          </thead>
          <tbody>
            ${lines.concat(summary)}
          </tbody>
      </table>
  </section>
</body>
  </html>`;

  mailOptions.html = html;

  try {
    await transporter.sendMail(mailOptions);
  } catch (err) {
    console.log(err);
  }
};

module.exports = sendEmail;
