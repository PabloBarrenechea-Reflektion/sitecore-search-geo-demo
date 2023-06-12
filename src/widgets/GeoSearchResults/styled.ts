import styled, { keyframes } from 'styled-components';

import { ArticleCard, Pagination, Select, SortSelect, theme } from '@sitecore-search/ui';

const selectTriggerStyle = `
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: ${theme.vars.spacing.xs};
  background-color: transparent;
  height: 40px;
  padding: ${theme.vars.spacing.xs} ${theme.vars.spacing.m};
  font-family: ${theme.vars.typography.fontFamilySystem};
  font-size: ${theme.vars.typography.fontSize1.fontSize};
  color: ${theme.vars.palette.primary.main};
  border: none;
  &:focus {
    outline: none;
  }
`;

const SortSelectTriggerStyled = styled(SortSelect.Trigger)`
  ${selectTriggerStyle}
`;

const GenericSelectTriggerStyled = styled(Select.Trigger)`
  ${selectTriggerStyle}
`;

const contentSelectStyle = `
  background-color: ${theme.vars.palette.primary.contrastText};
  overflow: hidden;
  color: ${theme.vars.palette.primary.main};
  box-shadow: 2px 2px 4px ${theme.vars.palette.grey['400']};
  position: absolute;
  top: 30px;
  z-index: 100;
  &:focus-within {
    border-color: ${theme.vars.palette.primary.dark};
  }
`;

const SortSelectContentStyled = styled(SortSelect.Content)`
  ${contentSelectStyle}
`;

const GenericSelectContentStyled = styled(Select.SelectContent)`
  ${contentSelectStyle}
`;

const viewportSelectStyles = `
  padding: ${theme.vars.spacing.xs};
  z-index: 50000;
`;

const SortSelectViewportStyled = styled(SortSelect.Viewport)`
  ${viewportSelectStyles}
`;

const GenericSelectViewportStyled = styled(Select.Viewport)`
  ${viewportSelectStyles}
`;

const optionSelectStyles = `
  display: flex;
  align-items: center;
  line-height: 1;
  cursor: pointer;
  user-select: none;
  white-space: nowrap;
  height: 25px;
  padding: 0 ${theme.vars.spacing.xs};
  font-family: ${theme.vars.typography.fontFamilySystem};
  font-size: ${theme.vars.typography.fontSize1.fontSize};
  color: ${theme.vars.palette.primary.main};
  position: relative;
  border-radius: 0px;

  &[data-highlighted] {
    border-radius: 0;
    background-color: ${theme.vars.palette.primary.dark};
    color: ${theme.vars.palette.primary.contrastText};
  }
  &[data-disabled] {
    color: ${theme.vars.palette.grey['800']};
    font-style: italic;
  }
`;

const SortSelectOptionStyled = styled(SortSelect.Option)`
  ${optionSelectStyles}
`;

const GenericSelectOptionStyled = styled(Select.SelectItem)`
  ${optionSelectStyles}
`;

const SortSelectValueStyled = styled(SortSelect.SelectValue)`
  color: ${theme.vars.palette.primary.main};
`;

const GenericSelectValueStyled = styled(Select.SelectValue)`
  color: ${theme.vars.palette.primary.main};
`;

const SortSelectIconStyled = styled(SortSelect.Icon)``;

const GenericSelectIconStyled = styled(Select.Icon)``;

const SortSelectRootStyled = styled(SortSelect.Root)``;
const GenericSelectRootStyled = styled(Select.Root)``;

const SortSelectOptionTextStyled = styled(SortSelect.OptionText)``;
const GenericSelectOptionTextStyled = styled(SortSelect.OptionText)``;

export const SortSelectStyled = {
  Trigger: SortSelectTriggerStyled,
  Content: SortSelectContentStyled,
  Viewport: SortSelectViewportStyled,
  Option: SortSelectOptionStyled,
  SelectValue: SortSelectValueStyled,
  Root: SortSelectRootStyled,
  OptionText: SortSelectOptionTextStyled,
  Icon: SortSelectIconStyled,
};

export const SelectStyled = {
  Root: GenericSelectRootStyled,
  Trigger: GenericSelectTriggerStyled,
  Icon: GenericSelectIconStyled,
  SelectValue: GenericSelectValueStyled,
  Content: GenericSelectContentStyled,
  Viewport: GenericSelectViewportStyled,
  Option: GenericSelectOptionStyled,
  OptionText: GenericSelectOptionTextStyled,
};

