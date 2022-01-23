<template>
	<Menu
		:navbarContents="navbarAdminContents"
		:contentDatas="adminContentsDatas"
	/>
</template>

<script>
import Menu from '../ReuseComponents/Menu.vue';
export default {
	name: 'Menu Admin',
	components: {
		Menu,
	},
	data() {
		return {
			navbarAdminContents: [
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
				{
					id: 3,
					header: 'マスタ管理',
					items: [
						'ユーザーマスタ',
						'管理マスタ',
						'業種マスタ',
						'ランクマスタ',
					],
				},
			],
			adminContentsDatas: {
				現在の案件: [
					{
						projectName: 'BBシステム',
						customer: '山田花子様',
						status: '見積もり中',
						startDate: '2021年06月01日',
						deliveryDate: '2021年9月10日',
						comment: '',
					},
					{
						projectName: 'FFシステム',
						customer: '株式会社AA様',
						status: '開発中',
						startDate: '2021年2月24日',
						deliveryDate: '2024年9月10日',
						comment: '',
					},
					{
						projectName: 'AAシステム',
						customer: '青木太郎様',
						status: '要件定義中',
						startDate: '2021年7月1日',
						deliveryDate: '2021年8月10日',
						comment: '大口クライアント',
					},
					{
						projectName: 'DDシステム',
						customer: '株式会社AA様',
						status: '開発中',
						startDate: '2021年8月2日',
						deliveryDate: '2021年10月10日',
						comment: '',
					},
					{
						projectName: 'CCシステム',
						customer: '林太郎様',
						status: 'スケジュール調整中',
						startDate: '2021年7月15日',
						deliveryDate: '2021年9月12日',
						comment: '',
					},
					{
						projectName: 'EEシステム',
						customer: '山田花子様',
						status: '見積もり中',
						startDate: '2021年6月20日',
						deliveryDate: '2022年9月10日',
						comment: '',
					},
					{
						projectName: 'GGシステム',
						customer: '青木太郎様',
						status: '要件定義中',
						startDate: '2021年7月9日',
						deliveryDate: '2023年8月10日',
						comment: '大口クライアント',
					},
					{
						projectName: 'HHシステム',
						customer: '林太郎様',
						status: 'スケジュール調整中',
						startDate: '2021年7月3日',
						deliveryDate: '2021年10月12日',
						comment: '',
					},
				],
				案件検索: [
					{
						projectName: 'BBシステム',
						customer: '山田花子様',
						status: '見積もり中',
						startDate: '2021年6月1日',
						deliveryDate: '2021年9月10日',
						comment: '',
					},
				],
				案件登録: [
					{
						projectName: 'CCシステム',
						customer: '林太郎様',
						status: 'スケジュール調整中',
						startDate: '2021年7月11日',
						deliveryDate: '2021年9月12日',
						comment: '',
					},
					{
						projectName: 'DDシステム',
						customer: '株式会社AA様',
						status: '開発中',
						startDate: '2021年8月2日',
						deliveryDate: '2021年10月10日',
						comment: '',
					},
				],
			},
			adminContentsDataShow: {},
		};
	},
};
</script>

<style scoped></style>
