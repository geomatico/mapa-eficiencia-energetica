import React, {useState} from 'react';
import MultiSelectFilter from './MultiSelectFilter';

export default {
  title: 'Common/MultiSelectFilter',
  component: MultiSelectFilter,
};

const Template = (args) => <MultiSelectFilter {...args} />;

// eslint-disable-next-line react/prop-types,no-unused-vars
const ManagedTemplate = ({onSelectionChange, selectedIds, ...args}) => {
  const [getSelectedIds, setSelectedIds] = useState (selectedIds);
  return <MultiSelectFilter
    onSelectionChange={setSelectedIds}
    selectedIds={getSelectedIds}
    {...args}
  />;
};

export const Default = Template.bind({});
Default.args = {
  title: 'actuación',
  values: [
    {
      id:'id1',
      label:'certificado'
    },
    {
      id:'id2',
      label:'en trámite'
    },
    {
      id:'id3',
      label:'no certificao'
    },
  ],
  selectedIds: ['id1']
};


export const Managed = ManagedTemplate.bind ({});
Managed.args = {
  ...Default.args
};