const ArticleRootStyled = styled(ArticleCard.Root)`
  border: solid 1px ${theme.vars.palette.grey['400']};
  box-shadow: 2px 2px 4px ${theme.vars.palette.grey['400']};
  padding: ${theme.vars.spacing.m};
  cursor: pointer;
  display: block;
  margin: ${theme.vars.spacing.s};
  height: 200px;
  overflow: hidden;
  text-align: left;
  &:focus-within {
    border: solid 1px ${theme.vars.palette.primary.main};
  }
  &:hover {
    border: solid 1px ${theme.vars.palette.primary.main};
  }
`;

const ArticleTitleStyled = styled(ArticleCard.Title)`
  margin: 0 0 ${theme.vars.spacing.m};
  font-family: ${theme.vars.typography.fontFamilySystem};
  font-size: ${theme.vars.typography.fontSize4.fontSize};
  font-weight: ${theme.vars.typography.fontSize4.fontWeight};
  line-height: ${theme.vars.typography.fontSize4.lineHeight};
`;


const ArticeContentStyled = styled(ArticleCard.Content)`
  margin: 0;
  font-family: ${theme.vars.typography.fontFamilySystem};
  font-size: ${theme.vars.typography.fontSize1.fontSize};
  font-weight: ${theme.vars.typography.fontWeight};
  line-height: ${theme.vars.typography.lineHeight};
  color: ${theme.vars.palette.primary.main};
  display: inline-block;
`;

const ArticleIdStyled = styled(ArticleCard.Id)`
  font-family: ${theme.vars.typography.fontFamilySystem};
  color: ${theme.vars.palette.primary.main};
  font-size: ${theme.vars.typography.fontSize1.fontSize};
`;

const ArticleLinkStyled = styled.a`
  text-decoration: none;
  color: ${theme.vars.palette.primary.main};
  font-size: ${theme.vars.typography.fontSize4.fontSize};
  &:hover {
    text-decoration: none;
  }
  &:focus {
    text-decoration: none;
  }
`;

const ArticleItemStyled = styled.div`
  witdh: 100%;
  display: block;
`;

const ArticleItemLabelStyled = styled.label`
  color: ${theme.vars.palette.primary.main};
  font-size: ${theme.vars.typography.fontSize1.fontSize};
  font-weight: bold;
`;


const ArticleItemInfoStyled = styled.span`
  color: ${theme.vars.palette.primary.main};
  font-size: ${theme.vars.typography.fontSize1.fontSize};
`;

export const ArticleCardStyled = {
  Link: ArticleLinkStyled,
  Id: ArticleIdStyled,
  Content: ArticeContentStyled,
  Title: ArticleTitleStyled,
  Root: ArticleRootStyled,
  Item: ArticleItemStyled,
  ItemLabel: ArticleItemLabelStyled,
  ItemInfo: ArticleItemInfoStyled,
};

const paginationLinkStyle = `
  margin: 0 5px;
  cursor: pointer;
  &[data-current='true'] {
    color: gray;
    pointer-events: none;
    text-decoration-line: none;
  }
`;

const paginationNavigationLinkStyle = `
  ${paginationLinkStyle}
  &[data-current='true'] {
    display: none;
  }
`;

const PaginationRootStyled = styled(Pagination.Root)`
  color: ${theme.vars.palette.primary.main};
  font-family: ${theme.vars.typography.fontFamilySystem};
  margin-top: ${theme.vars.spacing.m};
`;
const PaginationPrevPageStyled = styled(Pagination.PrevPage)`
  display: inline;
  ${paginationNavigationLinkStyle}
`;
const PaginationNextPageStyled = styled(Pagination.NextPage)`
  display: inline;
  ${paginationNavigationLinkStyle}
`;
const PaginationFirstPageStyled = styled(Pagination.FirstPage)`
  font-size: ${theme.vars.typography.fontSize2.fontSize};
  ${paginationNavigationLinkStyle}
`;
const PaginationLastPageStyled = styled(Pagination.LastPage)`
  font-size: ${theme.vars.typography.fontSize2.fontSize};
  ${paginationLinkStyle}
`;
const PaginationPageStyled = styled(Pagination.Page)`
  cursor: pointer;
  ${paginationLinkStyle}
`;
const PaginationPagesStyled = styled(Pagination.Pages)`
  display: inline;
`;

