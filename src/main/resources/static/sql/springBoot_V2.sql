use productDB

CREATE TABLE producttype (
	producttypeid INT IDENTITY(1, 1) PRIMARY KEY NOT NULL, 
	producttypename VARCHAR(20) UNIQUE NOT NULL, 
)
INSERT INTO producttype VALUES
('-------·s¼W-------'),
('Beef'),
('Pork'),
('Seafood')



CREATE TABLE product (
	systemid INT NOT NULL IDENTITY(1, 1) PRIMARY KEY , 
	productid VARCHAR(14) NOT NULL, 
	producttype VARCHAR(20) NOT NULL, 
	productname NVARCHAR(100) NOT NULL, 
	productstock INT NOT NULL, 
	productcost NUMERIC(6, 1) NOT NULL, 
	productprice NUMERIC(6, 1) NOT NULL, 
	productimage VARCHAR(100) NOT NULL, 
	productdescription NVARCHAR(500) NOT NULL,
)

INSERT INTO product VALUES
('20220419183501',	'Beef', 	'Choice Angus Bone-In Standing Rib Roast (4-Bone)',						100,	10,		220,	'20220419183501.jpg',	''),
('20220419183502',	'Beef', 	'Choice Angus Bone In, Standing Rib Roast (7-Bone)',					100,	400,	299,	'20220419183502.jpg',	''),
('20220419183503',	'Beef', 	'USDA Prime Grade, Standing Rib Roast, Boneless (half of Rib, Netted)',	100,	420.5,	175,	'20220419183503.jpg',	''),
('20220419183504',	'Beef', 	'USDA Prime Grade, Standing Rib Roast, Boneless (Whole Rib, Netted)',	100,	500,	315,	'20220419183504.jpg',	''),
('20220419183505',	'Beef',		'USDA Choice Filet Steak',												100,	90,		100,	'20220419183505.jpg',	''),
('20220419183506',	'Beef',		'USDA Choice Ribeye Steak',												100,	60,		110,	'20220419183506.jpg',	''),
('20220419183507',	'Beef',		'USDA Prime Top Sirloin Steak (Thick Cut, Defatted)', 					100,	60,		39,		'20220419183507.jpg',	''),
('20220419183508',	'Beef',		'Gourmet Blend Premium Hamburger Patty, 3/1',							100,	60,		28,		'20220419183508.jpg',	''),
('20220419183509',	'Beef',		'Cape Grim, All Natural, Grass Fed, Hamburger Patty, 3/1',				100,	60,		25,		'20220419183509.jpg',	''),
('20220419183510',	'Beef',		'USDA Choice Angus Tri Tip, Defatted',									100,	60,		64,		'20220419183510.jpg',	''),
('20220419183511',	'Beef',		'Filet Mignon Brochette',												100,	60,		49,		'20220419183511.jpg',	''),
('20220419183512',	'Pork',		'Nueske Applewood Smoked, Spiral Sliced, Bone In Ham',					80,		60.5,	109.9,	'20220419183512.jpg',	''),
('20220419183513',	'Pork',		'Nueske Premium Applewood Smoked Bacon (5# Bulk)',						80,		60.5,	62,		'20220419183513.jpg',	''),
('20220419183514',	'Pork',		'Compart Duroc Pork Spareribs Rack ¡§St. Louis Style¡¨',				80,		60.5,	55,		'20220419183514.jpg',	''),
('20220419183515',	'Pork',		'Competition Grade BBQ, Compart Duroc Pork Back Ribs',					80,		60.5,	62,		'20220419183515.jpg',	''),
('20220419183516',	'Pork',		'Competition Grade BBQ, Compart Duroc Boneless Pork Butt',				80,		60.5,	35,		'20220419183516.jpg',	''),
('20220419183517',	'Pork',		'Competition Grade BBQ, Compart Duroc Bone In Pork Butt',				80,		60.5,	39,		'20220419183517.jpg',	''),
('20220419183518',	'Pork',		'Bone In Pork Chop',													80,		60.5,	55,		'20220419183518.jpg',	''),
('20220419183519',	'Seafood',	'Shrimp, Tail On, Raw',													80,		26,		26,		'20220419183519.jpg',	''),
('20220419183520',	'Seafood',	'Norwegian Salmon Filet 8oz (10# Case)',								80,		60.5,	130,	'20220419183520.jpg',	''),
('20220419183521',	'Seafood',	'Wild Caught Alaskan Halibut / Norwegian Salmon Combo Case',			80,		60.5,	89.9,	'20220419183521.jpg',	''),
('20220419183522',	'Seafood',	'Wild Caught, Alaskan Halibut 6oz Portions (10# Case)',					80,		60.5,	229,	'20220419183522.jpg',	''),
('20220419183523',	'Seafood',	'Mahi ¡V Mahi Filet, 6oz',												80,		60.5,	79,		'20220419183523.jpg',	'')


select * from product ORDER BY productid
select * from ProductType ORDER BY producttypeid



drop table product 
drop table ProductType 
