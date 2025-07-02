# React TypeScript Vite Project

이 프로젝트는 Vite로 생성된 React TypeScript 프로젝트입니다.

## 기술 스택

- **React 18** - UI 라이브러리
- **TypeScript** - 타입 안전성
- **Vite** - 빌드 도구
- **React Router** - 클라이언트 사이드 라우팅
- **Redux Toolkit** - 상태 관리
- **Radix UI** - 컴포넌트 라이브러리

## 시작하기

### 개발 서버 실행

```bash
npm run dev
```

### 빌드

```bash
npm run build
```

### 미리보기

```bash
npm run preview
```

## 프로젝트 구조

```
src/
├── components/     # 재사용 가능한 컴포넌트
├── pages/         # 페이지 컴포넌트
├── store/         # Redux store 설정
│   ├── index.ts   # Store 설정
│   └── hooks.ts   # 타입이 지정된 Redux hooks
├── App.tsx        # 메인 앱 컴포넌트
└── main.tsx       # 앱 진입점
```

## 사용 방법

### Redux 사용하기

```typescript
import { useAppDispatch, useAppSelector } from "./store/hooks";

// 컴포넌트에서 사용
const dispatch = useAppDispatch();
const state = useAppSelector((state) => state.someSlice);
```

### Radix UI 컴포넌트 사용하기

```typescript
import { Button, Dialog } from "@radix-ui/themes";
```

### 라우팅

React Router를 사용하여 페이지 간 이동이 가능합니다:

- `/` - 홈 페이지
- `/about` - 소개 페이지
