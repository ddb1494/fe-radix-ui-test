import { Box, Flex, Text, Switch, Heading, Separator } from "@radix-ui/themes";
import {
  BellIcon,
  EnvelopeClosedIcon,
  ChatBubbleIcon,
} from "@radix-ui/react-icons";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { toggleNotification } from "../store/notificationSlice";
import type { NotificationSettings } from "../store/notificationSlice";

export default function NotificationSettings() {
  const dispatch = useAppDispatch();
  const notifications = useAppSelector((state) => state.notification);

  console.debug("notifications", notifications);

  const handleToggle = (
    category: keyof typeof notifications,
    type: keyof NotificationSettings
  ) => {
    dispatch(toggleNotification({ category, type }));
  };

  const NotificationRow = ({
    label,
    category,
    type,
    icon,
  }: {
    label: string;
    category: keyof typeof notifications;
    type: keyof NotificationSettings;
    icon: React.ReactNode;
  }) => (
    <Flex align="center" justify="between" py="3">
      <Flex align="center" gap="3">
        <Box
          style={{
            color: "var(--gray-11)",
            display: "flex",
            alignItems: "center",
          }}
        >
          {icon}
        </Box>
        <Text size="3">{label}</Text>
      </Flex>
      <Switch
        checked={notifications[category][type]}
        onCheckedChange={() => handleToggle(category, type)}
        size="2"
      />
    </Flex>
  );

  const NotificationCategory = ({
    title,
    description,
    category,
  }: {
    title: string;
    description: string;
    category: keyof typeof notifications;
  }) => (
    <Box>
      <Box mb="4">
        <Heading size="4" mb="1">
          {title}
        </Heading>
        <Text size="2" color="gray">
          {description}
        </Text>
      </Box>

      <Box>
        <NotificationRow
          label="푸시 알림"
          category={category}
          type="push"
          icon={<BellIcon width="16" height="16" />}
        />
        <NotificationRow
          label="이메일"
          category={category}
          type="email"
          icon={<EnvelopeClosedIcon width="16" height="16" />}
        />
        <NotificationRow
          label="Slack"
          category={category}
          type="slack"
          icon={<ChatBubbleIcon width="16" height="16" />}
        />
      </Box>
    </Box>
  );

  return (
    <Box p="6" maxWidth="600px" mx="auto">
      <Box mb="6">
        <Heading size="8" mb="2">
          알림 설정
        </Heading>
        <Text color="gray" size="3">
          어떤 방식으로 알림을 받을지 설정하세요.
        </Text>
      </Box>

      <Flex direction="column" gap="6">
        <NotificationCategory
          title="댓글"
          description="누군가 귀하의 게시물에 댓글을 달았을 때"
          category="comments"
        />

        <Separator size="4" />

        <NotificationCategory
          title="즐겨찾기"
          description="누군가 귀하의 게시물을 즐겨찾기에 추가했을 때"
          category="favorites"
        />

        <Separator size="4" />

        <NotificationCategory
          title="새 문서"
          description="새로운 문서가 공유되었을 때"
          category="newDocuments"
        />
      </Flex>
    </Box>
  );
}
