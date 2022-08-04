import supabase from "../supabaseClient"

export const fetchEvents = async () => {
  const data = await supabase.from("events").select();
  console.log("data array", data);
  return data;
};