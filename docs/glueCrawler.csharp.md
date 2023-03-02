# `glueCrawler` Submodule <a name="`glueCrawler` Submodule" id="@cdktf/provider-aws.glueCrawler"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GlueCrawler <a name="GlueCrawler" id="@cdktf/provider-aws.glueCrawler.GlueCrawler"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler aws_glue_crawler}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new GlueCrawler(Construct Scope, string Id, GlueCrawlerConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerConfig">GlueCrawlerConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerConfig">GlueCrawlerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.putCatalogTarget">PutCatalogTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.putDeltaTarget">PutDeltaTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.putDynamodbTarget">PutDynamodbTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.putJdbcTarget">PutJdbcTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.putLakeFormationConfiguration">PutLakeFormationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.putLineageConfiguration">PutLineageConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.putMongodbTarget">PutMongodbTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.putRecrawlPolicy">PutRecrawlPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.putS3Target">PutS3Target</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.putSchemaChangePolicy">PutSchemaChangePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.resetCatalogTarget">ResetCatalogTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.resetClassifiers">ResetClassifiers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.resetConfiguration">ResetConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.resetDeltaTarget">ResetDeltaTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.resetDynamodbTarget">ResetDynamodbTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.resetJdbcTarget">ResetJdbcTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.resetLakeFormationConfiguration">ResetLakeFormationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.resetLineageConfiguration">ResetLineageConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.resetMongodbTarget">ResetMongodbTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.resetRecrawlPolicy">ResetRecrawlPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.resetS3Target">ResetS3Target</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.resetSchedule">ResetSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.resetSchemaChangePolicy">ResetSchemaChangePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.resetSecurityConfiguration">ResetSecurityConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.resetTablePrefix">ResetTablePrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.resetTagsAll">ResetTagsAll</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutCatalogTarget` <a name="PutCatalogTarget" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.putCatalogTarget"></a>

