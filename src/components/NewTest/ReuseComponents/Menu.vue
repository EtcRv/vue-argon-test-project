<template>
	<div class="wrapper">
		<NavBarMenu
			:navbarContents="navbarContents"
			@selectedContent="selectedContent"
		/>
		<!-- End Side Bar -->

		<!-- Main content -->
		<div class="main-content">
			<ContentMenu
				:contentsDataShow="contentsDataShow"
				@project="sortAlphabet(contentsDataShow, 'projectName')"
				@customer="sortAlphabet(contentsDataShow, 'customer')"
				@status="sortAlphabet(contentsDataShow, 'status')"
				@startDate="sortDay(contentsDataShow, 'startDate')"
				@deliveryDate="sortDay(contentsDataShow, 'deliveryDate')"
			></ContentMenu>
		</div>
	</div>
</template>

<script>
import ContentMenu from './ContentMenu.vue';
import NavBarMenu from './NavbarMenu.vue';
import moment from 'moment';
export default {
	name: 'Menu Screen',
	components: {
		ContentMenu,
		NavBarMenu,
	},
	props: ['navbarContents', 'contentDatas'],
	data() {
		// eslint-disable-next-line prettier/prettier
		return {
			contentsDataShow: this.contentDatas['現在の案件'], //cái này để làm gì??  Cái này là em gán giá trị của bảng ngay khi vào màn hình menu để nó hiển thị luôn ạ
		};
	},
	methods: {
		// Chọn nội dung hiển thị mà không reload lại trang
		selectedContent(item) {
			this.contentsDataShow = this.contentDatas[item];
		},
		// Sort theo thứ tự bảng chữ cái Alphabet
		sortAlphabet(dataSort, valueSort) {
			for (let i = 0; i < dataSort.length; i++) {
				for (let j = i + 1; j < dataSort.length; j++) {
					if (dataSort[i][valueSort] > dataSort[j][valueSort]) {
						let dataExchange = dataSort[i];
						dataSort[i] = dataSort[j];
						dataSort[j] = dataExchange;
					}
				}
			}
		},

		// Sort ngày
		// Tại sao vẫn phải 	.replace('年', '/').... trong khi ví dụ hôm qua anh đưa đâu có cần?
		// Em tưởng là nó chuyển đổi dữ liệu ngày dạng .../.../.. nên em mới replace, phần này em cũng đang bị sai, để em sửa lại
		sortDay(dataSort, valueSort) {
			let daySortConvertToNum = [];
			for (let i = 0; i < dataSort.length; i++) {
				daySortConvertToNum.push(
					moment(dataSort[i][valueSort]).valueOf()
				);
			}
			for (let i = 0; i < dataSort.length; i++) {
				for (let j = i + 1; j < dataSort.length; j++) {
					if (daySortConvertToNum[i] > daySortConvertToNum[j]) {
						let dataExchange = dataSort[i];
						dataSort[i] = dataSort[j];
						dataSort[j] = dataExchange;
						dataExchange = daySortConvertToNum[i];
						daySortConvertToNum[i] = daySortConvertToNum[j];
						daySortConvertToNum[j] = dataExchange;
					}
				}
			}
		},
	},
};
</script>

<style scoped>
.main-content {
	background-color: rgba(30, 161, 123, 1);
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}
</style>
