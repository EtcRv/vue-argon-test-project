<template>
	<Menu
		:navbarContents="navbarUserContents"
		:contentDatas="userContentsDatas"
	/>
</template>

<script>
import Menu from '../ReuseComponents/Menu.vue';
export default {
	name: 'Menu User',
	components: {
		Menu,
	},
	data() {
		return {
			navbarUserContents: [
				{
					id: 1,
					header: '案件管理',
					items: ['現在の案件', '案件検索', '案件登録'],
				},
				{
					id: 2,
					header: '各種設定',
					items: [
						'マイページ',
						'クライアント検索',
						'クライアント登録',
						'お問い合わせ',
					],
				},
			],
			userContentsDatas: {
				現在の案件: [
					{
						prjname: 'AAシステム',
						customer: '青木太郎様',
						status: '要件定義中',
						dayStart: '2021年7月1日',
						dayLimited: '2021年8月10日',
						comment: '大口クライアント',
					},
					{
						prjname: 'BBシステム',
						customer: '山田花子様',
						status: '見積もり中',
						dayStart: '2021年6月1日',
						dayLimited: '2021年9月10日',
						comment: '',
					},
				],
				案件検索: [
					{
						prjname: 'BBシステム',
						customer: '山田花子様',
						status: '見積もり中',
						dayStart: '2021年6月1日',
						dayLimited: '2021年9月10日',
						comment: '',
					},
				],
				案件登録: [
					{
						prjname: 'CCシステム',
						customer: '林太郎様',
						status: 'スケジュール調整中',
						dayStart: '2021年7月11日',
						dayLimited: '2021年9月12日',
						comment: '',
					},
					{
						prjname: 'DDシステム',
						customer: '株式会社AA様',
						status: '開発中',
						dayStart: '2021年8月2日',
						dayLimited: '2021年10月10日',
						comment: '',
					},
				],
			},
			userContentsDataShow: {},
		};
	},
};
</script>

<style scoped></style>
