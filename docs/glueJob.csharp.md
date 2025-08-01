# `glueJob` Submodule <a name="`glueJob` Submodule" id="@cdktf/provider-aws.glueJob"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GlueJob <a name="GlueJob" id="@cdktf/provider-aws.glueJob.GlueJob"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/glue_job aws_glue_job}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueJob.GlueJob.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new GlueJob(Construct Scope, string Id, GlueJobConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.glueJob.GlueJobConfig">GlueJobConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.glueJob.GlueJob.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.glueJob.GlueJob.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.glueJob.GlueJob.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.glueJob.GlueJobConfig">GlueJobConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.putCommand">PutCommand</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.putExecutionProperty">PutExecutionProperty</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.putNotificationProperty">PutNotificationProperty</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.putSourceControlDetails">PutSourceControlDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.resetConnections">ResetConnections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.resetDefaultArguments">ResetDefaultArguments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.resetExecutionClass">ResetExecutionClass</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.resetExecutionProperty">ResetExecutionProperty</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.resetGlueVersion">ResetGlueVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.resetJobMode">ResetJobMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.resetJobRunQueuingEnabled">ResetJobRunQueuingEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.resetMaintenanceWindow">ResetMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.resetMaxCapacity">ResetMaxCapacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.resetMaxRetries">ResetMaxRetries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.resetNonOverridableArguments">ResetNonOverridableArguments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.resetNotificationProperty">ResetNotificationProperty</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.resetNumberOfWorkers">ResetNumberOfWorkers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.resetSecurityConfiguration">ResetSecurityConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.resetSourceControlDetails">ResetSourceControlDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.resetTimeout">ResetTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.resetWorkerType">ResetWorkerType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.glueJob.GlueJob.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.glueJob.GlueJob.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.glueJob.GlueJob.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.glueJob.GlueJob.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.glueJob.GlueJob.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.glueJob.GlueJob.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.glueJob.GlueJob.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.glueJob.GlueJob.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.glueJob.GlueJob.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.glueJob.GlueJob.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.glueJob.GlueJob.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.glueJob.GlueJob.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.glueJob.GlueJob.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueJob.GlueJob.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.glueJob.GlueJob.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueJob.GlueJob.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.glueJob.GlueJob.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueJob.GlueJob.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.glueJob.GlueJob.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueJob.GlueJob.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.glueJob.GlueJob.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueJob.GlueJob.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.glueJob.GlueJob.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueJob.GlueJob.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.glueJob.GlueJob.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueJob.GlueJob.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.glueJob.GlueJob.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueJob.GlueJob.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.glueJob.GlueJob.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueJob.GlueJob.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.glueJob.GlueJob.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.glueJob.GlueJob.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.glueJob.GlueJob.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.glueJob.GlueJob.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.glueJob.GlueJob.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueJob.GlueJob.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.glueJob.GlueJob.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.glueJob.GlueJob.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.glueJob.GlueJob.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.glueJob.GlueJob.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-aws.glueJob.GlueJob.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.glueJob.GlueJob.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.glueJob.GlueJob.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCommand` <a name="PutCommand" id="@cdktf/provider-aws.glueJob.GlueJob.putCommand"></a>

