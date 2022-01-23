<template>
	<div class="admin-content-main">
		-->

		<div class="admin-content-button-table">
			<div class="table-responsive">
				<base-table
					thead-classes="thead-light"
					:data="contentsDataShow"
				>
					<template v-slot:columns>
						<th v-for="(item, index) in headerItems" :key="index">
							{{ item.headerName }}
							<div v-if="!item.btnList">
								<button
									@click="onClick(item.sortKey)"
									v-if="item.btnName"
								>
									{{ item.btnName }}
								</button>
							</div>
							<div v-else v-for="(btn, idx) in item.btnList" :key="idx">
								<button @click="onClick(btn.sortKey)">
									{{ btn.btnName }}
								</button>
							</div>
						</th>
					</template>
					<template v-slot:default="contentsDataShow">
						<th scope="row">
							{{ contentsDataShow.item.projectName }}
						</th>
						<td>
							{{ contentsDataShow.item.customer }}
						</td>
						<td>
							{{ contentsDataShow.item.status }}
						</td>
						<td>
							{{ contentsDataShow.item.startDate }}
						</td>
						<td>
							{{ contentsDataShow.item.deliveryDate }}
						</td>
						<td>
							{{ contentsDataShow.item.comment }}
						</td>
					</template>
				</base-table>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Menu Content',
	props: ['contentsDataShow', 'sortAlphabetStatus'],
	data() {
		return {
			headerItems: [
				{
					headerName: '案件名',
					btnName: '案件名順',
					sortKey: 'project',
				},
				{
					headerName: 'クライアント名',
					btnName: 'クライアント名順',
					sortKey: 'customer',
				},

				{
					headerName: 'ステータス',
					btnName: 'ステータス名順',
					sortKey: 'project',
				},
				{
					headerName: '開始日',
				},
				{
					headerName: '納期',
					btnList: [
						{
							btnName: '納期早い順',
							sortKey: 'deliveryUpDate',
						},
						{
							btnName: '納期遅い順',
							sortKey: 'deliveryDownDate',
						},
					],
				},
				{
					headerName: '備考',
				},
			],
		};
	},
	methods: {
		// tất cả các cái methods này đều là onClick thì cho thành 1 cái không có được không?
		// Ví dụ em đưa hết các btn này vào một cái array of object với mỗi nút là một object bao gồm {btnName:"", sortContent:""} rồi em loop nó ra
		// như vậy em chỉ cần xử lý một hàm là onClick() và emit ra $emit("onSortClick", nội dung em gửi ra là sortContent để thằng parent biết là em đang muốn sort cái gì để xử lý)
		onClick(value) {
			this.$emit(value);
		},
	},
};
</script>

<style scoped>
.admin-content-main {
	width: 90%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}
.admin-content-problem {
	width: 100%;
	display: flex;
	align-items: center;
}
.button-sort {
	padding: 20px 0;
	width: 100%;
	display: flex;
	justify-content: space-between;
}
.admin-content-button-table {
	background-color: #f6f9fc;
	width: 100%;
}
.table-responsive {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}
</style>
