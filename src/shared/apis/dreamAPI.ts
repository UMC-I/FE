import axiosHeader from "./axiosHeader";
import axiosInstance from "./axiosInstance";
import { TPost } from "@shared/types/dreamType";

const PostLogin = async () => {
  const response = await axiosHeader.post("/oauth2/login/kakao");

  //console.log("로그인 response : ", response);
  return response.data;
};

const PostWriting = async (data: TPost) => {
  const response = await axiosHeader.post("/users/posts", {
    content: data.content,
    title: data.title,
    category: data.category,
  });
  //console.log(" 회원가입 API 응답 : ", response.data);
  return response.data;
};

const GetRanking = async () => {
  try {
    const response = await axiosHeader.get("/posts/rank");
    return response.data;
  } catch (error) {
    console.log("Ranking API 연결 실패 에러", error);
  }
};

const GetDreamList = async () => {
  try {
    const response = await axiosInstance.get("/posts");
    return response.data;
  } catch (error) {
    console.log("꿈 목록 조회 API 연결 실패 에러", error);
  }
};

const GetMyDreamList = async ({ pageParam }: { pageParam: number }) => {
  try {
    const response = await axiosInstance.get(`/my-posts?page=${pageParam}`);
    return response.data;
  } catch (error) {
    console.log("꿈 목록 조회 API 연결 실패 에러", error);
  }
};

const GetDreamDetail = async (id: number) => {
  try {
    const response = await axiosInstance.get(`/posts/${id}`);
    return response.data;
  } catch (error) {
    console.log("꿈 목록 조회 API 연결 실패 에러", error);
  }
};

const PatchSecret = async (id: number, open: boolean) => {
  try {
    const response = await axiosInstance.patch(`/users/posts/open`, {
      postId: id,
      open,
    });
    //console.log("공개 여부 수정 성공 : ", response);
    return response.data;
  } catch (error) {
    console.log("공개 여부 수정 API 실패 : ", error);
  }
};

const PatchLikeUp = async (id: number) => {
  try {
    const response = await axiosInstance.patch(`/posts/${id}/like`);
    //console.log("좋아요 성공 : ", response);
    return response.data;
  } catch (error) {
    console.log("좋아요 API 실패 : ", error);
  }
};

// const PostDreamMeaning = async (id: number) => {
//   const response = await axiosInstance.post(`/posts/${id}/description`);

//   //console.log("로그인 response : ", response);
//   return response.data;
// };

export {
  PostLogin,
  PostWriting,
  GetRanking,
  GetDreamList,
  GetMyDreamList,
  GetDreamDetail,
  PatchLikeUp,
  PatchSecret,
};
