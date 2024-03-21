import { ArrowLeftIcon, ArrowRightIcon, MagnifyingGlassIcon } from '@radix-ui/react-icons';
import { debounce } from '@sitecore-search/common';
import type {SearchResultsInitialState, SearchResultsStoreState} from '@sitecore-search/react';
import {WidgetDataType, useSearchResults, widget, FilterGeo} from '@sitecore-search/react';
import { Pagination, Presence } from '@sitecore-search/ui';

import {
  ArticleCardStyled, GeoControls, GeoControlsFieldInput,
  GridStyled,
  InputStyled,
  LoaderAnimation,
  LoaderContainer,
  PageControlsStyled,
  PaginationStyled,
  QuerySummaryStyled,
  SearchResultsLayout,
  SelectStyled,
  SortSelectStyled,
} from './styled';
import {useState} from "react";

type ArticleModel = {
  id: string;
  type?: string;
  title?: string;
  name?: string;
  subtitle?: string;
  url?: string;
  description?: string;
  content_text?: string;
  image_url?: string;
  contact_email?: string;
  contact_phone?:string;
  office_address?: string;
};

type ArticlesSearchResultsProps = {
  defaultSortType?: SearchResultsStoreState['sortType'];
  defaultPage?: SearchResultsStoreState['page'];
  defaultItemsPerPage?: SearchResultsStoreState['itemsPerPage'];
  defaultKeyphrase?: SearchResultsStoreState['keyphrase'];
  defaultLat?: number;
  defaultLon?: number;
};

type InitialState = SearchResultsInitialState<'itemsPerPage' | 'keyphrase' | 'page' | 'sortType'>;

