// Notification.js used styled-components
import styled from 'styled-components';

function Notification(props) {
  const { level } = props;
  return (
    <Box level={level}>
      <Title level={level}>{props.title}</Title>
      <p>{props.description}</p>
      <p>
        <a>ปิดการแจ้งเตือน</a>
      </p>
    </Box>
  );
}

function getLevelColor(level) {
  if (level === 'danger') return 'red';
  else if (level === 'warning') return 'orange';
  else return '#333333';
}

const Box = styled.div`
  background-color: rgb(255, 255, 255);
  border: 2px solid ${props => getLevelColor(props.level)};
  padding: 8px 16px;
  margin-bottom: 24px;
`;

const Title = styled.h3`
  color: ${props => getLevelColor(props.level)};
`;

export default Notification;
