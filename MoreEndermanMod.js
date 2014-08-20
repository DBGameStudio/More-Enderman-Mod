ModPE.setItem(400,"ender_eye",0,"Spawn Ender Archer");
ModPE.setItem(401,"ender_eye",0,"Spawn Explosive Enderman");
ModPE.setItem(402,"ender_eye",0,"Spawn Ender Warrior");
ModPE.setItem(403,"ender_eye",0,"Spawn Ender Fighter");
ModPE.setItem(404,"ender_eye",0,"Spawn Ender Creeper");
ModPE.setItem(405,"ender_eye",0,"Spawn Ender Villager");
ModPE.setItem(406,"ender_eye",0,"Spawn Friendly Enderman");
ModPE.setItem(407,"ender_eye",0,"Spawn EnderLord");
ModPE.setItem(408,"blaze_rod",0,"More Enderman Mod Start Kit");
ModPE.setItem(409,"potion_bottle_splash",0,"Enderman Morph Potion");
ModPE.setItem(410,"blaze_rod",0,"Ender Staff");
ModPE.setItem(411,"potion_bottle_splash",0,"EnderLord Morph Potion");
ModPE.setItem(412,"potion_bottle_splash",0,"Ender Creeper Morph Potion");
ModPE.setItem(413,"potion_bottle_splash",0,"Ender Villager Morph Potion");
ModPE.setItem(414,"potion_bottle_splash",0,"Normal Morph Potion");
ModPE.setItem(415,"ender_eye",0,"Spawn Ender Helper");


function addEnderLordRenderType(renderer) 
{
    var model = renderer.getModel();
     
    var head = model.getPart("head");
    var body = model.getPart("body");
    var rarm = model.getPart("rightArm");
    var larm = model.getPart("leftArm");
    var rleg = model.getPart("rightLeg");
    var lleg = model.getPart("leftLeg");
     
    head.clear();
    head.setTextureOffset(0, 12);
    head.addBox(-4, -24, -4, 8, 8, 8);
 
    body.clear();
    body.setTextureOffset(0, 12);
    body.addBox(-4, -16, -2, 8, 12, 4);
 
    rarm.clear();
    rarm.setTextureOffset(0, 12);
    rarm.addBox(-1, -18, -2, 2, 30, 2);
    rarm.addBox(-1, 8, -16, 2, 2, 30);
    rarm.addBox(-3, 6, -19, 6, 6, 6);
 
    larm.clear();
    larm.setTextureOffset(0, 12);
    larm.addBox(-1,-18,-2, 2, 30, 2);
    larm.addBox(-1, 8, -16, 2, 2, 30);
    larm.addBox(-3, 6, -19, 6, 6, 6);
 
    rleg.clear();
    rleg.setTextureOffset(0, 12);
    rleg.addBox(-1, -18, 0, 2, 30, 2);
 
    lleg.clear();
    lleg.setTextureOffset(0, 12);
    lleg.addBox(-1, -18, 0, 2, 30, 2);
}

var EnderLordRenderType= Renderer.createHumanoidRenderer();
addEnderLordRenderType(EnderLordRenderType);

function addEnderArcherRenderType(renderer) 
{
    var model = renderer.getModel();
     
    var head = model.getPart("head");
    var body = model.getPart("body");
    var rarm = model.getPart("rightArm");
    var larm = model.getPart("leftArm");
    var rleg = model.getPart("rightLeg");
    var lleg = model.getPart("leftLeg");
     
    head.clear();
    head.setTextureOffset(0, 0);
    head.addBox(-4, -24, -4, 8, 8, 8);
 
    body.clear();
    body.setTextureOffset(0, 12);
    body.addBox(-4, -16, -2, 8, 12, 4);
 
    rarm.clear();
    rarm.setTextureOffset(0, 12);
    rarm.addBox(-1, -18, -2, 2, 30, 2);
 
    larm.clear();
    larm.setTextureOffset(0, 12);
    larm.addBox(-1,-18,-2, 2, 30, 2);
 
    rleg.clear();
    rleg.setTextureOffset(0, 12);
    rleg.addBox(-1, -18, 0, 2, 30, 2);
 
    lleg.clear();
    lleg.setTextureOffset(0, 12);
    lleg.addBox(-1, -18, 0, 2, 30, 2);
}

var EnderArcherRenderType= Renderer.createHumanoidRenderer();
addEnderArcherRenderType(EnderArcherRenderType);



