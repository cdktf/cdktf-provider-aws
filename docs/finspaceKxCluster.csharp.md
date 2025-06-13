# `finspaceKxCluster` Submodule <a name="`finspaceKxCluster` Submodule" id="@cdktf/provider-aws.finspaceKxCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FinspaceKxCluster <a name="FinspaceKxCluster" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/finspace_kx_cluster aws_finspace_kx_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new FinspaceKxCluster(Construct Scope, string Id, FinspaceKxClusterConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterConfig">FinspaceKxClusterConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterConfig">FinspaceKxClusterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.putAutoScalingConfiguration">PutAutoScalingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.putCacheStorageConfigurations">PutCacheStorageConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.putCapacityConfiguration">PutCapacityConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.putCode">PutCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.putDatabase">PutDatabase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.putSavedownStorageConfiguration">PutSavedownStorageConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.putScalingGroupConfiguration">PutScalingGroupConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.putTickerplantLogConfiguration">PutTickerplantLogConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.putVpcConfiguration">PutVpcConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.resetAutoScalingConfiguration">ResetAutoScalingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.resetAvailabilityZoneId">ResetAvailabilityZoneId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.resetCacheStorageConfigurations">ResetCacheStorageConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.resetCapacityConfiguration">ResetCapacityConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.resetCode">ResetCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.resetCommandLineArguments">ResetCommandLineArguments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.resetDatabase">ResetDatabase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.resetExecutionRole">ResetExecutionRole</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.resetInitializationScript">ResetInitializationScript</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.resetSavedownStorageConfiguration">ResetSavedownStorageConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.resetScalingGroupConfiguration">ResetScalingGroupConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.resetTickerplantLogConfiguration">ResetTickerplantLogConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAutoScalingConfiguration` <a name="PutAutoScalingConfiguration" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.putAutoScalingConfiguration"></a>