export const PaginationStyled = {
  Root: PaginationRootStyled,
  PrevPage: PaginationPrevPageStyled,
  NextPage: PaginationNextPageStyled,
  FirstPage: PaginationFirstPageStyled,
  LastPage: PaginationLastPageStyled,
  Page: PaginationPageStyled,
  Pages: PaginationPagesStyled,
};

const Wrapper = styled.div``;

const MainArea = styled.div`
  display: flex;
  max-width: 100%;
  position: relative;
`;

const LeftArea = styled.section`
  position: relative;
  flex: 1 1;
  margin-right: ${theme.vars.spacing.l};
`;

const RightArea = styled.section`
  display: flex;
  flex-direction: column;
  flex: 4 1;
`;

const RightTopArea = styled.section`
  display: flex;
  justify-content: space-between;
`;

export const GridStyled = styled.div`
  display: grid;
  grid-gap: var(--sdc-spacing-m);
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-auto-flow: row;
`;

export const PageControlsStyled = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: ${theme.vars.typography.fontFamilySystem};
  font-size: ${theme.vars.typography.fontSize1.fontSize};
`;


export const NoResults = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const SearchResultsLayout = {
  Wrapper,
  MainArea,
  NoResults,
  LeftArea,
  RightArea,
  RightTopArea,
};

export const InputStyled = styled.div`
  margin: auto;
  width: 50%;
  display: block;
  position: relative;
  input {
    padding: ${theme.vars.spacing.s};
    font-family: ${theme.vars.typography.fontFamilySystem};
    border: 1px solid ${theme.vars.palette.grey['400']};
    width: 100%;
  }

  input:focus,
  input:active {
    border: 1px solid ${theme.vars.palette.primary.main};
    outline: none;
  }

  svg {
    position: absolute;
    right: 0;
    top: 6px;
    color: ${theme.vars.palette.grey['800']};
    width: 20px;
    height: 20px;
  }

  input:focus + svg {
    color: ${theme.vars.palette.primary.main};
  }
`;

export const QuerySummaryStyled = styled.div`
  color: ${theme.vars.palette.primary.main};
  font-family: ${theme.vars.typography.fontFamilySystem};
  font-size: ${theme.vars.typography.fontSize1.fontSize};
  font-weight: bold;
  margin: auto 0;
`;

export const LoaderContainer = styled.div`
  align-items: center;
  display: flex;
  position: absolute;
  left: 0;
  right: 0;
  height: 100%;
  background-color: white;
  opacity: 0.5;
  z-index: 100;
`;

const Rotate = keyframes`
  from {
      transform: rotate(0deg);
  }
  to {
      transform: rotate(360deg);
  }
`;

export const LoaderAnimation = styled.svg`
  animation: ${Rotate} 2s linear infinite;
  display: block;
  fill: ${theme.vars.palette.primary.main};
  height: 50px;
  margin: auto;
  width: 50px;
`;

export const GeoControlsWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const GeoControlsField = styled.div`
`;

export const GeoControlsFieldLabel = styled.label``;

export const GeoControlsFieldInput = styled.input`
  font-family: var(--sdc-typography-fontFamilySystem);
  border: 1px solid var(--sdc-palette-grey-400);
  padding: var(--sdc-spacing-s);
  
  &:active, &:focus {
    border: 1px solid ${theme.vars.palette.primary.main};
    outline: none;
  }
`;

export const GeoControlsFieldButton = styled.button`
  background: ${theme.vars.palette.primary.main};
  color: ${theme.vars.palette.primary.contrastText};
  padding: ${ theme.vars.spacing.s };
  border-radius: 0;
  font-size: ${theme.vars.typography.fontSize1.fontSize};
  outline: none;
  &:hover {
    color: ${theme.vars.palette.primary.main};
    background: ${theme.vars.palette.primary.contrastText};
  }
  &:active, &:focus {
    border-radius: 0;
    color: ${theme.vars.palette.primary.main};
    background: ${theme.vars.palette.primary.contrastText};
  }
  
`;
export const GeoControls = {
  Wrapper: GeoControlsWrapper,
  Field: GeoControlsField,
  FieldLabel: GeoControlsFieldLabel,
  FieldInput: GeoControlsFieldInput,
  FieldButton: GeoControlsFieldButton,
};
