<template>
  <q-page>
    <breadcrumbs />

    <q-card class="breadcrumb-margin">
      <q-card-section>
        <q-table
          flat
          class="q-pt-md"
          color="primary"
          :loading="loading"
          :rows="countries"
          row-key="id"
          :columns="roleColumns"
          v-model:pagination="pagination"
          :filterss="filters"
          :filter-method="onSearch"  
          @request="onRequest"
          @row-dblclick="onRowDblClick"
          :rows-per-page-options="[25]"
          binary-state-sort
          v-model:selected="selected"
        >
          <template v-slot:top>
            <q-input
              dense
              outlined
              debounce="300"
              v-model="search"
              placeholder="Search By Name"
              style="width: 300px"
            />

            <q-btn 
              style="margin-left:60px;"
              @click="onSearch"
              color="primary">
              Search
              
            </q-btn>
            <q-btn
              class="q-mr-sm q-mt-xs"
              dense
              color="primary"
              icon="mdi-filter-remove-outline"
              rounded
              
              style="margin-left: 60px"
              @click="resetFilters">
              <q-tooltip class="bg-black" :offset="[10, 10]">
                Reset Filter
              </q-tooltip>
            </q-btn>

          </template>

          <template v-slot:body-cell-sl="props">
            <q-td>
              {{ props.rowIndex + 1 }}
            </q-td>
          </template>
          <template v-slot:body-cell-flag="props">
            <q-td>
              <q-img
              :src="props.row.flags.png"
              :style="{ maxWidth: '100px', margin: '0 auto' }"
              />
            </q-td>
          </template>
          <template v-slot:body-cell-country_name="props">
            <!-- <q-td class="text-left">
              <span class="pointer" @click="onView(props.row)">
                <q-chip :label="props.row.name.official" size="sm" />
              </span>
            </q-td> -->

            <q-td class="text-center">
              <span
                @click="onViewCountry(props.row)"
                class="cursor-pointer	"
              >
              <q-chip :label="props.row.name.official" size="sm" />

                <!-- <q-chip :class="props.row.status != 'Review' ? 'white' : 'black' " :color="getColorCode(props.row.status)" size="sm" :label="props.row?.transaction_ID" /> -->
              </span>
            </q-td>
          </template>
          
          
        </q-table>
        <!-- <q-pagination
          v-model="currentPage"
          :min="1"
          :max="totalPages"
          @input="updatePagination"
        ></q-pagination> -->
      </q-card-section>
    </q-card>

    
    <q-dialog v-model="showDetail" persistent>
      <Detail
        :data="countryDetail"
        @onClose="showDetail = false"
      />
    </q-dialog>
  </q-page>
</template>

<script setup>
import { onMounted, reactive, ref, computed, watch } from "vue";
import useTable from "../../composables/useTable";
import useCountry from "../../composables/useCountry";

import Breadcrumbs from "../../components/Menu/BreadCrumbs.vue";
import Detail from "../../components/Country/Detail.vue";

const { loading, roleColumns, countries, paginateCountry } = useCountry();
const showDetail = ref(false);
const countryDetail = ref({});
const pageSize = ref(15);
const currentPage = ref(1);
const search = ref('');

const {
  selected,
  pagination,
  onRequest,
  onRowDblClick,
  onRefresh,
} = useTable(paginateCountry);
const filters = reactive({
  name: "",
  status: "active",
});


watch(
  () => filters.status,
);
onMounted(() => {
  onRequest({
    pagination: {
      ...pagination.value,
    },
    filter: undefined,
    endpoint: '/all',

  });
});

const onSearch = () => {
  onRequest({
    pagination: {
      ...pagination.value,
    },
    endpoint: search.value?'/name/'+search.value:'/all',

  });

};
const resetFilters = () => {
  search.value = ''
  onRequest({
    pagination: {
      ...pagination.value,
    },
    endpoint: '/all',

  });

};

// const totalItems = computed(() => {
//   return this.items.length;
// })

// const totalPages = computed(() => {
//   return Math.ceil(totalItems() / this.pageSize);
// })

// const paginatedItems = computed(() => {
//   const startIndex = (this.currentPage - 1) * this.pageSize;
//   const endIndex = startIndex + this.pageSize;
//   return this.items.slice(startIndex, endIndex);
// })
// const updatePagination = () =>{
//       // Update the current page and fetch the data if needed
//   }

const onViewCountry = (row) => {
  console.log("Row: ", row);
  countryDetail.value = row
  showDetail.value = true;
};
</script>
