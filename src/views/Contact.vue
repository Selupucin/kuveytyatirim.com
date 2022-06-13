<template>
		<div class="contact_section">
			<div class="row">
				<div class="col-md-6">
					<div class="contact_left">
						<h4>Contact Us</h4>
						<span>To Us You can contact us instantly by using our communication options above or by filling out our contact form.</span>

						<div class="contact_us_item">
							<div class="con_us_icon">
								<img :src="usPhone">
							</div>
							<div class="con_us_text">
								+972 3 7621622
							</div>
						</div>
						<div class="contact_us_item">
							<div class="con_us_icon">
								<img :src="usMail" style="width: 25px;">
							</div>
							<div class="con_us_text">
								info@kmdfx.com
							</div>
						</div>
						<div class="contact_us_item">
							<div class="con_us_icon">
								<img :src="usYer">
							</div>
							<div class="con_us_text">
								68 Bramah House 9 Gatliff Road London SW1W 8DQ
							</div>
						</div>

						<div class="footer_social">
							<ul>
								<li><a href="#"><div class="fa_social_icon"></div></a></li>
								<li><a href="#"><div class="twi_social_icon"></div></a></li>
								<li><a href="#"><div class="ins_social_icon"></div></a></li>
								<li><a href="#"><div class="pin_social_icon"></div></a></li>
							</ul>
						</div>
					</div>
				</div>
				<div class="col-md-6">
					<div class="contact_us_right">
						<h4>Fill The Form</h4>

						<div class="row">
							<div class="col-md-6">
								<div class="ac_sec_form_item name">
									<input type="text" name="" placeholder="Name Surname">
								</div>
							</div>
							<div class="col-md-6">
								<div class="ac_sec_form_item phone">
									<input type="text" name="" placeholder="Phone">
								</div>
							</div>
							<div class="col-md-12">
								<div class="ac_sec_form_item mail">
									<input type="text" name="" placeholder="E-mail">
								</div>
							</div>
							<div class="col-md-12">
								<div class="ac_sec_form_item">
									<textarea placeholder="Message"></textarea>
								</div>
							</div>
							<div class="col-md-12">
								<button class="submit_btn_taa">
									Send
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
</template>

<script>
export default {
  components: {},
  name: "contact",
  bodyClass: "contact-page",
  props: {
    usPhone: {
      type: String,
      default: require("@/assets/img/us_phone_icon.svg"),
    },
    usMail: {
      type: String,
      default: require("@/assets/img/us_mail_icon.svg"),
    },
    usYer: {
      type: String,
      default: require("@/assets/img/us_yer_icon.svg"),
    },
  },
};
</script>