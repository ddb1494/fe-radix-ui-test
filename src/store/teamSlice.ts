import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface TeamMember {
  id: string;
  name: string;
  email: string;
  avatar: string;
}

interface TeamState {
  members: TeamMember[];
}

const initialState: TeamState = {
  members: [
    {
      id: "1",
      name: "김민수",
      email: "kim.minsu@example.com",
      avatar: "/api/placeholder/40/40?text=김민",
    },
    {
      id: "2",
      name: "이지영",
      email: "lee.jiyoung@example.com",
      avatar: "/api/placeholder/40/40?text=이지",
    },
    {
      id: "3",
      name: "박준호",
      email: "park.junho@example.com",
      avatar: "/api/placeholder/40/40?text=박준",
    },
    {
      id: "4",
      name: "최서연",
      email: "choi.seoyeon@example.com",
      avatar: "/api/placeholder/40/40?text=최서",
    },
    {
      id: "5",
      name: "정도현",
      email: "jung.dohyun@example.com",
      avatar: "/api/placeholder/40/40?text=정도",
    },
  ],
};

const teamSlice = createSlice({
  name: "team",
  initialState,
  reducers: {
    addMember: (state, action: PayloadAction<Omit<TeamMember, "id">>) => {
      const newMember: TeamMember = {
        ...action.payload,
        id: Date.now().toString(),
      };
      state.members.push(newMember);
    },
    removeMember: (state, action: PayloadAction<string>) => {
      state.members = state.members.filter(
        (member) => member.id !== action.payload
      );
    },
  },
});

export const { addMember, removeMember } = teamSlice.actions;
export default teamSlice.reducer;
