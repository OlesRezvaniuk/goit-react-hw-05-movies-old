import { AdditInfo, BoxInfoItem } from '../MovieDetails.styled';

export const MovieAdditionalInfo = ({ onAdditionlInfo }) => {
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
        {onAdditionlInfo.map(link => (
          <li key={link.name}>
            <BoxInfoItem key={link.name} to={`${link.href}`}>
              {link.name}
            </BoxInfoItem>
          </li>
        ))}
      </AdditInfo>
    </div>
  );
};
