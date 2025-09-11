# `ec2CapacityReservation` Submodule <a name="`ec2CapacityReservation` Submodule" id="@cdktf/provider-aws.ec2CapacityReservation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2CapacityReservation <a name="Ec2CapacityReservation" id="@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/ec2_capacity_reservation aws_ec2_capacity_reservation}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservation.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Ec2CapacityReservation(Construct Scope, string Id, Ec2CapacityReservationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservation.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservation.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservation.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservationConfig">Ec2CapacityReservationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservation.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservationConfig">Ec2CapacityReservationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservation.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservation.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservation.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservation.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservation.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservation.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservation.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservation.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservation.resetEbsOptimized">ResetEbsOptimized</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservation.resetEndDate">ResetEndDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservation.resetEndDateType">ResetEndDateType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservation.resetEphemeralStorage">ResetEphemeralStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservation.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservation.resetInstanceMatchCriteria">ResetInstanceMatchCriteria</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservation.resetOutpostArn">ResetOutpostArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservation.resetPlacementGroupArn">ResetPlacementGroupArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservation.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservation.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservation.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservation.resetTenancy">ResetTenancy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservation.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservation.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservation.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservation.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservation.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservation.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservation.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservation.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservation.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservation.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservation.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservation.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservation.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservation.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservation.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservation.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservation.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservation.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservation.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservation.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservation.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservation.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservation.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservation.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservation.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservation.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservation.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservation.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservation.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservation.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservation.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservation.putTimeouts"></a>

```csharp
private void PutTimeouts(Ec2CapacityReservationTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservation.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservationTimeouts">Ec2CapacityReservationTimeouts</a>

---

##### `ResetEbsOptimized` <a name="ResetEbsOptimized" id="@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservation.resetEbsOptimized"></a>

```csharp
private void ResetEbsOptimized()
```

##### `ResetEndDate` <a name="ResetEndDate" id="@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservation.resetEndDate"></a>

```csharp
private void ResetEndDate()
```

##### `ResetEndDateType` <a name="ResetEndDateType" id="@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservation.resetEndDateType"></a>

```csharp
private void ResetEndDateType()
```

##### `ResetEphemeralStorage` <a name="ResetEphemeralStorage" id="@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservation.resetEphemeralStorage"></a>

```csharp
private void ResetEphemeralStorage()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservation.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetInstanceMatchCriteria` <a name="ResetInstanceMatchCriteria" id="@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservation.resetInstanceMatchCriteria"></a>

```csharp
private void ResetInstanceMatchCriteria()
```

##### `ResetOutpostArn` <a name="ResetOutpostArn" id="@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservation.resetOutpostArn"></a>

```csharp
private void ResetOutpostArn()
```

##### `ResetPlacementGroupArn` <a name="ResetPlacementGroupArn" id="@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservation.resetPlacementGroupArn"></a>

```csharp
private void ResetPlacementGroupArn()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservation.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservation.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservation.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

##### `ResetTenancy` <a name="ResetTenancy" id="@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservation.resetTenancy"></a>

