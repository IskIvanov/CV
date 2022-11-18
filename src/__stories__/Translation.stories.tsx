import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TranslationComponent } from '../components/translation';

export default {
  title: 'Example/TranslationComponent',
  component: TranslationComponent,
} as ComponentMeta<typeof TranslationComponent>;

const TemplateTranslationComponent: ComponentStory<typeof TranslationComponent> = () => <TranslationComponent />;

export const DefaultTranslationComponent = TemplateTranslationComponent.bind({});
