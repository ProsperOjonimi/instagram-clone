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

export async function resetPassword({ email }) {
  const { data, error } = await supabase.auth.resetPasswordForEmail(email);

  if (error) throw new Error(error.message);

  console.log(data);

  return data;
}
