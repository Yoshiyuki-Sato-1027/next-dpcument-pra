"use server";

import { permanentRedirect } from "next/navigation";
import { revalidateTag } from "next/cache";

export async function updateUsername(username: string, formData: FormData) {
  try {
    // データベースを呼び出す
  } catch (error) {
    // エラーを処理する
  }

  revalidateTag("username"); // ユーザーネームへのすべての参照を更新する
  permanentRedirect(`/profile/${username}`); // 新しいユーザープロフィールに遷移する
}
