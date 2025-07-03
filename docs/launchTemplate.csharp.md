# `launchTemplate` Submodule <a name="`launchTemplate` Submodule" id="@cdktf/provider-aws.launchTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LaunchTemplate <a name="LaunchTemplate" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template aws_launch_template}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LaunchTemplate(Construct Scope, string Id, LaunchTemplateConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig">LaunchTemplateConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig">LaunchTemplateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.putBlockDeviceMappings">PutBlockDeviceMappings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.putCapacityReservationSpecification">PutCapacityReservationSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.putCpuOptions">PutCpuOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.putCreditSpecification">PutCreditSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.putEnclaveOptions">PutEnclaveOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.putHibernationOptions">PutHibernationOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.putIamInstanceProfile">PutIamInstanceProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.putInstanceMarketOptions">PutInstanceMarketOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.putInstanceRequirements">PutInstanceRequirements</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.putLicenseSpecification">PutLicenseSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.putMaintenanceOptions">PutMaintenanceOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.putMetadataOptions">PutMetadataOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.putMonitoring">PutMonitoring</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.putNetworkInterfaces">PutNetworkInterfaces</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.putPlacement">PutPlacement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.putPrivateDnsNameOptions">PutPrivateDnsNameOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.putTagSpecifications">PutTagSpecifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.resetBlockDeviceMappings">ResetBlockDeviceMappings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.resetCapacityReservationSpecification">ResetCapacityReservationSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.resetCpuOptions">ResetCpuOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.resetCreditSpecification">ResetCreditSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.resetDefaultVersion">ResetDefaultVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.resetDisableApiStop">ResetDisableApiStop</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.resetDisableApiTermination">ResetDisableApiTermination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.resetEbsOptimized">ResetEbsOptimized</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.resetEnclaveOptions">ResetEnclaveOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.resetHibernationOptions">ResetHibernationOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.resetIamInstanceProfile">ResetIamInstanceProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.resetImageId">ResetImageId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.resetInstanceInitiatedShutdownBehavior">ResetInstanceInitiatedShutdownBehavior</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.resetInstanceMarketOptions">ResetInstanceMarketOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.resetInstanceRequirements">ResetInstanceRequirements</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.resetInstanceType">ResetInstanceType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.resetKernelId">ResetKernelId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.resetKeyName">ResetKeyName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.resetLicenseSpecification">ResetLicenseSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.resetMaintenanceOptions">ResetMaintenanceOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.resetMetadataOptions">ResetMetadataOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.resetMonitoring">ResetMonitoring</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.resetNamePrefix">ResetNamePrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.resetNetworkInterfaces">ResetNetworkInterfaces</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.resetPlacement">ResetPlacement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.resetPrivateDnsNameOptions">ResetPrivateDnsNameOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.resetRamDiskId">ResetRamDiskId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.resetSecurityGroupNames">ResetSecurityGroupNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.resetTagSpecifications">ResetTagSpecifications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.resetUpdateDefaultVersion">ResetUpdateDefaultVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.resetUserData">ResetUserData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.resetVpcSecurityGroupIds">ResetVpcSecurityGroupIds</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutBlockDeviceMappings` <a name="PutBlockDeviceMappings" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.putBlockDeviceMappings"></a>

