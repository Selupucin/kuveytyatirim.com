<template>
  <div>
    <div class="trading_section_top">
      <div class="trading_section_top_icon">
        <img :src="tradingIcon" />
      </div>
      <h4>Forex Trading Hours</h4>
      <span
        >Forex markets can be traded 24 hours a day, every weekday. Forex market
        midnight hours with Turkey on Sunday, begins with sunrise Friday night
        in Sydney and will continue operations until the New York Stock Exchange
        is closed. Transactions are particularly active with the opening of
        Tokyo and London markets between 10:00 and 11:00, and London and America
        markets between 15:00 and 19:00 and reaching the highest trading
        volumes.</span
      >
    </div>

    <div class="trading_table">
      <table>
        <tr>
          <th>Forex Market Center</th>
          <th>Country</th>
          <th>Turkey Opening Hours</th>
          <th>Turkey Closing Hours</th>
        </tr>
        <tr>
          <td>Sidney</td>
          <td>Frankfurt</td>
          <td>00:00</td>
          <td>00:00</td>
        </tr>
        <tr>
          <td>Eve</td>
          <td>Jackson</td>
          <td>00:00</td>
          <td>00:00</td>
        </tr>
        <tr>
          <td>Eve</td>
          <td>Jackson</td>
          <td>00:00</td>
          <td>00:00</td>
        </tr>
        <tr>
          <td>Eve</td>
          <td>Jackson</td>
          <td>00:00</td>
          <td>00:00</td>
        </tr>
        <tr>
          <td>Eve</td>
          <td>Jackson</td>
          <td>00:00</td>
          <td>00:00</td>
        </tr>
        <tr>
          <td>Eve</td>
          <td>Jackson</td>
          <td>00:00</td>
          <td>00:00</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "spreads",
  bodyClass: "spreads-page",
  props: {
    tradingIcon: {
      type: String,
      default: require("@/assets/img/trading_icon.svg"),
    },
  },
};
</script>