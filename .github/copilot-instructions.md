<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

# Copilot Instructions for React TypeScript Project

이 프로젝트는 Vite로 구축된 React TypeScript 프로젝트로, 다음 기술들을 사용합니다:

- **React 19** - 최신 React 버전 with hooks
- **TypeScript** - 엄격한 타입 안전성
- **Vite** - 빠른 개발 서버와 빌드 도구
- **React Router v7** - 클라이언트 사이드 라우팅
- **Redux Toolkit** - 전역 상태 관리
- **Radix UI Themes** - 디자인 시스템 및 접근성
- **Radix UI Icons** - 일관된 아이콘 시스템

## 프로젝트 구조

```
src/
├── components/           # 재사용 가능한 UI 컴포넌트
│   ├── buttons/         # 버튼 관련 컴포넌트 (ThemeToggle 등)
│   └── sections/        # 페이지 섹션 컴포넌트 (Header 등)
├── pages/               # 라우팅용 페이지 컴포넌트
│   ├── Home.tsx         # 메인 홈페이지 (네비게이션 카드)
│   ├── About.tsx        # 프로젝트 정보 페이지
│   ├── Team.tsx         # 팀원 관리 (초대/제거 기능)
│   ├── Todo.tsx         # 할일 관리 (CRUD 기능)
│   ├── NotificationSettings.tsx # 알림 설정 (푸시/이메일/Slack)
│   └── Pricing.tsx      # 가격 플랜 페이지
├── store/               # Redux 상태 관리
│   ├── index.ts         # Store 설정 및 타입 정의
│   ├── hooks.ts         # 타입이 지정된 Redux hooks
│   ├── themeSlice.ts    # 테마 상태 (light/dark/system)
│   ├── teamSlice.ts     # 팀원 관리 상태
│   ├── todoSlice.ts     # 할일 목록 상태
│   └── notificationSlice.ts # 알림 설정 상태
├── App.tsx              # 메인 앱 컴포넌트 (Provider 설정)
└── main.tsx             # 애플리케이션 진입점
```

## 개발 가이드라인

### TypeScript 사용법

- **엄격한 타입 정의**: 모든 컴포넌트와 유틸리티에 TypeScript 사용
- **타입 전용 import**: 타입만 import할 때는 `import type { ... }` 사용
- **Interface vs Type**:
  - Redux state에는 `interface` 사용 (예: `TeamMember`, `NotificationSettings`)
  - Union types에는 `type` 사용 (예: `ThemeMode`)
- **Props 타입 정의**: 모든 컴포넌트 props에 적절한 타입 정의
- **Generic 활용**: Redux slices에서 `PayloadAction<T>` 등 제네릭 적극 활용

### React 패턴

- **함수형 컴포넌트**: 클래스 컴포넌트 대신 함수형 컴포넌트와 hooks 사용
- **Custom Hooks**: 복잡한 로직은 custom hooks로 분리
- **컴포넌트 합성**: 작고 재사용 가능한 컴포넌트로 구성
- **성능 최적화**: 필요시 `React.memo()` 사용하지만 과도한 최적화 지양
- **이벤트 처리**: 적절한 키보드 이벤트 처리 (예: Enter 키로 할일 추가)

### Redux Toolkit 상태 관리

- **Slice 기반 구조**: 기능별로 slice 분리 (theme, team, todo, notification)
- **타입 안전한 hooks**: `useAppDispatch`, `useAppSelector` 사용
- **불변성**: `createSlice`의 Immer 기반 불변성 자동 처리 활용
- **LocalStorage 연동**: 사용자 설정은 localStorage에 저장 (테마 설정 등)
- **초기 상태**: 실용적인 초기 데이터 제공 (예: 샘플 팀원, 할일 목록)

```typescript
// Redux slice 예시 패턴
const slice = createSlice({
  name: "feature",
  initialState,
  reducers: {
    // PayloadAction 타입 명시
    updateItem: (state, action: PayloadAction<{ id: string; data: any }>) => {
      // Immer 기반 불변성 자동 처리
    },
  },
});
```

