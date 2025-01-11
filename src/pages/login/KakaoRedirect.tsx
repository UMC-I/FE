import { PostLogin } from "@shared/apis/dreamAPI";
import { useMutation } from "@tanstack/react-query";
import { useEffect } from "react";
import { useNavigate } from "react-router";

function KakaoRedirect() {
  const code = new URL(window.location.href).searchParams.get("code");
  const navigate = useNavigate();

  const { mutate: postMutation } = useMutation({
    mutationFn: PostLogin,
    onSuccess: (data) => {
      console.log("로그인 성공:", data);
      navigate("/home");
    },
    onError: (error) => {
      console.log("로그인 실패:", error);
      navigate("/");
    },
  });

  useEffect(() => {
    if (code) {
      postMutation();
    } else {
      console.log("인증 코드가 없습니다.");
      navigate("/");
    }
  }, [code, navigate, postMutation]);

  return <div>로그인 중입니다...</div>;
}

export default KakaoRedirect;
