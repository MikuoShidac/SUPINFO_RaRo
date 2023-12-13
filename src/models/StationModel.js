import mongoose from "mongoose";
import { string } from "zod";

const StationSchema = new mongoose.Schema({
  nom: { type: String, required: true },
  OpeningHour: { type: [String], required: true },
  ClosingHour: { type: Date, required: true },
  Picture: { type: String, required: true },
});
/*pour Picture à moins que mongoose ne puisse stoque des fichiersje ne pense pas qu'un type spécial peut être attribuer 
Cependant nous pouvons la déclarer comme un string qui sera un path vers la localisation de l'image
Quant à ClosingHour j'ai mis Date car apparement cela fonctionne si l'on rentre juste "heures:minutes" à l'interieur mais je n'ai pas testé*/

export const StationModel = mongoose.model("Station", StationSchema);

export default StationModel;
