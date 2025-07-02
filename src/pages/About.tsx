import { Link } from "react-router-dom";
import {
  Button,
  Box,
  Heading,
  Text,
  Grid,
  Card,
  Flex,
  Badge,
} from "@radix-ui/themes";

export default function About() {
  const technologies = [
    {
      category: "프론트엔드 프레임워크",
      items: [
        {
          name: "React",
          version: "19.1.0",
          description: "최신 React with 향상된 Concurrent Features",
        },
        {
          name: "TypeScript",
          version: "5.8.3",
          description: "엄격한 타입 안전성과 최신 ES 기능",
        },
        {
          name: "Vite",
          version: "7.0.0",
          description: "빠른 개발 서버와 ES 모듈 기반 빌드",
        },
      ],
    },
    {
      category: "라우팅 & 상태관리",
      items: [
        {
          name: "React Router",
          version: "7.6.3",
          description: "클라이언트 사이드 라우팅 (최신 버전)",
        },
        {
          name: "Redux Toolkit",
          version: "2.8.2",
          description: "현대적인 Redux 상태 관리",
        },
        {
          name: "React Redux",
          version: "9.2.0",
          description: "React와 Redux 연결",
        },
      ],
    },
    {
      category: "UI 디자인 시스템",
      items: [
        {
          name: "Radix UI Themes",
          version: "3.2.1",
          description: "포괄적인 디자인 시스템과 테마",
        },
        {
          name: "Radix UI Icons",
          version: "1.3.2",
          description: "일관된 아이콘 라이브러리",
        },
        {
          name: "Radix Primitives",
          version: "다수",
          description: "접근성 중심의 headless UI 컴포넌트들",
        },
      ],
    },
    {
      category: "개발 도구",
      items: [
        {
          name: "ESLint",
          version: "9.29.0",
          description: "최신 flat config 방식의 코드 품질 관리",
        },
        {
          name: "TypeScript ESLint",
          version: "8.34.1",
          description: "TypeScript 전용 린팅 규칙",
        },
        {
          name: "Vite React Plugin",
          version: "4.5.2",
          description: "React Fast Refresh 지원",
        },
      ],
    },
  ];

  const features = [
    "🎨 다크/라이트/시스템 테마 자동 전환",
    "👥 팀원 관리 시스템 (초대/제거/프로필)",
    "✅ 실시간 할일 관리 (CRUD + 통계)",
    "🔔 세분화된 알림 설정 (푸시/이메일/Slack)",
    "💰 반응형 가격 플랜 페이지",
    "📱 완전한 반응형 디자인",
    "♿ 웹 접근성 (WCAG 준수)",
    "⚡ 고성능 번들링과 코드 분할",
    "🔄 Redux로 전역 상태 관리",
    "🎯 TypeScript 100% 타입 안전성",
  ];

  return (
    <Box p="6" maxWidth="1000px" mx="auto">
      <Box mb="8">
        <Heading size="8" mb="4">
          소개
        </Heading>
        <Text size="4" color="gray" mb="6">
          이 프로젝트는 최신 React 생태계의 모범 사례를 보여주는 현대적인 웹
          애플리케이션입니다.
        </Text>
      </Box>

      {/* 주요 기능 */}
      <Box mb="8">
        <Heading size="6" mb="4">
          🚀 주요 기능
        </Heading>
        <Grid columns={{ initial: "1", sm: "2" }} gap="3">
          {features.map((feature, index) => (
            <Card key={index} style={{ padding: "1rem" }}>
              <Text size="3">{feature}</Text>
            </Card>
          ))}
        </Grid>
      </Box>

      {/* 기술 스택 */}
      <Box mb="8">
        <Heading size="6" mb="4">
          🛠️ 기술 스택
        </Heading>
        <Flex direction="column" gap="6">
          {technologies.map((tech, index) => (
            <Box key={index}>
              <Heading size="4" mb="3" color="gray">
                {tech.category}
              </Heading>
              <Grid columns={{ initial: "1", md: "2", lg: "3" }} gap="4">
                {tech.items.map((item, itemIndex) => (
                  <Card key={itemIndex} style={{ padding: "1.5rem" }}>
                    <Flex direction="column" gap="2">
                      <Flex align="center" justify="between">
                        <Text size="4" weight="bold">
                          {item.name}
                        </Text>
                        <Badge variant="soft" size="1">
                          v{item.version}
                        </Badge>
                      </Flex>
                      <Text size="2" color="gray">
                        {item.description}
                      </Text>
                    </Flex>
                  </Card>
                ))}
              </Grid>
            </Box>
          ))}
        </Flex>
      </Box>

      {/* 아키텍처 특징 */}
      <Box mb="8">
        <Heading size="6" mb="4">
          🏗️ 아키텍처 특징
        </Heading>
        <Grid columns={{ initial: "1", md: "2" }} gap="4">
          <Card style={{ padding: "1.5rem" }}>
            <Heading size="4" mb="2">
              모듈화된 구조
            </Heading>
            <Text size="3" color="gray">
              기능별로 분리된 컴포넌트와 Redux slice로 유지보수가 쉬운 구조를
              구현했습니다.
            </Text>
          </Card>
          <Card style={{ padding: "1.5rem" }}>
            <Heading size="4" mb="2">
              타입 안전성
            </Heading>
            <Text size="3" color="gray">
              TypeScript와 Redux Toolkit을 활용해 런타임 에러를 방지하는 완전한
              타입 시스템을 구축했습니다.
            </Text>
          </Card>
          <Card style={{ padding: "1.5rem" }}>
            <Heading size="4" mb="2">
              접근성 우선
            </Heading>
            <Text size="3" color="gray">
              Radix UI의 headless 컴포넌트로 키보드 내비게이션과 스크린 리더를
              완벽 지원합니다.
            </Text>
          </Card>
          <Card style={{ padding: "1.5rem" }}>
            <Heading size="4" mb="2">
              성능 최적화
            </Heading>
            <Text size="3" color="gray">
              Vite의 ES 모듈 기반 빌드와 React 19의 Concurrent Features로 최적의
              성능을 제공합니다.
            </Text>
          </Card>
        </Grid>
      </Box>

      <Button asChild size="3">
        <Link to="/">홈으로 돌아가기</Link>
      </Button>
    </Box>
  );
}
