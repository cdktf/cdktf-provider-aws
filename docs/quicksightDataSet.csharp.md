# `quicksightDataSet` Submodule <a name="`quicksightDataSet` Submodule" id="@cdktf/provider-aws.quicksightDataSet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### QuicksightDataSet <a name="QuicksightDataSet" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/quicksight_data_set aws_quicksight_data_set}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new QuicksightDataSet(Construct Scope, string Id, QuicksightDataSetConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetConfig">QuicksightDataSetConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetConfig">QuicksightDataSetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.putColumnGroups">PutColumnGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.putColumnLevelPermissionRules">PutColumnLevelPermissionRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.putDataSetUsageConfiguration">PutDataSetUsageConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.putFieldFolders">PutFieldFolders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.putLogicalTableMap">PutLogicalTableMap</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.putPermissions">PutPermissions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.putPhysicalTableMap">PutPhysicalTableMap</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.putRefreshProperties">PutRefreshProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.putRowLevelPermissionDataSet">PutRowLevelPermissionDataSet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.putRowLevelPermissionTagConfiguration">PutRowLevelPermissionTagConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.resetAwsAccountId">ResetAwsAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.resetColumnGroups">ResetColumnGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.resetColumnLevelPermissionRules">ResetColumnLevelPermissionRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.resetDataSetUsageConfiguration">ResetDataSetUsageConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.resetFieldFolders">ResetFieldFolders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.resetLogicalTableMap">ResetLogicalTableMap</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.resetPermissions">ResetPermissions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.resetPhysicalTableMap">ResetPhysicalTableMap</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.resetRefreshProperties">ResetRefreshProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.resetRowLevelPermissionDataSet">ResetRowLevelPermissionDataSet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.resetRowLevelPermissionTagConfiguration">ResetRowLevelPermissionTagConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.resetTagsAll">ResetTagsAll</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutColumnGroups` <a name="PutColumnGroups" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.putColumnGroups"></a>

