import { AdditInfo, BoxInfoItem } from '../MovieDetails.styled';

export const MovieAdditionalInfo = ({ onAdditionlInfo, location }) => {
  return (
    <div style={{ padding: '20px' }}>
      <h3
        style={{
          margin: '0',
          textAlign: 'center',
          textTransform: 'uppercase',
        }}
      >
        Additional information
      </h3>
      <AdditInfo>
        {onAdditionlInfo.map(({ name, href }) => (
          <li key={name}>
            <BoxInfoItem state={location} key={name} to={`${href}`}>
              {name}
            </BoxInfoItem>
          </li>
        ))}
      </AdditInfo>
    </div>
  );
};
