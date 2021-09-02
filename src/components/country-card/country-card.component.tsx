import React from 'react';
import {
  Card, CardHeader, CardContent,
} from '@material-ui/core';
import { CountryType, LanguageType } from '../country-list';

export const CountryCard = ({
  name, nativeName, capital, flag, officialLanguages,
}: CountryType) => (
  <Card className="country-card">
    <CardHeader
      title={`${name} (${nativeName}) ${flag.emoji}`}
    />
    <CardContent>
      <div>
        Capital:
        {' '}
        {`${capital}`}
      </div>
      <div>
        Languages:
        {' '}
        {officialLanguages.slice(0, 4).map((language: LanguageType) => (
          `${language.name} (${language.nativeName})`
        )).join(', ')}
      </div>
    </CardContent>
  </Card>
);
