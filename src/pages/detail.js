import React from "react";
import {
  Wrapper,
  Container,
  Title,
  Text,
  Bar,
  BoxTitle,
  BoxText,
  Box,
  SubTitle,
  Section,
  TopBox,
  ProfileBox,
  Writer,
  WriterName,
  BottomBox,
  Review,
} from "@/styles/detail.style";

const Detail = () => {
  return (
    <Wrapper>
      <Container>
        <ProfileBox>
          <Writer>image</Writer>
          <WriterName>Suyoooi</WriterName>
        </ProfileBox>
        <TopBox>
          <Box>
            <BoxTitle>Region</BoxTitle>
            <BoxText>서울특별시 광진구 자양동 뚝섬한강공원</BoxText>
          </Box>
          <Box>
            <BoxTitle>price</BoxTitle>
            <BoxText>free</BoxText>
          </Box>
          <Box>
            <BoxTitle>hours</BoxTitle>
            <BoxText>24 hours</BoxText>
          </Box>
        </TopBox>
        <Bar></Bar>
        <Section>
          <Title>Let's play together at Ttukseom Hangang Park</Title>
          <SubTitle>
            Let's play together at Ttukseom Hangang Park! Let's play together at
            Ttukseom Hangang Park! Let's play together at Ttukseom Hangang Park!
            Let's play Hangang Park! Let's play together at Ttukseom Hangang
            Park! Let's play together at Ttukseom Hangang Park! Let's play
            together at Ttukseom Hangang Park! Let's play tog ether at Ttukseom
            Hangang Park!
          </SubTitle>
          <Text>
            Let's play together at Ttukseom Hangang Park! Let's play together at
            Ttukseom Hangang Park! Let's play together at Ttukseom Hangang Park!
            Let's play Hangang Park! Let's play together at Ttukseom Hangang
            Park! Let's play together at Ttukseom Hangang Park! Let's play
            together at Ttukseom Hangang Park! Let's play tog ether at Ttukseom
            Hangang Park! Let's play together at Ttukseom Hangang Park! Let's
            play together at Ttukseom Hangang Park! Let's play Hangang Park!
            Let's play together at Ttukseom Hangang Park! Let's play together at
            Ttukseom Hangang Park! Let's play together at Ttukseom Hangang Park!
            Let's play together at Ttukseom Hangang Park! Let's play together at
            Ttukseom Hangang Park! Let's play together at Ttukseom Hangang Park!
            Let's play Hangang Park! Let's play together at Ttukseom Hangang
            Park! Let's play together at Ttukseom Hangang Park! Let's play
            together at Ttukseom Hangang Park! Let's play tog ether at Ttukseom
            Hangang Park! Let's play together at Ttukseom Hangang Park! Let's
            play together at Ttukseom Hangang Park! Let's play Hangang Park!
            Let's play together at Ttukseom Hangang Park! Let's play together at
            Ttukseom Hangang Park! Let's play together at Ttukseom Hangang Park!
          </Text>
        </Section>
        <BottomBox>
          <Review>Review</Review>
        </BottomBox>
      </Container>
    </Wrapper>
  );
};

export default Detail;