```csharp
private void PutBlockDeviceMappings(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.putBlockDeviceMappings.parameter.value"></a>

- *Type:* object

---

##### `PutCapacityReservationSpecification` <a name="PutCapacityReservationSpecification" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.putCapacityReservationSpecification"></a>

```csharp
private void PutCapacityReservationSpecification(LaunchTemplateCapacityReservationSpecification Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.putCapacityReservationSpecification.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecification">LaunchTemplateCapacityReservationSpecification</a>

---

##### `PutCpuOptions` <a name="PutCpuOptions" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.putCpuOptions"></a>

```csharp
private void PutCpuOptions(LaunchTemplateCpuOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.putCpuOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCpuOptions">LaunchTemplateCpuOptions</a>

---

##### `PutCreditSpecification` <a name="PutCreditSpecification" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.putCreditSpecification"></a>

```csharp
private void PutCreditSpecification(LaunchTemplateCreditSpecification Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.putCreditSpecification.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCreditSpecification">LaunchTemplateCreditSpecification</a>

---

##### `PutEnclaveOptions` <a name="PutEnclaveOptions" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.putEnclaveOptions"></a>

```csharp
private void PutEnclaveOptions(LaunchTemplateEnclaveOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.putEnclaveOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateEnclaveOptions">LaunchTemplateEnclaveOptions</a>

---

##### `PutHibernationOptions` <a name="PutHibernationOptions" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.putHibernationOptions"></a>

```csharp
private void PutHibernationOptions(LaunchTemplateHibernationOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.putHibernationOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateHibernationOptions">LaunchTemplateHibernationOptions</a>

---

##### `PutIamInstanceProfile` <a name="PutIamInstanceProfile" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.putIamInstanceProfile"></a>

```csharp
private void PutIamInstanceProfile(LaunchTemplateIamInstanceProfile Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.putIamInstanceProfile.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateIamInstanceProfile">LaunchTemplateIamInstanceProfile</a>

---

##### `PutInstanceMarketOptions` <a name="PutInstanceMarketOptions" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.putInstanceMarketOptions"></a>

```csharp
private void PutInstanceMarketOptions(LaunchTemplateInstanceMarketOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.putInstanceMarketOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptions">LaunchTemplateInstanceMarketOptions</a>

---

##### `PutInstanceRequirements` <a name="PutInstanceRequirements" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.putInstanceRequirements"></a>

```csharp
private void PutInstanceRequirements(LaunchTemplateInstanceRequirements Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.putInstanceRequirements.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirements">LaunchTemplateInstanceRequirements</a>

---

##### `PutLicenseSpecification` <a name="PutLicenseSpecification" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.putLicenseSpecification"></a>

```csharp
private void PutLicenseSpecification(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.putLicenseSpecification.parameter.value"></a>

- *Type:* object

---

##### `PutMaintenanceOptions` <a name="PutMaintenanceOptions" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.putMaintenanceOptions"></a>

```csharp
private void PutMaintenanceOptions(LaunchTemplateMaintenanceOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.putMaintenanceOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMaintenanceOptions">LaunchTemplateMaintenanceOptions</a>

---

##### `PutMetadataOptions` <a name="PutMetadataOptions" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.putMetadataOptions"></a>

```csharp
private void PutMetadataOptions(LaunchTemplateMetadataOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.putMetadataOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptions">LaunchTemplateMetadataOptions</a>

---

##### `PutMonitoring` <a name="PutMonitoring" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.putMonitoring"></a>

```csharp
private void PutMonitoring(LaunchTemplateMonitoring Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.putMonitoring.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMonitoring">LaunchTemplateMonitoring</a>

---

##### `PutNetworkInterfaces` <a name="PutNetworkInterfaces" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.putNetworkInterfaces"></a>

```csharp
private void PutNetworkInterfaces(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.putNetworkInterfaces.parameter.value"></a>

- *Type:* object

---

##### `PutPlacement` <a name="PutPlacement" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.putPlacement"></a>

```csharp
private void PutPlacement(LaunchTemplatePlacement Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.putPlacement.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacement">LaunchTemplatePlacement</a>

---

##### `PutPrivateDnsNameOptions` <a name="PutPrivateDnsNameOptions" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.putPrivateDnsNameOptions"></a>

```csharp
private void PutPrivateDnsNameOptions(LaunchTemplatePrivateDnsNameOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.putPrivateDnsNameOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptions">LaunchTemplatePrivateDnsNameOptions</a>

---

##### `PutTagSpecifications` <a name="PutTagSpecifications" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.putTagSpecifications"></a>

```csharp
private void PutTagSpecifications(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.putTagSpecifications.parameter.value"></a>

- *Type:* object

---

##### `ResetBlockDeviceMappings` <a name="ResetBlockDeviceMappings" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.resetBlockDeviceMappings"></a>

```csharp
private void ResetBlockDeviceMappings()
```

##### `ResetCapacityReservationSpecification` <a name="ResetCapacityReservationSpecification" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.resetCapacityReservationSpecification"></a>

```csharp
private void ResetCapacityReservationSpecification()
```

##### `ResetCpuOptions` <a name="ResetCpuOptions" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.resetCpuOptions"></a>

```csharp
private void ResetCpuOptions()
```

##### `ResetCreditSpecification` <a name="ResetCreditSpecification" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.resetCreditSpecification"></a>

```csharp
private void ResetCreditSpecification()
```

##### `ResetDefaultVersion` <a name="ResetDefaultVersion" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.resetDefaultVersion"></a>

```csharp
private void ResetDefaultVersion()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDisableApiStop` <a name="ResetDisableApiStop" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.resetDisableApiStop"></a>

```csharp
private void ResetDisableApiStop()
```

##### `ResetDisableApiTermination` <a name="ResetDisableApiTermination" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.resetDisableApiTermination"></a>

```csharp
private void ResetDisableApiTermination()
```

##### `ResetEbsOptimized` <a name="ResetEbsOptimized" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.resetEbsOptimized"></a>

```csharp
private void ResetEbsOptimized()
```

##### `ResetEnclaveOptions` <a name="ResetEnclaveOptions" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.resetEnclaveOptions"></a>

```csharp
private void ResetEnclaveOptions()
```

##### `ResetHibernationOptions` <a name="ResetHibernationOptions" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.resetHibernationOptions"></a>

```csharp
private void ResetHibernationOptions()
```

##### `ResetIamInstanceProfile` <a name="ResetIamInstanceProfile" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.resetIamInstanceProfile"></a>

```csharp
private void ResetIamInstanceProfile()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetImageId` <a name="ResetImageId" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.resetImageId"></a>

```csharp
private void ResetImageId()
```

##### `ResetInstanceInitiatedShutdownBehavior` <a name="ResetInstanceInitiatedShutdownBehavior" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.resetInstanceInitiatedShutdownBehavior"></a>

```csharp
private void ResetInstanceInitiatedShutdownBehavior()
```

##### `ResetInstanceMarketOptions` <a name="ResetInstanceMarketOptions" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.resetInstanceMarketOptions"></a>

```csharp
private void ResetInstanceMarketOptions()
```

##### `ResetInstanceRequirements` <a name="ResetInstanceRequirements" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.resetInstanceRequirements"></a>

```csharp
private void ResetInstanceRequirements()
```

##### `ResetInstanceType` <a name="ResetInstanceType" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.resetInstanceType"></a>

```csharp
private void ResetInstanceType()
```

##### `ResetKernelId` <a name="ResetKernelId" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.resetKernelId"></a>

```csharp
private void ResetKernelId()
```

##### `ResetKeyName` <a name="ResetKeyName" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.resetKeyName"></a>

```csharp
private void ResetKeyName()
```

##### `ResetLicenseSpecification` <a name="ResetLicenseSpecification" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.resetLicenseSpecification"></a>

```csharp
private void ResetLicenseSpecification()
```

##### `ResetMaintenanceOptions` <a name="ResetMaintenanceOptions" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.resetMaintenanceOptions"></a>

```csharp
private void ResetMaintenanceOptions()
```

##### `ResetMetadataOptions` <a name="ResetMetadataOptions" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.resetMetadataOptions"></a>

```csharp
private void ResetMetadataOptions()
```

##### `ResetMonitoring` <a name="ResetMonitoring" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.resetMonitoring"></a>

```csharp
private void ResetMonitoring()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetNamePrefix` <a name="ResetNamePrefix" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.resetNamePrefix"></a>

```csharp
private void ResetNamePrefix()
```

##### `ResetNetworkInterfaces` <a name="ResetNetworkInterfaces" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.resetNetworkInterfaces"></a>

```csharp
private void ResetNetworkInterfaces()
```

##### `ResetPlacement` <a name="ResetPlacement" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.resetPlacement"></a>

```csharp
private void ResetPlacement()
```

##### `ResetPrivateDnsNameOptions` <a name="ResetPrivateDnsNameOptions" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.resetPrivateDnsNameOptions"></a>

```csharp
private void ResetPrivateDnsNameOptions()
```

##### `ResetRamDiskId` <a name="ResetRamDiskId" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.resetRamDiskId"></a>

```csharp
private void ResetRamDiskId()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetSecurityGroupNames` <a name="ResetSecurityGroupNames" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.resetSecurityGroupNames"></a>

```csharp
private void ResetSecurityGroupNames()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

##### `ResetTagSpecifications` <a name="ResetTagSpecifications" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.resetTagSpecifications"></a>

```csharp
private void ResetTagSpecifications()
```

##### `ResetUpdateDefaultVersion` <a name="ResetUpdateDefaultVersion" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.resetUpdateDefaultVersion"></a>

```csharp
private void ResetUpdateDefaultVersion()
```

##### `ResetUserData` <a name="ResetUserData" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.resetUserData"></a>

```csharp
private void ResetUserData()
```

##### `ResetVpcSecurityGroupIds` <a name="ResetVpcSecurityGroupIds" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.resetVpcSecurityGroupIds"></a>

```csharp
private void ResetVpcSecurityGroupIds()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a LaunchTemplate resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

LaunchTemplate.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

LaunchTemplate.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

LaunchTemplate.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

LaunchTemplate.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a LaunchTemplate resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the LaunchTemplate to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing LaunchTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the LaunchTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.blockDeviceMappings">BlockDeviceMappings</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsList">LaunchTemplateBlockDeviceMappingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.capacityReservationSpecification">CapacityReservationSpecification</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference">LaunchTemplateCapacityReservationSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.cpuOptions">CpuOptions</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCpuOptionsOutputReference">LaunchTemplateCpuOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.creditSpecification">CreditSpecification</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCreditSpecificationOutputReference">LaunchTemplateCreditSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.enclaveOptions">EnclaveOptions</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateEnclaveOptionsOutputReference">LaunchTemplateEnclaveOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.hibernationOptions">HibernationOptions</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateHibernationOptionsOutputReference">LaunchTemplateHibernationOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.iamInstanceProfile">IamInstanceProfile</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference">LaunchTemplateIamInstanceProfileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.instanceMarketOptions">InstanceMarketOptions</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference">LaunchTemplateInstanceMarketOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.instanceRequirements">InstanceRequirements</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference">LaunchTemplateInstanceRequirementsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.latestVersion">LatestVersion</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.licenseSpecification">LicenseSpecification</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationList">LaunchTemplateLicenseSpecificationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.maintenanceOptions">MaintenanceOptions</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMaintenanceOptionsOutputReference">LaunchTemplateMaintenanceOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.metadataOptions">MetadataOptions</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptionsOutputReference">LaunchTemplateMetadataOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.monitoring">Monitoring</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMonitoringOutputReference">LaunchTemplateMonitoringOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.networkInterfaces">NetworkInterfaces</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesList">LaunchTemplateNetworkInterfacesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.placement">Placement</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference">LaunchTemplatePlacementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.privateDnsNameOptions">PrivateDnsNameOptions</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptionsOutputReference">LaunchTemplatePrivateDnsNameOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.tagSpecifications">TagSpecifications</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsList">LaunchTemplateTagSpecificationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.blockDeviceMappingsInput">BlockDeviceMappingsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.capacityReservationSpecificationInput">CapacityReservationSpecificationInput</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecification">LaunchTemplateCapacityReservationSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.cpuOptionsInput">CpuOptionsInput</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCpuOptions">LaunchTemplateCpuOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.creditSpecificationInput">CreditSpecificationInput</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCreditSpecification">LaunchTemplateCreditSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.defaultVersionInput">DefaultVersionInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.disableApiStopInput">DisableApiStopInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.disableApiTerminationInput">DisableApiTerminationInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.ebsOptimizedInput">EbsOptimizedInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.enclaveOptionsInput">EnclaveOptionsInput</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateEnclaveOptions">LaunchTemplateEnclaveOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.hibernationOptionsInput">HibernationOptionsInput</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateHibernationOptions">LaunchTemplateHibernationOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.iamInstanceProfileInput">IamInstanceProfileInput</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateIamInstanceProfile">LaunchTemplateIamInstanceProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.imageIdInput">ImageIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.instanceInitiatedShutdownBehaviorInput">InstanceInitiatedShutdownBehaviorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.instanceMarketOptionsInput">InstanceMarketOptionsInput</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptions">LaunchTemplateInstanceMarketOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.instanceRequirementsInput">InstanceRequirementsInput</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirements">LaunchTemplateInstanceRequirements</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.instanceTypeInput">InstanceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.kernelIdInput">KernelIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.keyNameInput">KeyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.licenseSpecificationInput">LicenseSpecificationInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.maintenanceOptionsInput">MaintenanceOptionsInput</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMaintenanceOptions">LaunchTemplateMaintenanceOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.metadataOptionsInput">MetadataOptionsInput</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptions">LaunchTemplateMetadataOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.monitoringInput">MonitoringInput</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMonitoring">LaunchTemplateMonitoring</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.namePrefixInput">NamePrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.networkInterfacesInput">NetworkInterfacesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.placementInput">PlacementInput</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacement">LaunchTemplatePlacement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.privateDnsNameOptionsInput">PrivateDnsNameOptionsInput</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptions">LaunchTemplatePrivateDnsNameOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.ramDiskIdInput">RamDiskIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.securityGroupNamesInput">SecurityGroupNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.tagSpecificationsInput">TagSpecificationsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.updateDefaultVersionInput">UpdateDefaultVersionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.userDataInput">UserDataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.vpcSecurityGroupIdsInput">VpcSecurityGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.defaultVersion">DefaultVersion</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.disableApiStop">DisableApiStop</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.disableApiTermination">DisableApiTermination</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.ebsOptimized">EbsOptimized</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.imageId">ImageId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.instanceInitiatedShutdownBehavior">InstanceInitiatedShutdownBehavior</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.instanceType">InstanceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.kernelId">KernelId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.keyName">KeyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.namePrefix">NamePrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.ramDiskId">RamDiskId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.securityGroupNames">SecurityGroupNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.updateDefaultVersion">UpdateDefaultVersion</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.userData">UserData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.vpcSecurityGroupIds">VpcSecurityGroupIds</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `BlockDeviceMappings`<sup>Required</sup> <a name="BlockDeviceMappings" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.blockDeviceMappings"></a>

```csharp
public LaunchTemplateBlockDeviceMappingsList BlockDeviceMappings { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsList">LaunchTemplateBlockDeviceMappingsList</a>

---

##### `CapacityReservationSpecification`<sup>Required</sup> <a name="CapacityReservationSpecification" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.capacityReservationSpecification"></a>

```csharp
public LaunchTemplateCapacityReservationSpecificationOutputReference CapacityReservationSpecification { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference">LaunchTemplateCapacityReservationSpecificationOutputReference</a>

---

##### `CpuOptions`<sup>Required</sup> <a name="CpuOptions" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.cpuOptions"></a>

```csharp
public LaunchTemplateCpuOptionsOutputReference CpuOptions { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCpuOptionsOutputReference">LaunchTemplateCpuOptionsOutputReference</a>

---

##### `CreditSpecification`<sup>Required</sup> <a name="CreditSpecification" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.creditSpecification"></a>

```csharp
public LaunchTemplateCreditSpecificationOutputReference CreditSpecification { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCreditSpecificationOutputReference">LaunchTemplateCreditSpecificationOutputReference</a>

---

##### `EnclaveOptions`<sup>Required</sup> <a name="EnclaveOptions" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.enclaveOptions"></a>

```csharp
public LaunchTemplateEnclaveOptionsOutputReference EnclaveOptions { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateEnclaveOptionsOutputReference">LaunchTemplateEnclaveOptionsOutputReference</a>

---

##### `HibernationOptions`<sup>Required</sup> <a name="HibernationOptions" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.hibernationOptions"></a>

```csharp
public LaunchTemplateHibernationOptionsOutputReference HibernationOptions { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateHibernationOptionsOutputReference">LaunchTemplateHibernationOptionsOutputReference</a>

---

##### `IamInstanceProfile`<sup>Required</sup> <a name="IamInstanceProfile" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.iamInstanceProfile"></a>

```csharp
public LaunchTemplateIamInstanceProfileOutputReference IamInstanceProfile { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference">LaunchTemplateIamInstanceProfileOutputReference</a>

---

##### `InstanceMarketOptions`<sup>Required</sup> <a name="InstanceMarketOptions" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.instanceMarketOptions"></a>

```csharp
public LaunchTemplateInstanceMarketOptionsOutputReference InstanceMarketOptions { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference">LaunchTemplateInstanceMarketOptionsOutputReference</a>

---

##### `InstanceRequirements`<sup>Required</sup> <a name="InstanceRequirements" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.instanceRequirements"></a>

```csharp
public LaunchTemplateInstanceRequirementsOutputReference InstanceRequirements { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference">LaunchTemplateInstanceRequirementsOutputReference</a>

---

##### `LatestVersion`<sup>Required</sup> <a name="LatestVersion" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.latestVersion"></a>

```csharp
public double LatestVersion { get; }
```

- *Type:* double

---

##### `LicenseSpecification`<sup>Required</sup> <a name="LicenseSpecification" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.licenseSpecification"></a>

```csharp
public LaunchTemplateLicenseSpecificationList LicenseSpecification { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationList">LaunchTemplateLicenseSpecificationList</a>

---

##### `MaintenanceOptions`<sup>Required</sup> <a name="MaintenanceOptions" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.maintenanceOptions"></a>

```csharp
public LaunchTemplateMaintenanceOptionsOutputReference MaintenanceOptions { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMaintenanceOptionsOutputReference">LaunchTemplateMaintenanceOptionsOutputReference</a>

---

##### `MetadataOptions`<sup>Required</sup> <a name="MetadataOptions" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.metadataOptions"></a>

```csharp
public LaunchTemplateMetadataOptionsOutputReference MetadataOptions { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptionsOutputReference">LaunchTemplateMetadataOptionsOutputReference</a>

---

##### `Monitoring`<sup>Required</sup> <a name="Monitoring" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.monitoring"></a>

```csharp
public LaunchTemplateMonitoringOutputReference Monitoring { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMonitoringOutputReference">LaunchTemplateMonitoringOutputReference</a>

---

##### `NetworkInterfaces`<sup>Required</sup> <a name="NetworkInterfaces" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.networkInterfaces"></a>

```csharp
public LaunchTemplateNetworkInterfacesList NetworkInterfaces { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesList">LaunchTemplateNetworkInterfacesList</a>

---

##### `Placement`<sup>Required</sup> <a name="Placement" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.placement"></a>

```csharp
public LaunchTemplatePlacementOutputReference Placement { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference">LaunchTemplatePlacementOutputReference</a>

---

##### `PrivateDnsNameOptions`<sup>Required</sup> <a name="PrivateDnsNameOptions" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.privateDnsNameOptions"></a>

```csharp
public LaunchTemplatePrivateDnsNameOptionsOutputReference PrivateDnsNameOptions { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptionsOutputReference">LaunchTemplatePrivateDnsNameOptionsOutputReference</a>

---

##### `TagSpecifications`<sup>Required</sup> <a name="TagSpecifications" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.tagSpecifications"></a>

```csharp
public LaunchTemplateTagSpecificationsList TagSpecifications { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsList">LaunchTemplateTagSpecificationsList</a>

---

##### `BlockDeviceMappingsInput`<sup>Optional</sup> <a name="BlockDeviceMappingsInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.blockDeviceMappingsInput"></a>

```csharp
public object BlockDeviceMappingsInput { get; }
```

- *Type:* object

---

##### `CapacityReservationSpecificationInput`<sup>Optional</sup> <a name="CapacityReservationSpecificationInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.capacityReservationSpecificationInput"></a>

```csharp
public LaunchTemplateCapacityReservationSpecification CapacityReservationSpecificationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecification">LaunchTemplateCapacityReservationSpecification</a>

---

##### `CpuOptionsInput`<sup>Optional</sup> <a name="CpuOptionsInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.cpuOptionsInput"></a>

```csharp
public LaunchTemplateCpuOptions CpuOptionsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCpuOptions">LaunchTemplateCpuOptions</a>

---

##### `CreditSpecificationInput`<sup>Optional</sup> <a name="CreditSpecificationInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.creditSpecificationInput"></a>

```csharp
public LaunchTemplateCreditSpecification CreditSpecificationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCreditSpecification">LaunchTemplateCreditSpecification</a>

---

##### `DefaultVersionInput`<sup>Optional</sup> <a name="DefaultVersionInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.defaultVersionInput"></a>

```csharp
public double DefaultVersionInput { get; }
```

- *Type:* double

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DisableApiStopInput`<sup>Optional</sup> <a name="DisableApiStopInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.disableApiStopInput"></a>

```csharp
public object DisableApiStopInput { get; }
```

- *Type:* object

---

##### `DisableApiTerminationInput`<sup>Optional</sup> <a name="DisableApiTerminationInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.disableApiTerminationInput"></a>

```csharp
public object DisableApiTerminationInput { get; }
```

- *Type:* object

---

##### `EbsOptimizedInput`<sup>Optional</sup> <a name="EbsOptimizedInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.ebsOptimizedInput"></a>

```csharp
public string EbsOptimizedInput { get; }
```

- *Type:* string

---

##### `EnclaveOptionsInput`<sup>Optional</sup> <a name="EnclaveOptionsInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.enclaveOptionsInput"></a>

```csharp
public LaunchTemplateEnclaveOptions EnclaveOptionsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateEnclaveOptions">LaunchTemplateEnclaveOptions</a>

---

##### `HibernationOptionsInput`<sup>Optional</sup> <a name="HibernationOptionsInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.hibernationOptionsInput"></a>

```csharp
public LaunchTemplateHibernationOptions HibernationOptionsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateHibernationOptions">LaunchTemplateHibernationOptions</a>

---

##### `IamInstanceProfileInput`<sup>Optional</sup> <a name="IamInstanceProfileInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.iamInstanceProfileInput"></a>

```csharp
public LaunchTemplateIamInstanceProfile IamInstanceProfileInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateIamInstanceProfile">LaunchTemplateIamInstanceProfile</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ImageIdInput`<sup>Optional</sup> <a name="ImageIdInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.imageIdInput"></a>

```csharp
public string ImageIdInput { get; }
```

- *Type:* string

---

##### `InstanceInitiatedShutdownBehaviorInput`<sup>Optional</sup> <a name="InstanceInitiatedShutdownBehaviorInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.instanceInitiatedShutdownBehaviorInput"></a>

```csharp
public string InstanceInitiatedShutdownBehaviorInput { get; }
```

- *Type:* string

---

##### `InstanceMarketOptionsInput`<sup>Optional</sup> <a name="InstanceMarketOptionsInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.instanceMarketOptionsInput"></a>

```csharp
public LaunchTemplateInstanceMarketOptions InstanceMarketOptionsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptions">LaunchTemplateInstanceMarketOptions</a>

---

##### `InstanceRequirementsInput`<sup>Optional</sup> <a name="InstanceRequirementsInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.instanceRequirementsInput"></a>

```csharp
public LaunchTemplateInstanceRequirements InstanceRequirementsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirements">LaunchTemplateInstanceRequirements</a>

---

##### `InstanceTypeInput`<sup>Optional</sup> <a name="InstanceTypeInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.instanceTypeInput"></a>

```csharp
public string InstanceTypeInput { get; }
```

- *Type:* string

---

##### `KernelIdInput`<sup>Optional</sup> <a name="KernelIdInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.kernelIdInput"></a>

```csharp
public string KernelIdInput { get; }
```

- *Type:* string

---

##### `KeyNameInput`<sup>Optional</sup> <a name="KeyNameInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.keyNameInput"></a>

```csharp
public string KeyNameInput { get; }
```

- *Type:* string

---

##### `LicenseSpecificationInput`<sup>Optional</sup> <a name="LicenseSpecificationInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.licenseSpecificationInput"></a>

```csharp
public object LicenseSpecificationInput { get; }
```

- *Type:* object

---

##### `MaintenanceOptionsInput`<sup>Optional</sup> <a name="MaintenanceOptionsInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.maintenanceOptionsInput"></a>

```csharp
public LaunchTemplateMaintenanceOptions MaintenanceOptionsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMaintenanceOptions">LaunchTemplateMaintenanceOptions</a>

---

##### `MetadataOptionsInput`<sup>Optional</sup> <a name="MetadataOptionsInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.metadataOptionsInput"></a>

```csharp
public LaunchTemplateMetadataOptions MetadataOptionsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptions">LaunchTemplateMetadataOptions</a>

---

##### `MonitoringInput`<sup>Optional</sup> <a name="MonitoringInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.monitoringInput"></a>

```csharp
public LaunchTemplateMonitoring MonitoringInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMonitoring">LaunchTemplateMonitoring</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NamePrefixInput`<sup>Optional</sup> <a name="NamePrefixInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.namePrefixInput"></a>

```csharp
public string NamePrefixInput { get; }
```

- *Type:* string

---

##### `NetworkInterfacesInput`<sup>Optional</sup> <a name="NetworkInterfacesInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.networkInterfacesInput"></a>

```csharp
public object NetworkInterfacesInput { get; }
```

- *Type:* object

---

##### `PlacementInput`<sup>Optional</sup> <a name="PlacementInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.placementInput"></a>

```csharp
public LaunchTemplatePlacement PlacementInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacement">LaunchTemplatePlacement</a>

---

##### `PrivateDnsNameOptionsInput`<sup>Optional</sup> <a name="PrivateDnsNameOptionsInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.privateDnsNameOptionsInput"></a>

```csharp
public LaunchTemplatePrivateDnsNameOptions PrivateDnsNameOptionsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptions">LaunchTemplatePrivateDnsNameOptions</a>

---

##### `RamDiskIdInput`<sup>Optional</sup> <a name="RamDiskIdInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.ramDiskIdInput"></a>

```csharp
public string RamDiskIdInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `SecurityGroupNamesInput`<sup>Optional</sup> <a name="SecurityGroupNamesInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.securityGroupNamesInput"></a>

```csharp
public string[] SecurityGroupNamesInput { get; }
```

- *Type:* string[]

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagSpecificationsInput`<sup>Optional</sup> <a name="TagSpecificationsInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.tagSpecificationsInput"></a>

```csharp
public object TagSpecificationsInput { get; }
```

- *Type:* object

---

##### `UpdateDefaultVersionInput`<sup>Optional</sup> <a name="UpdateDefaultVersionInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.updateDefaultVersionInput"></a>

```csharp
public object UpdateDefaultVersionInput { get; }
```

- *Type:* object

---

##### `UserDataInput`<sup>Optional</sup> <a name="UserDataInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.userDataInput"></a>

```csharp
public string UserDataInput { get; }
```

- *Type:* string

---

##### `VpcSecurityGroupIdsInput`<sup>Optional</sup> <a name="VpcSecurityGroupIdsInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.vpcSecurityGroupIdsInput"></a>

```csharp
public string[] VpcSecurityGroupIdsInput { get; }
```

- *Type:* string[]

---

##### `DefaultVersion`<sup>Required</sup> <a name="DefaultVersion" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.defaultVersion"></a>

```csharp
public double DefaultVersion { get; }
```

- *Type:* double

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisableApiStop`<sup>Required</sup> <a name="DisableApiStop" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.disableApiStop"></a>

```csharp
public object DisableApiStop { get; }
```

- *Type:* object

---

##### `DisableApiTermination`<sup>Required</sup> <a name="DisableApiTermination" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.disableApiTermination"></a>

```csharp
public object DisableApiTermination { get; }
```

- *Type:* object

---

##### `EbsOptimized`<sup>Required</sup> <a name="EbsOptimized" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.ebsOptimized"></a>

```csharp
public string EbsOptimized { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ImageId`<sup>Required</sup> <a name="ImageId" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.imageId"></a>

```csharp
public string ImageId { get; }
```

- *Type:* string

---

##### `InstanceInitiatedShutdownBehavior`<sup>Required</sup> <a name="InstanceInitiatedShutdownBehavior" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.instanceInitiatedShutdownBehavior"></a>

```csharp
public string InstanceInitiatedShutdownBehavior { get; }
```

- *Type:* string

---

##### `InstanceType`<sup>Required</sup> <a name="InstanceType" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.instanceType"></a>

```csharp
public string InstanceType { get; }
```

- *Type:* string

---

##### `KernelId`<sup>Required</sup> <a name="KernelId" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.kernelId"></a>

```csharp
public string KernelId { get; }
```

- *Type:* string

---

##### `KeyName`<sup>Required</sup> <a name="KeyName" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.keyName"></a>

```csharp
public string KeyName { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NamePrefix`<sup>Required</sup> <a name="NamePrefix" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.namePrefix"></a>

```csharp
public string NamePrefix { get; }
```

- *Type:* string

---

##### `RamDiskId`<sup>Required</sup> <a name="RamDiskId" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.ramDiskId"></a>

```csharp
public string RamDiskId { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `SecurityGroupNames`<sup>Required</sup> <a name="SecurityGroupNames" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.securityGroupNames"></a>

```csharp
public string[] SecurityGroupNames { get; }
```

- *Type:* string[]

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `UpdateDefaultVersion`<sup>Required</sup> <a name="UpdateDefaultVersion" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.updateDefaultVersion"></a>

```csharp
public object UpdateDefaultVersion { get; }
```

- *Type:* object

---

##### `UserData`<sup>Required</sup> <a name="UserData" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.userData"></a>

```csharp
public string UserData { get; }
```

- *Type:* string

---

##### `VpcSecurityGroupIds`<sup>Required</sup> <a name="VpcSecurityGroupIds" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.vpcSecurityGroupIds"></a>

```csharp
public string[] VpcSecurityGroupIds { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.launchTemplate.LaunchTemplate.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LaunchTemplateBlockDeviceMappings <a name="LaunchTemplateBlockDeviceMappings" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LaunchTemplateBlockDeviceMappings {
    string DeviceName = null,
    LaunchTemplateBlockDeviceMappingsEbs Ebs = null,
    string NoDevice = null,
    string VirtualName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappings.property.deviceName">DeviceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#device_name LaunchTemplate#device_name}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappings.property.ebs">Ebs</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbs">LaunchTemplateBlockDeviceMappingsEbs</a></code> | ebs block. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappings.property.noDevice">NoDevice</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#no_device LaunchTemplate#no_device}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappings.property.virtualName">VirtualName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#virtual_name LaunchTemplate#virtual_name}. |

---

##### `DeviceName`<sup>Optional</sup> <a name="DeviceName" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappings.property.deviceName"></a>

```csharp
public string DeviceName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#device_name LaunchTemplate#device_name}.

---

##### `Ebs`<sup>Optional</sup> <a name="Ebs" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappings.property.ebs"></a>

```csharp
public LaunchTemplateBlockDeviceMappingsEbs Ebs { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbs">LaunchTemplateBlockDeviceMappingsEbs</a>

ebs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#ebs LaunchTemplate#ebs}

---

##### `NoDevice`<sup>Optional</sup> <a name="NoDevice" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappings.property.noDevice"></a>

```csharp
public string NoDevice { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#no_device LaunchTemplate#no_device}.

---

##### `VirtualName`<sup>Optional</sup> <a name="VirtualName" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappings.property.virtualName"></a>

```csharp
public string VirtualName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#virtual_name LaunchTemplate#virtual_name}.

---

### LaunchTemplateBlockDeviceMappingsEbs <a name="LaunchTemplateBlockDeviceMappingsEbs" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbs.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LaunchTemplateBlockDeviceMappingsEbs {
    string DeleteOnTermination = null,
    string Encrypted = null,
    double Iops = null,
    string KmsKeyId = null,
    string SnapshotId = null,
    double Throughput = null,
    double VolumeInitializationRate = null,
    double VolumeSize = null,
    string VolumeType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbs.property.deleteOnTermination">DeleteOnTermination</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#delete_on_termination LaunchTemplate#delete_on_termination}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbs.property.encrypted">Encrypted</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#encrypted LaunchTemplate#encrypted}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbs.property.iops">Iops</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#iops LaunchTemplate#iops}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbs.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#kms_key_id LaunchTemplate#kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbs.property.snapshotId">SnapshotId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#snapshot_id LaunchTemplate#snapshot_id}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbs.property.throughput">Throughput</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#throughput LaunchTemplate#throughput}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbs.property.volumeInitializationRate">VolumeInitializationRate</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#volume_initialization_rate LaunchTemplate#volume_initialization_rate}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbs.property.volumeSize">VolumeSize</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#volume_size LaunchTemplate#volume_size}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbs.property.volumeType">VolumeType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#volume_type LaunchTemplate#volume_type}. |

---

##### `DeleteOnTermination`<sup>Optional</sup> <a name="DeleteOnTermination" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbs.property.deleteOnTermination"></a>

```csharp
public string DeleteOnTermination { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#delete_on_termination LaunchTemplate#delete_on_termination}.

---

##### `Encrypted`<sup>Optional</sup> <a name="Encrypted" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbs.property.encrypted"></a>

```csharp
public string Encrypted { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#encrypted LaunchTemplate#encrypted}.

---

##### `Iops`<sup>Optional</sup> <a name="Iops" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbs.property.iops"></a>

```csharp
public double Iops { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#iops LaunchTemplate#iops}.

---

##### `KmsKeyId`<sup>Optional</sup> <a name="KmsKeyId" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbs.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#kms_key_id LaunchTemplate#kms_key_id}.

---

##### `SnapshotId`<sup>Optional</sup> <a name="SnapshotId" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbs.property.snapshotId"></a>

```csharp
public string SnapshotId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#snapshot_id LaunchTemplate#snapshot_id}.

---

##### `Throughput`<sup>Optional</sup> <a name="Throughput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbs.property.throughput"></a>

```csharp
public double Throughput { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#throughput LaunchTemplate#throughput}.

---

##### `VolumeInitializationRate`<sup>Optional</sup> <a name="VolumeInitializationRate" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbs.property.volumeInitializationRate"></a>

```csharp
public double VolumeInitializationRate { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#volume_initialization_rate LaunchTemplate#volume_initialization_rate}.

---

##### `VolumeSize`<sup>Optional</sup> <a name="VolumeSize" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbs.property.volumeSize"></a>

```csharp
public double VolumeSize { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#volume_size LaunchTemplate#volume_size}.

---

##### `VolumeType`<sup>Optional</sup> <a name="VolumeType" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbs.property.volumeType"></a>

```csharp
public string VolumeType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#volume_type LaunchTemplate#volume_type}.

---

### LaunchTemplateCapacityReservationSpecification <a name="LaunchTemplateCapacityReservationSpecification" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecification.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LaunchTemplateCapacityReservationSpecification {
    string CapacityReservationPreference = null,
    LaunchTemplateCapacityReservationSpecificationCapacityReservationTarget CapacityReservationTarget = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecification.property.capacityReservationPreference">CapacityReservationPreference</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#capacity_reservation_preference LaunchTemplate#capacity_reservation_preference}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecification.property.capacityReservationTarget">CapacityReservationTarget</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTarget">LaunchTemplateCapacityReservationSpecificationCapacityReservationTarget</a></code> | capacity_reservation_target block. |

---

##### `CapacityReservationPreference`<sup>Optional</sup> <a name="CapacityReservationPreference" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecification.property.capacityReservationPreference"></a>

```csharp
public string CapacityReservationPreference { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#capacity_reservation_preference LaunchTemplate#capacity_reservation_preference}.

---

##### `CapacityReservationTarget`<sup>Optional</sup> <a name="CapacityReservationTarget" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecification.property.capacityReservationTarget"></a>

```csharp
public LaunchTemplateCapacityReservationSpecificationCapacityReservationTarget CapacityReservationTarget { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTarget">LaunchTemplateCapacityReservationSpecificationCapacityReservationTarget</a>

capacity_reservation_target block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#capacity_reservation_target LaunchTemplate#capacity_reservation_target}

---

### LaunchTemplateCapacityReservationSpecificationCapacityReservationTarget <a name="LaunchTemplateCapacityReservationSpecificationCapacityReservationTarget" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTarget.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LaunchTemplateCapacityReservationSpecificationCapacityReservationTarget {
    string CapacityReservationId = null,
    string CapacityReservationResourceGroupArn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTarget.property.capacityReservationId">CapacityReservationId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#capacity_reservation_id LaunchTemplate#capacity_reservation_id}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTarget.property.capacityReservationResourceGroupArn">CapacityReservationResourceGroupArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#capacity_reservation_resource_group_arn LaunchTemplate#capacity_reservation_resource_group_arn}. |

---

##### `CapacityReservationId`<sup>Optional</sup> <a name="CapacityReservationId" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTarget.property.capacityReservationId"></a>

```csharp
public string CapacityReservationId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#capacity_reservation_id LaunchTemplate#capacity_reservation_id}.

---

##### `CapacityReservationResourceGroupArn`<sup>Optional</sup> <a name="CapacityReservationResourceGroupArn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTarget.property.capacityReservationResourceGroupArn"></a>

```csharp
public string CapacityReservationResourceGroupArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#capacity_reservation_resource_group_arn LaunchTemplate#capacity_reservation_resource_group_arn}.

---

### LaunchTemplateConfig <a name="LaunchTemplateConfig" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LaunchTemplateConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    object BlockDeviceMappings = null,
    LaunchTemplateCapacityReservationSpecification CapacityReservationSpecification = null,
    LaunchTemplateCpuOptions CpuOptions = null,
    LaunchTemplateCreditSpecification CreditSpecification = null,
    double DefaultVersion = null,
    string Description = null,
    object DisableApiStop = null,
    object DisableApiTermination = null,
    string EbsOptimized = null,
    LaunchTemplateEnclaveOptions EnclaveOptions = null,
    LaunchTemplateHibernationOptions HibernationOptions = null,
    LaunchTemplateIamInstanceProfile IamInstanceProfile = null,
    string Id = null,
    string ImageId = null,
    string InstanceInitiatedShutdownBehavior = null,
    LaunchTemplateInstanceMarketOptions InstanceMarketOptions = null,
    LaunchTemplateInstanceRequirements InstanceRequirements = null,
    string InstanceType = null,
    string KernelId = null,
    string KeyName = null,
    object LicenseSpecification = null,
    LaunchTemplateMaintenanceOptions MaintenanceOptions = null,
    LaunchTemplateMetadataOptions MetadataOptions = null,
    LaunchTemplateMonitoring Monitoring = null,
    string Name = null,
    string NamePrefix = null,
    object NetworkInterfaces = null,
    LaunchTemplatePlacement Placement = null,
    LaunchTemplatePrivateDnsNameOptions PrivateDnsNameOptions = null,
    string RamDiskId = null,
    string Region = null,
    string[] SecurityGroupNames = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null,
    object TagSpecifications = null,
    object UpdateDefaultVersion = null,
    string UserData = null,
    string[] VpcSecurityGroupIds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.blockDeviceMappings">BlockDeviceMappings</a></code> | <code>object</code> | block_device_mappings block. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.capacityReservationSpecification">CapacityReservationSpecification</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecification">LaunchTemplateCapacityReservationSpecification</a></code> | capacity_reservation_specification block. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.cpuOptions">CpuOptions</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCpuOptions">LaunchTemplateCpuOptions</a></code> | cpu_options block. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.creditSpecification">CreditSpecification</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCreditSpecification">LaunchTemplateCreditSpecification</a></code> | credit_specification block. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.defaultVersion">DefaultVersion</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#default_version LaunchTemplate#default_version}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#description LaunchTemplate#description}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.disableApiStop">DisableApiStop</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#disable_api_stop LaunchTemplate#disable_api_stop}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.disableApiTermination">DisableApiTermination</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#disable_api_termination LaunchTemplate#disable_api_termination}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.ebsOptimized">EbsOptimized</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#ebs_optimized LaunchTemplate#ebs_optimized}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.enclaveOptions">EnclaveOptions</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateEnclaveOptions">LaunchTemplateEnclaveOptions</a></code> | enclave_options block. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.hibernationOptions">HibernationOptions</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateHibernationOptions">LaunchTemplateHibernationOptions</a></code> | hibernation_options block. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.iamInstanceProfile">IamInstanceProfile</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateIamInstanceProfile">LaunchTemplateIamInstanceProfile</a></code> | iam_instance_profile block. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#id LaunchTemplate#id}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.imageId">ImageId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#image_id LaunchTemplate#image_id}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.instanceInitiatedShutdownBehavior">InstanceInitiatedShutdownBehavior</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#instance_initiated_shutdown_behavior LaunchTemplate#instance_initiated_shutdown_behavior}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.instanceMarketOptions">InstanceMarketOptions</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptions">LaunchTemplateInstanceMarketOptions</a></code> | instance_market_options block. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.instanceRequirements">InstanceRequirements</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirements">LaunchTemplateInstanceRequirements</a></code> | instance_requirements block. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.instanceType">InstanceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#instance_type LaunchTemplate#instance_type}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.kernelId">KernelId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#kernel_id LaunchTemplate#kernel_id}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.keyName">KeyName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#key_name LaunchTemplate#key_name}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.licenseSpecification">LicenseSpecification</a></code> | <code>object</code> | license_specification block. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.maintenanceOptions">MaintenanceOptions</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMaintenanceOptions">LaunchTemplateMaintenanceOptions</a></code> | maintenance_options block. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.metadataOptions">MetadataOptions</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptions">LaunchTemplateMetadataOptions</a></code> | metadata_options block. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.monitoring">Monitoring</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMonitoring">LaunchTemplateMonitoring</a></code> | monitoring block. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#name LaunchTemplate#name}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.namePrefix">NamePrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#name_prefix LaunchTemplate#name_prefix}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.networkInterfaces">NetworkInterfaces</a></code> | <code>object</code> | network_interfaces block. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.placement">Placement</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacement">LaunchTemplatePlacement</a></code> | placement block. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.privateDnsNameOptions">PrivateDnsNameOptions</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptions">LaunchTemplatePrivateDnsNameOptions</a></code> | private_dns_name_options block. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.ramDiskId">RamDiskId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#ram_disk_id LaunchTemplate#ram_disk_id}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.securityGroupNames">SecurityGroupNames</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#security_group_names LaunchTemplate#security_group_names}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#tags LaunchTemplate#tags}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#tags_all LaunchTemplate#tags_all}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.tagSpecifications">TagSpecifications</a></code> | <code>object</code> | tag_specifications block. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.updateDefaultVersion">UpdateDefaultVersion</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#update_default_version LaunchTemplate#update_default_version}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.userData">UserData</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#user_data LaunchTemplate#user_data}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.vpcSecurityGroupIds">VpcSecurityGroupIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#vpc_security_group_ids LaunchTemplate#vpc_security_group_ids}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `BlockDeviceMappings`<sup>Optional</sup> <a name="BlockDeviceMappings" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.blockDeviceMappings"></a>

```csharp
public object BlockDeviceMappings { get; set; }
```

- *Type:* object

block_device_mappings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#block_device_mappings LaunchTemplate#block_device_mappings}

---

##### `CapacityReservationSpecification`<sup>Optional</sup> <a name="CapacityReservationSpecification" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.capacityReservationSpecification"></a>

```csharp
public LaunchTemplateCapacityReservationSpecification CapacityReservationSpecification { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecification">LaunchTemplateCapacityReservationSpecification</a>

capacity_reservation_specification block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#capacity_reservation_specification LaunchTemplate#capacity_reservation_specification}

---

##### `CpuOptions`<sup>Optional</sup> <a name="CpuOptions" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.cpuOptions"></a>

```csharp
public LaunchTemplateCpuOptions CpuOptions { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCpuOptions">LaunchTemplateCpuOptions</a>

cpu_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#cpu_options LaunchTemplate#cpu_options}

---

##### `CreditSpecification`<sup>Optional</sup> <a name="CreditSpecification" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.creditSpecification"></a>

```csharp
public LaunchTemplateCreditSpecification CreditSpecification { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCreditSpecification">LaunchTemplateCreditSpecification</a>

credit_specification block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#credit_specification LaunchTemplate#credit_specification}

---

##### `DefaultVersion`<sup>Optional</sup> <a name="DefaultVersion" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.defaultVersion"></a>

```csharp
public double DefaultVersion { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#default_version LaunchTemplate#default_version}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#description LaunchTemplate#description}.

---

##### `DisableApiStop`<sup>Optional</sup> <a name="DisableApiStop" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.disableApiStop"></a>

```csharp
public object DisableApiStop { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#disable_api_stop LaunchTemplate#disable_api_stop}.

---

##### `DisableApiTermination`<sup>Optional</sup> <a name="DisableApiTermination" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.disableApiTermination"></a>

```csharp
public object DisableApiTermination { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#disable_api_termination LaunchTemplate#disable_api_termination}.

---

##### `EbsOptimized`<sup>Optional</sup> <a name="EbsOptimized" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.ebsOptimized"></a>

```csharp
public string EbsOptimized { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#ebs_optimized LaunchTemplate#ebs_optimized}.

---

##### `EnclaveOptions`<sup>Optional</sup> <a name="EnclaveOptions" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.enclaveOptions"></a>

```csharp
public LaunchTemplateEnclaveOptions EnclaveOptions { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateEnclaveOptions">LaunchTemplateEnclaveOptions</a>

enclave_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#enclave_options LaunchTemplate#enclave_options}

---

##### `HibernationOptions`<sup>Optional</sup> <a name="HibernationOptions" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.hibernationOptions"></a>

```csharp
public LaunchTemplateHibernationOptions HibernationOptions { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateHibernationOptions">LaunchTemplateHibernationOptions</a>

hibernation_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#hibernation_options LaunchTemplate#hibernation_options}

---

##### `IamInstanceProfile`<sup>Optional</sup> <a name="IamInstanceProfile" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.iamInstanceProfile"></a>

```csharp
public LaunchTemplateIamInstanceProfile IamInstanceProfile { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateIamInstanceProfile">LaunchTemplateIamInstanceProfile</a>

iam_instance_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#iam_instance_profile LaunchTemplate#iam_instance_profile}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#id LaunchTemplate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ImageId`<sup>Optional</sup> <a name="ImageId" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.imageId"></a>

```csharp
public string ImageId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#image_id LaunchTemplate#image_id}.

---

##### `InstanceInitiatedShutdownBehavior`<sup>Optional</sup> <a name="InstanceInitiatedShutdownBehavior" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.instanceInitiatedShutdownBehavior"></a>

```csharp
public string InstanceInitiatedShutdownBehavior { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#instance_initiated_shutdown_behavior LaunchTemplate#instance_initiated_shutdown_behavior}.

---

##### `InstanceMarketOptions`<sup>Optional</sup> <a name="InstanceMarketOptions" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.instanceMarketOptions"></a>

```csharp
public LaunchTemplateInstanceMarketOptions InstanceMarketOptions { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptions">LaunchTemplateInstanceMarketOptions</a>

instance_market_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#instance_market_options LaunchTemplate#instance_market_options}

---

##### `InstanceRequirements`<sup>Optional</sup> <a name="InstanceRequirements" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.instanceRequirements"></a>

```csharp
public LaunchTemplateInstanceRequirements InstanceRequirements { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirements">LaunchTemplateInstanceRequirements</a>

instance_requirements block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#instance_requirements LaunchTemplate#instance_requirements}

---

##### `InstanceType`<sup>Optional</sup> <a name="InstanceType" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.instanceType"></a>

```csharp
public string InstanceType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#instance_type LaunchTemplate#instance_type}.

---

##### `KernelId`<sup>Optional</sup> <a name="KernelId" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.kernelId"></a>

```csharp
public string KernelId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#kernel_id LaunchTemplate#kernel_id}.

---

##### `KeyName`<sup>Optional</sup> <a name="KeyName" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.keyName"></a>

```csharp
public string KeyName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#key_name LaunchTemplate#key_name}.

---

##### `LicenseSpecification`<sup>Optional</sup> <a name="LicenseSpecification" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.licenseSpecification"></a>

```csharp
public object LicenseSpecification { get; set; }
```

- *Type:* object

license_specification block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#license_specification LaunchTemplate#license_specification}

---

##### `MaintenanceOptions`<sup>Optional</sup> <a name="MaintenanceOptions" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.maintenanceOptions"></a>

```csharp
public LaunchTemplateMaintenanceOptions MaintenanceOptions { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMaintenanceOptions">LaunchTemplateMaintenanceOptions</a>

maintenance_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#maintenance_options LaunchTemplate#maintenance_options}

---

##### `MetadataOptions`<sup>Optional</sup> <a name="MetadataOptions" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.metadataOptions"></a>

```csharp
public LaunchTemplateMetadataOptions MetadataOptions { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptions">LaunchTemplateMetadataOptions</a>

metadata_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#metadata_options LaunchTemplate#metadata_options}

---

##### `Monitoring`<sup>Optional</sup> <a name="Monitoring" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.monitoring"></a>

```csharp
public LaunchTemplateMonitoring Monitoring { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMonitoring">LaunchTemplateMonitoring</a>

monitoring block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#monitoring LaunchTemplate#monitoring}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#name LaunchTemplate#name}.

---

##### `NamePrefix`<sup>Optional</sup> <a name="NamePrefix" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.namePrefix"></a>

```csharp
public string NamePrefix { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#name_prefix LaunchTemplate#name_prefix}.

---

##### `NetworkInterfaces`<sup>Optional</sup> <a name="NetworkInterfaces" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.networkInterfaces"></a>

```csharp
public object NetworkInterfaces { get; set; }
```

- *Type:* object

network_interfaces block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#network_interfaces LaunchTemplate#network_interfaces}

---

##### `Placement`<sup>Optional</sup> <a name="Placement" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.placement"></a>

```csharp
public LaunchTemplatePlacement Placement { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacement">LaunchTemplatePlacement</a>

placement block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#placement LaunchTemplate#placement}

---

##### `PrivateDnsNameOptions`<sup>Optional</sup> <a name="PrivateDnsNameOptions" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.privateDnsNameOptions"></a>

```csharp
public LaunchTemplatePrivateDnsNameOptions PrivateDnsNameOptions { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptions">LaunchTemplatePrivateDnsNameOptions</a>

private_dns_name_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#private_dns_name_options LaunchTemplate#private_dns_name_options}

---

##### `RamDiskId`<sup>Optional</sup> <a name="RamDiskId" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.ramDiskId"></a>

```csharp
public string RamDiskId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#ram_disk_id LaunchTemplate#ram_disk_id}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#region LaunchTemplate#region}

---

##### `SecurityGroupNames`<sup>Optional</sup> <a name="SecurityGroupNames" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.securityGroupNames"></a>

```csharp
public string[] SecurityGroupNames { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#security_group_names LaunchTemplate#security_group_names}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#tags LaunchTemplate#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#tags_all LaunchTemplate#tags_all}.

---

##### `TagSpecifications`<sup>Optional</sup> <a name="TagSpecifications" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.tagSpecifications"></a>

```csharp
public object TagSpecifications { get; set; }
```

- *Type:* object

tag_specifications block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#tag_specifications LaunchTemplate#tag_specifications}

---

##### `UpdateDefaultVersion`<sup>Optional</sup> <a name="UpdateDefaultVersion" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.updateDefaultVersion"></a>

```csharp
public object UpdateDefaultVersion { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#update_default_version LaunchTemplate#update_default_version}.

---

##### `UserData`<sup>Optional</sup> <a name="UserData" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.userData"></a>

```csharp
public string UserData { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#user_data LaunchTemplate#user_data}.

---

##### `VpcSecurityGroupIds`<sup>Optional</sup> <a name="VpcSecurityGroupIds" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateConfig.property.vpcSecurityGroupIds"></a>

```csharp
public string[] VpcSecurityGroupIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#vpc_security_group_ids LaunchTemplate#vpc_security_group_ids}.

---

### LaunchTemplateCpuOptions <a name="LaunchTemplateCpuOptions" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCpuOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCpuOptions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LaunchTemplateCpuOptions {
    string AmdSevSnp = null,
    double CoreCount = null,
    double ThreadsPerCore = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCpuOptions.property.amdSevSnp">AmdSevSnp</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#amd_sev_snp LaunchTemplate#amd_sev_snp}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCpuOptions.property.coreCount">CoreCount</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#core_count LaunchTemplate#core_count}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCpuOptions.property.threadsPerCore">ThreadsPerCore</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#threads_per_core LaunchTemplate#threads_per_core}. |

---

##### `AmdSevSnp`<sup>Optional</sup> <a name="AmdSevSnp" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCpuOptions.property.amdSevSnp"></a>

```csharp
public string AmdSevSnp { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#amd_sev_snp LaunchTemplate#amd_sev_snp}.

---

##### `CoreCount`<sup>Optional</sup> <a name="CoreCount" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCpuOptions.property.coreCount"></a>

```csharp
public double CoreCount { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#core_count LaunchTemplate#core_count}.

---

##### `ThreadsPerCore`<sup>Optional</sup> <a name="ThreadsPerCore" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCpuOptions.property.threadsPerCore"></a>

```csharp
public double ThreadsPerCore { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#threads_per_core LaunchTemplate#threads_per_core}.

---

### LaunchTemplateCreditSpecification <a name="LaunchTemplateCreditSpecification" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCreditSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCreditSpecification.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LaunchTemplateCreditSpecification {
    string CpuCredits = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCreditSpecification.property.cpuCredits">CpuCredits</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#cpu_credits LaunchTemplate#cpu_credits}. |

---

##### `CpuCredits`<sup>Optional</sup> <a name="CpuCredits" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCreditSpecification.property.cpuCredits"></a>

```csharp
public string CpuCredits { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#cpu_credits LaunchTemplate#cpu_credits}.

---

### LaunchTemplateEnclaveOptions <a name="LaunchTemplateEnclaveOptions" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateEnclaveOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateEnclaveOptions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LaunchTemplateEnclaveOptions {
    object Enabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateEnclaveOptions.property.enabled">Enabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#enabled LaunchTemplate#enabled}. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateEnclaveOptions.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#enabled LaunchTemplate#enabled}.

---

### LaunchTemplateHibernationOptions <a name="LaunchTemplateHibernationOptions" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateHibernationOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateHibernationOptions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LaunchTemplateHibernationOptions {
    object Configured
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateHibernationOptions.property.configured">Configured</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#configured LaunchTemplate#configured}. |

---

##### `Configured`<sup>Required</sup> <a name="Configured" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateHibernationOptions.property.configured"></a>

```csharp
public object Configured { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#configured LaunchTemplate#configured}.

---

### LaunchTemplateIamInstanceProfile <a name="LaunchTemplateIamInstanceProfile" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateIamInstanceProfile"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateIamInstanceProfile.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LaunchTemplateIamInstanceProfile {
    string Arn = null,
    string Name = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateIamInstanceProfile.property.arn">Arn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#arn LaunchTemplate#arn}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateIamInstanceProfile.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#name LaunchTemplate#name}. |

---

##### `Arn`<sup>Optional</sup> <a name="Arn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateIamInstanceProfile.property.arn"></a>

```csharp
public string Arn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#arn LaunchTemplate#arn}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateIamInstanceProfile.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#name LaunchTemplate#name}.

---

### LaunchTemplateInstanceMarketOptions <a name="LaunchTemplateInstanceMarketOptions" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LaunchTemplateInstanceMarketOptions {
    string MarketType = null,
    LaunchTemplateInstanceMarketOptionsSpotOptions SpotOptions = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptions.property.marketType">MarketType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#market_type LaunchTemplate#market_type}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptions.property.spotOptions">SpotOptions</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptions">LaunchTemplateInstanceMarketOptionsSpotOptions</a></code> | spot_options block. |

---

##### `MarketType`<sup>Optional</sup> <a name="MarketType" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptions.property.marketType"></a>

```csharp
public string MarketType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#market_type LaunchTemplate#market_type}.

---

##### `SpotOptions`<sup>Optional</sup> <a name="SpotOptions" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptions.property.spotOptions"></a>

```csharp
public LaunchTemplateInstanceMarketOptionsSpotOptions SpotOptions { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptions">LaunchTemplateInstanceMarketOptionsSpotOptions</a>

spot_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#spot_options LaunchTemplate#spot_options}

---

### LaunchTemplateInstanceMarketOptionsSpotOptions <a name="LaunchTemplateInstanceMarketOptionsSpotOptions" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LaunchTemplateInstanceMarketOptionsSpotOptions {
    double BlockDurationMinutes = null,
    string InstanceInterruptionBehavior = null,
    string MaxPrice = null,
    string SpotInstanceType = null,
    string ValidUntil = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptions.property.blockDurationMinutes">BlockDurationMinutes</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#block_duration_minutes LaunchTemplate#block_duration_minutes}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptions.property.instanceInterruptionBehavior">InstanceInterruptionBehavior</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#instance_interruption_behavior LaunchTemplate#instance_interruption_behavior}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptions.property.maxPrice">MaxPrice</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#max_price LaunchTemplate#max_price}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptions.property.spotInstanceType">SpotInstanceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#spot_instance_type LaunchTemplate#spot_instance_type}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptions.property.validUntil">ValidUntil</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#valid_until LaunchTemplate#valid_until}. |

---

##### `BlockDurationMinutes`<sup>Optional</sup> <a name="BlockDurationMinutes" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptions.property.blockDurationMinutes"></a>

```csharp
public double BlockDurationMinutes { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#block_duration_minutes LaunchTemplate#block_duration_minutes}.

---

##### `InstanceInterruptionBehavior`<sup>Optional</sup> <a name="InstanceInterruptionBehavior" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptions.property.instanceInterruptionBehavior"></a>

```csharp
public string InstanceInterruptionBehavior { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#instance_interruption_behavior LaunchTemplate#instance_interruption_behavior}.

---

##### `MaxPrice`<sup>Optional</sup> <a name="MaxPrice" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptions.property.maxPrice"></a>

```csharp
public string MaxPrice { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#max_price LaunchTemplate#max_price}.

---

##### `SpotInstanceType`<sup>Optional</sup> <a name="SpotInstanceType" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptions.property.spotInstanceType"></a>

```csharp
public string SpotInstanceType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#spot_instance_type LaunchTemplate#spot_instance_type}.

---

##### `ValidUntil`<sup>Optional</sup> <a name="ValidUntil" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptions.property.validUntil"></a>

```csharp
public string ValidUntil { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#valid_until LaunchTemplate#valid_until}.

---

### LaunchTemplateInstanceRequirements <a name="LaunchTemplateInstanceRequirements" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirements"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirements.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LaunchTemplateInstanceRequirements {
    LaunchTemplateInstanceRequirementsMemoryMib MemoryMib,
    LaunchTemplateInstanceRequirementsVcpuCount VcpuCount,
    LaunchTemplateInstanceRequirementsAcceleratorCount AcceleratorCount = null,
    string[] AcceleratorManufacturers = null,
    string[] AcceleratorNames = null,
    LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMib AcceleratorTotalMemoryMib = null,
    string[] AcceleratorTypes = null,
    string[] AllowedInstanceTypes = null,
    string BareMetal = null,
    LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbps BaselineEbsBandwidthMbps = null,
    string BurstablePerformance = null,
    string[] CpuManufacturers = null,
    string[] ExcludedInstanceTypes = null,
    string[] InstanceGenerations = null,
    string LocalStorage = null,
    string[] LocalStorageTypes = null,
    double MaxSpotPriceAsPercentageOfOptimalOnDemandPrice = null,
    LaunchTemplateInstanceRequirementsMemoryGibPerVcpu MemoryGibPerVcpu = null,
    LaunchTemplateInstanceRequirementsNetworkBandwidthGbps NetworkBandwidthGbps = null,
    LaunchTemplateInstanceRequirementsNetworkInterfaceCount NetworkInterfaceCount = null,
    double OnDemandMaxPricePercentageOverLowestPrice = null,
    object RequireHibernateSupport = null,
    double SpotMaxPricePercentageOverLowestPrice = null,
    LaunchTemplateInstanceRequirementsTotalLocalStorageGb TotalLocalStorageGb = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirements.property.memoryMib">MemoryMib</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryMib">LaunchTemplateInstanceRequirementsMemoryMib</a></code> | memory_mib block. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirements.property.vcpuCount">VcpuCount</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsVcpuCount">LaunchTemplateInstanceRequirementsVcpuCount</a></code> | vcpu_count block. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirements.property.acceleratorCount">AcceleratorCount</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorCount">LaunchTemplateInstanceRequirementsAcceleratorCount</a></code> | accelerator_count block. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirements.property.acceleratorManufacturers">AcceleratorManufacturers</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#accelerator_manufacturers LaunchTemplate#accelerator_manufacturers}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirements.property.acceleratorNames">AcceleratorNames</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#accelerator_names LaunchTemplate#accelerator_names}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirements.property.acceleratorTotalMemoryMib">AcceleratorTotalMemoryMib</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMib">LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMib</a></code> | accelerator_total_memory_mib block. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirements.property.acceleratorTypes">AcceleratorTypes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#accelerator_types LaunchTemplate#accelerator_types}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirements.property.allowedInstanceTypes">AllowedInstanceTypes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#allowed_instance_types LaunchTemplate#allowed_instance_types}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirements.property.bareMetal">BareMetal</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#bare_metal LaunchTemplate#bare_metal}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirements.property.baselineEbsBandwidthMbps">BaselineEbsBandwidthMbps</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbps">LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbps</a></code> | baseline_ebs_bandwidth_mbps block. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirements.property.burstablePerformance">BurstablePerformance</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#burstable_performance LaunchTemplate#burstable_performance}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirements.property.cpuManufacturers">CpuManufacturers</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#cpu_manufacturers LaunchTemplate#cpu_manufacturers}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirements.property.excludedInstanceTypes">ExcludedInstanceTypes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#excluded_instance_types LaunchTemplate#excluded_instance_types}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirements.property.instanceGenerations">InstanceGenerations</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#instance_generations LaunchTemplate#instance_generations}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirements.property.localStorage">LocalStorage</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#local_storage LaunchTemplate#local_storage}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirements.property.localStorageTypes">LocalStorageTypes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#local_storage_types LaunchTemplate#local_storage_types}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirements.property.maxSpotPriceAsPercentageOfOptimalOnDemandPrice">MaxSpotPriceAsPercentageOfOptimalOnDemandPrice</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#max_spot_price_as_percentage_of_optimal_on_demand_price LaunchTemplate#max_spot_price_as_percentage_of_optimal_on_demand_price}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirements.property.memoryGibPerVcpu">MemoryGibPerVcpu</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryGibPerVcpu">LaunchTemplateInstanceRequirementsMemoryGibPerVcpu</a></code> | memory_gib_per_vcpu block. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirements.property.networkBandwidthGbps">NetworkBandwidthGbps</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkBandwidthGbps">LaunchTemplateInstanceRequirementsNetworkBandwidthGbps</a></code> | network_bandwidth_gbps block. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirements.property.networkInterfaceCount">NetworkInterfaceCount</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkInterfaceCount">LaunchTemplateInstanceRequirementsNetworkInterfaceCount</a></code> | network_interface_count block. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirements.property.onDemandMaxPricePercentageOverLowestPrice">OnDemandMaxPricePercentageOverLowestPrice</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#on_demand_max_price_percentage_over_lowest_price LaunchTemplate#on_demand_max_price_percentage_over_lowest_price}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirements.property.requireHibernateSupport">RequireHibernateSupport</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#require_hibernate_support LaunchTemplate#require_hibernate_support}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirements.property.spotMaxPricePercentageOverLowestPrice">SpotMaxPricePercentageOverLowestPrice</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#spot_max_price_percentage_over_lowest_price LaunchTemplate#spot_max_price_percentage_over_lowest_price}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirements.property.totalLocalStorageGb">TotalLocalStorageGb</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsTotalLocalStorageGb">LaunchTemplateInstanceRequirementsTotalLocalStorageGb</a></code> | total_local_storage_gb block. |

---

##### `MemoryMib`<sup>Required</sup> <a name="MemoryMib" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirements.property.memoryMib"></a>

```csharp
public LaunchTemplateInstanceRequirementsMemoryMib MemoryMib { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryMib">LaunchTemplateInstanceRequirementsMemoryMib</a>

memory_mib block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#memory_mib LaunchTemplate#memory_mib}

---

##### `VcpuCount`<sup>Required</sup> <a name="VcpuCount" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirements.property.vcpuCount"></a>

```csharp
public LaunchTemplateInstanceRequirementsVcpuCount VcpuCount { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsVcpuCount">LaunchTemplateInstanceRequirementsVcpuCount</a>

vcpu_count block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#vcpu_count LaunchTemplate#vcpu_count}

---

##### `AcceleratorCount`<sup>Optional</sup> <a name="AcceleratorCount" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirements.property.acceleratorCount"></a>

```csharp
public LaunchTemplateInstanceRequirementsAcceleratorCount AcceleratorCount { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorCount">LaunchTemplateInstanceRequirementsAcceleratorCount</a>

accelerator_count block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#accelerator_count LaunchTemplate#accelerator_count}

---

##### `AcceleratorManufacturers`<sup>Optional</sup> <a name="AcceleratorManufacturers" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirements.property.acceleratorManufacturers"></a>

```csharp
public string[] AcceleratorManufacturers { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#accelerator_manufacturers LaunchTemplate#accelerator_manufacturers}.

---

##### `AcceleratorNames`<sup>Optional</sup> <a name="AcceleratorNames" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirements.property.acceleratorNames"></a>

```csharp
public string[] AcceleratorNames { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#accelerator_names LaunchTemplate#accelerator_names}.

---

##### `AcceleratorTotalMemoryMib`<sup>Optional</sup> <a name="AcceleratorTotalMemoryMib" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirements.property.acceleratorTotalMemoryMib"></a>

```csharp
public LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMib AcceleratorTotalMemoryMib { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMib">LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMib</a>

accelerator_total_memory_mib block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#accelerator_total_memory_mib LaunchTemplate#accelerator_total_memory_mib}

---

##### `AcceleratorTypes`<sup>Optional</sup> <a name="AcceleratorTypes" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirements.property.acceleratorTypes"></a>

```csharp
public string[] AcceleratorTypes { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#accelerator_types LaunchTemplate#accelerator_types}.

---

##### `AllowedInstanceTypes`<sup>Optional</sup> <a name="AllowedInstanceTypes" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirements.property.allowedInstanceTypes"></a>

```csharp
public string[] AllowedInstanceTypes { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#allowed_instance_types LaunchTemplate#allowed_instance_types}.

---

##### `BareMetal`<sup>Optional</sup> <a name="BareMetal" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirements.property.bareMetal"></a>

```csharp
public string BareMetal { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#bare_metal LaunchTemplate#bare_metal}.

---

##### `BaselineEbsBandwidthMbps`<sup>Optional</sup> <a name="BaselineEbsBandwidthMbps" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirements.property.baselineEbsBandwidthMbps"></a>

```csharp
public LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbps BaselineEbsBandwidthMbps { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbps">LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbps</a>

baseline_ebs_bandwidth_mbps block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#baseline_ebs_bandwidth_mbps LaunchTemplate#baseline_ebs_bandwidth_mbps}

---

##### `BurstablePerformance`<sup>Optional</sup> <a name="BurstablePerformance" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirements.property.burstablePerformance"></a>

```csharp
public string BurstablePerformance { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#burstable_performance LaunchTemplate#burstable_performance}.

---

##### `CpuManufacturers`<sup>Optional</sup> <a name="CpuManufacturers" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirements.property.cpuManufacturers"></a>

```csharp
public string[] CpuManufacturers { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#cpu_manufacturers LaunchTemplate#cpu_manufacturers}.

---

##### `ExcludedInstanceTypes`<sup>Optional</sup> <a name="ExcludedInstanceTypes" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirements.property.excludedInstanceTypes"></a>

```csharp
public string[] ExcludedInstanceTypes { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#excluded_instance_types LaunchTemplate#excluded_instance_types}.

---

##### `InstanceGenerations`<sup>Optional</sup> <a name="InstanceGenerations" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirements.property.instanceGenerations"></a>

```csharp
public string[] InstanceGenerations { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#instance_generations LaunchTemplate#instance_generations}.

---

##### `LocalStorage`<sup>Optional</sup> <a name="LocalStorage" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirements.property.localStorage"></a>

```csharp
public string LocalStorage { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#local_storage LaunchTemplate#local_storage}.

---

##### `LocalStorageTypes`<sup>Optional</sup> <a name="LocalStorageTypes" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirements.property.localStorageTypes"></a>

```csharp
public string[] LocalStorageTypes { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#local_storage_types LaunchTemplate#local_storage_types}.

---

##### `MaxSpotPriceAsPercentageOfOptimalOnDemandPrice`<sup>Optional</sup> <a name="MaxSpotPriceAsPercentageOfOptimalOnDemandPrice" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirements.property.maxSpotPriceAsPercentageOfOptimalOnDemandPrice"></a>

```csharp
public double MaxSpotPriceAsPercentageOfOptimalOnDemandPrice { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#max_spot_price_as_percentage_of_optimal_on_demand_price LaunchTemplate#max_spot_price_as_percentage_of_optimal_on_demand_price}.

---

##### `MemoryGibPerVcpu`<sup>Optional</sup> <a name="MemoryGibPerVcpu" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirements.property.memoryGibPerVcpu"></a>

```csharp
public LaunchTemplateInstanceRequirementsMemoryGibPerVcpu MemoryGibPerVcpu { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryGibPerVcpu">LaunchTemplateInstanceRequirementsMemoryGibPerVcpu</a>

memory_gib_per_vcpu block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#memory_gib_per_vcpu LaunchTemplate#memory_gib_per_vcpu}

---

##### `NetworkBandwidthGbps`<sup>Optional</sup> <a name="NetworkBandwidthGbps" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirements.property.networkBandwidthGbps"></a>

```csharp
public LaunchTemplateInstanceRequirementsNetworkBandwidthGbps NetworkBandwidthGbps { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkBandwidthGbps">LaunchTemplateInstanceRequirementsNetworkBandwidthGbps</a>

network_bandwidth_gbps block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#network_bandwidth_gbps LaunchTemplate#network_bandwidth_gbps}

---

##### `NetworkInterfaceCount`<sup>Optional</sup> <a name="NetworkInterfaceCount" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirements.property.networkInterfaceCount"></a>

```csharp
public LaunchTemplateInstanceRequirementsNetworkInterfaceCount NetworkInterfaceCount { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkInterfaceCount">LaunchTemplateInstanceRequirementsNetworkInterfaceCount</a>

network_interface_count block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#network_interface_count LaunchTemplate#network_interface_count}

---

##### `OnDemandMaxPricePercentageOverLowestPrice`<sup>Optional</sup> <a name="OnDemandMaxPricePercentageOverLowestPrice" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirements.property.onDemandMaxPricePercentageOverLowestPrice"></a>

```csharp
public double OnDemandMaxPricePercentageOverLowestPrice { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#on_demand_max_price_percentage_over_lowest_price LaunchTemplate#on_demand_max_price_percentage_over_lowest_price}.

---

##### `RequireHibernateSupport`<sup>Optional</sup> <a name="RequireHibernateSupport" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirements.property.requireHibernateSupport"></a>

```csharp
public object RequireHibernateSupport { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#require_hibernate_support LaunchTemplate#require_hibernate_support}.

---

##### `SpotMaxPricePercentageOverLowestPrice`<sup>Optional</sup> <a name="SpotMaxPricePercentageOverLowestPrice" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirements.property.spotMaxPricePercentageOverLowestPrice"></a>

```csharp
public double SpotMaxPricePercentageOverLowestPrice { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#spot_max_price_percentage_over_lowest_price LaunchTemplate#spot_max_price_percentage_over_lowest_price}.

---

##### `TotalLocalStorageGb`<sup>Optional</sup> <a name="TotalLocalStorageGb" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirements.property.totalLocalStorageGb"></a>

```csharp
public LaunchTemplateInstanceRequirementsTotalLocalStorageGb TotalLocalStorageGb { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsTotalLocalStorageGb">LaunchTemplateInstanceRequirementsTotalLocalStorageGb</a>

total_local_storage_gb block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#total_local_storage_gb LaunchTemplate#total_local_storage_gb}

---

### LaunchTemplateInstanceRequirementsAcceleratorCount <a name="LaunchTemplateInstanceRequirementsAcceleratorCount" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorCount"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorCount.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LaunchTemplateInstanceRequirementsAcceleratorCount {
    double Max = null,
    double Min = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorCount.property.max">Max</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#max LaunchTemplate#max}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorCount.property.min">Min</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#min LaunchTemplate#min}. |

---

##### `Max`<sup>Optional</sup> <a name="Max" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorCount.property.max"></a>

```csharp
public double Max { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#max LaunchTemplate#max}.

---

##### `Min`<sup>Optional</sup> <a name="Min" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorCount.property.min"></a>

```csharp
public double Min { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#min LaunchTemplate#min}.

---

### LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMib <a name="LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMib" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMib"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMib.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMib {
    double Max = null,
    double Min = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMib.property.max">Max</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#max LaunchTemplate#max}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMib.property.min">Min</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#min LaunchTemplate#min}. |

---

##### `Max`<sup>Optional</sup> <a name="Max" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMib.property.max"></a>

```csharp
public double Max { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#max LaunchTemplate#max}.

---

##### `Min`<sup>Optional</sup> <a name="Min" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMib.property.min"></a>

```csharp
public double Min { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#min LaunchTemplate#min}.

---

### LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbps <a name="LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbps" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbps"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbps.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbps {
    double Max = null,
    double Min = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbps.property.max">Max</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#max LaunchTemplate#max}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbps.property.min">Min</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#min LaunchTemplate#min}. |

---

##### `Max`<sup>Optional</sup> <a name="Max" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbps.property.max"></a>

```csharp
public double Max { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#max LaunchTemplate#max}.

---

##### `Min`<sup>Optional</sup> <a name="Min" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbps.property.min"></a>

```csharp
public double Min { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#min LaunchTemplate#min}.

---

### LaunchTemplateInstanceRequirementsMemoryGibPerVcpu <a name="LaunchTemplateInstanceRequirementsMemoryGibPerVcpu" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryGibPerVcpu"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryGibPerVcpu.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LaunchTemplateInstanceRequirementsMemoryGibPerVcpu {
    double Max = null,
    double Min = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryGibPerVcpu.property.max">Max</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#max LaunchTemplate#max}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryGibPerVcpu.property.min">Min</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#min LaunchTemplate#min}. |

---

##### `Max`<sup>Optional</sup> <a name="Max" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryGibPerVcpu.property.max"></a>

```csharp
public double Max { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#max LaunchTemplate#max}.

---

##### `Min`<sup>Optional</sup> <a name="Min" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryGibPerVcpu.property.min"></a>

```csharp
public double Min { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#min LaunchTemplate#min}.

---

### LaunchTemplateInstanceRequirementsMemoryMib <a name="LaunchTemplateInstanceRequirementsMemoryMib" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryMib"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryMib.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LaunchTemplateInstanceRequirementsMemoryMib {
    double Min,
    double Max = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryMib.property.min">Min</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#min LaunchTemplate#min}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryMib.property.max">Max</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#max LaunchTemplate#max}. |

---

##### `Min`<sup>Required</sup> <a name="Min" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryMib.property.min"></a>

```csharp
public double Min { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#min LaunchTemplate#min}.

---

##### `Max`<sup>Optional</sup> <a name="Max" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryMib.property.max"></a>

```csharp
public double Max { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#max LaunchTemplate#max}.

---

### LaunchTemplateInstanceRequirementsNetworkBandwidthGbps <a name="LaunchTemplateInstanceRequirementsNetworkBandwidthGbps" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkBandwidthGbps"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkBandwidthGbps.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LaunchTemplateInstanceRequirementsNetworkBandwidthGbps {
    double Max = null,
    double Min = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkBandwidthGbps.property.max">Max</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#max LaunchTemplate#max}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkBandwidthGbps.property.min">Min</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#min LaunchTemplate#min}. |

---

##### `Max`<sup>Optional</sup> <a name="Max" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkBandwidthGbps.property.max"></a>

```csharp
public double Max { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#max LaunchTemplate#max}.

---

##### `Min`<sup>Optional</sup> <a name="Min" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkBandwidthGbps.property.min"></a>

```csharp
public double Min { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#min LaunchTemplate#min}.

---

### LaunchTemplateInstanceRequirementsNetworkInterfaceCount <a name="LaunchTemplateInstanceRequirementsNetworkInterfaceCount" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkInterfaceCount"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkInterfaceCount.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LaunchTemplateInstanceRequirementsNetworkInterfaceCount {
    double Max = null,
    double Min = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkInterfaceCount.property.max">Max</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#max LaunchTemplate#max}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkInterfaceCount.property.min">Min</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#min LaunchTemplate#min}. |

---

##### `Max`<sup>Optional</sup> <a name="Max" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkInterfaceCount.property.max"></a>

```csharp
public double Max { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#max LaunchTemplate#max}.

---

##### `Min`<sup>Optional</sup> <a name="Min" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkInterfaceCount.property.min"></a>

```csharp
public double Min { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#min LaunchTemplate#min}.

---

### LaunchTemplateInstanceRequirementsTotalLocalStorageGb <a name="LaunchTemplateInstanceRequirementsTotalLocalStorageGb" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsTotalLocalStorageGb"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsTotalLocalStorageGb.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LaunchTemplateInstanceRequirementsTotalLocalStorageGb {
    double Max = null,
    double Min = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsTotalLocalStorageGb.property.max">Max</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#max LaunchTemplate#max}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsTotalLocalStorageGb.property.min">Min</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#min LaunchTemplate#min}. |

---

##### `Max`<sup>Optional</sup> <a name="Max" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsTotalLocalStorageGb.property.max"></a>

```csharp
public double Max { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#max LaunchTemplate#max}.

---

##### `Min`<sup>Optional</sup> <a name="Min" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsTotalLocalStorageGb.property.min"></a>

```csharp
public double Min { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#min LaunchTemplate#min}.

---

### LaunchTemplateInstanceRequirementsVcpuCount <a name="LaunchTemplateInstanceRequirementsVcpuCount" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsVcpuCount"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsVcpuCount.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LaunchTemplateInstanceRequirementsVcpuCount {
    double Min,
    double Max = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsVcpuCount.property.min">Min</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#min LaunchTemplate#min}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsVcpuCount.property.max">Max</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#max LaunchTemplate#max}. |

---

##### `Min`<sup>Required</sup> <a name="Min" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsVcpuCount.property.min"></a>

```csharp
public double Min { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#min LaunchTemplate#min}.

---

##### `Max`<sup>Optional</sup> <a name="Max" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsVcpuCount.property.max"></a>

```csharp
public double Max { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#max LaunchTemplate#max}.

---

### LaunchTemplateLicenseSpecification <a name="LaunchTemplateLicenseSpecification" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecification.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LaunchTemplateLicenseSpecification {
    string LicenseConfigurationArn
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecification.property.licenseConfigurationArn">LicenseConfigurationArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#license_configuration_arn LaunchTemplate#license_configuration_arn}. |

---

##### `LicenseConfigurationArn`<sup>Required</sup> <a name="LicenseConfigurationArn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecification.property.licenseConfigurationArn"></a>

```csharp
public string LicenseConfigurationArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#license_configuration_arn LaunchTemplate#license_configuration_arn}.

---

### LaunchTemplateMaintenanceOptions <a name="LaunchTemplateMaintenanceOptions" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMaintenanceOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMaintenanceOptions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LaunchTemplateMaintenanceOptions {
    string AutoRecovery = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMaintenanceOptions.property.autoRecovery">AutoRecovery</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#auto_recovery LaunchTemplate#auto_recovery}. |

---

##### `AutoRecovery`<sup>Optional</sup> <a name="AutoRecovery" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMaintenanceOptions.property.autoRecovery"></a>

```csharp
public string AutoRecovery { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#auto_recovery LaunchTemplate#auto_recovery}.

---

### LaunchTemplateMetadataOptions <a name="LaunchTemplateMetadataOptions" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LaunchTemplateMetadataOptions {
    string HttpEndpoint = null,
    string HttpProtocolIpv6 = null,
    double HttpPutResponseHopLimit = null,
    string HttpTokens = null,
    string InstanceMetadataTags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptions.property.httpEndpoint">HttpEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#http_endpoint LaunchTemplate#http_endpoint}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptions.property.httpProtocolIpv6">HttpProtocolIpv6</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#http_protocol_ipv6 LaunchTemplate#http_protocol_ipv6}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptions.property.httpPutResponseHopLimit">HttpPutResponseHopLimit</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#http_put_response_hop_limit LaunchTemplate#http_put_response_hop_limit}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptions.property.httpTokens">HttpTokens</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#http_tokens LaunchTemplate#http_tokens}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptions.property.instanceMetadataTags">InstanceMetadataTags</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#instance_metadata_tags LaunchTemplate#instance_metadata_tags}. |

---

##### `HttpEndpoint`<sup>Optional</sup> <a name="HttpEndpoint" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptions.property.httpEndpoint"></a>

```csharp
public string HttpEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#http_endpoint LaunchTemplate#http_endpoint}.

---

##### `HttpProtocolIpv6`<sup>Optional</sup> <a name="HttpProtocolIpv6" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptions.property.httpProtocolIpv6"></a>

```csharp
public string HttpProtocolIpv6 { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#http_protocol_ipv6 LaunchTemplate#http_protocol_ipv6}.

---

##### `HttpPutResponseHopLimit`<sup>Optional</sup> <a name="HttpPutResponseHopLimit" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptions.property.httpPutResponseHopLimit"></a>

```csharp
public double HttpPutResponseHopLimit { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#http_put_response_hop_limit LaunchTemplate#http_put_response_hop_limit}.

---

##### `HttpTokens`<sup>Optional</sup> <a name="HttpTokens" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptions.property.httpTokens"></a>

```csharp
public string HttpTokens { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#http_tokens LaunchTemplate#http_tokens}.

---

##### `InstanceMetadataTags`<sup>Optional</sup> <a name="InstanceMetadataTags" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptions.property.instanceMetadataTags"></a>

```csharp
public string InstanceMetadataTags { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#instance_metadata_tags LaunchTemplate#instance_metadata_tags}.

---

### LaunchTemplateMonitoring <a name="LaunchTemplateMonitoring" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMonitoring"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMonitoring.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LaunchTemplateMonitoring {
    object Enabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMonitoring.property.enabled">Enabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#enabled LaunchTemplate#enabled}. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMonitoring.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#enabled LaunchTemplate#enabled}.

---

### LaunchTemplateNetworkInterfaces <a name="LaunchTemplateNetworkInterfaces" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfaces"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfaces.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LaunchTemplateNetworkInterfaces {
    string AssociateCarrierIpAddress = null,
    string AssociatePublicIpAddress = null,
    LaunchTemplateNetworkInterfacesConnectionTrackingSpecification ConnectionTrackingSpecification = null,
    string DeleteOnTermination = null,
    string Description = null,
    double DeviceIndex = null,
    LaunchTemplateNetworkInterfacesEnaSrdSpecification EnaSrdSpecification = null,
    string InterfaceType = null,
    double Ipv4AddressCount = null,
    string[] Ipv4Addresses = null,
    double Ipv4PrefixCount = null,
    string[] Ipv4Prefixes = null,
    double Ipv6AddressCount = null,
    string[] Ipv6Addresses = null,
    double Ipv6PrefixCount = null,
    string[] Ipv6Prefixes = null,
    double NetworkCardIndex = null,
    string NetworkInterfaceId = null,
    string PrimaryIpv6 = null,
    string PrivateIpAddress = null,
    string[] SecurityGroups = null,
    string SubnetId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfaces.property.associateCarrierIpAddress">AssociateCarrierIpAddress</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#associate_carrier_ip_address LaunchTemplate#associate_carrier_ip_address}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfaces.property.associatePublicIpAddress">AssociatePublicIpAddress</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#associate_public_ip_address LaunchTemplate#associate_public_ip_address}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfaces.property.connectionTrackingSpecification">ConnectionTrackingSpecification</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesConnectionTrackingSpecification">LaunchTemplateNetworkInterfacesConnectionTrackingSpecification</a></code> | connection_tracking_specification block. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfaces.property.deleteOnTermination">DeleteOnTermination</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#delete_on_termination LaunchTemplate#delete_on_termination}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfaces.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#description LaunchTemplate#description}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfaces.property.deviceIndex">DeviceIndex</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#device_index LaunchTemplate#device_index}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfaces.property.enaSrdSpecification">EnaSrdSpecification</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesEnaSrdSpecification">LaunchTemplateNetworkInterfacesEnaSrdSpecification</a></code> | ena_srd_specification block. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfaces.property.interfaceType">InterfaceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#interface_type LaunchTemplate#interface_type}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfaces.property.ipv4AddressCount">Ipv4AddressCount</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#ipv4_address_count LaunchTemplate#ipv4_address_count}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfaces.property.ipv4Addresses">Ipv4Addresses</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#ipv4_addresses LaunchTemplate#ipv4_addresses}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfaces.property.ipv4PrefixCount">Ipv4PrefixCount</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#ipv4_prefix_count LaunchTemplate#ipv4_prefix_count}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfaces.property.ipv4Prefixes">Ipv4Prefixes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#ipv4_prefixes LaunchTemplate#ipv4_prefixes}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfaces.property.ipv6AddressCount">Ipv6AddressCount</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#ipv6_address_count LaunchTemplate#ipv6_address_count}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfaces.property.ipv6Addresses">Ipv6Addresses</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#ipv6_addresses LaunchTemplate#ipv6_addresses}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfaces.property.ipv6PrefixCount">Ipv6PrefixCount</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#ipv6_prefix_count LaunchTemplate#ipv6_prefix_count}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfaces.property.ipv6Prefixes">Ipv6Prefixes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#ipv6_prefixes LaunchTemplate#ipv6_prefixes}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfaces.property.networkCardIndex">NetworkCardIndex</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#network_card_index LaunchTemplate#network_card_index}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfaces.property.networkInterfaceId">NetworkInterfaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#network_interface_id LaunchTemplate#network_interface_id}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfaces.property.primaryIpv6">PrimaryIpv6</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#primary_ipv6 LaunchTemplate#primary_ipv6}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfaces.property.privateIpAddress">PrivateIpAddress</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#private_ip_address LaunchTemplate#private_ip_address}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfaces.property.securityGroups">SecurityGroups</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#security_groups LaunchTemplate#security_groups}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfaces.property.subnetId">SubnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#subnet_id LaunchTemplate#subnet_id}. |

---

##### `AssociateCarrierIpAddress`<sup>Optional</sup> <a name="AssociateCarrierIpAddress" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfaces.property.associateCarrierIpAddress"></a>

```csharp
public string AssociateCarrierIpAddress { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#associate_carrier_ip_address LaunchTemplate#associate_carrier_ip_address}.

---

##### `AssociatePublicIpAddress`<sup>Optional</sup> <a name="AssociatePublicIpAddress" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfaces.property.associatePublicIpAddress"></a>

```csharp
public string AssociatePublicIpAddress { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#associate_public_ip_address LaunchTemplate#associate_public_ip_address}.

---

##### `ConnectionTrackingSpecification`<sup>Optional</sup> <a name="ConnectionTrackingSpecification" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfaces.property.connectionTrackingSpecification"></a>

```csharp
public LaunchTemplateNetworkInterfacesConnectionTrackingSpecification ConnectionTrackingSpecification { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesConnectionTrackingSpecification">LaunchTemplateNetworkInterfacesConnectionTrackingSpecification</a>

connection_tracking_specification block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#connection_tracking_specification LaunchTemplate#connection_tracking_specification}

---

##### `DeleteOnTermination`<sup>Optional</sup> <a name="DeleteOnTermination" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfaces.property.deleteOnTermination"></a>

```csharp
public string DeleteOnTermination { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#delete_on_termination LaunchTemplate#delete_on_termination}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfaces.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#description LaunchTemplate#description}.

---

##### `DeviceIndex`<sup>Optional</sup> <a name="DeviceIndex" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfaces.property.deviceIndex"></a>

```csharp
public double DeviceIndex { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#device_index LaunchTemplate#device_index}.

---

##### `EnaSrdSpecification`<sup>Optional</sup> <a name="EnaSrdSpecification" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfaces.property.enaSrdSpecification"></a>

```csharp
public LaunchTemplateNetworkInterfacesEnaSrdSpecification EnaSrdSpecification { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesEnaSrdSpecification">LaunchTemplateNetworkInterfacesEnaSrdSpecification</a>

ena_srd_specification block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#ena_srd_specification LaunchTemplate#ena_srd_specification}

---

##### `InterfaceType`<sup>Optional</sup> <a name="InterfaceType" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfaces.property.interfaceType"></a>

```csharp
public string InterfaceType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#interface_type LaunchTemplate#interface_type}.

---

##### `Ipv4AddressCount`<sup>Optional</sup> <a name="Ipv4AddressCount" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfaces.property.ipv4AddressCount"></a>

```csharp
public double Ipv4AddressCount { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#ipv4_address_count LaunchTemplate#ipv4_address_count}.

---

##### `Ipv4Addresses`<sup>Optional</sup> <a name="Ipv4Addresses" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfaces.property.ipv4Addresses"></a>

```csharp
public string[] Ipv4Addresses { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#ipv4_addresses LaunchTemplate#ipv4_addresses}.

---

##### `Ipv4PrefixCount`<sup>Optional</sup> <a name="Ipv4PrefixCount" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfaces.property.ipv4PrefixCount"></a>

```csharp
public double Ipv4PrefixCount { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#ipv4_prefix_count LaunchTemplate#ipv4_prefix_count}.

---

##### `Ipv4Prefixes`<sup>Optional</sup> <a name="Ipv4Prefixes" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfaces.property.ipv4Prefixes"></a>

```csharp
public string[] Ipv4Prefixes { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#ipv4_prefixes LaunchTemplate#ipv4_prefixes}.

---

##### `Ipv6AddressCount`<sup>Optional</sup> <a name="Ipv6AddressCount" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfaces.property.ipv6AddressCount"></a>

```csharp
public double Ipv6AddressCount { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#ipv6_address_count LaunchTemplate#ipv6_address_count}.

---

##### `Ipv6Addresses`<sup>Optional</sup> <a name="Ipv6Addresses" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfaces.property.ipv6Addresses"></a>

```csharp
public string[] Ipv6Addresses { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#ipv6_addresses LaunchTemplate#ipv6_addresses}.

---

##### `Ipv6PrefixCount`<sup>Optional</sup> <a name="Ipv6PrefixCount" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfaces.property.ipv6PrefixCount"></a>

```csharp
public double Ipv6PrefixCount { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#ipv6_prefix_count LaunchTemplate#ipv6_prefix_count}.

---

##### `Ipv6Prefixes`<sup>Optional</sup> <a name="Ipv6Prefixes" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfaces.property.ipv6Prefixes"></a>

```csharp
public string[] Ipv6Prefixes { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#ipv6_prefixes LaunchTemplate#ipv6_prefixes}.

---

##### `NetworkCardIndex`<sup>Optional</sup> <a name="NetworkCardIndex" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfaces.property.networkCardIndex"></a>

```csharp
public double NetworkCardIndex { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#network_card_index LaunchTemplate#network_card_index}.

---

##### `NetworkInterfaceId`<sup>Optional</sup> <a name="NetworkInterfaceId" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfaces.property.networkInterfaceId"></a>

```csharp
public string NetworkInterfaceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#network_interface_id LaunchTemplate#network_interface_id}.

---

##### `PrimaryIpv6`<sup>Optional</sup> <a name="PrimaryIpv6" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfaces.property.primaryIpv6"></a>

```csharp
public string PrimaryIpv6 { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#primary_ipv6 LaunchTemplate#primary_ipv6}.

---

##### `PrivateIpAddress`<sup>Optional</sup> <a name="PrivateIpAddress" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfaces.property.privateIpAddress"></a>

```csharp
public string PrivateIpAddress { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#private_ip_address LaunchTemplate#private_ip_address}.

---

##### `SecurityGroups`<sup>Optional</sup> <a name="SecurityGroups" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfaces.property.securityGroups"></a>

```csharp
public string[] SecurityGroups { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#security_groups LaunchTemplate#security_groups}.

---

##### `SubnetId`<sup>Optional</sup> <a name="SubnetId" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfaces.property.subnetId"></a>

```csharp
public string SubnetId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#subnet_id LaunchTemplate#subnet_id}.

---

### LaunchTemplateNetworkInterfacesConnectionTrackingSpecification <a name="LaunchTemplateNetworkInterfacesConnectionTrackingSpecification" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesConnectionTrackingSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesConnectionTrackingSpecification.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LaunchTemplateNetworkInterfacesConnectionTrackingSpecification {
    double TcpEstablishedTimeout = null,
    double UdpStreamTimeout = null,
    double UdpTimeout = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesConnectionTrackingSpecification.property.tcpEstablishedTimeout">TcpEstablishedTimeout</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#tcp_established_timeout LaunchTemplate#tcp_established_timeout}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesConnectionTrackingSpecification.property.udpStreamTimeout">UdpStreamTimeout</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#udp_stream_timeout LaunchTemplate#udp_stream_timeout}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesConnectionTrackingSpecification.property.udpTimeout">UdpTimeout</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#udp_timeout LaunchTemplate#udp_timeout}. |

---

##### `TcpEstablishedTimeout`<sup>Optional</sup> <a name="TcpEstablishedTimeout" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesConnectionTrackingSpecification.property.tcpEstablishedTimeout"></a>

```csharp
public double TcpEstablishedTimeout { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#tcp_established_timeout LaunchTemplate#tcp_established_timeout}.

---

##### `UdpStreamTimeout`<sup>Optional</sup> <a name="UdpStreamTimeout" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesConnectionTrackingSpecification.property.udpStreamTimeout"></a>

```csharp
public double UdpStreamTimeout { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#udp_stream_timeout LaunchTemplate#udp_stream_timeout}.

---

##### `UdpTimeout`<sup>Optional</sup> <a name="UdpTimeout" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesConnectionTrackingSpecification.property.udpTimeout"></a>

```csharp
public double UdpTimeout { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#udp_timeout LaunchTemplate#udp_timeout}.

---

### LaunchTemplateNetworkInterfacesEnaSrdSpecification <a name="LaunchTemplateNetworkInterfacesEnaSrdSpecification" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesEnaSrdSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesEnaSrdSpecification.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LaunchTemplateNetworkInterfacesEnaSrdSpecification {
    object EnaSrdEnabled = null,
    LaunchTemplateNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecification EnaSrdUdpSpecification = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesEnaSrdSpecification.property.enaSrdEnabled">EnaSrdEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#ena_srd_enabled LaunchTemplate#ena_srd_enabled}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesEnaSrdSpecification.property.enaSrdUdpSpecification">EnaSrdUdpSpecification</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecification">LaunchTemplateNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecification</a></code> | ena_srd_udp_specification block. |

---

##### `EnaSrdEnabled`<sup>Optional</sup> <a name="EnaSrdEnabled" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesEnaSrdSpecification.property.enaSrdEnabled"></a>

```csharp
public object EnaSrdEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#ena_srd_enabled LaunchTemplate#ena_srd_enabled}.

---

##### `EnaSrdUdpSpecification`<sup>Optional</sup> <a name="EnaSrdUdpSpecification" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesEnaSrdSpecification.property.enaSrdUdpSpecification"></a>

```csharp
public LaunchTemplateNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecification EnaSrdUdpSpecification { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecification">LaunchTemplateNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecification</a>

ena_srd_udp_specification block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#ena_srd_udp_specification LaunchTemplate#ena_srd_udp_specification}

---

### LaunchTemplateNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecification <a name="LaunchTemplateNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecification" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecification.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LaunchTemplateNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecification {
    object EnaSrdUdpEnabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecification.property.enaSrdUdpEnabled">EnaSrdUdpEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#ena_srd_udp_enabled LaunchTemplate#ena_srd_udp_enabled}. |

---

##### `EnaSrdUdpEnabled`<sup>Optional</sup> <a name="EnaSrdUdpEnabled" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecification.property.enaSrdUdpEnabled"></a>

```csharp
public object EnaSrdUdpEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#ena_srd_udp_enabled LaunchTemplate#ena_srd_udp_enabled}.

---

### LaunchTemplatePlacement <a name="LaunchTemplatePlacement" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacement"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacement.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LaunchTemplatePlacement {
    string Affinity = null,
    string AvailabilityZone = null,
    string GroupName = null,
    string HostId = null,
    string HostResourceGroupArn = null,
    double PartitionNumber = null,
    string SpreadDomain = null,
    string Tenancy = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacement.property.affinity">Affinity</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#affinity LaunchTemplate#affinity}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacement.property.availabilityZone">AvailabilityZone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#availability_zone LaunchTemplate#availability_zone}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacement.property.groupName">GroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#group_name LaunchTemplate#group_name}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacement.property.hostId">HostId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#host_id LaunchTemplate#host_id}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacement.property.hostResourceGroupArn">HostResourceGroupArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#host_resource_group_arn LaunchTemplate#host_resource_group_arn}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacement.property.partitionNumber">PartitionNumber</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#partition_number LaunchTemplate#partition_number}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacement.property.spreadDomain">SpreadDomain</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#spread_domain LaunchTemplate#spread_domain}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacement.property.tenancy">Tenancy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#tenancy LaunchTemplate#tenancy}. |

---

##### `Affinity`<sup>Optional</sup> <a name="Affinity" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacement.property.affinity"></a>

```csharp
public string Affinity { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#affinity LaunchTemplate#affinity}.

---

##### `AvailabilityZone`<sup>Optional</sup> <a name="AvailabilityZone" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacement.property.availabilityZone"></a>

```csharp
public string AvailabilityZone { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#availability_zone LaunchTemplate#availability_zone}.

---

##### `GroupName`<sup>Optional</sup> <a name="GroupName" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacement.property.groupName"></a>

```csharp
public string GroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#group_name LaunchTemplate#group_name}.

---

##### `HostId`<sup>Optional</sup> <a name="HostId" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacement.property.hostId"></a>

```csharp
public string HostId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#host_id LaunchTemplate#host_id}.

---

##### `HostResourceGroupArn`<sup>Optional</sup> <a name="HostResourceGroupArn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacement.property.hostResourceGroupArn"></a>

```csharp
public string HostResourceGroupArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#host_resource_group_arn LaunchTemplate#host_resource_group_arn}.

---

##### `PartitionNumber`<sup>Optional</sup> <a name="PartitionNumber" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacement.property.partitionNumber"></a>

```csharp
public double PartitionNumber { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#partition_number LaunchTemplate#partition_number}.

---

##### `SpreadDomain`<sup>Optional</sup> <a name="SpreadDomain" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacement.property.spreadDomain"></a>

```csharp
public string SpreadDomain { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#spread_domain LaunchTemplate#spread_domain}.

---

##### `Tenancy`<sup>Optional</sup> <a name="Tenancy" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacement.property.tenancy"></a>

```csharp
public string Tenancy { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#tenancy LaunchTemplate#tenancy}.

---

### LaunchTemplatePrivateDnsNameOptions <a name="LaunchTemplatePrivateDnsNameOptions" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LaunchTemplatePrivateDnsNameOptions {
    object EnableResourceNameDnsAaaaRecord = null,
    object EnableResourceNameDnsARecord = null,
    string HostnameType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptions.property.enableResourceNameDnsAaaaRecord">EnableResourceNameDnsAaaaRecord</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#enable_resource_name_dns_aaaa_record LaunchTemplate#enable_resource_name_dns_aaaa_record}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptions.property.enableResourceNameDnsARecord">EnableResourceNameDnsARecord</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#enable_resource_name_dns_a_record LaunchTemplate#enable_resource_name_dns_a_record}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptions.property.hostnameType">HostnameType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#hostname_type LaunchTemplate#hostname_type}. |

---

##### `EnableResourceNameDnsAaaaRecord`<sup>Optional</sup> <a name="EnableResourceNameDnsAaaaRecord" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptions.property.enableResourceNameDnsAaaaRecord"></a>

```csharp
public object EnableResourceNameDnsAaaaRecord { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#enable_resource_name_dns_aaaa_record LaunchTemplate#enable_resource_name_dns_aaaa_record}.

---

##### `EnableResourceNameDnsARecord`<sup>Optional</sup> <a name="EnableResourceNameDnsARecord" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptions.property.enableResourceNameDnsARecord"></a>

```csharp
public object EnableResourceNameDnsARecord { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#enable_resource_name_dns_a_record LaunchTemplate#enable_resource_name_dns_a_record}.

---

##### `HostnameType`<sup>Optional</sup> <a name="HostnameType" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptions.property.hostnameType"></a>

```csharp
public string HostnameType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#hostname_type LaunchTemplate#hostname_type}.

---

### LaunchTemplateTagSpecifications <a name="LaunchTemplateTagSpecifications" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecifications"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecifications.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LaunchTemplateTagSpecifications {
    string ResourceType = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecifications.property.resourceType">ResourceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#resource_type LaunchTemplate#resource_type}. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecifications.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#tags LaunchTemplate#tags}. |

---

##### `ResourceType`<sup>Optional</sup> <a name="ResourceType" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecifications.property.resourceType"></a>

```csharp
public string ResourceType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#resource_type LaunchTemplate#resource_type}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecifications.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/launch_template#tags LaunchTemplate#tags}.

---

## Classes <a name="Classes" id="Classes"></a>

### LaunchTemplateBlockDeviceMappingsEbsOutputReference <a name="LaunchTemplateBlockDeviceMappingsEbsOutputReference" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LaunchTemplateBlockDeviceMappingsEbsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.resetDeleteOnTermination">ResetDeleteOnTermination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.resetEncrypted">ResetEncrypted</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.resetIops">ResetIops</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.resetKmsKeyId">ResetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.resetSnapshotId">ResetSnapshotId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.resetThroughput">ResetThroughput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.resetVolumeInitializationRate">ResetVolumeInitializationRate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.resetVolumeSize">ResetVolumeSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.resetVolumeType">ResetVolumeType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDeleteOnTermination` <a name="ResetDeleteOnTermination" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.resetDeleteOnTermination"></a>

```csharp
private void ResetDeleteOnTermination()
```

##### `ResetEncrypted` <a name="ResetEncrypted" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.resetEncrypted"></a>

```csharp
private void ResetEncrypted()
```

##### `ResetIops` <a name="ResetIops" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.resetIops"></a>

```csharp
private void ResetIops()
```

##### `ResetKmsKeyId` <a name="ResetKmsKeyId" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.resetKmsKeyId"></a>

```csharp
private void ResetKmsKeyId()
```

##### `ResetSnapshotId` <a name="ResetSnapshotId" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.resetSnapshotId"></a>

```csharp
private void ResetSnapshotId()
```

##### `ResetThroughput` <a name="ResetThroughput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.resetThroughput"></a>

```csharp
private void ResetThroughput()
```

##### `ResetVolumeInitializationRate` <a name="ResetVolumeInitializationRate" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.resetVolumeInitializationRate"></a>

```csharp
private void ResetVolumeInitializationRate()
```

##### `ResetVolumeSize` <a name="ResetVolumeSize" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.resetVolumeSize"></a>

```csharp
private void ResetVolumeSize()
```

##### `ResetVolumeType` <a name="ResetVolumeType" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.resetVolumeType"></a>

```csharp
private void ResetVolumeType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.property.deleteOnTerminationInput">DeleteOnTerminationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.property.encryptedInput">EncryptedInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.property.iopsInput">IopsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.property.kmsKeyIdInput">KmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.property.snapshotIdInput">SnapshotIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.property.throughputInput">ThroughputInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.property.volumeInitializationRateInput">VolumeInitializationRateInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.property.volumeSizeInput">VolumeSizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.property.volumeTypeInput">VolumeTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.property.deleteOnTermination">DeleteOnTermination</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.property.encrypted">Encrypted</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.property.iops">Iops</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.property.snapshotId">SnapshotId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.property.throughput">Throughput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.property.volumeInitializationRate">VolumeInitializationRate</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.property.volumeSize">VolumeSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.property.volumeType">VolumeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbs">LaunchTemplateBlockDeviceMappingsEbs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DeleteOnTerminationInput`<sup>Optional</sup> <a name="DeleteOnTerminationInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.property.deleteOnTerminationInput"></a>

```csharp
public string DeleteOnTerminationInput { get; }
```

- *Type:* string

---

##### `EncryptedInput`<sup>Optional</sup> <a name="EncryptedInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.property.encryptedInput"></a>

```csharp
public string EncryptedInput { get; }
```

- *Type:* string

---

##### `IopsInput`<sup>Optional</sup> <a name="IopsInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.property.iopsInput"></a>

```csharp
public double IopsInput { get; }
```

- *Type:* double

---

##### `KmsKeyIdInput`<sup>Optional</sup> <a name="KmsKeyIdInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.property.kmsKeyIdInput"></a>

```csharp
public string KmsKeyIdInput { get; }
```

- *Type:* string

---

##### `SnapshotIdInput`<sup>Optional</sup> <a name="SnapshotIdInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.property.snapshotIdInput"></a>

```csharp
public string SnapshotIdInput { get; }
```

- *Type:* string

---

##### `ThroughputInput`<sup>Optional</sup> <a name="ThroughputInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.property.throughputInput"></a>

```csharp
public double ThroughputInput { get; }
```

- *Type:* double

---

##### `VolumeInitializationRateInput`<sup>Optional</sup> <a name="VolumeInitializationRateInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.property.volumeInitializationRateInput"></a>

```csharp
public double VolumeInitializationRateInput { get; }
```

- *Type:* double

---

##### `VolumeSizeInput`<sup>Optional</sup> <a name="VolumeSizeInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.property.volumeSizeInput"></a>

```csharp
public double VolumeSizeInput { get; }
```

- *Type:* double

---

##### `VolumeTypeInput`<sup>Optional</sup> <a name="VolumeTypeInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.property.volumeTypeInput"></a>

```csharp
public string VolumeTypeInput { get; }
```

- *Type:* string

---

##### `DeleteOnTermination`<sup>Required</sup> <a name="DeleteOnTermination" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.property.deleteOnTermination"></a>

```csharp
public string DeleteOnTermination { get; }
```

- *Type:* string

---

##### `Encrypted`<sup>Required</sup> <a name="Encrypted" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.property.encrypted"></a>

```csharp
public string Encrypted { get; }
```

- *Type:* string

---

##### `Iops`<sup>Required</sup> <a name="Iops" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.property.iops"></a>

```csharp
public double Iops { get; }
```

- *Type:* double

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; }
```

- *Type:* string

---

##### `SnapshotId`<sup>Required</sup> <a name="SnapshotId" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.property.snapshotId"></a>

```csharp
public string SnapshotId { get; }
```

- *Type:* string

---

##### `Throughput`<sup>Required</sup> <a name="Throughput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.property.throughput"></a>

```csharp
public double Throughput { get; }
```

- *Type:* double

---

##### `VolumeInitializationRate`<sup>Required</sup> <a name="VolumeInitializationRate" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.property.volumeInitializationRate"></a>

```csharp
public double VolumeInitializationRate { get; }
```

- *Type:* double

---

##### `VolumeSize`<sup>Required</sup> <a name="VolumeSize" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.property.volumeSize"></a>

```csharp
public double VolumeSize { get; }
```

- *Type:* double

---

##### `VolumeType`<sup>Required</sup> <a name="VolumeType" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.property.volumeType"></a>

```csharp
public string VolumeType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference.property.internalValue"></a>

```csharp
public LaunchTemplateBlockDeviceMappingsEbs InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbs">LaunchTemplateBlockDeviceMappingsEbs</a>

---


### LaunchTemplateBlockDeviceMappingsList <a name="LaunchTemplateBlockDeviceMappingsList" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LaunchTemplateBlockDeviceMappingsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsList.get"></a>

```csharp
private LaunchTemplateBlockDeviceMappingsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### LaunchTemplateBlockDeviceMappingsOutputReference <a name="LaunchTemplateBlockDeviceMappingsOutputReference" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LaunchTemplateBlockDeviceMappingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.putEbs">PutEbs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.resetDeviceName">ResetDeviceName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.resetEbs">ResetEbs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.resetNoDevice">ResetNoDevice</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.resetVirtualName">ResetVirtualName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEbs` <a name="PutEbs" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.putEbs"></a>

```csharp
private void PutEbs(LaunchTemplateBlockDeviceMappingsEbs Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.putEbs.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbs">LaunchTemplateBlockDeviceMappingsEbs</a>

---

##### `ResetDeviceName` <a name="ResetDeviceName" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.resetDeviceName"></a>

```csharp
private void ResetDeviceName()
```

##### `ResetEbs` <a name="ResetEbs" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.resetEbs"></a>

```csharp
private void ResetEbs()
```

##### `ResetNoDevice` <a name="ResetNoDevice" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.resetNoDevice"></a>

```csharp
private void ResetNoDevice()
```

##### `ResetVirtualName` <a name="ResetVirtualName" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.resetVirtualName"></a>

```csharp
private void ResetVirtualName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.property.ebs">Ebs</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference">LaunchTemplateBlockDeviceMappingsEbsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.property.deviceNameInput">DeviceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.property.ebsInput">EbsInput</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbs">LaunchTemplateBlockDeviceMappingsEbs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.property.noDeviceInput">NoDeviceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.property.virtualNameInput">VirtualNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.property.deviceName">DeviceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.property.noDevice">NoDevice</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.property.virtualName">VirtualName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Ebs`<sup>Required</sup> <a name="Ebs" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.property.ebs"></a>

```csharp
public LaunchTemplateBlockDeviceMappingsEbsOutputReference Ebs { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbsOutputReference">LaunchTemplateBlockDeviceMappingsEbsOutputReference</a>

---

##### `DeviceNameInput`<sup>Optional</sup> <a name="DeviceNameInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.property.deviceNameInput"></a>

```csharp
public string DeviceNameInput { get; }
```

- *Type:* string

---

##### `EbsInput`<sup>Optional</sup> <a name="EbsInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.property.ebsInput"></a>

```csharp
public LaunchTemplateBlockDeviceMappingsEbs EbsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsEbs">LaunchTemplateBlockDeviceMappingsEbs</a>

---

##### `NoDeviceInput`<sup>Optional</sup> <a name="NoDeviceInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.property.noDeviceInput"></a>

```csharp
public string NoDeviceInput { get; }
```

- *Type:* string

---

##### `VirtualNameInput`<sup>Optional</sup> <a name="VirtualNameInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.property.virtualNameInput"></a>

```csharp
public string VirtualNameInput { get; }
```

- *Type:* string

---

##### `DeviceName`<sup>Required</sup> <a name="DeviceName" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.property.deviceName"></a>

```csharp
public string DeviceName { get; }
```

- *Type:* string

---

##### `NoDevice`<sup>Required</sup> <a name="NoDevice" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.property.noDevice"></a>

```csharp
public string NoDevice { get; }
```

- *Type:* string

---

##### `VirtualName`<sup>Required</sup> <a name="VirtualName" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.property.virtualName"></a>

```csharp
public string VirtualName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateBlockDeviceMappingsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference <a name="LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.resetCapacityReservationId">ResetCapacityReservationId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.resetCapacityReservationResourceGroupArn">ResetCapacityReservationResourceGroupArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCapacityReservationId` <a name="ResetCapacityReservationId" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.resetCapacityReservationId"></a>

```csharp
private void ResetCapacityReservationId()
```

##### `ResetCapacityReservationResourceGroupArn` <a name="ResetCapacityReservationResourceGroupArn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.resetCapacityReservationResourceGroupArn"></a>

```csharp
private void ResetCapacityReservationResourceGroupArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.capacityReservationIdInput">CapacityReservationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.capacityReservationResourceGroupArnInput">CapacityReservationResourceGroupArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.capacityReservationId">CapacityReservationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.capacityReservationResourceGroupArn">CapacityReservationResourceGroupArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTarget">LaunchTemplateCapacityReservationSpecificationCapacityReservationTarget</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CapacityReservationIdInput`<sup>Optional</sup> <a name="CapacityReservationIdInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.capacityReservationIdInput"></a>

```csharp
public string CapacityReservationIdInput { get; }
```

- *Type:* string

---

##### `CapacityReservationResourceGroupArnInput`<sup>Optional</sup> <a name="CapacityReservationResourceGroupArnInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.capacityReservationResourceGroupArnInput"></a>

```csharp
public string CapacityReservationResourceGroupArnInput { get; }
```

- *Type:* string

---

##### `CapacityReservationId`<sup>Required</sup> <a name="CapacityReservationId" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.capacityReservationId"></a>

```csharp
public string CapacityReservationId { get; }
```

- *Type:* string

---

##### `CapacityReservationResourceGroupArn`<sup>Required</sup> <a name="CapacityReservationResourceGroupArn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.capacityReservationResourceGroupArn"></a>

```csharp
public string CapacityReservationResourceGroupArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.internalValue"></a>

```csharp
public LaunchTemplateCapacityReservationSpecificationCapacityReservationTarget InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTarget">LaunchTemplateCapacityReservationSpecificationCapacityReservationTarget</a>

---


### LaunchTemplateCapacityReservationSpecificationOutputReference <a name="LaunchTemplateCapacityReservationSpecificationOutputReference" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LaunchTemplateCapacityReservationSpecificationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.putCapacityReservationTarget">PutCapacityReservationTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.resetCapacityReservationPreference">ResetCapacityReservationPreference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.resetCapacityReservationTarget">ResetCapacityReservationTarget</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCapacityReservationTarget` <a name="PutCapacityReservationTarget" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.putCapacityReservationTarget"></a>

```csharp
private void PutCapacityReservationTarget(LaunchTemplateCapacityReservationSpecificationCapacityReservationTarget Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.putCapacityReservationTarget.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTarget">LaunchTemplateCapacityReservationSpecificationCapacityReservationTarget</a>

---

##### `ResetCapacityReservationPreference` <a name="ResetCapacityReservationPreference" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.resetCapacityReservationPreference"></a>

```csharp
private void ResetCapacityReservationPreference()
```

##### `ResetCapacityReservationTarget` <a name="ResetCapacityReservationTarget" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.resetCapacityReservationTarget"></a>

```csharp
private void ResetCapacityReservationTarget()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.property.capacityReservationTarget">CapacityReservationTarget</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference">LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.property.capacityReservationPreferenceInput">CapacityReservationPreferenceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.property.capacityReservationTargetInput">CapacityReservationTargetInput</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTarget">LaunchTemplateCapacityReservationSpecificationCapacityReservationTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.property.capacityReservationPreference">CapacityReservationPreference</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecification">LaunchTemplateCapacityReservationSpecification</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CapacityReservationTarget`<sup>Required</sup> <a name="CapacityReservationTarget" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.property.capacityReservationTarget"></a>

```csharp
public LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference CapacityReservationTarget { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference">LaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference</a>

---

##### `CapacityReservationPreferenceInput`<sup>Optional</sup> <a name="CapacityReservationPreferenceInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.property.capacityReservationPreferenceInput"></a>

```csharp
public string CapacityReservationPreferenceInput { get; }
```

- *Type:* string

---

##### `CapacityReservationTargetInput`<sup>Optional</sup> <a name="CapacityReservationTargetInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.property.capacityReservationTargetInput"></a>

```csharp
public LaunchTemplateCapacityReservationSpecificationCapacityReservationTarget CapacityReservationTargetInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationCapacityReservationTarget">LaunchTemplateCapacityReservationSpecificationCapacityReservationTarget</a>

---

##### `CapacityReservationPreference`<sup>Required</sup> <a name="CapacityReservationPreference" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.property.capacityReservationPreference"></a>

```csharp
public string CapacityReservationPreference { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecificationOutputReference.property.internalValue"></a>

```csharp
public LaunchTemplateCapacityReservationSpecification InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCapacityReservationSpecification">LaunchTemplateCapacityReservationSpecification</a>

---


### LaunchTemplateCpuOptionsOutputReference <a name="LaunchTemplateCpuOptionsOutputReference" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCpuOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCpuOptionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LaunchTemplateCpuOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCpuOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCpuOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCpuOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCpuOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCpuOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCpuOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCpuOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCpuOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCpuOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCpuOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCpuOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCpuOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCpuOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCpuOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCpuOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCpuOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCpuOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCpuOptionsOutputReference.resetAmdSevSnp">ResetAmdSevSnp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCpuOptionsOutputReference.resetCoreCount">ResetCoreCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCpuOptionsOutputReference.resetThreadsPerCore">ResetThreadsPerCore</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCpuOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCpuOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCpuOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCpuOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCpuOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCpuOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCpuOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCpuOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCpuOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCpuOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCpuOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCpuOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCpuOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCpuOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCpuOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCpuOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCpuOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCpuOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCpuOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCpuOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCpuOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCpuOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCpuOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCpuOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAmdSevSnp` <a name="ResetAmdSevSnp" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCpuOptionsOutputReference.resetAmdSevSnp"></a>

```csharp
private void ResetAmdSevSnp()
```

##### `ResetCoreCount` <a name="ResetCoreCount" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCpuOptionsOutputReference.resetCoreCount"></a>

```csharp
private void ResetCoreCount()
```

##### `ResetThreadsPerCore` <a name="ResetThreadsPerCore" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCpuOptionsOutputReference.resetThreadsPerCore"></a>

```csharp
private void ResetThreadsPerCore()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCpuOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCpuOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCpuOptionsOutputReference.property.amdSevSnpInput">AmdSevSnpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCpuOptionsOutputReference.property.coreCountInput">CoreCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCpuOptionsOutputReference.property.threadsPerCoreInput">ThreadsPerCoreInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCpuOptionsOutputReference.property.amdSevSnp">AmdSevSnp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCpuOptionsOutputReference.property.coreCount">CoreCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCpuOptionsOutputReference.property.threadsPerCore">ThreadsPerCore</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCpuOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCpuOptions">LaunchTemplateCpuOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCpuOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCpuOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AmdSevSnpInput`<sup>Optional</sup> <a name="AmdSevSnpInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCpuOptionsOutputReference.property.amdSevSnpInput"></a>

```csharp
public string AmdSevSnpInput { get; }
```

- *Type:* string

---

##### `CoreCountInput`<sup>Optional</sup> <a name="CoreCountInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCpuOptionsOutputReference.property.coreCountInput"></a>

```csharp
public double CoreCountInput { get; }
```

- *Type:* double

---

##### `ThreadsPerCoreInput`<sup>Optional</sup> <a name="ThreadsPerCoreInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCpuOptionsOutputReference.property.threadsPerCoreInput"></a>

```csharp
public double ThreadsPerCoreInput { get; }
```

- *Type:* double

---

##### `AmdSevSnp`<sup>Required</sup> <a name="AmdSevSnp" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCpuOptionsOutputReference.property.amdSevSnp"></a>

```csharp
public string AmdSevSnp { get; }
```

- *Type:* string

---

##### `CoreCount`<sup>Required</sup> <a name="CoreCount" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCpuOptionsOutputReference.property.coreCount"></a>

```csharp
public double CoreCount { get; }
```

- *Type:* double

---

##### `ThreadsPerCore`<sup>Required</sup> <a name="ThreadsPerCore" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCpuOptionsOutputReference.property.threadsPerCore"></a>

```csharp
public double ThreadsPerCore { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCpuOptionsOutputReference.property.internalValue"></a>

```csharp
public LaunchTemplateCpuOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCpuOptions">LaunchTemplateCpuOptions</a>

---


### LaunchTemplateCreditSpecificationOutputReference <a name="LaunchTemplateCreditSpecificationOutputReference" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCreditSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCreditSpecificationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LaunchTemplateCreditSpecificationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCreditSpecificationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCreditSpecificationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCreditSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCreditSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCreditSpecificationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCreditSpecificationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCreditSpecificationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCreditSpecificationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCreditSpecificationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCreditSpecificationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCreditSpecificationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCreditSpecificationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCreditSpecificationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCreditSpecificationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCreditSpecificationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCreditSpecificationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCreditSpecificationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCreditSpecificationOutputReference.resetCpuCredits">ResetCpuCredits</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCreditSpecificationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCreditSpecificationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCreditSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCreditSpecificationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCreditSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCreditSpecificationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCreditSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCreditSpecificationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCreditSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCreditSpecificationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCreditSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCreditSpecificationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCreditSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCreditSpecificationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCreditSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCreditSpecificationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCreditSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCreditSpecificationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCreditSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCreditSpecificationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCreditSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCreditSpecificationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCreditSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCreditSpecificationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCpuCredits` <a name="ResetCpuCredits" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCreditSpecificationOutputReference.resetCpuCredits"></a>

```csharp
private void ResetCpuCredits()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCreditSpecificationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCreditSpecificationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCreditSpecificationOutputReference.property.cpuCreditsInput">CpuCreditsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCreditSpecificationOutputReference.property.cpuCredits">CpuCredits</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCreditSpecificationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCreditSpecification">LaunchTemplateCreditSpecification</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCreditSpecificationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCreditSpecificationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CpuCreditsInput`<sup>Optional</sup> <a name="CpuCreditsInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCreditSpecificationOutputReference.property.cpuCreditsInput"></a>

```csharp
public string CpuCreditsInput { get; }
```

- *Type:* string

---

##### `CpuCredits`<sup>Required</sup> <a name="CpuCredits" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCreditSpecificationOutputReference.property.cpuCredits"></a>

```csharp
public string CpuCredits { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateCreditSpecificationOutputReference.property.internalValue"></a>

```csharp
public LaunchTemplateCreditSpecification InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateCreditSpecification">LaunchTemplateCreditSpecification</a>

---


### LaunchTemplateEnclaveOptionsOutputReference <a name="LaunchTemplateEnclaveOptionsOutputReference" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateEnclaveOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateEnclaveOptionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LaunchTemplateEnclaveOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateEnclaveOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateEnclaveOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateEnclaveOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateEnclaveOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateEnclaveOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateEnclaveOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateEnclaveOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateEnclaveOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateEnclaveOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateEnclaveOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateEnclaveOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateEnclaveOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateEnclaveOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateEnclaveOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateEnclaveOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateEnclaveOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateEnclaveOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateEnclaveOptionsOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateEnclaveOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateEnclaveOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateEnclaveOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateEnclaveOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateEnclaveOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateEnclaveOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateEnclaveOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateEnclaveOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateEnclaveOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateEnclaveOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateEnclaveOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateEnclaveOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateEnclaveOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateEnclaveOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateEnclaveOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateEnclaveOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateEnclaveOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateEnclaveOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateEnclaveOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateEnclaveOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateEnclaveOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateEnclaveOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateEnclaveOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateEnclaveOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateEnclaveOptionsOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateEnclaveOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateEnclaveOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateEnclaveOptionsOutputReference.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateEnclaveOptionsOutputReference.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateEnclaveOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateEnclaveOptions">LaunchTemplateEnclaveOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateEnclaveOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateEnclaveOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateEnclaveOptionsOutputReference.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateEnclaveOptionsOutputReference.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateEnclaveOptionsOutputReference.property.internalValue"></a>

```csharp
public LaunchTemplateEnclaveOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateEnclaveOptions">LaunchTemplateEnclaveOptions</a>

---


### LaunchTemplateHibernationOptionsOutputReference <a name="LaunchTemplateHibernationOptionsOutputReference" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateHibernationOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateHibernationOptionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LaunchTemplateHibernationOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateHibernationOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateHibernationOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateHibernationOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateHibernationOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateHibernationOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateHibernationOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateHibernationOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateHibernationOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateHibernationOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateHibernationOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateHibernationOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateHibernationOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateHibernationOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateHibernationOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateHibernationOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateHibernationOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateHibernationOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateHibernationOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateHibernationOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateHibernationOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateHibernationOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateHibernationOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateHibernationOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateHibernationOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateHibernationOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateHibernationOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateHibernationOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateHibernationOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateHibernationOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateHibernationOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateHibernationOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateHibernationOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateHibernationOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateHibernationOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateHibernationOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateHibernationOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateHibernationOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateHibernationOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateHibernationOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateHibernationOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateHibernationOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateHibernationOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateHibernationOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateHibernationOptionsOutputReference.property.configuredInput">ConfiguredInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateHibernationOptionsOutputReference.property.configured">Configured</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateHibernationOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateHibernationOptions">LaunchTemplateHibernationOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateHibernationOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateHibernationOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConfiguredInput`<sup>Optional</sup> <a name="ConfiguredInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateHibernationOptionsOutputReference.property.configuredInput"></a>

```csharp
public object ConfiguredInput { get; }
```

- *Type:* object

---

##### `Configured`<sup>Required</sup> <a name="Configured" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateHibernationOptionsOutputReference.property.configured"></a>

```csharp
public object Configured { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateHibernationOptionsOutputReference.property.internalValue"></a>

```csharp
public LaunchTemplateHibernationOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateHibernationOptions">LaunchTemplateHibernationOptions</a>

---


### LaunchTemplateIamInstanceProfileOutputReference <a name="LaunchTemplateIamInstanceProfileOutputReference" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LaunchTemplateIamInstanceProfileOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference.resetArn">ResetArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetArn` <a name="ResetArn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference.resetArn"></a>

```csharp
private void ResetArn()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference.resetName"></a>

```csharp
private void ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference.property.arnInput">ArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateIamInstanceProfile">LaunchTemplateIamInstanceProfile</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ArnInput`<sup>Optional</sup> <a name="ArnInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference.property.arnInput"></a>

```csharp
public string ArnInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateIamInstanceProfileOutputReference.property.internalValue"></a>

```csharp
public LaunchTemplateIamInstanceProfile InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateIamInstanceProfile">LaunchTemplateIamInstanceProfile</a>

---


### LaunchTemplateInstanceMarketOptionsOutputReference <a name="LaunchTemplateInstanceMarketOptionsOutputReference" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LaunchTemplateInstanceMarketOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.putSpotOptions">PutSpotOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.resetMarketType">ResetMarketType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.resetSpotOptions">ResetSpotOptions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSpotOptions` <a name="PutSpotOptions" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.putSpotOptions"></a>

```csharp
private void PutSpotOptions(LaunchTemplateInstanceMarketOptionsSpotOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.putSpotOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptions">LaunchTemplateInstanceMarketOptionsSpotOptions</a>

---

##### `ResetMarketType` <a name="ResetMarketType" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.resetMarketType"></a>

```csharp
private void ResetMarketType()
```

##### `ResetSpotOptions` <a name="ResetSpotOptions" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.resetSpotOptions"></a>

```csharp
private void ResetSpotOptions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.property.spotOptions">SpotOptions</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference">LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.property.marketTypeInput">MarketTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.property.spotOptionsInput">SpotOptionsInput</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptions">LaunchTemplateInstanceMarketOptionsSpotOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.property.marketType">MarketType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptions">LaunchTemplateInstanceMarketOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SpotOptions`<sup>Required</sup> <a name="SpotOptions" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.property.spotOptions"></a>

```csharp
public LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference SpotOptions { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference">LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference</a>

---

##### `MarketTypeInput`<sup>Optional</sup> <a name="MarketTypeInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.property.marketTypeInput"></a>

```csharp
public string MarketTypeInput { get; }
```

- *Type:* string

---

##### `SpotOptionsInput`<sup>Optional</sup> <a name="SpotOptionsInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.property.spotOptionsInput"></a>

```csharp
public LaunchTemplateInstanceMarketOptionsSpotOptions SpotOptionsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptions">LaunchTemplateInstanceMarketOptionsSpotOptions</a>

---

##### `MarketType`<sup>Required</sup> <a name="MarketType" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.property.marketType"></a>

```csharp
public string MarketType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsOutputReference.property.internalValue"></a>

```csharp
public LaunchTemplateInstanceMarketOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptions">LaunchTemplateInstanceMarketOptions</a>

---


### LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference <a name="LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.resetBlockDurationMinutes">ResetBlockDurationMinutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.resetInstanceInterruptionBehavior">ResetInstanceInterruptionBehavior</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.resetMaxPrice">ResetMaxPrice</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.resetSpotInstanceType">ResetSpotInstanceType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.resetValidUntil">ResetValidUntil</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBlockDurationMinutes` <a name="ResetBlockDurationMinutes" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.resetBlockDurationMinutes"></a>

```csharp
private void ResetBlockDurationMinutes()
```

##### `ResetInstanceInterruptionBehavior` <a name="ResetInstanceInterruptionBehavior" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.resetInstanceInterruptionBehavior"></a>

```csharp
private void ResetInstanceInterruptionBehavior()
```

##### `ResetMaxPrice` <a name="ResetMaxPrice" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.resetMaxPrice"></a>

```csharp
private void ResetMaxPrice()
```

##### `ResetSpotInstanceType` <a name="ResetSpotInstanceType" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.resetSpotInstanceType"></a>

```csharp
private void ResetSpotInstanceType()
```

##### `ResetValidUntil` <a name="ResetValidUntil" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.resetValidUntil"></a>

```csharp
private void ResetValidUntil()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.property.blockDurationMinutesInput">BlockDurationMinutesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.property.instanceInterruptionBehaviorInput">InstanceInterruptionBehaviorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.property.maxPriceInput">MaxPriceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.property.spotInstanceTypeInput">SpotInstanceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.property.validUntilInput">ValidUntilInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.property.blockDurationMinutes">BlockDurationMinutes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.property.instanceInterruptionBehavior">InstanceInterruptionBehavior</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.property.maxPrice">MaxPrice</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.property.spotInstanceType">SpotInstanceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.property.validUntil">ValidUntil</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptions">LaunchTemplateInstanceMarketOptionsSpotOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BlockDurationMinutesInput`<sup>Optional</sup> <a name="BlockDurationMinutesInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.property.blockDurationMinutesInput"></a>

```csharp
public double BlockDurationMinutesInput { get; }
```

- *Type:* double

---

##### `InstanceInterruptionBehaviorInput`<sup>Optional</sup> <a name="InstanceInterruptionBehaviorInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.property.instanceInterruptionBehaviorInput"></a>

```csharp
public string InstanceInterruptionBehaviorInput { get; }
```

- *Type:* string

---

##### `MaxPriceInput`<sup>Optional</sup> <a name="MaxPriceInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.property.maxPriceInput"></a>

```csharp
public string MaxPriceInput { get; }
```

- *Type:* string

---

##### `SpotInstanceTypeInput`<sup>Optional</sup> <a name="SpotInstanceTypeInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.property.spotInstanceTypeInput"></a>

```csharp
public string SpotInstanceTypeInput { get; }
```

- *Type:* string

---

##### `ValidUntilInput`<sup>Optional</sup> <a name="ValidUntilInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.property.validUntilInput"></a>

```csharp
public string ValidUntilInput { get; }
```

- *Type:* string

---

##### `BlockDurationMinutes`<sup>Required</sup> <a name="BlockDurationMinutes" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.property.blockDurationMinutes"></a>

```csharp
public double BlockDurationMinutes { get; }
```

- *Type:* double

---

##### `InstanceInterruptionBehavior`<sup>Required</sup> <a name="InstanceInterruptionBehavior" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.property.instanceInterruptionBehavior"></a>

```csharp
public string InstanceInterruptionBehavior { get; }
```

- *Type:* string

---

##### `MaxPrice`<sup>Required</sup> <a name="MaxPrice" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.property.maxPrice"></a>

```csharp
public string MaxPrice { get; }
```

- *Type:* string

---

##### `SpotInstanceType`<sup>Required</sup> <a name="SpotInstanceType" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.property.spotInstanceType"></a>

```csharp
public string SpotInstanceType { get; }
```

- *Type:* string

---

##### `ValidUntil`<sup>Required</sup> <a name="ValidUntil" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.property.validUntil"></a>

```csharp
public string ValidUntil { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.property.internalValue"></a>

```csharp
public LaunchTemplateInstanceMarketOptionsSpotOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceMarketOptionsSpotOptions">LaunchTemplateInstanceMarketOptionsSpotOptions</a>

---


### LaunchTemplateInstanceRequirementsAcceleratorCountOutputReference <a name="LaunchTemplateInstanceRequirementsAcceleratorCountOutputReference" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorCountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LaunchTemplateInstanceRequirementsAcceleratorCountOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.resetMax">ResetMax</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.resetMin">ResetMin</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMax` <a name="ResetMax" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.resetMax"></a>

```csharp
private void ResetMax()
```

##### `ResetMin` <a name="ResetMin" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.resetMin"></a>

```csharp
private void ResetMin()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.property.maxInput">MaxInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.property.minInput">MinInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.property.max">Max</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.property.min">Min</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorCount">LaunchTemplateInstanceRequirementsAcceleratorCount</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaxInput`<sup>Optional</sup> <a name="MaxInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.property.maxInput"></a>

```csharp
public double MaxInput { get; }
```

- *Type:* double

---

##### `MinInput`<sup>Optional</sup> <a name="MinInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.property.minInput"></a>

```csharp
public double MinInput { get; }
```

- *Type:* double

---

##### `Max`<sup>Required</sup> <a name="Max" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.property.max"></a>

```csharp
public double Max { get; }
```

- *Type:* double

---

##### `Min`<sup>Required</sup> <a name="Min" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.property.min"></a>

```csharp
public double Min { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.property.internalValue"></a>

```csharp
public LaunchTemplateInstanceRequirementsAcceleratorCount InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorCount">LaunchTemplateInstanceRequirementsAcceleratorCount</a>

---


### LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference <a name="LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.resetMax">ResetMax</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.resetMin">ResetMin</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMax` <a name="ResetMax" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.resetMax"></a>

```csharp
private void ResetMax()
```

##### `ResetMin` <a name="ResetMin" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.resetMin"></a>

```csharp
private void ResetMin()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.property.maxInput">MaxInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.property.minInput">MinInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.property.max">Max</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.property.min">Min</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMib">LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMib</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaxInput`<sup>Optional</sup> <a name="MaxInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.property.maxInput"></a>

```csharp
public double MaxInput { get; }
```

- *Type:* double

---

##### `MinInput`<sup>Optional</sup> <a name="MinInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.property.minInput"></a>

```csharp
public double MinInput { get; }
```

- *Type:* double

---

##### `Max`<sup>Required</sup> <a name="Max" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.property.max"></a>

```csharp
public double Max { get; }
```

- *Type:* double

---

##### `Min`<sup>Required</sup> <a name="Min" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.property.min"></a>

```csharp
public double Min { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.property.internalValue"></a>

```csharp
public LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMib InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMib">LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMib</a>

---


### LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference <a name="LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.resetMax">ResetMax</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.resetMin">ResetMin</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMax` <a name="ResetMax" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.resetMax"></a>

```csharp
private void ResetMax()
```

##### `ResetMin` <a name="ResetMin" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.resetMin"></a>

```csharp
private void ResetMin()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.property.maxInput">MaxInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.property.minInput">MinInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.property.max">Max</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.property.min">Min</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbps">LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbps</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaxInput`<sup>Optional</sup> <a name="MaxInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.property.maxInput"></a>

```csharp
public double MaxInput { get; }
```

- *Type:* double

---

##### `MinInput`<sup>Optional</sup> <a name="MinInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.property.minInput"></a>

```csharp
public double MinInput { get; }
```

- *Type:* double

---

##### `Max`<sup>Required</sup> <a name="Max" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.property.max"></a>

```csharp
public double Max { get; }
```

- *Type:* double

---

##### `Min`<sup>Required</sup> <a name="Min" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.property.min"></a>

```csharp
public double Min { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.property.internalValue"></a>

```csharp
public LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbps InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbps">LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbps</a>

---


### LaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference <a name="LaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.resetMax">ResetMax</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.resetMin">ResetMin</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMax` <a name="ResetMax" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.resetMax"></a>

```csharp
private void ResetMax()
```

##### `ResetMin` <a name="ResetMin" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.resetMin"></a>

```csharp
private void ResetMin()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.property.maxInput">MaxInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.property.minInput">MinInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.property.max">Max</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.property.min">Min</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryGibPerVcpu">LaunchTemplateInstanceRequirementsMemoryGibPerVcpu</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaxInput`<sup>Optional</sup> <a name="MaxInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.property.maxInput"></a>

```csharp
public double MaxInput { get; }
```

- *Type:* double

---

##### `MinInput`<sup>Optional</sup> <a name="MinInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.property.minInput"></a>

```csharp
public double MinInput { get; }
```

- *Type:* double

---

##### `Max`<sup>Required</sup> <a name="Max" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.property.max"></a>

```csharp
public double Max { get; }
```

- *Type:* double

---

##### `Min`<sup>Required</sup> <a name="Min" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.property.min"></a>

```csharp
public double Min { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.property.internalValue"></a>

```csharp
public LaunchTemplateInstanceRequirementsMemoryGibPerVcpu InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryGibPerVcpu">LaunchTemplateInstanceRequirementsMemoryGibPerVcpu</a>

---


### LaunchTemplateInstanceRequirementsMemoryMibOutputReference <a name="LaunchTemplateInstanceRequirementsMemoryMibOutputReference" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryMibOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryMibOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LaunchTemplateInstanceRequirementsMemoryMibOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryMibOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryMibOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryMibOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryMibOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryMibOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryMibOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryMibOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryMibOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryMibOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryMibOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryMibOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryMibOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryMibOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryMibOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryMibOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryMibOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryMibOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryMibOutputReference.resetMax">ResetMax</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryMibOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryMibOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryMibOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryMibOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryMibOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryMibOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryMibOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryMibOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryMibOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryMibOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryMibOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryMibOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryMibOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryMibOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryMibOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryMibOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryMibOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryMibOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryMibOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryMibOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryMibOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryMibOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryMibOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryMibOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMax` <a name="ResetMax" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryMibOutputReference.resetMax"></a>

```csharp
private void ResetMax()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryMibOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryMibOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryMibOutputReference.property.maxInput">MaxInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryMibOutputReference.property.minInput">MinInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryMibOutputReference.property.max">Max</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryMibOutputReference.property.min">Min</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryMibOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryMib">LaunchTemplateInstanceRequirementsMemoryMib</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryMibOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryMibOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaxInput`<sup>Optional</sup> <a name="MaxInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryMibOutputReference.property.maxInput"></a>

```csharp
public double MaxInput { get; }
```

- *Type:* double

---

##### `MinInput`<sup>Optional</sup> <a name="MinInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryMibOutputReference.property.minInput"></a>

```csharp
public double MinInput { get; }
```

- *Type:* double

---

##### `Max`<sup>Required</sup> <a name="Max" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryMibOutputReference.property.max"></a>

```csharp
public double Max { get; }
```

- *Type:* double

---

##### `Min`<sup>Required</sup> <a name="Min" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryMibOutputReference.property.min"></a>

```csharp
public double Min { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryMibOutputReference.property.internalValue"></a>

```csharp
public LaunchTemplateInstanceRequirementsMemoryMib InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryMib">LaunchTemplateInstanceRequirementsMemoryMib</a>

---


### LaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference <a name="LaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference.resetMax">ResetMax</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference.resetMin">ResetMin</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMax` <a name="ResetMax" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference.resetMax"></a>

```csharp
private void ResetMax()
```

##### `ResetMin` <a name="ResetMin" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference.resetMin"></a>

```csharp
private void ResetMin()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference.property.maxInput">MaxInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference.property.minInput">MinInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference.property.max">Max</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference.property.min">Min</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkBandwidthGbps">LaunchTemplateInstanceRequirementsNetworkBandwidthGbps</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaxInput`<sup>Optional</sup> <a name="MaxInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference.property.maxInput"></a>

```csharp
public double MaxInput { get; }
```

- *Type:* double

---

##### `MinInput`<sup>Optional</sup> <a name="MinInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference.property.minInput"></a>

```csharp
public double MinInput { get; }
```

- *Type:* double

---

##### `Max`<sup>Required</sup> <a name="Max" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference.property.max"></a>

```csharp
public double Max { get; }
```

- *Type:* double

---

##### `Min`<sup>Required</sup> <a name="Min" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference.property.min"></a>

```csharp
public double Min { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference.property.internalValue"></a>

```csharp
public LaunchTemplateInstanceRequirementsNetworkBandwidthGbps InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkBandwidthGbps">LaunchTemplateInstanceRequirementsNetworkBandwidthGbps</a>

---


### LaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference <a name="LaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.resetMax">ResetMax</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.resetMin">ResetMin</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMax` <a name="ResetMax" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.resetMax"></a>

```csharp
private void ResetMax()
```

##### `ResetMin` <a name="ResetMin" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.resetMin"></a>

```csharp
private void ResetMin()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.property.maxInput">MaxInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.property.minInput">MinInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.property.max">Max</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.property.min">Min</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkInterfaceCount">LaunchTemplateInstanceRequirementsNetworkInterfaceCount</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaxInput`<sup>Optional</sup> <a name="MaxInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.property.maxInput"></a>

```csharp
public double MaxInput { get; }
```

- *Type:* double

---

##### `MinInput`<sup>Optional</sup> <a name="MinInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.property.minInput"></a>

```csharp
public double MinInput { get; }
```

- *Type:* double

---

##### `Max`<sup>Required</sup> <a name="Max" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.property.max"></a>

```csharp
public double Max { get; }
```

- *Type:* double

---

##### `Min`<sup>Required</sup> <a name="Min" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.property.min"></a>

```csharp
public double Min { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.property.internalValue"></a>

```csharp
public LaunchTemplateInstanceRequirementsNetworkInterfaceCount InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkInterfaceCount">LaunchTemplateInstanceRequirementsNetworkInterfaceCount</a>

---


### LaunchTemplateInstanceRequirementsOutputReference <a name="LaunchTemplateInstanceRequirementsOutputReference" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LaunchTemplateInstanceRequirementsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.putAcceleratorCount">PutAcceleratorCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.putAcceleratorTotalMemoryMib">PutAcceleratorTotalMemoryMib</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.putBaselineEbsBandwidthMbps">PutBaselineEbsBandwidthMbps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.putMemoryGibPerVcpu">PutMemoryGibPerVcpu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.putMemoryMib">PutMemoryMib</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.putNetworkBandwidthGbps">PutNetworkBandwidthGbps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.putNetworkInterfaceCount">PutNetworkInterfaceCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.putTotalLocalStorageGb">PutTotalLocalStorageGb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.putVcpuCount">PutVcpuCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.resetAcceleratorCount">ResetAcceleratorCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.resetAcceleratorManufacturers">ResetAcceleratorManufacturers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.resetAcceleratorNames">ResetAcceleratorNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.resetAcceleratorTotalMemoryMib">ResetAcceleratorTotalMemoryMib</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.resetAcceleratorTypes">ResetAcceleratorTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.resetAllowedInstanceTypes">ResetAllowedInstanceTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.resetBareMetal">ResetBareMetal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.resetBaselineEbsBandwidthMbps">ResetBaselineEbsBandwidthMbps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.resetBurstablePerformance">ResetBurstablePerformance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.resetCpuManufacturers">ResetCpuManufacturers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.resetExcludedInstanceTypes">ResetExcludedInstanceTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.resetInstanceGenerations">ResetInstanceGenerations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.resetLocalStorage">ResetLocalStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.resetLocalStorageTypes">ResetLocalStorageTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.resetMaxSpotPriceAsPercentageOfOptimalOnDemandPrice">ResetMaxSpotPriceAsPercentageOfOptimalOnDemandPrice</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.resetMemoryGibPerVcpu">ResetMemoryGibPerVcpu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.resetNetworkBandwidthGbps">ResetNetworkBandwidthGbps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.resetNetworkInterfaceCount">ResetNetworkInterfaceCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.resetOnDemandMaxPricePercentageOverLowestPrice">ResetOnDemandMaxPricePercentageOverLowestPrice</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.resetRequireHibernateSupport">ResetRequireHibernateSupport</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.resetSpotMaxPricePercentageOverLowestPrice">ResetSpotMaxPricePercentageOverLowestPrice</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.resetTotalLocalStorageGb">ResetTotalLocalStorageGb</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAcceleratorCount` <a name="PutAcceleratorCount" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.putAcceleratorCount"></a>

```csharp
private void PutAcceleratorCount(LaunchTemplateInstanceRequirementsAcceleratorCount Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.putAcceleratorCount.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorCount">LaunchTemplateInstanceRequirementsAcceleratorCount</a>

---

##### `PutAcceleratorTotalMemoryMib` <a name="PutAcceleratorTotalMemoryMib" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.putAcceleratorTotalMemoryMib"></a>

```csharp
private void PutAcceleratorTotalMemoryMib(LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMib Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.putAcceleratorTotalMemoryMib.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMib">LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMib</a>

---

##### `PutBaselineEbsBandwidthMbps` <a name="PutBaselineEbsBandwidthMbps" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.putBaselineEbsBandwidthMbps"></a>

```csharp
private void PutBaselineEbsBandwidthMbps(LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbps Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.putBaselineEbsBandwidthMbps.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbps">LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbps</a>

---

##### `PutMemoryGibPerVcpu` <a name="PutMemoryGibPerVcpu" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.putMemoryGibPerVcpu"></a>

```csharp
private void PutMemoryGibPerVcpu(LaunchTemplateInstanceRequirementsMemoryGibPerVcpu Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.putMemoryGibPerVcpu.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryGibPerVcpu">LaunchTemplateInstanceRequirementsMemoryGibPerVcpu</a>

---

##### `PutMemoryMib` <a name="PutMemoryMib" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.putMemoryMib"></a>

```csharp
private void PutMemoryMib(LaunchTemplateInstanceRequirementsMemoryMib Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.putMemoryMib.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryMib">LaunchTemplateInstanceRequirementsMemoryMib</a>

---

##### `PutNetworkBandwidthGbps` <a name="PutNetworkBandwidthGbps" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.putNetworkBandwidthGbps"></a>

```csharp
private void PutNetworkBandwidthGbps(LaunchTemplateInstanceRequirementsNetworkBandwidthGbps Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.putNetworkBandwidthGbps.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkBandwidthGbps">LaunchTemplateInstanceRequirementsNetworkBandwidthGbps</a>

---

##### `PutNetworkInterfaceCount` <a name="PutNetworkInterfaceCount" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.putNetworkInterfaceCount"></a>

```csharp
private void PutNetworkInterfaceCount(LaunchTemplateInstanceRequirementsNetworkInterfaceCount Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.putNetworkInterfaceCount.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkInterfaceCount">LaunchTemplateInstanceRequirementsNetworkInterfaceCount</a>

---

##### `PutTotalLocalStorageGb` <a name="PutTotalLocalStorageGb" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.putTotalLocalStorageGb"></a>

```csharp
private void PutTotalLocalStorageGb(LaunchTemplateInstanceRequirementsTotalLocalStorageGb Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.putTotalLocalStorageGb.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsTotalLocalStorageGb">LaunchTemplateInstanceRequirementsTotalLocalStorageGb</a>

---

##### `PutVcpuCount` <a name="PutVcpuCount" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.putVcpuCount"></a>

```csharp
private void PutVcpuCount(LaunchTemplateInstanceRequirementsVcpuCount Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.putVcpuCount.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsVcpuCount">LaunchTemplateInstanceRequirementsVcpuCount</a>

---

##### `ResetAcceleratorCount` <a name="ResetAcceleratorCount" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.resetAcceleratorCount"></a>

```csharp
private void ResetAcceleratorCount()
```

##### `ResetAcceleratorManufacturers` <a name="ResetAcceleratorManufacturers" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.resetAcceleratorManufacturers"></a>

```csharp
private void ResetAcceleratorManufacturers()
```

##### `ResetAcceleratorNames` <a name="ResetAcceleratorNames" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.resetAcceleratorNames"></a>

```csharp
private void ResetAcceleratorNames()
```

##### `ResetAcceleratorTotalMemoryMib` <a name="ResetAcceleratorTotalMemoryMib" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.resetAcceleratorTotalMemoryMib"></a>

```csharp
private void ResetAcceleratorTotalMemoryMib()
```

##### `ResetAcceleratorTypes` <a name="ResetAcceleratorTypes" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.resetAcceleratorTypes"></a>

```csharp
private void ResetAcceleratorTypes()
```

##### `ResetAllowedInstanceTypes` <a name="ResetAllowedInstanceTypes" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.resetAllowedInstanceTypes"></a>

```csharp
private void ResetAllowedInstanceTypes()
```

##### `ResetBareMetal` <a name="ResetBareMetal" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.resetBareMetal"></a>

```csharp
private void ResetBareMetal()
```

##### `ResetBaselineEbsBandwidthMbps` <a name="ResetBaselineEbsBandwidthMbps" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.resetBaselineEbsBandwidthMbps"></a>

```csharp
private void ResetBaselineEbsBandwidthMbps()
```

##### `ResetBurstablePerformance` <a name="ResetBurstablePerformance" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.resetBurstablePerformance"></a>

```csharp
private void ResetBurstablePerformance()
```

##### `ResetCpuManufacturers` <a name="ResetCpuManufacturers" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.resetCpuManufacturers"></a>

```csharp
private void ResetCpuManufacturers()
```

##### `ResetExcludedInstanceTypes` <a name="ResetExcludedInstanceTypes" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.resetExcludedInstanceTypes"></a>

```csharp
private void ResetExcludedInstanceTypes()
```

##### `ResetInstanceGenerations` <a name="ResetInstanceGenerations" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.resetInstanceGenerations"></a>

```csharp
private void ResetInstanceGenerations()
```

##### `ResetLocalStorage` <a name="ResetLocalStorage" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.resetLocalStorage"></a>

```csharp
private void ResetLocalStorage()
```

##### `ResetLocalStorageTypes` <a name="ResetLocalStorageTypes" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.resetLocalStorageTypes"></a>

```csharp
private void ResetLocalStorageTypes()
```

##### `ResetMaxSpotPriceAsPercentageOfOptimalOnDemandPrice` <a name="ResetMaxSpotPriceAsPercentageOfOptimalOnDemandPrice" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.resetMaxSpotPriceAsPercentageOfOptimalOnDemandPrice"></a>

```csharp
private void ResetMaxSpotPriceAsPercentageOfOptimalOnDemandPrice()
```

##### `ResetMemoryGibPerVcpu` <a name="ResetMemoryGibPerVcpu" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.resetMemoryGibPerVcpu"></a>

```csharp
private void ResetMemoryGibPerVcpu()
```

##### `ResetNetworkBandwidthGbps` <a name="ResetNetworkBandwidthGbps" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.resetNetworkBandwidthGbps"></a>

```csharp
private void ResetNetworkBandwidthGbps()
```

##### `ResetNetworkInterfaceCount` <a name="ResetNetworkInterfaceCount" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.resetNetworkInterfaceCount"></a>

```csharp
private void ResetNetworkInterfaceCount()
```

##### `ResetOnDemandMaxPricePercentageOverLowestPrice` <a name="ResetOnDemandMaxPricePercentageOverLowestPrice" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.resetOnDemandMaxPricePercentageOverLowestPrice"></a>

```csharp
private void ResetOnDemandMaxPricePercentageOverLowestPrice()
```

##### `ResetRequireHibernateSupport` <a name="ResetRequireHibernateSupport" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.resetRequireHibernateSupport"></a>

```csharp
private void ResetRequireHibernateSupport()
```

##### `ResetSpotMaxPricePercentageOverLowestPrice` <a name="ResetSpotMaxPricePercentageOverLowestPrice" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.resetSpotMaxPricePercentageOverLowestPrice"></a>

```csharp
private void ResetSpotMaxPricePercentageOverLowestPrice()
```

##### `ResetTotalLocalStorageGb` <a name="ResetTotalLocalStorageGb" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.resetTotalLocalStorageGb"></a>

```csharp
private void ResetTotalLocalStorageGb()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.acceleratorCount">AcceleratorCount</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorCountOutputReference">LaunchTemplateInstanceRequirementsAcceleratorCountOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.acceleratorTotalMemoryMib">AcceleratorTotalMemoryMib</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference">LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.baselineEbsBandwidthMbps">BaselineEbsBandwidthMbps</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference">LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.memoryGibPerVcpu">MemoryGibPerVcpu</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference">LaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.memoryMib">MemoryMib</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryMibOutputReference">LaunchTemplateInstanceRequirementsMemoryMibOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.networkBandwidthGbps">NetworkBandwidthGbps</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference">LaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.networkInterfaceCount">NetworkInterfaceCount</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference">LaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.totalLocalStorageGb">TotalLocalStorageGb</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference">LaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.vcpuCount">VcpuCount</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsVcpuCountOutputReference">LaunchTemplateInstanceRequirementsVcpuCountOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.acceleratorCountInput">AcceleratorCountInput</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorCount">LaunchTemplateInstanceRequirementsAcceleratorCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.acceleratorManufacturersInput">AcceleratorManufacturersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.acceleratorNamesInput">AcceleratorNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.acceleratorTotalMemoryMibInput">AcceleratorTotalMemoryMibInput</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMib">LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMib</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.acceleratorTypesInput">AcceleratorTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.allowedInstanceTypesInput">AllowedInstanceTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.bareMetalInput">BareMetalInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.baselineEbsBandwidthMbpsInput">BaselineEbsBandwidthMbpsInput</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbps">LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.burstablePerformanceInput">BurstablePerformanceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.cpuManufacturersInput">CpuManufacturersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.excludedInstanceTypesInput">ExcludedInstanceTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.instanceGenerationsInput">InstanceGenerationsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.localStorageInput">LocalStorageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.localStorageTypesInput">LocalStorageTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.maxSpotPriceAsPercentageOfOptimalOnDemandPriceInput">MaxSpotPriceAsPercentageOfOptimalOnDemandPriceInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.memoryGibPerVcpuInput">MemoryGibPerVcpuInput</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryGibPerVcpu">LaunchTemplateInstanceRequirementsMemoryGibPerVcpu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.memoryMibInput">MemoryMibInput</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryMib">LaunchTemplateInstanceRequirementsMemoryMib</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.networkBandwidthGbpsInput">NetworkBandwidthGbpsInput</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkBandwidthGbps">LaunchTemplateInstanceRequirementsNetworkBandwidthGbps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.networkInterfaceCountInput">NetworkInterfaceCountInput</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkInterfaceCount">LaunchTemplateInstanceRequirementsNetworkInterfaceCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.onDemandMaxPricePercentageOverLowestPriceInput">OnDemandMaxPricePercentageOverLowestPriceInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.requireHibernateSupportInput">RequireHibernateSupportInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.spotMaxPricePercentageOverLowestPriceInput">SpotMaxPricePercentageOverLowestPriceInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.totalLocalStorageGbInput">TotalLocalStorageGbInput</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsTotalLocalStorageGb">LaunchTemplateInstanceRequirementsTotalLocalStorageGb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.vcpuCountInput">VcpuCountInput</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsVcpuCount">LaunchTemplateInstanceRequirementsVcpuCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.acceleratorManufacturers">AcceleratorManufacturers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.acceleratorNames">AcceleratorNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.acceleratorTypes">AcceleratorTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.allowedInstanceTypes">AllowedInstanceTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.bareMetal">BareMetal</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.burstablePerformance">BurstablePerformance</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.cpuManufacturers">CpuManufacturers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.excludedInstanceTypes">ExcludedInstanceTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.instanceGenerations">InstanceGenerations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.localStorage">LocalStorage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.localStorageTypes">LocalStorageTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.maxSpotPriceAsPercentageOfOptimalOnDemandPrice">MaxSpotPriceAsPercentageOfOptimalOnDemandPrice</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.onDemandMaxPricePercentageOverLowestPrice">OnDemandMaxPricePercentageOverLowestPrice</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.requireHibernateSupport">RequireHibernateSupport</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.spotMaxPricePercentageOverLowestPrice">SpotMaxPricePercentageOverLowestPrice</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirements">LaunchTemplateInstanceRequirements</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AcceleratorCount`<sup>Required</sup> <a name="AcceleratorCount" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.acceleratorCount"></a>

```csharp
public LaunchTemplateInstanceRequirementsAcceleratorCountOutputReference AcceleratorCount { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorCountOutputReference">LaunchTemplateInstanceRequirementsAcceleratorCountOutputReference</a>

---

##### `AcceleratorTotalMemoryMib`<sup>Required</sup> <a name="AcceleratorTotalMemoryMib" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.acceleratorTotalMemoryMib"></a>

```csharp
public LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference AcceleratorTotalMemoryMib { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference">LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference</a>

---

##### `BaselineEbsBandwidthMbps`<sup>Required</sup> <a name="BaselineEbsBandwidthMbps" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.baselineEbsBandwidthMbps"></a>

```csharp
public LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference BaselineEbsBandwidthMbps { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference">LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference</a>

---

##### `MemoryGibPerVcpu`<sup>Required</sup> <a name="MemoryGibPerVcpu" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.memoryGibPerVcpu"></a>

```csharp
public LaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference MemoryGibPerVcpu { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference">LaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference</a>

---

##### `MemoryMib`<sup>Required</sup> <a name="MemoryMib" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.memoryMib"></a>

```csharp
public LaunchTemplateInstanceRequirementsMemoryMibOutputReference MemoryMib { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryMibOutputReference">LaunchTemplateInstanceRequirementsMemoryMibOutputReference</a>

---

##### `NetworkBandwidthGbps`<sup>Required</sup> <a name="NetworkBandwidthGbps" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.networkBandwidthGbps"></a>

```csharp
public LaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference NetworkBandwidthGbps { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference">LaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference</a>

---

##### `NetworkInterfaceCount`<sup>Required</sup> <a name="NetworkInterfaceCount" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.networkInterfaceCount"></a>

```csharp
public LaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference NetworkInterfaceCount { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference">LaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference</a>

---

##### `TotalLocalStorageGb`<sup>Required</sup> <a name="TotalLocalStorageGb" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.totalLocalStorageGb"></a>

```csharp
public LaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference TotalLocalStorageGb { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference">LaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference</a>

---

##### `VcpuCount`<sup>Required</sup> <a name="VcpuCount" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.vcpuCount"></a>

```csharp
public LaunchTemplateInstanceRequirementsVcpuCountOutputReference VcpuCount { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsVcpuCountOutputReference">LaunchTemplateInstanceRequirementsVcpuCountOutputReference</a>

---

##### `AcceleratorCountInput`<sup>Optional</sup> <a name="AcceleratorCountInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.acceleratorCountInput"></a>

```csharp
public LaunchTemplateInstanceRequirementsAcceleratorCount AcceleratorCountInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorCount">LaunchTemplateInstanceRequirementsAcceleratorCount</a>

---

##### `AcceleratorManufacturersInput`<sup>Optional</sup> <a name="AcceleratorManufacturersInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.acceleratorManufacturersInput"></a>

```csharp
public string[] AcceleratorManufacturersInput { get; }
```

- *Type:* string[]

---

##### `AcceleratorNamesInput`<sup>Optional</sup> <a name="AcceleratorNamesInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.acceleratorNamesInput"></a>

```csharp
public string[] AcceleratorNamesInput { get; }
```

- *Type:* string[]

---

##### `AcceleratorTotalMemoryMibInput`<sup>Optional</sup> <a name="AcceleratorTotalMemoryMibInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.acceleratorTotalMemoryMibInput"></a>

```csharp
public LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMib AcceleratorTotalMemoryMibInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMib">LaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMib</a>

---

##### `AcceleratorTypesInput`<sup>Optional</sup> <a name="AcceleratorTypesInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.acceleratorTypesInput"></a>

```csharp
public string[] AcceleratorTypesInput { get; }
```

- *Type:* string[]

---

##### `AllowedInstanceTypesInput`<sup>Optional</sup> <a name="AllowedInstanceTypesInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.allowedInstanceTypesInput"></a>

```csharp
public string[] AllowedInstanceTypesInput { get; }
```

- *Type:* string[]

---

##### `BareMetalInput`<sup>Optional</sup> <a name="BareMetalInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.bareMetalInput"></a>

```csharp
public string BareMetalInput { get; }
```

- *Type:* string

---

##### `BaselineEbsBandwidthMbpsInput`<sup>Optional</sup> <a name="BaselineEbsBandwidthMbpsInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.baselineEbsBandwidthMbpsInput"></a>

```csharp
public LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbps BaselineEbsBandwidthMbpsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbps">LaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbps</a>

---

##### `BurstablePerformanceInput`<sup>Optional</sup> <a name="BurstablePerformanceInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.burstablePerformanceInput"></a>

```csharp
public string BurstablePerformanceInput { get; }
```

- *Type:* string

---

##### `CpuManufacturersInput`<sup>Optional</sup> <a name="CpuManufacturersInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.cpuManufacturersInput"></a>

```csharp
public string[] CpuManufacturersInput { get; }
```

- *Type:* string[]

---

##### `ExcludedInstanceTypesInput`<sup>Optional</sup> <a name="ExcludedInstanceTypesInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.excludedInstanceTypesInput"></a>

```csharp
public string[] ExcludedInstanceTypesInput { get; }
```

- *Type:* string[]

---

##### `InstanceGenerationsInput`<sup>Optional</sup> <a name="InstanceGenerationsInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.instanceGenerationsInput"></a>

```csharp
public string[] InstanceGenerationsInput { get; }
```

- *Type:* string[]

---

##### `LocalStorageInput`<sup>Optional</sup> <a name="LocalStorageInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.localStorageInput"></a>

```csharp
public string LocalStorageInput { get; }
```

- *Type:* string

---

##### `LocalStorageTypesInput`<sup>Optional</sup> <a name="LocalStorageTypesInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.localStorageTypesInput"></a>

```csharp
public string[] LocalStorageTypesInput { get; }
```

- *Type:* string[]

---

##### `MaxSpotPriceAsPercentageOfOptimalOnDemandPriceInput`<sup>Optional</sup> <a name="MaxSpotPriceAsPercentageOfOptimalOnDemandPriceInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.maxSpotPriceAsPercentageOfOptimalOnDemandPriceInput"></a>

```csharp
public double MaxSpotPriceAsPercentageOfOptimalOnDemandPriceInput { get; }
```

- *Type:* double

---

##### `MemoryGibPerVcpuInput`<sup>Optional</sup> <a name="MemoryGibPerVcpuInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.memoryGibPerVcpuInput"></a>

```csharp
public LaunchTemplateInstanceRequirementsMemoryGibPerVcpu MemoryGibPerVcpuInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryGibPerVcpu">LaunchTemplateInstanceRequirementsMemoryGibPerVcpu</a>

---

##### `MemoryMibInput`<sup>Optional</sup> <a name="MemoryMibInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.memoryMibInput"></a>

```csharp
public LaunchTemplateInstanceRequirementsMemoryMib MemoryMibInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsMemoryMib">LaunchTemplateInstanceRequirementsMemoryMib</a>

---

##### `NetworkBandwidthGbpsInput`<sup>Optional</sup> <a name="NetworkBandwidthGbpsInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.networkBandwidthGbpsInput"></a>

```csharp
public LaunchTemplateInstanceRequirementsNetworkBandwidthGbps NetworkBandwidthGbpsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkBandwidthGbps">LaunchTemplateInstanceRequirementsNetworkBandwidthGbps</a>

---

##### `NetworkInterfaceCountInput`<sup>Optional</sup> <a name="NetworkInterfaceCountInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.networkInterfaceCountInput"></a>

```csharp
public LaunchTemplateInstanceRequirementsNetworkInterfaceCount NetworkInterfaceCountInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsNetworkInterfaceCount">LaunchTemplateInstanceRequirementsNetworkInterfaceCount</a>

---

##### `OnDemandMaxPricePercentageOverLowestPriceInput`<sup>Optional</sup> <a name="OnDemandMaxPricePercentageOverLowestPriceInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.onDemandMaxPricePercentageOverLowestPriceInput"></a>

```csharp
public double OnDemandMaxPricePercentageOverLowestPriceInput { get; }
```

- *Type:* double

---

##### `RequireHibernateSupportInput`<sup>Optional</sup> <a name="RequireHibernateSupportInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.requireHibernateSupportInput"></a>

```csharp
public object RequireHibernateSupportInput { get; }
```

- *Type:* object

---

##### `SpotMaxPricePercentageOverLowestPriceInput`<sup>Optional</sup> <a name="SpotMaxPricePercentageOverLowestPriceInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.spotMaxPricePercentageOverLowestPriceInput"></a>

```csharp
public double SpotMaxPricePercentageOverLowestPriceInput { get; }
```

- *Type:* double

---

##### `TotalLocalStorageGbInput`<sup>Optional</sup> <a name="TotalLocalStorageGbInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.totalLocalStorageGbInput"></a>

```csharp
public LaunchTemplateInstanceRequirementsTotalLocalStorageGb TotalLocalStorageGbInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsTotalLocalStorageGb">LaunchTemplateInstanceRequirementsTotalLocalStorageGb</a>

---

##### `VcpuCountInput`<sup>Optional</sup> <a name="VcpuCountInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.vcpuCountInput"></a>

```csharp
public LaunchTemplateInstanceRequirementsVcpuCount VcpuCountInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsVcpuCount">LaunchTemplateInstanceRequirementsVcpuCount</a>

---

##### `AcceleratorManufacturers`<sup>Required</sup> <a name="AcceleratorManufacturers" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.acceleratorManufacturers"></a>

```csharp
public string[] AcceleratorManufacturers { get; }
```

- *Type:* string[]

---

##### `AcceleratorNames`<sup>Required</sup> <a name="AcceleratorNames" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.acceleratorNames"></a>

```csharp
public string[] AcceleratorNames { get; }
```

- *Type:* string[]

---

##### `AcceleratorTypes`<sup>Required</sup> <a name="AcceleratorTypes" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.acceleratorTypes"></a>

```csharp
public string[] AcceleratorTypes { get; }
```

- *Type:* string[]

---

##### `AllowedInstanceTypes`<sup>Required</sup> <a name="AllowedInstanceTypes" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.allowedInstanceTypes"></a>

```csharp
public string[] AllowedInstanceTypes { get; }
```

- *Type:* string[]

---

##### `BareMetal`<sup>Required</sup> <a name="BareMetal" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.bareMetal"></a>

```csharp
public string BareMetal { get; }
```

- *Type:* string

---

##### `BurstablePerformance`<sup>Required</sup> <a name="BurstablePerformance" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.burstablePerformance"></a>

```csharp
public string BurstablePerformance { get; }
```

- *Type:* string

---

##### `CpuManufacturers`<sup>Required</sup> <a name="CpuManufacturers" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.cpuManufacturers"></a>

```csharp
public string[] CpuManufacturers { get; }
```

- *Type:* string[]

---

##### `ExcludedInstanceTypes`<sup>Required</sup> <a name="ExcludedInstanceTypes" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.excludedInstanceTypes"></a>

```csharp
public string[] ExcludedInstanceTypes { get; }
```

- *Type:* string[]

---

##### `InstanceGenerations`<sup>Required</sup> <a name="InstanceGenerations" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.instanceGenerations"></a>

```csharp
public string[] InstanceGenerations { get; }
```

- *Type:* string[]

---

##### `LocalStorage`<sup>Required</sup> <a name="LocalStorage" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.localStorage"></a>

```csharp
public string LocalStorage { get; }
```

- *Type:* string

---

##### `LocalStorageTypes`<sup>Required</sup> <a name="LocalStorageTypes" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.localStorageTypes"></a>

```csharp
public string[] LocalStorageTypes { get; }
```

- *Type:* string[]

---

##### `MaxSpotPriceAsPercentageOfOptimalOnDemandPrice`<sup>Required</sup> <a name="MaxSpotPriceAsPercentageOfOptimalOnDemandPrice" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.maxSpotPriceAsPercentageOfOptimalOnDemandPrice"></a>

```csharp
public double MaxSpotPriceAsPercentageOfOptimalOnDemandPrice { get; }
```

- *Type:* double

---

##### `OnDemandMaxPricePercentageOverLowestPrice`<sup>Required</sup> <a name="OnDemandMaxPricePercentageOverLowestPrice" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.onDemandMaxPricePercentageOverLowestPrice"></a>

```csharp
public double OnDemandMaxPricePercentageOverLowestPrice { get; }
```

- *Type:* double

---

##### `RequireHibernateSupport`<sup>Required</sup> <a name="RequireHibernateSupport" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.requireHibernateSupport"></a>

```csharp
public object RequireHibernateSupport { get; }
```

- *Type:* object

---

##### `SpotMaxPricePercentageOverLowestPrice`<sup>Required</sup> <a name="SpotMaxPricePercentageOverLowestPrice" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.spotMaxPricePercentageOverLowestPrice"></a>

```csharp
public double SpotMaxPricePercentageOverLowestPrice { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsOutputReference.property.internalValue"></a>

```csharp
public LaunchTemplateInstanceRequirements InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirements">LaunchTemplateInstanceRequirements</a>

---


### LaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference <a name="LaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.resetMax">ResetMax</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.resetMin">ResetMin</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMax` <a name="ResetMax" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.resetMax"></a>

```csharp
private void ResetMax()
```

##### `ResetMin` <a name="ResetMin" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.resetMin"></a>

```csharp
private void ResetMin()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.property.maxInput">MaxInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.property.minInput">MinInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.property.max">Max</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.property.min">Min</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsTotalLocalStorageGb">LaunchTemplateInstanceRequirementsTotalLocalStorageGb</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaxInput`<sup>Optional</sup> <a name="MaxInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.property.maxInput"></a>

```csharp
public double MaxInput { get; }
```

- *Type:* double

---

##### `MinInput`<sup>Optional</sup> <a name="MinInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.property.minInput"></a>

```csharp
public double MinInput { get; }
```

- *Type:* double

---

##### `Max`<sup>Required</sup> <a name="Max" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.property.max"></a>

```csharp
public double Max { get; }
```

- *Type:* double

---

##### `Min`<sup>Required</sup> <a name="Min" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.property.min"></a>

```csharp
public double Min { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.property.internalValue"></a>

```csharp
public LaunchTemplateInstanceRequirementsTotalLocalStorageGb InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsTotalLocalStorageGb">LaunchTemplateInstanceRequirementsTotalLocalStorageGb</a>

---


### LaunchTemplateInstanceRequirementsVcpuCountOutputReference <a name="LaunchTemplateInstanceRequirementsVcpuCountOutputReference" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsVcpuCountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsVcpuCountOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LaunchTemplateInstanceRequirementsVcpuCountOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsVcpuCountOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsVcpuCountOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsVcpuCountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsVcpuCountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsVcpuCountOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsVcpuCountOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsVcpuCountOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsVcpuCountOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsVcpuCountOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsVcpuCountOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsVcpuCountOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsVcpuCountOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsVcpuCountOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsVcpuCountOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsVcpuCountOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsVcpuCountOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsVcpuCountOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsVcpuCountOutputReference.resetMax">ResetMax</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsVcpuCountOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsVcpuCountOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsVcpuCountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsVcpuCountOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsVcpuCountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsVcpuCountOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsVcpuCountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsVcpuCountOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsVcpuCountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsVcpuCountOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsVcpuCountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsVcpuCountOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsVcpuCountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsVcpuCountOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsVcpuCountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsVcpuCountOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsVcpuCountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsVcpuCountOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsVcpuCountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsVcpuCountOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsVcpuCountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsVcpuCountOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsVcpuCountOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsVcpuCountOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMax` <a name="ResetMax" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsVcpuCountOutputReference.resetMax"></a>

```csharp
private void ResetMax()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsVcpuCountOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsVcpuCountOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsVcpuCountOutputReference.property.maxInput">MaxInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsVcpuCountOutputReference.property.minInput">MinInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsVcpuCountOutputReference.property.max">Max</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsVcpuCountOutputReference.property.min">Min</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsVcpuCountOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsVcpuCount">LaunchTemplateInstanceRequirementsVcpuCount</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsVcpuCountOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsVcpuCountOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaxInput`<sup>Optional</sup> <a name="MaxInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsVcpuCountOutputReference.property.maxInput"></a>

```csharp
public double MaxInput { get; }
```

- *Type:* double

---

##### `MinInput`<sup>Optional</sup> <a name="MinInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsVcpuCountOutputReference.property.minInput"></a>

```csharp
public double MinInput { get; }
```

- *Type:* double

---

##### `Max`<sup>Required</sup> <a name="Max" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsVcpuCountOutputReference.property.max"></a>

```csharp
public double Max { get; }
```

- *Type:* double

---

##### `Min`<sup>Required</sup> <a name="Min" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsVcpuCountOutputReference.property.min"></a>

```csharp
public double Min { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsVcpuCountOutputReference.property.internalValue"></a>

```csharp
public LaunchTemplateInstanceRequirementsVcpuCount InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateInstanceRequirementsVcpuCount">LaunchTemplateInstanceRequirementsVcpuCount</a>

---


### LaunchTemplateLicenseSpecificationList <a name="LaunchTemplateLicenseSpecificationList" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LaunchTemplateLicenseSpecificationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationList.get"></a>

```csharp
private LaunchTemplateLicenseSpecificationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### LaunchTemplateLicenseSpecificationOutputReference <a name="LaunchTemplateLicenseSpecificationOutputReference" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LaunchTemplateLicenseSpecificationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationOutputReference.property.licenseConfigurationArnInput">LicenseConfigurationArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationOutputReference.property.licenseConfigurationArn">LicenseConfigurationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LicenseConfigurationArnInput`<sup>Optional</sup> <a name="LicenseConfigurationArnInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationOutputReference.property.licenseConfigurationArnInput"></a>

```csharp
public string LicenseConfigurationArnInput { get; }
```

- *Type:* string

---

##### `LicenseConfigurationArn`<sup>Required</sup> <a name="LicenseConfigurationArn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationOutputReference.property.licenseConfigurationArn"></a>

```csharp
public string LicenseConfigurationArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateLicenseSpecificationOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### LaunchTemplateMaintenanceOptionsOutputReference <a name="LaunchTemplateMaintenanceOptionsOutputReference" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMaintenanceOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMaintenanceOptionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LaunchTemplateMaintenanceOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMaintenanceOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMaintenanceOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMaintenanceOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMaintenanceOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMaintenanceOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMaintenanceOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMaintenanceOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMaintenanceOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMaintenanceOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMaintenanceOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMaintenanceOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMaintenanceOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMaintenanceOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMaintenanceOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMaintenanceOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMaintenanceOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMaintenanceOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMaintenanceOptionsOutputReference.resetAutoRecovery">ResetAutoRecovery</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMaintenanceOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMaintenanceOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMaintenanceOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMaintenanceOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMaintenanceOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMaintenanceOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMaintenanceOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMaintenanceOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMaintenanceOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMaintenanceOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMaintenanceOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMaintenanceOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMaintenanceOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMaintenanceOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMaintenanceOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMaintenanceOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMaintenanceOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMaintenanceOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMaintenanceOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMaintenanceOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMaintenanceOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMaintenanceOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMaintenanceOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMaintenanceOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAutoRecovery` <a name="ResetAutoRecovery" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMaintenanceOptionsOutputReference.resetAutoRecovery"></a>

```csharp
private void ResetAutoRecovery()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMaintenanceOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMaintenanceOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMaintenanceOptionsOutputReference.property.autoRecoveryInput">AutoRecoveryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMaintenanceOptionsOutputReference.property.autoRecovery">AutoRecovery</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMaintenanceOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMaintenanceOptions">LaunchTemplateMaintenanceOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMaintenanceOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMaintenanceOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AutoRecoveryInput`<sup>Optional</sup> <a name="AutoRecoveryInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMaintenanceOptionsOutputReference.property.autoRecoveryInput"></a>

```csharp
public string AutoRecoveryInput { get; }
```

- *Type:* string

---

##### `AutoRecovery`<sup>Required</sup> <a name="AutoRecovery" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMaintenanceOptionsOutputReference.property.autoRecovery"></a>

```csharp
public string AutoRecovery { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMaintenanceOptionsOutputReference.property.internalValue"></a>

```csharp
public LaunchTemplateMaintenanceOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMaintenanceOptions">LaunchTemplateMaintenanceOptions</a>

---


### LaunchTemplateMetadataOptionsOutputReference <a name="LaunchTemplateMetadataOptionsOutputReference" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LaunchTemplateMetadataOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.resetHttpEndpoint">ResetHttpEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.resetHttpProtocolIpv6">ResetHttpProtocolIpv6</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.resetHttpPutResponseHopLimit">ResetHttpPutResponseHopLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.resetHttpTokens">ResetHttpTokens</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.resetInstanceMetadataTags">ResetInstanceMetadataTags</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHttpEndpoint` <a name="ResetHttpEndpoint" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.resetHttpEndpoint"></a>

```csharp
private void ResetHttpEndpoint()
```

##### `ResetHttpProtocolIpv6` <a name="ResetHttpProtocolIpv6" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.resetHttpProtocolIpv6"></a>

```csharp
private void ResetHttpProtocolIpv6()
```

##### `ResetHttpPutResponseHopLimit` <a name="ResetHttpPutResponseHopLimit" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.resetHttpPutResponseHopLimit"></a>

```csharp
private void ResetHttpPutResponseHopLimit()
```

##### `ResetHttpTokens` <a name="ResetHttpTokens" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.resetHttpTokens"></a>

```csharp
private void ResetHttpTokens()
```

##### `ResetInstanceMetadataTags` <a name="ResetInstanceMetadataTags" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.resetInstanceMetadataTags"></a>

```csharp
private void ResetInstanceMetadataTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.property.httpEndpointInput">HttpEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.property.httpProtocolIpv6Input">HttpProtocolIpv6Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.property.httpPutResponseHopLimitInput">HttpPutResponseHopLimitInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.property.httpTokensInput">HttpTokensInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.property.instanceMetadataTagsInput">InstanceMetadataTagsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.property.httpEndpoint">HttpEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.property.httpProtocolIpv6">HttpProtocolIpv6</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.property.httpPutResponseHopLimit">HttpPutResponseHopLimit</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.property.httpTokens">HttpTokens</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.property.instanceMetadataTags">InstanceMetadataTags</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptions">LaunchTemplateMetadataOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HttpEndpointInput`<sup>Optional</sup> <a name="HttpEndpointInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.property.httpEndpointInput"></a>

```csharp
public string HttpEndpointInput { get; }
```

- *Type:* string

---

##### `HttpProtocolIpv6Input`<sup>Optional</sup> <a name="HttpProtocolIpv6Input" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.property.httpProtocolIpv6Input"></a>

```csharp
public string HttpProtocolIpv6Input { get; }
```

- *Type:* string

---

##### `HttpPutResponseHopLimitInput`<sup>Optional</sup> <a name="HttpPutResponseHopLimitInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.property.httpPutResponseHopLimitInput"></a>

```csharp
public double HttpPutResponseHopLimitInput { get; }
```

- *Type:* double

---

##### `HttpTokensInput`<sup>Optional</sup> <a name="HttpTokensInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.property.httpTokensInput"></a>

```csharp
public string HttpTokensInput { get; }
```

- *Type:* string

---

##### `InstanceMetadataTagsInput`<sup>Optional</sup> <a name="InstanceMetadataTagsInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.property.instanceMetadataTagsInput"></a>

```csharp
public string InstanceMetadataTagsInput { get; }
```

- *Type:* string

---

##### `HttpEndpoint`<sup>Required</sup> <a name="HttpEndpoint" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.property.httpEndpoint"></a>

```csharp
public string HttpEndpoint { get; }
```

- *Type:* string

---

##### `HttpProtocolIpv6`<sup>Required</sup> <a name="HttpProtocolIpv6" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.property.httpProtocolIpv6"></a>

```csharp
public string HttpProtocolIpv6 { get; }
```

- *Type:* string

---

##### `HttpPutResponseHopLimit`<sup>Required</sup> <a name="HttpPutResponseHopLimit" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.property.httpPutResponseHopLimit"></a>

```csharp
public double HttpPutResponseHopLimit { get; }
```

- *Type:* double

---

##### `HttpTokens`<sup>Required</sup> <a name="HttpTokens" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.property.httpTokens"></a>

```csharp
public string HttpTokens { get; }
```

- *Type:* string

---

##### `InstanceMetadataTags`<sup>Required</sup> <a name="InstanceMetadataTags" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.property.instanceMetadataTags"></a>

```csharp
public string InstanceMetadataTags { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptionsOutputReference.property.internalValue"></a>

```csharp
public LaunchTemplateMetadataOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMetadataOptions">LaunchTemplateMetadataOptions</a>

---


### LaunchTemplateMonitoringOutputReference <a name="LaunchTemplateMonitoringOutputReference" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMonitoringOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMonitoringOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LaunchTemplateMonitoringOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMonitoringOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMonitoringOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMonitoringOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMonitoringOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMonitoringOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMonitoringOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMonitoringOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMonitoringOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMonitoringOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMonitoringOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMonitoringOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMonitoringOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMonitoringOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMonitoringOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMonitoringOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMonitoringOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMonitoringOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMonitoringOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMonitoringOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMonitoringOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMonitoringOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMonitoringOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMonitoringOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMonitoringOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMonitoringOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMonitoringOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMonitoringOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMonitoringOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMonitoringOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMonitoringOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMonitoringOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMonitoringOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMonitoringOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMonitoringOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMonitoringOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMonitoringOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMonitoringOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMonitoringOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMonitoringOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMonitoringOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMonitoringOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMonitoringOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMonitoringOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMonitoringOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMonitoringOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMonitoringOutputReference.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMonitoringOutputReference.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMonitoringOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMonitoring">LaunchTemplateMonitoring</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMonitoringOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMonitoringOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMonitoringOutputReference.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMonitoringOutputReference.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateMonitoringOutputReference.property.internalValue"></a>

```csharp
public LaunchTemplateMonitoring InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateMonitoring">LaunchTemplateMonitoring</a>

---


### LaunchTemplateNetworkInterfacesConnectionTrackingSpecificationOutputReference <a name="LaunchTemplateNetworkInterfacesConnectionTrackingSpecificationOutputReference" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesConnectionTrackingSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesConnectionTrackingSpecificationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LaunchTemplateNetworkInterfacesConnectionTrackingSpecificationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesConnectionTrackingSpecificationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesConnectionTrackingSpecificationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesConnectionTrackingSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesConnectionTrackingSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesConnectionTrackingSpecificationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesConnectionTrackingSpecificationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesConnectionTrackingSpecificationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesConnectionTrackingSpecificationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesConnectionTrackingSpecificationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesConnectionTrackingSpecificationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesConnectionTrackingSpecificationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesConnectionTrackingSpecificationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesConnectionTrackingSpecificationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesConnectionTrackingSpecificationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesConnectionTrackingSpecificationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesConnectionTrackingSpecificationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesConnectionTrackingSpecificationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesConnectionTrackingSpecificationOutputReference.resetTcpEstablishedTimeout">ResetTcpEstablishedTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesConnectionTrackingSpecificationOutputReference.resetUdpStreamTimeout">ResetUdpStreamTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesConnectionTrackingSpecificationOutputReference.resetUdpTimeout">ResetUdpTimeout</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesConnectionTrackingSpecificationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesConnectionTrackingSpecificationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesConnectionTrackingSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesConnectionTrackingSpecificationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesConnectionTrackingSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesConnectionTrackingSpecificationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesConnectionTrackingSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesConnectionTrackingSpecificationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesConnectionTrackingSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesConnectionTrackingSpecificationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesConnectionTrackingSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesConnectionTrackingSpecificationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesConnectionTrackingSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesConnectionTrackingSpecificationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesConnectionTrackingSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesConnectionTrackingSpecificationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesConnectionTrackingSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesConnectionTrackingSpecificationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesConnectionTrackingSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesConnectionTrackingSpecificationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesConnectionTrackingSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesConnectionTrackingSpecificationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesConnectionTrackingSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesConnectionTrackingSpecificationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTcpEstablishedTimeout` <a name="ResetTcpEstablishedTimeout" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesConnectionTrackingSpecificationOutputReference.resetTcpEstablishedTimeout"></a>

```csharp
private void ResetTcpEstablishedTimeout()
```

##### `ResetUdpStreamTimeout` <a name="ResetUdpStreamTimeout" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesConnectionTrackingSpecificationOutputReference.resetUdpStreamTimeout"></a>

```csharp
private void ResetUdpStreamTimeout()
```

##### `ResetUdpTimeout` <a name="ResetUdpTimeout" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesConnectionTrackingSpecificationOutputReference.resetUdpTimeout"></a>

```csharp
private void ResetUdpTimeout()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesConnectionTrackingSpecificationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesConnectionTrackingSpecificationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesConnectionTrackingSpecificationOutputReference.property.tcpEstablishedTimeoutInput">TcpEstablishedTimeoutInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesConnectionTrackingSpecificationOutputReference.property.udpStreamTimeoutInput">UdpStreamTimeoutInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesConnectionTrackingSpecificationOutputReference.property.udpTimeoutInput">UdpTimeoutInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesConnectionTrackingSpecificationOutputReference.property.tcpEstablishedTimeout">TcpEstablishedTimeout</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesConnectionTrackingSpecificationOutputReference.property.udpStreamTimeout">UdpStreamTimeout</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesConnectionTrackingSpecificationOutputReference.property.udpTimeout">UdpTimeout</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesConnectionTrackingSpecificationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesConnectionTrackingSpecification">LaunchTemplateNetworkInterfacesConnectionTrackingSpecification</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesConnectionTrackingSpecificationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesConnectionTrackingSpecificationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TcpEstablishedTimeoutInput`<sup>Optional</sup> <a name="TcpEstablishedTimeoutInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesConnectionTrackingSpecificationOutputReference.property.tcpEstablishedTimeoutInput"></a>

```csharp
public double TcpEstablishedTimeoutInput { get; }
```

- *Type:* double

---

##### `UdpStreamTimeoutInput`<sup>Optional</sup> <a name="UdpStreamTimeoutInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesConnectionTrackingSpecificationOutputReference.property.udpStreamTimeoutInput"></a>

```csharp
public double UdpStreamTimeoutInput { get; }
```

- *Type:* double

---

##### `UdpTimeoutInput`<sup>Optional</sup> <a name="UdpTimeoutInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesConnectionTrackingSpecificationOutputReference.property.udpTimeoutInput"></a>

```csharp
public double UdpTimeoutInput { get; }
```

- *Type:* double

---

##### `TcpEstablishedTimeout`<sup>Required</sup> <a name="TcpEstablishedTimeout" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesConnectionTrackingSpecificationOutputReference.property.tcpEstablishedTimeout"></a>

```csharp
public double TcpEstablishedTimeout { get; }
```

- *Type:* double

---

##### `UdpStreamTimeout`<sup>Required</sup> <a name="UdpStreamTimeout" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesConnectionTrackingSpecificationOutputReference.property.udpStreamTimeout"></a>

```csharp
public double UdpStreamTimeout { get; }
```

- *Type:* double

---

##### `UdpTimeout`<sup>Required</sup> <a name="UdpTimeout" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesConnectionTrackingSpecificationOutputReference.property.udpTimeout"></a>

```csharp
public double UdpTimeout { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesConnectionTrackingSpecificationOutputReference.property.internalValue"></a>

```csharp
public LaunchTemplateNetworkInterfacesConnectionTrackingSpecification InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesConnectionTrackingSpecification">LaunchTemplateNetworkInterfacesConnectionTrackingSpecification</a>

---


### LaunchTemplateNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference <a name="LaunchTemplateNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LaunchTemplateNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.resetEnaSrdUdpEnabled">ResetEnaSrdUdpEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnaSrdUdpEnabled` <a name="ResetEnaSrdUdpEnabled" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.resetEnaSrdUdpEnabled"></a>

```csharp
private void ResetEnaSrdUdpEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.property.enaSrdUdpEnabledInput">EnaSrdUdpEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.property.enaSrdUdpEnabled">EnaSrdUdpEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecification">LaunchTemplateNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecification</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnaSrdUdpEnabledInput`<sup>Optional</sup> <a name="EnaSrdUdpEnabledInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.property.enaSrdUdpEnabledInput"></a>

```csharp
public object EnaSrdUdpEnabledInput { get; }
```

- *Type:* object

---

##### `EnaSrdUdpEnabled`<sup>Required</sup> <a name="EnaSrdUdpEnabled" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.property.enaSrdUdpEnabled"></a>

```csharp
public object EnaSrdUdpEnabled { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.property.internalValue"></a>

```csharp
public LaunchTemplateNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecification InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecification">LaunchTemplateNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecification</a>

---


### LaunchTemplateNetworkInterfacesEnaSrdSpecificationOutputReference <a name="LaunchTemplateNetworkInterfacesEnaSrdSpecificationOutputReference" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesEnaSrdSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesEnaSrdSpecificationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LaunchTemplateNetworkInterfacesEnaSrdSpecificationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesEnaSrdSpecificationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesEnaSrdSpecificationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesEnaSrdSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesEnaSrdSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesEnaSrdSpecificationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesEnaSrdSpecificationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesEnaSrdSpecificationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesEnaSrdSpecificationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesEnaSrdSpecificationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesEnaSrdSpecificationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesEnaSrdSpecificationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesEnaSrdSpecificationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesEnaSrdSpecificationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesEnaSrdSpecificationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesEnaSrdSpecificationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesEnaSrdSpecificationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesEnaSrdSpecificationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesEnaSrdSpecificationOutputReference.putEnaSrdUdpSpecification">PutEnaSrdUdpSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesEnaSrdSpecificationOutputReference.resetEnaSrdEnabled">ResetEnaSrdEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesEnaSrdSpecificationOutputReference.resetEnaSrdUdpSpecification">ResetEnaSrdUdpSpecification</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesEnaSrdSpecificationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesEnaSrdSpecificationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesEnaSrdSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesEnaSrdSpecificationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesEnaSrdSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesEnaSrdSpecificationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesEnaSrdSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesEnaSrdSpecificationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesEnaSrdSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesEnaSrdSpecificationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesEnaSrdSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesEnaSrdSpecificationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesEnaSrdSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesEnaSrdSpecificationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesEnaSrdSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesEnaSrdSpecificationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesEnaSrdSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesEnaSrdSpecificationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesEnaSrdSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesEnaSrdSpecificationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesEnaSrdSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesEnaSrdSpecificationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesEnaSrdSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesEnaSrdSpecificationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEnaSrdUdpSpecification` <a name="PutEnaSrdUdpSpecification" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesEnaSrdSpecificationOutputReference.putEnaSrdUdpSpecification"></a>

```csharp
private void PutEnaSrdUdpSpecification(LaunchTemplateNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecification Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesEnaSrdSpecificationOutputReference.putEnaSrdUdpSpecification.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecification">LaunchTemplateNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecification</a>

---

##### `ResetEnaSrdEnabled` <a name="ResetEnaSrdEnabled" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesEnaSrdSpecificationOutputReference.resetEnaSrdEnabled"></a>

```csharp
private void ResetEnaSrdEnabled()
```

##### `ResetEnaSrdUdpSpecification` <a name="ResetEnaSrdUdpSpecification" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesEnaSrdSpecificationOutputReference.resetEnaSrdUdpSpecification"></a>

```csharp
private void ResetEnaSrdUdpSpecification()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesEnaSrdSpecificationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesEnaSrdSpecificationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesEnaSrdSpecificationOutputReference.property.enaSrdUdpSpecification">EnaSrdUdpSpecification</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference">LaunchTemplateNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesEnaSrdSpecificationOutputReference.property.enaSrdEnabledInput">EnaSrdEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesEnaSrdSpecificationOutputReference.property.enaSrdUdpSpecificationInput">EnaSrdUdpSpecificationInput</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecification">LaunchTemplateNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesEnaSrdSpecificationOutputReference.property.enaSrdEnabled">EnaSrdEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesEnaSrdSpecificationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesEnaSrdSpecification">LaunchTemplateNetworkInterfacesEnaSrdSpecification</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesEnaSrdSpecificationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesEnaSrdSpecificationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnaSrdUdpSpecification`<sup>Required</sup> <a name="EnaSrdUdpSpecification" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesEnaSrdSpecificationOutputReference.property.enaSrdUdpSpecification"></a>

```csharp
public LaunchTemplateNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference EnaSrdUdpSpecification { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference">LaunchTemplateNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference</a>

---

##### `EnaSrdEnabledInput`<sup>Optional</sup> <a name="EnaSrdEnabledInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesEnaSrdSpecificationOutputReference.property.enaSrdEnabledInput"></a>

```csharp
public object EnaSrdEnabledInput { get; }
```

- *Type:* object

---

##### `EnaSrdUdpSpecificationInput`<sup>Optional</sup> <a name="EnaSrdUdpSpecificationInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesEnaSrdSpecificationOutputReference.property.enaSrdUdpSpecificationInput"></a>

```csharp
public LaunchTemplateNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecification EnaSrdUdpSpecificationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecification">LaunchTemplateNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecification</a>

---

##### `EnaSrdEnabled`<sup>Required</sup> <a name="EnaSrdEnabled" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesEnaSrdSpecificationOutputReference.property.enaSrdEnabled"></a>

```csharp
public object EnaSrdEnabled { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesEnaSrdSpecificationOutputReference.property.internalValue"></a>

```csharp
public LaunchTemplateNetworkInterfacesEnaSrdSpecification InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesEnaSrdSpecification">LaunchTemplateNetworkInterfacesEnaSrdSpecification</a>

---


### LaunchTemplateNetworkInterfacesList <a name="LaunchTemplateNetworkInterfacesList" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LaunchTemplateNetworkInterfacesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesList.get"></a>

```csharp
private LaunchTemplateNetworkInterfacesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### LaunchTemplateNetworkInterfacesOutputReference <a name="LaunchTemplateNetworkInterfacesOutputReference" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LaunchTemplateNetworkInterfacesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.putConnectionTrackingSpecification">PutConnectionTrackingSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.putEnaSrdSpecification">PutEnaSrdSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.resetAssociateCarrierIpAddress">ResetAssociateCarrierIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.resetAssociatePublicIpAddress">ResetAssociatePublicIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.resetConnectionTrackingSpecification">ResetConnectionTrackingSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.resetDeleteOnTermination">ResetDeleteOnTermination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.resetDeviceIndex">ResetDeviceIndex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.resetEnaSrdSpecification">ResetEnaSrdSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.resetInterfaceType">ResetInterfaceType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.resetIpv4AddressCount">ResetIpv4AddressCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.resetIpv4Addresses">ResetIpv4Addresses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.resetIpv4PrefixCount">ResetIpv4PrefixCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.resetIpv4Prefixes">ResetIpv4Prefixes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.resetIpv6AddressCount">ResetIpv6AddressCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.resetIpv6Addresses">ResetIpv6Addresses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.resetIpv6PrefixCount">ResetIpv6PrefixCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.resetIpv6Prefixes">ResetIpv6Prefixes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.resetNetworkCardIndex">ResetNetworkCardIndex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.resetNetworkInterfaceId">ResetNetworkInterfaceId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.resetPrimaryIpv6">ResetPrimaryIpv6</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.resetPrivateIpAddress">ResetPrivateIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.resetSecurityGroups">ResetSecurityGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.resetSubnetId">ResetSubnetId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutConnectionTrackingSpecification` <a name="PutConnectionTrackingSpecification" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.putConnectionTrackingSpecification"></a>

```csharp
private void PutConnectionTrackingSpecification(LaunchTemplateNetworkInterfacesConnectionTrackingSpecification Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.putConnectionTrackingSpecification.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesConnectionTrackingSpecification">LaunchTemplateNetworkInterfacesConnectionTrackingSpecification</a>

---

##### `PutEnaSrdSpecification` <a name="PutEnaSrdSpecification" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.putEnaSrdSpecification"></a>

```csharp
private void PutEnaSrdSpecification(LaunchTemplateNetworkInterfacesEnaSrdSpecification Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.putEnaSrdSpecification.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesEnaSrdSpecification">LaunchTemplateNetworkInterfacesEnaSrdSpecification</a>

---

##### `ResetAssociateCarrierIpAddress` <a name="ResetAssociateCarrierIpAddress" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.resetAssociateCarrierIpAddress"></a>

```csharp
private void ResetAssociateCarrierIpAddress()
```

##### `ResetAssociatePublicIpAddress` <a name="ResetAssociatePublicIpAddress" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.resetAssociatePublicIpAddress"></a>

```csharp
private void ResetAssociatePublicIpAddress()
```

##### `ResetConnectionTrackingSpecification` <a name="ResetConnectionTrackingSpecification" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.resetConnectionTrackingSpecification"></a>

```csharp
private void ResetConnectionTrackingSpecification()
```

##### `ResetDeleteOnTermination` <a name="ResetDeleteOnTermination" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.resetDeleteOnTermination"></a>

```csharp
private void ResetDeleteOnTermination()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDeviceIndex` <a name="ResetDeviceIndex" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.resetDeviceIndex"></a>

```csharp
private void ResetDeviceIndex()
```

##### `ResetEnaSrdSpecification` <a name="ResetEnaSrdSpecification" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.resetEnaSrdSpecification"></a>

```csharp
private void ResetEnaSrdSpecification()
```

##### `ResetInterfaceType` <a name="ResetInterfaceType" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.resetInterfaceType"></a>

```csharp
private void ResetInterfaceType()
```

##### `ResetIpv4AddressCount` <a name="ResetIpv4AddressCount" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.resetIpv4AddressCount"></a>

```csharp
private void ResetIpv4AddressCount()
```

##### `ResetIpv4Addresses` <a name="ResetIpv4Addresses" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.resetIpv4Addresses"></a>

```csharp
private void ResetIpv4Addresses()
```

##### `ResetIpv4PrefixCount` <a name="ResetIpv4PrefixCount" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.resetIpv4PrefixCount"></a>

```csharp
private void ResetIpv4PrefixCount()
```

##### `ResetIpv4Prefixes` <a name="ResetIpv4Prefixes" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.resetIpv4Prefixes"></a>

```csharp
private void ResetIpv4Prefixes()
```

##### `ResetIpv6AddressCount` <a name="ResetIpv6AddressCount" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.resetIpv6AddressCount"></a>

```csharp
private void ResetIpv6AddressCount()
```

##### `ResetIpv6Addresses` <a name="ResetIpv6Addresses" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.resetIpv6Addresses"></a>

```csharp
private void ResetIpv6Addresses()
```

##### `ResetIpv6PrefixCount` <a name="ResetIpv6PrefixCount" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.resetIpv6PrefixCount"></a>

```csharp
private void ResetIpv6PrefixCount()
```

##### `ResetIpv6Prefixes` <a name="ResetIpv6Prefixes" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.resetIpv6Prefixes"></a>

```csharp
private void ResetIpv6Prefixes()
```

##### `ResetNetworkCardIndex` <a name="ResetNetworkCardIndex" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.resetNetworkCardIndex"></a>

```csharp
private void ResetNetworkCardIndex()
```

##### `ResetNetworkInterfaceId` <a name="ResetNetworkInterfaceId" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.resetNetworkInterfaceId"></a>

```csharp
private void ResetNetworkInterfaceId()
```

##### `ResetPrimaryIpv6` <a name="ResetPrimaryIpv6" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.resetPrimaryIpv6"></a>

```csharp
private void ResetPrimaryIpv6()
```

##### `ResetPrivateIpAddress` <a name="ResetPrivateIpAddress" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.resetPrivateIpAddress"></a>

```csharp
private void ResetPrivateIpAddress()
```

##### `ResetSecurityGroups` <a name="ResetSecurityGroups" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.resetSecurityGroups"></a>

```csharp
private void ResetSecurityGroups()
```

##### `ResetSubnetId` <a name="ResetSubnetId" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.resetSubnetId"></a>

```csharp
private void ResetSubnetId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.connectionTrackingSpecification">ConnectionTrackingSpecification</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesConnectionTrackingSpecificationOutputReference">LaunchTemplateNetworkInterfacesConnectionTrackingSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.enaSrdSpecification">EnaSrdSpecification</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesEnaSrdSpecificationOutputReference">LaunchTemplateNetworkInterfacesEnaSrdSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.associateCarrierIpAddressInput">AssociateCarrierIpAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.associatePublicIpAddressInput">AssociatePublicIpAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.connectionTrackingSpecificationInput">ConnectionTrackingSpecificationInput</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesConnectionTrackingSpecification">LaunchTemplateNetworkInterfacesConnectionTrackingSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.deleteOnTerminationInput">DeleteOnTerminationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.deviceIndexInput">DeviceIndexInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.enaSrdSpecificationInput">EnaSrdSpecificationInput</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesEnaSrdSpecification">LaunchTemplateNetworkInterfacesEnaSrdSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.interfaceTypeInput">InterfaceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.ipv4AddressCountInput">Ipv4AddressCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.ipv4AddressesInput">Ipv4AddressesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.ipv4PrefixCountInput">Ipv4PrefixCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.ipv4PrefixesInput">Ipv4PrefixesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.ipv6AddressCountInput">Ipv6AddressCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.ipv6AddressesInput">Ipv6AddressesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.ipv6PrefixCountInput">Ipv6PrefixCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.ipv6PrefixesInput">Ipv6PrefixesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.networkCardIndexInput">NetworkCardIndexInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.networkInterfaceIdInput">NetworkInterfaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.primaryIpv6Input">PrimaryIpv6Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.privateIpAddressInput">PrivateIpAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.securityGroupsInput">SecurityGroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.subnetIdInput">SubnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.associateCarrierIpAddress">AssociateCarrierIpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.associatePublicIpAddress">AssociatePublicIpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.deleteOnTermination">DeleteOnTermination</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.deviceIndex">DeviceIndex</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.interfaceType">InterfaceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.ipv4AddressCount">Ipv4AddressCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.ipv4Addresses">Ipv4Addresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.ipv4PrefixCount">Ipv4PrefixCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.ipv4Prefixes">Ipv4Prefixes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.ipv6AddressCount">Ipv6AddressCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.ipv6Addresses">Ipv6Addresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.ipv6PrefixCount">Ipv6PrefixCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.ipv6Prefixes">Ipv6Prefixes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.networkCardIndex">NetworkCardIndex</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.networkInterfaceId">NetworkInterfaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.primaryIpv6">PrimaryIpv6</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.privateIpAddress">PrivateIpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.securityGroups">SecurityGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.subnetId">SubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConnectionTrackingSpecification`<sup>Required</sup> <a name="ConnectionTrackingSpecification" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.connectionTrackingSpecification"></a>

```csharp
public LaunchTemplateNetworkInterfacesConnectionTrackingSpecificationOutputReference ConnectionTrackingSpecification { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesConnectionTrackingSpecificationOutputReference">LaunchTemplateNetworkInterfacesConnectionTrackingSpecificationOutputReference</a>

---

##### `EnaSrdSpecification`<sup>Required</sup> <a name="EnaSrdSpecification" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.enaSrdSpecification"></a>

```csharp
public LaunchTemplateNetworkInterfacesEnaSrdSpecificationOutputReference EnaSrdSpecification { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesEnaSrdSpecificationOutputReference">LaunchTemplateNetworkInterfacesEnaSrdSpecificationOutputReference</a>

---

##### `AssociateCarrierIpAddressInput`<sup>Optional</sup> <a name="AssociateCarrierIpAddressInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.associateCarrierIpAddressInput"></a>

```csharp
public string AssociateCarrierIpAddressInput { get; }
```

- *Type:* string

---

##### `AssociatePublicIpAddressInput`<sup>Optional</sup> <a name="AssociatePublicIpAddressInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.associatePublicIpAddressInput"></a>

```csharp
public string AssociatePublicIpAddressInput { get; }
```

- *Type:* string

---

##### `ConnectionTrackingSpecificationInput`<sup>Optional</sup> <a name="ConnectionTrackingSpecificationInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.connectionTrackingSpecificationInput"></a>

```csharp
public LaunchTemplateNetworkInterfacesConnectionTrackingSpecification ConnectionTrackingSpecificationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesConnectionTrackingSpecification">LaunchTemplateNetworkInterfacesConnectionTrackingSpecification</a>

---

##### `DeleteOnTerminationInput`<sup>Optional</sup> <a name="DeleteOnTerminationInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.deleteOnTerminationInput"></a>

```csharp
public string DeleteOnTerminationInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DeviceIndexInput`<sup>Optional</sup> <a name="DeviceIndexInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.deviceIndexInput"></a>

```csharp
public double DeviceIndexInput { get; }
```

- *Type:* double

---

##### `EnaSrdSpecificationInput`<sup>Optional</sup> <a name="EnaSrdSpecificationInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.enaSrdSpecificationInput"></a>

```csharp
public LaunchTemplateNetworkInterfacesEnaSrdSpecification EnaSrdSpecificationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesEnaSrdSpecification">LaunchTemplateNetworkInterfacesEnaSrdSpecification</a>

---

##### `InterfaceTypeInput`<sup>Optional</sup> <a name="InterfaceTypeInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.interfaceTypeInput"></a>

```csharp
public string InterfaceTypeInput { get; }
```

- *Type:* string

---

##### `Ipv4AddressCountInput`<sup>Optional</sup> <a name="Ipv4AddressCountInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.ipv4AddressCountInput"></a>

```csharp
public double Ipv4AddressCountInput { get; }
```

- *Type:* double

---

##### `Ipv4AddressesInput`<sup>Optional</sup> <a name="Ipv4AddressesInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.ipv4AddressesInput"></a>

```csharp
public string[] Ipv4AddressesInput { get; }
```

- *Type:* string[]

---

##### `Ipv4PrefixCountInput`<sup>Optional</sup> <a name="Ipv4PrefixCountInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.ipv4PrefixCountInput"></a>

```csharp
public double Ipv4PrefixCountInput { get; }
```

- *Type:* double

---

##### `Ipv4PrefixesInput`<sup>Optional</sup> <a name="Ipv4PrefixesInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.ipv4PrefixesInput"></a>

```csharp
public string[] Ipv4PrefixesInput { get; }
```

- *Type:* string[]

---

##### `Ipv6AddressCountInput`<sup>Optional</sup> <a name="Ipv6AddressCountInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.ipv6AddressCountInput"></a>

```csharp
public double Ipv6AddressCountInput { get; }
```

- *Type:* double

---

##### `Ipv6AddressesInput`<sup>Optional</sup> <a name="Ipv6AddressesInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.ipv6AddressesInput"></a>

```csharp
public string[] Ipv6AddressesInput { get; }
```

- *Type:* string[]

---

##### `Ipv6PrefixCountInput`<sup>Optional</sup> <a name="Ipv6PrefixCountInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.ipv6PrefixCountInput"></a>

```csharp
public double Ipv6PrefixCountInput { get; }
```

- *Type:* double

---

##### `Ipv6PrefixesInput`<sup>Optional</sup> <a name="Ipv6PrefixesInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.ipv6PrefixesInput"></a>

```csharp
public string[] Ipv6PrefixesInput { get; }
```

- *Type:* string[]

---

##### `NetworkCardIndexInput`<sup>Optional</sup> <a name="NetworkCardIndexInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.networkCardIndexInput"></a>

```csharp
public double NetworkCardIndexInput { get; }
```

- *Type:* double

---

##### `NetworkInterfaceIdInput`<sup>Optional</sup> <a name="NetworkInterfaceIdInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.networkInterfaceIdInput"></a>

```csharp
public string NetworkInterfaceIdInput { get; }
```

- *Type:* string

---

##### `PrimaryIpv6Input`<sup>Optional</sup> <a name="PrimaryIpv6Input" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.primaryIpv6Input"></a>

```csharp
public string PrimaryIpv6Input { get; }
```

- *Type:* string

---

##### `PrivateIpAddressInput`<sup>Optional</sup> <a name="PrivateIpAddressInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.privateIpAddressInput"></a>

```csharp
public string PrivateIpAddressInput { get; }
```

- *Type:* string

---

##### `SecurityGroupsInput`<sup>Optional</sup> <a name="SecurityGroupsInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.securityGroupsInput"></a>

```csharp
public string[] SecurityGroupsInput { get; }
```

- *Type:* string[]

---

##### `SubnetIdInput`<sup>Optional</sup> <a name="SubnetIdInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.subnetIdInput"></a>

```csharp
public string SubnetIdInput { get; }
```

- *Type:* string

---

##### `AssociateCarrierIpAddress`<sup>Required</sup> <a name="AssociateCarrierIpAddress" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.associateCarrierIpAddress"></a>

```csharp
public string AssociateCarrierIpAddress { get; }
```

- *Type:* string

---

##### `AssociatePublicIpAddress`<sup>Required</sup> <a name="AssociatePublicIpAddress" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.associatePublicIpAddress"></a>

```csharp
public string AssociatePublicIpAddress { get; }
```

- *Type:* string

---

##### `DeleteOnTermination`<sup>Required</sup> <a name="DeleteOnTermination" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.deleteOnTermination"></a>

```csharp
public string DeleteOnTermination { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DeviceIndex`<sup>Required</sup> <a name="DeviceIndex" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.deviceIndex"></a>

```csharp
public double DeviceIndex { get; }
```

- *Type:* double

---

##### `InterfaceType`<sup>Required</sup> <a name="InterfaceType" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.interfaceType"></a>

```csharp
public string InterfaceType { get; }
```

- *Type:* string

---

##### `Ipv4AddressCount`<sup>Required</sup> <a name="Ipv4AddressCount" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.ipv4AddressCount"></a>

```csharp
public double Ipv4AddressCount { get; }
```

- *Type:* double

---

##### `Ipv4Addresses`<sup>Required</sup> <a name="Ipv4Addresses" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.ipv4Addresses"></a>

```csharp
public string[] Ipv4Addresses { get; }
```

- *Type:* string[]

---

##### `Ipv4PrefixCount`<sup>Required</sup> <a name="Ipv4PrefixCount" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.ipv4PrefixCount"></a>

```csharp
public double Ipv4PrefixCount { get; }
```

- *Type:* double

---

##### `Ipv4Prefixes`<sup>Required</sup> <a name="Ipv4Prefixes" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.ipv4Prefixes"></a>

```csharp
public string[] Ipv4Prefixes { get; }
```

- *Type:* string[]

---

##### `Ipv6AddressCount`<sup>Required</sup> <a name="Ipv6AddressCount" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.ipv6AddressCount"></a>

```csharp
public double Ipv6AddressCount { get; }
```

- *Type:* double

---

##### `Ipv6Addresses`<sup>Required</sup> <a name="Ipv6Addresses" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.ipv6Addresses"></a>

```csharp
public string[] Ipv6Addresses { get; }
```

- *Type:* string[]

---

##### `Ipv6PrefixCount`<sup>Required</sup> <a name="Ipv6PrefixCount" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.ipv6PrefixCount"></a>

```csharp
public double Ipv6PrefixCount { get; }
```

- *Type:* double

---

##### `Ipv6Prefixes`<sup>Required</sup> <a name="Ipv6Prefixes" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.ipv6Prefixes"></a>

```csharp
public string[] Ipv6Prefixes { get; }
```

- *Type:* string[]

---

##### `NetworkCardIndex`<sup>Required</sup> <a name="NetworkCardIndex" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.networkCardIndex"></a>

```csharp
public double NetworkCardIndex { get; }
```

- *Type:* double

---

##### `NetworkInterfaceId`<sup>Required</sup> <a name="NetworkInterfaceId" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.networkInterfaceId"></a>

```csharp
public string NetworkInterfaceId { get; }
```

- *Type:* string

---

##### `PrimaryIpv6`<sup>Required</sup> <a name="PrimaryIpv6" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.primaryIpv6"></a>

```csharp
public string PrimaryIpv6 { get; }
```

- *Type:* string

---

##### `PrivateIpAddress`<sup>Required</sup> <a name="PrivateIpAddress" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.privateIpAddress"></a>

```csharp
public string PrivateIpAddress { get; }
```

- *Type:* string

---

##### `SecurityGroups`<sup>Required</sup> <a name="SecurityGroups" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.securityGroups"></a>

```csharp
public string[] SecurityGroups { get; }
```

- *Type:* string[]

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.subnetId"></a>

```csharp
public string SubnetId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateNetworkInterfacesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### LaunchTemplatePlacementOutputReference <a name="LaunchTemplatePlacementOutputReference" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LaunchTemplatePlacementOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.resetAffinity">ResetAffinity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.resetAvailabilityZone">ResetAvailabilityZone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.resetGroupName">ResetGroupName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.resetHostId">ResetHostId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.resetHostResourceGroupArn">ResetHostResourceGroupArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.resetPartitionNumber">ResetPartitionNumber</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.resetSpreadDomain">ResetSpreadDomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.resetTenancy">ResetTenancy</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAffinity` <a name="ResetAffinity" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.resetAffinity"></a>

```csharp
private void ResetAffinity()
```

##### `ResetAvailabilityZone` <a name="ResetAvailabilityZone" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.resetAvailabilityZone"></a>

```csharp
private void ResetAvailabilityZone()
```

##### `ResetGroupName` <a name="ResetGroupName" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.resetGroupName"></a>

```csharp
private void ResetGroupName()
```

##### `ResetHostId` <a name="ResetHostId" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.resetHostId"></a>

```csharp
private void ResetHostId()
```

##### `ResetHostResourceGroupArn` <a name="ResetHostResourceGroupArn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.resetHostResourceGroupArn"></a>

```csharp
private void ResetHostResourceGroupArn()
```

##### `ResetPartitionNumber` <a name="ResetPartitionNumber" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.resetPartitionNumber"></a>

```csharp
private void ResetPartitionNumber()
```

##### `ResetSpreadDomain` <a name="ResetSpreadDomain" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.resetSpreadDomain"></a>

```csharp
private void ResetSpreadDomain()
```

##### `ResetTenancy` <a name="ResetTenancy" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.resetTenancy"></a>

```csharp
private void ResetTenancy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.property.affinityInput">AffinityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.property.availabilityZoneInput">AvailabilityZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.property.groupNameInput">GroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.property.hostIdInput">HostIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.property.hostResourceGroupArnInput">HostResourceGroupArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.property.partitionNumberInput">PartitionNumberInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.property.spreadDomainInput">SpreadDomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.property.tenancyInput">TenancyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.property.affinity">Affinity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.property.availabilityZone">AvailabilityZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.property.groupName">GroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.property.hostId">HostId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.property.hostResourceGroupArn">HostResourceGroupArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.property.partitionNumber">PartitionNumber</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.property.spreadDomain">SpreadDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.property.tenancy">Tenancy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacement">LaunchTemplatePlacement</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AffinityInput`<sup>Optional</sup> <a name="AffinityInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.property.affinityInput"></a>

```csharp
public string AffinityInput { get; }
```

- *Type:* string

---

##### `AvailabilityZoneInput`<sup>Optional</sup> <a name="AvailabilityZoneInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.property.availabilityZoneInput"></a>

```csharp
public string AvailabilityZoneInput { get; }
```

- *Type:* string

---

##### `GroupNameInput`<sup>Optional</sup> <a name="GroupNameInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.property.groupNameInput"></a>

```csharp
public string GroupNameInput { get; }
```

- *Type:* string

---

##### `HostIdInput`<sup>Optional</sup> <a name="HostIdInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.property.hostIdInput"></a>

```csharp
public string HostIdInput { get; }
```

- *Type:* string

---

##### `HostResourceGroupArnInput`<sup>Optional</sup> <a name="HostResourceGroupArnInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.property.hostResourceGroupArnInput"></a>

```csharp
public string HostResourceGroupArnInput { get; }
```

- *Type:* string

---

##### `PartitionNumberInput`<sup>Optional</sup> <a name="PartitionNumberInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.property.partitionNumberInput"></a>

```csharp
public double PartitionNumberInput { get; }
```

- *Type:* double

---

##### `SpreadDomainInput`<sup>Optional</sup> <a name="SpreadDomainInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.property.spreadDomainInput"></a>

```csharp
public string SpreadDomainInput { get; }
```

- *Type:* string

---

##### `TenancyInput`<sup>Optional</sup> <a name="TenancyInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.property.tenancyInput"></a>

```csharp
public string TenancyInput { get; }
```

- *Type:* string

---

##### `Affinity`<sup>Required</sup> <a name="Affinity" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.property.affinity"></a>

```csharp
public string Affinity { get; }
```

- *Type:* string

---

##### `AvailabilityZone`<sup>Required</sup> <a name="AvailabilityZone" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.property.availabilityZone"></a>

```csharp
public string AvailabilityZone { get; }
```

- *Type:* string

---

##### `GroupName`<sup>Required</sup> <a name="GroupName" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.property.groupName"></a>

```csharp
public string GroupName { get; }
```

- *Type:* string

---

##### `HostId`<sup>Required</sup> <a name="HostId" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.property.hostId"></a>

```csharp
public string HostId { get; }
```

- *Type:* string

---

##### `HostResourceGroupArn`<sup>Required</sup> <a name="HostResourceGroupArn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.property.hostResourceGroupArn"></a>

```csharp
public string HostResourceGroupArn { get; }
```

- *Type:* string

---

##### `PartitionNumber`<sup>Required</sup> <a name="PartitionNumber" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.property.partitionNumber"></a>

```csharp
public double PartitionNumber { get; }
```

- *Type:* double

---

##### `SpreadDomain`<sup>Required</sup> <a name="SpreadDomain" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.property.spreadDomain"></a>

```csharp
public string SpreadDomain { get; }
```

- *Type:* string

---

##### `Tenancy`<sup>Required</sup> <a name="Tenancy" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.property.tenancy"></a>

```csharp
public string Tenancy { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacementOutputReference.property.internalValue"></a>

```csharp
public LaunchTemplatePlacement InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePlacement">LaunchTemplatePlacement</a>

---


### LaunchTemplatePrivateDnsNameOptionsOutputReference <a name="LaunchTemplatePrivateDnsNameOptionsOutputReference" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LaunchTemplatePrivateDnsNameOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptionsOutputReference.resetEnableResourceNameDnsAaaaRecord">ResetEnableResourceNameDnsAaaaRecord</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptionsOutputReference.resetEnableResourceNameDnsARecord">ResetEnableResourceNameDnsARecord</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptionsOutputReference.resetHostnameType">ResetHostnameType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnableResourceNameDnsAaaaRecord` <a name="ResetEnableResourceNameDnsAaaaRecord" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptionsOutputReference.resetEnableResourceNameDnsAaaaRecord"></a>

```csharp
private void ResetEnableResourceNameDnsAaaaRecord()
```

##### `ResetEnableResourceNameDnsARecord` <a name="ResetEnableResourceNameDnsARecord" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptionsOutputReference.resetEnableResourceNameDnsARecord"></a>

```csharp
private void ResetEnableResourceNameDnsARecord()
```

##### `ResetHostnameType` <a name="ResetHostnameType" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptionsOutputReference.resetHostnameType"></a>

```csharp
private void ResetHostnameType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptionsOutputReference.property.enableResourceNameDnsAaaaRecordInput">EnableResourceNameDnsAaaaRecordInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptionsOutputReference.property.enableResourceNameDnsARecordInput">EnableResourceNameDnsARecordInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptionsOutputReference.property.hostnameTypeInput">HostnameTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptionsOutputReference.property.enableResourceNameDnsAaaaRecord">EnableResourceNameDnsAaaaRecord</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptionsOutputReference.property.enableResourceNameDnsARecord">EnableResourceNameDnsARecord</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptionsOutputReference.property.hostnameType">HostnameType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptions">LaunchTemplatePrivateDnsNameOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnableResourceNameDnsAaaaRecordInput`<sup>Optional</sup> <a name="EnableResourceNameDnsAaaaRecordInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptionsOutputReference.property.enableResourceNameDnsAaaaRecordInput"></a>

```csharp
public object EnableResourceNameDnsAaaaRecordInput { get; }
```

- *Type:* object

---

##### `EnableResourceNameDnsARecordInput`<sup>Optional</sup> <a name="EnableResourceNameDnsARecordInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptionsOutputReference.property.enableResourceNameDnsARecordInput"></a>

```csharp
public object EnableResourceNameDnsARecordInput { get; }
```

- *Type:* object

---

##### `HostnameTypeInput`<sup>Optional</sup> <a name="HostnameTypeInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptionsOutputReference.property.hostnameTypeInput"></a>

```csharp
public string HostnameTypeInput { get; }
```

- *Type:* string

---

##### `EnableResourceNameDnsAaaaRecord`<sup>Required</sup> <a name="EnableResourceNameDnsAaaaRecord" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptionsOutputReference.property.enableResourceNameDnsAaaaRecord"></a>

```csharp
public object EnableResourceNameDnsAaaaRecord { get; }
```

- *Type:* object

---

##### `EnableResourceNameDnsARecord`<sup>Required</sup> <a name="EnableResourceNameDnsARecord" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptionsOutputReference.property.enableResourceNameDnsARecord"></a>

```csharp
public object EnableResourceNameDnsARecord { get; }
```

- *Type:* object

---

##### `HostnameType`<sup>Required</sup> <a name="HostnameType" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptionsOutputReference.property.hostnameType"></a>

```csharp
public string HostnameType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptionsOutputReference.property.internalValue"></a>

```csharp
public LaunchTemplatePrivateDnsNameOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplatePrivateDnsNameOptions">LaunchTemplatePrivateDnsNameOptions</a>

---


### LaunchTemplateTagSpecificationsList <a name="LaunchTemplateTagSpecificationsList" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LaunchTemplateTagSpecificationsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsList.get"></a>

```csharp
private LaunchTemplateTagSpecificationsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### LaunchTemplateTagSpecificationsOutputReference <a name="LaunchTemplateTagSpecificationsOutputReference" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LaunchTemplateTagSpecificationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.resetResourceType">ResetResourceType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetResourceType` <a name="ResetResourceType" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.resetResourceType"></a>

```csharp
private void ResetResourceType()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.resetTags"></a>

```csharp
private void ResetTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.property.resourceTypeInput">ResourceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.property.resourceType">ResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ResourceTypeInput`<sup>Optional</sup> <a name="ResourceTypeInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.property.resourceTypeInput"></a>

```csharp
public string ResourceTypeInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.property.resourceType"></a>

```csharp
public string ResourceType { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.launchTemplate.LaunchTemplateTagSpecificationsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



