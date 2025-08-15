# `fisExperimentTemplate` Submodule <a name="`fisExperimentTemplate` Submodule" id="@cdktf/provider-aws.fisExperimentTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FisExperimentTemplate <a name="FisExperimentTemplate" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/fis_experiment_template aws_fis_experiment_template}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new FisExperimentTemplate(Construct Scope, string Id, FisExperimentTemplateConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateConfig">FisExperimentTemplateConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateConfig">FisExperimentTemplateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.putAction">PutAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.putExperimentOptions">PutExperimentOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.putExperimentReportConfiguration">PutExperimentReportConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.putLogConfiguration">PutLogConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.putStopCondition">PutStopCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.putTarget">PutTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.resetExperimentOptions">ResetExperimentOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.resetExperimentReportConfiguration">ResetExperimentReportConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.resetLogConfiguration">ResetLogConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.resetTarget">ResetTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAction` <a name="PutAction" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.putAction"></a>

```csharp
private void PutAction(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.putAction.parameter.value"></a>

- *Type:* object

---

##### `PutExperimentOptions` <a name="PutExperimentOptions" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.putExperimentOptions"></a>

```csharp
private void PutExperimentOptions(FisExperimentTemplateExperimentOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.putExperimentOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentOptions">FisExperimentTemplateExperimentOptions</a>

---

##### `PutExperimentReportConfiguration` <a name="PutExperimentReportConfiguration" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.putExperimentReportConfiguration"></a>

```csharp
private void PutExperimentReportConfiguration(FisExperimentTemplateExperimentReportConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.putExperimentReportConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfiguration">FisExperimentTemplateExperimentReportConfiguration</a>

---

##### `PutLogConfiguration` <a name="PutLogConfiguration" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.putLogConfiguration"></a>

```csharp
private void PutLogConfiguration(FisExperimentTemplateLogConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.putLogConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfiguration">FisExperimentTemplateLogConfiguration</a>

---

##### `PutStopCondition` <a name="PutStopCondition" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.putStopCondition"></a>

```csharp
private void PutStopCondition(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.putStopCondition.parameter.value"></a>

- *Type:* object

---

##### `PutTarget` <a name="PutTarget" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.putTarget"></a>

```csharp
private void PutTarget(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.putTarget.parameter.value"></a>

- *Type:* object

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.putTimeouts"></a>

```csharp
private void PutTimeouts(FisExperimentTemplateTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTimeouts">FisExperimentTemplateTimeouts</a>

---

##### `ResetExperimentOptions` <a name="ResetExperimentOptions" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.resetExperimentOptions"></a>

```csharp
private void ResetExperimentOptions()
```

##### `ResetExperimentReportConfiguration` <a name="ResetExperimentReportConfiguration" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.resetExperimentReportConfiguration"></a>

```csharp
private void ResetExperimentReportConfiguration()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLogConfiguration` <a name="ResetLogConfiguration" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.resetLogConfiguration"></a>

```csharp
private void ResetLogConfiguration()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

##### `ResetTarget` <a name="ResetTarget" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.resetTarget"></a>

```csharp
private void ResetTarget()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a FisExperimentTemplate resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

FisExperimentTemplate.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

FisExperimentTemplate.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

FisExperimentTemplate.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

FisExperimentTemplate.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a FisExperimentTemplate resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the FisExperimentTemplate to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing FisExperimentTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/fis_experiment_template#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the FisExperimentTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.property.action">Action</a></code> | <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionList">FisExperimentTemplateActionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.property.experimentOptions">ExperimentOptions</a></code> | <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference">FisExperimentTemplateExperimentOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.property.experimentReportConfiguration">ExperimentReportConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference">FisExperimentTemplateExperimentReportConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.property.logConfiguration">LogConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference">FisExperimentTemplateLogConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.property.stopCondition">StopCondition</a></code> | <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionList">FisExperimentTemplateStopConditionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.property.target">Target</a></code> | <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetList">FisExperimentTemplateTargetList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTimeoutsOutputReference">FisExperimentTemplateTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.property.actionInput">ActionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.property.experimentOptionsInput">ExperimentOptionsInput</a></code> | <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentOptions">FisExperimentTemplateExperimentOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.property.experimentReportConfigurationInput">ExperimentReportConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfiguration">FisExperimentTemplateExperimentReportConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.property.logConfigurationInput">LogConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfiguration">FisExperimentTemplateLogConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.property.roleArnInput">RoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.property.stopConditionInput">StopConditionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.property.targetInput">TargetInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.property.roleArn">RoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.property.action"></a>

```csharp
public FisExperimentTemplateActionList Action { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionList">FisExperimentTemplateActionList</a>

---

##### `ExperimentOptions`<sup>Required</sup> <a name="ExperimentOptions" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.property.experimentOptions"></a>

```csharp
public FisExperimentTemplateExperimentOptionsOutputReference ExperimentOptions { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference">FisExperimentTemplateExperimentOptionsOutputReference</a>

---

##### `ExperimentReportConfiguration`<sup>Required</sup> <a name="ExperimentReportConfiguration" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.property.experimentReportConfiguration"></a>

```csharp
public FisExperimentTemplateExperimentReportConfigurationOutputReference ExperimentReportConfiguration { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference">FisExperimentTemplateExperimentReportConfigurationOutputReference</a>

---

##### `LogConfiguration`<sup>Required</sup> <a name="LogConfiguration" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.property.logConfiguration"></a>

```csharp
public FisExperimentTemplateLogConfigurationOutputReference LogConfiguration { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference">FisExperimentTemplateLogConfigurationOutputReference</a>

---

##### `StopCondition`<sup>Required</sup> <a name="StopCondition" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.property.stopCondition"></a>

```csharp
public FisExperimentTemplateStopConditionList StopCondition { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionList">FisExperimentTemplateStopConditionList</a>

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.property.target"></a>

```csharp
public FisExperimentTemplateTargetList Target { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetList">FisExperimentTemplateTargetList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.property.timeouts"></a>

```csharp
public FisExperimentTemplateTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTimeoutsOutputReference">FisExperimentTemplateTimeoutsOutputReference</a>

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.property.actionInput"></a>

```csharp
public object ActionInput { get; }
```

- *Type:* object

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `ExperimentOptionsInput`<sup>Optional</sup> <a name="ExperimentOptionsInput" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.property.experimentOptionsInput"></a>

```csharp
public FisExperimentTemplateExperimentOptions ExperimentOptionsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentOptions">FisExperimentTemplateExperimentOptions</a>

---

##### `ExperimentReportConfigurationInput`<sup>Optional</sup> <a name="ExperimentReportConfigurationInput" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.property.experimentReportConfigurationInput"></a>

```csharp
public FisExperimentTemplateExperimentReportConfiguration ExperimentReportConfigurationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfiguration">FisExperimentTemplateExperimentReportConfiguration</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LogConfigurationInput`<sup>Optional</sup> <a name="LogConfigurationInput" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.property.logConfigurationInput"></a>

```csharp
public FisExperimentTemplateLogConfiguration LogConfigurationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfiguration">FisExperimentTemplateLogConfiguration</a>

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.property.roleArnInput"></a>

```csharp
public string RoleArnInput { get; }
```

- *Type:* string

---

##### `StopConditionInput`<sup>Optional</sup> <a name="StopConditionInput" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.property.stopConditionInput"></a>

```csharp
public object StopConditionInput { get; }
```

- *Type:* object

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TargetInput`<sup>Optional</sup> <a name="TargetInput" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.property.targetInput"></a>

```csharp
public object TargetInput { get; }
```

- *Type:* object

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.property.roleArn"></a>

```csharp
public string RoleArn { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplate.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### FisExperimentTemplateAction <a name="FisExperimentTemplateAction" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateAction.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new FisExperimentTemplateAction {
    string ActionId,
    string Name,
    string Description = null,
    object Parameter = null,
    string[] StartAfter = null,
    FisExperimentTemplateActionTarget Target = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateAction.property.actionId">ActionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/fis_experiment_template#action_id FisExperimentTemplate#action_id}. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateAction.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/fis_experiment_template#name FisExperimentTemplate#name}. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateAction.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/fis_experiment_template#description FisExperimentTemplate#description}. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateAction.property.parameter">Parameter</a></code> | <code>object</code> | parameter block. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateAction.property.startAfter">StartAfter</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/fis_experiment_template#start_after FisExperimentTemplate#start_after}. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateAction.property.target">Target</a></code> | <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionTarget">FisExperimentTemplateActionTarget</a></code> | target block. |

---

##### `ActionId`<sup>Required</sup> <a name="ActionId" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateAction.property.actionId"></a>

```csharp
public string ActionId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/fis_experiment_template#action_id FisExperimentTemplate#action_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateAction.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/fis_experiment_template#name FisExperimentTemplate#name}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateAction.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/fis_experiment_template#description FisExperimentTemplate#description}.

---

##### `Parameter`<sup>Optional</sup> <a name="Parameter" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateAction.property.parameter"></a>

```csharp
public object Parameter { get; set; }
```

- *Type:* object

parameter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/fis_experiment_template#parameter FisExperimentTemplate#parameter}

---

##### `StartAfter`<sup>Optional</sup> <a name="StartAfter" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateAction.property.startAfter"></a>

```csharp
public string[] StartAfter { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/fis_experiment_template#start_after FisExperimentTemplate#start_after}.

---

##### `Target`<sup>Optional</sup> <a name="Target" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateAction.property.target"></a>

```csharp
public FisExperimentTemplateActionTarget Target { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionTarget">FisExperimentTemplateActionTarget</a>

target block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/fis_experiment_template#target FisExperimentTemplate#target}

---

### FisExperimentTemplateActionParameter <a name="FisExperimentTemplateActionParameter" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new FisExperimentTemplateActionParameter {
    string Key,
    string Value
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameter.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/fis_experiment_template#key FisExperimentTemplate#key}. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameter.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/fis_experiment_template#value FisExperimentTemplate#value}. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameter.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/fis_experiment_template#key FisExperimentTemplate#key}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameter.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/fis_experiment_template#value FisExperimentTemplate#value}.

---

### FisExperimentTemplateActionTarget <a name="FisExperimentTemplateActionTarget" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionTarget.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new FisExperimentTemplateActionTarget {
    string Key,
    string Value
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionTarget.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/fis_experiment_template#key FisExperimentTemplate#key}. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionTarget.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/fis_experiment_template#value FisExperimentTemplate#value}. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionTarget.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/fis_experiment_template#key FisExperimentTemplate#key}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionTarget.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/fis_experiment_template#value FisExperimentTemplate#value}.

---

### FisExperimentTemplateConfig <a name="FisExperimentTemplateConfig" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new FisExperimentTemplateConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    object Action,
    string Description,
    string RoleArn,
    object StopCondition,
    FisExperimentTemplateExperimentOptions ExperimentOptions = null,
    FisExperimentTemplateExperimentReportConfiguration ExperimentReportConfiguration = null,
    string Id = null,
    FisExperimentTemplateLogConfiguration LogConfiguration = null,
    string Region = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null,
    object Target = null,
    FisExperimentTemplateTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateConfig.property.action">Action</a></code> | <code>object</code> | action block. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/fis_experiment_template#description FisExperimentTemplate#description}. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateConfig.property.roleArn">RoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/fis_experiment_template#role_arn FisExperimentTemplate#role_arn}. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateConfig.property.stopCondition">StopCondition</a></code> | <code>object</code> | stop_condition block. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateConfig.property.experimentOptions">ExperimentOptions</a></code> | <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentOptions">FisExperimentTemplateExperimentOptions</a></code> | experiment_options block. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateConfig.property.experimentReportConfiguration">ExperimentReportConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfiguration">FisExperimentTemplateExperimentReportConfiguration</a></code> | experiment_report_configuration block. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/fis_experiment_template#id FisExperimentTemplate#id}. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateConfig.property.logConfiguration">LogConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfiguration">FisExperimentTemplateLogConfiguration</a></code> | log_configuration block. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/fis_experiment_template#tags FisExperimentTemplate#tags}. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/fis_experiment_template#tags_all FisExperimentTemplate#tags_all}. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateConfig.property.target">Target</a></code> | <code>object</code> | target block. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTimeouts">FisExperimentTemplateTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateConfig.property.action"></a>

```csharp
public object Action { get; set; }
```

- *Type:* object

action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/fis_experiment_template#action FisExperimentTemplate#action}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/fis_experiment_template#description FisExperimentTemplate#description}.

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateConfig.property.roleArn"></a>

```csharp
public string RoleArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/fis_experiment_template#role_arn FisExperimentTemplate#role_arn}.

---

##### `StopCondition`<sup>Required</sup> <a name="StopCondition" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateConfig.property.stopCondition"></a>

```csharp
public object StopCondition { get; set; }
```

- *Type:* object

stop_condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/fis_experiment_template#stop_condition FisExperimentTemplate#stop_condition}

---

##### `ExperimentOptions`<sup>Optional</sup> <a name="ExperimentOptions" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateConfig.property.experimentOptions"></a>

```csharp
public FisExperimentTemplateExperimentOptions ExperimentOptions { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentOptions">FisExperimentTemplateExperimentOptions</a>

experiment_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/fis_experiment_template#experiment_options FisExperimentTemplate#experiment_options}

---

##### `ExperimentReportConfiguration`<sup>Optional</sup> <a name="ExperimentReportConfiguration" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateConfig.property.experimentReportConfiguration"></a>

```csharp
public FisExperimentTemplateExperimentReportConfiguration ExperimentReportConfiguration { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfiguration">FisExperimentTemplateExperimentReportConfiguration</a>

experiment_report_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/fis_experiment_template#experiment_report_configuration FisExperimentTemplate#experiment_report_configuration}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/fis_experiment_template#id FisExperimentTemplate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LogConfiguration`<sup>Optional</sup> <a name="LogConfiguration" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateConfig.property.logConfiguration"></a>

```csharp
public FisExperimentTemplateLogConfiguration LogConfiguration { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfiguration">FisExperimentTemplateLogConfiguration</a>

log_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/fis_experiment_template#log_configuration FisExperimentTemplate#log_configuration}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/fis_experiment_template#region FisExperimentTemplate#region}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/fis_experiment_template#tags FisExperimentTemplate#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/fis_experiment_template#tags_all FisExperimentTemplate#tags_all}.

---

##### `Target`<sup>Optional</sup> <a name="Target" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateConfig.property.target"></a>

```csharp
public object Target { get; set; }
```

- *Type:* object

target block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/fis_experiment_template#target FisExperimentTemplate#target}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateConfig.property.timeouts"></a>

```csharp
public FisExperimentTemplateTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTimeouts">FisExperimentTemplateTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/fis_experiment_template#timeouts FisExperimentTemplate#timeouts}

---

### FisExperimentTemplateExperimentOptions <a name="FisExperimentTemplateExperimentOptions" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentOptions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new FisExperimentTemplateExperimentOptions {
    string AccountTargeting = null,
    string EmptyTargetResolutionMode = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentOptions.property.accountTargeting">AccountTargeting</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/fis_experiment_template#account_targeting FisExperimentTemplate#account_targeting}. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentOptions.property.emptyTargetResolutionMode">EmptyTargetResolutionMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/fis_experiment_template#empty_target_resolution_mode FisExperimentTemplate#empty_target_resolution_mode}. |

---

##### `AccountTargeting`<sup>Optional</sup> <a name="AccountTargeting" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentOptions.property.accountTargeting"></a>

```csharp
public string AccountTargeting { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/fis_experiment_template#account_targeting FisExperimentTemplate#account_targeting}.

---

##### `EmptyTargetResolutionMode`<sup>Optional</sup> <a name="EmptyTargetResolutionMode" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentOptions.property.emptyTargetResolutionMode"></a>

```csharp
public string EmptyTargetResolutionMode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/fis_experiment_template#empty_target_resolution_mode FisExperimentTemplate#empty_target_resolution_mode}.

---

### FisExperimentTemplateExperimentReportConfiguration <a name="FisExperimentTemplateExperimentReportConfiguration" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new FisExperimentTemplateExperimentReportConfiguration {
    FisExperimentTemplateExperimentReportConfigurationDataSources DataSources = null,
    FisExperimentTemplateExperimentReportConfigurationOutputs Outputs = null,
    string PostExperimentDuration = null,
    string PreExperimentDuration = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfiguration.property.dataSources">DataSources</a></code> | <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSources">FisExperimentTemplateExperimentReportConfigurationDataSources</a></code> | data_sources block. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfiguration.property.outputs">Outputs</a></code> | <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputs">FisExperimentTemplateExperimentReportConfigurationOutputs</a></code> | outputs block. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfiguration.property.postExperimentDuration">PostExperimentDuration</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/fis_experiment_template#post_experiment_duration FisExperimentTemplate#post_experiment_duration}. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfiguration.property.preExperimentDuration">PreExperimentDuration</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/fis_experiment_template#pre_experiment_duration FisExperimentTemplate#pre_experiment_duration}. |

---

##### `DataSources`<sup>Optional</sup> <a name="DataSources" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfiguration.property.dataSources"></a>

```csharp
public FisExperimentTemplateExperimentReportConfigurationDataSources DataSources { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSources">FisExperimentTemplateExperimentReportConfigurationDataSources</a>

data_sources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/fis_experiment_template#data_sources FisExperimentTemplate#data_sources}

---

##### `Outputs`<sup>Optional</sup> <a name="Outputs" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfiguration.property.outputs"></a>

```csharp
public FisExperimentTemplateExperimentReportConfigurationOutputs Outputs { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputs">FisExperimentTemplateExperimentReportConfigurationOutputs</a>

outputs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/fis_experiment_template#outputs FisExperimentTemplate#outputs}

---

##### `PostExperimentDuration`<sup>Optional</sup> <a name="PostExperimentDuration" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfiguration.property.postExperimentDuration"></a>

```csharp
public string PostExperimentDuration { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/fis_experiment_template#post_experiment_duration FisExperimentTemplate#post_experiment_duration}.

---

##### `PreExperimentDuration`<sup>Optional</sup> <a name="PreExperimentDuration" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfiguration.property.preExperimentDuration"></a>

```csharp
public string PreExperimentDuration { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/fis_experiment_template#pre_experiment_duration FisExperimentTemplate#pre_experiment_duration}.

---

### FisExperimentTemplateExperimentReportConfigurationDataSources <a name="FisExperimentTemplateExperimentReportConfigurationDataSources" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSources.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new FisExperimentTemplateExperimentReportConfigurationDataSources {
    object CloudwatchDashboard = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSources.property.cloudwatchDashboard">CloudwatchDashboard</a></code> | <code>object</code> | cloudwatch_dashboard block. |

---

##### `CloudwatchDashboard`<sup>Optional</sup> <a name="CloudwatchDashboard" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSources.property.cloudwatchDashboard"></a>

```csharp
public object CloudwatchDashboard { get; set; }
```

- *Type:* object

cloudwatch_dashboard block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/fis_experiment_template#cloudwatch_dashboard FisExperimentTemplate#cloudwatch_dashboard}

---

### FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboard <a name="FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboard" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboard"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboard.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboard {
    string DashboardArn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboard.property.dashboardArn">DashboardArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/fis_experiment_template#dashboard_arn FisExperimentTemplate#dashboard_arn}. |

---

##### `DashboardArn`<sup>Optional</sup> <a name="DashboardArn" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboard.property.dashboardArn"></a>

```csharp
public string DashboardArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/fis_experiment_template#dashboard_arn FisExperimentTemplate#dashboard_arn}.

---

### FisExperimentTemplateExperimentReportConfigurationOutputs <a name="FisExperimentTemplateExperimentReportConfigurationOutputs" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputs.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new FisExperimentTemplateExperimentReportConfigurationOutputs {
    FisExperimentTemplateExperimentReportConfigurationOutputsS3Configuration S3Configuration = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputs.property.s3Configuration">S3Configuration</a></code> | <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsS3Configuration">FisExperimentTemplateExperimentReportConfigurationOutputsS3Configuration</a></code> | s3_configuration block. |

---

##### `S3Configuration`<sup>Optional</sup> <a name="S3Configuration" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputs.property.s3Configuration"></a>

```csharp
public FisExperimentTemplateExperimentReportConfigurationOutputsS3Configuration S3Configuration { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsS3Configuration">FisExperimentTemplateExperimentReportConfigurationOutputsS3Configuration</a>

s3_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/fis_experiment_template#s3_configuration FisExperimentTemplate#s3_configuration}

---

### FisExperimentTemplateExperimentReportConfigurationOutputsS3Configuration <a name="FisExperimentTemplateExperimentReportConfigurationOutputsS3Configuration" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsS3Configuration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsS3Configuration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new FisExperimentTemplateExperimentReportConfigurationOutputsS3Configuration {
    string BucketName,
    string Prefix = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsS3Configuration.property.bucketName">BucketName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/fis_experiment_template#bucket_name FisExperimentTemplate#bucket_name}. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsS3Configuration.property.prefix">Prefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/fis_experiment_template#prefix FisExperimentTemplate#prefix}. |

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsS3Configuration.property.bucketName"></a>

```csharp
public string BucketName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/fis_experiment_template#bucket_name FisExperimentTemplate#bucket_name}.

---

##### `Prefix`<sup>Optional</sup> <a name="Prefix" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsS3Configuration.property.prefix"></a>

```csharp
public string Prefix { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/fis_experiment_template#prefix FisExperimentTemplate#prefix}.

---

### FisExperimentTemplateLogConfiguration <a name="FisExperimentTemplateLogConfiguration" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new FisExperimentTemplateLogConfiguration {
    double LogSchemaVersion,
    FisExperimentTemplateLogConfigurationCloudwatchLogsConfiguration CloudwatchLogsConfiguration = null,
    FisExperimentTemplateLogConfigurationS3Configuration S3Configuration = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfiguration.property.logSchemaVersion">LogSchemaVersion</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/fis_experiment_template#log_schema_version FisExperimentTemplate#log_schema_version}. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfiguration.property.cloudwatchLogsConfiguration">CloudwatchLogsConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfiguration">FisExperimentTemplateLogConfigurationCloudwatchLogsConfiguration</a></code> | cloudwatch_logs_configuration block. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfiguration.property.s3Configuration">S3Configuration</a></code> | <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3Configuration">FisExperimentTemplateLogConfigurationS3Configuration</a></code> | s3_configuration block. |

---

##### `LogSchemaVersion`<sup>Required</sup> <a name="LogSchemaVersion" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfiguration.property.logSchemaVersion"></a>

```csharp
public double LogSchemaVersion { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/fis_experiment_template#log_schema_version FisExperimentTemplate#log_schema_version}.

---

##### `CloudwatchLogsConfiguration`<sup>Optional</sup> <a name="CloudwatchLogsConfiguration" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfiguration.property.cloudwatchLogsConfiguration"></a>

```csharp
public FisExperimentTemplateLogConfigurationCloudwatchLogsConfiguration CloudwatchLogsConfiguration { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfiguration">FisExperimentTemplateLogConfigurationCloudwatchLogsConfiguration</a>

cloudwatch_logs_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/fis_experiment_template#cloudwatch_logs_configuration FisExperimentTemplate#cloudwatch_logs_configuration}

---

##### `S3Configuration`<sup>Optional</sup> <a name="S3Configuration" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfiguration.property.s3Configuration"></a>

```csharp
public FisExperimentTemplateLogConfigurationS3Configuration S3Configuration { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3Configuration">FisExperimentTemplateLogConfigurationS3Configuration</a>

s3_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/fis_experiment_template#s3_configuration FisExperimentTemplate#s3_configuration}

---

### FisExperimentTemplateLogConfigurationCloudwatchLogsConfiguration <a name="FisExperimentTemplateLogConfigurationCloudwatchLogsConfiguration" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new FisExperimentTemplateLogConfigurationCloudwatchLogsConfiguration {
    string LogGroupArn
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfiguration.property.logGroupArn">LogGroupArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/fis_experiment_template#log_group_arn FisExperimentTemplate#log_group_arn}. |

---

##### `LogGroupArn`<sup>Required</sup> <a name="LogGroupArn" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfiguration.property.logGroupArn"></a>

```csharp
public string LogGroupArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/fis_experiment_template#log_group_arn FisExperimentTemplate#log_group_arn}.

---

### FisExperimentTemplateLogConfigurationS3Configuration <a name="FisExperimentTemplateLogConfigurationS3Configuration" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3Configuration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3Configuration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new FisExperimentTemplateLogConfigurationS3Configuration {
    string BucketName,
    string Prefix = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3Configuration.property.bucketName">BucketName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/fis_experiment_template#bucket_name FisExperimentTemplate#bucket_name}. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3Configuration.property.prefix">Prefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/fis_experiment_template#prefix FisExperimentTemplate#prefix}. |

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3Configuration.property.bucketName"></a>

```csharp
public string BucketName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/fis_experiment_template#bucket_name FisExperimentTemplate#bucket_name}.

---

##### `Prefix`<sup>Optional</sup> <a name="Prefix" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3Configuration.property.prefix"></a>

```csharp
public string Prefix { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/fis_experiment_template#prefix FisExperimentTemplate#prefix}.

---

### FisExperimentTemplateStopCondition <a name="FisExperimentTemplateStopCondition" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopCondition.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new FisExperimentTemplateStopCondition {
    string Source,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopCondition.property.source">Source</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/fis_experiment_template#source FisExperimentTemplate#source}. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopCondition.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/fis_experiment_template#value FisExperimentTemplate#value}. |

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopCondition.property.source"></a>

```csharp
public string Source { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/fis_experiment_template#source FisExperimentTemplate#source}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopCondition.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/fis_experiment_template#value FisExperimentTemplate#value}.

---

### FisExperimentTemplateTarget <a name="FisExperimentTemplateTarget" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTarget.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new FisExperimentTemplateTarget {
    string Name,
    string ResourceType,
    string SelectionMode,
    object Filter = null,
    System.Collections.Generic.IDictionary<string, string> Parameters = null,
    string[] ResourceArns = null,
    object ResourceTag = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTarget.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/fis_experiment_template#name FisExperimentTemplate#name}. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTarget.property.resourceType">ResourceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/fis_experiment_template#resource_type FisExperimentTemplate#resource_type}. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTarget.property.selectionMode">SelectionMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/fis_experiment_template#selection_mode FisExperimentTemplate#selection_mode}. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTarget.property.filter">Filter</a></code> | <code>object</code> | filter block. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTarget.property.parameters">Parameters</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/fis_experiment_template#parameters FisExperimentTemplate#parameters}. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTarget.property.resourceArns">ResourceArns</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/fis_experiment_template#resource_arns FisExperimentTemplate#resource_arns}. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTarget.property.resourceTag">ResourceTag</a></code> | <code>object</code> | resource_tag block. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTarget.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/fis_experiment_template#name FisExperimentTemplate#name}.

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTarget.property.resourceType"></a>

```csharp
public string ResourceType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/fis_experiment_template#resource_type FisExperimentTemplate#resource_type}.

---

##### `SelectionMode`<sup>Required</sup> <a name="SelectionMode" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTarget.property.selectionMode"></a>

```csharp
public string SelectionMode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/fis_experiment_template#selection_mode FisExperimentTemplate#selection_mode}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTarget.property.filter"></a>

```csharp
public object Filter { get; set; }
```

- *Type:* object

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/fis_experiment_template#filter FisExperimentTemplate#filter}

---

##### `Parameters`<sup>Optional</sup> <a name="Parameters" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTarget.property.parameters"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Parameters { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/fis_experiment_template#parameters FisExperimentTemplate#parameters}.

---

##### `ResourceArns`<sup>Optional</sup> <a name="ResourceArns" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTarget.property.resourceArns"></a>

```csharp
public string[] ResourceArns { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/fis_experiment_template#resource_arns FisExperimentTemplate#resource_arns}.

---

##### `ResourceTag`<sup>Optional</sup> <a name="ResourceTag" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTarget.property.resourceTag"></a>

```csharp
public object ResourceTag { get; set; }
```

- *Type:* object

resource_tag block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/fis_experiment_template#resource_tag FisExperimentTemplate#resource_tag}

---

### FisExperimentTemplateTargetFilter <a name="FisExperimentTemplateTargetFilter" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new FisExperimentTemplateTargetFilter {
    string Path,
    string[] Values
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilter.property.path">Path</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/fis_experiment_template#path FisExperimentTemplate#path}. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/fis_experiment_template#values FisExperimentTemplate#values}. |

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilter.property.path"></a>

```csharp
public string Path { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/fis_experiment_template#path FisExperimentTemplate#path}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/fis_experiment_template#values FisExperimentTemplate#values}.

---

### FisExperimentTemplateTargetResourceTag <a name="FisExperimentTemplateTargetResourceTag" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTag"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTag.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new FisExperimentTemplateTargetResourceTag {
    string Key,
    string Value
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTag.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/fis_experiment_template#key FisExperimentTemplate#key}. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTag.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/fis_experiment_template#value FisExperimentTemplate#value}. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTag.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/fis_experiment_template#key FisExperimentTemplate#key}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTag.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/fis_experiment_template#value FisExperimentTemplate#value}.

---

### FisExperimentTemplateTimeouts <a name="FisExperimentTemplateTimeouts" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new FisExperimentTemplateTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/fis_experiment_template#create FisExperimentTemplate#create}. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/fis_experiment_template#delete FisExperimentTemplate#delete}. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/fis_experiment_template#update FisExperimentTemplate#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/fis_experiment_template#create FisExperimentTemplate#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/fis_experiment_template#delete FisExperimentTemplate#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/fis_experiment_template#update FisExperimentTemplate#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### FisExperimentTemplateActionList <a name="FisExperimentTemplateActionList" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new FisExperimentTemplateActionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionList.get"></a>

```csharp
private FisExperimentTemplateActionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### FisExperimentTemplateActionOutputReference <a name="FisExperimentTemplateActionOutputReference" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new FisExperimentTemplateActionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.putParameter">PutParameter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.putTarget">PutTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.resetParameter">ResetParameter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.resetStartAfter">ResetStartAfter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.resetTarget">ResetTarget</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutParameter` <a name="PutParameter" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.putParameter"></a>

```csharp
private void PutParameter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.putParameter.parameter.value"></a>

- *Type:* object

---

##### `PutTarget` <a name="PutTarget" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.putTarget"></a>

```csharp
private void PutTarget(FisExperimentTemplateActionTarget Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.putTarget.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionTarget">FisExperimentTemplateActionTarget</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetParameter` <a name="ResetParameter" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.resetParameter"></a>

```csharp
private void ResetParameter()
```

##### `ResetStartAfter` <a name="ResetStartAfter" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.resetStartAfter"></a>

```csharp
private void ResetStartAfter()
```

##### `ResetTarget` <a name="ResetTarget" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.resetTarget"></a>

```csharp
private void ResetTarget()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.property.parameter">Parameter</a></code> | <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterList">FisExperimentTemplateActionParameterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.property.target">Target</a></code> | <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionTargetOutputReference">FisExperimentTemplateActionTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.property.actionIdInput">ActionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.property.parameterInput">ParameterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.property.startAfterInput">StartAfterInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.property.targetInput">TargetInput</a></code> | <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionTarget">FisExperimentTemplateActionTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.property.actionId">ActionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.property.startAfter">StartAfter</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Parameter`<sup>Required</sup> <a name="Parameter" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.property.parameter"></a>

```csharp
public FisExperimentTemplateActionParameterList Parameter { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterList">FisExperimentTemplateActionParameterList</a>

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.property.target"></a>

```csharp
public FisExperimentTemplateActionTargetOutputReference Target { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionTargetOutputReference">FisExperimentTemplateActionTargetOutputReference</a>

---

##### `ActionIdInput`<sup>Optional</sup> <a name="ActionIdInput" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.property.actionIdInput"></a>

```csharp
public string ActionIdInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ParameterInput`<sup>Optional</sup> <a name="ParameterInput" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.property.parameterInput"></a>

```csharp
public object ParameterInput { get; }
```

- *Type:* object

---

##### `StartAfterInput`<sup>Optional</sup> <a name="StartAfterInput" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.property.startAfterInput"></a>

```csharp
public string[] StartAfterInput { get; }
```

- *Type:* string[]

---

##### `TargetInput`<sup>Optional</sup> <a name="TargetInput" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.property.targetInput"></a>

```csharp
public FisExperimentTemplateActionTarget TargetInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionTarget">FisExperimentTemplateActionTarget</a>

---

##### `ActionId`<sup>Required</sup> <a name="ActionId" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.property.actionId"></a>

```csharp
public string ActionId { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `StartAfter`<sup>Required</sup> <a name="StartAfter" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.property.startAfter"></a>

```csharp
public string[] StartAfter { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### FisExperimentTemplateActionParameterList <a name="FisExperimentTemplateActionParameterList" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new FisExperimentTemplateActionParameterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterList.get"></a>

```csharp
private FisExperimentTemplateActionParameterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### FisExperimentTemplateActionParameterOutputReference <a name="FisExperimentTemplateActionParameterOutputReference" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new FisExperimentTemplateActionParameterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionParameterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### FisExperimentTemplateActionTargetOutputReference <a name="FisExperimentTemplateActionTargetOutputReference" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionTargetOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new FisExperimentTemplateActionTargetOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionTargetOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionTargetOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionTargetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionTargetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionTargetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionTargetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionTargetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionTargetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionTargetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionTargetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionTargetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionTargetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionTargetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionTargetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionTargetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionTargetOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionTargetOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionTargetOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionTargetOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionTargetOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionTargetOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionTargetOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionTargetOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionTargetOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionTargetOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionTargetOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionTargetOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionTargetOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionTargetOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionTargetOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionTargetOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionTargetOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionTargetOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionTargetOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionTargetOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionTargetOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionTarget">FisExperimentTemplateActionTarget</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionTargetOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionTargetOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionTargetOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionTargetOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionTargetOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionTargetOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionTargetOutputReference.property.internalValue"></a>

```csharp
public FisExperimentTemplateActionTarget InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateActionTarget">FisExperimentTemplateActionTarget</a>

---


### FisExperimentTemplateExperimentOptionsOutputReference <a name="FisExperimentTemplateExperimentOptionsOutputReference" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new FisExperimentTemplateExperimentOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.resetAccountTargeting">ResetAccountTargeting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.resetEmptyTargetResolutionMode">ResetEmptyTargetResolutionMode</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAccountTargeting` <a name="ResetAccountTargeting" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.resetAccountTargeting"></a>

```csharp
private void ResetAccountTargeting()
```

##### `ResetEmptyTargetResolutionMode` <a name="ResetEmptyTargetResolutionMode" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.resetEmptyTargetResolutionMode"></a>

```csharp
private void ResetEmptyTargetResolutionMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.property.accountTargetingInput">AccountTargetingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.property.emptyTargetResolutionModeInput">EmptyTargetResolutionModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.property.accountTargeting">AccountTargeting</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.property.emptyTargetResolutionMode">EmptyTargetResolutionMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentOptions">FisExperimentTemplateExperimentOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AccountTargetingInput`<sup>Optional</sup> <a name="AccountTargetingInput" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.property.accountTargetingInput"></a>

```csharp
public string AccountTargetingInput { get; }
```

- *Type:* string

---

##### `EmptyTargetResolutionModeInput`<sup>Optional</sup> <a name="EmptyTargetResolutionModeInput" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.property.emptyTargetResolutionModeInput"></a>

```csharp
public string EmptyTargetResolutionModeInput { get; }
```

- *Type:* string

---

##### `AccountTargeting`<sup>Required</sup> <a name="AccountTargeting" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.property.accountTargeting"></a>

```csharp
public string AccountTargeting { get; }
```

- *Type:* string

---

##### `EmptyTargetResolutionMode`<sup>Required</sup> <a name="EmptyTargetResolutionMode" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.property.emptyTargetResolutionMode"></a>

```csharp
public string EmptyTargetResolutionMode { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentOptionsOutputReference.property.internalValue"></a>

```csharp
public FisExperimentTemplateExperimentOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentOptions">FisExperimentTemplateExperimentOptions</a>

---


### FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardList <a name="FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardList" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardList.get"></a>

```csharp
private FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardOutputReference <a name="FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardOutputReference" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardOutputReference.resetDashboardArn">ResetDashboardArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDashboardArn` <a name="ResetDashboardArn" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardOutputReference.resetDashboardArn"></a>

```csharp
private void ResetDashboardArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardOutputReference.property.dashboardArnInput">DashboardArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardOutputReference.property.dashboardArn">DashboardArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DashboardArnInput`<sup>Optional</sup> <a name="DashboardArnInput" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardOutputReference.property.dashboardArnInput"></a>

```csharp
public string DashboardArnInput { get; }
```

- *Type:* string

---

##### `DashboardArn`<sup>Required</sup> <a name="DashboardArn" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardOutputReference.property.dashboardArn"></a>

```csharp
public string DashboardArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference <a name="FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.putCloudwatchDashboard">PutCloudwatchDashboard</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.resetCloudwatchDashboard">ResetCloudwatchDashboard</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCloudwatchDashboard` <a name="PutCloudwatchDashboard" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.putCloudwatchDashboard"></a>

```csharp
private void PutCloudwatchDashboard(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.putCloudwatchDashboard.parameter.value"></a>

- *Type:* object

---

##### `ResetCloudwatchDashboard` <a name="ResetCloudwatchDashboard" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.resetCloudwatchDashboard"></a>

```csharp
private void ResetCloudwatchDashboard()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.property.cloudwatchDashboard">CloudwatchDashboard</a></code> | <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardList">FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.property.cloudwatchDashboardInput">CloudwatchDashboardInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSources">FisExperimentTemplateExperimentReportConfigurationDataSources</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CloudwatchDashboard`<sup>Required</sup> <a name="CloudwatchDashboard" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.property.cloudwatchDashboard"></a>

```csharp
public FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardList CloudwatchDashboard { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardList">FisExperimentTemplateExperimentReportConfigurationDataSourcesCloudwatchDashboardList</a>

---

##### `CloudwatchDashboardInput`<sup>Optional</sup> <a name="CloudwatchDashboardInput" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.property.cloudwatchDashboardInput"></a>

```csharp
public object CloudwatchDashboardInput { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference.property.internalValue"></a>

```csharp
public FisExperimentTemplateExperimentReportConfigurationDataSources InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSources">FisExperimentTemplateExperimentReportConfigurationDataSources</a>

---


### FisExperimentTemplateExperimentReportConfigurationOutputReference <a name="FisExperimentTemplateExperimentReportConfigurationOutputReference" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new FisExperimentTemplateExperimentReportConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.putDataSources">PutDataSources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.putOutputs">PutOutputs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.resetDataSources">ResetDataSources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.resetOutputs">ResetOutputs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.resetPostExperimentDuration">ResetPostExperimentDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.resetPreExperimentDuration">ResetPreExperimentDuration</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDataSources` <a name="PutDataSources" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.putDataSources"></a>

```csharp
private void PutDataSources(FisExperimentTemplateExperimentReportConfigurationDataSources Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.putDataSources.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSources">FisExperimentTemplateExperimentReportConfigurationDataSources</a>

---

##### `PutOutputs` <a name="PutOutputs" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.putOutputs"></a>

```csharp
private void PutOutputs(FisExperimentTemplateExperimentReportConfigurationOutputs Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.putOutputs.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputs">FisExperimentTemplateExperimentReportConfigurationOutputs</a>

---

##### `ResetDataSources` <a name="ResetDataSources" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.resetDataSources"></a>

```csharp
private void ResetDataSources()
```

##### `ResetOutputs` <a name="ResetOutputs" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.resetOutputs"></a>

```csharp
private void ResetOutputs()
```

##### `ResetPostExperimentDuration` <a name="ResetPostExperimentDuration" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.resetPostExperimentDuration"></a>

```csharp
private void ResetPostExperimentDuration()
```

##### `ResetPreExperimentDuration` <a name="ResetPreExperimentDuration" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.resetPreExperimentDuration"></a>

```csharp
private void ResetPreExperimentDuration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.property.dataSources">DataSources</a></code> | <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference">FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.property.outputs">Outputs</a></code> | <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference">FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.property.dataSourcesInput">DataSourcesInput</a></code> | <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSources">FisExperimentTemplateExperimentReportConfigurationDataSources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.property.outputsInput">OutputsInput</a></code> | <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputs">FisExperimentTemplateExperimentReportConfigurationOutputs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.property.postExperimentDurationInput">PostExperimentDurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.property.preExperimentDurationInput">PreExperimentDurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.property.postExperimentDuration">PostExperimentDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.property.preExperimentDuration">PreExperimentDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfiguration">FisExperimentTemplateExperimentReportConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DataSources`<sup>Required</sup> <a name="DataSources" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.property.dataSources"></a>

```csharp
public FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference DataSources { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference">FisExperimentTemplateExperimentReportConfigurationDataSourcesOutputReference</a>

---

##### `Outputs`<sup>Required</sup> <a name="Outputs" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.property.outputs"></a>

```csharp
public FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference Outputs { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference">FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference</a>

---

##### `DataSourcesInput`<sup>Optional</sup> <a name="DataSourcesInput" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.property.dataSourcesInput"></a>

```csharp
public FisExperimentTemplateExperimentReportConfigurationDataSources DataSourcesInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationDataSources">FisExperimentTemplateExperimentReportConfigurationDataSources</a>

---

##### `OutputsInput`<sup>Optional</sup> <a name="OutputsInput" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.property.outputsInput"></a>

```csharp
public FisExperimentTemplateExperimentReportConfigurationOutputs OutputsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputs">FisExperimentTemplateExperimentReportConfigurationOutputs</a>

---

##### `PostExperimentDurationInput`<sup>Optional</sup> <a name="PostExperimentDurationInput" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.property.postExperimentDurationInput"></a>

```csharp
public string PostExperimentDurationInput { get; }
```

- *Type:* string

---

##### `PreExperimentDurationInput`<sup>Optional</sup> <a name="PreExperimentDurationInput" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.property.preExperimentDurationInput"></a>

```csharp
public string PreExperimentDurationInput { get; }
```

- *Type:* string

---

##### `PostExperimentDuration`<sup>Required</sup> <a name="PostExperimentDuration" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.property.postExperimentDuration"></a>

```csharp
public string PostExperimentDuration { get; }
```

- *Type:* string

---

##### `PreExperimentDuration`<sup>Required</sup> <a name="PreExperimentDuration" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.property.preExperimentDuration"></a>

```csharp
public string PreExperimentDuration { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputReference.property.internalValue"></a>

```csharp
public FisExperimentTemplateExperimentReportConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfiguration">FisExperimentTemplateExperimentReportConfiguration</a>

---


### FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference <a name="FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.putS3Configuration">PutS3Configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.resetS3Configuration">ResetS3Configuration</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutS3Configuration` <a name="PutS3Configuration" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.putS3Configuration"></a>

```csharp
private void PutS3Configuration(FisExperimentTemplateExperimentReportConfigurationOutputsS3Configuration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.putS3Configuration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsS3Configuration">FisExperimentTemplateExperimentReportConfigurationOutputsS3Configuration</a>

---

##### `ResetS3Configuration` <a name="ResetS3Configuration" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.resetS3Configuration"></a>

```csharp
private void ResetS3Configuration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.property.s3Configuration">S3Configuration</a></code> | <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsS3ConfigurationOutputReference">FisExperimentTemplateExperimentReportConfigurationOutputsS3ConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.property.s3ConfigurationInput">S3ConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsS3Configuration">FisExperimentTemplateExperimentReportConfigurationOutputsS3Configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputs">FisExperimentTemplateExperimentReportConfigurationOutputs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `S3Configuration`<sup>Required</sup> <a name="S3Configuration" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.property.s3Configuration"></a>

```csharp
public FisExperimentTemplateExperimentReportConfigurationOutputsS3ConfigurationOutputReference S3Configuration { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsS3ConfigurationOutputReference">FisExperimentTemplateExperimentReportConfigurationOutputsS3ConfigurationOutputReference</a>

---

##### `S3ConfigurationInput`<sup>Optional</sup> <a name="S3ConfigurationInput" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.property.s3ConfigurationInput"></a>

```csharp
public FisExperimentTemplateExperimentReportConfigurationOutputsS3Configuration S3ConfigurationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsS3Configuration">FisExperimentTemplateExperimentReportConfigurationOutputsS3Configuration</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsOutputReference.property.internalValue"></a>

```csharp
public FisExperimentTemplateExperimentReportConfigurationOutputs InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputs">FisExperimentTemplateExperimentReportConfigurationOutputs</a>

---


### FisExperimentTemplateExperimentReportConfigurationOutputsS3ConfigurationOutputReference <a name="FisExperimentTemplateExperimentReportConfigurationOutputsS3ConfigurationOutputReference" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsS3ConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsS3ConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new FisExperimentTemplateExperimentReportConfigurationOutputsS3ConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsS3ConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsS3ConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsS3ConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsS3ConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsS3ConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsS3ConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsS3ConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsS3ConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsS3ConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsS3ConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsS3ConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsS3ConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsS3ConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsS3ConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsS3ConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsS3ConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsS3ConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsS3ConfigurationOutputReference.resetPrefix">ResetPrefix</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsS3ConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsS3ConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsS3ConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsS3ConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsS3ConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsS3ConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsS3ConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsS3ConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsS3ConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsS3ConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsS3ConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsS3ConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsS3ConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsS3ConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsS3ConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsS3ConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsS3ConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsS3ConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsS3ConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsS3ConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsS3ConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsS3ConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsS3ConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsS3ConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPrefix` <a name="ResetPrefix" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsS3ConfigurationOutputReference.resetPrefix"></a>

```csharp
private void ResetPrefix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsS3ConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsS3ConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsS3ConfigurationOutputReference.property.bucketNameInput">BucketNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsS3ConfigurationOutputReference.property.prefixInput">PrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsS3ConfigurationOutputReference.property.bucketName">BucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsS3ConfigurationOutputReference.property.prefix">Prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsS3ConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsS3Configuration">FisExperimentTemplateExperimentReportConfigurationOutputsS3Configuration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsS3ConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsS3ConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BucketNameInput`<sup>Optional</sup> <a name="BucketNameInput" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsS3ConfigurationOutputReference.property.bucketNameInput"></a>

```csharp
public string BucketNameInput { get; }
```

- *Type:* string

---

##### `PrefixInput`<sup>Optional</sup> <a name="PrefixInput" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsS3ConfigurationOutputReference.property.prefixInput"></a>

```csharp
public string PrefixInput { get; }
```

- *Type:* string

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsS3ConfigurationOutputReference.property.bucketName"></a>

```csharp
public string BucketName { get; }
```

- *Type:* string

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsS3ConfigurationOutputReference.property.prefix"></a>

```csharp
public string Prefix { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsS3ConfigurationOutputReference.property.internalValue"></a>

```csharp
public FisExperimentTemplateExperimentReportConfigurationOutputsS3Configuration InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateExperimentReportConfigurationOutputsS3Configuration">FisExperimentTemplateExperimentReportConfigurationOutputsS3Configuration</a>

---


### FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference <a name="FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.property.logGroupArnInput">LogGroupArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.property.logGroupArn">LogGroupArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfiguration">FisExperimentTemplateLogConfigurationCloudwatchLogsConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LogGroupArnInput`<sup>Optional</sup> <a name="LogGroupArnInput" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.property.logGroupArnInput"></a>

```csharp
public string LogGroupArnInput { get; }
```

- *Type:* string

---

##### `LogGroupArn`<sup>Required</sup> <a name="LogGroupArn" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.property.logGroupArn"></a>

```csharp
public string LogGroupArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference.property.internalValue"></a>

```csharp
public FisExperimentTemplateLogConfigurationCloudwatchLogsConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfiguration">FisExperimentTemplateLogConfigurationCloudwatchLogsConfiguration</a>

---


### FisExperimentTemplateLogConfigurationOutputReference <a name="FisExperimentTemplateLogConfigurationOutputReference" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new FisExperimentTemplateLogConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.putCloudwatchLogsConfiguration">PutCloudwatchLogsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.putS3Configuration">PutS3Configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.resetCloudwatchLogsConfiguration">ResetCloudwatchLogsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.resetS3Configuration">ResetS3Configuration</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCloudwatchLogsConfiguration` <a name="PutCloudwatchLogsConfiguration" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.putCloudwatchLogsConfiguration"></a>

```csharp
private void PutCloudwatchLogsConfiguration(FisExperimentTemplateLogConfigurationCloudwatchLogsConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.putCloudwatchLogsConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfiguration">FisExperimentTemplateLogConfigurationCloudwatchLogsConfiguration</a>

---

##### `PutS3Configuration` <a name="PutS3Configuration" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.putS3Configuration"></a>

```csharp
private void PutS3Configuration(FisExperimentTemplateLogConfigurationS3Configuration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.putS3Configuration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3Configuration">FisExperimentTemplateLogConfigurationS3Configuration</a>

---

##### `ResetCloudwatchLogsConfiguration` <a name="ResetCloudwatchLogsConfiguration" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.resetCloudwatchLogsConfiguration"></a>

```csharp
private void ResetCloudwatchLogsConfiguration()
```

##### `ResetS3Configuration` <a name="ResetS3Configuration" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.resetS3Configuration"></a>

```csharp
private void ResetS3Configuration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.property.cloudwatchLogsConfiguration">CloudwatchLogsConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference">FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.property.s3Configuration">S3Configuration</a></code> | <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference">FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.property.cloudwatchLogsConfigurationInput">CloudwatchLogsConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfiguration">FisExperimentTemplateLogConfigurationCloudwatchLogsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.property.logSchemaVersionInput">LogSchemaVersionInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.property.s3ConfigurationInput">S3ConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3Configuration">FisExperimentTemplateLogConfigurationS3Configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.property.logSchemaVersion">LogSchemaVersion</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfiguration">FisExperimentTemplateLogConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CloudwatchLogsConfiguration`<sup>Required</sup> <a name="CloudwatchLogsConfiguration" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.property.cloudwatchLogsConfiguration"></a>

```csharp
public FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference CloudwatchLogsConfiguration { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference">FisExperimentTemplateLogConfigurationCloudwatchLogsConfigurationOutputReference</a>

---

##### `S3Configuration`<sup>Required</sup> <a name="S3Configuration" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.property.s3Configuration"></a>

```csharp
public FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference S3Configuration { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference">FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference</a>

---

##### `CloudwatchLogsConfigurationInput`<sup>Optional</sup> <a name="CloudwatchLogsConfigurationInput" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.property.cloudwatchLogsConfigurationInput"></a>

```csharp
public FisExperimentTemplateLogConfigurationCloudwatchLogsConfiguration CloudwatchLogsConfigurationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationCloudwatchLogsConfiguration">FisExperimentTemplateLogConfigurationCloudwatchLogsConfiguration</a>

---

##### `LogSchemaVersionInput`<sup>Optional</sup> <a name="LogSchemaVersionInput" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.property.logSchemaVersionInput"></a>

```csharp
public double LogSchemaVersionInput { get; }
```

- *Type:* double

---

##### `S3ConfigurationInput`<sup>Optional</sup> <a name="S3ConfigurationInput" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.property.s3ConfigurationInput"></a>

```csharp
public FisExperimentTemplateLogConfigurationS3Configuration S3ConfigurationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3Configuration">FisExperimentTemplateLogConfigurationS3Configuration</a>

---

##### `LogSchemaVersion`<sup>Required</sup> <a name="LogSchemaVersion" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.property.logSchemaVersion"></a>

```csharp
public double LogSchemaVersion { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationOutputReference.property.internalValue"></a>

```csharp
public FisExperimentTemplateLogConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfiguration">FisExperimentTemplateLogConfiguration</a>

---


### FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference <a name="FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.resetPrefix">ResetPrefix</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPrefix` <a name="ResetPrefix" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.resetPrefix"></a>

```csharp
private void ResetPrefix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.property.bucketNameInput">BucketNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.property.prefixInput">PrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.property.bucketName">BucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.property.prefix">Prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3Configuration">FisExperimentTemplateLogConfigurationS3Configuration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BucketNameInput`<sup>Optional</sup> <a name="BucketNameInput" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.property.bucketNameInput"></a>

```csharp
public string BucketNameInput { get; }
```

- *Type:* string

---

##### `PrefixInput`<sup>Optional</sup> <a name="PrefixInput" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.property.prefixInput"></a>

```csharp
public string PrefixInput { get; }
```

- *Type:* string

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.property.bucketName"></a>

```csharp
public string BucketName { get; }
```

- *Type:* string

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.property.prefix"></a>

```csharp
public string Prefix { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3ConfigurationOutputReference.property.internalValue"></a>

```csharp
public FisExperimentTemplateLogConfigurationS3Configuration InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateLogConfigurationS3Configuration">FisExperimentTemplateLogConfigurationS3Configuration</a>

---


### FisExperimentTemplateStopConditionList <a name="FisExperimentTemplateStopConditionList" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new FisExperimentTemplateStopConditionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionList.get"></a>

```csharp
private FisExperimentTemplateStopConditionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### FisExperimentTemplateStopConditionOutputReference <a name="FisExperimentTemplateStopConditionOutputReference" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new FisExperimentTemplateStopConditionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionOutputReference.property.sourceInput">SourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionOutputReference.property.source">Source</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionOutputReference.property.sourceInput"></a>

```csharp
public string SourceInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionOutputReference.property.source"></a>

```csharp
public string Source { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateStopConditionOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### FisExperimentTemplateTargetFilterList <a name="FisExperimentTemplateTargetFilterList" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new FisExperimentTemplateTargetFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterList.get"></a>

```csharp
private FisExperimentTemplateTargetFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### FisExperimentTemplateTargetFilterOutputReference <a name="FisExperimentTemplateTargetFilterOutputReference" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new FisExperimentTemplateTargetFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterOutputReference.property.pathInput">PathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterOutputReference.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterOutputReference.property.pathInput"></a>

```csharp
public string PathInput { get; }
```

- *Type:* string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterOutputReference.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### FisExperimentTemplateTargetList <a name="FisExperimentTemplateTargetList" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new FisExperimentTemplateTargetList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetList.get"></a>

```csharp
private FisExperimentTemplateTargetOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### FisExperimentTemplateTargetOutputReference <a name="FisExperimentTemplateTargetOutputReference" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new FisExperimentTemplateTargetOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.putResourceTag">PutResourceTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.resetParameters">ResetParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.resetResourceArns">ResetResourceArns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.resetResourceTag">ResetResourceTag</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutFilter` <a name="PutFilter" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.putFilter"></a>

```csharp
private void PutFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.putFilter.parameter.value"></a>

- *Type:* object

---

##### `PutResourceTag` <a name="PutResourceTag" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.putResourceTag"></a>

```csharp
private void PutResourceTag(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.putResourceTag.parameter.value"></a>

- *Type:* object

---

##### `ResetFilter` <a name="ResetFilter" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetParameters` <a name="ResetParameters" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.resetParameters"></a>

```csharp
private void ResetParameters()
```

##### `ResetResourceArns` <a name="ResetResourceArns" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.resetResourceArns"></a>

```csharp
private void ResetResourceArns()
```

##### `ResetResourceTag` <a name="ResetResourceTag" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.resetResourceTag"></a>

```csharp
private void ResetResourceTag()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.property.filter">Filter</a></code> | <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterList">FisExperimentTemplateTargetFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.property.resourceTag">ResourceTag</a></code> | <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagList">FisExperimentTemplateTargetResourceTagList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.property.filterInput">FilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.property.parametersInput">ParametersInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.property.resourceArnsInput">ResourceArnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.property.resourceTagInput">ResourceTagInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.property.resourceTypeInput">ResourceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.property.selectionModeInput">SelectionModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.property.parameters">Parameters</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.property.resourceArns">ResourceArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.property.resourceType">ResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.property.selectionMode">SelectionMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.property.filter"></a>

```csharp
public FisExperimentTemplateTargetFilterList Filter { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetFilterList">FisExperimentTemplateTargetFilterList</a>

---

##### `ResourceTag`<sup>Required</sup> <a name="ResourceTag" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.property.resourceTag"></a>

```csharp
public FisExperimentTemplateTargetResourceTagList ResourceTag { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagList">FisExperimentTemplateTargetResourceTagList</a>

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.property.filterInput"></a>

```csharp
public object FilterInput { get; }
```

- *Type:* object

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ParametersInput`<sup>Optional</sup> <a name="ParametersInput" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.property.parametersInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ParametersInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ResourceArnsInput`<sup>Optional</sup> <a name="ResourceArnsInput" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.property.resourceArnsInput"></a>

```csharp
public string[] ResourceArnsInput { get; }
```

- *Type:* string[]

---

##### `ResourceTagInput`<sup>Optional</sup> <a name="ResourceTagInput" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.property.resourceTagInput"></a>

```csharp
public object ResourceTagInput { get; }
```

- *Type:* object

---

##### `ResourceTypeInput`<sup>Optional</sup> <a name="ResourceTypeInput" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.property.resourceTypeInput"></a>

```csharp
public string ResourceTypeInput { get; }
```

- *Type:* string

---

##### `SelectionModeInput`<sup>Optional</sup> <a name="SelectionModeInput" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.property.selectionModeInput"></a>

```csharp
public string SelectionModeInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.property.parameters"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Parameters { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ResourceArns`<sup>Required</sup> <a name="ResourceArns" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.property.resourceArns"></a>

```csharp
public string[] ResourceArns { get; }
```

- *Type:* string[]

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.property.resourceType"></a>

```csharp
public string ResourceType { get; }
```

- *Type:* string

---

##### `SelectionMode`<sup>Required</sup> <a name="SelectionMode" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.property.selectionMode"></a>

```csharp
public string SelectionMode { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### FisExperimentTemplateTargetResourceTagList <a name="FisExperimentTemplateTargetResourceTagList" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new FisExperimentTemplateTargetResourceTagList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagList.get"></a>

```csharp
private FisExperimentTemplateTargetResourceTagOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### FisExperimentTemplateTargetResourceTagOutputReference <a name="FisExperimentTemplateTargetResourceTagOutputReference" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new FisExperimentTemplateTargetResourceTagOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTargetResourceTagOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### FisExperimentTemplateTimeoutsOutputReference <a name="FisExperimentTemplateTimeoutsOutputReference" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new FisExperimentTemplateTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.fisExperimentTemplate.FisExperimentTemplateTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



