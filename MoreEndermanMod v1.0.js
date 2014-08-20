ModPE.setItem(400,"ender_eye",0,"Spawn Ender Archer");
ModPE.setItem(401,"ender_eye",0,"Spawn Explosive Enderman");
ModPE.setItem(402,"ender_eye",0,"Spawn Ender Warrior");
ModPE.setItem(403,"ender_eye",0,"Spawn Ender Fighter");
ModPE.setItem(404,"ender_eye",0,"Spawn Ender Creeper");
ModPE.setItem(405,"ender_eye",0,"Spawn Ender Villager");
ModPE.setItem(406,"ender_eye",0,"Spawn Friendly Enderman");
ModPE.setItem(407,"ender_eye",0,"Spawn EnderLord");
ModPE.setItem(408,"blaze_rod",0,"More Enderman Mod Start Kit");


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

function useItem(x, y, z, itemId, blockId, side)
{
if(itemId == 400){
ea = Level.spawnMob(x, y + 1, z, 34,"mob/enderman.png");
Entity.setHealth(ea, 100);
Entity.setCarriedItem(ea,261,1,0);
Entity.setRenderType(ea, 3);
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
Entity.setCarriedItem(ew,276,1,0);
Entity.setRenderType(ew, 3);
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
ev = Level.spawnMob(x, y + 1, z, 11,"mob/enderman.png");
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
EnderLord = Level.spawnMob(x, y + 1, z, 32,"mob/enderman.png");
clientMessage("§7EnderLord: WHAT THE FUCK!");
Entity.setHealth(EnderLord, 355);
Entity.setCarriedItem(EnderLord,276,1,0);
Entity.setRenderType(EnderLord, EnderLordRenderType.renderType);
Entity.setNameTag(EnderLord, "EnderLord [BOSS]");
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
}
{Item.addCraftRecipe(408,1,0,[265,2,0,5,3,0]);}
}
function newLevel(hasLevel)
{
var x = Player.getX();
var y = Player.getY();
var z = Player.getZ();
clientMessage("§3More Enderman Mod");
clientMessage("§8Craft The Start Kit To Start(§2Three Oak Planks And Two Iron §6Ingots");
clientMessage("§3Mod §4Made §5By §1Dantujont");}
