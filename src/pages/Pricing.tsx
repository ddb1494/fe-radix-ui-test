import {
  Box,
  Container,
  Heading,
  Text,
  Grid,
  Card,
  Button,
  Flex,
} from "@radix-ui/themes";
import { CheckIcon } from "@radix-ui/react-icons";

const Pricing = () => {
  const pricingPlans = [
    {
      name: "기본",
      price: "$0",
      period: "/ 월",
      teamMembers: "팀원 3명",
      features: [
        "비용 추적",
        "인보이스 발행",
        "결제 추적",
        "거래 기록",
        "기본 리포트",
        "이메일 지원",
      ],
      buttonText: "다운그레이드",
      buttonVariant: "outline" as const,
    },
    {
      name: "성장",
      price: "$49",
      period: "/ 월",
      teamMembers: "팀원 10명",
      features: [
        "온라인 결제",
        "정기 인보이스",
        "청구서 관리",
        "재고 추적",
        "상세 리포트",
        "전화 지원",
      ],
      buttonText: "결제 페이지로 이동",
      buttonVariant: "outline" as const,
    },
    {
      name: "프로",
      price: "$99",
      period: "/ 월",
      teamMembers: "무제한 팀원",
      features: [
        "커스텀 인보이스",
        "다중 비즈니스",
        "팀 협업",
        "앱 통합",
        "고급 보안",
        "우선 지원",
      ],
      buttonText: "업그레이드",
      buttonVariant: "solid" as const,
      highlighted: true,
    },
  ];

  return (
    <Container size="4" style={{ padding: "2rem 0" }}>
      <Box style={{ marginBottom: "3rem" }}>
        <Heading size="8" style={{ marginBottom: "1rem", color: "white" }}>
          가격
        </Heading>
        <Text size="4" style={{ color: "var(--gray-11)" }}>
          신용카드가 필요하지 않습니다. 모든 플랜에는 Pro 기능의 30일 무료
          체험이 포함됩니다.
        </Text>
      </Box>

      <Grid columns={{ initial: "1", md: "3" }} gap="4">
        {pricingPlans.map((plan) => (
          <Card
            key={plan.name}
            style={{
              padding: "2rem",
              backgroundColor: plan.highlighted
                ? "var(--accent-3)"
                : "var(--gray-2)",
              border: plan.highlighted
                ? "1px solid var(--accent-7)"
                : "1px solid var(--gray-6)",
              position: "relative",
            }}
          >
            <Box style={{ marginBottom: "2rem" }}>
              <Heading
                size="6"
                style={{ marginBottom: "0.5rem", color: "white" }}
              >
                {plan.name}
              </Heading>
              <Text
                size="2"
                style={{ color: "var(--gray-11)", marginBottom: "1rem" }}
              >
                {plan.teamMembers}
              </Text>

              <Flex align="baseline" gap="1" style={{ marginBottom: "1.5rem" }}>
                <Heading size="8" style={{ color: "white" }}>
                  {plan.price}
                </Heading>
                <Text size="4" style={{ color: "var(--gray-11)" }}>
                  {plan.period}
                </Text>
              </Flex>
            </Box>

            <Box style={{ marginBottom: "2rem" }}>
              {plan.features.map((feature, index) => (
                <Flex
                  key={index}
                  align="center"
                  gap="2"
                  style={{ marginBottom: "0.75rem" }}
                >
                  <CheckIcon
                    style={{
                      color: "var(--green-9)",
                      width: "16px",
                      height: "16px",
                      flexShrink: 0,
                    }}
                  />
                  <Text size="3" style={{ color: "white" }}>
                    {feature}
                  </Text>
                </Flex>
              ))}
            </Box>

            <Button
              variant={plan.buttonVariant}
              size="3"
              style={{
                width: "100%",
                backgroundColor:
                  plan.highlighted && plan.buttonVariant === "solid"
                    ? "var(--accent-9)"
                    : undefined,
                color:
                  plan.highlighted && plan.buttonVariant === "solid"
                    ? "white"
                    : undefined,
              }}
            >
              {plan.buttonText}
            </Button>
          </Card>
        ))}
      </Grid>
    </Container>
  );
};

export default Pricing;
