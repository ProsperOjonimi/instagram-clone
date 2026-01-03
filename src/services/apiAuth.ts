// import type { User } from "@supabase/supabase-js";
import supabase from "./supabase";

type signupType = {
  email: string;
  password: string;
  fullName: string;
  username: string;
};
export async function signupUser({
  email,
  password,
  fullName,
  username,
}: signupType) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        fullName,
        username,
      },
    },
  });

  if (error) throw new Error(error.message);

  console.log(data);

  return data;
}
export async function loginUser({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    throw new Error(error.message);
  }

  console.log(data);
  return data;
}

export async function getCurrentUser() {
  const { data: session } = await supabase.auth.getSession();

  if (!session.session) return null;

  const { data, error } = await supabase.auth.getUser();

  console.log(data);

  if (error) throw new Error(error.message);

  return data?.user;
}

export async function resetPassword({ email }: { email: string }) {
  const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: "http://localhost:5173/accounts/password/new",
  });

  if (error) {
    console.error(error.message);
    throw new Error(error.message);
  }

  return data;
}
// export async function createUser(data: User | null) {
//   const { data: profileData, error: profileError } = await supabase
//     .from("users")
//     .insert([
//       {
//         id: data?.id,
//         username: data?.user_metadata.username,
//         full_name: data?.user_metadata.fullName,
//       },
//     ])
//     .select();

//   if (profileError) throw new Error(profileError.message);

//   return profileData;
// }
export async function updateUser({ newPassword }: { newPassword: string }) {
  // check is there is any active session after clicking the reset link
  const { data: session } = await supabase.auth.getSession();
  if (!session.session) return null;
  // if there is an active session, update user
  const { data, error } = await supabase.auth.updateUser({
    password: newPassword,
  });

  if (error) throw new Error(error.message);

  return data;
}

export async function logOut() {
  const { error } = await supabase.auth.signOut();

  if (error) throw new Error(error.message);
}