```csharp
private void PutColumnGroups(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.putColumnGroups.parameter.value"></a>

- *Type:* object

---

##### `PutColumnLevelPermissionRules` <a name="PutColumnLevelPermissionRules" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.putColumnLevelPermissionRules"></a>

```csharp
private void PutColumnLevelPermissionRules(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.putColumnLevelPermissionRules.parameter.value"></a>

- *Type:* object

---

##### `PutDataSetUsageConfiguration` <a name="PutDataSetUsageConfiguration" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.putDataSetUsageConfiguration"></a>

```csharp
private void PutDataSetUsageConfiguration(QuicksightDataSetDataSetUsageConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.putDataSetUsageConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetDataSetUsageConfiguration">QuicksightDataSetDataSetUsageConfiguration</a>

---

##### `PutFieldFolders` <a name="PutFieldFolders" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.putFieldFolders"></a>

```csharp
private void PutFieldFolders(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.putFieldFolders.parameter.value"></a>

- *Type:* object

---

##### `PutLogicalTableMap` <a name="PutLogicalTableMap" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.putLogicalTableMap"></a>

```csharp
private void PutLogicalTableMap(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.putLogicalTableMap.parameter.value"></a>

- *Type:* object

---

##### `PutPermissions` <a name="PutPermissions" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.putPermissions"></a>

```csharp
private void PutPermissions(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.putPermissions.parameter.value"></a>

- *Type:* object

---

##### `PutPhysicalTableMap` <a name="PutPhysicalTableMap" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.putPhysicalTableMap"></a>

```csharp
private void PutPhysicalTableMap(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.putPhysicalTableMap.parameter.value"></a>

- *Type:* object

---

##### `PutRefreshProperties` <a name="PutRefreshProperties" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.putRefreshProperties"></a>

```csharp
private void PutRefreshProperties(QuicksightDataSetRefreshProperties Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.putRefreshProperties.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshProperties">QuicksightDataSetRefreshProperties</a>

---

##### `PutRowLevelPermissionDataSet` <a name="PutRowLevelPermissionDataSet" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.putRowLevelPermissionDataSet"></a>

```csharp
private void PutRowLevelPermissionDataSet(QuicksightDataSetRowLevelPermissionDataSet Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.putRowLevelPermissionDataSet.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSet">QuicksightDataSetRowLevelPermissionDataSet</a>

---

##### `PutRowLevelPermissionTagConfiguration` <a name="PutRowLevelPermissionTagConfiguration" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.putRowLevelPermissionTagConfiguration"></a>

```csharp
private void PutRowLevelPermissionTagConfiguration(QuicksightDataSetRowLevelPermissionTagConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.putRowLevelPermissionTagConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfiguration">QuicksightDataSetRowLevelPermissionTagConfiguration</a>

---

##### `ResetAwsAccountId` <a name="ResetAwsAccountId" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.resetAwsAccountId"></a>

```csharp
private void ResetAwsAccountId()
```

##### `ResetColumnGroups` <a name="ResetColumnGroups" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.resetColumnGroups"></a>

```csharp
private void ResetColumnGroups()
```

##### `ResetColumnLevelPermissionRules` <a name="ResetColumnLevelPermissionRules" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.resetColumnLevelPermissionRules"></a>

```csharp
private void ResetColumnLevelPermissionRules()
```

##### `ResetDataSetUsageConfiguration` <a name="ResetDataSetUsageConfiguration" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.resetDataSetUsageConfiguration"></a>

```csharp
private void ResetDataSetUsageConfiguration()
```

##### `ResetFieldFolders` <a name="ResetFieldFolders" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.resetFieldFolders"></a>

```csharp
private void ResetFieldFolders()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLogicalTableMap` <a name="ResetLogicalTableMap" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.resetLogicalTableMap"></a>

```csharp
private void ResetLogicalTableMap()
```

##### `ResetPermissions` <a name="ResetPermissions" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.resetPermissions"></a>

```csharp
private void ResetPermissions()
```

##### `ResetPhysicalTableMap` <a name="ResetPhysicalTableMap" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.resetPhysicalTableMap"></a>

```csharp
private void ResetPhysicalTableMap()
```

##### `ResetRefreshProperties` <a name="ResetRefreshProperties" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.resetRefreshProperties"></a>

```csharp
private void ResetRefreshProperties()
```

##### `ResetRowLevelPermissionDataSet` <a name="ResetRowLevelPermissionDataSet" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.resetRowLevelPermissionDataSet"></a>

```csharp
private void ResetRowLevelPermissionDataSet()
```

##### `ResetRowLevelPermissionTagConfiguration` <a name="ResetRowLevelPermissionTagConfiguration" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.resetRowLevelPermissionTagConfiguration"></a>

```csharp
private void ResetRowLevelPermissionTagConfiguration()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a QuicksightDataSet resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

QuicksightDataSet.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

QuicksightDataSet.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

QuicksightDataSet.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

QuicksightDataSet.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a QuicksightDataSet resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the QuicksightDataSet to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing QuicksightDataSet that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/quicksight_data_set#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the QuicksightDataSet to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.property.columnGroups">ColumnGroups</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsList">QuicksightDataSetColumnGroupsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.property.columnLevelPermissionRules">ColumnLevelPermissionRules</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesList">QuicksightDataSetColumnLevelPermissionRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.property.dataSetUsageConfiguration">DataSetUsageConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference">QuicksightDataSetDataSetUsageConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.property.fieldFolders">FieldFolders</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetFieldFoldersList">QuicksightDataSetFieldFoldersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.property.logicalTableMap">LogicalTableMap</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapList">QuicksightDataSetLogicalTableMapList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.property.outputColumns">OutputColumns</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetOutputColumnsList">QuicksightDataSetOutputColumnsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.property.permissions">Permissions</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPermissionsList">QuicksightDataSetPermissionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.property.physicalTableMap">PhysicalTableMap</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapList">QuicksightDataSetPhysicalTableMapList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.property.refreshProperties">RefreshProperties</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesOutputReference">QuicksightDataSetRefreshPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.property.rowLevelPermissionDataSet">RowLevelPermissionDataSet</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference">QuicksightDataSetRowLevelPermissionDataSetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.property.rowLevelPermissionTagConfiguration">RowLevelPermissionTagConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationOutputReference">QuicksightDataSetRowLevelPermissionTagConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.property.awsAccountIdInput">AwsAccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.property.columnGroupsInput">ColumnGroupsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.property.columnLevelPermissionRulesInput">ColumnLevelPermissionRulesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.property.dataSetIdInput">DataSetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.property.dataSetUsageConfigurationInput">DataSetUsageConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetDataSetUsageConfiguration">QuicksightDataSetDataSetUsageConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.property.fieldFoldersInput">FieldFoldersInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.property.importModeInput">ImportModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.property.logicalTableMapInput">LogicalTableMapInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.property.permissionsInput">PermissionsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.property.physicalTableMapInput">PhysicalTableMapInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.property.refreshPropertiesInput">RefreshPropertiesInput</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshProperties">QuicksightDataSetRefreshProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.property.rowLevelPermissionDataSetInput">RowLevelPermissionDataSetInput</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSet">QuicksightDataSetRowLevelPermissionDataSet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.property.rowLevelPermissionTagConfigurationInput">RowLevelPermissionTagConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfiguration">QuicksightDataSetRowLevelPermissionTagConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.property.awsAccountId">AwsAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.property.dataSetId">DataSetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.property.importMode">ImportMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `ColumnGroups`<sup>Required</sup> <a name="ColumnGroups" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.property.columnGroups"></a>

```csharp
public QuicksightDataSetColumnGroupsList ColumnGroups { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsList">QuicksightDataSetColumnGroupsList</a>

---

##### `ColumnLevelPermissionRules`<sup>Required</sup> <a name="ColumnLevelPermissionRules" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.property.columnLevelPermissionRules"></a>

```csharp
public QuicksightDataSetColumnLevelPermissionRulesList ColumnLevelPermissionRules { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesList">QuicksightDataSetColumnLevelPermissionRulesList</a>

---

##### `DataSetUsageConfiguration`<sup>Required</sup> <a name="DataSetUsageConfiguration" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.property.dataSetUsageConfiguration"></a>

```csharp
public QuicksightDataSetDataSetUsageConfigurationOutputReference DataSetUsageConfiguration { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference">QuicksightDataSetDataSetUsageConfigurationOutputReference</a>

---

##### `FieldFolders`<sup>Required</sup> <a name="FieldFolders" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.property.fieldFolders"></a>

```csharp
public QuicksightDataSetFieldFoldersList FieldFolders { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetFieldFoldersList">QuicksightDataSetFieldFoldersList</a>

---

##### `LogicalTableMap`<sup>Required</sup> <a name="LogicalTableMap" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.property.logicalTableMap"></a>

```csharp
public QuicksightDataSetLogicalTableMapList LogicalTableMap { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapList">QuicksightDataSetLogicalTableMapList</a>

---

##### `OutputColumns`<sup>Required</sup> <a name="OutputColumns" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.property.outputColumns"></a>

```csharp
public QuicksightDataSetOutputColumnsList OutputColumns { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetOutputColumnsList">QuicksightDataSetOutputColumnsList</a>

---

##### `Permissions`<sup>Required</sup> <a name="Permissions" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.property.permissions"></a>

```csharp
public QuicksightDataSetPermissionsList Permissions { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPermissionsList">QuicksightDataSetPermissionsList</a>

---

##### `PhysicalTableMap`<sup>Required</sup> <a name="PhysicalTableMap" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.property.physicalTableMap"></a>

```csharp
public QuicksightDataSetPhysicalTableMapList PhysicalTableMap { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapList">QuicksightDataSetPhysicalTableMapList</a>

---

##### `RefreshProperties`<sup>Required</sup> <a name="RefreshProperties" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.property.refreshProperties"></a>

```csharp
public QuicksightDataSetRefreshPropertiesOutputReference RefreshProperties { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesOutputReference">QuicksightDataSetRefreshPropertiesOutputReference</a>

---

##### `RowLevelPermissionDataSet`<sup>Required</sup> <a name="RowLevelPermissionDataSet" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.property.rowLevelPermissionDataSet"></a>

```csharp
public QuicksightDataSetRowLevelPermissionDataSetOutputReference RowLevelPermissionDataSet { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference">QuicksightDataSetRowLevelPermissionDataSetOutputReference</a>

---

##### `RowLevelPermissionTagConfiguration`<sup>Required</sup> <a name="RowLevelPermissionTagConfiguration" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.property.rowLevelPermissionTagConfiguration"></a>

```csharp
public QuicksightDataSetRowLevelPermissionTagConfigurationOutputReference RowLevelPermissionTagConfiguration { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationOutputReference">QuicksightDataSetRowLevelPermissionTagConfigurationOutputReference</a>

---

##### `AwsAccountIdInput`<sup>Optional</sup> <a name="AwsAccountIdInput" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.property.awsAccountIdInput"></a>

```csharp
public string AwsAccountIdInput { get; }
```

- *Type:* string

---

##### `ColumnGroupsInput`<sup>Optional</sup> <a name="ColumnGroupsInput" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.property.columnGroupsInput"></a>

```csharp
public object ColumnGroupsInput { get; }
```

- *Type:* object

---

##### `ColumnLevelPermissionRulesInput`<sup>Optional</sup> <a name="ColumnLevelPermissionRulesInput" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.property.columnLevelPermissionRulesInput"></a>

```csharp
public object ColumnLevelPermissionRulesInput { get; }
```

- *Type:* object

---

##### `DataSetIdInput`<sup>Optional</sup> <a name="DataSetIdInput" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.property.dataSetIdInput"></a>

```csharp
public string DataSetIdInput { get; }
```

- *Type:* string

---

##### `DataSetUsageConfigurationInput`<sup>Optional</sup> <a name="DataSetUsageConfigurationInput" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.property.dataSetUsageConfigurationInput"></a>

```csharp
public QuicksightDataSetDataSetUsageConfiguration DataSetUsageConfigurationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetDataSetUsageConfiguration">QuicksightDataSetDataSetUsageConfiguration</a>

---

##### `FieldFoldersInput`<sup>Optional</sup> <a name="FieldFoldersInput" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.property.fieldFoldersInput"></a>

```csharp
public object FieldFoldersInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ImportModeInput`<sup>Optional</sup> <a name="ImportModeInput" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.property.importModeInput"></a>

```csharp
public string ImportModeInput { get; }
```

- *Type:* string

---

##### `LogicalTableMapInput`<sup>Optional</sup> <a name="LogicalTableMapInput" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.property.logicalTableMapInput"></a>

```csharp
public object LogicalTableMapInput { get; }
```

- *Type:* object

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PermissionsInput`<sup>Optional</sup> <a name="PermissionsInput" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.property.permissionsInput"></a>

```csharp
public object PermissionsInput { get; }
```

- *Type:* object

---

##### `PhysicalTableMapInput`<sup>Optional</sup> <a name="PhysicalTableMapInput" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.property.physicalTableMapInput"></a>

```csharp
public object PhysicalTableMapInput { get; }
```

- *Type:* object

---

##### `RefreshPropertiesInput`<sup>Optional</sup> <a name="RefreshPropertiesInput" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.property.refreshPropertiesInput"></a>

```csharp
public QuicksightDataSetRefreshProperties RefreshPropertiesInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshProperties">QuicksightDataSetRefreshProperties</a>

---

##### `RowLevelPermissionDataSetInput`<sup>Optional</sup> <a name="RowLevelPermissionDataSetInput" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.property.rowLevelPermissionDataSetInput"></a>

```csharp
public QuicksightDataSetRowLevelPermissionDataSet RowLevelPermissionDataSetInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSet">QuicksightDataSetRowLevelPermissionDataSet</a>

---

##### `RowLevelPermissionTagConfigurationInput`<sup>Optional</sup> <a name="RowLevelPermissionTagConfigurationInput" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.property.rowLevelPermissionTagConfigurationInput"></a>

```csharp
public QuicksightDataSetRowLevelPermissionTagConfiguration RowLevelPermissionTagConfigurationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfiguration">QuicksightDataSetRowLevelPermissionTagConfiguration</a>

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `AwsAccountId`<sup>Required</sup> <a name="AwsAccountId" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.property.awsAccountId"></a>

```csharp
public string AwsAccountId { get; }
```

- *Type:* string

---

##### `DataSetId`<sup>Required</sup> <a name="DataSetId" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.property.dataSetId"></a>

```csharp
public string DataSetId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ImportMode`<sup>Required</sup> <a name="ImportMode" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.property.importMode"></a>

```csharp
public string ImportMode { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSet.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### QuicksightDataSetColumnGroups <a name="QuicksightDataSetColumnGroups" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroups"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroups.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new QuicksightDataSetColumnGroups {
    QuicksightDataSetColumnGroupsGeoSpatialColumnGroup GeoSpatialColumnGroup = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroups.property.geoSpatialColumnGroup">GeoSpatialColumnGroup</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroup">QuicksightDataSetColumnGroupsGeoSpatialColumnGroup</a></code> | geo_spatial_column_group block. |

---

##### `GeoSpatialColumnGroup`<sup>Optional</sup> <a name="GeoSpatialColumnGroup" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroups.property.geoSpatialColumnGroup"></a>

```csharp
public QuicksightDataSetColumnGroupsGeoSpatialColumnGroup GeoSpatialColumnGroup { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroup">QuicksightDataSetColumnGroupsGeoSpatialColumnGroup</a>

geo_spatial_column_group block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/quicksight_data_set#geo_spatial_column_group QuicksightDataSet#geo_spatial_column_group}

---

### QuicksightDataSetColumnGroupsGeoSpatialColumnGroup <a name="QuicksightDataSetColumnGroupsGeoSpatialColumnGroup" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroup"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroup.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new QuicksightDataSetColumnGroupsGeoSpatialColumnGroup {
    string[] Columns,
    string CountryCode,
    string Name
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroup.property.columns">Columns</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/quicksight_data_set#columns QuicksightDataSet#columns}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroup.property.countryCode">CountryCode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/quicksight_data_set#country_code QuicksightDataSet#country_code}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroup.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/quicksight_data_set#name QuicksightDataSet#name}. |

---

##### `Columns`<sup>Required</sup> <a name="Columns" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroup.property.columns"></a>

```csharp
public string[] Columns { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/quicksight_data_set#columns QuicksightDataSet#columns}.

---

##### `CountryCode`<sup>Required</sup> <a name="CountryCode" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroup.property.countryCode"></a>

```csharp
public string CountryCode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/quicksight_data_set#country_code QuicksightDataSet#country_code}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroup.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/quicksight_data_set#name QuicksightDataSet#name}.

---

### QuicksightDataSetColumnLevelPermissionRules <a name="QuicksightDataSetColumnLevelPermissionRules" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRules.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new QuicksightDataSetColumnLevelPermissionRules {
    string[] ColumnNames = null,
    string[] Principals = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRules.property.columnNames">ColumnNames</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/quicksight_data_set#column_names QuicksightDataSet#column_names}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRules.property.principals">Principals</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/quicksight_data_set#principals QuicksightDataSet#principals}. |

---

##### `ColumnNames`<sup>Optional</sup> <a name="ColumnNames" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRules.property.columnNames"></a>

```csharp
public string[] ColumnNames { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/quicksight_data_set#column_names QuicksightDataSet#column_names}.

---

##### `Principals`<sup>Optional</sup> <a name="Principals" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRules.property.principals"></a>

```csharp
public string[] Principals { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/quicksight_data_set#principals QuicksightDataSet#principals}.

---

### QuicksightDataSetConfig <a name="QuicksightDataSetConfig" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new QuicksightDataSetConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string DataSetId,
    string ImportMode,
    string Name,
    string AwsAccountId = null,
    object ColumnGroups = null,
    object ColumnLevelPermissionRules = null,
    QuicksightDataSetDataSetUsageConfiguration DataSetUsageConfiguration = null,
    object FieldFolders = null,
    string Id = null,
    object LogicalTableMap = null,
    object Permissions = null,
    object PhysicalTableMap = null,
    QuicksightDataSetRefreshProperties RefreshProperties = null,
    QuicksightDataSetRowLevelPermissionDataSet RowLevelPermissionDataSet = null,
    QuicksightDataSetRowLevelPermissionTagConfiguration RowLevelPermissionTagConfiguration = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetConfig.property.dataSetId">DataSetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/quicksight_data_set#data_set_id QuicksightDataSet#data_set_id}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetConfig.property.importMode">ImportMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/quicksight_data_set#import_mode QuicksightDataSet#import_mode}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/quicksight_data_set#name QuicksightDataSet#name}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetConfig.property.awsAccountId">AwsAccountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/quicksight_data_set#aws_account_id QuicksightDataSet#aws_account_id}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetConfig.property.columnGroups">ColumnGroups</a></code> | <code>object</code> | column_groups block. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetConfig.property.columnLevelPermissionRules">ColumnLevelPermissionRules</a></code> | <code>object</code> | column_level_permission_rules block. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetConfig.property.dataSetUsageConfiguration">DataSetUsageConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetDataSetUsageConfiguration">QuicksightDataSetDataSetUsageConfiguration</a></code> | data_set_usage_configuration block. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetConfig.property.fieldFolders">FieldFolders</a></code> | <code>object</code> | field_folders block. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/quicksight_data_set#id QuicksightDataSet#id}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetConfig.property.logicalTableMap">LogicalTableMap</a></code> | <code>object</code> | logical_table_map block. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetConfig.property.permissions">Permissions</a></code> | <code>object</code> | permissions block. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetConfig.property.physicalTableMap">PhysicalTableMap</a></code> | <code>object</code> | physical_table_map block. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetConfig.property.refreshProperties">RefreshProperties</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshProperties">QuicksightDataSetRefreshProperties</a></code> | refresh_properties block. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetConfig.property.rowLevelPermissionDataSet">RowLevelPermissionDataSet</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSet">QuicksightDataSetRowLevelPermissionDataSet</a></code> | row_level_permission_data_set block. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetConfig.property.rowLevelPermissionTagConfiguration">RowLevelPermissionTagConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfiguration">QuicksightDataSetRowLevelPermissionTagConfiguration</a></code> | row_level_permission_tag_configuration block. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/quicksight_data_set#tags QuicksightDataSet#tags}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/quicksight_data_set#tags_all QuicksightDataSet#tags_all}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `DataSetId`<sup>Required</sup> <a name="DataSetId" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetConfig.property.dataSetId"></a>

```csharp
public string DataSetId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/quicksight_data_set#data_set_id QuicksightDataSet#data_set_id}.

---

##### `ImportMode`<sup>Required</sup> <a name="ImportMode" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetConfig.property.importMode"></a>

```csharp
public string ImportMode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/quicksight_data_set#import_mode QuicksightDataSet#import_mode}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/quicksight_data_set#name QuicksightDataSet#name}.

---

##### `AwsAccountId`<sup>Optional</sup> <a name="AwsAccountId" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetConfig.property.awsAccountId"></a>

```csharp
public string AwsAccountId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/quicksight_data_set#aws_account_id QuicksightDataSet#aws_account_id}.

---

##### `ColumnGroups`<sup>Optional</sup> <a name="ColumnGroups" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetConfig.property.columnGroups"></a>

```csharp
public object ColumnGroups { get; set; }
```

- *Type:* object

column_groups block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/quicksight_data_set#column_groups QuicksightDataSet#column_groups}

---

##### `ColumnLevelPermissionRules`<sup>Optional</sup> <a name="ColumnLevelPermissionRules" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetConfig.property.columnLevelPermissionRules"></a>

```csharp
public object ColumnLevelPermissionRules { get; set; }
```

- *Type:* object

column_level_permission_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/quicksight_data_set#column_level_permission_rules QuicksightDataSet#column_level_permission_rules}

---

##### `DataSetUsageConfiguration`<sup>Optional</sup> <a name="DataSetUsageConfiguration" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetConfig.property.dataSetUsageConfiguration"></a>

```csharp
public QuicksightDataSetDataSetUsageConfiguration DataSetUsageConfiguration { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetDataSetUsageConfiguration">QuicksightDataSetDataSetUsageConfiguration</a>

data_set_usage_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/quicksight_data_set#data_set_usage_configuration QuicksightDataSet#data_set_usage_configuration}

---

##### `FieldFolders`<sup>Optional</sup> <a name="FieldFolders" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetConfig.property.fieldFolders"></a>

```csharp
public object FieldFolders { get; set; }
```

- *Type:* object

field_folders block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/quicksight_data_set#field_folders QuicksightDataSet#field_folders}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/quicksight_data_set#id QuicksightDataSet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LogicalTableMap`<sup>Optional</sup> <a name="LogicalTableMap" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetConfig.property.logicalTableMap"></a>

```csharp
public object LogicalTableMap { get; set; }
```

- *Type:* object

logical_table_map block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/quicksight_data_set#logical_table_map QuicksightDataSet#logical_table_map}

---

##### `Permissions`<sup>Optional</sup> <a name="Permissions" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetConfig.property.permissions"></a>

```csharp
public object Permissions { get; set; }
```

- *Type:* object

permissions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/quicksight_data_set#permissions QuicksightDataSet#permissions}

---

##### `PhysicalTableMap`<sup>Optional</sup> <a name="PhysicalTableMap" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetConfig.property.physicalTableMap"></a>

```csharp
public object PhysicalTableMap { get; set; }
```

- *Type:* object

physical_table_map block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/quicksight_data_set#physical_table_map QuicksightDataSet#physical_table_map}

---

##### `RefreshProperties`<sup>Optional</sup> <a name="RefreshProperties" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetConfig.property.refreshProperties"></a>

```csharp
public QuicksightDataSetRefreshProperties RefreshProperties { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshProperties">QuicksightDataSetRefreshProperties</a>

refresh_properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/quicksight_data_set#refresh_properties QuicksightDataSet#refresh_properties}

---

##### `RowLevelPermissionDataSet`<sup>Optional</sup> <a name="RowLevelPermissionDataSet" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetConfig.property.rowLevelPermissionDataSet"></a>

```csharp
public QuicksightDataSetRowLevelPermissionDataSet RowLevelPermissionDataSet { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSet">QuicksightDataSetRowLevelPermissionDataSet</a>

row_level_permission_data_set block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/quicksight_data_set#row_level_permission_data_set QuicksightDataSet#row_level_permission_data_set}

---

##### `RowLevelPermissionTagConfiguration`<sup>Optional</sup> <a name="RowLevelPermissionTagConfiguration" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetConfig.property.rowLevelPermissionTagConfiguration"></a>

```csharp
public QuicksightDataSetRowLevelPermissionTagConfiguration RowLevelPermissionTagConfiguration { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfiguration">QuicksightDataSetRowLevelPermissionTagConfiguration</a>

row_level_permission_tag_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/quicksight_data_set#row_level_permission_tag_configuration QuicksightDataSet#row_level_permission_tag_configuration}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/quicksight_data_set#tags QuicksightDataSet#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/quicksight_data_set#tags_all QuicksightDataSet#tags_all}.

---

### QuicksightDataSetDataSetUsageConfiguration <a name="QuicksightDataSetDataSetUsageConfiguration" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetDataSetUsageConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetDataSetUsageConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new QuicksightDataSetDataSetUsageConfiguration {
    object DisableUseAsDirectQuerySource = null,
    object DisableUseAsImportedSource = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetDataSetUsageConfiguration.property.disableUseAsDirectQuerySource">DisableUseAsDirectQuerySource</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/quicksight_data_set#disable_use_as_direct_query_source QuicksightDataSet#disable_use_as_direct_query_source}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetDataSetUsageConfiguration.property.disableUseAsImportedSource">DisableUseAsImportedSource</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/quicksight_data_set#disable_use_as_imported_source QuicksightDataSet#disable_use_as_imported_source}. |

---

##### `DisableUseAsDirectQuerySource`<sup>Optional</sup> <a name="DisableUseAsDirectQuerySource" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetDataSetUsageConfiguration.property.disableUseAsDirectQuerySource"></a>

```csharp
public object DisableUseAsDirectQuerySource { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/quicksight_data_set#disable_use_as_direct_query_source QuicksightDataSet#disable_use_as_direct_query_source}.

---

##### `DisableUseAsImportedSource`<sup>Optional</sup> <a name="DisableUseAsImportedSource" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetDataSetUsageConfiguration.property.disableUseAsImportedSource"></a>

```csharp
public object DisableUseAsImportedSource { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/quicksight_data_set#disable_use_as_imported_source QuicksightDataSet#disable_use_as_imported_source}.

---

### QuicksightDataSetFieldFolders <a name="QuicksightDataSetFieldFolders" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetFieldFolders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetFieldFolders.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new QuicksightDataSetFieldFolders {
    string FieldFoldersId,
    string[] Columns = null,
    string Description = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetFieldFolders.property.fieldFoldersId">FieldFoldersId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/quicksight_data_set#field_folders_id QuicksightDataSet#field_folders_id}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetFieldFolders.property.columns">Columns</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/quicksight_data_set#columns QuicksightDataSet#columns}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetFieldFolders.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/quicksight_data_set#description QuicksightDataSet#description}. |

---

##### `FieldFoldersId`<sup>Required</sup> <a name="FieldFoldersId" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetFieldFolders.property.fieldFoldersId"></a>

```csharp
public string FieldFoldersId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/quicksight_data_set#field_folders_id QuicksightDataSet#field_folders_id}.

---

##### `Columns`<sup>Optional</sup> <a name="Columns" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetFieldFolders.property.columns"></a>

```csharp
public string[] Columns { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/quicksight_data_set#columns QuicksightDataSet#columns}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetFieldFolders.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/quicksight_data_set#description QuicksightDataSet#description}.

---

### QuicksightDataSetLogicalTableMap <a name="QuicksightDataSetLogicalTableMap" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMap"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMap.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new QuicksightDataSetLogicalTableMap {
    string Alias,
    string LogicalTableMapId,
    QuicksightDataSetLogicalTableMapSource Source,
    object DataTransforms = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMap.property.alias">Alias</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/quicksight_data_set#alias QuicksightDataSet#alias}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMap.property.logicalTableMapId">LogicalTableMapId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/quicksight_data_set#logical_table_map_id QuicksightDataSet#logical_table_map_id}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMap.property.source">Source</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSource">QuicksightDataSetLogicalTableMapSource</a></code> | source block. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMap.property.dataTransforms">DataTransforms</a></code> | <code>object</code> | data_transforms block. |

---

##### `Alias`<sup>Required</sup> <a name="Alias" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMap.property.alias"></a>

```csharp
public string Alias { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/quicksight_data_set#alias QuicksightDataSet#alias}.

---

##### `LogicalTableMapId`<sup>Required</sup> <a name="LogicalTableMapId" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMap.property.logicalTableMapId"></a>

```csharp
public string LogicalTableMapId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/quicksight_data_set#logical_table_map_id QuicksightDataSet#logical_table_map_id}.

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMap.property.source"></a>

```csharp
public QuicksightDataSetLogicalTableMapSource Source { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSource">QuicksightDataSetLogicalTableMapSource</a>

source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/quicksight_data_set#source QuicksightDataSet#source}

---

##### `DataTransforms`<sup>Optional</sup> <a name="DataTransforms" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMap.property.dataTransforms"></a>

```csharp
public object DataTransforms { get; set; }
```

- *Type:* object

data_transforms block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/quicksight_data_set#data_transforms QuicksightDataSet#data_transforms}

---

### QuicksightDataSetLogicalTableMapDataTransforms <a name="QuicksightDataSetLogicalTableMapDataTransforms" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransforms"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransforms.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new QuicksightDataSetLogicalTableMapDataTransforms {
    QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperation CastColumnTypeOperation = null,
    QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperation CreateColumnsOperation = null,
    QuicksightDataSetLogicalTableMapDataTransformsFilterOperation FilterOperation = null,
    QuicksightDataSetLogicalTableMapDataTransformsProjectOperation ProjectOperation = null,
    QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperation RenameColumnOperation = null,
    QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperation TagColumnOperation = null,
    QuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperation UntagColumnOperation = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransforms.property.castColumnTypeOperation">CastColumnTypeOperation</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperation">QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperation</a></code> | cast_column_type_operation block. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransforms.property.createColumnsOperation">CreateColumnsOperation</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperation">QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperation</a></code> | create_columns_operation block. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransforms.property.filterOperation">FilterOperation</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperation">QuicksightDataSetLogicalTableMapDataTransformsFilterOperation</a></code> | filter_operation block. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransforms.property.projectOperation">ProjectOperation</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperation">QuicksightDataSetLogicalTableMapDataTransformsProjectOperation</a></code> | project_operation block. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransforms.property.renameColumnOperation">RenameColumnOperation</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperation">QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperation</a></code> | rename_column_operation block. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransforms.property.tagColumnOperation">TagColumnOperation</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperation">QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperation</a></code> | tag_column_operation block. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransforms.property.untagColumnOperation">UntagColumnOperation</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperation">QuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperation</a></code> | untag_column_operation block. |

---

##### `CastColumnTypeOperation`<sup>Optional</sup> <a name="CastColumnTypeOperation" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransforms.property.castColumnTypeOperation"></a>

```csharp
public QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperation CastColumnTypeOperation { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperation">QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperation</a>

cast_column_type_operation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/quicksight_data_set#cast_column_type_operation QuicksightDataSet#cast_column_type_operation}

---

##### `CreateColumnsOperation`<sup>Optional</sup> <a name="CreateColumnsOperation" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransforms.property.createColumnsOperation"></a>

```csharp
public QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperation CreateColumnsOperation { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperation">QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperation</a>

create_columns_operation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/quicksight_data_set#create_columns_operation QuicksightDataSet#create_columns_operation}

---

##### `FilterOperation`<sup>Optional</sup> <a name="FilterOperation" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransforms.property.filterOperation"></a>

```csharp
public QuicksightDataSetLogicalTableMapDataTransformsFilterOperation FilterOperation { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperation">QuicksightDataSetLogicalTableMapDataTransformsFilterOperation</a>

filter_operation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/quicksight_data_set#filter_operation QuicksightDataSet#filter_operation}

---

##### `ProjectOperation`<sup>Optional</sup> <a name="ProjectOperation" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransforms.property.projectOperation"></a>

```csharp
public QuicksightDataSetLogicalTableMapDataTransformsProjectOperation ProjectOperation { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperation">QuicksightDataSetLogicalTableMapDataTransformsProjectOperation</a>

project_operation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/quicksight_data_set#project_operation QuicksightDataSet#project_operation}

---

##### `RenameColumnOperation`<sup>Optional</sup> <a name="RenameColumnOperation" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransforms.property.renameColumnOperation"></a>

```csharp
public QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperation RenameColumnOperation { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperation">QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperation</a>

rename_column_operation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/quicksight_data_set#rename_column_operation QuicksightDataSet#rename_column_operation}

---

##### `TagColumnOperation`<sup>Optional</sup> <a name="TagColumnOperation" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransforms.property.tagColumnOperation"></a>

```csharp
public QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperation TagColumnOperation { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperation">QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperation</a>

tag_column_operation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/quicksight_data_set#tag_column_operation QuicksightDataSet#tag_column_operation}

---

##### `UntagColumnOperation`<sup>Optional</sup> <a name="UntagColumnOperation" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransforms.property.untagColumnOperation"></a>

```csharp
public QuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperation UntagColumnOperation { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperation">QuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperation</a>

untag_column_operation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/quicksight_data_set#untag_column_operation QuicksightDataSet#untag_column_operation}

---

### QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperation <a name="QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperation" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperation.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperation {
    string ColumnName,
    string NewColumnType,
    string Format = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperation.property.columnName">ColumnName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/quicksight_data_set#column_name QuicksightDataSet#column_name}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperation.property.newColumnType">NewColumnType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/quicksight_data_set#new_column_type QuicksightDataSet#new_column_type}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperation.property.format">Format</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/quicksight_data_set#format QuicksightDataSet#format}. |

---

##### `ColumnName`<sup>Required</sup> <a name="ColumnName" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperation.property.columnName"></a>

```csharp
public string ColumnName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/quicksight_data_set#column_name QuicksightDataSet#column_name}.

---

##### `NewColumnType`<sup>Required</sup> <a name="NewColumnType" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperation.property.newColumnType"></a>

```csharp
public string NewColumnType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/quicksight_data_set#new_column_type QuicksightDataSet#new_column_type}.

---

##### `Format`<sup>Optional</sup> <a name="Format" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperation.property.format"></a>

```csharp
public string Format { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/quicksight_data_set#format QuicksightDataSet#format}.

---

### QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperation <a name="QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperation" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperation.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperation {
    object Columns
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperation.property.columns">Columns</a></code> | <code>object</code> | columns block. |

---

##### `Columns`<sup>Required</sup> <a name="Columns" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperation.property.columns"></a>

```csharp
public object Columns { get; set; }
```

- *Type:* object

columns block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/quicksight_data_set#columns QuicksightDataSet#columns}

---

### QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumns <a name="QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumns" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumns"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumns.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumns {
    string ColumnId,
    string ColumnName,
    string Expression
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumns.property.columnId">ColumnId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/quicksight_data_set#column_id QuicksightDataSet#column_id}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumns.property.columnName">ColumnName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/quicksight_data_set#column_name QuicksightDataSet#column_name}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumns.property.expression">Expression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/quicksight_data_set#expression QuicksightDataSet#expression}. |

---

##### `ColumnId`<sup>Required</sup> <a name="ColumnId" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumns.property.columnId"></a>

```csharp
public string ColumnId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/quicksight_data_set#column_id QuicksightDataSet#column_id}.

---

##### `ColumnName`<sup>Required</sup> <a name="ColumnName" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumns.property.columnName"></a>

```csharp
public string ColumnName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/quicksight_data_set#column_name QuicksightDataSet#column_name}.

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumns.property.expression"></a>

```csharp
public string Expression { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/quicksight_data_set#expression QuicksightDataSet#expression}.

---

### QuicksightDataSetLogicalTableMapDataTransformsFilterOperation <a name="QuicksightDataSetLogicalTableMapDataTransformsFilterOperation" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperation.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new QuicksightDataSetLogicalTableMapDataTransformsFilterOperation {
    string ConditionExpression
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperation.property.conditionExpression">ConditionExpression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/quicksight_data_set#condition_expression QuicksightDataSet#condition_expression}. |

---

##### `ConditionExpression`<sup>Required</sup> <a name="ConditionExpression" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperation.property.conditionExpression"></a>

```csharp
public string ConditionExpression { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/quicksight_data_set#condition_expression QuicksightDataSet#condition_expression}.

---

### QuicksightDataSetLogicalTableMapDataTransformsProjectOperation <a name="QuicksightDataSetLogicalTableMapDataTransformsProjectOperation" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperation.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new QuicksightDataSetLogicalTableMapDataTransformsProjectOperation {
    string[] ProjectedColumns
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperation.property.projectedColumns">ProjectedColumns</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/quicksight_data_set#projected_columns QuicksightDataSet#projected_columns}. |

---

##### `ProjectedColumns`<sup>Required</sup> <a name="ProjectedColumns" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperation.property.projectedColumns"></a>

```csharp
public string[] ProjectedColumns { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/quicksight_data_set#projected_columns QuicksightDataSet#projected_columns}.

---

### QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperation <a name="QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperation" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperation.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperation {
    string ColumnName,
    string NewColumnName
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperation.property.columnName">ColumnName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/quicksight_data_set#column_name QuicksightDataSet#column_name}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperation.property.newColumnName">NewColumnName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/quicksight_data_set#new_column_name QuicksightDataSet#new_column_name}. |

---

##### `ColumnName`<sup>Required</sup> <a name="ColumnName" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperation.property.columnName"></a>

```csharp
public string ColumnName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/quicksight_data_set#column_name QuicksightDataSet#column_name}.

---

##### `NewColumnName`<sup>Required</sup> <a name="NewColumnName" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperation.property.newColumnName"></a>

```csharp
public string NewColumnName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/quicksight_data_set#new_column_name QuicksightDataSet#new_column_name}.

---

### QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperation <a name="QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperation" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperation.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperation {
    string ColumnName,
    object Tags
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperation.property.columnName">ColumnName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/quicksight_data_set#column_name QuicksightDataSet#column_name}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperation.property.tags">Tags</a></code> | <code>object</code> | tags block. |

---

##### `ColumnName`<sup>Required</sup> <a name="ColumnName" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperation.property.columnName"></a>

```csharp
public string ColumnName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/quicksight_data_set#column_name QuicksightDataSet#column_name}.

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperation.property.tags"></a>

```csharp
public object Tags { get; set; }
```

- *Type:* object

tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/quicksight_data_set#tags QuicksightDataSet#tags}

---

### QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTags <a name="QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTags" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTags.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTags {
    QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescription ColumnDescription = null,
    string ColumnGeographicRole = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTags.property.columnDescription">ColumnDescription</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescription">QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescription</a></code> | column_description block. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTags.property.columnGeographicRole">ColumnGeographicRole</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/quicksight_data_set#column_geographic_role QuicksightDataSet#column_geographic_role}. |

---

##### `ColumnDescription`<sup>Optional</sup> <a name="ColumnDescription" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTags.property.columnDescription"></a>

```csharp
public QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescription ColumnDescription { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescription">QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescription</a>

column_description block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/quicksight_data_set#column_description QuicksightDataSet#column_description}

---

##### `ColumnGeographicRole`<sup>Optional</sup> <a name="ColumnGeographicRole" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTags.property.columnGeographicRole"></a>

```csharp
public string ColumnGeographicRole { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/quicksight_data_set#column_geographic_role QuicksightDataSet#column_geographic_role}.

---

### QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescription <a name="QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescription" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescription"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescription.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescription {
    string Text = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescription.property.text">Text</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/quicksight_data_set#text QuicksightDataSet#text}. |

---

##### `Text`<sup>Optional</sup> <a name="Text" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescription.property.text"></a>

```csharp
public string Text { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/quicksight_data_set#text QuicksightDataSet#text}.

---

### QuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperation <a name="QuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperation" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperation.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new QuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperation {
    string ColumnName,
    string[] TagNames
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperation.property.columnName">ColumnName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/quicksight_data_set#column_name QuicksightDataSet#column_name}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperation.property.tagNames">TagNames</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/quicksight_data_set#tag_names QuicksightDataSet#tag_names}. |

---

##### `ColumnName`<sup>Required</sup> <a name="ColumnName" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperation.property.columnName"></a>

```csharp
public string ColumnName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/quicksight_data_set#column_name QuicksightDataSet#column_name}.

---

##### `TagNames`<sup>Required</sup> <a name="TagNames" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperation.property.tagNames"></a>

```csharp
public string[] TagNames { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/quicksight_data_set#tag_names QuicksightDataSet#tag_names}.

---

### QuicksightDataSetLogicalTableMapSource <a name="QuicksightDataSetLogicalTableMapSource" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSource.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new QuicksightDataSetLogicalTableMapSource {
    string DataSetArn = null,
    QuicksightDataSetLogicalTableMapSourceJoinInstruction JoinInstruction = null,
    string PhysicalTableId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSource.property.dataSetArn">DataSetArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/quicksight_data_set#data_set_arn QuicksightDataSet#data_set_arn}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSource.property.joinInstruction">JoinInstruction</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstruction">QuicksightDataSetLogicalTableMapSourceJoinInstruction</a></code> | join_instruction block. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSource.property.physicalTableId">PhysicalTableId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/quicksight_data_set#physical_table_id QuicksightDataSet#physical_table_id}. |

---

##### `DataSetArn`<sup>Optional</sup> <a name="DataSetArn" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSource.property.dataSetArn"></a>

```csharp
public string DataSetArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/quicksight_data_set#data_set_arn QuicksightDataSet#data_set_arn}.

---

##### `JoinInstruction`<sup>Optional</sup> <a name="JoinInstruction" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSource.property.joinInstruction"></a>

```csharp
public QuicksightDataSetLogicalTableMapSourceJoinInstruction JoinInstruction { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstruction">QuicksightDataSetLogicalTableMapSourceJoinInstruction</a>

join_instruction block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/quicksight_data_set#join_instruction QuicksightDataSet#join_instruction}

---

##### `PhysicalTableId`<sup>Optional</sup> <a name="PhysicalTableId" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSource.property.physicalTableId"></a>

```csharp
public string PhysicalTableId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/quicksight_data_set#physical_table_id QuicksightDataSet#physical_table_id}.

---

### QuicksightDataSetLogicalTableMapSourceJoinInstruction <a name="QuicksightDataSetLogicalTableMapSourceJoinInstruction" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstruction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstruction.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new QuicksightDataSetLogicalTableMapSourceJoinInstruction {
    string LeftOperand,
    string OnClause,
    string RightOperand,
    string Type,
    QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyProperties LeftJoinKeyProperties = null,
    QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyProperties RightJoinKeyProperties = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstruction.property.leftOperand">LeftOperand</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/quicksight_data_set#left_operand QuicksightDataSet#left_operand}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstruction.property.onClause">OnClause</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/quicksight_data_set#on_clause QuicksightDataSet#on_clause}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstruction.property.rightOperand">RightOperand</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/quicksight_data_set#right_operand QuicksightDataSet#right_operand}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstruction.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/quicksight_data_set#type QuicksightDataSet#type}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstruction.property.leftJoinKeyProperties">LeftJoinKeyProperties</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyProperties">QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyProperties</a></code> | left_join_key_properties block. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstruction.property.rightJoinKeyProperties">RightJoinKeyProperties</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyProperties">QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyProperties</a></code> | right_join_key_properties block. |

---

##### `LeftOperand`<sup>Required</sup> <a name="LeftOperand" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstruction.property.leftOperand"></a>

```csharp
public string LeftOperand { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/quicksight_data_set#left_operand QuicksightDataSet#left_operand}.

---

##### `OnClause`<sup>Required</sup> <a name="OnClause" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstruction.property.onClause"></a>

```csharp
public string OnClause { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/quicksight_data_set#on_clause QuicksightDataSet#on_clause}.

---

##### `RightOperand`<sup>Required</sup> <a name="RightOperand" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstruction.property.rightOperand"></a>

```csharp
public string RightOperand { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/quicksight_data_set#right_operand QuicksightDataSet#right_operand}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstruction.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/quicksight_data_set#type QuicksightDataSet#type}.

---

##### `LeftJoinKeyProperties`<sup>Optional</sup> <a name="LeftJoinKeyProperties" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstruction.property.leftJoinKeyProperties"></a>

```csharp
public QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyProperties LeftJoinKeyProperties { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyProperties">QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyProperties</a>

left_join_key_properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/quicksight_data_set#left_join_key_properties QuicksightDataSet#left_join_key_properties}

---

##### `RightJoinKeyProperties`<sup>Optional</sup> <a name="RightJoinKeyProperties" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstruction.property.rightJoinKeyProperties"></a>

```csharp
public QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyProperties RightJoinKeyProperties { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyProperties">QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyProperties</a>

right_join_key_properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/quicksight_data_set#right_join_key_properties QuicksightDataSet#right_join_key_properties}

---

### QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyProperties <a name="QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyProperties" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyProperties.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyProperties {
    object UniqueKey = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyProperties.property.uniqueKey">UniqueKey</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/quicksight_data_set#unique_key QuicksightDataSet#unique_key}. |

---

##### `UniqueKey`<sup>Optional</sup> <a name="UniqueKey" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyProperties.property.uniqueKey"></a>

```csharp
public object UniqueKey { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/quicksight_data_set#unique_key QuicksightDataSet#unique_key}.

---

### QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyProperties <a name="QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyProperties" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyProperties.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyProperties {
    object UniqueKey = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyProperties.property.uniqueKey">UniqueKey</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/quicksight_data_set#unique_key QuicksightDataSet#unique_key}. |

---

##### `UniqueKey`<sup>Optional</sup> <a name="UniqueKey" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyProperties.property.uniqueKey"></a>

```csharp
public object UniqueKey { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/quicksight_data_set#unique_key QuicksightDataSet#unique_key}.

---

### QuicksightDataSetOutputColumns <a name="QuicksightDataSetOutputColumns" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetOutputColumns"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetOutputColumns.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new QuicksightDataSetOutputColumns {

};
```


### QuicksightDataSetPermissions <a name="QuicksightDataSetPermissions" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPermissions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPermissions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new QuicksightDataSetPermissions {
    string[] Actions,
    string Principal
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPermissions.property.actions">Actions</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/quicksight_data_set#actions QuicksightDataSet#actions}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPermissions.property.principal">Principal</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/quicksight_data_set#principal QuicksightDataSet#principal}. |

---

##### `Actions`<sup>Required</sup> <a name="Actions" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPermissions.property.actions"></a>

```csharp
public string[] Actions { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/quicksight_data_set#actions QuicksightDataSet#actions}.

---

##### `Principal`<sup>Required</sup> <a name="Principal" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPermissions.property.principal"></a>

```csharp
public string Principal { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/quicksight_data_set#principal QuicksightDataSet#principal}.

---

### QuicksightDataSetPhysicalTableMap <a name="QuicksightDataSetPhysicalTableMap" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMap"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMap.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new QuicksightDataSetPhysicalTableMap {
    string PhysicalTableMapId,
    QuicksightDataSetPhysicalTableMapCustomSql CustomSql = null,
    QuicksightDataSetPhysicalTableMapRelationalTable RelationalTable = null,
    QuicksightDataSetPhysicalTableMapS3Source S3Source = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMap.property.physicalTableMapId">PhysicalTableMapId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/quicksight_data_set#physical_table_map_id QuicksightDataSet#physical_table_map_id}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMap.property.customSql">CustomSql</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSql">QuicksightDataSetPhysicalTableMapCustomSql</a></code> | custom_sql block. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMap.property.relationalTable">RelationalTable</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTable">QuicksightDataSetPhysicalTableMapRelationalTable</a></code> | relational_table block. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMap.property.s3Source">S3Source</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3Source">QuicksightDataSetPhysicalTableMapS3Source</a></code> | s3_source block. |

---

##### `PhysicalTableMapId`<sup>Required</sup> <a name="PhysicalTableMapId" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMap.property.physicalTableMapId"></a>

```csharp
public string PhysicalTableMapId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/quicksight_data_set#physical_table_map_id QuicksightDataSet#physical_table_map_id}.

---

##### `CustomSql`<sup>Optional</sup> <a name="CustomSql" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMap.property.customSql"></a>

```csharp
public QuicksightDataSetPhysicalTableMapCustomSql CustomSql { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSql">QuicksightDataSetPhysicalTableMapCustomSql</a>

custom_sql block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/quicksight_data_set#custom_sql QuicksightDataSet#custom_sql}

---

##### `RelationalTable`<sup>Optional</sup> <a name="RelationalTable" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMap.property.relationalTable"></a>

```csharp
public QuicksightDataSetPhysicalTableMapRelationalTable RelationalTable { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTable">QuicksightDataSetPhysicalTableMapRelationalTable</a>

relational_table block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/quicksight_data_set#relational_table QuicksightDataSet#relational_table}

---

##### `S3Source`<sup>Optional</sup> <a name="S3Source" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMap.property.s3Source"></a>

```csharp
public QuicksightDataSetPhysicalTableMapS3Source S3Source { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3Source">QuicksightDataSetPhysicalTableMapS3Source</a>

s3_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/quicksight_data_set#s3_source QuicksightDataSet#s3_source}

---

### QuicksightDataSetPhysicalTableMapCustomSql <a name="QuicksightDataSetPhysicalTableMapCustomSql" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSql"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSql.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new QuicksightDataSetPhysicalTableMapCustomSql {
    string DataSourceArn,
    string Name,
    string SqlQuery,
    object Columns = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSql.property.dataSourceArn">DataSourceArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/quicksight_data_set#data_source_arn QuicksightDataSet#data_source_arn}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSql.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/quicksight_data_set#name QuicksightDataSet#name}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSql.property.sqlQuery">SqlQuery</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/quicksight_data_set#sql_query QuicksightDataSet#sql_query}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSql.property.columns">Columns</a></code> | <code>object</code> | columns block. |

---

##### `DataSourceArn`<sup>Required</sup> <a name="DataSourceArn" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSql.property.dataSourceArn"></a>

```csharp
public string DataSourceArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/quicksight_data_set#data_source_arn QuicksightDataSet#data_source_arn}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSql.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/quicksight_data_set#name QuicksightDataSet#name}.

---

##### `SqlQuery`<sup>Required</sup> <a name="SqlQuery" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSql.property.sqlQuery"></a>

```csharp
public string SqlQuery { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/quicksight_data_set#sql_query QuicksightDataSet#sql_query}.

---

##### `Columns`<sup>Optional</sup> <a name="Columns" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSql.property.columns"></a>

```csharp
public object Columns { get; set; }
```

- *Type:* object

columns block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/quicksight_data_set#columns QuicksightDataSet#columns}

---

### QuicksightDataSetPhysicalTableMapCustomSqlColumns <a name="QuicksightDataSetPhysicalTableMapCustomSqlColumns" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumns"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumns.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new QuicksightDataSetPhysicalTableMapCustomSqlColumns {
    string Name,
    string Type
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumns.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/quicksight_data_set#name QuicksightDataSet#name}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumns.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/quicksight_data_set#type QuicksightDataSet#type}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumns.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/quicksight_data_set#name QuicksightDataSet#name}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumns.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/quicksight_data_set#type QuicksightDataSet#type}.

---

### QuicksightDataSetPhysicalTableMapRelationalTable <a name="QuicksightDataSetPhysicalTableMapRelationalTable" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTable"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTable.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new QuicksightDataSetPhysicalTableMapRelationalTable {
    string DataSourceArn,
    object InputColumns,
    string Name,
    string Catalog = null,
    string Schema = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTable.property.dataSourceArn">DataSourceArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/quicksight_data_set#data_source_arn QuicksightDataSet#data_source_arn}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTable.property.inputColumns">InputColumns</a></code> | <code>object</code> | input_columns block. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTable.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/quicksight_data_set#name QuicksightDataSet#name}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTable.property.catalog">Catalog</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/quicksight_data_set#catalog QuicksightDataSet#catalog}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTable.property.schema">Schema</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/quicksight_data_set#schema QuicksightDataSet#schema}. |

---

##### `DataSourceArn`<sup>Required</sup> <a name="DataSourceArn" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTable.property.dataSourceArn"></a>

```csharp
public string DataSourceArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/quicksight_data_set#data_source_arn QuicksightDataSet#data_source_arn}.

---

##### `InputColumns`<sup>Required</sup> <a name="InputColumns" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTable.property.inputColumns"></a>

```csharp
public object InputColumns { get; set; }
```

- *Type:* object

input_columns block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/quicksight_data_set#input_columns QuicksightDataSet#input_columns}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTable.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/quicksight_data_set#name QuicksightDataSet#name}.

---

##### `Catalog`<sup>Optional</sup> <a name="Catalog" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTable.property.catalog"></a>

```csharp
public string Catalog { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/quicksight_data_set#catalog QuicksightDataSet#catalog}.

---

##### `Schema`<sup>Optional</sup> <a name="Schema" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTable.property.schema"></a>

```csharp
public string Schema { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/quicksight_data_set#schema QuicksightDataSet#schema}.

---

### QuicksightDataSetPhysicalTableMapRelationalTableInputColumns <a name="QuicksightDataSetPhysicalTableMapRelationalTableInputColumns" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumns"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumns.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new QuicksightDataSetPhysicalTableMapRelationalTableInputColumns {
    string Name,
    string Type
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumns.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/quicksight_data_set#name QuicksightDataSet#name}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumns.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/quicksight_data_set#type QuicksightDataSet#type}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumns.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/quicksight_data_set#name QuicksightDataSet#name}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumns.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/quicksight_data_set#type QuicksightDataSet#type}.

---

### QuicksightDataSetPhysicalTableMapS3Source <a name="QuicksightDataSetPhysicalTableMapS3Source" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3Source"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3Source.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new QuicksightDataSetPhysicalTableMapS3Source {
    string DataSourceArn,
    object InputColumns,
    QuicksightDataSetPhysicalTableMapS3SourceUploadSettings UploadSettings
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3Source.property.dataSourceArn">DataSourceArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/quicksight_data_set#data_source_arn QuicksightDataSet#data_source_arn}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3Source.property.inputColumns">InputColumns</a></code> | <code>object</code> | input_columns block. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3Source.property.uploadSettings">UploadSettings</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettings">QuicksightDataSetPhysicalTableMapS3SourceUploadSettings</a></code> | upload_settings block. |

---

##### `DataSourceArn`<sup>Required</sup> <a name="DataSourceArn" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3Source.property.dataSourceArn"></a>

```csharp
public string DataSourceArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/quicksight_data_set#data_source_arn QuicksightDataSet#data_source_arn}.

---

##### `InputColumns`<sup>Required</sup> <a name="InputColumns" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3Source.property.inputColumns"></a>

```csharp
public object InputColumns { get; set; }
```

- *Type:* object

input_columns block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/quicksight_data_set#input_columns QuicksightDataSet#input_columns}

---

##### `UploadSettings`<sup>Required</sup> <a name="UploadSettings" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3Source.property.uploadSettings"></a>

```csharp
public QuicksightDataSetPhysicalTableMapS3SourceUploadSettings UploadSettings { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettings">QuicksightDataSetPhysicalTableMapS3SourceUploadSettings</a>

upload_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/quicksight_data_set#upload_settings QuicksightDataSet#upload_settings}

---

### QuicksightDataSetPhysicalTableMapS3SourceInputColumns <a name="QuicksightDataSetPhysicalTableMapS3SourceInputColumns" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumns"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumns.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new QuicksightDataSetPhysicalTableMapS3SourceInputColumns {
    string Name,
    string Type
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumns.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/quicksight_data_set#name QuicksightDataSet#name}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumns.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/quicksight_data_set#type QuicksightDataSet#type}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumns.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/quicksight_data_set#name QuicksightDataSet#name}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumns.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/quicksight_data_set#type QuicksightDataSet#type}.

---

### QuicksightDataSetPhysicalTableMapS3SourceUploadSettings <a name="QuicksightDataSetPhysicalTableMapS3SourceUploadSettings" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new QuicksightDataSetPhysicalTableMapS3SourceUploadSettings {
    object ContainsHeader = null,
    string Delimiter = null,
    string Format = null,
    double StartFromRow = null,
    string TextQualifier = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettings.property.containsHeader">ContainsHeader</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/quicksight_data_set#contains_header QuicksightDataSet#contains_header}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettings.property.delimiter">Delimiter</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/quicksight_data_set#delimiter QuicksightDataSet#delimiter}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettings.property.format">Format</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/quicksight_data_set#format QuicksightDataSet#format}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettings.property.startFromRow">StartFromRow</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/quicksight_data_set#start_from_row QuicksightDataSet#start_from_row}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettings.property.textQualifier">TextQualifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/quicksight_data_set#text_qualifier QuicksightDataSet#text_qualifier}. |

---

##### `ContainsHeader`<sup>Optional</sup> <a name="ContainsHeader" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettings.property.containsHeader"></a>

```csharp
public object ContainsHeader { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/quicksight_data_set#contains_header QuicksightDataSet#contains_header}.

---

##### `Delimiter`<sup>Optional</sup> <a name="Delimiter" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettings.property.delimiter"></a>

```csharp
public string Delimiter { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/quicksight_data_set#delimiter QuicksightDataSet#delimiter}.

---

##### `Format`<sup>Optional</sup> <a name="Format" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettings.property.format"></a>

```csharp
public string Format { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/quicksight_data_set#format QuicksightDataSet#format}.

---

##### `StartFromRow`<sup>Optional</sup> <a name="StartFromRow" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettings.property.startFromRow"></a>

```csharp
public double StartFromRow { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/quicksight_data_set#start_from_row QuicksightDataSet#start_from_row}.

---

##### `TextQualifier`<sup>Optional</sup> <a name="TextQualifier" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettings.property.textQualifier"></a>

```csharp
public string TextQualifier { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/quicksight_data_set#text_qualifier QuicksightDataSet#text_qualifier}.

---

### QuicksightDataSetRefreshProperties <a name="QuicksightDataSetRefreshProperties" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshProperties.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new QuicksightDataSetRefreshProperties {
    QuicksightDataSetRefreshPropertiesRefreshConfiguration RefreshConfiguration
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshProperties.property.refreshConfiguration">RefreshConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesRefreshConfiguration">QuicksightDataSetRefreshPropertiesRefreshConfiguration</a></code> | refresh_configuration block. |

---

##### `RefreshConfiguration`<sup>Required</sup> <a name="RefreshConfiguration" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshProperties.property.refreshConfiguration"></a>

```csharp
public QuicksightDataSetRefreshPropertiesRefreshConfiguration RefreshConfiguration { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesRefreshConfiguration">QuicksightDataSetRefreshPropertiesRefreshConfiguration</a>

refresh_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/quicksight_data_set#refresh_configuration QuicksightDataSet#refresh_configuration}

---

### QuicksightDataSetRefreshPropertiesRefreshConfiguration <a name="QuicksightDataSetRefreshPropertiesRefreshConfiguration" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesRefreshConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesRefreshConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new QuicksightDataSetRefreshPropertiesRefreshConfiguration {
    QuicksightDataSetRefreshPropertiesRefreshConfigurationIncrementalRefresh IncrementalRefresh
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesRefreshConfiguration.property.incrementalRefresh">IncrementalRefresh</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesRefreshConfigurationIncrementalRefresh">QuicksightDataSetRefreshPropertiesRefreshConfigurationIncrementalRefresh</a></code> | incremental_refresh block. |

---

##### `IncrementalRefresh`<sup>Required</sup> <a name="IncrementalRefresh" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesRefreshConfiguration.property.incrementalRefresh"></a>

```csharp
public QuicksightDataSetRefreshPropertiesRefreshConfigurationIncrementalRefresh IncrementalRefresh { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesRefreshConfigurationIncrementalRefresh">QuicksightDataSetRefreshPropertiesRefreshConfigurationIncrementalRefresh</a>

incremental_refresh block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/quicksight_data_set#incremental_refresh QuicksightDataSet#incremental_refresh}

---

### QuicksightDataSetRefreshPropertiesRefreshConfigurationIncrementalRefresh <a name="QuicksightDataSetRefreshPropertiesRefreshConfigurationIncrementalRefresh" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesRefreshConfigurationIncrementalRefresh"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesRefreshConfigurationIncrementalRefresh.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new QuicksightDataSetRefreshPropertiesRefreshConfigurationIncrementalRefresh {
    QuicksightDataSetRefreshPropertiesRefreshConfigurationIncrementalRefreshLookbackWindow LookbackWindow
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesRefreshConfigurationIncrementalRefresh.property.lookbackWindow">LookbackWindow</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesRefreshConfigurationIncrementalRefreshLookbackWindow">QuicksightDataSetRefreshPropertiesRefreshConfigurationIncrementalRefreshLookbackWindow</a></code> | lookback_window block. |

---

##### `LookbackWindow`<sup>Required</sup> <a name="LookbackWindow" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesRefreshConfigurationIncrementalRefresh.property.lookbackWindow"></a>

```csharp
public QuicksightDataSetRefreshPropertiesRefreshConfigurationIncrementalRefreshLookbackWindow LookbackWindow { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesRefreshConfigurationIncrementalRefreshLookbackWindow">QuicksightDataSetRefreshPropertiesRefreshConfigurationIncrementalRefreshLookbackWindow</a>

lookback_window block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/quicksight_data_set#lookback_window QuicksightDataSet#lookback_window}

---

### QuicksightDataSetRefreshPropertiesRefreshConfigurationIncrementalRefreshLookbackWindow <a name="QuicksightDataSetRefreshPropertiesRefreshConfigurationIncrementalRefreshLookbackWindow" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesRefreshConfigurationIncrementalRefreshLookbackWindow"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesRefreshConfigurationIncrementalRefreshLookbackWindow.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new QuicksightDataSetRefreshPropertiesRefreshConfigurationIncrementalRefreshLookbackWindow {
    string ColumnName,
    double Size,
    string SizeUnit
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesRefreshConfigurationIncrementalRefreshLookbackWindow.property.columnName">ColumnName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/quicksight_data_set#column_name QuicksightDataSet#column_name}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesRefreshConfigurationIncrementalRefreshLookbackWindow.property.size">Size</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/quicksight_data_set#size QuicksightDataSet#size}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesRefreshConfigurationIncrementalRefreshLookbackWindow.property.sizeUnit">SizeUnit</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/quicksight_data_set#size_unit QuicksightDataSet#size_unit}. |

---

##### `ColumnName`<sup>Required</sup> <a name="ColumnName" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesRefreshConfigurationIncrementalRefreshLookbackWindow.property.columnName"></a>

```csharp
public string ColumnName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/quicksight_data_set#column_name QuicksightDataSet#column_name}.

---

##### `Size`<sup>Required</sup> <a name="Size" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesRefreshConfigurationIncrementalRefreshLookbackWindow.property.size"></a>

```csharp
public double Size { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/quicksight_data_set#size QuicksightDataSet#size}.

---

##### `SizeUnit`<sup>Required</sup> <a name="SizeUnit" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesRefreshConfigurationIncrementalRefreshLookbackWindow.property.sizeUnit"></a>

```csharp
public string SizeUnit { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/quicksight_data_set#size_unit QuicksightDataSet#size_unit}.

---

### QuicksightDataSetRowLevelPermissionDataSet <a name="QuicksightDataSetRowLevelPermissionDataSet" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSet"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSet.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new QuicksightDataSetRowLevelPermissionDataSet {
    string Arn,
    string PermissionPolicy,
    string FormatVersion = null,
    string Namespace = null,
    string Status = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSet.property.arn">Arn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/quicksight_data_set#arn QuicksightDataSet#arn}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSet.property.permissionPolicy">PermissionPolicy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/quicksight_data_set#permission_policy QuicksightDataSet#permission_policy}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSet.property.formatVersion">FormatVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/quicksight_data_set#format_version QuicksightDataSet#format_version}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSet.property.namespace">Namespace</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/quicksight_data_set#namespace QuicksightDataSet#namespace}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSet.property.status">Status</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/quicksight_data_set#status QuicksightDataSet#status}. |

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSet.property.arn"></a>

```csharp
public string Arn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/quicksight_data_set#arn QuicksightDataSet#arn}.

---

##### `PermissionPolicy`<sup>Required</sup> <a name="PermissionPolicy" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSet.property.permissionPolicy"></a>

```csharp
public string PermissionPolicy { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/quicksight_data_set#permission_policy QuicksightDataSet#permission_policy}.

---

##### `FormatVersion`<sup>Optional</sup> <a name="FormatVersion" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSet.property.formatVersion"></a>

```csharp
public string FormatVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/quicksight_data_set#format_version QuicksightDataSet#format_version}.

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSet.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/quicksight_data_set#namespace QuicksightDataSet#namespace}.

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSet.property.status"></a>

```csharp
public string Status { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/quicksight_data_set#status QuicksightDataSet#status}.

---

### QuicksightDataSetRowLevelPermissionTagConfiguration <a name="QuicksightDataSetRowLevelPermissionTagConfiguration" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new QuicksightDataSetRowLevelPermissionTagConfiguration {
    object TagRules,
    string Status = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfiguration.property.tagRules">TagRules</a></code> | <code>object</code> | tag_rules block. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfiguration.property.status">Status</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/quicksight_data_set#status QuicksightDataSet#status}. |

---

##### `TagRules`<sup>Required</sup> <a name="TagRules" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfiguration.property.tagRules"></a>

```csharp
public object TagRules { get; set; }
```

- *Type:* object

tag_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/quicksight_data_set#tag_rules QuicksightDataSet#tag_rules}

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfiguration.property.status"></a>

```csharp
public string Status { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/quicksight_data_set#status QuicksightDataSet#status}.

---

### QuicksightDataSetRowLevelPermissionTagConfigurationTagRules <a name="QuicksightDataSetRowLevelPermissionTagConfigurationTagRules" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationTagRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationTagRules.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new QuicksightDataSetRowLevelPermissionTagConfigurationTagRules {
    string ColumnName,
    string TagKey,
    string MatchAllValue = null,
    string TagMultiValueDelimiter = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationTagRules.property.columnName">ColumnName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/quicksight_data_set#column_name QuicksightDataSet#column_name}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationTagRules.property.tagKey">TagKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/quicksight_data_set#tag_key QuicksightDataSet#tag_key}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationTagRules.property.matchAllValue">MatchAllValue</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/quicksight_data_set#match_all_value QuicksightDataSet#match_all_value}. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationTagRules.property.tagMultiValueDelimiter">TagMultiValueDelimiter</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/quicksight_data_set#tag_multi_value_delimiter QuicksightDataSet#tag_multi_value_delimiter}. |

---

##### `ColumnName`<sup>Required</sup> <a name="ColumnName" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationTagRules.property.columnName"></a>

```csharp
public string ColumnName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/quicksight_data_set#column_name QuicksightDataSet#column_name}.

---

##### `TagKey`<sup>Required</sup> <a name="TagKey" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationTagRules.property.tagKey"></a>

```csharp
public string TagKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/quicksight_data_set#tag_key QuicksightDataSet#tag_key}.

---

##### `MatchAllValue`<sup>Optional</sup> <a name="MatchAllValue" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationTagRules.property.matchAllValue"></a>

```csharp
public string MatchAllValue { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/quicksight_data_set#match_all_value QuicksightDataSet#match_all_value}.

---

##### `TagMultiValueDelimiter`<sup>Optional</sup> <a name="TagMultiValueDelimiter" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationTagRules.property.tagMultiValueDelimiter"></a>

```csharp
public string TagMultiValueDelimiter { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/quicksight_data_set#tag_multi_value_delimiter QuicksightDataSet#tag_multi_value_delimiter}.

---

## Classes <a name="Classes" id="Classes"></a>

### QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference <a name="QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.property.columnsInput">ColumnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.property.countryCodeInput">CountryCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.property.columns">Columns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.property.countryCode">CountryCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroup">QuicksightDataSetColumnGroupsGeoSpatialColumnGroup</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ColumnsInput`<sup>Optional</sup> <a name="ColumnsInput" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.property.columnsInput"></a>

```csharp
public string[] ColumnsInput { get; }
```

- *Type:* string[]

---

##### `CountryCodeInput`<sup>Optional</sup> <a name="CountryCodeInput" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.property.countryCodeInput"></a>

```csharp
public string CountryCodeInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `Columns`<sup>Required</sup> <a name="Columns" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.property.columns"></a>

```csharp
public string[] Columns { get; }
```

- *Type:* string[]

---

##### `CountryCode`<sup>Required</sup> <a name="CountryCode" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.property.countryCode"></a>

```csharp
public string CountryCode { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference.property.internalValue"></a>

```csharp
public QuicksightDataSetColumnGroupsGeoSpatialColumnGroup InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroup">QuicksightDataSetColumnGroupsGeoSpatialColumnGroup</a>

---


### QuicksightDataSetColumnGroupsList <a name="QuicksightDataSetColumnGroupsList" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new QuicksightDataSetColumnGroupsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsList.get"></a>

```csharp
private QuicksightDataSetColumnGroupsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### QuicksightDataSetColumnGroupsOutputReference <a name="QuicksightDataSetColumnGroupsOutputReference" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new QuicksightDataSetColumnGroupsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference.putGeoSpatialColumnGroup">PutGeoSpatialColumnGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference.resetGeoSpatialColumnGroup">ResetGeoSpatialColumnGroup</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutGeoSpatialColumnGroup` <a name="PutGeoSpatialColumnGroup" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference.putGeoSpatialColumnGroup"></a>

```csharp
private void PutGeoSpatialColumnGroup(QuicksightDataSetColumnGroupsGeoSpatialColumnGroup Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference.putGeoSpatialColumnGroup.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroup">QuicksightDataSetColumnGroupsGeoSpatialColumnGroup</a>

---

##### `ResetGeoSpatialColumnGroup` <a name="ResetGeoSpatialColumnGroup" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference.resetGeoSpatialColumnGroup"></a>

```csharp
private void ResetGeoSpatialColumnGroup()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference.property.geoSpatialColumnGroup">GeoSpatialColumnGroup</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference">QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference.property.geoSpatialColumnGroupInput">GeoSpatialColumnGroupInput</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroup">QuicksightDataSetColumnGroupsGeoSpatialColumnGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `GeoSpatialColumnGroup`<sup>Required</sup> <a name="GeoSpatialColumnGroup" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference.property.geoSpatialColumnGroup"></a>

```csharp
public QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference GeoSpatialColumnGroup { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference">QuicksightDataSetColumnGroupsGeoSpatialColumnGroupOutputReference</a>

---

##### `GeoSpatialColumnGroupInput`<sup>Optional</sup> <a name="GeoSpatialColumnGroupInput" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference.property.geoSpatialColumnGroupInput"></a>

```csharp
public QuicksightDataSetColumnGroupsGeoSpatialColumnGroup GeoSpatialColumnGroupInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsGeoSpatialColumnGroup">QuicksightDataSetColumnGroupsGeoSpatialColumnGroup</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnGroupsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### QuicksightDataSetColumnLevelPermissionRulesList <a name="QuicksightDataSetColumnLevelPermissionRulesList" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new QuicksightDataSetColumnLevelPermissionRulesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesList.get"></a>

```csharp
private QuicksightDataSetColumnLevelPermissionRulesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### QuicksightDataSetColumnLevelPermissionRulesOutputReference <a name="QuicksightDataSetColumnLevelPermissionRulesOutputReference" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new QuicksightDataSetColumnLevelPermissionRulesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.resetColumnNames">ResetColumnNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.resetPrincipals">ResetPrincipals</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetColumnNames` <a name="ResetColumnNames" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.resetColumnNames"></a>

```csharp
private void ResetColumnNames()
```

##### `ResetPrincipals` <a name="ResetPrincipals" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.resetPrincipals"></a>

```csharp
private void ResetPrincipals()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.property.columnNamesInput">ColumnNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.property.principalsInput">PrincipalsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.property.columnNames">ColumnNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.property.principals">Principals</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ColumnNamesInput`<sup>Optional</sup> <a name="ColumnNamesInput" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.property.columnNamesInput"></a>

```csharp
public string[] ColumnNamesInput { get; }
```

- *Type:* string[]

---

##### `PrincipalsInput`<sup>Optional</sup> <a name="PrincipalsInput" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.property.principalsInput"></a>

```csharp
public string[] PrincipalsInput { get; }
```

- *Type:* string[]

---

##### `ColumnNames`<sup>Required</sup> <a name="ColumnNames" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.property.columnNames"></a>

```csharp
public string[] ColumnNames { get; }
```

- *Type:* string[]

---

##### `Principals`<sup>Required</sup> <a name="Principals" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.property.principals"></a>

```csharp
public string[] Principals { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetColumnLevelPermissionRulesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### QuicksightDataSetDataSetUsageConfigurationOutputReference <a name="QuicksightDataSetDataSetUsageConfigurationOutputReference" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new QuicksightDataSetDataSetUsageConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference.resetDisableUseAsDirectQuerySource">ResetDisableUseAsDirectQuerySource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference.resetDisableUseAsImportedSource">ResetDisableUseAsImportedSource</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDisableUseAsDirectQuerySource` <a name="ResetDisableUseAsDirectQuerySource" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference.resetDisableUseAsDirectQuerySource"></a>

```csharp
private void ResetDisableUseAsDirectQuerySource()
```

##### `ResetDisableUseAsImportedSource` <a name="ResetDisableUseAsImportedSource" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference.resetDisableUseAsImportedSource"></a>

```csharp
private void ResetDisableUseAsImportedSource()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference.property.disableUseAsDirectQuerySourceInput">DisableUseAsDirectQuerySourceInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference.property.disableUseAsImportedSourceInput">DisableUseAsImportedSourceInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference.property.disableUseAsDirectQuerySource">DisableUseAsDirectQuerySource</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference.property.disableUseAsImportedSource">DisableUseAsImportedSource</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetDataSetUsageConfiguration">QuicksightDataSetDataSetUsageConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DisableUseAsDirectQuerySourceInput`<sup>Optional</sup> <a name="DisableUseAsDirectQuerySourceInput" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference.property.disableUseAsDirectQuerySourceInput"></a>

```csharp
public object DisableUseAsDirectQuerySourceInput { get; }
```

- *Type:* object

---

##### `DisableUseAsImportedSourceInput`<sup>Optional</sup> <a name="DisableUseAsImportedSourceInput" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference.property.disableUseAsImportedSourceInput"></a>

```csharp
public object DisableUseAsImportedSourceInput { get; }
```

- *Type:* object

---

##### `DisableUseAsDirectQuerySource`<sup>Required</sup> <a name="DisableUseAsDirectQuerySource" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference.property.disableUseAsDirectQuerySource"></a>

```csharp
public object DisableUseAsDirectQuerySource { get; }
```

- *Type:* object

---

##### `DisableUseAsImportedSource`<sup>Required</sup> <a name="DisableUseAsImportedSource" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference.property.disableUseAsImportedSource"></a>

```csharp
public object DisableUseAsImportedSource { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetDataSetUsageConfigurationOutputReference.property.internalValue"></a>

```csharp
public QuicksightDataSetDataSetUsageConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetDataSetUsageConfiguration">QuicksightDataSetDataSetUsageConfiguration</a>

---


### QuicksightDataSetFieldFoldersList <a name="QuicksightDataSetFieldFoldersList" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetFieldFoldersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetFieldFoldersList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new QuicksightDataSetFieldFoldersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetFieldFoldersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetFieldFoldersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetFieldFoldersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetFieldFoldersList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetFieldFoldersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetFieldFoldersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetFieldFoldersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetFieldFoldersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetFieldFoldersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetFieldFoldersList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetFieldFoldersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetFieldFoldersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetFieldFoldersList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetFieldFoldersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetFieldFoldersList.get"></a>

```csharp
private QuicksightDataSetFieldFoldersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetFieldFoldersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetFieldFoldersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetFieldFoldersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetFieldFoldersList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetFieldFoldersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetFieldFoldersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetFieldFoldersList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### QuicksightDataSetFieldFoldersOutputReference <a name="QuicksightDataSetFieldFoldersOutputReference" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new QuicksightDataSetFieldFoldersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.resetColumns">ResetColumns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetColumns` <a name="ResetColumns" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.resetColumns"></a>

```csharp
private void ResetColumns()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.property.columnsInput">ColumnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.property.fieldFoldersIdInput">FieldFoldersIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.property.columns">Columns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.property.fieldFoldersId">FieldFoldersId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ColumnsInput`<sup>Optional</sup> <a name="ColumnsInput" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.property.columnsInput"></a>

```csharp
public string[] ColumnsInput { get; }
```

- *Type:* string[]

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `FieldFoldersIdInput`<sup>Optional</sup> <a name="FieldFoldersIdInput" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.property.fieldFoldersIdInput"></a>

```csharp
public string FieldFoldersIdInput { get; }
```

- *Type:* string

---

##### `Columns`<sup>Required</sup> <a name="Columns" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.property.columns"></a>

```csharp
public string[] Columns { get; }
```

- *Type:* string[]

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `FieldFoldersId`<sup>Required</sup> <a name="FieldFoldersId" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.property.fieldFoldersId"></a>

```csharp
public string FieldFoldersId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetFieldFoldersOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference <a name="QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.resetFormat">ResetFormat</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFormat` <a name="ResetFormat" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.resetFormat"></a>

```csharp
private void ResetFormat()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.property.columnNameInput">ColumnNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.property.formatInput">FormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.property.newColumnTypeInput">NewColumnTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.property.columnName">ColumnName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.property.format">Format</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.property.newColumnType">NewColumnType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperation">QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ColumnNameInput`<sup>Optional</sup> <a name="ColumnNameInput" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.property.columnNameInput"></a>

```csharp
public string ColumnNameInput { get; }
```

- *Type:* string

---

##### `FormatInput`<sup>Optional</sup> <a name="FormatInput" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.property.formatInput"></a>

```csharp
public string FormatInput { get; }
```

- *Type:* string

---

##### `NewColumnTypeInput`<sup>Optional</sup> <a name="NewColumnTypeInput" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.property.newColumnTypeInput"></a>

```csharp
public string NewColumnTypeInput { get; }
```

- *Type:* string

---

##### `ColumnName`<sup>Required</sup> <a name="ColumnName" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.property.columnName"></a>

```csharp
public string ColumnName { get; }
```

- *Type:* string

---

##### `Format`<sup>Required</sup> <a name="Format" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.property.format"></a>

```csharp
public string Format { get; }
```

- *Type:* string

---

##### `NewColumnType`<sup>Required</sup> <a name="NewColumnType" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.property.newColumnType"></a>

```csharp
public string NewColumnType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference.property.internalValue"></a>

```csharp
public QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperation InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperation">QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperation</a>

---


### QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsList <a name="QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsList" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsList.get"></a>

```csharp
private QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference <a name="QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.property.columnIdInput">ColumnIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.property.columnNameInput">ColumnNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.property.columnId">ColumnId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.property.columnName">ColumnName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.property.expression">Expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ColumnIdInput`<sup>Optional</sup> <a name="ColumnIdInput" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.property.columnIdInput"></a>

```csharp
public string ColumnIdInput { get; }
```

- *Type:* string

---

##### `ColumnNameInput`<sup>Optional</sup> <a name="ColumnNameInput" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.property.columnNameInput"></a>

```csharp
public string ColumnNameInput { get; }
```

- *Type:* string

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.property.expressionInput"></a>

```csharp
public string ExpressionInput { get; }
```

- *Type:* string

---

##### `ColumnId`<sup>Required</sup> <a name="ColumnId" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.property.columnId"></a>

```csharp
public string ColumnId { get; }
```

- *Type:* string

---

##### `ColumnName`<sup>Required</sup> <a name="ColumnName" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.property.columnName"></a>

```csharp
public string ColumnName { get; }
```

- *Type:* string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.property.expression"></a>

```csharp
public string Expression { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference <a name="QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.putColumns">PutColumns</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutColumns` <a name="PutColumns" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.putColumns"></a>

```csharp
private void PutColumns(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.putColumns.parameter.value"></a>

- *Type:* object

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.property.columns">Columns</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsList">QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.property.columnsInput">ColumnsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperation">QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Columns`<sup>Required</sup> <a name="Columns" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.property.columns"></a>

```csharp
public QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsList Columns { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsList">QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationColumnsList</a>

---

##### `ColumnsInput`<sup>Optional</sup> <a name="ColumnsInput" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.property.columnsInput"></a>

```csharp
public object ColumnsInput { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference.property.internalValue"></a>

```csharp
public QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperation InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperation">QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperation</a>

---


### QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference <a name="QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.property.conditionExpressionInput">ConditionExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.property.conditionExpression">ConditionExpression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperation">QuicksightDataSetLogicalTableMapDataTransformsFilterOperation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConditionExpressionInput`<sup>Optional</sup> <a name="ConditionExpressionInput" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.property.conditionExpressionInput"></a>

```csharp
public string ConditionExpressionInput { get; }
```

- *Type:* string

---

##### `ConditionExpression`<sup>Required</sup> <a name="ConditionExpression" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.property.conditionExpression"></a>

```csharp
public string ConditionExpression { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference.property.internalValue"></a>

```csharp
public QuicksightDataSetLogicalTableMapDataTransformsFilterOperation InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperation">QuicksightDataSetLogicalTableMapDataTransformsFilterOperation</a>

---


### QuicksightDataSetLogicalTableMapDataTransformsList <a name="QuicksightDataSetLogicalTableMapDataTransformsList" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new QuicksightDataSetLogicalTableMapDataTransformsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsList.get"></a>

```csharp
private QuicksightDataSetLogicalTableMapDataTransformsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### QuicksightDataSetLogicalTableMapDataTransformsOutputReference <a name="QuicksightDataSetLogicalTableMapDataTransformsOutputReference" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new QuicksightDataSetLogicalTableMapDataTransformsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.putCastColumnTypeOperation">PutCastColumnTypeOperation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.putCreateColumnsOperation">PutCreateColumnsOperation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.putFilterOperation">PutFilterOperation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.putProjectOperation">PutProjectOperation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.putRenameColumnOperation">PutRenameColumnOperation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.putTagColumnOperation">PutTagColumnOperation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.putUntagColumnOperation">PutUntagColumnOperation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.resetCastColumnTypeOperation">ResetCastColumnTypeOperation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.resetCreateColumnsOperation">ResetCreateColumnsOperation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.resetFilterOperation">ResetFilterOperation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.resetProjectOperation">ResetProjectOperation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.resetRenameColumnOperation">ResetRenameColumnOperation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.resetTagColumnOperation">ResetTagColumnOperation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.resetUntagColumnOperation">ResetUntagColumnOperation</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCastColumnTypeOperation` <a name="PutCastColumnTypeOperation" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.putCastColumnTypeOperation"></a>

```csharp
private void PutCastColumnTypeOperation(QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperation Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.putCastColumnTypeOperation.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperation">QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperation</a>

---

##### `PutCreateColumnsOperation` <a name="PutCreateColumnsOperation" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.putCreateColumnsOperation"></a>

```csharp
private void PutCreateColumnsOperation(QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperation Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.putCreateColumnsOperation.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperation">QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperation</a>

---

##### `PutFilterOperation` <a name="PutFilterOperation" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.putFilterOperation"></a>

```csharp
private void PutFilterOperation(QuicksightDataSetLogicalTableMapDataTransformsFilterOperation Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.putFilterOperation.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperation">QuicksightDataSetLogicalTableMapDataTransformsFilterOperation</a>

---

##### `PutProjectOperation` <a name="PutProjectOperation" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.putProjectOperation"></a>

```csharp
private void PutProjectOperation(QuicksightDataSetLogicalTableMapDataTransformsProjectOperation Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.putProjectOperation.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperation">QuicksightDataSetLogicalTableMapDataTransformsProjectOperation</a>

---

##### `PutRenameColumnOperation` <a name="PutRenameColumnOperation" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.putRenameColumnOperation"></a>

```csharp
private void PutRenameColumnOperation(QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperation Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.putRenameColumnOperation.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperation">QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperation</a>

---

##### `PutTagColumnOperation` <a name="PutTagColumnOperation" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.putTagColumnOperation"></a>

```csharp
private void PutTagColumnOperation(QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperation Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.putTagColumnOperation.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperation">QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperation</a>

---

##### `PutUntagColumnOperation` <a name="PutUntagColumnOperation" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.putUntagColumnOperation"></a>

```csharp
private void PutUntagColumnOperation(QuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperation Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.putUntagColumnOperation.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperation">QuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperation</a>

---

##### `ResetCastColumnTypeOperation` <a name="ResetCastColumnTypeOperation" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.resetCastColumnTypeOperation"></a>

```csharp
private void ResetCastColumnTypeOperation()
```

##### `ResetCreateColumnsOperation` <a name="ResetCreateColumnsOperation" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.resetCreateColumnsOperation"></a>

```csharp
private void ResetCreateColumnsOperation()
```

##### `ResetFilterOperation` <a name="ResetFilterOperation" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.resetFilterOperation"></a>

```csharp
private void ResetFilterOperation()
```

##### `ResetProjectOperation` <a name="ResetProjectOperation" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.resetProjectOperation"></a>

```csharp
private void ResetProjectOperation()
```

##### `ResetRenameColumnOperation` <a name="ResetRenameColumnOperation" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.resetRenameColumnOperation"></a>

```csharp
private void ResetRenameColumnOperation()
```

##### `ResetTagColumnOperation` <a name="ResetTagColumnOperation" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.resetTagColumnOperation"></a>

```csharp
private void ResetTagColumnOperation()
```

##### `ResetUntagColumnOperation` <a name="ResetUntagColumnOperation" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.resetUntagColumnOperation"></a>

```csharp
private void ResetUntagColumnOperation()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.property.castColumnTypeOperation">CastColumnTypeOperation</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference">QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.property.createColumnsOperation">CreateColumnsOperation</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference">QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.property.filterOperation">FilterOperation</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference">QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.property.projectOperation">ProjectOperation</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference">QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.property.renameColumnOperation">RenameColumnOperation</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference">QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.property.tagColumnOperation">TagColumnOperation</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference">QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.property.untagColumnOperation">UntagColumnOperation</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference">QuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.property.castColumnTypeOperationInput">CastColumnTypeOperationInput</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperation">QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.property.createColumnsOperationInput">CreateColumnsOperationInput</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperation">QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.property.filterOperationInput">FilterOperationInput</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperation">QuicksightDataSetLogicalTableMapDataTransformsFilterOperation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.property.projectOperationInput">ProjectOperationInput</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperation">QuicksightDataSetLogicalTableMapDataTransformsProjectOperation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.property.renameColumnOperationInput">RenameColumnOperationInput</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperation">QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.property.tagColumnOperationInput">TagColumnOperationInput</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperation">QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.property.untagColumnOperationInput">UntagColumnOperationInput</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperation">QuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CastColumnTypeOperation`<sup>Required</sup> <a name="CastColumnTypeOperation" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.property.castColumnTypeOperation"></a>

```csharp
public QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference CastColumnTypeOperation { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference">QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperationOutputReference</a>

---

##### `CreateColumnsOperation`<sup>Required</sup> <a name="CreateColumnsOperation" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.property.createColumnsOperation"></a>

```csharp
public QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference CreateColumnsOperation { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference">QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperationOutputReference</a>

---

##### `FilterOperation`<sup>Required</sup> <a name="FilterOperation" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.property.filterOperation"></a>

```csharp
public QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference FilterOperation { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference">QuicksightDataSetLogicalTableMapDataTransformsFilterOperationOutputReference</a>

---

##### `ProjectOperation`<sup>Required</sup> <a name="ProjectOperation" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.property.projectOperation"></a>

```csharp
public QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference ProjectOperation { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference">QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference</a>

---

##### `RenameColumnOperation`<sup>Required</sup> <a name="RenameColumnOperation" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.property.renameColumnOperation"></a>

```csharp
public QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference RenameColumnOperation { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference">QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference</a>

---

##### `TagColumnOperation`<sup>Required</sup> <a name="TagColumnOperation" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.property.tagColumnOperation"></a>

```csharp
public QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference TagColumnOperation { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference">QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference</a>

---

##### `UntagColumnOperation`<sup>Required</sup> <a name="UntagColumnOperation" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.property.untagColumnOperation"></a>

```csharp
public QuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference UntagColumnOperation { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference">QuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference</a>

---

##### `CastColumnTypeOperationInput`<sup>Optional</sup> <a name="CastColumnTypeOperationInput" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.property.castColumnTypeOperationInput"></a>

```csharp
public QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperation CastColumnTypeOperationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperation">QuicksightDataSetLogicalTableMapDataTransformsCastColumnTypeOperation</a>

---

##### `CreateColumnsOperationInput`<sup>Optional</sup> <a name="CreateColumnsOperationInput" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.property.createColumnsOperationInput"></a>

```csharp
public QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperation CreateColumnsOperationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperation">QuicksightDataSetLogicalTableMapDataTransformsCreateColumnsOperation</a>

---

##### `FilterOperationInput`<sup>Optional</sup> <a name="FilterOperationInput" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.property.filterOperationInput"></a>

```csharp
public QuicksightDataSetLogicalTableMapDataTransformsFilterOperation FilterOperationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsFilterOperation">QuicksightDataSetLogicalTableMapDataTransformsFilterOperation</a>

---

##### `ProjectOperationInput`<sup>Optional</sup> <a name="ProjectOperationInput" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.property.projectOperationInput"></a>

```csharp
public QuicksightDataSetLogicalTableMapDataTransformsProjectOperation ProjectOperationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperation">QuicksightDataSetLogicalTableMapDataTransformsProjectOperation</a>

---

##### `RenameColumnOperationInput`<sup>Optional</sup> <a name="RenameColumnOperationInput" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.property.renameColumnOperationInput"></a>

```csharp
public QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperation RenameColumnOperationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperation">QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperation</a>

---

##### `TagColumnOperationInput`<sup>Optional</sup> <a name="TagColumnOperationInput" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.property.tagColumnOperationInput"></a>

```csharp
public QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperation TagColumnOperationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperation">QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperation</a>

---

##### `UntagColumnOperationInput`<sup>Optional</sup> <a name="UntagColumnOperationInput" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.property.untagColumnOperationInput"></a>

```csharp
public QuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperation UntagColumnOperationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperation">QuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperation</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference <a name="QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.property.projectedColumnsInput">ProjectedColumnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.property.projectedColumns">ProjectedColumns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperation">QuicksightDataSetLogicalTableMapDataTransformsProjectOperation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ProjectedColumnsInput`<sup>Optional</sup> <a name="ProjectedColumnsInput" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.property.projectedColumnsInput"></a>

```csharp
public string[] ProjectedColumnsInput { get; }
```

- *Type:* string[]

---

##### `ProjectedColumns`<sup>Required</sup> <a name="ProjectedColumns" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.property.projectedColumns"></a>

```csharp
public string[] ProjectedColumns { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperationOutputReference.property.internalValue"></a>

```csharp
public QuicksightDataSetLogicalTableMapDataTransformsProjectOperation InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsProjectOperation">QuicksightDataSetLogicalTableMapDataTransformsProjectOperation</a>

---


### QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference <a name="QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.property.columnNameInput">ColumnNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.property.newColumnNameInput">NewColumnNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.property.columnName">ColumnName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.property.newColumnName">NewColumnName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperation">QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ColumnNameInput`<sup>Optional</sup> <a name="ColumnNameInput" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.property.columnNameInput"></a>

```csharp
public string ColumnNameInput { get; }
```

- *Type:* string

---

##### `NewColumnNameInput`<sup>Optional</sup> <a name="NewColumnNameInput" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.property.newColumnNameInput"></a>

```csharp
public string NewColumnNameInput { get; }
```

- *Type:* string

---

##### `ColumnName`<sup>Required</sup> <a name="ColumnName" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.property.columnName"></a>

```csharp
public string ColumnName { get; }
```

- *Type:* string

---

##### `NewColumnName`<sup>Required</sup> <a name="NewColumnName" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.property.newColumnName"></a>

```csharp
public string NewColumnName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperationOutputReference.property.internalValue"></a>

```csharp
public QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperation InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperation">QuicksightDataSetLogicalTableMapDataTransformsRenameColumnOperation</a>

---


### QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference <a name="QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.putTags">PutTags</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTags` <a name="PutTags" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.putTags"></a>

```csharp
private void PutTags(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.putTags.parameter.value"></a>

- *Type:* object

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.property.tags">Tags</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsList">QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.property.columnNameInput">ColumnNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.property.tagsInput">TagsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.property.columnName">ColumnName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperation">QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.property.tags"></a>

```csharp
public QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsList Tags { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsList">QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsList</a>

---

##### `ColumnNameInput`<sup>Optional</sup> <a name="ColumnNameInput" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.property.columnNameInput"></a>

```csharp
public string ColumnNameInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.property.tagsInput"></a>

```csharp
public object TagsInput { get; }
```

- *Type:* object

---

##### `ColumnName`<sup>Required</sup> <a name="ColumnName" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.property.columnName"></a>

```csharp
public string ColumnName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationOutputReference.property.internalValue"></a>

```csharp
public QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperation InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperation">QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperation</a>

---


### QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference <a name="QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.resetText">ResetText</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetText` <a name="ResetText" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.resetText"></a>

```csharp
private void ResetText()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.property.textInput">TextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.property.text">Text</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescription">QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescription</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TextInput`<sup>Optional</sup> <a name="TextInput" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.property.textInput"></a>

```csharp
public string TextInput { get; }
```

- *Type:* string

---

##### `Text`<sup>Required</sup> <a name="Text" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.property.text"></a>

```csharp
public string Text { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference.property.internalValue"></a>

```csharp
public QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescription InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescription">QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescription</a>

---


### QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsList <a name="QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsList" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsList.get"></a>

```csharp
private QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference <a name="QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.putColumnDescription">PutColumnDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.resetColumnDescription">ResetColumnDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.resetColumnGeographicRole">ResetColumnGeographicRole</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutColumnDescription` <a name="PutColumnDescription" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.putColumnDescription"></a>

```csharp
private void PutColumnDescription(QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescription Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.putColumnDescription.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescription">QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescription</a>

---

##### `ResetColumnDescription` <a name="ResetColumnDescription" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.resetColumnDescription"></a>

```csharp
private void ResetColumnDescription()
```

##### `ResetColumnGeographicRole` <a name="ResetColumnGeographicRole" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.resetColumnGeographicRole"></a>

```csharp
private void ResetColumnGeographicRole()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.property.columnDescription">ColumnDescription</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference">QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.property.columnDescriptionInput">ColumnDescriptionInput</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescription">QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.property.columnGeographicRoleInput">ColumnGeographicRoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.property.columnGeographicRole">ColumnGeographicRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ColumnDescription`<sup>Required</sup> <a name="ColumnDescription" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.property.columnDescription"></a>

```csharp
public QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference ColumnDescription { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference">QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescriptionOutputReference</a>

---

##### `ColumnDescriptionInput`<sup>Optional</sup> <a name="ColumnDescriptionInput" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.property.columnDescriptionInput"></a>

```csharp
public QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescription ColumnDescriptionInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescription">QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsColumnDescription</a>

---

##### `ColumnGeographicRoleInput`<sup>Optional</sup> <a name="ColumnGeographicRoleInput" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.property.columnGeographicRoleInput"></a>

```csharp
public string ColumnGeographicRoleInput { get; }
```

- *Type:* string

---

##### `ColumnGeographicRole`<sup>Required</sup> <a name="ColumnGeographicRole" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.property.columnGeographicRole"></a>

```csharp
public string ColumnGeographicRole { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsTagColumnOperationTagsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### QuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference <a name="QuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new QuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.property.columnNameInput">ColumnNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.property.tagNamesInput">TagNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.property.columnName">ColumnName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.property.tagNames">TagNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperation">QuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ColumnNameInput`<sup>Optional</sup> <a name="ColumnNameInput" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.property.columnNameInput"></a>

```csharp
public string ColumnNameInput { get; }
```

- *Type:* string

---

##### `TagNamesInput`<sup>Optional</sup> <a name="TagNamesInput" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.property.tagNamesInput"></a>

```csharp
public string[] TagNamesInput { get; }
```

- *Type:* string[]

---

##### `ColumnName`<sup>Required</sup> <a name="ColumnName" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.property.columnName"></a>

```csharp
public string ColumnName { get; }
```

- *Type:* string

---

##### `TagNames`<sup>Required</sup> <a name="TagNames" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.property.tagNames"></a>

```csharp
public string[] TagNames { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperationOutputReference.property.internalValue"></a>

```csharp
public QuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperation InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperation">QuicksightDataSetLogicalTableMapDataTransformsUntagColumnOperation</a>

---


### QuicksightDataSetLogicalTableMapList <a name="QuicksightDataSetLogicalTableMapList" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new QuicksightDataSetLogicalTableMapList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapList.get"></a>

```csharp
private QuicksightDataSetLogicalTableMapOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### QuicksightDataSetLogicalTableMapOutputReference <a name="QuicksightDataSetLogicalTableMapOutputReference" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new QuicksightDataSetLogicalTableMapOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.putDataTransforms">PutDataTransforms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.putSource">PutSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.resetDataTransforms">ResetDataTransforms</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDataTransforms` <a name="PutDataTransforms" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.putDataTransforms"></a>

```csharp
private void PutDataTransforms(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.putDataTransforms.parameter.value"></a>

- *Type:* object

---

##### `PutSource` <a name="PutSource" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.putSource"></a>

```csharp
private void PutSource(QuicksightDataSetLogicalTableMapSource Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.putSource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSource">QuicksightDataSetLogicalTableMapSource</a>

---

##### `ResetDataTransforms` <a name="ResetDataTransforms" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.resetDataTransforms"></a>

```csharp
private void ResetDataTransforms()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.property.dataTransforms">DataTransforms</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsList">QuicksightDataSetLogicalTableMapDataTransformsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.property.source">Source</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference">QuicksightDataSetLogicalTableMapSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.property.aliasInput">AliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.property.dataTransformsInput">DataTransformsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.property.logicalTableMapIdInput">LogicalTableMapIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.property.sourceInput">SourceInput</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSource">QuicksightDataSetLogicalTableMapSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.property.alias">Alias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.property.logicalTableMapId">LogicalTableMapId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DataTransforms`<sup>Required</sup> <a name="DataTransforms" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.property.dataTransforms"></a>

```csharp
public QuicksightDataSetLogicalTableMapDataTransformsList DataTransforms { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapDataTransformsList">QuicksightDataSetLogicalTableMapDataTransformsList</a>

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.property.source"></a>

```csharp
public QuicksightDataSetLogicalTableMapSourceOutputReference Source { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference">QuicksightDataSetLogicalTableMapSourceOutputReference</a>

---

##### `AliasInput`<sup>Optional</sup> <a name="AliasInput" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.property.aliasInput"></a>

```csharp
public string AliasInput { get; }
```

- *Type:* string

---

##### `DataTransformsInput`<sup>Optional</sup> <a name="DataTransformsInput" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.property.dataTransformsInput"></a>

```csharp
public object DataTransformsInput { get; }
```

- *Type:* object

---

##### `LogicalTableMapIdInput`<sup>Optional</sup> <a name="LogicalTableMapIdInput" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.property.logicalTableMapIdInput"></a>

```csharp
public string LogicalTableMapIdInput { get; }
```

- *Type:* string

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.property.sourceInput"></a>

```csharp
public QuicksightDataSetLogicalTableMapSource SourceInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSource">QuicksightDataSetLogicalTableMapSource</a>

---

##### `Alias`<sup>Required</sup> <a name="Alias" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.property.alias"></a>

```csharp
public string Alias { get; }
```

- *Type:* string

---

##### `LogicalTableMapId`<sup>Required</sup> <a name="LogicalTableMapId" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.property.logicalTableMapId"></a>

```csharp
public string LogicalTableMapId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference <a name="QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.resetUniqueKey">ResetUniqueKey</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetUniqueKey` <a name="ResetUniqueKey" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.resetUniqueKey"></a>

```csharp
private void ResetUniqueKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.property.uniqueKeyInput">UniqueKeyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.property.uniqueKey">UniqueKey</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyProperties">QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `UniqueKeyInput`<sup>Optional</sup> <a name="UniqueKeyInput" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.property.uniqueKeyInput"></a>

```csharp
public object UniqueKeyInput { get; }
```

- *Type:* object

---

##### `UniqueKey`<sup>Required</sup> <a name="UniqueKey" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.property.uniqueKey"></a>

```csharp
public object UniqueKey { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference.property.internalValue"></a>

```csharp
public QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyProperties InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyProperties">QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyProperties</a>

---


### QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference <a name="QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.putLeftJoinKeyProperties">PutLeftJoinKeyProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.putRightJoinKeyProperties">PutRightJoinKeyProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.resetLeftJoinKeyProperties">ResetLeftJoinKeyProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.resetRightJoinKeyProperties">ResetRightJoinKeyProperties</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutLeftJoinKeyProperties` <a name="PutLeftJoinKeyProperties" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.putLeftJoinKeyProperties"></a>

```csharp
private void PutLeftJoinKeyProperties(QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyProperties Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.putLeftJoinKeyProperties.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyProperties">QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyProperties</a>

---

##### `PutRightJoinKeyProperties` <a name="PutRightJoinKeyProperties" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.putRightJoinKeyProperties"></a>

```csharp
private void PutRightJoinKeyProperties(QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyProperties Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.putRightJoinKeyProperties.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyProperties">QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyProperties</a>

---

##### `ResetLeftJoinKeyProperties` <a name="ResetLeftJoinKeyProperties" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.resetLeftJoinKeyProperties"></a>

```csharp
private void ResetLeftJoinKeyProperties()
```

##### `ResetRightJoinKeyProperties` <a name="ResetRightJoinKeyProperties" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.resetRightJoinKeyProperties"></a>

```csharp
private void ResetRightJoinKeyProperties()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.property.leftJoinKeyProperties">LeftJoinKeyProperties</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference">QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.property.rightJoinKeyProperties">RightJoinKeyProperties</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference">QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.property.leftJoinKeyPropertiesInput">LeftJoinKeyPropertiesInput</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyProperties">QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.property.leftOperandInput">LeftOperandInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.property.onClauseInput">OnClauseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.property.rightJoinKeyPropertiesInput">RightJoinKeyPropertiesInput</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyProperties">QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.property.rightOperandInput">RightOperandInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.property.leftOperand">LeftOperand</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.property.onClause">OnClause</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.property.rightOperand">RightOperand</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstruction">QuicksightDataSetLogicalTableMapSourceJoinInstruction</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LeftJoinKeyProperties`<sup>Required</sup> <a name="LeftJoinKeyProperties" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.property.leftJoinKeyProperties"></a>

```csharp
public QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference LeftJoinKeyProperties { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference">QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyPropertiesOutputReference</a>

---

##### `RightJoinKeyProperties`<sup>Required</sup> <a name="RightJoinKeyProperties" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.property.rightJoinKeyProperties"></a>

```csharp
public QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference RightJoinKeyProperties { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference">QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference</a>

---

##### `LeftJoinKeyPropertiesInput`<sup>Optional</sup> <a name="LeftJoinKeyPropertiesInput" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.property.leftJoinKeyPropertiesInput"></a>

```csharp
public QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyProperties LeftJoinKeyPropertiesInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyProperties">QuicksightDataSetLogicalTableMapSourceJoinInstructionLeftJoinKeyProperties</a>

---

##### `LeftOperandInput`<sup>Optional</sup> <a name="LeftOperandInput" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.property.leftOperandInput"></a>

```csharp
public string LeftOperandInput { get; }
```

- *Type:* string

---

##### `OnClauseInput`<sup>Optional</sup> <a name="OnClauseInput" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.property.onClauseInput"></a>

```csharp
public string OnClauseInput { get; }
```

- *Type:* string

---

##### `RightJoinKeyPropertiesInput`<sup>Optional</sup> <a name="RightJoinKeyPropertiesInput" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.property.rightJoinKeyPropertiesInput"></a>

```csharp
public QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyProperties RightJoinKeyPropertiesInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyProperties">QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyProperties</a>

---

##### `RightOperandInput`<sup>Optional</sup> <a name="RightOperandInput" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.property.rightOperandInput"></a>

```csharp
public string RightOperandInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `LeftOperand`<sup>Required</sup> <a name="LeftOperand" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.property.leftOperand"></a>

```csharp
public string LeftOperand { get; }
```

- *Type:* string

---

##### `OnClause`<sup>Required</sup> <a name="OnClause" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.property.onClause"></a>

```csharp
public string OnClause { get; }
```

- *Type:* string

---

##### `RightOperand`<sup>Required</sup> <a name="RightOperand" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.property.rightOperand"></a>

```csharp
public string RightOperand { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference.property.internalValue"></a>

```csharp
public QuicksightDataSetLogicalTableMapSourceJoinInstruction InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstruction">QuicksightDataSetLogicalTableMapSourceJoinInstruction</a>

---


### QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference <a name="QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.resetUniqueKey">ResetUniqueKey</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetUniqueKey` <a name="ResetUniqueKey" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.resetUniqueKey"></a>

```csharp
private void ResetUniqueKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.property.uniqueKeyInput">UniqueKeyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.property.uniqueKey">UniqueKey</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyProperties">QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `UniqueKeyInput`<sup>Optional</sup> <a name="UniqueKeyInput" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.property.uniqueKeyInput"></a>

```csharp
public object UniqueKeyInput { get; }
```

- *Type:* object

---

##### `UniqueKey`<sup>Required</sup> <a name="UniqueKey" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.property.uniqueKey"></a>

```csharp
public object UniqueKey { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyPropertiesOutputReference.property.internalValue"></a>

```csharp
public QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyProperties InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyProperties">QuicksightDataSetLogicalTableMapSourceJoinInstructionRightJoinKeyProperties</a>

---


### QuicksightDataSetLogicalTableMapSourceOutputReference <a name="QuicksightDataSetLogicalTableMapSourceOutputReference" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new QuicksightDataSetLogicalTableMapSourceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.putJoinInstruction">PutJoinInstruction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.resetDataSetArn">ResetDataSetArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.resetJoinInstruction">ResetJoinInstruction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.resetPhysicalTableId">ResetPhysicalTableId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutJoinInstruction` <a name="PutJoinInstruction" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.putJoinInstruction"></a>

```csharp
private void PutJoinInstruction(QuicksightDataSetLogicalTableMapSourceJoinInstruction Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.putJoinInstruction.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstruction">QuicksightDataSetLogicalTableMapSourceJoinInstruction</a>

---

##### `ResetDataSetArn` <a name="ResetDataSetArn" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.resetDataSetArn"></a>

```csharp
private void ResetDataSetArn()
```

##### `ResetJoinInstruction` <a name="ResetJoinInstruction" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.resetJoinInstruction"></a>

```csharp
private void ResetJoinInstruction()
```

##### `ResetPhysicalTableId` <a name="ResetPhysicalTableId" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.resetPhysicalTableId"></a>

```csharp
private void ResetPhysicalTableId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.property.joinInstruction">JoinInstruction</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference">QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.property.dataSetArnInput">DataSetArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.property.joinInstructionInput">JoinInstructionInput</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstruction">QuicksightDataSetLogicalTableMapSourceJoinInstruction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.property.physicalTableIdInput">PhysicalTableIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.property.dataSetArn">DataSetArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.property.physicalTableId">PhysicalTableId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSource">QuicksightDataSetLogicalTableMapSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `JoinInstruction`<sup>Required</sup> <a name="JoinInstruction" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.property.joinInstruction"></a>

```csharp
public QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference JoinInstruction { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference">QuicksightDataSetLogicalTableMapSourceJoinInstructionOutputReference</a>

---

##### `DataSetArnInput`<sup>Optional</sup> <a name="DataSetArnInput" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.property.dataSetArnInput"></a>

```csharp
public string DataSetArnInput { get; }
```

- *Type:* string

---

##### `JoinInstructionInput`<sup>Optional</sup> <a name="JoinInstructionInput" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.property.joinInstructionInput"></a>

```csharp
public QuicksightDataSetLogicalTableMapSourceJoinInstruction JoinInstructionInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceJoinInstruction">QuicksightDataSetLogicalTableMapSourceJoinInstruction</a>

---

##### `PhysicalTableIdInput`<sup>Optional</sup> <a name="PhysicalTableIdInput" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.property.physicalTableIdInput"></a>

```csharp
public string PhysicalTableIdInput { get; }
```

- *Type:* string

---

##### `DataSetArn`<sup>Required</sup> <a name="DataSetArn" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.property.dataSetArn"></a>

```csharp
public string DataSetArn { get; }
```

- *Type:* string

---

##### `PhysicalTableId`<sup>Required</sup> <a name="PhysicalTableId" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.property.physicalTableId"></a>

```csharp
public string PhysicalTableId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSourceOutputReference.property.internalValue"></a>

```csharp
public QuicksightDataSetLogicalTableMapSource InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetLogicalTableMapSource">QuicksightDataSetLogicalTableMapSource</a>

---


### QuicksightDataSetOutputColumnsList <a name="QuicksightDataSetOutputColumnsList" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetOutputColumnsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetOutputColumnsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new QuicksightDataSetOutputColumnsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetOutputColumnsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetOutputColumnsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetOutputColumnsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetOutputColumnsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetOutputColumnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetOutputColumnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetOutputColumnsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetOutputColumnsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetOutputColumnsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetOutputColumnsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetOutputColumnsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetOutputColumnsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetOutputColumnsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetOutputColumnsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetOutputColumnsList.get"></a>

```csharp
private QuicksightDataSetOutputColumnsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetOutputColumnsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetOutputColumnsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetOutputColumnsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetOutputColumnsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetOutputColumnsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### QuicksightDataSetOutputColumnsOutputReference <a name="QuicksightDataSetOutputColumnsOutputReference" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetOutputColumnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetOutputColumnsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new QuicksightDataSetOutputColumnsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetOutputColumnsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetOutputColumnsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetOutputColumnsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetOutputColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetOutputColumnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetOutputColumnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetOutputColumnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetOutputColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetOutputColumnsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetOutputColumnsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetOutputColumnsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetOutputColumnsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetOutputColumnsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetOutputColumnsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetOutputColumnsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetOutputColumnsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetOutputColumnsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetOutputColumnsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetOutputColumnsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetOutputColumnsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetOutputColumnsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetOutputColumnsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetOutputColumnsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetOutputColumnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetOutputColumnsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetOutputColumnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetOutputColumnsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetOutputColumnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetOutputColumnsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetOutputColumnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetOutputColumnsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetOutputColumnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetOutputColumnsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetOutputColumnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetOutputColumnsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetOutputColumnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetOutputColumnsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetOutputColumnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetOutputColumnsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetOutputColumnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetOutputColumnsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetOutputColumnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetOutputColumnsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetOutputColumnsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetOutputColumnsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetOutputColumnsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetOutputColumnsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetOutputColumnsOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetOutputColumnsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetOutputColumnsOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetOutputColumnsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetOutputColumns">QuicksightDataSetOutputColumns</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetOutputColumnsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetOutputColumnsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetOutputColumnsOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetOutputColumnsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetOutputColumnsOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetOutputColumnsOutputReference.property.internalValue"></a>

```csharp
public QuicksightDataSetOutputColumns InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetOutputColumns">QuicksightDataSetOutputColumns</a>

---


### QuicksightDataSetPermissionsList <a name="QuicksightDataSetPermissionsList" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPermissionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPermissionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new QuicksightDataSetPermissionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPermissionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPermissionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPermissionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPermissionsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPermissionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPermissionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPermissionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPermissionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPermissionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPermissionsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPermissionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPermissionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPermissionsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPermissionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPermissionsList.get"></a>

```csharp
private QuicksightDataSetPermissionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPermissionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPermissionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPermissionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPermissionsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPermissionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPermissionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPermissionsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### QuicksightDataSetPermissionsOutputReference <a name="QuicksightDataSetPermissionsOutputReference" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPermissionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPermissionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new QuicksightDataSetPermissionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPermissionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPermissionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPermissionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPermissionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPermissionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPermissionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPermissionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPermissionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPermissionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPermissionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPermissionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPermissionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPermissionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPermissionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPermissionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPermissionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPermissionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPermissionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPermissionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPermissionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPermissionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPermissionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPermissionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPermissionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPermissionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPermissionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPermissionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPermissionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPermissionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPermissionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPermissionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPermissionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPermissionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPermissionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPermissionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPermissionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPermissionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPermissionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPermissionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPermissionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPermissionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPermissionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPermissionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPermissionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPermissionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPermissionsOutputReference.property.actionsInput">ActionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPermissionsOutputReference.property.principalInput">PrincipalInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPermissionsOutputReference.property.actions">Actions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPermissionsOutputReference.property.principal">Principal</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPermissionsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPermissionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPermissionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ActionsInput`<sup>Optional</sup> <a name="ActionsInput" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPermissionsOutputReference.property.actionsInput"></a>

```csharp
public string[] ActionsInput { get; }
```

- *Type:* string[]

---

##### `PrincipalInput`<sup>Optional</sup> <a name="PrincipalInput" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPermissionsOutputReference.property.principalInput"></a>

```csharp
public string PrincipalInput { get; }
```

- *Type:* string

---

##### `Actions`<sup>Required</sup> <a name="Actions" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPermissionsOutputReference.property.actions"></a>

```csharp
public string[] Actions { get; }
```

- *Type:* string[]

---

##### `Principal`<sup>Required</sup> <a name="Principal" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPermissionsOutputReference.property.principal"></a>

```csharp
public string Principal { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPermissionsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### QuicksightDataSetPhysicalTableMapCustomSqlColumnsList <a name="QuicksightDataSetPhysicalTableMapCustomSqlColumnsList" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new QuicksightDataSetPhysicalTableMapCustomSqlColumnsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsList.get"></a>

```csharp
private QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference <a name="QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### QuicksightDataSetPhysicalTableMapCustomSqlOutputReference <a name="QuicksightDataSetPhysicalTableMapCustomSqlOutputReference" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new QuicksightDataSetPhysicalTableMapCustomSqlOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.putColumns">PutColumns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.resetColumns">ResetColumns</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutColumns` <a name="PutColumns" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.putColumns"></a>

```csharp
private void PutColumns(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.putColumns.parameter.value"></a>

- *Type:* object

---

##### `ResetColumns` <a name="ResetColumns" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.resetColumns"></a>

```csharp
private void ResetColumns()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.property.columns">Columns</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsList">QuicksightDataSetPhysicalTableMapCustomSqlColumnsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.property.columnsInput">ColumnsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.property.dataSourceArnInput">DataSourceArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.property.sqlQueryInput">SqlQueryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.property.dataSourceArn">DataSourceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.property.sqlQuery">SqlQuery</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSql">QuicksightDataSetPhysicalTableMapCustomSql</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Columns`<sup>Required</sup> <a name="Columns" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.property.columns"></a>

```csharp
public QuicksightDataSetPhysicalTableMapCustomSqlColumnsList Columns { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlColumnsList">QuicksightDataSetPhysicalTableMapCustomSqlColumnsList</a>

---

##### `ColumnsInput`<sup>Optional</sup> <a name="ColumnsInput" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.property.columnsInput"></a>

```csharp
public object ColumnsInput { get; }
```

- *Type:* object

---

##### `DataSourceArnInput`<sup>Optional</sup> <a name="DataSourceArnInput" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.property.dataSourceArnInput"></a>

```csharp
public string DataSourceArnInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `SqlQueryInput`<sup>Optional</sup> <a name="SqlQueryInput" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.property.sqlQueryInput"></a>

```csharp
public string SqlQueryInput { get; }
```

- *Type:* string

---

##### `DataSourceArn`<sup>Required</sup> <a name="DataSourceArn" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.property.dataSourceArn"></a>

```csharp
public string DataSourceArn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `SqlQuery`<sup>Required</sup> <a name="SqlQuery" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.property.sqlQuery"></a>

```csharp
public string SqlQuery { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference.property.internalValue"></a>

```csharp
public QuicksightDataSetPhysicalTableMapCustomSql InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSql">QuicksightDataSetPhysicalTableMapCustomSql</a>

---


### QuicksightDataSetPhysicalTableMapList <a name="QuicksightDataSetPhysicalTableMapList" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new QuicksightDataSetPhysicalTableMapList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapList.get"></a>

```csharp
private QuicksightDataSetPhysicalTableMapOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### QuicksightDataSetPhysicalTableMapOutputReference <a name="QuicksightDataSetPhysicalTableMapOutputReference" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new QuicksightDataSetPhysicalTableMapOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.putCustomSql">PutCustomSql</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.putRelationalTable">PutRelationalTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.putS3Source">PutS3Source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.resetCustomSql">ResetCustomSql</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.resetRelationalTable">ResetRelationalTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.resetS3Source">ResetS3Source</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCustomSql` <a name="PutCustomSql" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.putCustomSql"></a>

```csharp
private void PutCustomSql(QuicksightDataSetPhysicalTableMapCustomSql Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.putCustomSql.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSql">QuicksightDataSetPhysicalTableMapCustomSql</a>

---

##### `PutRelationalTable` <a name="PutRelationalTable" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.putRelationalTable"></a>

```csharp
private void PutRelationalTable(QuicksightDataSetPhysicalTableMapRelationalTable Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.putRelationalTable.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTable">QuicksightDataSetPhysicalTableMapRelationalTable</a>

---

##### `PutS3Source` <a name="PutS3Source" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.putS3Source"></a>

```csharp
private void PutS3Source(QuicksightDataSetPhysicalTableMapS3Source Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.putS3Source.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3Source">QuicksightDataSetPhysicalTableMapS3Source</a>

---

##### `ResetCustomSql` <a name="ResetCustomSql" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.resetCustomSql"></a>

```csharp
private void ResetCustomSql()
```

##### `ResetRelationalTable` <a name="ResetRelationalTable" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.resetRelationalTable"></a>

```csharp
private void ResetRelationalTable()
```

##### `ResetS3Source` <a name="ResetS3Source" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.resetS3Source"></a>

```csharp
private void ResetS3Source()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.property.customSql">CustomSql</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference">QuicksightDataSetPhysicalTableMapCustomSqlOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.property.relationalTable">RelationalTable</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference">QuicksightDataSetPhysicalTableMapRelationalTableOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.property.s3Source">S3Source</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference">QuicksightDataSetPhysicalTableMapS3SourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.property.customSqlInput">CustomSqlInput</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSql">QuicksightDataSetPhysicalTableMapCustomSql</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.property.physicalTableMapIdInput">PhysicalTableMapIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.property.relationalTableInput">RelationalTableInput</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTable">QuicksightDataSetPhysicalTableMapRelationalTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.property.s3SourceInput">S3SourceInput</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3Source">QuicksightDataSetPhysicalTableMapS3Source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.property.physicalTableMapId">PhysicalTableMapId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CustomSql`<sup>Required</sup> <a name="CustomSql" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.property.customSql"></a>

```csharp
public QuicksightDataSetPhysicalTableMapCustomSqlOutputReference CustomSql { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSqlOutputReference">QuicksightDataSetPhysicalTableMapCustomSqlOutputReference</a>

---

##### `RelationalTable`<sup>Required</sup> <a name="RelationalTable" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.property.relationalTable"></a>

```csharp
public QuicksightDataSetPhysicalTableMapRelationalTableOutputReference RelationalTable { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference">QuicksightDataSetPhysicalTableMapRelationalTableOutputReference</a>

---

##### `S3Source`<sup>Required</sup> <a name="S3Source" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.property.s3Source"></a>

```csharp
public QuicksightDataSetPhysicalTableMapS3SourceOutputReference S3Source { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference">QuicksightDataSetPhysicalTableMapS3SourceOutputReference</a>

---

##### `CustomSqlInput`<sup>Optional</sup> <a name="CustomSqlInput" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.property.customSqlInput"></a>

```csharp
public QuicksightDataSetPhysicalTableMapCustomSql CustomSqlInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapCustomSql">QuicksightDataSetPhysicalTableMapCustomSql</a>

---

##### `PhysicalTableMapIdInput`<sup>Optional</sup> <a name="PhysicalTableMapIdInput" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.property.physicalTableMapIdInput"></a>

```csharp
public string PhysicalTableMapIdInput { get; }
```

- *Type:* string

---

##### `RelationalTableInput`<sup>Optional</sup> <a name="RelationalTableInput" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.property.relationalTableInput"></a>

```csharp
public QuicksightDataSetPhysicalTableMapRelationalTable RelationalTableInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTable">QuicksightDataSetPhysicalTableMapRelationalTable</a>

---

##### `S3SourceInput`<sup>Optional</sup> <a name="S3SourceInput" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.property.s3SourceInput"></a>

```csharp
public QuicksightDataSetPhysicalTableMapS3Source S3SourceInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3Source">QuicksightDataSetPhysicalTableMapS3Source</a>

---

##### `PhysicalTableMapId`<sup>Required</sup> <a name="PhysicalTableMapId" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.property.physicalTableMapId"></a>

```csharp
public string PhysicalTableMapId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsList <a name="QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsList" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsList.get"></a>

```csharp
private QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference <a name="QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### QuicksightDataSetPhysicalTableMapRelationalTableOutputReference <a name="QuicksightDataSetPhysicalTableMapRelationalTableOutputReference" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new QuicksightDataSetPhysicalTableMapRelationalTableOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.putInputColumns">PutInputColumns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.resetCatalog">ResetCatalog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.resetSchema">ResetSchema</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutInputColumns` <a name="PutInputColumns" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.putInputColumns"></a>

```csharp
private void PutInputColumns(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.putInputColumns.parameter.value"></a>

- *Type:* object

---

##### `ResetCatalog` <a name="ResetCatalog" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.resetCatalog"></a>

```csharp
private void ResetCatalog()
```

##### `ResetSchema` <a name="ResetSchema" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.resetSchema"></a>

```csharp
private void ResetSchema()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.property.inputColumns">InputColumns</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsList">QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.property.catalogInput">CatalogInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.property.dataSourceArnInput">DataSourceArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.property.inputColumnsInput">InputColumnsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.property.schemaInput">SchemaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.property.catalog">Catalog</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.property.dataSourceArn">DataSourceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.property.schema">Schema</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTable">QuicksightDataSetPhysicalTableMapRelationalTable</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InputColumns`<sup>Required</sup> <a name="InputColumns" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.property.inputColumns"></a>

```csharp
public QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsList InputColumns { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsList">QuicksightDataSetPhysicalTableMapRelationalTableInputColumnsList</a>

---

##### `CatalogInput`<sup>Optional</sup> <a name="CatalogInput" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.property.catalogInput"></a>

```csharp
public string CatalogInput { get; }
```

- *Type:* string

---

##### `DataSourceArnInput`<sup>Optional</sup> <a name="DataSourceArnInput" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.property.dataSourceArnInput"></a>

```csharp
public string DataSourceArnInput { get; }
```

- *Type:* string

---

##### `InputColumnsInput`<sup>Optional</sup> <a name="InputColumnsInput" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.property.inputColumnsInput"></a>

```csharp
public object InputColumnsInput { get; }
```

- *Type:* object

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `SchemaInput`<sup>Optional</sup> <a name="SchemaInput" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.property.schemaInput"></a>

```csharp
public string SchemaInput { get; }
```

- *Type:* string

---

##### `Catalog`<sup>Required</sup> <a name="Catalog" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.property.catalog"></a>

```csharp
public string Catalog { get; }
```

- *Type:* string

---

##### `DataSourceArn`<sup>Required</sup> <a name="DataSourceArn" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.property.dataSourceArn"></a>

```csharp
public string DataSourceArn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Schema`<sup>Required</sup> <a name="Schema" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.property.schema"></a>

```csharp
public string Schema { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTableOutputReference.property.internalValue"></a>

```csharp
public QuicksightDataSetPhysicalTableMapRelationalTable InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapRelationalTable">QuicksightDataSetPhysicalTableMapRelationalTable</a>

---


### QuicksightDataSetPhysicalTableMapS3SourceInputColumnsList <a name="QuicksightDataSetPhysicalTableMapS3SourceInputColumnsList" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new QuicksightDataSetPhysicalTableMapS3SourceInputColumnsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsList.get"></a>

```csharp
private QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference <a name="QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### QuicksightDataSetPhysicalTableMapS3SourceOutputReference <a name="QuicksightDataSetPhysicalTableMapS3SourceOutputReference" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new QuicksightDataSetPhysicalTableMapS3SourceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.putInputColumns">PutInputColumns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.putUploadSettings">PutUploadSettings</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutInputColumns` <a name="PutInputColumns" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.putInputColumns"></a>

```csharp
private void PutInputColumns(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.putInputColumns.parameter.value"></a>

- *Type:* object

---

##### `PutUploadSettings` <a name="PutUploadSettings" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.putUploadSettings"></a>

```csharp
private void PutUploadSettings(QuicksightDataSetPhysicalTableMapS3SourceUploadSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.putUploadSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettings">QuicksightDataSetPhysicalTableMapS3SourceUploadSettings</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.property.inputColumns">InputColumns</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsList">QuicksightDataSetPhysicalTableMapS3SourceInputColumnsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.property.uploadSettings">UploadSettings</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference">QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.property.dataSourceArnInput">DataSourceArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.property.inputColumnsInput">InputColumnsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.property.uploadSettingsInput">UploadSettingsInput</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettings">QuicksightDataSetPhysicalTableMapS3SourceUploadSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.property.dataSourceArn">DataSourceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3Source">QuicksightDataSetPhysicalTableMapS3Source</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InputColumns`<sup>Required</sup> <a name="InputColumns" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.property.inputColumns"></a>

```csharp
public QuicksightDataSetPhysicalTableMapS3SourceInputColumnsList InputColumns { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceInputColumnsList">QuicksightDataSetPhysicalTableMapS3SourceInputColumnsList</a>

---

##### `UploadSettings`<sup>Required</sup> <a name="UploadSettings" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.property.uploadSettings"></a>

```csharp
public QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference UploadSettings { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference">QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference</a>

---

##### `DataSourceArnInput`<sup>Optional</sup> <a name="DataSourceArnInput" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.property.dataSourceArnInput"></a>

```csharp
public string DataSourceArnInput { get; }
```

- *Type:* string

---

##### `InputColumnsInput`<sup>Optional</sup> <a name="InputColumnsInput" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.property.inputColumnsInput"></a>

```csharp
public object InputColumnsInput { get; }
```

- *Type:* object

---

##### `UploadSettingsInput`<sup>Optional</sup> <a name="UploadSettingsInput" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.property.uploadSettingsInput"></a>

```csharp
public QuicksightDataSetPhysicalTableMapS3SourceUploadSettings UploadSettingsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettings">QuicksightDataSetPhysicalTableMapS3SourceUploadSettings</a>

---

##### `DataSourceArn`<sup>Required</sup> <a name="DataSourceArn" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.property.dataSourceArn"></a>

```csharp
public string DataSourceArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceOutputReference.property.internalValue"></a>

```csharp
public QuicksightDataSetPhysicalTableMapS3Source InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3Source">QuicksightDataSetPhysicalTableMapS3Source</a>

---


### QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference <a name="QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.resetContainsHeader">ResetContainsHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.resetDelimiter">ResetDelimiter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.resetFormat">ResetFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.resetStartFromRow">ResetStartFromRow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.resetTextQualifier">ResetTextQualifier</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetContainsHeader` <a name="ResetContainsHeader" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.resetContainsHeader"></a>

```csharp
private void ResetContainsHeader()
```

##### `ResetDelimiter` <a name="ResetDelimiter" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.resetDelimiter"></a>

```csharp
private void ResetDelimiter()
```

##### `ResetFormat` <a name="ResetFormat" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.resetFormat"></a>

```csharp
private void ResetFormat()
```

##### `ResetStartFromRow` <a name="ResetStartFromRow" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.resetStartFromRow"></a>

```csharp
private void ResetStartFromRow()
```

##### `ResetTextQualifier` <a name="ResetTextQualifier" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.resetTextQualifier"></a>

```csharp
private void ResetTextQualifier()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.property.containsHeaderInput">ContainsHeaderInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.property.delimiterInput">DelimiterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.property.formatInput">FormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.property.startFromRowInput">StartFromRowInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.property.textQualifierInput">TextQualifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.property.containsHeader">ContainsHeader</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.property.delimiter">Delimiter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.property.format">Format</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.property.startFromRow">StartFromRow</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.property.textQualifier">TextQualifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettings">QuicksightDataSetPhysicalTableMapS3SourceUploadSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ContainsHeaderInput`<sup>Optional</sup> <a name="ContainsHeaderInput" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.property.containsHeaderInput"></a>

```csharp
public object ContainsHeaderInput { get; }
```

- *Type:* object

---

##### `DelimiterInput`<sup>Optional</sup> <a name="DelimiterInput" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.property.delimiterInput"></a>

```csharp
public string DelimiterInput { get; }
```

- *Type:* string

---

##### `FormatInput`<sup>Optional</sup> <a name="FormatInput" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.property.formatInput"></a>

```csharp
public string FormatInput { get; }
```

- *Type:* string

---

##### `StartFromRowInput`<sup>Optional</sup> <a name="StartFromRowInput" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.property.startFromRowInput"></a>

```csharp
public double StartFromRowInput { get; }
```

- *Type:* double

---

##### `TextQualifierInput`<sup>Optional</sup> <a name="TextQualifierInput" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.property.textQualifierInput"></a>

```csharp
public string TextQualifierInput { get; }
```

- *Type:* string

---

##### `ContainsHeader`<sup>Required</sup> <a name="ContainsHeader" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.property.containsHeader"></a>

```csharp
public object ContainsHeader { get; }
```

- *Type:* object

---

##### `Delimiter`<sup>Required</sup> <a name="Delimiter" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.property.delimiter"></a>

```csharp
public string Delimiter { get; }
```

- *Type:* string

---

##### `Format`<sup>Required</sup> <a name="Format" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.property.format"></a>

```csharp
public string Format { get; }
```

- *Type:* string

---

##### `StartFromRow`<sup>Required</sup> <a name="StartFromRow" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.property.startFromRow"></a>

```csharp
public double StartFromRow { get; }
```

- *Type:* double

---

##### `TextQualifier`<sup>Required</sup> <a name="TextQualifier" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.property.textQualifier"></a>

```csharp
public string TextQualifier { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettingsOutputReference.property.internalValue"></a>

```csharp
public QuicksightDataSetPhysicalTableMapS3SourceUploadSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetPhysicalTableMapS3SourceUploadSettings">QuicksightDataSetPhysicalTableMapS3SourceUploadSettings</a>

---


### QuicksightDataSetRefreshPropertiesOutputReference <a name="QuicksightDataSetRefreshPropertiesOutputReference" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new QuicksightDataSetRefreshPropertiesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesOutputReference.putRefreshConfiguration">PutRefreshConfiguration</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRefreshConfiguration` <a name="PutRefreshConfiguration" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesOutputReference.putRefreshConfiguration"></a>

```csharp
private void PutRefreshConfiguration(QuicksightDataSetRefreshPropertiesRefreshConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesOutputReference.putRefreshConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesRefreshConfiguration">QuicksightDataSetRefreshPropertiesRefreshConfiguration</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesOutputReference.property.refreshConfiguration">RefreshConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesRefreshConfigurationOutputReference">QuicksightDataSetRefreshPropertiesRefreshConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesOutputReference.property.refreshConfigurationInput">RefreshConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesRefreshConfiguration">QuicksightDataSetRefreshPropertiesRefreshConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshProperties">QuicksightDataSetRefreshProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RefreshConfiguration`<sup>Required</sup> <a name="RefreshConfiguration" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesOutputReference.property.refreshConfiguration"></a>

```csharp
public QuicksightDataSetRefreshPropertiesRefreshConfigurationOutputReference RefreshConfiguration { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesRefreshConfigurationOutputReference">QuicksightDataSetRefreshPropertiesRefreshConfigurationOutputReference</a>

---

##### `RefreshConfigurationInput`<sup>Optional</sup> <a name="RefreshConfigurationInput" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesOutputReference.property.refreshConfigurationInput"></a>

```csharp
public QuicksightDataSetRefreshPropertiesRefreshConfiguration RefreshConfigurationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesRefreshConfiguration">QuicksightDataSetRefreshPropertiesRefreshConfiguration</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesOutputReference.property.internalValue"></a>

```csharp
public QuicksightDataSetRefreshProperties InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshProperties">QuicksightDataSetRefreshProperties</a>

---


### QuicksightDataSetRefreshPropertiesRefreshConfigurationIncrementalRefreshLookbackWindowOutputReference <a name="QuicksightDataSetRefreshPropertiesRefreshConfigurationIncrementalRefreshLookbackWindowOutputReference" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesRefreshConfigurationIncrementalRefreshLookbackWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesRefreshConfigurationIncrementalRefreshLookbackWindowOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new QuicksightDataSetRefreshPropertiesRefreshConfigurationIncrementalRefreshLookbackWindowOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesRefreshConfigurationIncrementalRefreshLookbackWindowOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesRefreshConfigurationIncrementalRefreshLookbackWindowOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesRefreshConfigurationIncrementalRefreshLookbackWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesRefreshConfigurationIncrementalRefreshLookbackWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesRefreshConfigurationIncrementalRefreshLookbackWindowOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesRefreshConfigurationIncrementalRefreshLookbackWindowOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesRefreshConfigurationIncrementalRefreshLookbackWindowOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesRefreshConfigurationIncrementalRefreshLookbackWindowOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesRefreshConfigurationIncrementalRefreshLookbackWindowOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesRefreshConfigurationIncrementalRefreshLookbackWindowOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesRefreshConfigurationIncrementalRefreshLookbackWindowOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesRefreshConfigurationIncrementalRefreshLookbackWindowOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesRefreshConfigurationIncrementalRefreshLookbackWindowOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesRefreshConfigurationIncrementalRefreshLookbackWindowOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesRefreshConfigurationIncrementalRefreshLookbackWindowOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesRefreshConfigurationIncrementalRefreshLookbackWindowOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesRefreshConfigurationIncrementalRefreshLookbackWindowOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesRefreshConfigurationIncrementalRefreshLookbackWindowOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesRefreshConfigurationIncrementalRefreshLookbackWindowOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesRefreshConfigurationIncrementalRefreshLookbackWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesRefreshConfigurationIncrementalRefreshLookbackWindowOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesRefreshConfigurationIncrementalRefreshLookbackWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesRefreshConfigurationIncrementalRefreshLookbackWindowOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesRefreshConfigurationIncrementalRefreshLookbackWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesRefreshConfigurationIncrementalRefreshLookbackWindowOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesRefreshConfigurationIncrementalRefreshLookbackWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesRefreshConfigurationIncrementalRefreshLookbackWindowOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesRefreshConfigurationIncrementalRefreshLookbackWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesRefreshConfigurationIncrementalRefreshLookbackWindowOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesRefreshConfigurationIncrementalRefreshLookbackWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesRefreshConfigurationIncrementalRefreshLookbackWindowOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesRefreshConfigurationIncrementalRefreshLookbackWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesRefreshConfigurationIncrementalRefreshLookbackWindowOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesRefreshConfigurationIncrementalRefreshLookbackWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesRefreshConfigurationIncrementalRefreshLookbackWindowOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesRefreshConfigurationIncrementalRefreshLookbackWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesRefreshConfigurationIncrementalRefreshLookbackWindowOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesRefreshConfigurationIncrementalRefreshLookbackWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesRefreshConfigurationIncrementalRefreshLookbackWindowOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesRefreshConfigurationIncrementalRefreshLookbackWindowOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesRefreshConfigurationIncrementalRefreshLookbackWindowOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesRefreshConfigurationIncrementalRefreshLookbackWindowOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesRefreshConfigurationIncrementalRefreshLookbackWindowOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesRefreshConfigurationIncrementalRefreshLookbackWindowOutputReference.property.columnNameInput">ColumnNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesRefreshConfigurationIncrementalRefreshLookbackWindowOutputReference.property.sizeInput">SizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesRefreshConfigurationIncrementalRefreshLookbackWindowOutputReference.property.sizeUnitInput">SizeUnitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesRefreshConfigurationIncrementalRefreshLookbackWindowOutputReference.property.columnName">ColumnName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesRefreshConfigurationIncrementalRefreshLookbackWindowOutputReference.property.size">Size</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesRefreshConfigurationIncrementalRefreshLookbackWindowOutputReference.property.sizeUnit">SizeUnit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesRefreshConfigurationIncrementalRefreshLookbackWindowOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesRefreshConfigurationIncrementalRefreshLookbackWindow">QuicksightDataSetRefreshPropertiesRefreshConfigurationIncrementalRefreshLookbackWindow</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesRefreshConfigurationIncrementalRefreshLookbackWindowOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesRefreshConfigurationIncrementalRefreshLookbackWindowOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ColumnNameInput`<sup>Optional</sup> <a name="ColumnNameInput" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesRefreshConfigurationIncrementalRefreshLookbackWindowOutputReference.property.columnNameInput"></a>

```csharp
public string ColumnNameInput { get; }
```

- *Type:* string

---

##### `SizeInput`<sup>Optional</sup> <a name="SizeInput" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesRefreshConfigurationIncrementalRefreshLookbackWindowOutputReference.property.sizeInput"></a>

```csharp
public double SizeInput { get; }
```

- *Type:* double

---

##### `SizeUnitInput`<sup>Optional</sup> <a name="SizeUnitInput" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesRefreshConfigurationIncrementalRefreshLookbackWindowOutputReference.property.sizeUnitInput"></a>

```csharp
public string SizeUnitInput { get; }
```

- *Type:* string

---

##### `ColumnName`<sup>Required</sup> <a name="ColumnName" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesRefreshConfigurationIncrementalRefreshLookbackWindowOutputReference.property.columnName"></a>

```csharp
public string ColumnName { get; }
```

- *Type:* string

---

##### `Size`<sup>Required</sup> <a name="Size" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesRefreshConfigurationIncrementalRefreshLookbackWindowOutputReference.property.size"></a>

```csharp
public double Size { get; }
```

- *Type:* double

---

##### `SizeUnit`<sup>Required</sup> <a name="SizeUnit" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesRefreshConfigurationIncrementalRefreshLookbackWindowOutputReference.property.sizeUnit"></a>

```csharp
public string SizeUnit { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesRefreshConfigurationIncrementalRefreshLookbackWindowOutputReference.property.internalValue"></a>

```csharp
public QuicksightDataSetRefreshPropertiesRefreshConfigurationIncrementalRefreshLookbackWindow InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesRefreshConfigurationIncrementalRefreshLookbackWindow">QuicksightDataSetRefreshPropertiesRefreshConfigurationIncrementalRefreshLookbackWindow</a>

---


### QuicksightDataSetRefreshPropertiesRefreshConfigurationIncrementalRefreshOutputReference <a name="QuicksightDataSetRefreshPropertiesRefreshConfigurationIncrementalRefreshOutputReference" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesRefreshConfigurationIncrementalRefreshOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesRefreshConfigurationIncrementalRefreshOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new QuicksightDataSetRefreshPropertiesRefreshConfigurationIncrementalRefreshOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesRefreshConfigurationIncrementalRefreshOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesRefreshConfigurationIncrementalRefreshOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesRefreshConfigurationIncrementalRefreshOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesRefreshConfigurationIncrementalRefreshOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesRefreshConfigurationIncrementalRefreshOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesRefreshConfigurationIncrementalRefreshOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesRefreshConfigurationIncrementalRefreshOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesRefreshConfigurationIncrementalRefreshOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesRefreshConfigurationIncrementalRefreshOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesRefreshConfigurationIncrementalRefreshOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesRefreshConfigurationIncrementalRefreshOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesRefreshConfigurationIncrementalRefreshOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesRefreshConfigurationIncrementalRefreshOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesRefreshConfigurationIncrementalRefreshOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesRefreshConfigurationIncrementalRefreshOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesRefreshConfigurationIncrementalRefreshOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesRefreshConfigurationIncrementalRefreshOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesRefreshConfigurationIncrementalRefreshOutputReference.putLookbackWindow">PutLookbackWindow</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesRefreshConfigurationIncrementalRefreshOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesRefreshConfigurationIncrementalRefreshOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesRefreshConfigurationIncrementalRefreshOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesRefreshConfigurationIncrementalRefreshOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesRefreshConfigurationIncrementalRefreshOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesRefreshConfigurationIncrementalRefreshOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesRefreshConfigurationIncrementalRefreshOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesRefreshConfigurationIncrementalRefreshOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesRefreshConfigurationIncrementalRefreshOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesRefreshConfigurationIncrementalRefreshOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesRefreshConfigurationIncrementalRefreshOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesRefreshConfigurationIncrementalRefreshOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesRefreshConfigurationIncrementalRefreshOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesRefreshConfigurationIncrementalRefreshOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesRefreshConfigurationIncrementalRefreshOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesRefreshConfigurationIncrementalRefreshOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesRefreshConfigurationIncrementalRefreshOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesRefreshConfigurationIncrementalRefreshOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesRefreshConfigurationIncrementalRefreshOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesRefreshConfigurationIncrementalRefreshOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesRefreshConfigurationIncrementalRefreshOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesRefreshConfigurationIncrementalRefreshOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesRefreshConfigurationIncrementalRefreshOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesRefreshConfigurationIncrementalRefreshOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutLookbackWindow` <a name="PutLookbackWindow" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesRefreshConfigurationIncrementalRefreshOutputReference.putLookbackWindow"></a>

```csharp
private void PutLookbackWindow(QuicksightDataSetRefreshPropertiesRefreshConfigurationIncrementalRefreshLookbackWindow Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesRefreshConfigurationIncrementalRefreshOutputReference.putLookbackWindow.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesRefreshConfigurationIncrementalRefreshLookbackWindow">QuicksightDataSetRefreshPropertiesRefreshConfigurationIncrementalRefreshLookbackWindow</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesRefreshConfigurationIncrementalRefreshOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesRefreshConfigurationIncrementalRefreshOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesRefreshConfigurationIncrementalRefreshOutputReference.property.lookbackWindow">LookbackWindow</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesRefreshConfigurationIncrementalRefreshLookbackWindowOutputReference">QuicksightDataSetRefreshPropertiesRefreshConfigurationIncrementalRefreshLookbackWindowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesRefreshConfigurationIncrementalRefreshOutputReference.property.lookbackWindowInput">LookbackWindowInput</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesRefreshConfigurationIncrementalRefreshLookbackWindow">QuicksightDataSetRefreshPropertiesRefreshConfigurationIncrementalRefreshLookbackWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesRefreshConfigurationIncrementalRefreshOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesRefreshConfigurationIncrementalRefresh">QuicksightDataSetRefreshPropertiesRefreshConfigurationIncrementalRefresh</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesRefreshConfigurationIncrementalRefreshOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesRefreshConfigurationIncrementalRefreshOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LookbackWindow`<sup>Required</sup> <a name="LookbackWindow" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesRefreshConfigurationIncrementalRefreshOutputReference.property.lookbackWindow"></a>

```csharp
public QuicksightDataSetRefreshPropertiesRefreshConfigurationIncrementalRefreshLookbackWindowOutputReference LookbackWindow { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesRefreshConfigurationIncrementalRefreshLookbackWindowOutputReference">QuicksightDataSetRefreshPropertiesRefreshConfigurationIncrementalRefreshLookbackWindowOutputReference</a>

---

##### `LookbackWindowInput`<sup>Optional</sup> <a name="LookbackWindowInput" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesRefreshConfigurationIncrementalRefreshOutputReference.property.lookbackWindowInput"></a>

```csharp
public QuicksightDataSetRefreshPropertiesRefreshConfigurationIncrementalRefreshLookbackWindow LookbackWindowInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesRefreshConfigurationIncrementalRefreshLookbackWindow">QuicksightDataSetRefreshPropertiesRefreshConfigurationIncrementalRefreshLookbackWindow</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesRefreshConfigurationIncrementalRefreshOutputReference.property.internalValue"></a>

```csharp
public QuicksightDataSetRefreshPropertiesRefreshConfigurationIncrementalRefresh InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesRefreshConfigurationIncrementalRefresh">QuicksightDataSetRefreshPropertiesRefreshConfigurationIncrementalRefresh</a>

---


### QuicksightDataSetRefreshPropertiesRefreshConfigurationOutputReference <a name="QuicksightDataSetRefreshPropertiesRefreshConfigurationOutputReference" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesRefreshConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesRefreshConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new QuicksightDataSetRefreshPropertiesRefreshConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesRefreshConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesRefreshConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesRefreshConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesRefreshConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesRefreshConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesRefreshConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesRefreshConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesRefreshConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesRefreshConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesRefreshConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesRefreshConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesRefreshConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesRefreshConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesRefreshConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesRefreshConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesRefreshConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesRefreshConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesRefreshConfigurationOutputReference.putIncrementalRefresh">PutIncrementalRefresh</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesRefreshConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesRefreshConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesRefreshConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesRefreshConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesRefreshConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesRefreshConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesRefreshConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesRefreshConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesRefreshConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesRefreshConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesRefreshConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesRefreshConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesRefreshConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesRefreshConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesRefreshConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesRefreshConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesRefreshConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesRefreshConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesRefreshConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesRefreshConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesRefreshConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesRefreshConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesRefreshConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesRefreshConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutIncrementalRefresh` <a name="PutIncrementalRefresh" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesRefreshConfigurationOutputReference.putIncrementalRefresh"></a>

```csharp
private void PutIncrementalRefresh(QuicksightDataSetRefreshPropertiesRefreshConfigurationIncrementalRefresh Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesRefreshConfigurationOutputReference.putIncrementalRefresh.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesRefreshConfigurationIncrementalRefresh">QuicksightDataSetRefreshPropertiesRefreshConfigurationIncrementalRefresh</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesRefreshConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesRefreshConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesRefreshConfigurationOutputReference.property.incrementalRefresh">IncrementalRefresh</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesRefreshConfigurationIncrementalRefreshOutputReference">QuicksightDataSetRefreshPropertiesRefreshConfigurationIncrementalRefreshOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesRefreshConfigurationOutputReference.property.incrementalRefreshInput">IncrementalRefreshInput</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesRefreshConfigurationIncrementalRefresh">QuicksightDataSetRefreshPropertiesRefreshConfigurationIncrementalRefresh</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesRefreshConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesRefreshConfiguration">QuicksightDataSetRefreshPropertiesRefreshConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesRefreshConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesRefreshConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IncrementalRefresh`<sup>Required</sup> <a name="IncrementalRefresh" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesRefreshConfigurationOutputReference.property.incrementalRefresh"></a>

```csharp
public QuicksightDataSetRefreshPropertiesRefreshConfigurationIncrementalRefreshOutputReference IncrementalRefresh { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesRefreshConfigurationIncrementalRefreshOutputReference">QuicksightDataSetRefreshPropertiesRefreshConfigurationIncrementalRefreshOutputReference</a>

---

##### `IncrementalRefreshInput`<sup>Optional</sup> <a name="IncrementalRefreshInput" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesRefreshConfigurationOutputReference.property.incrementalRefreshInput"></a>

```csharp
public QuicksightDataSetRefreshPropertiesRefreshConfigurationIncrementalRefresh IncrementalRefreshInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesRefreshConfigurationIncrementalRefresh">QuicksightDataSetRefreshPropertiesRefreshConfigurationIncrementalRefresh</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesRefreshConfigurationOutputReference.property.internalValue"></a>

```csharp
public QuicksightDataSetRefreshPropertiesRefreshConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRefreshPropertiesRefreshConfiguration">QuicksightDataSetRefreshPropertiesRefreshConfiguration</a>

---


### QuicksightDataSetRowLevelPermissionDataSetOutputReference <a name="QuicksightDataSetRowLevelPermissionDataSetOutputReference" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new QuicksightDataSetRowLevelPermissionDataSetOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.resetFormatVersion">ResetFormatVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.resetStatus">ResetStatus</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFormatVersion` <a name="ResetFormatVersion" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.resetFormatVersion"></a>

```csharp
private void ResetFormatVersion()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.resetNamespace"></a>

```csharp
private void ResetNamespace()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.resetStatus"></a>

```csharp
private void ResetStatus()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.property.arnInput">ArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.property.formatVersionInput">FormatVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.property.permissionPolicyInput">PermissionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.property.statusInput">StatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.property.formatVersion">FormatVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.property.permissionPolicy">PermissionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSet">QuicksightDataSetRowLevelPermissionDataSet</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ArnInput`<sup>Optional</sup> <a name="ArnInput" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.property.arnInput"></a>

```csharp
public string ArnInput { get; }
```

- *Type:* string

---

##### `FormatVersionInput`<sup>Optional</sup> <a name="FormatVersionInput" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.property.formatVersionInput"></a>

```csharp
public string FormatVersionInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `PermissionPolicyInput`<sup>Optional</sup> <a name="PermissionPolicyInput" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.property.permissionPolicyInput"></a>

```csharp
public string PermissionPolicyInput { get; }
```

- *Type:* string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.property.statusInput"></a>

```csharp
public string StatusInput { get; }
```

- *Type:* string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `FormatVersion`<sup>Required</sup> <a name="FormatVersion" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.property.formatVersion"></a>

```csharp
public string FormatVersion { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `PermissionPolicy`<sup>Required</sup> <a name="PermissionPolicy" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.property.permissionPolicy"></a>

```csharp
public string PermissionPolicy { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSetOutputReference.property.internalValue"></a>

```csharp
public QuicksightDataSetRowLevelPermissionDataSet InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionDataSet">QuicksightDataSetRowLevelPermissionDataSet</a>

---


### QuicksightDataSetRowLevelPermissionTagConfigurationOutputReference <a name="QuicksightDataSetRowLevelPermissionTagConfigurationOutputReference" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new QuicksightDataSetRowLevelPermissionTagConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.putTagRules">PutTagRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.resetStatus">ResetStatus</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTagRules` <a name="PutTagRules" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.putTagRules"></a>

```csharp
private void PutTagRules(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.putTagRules.parameter.value"></a>

- *Type:* object

---

##### `ResetStatus` <a name="ResetStatus" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.resetStatus"></a>

```csharp
private void ResetStatus()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.property.tagRules">TagRules</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationTagRulesList">QuicksightDataSetRowLevelPermissionTagConfigurationTagRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.property.statusInput">StatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.property.tagRulesInput">TagRulesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfiguration">QuicksightDataSetRowLevelPermissionTagConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TagRules`<sup>Required</sup> <a name="TagRules" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.property.tagRules"></a>

```csharp
public QuicksightDataSetRowLevelPermissionTagConfigurationTagRulesList TagRules { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationTagRulesList">QuicksightDataSetRowLevelPermissionTagConfigurationTagRulesList</a>

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.property.statusInput"></a>

```csharp
public string StatusInput { get; }
```

- *Type:* string

---

##### `TagRulesInput`<sup>Optional</sup> <a name="TagRulesInput" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.property.tagRulesInput"></a>

```csharp
public object TagRulesInput { get; }
```

- *Type:* object

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationOutputReference.property.internalValue"></a>

```csharp
public QuicksightDataSetRowLevelPermissionTagConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfiguration">QuicksightDataSetRowLevelPermissionTagConfiguration</a>

---


### QuicksightDataSetRowLevelPermissionTagConfigurationTagRulesList <a name="QuicksightDataSetRowLevelPermissionTagConfigurationTagRulesList" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationTagRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationTagRulesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new QuicksightDataSetRowLevelPermissionTagConfigurationTagRulesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationTagRulesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationTagRulesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationTagRulesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationTagRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationTagRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationTagRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationTagRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationTagRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationTagRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationTagRulesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationTagRulesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationTagRulesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationTagRulesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationTagRulesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationTagRulesList.get"></a>

```csharp
private QuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationTagRulesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationTagRulesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationTagRulesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationTagRulesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationTagRulesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationTagRulesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationTagRulesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### QuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference <a name="QuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new QuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.resetMatchAllValue">ResetMatchAllValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.resetTagMultiValueDelimiter">ResetTagMultiValueDelimiter</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMatchAllValue` <a name="ResetMatchAllValue" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.resetMatchAllValue"></a>

```csharp
private void ResetMatchAllValue()
```

##### `ResetTagMultiValueDelimiter` <a name="ResetTagMultiValueDelimiter" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.resetTagMultiValueDelimiter"></a>

```csharp
private void ResetTagMultiValueDelimiter()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.property.columnNameInput">ColumnNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.property.matchAllValueInput">MatchAllValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.property.tagKeyInput">TagKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.property.tagMultiValueDelimiterInput">TagMultiValueDelimiterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.property.columnName">ColumnName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.property.matchAllValue">MatchAllValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.property.tagKey">TagKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.property.tagMultiValueDelimiter">TagMultiValueDelimiter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ColumnNameInput`<sup>Optional</sup> <a name="ColumnNameInput" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.property.columnNameInput"></a>

```csharp
public string ColumnNameInput { get; }
```

- *Type:* string

---

##### `MatchAllValueInput`<sup>Optional</sup> <a name="MatchAllValueInput" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.property.matchAllValueInput"></a>

```csharp
public string MatchAllValueInput { get; }
```

- *Type:* string

---

##### `TagKeyInput`<sup>Optional</sup> <a name="TagKeyInput" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.property.tagKeyInput"></a>

```csharp
public string TagKeyInput { get; }
```

- *Type:* string

---

##### `TagMultiValueDelimiterInput`<sup>Optional</sup> <a name="TagMultiValueDelimiterInput" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.property.tagMultiValueDelimiterInput"></a>

```csharp
public string TagMultiValueDelimiterInput { get; }
```

- *Type:* string

---

##### `ColumnName`<sup>Required</sup> <a name="ColumnName" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.property.columnName"></a>

```csharp
public string ColumnName { get; }
```

- *Type:* string

---

##### `MatchAllValue`<sup>Required</sup> <a name="MatchAllValue" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.property.matchAllValue"></a>

```csharp
public string MatchAllValue { get; }
```

- *Type:* string

---

##### `TagKey`<sup>Required</sup> <a name="TagKey" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.property.tagKey"></a>

```csharp
public string TagKey { get; }
```

- *Type:* string

---

##### `TagMultiValueDelimiter`<sup>Required</sup> <a name="TagMultiValueDelimiter" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.property.tagMultiValueDelimiter"></a>

```csharp
public string TagMultiValueDelimiter { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.quicksightDataSet.QuicksightDataSetRowLevelPermissionTagConfigurationTagRulesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



