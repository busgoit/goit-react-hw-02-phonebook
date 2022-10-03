import styled from '@emotion/styled';

export const ContactsList = styled.ul`
  margin: 0 30px 0 40px;
  padding: 0;
  list-style: none;
`;

export const Contact = styled.li`
  display: flex;
  flex-wrap: nowrap;

  margin-bottom: 10px;
`;

export const Name = styled.span`
  font-size: 20px;
  font-weight: semibold;
`;

export const Number = styled.span`
  font-size: 16px;

  display: flex;
  flex-grow: 1;
  align-items: flex-end;

  &::before {
    content: '';
    margin-left: 6px;
    margin-right: 6px;
    flex-grow: 1;
    height: 1px;
    background-color: rgba(157, 164, 189, 0.8);
  }
`;

export const Info = styled.span`
  font-size: 16px;
`;
