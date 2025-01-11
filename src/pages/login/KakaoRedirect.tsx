import { PostLogin } from "@shared/apis/dreamAPI";
import { useMutation } from "@tanstack/react-query";
import { useEffect } from "react";
import { useNavigate } from "react-router";

function KakaoRedirect() {
  const navigate = useNavigate();

  const { mutate: postMutation } = useMutation({
    mutationFn: PostLogin,
    onSuccess: () => {
      console.log("로그인 성공");
      navigate("/home");
    },
    onError: () => {
      console.log("로그인 실패");
      navigate("/");
    },
  });

  useEffect(() => {
    postMutation();
  }, [postMutation]);

  return <div>로그인 중입니다...</div>;
}

export default KakaoRedirect;
