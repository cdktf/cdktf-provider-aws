# `timestreaminfluxdbDbCluster` Submodule <a name="`timestreaminfluxdbDbCluster` Submodule" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TimestreaminfluxdbDbCluster <a name="TimestreaminfluxdbDbCluster" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/timestreaminfluxdb_db_cluster aws_timestreaminfluxdb_db_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new TimestreaminfluxdbDbCluster(Construct Scope, string Id, TimestreaminfluxdbDbClusterConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterConfig">TimestreaminfluxdbDbClusterConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterConfig">TimestreaminfluxdbDbClusterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.putLogDeliveryConfiguration">PutLogDeliveryConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.resetDbParameterGroupIdentifier">ResetDbParameterGroupIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.resetDbStorageType">ResetDbStorageType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.resetDeploymentType">ResetDeploymentType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.resetFailoverMode">ResetFailoverMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.resetLogDeliveryConfiguration">ResetLogDeliveryConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.resetNetworkType">ResetNetworkType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.resetPubliclyAccessible">ResetPubliclyAccessible</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutLogDeliveryConfiguration` <a name="PutLogDeliveryConfiguration" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.putLogDeliveryConfiguration"></a>

```csharp
private void PutLogDeliveryConfiguration(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.putLogDeliveryConfiguration.parameter.value"></a>

- *Type:* object

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.putTimeouts"></a>

```csharp
private void PutTimeouts(TimestreaminfluxdbDbClusterTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterTimeouts">TimestreaminfluxdbDbClusterTimeouts</a>

---

##### `ResetDbParameterGroupIdentifier` <a name="ResetDbParameterGroupIdentifier" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.resetDbParameterGroupIdentifier"></a>

```csharp
private void ResetDbParameterGroupIdentifier()
```

##### `ResetDbStorageType` <a name="ResetDbStorageType" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.resetDbStorageType"></a>

```csharp
private void ResetDbStorageType()
```

##### `ResetDeploymentType` <a name="ResetDeploymentType" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.resetDeploymentType"></a>

```csharp
private void ResetDeploymentType()
```

##### `ResetFailoverMode` <a name="ResetFailoverMode" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.resetFailoverMode"></a>

```csharp
private void ResetFailoverMode()
```

##### `ResetLogDeliveryConfiguration` <a name="ResetLogDeliveryConfiguration" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.resetLogDeliveryConfiguration"></a>

```csharp
private void ResetLogDeliveryConfiguration()
```

##### `ResetNetworkType` <a name="ResetNetworkType" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.resetNetworkType"></a>

```csharp
private void ResetNetworkType()
```

##### `ResetPort` <a name="ResetPort" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.resetPort"></a>

```csharp
private void ResetPort()
```

##### `ResetPubliclyAccessible` <a name="ResetPubliclyAccessible" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.resetPubliclyAccessible"></a>

```csharp
private void ResetPubliclyAccessible()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a TimestreaminfluxdbDbCluster resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

TimestreaminfluxdbDbCluster.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

TimestreaminfluxdbDbCluster.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

TimestreaminfluxdbDbCluster.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

TimestreaminfluxdbDbCluster.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a TimestreaminfluxdbDbCluster resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the TimestreaminfluxdbDbCluster to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing TimestreaminfluxdbDbCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/timestreaminfluxdb_db_cluster#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the TimestreaminfluxdbDbCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.property.endpoint">Endpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.property.influxAuthParametersSecretArn">InfluxAuthParametersSecretArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.property.logDeliveryConfiguration">LogDeliveryConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationList">TimestreaminfluxdbDbClusterLogDeliveryConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.property.readerEndpoint">ReaderEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.property.tagsAll">TagsAll</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterTimeoutsOutputReference">TimestreaminfluxdbDbClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.property.allocatedStorageInput">AllocatedStorageInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.property.bucketInput">BucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.property.dbInstanceTypeInput">DbInstanceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.property.dbParameterGroupIdentifierInput">DbParameterGroupIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.property.dbStorageTypeInput">DbStorageTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.property.deploymentTypeInput">DeploymentTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.property.failoverModeInput">FailoverModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.property.logDeliveryConfigurationInput">LogDeliveryConfigurationInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.property.networkTypeInput">NetworkTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.property.organizationInput">OrganizationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.property.passwordInput">PasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.property.portInput">PortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.property.publiclyAccessibleInput">PubliclyAccessibleInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.property.usernameInput">UsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.property.vpcSecurityGroupIdsInput">VpcSecurityGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.property.vpcSubnetIdsInput">VpcSubnetIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.property.allocatedStorage">AllocatedStorage</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.property.bucket">Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.property.dbInstanceType">DbInstanceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.property.dbParameterGroupIdentifier">DbParameterGroupIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.property.dbStorageType">DbStorageType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.property.deploymentType">DeploymentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.property.failoverMode">FailoverMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.property.networkType">NetworkType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.property.organization">Organization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.property.password">Password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.property.publiclyAccessible">PubliclyAccessible</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.property.username">Username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.property.vpcSecurityGroupIds">VpcSecurityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.property.vpcSubnetIds">VpcSubnetIds</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.property.endpoint"></a>

```csharp
public string Endpoint { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InfluxAuthParametersSecretArn`<sup>Required</sup> <a name="InfluxAuthParametersSecretArn" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.property.influxAuthParametersSecretArn"></a>

```csharp
public string InfluxAuthParametersSecretArn { get; }
```

- *Type:* string

---

##### `LogDeliveryConfiguration`<sup>Required</sup> <a name="LogDeliveryConfiguration" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.property.logDeliveryConfiguration"></a>

```csharp
public TimestreaminfluxdbDbClusterLogDeliveryConfigurationList LogDeliveryConfiguration { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationList">TimestreaminfluxdbDbClusterLogDeliveryConfigurationList</a>

---

##### `ReaderEndpoint`<sup>Required</sup> <a name="ReaderEndpoint" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.property.readerEndpoint"></a>

```csharp
public string ReaderEndpoint { get; }
```

- *Type:* string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.property.tagsAll"></a>

```csharp
public StringMap TagsAll { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.property.timeouts"></a>

```csharp
public TimestreaminfluxdbDbClusterTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterTimeoutsOutputReference">TimestreaminfluxdbDbClusterTimeoutsOutputReference</a>

---

##### `AllocatedStorageInput`<sup>Optional</sup> <a name="AllocatedStorageInput" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.property.allocatedStorageInput"></a>

```csharp
public double AllocatedStorageInput { get; }
```

- *Type:* double

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.property.bucketInput"></a>

```csharp
public string BucketInput { get; }
```

- *Type:* string

---

##### `DbInstanceTypeInput`<sup>Optional</sup> <a name="DbInstanceTypeInput" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.property.dbInstanceTypeInput"></a>

```csharp
public string DbInstanceTypeInput { get; }
```

- *Type:* string

---

##### `DbParameterGroupIdentifierInput`<sup>Optional</sup> <a name="DbParameterGroupIdentifierInput" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.property.dbParameterGroupIdentifierInput"></a>

```csharp
public string DbParameterGroupIdentifierInput { get; }
```

- *Type:* string

---

##### `DbStorageTypeInput`<sup>Optional</sup> <a name="DbStorageTypeInput" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.property.dbStorageTypeInput"></a>

```csharp
public string DbStorageTypeInput { get; }
```

- *Type:* string

---

##### `DeploymentTypeInput`<sup>Optional</sup> <a name="DeploymentTypeInput" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.property.deploymentTypeInput"></a>

```csharp
public string DeploymentTypeInput { get; }
```

- *Type:* string

---

##### `FailoverModeInput`<sup>Optional</sup> <a name="FailoverModeInput" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.property.failoverModeInput"></a>

```csharp
public string FailoverModeInput { get; }
```

- *Type:* string

---

##### `LogDeliveryConfigurationInput`<sup>Optional</sup> <a name="LogDeliveryConfigurationInput" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.property.logDeliveryConfigurationInput"></a>

```csharp
public object LogDeliveryConfigurationInput { get; }
```

- *Type:* object

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NetworkTypeInput`<sup>Optional</sup> <a name="NetworkTypeInput" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.property.networkTypeInput"></a>

```csharp
public string NetworkTypeInput { get; }
```

- *Type:* string

---

##### `OrganizationInput`<sup>Optional</sup> <a name="OrganizationInput" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.property.organizationInput"></a>

```csharp
public string OrganizationInput { get; }
```

- *Type:* string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.property.passwordInput"></a>

```csharp
public string PasswordInput { get; }
```

- *Type:* string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.property.portInput"></a>

```csharp
public double PortInput { get; }
```

- *Type:* double

---

##### `PubliclyAccessibleInput`<sup>Optional</sup> <a name="PubliclyAccessibleInput" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.property.publiclyAccessibleInput"></a>

```csharp
public object PubliclyAccessibleInput { get; }
```

- *Type:* object

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.property.usernameInput"></a>

```csharp
public string UsernameInput { get; }
```

- *Type:* string

---

##### `VpcSecurityGroupIdsInput`<sup>Optional</sup> <a name="VpcSecurityGroupIdsInput" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.property.vpcSecurityGroupIdsInput"></a>

```csharp
public string[] VpcSecurityGroupIdsInput { get; }
```

- *Type:* string[]

---

##### `VpcSubnetIdsInput`<sup>Optional</sup> <a name="VpcSubnetIdsInput" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.property.vpcSubnetIdsInput"></a>

```csharp
public string[] VpcSubnetIdsInput { get; }
```

- *Type:* string[]

---

##### `AllocatedStorage`<sup>Required</sup> <a name="AllocatedStorage" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.property.allocatedStorage"></a>

```csharp
public double AllocatedStorage { get; }
```

- *Type:* double

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.property.bucket"></a>

```csharp
public string Bucket { get; }
```

- *Type:* string

---

##### `DbInstanceType`<sup>Required</sup> <a name="DbInstanceType" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.property.dbInstanceType"></a>

```csharp
public string DbInstanceType { get; }
```

- *Type:* string

---

##### `DbParameterGroupIdentifier`<sup>Required</sup> <a name="DbParameterGroupIdentifier" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.property.dbParameterGroupIdentifier"></a>

```csharp
public string DbParameterGroupIdentifier { get; }
```

- *Type:* string

---

##### `DbStorageType`<sup>Required</sup> <a name="DbStorageType" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.property.dbStorageType"></a>

```csharp
public string DbStorageType { get; }
```

- *Type:* string

---

##### `DeploymentType`<sup>Required</sup> <a name="DeploymentType" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.property.deploymentType"></a>

```csharp
public string DeploymentType { get; }
```

- *Type:* string

---

##### `FailoverMode`<sup>Required</sup> <a name="FailoverMode" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.property.failoverMode"></a>

```csharp
public string FailoverMode { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NetworkType`<sup>Required</sup> <a name="NetworkType" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.property.networkType"></a>

```csharp
public string NetworkType { get; }
```

- *Type:* string

---

##### `Organization`<sup>Required</sup> <a name="Organization" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.property.organization"></a>

```csharp
public string Organization { get; }
```

- *Type:* string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.property.password"></a>

```csharp
public string Password { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `PubliclyAccessible`<sup>Required</sup> <a name="PubliclyAccessible" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.property.publiclyAccessible"></a>

```csharp
public object PubliclyAccessible { get; }
```

- *Type:* object

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

##### `VpcSecurityGroupIds`<sup>Required</sup> <a name="VpcSecurityGroupIds" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.property.vpcSecurityGroupIds"></a>

```csharp
public string[] VpcSecurityGroupIds { get; }
```

- *Type:* string[]

---

##### `VpcSubnetIds`<sup>Required</sup> <a name="VpcSubnetIds" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.property.vpcSubnetIds"></a>

```csharp
public string[] VpcSubnetIds { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbCluster.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### TimestreaminfluxdbDbClusterConfig <a name="TimestreaminfluxdbDbClusterConfig" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new TimestreaminfluxdbDbClusterConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    double AllocatedStorage,
    string Bucket,
    string DbInstanceType,
    string Name,
    string Organization,
    string Password,
    string Username,
    string[] VpcSecurityGroupIds,
    string[] VpcSubnetIds,
    string DbParameterGroupIdentifier = null,
    string DbStorageType = null,
    string DeploymentType = null,
    string FailoverMode = null,
    object LogDeliveryConfiguration = null,
    string NetworkType = null,
    double Port = null,
    object PubliclyAccessible = null,
    string Region = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    TimestreaminfluxdbDbClusterTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterConfig.property.allocatedStorage">AllocatedStorage</a></code> | <code>double</code> | The amount of storage to allocate for your DB storage type in GiB (gibibytes). |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterConfig.property.bucket">Bucket</a></code> | <code>string</code> | The name of the initial InfluxDB bucket. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterConfig.property.dbInstanceType">DbInstanceType</a></code> | <code>string</code> | The Timestream for InfluxDB DB instance type to run InfluxDB on. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterConfig.property.name">Name</a></code> | <code>string</code> | The name that uniquely identifies the DB cluster when interacting with the  					Amazon Timestream for InfluxDB API and CLI commands. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterConfig.property.organization">Organization</a></code> | <code>string</code> | The name of the initial organization for the initial admin user in InfluxDB. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterConfig.property.password">Password</a></code> | <code>string</code> | The password of the initial admin user created in InfluxDB. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterConfig.property.username">Username</a></code> | <code>string</code> | The username of the initial admin user created in InfluxDB. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterConfig.property.vpcSecurityGroupIds">VpcSecurityGroupIds</a></code> | <code>string[]</code> | A list of VPC security group IDs to associate with the Timestream for InfluxDB cluster. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterConfig.property.vpcSubnetIds">VpcSubnetIds</a></code> | <code>string[]</code> | A list of VPC subnet IDs to associate with the DB cluster. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterConfig.property.dbParameterGroupIdentifier">DbParameterGroupIdentifier</a></code> | <code>string</code> | The ID of the DB parameter group to assign to your DB cluster. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterConfig.property.dbStorageType">DbStorageType</a></code> | <code>string</code> | The Timestream for InfluxDB DB storage type to read and write InfluxDB data. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterConfig.property.deploymentType">DeploymentType</a></code> | <code>string</code> | Specifies the type of cluster to create. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterConfig.property.failoverMode">FailoverMode</a></code> | <code>string</code> | Specifies the behavior of failure recovery when the primary node of the cluster 					fails. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterConfig.property.logDeliveryConfiguration">LogDeliveryConfiguration</a></code> | <code>object</code> | log_delivery_configuration block. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterConfig.property.networkType">NetworkType</a></code> | <code>string</code> | Specifies whether the networkType of the Timestream for InfluxDB cluster is  					IPV4, which can communicate over IPv4 protocol only, or DUAL, which can communicate  					over both IPv4 and IPv6 protocols. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterConfig.property.port">Port</a></code> | <code>double</code> | The port number on which InfluxDB accepts connections. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterConfig.property.publiclyAccessible">PubliclyAccessible</a></code> | <code>object</code> | Configures the Timestream for InfluxDB cluster with a public IP to facilitate access. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/timestreaminfluxdb_db_cluster#tags TimestreaminfluxdbDbCluster#tags}. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterTimeouts">TimestreaminfluxdbDbClusterTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AllocatedStorage`<sup>Required</sup> <a name="AllocatedStorage" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterConfig.property.allocatedStorage"></a>

```csharp
public double AllocatedStorage { get; set; }
```

- *Type:* double

The amount of storage to allocate for your DB storage type in GiB (gibibytes).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/timestreaminfluxdb_db_cluster#allocated_storage TimestreaminfluxdbDbCluster#allocated_storage}

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterConfig.property.bucket"></a>

```csharp
public string Bucket { get; set; }
```

- *Type:* string

The name of the initial InfluxDB bucket.

All InfluxDB data is stored in a bucket.
A bucket combines the concept of a database and a retention period (the duration of time
that each data point persists). A bucket belongs to an organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/timestreaminfluxdb_db_cluster#bucket TimestreaminfluxdbDbCluster#bucket}

---

##### `DbInstanceType`<sup>Required</sup> <a name="DbInstanceType" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterConfig.property.dbInstanceType"></a>

```csharp
public string DbInstanceType { get; set; }
```

- *Type:* string

The Timestream for InfluxDB DB instance type to run InfluxDB on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/timestreaminfluxdb_db_cluster#db_instance_type TimestreaminfluxdbDbCluster#db_instance_type}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name that uniquely identifies the DB cluster when interacting with the  					Amazon Timestream for InfluxDB API and CLI commands.

This name will also be a
prefix included in the endpoint. DB cluster names must be unique per customer
and per region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/timestreaminfluxdb_db_cluster#name TimestreaminfluxdbDbCluster#name}

---

##### `Organization`<sup>Required</sup> <a name="Organization" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterConfig.property.organization"></a>

```csharp
public string Organization { get; set; }
```

- *Type:* string

The name of the initial organization for the initial admin user in InfluxDB.

An
InfluxDB organization is a workspace for a group of users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/timestreaminfluxdb_db_cluster#organization TimestreaminfluxdbDbCluster#organization}

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterConfig.property.password"></a>

```csharp
public string Password { get; set; }
```

- *Type:* string

The password of the initial admin user created in InfluxDB.

This password will
allow you to access the InfluxDB UI to perform various administrative tasks and
also use the InfluxDB CLI to create an operator token. These attributes will be
stored in a Secret created in AWS SecretManager in your account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/timestreaminfluxdb_db_cluster#password TimestreaminfluxdbDbCluster#password}

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterConfig.property.username"></a>

```csharp
public string Username { get; set; }
```

- *Type:* string

The username of the initial admin user created in InfluxDB.

Must start with a letter and can't end with a hyphen or contain two
consecutive hyphens. For example, my-user1. This username will allow
you to access the InfluxDB UI to perform various administrative tasks
and also use the InfluxDB CLI to create an operator token. These
attributes will be stored in a Secret created in Amazon Secrets
Manager in your account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/timestreaminfluxdb_db_cluster#username TimestreaminfluxdbDbCluster#username}

---

##### `VpcSecurityGroupIds`<sup>Required</sup> <a name="VpcSecurityGroupIds" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterConfig.property.vpcSecurityGroupIds"></a>

```csharp
public string[] VpcSecurityGroupIds { get; set; }
```

- *Type:* string[]

A list of VPC security group IDs to associate with the Timestream for InfluxDB cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/timestreaminfluxdb_db_cluster#vpc_security_group_ids TimestreaminfluxdbDbCluster#vpc_security_group_ids}

---

##### `VpcSubnetIds`<sup>Required</sup> <a name="VpcSubnetIds" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterConfig.property.vpcSubnetIds"></a>

```csharp
public string[] VpcSubnetIds { get; set; }
```

- *Type:* string[]

A list of VPC subnet IDs to associate with the DB cluster.

Provide at least
two VPC subnet IDs in different availability zones when deploying with a Multi-AZ standby.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/timestreaminfluxdb_db_cluster#vpc_subnet_ids TimestreaminfluxdbDbCluster#vpc_subnet_ids}

---

##### `DbParameterGroupIdentifier`<sup>Optional</sup> <a name="DbParameterGroupIdentifier" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterConfig.property.dbParameterGroupIdentifier"></a>

```csharp
public string DbParameterGroupIdentifier { get; set; }
```

- *Type:* string

The ID of the DB parameter group to assign to your DB cluster.

DB parameter groups specify how the database is configured. For example, DB parameter groups
can specify the limit for query concurrency.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/timestreaminfluxdb_db_cluster#db_parameter_group_identifier TimestreaminfluxdbDbCluster#db_parameter_group_identifier}

---

##### `DbStorageType`<sup>Optional</sup> <a name="DbStorageType" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterConfig.property.dbStorageType"></a>

```csharp
public string DbStorageType { get; set; }
```

- *Type:* string

The Timestream for InfluxDB DB storage type to read and write InfluxDB data.

You can choose between 3 different types of provisioned Influx IOPS included storage according
to your workloads requirements: Influx IO Included 3000 IOPS, Influx IO Included 12000 IOPS,
Influx IO Included 16000 IOPS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/timestreaminfluxdb_db_cluster#db_storage_type TimestreaminfluxdbDbCluster#db_storage_type}

---

##### `DeploymentType`<sup>Optional</sup> <a name="DeploymentType" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterConfig.property.deploymentType"></a>

```csharp
public string DeploymentType { get; set; }
```

- *Type:* string

Specifies the type of cluster to create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/timestreaminfluxdb_db_cluster#deployment_type TimestreaminfluxdbDbCluster#deployment_type}

---

##### `FailoverMode`<sup>Optional</sup> <a name="FailoverMode" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterConfig.property.failoverMode"></a>

```csharp
public string FailoverMode { get; set; }
```

- *Type:* string

Specifies the behavior of failure recovery when the primary node of the cluster 					fails.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/timestreaminfluxdb_db_cluster#failover_mode TimestreaminfluxdbDbCluster#failover_mode}

---

##### `LogDeliveryConfiguration`<sup>Optional</sup> <a name="LogDeliveryConfiguration" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterConfig.property.logDeliveryConfiguration"></a>

```csharp
public object LogDeliveryConfiguration { get; set; }
```

- *Type:* object

log_delivery_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/timestreaminfluxdb_db_cluster#log_delivery_configuration TimestreaminfluxdbDbCluster#log_delivery_configuration}

---

##### `NetworkType`<sup>Optional</sup> <a name="NetworkType" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterConfig.property.networkType"></a>

```csharp
public string NetworkType { get; set; }
```

- *Type:* string

Specifies whether the networkType of the Timestream for InfluxDB cluster is  					IPV4, which can communicate over IPv4 protocol only, or DUAL, which can communicate  					over both IPv4 and IPv6 protocols.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/timestreaminfluxdb_db_cluster#network_type TimestreaminfluxdbDbCluster#network_type}

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterConfig.property.port"></a>

```csharp
public double Port { get; set; }
```

- *Type:* double

The port number on which InfluxDB accepts connections.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/timestreaminfluxdb_db_cluster#port TimestreaminfluxdbDbCluster#port}

---

##### `PubliclyAccessible`<sup>Optional</sup> <a name="PubliclyAccessible" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterConfig.property.publiclyAccessible"></a>

```csharp
public object PubliclyAccessible { get; set; }
```

- *Type:* object

Configures the Timestream for InfluxDB cluster with a public IP to facilitate access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/timestreaminfluxdb_db_cluster#publicly_accessible TimestreaminfluxdbDbCluster#publicly_accessible}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/timestreaminfluxdb_db_cluster#region TimestreaminfluxdbDbCluster#region}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/timestreaminfluxdb_db_cluster#tags TimestreaminfluxdbDbCluster#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterConfig.property.timeouts"></a>

```csharp
public TimestreaminfluxdbDbClusterTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterTimeouts">TimestreaminfluxdbDbClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/timestreaminfluxdb_db_cluster#timeouts TimestreaminfluxdbDbCluster#timeouts}

---

### TimestreaminfluxdbDbClusterLogDeliveryConfiguration <a name="TimestreaminfluxdbDbClusterLogDeliveryConfiguration" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new TimestreaminfluxdbDbClusterLogDeliveryConfiguration {
    object S3Configuration = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfiguration.property.s3Configuration">S3Configuration</a></code> | <code>object</code> | s3_configuration block. |

---

##### `S3Configuration`<sup>Optional</sup> <a name="S3Configuration" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfiguration.property.s3Configuration"></a>

```csharp
public object S3Configuration { get; set; }
```

- *Type:* object

s3_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/timestreaminfluxdb_db_cluster#s3_configuration TimestreaminfluxdbDbCluster#s3_configuration}

---

### TimestreaminfluxdbDbClusterLogDeliveryConfigurationS3Configuration <a name="TimestreaminfluxdbDbClusterLogDeliveryConfigurationS3Configuration" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationS3Configuration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationS3Configuration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new TimestreaminfluxdbDbClusterLogDeliveryConfigurationS3Configuration {
    string BucketName,
    object Enabled
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationS3Configuration.property.bucketName">BucketName</a></code> | <code>string</code> | The name of the S3 bucket to deliver logs to. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationS3Configuration.property.enabled">Enabled</a></code> | <code>object</code> | Indicates whether log delivery to the S3 bucket is enabled. |

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationS3Configuration.property.bucketName"></a>

```csharp
public string BucketName { get; set; }
```

- *Type:* string

The name of the S3 bucket to deliver logs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/timestreaminfluxdb_db_cluster#bucket_name TimestreaminfluxdbDbCluster#bucket_name}

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationS3Configuration.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Indicates whether log delivery to the S3 bucket is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/timestreaminfluxdb_db_cluster#enabled TimestreaminfluxdbDbCluster#enabled}

---

### TimestreaminfluxdbDbClusterTimeouts <a name="TimestreaminfluxdbDbClusterTimeouts" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new TimestreaminfluxdbDbClusterTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterTimeouts.property.create">Create</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterTimeouts.property.delete">Delete</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterTimeouts.property.update">Update</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/timestreaminfluxdb_db_cluster#create TimestreaminfluxdbDbCluster#create}

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/timestreaminfluxdb_db_cluster#delete TimestreaminfluxdbDbCluster#delete}

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/timestreaminfluxdb_db_cluster#update TimestreaminfluxdbDbCluster#update}

---

## Classes <a name="Classes" id="Classes"></a>

### TimestreaminfluxdbDbClusterLogDeliveryConfigurationList <a name="TimestreaminfluxdbDbClusterLogDeliveryConfigurationList" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new TimestreaminfluxdbDbClusterLogDeliveryConfigurationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationList.get"></a>

```csharp
private TimestreaminfluxdbDbClusterLogDeliveryConfigurationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### TimestreaminfluxdbDbClusterLogDeliveryConfigurationOutputReference <a name="TimestreaminfluxdbDbClusterLogDeliveryConfigurationOutputReference" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new TimestreaminfluxdbDbClusterLogDeliveryConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationOutputReference.putS3Configuration">PutS3Configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationOutputReference.resetS3Configuration">ResetS3Configuration</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutS3Configuration` <a name="PutS3Configuration" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationOutputReference.putS3Configuration"></a>

```csharp
private void PutS3Configuration(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationOutputReference.putS3Configuration.parameter.value"></a>

- *Type:* object

---

##### `ResetS3Configuration` <a name="ResetS3Configuration" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationOutputReference.resetS3Configuration"></a>

```csharp
private void ResetS3Configuration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationOutputReference.property.s3Configuration">S3Configuration</a></code> | <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationS3ConfigurationList">TimestreaminfluxdbDbClusterLogDeliveryConfigurationS3ConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationOutputReference.property.s3ConfigurationInput">S3ConfigurationInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `S3Configuration`<sup>Required</sup> <a name="S3Configuration" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationOutputReference.property.s3Configuration"></a>

```csharp
public TimestreaminfluxdbDbClusterLogDeliveryConfigurationS3ConfigurationList S3Configuration { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationS3ConfigurationList">TimestreaminfluxdbDbClusterLogDeliveryConfigurationS3ConfigurationList</a>

---

##### `S3ConfigurationInput`<sup>Optional</sup> <a name="S3ConfigurationInput" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationOutputReference.property.s3ConfigurationInput"></a>

```csharp
public object S3ConfigurationInput { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### TimestreaminfluxdbDbClusterLogDeliveryConfigurationS3ConfigurationList <a name="TimestreaminfluxdbDbClusterLogDeliveryConfigurationS3ConfigurationList" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationS3ConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationS3ConfigurationList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new TimestreaminfluxdbDbClusterLogDeliveryConfigurationS3ConfigurationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationS3ConfigurationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationS3ConfigurationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationS3ConfigurationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationS3ConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationS3ConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationS3ConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationS3ConfigurationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationS3ConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationS3ConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationS3ConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationS3ConfigurationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationS3ConfigurationList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationS3ConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationS3ConfigurationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationS3ConfigurationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationS3ConfigurationList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationS3ConfigurationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationS3ConfigurationList.get"></a>

```csharp
private TimestreaminfluxdbDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationS3ConfigurationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationS3ConfigurationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationS3ConfigurationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationS3ConfigurationList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationS3ConfigurationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationS3ConfigurationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationS3ConfigurationList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### TimestreaminfluxdbDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference <a name="TimestreaminfluxdbDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new TimestreaminfluxdbDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.property.bucketNameInput">BucketNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.property.bucketName">BucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BucketNameInput`<sup>Optional</sup> <a name="BucketNameInput" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.property.bucketNameInput"></a>

```csharp
public string BucketNameInput { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.property.bucketName"></a>

```csharp
public string BucketName { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterLogDeliveryConfigurationS3ConfigurationOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### TimestreaminfluxdbDbClusterTimeoutsOutputReference <a name="TimestreaminfluxdbDbClusterTimeoutsOutputReference" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new TimestreaminfluxdbDbClusterTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.timestreaminfluxdbDbCluster.TimestreaminfluxdbDbClusterTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



