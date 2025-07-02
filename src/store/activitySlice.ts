import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface Activity {
  id: string;
  userId: string;
  userName: string;
  userAvatar: string;
  action: string;
  details: string;
  timestamp: string;
  type:
    | "approval"
    | "purchase"
    | "comment"
    | "invoice"
    | "update"
    | "report"
    | "join";
}

interface ActivityState {
  activities: Activity[];
}

const initialState: ActivityState = {
  activities: [
    {
      id: "1",
      userId: "danilo",
      userName: "김다니엘",
      userAvatar: "/api/placeholder/40/40?text=김다",
      action: "인보이스를 승인했습니다",
      details: "#3461",
      timestamp: "2025-06-21T11:34:00Z",
      type: "approval",
    },
    {
      id: "2",
      userId: "zahra",
      userName: "박자라",
      userAvatar: "/api/placeholder/40/40?text=박자",
      action: "구매했습니다",
      details: "사무용 의자 15개와 드럼 세트 2개",
      timestamp: "2025-06-21T09:43:00Z",
      type: "purchase",
    },
    {
      id: "3",
      userId: "zahra",
      userName: "박자라",
      userAvatar: "/api/placeholder/40/40?text=박자",
      action: "댓글에 응답했습니다",
      details: "#7514",
      timestamp: "2025-06-21T09:41:00Z",
      type: "comment",
    },
    {
      id: "4",
      userId: "jasper",
      userName: "이재스퍼",
      userAvatar: "/api/placeholder/40/40?text=이재",
      action: "생성했습니다",
      details: "인보이스 4개",
      timestamp: "2025-06-20T16:55:00Z",
      type: "invoice",
    },
    {
      id: "5",
      userId: "travis",
      userName: "최트래비스",
      userAvatar: "/api/placeholder/40/40?text=최트",
      action: "고객 정보를 업데이트했습니다",
      details: "Acme Co.",
      timestamp: "2025-06-20T15:30:00Z",
      type: "update",
    },
    {
      id: "6",
      userId: "gizela",
      userName: "정지젤라",
      userAvatar: "/api/placeholder/40/40?text=정지",
      action: "새 보고서를 생성했습니다",
      details: "",
      timestamp: "2025-06-20T15:22:00Z",
      type: "report",
    },
    {
      id: "7",
      userId: "gizela",
      userName: "정지젤라",
      userAvatar: "/api/placeholder/40/40?text=정지",
      action: "보고서를 삭제했습니다",
      details: "#34",
      timestamp: "2025-06-20T13:00:00Z",
      type: "report",
    },
    {
      id: "8",
      userId: "daxia",
      userName: "송다시아",
      userAvatar: "/api/placeholder/40/40?text=송다",
      action: "팀에 합류했습니다",
      details: "",
      timestamp: "2025-06-20T12:47:00Z",
      type: "join",
    },
  ],
};

const activitySlice = createSlice({
  name: "activity",
  initialState,
  reducers: {
    addActivity: (state, action: PayloadAction<Omit<Activity, "id">>) => {
      const newActivity: Activity = {
        ...action.payload,
        id: Date.now().toString(),
      };
      state.activities.unshift(newActivity);
    },
    clearActivities: (state) => {
      state.activities = [];
    },
    removeActivity: (state, action: PayloadAction<string>) => {
      state.activities = state.activities.filter(
        (activity) => activity.id !== action.payload
      );
    },
  },
});

export const { addActivity, clearActivities, removeActivity } =
  activitySlice.actions;
export default activitySlice.reducer;
