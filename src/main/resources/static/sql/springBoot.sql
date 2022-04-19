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
	productid INT NOT NULL IDENTITY(1, 1) PRIMARY KEY , 
	producttype VARCHAR(20) NOT NULL, 
	productname NVARCHAR(100) NOT NULL, 
	productstock INT NOT NULL, 
	productcost NUMERIC(6, 1) NOT NULL, 
	productprice NUMERIC(6, 1) NOT NULL, 
	productimage VARCHAR(100) NOT NULL, 
	productdescription NVARCHAR(500) NOT NULL,
)

INSERT INTO product VALUES
('Beef', 	'Choice Angus Bone-In Standing Rib Roast (4-Bone)',						100,	10,		220,	'1.jpg',	''),
('Beef', 	'Choice Angus Bone In, Standing Rib Roast (7-Bone)',					100,	400,	299,	'2.jpg',	''),
('Beef', 	'USDA Prime Grade, Standing Rib Roast, Boneless (half of Rib, Netted)',	100,	420.5,	175,	'3.jpg',	''),
('Beef', 	'USDA Prime Grade, Standing Rib Roast, Boneless (Whole Rib, Netted)',	100,	500,	315,	'4.jpg',	''),
('Beef',	'USDA Choice Filet Steak',												100,	90,		100,	'5.jpg',	''),
('Beef',	'USDA Choice Ribeye Steak',												100,	60,		110,	'6.jpg',	''),
('Beef',	'USDA Prime Top Sirloin Steak (Thick Cut, Defatted)', 					100,	60,		39,		'7.jpg',	''),
('Beef',	'Gourmet Blend Premium Hamburger Patty, 3/1',							100,	60,		28,		'8.jpg',	''),
('Beef',	'Cape Grim, All Natural, Grass Fed, Hamburger Patty, 3/1',				100,	60,		25,		'9.jpg',	''),
('Beef',	'USDA Choice Angus Tri Tip, Defatted',									100,	60,		64,		'10.jpg',	''),
('Beef',	'Filet Mignon Brochette',												100,	60,		49,		'11.jpg',	''),
('Pork',	'Nueske Applewood Smoked, Spiral Sliced, Bone In Ham',					80,		60.5,	109.9,	'12.jpg',	''),
('Pork',	'Nueske Premium Applewood Smoked Bacon (5# Bulk)',						80,		60.5,	62,		'13.jpg',	''),
('Pork',	'Compart Duroc Pork Spareribs Rack ¡§St. Louis Style¡¨',				80,		60.5,	55,		'14.jpg',	''),
('Pork',	'Competition Grade BBQ, Compart Duroc Pork Back Ribs',					80,		60.5,	62,		'15.jpg',	''),
('Pork',	'Competition Grade BBQ, Compart Duroc Boneless Pork Butt',				80,		60.5,	35,		'16.jpg',	''),
('Pork',	'Competition Grade BBQ, Compart Duroc Bone In Pork Butt',				80,		60.5,	39,		'17.jpg',	''),
('Pork',	'Bone In Pork Chop',													80,		60.5,	55,		'18.jpg',	''),
('Seafood',	'Shrimp, Tail On, Raw',													80,		26,		26,		'19.jpg',	''),
('Seafood',	'Norwegian Salmon Filet 8oz (10# Case)',								80,		60.5,	130,	'20.jpg',	''),
('Seafood',	'Wild Caught Alaskan Halibut / Norwegian Salmon Combo Case',			80,		60.5,	89.9,	'21.jpg',	''),
('Seafood',	'Wild Caught, Alaskan Halibut 6oz Portions (10# Case)',					80,		60.5,	229,	'22.jpg',	''),
('Seafood',	'Mahi ¡V Mahi Filet, 6oz',												80,		60.5,	79,		'23.jpg',	'')


select * from product ORDER BY productid
select * from ProductType ORDER BY producttypeid



drop table product 
drop table ProductType 