```csharp
private void PutCommand(GlueJobCommand Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.glueJob.GlueJob.putCommand.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.glueJob.GlueJobCommand">GlueJobCommand</a>

---

##### `PutExecutionProperty` <a name="PutExecutionProperty" id="@cdktf/provider-aws.glueJob.GlueJob.putExecutionProperty"></a>

```csharp
private void PutExecutionProperty(GlueJobExecutionProperty Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.glueJob.GlueJob.putExecutionProperty.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.glueJob.GlueJobExecutionProperty">GlueJobExecutionProperty</a>

---

##### `PutNotificationProperty` <a name="PutNotificationProperty" id="@cdktf/provider-aws.glueJob.GlueJob.putNotificationProperty"></a>

```csharp
private void PutNotificationProperty(GlueJobNotificationProperty Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.glueJob.GlueJob.putNotificationProperty.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.glueJob.GlueJobNotificationProperty">GlueJobNotificationProperty</a>

---

##### `PutSourceControlDetails` <a name="PutSourceControlDetails" id="@cdktf/provider-aws.glueJob.GlueJob.putSourceControlDetails"></a>

```csharp
private void PutSourceControlDetails(GlueJobSourceControlDetails Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.glueJob.GlueJob.putSourceControlDetails.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.glueJob.GlueJobSourceControlDetails">GlueJobSourceControlDetails</a>

---

##### `ResetConnections` <a name="ResetConnections" id="@cdktf/provider-aws.glueJob.GlueJob.resetConnections"></a>

```csharp
private void ResetConnections()
```

##### `ResetDefaultArguments` <a name="ResetDefaultArguments" id="@cdktf/provider-aws.glueJob.GlueJob.resetDefaultArguments"></a>

```csharp
private void ResetDefaultArguments()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-aws.glueJob.GlueJob.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetExecutionClass` <a name="ResetExecutionClass" id="@cdktf/provider-aws.glueJob.GlueJob.resetExecutionClass"></a>

```csharp
private void ResetExecutionClass()
```

##### `ResetExecutionProperty` <a name="ResetExecutionProperty" id="@cdktf/provider-aws.glueJob.GlueJob.resetExecutionProperty"></a>

```csharp
private void ResetExecutionProperty()
```

##### `ResetGlueVersion` <a name="ResetGlueVersion" id="@cdktf/provider-aws.glueJob.GlueJob.resetGlueVersion"></a>

```csharp
private void ResetGlueVersion()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.glueJob.GlueJob.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetJobMode` <a name="ResetJobMode" id="@cdktf/provider-aws.glueJob.GlueJob.resetJobMode"></a>

```csharp
private void ResetJobMode()
```

##### `ResetJobRunQueuingEnabled` <a name="ResetJobRunQueuingEnabled" id="@cdktf/provider-aws.glueJob.GlueJob.resetJobRunQueuingEnabled"></a>

```csharp
private void ResetJobRunQueuingEnabled()
```

##### `ResetMaintenanceWindow` <a name="ResetMaintenanceWindow" id="@cdktf/provider-aws.glueJob.GlueJob.resetMaintenanceWindow"></a>

```csharp
private void ResetMaintenanceWindow()
```

##### `ResetMaxCapacity` <a name="ResetMaxCapacity" id="@cdktf/provider-aws.glueJob.GlueJob.resetMaxCapacity"></a>

```csharp
private void ResetMaxCapacity()
```

##### `ResetMaxRetries` <a name="ResetMaxRetries" id="@cdktf/provider-aws.glueJob.GlueJob.resetMaxRetries"></a>

```csharp
private void ResetMaxRetries()
```

##### `ResetNonOverridableArguments` <a name="ResetNonOverridableArguments" id="@cdktf/provider-aws.glueJob.GlueJob.resetNonOverridableArguments"></a>

```csharp
private void ResetNonOverridableArguments()
```

##### `ResetNotificationProperty` <a name="ResetNotificationProperty" id="@cdktf/provider-aws.glueJob.GlueJob.resetNotificationProperty"></a>

```csharp
private void ResetNotificationProperty()
```

##### `ResetNumberOfWorkers` <a name="ResetNumberOfWorkers" id="@cdktf/provider-aws.glueJob.GlueJob.resetNumberOfWorkers"></a>

```csharp
private void ResetNumberOfWorkers()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-aws.glueJob.GlueJob.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetSecurityConfiguration` <a name="ResetSecurityConfiguration" id="@cdktf/provider-aws.glueJob.GlueJob.resetSecurityConfiguration"></a>

```csharp
private void ResetSecurityConfiguration()
```

##### `ResetSourceControlDetails` <a name="ResetSourceControlDetails" id="@cdktf/provider-aws.glueJob.GlueJob.resetSourceControlDetails"></a>

```csharp
private void ResetSourceControlDetails()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.glueJob.GlueJob.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.glueJob.GlueJob.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

##### `ResetTimeout` <a name="ResetTimeout" id="@cdktf/provider-aws.glueJob.GlueJob.resetTimeout"></a>

```csharp
private void ResetTimeout()
```

##### `ResetWorkerType` <a name="ResetWorkerType" id="@cdktf/provider-aws.glueJob.GlueJob.resetWorkerType"></a>

```csharp
private void ResetWorkerType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GlueJob resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.glueJob.GlueJob.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

GlueJob.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.glueJob.GlueJob.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.glueJob.GlueJob.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

GlueJob.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.glueJob.GlueJob.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.glueJob.GlueJob.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

GlueJob.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.glueJob.GlueJob.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.glueJob.GlueJob.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

GlueJob.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GlueJob resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.glueJob.GlueJob.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-aws.glueJob.GlueJob.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GlueJob to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-aws.glueJob.GlueJob.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GlueJob that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/glue_job#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.glueJob.GlueJob.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GlueJob to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.property.command">Command</a></code> | <code><a href="#@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference">GlueJobCommandOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.property.executionProperty">ExecutionProperty</a></code> | <code><a href="#@cdktf/provider-aws.glueJob.GlueJobExecutionPropertyOutputReference">GlueJobExecutionPropertyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.property.notificationProperty">NotificationProperty</a></code> | <code><a href="#@cdktf/provider-aws.glueJob.GlueJobNotificationPropertyOutputReference">GlueJobNotificationPropertyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.property.sourceControlDetails">SourceControlDetails</a></code> | <code><a href="#@cdktf/provider-aws.glueJob.GlueJobSourceControlDetailsOutputReference">GlueJobSourceControlDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.property.commandInput">CommandInput</a></code> | <code><a href="#@cdktf/provider-aws.glueJob.GlueJobCommand">GlueJobCommand</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.property.connectionsInput">ConnectionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.property.defaultArgumentsInput">DefaultArgumentsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.property.executionClassInput">ExecutionClassInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.property.executionPropertyInput">ExecutionPropertyInput</a></code> | <code><a href="#@cdktf/provider-aws.glueJob.GlueJobExecutionProperty">GlueJobExecutionProperty</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.property.glueVersionInput">GlueVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.property.jobModeInput">JobModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.property.jobRunQueuingEnabledInput">JobRunQueuingEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.property.maintenanceWindowInput">MaintenanceWindowInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.property.maxCapacityInput">MaxCapacityInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.property.maxRetriesInput">MaxRetriesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.property.nonOverridableArgumentsInput">NonOverridableArgumentsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.property.notificationPropertyInput">NotificationPropertyInput</a></code> | <code><a href="#@cdktf/provider-aws.glueJob.GlueJobNotificationProperty">GlueJobNotificationProperty</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.property.numberOfWorkersInput">NumberOfWorkersInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.property.roleArnInput">RoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.property.securityConfigurationInput">SecurityConfigurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.property.sourceControlDetailsInput">SourceControlDetailsInput</a></code> | <code><a href="#@cdktf/provider-aws.glueJob.GlueJobSourceControlDetails">GlueJobSourceControlDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.property.timeoutInput">TimeoutInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.property.workerTypeInput">WorkerTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.property.connections">Connections</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.property.defaultArguments">DefaultArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.property.executionClass">ExecutionClass</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.property.glueVersion">GlueVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.property.jobMode">JobMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.property.jobRunQueuingEnabled">JobRunQueuingEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.property.maintenanceWindow">MaintenanceWindow</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.property.maxCapacity">MaxCapacity</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.property.maxRetries">MaxRetries</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.property.nonOverridableArguments">NonOverridableArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.property.numberOfWorkers">NumberOfWorkers</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.property.roleArn">RoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.property.securityConfiguration">SecurityConfiguration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.property.timeout">Timeout</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.property.workerType">WorkerType</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.glueJob.GlueJob.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.glueJob.GlueJob.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.glueJob.GlueJob.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.glueJob.GlueJob.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.glueJob.GlueJob.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.glueJob.GlueJob.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.glueJob.GlueJob.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.glueJob.GlueJob.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.glueJob.GlueJob.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.glueJob.GlueJob.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.glueJob.GlueJob.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.glueJob.GlueJob.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.glueJob.GlueJob.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.glueJob.GlueJob.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.glueJob.GlueJob.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `Command`<sup>Required</sup> <a name="Command" id="@cdktf/provider-aws.glueJob.GlueJob.property.command"></a>

```csharp
public GlueJobCommandOutputReference Command { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference">GlueJobCommandOutputReference</a>

---

##### `ExecutionProperty`<sup>Required</sup> <a name="ExecutionProperty" id="@cdktf/provider-aws.glueJob.GlueJob.property.executionProperty"></a>

```csharp
public GlueJobExecutionPropertyOutputReference ExecutionProperty { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.glueJob.GlueJobExecutionPropertyOutputReference">GlueJobExecutionPropertyOutputReference</a>

---

##### `NotificationProperty`<sup>Required</sup> <a name="NotificationProperty" id="@cdktf/provider-aws.glueJob.GlueJob.property.notificationProperty"></a>

```csharp
public GlueJobNotificationPropertyOutputReference NotificationProperty { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.glueJob.GlueJobNotificationPropertyOutputReference">GlueJobNotificationPropertyOutputReference</a>

---

##### `SourceControlDetails`<sup>Required</sup> <a name="SourceControlDetails" id="@cdktf/provider-aws.glueJob.GlueJob.property.sourceControlDetails"></a>

```csharp
public GlueJobSourceControlDetailsOutputReference SourceControlDetails { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.glueJob.GlueJobSourceControlDetailsOutputReference">GlueJobSourceControlDetailsOutputReference</a>

---

##### `CommandInput`<sup>Optional</sup> <a name="CommandInput" id="@cdktf/provider-aws.glueJob.GlueJob.property.commandInput"></a>

```csharp
public GlueJobCommand CommandInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.glueJob.GlueJobCommand">GlueJobCommand</a>

---

##### `ConnectionsInput`<sup>Optional</sup> <a name="ConnectionsInput" id="@cdktf/provider-aws.glueJob.GlueJob.property.connectionsInput"></a>

```csharp
public string[] ConnectionsInput { get; }
```

- *Type:* string[]

---

##### `DefaultArgumentsInput`<sup>Optional</sup> <a name="DefaultArgumentsInput" id="@cdktf/provider-aws.glueJob.GlueJob.property.defaultArgumentsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefaultArgumentsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-aws.glueJob.GlueJob.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `ExecutionClassInput`<sup>Optional</sup> <a name="ExecutionClassInput" id="@cdktf/provider-aws.glueJob.GlueJob.property.executionClassInput"></a>

```csharp
public string ExecutionClassInput { get; }
```

- *Type:* string

---

##### `ExecutionPropertyInput`<sup>Optional</sup> <a name="ExecutionPropertyInput" id="@cdktf/provider-aws.glueJob.GlueJob.property.executionPropertyInput"></a>

```csharp
public GlueJobExecutionProperty ExecutionPropertyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.glueJob.GlueJobExecutionProperty">GlueJobExecutionProperty</a>

---

##### `GlueVersionInput`<sup>Optional</sup> <a name="GlueVersionInput" id="@cdktf/provider-aws.glueJob.GlueJob.property.glueVersionInput"></a>

```csharp
public string GlueVersionInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.glueJob.GlueJob.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `JobModeInput`<sup>Optional</sup> <a name="JobModeInput" id="@cdktf/provider-aws.glueJob.GlueJob.property.jobModeInput"></a>

```csharp
public string JobModeInput { get; }
```

- *Type:* string

---

##### `JobRunQueuingEnabledInput`<sup>Optional</sup> <a name="JobRunQueuingEnabledInput" id="@cdktf/provider-aws.glueJob.GlueJob.property.jobRunQueuingEnabledInput"></a>

```csharp
public object JobRunQueuingEnabledInput { get; }
```

- *Type:* object

---

##### `MaintenanceWindowInput`<sup>Optional</sup> <a name="MaintenanceWindowInput" id="@cdktf/provider-aws.glueJob.GlueJob.property.maintenanceWindowInput"></a>

```csharp
public string MaintenanceWindowInput { get; }
```

- *Type:* string

---

##### `MaxCapacityInput`<sup>Optional</sup> <a name="MaxCapacityInput" id="@cdktf/provider-aws.glueJob.GlueJob.property.maxCapacityInput"></a>

```csharp
public double MaxCapacityInput { get; }
```

- *Type:* double

---

##### `MaxRetriesInput`<sup>Optional</sup> <a name="MaxRetriesInput" id="@cdktf/provider-aws.glueJob.GlueJob.property.maxRetriesInput"></a>

```csharp
public double MaxRetriesInput { get; }
```

- *Type:* double

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.glueJob.GlueJob.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NonOverridableArgumentsInput`<sup>Optional</sup> <a name="NonOverridableArgumentsInput" id="@cdktf/provider-aws.glueJob.GlueJob.property.nonOverridableArgumentsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> NonOverridableArgumentsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `NotificationPropertyInput`<sup>Optional</sup> <a name="NotificationPropertyInput" id="@cdktf/provider-aws.glueJob.GlueJob.property.notificationPropertyInput"></a>

```csharp
public GlueJobNotificationProperty NotificationPropertyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.glueJob.GlueJobNotificationProperty">GlueJobNotificationProperty</a>

---

##### `NumberOfWorkersInput`<sup>Optional</sup> <a name="NumberOfWorkersInput" id="@cdktf/provider-aws.glueJob.GlueJob.property.numberOfWorkersInput"></a>

```csharp
public double NumberOfWorkersInput { get; }
```

- *Type:* double

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-aws.glueJob.GlueJob.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktf/provider-aws.glueJob.GlueJob.property.roleArnInput"></a>

```csharp
public string RoleArnInput { get; }
```

- *Type:* string

---

##### `SecurityConfigurationInput`<sup>Optional</sup> <a name="SecurityConfigurationInput" id="@cdktf/provider-aws.glueJob.GlueJob.property.securityConfigurationInput"></a>

```csharp
public string SecurityConfigurationInput { get; }
```

- *Type:* string

---

##### `SourceControlDetailsInput`<sup>Optional</sup> <a name="SourceControlDetailsInput" id="@cdktf/provider-aws.glueJob.GlueJob.property.sourceControlDetailsInput"></a>

```csharp
public GlueJobSourceControlDetails SourceControlDetailsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.glueJob.GlueJobSourceControlDetails">GlueJobSourceControlDetails</a>

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.glueJob.GlueJob.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.glueJob.GlueJob.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutInput`<sup>Optional</sup> <a name="TimeoutInput" id="@cdktf/provider-aws.glueJob.GlueJob.property.timeoutInput"></a>

```csharp
public double TimeoutInput { get; }
```

- *Type:* double

---

##### `WorkerTypeInput`<sup>Optional</sup> <a name="WorkerTypeInput" id="@cdktf/provider-aws.glueJob.GlueJob.property.workerTypeInput"></a>

```csharp
public string WorkerTypeInput { get; }
```

- *Type:* string

---

##### `Connections`<sup>Required</sup> <a name="Connections" id="@cdktf/provider-aws.glueJob.GlueJob.property.connections"></a>

```csharp
public string[] Connections { get; }
```

- *Type:* string[]

---

##### `DefaultArguments`<sup>Required</sup> <a name="DefaultArguments" id="@cdktf/provider-aws.glueJob.GlueJob.property.defaultArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefaultArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.glueJob.GlueJob.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `ExecutionClass`<sup>Required</sup> <a name="ExecutionClass" id="@cdktf/provider-aws.glueJob.GlueJob.property.executionClass"></a>

```csharp
public string ExecutionClass { get; }
```

- *Type:* string

---

##### `GlueVersion`<sup>Required</sup> <a name="GlueVersion" id="@cdktf/provider-aws.glueJob.GlueJob.property.glueVersion"></a>

```csharp
public string GlueVersion { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.glueJob.GlueJob.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `JobMode`<sup>Required</sup> <a name="JobMode" id="@cdktf/provider-aws.glueJob.GlueJob.property.jobMode"></a>

```csharp
public string JobMode { get; }
```

- *Type:* string

---

##### `JobRunQueuingEnabled`<sup>Required</sup> <a name="JobRunQueuingEnabled" id="@cdktf/provider-aws.glueJob.GlueJob.property.jobRunQueuingEnabled"></a>

```csharp
public object JobRunQueuingEnabled { get; }
```

- *Type:* object

---

##### `MaintenanceWindow`<sup>Required</sup> <a name="MaintenanceWindow" id="@cdktf/provider-aws.glueJob.GlueJob.property.maintenanceWindow"></a>

```csharp
public string MaintenanceWindow { get; }
```

- *Type:* string

---

##### `MaxCapacity`<sup>Required</sup> <a name="MaxCapacity" id="@cdktf/provider-aws.glueJob.GlueJob.property.maxCapacity"></a>

```csharp
public double MaxCapacity { get; }
```

- *Type:* double

---

##### `MaxRetries`<sup>Required</sup> <a name="MaxRetries" id="@cdktf/provider-aws.glueJob.GlueJob.property.maxRetries"></a>

```csharp
public double MaxRetries { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.glueJob.GlueJob.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NonOverridableArguments`<sup>Required</sup> <a name="NonOverridableArguments" id="@cdktf/provider-aws.glueJob.GlueJob.property.nonOverridableArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> NonOverridableArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `NumberOfWorkers`<sup>Required</sup> <a name="NumberOfWorkers" id="@cdktf/provider-aws.glueJob.GlueJob.property.numberOfWorkers"></a>

```csharp
public double NumberOfWorkers { get; }
```

- *Type:* double

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-aws.glueJob.GlueJob.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktf/provider-aws.glueJob.GlueJob.property.roleArn"></a>

```csharp
public string RoleArn { get; }
```

- *Type:* string

---

##### `SecurityConfiguration`<sup>Required</sup> <a name="SecurityConfiguration" id="@cdktf/provider-aws.glueJob.GlueJob.property.securityConfiguration"></a>

```csharp
public string SecurityConfiguration { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.glueJob.GlueJob.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.glueJob.GlueJob.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Timeout`<sup>Required</sup> <a name="Timeout" id="@cdktf/provider-aws.glueJob.GlueJob.property.timeout"></a>

```csharp
public double Timeout { get; }
```

- *Type:* double

---

##### `WorkerType`<sup>Required</sup> <a name="WorkerType" id="@cdktf/provider-aws.glueJob.GlueJob.property.workerType"></a>

```csharp
public string WorkerType { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJob.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.glueJob.GlueJob.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GlueJobCommand <a name="GlueJobCommand" id="@cdktf/provider-aws.glueJob.GlueJobCommand"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.glueJob.GlueJobCommand.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new GlueJobCommand {
    string ScriptLocation,
    string Name = null,
    string PythonVersion = null,
    string Runtime = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobCommand.property.scriptLocation">ScriptLocation</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/glue_job#script_location GlueJob#script_location}. |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobCommand.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/glue_job#name GlueJob#name}. |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobCommand.property.pythonVersion">PythonVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/glue_job#python_version GlueJob#python_version}. |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobCommand.property.runtime">Runtime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/glue_job#runtime GlueJob#runtime}. |

---

##### `ScriptLocation`<sup>Required</sup> <a name="ScriptLocation" id="@cdktf/provider-aws.glueJob.GlueJobCommand.property.scriptLocation"></a>

```csharp
public string ScriptLocation { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/glue_job#script_location GlueJob#script_location}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-aws.glueJob.GlueJobCommand.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/glue_job#name GlueJob#name}.

---

##### `PythonVersion`<sup>Optional</sup> <a name="PythonVersion" id="@cdktf/provider-aws.glueJob.GlueJobCommand.property.pythonVersion"></a>

```csharp
public string PythonVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/glue_job#python_version GlueJob#python_version}.

---

##### `Runtime`<sup>Optional</sup> <a name="Runtime" id="@cdktf/provider-aws.glueJob.GlueJobCommand.property.runtime"></a>

```csharp
public string Runtime { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/glue_job#runtime GlueJob#runtime}.

---

### GlueJobConfig <a name="GlueJobConfig" id="@cdktf/provider-aws.glueJob.GlueJobConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.glueJob.GlueJobConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new GlueJobConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    GlueJobCommand Command,
    string Name,
    string RoleArn,
    string[] Connections = null,
    System.Collections.Generic.IDictionary<string, string> DefaultArguments = null,
    string Description = null,
    string ExecutionClass = null,
    GlueJobExecutionProperty ExecutionProperty = null,
    string GlueVersion = null,
    string Id = null,
    string JobMode = null,
    object JobRunQueuingEnabled = null,
    string MaintenanceWindow = null,
    double MaxCapacity = null,
    double MaxRetries = null,
    System.Collections.Generic.IDictionary<string, string> NonOverridableArguments = null,
    GlueJobNotificationProperty NotificationProperty = null,
    double NumberOfWorkers = null,
    string Region = null,
    string SecurityConfiguration = null,
    GlueJobSourceControlDetails SourceControlDetails = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null,
    double Timeout = null,
    string WorkerType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobConfig.property.command">Command</a></code> | <code><a href="#@cdktf/provider-aws.glueJob.GlueJobCommand">GlueJobCommand</a></code> | command block. |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/glue_job#name GlueJob#name}. |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobConfig.property.roleArn">RoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/glue_job#role_arn GlueJob#role_arn}. |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobConfig.property.connections">Connections</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/glue_job#connections GlueJob#connections}. |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobConfig.property.defaultArguments">DefaultArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/glue_job#default_arguments GlueJob#default_arguments}. |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/glue_job#description GlueJob#description}. |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobConfig.property.executionClass">ExecutionClass</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/glue_job#execution_class GlueJob#execution_class}. |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobConfig.property.executionProperty">ExecutionProperty</a></code> | <code><a href="#@cdktf/provider-aws.glueJob.GlueJobExecutionProperty">GlueJobExecutionProperty</a></code> | execution_property block. |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobConfig.property.glueVersion">GlueVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/glue_job#glue_version GlueJob#glue_version}. |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/glue_job#id GlueJob#id}. |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobConfig.property.jobMode">JobMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/glue_job#job_mode GlueJob#job_mode}. |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobConfig.property.jobRunQueuingEnabled">JobRunQueuingEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/glue_job#job_run_queuing_enabled GlueJob#job_run_queuing_enabled}. |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobConfig.property.maintenanceWindow">MaintenanceWindow</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/glue_job#maintenance_window GlueJob#maintenance_window}. |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobConfig.property.maxCapacity">MaxCapacity</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/glue_job#max_capacity GlueJob#max_capacity}. |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobConfig.property.maxRetries">MaxRetries</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/glue_job#max_retries GlueJob#max_retries}. |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobConfig.property.nonOverridableArguments">NonOverridableArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/glue_job#non_overridable_arguments GlueJob#non_overridable_arguments}. |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobConfig.property.notificationProperty">NotificationProperty</a></code> | <code><a href="#@cdktf/provider-aws.glueJob.GlueJobNotificationProperty">GlueJobNotificationProperty</a></code> | notification_property block. |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobConfig.property.numberOfWorkers">NumberOfWorkers</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/glue_job#number_of_workers GlueJob#number_of_workers}. |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobConfig.property.securityConfiguration">SecurityConfiguration</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/glue_job#security_configuration GlueJob#security_configuration}. |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobConfig.property.sourceControlDetails">SourceControlDetails</a></code> | <code><a href="#@cdktf/provider-aws.glueJob.GlueJobSourceControlDetails">GlueJobSourceControlDetails</a></code> | source_control_details block. |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/glue_job#tags GlueJob#tags}. |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/glue_job#tags_all GlueJob#tags_all}. |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobConfig.property.timeout">Timeout</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/glue_job#timeout GlueJob#timeout}. |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobConfig.property.workerType">WorkerType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/glue_job#worker_type GlueJob#worker_type}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.glueJob.GlueJobConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.glueJob.GlueJobConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.glueJob.GlueJobConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.glueJob.GlueJobConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.glueJob.GlueJobConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.glueJob.GlueJobConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.glueJob.GlueJobConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Command`<sup>Required</sup> <a name="Command" id="@cdktf/provider-aws.glueJob.GlueJobConfig.property.command"></a>

```csharp
public GlueJobCommand Command { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.glueJob.GlueJobCommand">GlueJobCommand</a>

command block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/glue_job#command GlueJob#command}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.glueJob.GlueJobConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/glue_job#name GlueJob#name}.

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktf/provider-aws.glueJob.GlueJobConfig.property.roleArn"></a>

```csharp
public string RoleArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/glue_job#role_arn GlueJob#role_arn}.

---

##### `Connections`<sup>Optional</sup> <a name="Connections" id="@cdktf/provider-aws.glueJob.GlueJobConfig.property.connections"></a>

```csharp
public string[] Connections { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/glue_job#connections GlueJob#connections}.

---

##### `DefaultArguments`<sup>Optional</sup> <a name="DefaultArguments" id="@cdktf/provider-aws.glueJob.GlueJobConfig.property.defaultArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefaultArguments { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/glue_job#default_arguments GlueJob#default_arguments}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-aws.glueJob.GlueJobConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/glue_job#description GlueJob#description}.

---

##### `ExecutionClass`<sup>Optional</sup> <a name="ExecutionClass" id="@cdktf/provider-aws.glueJob.GlueJobConfig.property.executionClass"></a>

```csharp
public string ExecutionClass { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/glue_job#execution_class GlueJob#execution_class}.

---

##### `ExecutionProperty`<sup>Optional</sup> <a name="ExecutionProperty" id="@cdktf/provider-aws.glueJob.GlueJobConfig.property.executionProperty"></a>

```csharp
public GlueJobExecutionProperty ExecutionProperty { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.glueJob.GlueJobExecutionProperty">GlueJobExecutionProperty</a>

execution_property block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/glue_job#execution_property GlueJob#execution_property}

---

##### `GlueVersion`<sup>Optional</sup> <a name="GlueVersion" id="@cdktf/provider-aws.glueJob.GlueJobConfig.property.glueVersion"></a>

```csharp
public string GlueVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/glue_job#glue_version GlueJob#glue_version}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.glueJob.GlueJobConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/glue_job#id GlueJob#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `JobMode`<sup>Optional</sup> <a name="JobMode" id="@cdktf/provider-aws.glueJob.GlueJobConfig.property.jobMode"></a>

```csharp
public string JobMode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/glue_job#job_mode GlueJob#job_mode}.

---

##### `JobRunQueuingEnabled`<sup>Optional</sup> <a name="JobRunQueuingEnabled" id="@cdktf/provider-aws.glueJob.GlueJobConfig.property.jobRunQueuingEnabled"></a>

```csharp
public object JobRunQueuingEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/glue_job#job_run_queuing_enabled GlueJob#job_run_queuing_enabled}.

---

##### `MaintenanceWindow`<sup>Optional</sup> <a name="MaintenanceWindow" id="@cdktf/provider-aws.glueJob.GlueJobConfig.property.maintenanceWindow"></a>

```csharp
public string MaintenanceWindow { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/glue_job#maintenance_window GlueJob#maintenance_window}.

---

##### `MaxCapacity`<sup>Optional</sup> <a name="MaxCapacity" id="@cdktf/provider-aws.glueJob.GlueJobConfig.property.maxCapacity"></a>

```csharp
public double MaxCapacity { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/glue_job#max_capacity GlueJob#max_capacity}.

---

##### `MaxRetries`<sup>Optional</sup> <a name="MaxRetries" id="@cdktf/provider-aws.glueJob.GlueJobConfig.property.maxRetries"></a>

```csharp
public double MaxRetries { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/glue_job#max_retries GlueJob#max_retries}.

---

##### `NonOverridableArguments`<sup>Optional</sup> <a name="NonOverridableArguments" id="@cdktf/provider-aws.glueJob.GlueJobConfig.property.nonOverridableArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> NonOverridableArguments { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/glue_job#non_overridable_arguments GlueJob#non_overridable_arguments}.

---

##### `NotificationProperty`<sup>Optional</sup> <a name="NotificationProperty" id="@cdktf/provider-aws.glueJob.GlueJobConfig.property.notificationProperty"></a>

```csharp
public GlueJobNotificationProperty NotificationProperty { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.glueJob.GlueJobNotificationProperty">GlueJobNotificationProperty</a>

notification_property block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/glue_job#notification_property GlueJob#notification_property}

---

##### `NumberOfWorkers`<sup>Optional</sup> <a name="NumberOfWorkers" id="@cdktf/provider-aws.glueJob.GlueJobConfig.property.numberOfWorkers"></a>

```csharp
public double NumberOfWorkers { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/glue_job#number_of_workers GlueJob#number_of_workers}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-aws.glueJob.GlueJobConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/glue_job#region GlueJob#region}

---

##### `SecurityConfiguration`<sup>Optional</sup> <a name="SecurityConfiguration" id="@cdktf/provider-aws.glueJob.GlueJobConfig.property.securityConfiguration"></a>

```csharp
public string SecurityConfiguration { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/glue_job#security_configuration GlueJob#security_configuration}.

---

##### `SourceControlDetails`<sup>Optional</sup> <a name="SourceControlDetails" id="@cdktf/provider-aws.glueJob.GlueJobConfig.property.sourceControlDetails"></a>

```csharp
public GlueJobSourceControlDetails SourceControlDetails { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.glueJob.GlueJobSourceControlDetails">GlueJobSourceControlDetails</a>

source_control_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/glue_job#source_control_details GlueJob#source_control_details}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.glueJob.GlueJobConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/glue_job#tags GlueJob#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.glueJob.GlueJobConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/glue_job#tags_all GlueJob#tags_all}.

---

##### `Timeout`<sup>Optional</sup> <a name="Timeout" id="@cdktf/provider-aws.glueJob.GlueJobConfig.property.timeout"></a>

```csharp
public double Timeout { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/glue_job#timeout GlueJob#timeout}.

---

##### `WorkerType`<sup>Optional</sup> <a name="WorkerType" id="@cdktf/provider-aws.glueJob.GlueJobConfig.property.workerType"></a>

```csharp
public string WorkerType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/glue_job#worker_type GlueJob#worker_type}.

---

### GlueJobExecutionProperty <a name="GlueJobExecutionProperty" id="@cdktf/provider-aws.glueJob.GlueJobExecutionProperty"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.glueJob.GlueJobExecutionProperty.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new GlueJobExecutionProperty {
    double MaxConcurrentRuns = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobExecutionProperty.property.maxConcurrentRuns">MaxConcurrentRuns</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/glue_job#max_concurrent_runs GlueJob#max_concurrent_runs}. |

---

##### `MaxConcurrentRuns`<sup>Optional</sup> <a name="MaxConcurrentRuns" id="@cdktf/provider-aws.glueJob.GlueJobExecutionProperty.property.maxConcurrentRuns"></a>

```csharp
public double MaxConcurrentRuns { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/glue_job#max_concurrent_runs GlueJob#max_concurrent_runs}.

---

### GlueJobNotificationProperty <a name="GlueJobNotificationProperty" id="@cdktf/provider-aws.glueJob.GlueJobNotificationProperty"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.glueJob.GlueJobNotificationProperty.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new GlueJobNotificationProperty {
    double NotifyDelayAfter = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobNotificationProperty.property.notifyDelayAfter">NotifyDelayAfter</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/glue_job#notify_delay_after GlueJob#notify_delay_after}. |

---

##### `NotifyDelayAfter`<sup>Optional</sup> <a name="NotifyDelayAfter" id="@cdktf/provider-aws.glueJob.GlueJobNotificationProperty.property.notifyDelayAfter"></a>

```csharp
public double NotifyDelayAfter { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/glue_job#notify_delay_after GlueJob#notify_delay_after}.

---

### GlueJobSourceControlDetails <a name="GlueJobSourceControlDetails" id="@cdktf/provider-aws.glueJob.GlueJobSourceControlDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.glueJob.GlueJobSourceControlDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new GlueJobSourceControlDetails {
    string AuthStrategy = null,
    string AuthToken = null,
    string Branch = null,
    string Folder = null,
    string LastCommitId = null,
    string Owner = null,
    string Provider = null,
    string Repository = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobSourceControlDetails.property.authStrategy">AuthStrategy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/glue_job#auth_strategy GlueJob#auth_strategy}. |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobSourceControlDetails.property.authToken">AuthToken</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/glue_job#auth_token GlueJob#auth_token}. |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobSourceControlDetails.property.branch">Branch</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/glue_job#branch GlueJob#branch}. |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobSourceControlDetails.property.folder">Folder</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/glue_job#folder GlueJob#folder}. |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobSourceControlDetails.property.lastCommitId">LastCommitId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/glue_job#last_commit_id GlueJob#last_commit_id}. |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobSourceControlDetails.property.owner">Owner</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/glue_job#owner GlueJob#owner}. |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobSourceControlDetails.property.provider">Provider</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/glue_job#provider GlueJob#provider}. |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobSourceControlDetails.property.repository">Repository</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/glue_job#repository GlueJob#repository}. |

---

##### `AuthStrategy`<sup>Optional</sup> <a name="AuthStrategy" id="@cdktf/provider-aws.glueJob.GlueJobSourceControlDetails.property.authStrategy"></a>

```csharp
public string AuthStrategy { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/glue_job#auth_strategy GlueJob#auth_strategy}.

---

##### `AuthToken`<sup>Optional</sup> <a name="AuthToken" id="@cdktf/provider-aws.glueJob.GlueJobSourceControlDetails.property.authToken"></a>

```csharp
public string AuthToken { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/glue_job#auth_token GlueJob#auth_token}.

---

##### `Branch`<sup>Optional</sup> <a name="Branch" id="@cdktf/provider-aws.glueJob.GlueJobSourceControlDetails.property.branch"></a>

```csharp
public string Branch { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/glue_job#branch GlueJob#branch}.

---

##### `Folder`<sup>Optional</sup> <a name="Folder" id="@cdktf/provider-aws.glueJob.GlueJobSourceControlDetails.property.folder"></a>

```csharp
public string Folder { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/glue_job#folder GlueJob#folder}.

---

##### `LastCommitId`<sup>Optional</sup> <a name="LastCommitId" id="@cdktf/provider-aws.glueJob.GlueJobSourceControlDetails.property.lastCommitId"></a>

```csharp
public string LastCommitId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/glue_job#last_commit_id GlueJob#last_commit_id}.

---

##### `Owner`<sup>Optional</sup> <a name="Owner" id="@cdktf/provider-aws.glueJob.GlueJobSourceControlDetails.property.owner"></a>

```csharp
public string Owner { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/glue_job#owner GlueJob#owner}.

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.glueJob.GlueJobSourceControlDetails.property.provider"></a>

```csharp
public string Provider { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/glue_job#provider GlueJob#provider}.

---

##### `Repository`<sup>Optional</sup> <a name="Repository" id="@cdktf/provider-aws.glueJob.GlueJobSourceControlDetails.property.repository"></a>

```csharp
public string Repository { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/glue_job#repository GlueJob#repository}.

---

## Classes <a name="Classes" id="Classes"></a>

### GlueJobCommandOutputReference <a name="GlueJobCommandOutputReference" id="@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new GlueJobCommandOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.resetPythonVersion">ResetPythonVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.resetRuntime">ResetRuntime</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetPythonVersion` <a name="ResetPythonVersion" id="@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.resetPythonVersion"></a>

```csharp
private void ResetPythonVersion()
```

##### `ResetRuntime` <a name="ResetRuntime" id="@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.resetRuntime"></a>

```csharp
private void ResetRuntime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.property.pythonVersionInput">PythonVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.property.runtimeInput">RuntimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.property.scriptLocationInput">ScriptLocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.property.pythonVersion">PythonVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.property.runtime">Runtime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.property.scriptLocation">ScriptLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.glueJob.GlueJobCommand">GlueJobCommand</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PythonVersionInput`<sup>Optional</sup> <a name="PythonVersionInput" id="@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.property.pythonVersionInput"></a>

```csharp
public string PythonVersionInput { get; }
```

- *Type:* string

---

##### `RuntimeInput`<sup>Optional</sup> <a name="RuntimeInput" id="@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.property.runtimeInput"></a>

```csharp
public string RuntimeInput { get; }
```

- *Type:* string

---

##### `ScriptLocationInput`<sup>Optional</sup> <a name="ScriptLocationInput" id="@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.property.scriptLocationInput"></a>

```csharp
public string ScriptLocationInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PythonVersion`<sup>Required</sup> <a name="PythonVersion" id="@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.property.pythonVersion"></a>

```csharp
public string PythonVersion { get; }
```

- *Type:* string

---

##### `Runtime`<sup>Required</sup> <a name="Runtime" id="@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.property.runtime"></a>

```csharp
public string Runtime { get; }
```

- *Type:* string

---

##### `ScriptLocation`<sup>Required</sup> <a name="ScriptLocation" id="@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.property.scriptLocation"></a>

```csharp
public string ScriptLocation { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.glueJob.GlueJobCommandOutputReference.property.internalValue"></a>

```csharp
public GlueJobCommand InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.glueJob.GlueJobCommand">GlueJobCommand</a>

---


### GlueJobExecutionPropertyOutputReference <a name="GlueJobExecutionPropertyOutputReference" id="@cdktf/provider-aws.glueJob.GlueJobExecutionPropertyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueJob.GlueJobExecutionPropertyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new GlueJobExecutionPropertyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobExecutionPropertyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobExecutionPropertyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.glueJob.GlueJobExecutionPropertyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueJob.GlueJobExecutionPropertyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobExecutionPropertyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobExecutionPropertyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobExecutionPropertyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobExecutionPropertyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobExecutionPropertyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobExecutionPropertyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobExecutionPropertyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobExecutionPropertyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobExecutionPropertyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobExecutionPropertyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobExecutionPropertyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobExecutionPropertyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobExecutionPropertyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobExecutionPropertyOutputReference.resetMaxConcurrentRuns">ResetMaxConcurrentRuns</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.glueJob.GlueJobExecutionPropertyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.glueJob.GlueJobExecutionPropertyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueJob.GlueJobExecutionPropertyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.glueJob.GlueJobExecutionPropertyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueJob.GlueJobExecutionPropertyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.glueJob.GlueJobExecutionPropertyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueJob.GlueJobExecutionPropertyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.glueJob.GlueJobExecutionPropertyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueJob.GlueJobExecutionPropertyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.glueJob.GlueJobExecutionPropertyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueJob.GlueJobExecutionPropertyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.glueJob.GlueJobExecutionPropertyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueJob.GlueJobExecutionPropertyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.glueJob.GlueJobExecutionPropertyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueJob.GlueJobExecutionPropertyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.glueJob.GlueJobExecutionPropertyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueJob.GlueJobExecutionPropertyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.glueJob.GlueJobExecutionPropertyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueJob.GlueJobExecutionPropertyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.glueJob.GlueJobExecutionPropertyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.glueJob.GlueJobExecutionPropertyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.glueJob.GlueJobExecutionPropertyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.glueJob.GlueJobExecutionPropertyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.glueJob.GlueJobExecutionPropertyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaxConcurrentRuns` <a name="ResetMaxConcurrentRuns" id="@cdktf/provider-aws.glueJob.GlueJobExecutionPropertyOutputReference.resetMaxConcurrentRuns"></a>

```csharp
private void ResetMaxConcurrentRuns()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobExecutionPropertyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobExecutionPropertyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobExecutionPropertyOutputReference.property.maxConcurrentRunsInput">MaxConcurrentRunsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobExecutionPropertyOutputReference.property.maxConcurrentRuns">MaxConcurrentRuns</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobExecutionPropertyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.glueJob.GlueJobExecutionProperty">GlueJobExecutionProperty</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.glueJob.GlueJobExecutionPropertyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.glueJob.GlueJobExecutionPropertyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaxConcurrentRunsInput`<sup>Optional</sup> <a name="MaxConcurrentRunsInput" id="@cdktf/provider-aws.glueJob.GlueJobExecutionPropertyOutputReference.property.maxConcurrentRunsInput"></a>

```csharp
public double MaxConcurrentRunsInput { get; }
```

- *Type:* double

---

##### `MaxConcurrentRuns`<sup>Required</sup> <a name="MaxConcurrentRuns" id="@cdktf/provider-aws.glueJob.GlueJobExecutionPropertyOutputReference.property.maxConcurrentRuns"></a>

```csharp
public double MaxConcurrentRuns { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.glueJob.GlueJobExecutionPropertyOutputReference.property.internalValue"></a>

```csharp
public GlueJobExecutionProperty InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.glueJob.GlueJobExecutionProperty">GlueJobExecutionProperty</a>

---


### GlueJobNotificationPropertyOutputReference <a name="GlueJobNotificationPropertyOutputReference" id="@cdktf/provider-aws.glueJob.GlueJobNotificationPropertyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueJob.GlueJobNotificationPropertyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new GlueJobNotificationPropertyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobNotificationPropertyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobNotificationPropertyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.glueJob.GlueJobNotificationPropertyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueJob.GlueJobNotificationPropertyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobNotificationPropertyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobNotificationPropertyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobNotificationPropertyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobNotificationPropertyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobNotificationPropertyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobNotificationPropertyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobNotificationPropertyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobNotificationPropertyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobNotificationPropertyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobNotificationPropertyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobNotificationPropertyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobNotificationPropertyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobNotificationPropertyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobNotificationPropertyOutputReference.resetNotifyDelayAfter">ResetNotifyDelayAfter</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.glueJob.GlueJobNotificationPropertyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.glueJob.GlueJobNotificationPropertyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueJob.GlueJobNotificationPropertyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.glueJob.GlueJobNotificationPropertyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueJob.GlueJobNotificationPropertyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.glueJob.GlueJobNotificationPropertyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueJob.GlueJobNotificationPropertyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.glueJob.GlueJobNotificationPropertyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueJob.GlueJobNotificationPropertyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.glueJob.GlueJobNotificationPropertyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueJob.GlueJobNotificationPropertyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.glueJob.GlueJobNotificationPropertyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueJob.GlueJobNotificationPropertyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.glueJob.GlueJobNotificationPropertyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueJob.GlueJobNotificationPropertyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.glueJob.GlueJobNotificationPropertyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueJob.GlueJobNotificationPropertyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.glueJob.GlueJobNotificationPropertyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueJob.GlueJobNotificationPropertyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.glueJob.GlueJobNotificationPropertyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.glueJob.GlueJobNotificationPropertyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.glueJob.GlueJobNotificationPropertyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.glueJob.GlueJobNotificationPropertyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.glueJob.GlueJobNotificationPropertyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetNotifyDelayAfter` <a name="ResetNotifyDelayAfter" id="@cdktf/provider-aws.glueJob.GlueJobNotificationPropertyOutputReference.resetNotifyDelayAfter"></a>

```csharp
private void ResetNotifyDelayAfter()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobNotificationPropertyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobNotificationPropertyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobNotificationPropertyOutputReference.property.notifyDelayAfterInput">NotifyDelayAfterInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobNotificationPropertyOutputReference.property.notifyDelayAfter">NotifyDelayAfter</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobNotificationPropertyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.glueJob.GlueJobNotificationProperty">GlueJobNotificationProperty</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.glueJob.GlueJobNotificationPropertyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.glueJob.GlueJobNotificationPropertyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NotifyDelayAfterInput`<sup>Optional</sup> <a name="NotifyDelayAfterInput" id="@cdktf/provider-aws.glueJob.GlueJobNotificationPropertyOutputReference.property.notifyDelayAfterInput"></a>

```csharp
public double NotifyDelayAfterInput { get; }
```

- *Type:* double

---

##### `NotifyDelayAfter`<sup>Required</sup> <a name="NotifyDelayAfter" id="@cdktf/provider-aws.glueJob.GlueJobNotificationPropertyOutputReference.property.notifyDelayAfter"></a>

```csharp
public double NotifyDelayAfter { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.glueJob.GlueJobNotificationPropertyOutputReference.property.internalValue"></a>

```csharp
public GlueJobNotificationProperty InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.glueJob.GlueJobNotificationProperty">GlueJobNotificationProperty</a>

---


### GlueJobSourceControlDetailsOutputReference <a name="GlueJobSourceControlDetailsOutputReference" id="@cdktf/provider-aws.glueJob.GlueJobSourceControlDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.glueJob.GlueJobSourceControlDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new GlueJobSourceControlDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobSourceControlDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobSourceControlDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.glueJob.GlueJobSourceControlDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueJob.GlueJobSourceControlDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobSourceControlDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobSourceControlDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobSourceControlDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobSourceControlDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobSourceControlDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobSourceControlDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobSourceControlDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobSourceControlDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobSourceControlDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobSourceControlDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobSourceControlDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobSourceControlDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobSourceControlDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobSourceControlDetailsOutputReference.resetAuthStrategy">ResetAuthStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobSourceControlDetailsOutputReference.resetAuthToken">ResetAuthToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobSourceControlDetailsOutputReference.resetBranch">ResetBranch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobSourceControlDetailsOutputReference.resetFolder">ResetFolder</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobSourceControlDetailsOutputReference.resetLastCommitId">ResetLastCommitId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobSourceControlDetailsOutputReference.resetOwner">ResetOwner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobSourceControlDetailsOutputReference.resetProvider">ResetProvider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobSourceControlDetailsOutputReference.resetRepository">ResetRepository</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.glueJob.GlueJobSourceControlDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.glueJob.GlueJobSourceControlDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueJob.GlueJobSourceControlDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.glueJob.GlueJobSourceControlDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueJob.GlueJobSourceControlDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.glueJob.GlueJobSourceControlDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueJob.GlueJobSourceControlDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.glueJob.GlueJobSourceControlDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueJob.GlueJobSourceControlDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.glueJob.GlueJobSourceControlDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueJob.GlueJobSourceControlDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.glueJob.GlueJobSourceControlDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueJob.GlueJobSourceControlDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.glueJob.GlueJobSourceControlDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueJob.GlueJobSourceControlDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.glueJob.GlueJobSourceControlDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueJob.GlueJobSourceControlDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.glueJob.GlueJobSourceControlDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.glueJob.GlueJobSourceControlDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.glueJob.GlueJobSourceControlDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.glueJob.GlueJobSourceControlDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.glueJob.GlueJobSourceControlDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.glueJob.GlueJobSourceControlDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.glueJob.GlueJobSourceControlDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAuthStrategy` <a name="ResetAuthStrategy" id="@cdktf/provider-aws.glueJob.GlueJobSourceControlDetailsOutputReference.resetAuthStrategy"></a>

```csharp
private void ResetAuthStrategy()
```

##### `ResetAuthToken` <a name="ResetAuthToken" id="@cdktf/provider-aws.glueJob.GlueJobSourceControlDetailsOutputReference.resetAuthToken"></a>

```csharp
private void ResetAuthToken()
```

##### `ResetBranch` <a name="ResetBranch" id="@cdktf/provider-aws.glueJob.GlueJobSourceControlDetailsOutputReference.resetBranch"></a>

```csharp
private void ResetBranch()
```

##### `ResetFolder` <a name="ResetFolder" id="@cdktf/provider-aws.glueJob.GlueJobSourceControlDetailsOutputReference.resetFolder"></a>

```csharp
private void ResetFolder()
```

##### `ResetLastCommitId` <a name="ResetLastCommitId" id="@cdktf/provider-aws.glueJob.GlueJobSourceControlDetailsOutputReference.resetLastCommitId"></a>

```csharp
private void ResetLastCommitId()
```

##### `ResetOwner` <a name="ResetOwner" id="@cdktf/provider-aws.glueJob.GlueJobSourceControlDetailsOutputReference.resetOwner"></a>

```csharp
private void ResetOwner()
```

##### `ResetProvider` <a name="ResetProvider" id="@cdktf/provider-aws.glueJob.GlueJobSourceControlDetailsOutputReference.resetProvider"></a>

```csharp
private void ResetProvider()
```

##### `ResetRepository` <a name="ResetRepository" id="@cdktf/provider-aws.glueJob.GlueJobSourceControlDetailsOutputReference.resetRepository"></a>

```csharp
private void ResetRepository()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobSourceControlDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobSourceControlDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobSourceControlDetailsOutputReference.property.authStrategyInput">AuthStrategyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobSourceControlDetailsOutputReference.property.authTokenInput">AuthTokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobSourceControlDetailsOutputReference.property.branchInput">BranchInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobSourceControlDetailsOutputReference.property.folderInput">FolderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobSourceControlDetailsOutputReference.property.lastCommitIdInput">LastCommitIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobSourceControlDetailsOutputReference.property.ownerInput">OwnerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobSourceControlDetailsOutputReference.property.providerInput">ProviderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobSourceControlDetailsOutputReference.property.repositoryInput">RepositoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobSourceControlDetailsOutputReference.property.authStrategy">AuthStrategy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobSourceControlDetailsOutputReference.property.authToken">AuthToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobSourceControlDetailsOutputReference.property.branch">Branch</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobSourceControlDetailsOutputReference.property.folder">Folder</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobSourceControlDetailsOutputReference.property.lastCommitId">LastCommitId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobSourceControlDetailsOutputReference.property.owner">Owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobSourceControlDetailsOutputReference.property.provider">Provider</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobSourceControlDetailsOutputReference.property.repository">Repository</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.glueJob.GlueJobSourceControlDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.glueJob.GlueJobSourceControlDetails">GlueJobSourceControlDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.glueJob.GlueJobSourceControlDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.glueJob.GlueJobSourceControlDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AuthStrategyInput`<sup>Optional</sup> <a name="AuthStrategyInput" id="@cdktf/provider-aws.glueJob.GlueJobSourceControlDetailsOutputReference.property.authStrategyInput"></a>

```csharp
public string AuthStrategyInput { get; }
```

- *Type:* string

---

##### `AuthTokenInput`<sup>Optional</sup> <a name="AuthTokenInput" id="@cdktf/provider-aws.glueJob.GlueJobSourceControlDetailsOutputReference.property.authTokenInput"></a>

```csharp
public string AuthTokenInput { get; }
```

- *Type:* string

---

##### `BranchInput`<sup>Optional</sup> <a name="BranchInput" id="@cdktf/provider-aws.glueJob.GlueJobSourceControlDetailsOutputReference.property.branchInput"></a>

```csharp
public string BranchInput { get; }
```

- *Type:* string

---

##### `FolderInput`<sup>Optional</sup> <a name="FolderInput" id="@cdktf/provider-aws.glueJob.GlueJobSourceControlDetailsOutputReference.property.folderInput"></a>

```csharp
public string FolderInput { get; }
```

- *Type:* string

---

##### `LastCommitIdInput`<sup>Optional</sup> <a name="LastCommitIdInput" id="@cdktf/provider-aws.glueJob.GlueJobSourceControlDetailsOutputReference.property.lastCommitIdInput"></a>

```csharp
public string LastCommitIdInput { get; }
```

- *Type:* string

---

##### `OwnerInput`<sup>Optional</sup> <a name="OwnerInput" id="@cdktf/provider-aws.glueJob.GlueJobSourceControlDetailsOutputReference.property.ownerInput"></a>

```csharp
public string OwnerInput { get; }
```

- *Type:* string

---

##### `ProviderInput`<sup>Optional</sup> <a name="ProviderInput" id="@cdktf/provider-aws.glueJob.GlueJobSourceControlDetailsOutputReference.property.providerInput"></a>

```csharp
public string ProviderInput { get; }
```

- *Type:* string

---

##### `RepositoryInput`<sup>Optional</sup> <a name="RepositoryInput" id="@cdktf/provider-aws.glueJob.GlueJobSourceControlDetailsOutputReference.property.repositoryInput"></a>

```csharp
public string RepositoryInput { get; }
```

- *Type:* string

---

##### `AuthStrategy`<sup>Required</sup> <a name="AuthStrategy" id="@cdktf/provider-aws.glueJob.GlueJobSourceControlDetailsOutputReference.property.authStrategy"></a>

```csharp
public string AuthStrategy { get; }
```

- *Type:* string

---

##### `AuthToken`<sup>Required</sup> <a name="AuthToken" id="@cdktf/provider-aws.glueJob.GlueJobSourceControlDetailsOutputReference.property.authToken"></a>

```csharp
public string AuthToken { get; }
```

- *Type:* string

---

##### `Branch`<sup>Required</sup> <a name="Branch" id="@cdktf/provider-aws.glueJob.GlueJobSourceControlDetailsOutputReference.property.branch"></a>

```csharp
public string Branch { get; }
```

- *Type:* string

---

##### `Folder`<sup>Required</sup> <a name="Folder" id="@cdktf/provider-aws.glueJob.GlueJobSourceControlDetailsOutputReference.property.folder"></a>

```csharp
public string Folder { get; }
```

- *Type:* string

---

##### `LastCommitId`<sup>Required</sup> <a name="LastCommitId" id="@cdktf/provider-aws.glueJob.GlueJobSourceControlDetailsOutputReference.property.lastCommitId"></a>

```csharp
public string LastCommitId { get; }
```

- *Type:* string

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="@cdktf/provider-aws.glueJob.GlueJobSourceControlDetailsOutputReference.property.owner"></a>

```csharp
public string Owner { get; }
```

- *Type:* string

---

##### `Provider`<sup>Required</sup> <a name="Provider" id="@cdktf/provider-aws.glueJob.GlueJobSourceControlDetailsOutputReference.property.provider"></a>

```csharp
public string Provider { get; }
```

- *Type:* string

---

##### `Repository`<sup>Required</sup> <a name="Repository" id="@cdktf/provider-aws.glueJob.GlueJobSourceControlDetailsOutputReference.property.repository"></a>

```csharp
public string Repository { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.glueJob.GlueJobSourceControlDetailsOutputReference.property.internalValue"></a>

```csharp
public GlueJobSourceControlDetails InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.glueJob.GlueJobSourceControlDetails">GlueJobSourceControlDetails</a>

---