```csharp
private void ResetTenancy()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservation.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservation.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservation.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a Ec2CapacityReservation resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservation.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

Ec2CapacityReservation.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservation.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservation.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

Ec2CapacityReservation.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservation.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservation.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

Ec2CapacityReservation.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservation.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservation.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

Ec2CapacityReservation.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a Ec2CapacityReservation resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservation.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Ec2CapacityReservation to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Ec2CapacityReservation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/ec2_capacity_reservation#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservation.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the Ec2CapacityReservation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservation.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservation.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservation.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservation.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservation.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservation.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservation.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservation.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservation.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservation.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservation.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservation.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservation.property.ownerId">OwnerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservation.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservationTimeoutsOutputReference">Ec2CapacityReservationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservation.property.availabilityZoneInput">AvailabilityZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservation.property.ebsOptimizedInput">EbsOptimizedInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservation.property.endDateInput">EndDateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservation.property.endDateTypeInput">EndDateTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservation.property.ephemeralStorageInput">EphemeralStorageInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservation.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservation.property.instanceCountInput">InstanceCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservation.property.instanceMatchCriteriaInput">InstanceMatchCriteriaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservation.property.instancePlatformInput">InstancePlatformInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservation.property.instanceTypeInput">InstanceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservation.property.outpostArnInput">OutpostArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservation.property.placementGroupArnInput">PlacementGroupArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservation.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservation.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservation.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservation.property.tenancyInput">TenancyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservation.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservation.property.availabilityZone">AvailabilityZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservation.property.ebsOptimized">EbsOptimized</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservation.property.endDate">EndDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservation.property.endDateType">EndDateType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservation.property.ephemeralStorage">EphemeralStorage</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservation.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservation.property.instanceCount">InstanceCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservation.property.instanceMatchCriteria">InstanceMatchCriteria</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservation.property.instancePlatform">InstancePlatform</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservation.property.instanceType">InstanceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservation.property.outpostArn">OutpostArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservation.property.placementGroupArn">PlacementGroupArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservation.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservation.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservation.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservation.property.tenancy">Tenancy</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservation.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservation.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservation.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservation.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservation.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservation.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservation.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservation.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservation.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservation.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservation.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservation.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservation.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservation.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservation.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `OwnerId`<sup>Required</sup> <a name="OwnerId" id="@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservation.property.ownerId"></a>

```csharp
public string OwnerId { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservation.property.timeouts"></a>

```csharp
public Ec2CapacityReservationTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservationTimeoutsOutputReference">Ec2CapacityReservationTimeoutsOutputReference</a>

---

##### `AvailabilityZoneInput`<sup>Optional</sup> <a name="AvailabilityZoneInput" id="@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservation.property.availabilityZoneInput"></a>

```csharp
public string AvailabilityZoneInput { get; }
```

- *Type:* string

---

##### `EbsOptimizedInput`<sup>Optional</sup> <a name="EbsOptimizedInput" id="@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservation.property.ebsOptimizedInput"></a>

```csharp
public object EbsOptimizedInput { get; }
```

- *Type:* object

---

##### `EndDateInput`<sup>Optional</sup> <a name="EndDateInput" id="@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservation.property.endDateInput"></a>

```csharp
public string EndDateInput { get; }
```

- *Type:* string

---

##### `EndDateTypeInput`<sup>Optional</sup> <a name="EndDateTypeInput" id="@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservation.property.endDateTypeInput"></a>

```csharp
public string EndDateTypeInput { get; }
```

- *Type:* string

---

##### `EphemeralStorageInput`<sup>Optional</sup> <a name="EphemeralStorageInput" id="@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservation.property.ephemeralStorageInput"></a>

```csharp
public object EphemeralStorageInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservation.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InstanceCountInput`<sup>Optional</sup> <a name="InstanceCountInput" id="@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservation.property.instanceCountInput"></a>

```csharp
public double InstanceCountInput { get; }
```

- *Type:* double

---

##### `InstanceMatchCriteriaInput`<sup>Optional</sup> <a name="InstanceMatchCriteriaInput" id="@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservation.property.instanceMatchCriteriaInput"></a>

```csharp
public string InstanceMatchCriteriaInput { get; }
```

- *Type:* string

---

##### `InstancePlatformInput`<sup>Optional</sup> <a name="InstancePlatformInput" id="@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservation.property.instancePlatformInput"></a>

```csharp
public string InstancePlatformInput { get; }
```

- *Type:* string

---

##### `InstanceTypeInput`<sup>Optional</sup> <a name="InstanceTypeInput" id="@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservation.property.instanceTypeInput"></a>

```csharp
public string InstanceTypeInput { get; }
```

- *Type:* string

---

##### `OutpostArnInput`<sup>Optional</sup> <a name="OutpostArnInput" id="@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservation.property.outpostArnInput"></a>

```csharp
public string OutpostArnInput { get; }
```

- *Type:* string

---

##### `PlacementGroupArnInput`<sup>Optional</sup> <a name="PlacementGroupArnInput" id="@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservation.property.placementGroupArnInput"></a>

```csharp
public string PlacementGroupArnInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservation.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservation.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservation.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TenancyInput`<sup>Optional</sup> <a name="TenancyInput" id="@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservation.property.tenancyInput"></a>

```csharp
public string TenancyInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservation.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `AvailabilityZone`<sup>Required</sup> <a name="AvailabilityZone" id="@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservation.property.availabilityZone"></a>

```csharp
public string AvailabilityZone { get; }
```

- *Type:* string

---

##### `EbsOptimized`<sup>Required</sup> <a name="EbsOptimized" id="@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservation.property.ebsOptimized"></a>

```csharp
public object EbsOptimized { get; }
```

- *Type:* object

---

##### `EndDate`<sup>Required</sup> <a name="EndDate" id="@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservation.property.endDate"></a>

```csharp
public string EndDate { get; }
```

- *Type:* string

---

##### `EndDateType`<sup>Required</sup> <a name="EndDateType" id="@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservation.property.endDateType"></a>

```csharp
public string EndDateType { get; }
```

- *Type:* string

---

##### `EphemeralStorage`<sup>Required</sup> <a name="EphemeralStorage" id="@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservation.property.ephemeralStorage"></a>

```csharp
public object EphemeralStorage { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservation.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InstanceCount`<sup>Required</sup> <a name="InstanceCount" id="@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservation.property.instanceCount"></a>

```csharp
public double InstanceCount { get; }
```

- *Type:* double

---

##### `InstanceMatchCriteria`<sup>Required</sup> <a name="InstanceMatchCriteria" id="@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservation.property.instanceMatchCriteria"></a>

```csharp
public string InstanceMatchCriteria { get; }
```

- *Type:* string

---

##### `InstancePlatform`<sup>Required</sup> <a name="InstancePlatform" id="@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservation.property.instancePlatform"></a>

```csharp
public string InstancePlatform { get; }
```

- *Type:* string

---

##### `InstanceType`<sup>Required</sup> <a name="InstanceType" id="@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservation.property.instanceType"></a>

```csharp
public string InstanceType { get; }
```

- *Type:* string

---

##### `OutpostArn`<sup>Required</sup> <a name="OutpostArn" id="@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservation.property.outpostArn"></a>

```csharp
public string OutpostArn { get; }
```

- *Type:* string

---

##### `PlacementGroupArn`<sup>Required</sup> <a name="PlacementGroupArn" id="@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservation.property.placementGroupArn"></a>

```csharp
public string PlacementGroupArn { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservation.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservation.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservation.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Tenancy`<sup>Required</sup> <a name="Tenancy" id="@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservation.property.tenancy"></a>

```csharp
public string Tenancy { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservation.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservation.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2CapacityReservationConfig <a name="Ec2CapacityReservationConfig" id="@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservationConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Ec2CapacityReservationConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AvailabilityZone,
    double InstanceCount,
    string InstancePlatform,
    string InstanceType,
    object EbsOptimized = null,
    string EndDate = null,
    string EndDateType = null,
    object EphemeralStorage = null,
    string Id = null,
    string InstanceMatchCriteria = null,
    string OutpostArn = null,
    string PlacementGroupArn = null,
    string Region = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null,
    string Tenancy = null,
    Ec2CapacityReservationTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservationConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservationConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservationConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservationConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservationConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservationConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservationConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservationConfig.property.availabilityZone">AvailabilityZone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/ec2_capacity_reservation#availability_zone Ec2CapacityReservation#availability_zone}. |
| <code><a href="#@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservationConfig.property.instanceCount">InstanceCount</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/ec2_capacity_reservation#instance_count Ec2CapacityReservation#instance_count}. |
| <code><a href="#@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservationConfig.property.instancePlatform">InstancePlatform</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/ec2_capacity_reservation#instance_platform Ec2CapacityReservation#instance_platform}. |
| <code><a href="#@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservationConfig.property.instanceType">InstanceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/ec2_capacity_reservation#instance_type Ec2CapacityReservation#instance_type}. |
| <code><a href="#@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservationConfig.property.ebsOptimized">EbsOptimized</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/ec2_capacity_reservation#ebs_optimized Ec2CapacityReservation#ebs_optimized}. |
| <code><a href="#@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservationConfig.property.endDate">EndDate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/ec2_capacity_reservation#end_date Ec2CapacityReservation#end_date}. |
| <code><a href="#@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservationConfig.property.endDateType">EndDateType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/ec2_capacity_reservation#end_date_type Ec2CapacityReservation#end_date_type}. |
| <code><a href="#@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservationConfig.property.ephemeralStorage">EphemeralStorage</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/ec2_capacity_reservation#ephemeral_storage Ec2CapacityReservation#ephemeral_storage}. |
| <code><a href="#@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservationConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/ec2_capacity_reservation#id Ec2CapacityReservation#id}. |
| <code><a href="#@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservationConfig.property.instanceMatchCriteria">InstanceMatchCriteria</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/ec2_capacity_reservation#instance_match_criteria Ec2CapacityReservation#instance_match_criteria}. |
| <code><a href="#@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservationConfig.property.outpostArn">OutpostArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/ec2_capacity_reservation#outpost_arn Ec2CapacityReservation#outpost_arn}. |
| <code><a href="#@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservationConfig.property.placementGroupArn">PlacementGroupArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/ec2_capacity_reservation#placement_group_arn Ec2CapacityReservation#placement_group_arn}. |
| <code><a href="#@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservationConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservationConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/ec2_capacity_reservation#tags Ec2CapacityReservation#tags}. |
| <code><a href="#@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservationConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/ec2_capacity_reservation#tags_all Ec2CapacityReservation#tags_all}. |
| <code><a href="#@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservationConfig.property.tenancy">Tenancy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/ec2_capacity_reservation#tenancy Ec2CapacityReservation#tenancy}. |
| <code><a href="#@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservationConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservationTimeouts">Ec2CapacityReservationTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservationConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservationConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservationConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AvailabilityZone`<sup>Required</sup> <a name="AvailabilityZone" id="@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservationConfig.property.availabilityZone"></a>

```csharp
public string AvailabilityZone { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/ec2_capacity_reservation#availability_zone Ec2CapacityReservation#availability_zone}.

---

##### `InstanceCount`<sup>Required</sup> <a name="InstanceCount" id="@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservationConfig.property.instanceCount"></a>

```csharp
public double InstanceCount { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/ec2_capacity_reservation#instance_count Ec2CapacityReservation#instance_count}.

---

##### `InstancePlatform`<sup>Required</sup> <a name="InstancePlatform" id="@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservationConfig.property.instancePlatform"></a>

```csharp
public string InstancePlatform { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/ec2_capacity_reservation#instance_platform Ec2CapacityReservation#instance_platform}.

---

##### `InstanceType`<sup>Required</sup> <a name="InstanceType" id="@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservationConfig.property.instanceType"></a>

```csharp
public string InstanceType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/ec2_capacity_reservation#instance_type Ec2CapacityReservation#instance_type}.

---

##### `EbsOptimized`<sup>Optional</sup> <a name="EbsOptimized" id="@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservationConfig.property.ebsOptimized"></a>

```csharp
public object EbsOptimized { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/ec2_capacity_reservation#ebs_optimized Ec2CapacityReservation#ebs_optimized}.

---

##### `EndDate`<sup>Optional</sup> <a name="EndDate" id="@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservationConfig.property.endDate"></a>

```csharp
public string EndDate { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/ec2_capacity_reservation#end_date Ec2CapacityReservation#end_date}.

---

##### `EndDateType`<sup>Optional</sup> <a name="EndDateType" id="@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservationConfig.property.endDateType"></a>

```csharp
public string EndDateType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/ec2_capacity_reservation#end_date_type Ec2CapacityReservation#end_date_type}.

---

##### `EphemeralStorage`<sup>Optional</sup> <a name="EphemeralStorage" id="@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservationConfig.property.ephemeralStorage"></a>

```csharp
public object EphemeralStorage { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/ec2_capacity_reservation#ephemeral_storage Ec2CapacityReservation#ephemeral_storage}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservationConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/ec2_capacity_reservation#id Ec2CapacityReservation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InstanceMatchCriteria`<sup>Optional</sup> <a name="InstanceMatchCriteria" id="@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservationConfig.property.instanceMatchCriteria"></a>

```csharp
public string InstanceMatchCriteria { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/ec2_capacity_reservation#instance_match_criteria Ec2CapacityReservation#instance_match_criteria}.

---

##### `OutpostArn`<sup>Optional</sup> <a name="OutpostArn" id="@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservationConfig.property.outpostArn"></a>

```csharp
public string OutpostArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/ec2_capacity_reservation#outpost_arn Ec2CapacityReservation#outpost_arn}.

---

##### `PlacementGroupArn`<sup>Optional</sup> <a name="PlacementGroupArn" id="@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservationConfig.property.placementGroupArn"></a>

```csharp
public string PlacementGroupArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/ec2_capacity_reservation#placement_group_arn Ec2CapacityReservation#placement_group_arn}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservationConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/ec2_capacity_reservation#region Ec2CapacityReservation#region}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservationConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/ec2_capacity_reservation#tags Ec2CapacityReservation#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservationConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/ec2_capacity_reservation#tags_all Ec2CapacityReservation#tags_all}.

---

##### `Tenancy`<sup>Optional</sup> <a name="Tenancy" id="@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservationConfig.property.tenancy"></a>

```csharp
public string Tenancy { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/ec2_capacity_reservation#tenancy Ec2CapacityReservation#tenancy}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservationConfig.property.timeouts"></a>

```csharp
public Ec2CapacityReservationTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservationTimeouts">Ec2CapacityReservationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/ec2_capacity_reservation#timeouts Ec2CapacityReservation#timeouts}

---

### Ec2CapacityReservationTimeouts <a name="Ec2CapacityReservationTimeouts" id="@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservationTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Ec2CapacityReservationTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservationTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/ec2_capacity_reservation#create Ec2CapacityReservation#create}. |
| <code><a href="#@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservationTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/ec2_capacity_reservation#delete Ec2CapacityReservation#delete}. |
| <code><a href="#@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservationTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/ec2_capacity_reservation#update Ec2CapacityReservation#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservationTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/ec2_capacity_reservation#create Ec2CapacityReservation#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservationTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/ec2_capacity_reservation#delete Ec2CapacityReservation#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservationTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/ec2_capacity_reservation#update Ec2CapacityReservation#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### Ec2CapacityReservationTimeoutsOutputReference <a name="Ec2CapacityReservationTimeoutsOutputReference" id="@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservationTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Ec2CapacityReservationTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservationTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservationTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservationTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservationTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservationTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservationTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservationTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservationTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservationTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservationTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservationTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservationTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservationTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservationTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservationTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservationTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservationTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservationTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservationTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservationTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservationTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservationTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservationTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservationTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservationTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservationTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservationTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservationTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservationTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservationTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservationTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservationTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservationTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservationTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservationTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservationTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservationTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservationTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservationTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservationTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservationTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservationTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservationTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservationTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservationTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservationTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservationTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservationTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservationTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.ec2CapacityReservation.Ec2CapacityReservationTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



