import supabase from "./supabaseClient"

export const fetchWishlistByUserId = async (id) => {
  const data = await supabase
    .from("favorites")
    .select()
    .eq("user_id", id);
  return data;
}