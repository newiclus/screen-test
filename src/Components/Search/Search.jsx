import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Avatar from '../Avatar/Avatar';
import { InputField } from '../Base';
import { List } from './Search.styled';

function Search({ data }) {
  const [users] = useState(data);
  const [currentList, setCurrentList] = useState(users);

  const getUsersFiltering = (query, dataList) => {
    const matchPattern = (element) => element.toLowerCase().includes(query);

    if (dataList && dataList.length > 0) {
      return dataList.filter(
        (item) => matchPattern(item.alias) || matchPattern(item.name),
      );
    }
    return [];
  };

  const handleSearch = (ev) => {
    const { value } = ev.target;

    if (value.length >= 3) {
      const result = getUsersFiltering(value, users);
      setCurrentList(result);
    } else if (value.length === 0) {
      setCurrentList(users);
    }
  };

  const handleFollow = (id) => {
    // Find element by id and change its status
    const newList = currentList.map((user) => {
      if (user.id === id) {
        user.follow = !user.follow;
      }

      return user;
    });

    setCurrentList(newList);
  };

  return (
    <div>
      <InputField
        type="search"
        name="search_input"
        onChange={handleSearch}
        placeholder="Search users"
      />
      <List>
        {currentList.map((user) => (
          <li key={user.id}>
            <Avatar
              id={user.id}
              color={user.color}
              alias={user.alias}
              name={user.name}
              isFollowed={user.follow}
              onFollow={handleFollow}
            />
          </li>
        ))}
      </List>
    </div>
  );
}

Search.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Search;