### Radix UI 활용

- **컴포넌트 우선 사용**: 커스텀 CSS 대신 Radix UI 컴포넌트 활용
- **테마 시스템**: `@radix-ui/themes`의 디자인 토큰과 CSS 변수 사용
- **아이콘 일관성**: `@radix-ui/react-icons` 독점 사용
- **접근성**: Radix UI의 내장 접근성 기능 활용 (aria-label, 키보드 내비게이션)
- **다크/라이트 모드**: Theme provider를 통한 자동 테마 전환

```typescript
// Radix UI 컴포넌트 사용 예시
<Button asChild>
  <Link to="/page">
    <Icon />
    텍스트
  </Link>
</Button>
```

### 라우팅 구조

- **React Router v7**: 최신 패턴 사용
- **네비게이션**: Header 컴포넌트에서 중앙 관리
- **Link 컴포넌트**: 내부 네비게이션은 `Link` 사용
- **페이지 구조**: 각 페이지는 독립적인 기능 단위로 구성

### UI/UX 패턴

- **일관된 레이아웃**: Container, Box, Flex를 활용한 레이아웃
- **반응형 디자인**: Grid의 responsive props 활용
- **인터랙티브 요소**: DropdownMenu, Dialog 등 고급 컴포넌트 활용
- **피드백**: 버튼 상태, 로딩 상태 등 사용자 피드백 제공
- **키보드 지원**: Enter 키 등 키보드 단축키 지원

### 코드 구성 원칙

- **기능별 디렉토리**: 관련 기능을 디렉토리로 그룹핑
- **명확한 네이밍**: 컴포넌트와 파일명은 명확하고 일관성 있게
- **Import 최적화**:
  - 절대 경로보다는 상대 경로 사용
  - 타입 import와 값 import 구분
- **단일 책임 원칙**: 각 컴포넌트는 하나의 명확한 역할

### 현재 구현된 기능

1. **테마 시스템**:

   - light/dark/system 모드 지원
   - localStorage 저장
   - 시스템 테마 변경 자동 감지

2. **팀 관리**:

   - 팀원 초대 (이메일 기반)
   - 팀원 제거
   - 아바타 및 프로필 표시

3. **할일 관리**:

   - CRUD 기능 (생성, 읽기, 수정, 삭제)
   - 완료/미완료 토글
   - 통계 표시

4. **알림 설정**:

   - 카테고리별 알림 설정 (댓글, 즐겨찾기, 새 문서)
   - 채널별 설정 (푸시, 이메일, Slack)

5. **가격 플랜**:
   - 반응형 카드 레이아웃
   - 기능 비교 표시

### 성능 및 모범 사례

- **Lazy Loading**: 필요시 페이지 컴포넌트에 lazy loading 적용
- **Error Boundary**: 에러 처리를 위한 boundary 구현
- **useEffect 클린업**: 이벤트 리스너 등 적절한 클린업
- **메모이제이션**: 불필요한 리렌더링 방지를 위한 적절한 메모이제이션

### 접근성 고려사항

- **의미있는 HTML**: Radix UI의 시맨틱 구조 활용
- **키보드 내비게이션**: 모든 인터랙티브 요소에 키보드 접근성
- **스크린 리더**: aria-label, aria-describedby 적절히 사용
- **색상 대비**: 다크/라이트 모드에서 충분한 색상 대비

### 특별 구현 사항

- **Header 네비게이션**: 모든 페이지로의 중앙 집중식 네비게이션
- **테마 토글**: 우상단에 위치한 순환식 테마 전환 (light → dark → system)
- **반응형 그리드**: pricing 페이지의 responsive grid 레이아웃
- **상태 영속성**: 테마 설정의 localStorage 저장
- **타입 안전성**: 모든 Redux 상태와 액션에 완전한 타입 지원