```csharp
private void PutAutoScalingConfiguration(FinspaceKxClusterAutoScalingConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.putAutoScalingConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfiguration">FinspaceKxClusterAutoScalingConfiguration</a>

---

##### `PutCacheStorageConfigurations` <a name="PutCacheStorageConfigurations" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.putCacheStorageConfigurations"></a>

```csharp
private void PutCacheStorageConfigurations(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.putCacheStorageConfigurations.parameter.value"></a>

- *Type:* object

---

##### `PutCapacityConfiguration` <a name="PutCapacityConfiguration" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.putCapacityConfiguration"></a>

```csharp
private void PutCapacityConfiguration(FinspaceKxClusterCapacityConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.putCapacityConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfiguration">FinspaceKxClusterCapacityConfiguration</a>

---

##### `PutCode` <a name="PutCode" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.putCode"></a>

```csharp
private void PutCode(FinspaceKxClusterCode Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.putCode.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCode">FinspaceKxClusterCode</a>

---

##### `PutDatabase` <a name="PutDatabase" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.putDatabase"></a>

```csharp
private void PutDatabase(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.putDatabase.parameter.value"></a>

- *Type:* object

---

##### `PutSavedownStorageConfiguration` <a name="PutSavedownStorageConfiguration" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.putSavedownStorageConfiguration"></a>

```csharp
private void PutSavedownStorageConfiguration(FinspaceKxClusterSavedownStorageConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.putSavedownStorageConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfiguration">FinspaceKxClusterSavedownStorageConfiguration</a>

---

##### `PutScalingGroupConfiguration` <a name="PutScalingGroupConfiguration" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.putScalingGroupConfiguration"></a>

```csharp
private void PutScalingGroupConfiguration(FinspaceKxClusterScalingGroupConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.putScalingGroupConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfiguration">FinspaceKxClusterScalingGroupConfiguration</a>

---

##### `PutTickerplantLogConfiguration` <a name="PutTickerplantLogConfiguration" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.putTickerplantLogConfiguration"></a>

```csharp
private void PutTickerplantLogConfiguration(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.putTickerplantLogConfiguration.parameter.value"></a>

- *Type:* object

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.putTimeouts"></a>

```csharp
private void PutTimeouts(FinspaceKxClusterTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeouts">FinspaceKxClusterTimeouts</a>

---

##### `PutVpcConfiguration` <a name="PutVpcConfiguration" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.putVpcConfiguration"></a>

```csharp
private void PutVpcConfiguration(FinspaceKxClusterVpcConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.putVpcConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfiguration">FinspaceKxClusterVpcConfiguration</a>

---

##### `ResetAutoScalingConfiguration` <a name="ResetAutoScalingConfiguration" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.resetAutoScalingConfiguration"></a>

```csharp
private void ResetAutoScalingConfiguration()
```

##### `ResetAvailabilityZoneId` <a name="ResetAvailabilityZoneId" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.resetAvailabilityZoneId"></a>

```csharp
private void ResetAvailabilityZoneId()
```

##### `ResetCacheStorageConfigurations` <a name="ResetCacheStorageConfigurations" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.resetCacheStorageConfigurations"></a>

```csharp
private void ResetCacheStorageConfigurations()
```

##### `ResetCapacityConfiguration` <a name="ResetCapacityConfiguration" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.resetCapacityConfiguration"></a>

```csharp
private void ResetCapacityConfiguration()
```

##### `ResetCode` <a name="ResetCode" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.resetCode"></a>

```csharp
private void ResetCode()
```

##### `ResetCommandLineArguments` <a name="ResetCommandLineArguments" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.resetCommandLineArguments"></a>

```csharp
private void ResetCommandLineArguments()
```

##### `ResetDatabase` <a name="ResetDatabase" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.resetDatabase"></a>

```csharp
private void ResetDatabase()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetExecutionRole` <a name="ResetExecutionRole" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.resetExecutionRole"></a>

```csharp
private void ResetExecutionRole()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetInitializationScript` <a name="ResetInitializationScript" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.resetInitializationScript"></a>

```csharp
private void ResetInitializationScript()
```

##### `ResetSavedownStorageConfiguration` <a name="ResetSavedownStorageConfiguration" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.resetSavedownStorageConfiguration"></a>

```csharp
private void ResetSavedownStorageConfiguration()
```

##### `ResetScalingGroupConfiguration` <a name="ResetScalingGroupConfiguration" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.resetScalingGroupConfiguration"></a>

```csharp
private void ResetScalingGroupConfiguration()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

##### `ResetTickerplantLogConfiguration` <a name="ResetTickerplantLogConfiguration" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.resetTickerplantLogConfiguration"></a>

```csharp
private void ResetTickerplantLogConfiguration()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a FinspaceKxCluster resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

FinspaceKxCluster.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

FinspaceKxCluster.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

FinspaceKxCluster.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

FinspaceKxCluster.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a FinspaceKxCluster resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the FinspaceKxCluster to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing FinspaceKxCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/finspace_kx_cluster#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the FinspaceKxCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.autoScalingConfiguration">AutoScalingConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference">FinspaceKxClusterAutoScalingConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.cacheStorageConfigurations">CacheStorageConfigurations</a></code> | <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsList">FinspaceKxClusterCacheStorageConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.capacityConfiguration">CapacityConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfigurationOutputReference">FinspaceKxClusterCapacityConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.code">Code</a></code> | <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference">FinspaceKxClusterCodeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.createdTimestamp">CreatedTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.database">Database</a></code> | <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseList">FinspaceKxClusterDatabaseList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.lastModifiedTimestamp">LastModifiedTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.savedownStorageConfiguration">SavedownStorageConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference">FinspaceKxClusterSavedownStorageConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.scalingGroupConfiguration">ScalingGroupConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfigurationOutputReference">FinspaceKxClusterScalingGroupConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.statusReason">StatusReason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.tickerplantLogConfiguration">TickerplantLogConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationList">FinspaceKxClusterTickerplantLogConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference">FinspaceKxClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.vpcConfiguration">VpcConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference">FinspaceKxClusterVpcConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.autoScalingConfigurationInput">AutoScalingConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfiguration">FinspaceKxClusterAutoScalingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.availabilityZoneIdInput">AvailabilityZoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.azModeInput">AzModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.cacheStorageConfigurationsInput">CacheStorageConfigurationsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.capacityConfigurationInput">CapacityConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfiguration">FinspaceKxClusterCapacityConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.codeInput">CodeInput</a></code> | <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCode">FinspaceKxClusterCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.commandLineArgumentsInput">CommandLineArgumentsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.databaseInput">DatabaseInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.environmentIdInput">EnvironmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.executionRoleInput">ExecutionRoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.initializationScriptInput">InitializationScriptInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.releaseLabelInput">ReleaseLabelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.savedownStorageConfigurationInput">SavedownStorageConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfiguration">FinspaceKxClusterSavedownStorageConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.scalingGroupConfigurationInput">ScalingGroupConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfiguration">FinspaceKxClusterScalingGroupConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.tickerplantLogConfigurationInput">TickerplantLogConfigurationInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.vpcConfigurationInput">VpcConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfiguration">FinspaceKxClusterVpcConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.availabilityZoneId">AvailabilityZoneId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.azMode">AzMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.commandLineArguments">CommandLineArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.environmentId">EnvironmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.executionRole">ExecutionRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.initializationScript">InitializationScript</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.releaseLabel">ReleaseLabel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.type">Type</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `AutoScalingConfiguration`<sup>Required</sup> <a name="AutoScalingConfiguration" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.autoScalingConfiguration"></a>

```csharp
public FinspaceKxClusterAutoScalingConfigurationOutputReference AutoScalingConfiguration { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference">FinspaceKxClusterAutoScalingConfigurationOutputReference</a>

---

##### `CacheStorageConfigurations`<sup>Required</sup> <a name="CacheStorageConfigurations" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.cacheStorageConfigurations"></a>

```csharp
public FinspaceKxClusterCacheStorageConfigurationsList CacheStorageConfigurations { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsList">FinspaceKxClusterCacheStorageConfigurationsList</a>

---

##### `CapacityConfiguration`<sup>Required</sup> <a name="CapacityConfiguration" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.capacityConfiguration"></a>

```csharp
public FinspaceKxClusterCapacityConfigurationOutputReference CapacityConfiguration { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfigurationOutputReference">FinspaceKxClusterCapacityConfigurationOutputReference</a>

---

##### `Code`<sup>Required</sup> <a name="Code" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.code"></a>

```csharp
public FinspaceKxClusterCodeOutputReference Code { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference">FinspaceKxClusterCodeOutputReference</a>

---

##### `CreatedTimestamp`<sup>Required</sup> <a name="CreatedTimestamp" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.createdTimestamp"></a>

```csharp
public string CreatedTimestamp { get; }
```

- *Type:* string

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.database"></a>

```csharp
public FinspaceKxClusterDatabaseList Database { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseList">FinspaceKxClusterDatabaseList</a>

---

##### `LastModifiedTimestamp`<sup>Required</sup> <a name="LastModifiedTimestamp" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.lastModifiedTimestamp"></a>

```csharp
public string LastModifiedTimestamp { get; }
```

- *Type:* string

---

##### `SavedownStorageConfiguration`<sup>Required</sup> <a name="SavedownStorageConfiguration" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.savedownStorageConfiguration"></a>

```csharp
public FinspaceKxClusterSavedownStorageConfigurationOutputReference SavedownStorageConfiguration { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference">FinspaceKxClusterSavedownStorageConfigurationOutputReference</a>

---

##### `ScalingGroupConfiguration`<sup>Required</sup> <a name="ScalingGroupConfiguration" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.scalingGroupConfiguration"></a>

```csharp
public FinspaceKxClusterScalingGroupConfigurationOutputReference ScalingGroupConfiguration { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfigurationOutputReference">FinspaceKxClusterScalingGroupConfigurationOutputReference</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `StatusReason`<sup>Required</sup> <a name="StatusReason" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.statusReason"></a>

```csharp
public string StatusReason { get; }
```

- *Type:* string

---

##### `TickerplantLogConfiguration`<sup>Required</sup> <a name="TickerplantLogConfiguration" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.tickerplantLogConfiguration"></a>

```csharp
public FinspaceKxClusterTickerplantLogConfigurationList TickerplantLogConfiguration { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationList">FinspaceKxClusterTickerplantLogConfigurationList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.timeouts"></a>

```csharp
public FinspaceKxClusterTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference">FinspaceKxClusterTimeoutsOutputReference</a>

---

##### `VpcConfiguration`<sup>Required</sup> <a name="VpcConfiguration" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.vpcConfiguration"></a>

```csharp
public FinspaceKxClusterVpcConfigurationOutputReference VpcConfiguration { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference">FinspaceKxClusterVpcConfigurationOutputReference</a>

---

##### `AutoScalingConfigurationInput`<sup>Optional</sup> <a name="AutoScalingConfigurationInput" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.autoScalingConfigurationInput"></a>

```csharp
public FinspaceKxClusterAutoScalingConfiguration AutoScalingConfigurationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfiguration">FinspaceKxClusterAutoScalingConfiguration</a>

---

##### `AvailabilityZoneIdInput`<sup>Optional</sup> <a name="AvailabilityZoneIdInput" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.availabilityZoneIdInput"></a>

```csharp
public string AvailabilityZoneIdInput { get; }
```

- *Type:* string

---

##### `AzModeInput`<sup>Optional</sup> <a name="AzModeInput" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.azModeInput"></a>

```csharp
public string AzModeInput { get; }
```

- *Type:* string

---

##### `CacheStorageConfigurationsInput`<sup>Optional</sup> <a name="CacheStorageConfigurationsInput" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.cacheStorageConfigurationsInput"></a>

```csharp
public object CacheStorageConfigurationsInput { get; }
```

- *Type:* object

---

##### `CapacityConfigurationInput`<sup>Optional</sup> <a name="CapacityConfigurationInput" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.capacityConfigurationInput"></a>

```csharp
public FinspaceKxClusterCapacityConfiguration CapacityConfigurationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfiguration">FinspaceKxClusterCapacityConfiguration</a>

---

##### `CodeInput`<sup>Optional</sup> <a name="CodeInput" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.codeInput"></a>

```csharp
public FinspaceKxClusterCode CodeInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCode">FinspaceKxClusterCode</a>

---

##### `CommandLineArgumentsInput`<sup>Optional</sup> <a name="CommandLineArgumentsInput" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.commandLineArgumentsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> CommandLineArgumentsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DatabaseInput`<sup>Optional</sup> <a name="DatabaseInput" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.databaseInput"></a>

```csharp
public object DatabaseInput { get; }
```

- *Type:* object

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `EnvironmentIdInput`<sup>Optional</sup> <a name="EnvironmentIdInput" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.environmentIdInput"></a>

```csharp
public string EnvironmentIdInput { get; }
```

- *Type:* string

---

##### `ExecutionRoleInput`<sup>Optional</sup> <a name="ExecutionRoleInput" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.executionRoleInput"></a>

```csharp
public string ExecutionRoleInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InitializationScriptInput`<sup>Optional</sup> <a name="InitializationScriptInput" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.initializationScriptInput"></a>

```csharp
public string InitializationScriptInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ReleaseLabelInput`<sup>Optional</sup> <a name="ReleaseLabelInput" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.releaseLabelInput"></a>

```csharp
public string ReleaseLabelInput { get; }
```

- *Type:* string

---

##### `SavedownStorageConfigurationInput`<sup>Optional</sup> <a name="SavedownStorageConfigurationInput" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.savedownStorageConfigurationInput"></a>

```csharp
public FinspaceKxClusterSavedownStorageConfiguration SavedownStorageConfigurationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfiguration">FinspaceKxClusterSavedownStorageConfiguration</a>

---

##### `ScalingGroupConfigurationInput`<sup>Optional</sup> <a name="ScalingGroupConfigurationInput" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.scalingGroupConfigurationInput"></a>

```csharp
public FinspaceKxClusterScalingGroupConfiguration ScalingGroupConfigurationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfiguration">FinspaceKxClusterScalingGroupConfiguration</a>

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TickerplantLogConfigurationInput`<sup>Optional</sup> <a name="TickerplantLogConfigurationInput" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.tickerplantLogConfigurationInput"></a>

```csharp
public object TickerplantLogConfigurationInput { get; }
```

- *Type:* object

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `VpcConfigurationInput`<sup>Optional</sup> <a name="VpcConfigurationInput" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.vpcConfigurationInput"></a>

```csharp
public FinspaceKxClusterVpcConfiguration VpcConfigurationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfiguration">FinspaceKxClusterVpcConfiguration</a>

---

##### `AvailabilityZoneId`<sup>Required</sup> <a name="AvailabilityZoneId" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.availabilityZoneId"></a>

```csharp
public string AvailabilityZoneId { get; }
```

- *Type:* string

---

##### `AzMode`<sup>Required</sup> <a name="AzMode" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.azMode"></a>

```csharp
public string AzMode { get; }
```

- *Type:* string

---

##### `CommandLineArguments`<sup>Required</sup> <a name="CommandLineArguments" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.commandLineArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> CommandLineArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `EnvironmentId`<sup>Required</sup> <a name="EnvironmentId" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.environmentId"></a>

```csharp
public string EnvironmentId { get; }
```

- *Type:* string

---

##### `ExecutionRole`<sup>Required</sup> <a name="ExecutionRole" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.executionRole"></a>

```csharp
public string ExecutionRole { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InitializationScript`<sup>Required</sup> <a name="InitializationScript" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.initializationScript"></a>

```csharp
public string InitializationScript { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ReleaseLabel`<sup>Required</sup> <a name="ReleaseLabel" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.releaseLabel"></a>

```csharp
public string ReleaseLabel { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxCluster.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### FinspaceKxClusterAutoScalingConfiguration <a name="FinspaceKxClusterAutoScalingConfiguration" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new FinspaceKxClusterAutoScalingConfiguration {
    string AutoScalingMetric,
    double MaxNodeCount,
    double MetricTarget,
    double MinNodeCount,
    double ScaleInCooldownSeconds,
    double ScaleOutCooldownSeconds
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfiguration.property.autoScalingMetric">AutoScalingMetric</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/finspace_kx_cluster#auto_scaling_metric FinspaceKxCluster#auto_scaling_metric}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfiguration.property.maxNodeCount">MaxNodeCount</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/finspace_kx_cluster#max_node_count FinspaceKxCluster#max_node_count}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfiguration.property.metricTarget">MetricTarget</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/finspace_kx_cluster#metric_target FinspaceKxCluster#metric_target}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfiguration.property.minNodeCount">MinNodeCount</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/finspace_kx_cluster#min_node_count FinspaceKxCluster#min_node_count}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfiguration.property.scaleInCooldownSeconds">ScaleInCooldownSeconds</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/finspace_kx_cluster#scale_in_cooldown_seconds FinspaceKxCluster#scale_in_cooldown_seconds}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfiguration.property.scaleOutCooldownSeconds">ScaleOutCooldownSeconds</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/finspace_kx_cluster#scale_out_cooldown_seconds FinspaceKxCluster#scale_out_cooldown_seconds}. |

---

##### `AutoScalingMetric`<sup>Required</sup> <a name="AutoScalingMetric" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfiguration.property.autoScalingMetric"></a>

```csharp
public string AutoScalingMetric { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/finspace_kx_cluster#auto_scaling_metric FinspaceKxCluster#auto_scaling_metric}.

---

##### `MaxNodeCount`<sup>Required</sup> <a name="MaxNodeCount" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfiguration.property.maxNodeCount"></a>

```csharp
public double MaxNodeCount { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/finspace_kx_cluster#max_node_count FinspaceKxCluster#max_node_count}.

---

##### `MetricTarget`<sup>Required</sup> <a name="MetricTarget" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfiguration.property.metricTarget"></a>

```csharp
public double MetricTarget { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/finspace_kx_cluster#metric_target FinspaceKxCluster#metric_target}.

---

##### `MinNodeCount`<sup>Required</sup> <a name="MinNodeCount" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfiguration.property.minNodeCount"></a>

```csharp
public double MinNodeCount { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/finspace_kx_cluster#min_node_count FinspaceKxCluster#min_node_count}.

---

##### `ScaleInCooldownSeconds`<sup>Required</sup> <a name="ScaleInCooldownSeconds" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfiguration.property.scaleInCooldownSeconds"></a>

```csharp
public double ScaleInCooldownSeconds { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/finspace_kx_cluster#scale_in_cooldown_seconds FinspaceKxCluster#scale_in_cooldown_seconds}.

---

##### `ScaleOutCooldownSeconds`<sup>Required</sup> <a name="ScaleOutCooldownSeconds" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfiguration.property.scaleOutCooldownSeconds"></a>

```csharp
public double ScaleOutCooldownSeconds { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/finspace_kx_cluster#scale_out_cooldown_seconds FinspaceKxCluster#scale_out_cooldown_seconds}.

---

### FinspaceKxClusterCacheStorageConfigurations <a name="FinspaceKxClusterCacheStorageConfigurations" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurations.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new FinspaceKxClusterCacheStorageConfigurations {
    double Size,
    string Type
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurations.property.size">Size</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/finspace_kx_cluster#size FinspaceKxCluster#size}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurations.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/finspace_kx_cluster#type FinspaceKxCluster#type}. |

---

##### `Size`<sup>Required</sup> <a name="Size" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurations.property.size"></a>

```csharp
public double Size { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/finspace_kx_cluster#size FinspaceKxCluster#size}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurations.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/finspace_kx_cluster#type FinspaceKxCluster#type}.

---

### FinspaceKxClusterCapacityConfiguration <a name="FinspaceKxClusterCapacityConfiguration" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new FinspaceKxClusterCapacityConfiguration {
    double NodeCount,
    string NodeType
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfiguration.property.nodeCount">NodeCount</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/finspace_kx_cluster#node_count FinspaceKxCluster#node_count}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfiguration.property.nodeType">NodeType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/finspace_kx_cluster#node_type FinspaceKxCluster#node_type}. |

---

##### `NodeCount`<sup>Required</sup> <a name="NodeCount" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfiguration.property.nodeCount"></a>

```csharp
public double NodeCount { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/finspace_kx_cluster#node_count FinspaceKxCluster#node_count}.

---

##### `NodeType`<sup>Required</sup> <a name="NodeType" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfiguration.property.nodeType"></a>

```csharp
public string NodeType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/finspace_kx_cluster#node_type FinspaceKxCluster#node_type}.

---

### FinspaceKxClusterCode <a name="FinspaceKxClusterCode" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCode"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCode.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new FinspaceKxClusterCode {
    string S3Bucket,
    string S3Key,
    string S3ObjectVersion = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCode.property.s3Bucket">S3Bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/finspace_kx_cluster#s3_bucket FinspaceKxCluster#s3_bucket}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCode.property.s3Key">S3Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/finspace_kx_cluster#s3_key FinspaceKxCluster#s3_key}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCode.property.s3ObjectVersion">S3ObjectVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/finspace_kx_cluster#s3_object_version FinspaceKxCluster#s3_object_version}. |

---

##### `S3Bucket`<sup>Required</sup> <a name="S3Bucket" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCode.property.s3Bucket"></a>

```csharp
public string S3Bucket { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/finspace_kx_cluster#s3_bucket FinspaceKxCluster#s3_bucket}.

---

##### `S3Key`<sup>Required</sup> <a name="S3Key" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCode.property.s3Key"></a>

```csharp
public string S3Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/finspace_kx_cluster#s3_key FinspaceKxCluster#s3_key}.

---

##### `S3ObjectVersion`<sup>Optional</sup> <a name="S3ObjectVersion" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCode.property.s3ObjectVersion"></a>

```csharp
public string S3ObjectVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/finspace_kx_cluster#s3_object_version FinspaceKxCluster#s3_object_version}.

---

### FinspaceKxClusterConfig <a name="FinspaceKxClusterConfig" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new FinspaceKxClusterConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AzMode,
    string EnvironmentId,
    string Name,
    string ReleaseLabel,
    string Type,
    FinspaceKxClusterVpcConfiguration VpcConfiguration,
    FinspaceKxClusterAutoScalingConfiguration AutoScalingConfiguration = null,
    string AvailabilityZoneId = null,
    object CacheStorageConfigurations = null,
    FinspaceKxClusterCapacityConfiguration CapacityConfiguration = null,
    FinspaceKxClusterCode Code = null,
    System.Collections.Generic.IDictionary<string, string> CommandLineArguments = null,
    object Database = null,
    string Description = null,
    string ExecutionRole = null,
    string Id = null,
    string InitializationScript = null,
    FinspaceKxClusterSavedownStorageConfiguration SavedownStorageConfiguration = null,
    FinspaceKxClusterScalingGroupConfiguration ScalingGroupConfiguration = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null,
    object TickerplantLogConfiguration = null,
    FinspaceKxClusterTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterConfig.property.azMode">AzMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/finspace_kx_cluster#az_mode FinspaceKxCluster#az_mode}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterConfig.property.environmentId">EnvironmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/finspace_kx_cluster#environment_id FinspaceKxCluster#environment_id}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/finspace_kx_cluster#name FinspaceKxCluster#name}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterConfig.property.releaseLabel">ReleaseLabel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/finspace_kx_cluster#release_label FinspaceKxCluster#release_label}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterConfig.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/finspace_kx_cluster#type FinspaceKxCluster#type}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterConfig.property.vpcConfiguration">VpcConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfiguration">FinspaceKxClusterVpcConfiguration</a></code> | vpc_configuration block. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterConfig.property.autoScalingConfiguration">AutoScalingConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfiguration">FinspaceKxClusterAutoScalingConfiguration</a></code> | auto_scaling_configuration block. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterConfig.property.availabilityZoneId">AvailabilityZoneId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/finspace_kx_cluster#availability_zone_id FinspaceKxCluster#availability_zone_id}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterConfig.property.cacheStorageConfigurations">CacheStorageConfigurations</a></code> | <code>object</code> | cache_storage_configurations block. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterConfig.property.capacityConfiguration">CapacityConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfiguration">FinspaceKxClusterCapacityConfiguration</a></code> | capacity_configuration block. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterConfig.property.code">Code</a></code> | <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCode">FinspaceKxClusterCode</a></code> | code block. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterConfig.property.commandLineArguments">CommandLineArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/finspace_kx_cluster#command_line_arguments FinspaceKxCluster#command_line_arguments}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterConfig.property.database">Database</a></code> | <code>object</code> | database block. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/finspace_kx_cluster#description FinspaceKxCluster#description}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterConfig.property.executionRole">ExecutionRole</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/finspace_kx_cluster#execution_role FinspaceKxCluster#execution_role}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/finspace_kx_cluster#id FinspaceKxCluster#id}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterConfig.property.initializationScript">InitializationScript</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/finspace_kx_cluster#initialization_script FinspaceKxCluster#initialization_script}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterConfig.property.savedownStorageConfiguration">SavedownStorageConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfiguration">FinspaceKxClusterSavedownStorageConfiguration</a></code> | savedown_storage_configuration block. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterConfig.property.scalingGroupConfiguration">ScalingGroupConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfiguration">FinspaceKxClusterScalingGroupConfiguration</a></code> | scaling_group_configuration block. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/finspace_kx_cluster#tags FinspaceKxCluster#tags}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/finspace_kx_cluster#tags_all FinspaceKxCluster#tags_all}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterConfig.property.tickerplantLogConfiguration">TickerplantLogConfiguration</a></code> | <code>object</code> | tickerplant_log_configuration block. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeouts">FinspaceKxClusterTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AzMode`<sup>Required</sup> <a name="AzMode" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterConfig.property.azMode"></a>

```csharp
public string AzMode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/finspace_kx_cluster#az_mode FinspaceKxCluster#az_mode}.

---

##### `EnvironmentId`<sup>Required</sup> <a name="EnvironmentId" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterConfig.property.environmentId"></a>

```csharp
public string EnvironmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/finspace_kx_cluster#environment_id FinspaceKxCluster#environment_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/finspace_kx_cluster#name FinspaceKxCluster#name}.

---

##### `ReleaseLabel`<sup>Required</sup> <a name="ReleaseLabel" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterConfig.property.releaseLabel"></a>

```csharp
public string ReleaseLabel { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/finspace_kx_cluster#release_label FinspaceKxCluster#release_label}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterConfig.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/finspace_kx_cluster#type FinspaceKxCluster#type}.

---

##### `VpcConfiguration`<sup>Required</sup> <a name="VpcConfiguration" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterConfig.property.vpcConfiguration"></a>

```csharp
public FinspaceKxClusterVpcConfiguration VpcConfiguration { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfiguration">FinspaceKxClusterVpcConfiguration</a>

vpc_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/finspace_kx_cluster#vpc_configuration FinspaceKxCluster#vpc_configuration}

---

##### `AutoScalingConfiguration`<sup>Optional</sup> <a name="AutoScalingConfiguration" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterConfig.property.autoScalingConfiguration"></a>

```csharp
public FinspaceKxClusterAutoScalingConfiguration AutoScalingConfiguration { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfiguration">FinspaceKxClusterAutoScalingConfiguration</a>

auto_scaling_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/finspace_kx_cluster#auto_scaling_configuration FinspaceKxCluster#auto_scaling_configuration}

---

##### `AvailabilityZoneId`<sup>Optional</sup> <a name="AvailabilityZoneId" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterConfig.property.availabilityZoneId"></a>

```csharp
public string AvailabilityZoneId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/finspace_kx_cluster#availability_zone_id FinspaceKxCluster#availability_zone_id}.

---

##### `CacheStorageConfigurations`<sup>Optional</sup> <a name="CacheStorageConfigurations" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterConfig.property.cacheStorageConfigurations"></a>

```csharp
public object CacheStorageConfigurations { get; set; }
```

- *Type:* object

cache_storage_configurations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/finspace_kx_cluster#cache_storage_configurations FinspaceKxCluster#cache_storage_configurations}

---

##### `CapacityConfiguration`<sup>Optional</sup> <a name="CapacityConfiguration" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterConfig.property.capacityConfiguration"></a>

```csharp
public FinspaceKxClusterCapacityConfiguration CapacityConfiguration { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfiguration">FinspaceKxClusterCapacityConfiguration</a>

capacity_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/finspace_kx_cluster#capacity_configuration FinspaceKxCluster#capacity_configuration}

---

##### `Code`<sup>Optional</sup> <a name="Code" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterConfig.property.code"></a>

```csharp
public FinspaceKxClusterCode Code { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCode">FinspaceKxClusterCode</a>

code block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/finspace_kx_cluster#code FinspaceKxCluster#code}

---

##### `CommandLineArguments`<sup>Optional</sup> <a name="CommandLineArguments" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterConfig.property.commandLineArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> CommandLineArguments { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/finspace_kx_cluster#command_line_arguments FinspaceKxCluster#command_line_arguments}.

---

##### `Database`<sup>Optional</sup> <a name="Database" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterConfig.property.database"></a>

```csharp
public object Database { get; set; }
```

- *Type:* object

database block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/finspace_kx_cluster#database FinspaceKxCluster#database}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/finspace_kx_cluster#description FinspaceKxCluster#description}.

---

##### `ExecutionRole`<sup>Optional</sup> <a name="ExecutionRole" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterConfig.property.executionRole"></a>

```csharp
public string ExecutionRole { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/finspace_kx_cluster#execution_role FinspaceKxCluster#execution_role}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/finspace_kx_cluster#id FinspaceKxCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InitializationScript`<sup>Optional</sup> <a name="InitializationScript" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterConfig.property.initializationScript"></a>

```csharp
public string InitializationScript { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/finspace_kx_cluster#initialization_script FinspaceKxCluster#initialization_script}.

---

##### `SavedownStorageConfiguration`<sup>Optional</sup> <a name="SavedownStorageConfiguration" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterConfig.property.savedownStorageConfiguration"></a>

```csharp
public FinspaceKxClusterSavedownStorageConfiguration SavedownStorageConfiguration { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfiguration">FinspaceKxClusterSavedownStorageConfiguration</a>

savedown_storage_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/finspace_kx_cluster#savedown_storage_configuration FinspaceKxCluster#savedown_storage_configuration}

---

##### `ScalingGroupConfiguration`<sup>Optional</sup> <a name="ScalingGroupConfiguration" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterConfig.property.scalingGroupConfiguration"></a>

```csharp
public FinspaceKxClusterScalingGroupConfiguration ScalingGroupConfiguration { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfiguration">FinspaceKxClusterScalingGroupConfiguration</a>

scaling_group_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/finspace_kx_cluster#scaling_group_configuration FinspaceKxCluster#scaling_group_configuration}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/finspace_kx_cluster#tags FinspaceKxCluster#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/finspace_kx_cluster#tags_all FinspaceKxCluster#tags_all}.

---

##### `TickerplantLogConfiguration`<sup>Optional</sup> <a name="TickerplantLogConfiguration" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterConfig.property.tickerplantLogConfiguration"></a>

```csharp
public object TickerplantLogConfiguration { get; set; }
```

- *Type:* object

tickerplant_log_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/finspace_kx_cluster#tickerplant_log_configuration FinspaceKxCluster#tickerplant_log_configuration}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterConfig.property.timeouts"></a>

```csharp
public FinspaceKxClusterTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeouts">FinspaceKxClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/finspace_kx_cluster#timeouts FinspaceKxCluster#timeouts}

---

### FinspaceKxClusterDatabase <a name="FinspaceKxClusterDatabase" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabase"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabase.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new FinspaceKxClusterDatabase {
    string DatabaseName,
    object CacheConfigurations = null,
    string ChangesetId = null,
    string DataviewName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabase.property.databaseName">DatabaseName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/finspace_kx_cluster#database_name FinspaceKxCluster#database_name}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabase.property.cacheConfigurations">CacheConfigurations</a></code> | <code>object</code> | cache_configurations block. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabase.property.changesetId">ChangesetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/finspace_kx_cluster#changeset_id FinspaceKxCluster#changeset_id}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabase.property.dataviewName">DataviewName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/finspace_kx_cluster#dataview_name FinspaceKxCluster#dataview_name}. |

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabase.property.databaseName"></a>

```csharp
public string DatabaseName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/finspace_kx_cluster#database_name FinspaceKxCluster#database_name}.

---

##### `CacheConfigurations`<sup>Optional</sup> <a name="CacheConfigurations" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabase.property.cacheConfigurations"></a>

```csharp
public object CacheConfigurations { get; set; }
```

- *Type:* object

cache_configurations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/finspace_kx_cluster#cache_configurations FinspaceKxCluster#cache_configurations}

---

##### `ChangesetId`<sup>Optional</sup> <a name="ChangesetId" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabase.property.changesetId"></a>

```csharp
public string ChangesetId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/finspace_kx_cluster#changeset_id FinspaceKxCluster#changeset_id}.

---

##### `DataviewName`<sup>Optional</sup> <a name="DataviewName" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabase.property.dataviewName"></a>

```csharp
public string DataviewName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/finspace_kx_cluster#dataview_name FinspaceKxCluster#dataview_name}.

---

### FinspaceKxClusterDatabaseCacheConfigurations <a name="FinspaceKxClusterDatabaseCacheConfigurations" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurations.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new FinspaceKxClusterDatabaseCacheConfigurations {
    string CacheType,
    string[] DbPaths = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurations.property.cacheType">CacheType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/finspace_kx_cluster#cache_type FinspaceKxCluster#cache_type}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurations.property.dbPaths">DbPaths</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/finspace_kx_cluster#db_paths FinspaceKxCluster#db_paths}. |

---

##### `CacheType`<sup>Required</sup> <a name="CacheType" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurations.property.cacheType"></a>

```csharp
public string CacheType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/finspace_kx_cluster#cache_type FinspaceKxCluster#cache_type}.

---

##### `DbPaths`<sup>Optional</sup> <a name="DbPaths" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurations.property.dbPaths"></a>

```csharp
public string[] DbPaths { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/finspace_kx_cluster#db_paths FinspaceKxCluster#db_paths}.

---

### FinspaceKxClusterSavedownStorageConfiguration <a name="FinspaceKxClusterSavedownStorageConfiguration" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new FinspaceKxClusterSavedownStorageConfiguration {
    double Size = null,
    string Type = null,
    string VolumeName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfiguration.property.size">Size</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/finspace_kx_cluster#size FinspaceKxCluster#size}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfiguration.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/finspace_kx_cluster#type FinspaceKxCluster#type}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfiguration.property.volumeName">VolumeName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/finspace_kx_cluster#volume_name FinspaceKxCluster#volume_name}. |

---

##### `Size`<sup>Optional</sup> <a name="Size" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfiguration.property.size"></a>

```csharp
public double Size { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/finspace_kx_cluster#size FinspaceKxCluster#size}.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfiguration.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/finspace_kx_cluster#type FinspaceKxCluster#type}.

---

##### `VolumeName`<sup>Optional</sup> <a name="VolumeName" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfiguration.property.volumeName"></a>

```csharp
public string VolumeName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/finspace_kx_cluster#volume_name FinspaceKxCluster#volume_name}.

---

### FinspaceKxClusterScalingGroupConfiguration <a name="FinspaceKxClusterScalingGroupConfiguration" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new FinspaceKxClusterScalingGroupConfiguration {
    double MemoryReservation,
    double NodeCount,
    string ScalingGroupName,
    double Cpu = null,
    double MemoryLimit = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfiguration.property.memoryReservation">MemoryReservation</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/finspace_kx_cluster#memory_reservation FinspaceKxCluster#memory_reservation}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfiguration.property.nodeCount">NodeCount</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/finspace_kx_cluster#node_count FinspaceKxCluster#node_count}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfiguration.property.scalingGroupName">ScalingGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/finspace_kx_cluster#scaling_group_name FinspaceKxCluster#scaling_group_name}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfiguration.property.cpu">Cpu</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/finspace_kx_cluster#cpu FinspaceKxCluster#cpu}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfiguration.property.memoryLimit">MemoryLimit</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/finspace_kx_cluster#memory_limit FinspaceKxCluster#memory_limit}. |

---

##### `MemoryReservation`<sup>Required</sup> <a name="MemoryReservation" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfiguration.property.memoryReservation"></a>

```csharp
public double MemoryReservation { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/finspace_kx_cluster#memory_reservation FinspaceKxCluster#memory_reservation}.

---

##### `NodeCount`<sup>Required</sup> <a name="NodeCount" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfiguration.property.nodeCount"></a>

```csharp
public double NodeCount { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/finspace_kx_cluster#node_count FinspaceKxCluster#node_count}.

---

##### `ScalingGroupName`<sup>Required</sup> <a name="ScalingGroupName" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfiguration.property.scalingGroupName"></a>

```csharp
public string ScalingGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/finspace_kx_cluster#scaling_group_name FinspaceKxCluster#scaling_group_name}.

---

##### `Cpu`<sup>Optional</sup> <a name="Cpu" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfiguration.property.cpu"></a>

```csharp
public double Cpu { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/finspace_kx_cluster#cpu FinspaceKxCluster#cpu}.

---

##### `MemoryLimit`<sup>Optional</sup> <a name="MemoryLimit" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfiguration.property.memoryLimit"></a>

```csharp
public double MemoryLimit { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/finspace_kx_cluster#memory_limit FinspaceKxCluster#memory_limit}.

---

### FinspaceKxClusterTickerplantLogConfiguration <a name="FinspaceKxClusterTickerplantLogConfiguration" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new FinspaceKxClusterTickerplantLogConfiguration {
    string[] TickerplantLogVolumes
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfiguration.property.tickerplantLogVolumes">TickerplantLogVolumes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/finspace_kx_cluster#tickerplant_log_volumes FinspaceKxCluster#tickerplant_log_volumes}. |

---

##### `TickerplantLogVolumes`<sup>Required</sup> <a name="TickerplantLogVolumes" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfiguration.property.tickerplantLogVolumes"></a>

```csharp
public string[] TickerplantLogVolumes { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/finspace_kx_cluster#tickerplant_log_volumes FinspaceKxCluster#tickerplant_log_volumes}.

---

### FinspaceKxClusterTimeouts <a name="FinspaceKxClusterTimeouts" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new FinspaceKxClusterTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/finspace_kx_cluster#create FinspaceKxCluster#create}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/finspace_kx_cluster#delete FinspaceKxCluster#delete}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/finspace_kx_cluster#update FinspaceKxCluster#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/finspace_kx_cluster#create FinspaceKxCluster#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/finspace_kx_cluster#delete FinspaceKxCluster#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/finspace_kx_cluster#update FinspaceKxCluster#update}.

---

### FinspaceKxClusterVpcConfiguration <a name="FinspaceKxClusterVpcConfiguration" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new FinspaceKxClusterVpcConfiguration {
    string IpAddressType,
    string[] SecurityGroupIds,
    string[] SubnetIds,
    string VpcId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfiguration.property.ipAddressType">IpAddressType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/finspace_kx_cluster#ip_address_type FinspaceKxCluster#ip_address_type}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfiguration.property.securityGroupIds">SecurityGroupIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/finspace_kx_cluster#security_group_ids FinspaceKxCluster#security_group_ids}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfiguration.property.subnetIds">SubnetIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/finspace_kx_cluster#subnet_ids FinspaceKxCluster#subnet_ids}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfiguration.property.vpcId">VpcId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/finspace_kx_cluster#vpc_id FinspaceKxCluster#vpc_id}. |

---

##### `IpAddressType`<sup>Required</sup> <a name="IpAddressType" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfiguration.property.ipAddressType"></a>

```csharp
public string IpAddressType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/finspace_kx_cluster#ip_address_type FinspaceKxCluster#ip_address_type}.

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfiguration.property.securityGroupIds"></a>

```csharp
public string[] SecurityGroupIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/finspace_kx_cluster#security_group_ids FinspaceKxCluster#security_group_ids}.

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfiguration.property.subnetIds"></a>

```csharp
public string[] SubnetIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/finspace_kx_cluster#subnet_ids FinspaceKxCluster#subnet_ids}.

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfiguration.property.vpcId"></a>

```csharp
public string VpcId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/finspace_kx_cluster#vpc_id FinspaceKxCluster#vpc_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### FinspaceKxClusterAutoScalingConfigurationOutputReference <a name="FinspaceKxClusterAutoScalingConfigurationOutputReference" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new FinspaceKxClusterAutoScalingConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.property.autoScalingMetricInput">AutoScalingMetricInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.property.maxNodeCountInput">MaxNodeCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.property.metricTargetInput">MetricTargetInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.property.minNodeCountInput">MinNodeCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.property.scaleInCooldownSecondsInput">ScaleInCooldownSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.property.scaleOutCooldownSecondsInput">ScaleOutCooldownSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.property.autoScalingMetric">AutoScalingMetric</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.property.maxNodeCount">MaxNodeCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.property.metricTarget">MetricTarget</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.property.minNodeCount">MinNodeCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.property.scaleInCooldownSeconds">ScaleInCooldownSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.property.scaleOutCooldownSeconds">ScaleOutCooldownSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfiguration">FinspaceKxClusterAutoScalingConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AutoScalingMetricInput`<sup>Optional</sup> <a name="AutoScalingMetricInput" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.property.autoScalingMetricInput"></a>

```csharp
public string AutoScalingMetricInput { get; }
```

- *Type:* string

---

##### `MaxNodeCountInput`<sup>Optional</sup> <a name="MaxNodeCountInput" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.property.maxNodeCountInput"></a>

```csharp
public double MaxNodeCountInput { get; }
```

- *Type:* double

---

##### `MetricTargetInput`<sup>Optional</sup> <a name="MetricTargetInput" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.property.metricTargetInput"></a>

```csharp
public double MetricTargetInput { get; }
```

- *Type:* double

---

##### `MinNodeCountInput`<sup>Optional</sup> <a name="MinNodeCountInput" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.property.minNodeCountInput"></a>

```csharp
public double MinNodeCountInput { get; }
```

- *Type:* double

---

##### `ScaleInCooldownSecondsInput`<sup>Optional</sup> <a name="ScaleInCooldownSecondsInput" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.property.scaleInCooldownSecondsInput"></a>

```csharp
public double ScaleInCooldownSecondsInput { get; }
```

- *Type:* double

---

##### `ScaleOutCooldownSecondsInput`<sup>Optional</sup> <a name="ScaleOutCooldownSecondsInput" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.property.scaleOutCooldownSecondsInput"></a>

```csharp
public double ScaleOutCooldownSecondsInput { get; }
```

- *Type:* double

---

##### `AutoScalingMetric`<sup>Required</sup> <a name="AutoScalingMetric" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.property.autoScalingMetric"></a>

```csharp
public string AutoScalingMetric { get; }
```

- *Type:* string

---

##### `MaxNodeCount`<sup>Required</sup> <a name="MaxNodeCount" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.property.maxNodeCount"></a>

```csharp
public double MaxNodeCount { get; }
```

- *Type:* double

---

##### `MetricTarget`<sup>Required</sup> <a name="MetricTarget" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.property.metricTarget"></a>

```csharp
public double MetricTarget { get; }
```

- *Type:* double

---

##### `MinNodeCount`<sup>Required</sup> <a name="MinNodeCount" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.property.minNodeCount"></a>

```csharp
public double MinNodeCount { get; }
```

- *Type:* double

---

##### `ScaleInCooldownSeconds`<sup>Required</sup> <a name="ScaleInCooldownSeconds" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.property.scaleInCooldownSeconds"></a>

```csharp
public double ScaleInCooldownSeconds { get; }
```

- *Type:* double

---

##### `ScaleOutCooldownSeconds`<sup>Required</sup> <a name="ScaleOutCooldownSeconds" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.property.scaleOutCooldownSeconds"></a>

```csharp
public double ScaleOutCooldownSeconds { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfigurationOutputReference.property.internalValue"></a>

```csharp
public FinspaceKxClusterAutoScalingConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterAutoScalingConfiguration">FinspaceKxClusterAutoScalingConfiguration</a>

---


### FinspaceKxClusterCacheStorageConfigurationsList <a name="FinspaceKxClusterCacheStorageConfigurationsList" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new FinspaceKxClusterCacheStorageConfigurationsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsList.get"></a>

```csharp
private FinspaceKxClusterCacheStorageConfigurationsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### FinspaceKxClusterCacheStorageConfigurationsOutputReference <a name="FinspaceKxClusterCacheStorageConfigurationsOutputReference" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new FinspaceKxClusterCacheStorageConfigurationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsOutputReference.property.sizeInput">SizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsOutputReference.property.size">Size</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SizeInput`<sup>Optional</sup> <a name="SizeInput" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsOutputReference.property.sizeInput"></a>

```csharp
public double SizeInput { get; }
```

- *Type:* double

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Size`<sup>Required</sup> <a name="Size" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsOutputReference.property.size"></a>

```csharp
public double Size { get; }
```

- *Type:* double

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCacheStorageConfigurationsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### FinspaceKxClusterCapacityConfigurationOutputReference <a name="FinspaceKxClusterCapacityConfigurationOutputReference" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new FinspaceKxClusterCapacityConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfigurationOutputReference.property.nodeCountInput">NodeCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfigurationOutputReference.property.nodeTypeInput">NodeTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfigurationOutputReference.property.nodeCount">NodeCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfigurationOutputReference.property.nodeType">NodeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfiguration">FinspaceKxClusterCapacityConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NodeCountInput`<sup>Optional</sup> <a name="NodeCountInput" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfigurationOutputReference.property.nodeCountInput"></a>

```csharp
public double NodeCountInput { get; }
```

- *Type:* double

---

##### `NodeTypeInput`<sup>Optional</sup> <a name="NodeTypeInput" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfigurationOutputReference.property.nodeTypeInput"></a>

```csharp
public string NodeTypeInput { get; }
```

- *Type:* string

---

##### `NodeCount`<sup>Required</sup> <a name="NodeCount" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfigurationOutputReference.property.nodeCount"></a>

```csharp
public double NodeCount { get; }
```

- *Type:* double

---

##### `NodeType`<sup>Required</sup> <a name="NodeType" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfigurationOutputReference.property.nodeType"></a>

```csharp
public string NodeType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfigurationOutputReference.property.internalValue"></a>

```csharp
public FinspaceKxClusterCapacityConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCapacityConfiguration">FinspaceKxClusterCapacityConfiguration</a>

---


### FinspaceKxClusterCodeOutputReference <a name="FinspaceKxClusterCodeOutputReference" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new FinspaceKxClusterCodeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference.resetS3ObjectVersion">ResetS3ObjectVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetS3ObjectVersion` <a name="ResetS3ObjectVersion" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference.resetS3ObjectVersion"></a>

```csharp
private void ResetS3ObjectVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference.property.s3BucketInput">S3BucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference.property.s3KeyInput">S3KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference.property.s3ObjectVersionInput">S3ObjectVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference.property.s3Bucket">S3Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference.property.s3Key">S3Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference.property.s3ObjectVersion">S3ObjectVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCode">FinspaceKxClusterCode</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `S3BucketInput`<sup>Optional</sup> <a name="S3BucketInput" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference.property.s3BucketInput"></a>

```csharp
public string S3BucketInput { get; }
```

- *Type:* string

---

##### `S3KeyInput`<sup>Optional</sup> <a name="S3KeyInput" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference.property.s3KeyInput"></a>

```csharp
public string S3KeyInput { get; }
```

- *Type:* string

---

##### `S3ObjectVersionInput`<sup>Optional</sup> <a name="S3ObjectVersionInput" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference.property.s3ObjectVersionInput"></a>

```csharp
public string S3ObjectVersionInput { get; }
```

- *Type:* string

---

##### `S3Bucket`<sup>Required</sup> <a name="S3Bucket" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference.property.s3Bucket"></a>

```csharp
public string S3Bucket { get; }
```

- *Type:* string

---

##### `S3Key`<sup>Required</sup> <a name="S3Key" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference.property.s3Key"></a>

```csharp
public string S3Key { get; }
```

- *Type:* string

---

##### `S3ObjectVersion`<sup>Required</sup> <a name="S3ObjectVersion" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference.property.s3ObjectVersion"></a>

```csharp
public string S3ObjectVersion { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCodeOutputReference.property.internalValue"></a>

```csharp
public FinspaceKxClusterCode InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterCode">FinspaceKxClusterCode</a>

---


### FinspaceKxClusterDatabaseCacheConfigurationsList <a name="FinspaceKxClusterDatabaseCacheConfigurationsList" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new FinspaceKxClusterDatabaseCacheConfigurationsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsList.get"></a>

```csharp
private FinspaceKxClusterDatabaseCacheConfigurationsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### FinspaceKxClusterDatabaseCacheConfigurationsOutputReference <a name="FinspaceKxClusterDatabaseCacheConfigurationsOutputReference" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new FinspaceKxClusterDatabaseCacheConfigurationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference.resetDbPaths">ResetDbPaths</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDbPaths` <a name="ResetDbPaths" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference.resetDbPaths"></a>

```csharp
private void ResetDbPaths()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference.property.cacheTypeInput">CacheTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference.property.dbPathsInput">DbPathsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference.property.cacheType">CacheType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference.property.dbPaths">DbPaths</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CacheTypeInput`<sup>Optional</sup> <a name="CacheTypeInput" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference.property.cacheTypeInput"></a>

```csharp
public string CacheTypeInput { get; }
```

- *Type:* string

---

##### `DbPathsInput`<sup>Optional</sup> <a name="DbPathsInput" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference.property.dbPathsInput"></a>

```csharp
public string[] DbPathsInput { get; }
```

- *Type:* string[]

---

##### `CacheType`<sup>Required</sup> <a name="CacheType" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference.property.cacheType"></a>

```csharp
public string CacheType { get; }
```

- *Type:* string

---

##### `DbPaths`<sup>Required</sup> <a name="DbPaths" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference.property.dbPaths"></a>

```csharp
public string[] DbPaths { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### FinspaceKxClusterDatabaseList <a name="FinspaceKxClusterDatabaseList" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new FinspaceKxClusterDatabaseList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseList.get"></a>

```csharp
private FinspaceKxClusterDatabaseOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### FinspaceKxClusterDatabaseOutputReference <a name="FinspaceKxClusterDatabaseOutputReference" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new FinspaceKxClusterDatabaseOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.putCacheConfigurations">PutCacheConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.resetCacheConfigurations">ResetCacheConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.resetChangesetId">ResetChangesetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.resetDataviewName">ResetDataviewName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCacheConfigurations` <a name="PutCacheConfigurations" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.putCacheConfigurations"></a>

```csharp
private void PutCacheConfigurations(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.putCacheConfigurations.parameter.value"></a>

- *Type:* object

---

##### `ResetCacheConfigurations` <a name="ResetCacheConfigurations" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.resetCacheConfigurations"></a>

```csharp
private void ResetCacheConfigurations()
```

##### `ResetChangesetId` <a name="ResetChangesetId" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.resetChangesetId"></a>

```csharp
private void ResetChangesetId()
```

##### `ResetDataviewName` <a name="ResetDataviewName" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.resetDataviewName"></a>

```csharp
private void ResetDataviewName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.property.cacheConfigurations">CacheConfigurations</a></code> | <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsList">FinspaceKxClusterDatabaseCacheConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.property.cacheConfigurationsInput">CacheConfigurationsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.property.changesetIdInput">ChangesetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.property.databaseNameInput">DatabaseNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.property.dataviewNameInput">DataviewNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.property.changesetId">ChangesetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.property.databaseName">DatabaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.property.dataviewName">DataviewName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CacheConfigurations`<sup>Required</sup> <a name="CacheConfigurations" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.property.cacheConfigurations"></a>

```csharp
public FinspaceKxClusterDatabaseCacheConfigurationsList CacheConfigurations { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseCacheConfigurationsList">FinspaceKxClusterDatabaseCacheConfigurationsList</a>

---

##### `CacheConfigurationsInput`<sup>Optional</sup> <a name="CacheConfigurationsInput" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.property.cacheConfigurationsInput"></a>

```csharp
public object CacheConfigurationsInput { get; }
```

- *Type:* object

---

##### `ChangesetIdInput`<sup>Optional</sup> <a name="ChangesetIdInput" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.property.changesetIdInput"></a>

```csharp
public string ChangesetIdInput { get; }
```

- *Type:* string

---

##### `DatabaseNameInput`<sup>Optional</sup> <a name="DatabaseNameInput" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.property.databaseNameInput"></a>

```csharp
public string DatabaseNameInput { get; }
```

- *Type:* string

---

##### `DataviewNameInput`<sup>Optional</sup> <a name="DataviewNameInput" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.property.dataviewNameInput"></a>

```csharp
public string DataviewNameInput { get; }
```

- *Type:* string

---

##### `ChangesetId`<sup>Required</sup> <a name="ChangesetId" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.property.changesetId"></a>

```csharp
public string ChangesetId { get; }
```

- *Type:* string

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.property.databaseName"></a>

```csharp
public string DatabaseName { get; }
```

- *Type:* string

---

##### `DataviewName`<sup>Required</sup> <a name="DataviewName" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.property.dataviewName"></a>

```csharp
public string DataviewName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterDatabaseOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### FinspaceKxClusterSavedownStorageConfigurationOutputReference <a name="FinspaceKxClusterSavedownStorageConfigurationOutputReference" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new FinspaceKxClusterSavedownStorageConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.resetSize">ResetSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.resetType">ResetType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.resetVolumeName">ResetVolumeName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSize` <a name="ResetSize" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.resetSize"></a>

```csharp
private void ResetSize()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.resetType"></a>

```csharp
private void ResetType()
```

##### `ResetVolumeName` <a name="ResetVolumeName" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.resetVolumeName"></a>

```csharp
private void ResetVolumeName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.property.sizeInput">SizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.property.volumeNameInput">VolumeNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.property.size">Size</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.property.volumeName">VolumeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfiguration">FinspaceKxClusterSavedownStorageConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SizeInput`<sup>Optional</sup> <a name="SizeInput" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.property.sizeInput"></a>

```csharp
public double SizeInput { get; }
```

- *Type:* double

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `VolumeNameInput`<sup>Optional</sup> <a name="VolumeNameInput" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.property.volumeNameInput"></a>

```csharp
public string VolumeNameInput { get; }
```

- *Type:* string

---

##### `Size`<sup>Required</sup> <a name="Size" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.property.size"></a>

```csharp
public double Size { get; }
```

- *Type:* double

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `VolumeName`<sup>Required</sup> <a name="VolumeName" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.property.volumeName"></a>

```csharp
public string VolumeName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfigurationOutputReference.property.internalValue"></a>

```csharp
public FinspaceKxClusterSavedownStorageConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterSavedownStorageConfiguration">FinspaceKxClusterSavedownStorageConfiguration</a>

---


### FinspaceKxClusterScalingGroupConfigurationOutputReference <a name="FinspaceKxClusterScalingGroupConfigurationOutputReference" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new FinspaceKxClusterScalingGroupConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfigurationOutputReference.resetCpu">ResetCpu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfigurationOutputReference.resetMemoryLimit">ResetMemoryLimit</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCpu` <a name="ResetCpu" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfigurationOutputReference.resetCpu"></a>

```csharp
private void ResetCpu()
```

##### `ResetMemoryLimit` <a name="ResetMemoryLimit" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfigurationOutputReference.resetMemoryLimit"></a>

```csharp
private void ResetMemoryLimit()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfigurationOutputReference.property.cpuInput">CpuInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfigurationOutputReference.property.memoryLimitInput">MemoryLimitInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfigurationOutputReference.property.memoryReservationInput">MemoryReservationInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfigurationOutputReference.property.nodeCountInput">NodeCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfigurationOutputReference.property.scalingGroupNameInput">ScalingGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfigurationOutputReference.property.cpu">Cpu</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfigurationOutputReference.property.memoryLimit">MemoryLimit</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfigurationOutputReference.property.memoryReservation">MemoryReservation</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfigurationOutputReference.property.nodeCount">NodeCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfigurationOutputReference.property.scalingGroupName">ScalingGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfiguration">FinspaceKxClusterScalingGroupConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CpuInput`<sup>Optional</sup> <a name="CpuInput" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfigurationOutputReference.property.cpuInput"></a>

```csharp
public double CpuInput { get; }
```

- *Type:* double

---

##### `MemoryLimitInput`<sup>Optional</sup> <a name="MemoryLimitInput" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfigurationOutputReference.property.memoryLimitInput"></a>

```csharp
public double MemoryLimitInput { get; }
```

- *Type:* double

---

##### `MemoryReservationInput`<sup>Optional</sup> <a name="MemoryReservationInput" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfigurationOutputReference.property.memoryReservationInput"></a>

```csharp
public double MemoryReservationInput { get; }
```

- *Type:* double

---

##### `NodeCountInput`<sup>Optional</sup> <a name="NodeCountInput" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfigurationOutputReference.property.nodeCountInput"></a>

```csharp
public double NodeCountInput { get; }
```

- *Type:* double

---

##### `ScalingGroupNameInput`<sup>Optional</sup> <a name="ScalingGroupNameInput" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfigurationOutputReference.property.scalingGroupNameInput"></a>

```csharp
public string ScalingGroupNameInput { get; }
```

- *Type:* string

---

##### `Cpu`<sup>Required</sup> <a name="Cpu" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfigurationOutputReference.property.cpu"></a>

```csharp
public double Cpu { get; }
```

- *Type:* double

---

##### `MemoryLimit`<sup>Required</sup> <a name="MemoryLimit" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfigurationOutputReference.property.memoryLimit"></a>

```csharp
public double MemoryLimit { get; }
```

- *Type:* double

---

##### `MemoryReservation`<sup>Required</sup> <a name="MemoryReservation" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfigurationOutputReference.property.memoryReservation"></a>

```csharp
public double MemoryReservation { get; }
```

- *Type:* double

---

##### `NodeCount`<sup>Required</sup> <a name="NodeCount" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfigurationOutputReference.property.nodeCount"></a>

```csharp
public double NodeCount { get; }
```

- *Type:* double

---

##### `ScalingGroupName`<sup>Required</sup> <a name="ScalingGroupName" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfigurationOutputReference.property.scalingGroupName"></a>

```csharp
public string ScalingGroupName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfigurationOutputReference.property.internalValue"></a>

```csharp
public FinspaceKxClusterScalingGroupConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterScalingGroupConfiguration">FinspaceKxClusterScalingGroupConfiguration</a>

---


### FinspaceKxClusterTickerplantLogConfigurationList <a name="FinspaceKxClusterTickerplantLogConfigurationList" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new FinspaceKxClusterTickerplantLogConfigurationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationList.get"></a>

```csharp
private FinspaceKxClusterTickerplantLogConfigurationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### FinspaceKxClusterTickerplantLogConfigurationOutputReference <a name="FinspaceKxClusterTickerplantLogConfigurationOutputReference" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new FinspaceKxClusterTickerplantLogConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationOutputReference.property.tickerplantLogVolumesInput">TickerplantLogVolumesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationOutputReference.property.tickerplantLogVolumes">TickerplantLogVolumes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TickerplantLogVolumesInput`<sup>Optional</sup> <a name="TickerplantLogVolumesInput" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationOutputReference.property.tickerplantLogVolumesInput"></a>

```csharp
public string[] TickerplantLogVolumesInput { get; }
```

- *Type:* string[]

---

##### `TickerplantLogVolumes`<sup>Required</sup> <a name="TickerplantLogVolumes" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationOutputReference.property.tickerplantLogVolumes"></a>

```csharp
public string[] TickerplantLogVolumes { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTickerplantLogConfigurationOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### FinspaceKxClusterTimeoutsOutputReference <a name="FinspaceKxClusterTimeoutsOutputReference" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new FinspaceKxClusterTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### FinspaceKxClusterVpcConfigurationOutputReference <a name="FinspaceKxClusterVpcConfigurationOutputReference" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new FinspaceKxClusterVpcConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.property.ipAddressTypeInput">IpAddressTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.property.securityGroupIdsInput">SecurityGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.property.subnetIdsInput">SubnetIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.property.vpcIdInput">VpcIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.property.ipAddressType">IpAddressType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.property.securityGroupIds">SecurityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.property.subnetIds">SubnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.property.vpcId">VpcId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfiguration">FinspaceKxClusterVpcConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IpAddressTypeInput`<sup>Optional</sup> <a name="IpAddressTypeInput" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.property.ipAddressTypeInput"></a>

```csharp
public string IpAddressTypeInput { get; }
```

- *Type:* string

---

##### `SecurityGroupIdsInput`<sup>Optional</sup> <a name="SecurityGroupIdsInput" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.property.securityGroupIdsInput"></a>

```csharp
public string[] SecurityGroupIdsInput { get; }
```

- *Type:* string[]

---

##### `SubnetIdsInput`<sup>Optional</sup> <a name="SubnetIdsInput" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.property.subnetIdsInput"></a>

```csharp
public string[] SubnetIdsInput { get; }
```

- *Type:* string[]

---

##### `VpcIdInput`<sup>Optional</sup> <a name="VpcIdInput" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.property.vpcIdInput"></a>

```csharp
public string VpcIdInput { get; }
```

- *Type:* string

---

##### `IpAddressType`<sup>Required</sup> <a name="IpAddressType" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.property.ipAddressType"></a>

```csharp
public string IpAddressType { get; }
```

- *Type:* string

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.property.securityGroupIds"></a>

```csharp
public string[] SecurityGroupIds { get; }
```

- *Type:* string[]

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.property.subnetIds"></a>

```csharp
public string[] SubnetIds { get; }
```

- *Type:* string[]

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.property.vpcId"></a>

```csharp
public string VpcId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfigurationOutputReference.property.internalValue"></a>

```csharp
public FinspaceKxClusterVpcConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.finspaceKxCluster.FinspaceKxClusterVpcConfiguration">FinspaceKxClusterVpcConfiguration</a>

---



