import { Link } from "react-router-dom";
import { Button, Box, Flex, Heading, Text, Card } from "@radix-ui/themes";
import {
  PersonIcon,
  GearIcon,
  HomeIcon,
  BellIcon,
  ActivityLogIcon,
} from "@radix-ui/react-icons";

export default function Home() {
  return (
    <Box p="6">
      {/* Hero Section */}
      <Box mb="8" style={{ textAlign: "center" }}>
        <Heading size="9" mb="4">
          환영합니다
        </Heading>
        <Text size="5" color="gray" mb="6" style={{ display: "block" }}>
          React + TypeScript + Vite + Redux + Radix UI 프로젝트입니다.
        </Text>
      </Box>

      {/* Navigation Cards */}
      <Box maxWidth="800px" mx="auto">
        <Heading size="6" mb="4">
          빠른 탐색
        </Heading>
        <Flex gap="4" wrap="wrap">
          <Card style={{ flex: "1", minWidth: "250px" }}>
            <Box p="4">
              <Flex align="center" gap="3" mb="3">
                <HomeIcon width="20" height="20" />
                <Heading size="4">홈</Heading>
              </Flex>
              <Text size="3" color="gray" mb="4" style={{ display: "block" }}>
                메인 페이지에서 프로젝트 개요를 확인하세요.
              </Text>
              <Button asChild variant="soft">
                <Link to="/">
                  <HomeIcon />
                  홈으로 이동
                </Link>
              </Button>
            </Box>
          </Card>

          <Card style={{ flex: "1", minWidth: "250px" }}>
            <Box p="4">
              <Flex align="center" gap="3" mb="3">
                <PersonIcon width="20" height="20" />
                <Heading size="4">팀 관리</Heading>
              </Flex>
              <Text size="3" color="gray" mb="4" style={{ display: "block" }}>
                팀원을 초대하고 관리할 수 있습니다.
              </Text>
              <Button asChild>
                <Link to="/team">
                  <PersonIcon />팀 페이지로 이동
                </Link>
              </Button>
            </Box>
          </Card>

          <Card style={{ flex: "1", minWidth: "250px" }}>
            <Box p="4">
              <Flex align="center" gap="3" mb="3">
                <ActivityLogIcon width="20" height="20" />
                <Heading size="4">팀 활동</Heading>
              </Flex>
              <Text size="3" color="gray" mb="4" style={{ display: "block" }}>
                팀원들의 최근 활동을 확인하세요.
              </Text>
              <Button asChild>
                <Link to="/activity">
                  <ActivityLogIcon />
                  활동 페이지로 이동
                </Link>
              </Button>
            </Box>
          </Card>

          <Card style={{ flex: "1", minWidth: "250px" }}>
            <Box p="4">
              <Flex align="center" gap="3" mb="3">
                <BellIcon width="20" height="20" />
                <Heading size="4">알림 설정</Heading>
              </Flex>
              <Text size="3" color="gray" mb="4" style={{ display: "block" }}>
                푸시, 이메일, Slack 알림을 설정하세요.
              </Text>
              <Button asChild>
                <Link to="/notifications">
                  <BellIcon />
                  알림 설정으로 이동
                </Link>
              </Button>
            </Box>
          </Card>

          <Card style={{ flex: "1", minWidth: "250px" }}>
            <Box p="4">
              <Flex align="center" gap="3" mb="3">
                <GearIcon width="20" height="20" />
                <Heading size="4">정보</Heading>
              </Flex>
              <Text size="3" color="gray" mb="4" style={{ display: "block" }}>
                프로젝트의 기술 스택과 정보를 확인하세요.
              </Text>
              <Button asChild variant="soft">
                <Link to="/about">
                  <GearIcon />
                  소개 페이지로 이동
                </Link>
              </Button>
            </Box>
          </Card>
        </Flex>
      </Box>
    </Box>
  );
}
