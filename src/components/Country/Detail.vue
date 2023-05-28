<template>
    <q-card
      :style="{
        width: $q.platform.is.mobile ? '100%' : '1030px',
        maxWidth: '100%',
      }"
    >
      <q-toolbar dark class="bg-primary text-white px-3">
        <span class="text-h6">Country Detail View</span>
        <q-space />
        <q-btn
          dense
          flat
          icon="fas fa-times"
          @click="emit('onClose')"
          :disable="saving"
        >
        </q-btn>
      </q-toolbar>
      <q-card-section class="q-px-lg">

          <div class="row">
            <!-- <div class="col-10 col-md-10 q-pr-md">
              <h6 style="margin-bottom: 5px;">Name</h6>
            </div> -->
            <div class="col-12 col-md-6 q-pr-md" >
                                            
              <div class="form-inline" style="overflow: hidden; word-break: break-all; padding-left: 30px;">
                <h6 style="margin-bottom: 5px;"></h6>
                <div>
                  <p><label class="text-bold">Common Name :</label>  {{ country.name?.common }}</p>
                  <p><label class="text-bold">Official Name :</label>  {{ country.name?.official }}</p>
                </div> 
                <div v-for="(nativeName, language) in country.name.nativeName" :key="language">
                  <p><label class="text-bold">{{language.toUpperCase()}} Native Name Official :</label>  {{ nativeName.official }}</p>
                  <p><label class="text-bold">{{language.toUpperCase()}} Native Name Common :</label> {{ nativeName.common }}</p>
                </div>

                
                <p><label class="text-bold">Official Name : </label> 
                    <p-1 v-for="(tld,index) in country.tld " :key="index">
                      <p-2 v-if="index != 0">, </p-2>{{ tld }}
                    </p-1>
                </p>

                <p><label class="text-bold">CCA2 :</label>  {{ country.cca2}}</p>
                <p><label class="text-bold">CCA3 :</label> {{ country.cca3}}</p>
                <p><label class="text-bold">CCN3 :</label> {{ country.ccn3}}</p>
                <p><label class="text-bold">CIOC :</label> {{ country.cioc}}</p>
                <p><label class="text-bold">Independent :</label>  {{ country.independent?'Yes':'No'}}</p>
                <p><label class="text-bold">Status :</label>  {{ country.status}}</p>
                <p><label class="text-bold">UN Member :</label>  {{ country.unMember?'Yes':'No' }}</p>
                <div v-for="(item, type) in country.currencies" :key="type">
                  <p><label class="text-bold">{{type.toUpperCase()}} Currency Name :</label>  {{ item.name }}</p>
                  <p><label class="text-bold">{{type.toUpperCase()}} Currency Symbol :</label> {{ item.symbol }}</p>
                </div>
                <p><label class="text-bold">IDD :</label> {{ country.idd?.root + country.idd?.suffixes }}</p>
                
                <p><label class="text-bold">Capital : </label>
                    <p-1 v-for="(capital,index) in country.capital " :key="index">
                      <p-2 v-if="index != 0">, </p-2>{{ capital }}
                    </p-1>
                </p>
                <p><label class="text-bold">Alt Spellings : </label>
                    <p-1 v-for="(altSpelling,index) in country.altSpellings " :key="index">
                      <p-2 v-if="index != 0">, </p-2>{{ altSpelling }}
                    </p-1>
                </p>
                <p><label class="text-bold">Region :</label> {{ country.region }}</p>
                <p><label class="text-bold">Subregion :</label> {{ country.subregion }}</p>

                <div v-for="(language, index) in country.languages" :key="index">
                  <p><label class="text-bold">Language {{index.toUpperCase()}} :</label>  {{ language }}</p>
                </div>

                <p><label class="text-bold">Lat Lng :</label> {{ country.latlng?country.latlng[0]+','+country.latlng[1]:'' }}</p>
                <p><label class="text-bold">Landlocked :</label> {{ country.landlocked?'Yes':'No' }}</p>
                <p><label class="text-bold">Area :</label> {{ country.area}}</p>
                <p><label class="text-bold">Flag Icon :</label> {{ country.flag}}</p>

                <p><label class="text-bold">Flag PNG : </label> 
                  <q-img
                    :src="country.flags?.png"
                    :alt="country.flags?.alt"
                    :style="{ maxWidth: '100px', margin: '0 auto' }"
                    />
                </p>

                <p>
                    <label class="text-bold">Flag SVG : </label> 
                    <q-img
                    :src="country.flags?.svg"
                    :alt="country.flags?.alt"
                    :style="{ maxWidth: '100px', margin: '0 auto' }"
                    />
                </p>
                <p v-for="(coatOfArm,key) in country.coatOfArms" :key="key">
                    <label class="text-bold">Coat Of Arms {{key.toUpperCase()}} : </label> 
                    <q-img
                    :src="coatOfArm"
                    :style="{ maxWidth: '100px', margin: '0 auto' }"
                    />
                </p>

                <p v-for="(map,key) in country.maps" :key="key">
                    <label class="text-bold">Map {{key}} : </label> 
                    <a :href="map" target="_blank">{{ map }}</a>
                </p>

                <p><label class="text-bold">Population :</label> {{ country.population}}</p>
                <p><label class="text-bold">FIFA :</label> {{ country.fifa}}</p>


                <p v-for="(items,key) in country.car" :key="key">
                    <label class="text-bold">Car {{key}} : </label> 
                    <p-1 v-if="!Array.isArray(items)">
                        {{ items }}
                    </p-1>
                    <p-1 v-else v-for="(item,index) in items " :key="index">
                      <p-2 v-if="index != 0">, </p-2>{{ item }}
                    </p-1>
                    
                </p>
                <p><label class="text-bold">Timezones : </label>
                    <p-1 v-for="(timezone,index) in country.timezones " :key="index">
                      <p-2 v-if="index != 0">, </p-2>{{ timezone }}
                    </p-1>
                </p>
                <p><label class="text-bold">Continents : </label>
                    <p-1 v-for="(continent,index) in country.continents " :key="index">
                      <p-2 v-if="index != 0">, </p-2>{{ continent }}
                    </p-1>
                </p>
                <p><label class="text-bold">Start Of Week :</label> {{ country.startOfWeek}}</p>
                
                <p v-for="(items,key) in country.capitalInfo" :key="key">
                    <label class="text-bold">Capital Info {{key}} : </label> 
                    <p-1 v-if="!Array.isArray(items)">
                        {{ items }}
                    </p-1>
                    <p-1 v-else v-for="(item,index) in items " :key="index">
                      <p-2 v-if="index != 0">, </p-2>{{ item }}
                    </p-1>
                    
                </p>
                
                <div v-for="(translation, language) in country.demonyms" :key="language">
                  <p><label class="text-bold">Demonym {{language.toUpperCase()}} F</label> : {{ translation.f }}</p>
                  <p><label class="text-bold">Demonym {{language.toUpperCase()}} M</label> : {{ translation.m }}</p>
                </div>
              
              </div>
              
            </div>

            <div class="col-12 col-md-6 q-pr-md">
              <div class="form-inline" style="overflow: hidden; word-break: break-all; padding-left: 30px;">
                <h6 style="margin-bottom: 10px; margin-top: 40px;">Country Name Translations</h6>
                <div v-for="(translation, language) in country.translations" :key="language">
                  <p><label class="text-bold">{{language.toUpperCase()}} Official</label> : {{ translation.official }}</p>
                  <p><label class="text-bold">{{language.toUpperCase()}} Common</label> : {{ translation.common }}</p>
                </div>
              </div>
              
            </div>
          </div>
        <Loading :loading="isLoading" />
      </q-card-section>
    </q-card>
  </template>
  
  <script setup>
  import { ref } from "vue";
  import { useQuasar } from "quasar";
  import Utils from "../../helpers/Utils";
  
  const emit = defineEmits(["onClose", "onUpdate"]);
  
  const $q = useQuasar();
  const props = defineProps({ data: Object });
  const country = ref({ ...props.data, comment: "" });
  const statusValue = ref("Approve");
  
  const images_url = ref("");
  const images = ref("");
  const cropper = ref("");
  
  </script>
  