// localStorageUtils.js

export const handleClear = () => {
  const keysToRemove = [
    "access_token",
    "swap_card_id",
    "FalseBatteryId",
    "batteryReturnedSOC",
    "batteryReturnedID",
    "amount",
    "flag",
    "i_macAdress",
    "batteryReturnedSOC",
    "field_soc",
    "r_macAdress",
    "battery_Inserted",
  ];

  keysToRemove.forEach((key) => {
    localStorage.removeItem(key);
  });
};
