<template>
  <q-page class="flex flex-center">
    <q-table
      title="Contacts"
      :data="data"
      :columns="columns"
    />
  </q-page>
</template>

<script>
	export default {
		name: 'PageIndex',
		data() {
			return {
				contacts: [],
				tableData: null,
				columns: [
					{ name: 'team_id', label: 'Team id', align: 'left', field: 'team_id', sortable: true },
					{ name: 'name', align: 'center', label: 'Name', field: 'name', sortable: true },
					{ name: 'phone', label: 'Phone', field: 'phone', align: 'center' },
					{ name: 'email', label: 'Email', field: 'email', align: 'center' },
				],
				data: []
			}
		},
		mounted () {
			this.getContacts();
		},
		methods: {
			getContacts() {
				this.$axios().get('http://scalesource.development/api/contacts')
					.then(res => {
						this.contacts = res.data.contacts;
						this.formatColumns();
						this.formatData();
					});
			},
			formatColumns() {
				const keys = [];
				this.contacts.forEach(item => {
					item.custom_attributes.forEach(attr => {
						const attribute = { name: 'email', label: 'Email', field: 'email', align: 'center' }
						if (!keys.includes(attr.key)) {
							keys.push(attr.key)
							attribute.name = attr.key
							attribute.label = attr.key
							attribute.field = attr.key.replace(/ /g, "_")
							this.columns.push(attribute)
						}
					})
				})
			},
			formatData() {
				const data = []
				this.contacts.forEach(item => {
					const { mapped_attributes } = item
					const dataIn = { ...mapped_attributes }
					item.custom_attributes.forEach(attr => {
						dataIn[attr.key.replace(/ /g, "_")] = attr.value
					})
          data.push(dataIn)
				});
				this.data = data;
			}
		}
	}
</script>
