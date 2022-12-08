import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TranslationComponent } from '../components/translation';

export default {
	title: 'CV Components/TranslationComponent',
	component: TranslationComponent,
} as ComponentMeta<typeof TranslationComponent>;

const Template: ComponentStory<typeof TranslationComponent> = () => <TranslationComponent />;

export const TranslationDefault = Template.bind({});