```csharp
private void PutCatalogTarget(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.putCatalogTarget.parameter.value"></a>

- *Type:* object

---

##### `PutDeltaTarget` <a name="PutDeltaTarget" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.putDeltaTarget"></a>

```csharp
private void PutDeltaTarget(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.putDeltaTarget.parameter.value"></a>

- *Type:* object

---

##### `PutDynamodbTarget` <a name="PutDynamodbTarget" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.putDynamodbTarget"></a>

```csharp
private void PutDynamodbTarget(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.putDynamodbTarget.parameter.value"></a>

- *Type:* object

---

##### `PutJdbcTarget` <a name="PutJdbcTarget" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.putJdbcTarget"></a>

```csharp
private void PutJdbcTarget(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.putJdbcTarget.parameter.value"></a>

- *Type:* object

---

##### `PutLakeFormationConfiguration` <a name="PutLakeFormationConfiguration" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.putLakeFormationConfiguration"></a>

```csharp
private void PutLakeFormationConfiguration(GlueCrawlerLakeFormationConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.putLakeFormationConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfiguration">GlueCrawlerLakeFormationConfiguration</a>

---

##### `PutLineageConfiguration` <a name="PutLineageConfiguration" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.putLineageConfiguration"></a>

```csharp
private void PutLineageConfiguration(GlueCrawlerLineageConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.putLineageConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfiguration">GlueCrawlerLineageConfiguration</a>

---

##### `PutMongodbTarget` <a name="PutMongodbTarget" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.putMongodbTarget"></a>

```csharp
private void PutMongodbTarget(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.putMongodbTarget.parameter.value"></a>

- *Type:* object

---

##### `PutRecrawlPolicy` <a name="PutRecrawlPolicy" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.putRecrawlPolicy"></a>

```csharp
private void PutRecrawlPolicy(GlueCrawlerRecrawlPolicy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.putRecrawlPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicy">GlueCrawlerRecrawlPolicy</a>

---

##### `PutS3Target` <a name="PutS3Target" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.putS3Target"></a>

```csharp
private void PutS3Target(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.putS3Target.parameter.value"></a>

- *Type:* object

---

##### `PutSchemaChangePolicy` <a name="PutSchemaChangePolicy" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.putSchemaChangePolicy"></a>

```csharp
private void PutSchemaChangePolicy(GlueCrawlerSchemaChangePolicy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.putSchemaChangePolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicy">GlueCrawlerSchemaChangePolicy</a>

---

##### `ResetCatalogTarget` <a name="ResetCatalogTarget" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.resetCatalogTarget"></a>

```csharp
private void ResetCatalogTarget()
```

##### `ResetClassifiers` <a name="ResetClassifiers" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.resetClassifiers"></a>

```csharp
private void ResetClassifiers()
```

##### `ResetConfiguration` <a name="ResetConfiguration" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.resetConfiguration"></a>

```csharp
private void ResetConfiguration()
```

##### `ResetDeltaTarget` <a name="ResetDeltaTarget" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.resetDeltaTarget"></a>

```csharp
private void ResetDeltaTarget()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDynamodbTarget` <a name="ResetDynamodbTarget" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.resetDynamodbTarget"></a>

```csharp
private void ResetDynamodbTarget()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetJdbcTarget` <a name="ResetJdbcTarget" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.resetJdbcTarget"></a>

```csharp
private void ResetJdbcTarget()
```

##### `ResetLakeFormationConfiguration` <a name="ResetLakeFormationConfiguration" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.resetLakeFormationConfiguration"></a>

```csharp
private void ResetLakeFormationConfiguration()
```

##### `ResetLineageConfiguration` <a name="ResetLineageConfiguration" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.resetLineageConfiguration"></a>

```csharp
private void ResetLineageConfiguration()
```

##### `ResetMongodbTarget` <a name="ResetMongodbTarget" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.resetMongodbTarget"></a>

```csharp
private void ResetMongodbTarget()
```

##### `ResetRecrawlPolicy` <a name="ResetRecrawlPolicy" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.resetRecrawlPolicy"></a>

```csharp
private void ResetRecrawlPolicy()
```

##### `ResetS3Target` <a name="ResetS3Target" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.resetS3Target"></a>

```csharp
private void ResetS3Target()
```

##### `ResetSchedule` <a name="ResetSchedule" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.resetSchedule"></a>

```csharp
private void ResetSchedule()
```

##### `ResetSchemaChangePolicy` <a name="ResetSchemaChangePolicy" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.resetSchemaChangePolicy"></a>

```csharp
private void ResetSchemaChangePolicy()
```

##### `ResetSecurityConfiguration` <a name="ResetSecurityConfiguration" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.resetSecurityConfiguration"></a>

```csharp
private void ResetSecurityConfiguration()
```

##### `ResetTablePrefix` <a name="ResetTablePrefix" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.resetTablePrefix"></a>

```csharp
private void ResetTablePrefix()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

GlueCrawler.IsConstruct(object X);
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

GlueCrawler.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

GlueCrawler.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.property.catalogTarget">CatalogTarget</a></code> | <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetList">GlueCrawlerCatalogTargetList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.property.deltaTarget">DeltaTarget</a></code> | <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetList">GlueCrawlerDeltaTargetList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.property.dynamodbTarget">DynamodbTarget</a></code> | <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetList">GlueCrawlerDynamodbTargetList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.property.jdbcTarget">JdbcTarget</a></code> | <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetList">GlueCrawlerJdbcTargetList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.property.lakeFormationConfiguration">LakeFormationConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference">GlueCrawlerLakeFormationConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.property.lineageConfiguration">LineageConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfigurationOutputReference">GlueCrawlerLineageConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.property.mongodbTarget">MongodbTarget</a></code> | <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetList">GlueCrawlerMongodbTargetList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.property.recrawlPolicy">RecrawlPolicy</a></code> | <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference">GlueCrawlerRecrawlPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.property.s3Target">S3Target</a></code> | <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetList">GlueCrawlerS3TargetList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.property.schemaChangePolicy">SchemaChangePolicy</a></code> | <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference">GlueCrawlerSchemaChangePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.property.catalogTargetInput">CatalogTargetInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.property.classifiersInput">ClassifiersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.property.configurationInput">ConfigurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.property.databaseNameInput">DatabaseNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.property.deltaTargetInput">DeltaTargetInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.property.dynamodbTargetInput">DynamodbTargetInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.property.jdbcTargetInput">JdbcTargetInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.property.lakeFormationConfigurationInput">LakeFormationConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfiguration">GlueCrawlerLakeFormationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.property.lineageConfigurationInput">LineageConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfiguration">GlueCrawlerLineageConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.property.mongodbTargetInput">MongodbTargetInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.property.recrawlPolicyInput">RecrawlPolicyInput</a></code> | <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicy">GlueCrawlerRecrawlPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.property.roleInput">RoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.property.s3TargetInput">S3TargetInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.property.scheduleInput">ScheduleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.property.schemaChangePolicyInput">SchemaChangePolicyInput</a></code> | <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicy">GlueCrawlerSchemaChangePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.property.securityConfigurationInput">SecurityConfigurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.property.tablePrefixInput">TablePrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.property.classifiers">Classifiers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.property.configuration">Configuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.property.databaseName">DatabaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.property.role">Role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.property.schedule">Schedule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.property.securityConfiguration">SecurityConfiguration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.property.tablePrefix">TablePrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `CatalogTarget`<sup>Required</sup> <a name="CatalogTarget" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.property.catalogTarget"></a>

```csharp
public GlueCrawlerCatalogTargetList CatalogTarget { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetList">GlueCrawlerCatalogTargetList</a>

---

##### `DeltaTarget`<sup>Required</sup> <a name="DeltaTarget" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.property.deltaTarget"></a>

```csharp
public GlueCrawlerDeltaTargetList DeltaTarget { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetList">GlueCrawlerDeltaTargetList</a>

---

##### `DynamodbTarget`<sup>Required</sup> <a name="DynamodbTarget" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.property.dynamodbTarget"></a>

```csharp
public GlueCrawlerDynamodbTargetList DynamodbTarget { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetList">GlueCrawlerDynamodbTargetList</a>

---

##### `JdbcTarget`<sup>Required</sup> <a name="JdbcTarget" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.property.jdbcTarget"></a>

```csharp
public GlueCrawlerJdbcTargetList JdbcTarget { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetList">GlueCrawlerJdbcTargetList</a>

---

##### `LakeFormationConfiguration`<sup>Required</sup> <a name="LakeFormationConfiguration" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.property.lakeFormationConfiguration"></a>

```csharp
public GlueCrawlerLakeFormationConfigurationOutputReference LakeFormationConfiguration { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference">GlueCrawlerLakeFormationConfigurationOutputReference</a>

---

##### `LineageConfiguration`<sup>Required</sup> <a name="LineageConfiguration" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.property.lineageConfiguration"></a>

```csharp
public GlueCrawlerLineageConfigurationOutputReference LineageConfiguration { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfigurationOutputReference">GlueCrawlerLineageConfigurationOutputReference</a>

---

##### `MongodbTarget`<sup>Required</sup> <a name="MongodbTarget" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.property.mongodbTarget"></a>

```csharp
public GlueCrawlerMongodbTargetList MongodbTarget { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetList">GlueCrawlerMongodbTargetList</a>

---

##### `RecrawlPolicy`<sup>Required</sup> <a name="RecrawlPolicy" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.property.recrawlPolicy"></a>

```csharp
public GlueCrawlerRecrawlPolicyOutputReference RecrawlPolicy { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference">GlueCrawlerRecrawlPolicyOutputReference</a>

---

##### `S3Target`<sup>Required</sup> <a name="S3Target" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.property.s3Target"></a>

```csharp
public GlueCrawlerS3TargetList S3Target { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetList">GlueCrawlerS3TargetList</a>

---

##### `SchemaChangePolicy`<sup>Required</sup> <a name="SchemaChangePolicy" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.property.schemaChangePolicy"></a>

```csharp
public GlueCrawlerSchemaChangePolicyOutputReference SchemaChangePolicy { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference">GlueCrawlerSchemaChangePolicyOutputReference</a>

---

##### `CatalogTargetInput`<sup>Optional</sup> <a name="CatalogTargetInput" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.property.catalogTargetInput"></a>

```csharp
public object CatalogTargetInput { get; }
```

- *Type:* object

---

##### `ClassifiersInput`<sup>Optional</sup> <a name="ClassifiersInput" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.property.classifiersInput"></a>

```csharp
public string[] ClassifiersInput { get; }
```

- *Type:* string[]

---

##### `ConfigurationInput`<sup>Optional</sup> <a name="ConfigurationInput" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.property.configurationInput"></a>

```csharp
public string ConfigurationInput { get; }
```

- *Type:* string

---

##### `DatabaseNameInput`<sup>Optional</sup> <a name="DatabaseNameInput" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.property.databaseNameInput"></a>

```csharp
public string DatabaseNameInput { get; }
```

- *Type:* string

---

##### `DeltaTargetInput`<sup>Optional</sup> <a name="DeltaTargetInput" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.property.deltaTargetInput"></a>

```csharp
public object DeltaTargetInput { get; }
```

- *Type:* object

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DynamodbTargetInput`<sup>Optional</sup> <a name="DynamodbTargetInput" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.property.dynamodbTargetInput"></a>

```csharp
public object DynamodbTargetInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `JdbcTargetInput`<sup>Optional</sup> <a name="JdbcTargetInput" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.property.jdbcTargetInput"></a>

```csharp
public object JdbcTargetInput { get; }
```

- *Type:* object

---

##### `LakeFormationConfigurationInput`<sup>Optional</sup> <a name="LakeFormationConfigurationInput" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.property.lakeFormationConfigurationInput"></a>

```csharp
public GlueCrawlerLakeFormationConfiguration LakeFormationConfigurationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfiguration">GlueCrawlerLakeFormationConfiguration</a>

---

##### `LineageConfigurationInput`<sup>Optional</sup> <a name="LineageConfigurationInput" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.property.lineageConfigurationInput"></a>

```csharp
public GlueCrawlerLineageConfiguration LineageConfigurationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfiguration">GlueCrawlerLineageConfiguration</a>

---

##### `MongodbTargetInput`<sup>Optional</sup> <a name="MongodbTargetInput" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.property.mongodbTargetInput"></a>

```csharp
public object MongodbTargetInput { get; }
```

- *Type:* object

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RecrawlPolicyInput`<sup>Optional</sup> <a name="RecrawlPolicyInput" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.property.recrawlPolicyInput"></a>

```csharp
public GlueCrawlerRecrawlPolicy RecrawlPolicyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicy">GlueCrawlerRecrawlPolicy</a>

---

##### `RoleInput`<sup>Optional</sup> <a name="RoleInput" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.property.roleInput"></a>

```csharp
public string RoleInput { get; }
```

- *Type:* string

---

##### `S3TargetInput`<sup>Optional</sup> <a name="S3TargetInput" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.property.s3TargetInput"></a>

```csharp
public object S3TargetInput { get; }
```

- *Type:* object

---

##### `ScheduleInput`<sup>Optional</sup> <a name="ScheduleInput" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.property.scheduleInput"></a>

```csharp
public string ScheduleInput { get; }
```

- *Type:* string

---

##### `SchemaChangePolicyInput`<sup>Optional</sup> <a name="SchemaChangePolicyInput" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.property.schemaChangePolicyInput"></a>

```csharp
public GlueCrawlerSchemaChangePolicy SchemaChangePolicyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicy">GlueCrawlerSchemaChangePolicy</a>

---

##### `SecurityConfigurationInput`<sup>Optional</sup> <a name="SecurityConfigurationInput" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.property.securityConfigurationInput"></a>

```csharp
public string SecurityConfigurationInput { get; }
```

- *Type:* string

---

##### `TablePrefixInput`<sup>Optional</sup> <a name="TablePrefixInput" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.property.tablePrefixInput"></a>

```csharp
public string TablePrefixInput { get; }
```

- *Type:* string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Classifiers`<sup>Required</sup> <a name="Classifiers" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.property.classifiers"></a>

```csharp
public string[] Classifiers { get; }
```

- *Type:* string[]

---

##### `Configuration`<sup>Required</sup> <a name="Configuration" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.property.configuration"></a>

```csharp
public string Configuration { get; }
```

- *Type:* string

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.property.databaseName"></a>

```csharp
public string DatabaseName { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.property.role"></a>

```csharp
public string Role { get; }
```

- *Type:* string

---

##### `Schedule`<sup>Required</sup> <a name="Schedule" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.property.schedule"></a>

```csharp
public string Schedule { get; }
```

- *Type:* string

---

##### `SecurityConfiguration`<sup>Required</sup> <a name="SecurityConfiguration" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.property.securityConfiguration"></a>

```csharp
public string SecurityConfiguration { get; }
```

- *Type:* string

---

##### `TablePrefix`<sup>Required</sup> <a name="TablePrefix" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.property.tablePrefix"></a>

```csharp
public string TablePrefix { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawler.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.glueCrawler.GlueCrawler.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GlueCrawlerCatalogTarget <a name="GlueCrawlerCatalogTarget" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTarget.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new GlueCrawlerCatalogTarget {
    string DatabaseName,
    string[] Tables,
    string ConnectionName = null,
    string DlqEventQueueArn = null,
    string EventQueueArn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTarget.property.databaseName">DatabaseName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#database_name GlueCrawler#database_name}. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTarget.property.tables">Tables</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#tables GlueCrawler#tables}. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTarget.property.connectionName">ConnectionName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#connection_name GlueCrawler#connection_name}. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTarget.property.dlqEventQueueArn">DlqEventQueueArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#dlq_event_queue_arn GlueCrawler#dlq_event_queue_arn}. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTarget.property.eventQueueArn">EventQueueArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#event_queue_arn GlueCrawler#event_queue_arn}. |

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTarget.property.databaseName"></a>

```csharp
public string DatabaseName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#database_name GlueCrawler#database_name}.

---

##### `Tables`<sup>Required</sup> <a name="Tables" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTarget.property.tables"></a>

```csharp
public string[] Tables { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#tables GlueCrawler#tables}.

---

##### `ConnectionName`<sup>Optional</sup> <a name="ConnectionName" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTarget.property.connectionName"></a>

```csharp
public string ConnectionName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#connection_name GlueCrawler#connection_name}.

---

##### `DlqEventQueueArn`<sup>Optional</sup> <a name="DlqEventQueueArn" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTarget.property.dlqEventQueueArn"></a>

```csharp
public string DlqEventQueueArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#dlq_event_queue_arn GlueCrawler#dlq_event_queue_arn}.

---

##### `EventQueueArn`<sup>Optional</sup> <a name="EventQueueArn" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTarget.property.eventQueueArn"></a>

```csharp
public string EventQueueArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#event_queue_arn GlueCrawler#event_queue_arn}.

---

### GlueCrawlerConfig <a name="GlueCrawlerConfig" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new GlueCrawlerConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string DatabaseName,
    string Name,
    string Role,
    object CatalogTarget = null,
    string[] Classifiers = null,
    string Configuration = null,
    object DeltaTarget = null,
    string Description = null,
    object DynamodbTarget = null,
    string Id = null,
    object JdbcTarget = null,
    GlueCrawlerLakeFormationConfiguration LakeFormationConfiguration = null,
    GlueCrawlerLineageConfiguration LineageConfiguration = null,
    object MongodbTarget = null,
    GlueCrawlerRecrawlPolicy RecrawlPolicy = null,
    object S3Target = null,
    string Schedule = null,
    GlueCrawlerSchemaChangePolicy SchemaChangePolicy = null,
    string SecurityConfiguration = null,
    string TablePrefix = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerConfig.property.databaseName">DatabaseName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#database_name GlueCrawler#database_name}. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#name GlueCrawler#name}. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerConfig.property.role">Role</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#role GlueCrawler#role}. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerConfig.property.catalogTarget">CatalogTarget</a></code> | <code>object</code> | catalog_target block. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerConfig.property.classifiers">Classifiers</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#classifiers GlueCrawler#classifiers}. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerConfig.property.configuration">Configuration</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#configuration GlueCrawler#configuration}. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerConfig.property.deltaTarget">DeltaTarget</a></code> | <code>object</code> | delta_target block. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#description GlueCrawler#description}. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerConfig.property.dynamodbTarget">DynamodbTarget</a></code> | <code>object</code> | dynamodb_target block. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#id GlueCrawler#id}. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerConfig.property.jdbcTarget">JdbcTarget</a></code> | <code>object</code> | jdbc_target block. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerConfig.property.lakeFormationConfiguration">LakeFormationConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfiguration">GlueCrawlerLakeFormationConfiguration</a></code> | lake_formation_configuration block. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerConfig.property.lineageConfiguration">LineageConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfiguration">GlueCrawlerLineageConfiguration</a></code> | lineage_configuration block. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerConfig.property.mongodbTarget">MongodbTarget</a></code> | <code>object</code> | mongodb_target block. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerConfig.property.recrawlPolicy">RecrawlPolicy</a></code> | <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicy">GlueCrawlerRecrawlPolicy</a></code> | recrawl_policy block. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerConfig.property.s3Target">S3Target</a></code> | <code>object</code> | s3_target block. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerConfig.property.schedule">Schedule</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#schedule GlueCrawler#schedule}. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerConfig.property.schemaChangePolicy">SchemaChangePolicy</a></code> | <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicy">GlueCrawlerSchemaChangePolicy</a></code> | schema_change_policy block. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerConfig.property.securityConfiguration">SecurityConfiguration</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#security_configuration GlueCrawler#security_configuration}. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerConfig.property.tablePrefix">TablePrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#table_prefix GlueCrawler#table_prefix}. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#tags GlueCrawler#tags}. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#tags_all GlueCrawler#tags_all}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerConfig.property.databaseName"></a>

```csharp
public string DatabaseName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#database_name GlueCrawler#database_name}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#name GlueCrawler#name}.

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerConfig.property.role"></a>

```csharp
public string Role { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#role GlueCrawler#role}.

---

##### `CatalogTarget`<sup>Optional</sup> <a name="CatalogTarget" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerConfig.property.catalogTarget"></a>

```csharp
public object CatalogTarget { get; set; }
```

- *Type:* object

catalog_target block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#catalog_target GlueCrawler#catalog_target}

---

##### `Classifiers`<sup>Optional</sup> <a name="Classifiers" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerConfig.property.classifiers"></a>

```csharp
public string[] Classifiers { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#classifiers GlueCrawler#classifiers}.

---

##### `Configuration`<sup>Optional</sup> <a name="Configuration" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerConfig.property.configuration"></a>

```csharp
public string Configuration { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#configuration GlueCrawler#configuration}.

---

##### `DeltaTarget`<sup>Optional</sup> <a name="DeltaTarget" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerConfig.property.deltaTarget"></a>

```csharp
public object DeltaTarget { get; set; }
```

- *Type:* object

delta_target block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#delta_target GlueCrawler#delta_target}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#description GlueCrawler#description}.

---

##### `DynamodbTarget`<sup>Optional</sup> <a name="DynamodbTarget" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerConfig.property.dynamodbTarget"></a>

```csharp
public object DynamodbTarget { get; set; }
```

- *Type:* object

dynamodb_target block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#dynamodb_target GlueCrawler#dynamodb_target}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#id GlueCrawler#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `JdbcTarget`<sup>Optional</sup> <a name="JdbcTarget" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerConfig.property.jdbcTarget"></a>

```csharp
public object JdbcTarget { get; set; }
```

- *Type:* object

jdbc_target block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#jdbc_target GlueCrawler#jdbc_target}

---

##### `LakeFormationConfiguration`<sup>Optional</sup> <a name="LakeFormationConfiguration" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerConfig.property.lakeFormationConfiguration"></a>

```csharp
public GlueCrawlerLakeFormationConfiguration LakeFormationConfiguration { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfiguration">GlueCrawlerLakeFormationConfiguration</a>

lake_formation_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#lake_formation_configuration GlueCrawler#lake_formation_configuration}

---

##### `LineageConfiguration`<sup>Optional</sup> <a name="LineageConfiguration" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerConfig.property.lineageConfiguration"></a>

```csharp
public GlueCrawlerLineageConfiguration LineageConfiguration { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfiguration">GlueCrawlerLineageConfiguration</a>

lineage_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#lineage_configuration GlueCrawler#lineage_configuration}

---

##### `MongodbTarget`<sup>Optional</sup> <a name="MongodbTarget" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerConfig.property.mongodbTarget"></a>

```csharp
public object MongodbTarget { get; set; }
```

- *Type:* object

mongodb_target block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#mongodb_target GlueCrawler#mongodb_target}

---

##### `RecrawlPolicy`<sup>Optional</sup> <a name="RecrawlPolicy" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerConfig.property.recrawlPolicy"></a>

```csharp
public GlueCrawlerRecrawlPolicy RecrawlPolicy { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicy">GlueCrawlerRecrawlPolicy</a>

recrawl_policy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#recrawl_policy GlueCrawler#recrawl_policy}

---

##### `S3Target`<sup>Optional</sup> <a name="S3Target" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerConfig.property.s3Target"></a>

```csharp
public object S3Target { get; set; }
```

- *Type:* object

s3_target block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#s3_target GlueCrawler#s3_target}

---

##### `Schedule`<sup>Optional</sup> <a name="Schedule" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerConfig.property.schedule"></a>

```csharp
public string Schedule { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#schedule GlueCrawler#schedule}.

---

##### `SchemaChangePolicy`<sup>Optional</sup> <a name="SchemaChangePolicy" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerConfig.property.schemaChangePolicy"></a>

```csharp
public GlueCrawlerSchemaChangePolicy SchemaChangePolicy { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicy">GlueCrawlerSchemaChangePolicy</a>

schema_change_policy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#schema_change_policy GlueCrawler#schema_change_policy}

---

##### `SecurityConfiguration`<sup>Optional</sup> <a name="SecurityConfiguration" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerConfig.property.securityConfiguration"></a>

```csharp
public string SecurityConfiguration { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#security_configuration GlueCrawler#security_configuration}.

---

##### `TablePrefix`<sup>Optional</sup> <a name="TablePrefix" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerConfig.property.tablePrefix"></a>

```csharp
public string TablePrefix { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#table_prefix GlueCrawler#table_prefix}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#tags GlueCrawler#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#tags_all GlueCrawler#tags_all}.

---

### GlueCrawlerDeltaTarget <a name="GlueCrawlerDeltaTarget" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTarget.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new GlueCrawlerDeltaTarget {
    string[] DeltaTables,
    object WriteManifest,
    string ConnectionName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTarget.property.deltaTables">DeltaTables</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#delta_tables GlueCrawler#delta_tables}. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTarget.property.writeManifest">WriteManifest</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#write_manifest GlueCrawler#write_manifest}. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTarget.property.connectionName">ConnectionName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#connection_name GlueCrawler#connection_name}. |

---

##### `DeltaTables`<sup>Required</sup> <a name="DeltaTables" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTarget.property.deltaTables"></a>

```csharp
public string[] DeltaTables { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#delta_tables GlueCrawler#delta_tables}.

---

##### `WriteManifest`<sup>Required</sup> <a name="WriteManifest" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTarget.property.writeManifest"></a>

```csharp
public object WriteManifest { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#write_manifest GlueCrawler#write_manifest}.

---

##### `ConnectionName`<sup>Optional</sup> <a name="ConnectionName" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTarget.property.connectionName"></a>

```csharp
public string ConnectionName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#connection_name GlueCrawler#connection_name}.

---

### GlueCrawlerDynamodbTarget <a name="GlueCrawlerDynamodbTarget" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTarget.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new GlueCrawlerDynamodbTarget {
    string Path,
    object ScanAll = null,
    double ScanRate = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTarget.property.path">Path</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#path GlueCrawler#path}. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTarget.property.scanAll">ScanAll</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#scan_all GlueCrawler#scan_all}. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTarget.property.scanRate">ScanRate</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#scan_rate GlueCrawler#scan_rate}. |

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTarget.property.path"></a>

```csharp
public string Path { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#path GlueCrawler#path}.

---

##### `ScanAll`<sup>Optional</sup> <a name="ScanAll" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTarget.property.scanAll"></a>

```csharp
public object ScanAll { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#scan_all GlueCrawler#scan_all}.

---

##### `ScanRate`<sup>Optional</sup> <a name="ScanRate" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTarget.property.scanRate"></a>

```csharp
public double ScanRate { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#scan_rate GlueCrawler#scan_rate}.

---

### GlueCrawlerJdbcTarget <a name="GlueCrawlerJdbcTarget" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTarget.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new GlueCrawlerJdbcTarget {
    string ConnectionName,
    string Path,
    string[] EnableAdditionalMetadata = null,
    string[] Exclusions = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTarget.property.connectionName">ConnectionName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#connection_name GlueCrawler#connection_name}. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTarget.property.path">Path</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#path GlueCrawler#path}. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTarget.property.enableAdditionalMetadata">EnableAdditionalMetadata</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#enable_additional_metadata GlueCrawler#enable_additional_metadata}. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTarget.property.exclusions">Exclusions</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#exclusions GlueCrawler#exclusions}. |

---

##### `ConnectionName`<sup>Required</sup> <a name="ConnectionName" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTarget.property.connectionName"></a>

```csharp
public string ConnectionName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#connection_name GlueCrawler#connection_name}.

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTarget.property.path"></a>

```csharp
public string Path { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#path GlueCrawler#path}.

---

##### `EnableAdditionalMetadata`<sup>Optional</sup> <a name="EnableAdditionalMetadata" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTarget.property.enableAdditionalMetadata"></a>

```csharp
public string[] EnableAdditionalMetadata { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#enable_additional_metadata GlueCrawler#enable_additional_metadata}.

---

##### `Exclusions`<sup>Optional</sup> <a name="Exclusions" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTarget.property.exclusions"></a>

```csharp
public string[] Exclusions { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#exclusions GlueCrawler#exclusions}.

---

### GlueCrawlerLakeFormationConfiguration <a name="GlueCrawlerLakeFormationConfiguration" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new GlueCrawlerLakeFormationConfiguration {
    string AccountId = null,
    object UseLakeFormationCredentials = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfiguration.property.accountId">AccountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#account_id GlueCrawler#account_id}. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfiguration.property.useLakeFormationCredentials">UseLakeFormationCredentials</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#use_lake_formation_credentials GlueCrawler#use_lake_formation_credentials}. |

---

##### `AccountId`<sup>Optional</sup> <a name="AccountId" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfiguration.property.accountId"></a>

```csharp
public string AccountId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#account_id GlueCrawler#account_id}.

---

##### `UseLakeFormationCredentials`<sup>Optional</sup> <a name="UseLakeFormationCredentials" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfiguration.property.useLakeFormationCredentials"></a>

```csharp
public object UseLakeFormationCredentials { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#use_lake_formation_credentials GlueCrawler#use_lake_formation_credentials}.

---

### GlueCrawlerLineageConfiguration <a name="GlueCrawlerLineageConfiguration" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new GlueCrawlerLineageConfiguration {
    string CrawlerLineageSettings = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfiguration.property.crawlerLineageSettings">CrawlerLineageSettings</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#crawler_lineage_settings GlueCrawler#crawler_lineage_settings}. |

---

##### `CrawlerLineageSettings`<sup>Optional</sup> <a name="CrawlerLineageSettings" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfiguration.property.crawlerLineageSettings"></a>

```csharp
public string CrawlerLineageSettings { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#crawler_lineage_settings GlueCrawler#crawler_lineage_settings}.

---

### GlueCrawlerMongodbTarget <a name="GlueCrawlerMongodbTarget" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTarget.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new GlueCrawlerMongodbTarget {
    string ConnectionName,
    string Path,
    object ScanAll = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTarget.property.connectionName">ConnectionName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#connection_name GlueCrawler#connection_name}. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTarget.property.path">Path</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#path GlueCrawler#path}. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTarget.property.scanAll">ScanAll</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#scan_all GlueCrawler#scan_all}. |

---

##### `ConnectionName`<sup>Required</sup> <a name="ConnectionName" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTarget.property.connectionName"></a>

```csharp
public string ConnectionName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#connection_name GlueCrawler#connection_name}.

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTarget.property.path"></a>

```csharp
public string Path { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#path GlueCrawler#path}.

---

##### `ScanAll`<sup>Optional</sup> <a name="ScanAll" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTarget.property.scanAll"></a>

```csharp
public object ScanAll { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#scan_all GlueCrawler#scan_all}.

---

### GlueCrawlerRecrawlPolicy <a name="GlueCrawlerRecrawlPolicy" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new GlueCrawlerRecrawlPolicy {
    string RecrawlBehavior = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicy.property.recrawlBehavior">RecrawlBehavior</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#recrawl_behavior GlueCrawler#recrawl_behavior}. |

---

##### `RecrawlBehavior`<sup>Optional</sup> <a name="RecrawlBehavior" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicy.property.recrawlBehavior"></a>

```csharp
public string RecrawlBehavior { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#recrawl_behavior GlueCrawler#recrawl_behavior}.

---

### GlueCrawlerS3Target <a name="GlueCrawlerS3Target" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3Target"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3Target.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new GlueCrawlerS3Target {
    string Path,
    string ConnectionName = null,
    string DlqEventQueueArn = null,
    string EventQueueArn = null,
    string[] Exclusions = null,
    double SampleSize = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerS3Target.property.path">Path</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#path GlueCrawler#path}. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerS3Target.property.connectionName">ConnectionName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#connection_name GlueCrawler#connection_name}. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerS3Target.property.dlqEventQueueArn">DlqEventQueueArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#dlq_event_queue_arn GlueCrawler#dlq_event_queue_arn}. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerS3Target.property.eventQueueArn">EventQueueArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#event_queue_arn GlueCrawler#event_queue_arn}. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerS3Target.property.exclusions">Exclusions</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#exclusions GlueCrawler#exclusions}. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerS3Target.property.sampleSize">SampleSize</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#sample_size GlueCrawler#sample_size}. |

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3Target.property.path"></a>

```csharp
public string Path { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#path GlueCrawler#path}.

---

##### `ConnectionName`<sup>Optional</sup> <a name="ConnectionName" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3Target.property.connectionName"></a>

```csharp
public string ConnectionName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#connection_name GlueCrawler#connection_name}.

---

##### `DlqEventQueueArn`<sup>Optional</sup> <a name="DlqEventQueueArn" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3Target.property.dlqEventQueueArn"></a>

```csharp
public string DlqEventQueueArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#dlq_event_queue_arn GlueCrawler#dlq_event_queue_arn}.

---

##### `EventQueueArn`<sup>Optional</sup> <a name="EventQueueArn" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3Target.property.eventQueueArn"></a>

```csharp
public string EventQueueArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#event_queue_arn GlueCrawler#event_queue_arn}.

---

##### `Exclusions`<sup>Optional</sup> <a name="Exclusions" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3Target.property.exclusions"></a>

```csharp
public string[] Exclusions { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#exclusions GlueCrawler#exclusions}.

---

##### `SampleSize`<sup>Optional</sup> <a name="SampleSize" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3Target.property.sampleSize"></a>

```csharp
public double SampleSize { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#sample_size GlueCrawler#sample_size}.

---

### GlueCrawlerSchemaChangePolicy <a name="GlueCrawlerSchemaChangePolicy" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new GlueCrawlerSchemaChangePolicy {
    string DeleteBehavior = null,
    string UpdateBehavior = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicy.property.deleteBehavior">DeleteBehavior</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#delete_behavior GlueCrawler#delete_behavior}. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicy.property.updateBehavior">UpdateBehavior</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#update_behavior GlueCrawler#update_behavior}. |

---

##### `DeleteBehavior`<sup>Optional</sup> <a name="DeleteBehavior" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicy.property.deleteBehavior"></a>

```csharp
public string DeleteBehavior { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#delete_behavior GlueCrawler#delete_behavior}.

---

##### `UpdateBehavior`<sup>Optional</sup> <a name="UpdateBehavior" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicy.property.updateBehavior"></a>

```csharp
public string UpdateBehavior { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_crawler#update_behavior GlueCrawler#update_behavior}.

---

## Classes <a name="Classes" id="Classes"></a>

### GlueCrawlerCatalogTargetList <a name="GlueCrawlerCatalogTargetList" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new GlueCrawlerCatalogTargetList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetList.get"></a>

```csharp
private GlueCrawlerCatalogTargetOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GlueCrawlerCatalogTargetOutputReference <a name="GlueCrawlerCatalogTargetOutputReference" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new GlueCrawlerCatalogTargetOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.resetConnectionName">ResetConnectionName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.resetDlqEventQueueArn">ResetDlqEventQueueArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.resetEventQueueArn">ResetEventQueueArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetConnectionName` <a name="ResetConnectionName" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.resetConnectionName"></a>

```csharp
private void ResetConnectionName()
```

##### `ResetDlqEventQueueArn` <a name="ResetDlqEventQueueArn" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.resetDlqEventQueueArn"></a>

```csharp
private void ResetDlqEventQueueArn()
```

##### `ResetEventQueueArn` <a name="ResetEventQueueArn" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.resetEventQueueArn"></a>

```csharp
private void ResetEventQueueArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.property.connectionNameInput">ConnectionNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.property.databaseNameInput">DatabaseNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.property.dlqEventQueueArnInput">DlqEventQueueArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.property.eventQueueArnInput">EventQueueArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.property.tablesInput">TablesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.property.connectionName">ConnectionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.property.databaseName">DatabaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.property.dlqEventQueueArn">DlqEventQueueArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.property.eventQueueArn">EventQueueArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.property.tables">Tables</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConnectionNameInput`<sup>Optional</sup> <a name="ConnectionNameInput" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.property.connectionNameInput"></a>

```csharp
public string ConnectionNameInput { get; }
```

- *Type:* string

---

##### `DatabaseNameInput`<sup>Optional</sup> <a name="DatabaseNameInput" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.property.databaseNameInput"></a>

```csharp
public string DatabaseNameInput { get; }
```

- *Type:* string

---

##### `DlqEventQueueArnInput`<sup>Optional</sup> <a name="DlqEventQueueArnInput" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.property.dlqEventQueueArnInput"></a>

```csharp
public string DlqEventQueueArnInput { get; }
```

- *Type:* string

---

##### `EventQueueArnInput`<sup>Optional</sup> <a name="EventQueueArnInput" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.property.eventQueueArnInput"></a>

```csharp
public string EventQueueArnInput { get; }
```

- *Type:* string

---

##### `TablesInput`<sup>Optional</sup> <a name="TablesInput" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.property.tablesInput"></a>

```csharp
public string[] TablesInput { get; }
```

- *Type:* string[]

---

##### `ConnectionName`<sup>Required</sup> <a name="ConnectionName" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.property.connectionName"></a>

```csharp
public string ConnectionName { get; }
```

- *Type:* string

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.property.databaseName"></a>

```csharp
public string DatabaseName { get; }
```

- *Type:* string

---

##### `DlqEventQueueArn`<sup>Required</sup> <a name="DlqEventQueueArn" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.property.dlqEventQueueArn"></a>

```csharp
public string DlqEventQueueArn { get; }
```

- *Type:* string

---

##### `EventQueueArn`<sup>Required</sup> <a name="EventQueueArn" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.property.eventQueueArn"></a>

```csharp
public string EventQueueArn { get; }
```

- *Type:* string

---

##### `Tables`<sup>Required</sup> <a name="Tables" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.property.tables"></a>

```csharp
public string[] Tables { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerCatalogTargetOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GlueCrawlerDeltaTargetList <a name="GlueCrawlerDeltaTargetList" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new GlueCrawlerDeltaTargetList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetList.get"></a>

```csharp
private GlueCrawlerDeltaTargetOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GlueCrawlerDeltaTargetOutputReference <a name="GlueCrawlerDeltaTargetOutputReference" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new GlueCrawlerDeltaTargetOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.resetConnectionName">ResetConnectionName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetConnectionName` <a name="ResetConnectionName" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.resetConnectionName"></a>

```csharp
private void ResetConnectionName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.property.connectionNameInput">ConnectionNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.property.deltaTablesInput">DeltaTablesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.property.writeManifestInput">WriteManifestInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.property.connectionName">ConnectionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.property.deltaTables">DeltaTables</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.property.writeManifest">WriteManifest</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConnectionNameInput`<sup>Optional</sup> <a name="ConnectionNameInput" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.property.connectionNameInput"></a>

```csharp
public string ConnectionNameInput { get; }
```

- *Type:* string

---

##### `DeltaTablesInput`<sup>Optional</sup> <a name="DeltaTablesInput" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.property.deltaTablesInput"></a>

```csharp
public string[] DeltaTablesInput { get; }
```

- *Type:* string[]

---

##### `WriteManifestInput`<sup>Optional</sup> <a name="WriteManifestInput" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.property.writeManifestInput"></a>

```csharp
public object WriteManifestInput { get; }
```

- *Type:* object

---

##### `ConnectionName`<sup>Required</sup> <a name="ConnectionName" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.property.connectionName"></a>

```csharp
public string ConnectionName { get; }
```

- *Type:* string

---

##### `DeltaTables`<sup>Required</sup> <a name="DeltaTables" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.property.deltaTables"></a>

```csharp
public string[] DeltaTables { get; }
```

- *Type:* string[]

---

##### `WriteManifest`<sup>Required</sup> <a name="WriteManifest" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.property.writeManifest"></a>

```csharp
public object WriteManifest { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDeltaTargetOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GlueCrawlerDynamodbTargetList <a name="GlueCrawlerDynamodbTargetList" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new GlueCrawlerDynamodbTargetList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetList.get"></a>

```csharp
private GlueCrawlerDynamodbTargetOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GlueCrawlerDynamodbTargetOutputReference <a name="GlueCrawlerDynamodbTargetOutputReference" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new GlueCrawlerDynamodbTargetOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.resetScanAll">ResetScanAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.resetScanRate">ResetScanRate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetScanAll` <a name="ResetScanAll" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.resetScanAll"></a>

```csharp
private void ResetScanAll()
```

##### `ResetScanRate` <a name="ResetScanRate" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.resetScanRate"></a>

```csharp
private void ResetScanRate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.property.pathInput">PathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.property.scanAllInput">ScanAllInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.property.scanRateInput">ScanRateInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.property.scanAll">ScanAll</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.property.scanRate">ScanRate</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.property.pathInput"></a>

```csharp
public string PathInput { get; }
```

- *Type:* string

---

##### `ScanAllInput`<sup>Optional</sup> <a name="ScanAllInput" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.property.scanAllInput"></a>

```csharp
public object ScanAllInput { get; }
```

- *Type:* object

---

##### `ScanRateInput`<sup>Optional</sup> <a name="ScanRateInput" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.property.scanRateInput"></a>

```csharp
public double ScanRateInput { get; }
```

- *Type:* double

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `ScanAll`<sup>Required</sup> <a name="ScanAll" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.property.scanAll"></a>

```csharp
public object ScanAll { get; }
```

- *Type:* object

---

##### `ScanRate`<sup>Required</sup> <a name="ScanRate" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.property.scanRate"></a>

```csharp
public double ScanRate { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GlueCrawlerJdbcTargetList <a name="GlueCrawlerJdbcTargetList" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new GlueCrawlerJdbcTargetList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetList.get"></a>

```csharp
private GlueCrawlerJdbcTargetOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GlueCrawlerJdbcTargetOutputReference <a name="GlueCrawlerJdbcTargetOutputReference" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new GlueCrawlerJdbcTargetOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.resetEnableAdditionalMetadata">ResetEnableAdditionalMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.resetExclusions">ResetExclusions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnableAdditionalMetadata` <a name="ResetEnableAdditionalMetadata" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.resetEnableAdditionalMetadata"></a>

```csharp
private void ResetEnableAdditionalMetadata()
```

##### `ResetExclusions` <a name="ResetExclusions" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.resetExclusions"></a>

```csharp
private void ResetExclusions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.property.connectionNameInput">ConnectionNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.property.enableAdditionalMetadataInput">EnableAdditionalMetadataInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.property.exclusionsInput">ExclusionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.property.pathInput">PathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.property.connectionName">ConnectionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.property.enableAdditionalMetadata">EnableAdditionalMetadata</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.property.exclusions">Exclusions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConnectionNameInput`<sup>Optional</sup> <a name="ConnectionNameInput" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.property.connectionNameInput"></a>

```csharp
public string ConnectionNameInput { get; }
```

- *Type:* string

---

##### `EnableAdditionalMetadataInput`<sup>Optional</sup> <a name="EnableAdditionalMetadataInput" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.property.enableAdditionalMetadataInput"></a>

```csharp
public string[] EnableAdditionalMetadataInput { get; }
```

- *Type:* string[]

---

##### `ExclusionsInput`<sup>Optional</sup> <a name="ExclusionsInput" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.property.exclusionsInput"></a>

```csharp
public string[] ExclusionsInput { get; }
```

- *Type:* string[]

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.property.pathInput"></a>

```csharp
public string PathInput { get; }
```

- *Type:* string

---

##### `ConnectionName`<sup>Required</sup> <a name="ConnectionName" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.property.connectionName"></a>

```csharp
public string ConnectionName { get; }
```

- *Type:* string

---

##### `EnableAdditionalMetadata`<sup>Required</sup> <a name="EnableAdditionalMetadata" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.property.enableAdditionalMetadata"></a>

```csharp
public string[] EnableAdditionalMetadata { get; }
```

- *Type:* string[]

---

##### `Exclusions`<sup>Required</sup> <a name="Exclusions" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.property.exclusions"></a>

```csharp
public string[] Exclusions { get; }
```

- *Type:* string[]

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerJdbcTargetOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GlueCrawlerLakeFormationConfigurationOutputReference <a name="GlueCrawlerLakeFormationConfigurationOutputReference" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new GlueCrawlerLakeFormationConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.resetAccountId">ResetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.resetUseLakeFormationCredentials">ResetUseLakeFormationCredentials</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAccountId` <a name="ResetAccountId" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.resetAccountId"></a>

```csharp
private void ResetAccountId()
```

##### `ResetUseLakeFormationCredentials` <a name="ResetUseLakeFormationCredentials" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.resetUseLakeFormationCredentials"></a>

```csharp
private void ResetUseLakeFormationCredentials()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.property.accountIdInput">AccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.property.useLakeFormationCredentialsInput">UseLakeFormationCredentialsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.property.useLakeFormationCredentials">UseLakeFormationCredentials</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfiguration">GlueCrawlerLakeFormationConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.property.accountIdInput"></a>

```csharp
public string AccountIdInput { get; }
```

- *Type:* string

---

##### `UseLakeFormationCredentialsInput`<sup>Optional</sup> <a name="UseLakeFormationCredentialsInput" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.property.useLakeFormationCredentialsInput"></a>

```csharp
public object UseLakeFormationCredentialsInput { get; }
```

- *Type:* object

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `UseLakeFormationCredentials`<sup>Required</sup> <a name="UseLakeFormationCredentials" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.property.useLakeFormationCredentials"></a>

```csharp
public object UseLakeFormationCredentials { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfigurationOutputReference.property.internalValue"></a>

```csharp
public GlueCrawlerLakeFormationConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLakeFormationConfiguration">GlueCrawlerLakeFormationConfiguration</a>

---


### GlueCrawlerLineageConfigurationOutputReference <a name="GlueCrawlerLineageConfigurationOutputReference" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new GlueCrawlerLineageConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.resetCrawlerLineageSettings">ResetCrawlerLineageSettings</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCrawlerLineageSettings` <a name="ResetCrawlerLineageSettings" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.resetCrawlerLineageSettings"></a>

```csharp
private void ResetCrawlerLineageSettings()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.property.crawlerLineageSettingsInput">CrawlerLineageSettingsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.property.crawlerLineageSettings">CrawlerLineageSettings</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfiguration">GlueCrawlerLineageConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CrawlerLineageSettingsInput`<sup>Optional</sup> <a name="CrawlerLineageSettingsInput" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.property.crawlerLineageSettingsInput"></a>

```csharp
public string CrawlerLineageSettingsInput { get; }
```

- *Type:* string

---

##### `CrawlerLineageSettings`<sup>Required</sup> <a name="CrawlerLineageSettings" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.property.crawlerLineageSettings"></a>

```csharp
public string CrawlerLineageSettings { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.property.internalValue"></a>

```csharp
public GlueCrawlerLineageConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerLineageConfiguration">GlueCrawlerLineageConfiguration</a>

---


### GlueCrawlerMongodbTargetList <a name="GlueCrawlerMongodbTargetList" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new GlueCrawlerMongodbTargetList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetList.get"></a>

```csharp
private GlueCrawlerMongodbTargetOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GlueCrawlerMongodbTargetOutputReference <a name="GlueCrawlerMongodbTargetOutputReference" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new GlueCrawlerMongodbTargetOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.resetScanAll">ResetScanAll</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetScanAll` <a name="ResetScanAll" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.resetScanAll"></a>

```csharp
private void ResetScanAll()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.property.connectionNameInput">ConnectionNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.property.pathInput">PathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.property.scanAllInput">ScanAllInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.property.connectionName">ConnectionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.property.scanAll">ScanAll</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConnectionNameInput`<sup>Optional</sup> <a name="ConnectionNameInput" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.property.connectionNameInput"></a>

```csharp
public string ConnectionNameInput { get; }
```

- *Type:* string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.property.pathInput"></a>

```csharp
public string PathInput { get; }
```

- *Type:* string

---

##### `ScanAllInput`<sup>Optional</sup> <a name="ScanAllInput" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.property.scanAllInput"></a>

```csharp
public object ScanAllInput { get; }
```

- *Type:* object

---

##### `ConnectionName`<sup>Required</sup> <a name="ConnectionName" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.property.connectionName"></a>

```csharp
public string ConnectionName { get; }
```

- *Type:* string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `ScanAll`<sup>Required</sup> <a name="ScanAll" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.property.scanAll"></a>

```csharp
public object ScanAll { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerMongodbTargetOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GlueCrawlerRecrawlPolicyOutputReference <a name="GlueCrawlerRecrawlPolicyOutputReference" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new GlueCrawlerRecrawlPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.resetRecrawlBehavior">ResetRecrawlBehavior</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRecrawlBehavior` <a name="ResetRecrawlBehavior" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.resetRecrawlBehavior"></a>

```csharp
private void ResetRecrawlBehavior()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.property.recrawlBehaviorInput">RecrawlBehaviorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.property.recrawlBehavior">RecrawlBehavior</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicy">GlueCrawlerRecrawlPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RecrawlBehaviorInput`<sup>Optional</sup> <a name="RecrawlBehaviorInput" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.property.recrawlBehaviorInput"></a>

```csharp
public string RecrawlBehaviorInput { get; }
```

- *Type:* string

---

##### `RecrawlBehavior`<sup>Required</sup> <a name="RecrawlBehavior" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.property.recrawlBehavior"></a>

```csharp
public string RecrawlBehavior { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.property.internalValue"></a>

```csharp
public GlueCrawlerRecrawlPolicy InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerRecrawlPolicy">GlueCrawlerRecrawlPolicy</a>

---


### GlueCrawlerS3TargetList <a name="GlueCrawlerS3TargetList" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new GlueCrawlerS3TargetList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetList.get"></a>

```csharp
private GlueCrawlerS3TargetOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GlueCrawlerS3TargetOutputReference <a name="GlueCrawlerS3TargetOutputReference" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new GlueCrawlerS3TargetOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.resetConnectionName">ResetConnectionName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.resetDlqEventQueueArn">ResetDlqEventQueueArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.resetEventQueueArn">ResetEventQueueArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.resetExclusions">ResetExclusions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.resetSampleSize">ResetSampleSize</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetConnectionName` <a name="ResetConnectionName" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.resetConnectionName"></a>

```csharp
private void ResetConnectionName()
```

##### `ResetDlqEventQueueArn` <a name="ResetDlqEventQueueArn" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.resetDlqEventQueueArn"></a>

```csharp
private void ResetDlqEventQueueArn()
```

##### `ResetEventQueueArn` <a name="ResetEventQueueArn" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.resetEventQueueArn"></a>

```csharp
private void ResetEventQueueArn()
```

##### `ResetExclusions` <a name="ResetExclusions" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.resetExclusions"></a>

```csharp
private void ResetExclusions()
```

##### `ResetSampleSize` <a name="ResetSampleSize" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.resetSampleSize"></a>

```csharp
private void ResetSampleSize()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.property.connectionNameInput">ConnectionNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.property.dlqEventQueueArnInput">DlqEventQueueArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.property.eventQueueArnInput">EventQueueArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.property.exclusionsInput">ExclusionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.property.pathInput">PathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.property.sampleSizeInput">SampleSizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.property.connectionName">ConnectionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.property.dlqEventQueueArn">DlqEventQueueArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.property.eventQueueArn">EventQueueArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.property.exclusions">Exclusions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.property.sampleSize">SampleSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConnectionNameInput`<sup>Optional</sup> <a name="ConnectionNameInput" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.property.connectionNameInput"></a>

```csharp
public string ConnectionNameInput { get; }
```

- *Type:* string

---

##### `DlqEventQueueArnInput`<sup>Optional</sup> <a name="DlqEventQueueArnInput" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.property.dlqEventQueueArnInput"></a>

```csharp
public string DlqEventQueueArnInput { get; }
```

- *Type:* string

---

##### `EventQueueArnInput`<sup>Optional</sup> <a name="EventQueueArnInput" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.property.eventQueueArnInput"></a>

```csharp
public string EventQueueArnInput { get; }
```

- *Type:* string

---

##### `ExclusionsInput`<sup>Optional</sup> <a name="ExclusionsInput" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.property.exclusionsInput"></a>

```csharp
public string[] ExclusionsInput { get; }
```

- *Type:* string[]

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.property.pathInput"></a>

```csharp
public string PathInput { get; }
```

- *Type:* string

---

##### `SampleSizeInput`<sup>Optional</sup> <a name="SampleSizeInput" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.property.sampleSizeInput"></a>

```csharp
public double SampleSizeInput { get; }
```

- *Type:* double

---

##### `ConnectionName`<sup>Required</sup> <a name="ConnectionName" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.property.connectionName"></a>

```csharp
public string ConnectionName { get; }
```

- *Type:* string

---

##### `DlqEventQueueArn`<sup>Required</sup> <a name="DlqEventQueueArn" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.property.dlqEventQueueArn"></a>

```csharp
public string DlqEventQueueArn { get; }
```

- *Type:* string

---

##### `EventQueueArn`<sup>Required</sup> <a name="EventQueueArn" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.property.eventQueueArn"></a>

```csharp
public string EventQueueArn { get; }
```

- *Type:* string

---

##### `Exclusions`<sup>Required</sup> <a name="Exclusions" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.property.exclusions"></a>

```csharp
public string[] Exclusions { get; }
```

- *Type:* string[]

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `SampleSize`<sup>Required</sup> <a name="SampleSize" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.property.sampleSize"></a>

```csharp
public double SampleSize { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerS3TargetOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GlueCrawlerSchemaChangePolicyOutputReference <a name="GlueCrawlerSchemaChangePolicyOutputReference" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new GlueCrawlerSchemaChangePolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.resetDeleteBehavior">ResetDeleteBehavior</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.resetUpdateBehavior">ResetUpdateBehavior</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDeleteBehavior` <a name="ResetDeleteBehavior" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.resetDeleteBehavior"></a>

```csharp
private void ResetDeleteBehavior()
```

##### `ResetUpdateBehavior` <a name="ResetUpdateBehavior" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.resetUpdateBehavior"></a>

```csharp
private void ResetUpdateBehavior()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.property.deleteBehaviorInput">DeleteBehaviorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.property.updateBehaviorInput">UpdateBehaviorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.property.deleteBehavior">DeleteBehavior</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.property.updateBehavior">UpdateBehavior</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicy">GlueCrawlerSchemaChangePolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DeleteBehaviorInput`<sup>Optional</sup> <a name="DeleteBehaviorInput" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.property.deleteBehaviorInput"></a>

```csharp
public string DeleteBehaviorInput { get; }
```

- *Type:* string

---

##### `UpdateBehaviorInput`<sup>Optional</sup> <a name="UpdateBehaviorInput" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.property.updateBehaviorInput"></a>

```csharp
public string UpdateBehaviorInput { get; }
```

- *Type:* string

---

##### `DeleteBehavior`<sup>Required</sup> <a name="DeleteBehavior" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.property.deleteBehavior"></a>

```csharp
public string DeleteBehavior { get; }
```

- *Type:* string

---

##### `UpdateBehavior`<sup>Required</sup> <a name="UpdateBehavior" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.property.updateBehavior"></a>

```csharp
public string UpdateBehavior { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.property.internalValue"></a>

```csharp
public GlueCrawlerSchemaChangePolicy InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.glueCrawler.GlueCrawlerSchemaChangePolicy">GlueCrawlerSchemaChangePolicy</a>

---



