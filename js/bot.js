const TOKEN = "6139907981:AAGbUQPYDP3RPPjEBZApklGfxxTj5Tb4JQ0";
    const CHAT_ID = "-1001850640955";
    const URI_API = `https://api.telegram.org/bot${ TOKEN }/sendMessage`;

    document.getElementById('tg').addEventListener("submit", function(e) {
      e.preventDefault();
      
      let message = `<b>заявка с сайта</b>\n`;
      message += `<b>Имя покупателя: </b> ${ this.name.value }\n`;
      message += `<b>Телефон покупателя: </b> ${ this.phone.value }\n`;
      message += `<b>Email покупателя: </b> ${ this.email.value }`;
      message += `<b>Сообщение покупателя: </b> ${ this.messages.value }`;
      console.log(message);
      axios.post(URI_API, {
      chat_id: CHAT_ID,
      parse_mode: 'html',
      text: message
      })
      .then((res) => {
      this.name.value = "";
      this.phone.value = "";
      this.email.value = "";
      this.messages.value = "";
      })
      .catch((err) => {
      console.warn(err);
      })
      .finally((err) => {
      console.log('The end');
      })
        
    })