export const GeoSearchResults = ({
  defaultSortType = 'featured_desc',
  defaultPage = 1,
  defaultKeyphrase = '',
  defaultItemsPerPage = 24,
  defaultLat,
  defaultLon,
}: ArticlesSearchResultsProps) => {
  const [geoValues, setGeoValues] = useState({
    lat: -20.145177,
    lon: -44.8878139,
    distance: '3000km',
  });
  const geoFilter = new FilterGeo('location', '3000km', -20.145177, -44.8878139);
  const {
    actions: {
      onKeyphraseChange,
      onResultsPerPageChange,
      onPageNumberChange,
      onSortChange,
      onItemClick,
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    state: { sortType = defaultSortType, page = defaultPage, itemsPerPage = defaultItemsPerPage },
    queryResult: {
      isFetching,
      isLoading,
      data: {
        limit = 1,
        total_item: totalItems = 0,
        sort: { choices: sortChoices = [] } = {},
        content: articles = [],
      } = {},
    },
    query,
  } = useSearchResults<ArticleModel, InitialState>({
    state: {
      sortType: defaultSortType,
      page: defaultPage,
      itemsPerPage: defaultItemsPerPage,
      keyphrase: defaultKeyphrase,
    }
  });
  const totalPages = Math.floor(totalItems / limit);
  const keyphraseChangeFn = debounce((e) => {
    onKeyphraseChange({ keyphrase: e.target.value });
  }, 200);
  const selectedSortIndex = sortChoices.findIndex((s) => s.name === sortType);
  const geoChangeHandler = (name: string) => {
    return (event: any) => {
      setGeoValues({ ...geoValues, [name]: event.target.value });
    };
  };
  const refreshGeo = () => {
    geoFilter.setLat(Number(geoValues.lat));
    geoFilter.setLon(Number(geoValues.lon));
    geoFilter.setDistance(geoValues.distance);
    query.getRequest().resetSearchFilter().setSearchFilter(geoFilter);
  };

  if (isLoading) {
    return (
      <LoaderContainer>
        <Presence present={isLoading}>
          <LoaderAnimation
            aria-busy={isLoading}
            aria-hidden={!isLoading}
            focusable="false"
            role="progressbar"
            viewBox="0 0 20 20"
          >
            <path d="M7.229 1.173a9.25 9.25 0 1 0 11.655 11.412 1.25 1.25 0 1 0-2.4-.698 6.75 6.75 0 1 1-8.506-8.329 1.25 1.25 0 1 0-.75-2.385z" />
          </LoaderAnimation>
        </Presence>
      </LoaderContainer>
    );
  }
  return (
    <SearchResultsLayout.Wrapper>
      <InputStyled>
        <input onChange={(e) => keyphraseChangeFn(e)} />
        <MagnifyingGlassIcon />
      </InputStyled>
      <p>If lat and lon are omitted your current location will be used: {defaultLat} & {defaultLon}</p>
      <GeoControls.Wrapper>
        <GeoControls.Field>
          <GeoControls.FieldLabel>Distance: </GeoControls.FieldLabel>
          <GeoControlsFieldInput name="distance" value={geoValues.distance} onChange={geoChangeHandler('distance')} />
        </GeoControls.Field>
        <GeoControls.Field>
          <GeoControls.FieldLabel>Latitude: </GeoControls.FieldLabel>
          <GeoControlsFieldInput name="lat" value={geoValues.lat} onChange={geoChangeHandler('lat')} />
        </GeoControls.Field>
        <GeoControls.Field>
          <GeoControls.FieldLabel>Longitude: </GeoControls.FieldLabel>
          <GeoControlsFieldInput name="lon" value={geoValues.lon} onChange={geoChangeHandler('lon')} />
        </GeoControls.Field>
        <GeoControls.Field>
          <GeoControls.FieldButton onClick={refreshGeo}>Refresh</GeoControls.FieldButton>
        </GeoControls.Field>
      </GeoControls.Wrapper>
      <SearchResultsLayout.MainArea>
        {isFetching && (
          <LoaderContainer>
            <Presence present={true}>
              <LoaderAnimation
                aria-busy={true}
                aria-hidden={false}
                focusable="false"
                role="progressbar"
                viewBox="0 0 20 20"
              >
                <path d="M7.229 1.173a9.25 9.25 0 1 0 11.655 11.412 1.25 1.25 0 1 0-2.4-.698 6.75 6.75 0 1 1-8.506-8.329 1.25 1.25 0 1 0-.75-2.385z" />
              </LoaderAnimation>
            </Presence>
          </LoaderContainer>
        )}
        {totalItems > 0 && (
          <>
            <SearchResultsLayout.RightArea>
              {/* Sort Select */}
              <SearchResultsLayout.RightTopArea>
                {totalItems && (
                  <QuerySummaryStyled>
                    Showing {itemsPerPage * (page - 1) + 1} - {itemsPerPage * (page - 1) + articles.length} of{' '}
                    {totalItems} results
                  </QuerySummaryStyled>
                )}
                <SortSelectStyled.Root defaultValue={sortChoices[selectedSortIndex]?.name} onValueChange={onSortChange}>
                  <SortSelectStyled.Trigger>
                    <SortSelectStyled.SelectValue>
                      {selectedSortIndex > -1 ? sortChoices[selectedSortIndex].label : ''}
                    </SortSelectStyled.SelectValue>
                    <SortSelectStyled.Icon />
                  </SortSelectStyled.Trigger>
                  <SortSelectStyled.Content>
                    <SortSelectStyled.Viewport>
                      {sortChoices.map((option) => (
                        <SortSelectStyled.Option value={option} key={option.name}>
                          <SortSelectStyled.OptionText>{option.label}</SortSelectStyled.OptionText>
                        </SortSelectStyled.Option>
                      ))}
                    </SortSelectStyled.Viewport>
                  </SortSelectStyled.Content>
                </SortSelectStyled.Root>
              </SearchResultsLayout.RightTopArea>

              {/* Results */}
              <GridStyled>
                {articles.map((a, index) => (
                  <ArticleCardStyled.Root key={a.id} article={a as ArticleModel}>
                    <ArticleCardStyled.Title>
                      <ArticleCardStyled.Link
                        href="#"
                        onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                          e.preventDefault();
                          onItemClick({ id: a.id, index });
                        }}
                      >
                        {a.title || a.name}
                      </ArticleCardStyled.Link>
                    </ArticleCardStyled.Title>
                    <ArticleCardStyled.Content>
                      <ArticleCardStyled.Item>
                        <ArticleCardStyled.ItemLabel>Email: </ArticleCardStyled.ItemLabel>
                        <ArticleCardStyled.ItemInfo>{ a.contact_email }</ArticleCardStyled.ItemInfo>
                      </ArticleCardStyled.Item>
                      <ArticleCardStyled.Item>
                        <ArticleCardStyled.ItemLabel>Contact Phone: </ArticleCardStyled.ItemLabel>
                        <ArticleCardStyled.ItemInfo>{ a.contact_phone }</ArticleCardStyled.ItemInfo>
                      </ArticleCardStyled.Item>
                      <ArticleCardStyled.Item>
                        <ArticleCardStyled.ItemLabel>Address: </ArticleCardStyled.ItemLabel>
                        <ArticleCardStyled.ItemInfo>{ a.office_address }</ArticleCardStyled.ItemInfo>
                      </ArticleCardStyled.Item>
                    </ArticleCardStyled.Content>
                  </ArticleCardStyled.Root>
                ))}
              </GridStyled>

              <PageControlsStyled>
                <div>
                  <label>Results Per Page</label>
                  <SelectStyled.Root
                    defaultValue={String(defaultItemsPerPage)}
                    onValueChange={(v: string) => onResultsPerPageChange({ numItems: Number(v) })}
                  >
                    <SelectStyled.Trigger>
                      <SelectStyled.SelectValue />
                      <SelectStyled.Icon />
                    </SelectStyled.Trigger>
                    <SelectStyled.Content>
                      <SelectStyled.Viewport>
                        <SelectStyled.Option value="24">
                          <SelectStyled.OptionText>24</SelectStyled.OptionText>
                        </SelectStyled.Option>

                        <SelectStyled.Option value="48">
                          <SelectStyled.OptionText>48</SelectStyled.OptionText>
                        </SelectStyled.Option>

                        <SelectStyled.Option value="64">
                          <SelectStyled.OptionText>64</SelectStyled.OptionText>
                        </SelectStyled.Option>
                      </SelectStyled.Viewport>
                    </SelectStyled.Content>
                  </SelectStyled.Root>
                </div>
                <div>
                  <PaginationStyled.Root
                    currentPage={page}
                    defaultCurrentPage={1}
                    totalPages={totalPages}
                    onPageChange={(v: number ) => onPageNumberChange({ page: v })}
                  >
                    <PaginationStyled.PrevPage onClick={(e) => e.preventDefault()}>
                      <ArrowLeftIcon />
                    </PaginationStyled.PrevPage>
                    <PaginationStyled.Pages>
                      {(pagination) =>
                        Pagination.paginationLayout(pagination, {
                          boundaryCount: 1,
                          siblingCount: 1,
                        }).map(({ page, type }) =>
                          type === 'page' ? (
                            <PaginationStyled.Page
                              key={page}
                              aria-label={`Page ${page}`}
                              page={page as number}
                              onClick={(e: React.MouseEvent<HTMLAnchorElement>) => e.preventDefault()}
                            >
                              {page}
                            </PaginationStyled.Page>
                          ) : (
                            <span key={type}>...</span>
                          ),
                        )
                      }
                    </PaginationStyled.Pages>
                    <PaginationStyled.NextPage onClick={(e: React.MouseEvent<HTMLAnchorElement>) => e.preventDefault()}>
                      <ArrowRightIcon />
                    </PaginationStyled.NextPage>
                  </PaginationStyled.Root>
                </div>
              </PageControlsStyled>
            </SearchResultsLayout.RightArea>
          </>
        )}
        {totalItems <= 0 && !isFetching && (
          <SearchResultsLayout.NoResults>
            <h3>0 Results</h3>
          </SearchResultsLayout.NoResults>
        )}
      </SearchResultsLayout.MainArea>
    </SearchResultsLayout.Wrapper>
  );
};

const GeoSearchResultsWidget = widget(GeoSearchResults, WidgetDataType.SEARCH_RESULTS, 'content');

export default GeoSearchResultsWidget;
