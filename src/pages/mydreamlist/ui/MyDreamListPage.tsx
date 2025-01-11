import styled from "styled-components";
import SmallIconText from "../component/IconText";
import MyDream from "@shared/ui/MyDream";

export const MyDreamListPage = () => {
  const [selected, setSelected] = useState<string | null>(null);

  const handleClick = (name: string) => {
    setSelected(name);
  };

  return (
    <Container>
      <SmallIconText />
      <MyDream />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 35px;
`;
