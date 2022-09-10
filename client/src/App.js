import styled from "styled-components";
import Card from "@mui/material/Card";

const Container = styled.div`
  background: #36393e;

  display: flex;
  justify-content: center; // 1
  flex-flow: row wrap; // 2
  width: 100%;
  height: 100%;
`;
const List = styled.div`
  display: flex;
  justify-content: center; // 3
  flex-flow: column wrap; // 4
`;

// const Card = styled.div`
//   margin: 20px;
//   background: #fff;
//   height: 300px;
//   width: 400px;
//   border-radius: 20px;
//   box-shadow: 0 10px 20px rgba(0, 0, 0, 0.25);

//   display: flex;
//   flex-flow: column; // 5
//   justify-content: center;
//   align-items: center;
// `;

function App() {
  return (
    <Container>
      {" "}
      <List>
        {[0, 1, 2, 3, 5, 6, 7, 8, 9].map((item) => (
          <Card
            sx={{
              margin: 2,
              // background: #fff,
              height: (300 * item) / 10 + 50,
              width: 400,
              // border-radius: 20
              // box-shadow: 0 10px 20px rgba(0, 0, 0, 0.25);

              // display: flex;
              // flex-flow: column; // 5
              // justify-content: center;
              // align-items: center;
            }}
          >
            {item}
          </Card>
        ))}
      </List>
    </Container>
  );
}

export default App;
