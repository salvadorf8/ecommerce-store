import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import MenuItem from '../menu-item/menu-item.component';
import { selectDirectorySections } from '../../redux/directory/directory.selectors';

import * as S from './directory.styles';

const Directory = ({ sections }) => (
    <S.Menu>
        {sections.map(({ id, ...otherSectionProps }) => (
            <MenuItem key={id} {...otherSectionProps} />
        ))}
    </S.Menu>
);

// const mapStateToProps = (state) => {
//     console.log('taking a look: ', state.directory);
//     return { directory: state.directory };
// };

// example with selector "selectDirectorySections"
// const mapStateToProps = (state) => ({
//     sections: selectDirectorySections(state)
// });

// example with selector "selectDirectorySections" and with the createStructuredSelector function
const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections
});

export default connect(mapStateToProps)(Directory);
