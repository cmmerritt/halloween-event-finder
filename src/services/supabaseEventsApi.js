import supabase from "../supabaseClient"

export const fetchEvents = async () => {
  const data = await supabase.from("Events").select();
  console.log("data array", data);
  return data;
};