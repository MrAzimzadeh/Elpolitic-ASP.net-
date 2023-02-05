SELECT TOP (1000) [Id]
      ,[HeadText]
      ,[PhotoUrl]
      ,[Title]
      ,[PublishDate]
      ,[Location]
  FROM [ElpoliticDb].[dbo].[Events]

  INSERT INTO Events
  VALUES
  ('Technology' , 'polighbtic_04.jpg' , 'Integer sollicitudin metus' , '2023-05-02 11:44' ,'NY City, USA')
  