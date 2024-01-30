'use client';

import { TextInput, PasswordInput, Button } from '@mantine/core';

export function Register() {
  return (
    <>
    <TextInput
        label="아이디"
        placeholder="아이디를 입력해주세요"
        inputWrapperOrder={['label', 'error', 'input', 'description']}
    />
    <PasswordInput
        mt="md"
        label="비밀번호"
        placeholder="비밀번호를 입력해주세요"
        inputWrapperOrder={['label', 'error', 'input', 'description']}
    />
    <Button mt="xl" fullWidth>회원가입</Button>
    </>
  );
}