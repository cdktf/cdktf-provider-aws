# `dynamodbTable` Submodule <a name="`dynamodbTable` Submodule" id="@cdktf/provider-aws.dynamodbTable"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DynamodbTable <a name="DynamodbTable" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table aws_dynamodb_table}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DynamodbTable(Construct Scope, string Id, DynamodbTableConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig">DynamodbTableConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig">DynamodbTableConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.putAttribute">PutAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.putGlobalSecondaryIndex">PutGlobalSecondaryIndex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.putLocalSecondaryIndex">PutLocalSecondaryIndex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.putPointInTimeRecovery">PutPointInTimeRecovery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.putReplica">PutReplica</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.putServerSideEncryption">PutServerSideEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.putTtl">PutTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.resetAttribute">ResetAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.resetBillingMode">ResetBillingMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.resetGlobalSecondaryIndex">ResetGlobalSecondaryIndex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.resetHashKey">ResetHashKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.resetLocalSecondaryIndex">ResetLocalSecondaryIndex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.resetPointInTimeRecovery">ResetPointInTimeRecovery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.resetRangeKey">ResetRangeKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.resetReadCapacity">ResetReadCapacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.resetReplica">ResetReplica</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.resetRestoreDateTime">ResetRestoreDateTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.resetRestoreSourceName">ResetRestoreSourceName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.resetRestoreToLatestTime">ResetRestoreToLatestTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.resetServerSideEncryption">ResetServerSideEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.resetStreamEnabled">ResetStreamEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.resetStreamViewType">ResetStreamViewType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.resetTableClass">ResetTableClass</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.resetTtl">ResetTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.resetWriteCapacity">ResetWriteCapacity</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutAttribute` <a name="PutAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.putAttribute"></a>

