import { reactive, toRefs, ref } from "vue";
import { api } from "../boot/axios";
import Utils from "../helpers/Utils";

export default function useCountry() {
  const state = reactive({
    loading: false,
    saving: false,
    deleting: false,
    permissions: [],
    countries: [],
  });
  
  const roleColumns = [
    {
      name: "sl",
      label: "#",
      required: true,
      field: (row) => row,
      align: "left",
    },
    {
      name: "flag",
      label: "FlAG",
      required: true,
      field: (row) => country.flags?.png,
      align: "left",
      sortable: true,
    },
    {
      name: "country_name",
      label: "Country Name",
      required: true,
      field: (row) => row.name.official,
      align: "center",
      sortable: true,
    },
    {
      name: "2_character_country_code",
      label: "2 character Country Code",
      required: true,
      field: (row) => row.cca2,
      align: "left",
    },

    {
      name: "3_character_country_code",
      label: "3 character Country Code",
      required: true,
      field: (row) => row.cca3,
      align: "left",
    },
    {
      name: "native_country_name",
      label: "Native Country Name",
      required: true,
      field: (row) => row.name?.nativeName?.eng?.official,
      align: "left",
    },

    {
      name: "alternative_country_name",
      label: "Alternative Country Name",
      required: true,
      field: (row) => row.altSpellings[0],
      align: "left",
    },
    {
      name: "country_calling_codes",
      label: "Country Calling Codes",
      required: true,
      field: (row) => (row.idd.root + (row.idd.suffixes?row.idd.suffixes[0]:'')),
      align: "left",
    },
    
  ];


  const paginateCountry = async (props) => {
    state.loading = true;
    let params =
      props.filter !== undefined
        ? Object.assign(props.pagination, { ...props.filter })
        : props.pagination;
    try {
      let endpoint = props.endpoint
      console.log(endpoint)
      const response = await api.get(endpoint);
      state.countries = response.data;
      console.log(state.countries)
      state.loading = false;
      console.log('state.countries')

      return response;
    } catch (err) {
      state.loading = false;
      throw Error(Utils.getErrorMessage(err));
    }
  };

  return {
    ...toRefs(state),
    roleColumns,
    paginateCountry,
  };
}
