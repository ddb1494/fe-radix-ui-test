import {
  Box,
  Container,
  Heading,
  Text,
  Flex,
  Avatar,
  Card,
  Badge,
  IconButton,
  DropdownMenu,
  Separator,
} from "@radix-ui/themes";
import {
  DotsHorizontalIcon,
  ExternalLinkIcon,
  TrashIcon,
  ClockIcon,
} from "@radix-ui/react-icons";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { removeActivity, type Activity } from "../store/activitySlice";

export default function ActivityPage() {
  const dispatch = useAppDispatch();
  const { activities } = useAppSelector((state) => state.activity);

  const handleRemoveActivity = (activityId: string) => {
    dispatch(removeActivity(activityId));
  };

  const formatTime = (timestamp: string) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diffInHours = Math.floor(
      (now.getTime() - date.getTime()) / (1000 * 60 * 60)
    );

    if (diffInHours < 1) {
      const diffInMinutes = Math.floor(
        (now.getTime() - date.getTime()) / (1000 * 60)
      );
      return `${diffInMinutes} minutes ago`;
    } else if (diffInHours < 24) {
      return `${diffInHours} hours ago`;
    } else {
      return date.toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      });
    }
  };

  const getActivityBadgeColor = (type: Activity["type"]) => {
    switch (type) {
      case "approval":
        return "green";
      case "purchase":
        return "blue";
      case "comment":
        return "orange";
      case "invoice":
        return "purple";
      case "update":
        return "cyan";
      case "report":
        return "pink";
      case "join":
        return "grass";
      default:
        return "gray";
    }
  };

  return (
    <Container size="3" style={{ padding: "2rem 1rem" }}>
      <Card style={{ padding: "2rem", maxWidth: "800px", margin: "0 auto" }}>
        {/* Header */}
        <Flex justify="between" align="center" mb="6">
          <Box>
            <Heading size="8" mb="2">
              활동
            </Heading>
            <Text size="3" color="gray">
              지난 며칠간 일어난 일들을 확인하세요.
            </Text>
          </Box>
          <Flex gap="2">
            <IconButton variant="ghost" size="2" aria-label="External link">
              <ExternalLinkIcon />
            </IconButton>
            <IconButton variant="ghost" size="2" aria-label="More options">
              <DotsHorizontalIcon />
            </IconButton>
          </Flex>
        </Flex>

        {/* Activity List */}
        <Flex direction="column" gap="1">
          {activities.map((activity, index) => (
            <Box key={activity.id}>
              <Flex align="center" gap="4" py="3">
                {/* Avatar */}
                <Avatar
                  src={activity.userAvatar}
                  fallback={activity.userName
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                  size="3"
                  variant="soft"
                />

                {/* Content */}
                <Flex direction="column" gap="1" style={{ flex: 1 }}>
                  <Flex align="center" gap="2" wrap="wrap">
                    <Text size="3" weight="medium">
                      {activity.userName}
                    </Text>
                    <Text size="3" color="gray">
                      {activity.action}
                    </Text>
                    {activity.details && (
                      <Text size="3" weight="medium">
                        {activity.details}
                      </Text>
                    )}
                    <Badge
                      size="1"
                      color={getActivityBadgeColor(activity.type)}
                      variant="soft"
                    >
                      {activity.type}
                    </Badge>
                  </Flex>
                </Flex>

                {/* Time and Actions */}
                <Flex align="center" gap="3">
                  <Flex align="center" gap="1">
                    <ClockIcon width="12" height="12" color="var(--gray-9)" />
                    <Text size="2" color="gray">
                      {formatTime(activity.timestamp)}
                    </Text>
                  </Flex>

                  <DropdownMenu.Root>
                    <DropdownMenu.Trigger>
                      <IconButton
                        variant="ghost"
                        size="1"
                        color="gray"
                        aria-label={`${activity.userName}의 활동 옵션`}
                      >
                        <DotsHorizontalIcon />
                      </IconButton>
                    </DropdownMenu.Trigger>
                    <DropdownMenu.Content>
                      <DropdownMenu.Item>
                        <ExternalLinkIcon />
                        세부 정보 보기
                      </DropdownMenu.Item>
                      <DropdownMenu.Separator />
                      <DropdownMenu.Item
                        color="red"
                        onSelect={() => handleRemoveActivity(activity.id)}
                      >
                        <TrashIcon />
                        제거
                      </DropdownMenu.Item>
                    </DropdownMenu.Content>
                  </DropdownMenu.Root>
                </Flex>
              </Flex>

              {index < activities.length - 1 && (
                <Separator size="4" color="gray" style={{ opacity: 0.3 }} />
              )}
            </Box>
          ))}
        </Flex>

        {activities.length === 0 && (
          <Box style={{ textAlign: "center", padding: "3rem 0" }}>
            <Text color="gray" size="3">
              표시할 최근 활동이 없습니다.
            </Text>
          </Box>
        )}
      </Card>
    </Container>
  );
}
