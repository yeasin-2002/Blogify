import React from 'react';
interface Props extends React.ComponentProps<'div'> {}

export const updateProfileAvatar = ({ ...rest }: Props) => {
  return <div {...rest}>updateProfileAvatar</div>;
};
