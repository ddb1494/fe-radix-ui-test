import { useState } from "react";
import {
  Box,
  Flex,
  Text,
  TextField,
  Button,
  Avatar,
  IconButton,
  Heading,
  DropdownMenu,
  Link,
  Separator,
  Card,
} from "@radix-ui/themes";
import {
  DotsHorizontalIcon,
  PersonIcon,
  EyeOpenIcon,
  TrashIcon,
  ActivityLogIcon,
} from "@radix-ui/react-icons";
import { Link as RouterLink } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { addMember, removeMember, type TeamMember } from "../store/teamSlice";

export default function Team() {
  const dispatch = useAppDispatch();
  const { members } = useAppSelector((state) => state.team);
  const [inviteEmail, setInviteEmail] = useState("");

  const handleInvite = () => {
    if (inviteEmail.trim()) {
      const name = inviteEmail.split("@")[0];
      const capitalizedName = name
        .split(".")
        .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
        .join(" ");

      const newMember: Omit<TeamMember, "id"> = {
        name: capitalizedName,
        email: inviteEmail.trim(),
        avatar: `/api/placeholder/40/40?text=${capitalizedName
          .split(" ")
          .map((n) => n[0])
          .join("")}`,
      };

      dispatch(addMember(newMember));
      setInviteEmail("");
    }
  };

  const handleRemoveMember = (memberId: string) => {
    dispatch(removeMember(memberId));
  };

  const handleViewProfile = (member: TeamMember) => {
    console.log("View profile:", member);
  };

  const handleChangeRole = (member: TeamMember) => {
    console.log("Change role:", member);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleInvite();
    }
  };

  return (
    <Box p="6" maxWidth="600px" mx="auto">
      <Box mb="6">
        <Heading size="8" mb="2">
          팀
        </Heading>
        <Text color="gray" size="3">
          팀원을 초대하고 관리하세요.
        </Text>
      </Box>

      {/* Quick Actions Card */}
      <Card style={{ padding: "1rem", marginBottom: "2rem" }}>
        <Flex justify="between" align="center">
          <Box>
            <Text size="3" weight="medium" mb="1" style={{ display: "block" }}>
              팀 활동 확인하기
            </Text>
            <Text size="2" color="gray">
              팀원들의 최근 활동을 모니터링하세요
            </Text>
          </Box>
          <Button asChild variant="soft">
            <RouterLink to="/activity">
              <ActivityLogIcon />
              활동 보기
            </RouterLink>
          </Button>
        </Flex>
      </Card>

      {/* 초대 섹션 */}
      <Flex gap="3" mb="6" align="end">
        <Box style={{ flex: 1 }}>
          <TextField.Root
            placeholder="이메일 주소를 입력하세요"
            value={inviteEmail}
            onChange={(e) => setInviteEmail(e.target.value)}
            onKeyPress={handleKeyPress}
            size="3"
          />
        </Box>
        <Button onClick={handleInvite} size="3">
          초대하기
        </Button>
      </Flex>

      {/* 팀원 목록 */}
      <Flex direction="column">
        {members.map((member, index) => (
          <Box key={member.id}>
            <Flex align="center" gap="4">
              <Flex align="center" gap="3" style={{ width: "200px" }}>
                <Avatar
                  src={member.avatar}
                  fallback={member.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                  size="3"
                  variant="soft"
                />
                <Link
                  href="#"
                  size="2"
                  style={{ whiteSpace: "nowrap" }}
                  underline="auto"
                >
                  {member.name}
                </Link>
              </Flex>
              <Box style={{ flexGrow: 1, textAlign: "left" }}>
                <Text color="gray" size="2">
                  {member.email}
                </Text>
              </Box>
              <Box>
                <DropdownMenu.Root>
                  <DropdownMenu.Trigger>
                    <IconButton
                      variant="ghost"
                      size="2"
                      color="gray"
                      aria-label={`${member.name} 옵션`}
                    >
                      <DotsHorizontalIcon />
                    </IconButton>
                  </DropdownMenu.Trigger>
                  <DropdownMenu.Content>
                    <DropdownMenu.Item
                      onSelect={() => handleViewProfile(member)}
                    >
                      <EyeOpenIcon />
                      프로필 보기
                    </DropdownMenu.Item>
                    <DropdownMenu.Item
                      onSelect={() => handleChangeRole(member)}
                    >
                      <PersonIcon />
                      역할 변경
                    </DropdownMenu.Item>
                    <DropdownMenu.Separator />
                    <DropdownMenu.Item
                      color="red"
                      onSelect={() => handleRemoveMember(member.id)}
                    >
                      <TrashIcon />
                      제거
                    </DropdownMenu.Item>
                  </DropdownMenu.Content>
                </DropdownMenu.Root>
              </Box>
            </Flex>
            {index < members.length - 1 && (
              <Box>
                <Separator
                  orientation="horizontal"
                  size="4"
                  my="3"
                  color="gray"
                />
              </Box>
            )}
          </Box>
        ))}
      </Flex>
    </Box>
  );
}
