import styled from 'styled-components'

export const SelectorContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  margin-left: 24px;

  @media (max-width: 639px) {
    margin-left: 0;
    margin-right: 12px;
  }

  @media (prefers-reduced-motion: reduce) {
    * {
      transition: none !important;
    }
  }
`

export const LanguageButton = styled.button<{ $active: boolean }>`
  background: transparent;
  border: none;
  color: ${({ $active }) => ($active ? '#fff' : '#aaa6c3')};
  font-size: 14px;
  font-weight: ${({ $active }) => ($active ? '600' : '400')};
  cursor: pointer;
  padding: 4px 8px;
  border-radius: 4px;
  transition:
    color 0.2s ease,
    background-color 0.2s ease;

  &:hover {
    color: #fff;
    background-color: rgba(255, 255, 255, 0.1);
  }

  &:focus {
    outline: 2px solid #4fc1e9;
    outline-offset: 2px;
  }

  &:focus:not(:focus-visible) {
    outline: none;
  }

  &:focus-visible {
    outline: 2px solid #4fc1e9;
    outline-offset: 2px;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`

export const Separator = styled.span`
  color: #aaa6c3;
  font-size: 14px;
  user-select: none;
`
