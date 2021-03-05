import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import { Button, FormControl, Select, InputBase, MenuItem, Checkbox, ListItemText } from '@material-ui/core';

const CustomButton = withStyles((theme) => ({
  contained: {
    borderRadius: '100px',
    height: theme.spacing(4),
    backgroundColor: '#ffffff',
    '&:hover': {
      backgroundColor: '#ffffff',
    },
  },
  label: {
    textTransform: 'lowercase',
  },
}))(Button);

const InputTitle = withStyles((theme) => ({
  root: {
    color: theme.palette.text.secondary
  }
}))(InputBase);

function MultiSelectFilter({ title, values, onSelectionChange, selectedIds }) {
  const handleChange = (e) => onSelectionChange(selectedIds = e.target.value);

  return (
    <CustomButton variant='contained'>
      <FormControl>
        <Select
          multiple
          displayEmpty
          value={selectedIds}
          name={title}
          onChange={handleChange}
          input={<InputTitle />}
          renderValue={(selected) => selected ? <p>{title}</p> : undefined}
        >
          {values.map(({id, label}) => (
            <MenuItem key={id} value={id}>
              <Checkbox checked={selectedIds.includes(id)}/>
              <ListItemText primary={label}/>
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </CustomButton>
  );
}

MultiSelectFilter.propTypes = {
  title: PropTypes.string.isRequired,
  values: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string
    }).isRequired
  ),
  selectedIds: PropTypes.arrayOf(PropTypes.string),
  onSelectionChange: PropTypes.func.isRequired
};

MultiSelectFilter.defaultProps = {
  selectedIds: []
};

export default MultiSelectFilter;