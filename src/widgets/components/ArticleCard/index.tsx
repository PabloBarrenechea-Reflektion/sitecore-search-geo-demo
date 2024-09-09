// This component was generated by @sitecore-search/cli on Mon Sep 09 2024 14:17:20 GMT+0200 (Central European Summer Time)

import type { ActionProp, ItemClickedAction } from '@sitecore-search/react';
import { ArticleCard } from '@sitecore-search/ui';

type ArticleCardItemCardProps = {
  className?: string;
  article: any;
  onItemClick: ActionProp<ItemClickedAction>;
  index: number;
};

const ArticleItemCard = ({ className, article, onItemClick, index }: ArticleCardItemCardProps) => {
  return (
    <ArticleCard.Root
      key={article.id}
      className={`group relative border border-gray-300 dark:border-gray-600 rounded-md hover:shadow-lg hover:scale-105 hover:transition-all hover:ease-linear	hover:duration-300 focus-within:scale-105 focus-within:transition-all focus-within:ease-linear focus-within:duration-300 focus-within:hover:shadow-lg  ${className}`}
    >
      <div className="m-4 flex-col justify-between">
        <a
          className="focus:outline-indigo-500"
          href={article.url}
          onClick={(event) => {
            event.preventDefault();
            onItemClick({
              id: article.id,
              index,
              sourceId: article.source_id,
            });
          }}
        >
          <span aria-hidden="true" className="absolute inset-0"></span>
          <ArticleCard.Title className="mt-4 text-base">{article.name}</ArticleCard.Title>
        </a>
        { article.contact_email && <ArticleCard.Subtitle className="mt-3 text-xs text-gray-500 text-left overflow-ellipsis"><b>Email: </b>{article.contact_email}</ArticleCard.Subtitle>}
        { article.contact_phone && <ArticleCard.Subtitle className="mt-3 text-xs text-gray-500 text-left"><b>Phone: </b>{article.contact_phone}</ArticleCard.Subtitle>}
        { article.office_address && <ArticleCard.Subtitle className="mt-3 text-xs text-gray-500 text-left"><b>Address: </b>{article.office_address}</ArticleCard.Subtitle>}
        { article.location_latitude && <ArticleCard.Subtitle className="mt-3 text-xs text-gray-500 text-left"><b>Lat: </b>{article.location_latitude}</ArticleCard.Subtitle>}
        { article.location_longitude && <ArticleCard.Subtitle className="mt-3 text-xs text-gray-500 text-left"><b>Lon: </b>{article.location_longitude}</ArticleCard.Subtitle>}
      </div>
    </ArticleCard.Root>
  );
};
export default ArticleItemCard;
