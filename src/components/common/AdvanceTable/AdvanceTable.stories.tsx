import styled from '@emotion/styled'
import React from 'react'
import AdvanceTable from './AdvanceTable'
import type { ComponentMeta, ComponentStory } from '@storybook/react'
import { withThemeContext } from '../../../utils/storybook/decorators'

export default {
  title: 'Components/General/Advance Table',
  component: AdvanceTable,
  decorators: [withThemeContext(true)],
} as ComponentMeta<typeof AdvanceTable>

const Template: ComponentStory<typeof AdvanceTable> = (args) => (
  <AdvanceTable {...args} />
)

export const Default = Template.bind({})

const customRowRender: React.FC<React.PropsWithChildren> = ({ children }) => (
  <CustomTR>{children}</CustomTR>
)

const CustomTR = styled.tr({
  backgroundColor: '#f5f5f5',

  '&:hover': {
    backgroundColor: '#e5e5e5',
    cursor: 'pointer',
  },
})

Default.args = {
  header: [
    {
      cells: [
        {
          value: 'Header 1',
        },
        {
          value: 'Header 2',
        },
        {
          value: 'Header 3',
        },
      ],
      border: {
        bottom: true,
      },
    },
  ],
  body: [
    {
      cells: [
        {
          value: 'Cell 1.1',
        },
        {
          value: 'Cell 1.2',
        },
        {
          value: 'Cell 1.3',
        },
      ],
    },
    {
      cells: [
        {
          value: 'Cell 2.1',
        },
        {
          value: 'Cell 2.2 (bold)',
          defaultRenderer: 'boldText',
          alignment: 'center',
          border: {
            width: 2,
          },
        },
        {
          value: 'Cell 2.3',
        },
      ],
    },
    {
      cellDefaultRenderer: 'boldText',
      cells: [
        {
          value: 'Cell 3.1',
        },
        {
          value: 'Cell 3.2',
        },
        {
          value: 'Cell 3.3',
        },
      ],
    },
    {
      render: customRowRender,
      cells: [
        {
          value: 'Cell 4.1-2',
          colSpan: 2,
          border: {
            top: true,
            right: true,
          },
        },
        {
          value: 'Cell 4.3',
        },
      ],
    },
  ],
}
