import TableCell from "./TableCell";
import TableRow from "./TableRow";

const SizeTable = ({ measurement, className }) => {
  return (
    <>
      {measurement === "cm" ? (
        <table className={`${className} w-full`}>
          <tbody>
            <TableRow header>
              <TableCell>Size</TableCell>
              <TableCell>EU Size</TableCell>
              <TableCell>To Fit Chest Size</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>XS</TableCell>
              <TableCell>44 - 46</TableCell>
              <TableCell>86 - 91</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>S</TableCell>
              <TableCell>46 - 48</TableCell>
              <TableCell>91 - 96</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>M</TableCell>
              <TableCell>48 - 50</TableCell>
              <TableCell>96 - 101</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>L</TableCell>
              <TableCell>50 - 52</TableCell>
              <TableCell>101 - 106</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>XL</TableCell>
              <TableCell>52 - 54</TableCell>
              <TableCell>106 - 111</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>2XL</TableCell>
              <TableCell>54 - 56</TableCell>
              <TableCell>111 - 116</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>3XL</TableCell>
              <TableCell>56 - 58</TableCell>
              <TableCell>116 - 121</TableCell>
            </TableRow>
          </tbody>
        </table>
      ) : (
        <table className={`${className} w-full`}>
          <tbody>
            <TableRow header>
              <TableCell>Size</TableCell>
              <TableCell>EU Size</TableCell>
              <TableCell>To Fit Chest Size</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>XS</TableCell>
              <TableCell>44 - 46</TableCell>
              <TableCell>33.9 - 35.8</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>S</TableCell>
              <TableCell>46 - 48</TableCell>
              <TableCell>35.8 - 37.8</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>M</TableCell>
              <TableCell>48 - 50</TableCell>
              <TableCell>37.8 - 39.8</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>L</TableCell>
              <TableCell>50 - 52</TableCell>
              <TableCell>39.8 - 41.7</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>XL</TableCell>
              <TableCell>52 - 54</TableCell>
              <TableCell>41.7 - 43.7</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>2XL</TableCell>
              <TableCell>54 - 56</TableCell>
              <TableCell>43.7 - 45.7</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>3XL</TableCell>
              <TableCell>56 - 58</TableCell>
              <TableCell>45.7 - 47.6</TableCell>
            </TableRow>
          </tbody>
        </table>
      )}
    </>
  );
};

export default SizeTable;