```csharp
private void PutAttribute(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.putAttribute.parameter.value"></a>

- *Type:* object

---

##### `PutGlobalSecondaryIndex` <a name="PutGlobalSecondaryIndex" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.putGlobalSecondaryIndex"></a>

```csharp
private void PutGlobalSecondaryIndex(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.putGlobalSecondaryIndex.parameter.value"></a>

- *Type:* object

---

##### `PutLocalSecondaryIndex` <a name="PutLocalSecondaryIndex" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.putLocalSecondaryIndex"></a>

```csharp
private void PutLocalSecondaryIndex(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.putLocalSecondaryIndex.parameter.value"></a>

- *Type:* object

---

##### `PutPointInTimeRecovery` <a name="PutPointInTimeRecovery" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.putPointInTimeRecovery"></a>

```csharp
private void PutPointInTimeRecovery(DynamodbTablePointInTimeRecovery Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.putPointInTimeRecovery.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecovery">DynamodbTablePointInTimeRecovery</a>

---

##### `PutReplica` <a name="PutReplica" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.putReplica"></a>

```csharp
private void PutReplica(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.putReplica.parameter.value"></a>

- *Type:* object

---

##### `PutServerSideEncryption` <a name="PutServerSideEncryption" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.putServerSideEncryption"></a>

```csharp
private void PutServerSideEncryption(DynamodbTableServerSideEncryption Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.putServerSideEncryption.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryption">DynamodbTableServerSideEncryption</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.putTimeouts"></a>

```csharp
private void PutTimeouts(DynamodbTableTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeouts">DynamodbTableTimeouts</a>

---

##### `PutTtl` <a name="PutTtl" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.putTtl"></a>

```csharp
private void PutTtl(DynamodbTableTtl Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.putTtl.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTtl">DynamodbTableTtl</a>

---

##### `ResetAttribute` <a name="ResetAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.resetAttribute"></a>

```csharp
private void ResetAttribute()
```

##### `ResetBillingMode` <a name="ResetBillingMode" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.resetBillingMode"></a>

```csharp
private void ResetBillingMode()
```

##### `ResetGlobalSecondaryIndex` <a name="ResetGlobalSecondaryIndex" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.resetGlobalSecondaryIndex"></a>

```csharp
private void ResetGlobalSecondaryIndex()
```

##### `ResetHashKey` <a name="ResetHashKey" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.resetHashKey"></a>

```csharp
private void ResetHashKey()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLocalSecondaryIndex` <a name="ResetLocalSecondaryIndex" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.resetLocalSecondaryIndex"></a>

```csharp
private void ResetLocalSecondaryIndex()
```

##### `ResetPointInTimeRecovery` <a name="ResetPointInTimeRecovery" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.resetPointInTimeRecovery"></a>

```csharp
private void ResetPointInTimeRecovery()
```

##### `ResetRangeKey` <a name="ResetRangeKey" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.resetRangeKey"></a>

```csharp
private void ResetRangeKey()
```

##### `ResetReadCapacity` <a name="ResetReadCapacity" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.resetReadCapacity"></a>

```csharp
private void ResetReadCapacity()
```

##### `ResetReplica` <a name="ResetReplica" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.resetReplica"></a>

```csharp
private void ResetReplica()
```

##### `ResetRestoreDateTime` <a name="ResetRestoreDateTime" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.resetRestoreDateTime"></a>

```csharp
private void ResetRestoreDateTime()
```

##### `ResetRestoreSourceName` <a name="ResetRestoreSourceName" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.resetRestoreSourceName"></a>

```csharp
private void ResetRestoreSourceName()
```

##### `ResetRestoreToLatestTime` <a name="ResetRestoreToLatestTime" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.resetRestoreToLatestTime"></a>

```csharp
private void ResetRestoreToLatestTime()
```

##### `ResetServerSideEncryption` <a name="ResetServerSideEncryption" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.resetServerSideEncryption"></a>

```csharp
private void ResetServerSideEncryption()
```

##### `ResetStreamEnabled` <a name="ResetStreamEnabled" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.resetStreamEnabled"></a>

```csharp
private void ResetStreamEnabled()
```

##### `ResetStreamViewType` <a name="ResetStreamViewType" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.resetStreamViewType"></a>

```csharp
private void ResetStreamViewType()
```

##### `ResetTableClass` <a name="ResetTableClass" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.resetTableClass"></a>

```csharp
private void ResetTableClass()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetTtl` <a name="ResetTtl" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.resetTtl"></a>

```csharp
private void ResetTtl()
```

##### `ResetWriteCapacity` <a name="ResetWriteCapacity" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.resetWriteCapacity"></a>

```csharp
private void ResetWriteCapacity()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DynamodbTable.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DynamodbTable.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

DynamodbTable.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.attribute">Attribute</a></code> | <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeList">DynamodbTableAttributeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.globalSecondaryIndex">GlobalSecondaryIndex</a></code> | <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexList">DynamodbTableGlobalSecondaryIndexList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.localSecondaryIndex">LocalSecondaryIndex</a></code> | <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexList">DynamodbTableLocalSecondaryIndexList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.pointInTimeRecovery">PointInTimeRecovery</a></code> | <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecoveryOutputReference">DynamodbTablePointInTimeRecoveryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.replica">Replica</a></code> | <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaList">DynamodbTableReplicaList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.serverSideEncryption">ServerSideEncryption</a></code> | <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryptionOutputReference">DynamodbTableServerSideEncryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.streamArn">StreamArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.streamLabel">StreamLabel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference">DynamodbTableTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.ttl">Ttl</a></code> | <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTtlOutputReference">DynamodbTableTtlOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.attributeInput">AttributeInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.billingModeInput">BillingModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.globalSecondaryIndexInput">GlobalSecondaryIndexInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.hashKeyInput">HashKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.localSecondaryIndexInput">LocalSecondaryIndexInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.pointInTimeRecoveryInput">PointInTimeRecoveryInput</a></code> | <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecovery">DynamodbTablePointInTimeRecovery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.rangeKeyInput">RangeKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.readCapacityInput">ReadCapacityInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.replicaInput">ReplicaInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.restoreDateTimeInput">RestoreDateTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.restoreSourceNameInput">RestoreSourceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.restoreToLatestTimeInput">RestoreToLatestTimeInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.serverSideEncryptionInput">ServerSideEncryptionInput</a></code> | <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryption">DynamodbTableServerSideEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.streamEnabledInput">StreamEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.streamViewTypeInput">StreamViewTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.tableClassInput">TableClassInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.ttlInput">TtlInput</a></code> | <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTtl">DynamodbTableTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.writeCapacityInput">WriteCapacityInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.billingMode">BillingMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.hashKey">HashKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.rangeKey">RangeKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.readCapacity">ReadCapacity</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.restoreDateTime">RestoreDateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.restoreSourceName">RestoreSourceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.restoreToLatestTime">RestoreToLatestTime</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.streamEnabled">StreamEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.streamViewType">StreamViewType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.tableClass">TableClass</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.writeCapacity">WriteCapacity</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `Attribute`<sup>Required</sup> <a name="Attribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.attribute"></a>

```csharp
public DynamodbTableAttributeList Attribute { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeList">DynamodbTableAttributeList</a>

---

##### `GlobalSecondaryIndex`<sup>Required</sup> <a name="GlobalSecondaryIndex" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.globalSecondaryIndex"></a>

```csharp
public DynamodbTableGlobalSecondaryIndexList GlobalSecondaryIndex { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexList">DynamodbTableGlobalSecondaryIndexList</a>

---

##### `LocalSecondaryIndex`<sup>Required</sup> <a name="LocalSecondaryIndex" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.localSecondaryIndex"></a>

```csharp
public DynamodbTableLocalSecondaryIndexList LocalSecondaryIndex { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexList">DynamodbTableLocalSecondaryIndexList</a>

---

##### `PointInTimeRecovery`<sup>Required</sup> <a name="PointInTimeRecovery" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.pointInTimeRecovery"></a>

```csharp
public DynamodbTablePointInTimeRecoveryOutputReference PointInTimeRecovery { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecoveryOutputReference">DynamodbTablePointInTimeRecoveryOutputReference</a>

---

##### `Replica`<sup>Required</sup> <a name="Replica" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.replica"></a>

```csharp
public DynamodbTableReplicaList Replica { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaList">DynamodbTableReplicaList</a>

---

##### `ServerSideEncryption`<sup>Required</sup> <a name="ServerSideEncryption" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.serverSideEncryption"></a>

```csharp
public DynamodbTableServerSideEncryptionOutputReference ServerSideEncryption { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryptionOutputReference">DynamodbTableServerSideEncryptionOutputReference</a>

---

##### `StreamArn`<sup>Required</sup> <a name="StreamArn" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.streamArn"></a>

```csharp
public string StreamArn { get; }
```

- *Type:* string

---

##### `StreamLabel`<sup>Required</sup> <a name="StreamLabel" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.streamLabel"></a>

```csharp
public string StreamLabel { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.timeouts"></a>

```csharp
public DynamodbTableTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference">DynamodbTableTimeoutsOutputReference</a>

---

##### `Ttl`<sup>Required</sup> <a name="Ttl" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.ttl"></a>

```csharp
public DynamodbTableTtlOutputReference Ttl { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTtlOutputReference">DynamodbTableTtlOutputReference</a>

---

##### `AttributeInput`<sup>Optional</sup> <a name="AttributeInput" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.attributeInput"></a>

```csharp
public object AttributeInput { get; }
```

- *Type:* object

---

##### `BillingModeInput`<sup>Optional</sup> <a name="BillingModeInput" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.billingModeInput"></a>

```csharp
public string BillingModeInput { get; }
```

- *Type:* string

---

##### `GlobalSecondaryIndexInput`<sup>Optional</sup> <a name="GlobalSecondaryIndexInput" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.globalSecondaryIndexInput"></a>

```csharp
public object GlobalSecondaryIndexInput { get; }
```

- *Type:* object

---

##### `HashKeyInput`<sup>Optional</sup> <a name="HashKeyInput" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.hashKeyInput"></a>

```csharp
public string HashKeyInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocalSecondaryIndexInput`<sup>Optional</sup> <a name="LocalSecondaryIndexInput" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.localSecondaryIndexInput"></a>

```csharp
public object LocalSecondaryIndexInput { get; }
```

- *Type:* object

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PointInTimeRecoveryInput`<sup>Optional</sup> <a name="PointInTimeRecoveryInput" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.pointInTimeRecoveryInput"></a>

```csharp
public DynamodbTablePointInTimeRecovery PointInTimeRecoveryInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecovery">DynamodbTablePointInTimeRecovery</a>

---

##### `RangeKeyInput`<sup>Optional</sup> <a name="RangeKeyInput" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.rangeKeyInput"></a>

```csharp
public string RangeKeyInput { get; }
```

- *Type:* string

---

##### `ReadCapacityInput`<sup>Optional</sup> <a name="ReadCapacityInput" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.readCapacityInput"></a>

```csharp
public double ReadCapacityInput { get; }
```

- *Type:* double

---

##### `ReplicaInput`<sup>Optional</sup> <a name="ReplicaInput" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.replicaInput"></a>

```csharp
public object ReplicaInput { get; }
```

- *Type:* object

---

##### `RestoreDateTimeInput`<sup>Optional</sup> <a name="RestoreDateTimeInput" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.restoreDateTimeInput"></a>

```csharp
public string RestoreDateTimeInput { get; }
```

- *Type:* string

---

##### `RestoreSourceNameInput`<sup>Optional</sup> <a name="RestoreSourceNameInput" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.restoreSourceNameInput"></a>

```csharp
public string RestoreSourceNameInput { get; }
```

- *Type:* string

---

##### `RestoreToLatestTimeInput`<sup>Optional</sup> <a name="RestoreToLatestTimeInput" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.restoreToLatestTimeInput"></a>

```csharp
public object RestoreToLatestTimeInput { get; }
```

- *Type:* object

---

##### `ServerSideEncryptionInput`<sup>Optional</sup> <a name="ServerSideEncryptionInput" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.serverSideEncryptionInput"></a>

```csharp
public DynamodbTableServerSideEncryption ServerSideEncryptionInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryption">DynamodbTableServerSideEncryption</a>

---

##### `StreamEnabledInput`<sup>Optional</sup> <a name="StreamEnabledInput" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.streamEnabledInput"></a>

```csharp
public object StreamEnabledInput { get; }
```

- *Type:* object

---

##### `StreamViewTypeInput`<sup>Optional</sup> <a name="StreamViewTypeInput" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.streamViewTypeInput"></a>

```csharp
public string StreamViewTypeInput { get; }
```

- *Type:* string

---

##### `TableClassInput`<sup>Optional</sup> <a name="TableClassInput" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.tableClassInput"></a>

```csharp
public string TableClassInput { get; }
```

- *Type:* string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `TtlInput`<sup>Optional</sup> <a name="TtlInput" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.ttlInput"></a>

```csharp
public DynamodbTableTtl TtlInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTtl">DynamodbTableTtl</a>

---

##### `WriteCapacityInput`<sup>Optional</sup> <a name="WriteCapacityInput" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.writeCapacityInput"></a>

```csharp
public double WriteCapacityInput { get; }
```

- *Type:* double

---

##### `BillingMode`<sup>Required</sup> <a name="BillingMode" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.billingMode"></a>

```csharp
public string BillingMode { get; }
```

- *Type:* string

---

##### `HashKey`<sup>Required</sup> <a name="HashKey" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.hashKey"></a>

```csharp
public string HashKey { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `RangeKey`<sup>Required</sup> <a name="RangeKey" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.rangeKey"></a>

```csharp
public string RangeKey { get; }
```

- *Type:* string

---

##### `ReadCapacity`<sup>Required</sup> <a name="ReadCapacity" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.readCapacity"></a>

```csharp
public double ReadCapacity { get; }
```

- *Type:* double

---

##### `RestoreDateTime`<sup>Required</sup> <a name="RestoreDateTime" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.restoreDateTime"></a>

```csharp
public string RestoreDateTime { get; }
```

- *Type:* string

---

##### `RestoreSourceName`<sup>Required</sup> <a name="RestoreSourceName" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.restoreSourceName"></a>

```csharp
public string RestoreSourceName { get; }
```

- *Type:* string

---

##### `RestoreToLatestTime`<sup>Required</sup> <a name="RestoreToLatestTime" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.restoreToLatestTime"></a>

```csharp
public object RestoreToLatestTime { get; }
```

- *Type:* object

---

##### `StreamEnabled`<sup>Required</sup> <a name="StreamEnabled" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.streamEnabled"></a>

```csharp
public object StreamEnabled { get; }
```

- *Type:* object

---

##### `StreamViewType`<sup>Required</sup> <a name="StreamViewType" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.streamViewType"></a>

```csharp
public string StreamViewType { get; }
```

- *Type:* string

---

##### `TableClass`<sup>Required</sup> <a name="TableClass" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.tableClass"></a>

```csharp
public string TableClass { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `WriteCapacity`<sup>Required</sup> <a name="WriteCapacity" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.writeCapacity"></a>

```csharp
public double WriteCapacity { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.dynamodbTable.DynamodbTable.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DynamodbTableAttribute <a name="DynamodbTableAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableAttribute"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableAttribute.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DynamodbTableAttribute {
    string Name,
    string Type
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableAttribute.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table#name DynamodbTable#name}. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableAttribute.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table#type DynamodbTable#type}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableAttribute.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table#name DynamodbTable#name}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableAttribute.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table#type DynamodbTable#type}.

---

### DynamodbTableConfig <a name="DynamodbTableConfig" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DynamodbTableConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    object Attribute = null,
    string BillingMode = null,
    object GlobalSecondaryIndex = null,
    string HashKey = null,
    string Id = null,
    object LocalSecondaryIndex = null,
    DynamodbTablePointInTimeRecovery PointInTimeRecovery = null,
    string RangeKey = null,
    double ReadCapacity = null,
    object Replica = null,
    string RestoreDateTime = null,
    string RestoreSourceName = null,
    object RestoreToLatestTime = null,
    DynamodbTableServerSideEncryption ServerSideEncryption = null,
    object StreamEnabled = null,
    string StreamViewType = null,
    string TableClass = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null,
    DynamodbTableTimeouts Timeouts = null,
    DynamodbTableTtl Ttl = null,
    double WriteCapacity = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table#name DynamodbTable#name}. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.attribute">Attribute</a></code> | <code>object</code> | attribute block. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.billingMode">BillingMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table#billing_mode DynamodbTable#billing_mode}. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.globalSecondaryIndex">GlobalSecondaryIndex</a></code> | <code>object</code> | global_secondary_index block. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.hashKey">HashKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table#hash_key DynamodbTable#hash_key}. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table#id DynamodbTable#id}. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.localSecondaryIndex">LocalSecondaryIndex</a></code> | <code>object</code> | local_secondary_index block. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.pointInTimeRecovery">PointInTimeRecovery</a></code> | <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecovery">DynamodbTablePointInTimeRecovery</a></code> | point_in_time_recovery block. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.rangeKey">RangeKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table#range_key DynamodbTable#range_key}. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.readCapacity">ReadCapacity</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table#read_capacity DynamodbTable#read_capacity}. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.replica">Replica</a></code> | <code>object</code> | replica block. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.restoreDateTime">RestoreDateTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table#restore_date_time DynamodbTable#restore_date_time}. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.restoreSourceName">RestoreSourceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table#restore_source_name DynamodbTable#restore_source_name}. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.restoreToLatestTime">RestoreToLatestTime</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table#restore_to_latest_time DynamodbTable#restore_to_latest_time}. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.serverSideEncryption">ServerSideEncryption</a></code> | <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryption">DynamodbTableServerSideEncryption</a></code> | server_side_encryption block. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.streamEnabled">StreamEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table#stream_enabled DynamodbTable#stream_enabled}. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.streamViewType">StreamViewType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table#stream_view_type DynamodbTable#stream_view_type}. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.tableClass">TableClass</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table#table_class DynamodbTable#table_class}. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table#tags DynamodbTable#tags}. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table#tags_all DynamodbTable#tags_all}. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeouts">DynamodbTableTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.ttl">Ttl</a></code> | <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTtl">DynamodbTableTtl</a></code> | ttl block. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.writeCapacity">WriteCapacity</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table#write_capacity DynamodbTable#write_capacity}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table#name DynamodbTable#name}.

---

##### `Attribute`<sup>Optional</sup> <a name="Attribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.attribute"></a>

```csharp
public object Attribute { get; set; }
```

- *Type:* object

attribute block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table#attribute DynamodbTable#attribute}

---

##### `BillingMode`<sup>Optional</sup> <a name="BillingMode" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.billingMode"></a>

```csharp
public string BillingMode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table#billing_mode DynamodbTable#billing_mode}.

---

##### `GlobalSecondaryIndex`<sup>Optional</sup> <a name="GlobalSecondaryIndex" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.globalSecondaryIndex"></a>

```csharp
public object GlobalSecondaryIndex { get; set; }
```

- *Type:* object

global_secondary_index block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table#global_secondary_index DynamodbTable#global_secondary_index}

---

##### `HashKey`<sup>Optional</sup> <a name="HashKey" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.hashKey"></a>

```csharp
public string HashKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table#hash_key DynamodbTable#hash_key}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table#id DynamodbTable#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LocalSecondaryIndex`<sup>Optional</sup> <a name="LocalSecondaryIndex" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.localSecondaryIndex"></a>

```csharp
public object LocalSecondaryIndex { get; set; }
```

- *Type:* object

local_secondary_index block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table#local_secondary_index DynamodbTable#local_secondary_index}

---

##### `PointInTimeRecovery`<sup>Optional</sup> <a name="PointInTimeRecovery" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.pointInTimeRecovery"></a>

```csharp
public DynamodbTablePointInTimeRecovery PointInTimeRecovery { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecovery">DynamodbTablePointInTimeRecovery</a>

point_in_time_recovery block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table#point_in_time_recovery DynamodbTable#point_in_time_recovery}

---

##### `RangeKey`<sup>Optional</sup> <a name="RangeKey" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.rangeKey"></a>

```csharp
public string RangeKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table#range_key DynamodbTable#range_key}.

---

##### `ReadCapacity`<sup>Optional</sup> <a name="ReadCapacity" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.readCapacity"></a>

```csharp
public double ReadCapacity { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table#read_capacity DynamodbTable#read_capacity}.

---

##### `Replica`<sup>Optional</sup> <a name="Replica" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.replica"></a>

```csharp
public object Replica { get; set; }
```

- *Type:* object

replica block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table#replica DynamodbTable#replica}

---

##### `RestoreDateTime`<sup>Optional</sup> <a name="RestoreDateTime" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.restoreDateTime"></a>

```csharp
public string RestoreDateTime { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table#restore_date_time DynamodbTable#restore_date_time}.

---

##### `RestoreSourceName`<sup>Optional</sup> <a name="RestoreSourceName" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.restoreSourceName"></a>

```csharp
public string RestoreSourceName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table#restore_source_name DynamodbTable#restore_source_name}.

---

##### `RestoreToLatestTime`<sup>Optional</sup> <a name="RestoreToLatestTime" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.restoreToLatestTime"></a>

```csharp
public object RestoreToLatestTime { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table#restore_to_latest_time DynamodbTable#restore_to_latest_time}.

---

##### `ServerSideEncryption`<sup>Optional</sup> <a name="ServerSideEncryption" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.serverSideEncryption"></a>

```csharp
public DynamodbTableServerSideEncryption ServerSideEncryption { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryption">DynamodbTableServerSideEncryption</a>

server_side_encryption block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table#server_side_encryption DynamodbTable#server_side_encryption}

---

##### `StreamEnabled`<sup>Optional</sup> <a name="StreamEnabled" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.streamEnabled"></a>

```csharp
public object StreamEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table#stream_enabled DynamodbTable#stream_enabled}.

---

##### `StreamViewType`<sup>Optional</sup> <a name="StreamViewType" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.streamViewType"></a>

```csharp
public string StreamViewType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table#stream_view_type DynamodbTable#stream_view_type}.

---

##### `TableClass`<sup>Optional</sup> <a name="TableClass" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.tableClass"></a>

```csharp
public string TableClass { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table#table_class DynamodbTable#table_class}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table#tags DynamodbTable#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table#tags_all DynamodbTable#tags_all}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.timeouts"></a>

```csharp
public DynamodbTableTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeouts">DynamodbTableTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table#timeouts DynamodbTable#timeouts}

---

##### `Ttl`<sup>Optional</sup> <a name="Ttl" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.ttl"></a>

```csharp
public DynamodbTableTtl Ttl { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTtl">DynamodbTableTtl</a>

ttl block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table#ttl DynamodbTable#ttl}

---

##### `WriteCapacity`<sup>Optional</sup> <a name="WriteCapacity" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableConfig.property.writeCapacity"></a>

```csharp
public double WriteCapacity { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table#write_capacity DynamodbTable#write_capacity}.

---

### DynamodbTableGlobalSecondaryIndex <a name="DynamodbTableGlobalSecondaryIndex" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndex"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndex.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DynamodbTableGlobalSecondaryIndex {
    string HashKey,
    string Name,
    string ProjectionType,
    string[] NonKeyAttributes = null,
    string RangeKey = null,
    double ReadCapacity = null,
    double WriteCapacity = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndex.property.hashKey">HashKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table#hash_key DynamodbTable#hash_key}. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndex.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table#name DynamodbTable#name}. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndex.property.projectionType">ProjectionType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table#projection_type DynamodbTable#projection_type}. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndex.property.nonKeyAttributes">NonKeyAttributes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table#non_key_attributes DynamodbTable#non_key_attributes}. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndex.property.rangeKey">RangeKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table#range_key DynamodbTable#range_key}. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndex.property.readCapacity">ReadCapacity</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table#read_capacity DynamodbTable#read_capacity}. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndex.property.writeCapacity">WriteCapacity</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table#write_capacity DynamodbTable#write_capacity}. |

---

##### `HashKey`<sup>Required</sup> <a name="HashKey" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndex.property.hashKey"></a>

```csharp
public string HashKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table#hash_key DynamodbTable#hash_key}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndex.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table#name DynamodbTable#name}.

---

##### `ProjectionType`<sup>Required</sup> <a name="ProjectionType" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndex.property.projectionType"></a>

```csharp
public string ProjectionType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table#projection_type DynamodbTable#projection_type}.

---

##### `NonKeyAttributes`<sup>Optional</sup> <a name="NonKeyAttributes" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndex.property.nonKeyAttributes"></a>

```csharp
public string[] NonKeyAttributes { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table#non_key_attributes DynamodbTable#non_key_attributes}.

---

##### `RangeKey`<sup>Optional</sup> <a name="RangeKey" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndex.property.rangeKey"></a>

```csharp
public string RangeKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table#range_key DynamodbTable#range_key}.

---

##### `ReadCapacity`<sup>Optional</sup> <a name="ReadCapacity" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndex.property.readCapacity"></a>

```csharp
public double ReadCapacity { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table#read_capacity DynamodbTable#read_capacity}.

---

##### `WriteCapacity`<sup>Optional</sup> <a name="WriteCapacity" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndex.property.writeCapacity"></a>

```csharp
public double WriteCapacity { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table#write_capacity DynamodbTable#write_capacity}.

---

### DynamodbTableLocalSecondaryIndex <a name="DynamodbTableLocalSecondaryIndex" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndex"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndex.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DynamodbTableLocalSecondaryIndex {
    string Name,
    string ProjectionType,
    string RangeKey,
    string[] NonKeyAttributes = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndex.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table#name DynamodbTable#name}. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndex.property.projectionType">ProjectionType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table#projection_type DynamodbTable#projection_type}. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndex.property.rangeKey">RangeKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table#range_key DynamodbTable#range_key}. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndex.property.nonKeyAttributes">NonKeyAttributes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table#non_key_attributes DynamodbTable#non_key_attributes}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndex.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table#name DynamodbTable#name}.

---

##### `ProjectionType`<sup>Required</sup> <a name="ProjectionType" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndex.property.projectionType"></a>

```csharp
public string ProjectionType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table#projection_type DynamodbTable#projection_type}.

---

##### `RangeKey`<sup>Required</sup> <a name="RangeKey" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndex.property.rangeKey"></a>

```csharp
public string RangeKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table#range_key DynamodbTable#range_key}.

---

##### `NonKeyAttributes`<sup>Optional</sup> <a name="NonKeyAttributes" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndex.property.nonKeyAttributes"></a>

```csharp
public string[] NonKeyAttributes { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table#non_key_attributes DynamodbTable#non_key_attributes}.

---

### DynamodbTablePointInTimeRecovery <a name="DynamodbTablePointInTimeRecovery" id="@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecovery"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecovery.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DynamodbTablePointInTimeRecovery {
    object Enabled
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecovery.property.enabled">Enabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table#enabled DynamodbTable#enabled}. |

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecovery.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table#enabled DynamodbTable#enabled}.

---

### DynamodbTableReplica <a name="DynamodbTableReplica" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplica"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplica.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DynamodbTableReplica {
    string RegionName,
    string KmsKeyArn = null,
    object PointInTimeRecovery = null,
    object PropagateTags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableReplica.property.regionName">RegionName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table#region_name DynamodbTable#region_name}. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableReplica.property.kmsKeyArn">KmsKeyArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table#kms_key_arn DynamodbTable#kms_key_arn}. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableReplica.property.pointInTimeRecovery">PointInTimeRecovery</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table#point_in_time_recovery DynamodbTable#point_in_time_recovery}. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableReplica.property.propagateTags">PropagateTags</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table#propagate_tags DynamodbTable#propagate_tags}. |

---

##### `RegionName`<sup>Required</sup> <a name="RegionName" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplica.property.regionName"></a>

```csharp
public string RegionName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table#region_name DynamodbTable#region_name}.

---

##### `KmsKeyArn`<sup>Optional</sup> <a name="KmsKeyArn" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplica.property.kmsKeyArn"></a>

```csharp
public string KmsKeyArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table#kms_key_arn DynamodbTable#kms_key_arn}.

---

##### `PointInTimeRecovery`<sup>Optional</sup> <a name="PointInTimeRecovery" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplica.property.pointInTimeRecovery"></a>

```csharp
public object PointInTimeRecovery { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table#point_in_time_recovery DynamodbTable#point_in_time_recovery}.

---

##### `PropagateTags`<sup>Optional</sup> <a name="PropagateTags" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplica.property.propagateTags"></a>

```csharp
public object PropagateTags { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table#propagate_tags DynamodbTable#propagate_tags}.

---

### DynamodbTableServerSideEncryption <a name="DynamodbTableServerSideEncryption" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryption.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DynamodbTableServerSideEncryption {
    object Enabled,
    string KmsKeyArn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryption.property.enabled">Enabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table#enabled DynamodbTable#enabled}. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryption.property.kmsKeyArn">KmsKeyArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table#kms_key_arn DynamodbTable#kms_key_arn}. |

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryption.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table#enabled DynamodbTable#enabled}.

---

##### `KmsKeyArn`<sup>Optional</sup> <a name="KmsKeyArn" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryption.property.kmsKeyArn"></a>

```csharp
public string KmsKeyArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table#kms_key_arn DynamodbTable#kms_key_arn}.

---

### DynamodbTableTimeouts <a name="DynamodbTableTimeouts" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DynamodbTableTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table#create DynamodbTable#create}. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table#delete DynamodbTable#delete}. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table#update DynamodbTable#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table#create DynamodbTable#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table#delete DynamodbTable#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table#update DynamodbTable#update}.

---

### DynamodbTableTtl <a name="DynamodbTableTtl" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTtl"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTtl.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DynamodbTableTtl {
    string AttributeName,
    object Enabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTtl.property.attributeName">AttributeName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table#attribute_name DynamodbTable#attribute_name}. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTtl.property.enabled">Enabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table#enabled DynamodbTable#enabled}. |

---

##### `AttributeName`<sup>Required</sup> <a name="AttributeName" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTtl.property.attributeName"></a>

```csharp
public string AttributeName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table#attribute_name DynamodbTable#attribute_name}.

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTtl.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_table#enabled DynamodbTable#enabled}.

---

## Classes <a name="Classes" id="Classes"></a>

### DynamodbTableAttributeList <a name="DynamodbTableAttributeList" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DynamodbTableAttributeList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeList.get"></a>

```csharp
private DynamodbTableAttributeOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DynamodbTableAttributeOutputReference <a name="DynamodbTableAttributeOutputReference" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DynamodbTableAttributeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableAttributeOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DynamodbTableGlobalSecondaryIndexList <a name="DynamodbTableGlobalSecondaryIndexList" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DynamodbTableGlobalSecondaryIndexList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexList.get"></a>

```csharp
private DynamodbTableGlobalSecondaryIndexOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DynamodbTableGlobalSecondaryIndexOutputReference <a name="DynamodbTableGlobalSecondaryIndexOutputReference" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DynamodbTableGlobalSecondaryIndexOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.resetNonKeyAttributes">ResetNonKeyAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.resetRangeKey">ResetRangeKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.resetReadCapacity">ResetReadCapacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.resetWriteCapacity">ResetWriteCapacity</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetNonKeyAttributes` <a name="ResetNonKeyAttributes" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.resetNonKeyAttributes"></a>

```csharp
private void ResetNonKeyAttributes()
```

##### `ResetRangeKey` <a name="ResetRangeKey" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.resetRangeKey"></a>

```csharp
private void ResetRangeKey()
```

##### `ResetReadCapacity` <a name="ResetReadCapacity" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.resetReadCapacity"></a>

```csharp
private void ResetReadCapacity()
```

##### `ResetWriteCapacity` <a name="ResetWriteCapacity" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.resetWriteCapacity"></a>

```csharp
private void ResetWriteCapacity()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.property.hashKeyInput">HashKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.property.nonKeyAttributesInput">NonKeyAttributesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.property.projectionTypeInput">ProjectionTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.property.rangeKeyInput">RangeKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.property.readCapacityInput">ReadCapacityInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.property.writeCapacityInput">WriteCapacityInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.property.hashKey">HashKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.property.nonKeyAttributes">NonKeyAttributes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.property.projectionType">ProjectionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.property.rangeKey">RangeKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.property.readCapacity">ReadCapacity</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.property.writeCapacity">WriteCapacity</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HashKeyInput`<sup>Optional</sup> <a name="HashKeyInput" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.property.hashKeyInput"></a>

```csharp
public string HashKeyInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NonKeyAttributesInput`<sup>Optional</sup> <a name="NonKeyAttributesInput" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.property.nonKeyAttributesInput"></a>

```csharp
public string[] NonKeyAttributesInput { get; }
```

- *Type:* string[]

---

##### `ProjectionTypeInput`<sup>Optional</sup> <a name="ProjectionTypeInput" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.property.projectionTypeInput"></a>

```csharp
public string ProjectionTypeInput { get; }
```

- *Type:* string

---

##### `RangeKeyInput`<sup>Optional</sup> <a name="RangeKeyInput" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.property.rangeKeyInput"></a>

```csharp
public string RangeKeyInput { get; }
```

- *Type:* string

---

##### `ReadCapacityInput`<sup>Optional</sup> <a name="ReadCapacityInput" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.property.readCapacityInput"></a>

```csharp
public double ReadCapacityInput { get; }
```

- *Type:* double

---

##### `WriteCapacityInput`<sup>Optional</sup> <a name="WriteCapacityInput" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.property.writeCapacityInput"></a>

```csharp
public double WriteCapacityInput { get; }
```

- *Type:* double

---

##### `HashKey`<sup>Required</sup> <a name="HashKey" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.property.hashKey"></a>

```csharp
public string HashKey { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NonKeyAttributes`<sup>Required</sup> <a name="NonKeyAttributes" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.property.nonKeyAttributes"></a>

```csharp
public string[] NonKeyAttributes { get; }
```

- *Type:* string[]

---

##### `ProjectionType`<sup>Required</sup> <a name="ProjectionType" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.property.projectionType"></a>

```csharp
public string ProjectionType { get; }
```

- *Type:* string

---

##### `RangeKey`<sup>Required</sup> <a name="RangeKey" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.property.rangeKey"></a>

```csharp
public string RangeKey { get; }
```

- *Type:* string

---

##### `ReadCapacity`<sup>Required</sup> <a name="ReadCapacity" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.property.readCapacity"></a>

```csharp
public double ReadCapacity { get; }
```

- *Type:* double

---

##### `WriteCapacity`<sup>Required</sup> <a name="WriteCapacity" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.property.writeCapacity"></a>

```csharp
public double WriteCapacity { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableGlobalSecondaryIndexOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DynamodbTableLocalSecondaryIndexList <a name="DynamodbTableLocalSecondaryIndexList" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DynamodbTableLocalSecondaryIndexList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexList.get"></a>

```csharp
private DynamodbTableLocalSecondaryIndexOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DynamodbTableLocalSecondaryIndexOutputReference <a name="DynamodbTableLocalSecondaryIndexOutputReference" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DynamodbTableLocalSecondaryIndexOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.resetNonKeyAttributes">ResetNonKeyAttributes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetNonKeyAttributes` <a name="ResetNonKeyAttributes" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.resetNonKeyAttributes"></a>

```csharp
private void ResetNonKeyAttributes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.property.nonKeyAttributesInput">NonKeyAttributesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.property.projectionTypeInput">ProjectionTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.property.rangeKeyInput">RangeKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.property.nonKeyAttributes">NonKeyAttributes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.property.projectionType">ProjectionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.property.rangeKey">RangeKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NonKeyAttributesInput`<sup>Optional</sup> <a name="NonKeyAttributesInput" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.property.nonKeyAttributesInput"></a>

```csharp
public string[] NonKeyAttributesInput { get; }
```

- *Type:* string[]

---

##### `ProjectionTypeInput`<sup>Optional</sup> <a name="ProjectionTypeInput" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.property.projectionTypeInput"></a>

```csharp
public string ProjectionTypeInput { get; }
```

- *Type:* string

---

##### `RangeKeyInput`<sup>Optional</sup> <a name="RangeKeyInput" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.property.rangeKeyInput"></a>

```csharp
public string RangeKeyInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NonKeyAttributes`<sup>Required</sup> <a name="NonKeyAttributes" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.property.nonKeyAttributes"></a>

```csharp
public string[] NonKeyAttributes { get; }
```

- *Type:* string[]

---

##### `ProjectionType`<sup>Required</sup> <a name="ProjectionType" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.property.projectionType"></a>

```csharp
public string ProjectionType { get; }
```

- *Type:* string

---

##### `RangeKey`<sup>Required</sup> <a name="RangeKey" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.property.rangeKey"></a>

```csharp
public string RangeKey { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableLocalSecondaryIndexOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DynamodbTablePointInTimeRecoveryOutputReference <a name="DynamodbTablePointInTimeRecoveryOutputReference" id="@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecoveryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecoveryOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DynamodbTablePointInTimeRecoveryOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecoveryOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecoveryOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecoveryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecoveryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecoveryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecoveryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecoveryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecoveryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecoveryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecoveryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecoveryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecoveryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecoveryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecoveryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecoveryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecoveryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecoveryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecoveryOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecoveryOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecoveryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecoveryOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecoveryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecoveryOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecoveryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecoveryOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecoveryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecoveryOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecoveryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecoveryOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecoveryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecoveryOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecoveryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecoveryOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecoveryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecoveryOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecoveryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecoveryOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecoveryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecoveryOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecoveryOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecoveryOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecoveryOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecoveryOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecoveryOutputReference.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecoveryOutputReference.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecoveryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecovery">DynamodbTablePointInTimeRecovery</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecoveryOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecoveryOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecoveryOutputReference.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecoveryOutputReference.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecoveryOutputReference.property.internalValue"></a>

```csharp
public DynamodbTablePointInTimeRecovery InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTablePointInTimeRecovery">DynamodbTablePointInTimeRecovery</a>

---


### DynamodbTableReplicaList <a name="DynamodbTableReplicaList" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DynamodbTableReplicaList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaList.get"></a>

```csharp
private DynamodbTableReplicaOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DynamodbTableReplicaOutputReference <a name="DynamodbTableReplicaOutputReference" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DynamodbTableReplicaOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.resetKmsKeyArn">ResetKmsKeyArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.resetPointInTimeRecovery">ResetPointInTimeRecovery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.resetPropagateTags">ResetPropagateTags</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKmsKeyArn` <a name="ResetKmsKeyArn" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.resetKmsKeyArn"></a>

```csharp
private void ResetKmsKeyArn()
```

##### `ResetPointInTimeRecovery` <a name="ResetPointInTimeRecovery" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.resetPointInTimeRecovery"></a>

```csharp
private void ResetPointInTimeRecovery()
```

##### `ResetPropagateTags` <a name="ResetPropagateTags" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.resetPropagateTags"></a>

```csharp
private void ResetPropagateTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.property.streamArn">StreamArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.property.streamLabel">StreamLabel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.property.kmsKeyArnInput">KmsKeyArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.property.pointInTimeRecoveryInput">PointInTimeRecoveryInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.property.propagateTagsInput">PropagateTagsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.property.regionNameInput">RegionNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.property.kmsKeyArn">KmsKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.property.pointInTimeRecovery">PointInTimeRecovery</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.property.propagateTags">PropagateTags</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.property.regionName">RegionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `StreamArn`<sup>Required</sup> <a name="StreamArn" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.property.streamArn"></a>

```csharp
public string StreamArn { get; }
```

- *Type:* string

---

##### `StreamLabel`<sup>Required</sup> <a name="StreamLabel" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.property.streamLabel"></a>

```csharp
public string StreamLabel { get; }
```

- *Type:* string

---

##### `KmsKeyArnInput`<sup>Optional</sup> <a name="KmsKeyArnInput" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.property.kmsKeyArnInput"></a>

```csharp
public string KmsKeyArnInput { get; }
```

- *Type:* string

---

##### `PointInTimeRecoveryInput`<sup>Optional</sup> <a name="PointInTimeRecoveryInput" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.property.pointInTimeRecoveryInput"></a>

```csharp
public object PointInTimeRecoveryInput { get; }
```

- *Type:* object

---

##### `PropagateTagsInput`<sup>Optional</sup> <a name="PropagateTagsInput" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.property.propagateTagsInput"></a>

```csharp
public object PropagateTagsInput { get; }
```

- *Type:* object

---

##### `RegionNameInput`<sup>Optional</sup> <a name="RegionNameInput" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.property.regionNameInput"></a>

```csharp
public string RegionNameInput { get; }
```

- *Type:* string

---

##### `KmsKeyArn`<sup>Required</sup> <a name="KmsKeyArn" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.property.kmsKeyArn"></a>

```csharp
public string KmsKeyArn { get; }
```

- *Type:* string

---

##### `PointInTimeRecovery`<sup>Required</sup> <a name="PointInTimeRecovery" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.property.pointInTimeRecovery"></a>

```csharp
public object PointInTimeRecovery { get; }
```

- *Type:* object

---

##### `PropagateTags`<sup>Required</sup> <a name="PropagateTags" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.property.propagateTags"></a>

```csharp
public object PropagateTags { get; }
```

- *Type:* object

---

##### `RegionName`<sup>Required</sup> <a name="RegionName" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.property.regionName"></a>

```csharp
public string RegionName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableReplicaOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DynamodbTableServerSideEncryptionOutputReference <a name="DynamodbTableServerSideEncryptionOutputReference" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryptionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DynamodbTableServerSideEncryptionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryptionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryptionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryptionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryptionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryptionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryptionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryptionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryptionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryptionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryptionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryptionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryptionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryptionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryptionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryptionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryptionOutputReference.resetKmsKeyArn">ResetKmsKeyArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryptionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryptionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryptionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryptionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryptionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryptionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryptionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryptionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryptionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryptionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryptionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryptionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryptionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKmsKeyArn` <a name="ResetKmsKeyArn" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryptionOutputReference.resetKmsKeyArn"></a>

```csharp
private void ResetKmsKeyArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryptionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryptionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryptionOutputReference.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryptionOutputReference.property.kmsKeyArnInput">KmsKeyArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryptionOutputReference.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryptionOutputReference.property.kmsKeyArn">KmsKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryptionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryption">DynamodbTableServerSideEncryption</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryptionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryptionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryptionOutputReference.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `KmsKeyArnInput`<sup>Optional</sup> <a name="KmsKeyArnInput" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryptionOutputReference.property.kmsKeyArnInput"></a>

```csharp
public string KmsKeyArnInput { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryptionOutputReference.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `KmsKeyArn`<sup>Required</sup> <a name="KmsKeyArn" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryptionOutputReference.property.kmsKeyArn"></a>

```csharp
public string KmsKeyArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryptionOutputReference.property.internalValue"></a>

```csharp
public DynamodbTableServerSideEncryption InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableServerSideEncryption">DynamodbTableServerSideEncryption</a>

---


### DynamodbTableTimeoutsOutputReference <a name="DynamodbTableTimeoutsOutputReference" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DynamodbTableTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DynamodbTableTtlOutputReference <a name="DynamodbTableTtlOutputReference" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTtlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTtlOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new DynamodbTableTtlOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTtlOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTtlOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTtlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTtlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTtlOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTtlOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTtlOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTtlOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTtlOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTtlOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTtlOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTtlOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTtlOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTtlOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTtlOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTtlOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTtlOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTtlOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTtlOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTtlOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTtlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTtlOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTtlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTtlOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTtlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTtlOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTtlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTtlOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTtlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTtlOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTtlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTtlOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTtlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTtlOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTtlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTtlOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTtlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTtlOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTtlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTtlOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTtlOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTtlOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTtlOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTtlOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTtlOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTtlOutputReference.property.attributeNameInput">AttributeNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTtlOutputReference.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTtlOutputReference.property.attributeName">AttributeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTtlOutputReference.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTtlOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTtl">DynamodbTableTtl</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTtlOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTtlOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AttributeNameInput`<sup>Optional</sup> <a name="AttributeNameInput" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTtlOutputReference.property.attributeNameInput"></a>

```csharp
public string AttributeNameInput { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTtlOutputReference.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `AttributeName`<sup>Required</sup> <a name="AttributeName" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTtlOutputReference.property.attributeName"></a>

```csharp
public string AttributeName { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTtlOutputReference.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.dynamodbTable.DynamodbTableTtlOutputReference.property.internalValue"></a>

```csharp
public DynamodbTableTtl InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.dynamodbTable.DynamodbTableTtl">DynamodbTableTtl</a>

---



