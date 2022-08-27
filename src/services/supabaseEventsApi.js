import supabase from "../supabaseClient"

export const fetchEvents = async () => {
  const data = await supabase.from("events").select();
  return data;
};

export const fetchEventById = async (id) => {
  const data = await supabase
    .from("events")
    .select()
    .eq("id", id);
  return data;
}