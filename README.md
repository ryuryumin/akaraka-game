# 아카라카 생존훈련소

홈 화면에서 캐릭터 선택을 거쳐 Stage 1, Stage 2, Stage 3까지 플레이하는 모바일 웹 프로토타입입니다.

## Local Preview

```sh
python3 -m http.server 5173
```

Then open `http://localhost:5173`.

## Vercel

이 `akaraka-game` 폴더를 Vercel 정적 프로젝트로 배포하면 됩니다.

```sh
npx vercel --prod
```

배포 후 직접 접근 가능한 경로:

- `/`
- `/stage1`
- `/stage2`
- `/stage3`
