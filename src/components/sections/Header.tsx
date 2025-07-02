import { Link } from "react-router-dom";
import { Box, Flex, Text, Button } from "@radix-ui/themes";
import {
  HomeIcon,
  PersonIcon,
  InfoCircledIcon,
  BellIcon,
  TokensIcon,
  CheckboxIcon,
  ActivityLogIcon,
} from "@radix-ui/react-icons";
import ThemeToggle from "../buttons/ThemeToggle";

function Header() {
  return (
    <Box
      style={{
        borderBottom: "1px solid var(--gray-6)",
        backgroundColor: "var(--color-background)",
      }}
    >
      <Box
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 1rem",
        }}
      >
        <Flex align="center" style={{ height: "4rem" }}>
          {/* Logo */}
          <Flex align="center" gap="2" style={{ marginRight: "3rem" }}>
            <Box
              style={{
                width: "32px",
                height: "32px",
                backgroundColor: "var(--accent-9)",
                borderRadius: "6px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text size="3" weight="bold" style={{ color: "white" }}>
                L
              </Text>
            </Box>
            <Text size="4" weight="bold">
              로고
            </Text>
          </Flex>

          {/* Navigation - Left aligned with increased spacing */}
          <Flex align="center" gap="4" style={{ flex: 1 }}>
            <Button variant="ghost" size="2" asChild>
              <Link to="/">
                <HomeIcon />홈
              </Link>
            </Button>
            <Button variant="ghost" size="2" asChild>
              <Link to="/about">
                <InfoCircledIcon />
                소개
              </Link>
            </Button>
            <Button variant="ghost" size="2" asChild>
              <Link to="/team">
                <PersonIcon />팀
              </Link>
            </Button>
            <Button variant="ghost" size="2" asChild>
              <Link to="/activity">
                <ActivityLogIcon />
                활동
              </Link>
            </Button>
            <Button variant="ghost" size="2" asChild>
              <Link to="/todo">
                <CheckboxIcon />
                할일
              </Link>
            </Button>
            <Button variant="ghost" size="2" asChild>
              <Link to="/notifications">
                <BellIcon />
                알림
              </Link>
            </Button>
            <Button variant="ghost" size="2" asChild>
              <Link to="/pricing">
                <TokensIcon />
                가격
              </Link>
            </Button>
          </Flex>

          {/* Theme Toggle */}
          <ThemeToggle />
        </Flex>
      </Box>
    </Box>
  );
}

export default Header;
