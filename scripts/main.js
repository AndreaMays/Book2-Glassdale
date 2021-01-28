// import {useOfficers} from './officers/OfficerProvider.js'
// import { getConvictions, useConvictions } from './convictions/ConvictionDataProvider.js';
import { ConvictionSelect } from './convictions/ConvictionSelect.js';
import { CriminalList } from './criminals/CriminalList.js';
import { OfficerSelect } from './officers/OfficerSelect.js';

// useOfficers()
CriminalList()
// useConvictions()
// getConvictions()
// .then(( => console.log(useConvictions)))
ConvictionSelect()
OfficerSelect()