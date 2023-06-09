import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import Colors from '../constant/Colors';

const OrderCompletePage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { orderId } = location.state ?? {};

  useEffect(() => {
    if (Number.isNaN(Number(orderId))) {
      navigate('/', { replace: true });
    }
  }, []);

  return (
    <Section>
      <p>주문이 완료되었습니다!!</p>
      <p>주문번호: {orderId}</p>
      <LinkButton onClick={() => navigate('/orders')}>주문 목록으로 가기</LinkButton>
      <LinkButton onClick={() => navigate('/', { replace: true })}>초기 화면으로 가기</LinkButton>
    </Section>
  );
};

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  padding: 280px 0;
  margin: 0 auto;

  width: 100%;
  height: 100%;

  font-weight: 500;
  font-size: 30px;
`;

const LinkButton = styled.button`
  width: 300px;
  padding: 20px 50px;
  background-color: ${Colors.grey1};

  border: none;
  border-radius: 15px;

  font-size: 20px;
  color: white;

  cursor: pointer;
`;

export default OrderCompletePage;
