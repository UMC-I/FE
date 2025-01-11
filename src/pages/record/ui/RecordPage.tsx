import styled from "styled-components";
import left from "../../../shared/assets/icon/left.png";
import ghost from "../../../shared/assets/images/ghost.png";
import dog from "../../../shared/assets/images/dog.png";
import clover from "../../../shared/assets/images/clover.png";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import { PostWriting } from "@shared/apis/dreamAPI";
import { useMutation } from "@tanstack/react-query";

export const RecordPage = () => {
  const navigate = useNavigate();
  const schema = yup.object().shape({
    content: yup.string().required().min(1).max(300),
    title: yup.string().required().min(1).max(30),
    category: yup.string().required(),
  });

  const {
    register,
    handleSubmit,
    setValue,
    trigger,
    watch,
    formState: { isValid },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      content: "",
      title: "",
      category: "",
    },
    mode: "onChange",
  });

  const category: string = watch("category");

  const handleClick = (name: string) => {
    setValue("category", name, { shouldValidate: true });
  };

  const {
    mutate: postMutation,
    // isError,
    // isPending,
  } = useMutation({
    mutationFn: PostWriting,
    onSuccess: () => {
      console.log("꿈 생성 성공");
      navigate("/success");
    },
    onError: () => {
      console.log("꿈 생성 실패");
    },
  });

  const onSubmit = (data: {
    content: string;
    title: string;
    category: string;
  }) => {
    trigger();
    console.log(data);
    postMutation(data);
  };

  const formValues = watch();

  useEffect(() => {
    console.log("현재 폼 값:", formValues);
  }, [formValues]);

  useEffect(() => {
    console.log("현재 isValid 상태:", isValid);
  }, [isValid]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Container>
        <img src={left} />
        <Info>
          꿈에서 깨어난 지금,{"\n"} 그 순간을 조용히 꾹 눌러 담아볼까요?
        </Info>
        <Memo
          {...register("content")}
          placeholder="내용을 입력하세요. (300자 이내)"
        />
        <Title
          type="text"
          {...register("title")}
          placeholder="제목을 입력하세요. (30자 이내)"
        />
        <Options>
          <Option
            isSelected={category === "공포"}
            onClick={() => handleClick("공포")}
          >
            <img
              src={ghost}
              style={{
                width: "25px",
                height: "25px",
                transform: "translateY(-2px)",
              }}
            />
            <Name>공포</Name>
          </Option>
          <Option
            isSelected={category === "개꿈"}
            onClick={() => handleClick("개꿈")}
          >
            <img
              src={dog}
              style={{
                width: "25px",
                height: "25px",
                transform: "translateY(-2px)",
              }}
            />
            <Name>개꿈</Name>
          </Option>
          <Option
            isSelected={category === "일상"}
            onClick={() => handleClick("일상")}
          >
            <img src={clover} style={{ width: "25px", height: "25px" }} />
            <Name>일상</Name>
          </Option>
        </Options>
        <Button type="submit" disabled={!isValid}>
          기록하기
        </Button>
      </Container>
    </form>
  );
};

const Button = styled.button`
  width: 334px;
  height: 50px;
  flex-shrink: 0;
  border-radius: 10px;
  border: 1px solid #6276d9;
  background: #6276d9;
  margin-bottom: 121px;
  color: #fff;
  text-align: center;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  &:disabled {
    background-color: #b6b6b6;
    border: 1px solid #b6b6b6;
  }
`;

const Name = styled.div`
  color: #000;
  text-align: center;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
`;

const Option = styled.div<{ isSelected: boolean }>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  column-gap: 8px;
  width: 95px;
  height: 40px;
  flex-shrink: 0;
  border-radius: 10px;
  border: ${(props) =>
    props.isSelected ? "0.5px solid #B6B6B6" : "0.5px solid #b2b2b2"};
  background: ${(props) => (props.isSelected ? "#E8EBFA" : "#FFF")};
  box-shadow: 0px 0.5px 2px 0px rgba(97, 100, 107, 0.5) inset;
`;

const Options = styled.div`
  display: flex;
  column-gap: 24px;
  margin-top: 26px;
  margin-bottom: 20px;
`;

const Title = styled.input`
  width: 333px;
  height: 45px;
  flex-shrink: 0;
  border-radius: 10px;
  border: 1px solid #b6b6b6;
  background: #fff;
  padding: 11px 20px;
  font-size: 14px;
  font-style: normal;
  &::placeholder {
    color: #b6b6b6;
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
  }
`;

const Memo = styled.textarea`
  width: 333px;
  height: 273px;
  border-radius: 10px;
  border: 1px solid #b6b6b6;
  padding: 20px;
  margin-bottom: 25px;
  &::placeholder {
    color: #b6b6b6;
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
  }
`;

const Info = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 65.74px;
  margin-bottom: 30px;
  white-space: pre-line;
  text-align: center;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
`;

const Container = styled.div`
  padding-top: 66px;
  width: 100%;
  padding-left: 30px;
  padding-right: 30px;
  overflow-y: auto;
`;
