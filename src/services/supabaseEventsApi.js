import supabase from "../supabaseClient"

export const fetchEvents = async () => {
  const data = await supabase.from("events").select();
  console.log("data array", data);
  return data;
};

export const fetchEventById = async (id) => {
  const data = await supabase
    .from("events")
    .select()
    .eq("id", id);
  console.log("data array", data);
  console.log(data);
  return data;
}