function useItem(x, y, z, itemId, blockId, side)
{
if(itemId == 410){
setPosition(getPlayerEnt(), x, y+3, z);
}
if(itemId == 409){
Entity.setRenderType(getPlayerEnt(), 19);
Entity.setMobSkin(getPlayerEnt(),"mob/enderman.png");
Player.addItemInventory(409, -1);
}
if(itemId == 411){
Entity.setRenderType(getPlayerEnt(), EnderLordRenderType.renderType);
Player.setHealth(Entity.getHealth(Player.getEntity()) +300); 
Entity.setMobSkin(getPlayerEnt(),"mob/enderman.png");
Player.addItemInventory(411, -1);
}
if(itemId == 412){
Entity.setRenderType(getPlayerEnt(), 17);
Entity.setMobSkin(getPlayerEnt(),"mob/enderman.png");
Player.addItemInventory(412, -1);
}
if(itemId == 413){
Entity.setRenderType(getPlayerEnt(), 11);
Entity.setMobSkin(getPlayerEnt(),"mob/enderman.png");
Player.addItemInventory(413, -1);
}
if(itemId == 414){
Entity.setRenderType(getPlayerEnt(), 3);
Entity.setMobSkin(getPlayerEnt(),"mob/char.png");
Player.addItemInventory(414, -1);
}
if(itemId == 400){
ea = Level.spawnMob(x, y + 1, z, 34,"mob/enderman.png");
Entity.setHealth(ea, 100);
Entity.setCarriedItem(ea,261,1,0);
Entity.setRenderType(ea, EnderArcherRenderType.renderType );
Player.addItemInventory(400, -1);
}else if(itemId == 401){
ee = Level.spawnMob(x, y + 1, z, 33,"mob/enderman.png");
Entity.setHealth(ee, 100);
Entity.setCarriedItem(ee,276,1,0);
Entity.setRenderType(ee, 19);
Player.addItemInventory(401, -1);
}else if(itemId == 402){
ew = Level.spawnMob(x, y + 1, z, 32,"mob/enderman.png");
Entity.setHealth(ew, 100);
Entity.setCarriedItem(ew,267,1,0);
Entity.setRenderType(ew, 19);
Player.addItemInventory(402, -1);
}else if(itemId == 403){
ef = Level.spawnMob(x, y + 1, z, 35,"mob/enderman.png");
Entity.setHealth(ef, 100);
Entity.setCarriedItem(ef,276,1,0);
Entity.setRenderType(ef, 19);
Player.addItemInventory(403, -1);
}else if(itemId == 404){
ec = Level.spawnMob(x, y + 1, z, 33,"mob/enderman.png");
Entity.setHealth(ec, 100);
Player.addItemInventory(404, -1);
}else if(itemId == 405){
ev = Level.spawnMob(x, y + 1, z, 15,"mob/enderman.png");
Entity.setHealth(ev, 100);
Entity.setCarriedItem(ev, 276,1,0);
Entity.setRenderType(ev, 11);
Player.addItemInventory(405, -1);
}else if(itemId == 406){
fe = Level.spawnMob(x, y + 1, z, 11,"mob/enderman.png");
Entity.setHealth(fe, 100);
Entity.setCarriedItem(fe, 276,1,0);
Entity.setRenderType(fe, 19);
Player.addItemInventory(406, -1);
}else if(itemId == 407){
EnderLord = Level.spawnMob(x, y + 1, z, 38,"mob/enderman.png");
clientMessage("§7EnderLord: WHAT THE FUCK!");
Entity.setHealth(EnderLord, 355);
Entity.setCarriedItem(EnderLord,276,1,0);
Entity.setRenderType(EnderLord, EnderLordRenderType.renderType);
Entity.setNameTag(EnderLord, "EnderLord");
Player.addItemInventory(407, -1);
}
if(itemId == 408){
Player.addItemInventory(408, -1);
clientMessage("§5More Enderman Mod Made By Dantujont, §9This Mod Only Can Use On 0.9, §6It Has 8 Enderman, §8I Hope Like This Mod!");
addItemInventory(400,1);
addItemInventory(401,1);
addItemInventory(402,1);
addItemInventory(403,1);
addItemInventory(404,1);
addItemInventory(405,1);
addItemInventory(406,1);
addItemInventory(407,1);
addItemInventory(415,1);
}
{Item.addCraftRecipe(408,1,0,[265,2,0,5,3,0]);
Item.addCraftRecipe(409,1,0,[400,2,0]);
Item.addCraftRecipe(410,1,0,[407,1,0,280,2,0]);
Item.addCraftRecipe(411,1,0,[407,2,0]);
Item.addCraftRecipe(412,1,0,[404,2,0]);
Item.addCraftRecipe(413,1,0,[405,2,0]);
Item.addCraftRecipe(414,1,0,[265,3,0]);
}
if(itemId == 415){
eh = Level.spawnMob(x, y + 1, z, 14,"mob/enderman.png");
Entity.setHealth(eh, 20);
Entity.setRenderType(eh, 19);
Player.addItemInventory(415, -1);}
}
function newLevel(hasLevel)
{
var x = Player.getX();
var y = Player.getY();
var z = Player.getZ();
clientMessage("§3More Enderman Mod §6v1.5");
clientMessage("§8Craft The Start Kit To Start(§2Three Oak Planks §3And Two Iron §6Ingots");
clientMessage("§3Mod §4Made §5By §1Dantujont");}
