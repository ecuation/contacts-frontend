<template>
  <q-page class="flex flex-center">

    <q-card flat bordered style="width: 20%;">
      <q-form class="q-pa-sm" ref="importForm">

        <q-file ref="inputFile" color="primary" v-model="file" label="CSV File" clearable :lazy-rules="true" :rules="[
            val => !!val || 'File is required',
            val => val.type === 'text/csv' || 'File must be a text/csv',
          ]"
        >
          <template v-slot:prepend>
            <q-icon name="attach_file" color="primary"/>
          </template>
        </q-file>

        <div class="buttons flex flex-center">

          <q-btn class="bg-primary q-my-lg"
                 text-color="white"
                 label="Submit"
                 @click="upload"
                 :disable="sending"
                 flat
          />
        </div>

      </q-form>
    </q-card>

  </q-page>
</template>

<script>
	export default {
		name: 'Contacts',
		mounted () {
			//
		},
		data () {
			return {
				file: null,
				sending: false
			}
		},
		computed: {},
		methods: {
			upload () {
				this.$refs.importForm.validate().then(outcome => {
					if (outcome) {
						const formData = new FormData()
						formData.append('csv_file', this.file)
						this.sending = true

						this.$axios().post('http://scalesource.development/api/import',
							formData, {
								headers: {
									'Content-Type': 'multipart/form-data'
								}
							}
						).then(data => {
							this.sending = false
							this.file = null
							this.$q.notify({
								type: 'positive',
								message: `File upload successfully`
							})
              this.$refs.inputFile.resetValidation()
						}).catch(error => {
							this.sending = false
							this.file = null
              this.$refs.inputFile.resetValidation()
							this.$q.notify({
								type: 'negative',
								message: error.response.data.message
							})
						})
					}

				})
			},
			cancel () {
				this.sending = false
				this.file = null
			}
		}
	}
</script>

<style scoped>

</style>
