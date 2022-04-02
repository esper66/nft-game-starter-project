const CONTRACT_ADDRESS = '0x0C7D21F48c3B7F6Be2908f5215598b77569402aF';
//NFT キャラクター の属性をフォーマットしてオブジェクトとして返します。
const transformCharacterData = (characterData) => {
    return {
      name: characterData.name,
      imageURI: characterData.imageURI,
      hp: characterData.hp.toNumber(),
      maxHp: characterData.maxHp.toNumber(),
      attackDamage: characterData.attackDamage.toNumber(),
    };
  };
  
  // 変数を constants.js 以外の場所でも使えるようにします。
  export { CONTRACT_ADDRESS, transformCharacterData };