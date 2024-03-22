# `emrcontainersJobTemplate` Submodule <a name="`emrcontainersJobTemplate` Submodule" id="@cdktf/provider-aws.emrcontainersJobTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EmrcontainersJobTemplate <a name="EmrcontainersJobTemplate" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/emrcontainers_job_template aws_emrcontainers_job_template}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EmrcontainersJobTemplate(Construct Scope, string Id, EmrcontainersJobTemplateConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateConfig">EmrcontainersJobTemplateConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateConfig">EmrcontainersJobTemplateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.putJobTemplateData">PutJobTemplateData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.resetKmsKeyArn">ResetKmsKeyArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutJobTemplateData` <a name="PutJobTemplateData" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.putJobTemplateData"></a>

```csharp
private void PutJobTemplateData(EmrcontainersJobTemplateJobTemplateData Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.putJobTemplateData.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateData">EmrcontainersJobTemplateJobTemplateData</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.putTimeouts"></a>

```csharp
private void PutTimeouts(EmrcontainersJobTemplateTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateTimeouts">EmrcontainersJobTemplateTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetKmsKeyArn` <a name="ResetKmsKeyArn" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.resetKmsKeyArn"></a>

```csharp
private void ResetKmsKeyArn()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a EmrcontainersJobTemplate resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

EmrcontainersJobTemplate.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

EmrcontainersJobTemplate.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

EmrcontainersJobTemplate.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

EmrcontainersJobTemplate.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a EmrcontainersJobTemplate resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the EmrcontainersJobTemplate to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing EmrcontainersJobTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/emrcontainers_job_template#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the EmrcontainersJobTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.property.jobTemplateData">JobTemplateData</a></code> | <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataOutputReference">EmrcontainersJobTemplateJobTemplateDataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateTimeoutsOutputReference">EmrcontainersJobTemplateTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.property.jobTemplateDataInput">JobTemplateDataInput</a></code> | <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateData">EmrcontainersJobTemplateJobTemplateData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.property.kmsKeyArnInput">KmsKeyArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.property.kmsKeyArn">KmsKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `JobTemplateData`<sup>Required</sup> <a name="JobTemplateData" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.property.jobTemplateData"></a>

```csharp
public EmrcontainersJobTemplateJobTemplateDataOutputReference JobTemplateData { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataOutputReference">EmrcontainersJobTemplateJobTemplateDataOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.property.timeouts"></a>

```csharp
public EmrcontainersJobTemplateTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateTimeoutsOutputReference">EmrcontainersJobTemplateTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `JobTemplateDataInput`<sup>Optional</sup> <a name="JobTemplateDataInput" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.property.jobTemplateDataInput"></a>

```csharp
public EmrcontainersJobTemplateJobTemplateData JobTemplateDataInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateData">EmrcontainersJobTemplateJobTemplateData</a>

---

##### `KmsKeyArnInput`<sup>Optional</sup> <a name="KmsKeyArnInput" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.property.kmsKeyArnInput"></a>

```csharp
public string KmsKeyArnInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `KmsKeyArn`<sup>Required</sup> <a name="KmsKeyArn" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.property.kmsKeyArn"></a>

```csharp
public string KmsKeyArn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplate.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### EmrcontainersJobTemplateConfig <a name="EmrcontainersJobTemplateConfig" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EmrcontainersJobTemplateConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    EmrcontainersJobTemplateJobTemplateData JobTemplateData,
    string Name,
    string Id = null,
    string KmsKeyArn = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null,
    EmrcontainersJobTemplateTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateConfig.property.jobTemplateData">JobTemplateData</a></code> | <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateData">EmrcontainersJobTemplateJobTemplateData</a></code> | job_template_data block. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/emrcontainers_job_template#name EmrcontainersJobTemplate#name}. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/emrcontainers_job_template#id EmrcontainersJobTemplate#id}. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateConfig.property.kmsKeyArn">KmsKeyArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/emrcontainers_job_template#kms_key_arn EmrcontainersJobTemplate#kms_key_arn}. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/emrcontainers_job_template#tags EmrcontainersJobTemplate#tags}. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/emrcontainers_job_template#tags_all EmrcontainersJobTemplate#tags_all}. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateTimeouts">EmrcontainersJobTemplateTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `JobTemplateData`<sup>Required</sup> <a name="JobTemplateData" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateConfig.property.jobTemplateData"></a>

```csharp
public EmrcontainersJobTemplateJobTemplateData JobTemplateData { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateData">EmrcontainersJobTemplateJobTemplateData</a>

job_template_data block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/emrcontainers_job_template#job_template_data EmrcontainersJobTemplate#job_template_data}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/emrcontainers_job_template#name EmrcontainersJobTemplate#name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/emrcontainers_job_template#id EmrcontainersJobTemplate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `KmsKeyArn`<sup>Optional</sup> <a name="KmsKeyArn" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateConfig.property.kmsKeyArn"></a>

```csharp
public string KmsKeyArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/emrcontainers_job_template#kms_key_arn EmrcontainersJobTemplate#kms_key_arn}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/emrcontainers_job_template#tags EmrcontainersJobTemplate#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/emrcontainers_job_template#tags_all EmrcontainersJobTemplate#tags_all}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateConfig.property.timeouts"></a>

```csharp
public EmrcontainersJobTemplateTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateTimeouts">EmrcontainersJobTemplateTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/emrcontainers_job_template#timeouts EmrcontainersJobTemplate#timeouts}

---

### EmrcontainersJobTemplateJobTemplateData <a name="EmrcontainersJobTemplateJobTemplateData" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateData"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateData.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EmrcontainersJobTemplateJobTemplateData {
    string ExecutionRoleArn,
    EmrcontainersJobTemplateJobTemplateDataJobDriver JobDriver,
    string ReleaseLabel,
    EmrcontainersJobTemplateJobTemplateDataConfigurationOverrides ConfigurationOverrides = null,
    System.Collections.Generic.IDictionary<string, string> JobTags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateData.property.executionRoleArn">ExecutionRoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/emrcontainers_job_template#execution_role_arn EmrcontainersJobTemplate#execution_role_arn}. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateData.property.jobDriver">JobDriver</a></code> | <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriver">EmrcontainersJobTemplateJobTemplateDataJobDriver</a></code> | job_driver block. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateData.property.releaseLabel">ReleaseLabel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/emrcontainers_job_template#release_label EmrcontainersJobTemplate#release_label}. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateData.property.configurationOverrides">ConfigurationOverrides</a></code> | <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverrides">EmrcontainersJobTemplateJobTemplateDataConfigurationOverrides</a></code> | configuration_overrides block. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateData.property.jobTags">JobTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/emrcontainers_job_template#job_tags EmrcontainersJobTemplate#job_tags}. |

---

##### `ExecutionRoleArn`<sup>Required</sup> <a name="ExecutionRoleArn" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateData.property.executionRoleArn"></a>

```csharp
public string ExecutionRoleArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/emrcontainers_job_template#execution_role_arn EmrcontainersJobTemplate#execution_role_arn}.

---

##### `JobDriver`<sup>Required</sup> <a name="JobDriver" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateData.property.jobDriver"></a>

```csharp
public EmrcontainersJobTemplateJobTemplateDataJobDriver JobDriver { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriver">EmrcontainersJobTemplateJobTemplateDataJobDriver</a>

job_driver block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/emrcontainers_job_template#job_driver EmrcontainersJobTemplate#job_driver}

---

##### `ReleaseLabel`<sup>Required</sup> <a name="ReleaseLabel" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateData.property.releaseLabel"></a>

```csharp
public string ReleaseLabel { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/emrcontainers_job_template#release_label EmrcontainersJobTemplate#release_label}.

---

##### `ConfigurationOverrides`<sup>Optional</sup> <a name="ConfigurationOverrides" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateData.property.configurationOverrides"></a>

```csharp
public EmrcontainersJobTemplateJobTemplateDataConfigurationOverrides ConfigurationOverrides { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverrides">EmrcontainersJobTemplateJobTemplateDataConfigurationOverrides</a>

configuration_overrides block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/emrcontainers_job_template#configuration_overrides EmrcontainersJobTemplate#configuration_overrides}

---

##### `JobTags`<sup>Optional</sup> <a name="JobTags" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateData.property.jobTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> JobTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/emrcontainers_job_template#job_tags EmrcontainersJobTemplate#job_tags}.

---

### EmrcontainersJobTemplateJobTemplateDataConfigurationOverrides <a name="EmrcontainersJobTemplateJobTemplateDataConfigurationOverrides" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverrides"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverrides.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EmrcontainersJobTemplateJobTemplateDataConfigurationOverrides {
    object ApplicationConfiguration = null,
    EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfiguration MonitoringConfiguration = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverrides.property.applicationConfiguration">ApplicationConfiguration</a></code> | <code>object</code> | application_configuration block. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverrides.property.monitoringConfiguration">MonitoringConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfiguration">EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfiguration</a></code> | monitoring_configuration block. |

---

##### `ApplicationConfiguration`<sup>Optional</sup> <a name="ApplicationConfiguration" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverrides.property.applicationConfiguration"></a>

```csharp
public object ApplicationConfiguration { get; set; }
```

- *Type:* object

application_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/emrcontainers_job_template#application_configuration EmrcontainersJobTemplate#application_configuration}

---

##### `MonitoringConfiguration`<sup>Optional</sup> <a name="MonitoringConfiguration" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverrides.property.monitoringConfiguration"></a>

```csharp
public EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfiguration MonitoringConfiguration { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfiguration">EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfiguration</a>

monitoring_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/emrcontainers_job_template#monitoring_configuration EmrcontainersJobTemplate#monitoring_configuration}

---

### EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfiguration <a name="EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfiguration" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfiguration {
    string Classification,
    object Configurations = null,
    System.Collections.Generic.IDictionary<string, string> Properties = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfiguration.property.classification">Classification</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/emrcontainers_job_template#classification EmrcontainersJobTemplate#classification}. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfiguration.property.configurations">Configurations</a></code> | <code>object</code> | configurations block. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfiguration.property.properties">Properties</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/emrcontainers_job_template#properties EmrcontainersJobTemplate#properties}. |

---

##### `Classification`<sup>Required</sup> <a name="Classification" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfiguration.property.classification"></a>

```csharp
public string Classification { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/emrcontainers_job_template#classification EmrcontainersJobTemplate#classification}.

---

##### `Configurations`<sup>Optional</sup> <a name="Configurations" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfiguration.property.configurations"></a>

```csharp
public object Configurations { get; set; }
```

- *Type:* object

configurations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/emrcontainers_job_template#configurations EmrcontainersJobTemplate#configurations}

---

##### `Properties`<sup>Optional</sup> <a name="Properties" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfiguration.property.properties"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Properties { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/emrcontainers_job_template#properties EmrcontainersJobTemplate#properties}.

---

### EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurations <a name="EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurations" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurations.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurations {
    string Classification = null,
    System.Collections.Generic.IDictionary<string, string> Properties = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurations.property.classification">Classification</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/emrcontainers_job_template#classification EmrcontainersJobTemplate#classification}. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurations.property.properties">Properties</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/emrcontainers_job_template#properties EmrcontainersJobTemplate#properties}. |

---

##### `Classification`<sup>Optional</sup> <a name="Classification" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurations.property.classification"></a>

```csharp
public string Classification { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/emrcontainers_job_template#classification EmrcontainersJobTemplate#classification}.

---

##### `Properties`<sup>Optional</sup> <a name="Properties" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurations.property.properties"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Properties { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/emrcontainers_job_template#properties EmrcontainersJobTemplate#properties}.

---

### EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfiguration <a name="EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfiguration" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfiguration {
    EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfiguration CloudWatchMonitoringConfiguration = null,
    string PersistentAppUi = null,
    EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfiguration S3MonitoringConfiguration = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfiguration.property.cloudWatchMonitoringConfiguration">CloudWatchMonitoringConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfiguration">EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfiguration</a></code> | cloud_watch_monitoring_configuration block. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfiguration.property.persistentAppUi">PersistentAppUi</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/emrcontainers_job_template#persistent_app_ui EmrcontainersJobTemplate#persistent_app_ui}. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfiguration.property.s3MonitoringConfiguration">S3MonitoringConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfiguration">EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfiguration</a></code> | s3_monitoring_configuration block. |

---

##### `CloudWatchMonitoringConfiguration`<sup>Optional</sup> <a name="CloudWatchMonitoringConfiguration" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfiguration.property.cloudWatchMonitoringConfiguration"></a>

```csharp
public EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfiguration CloudWatchMonitoringConfiguration { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfiguration">EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfiguration</a>

cloud_watch_monitoring_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/emrcontainers_job_template#cloud_watch_monitoring_configuration EmrcontainersJobTemplate#cloud_watch_monitoring_configuration}

---

##### `PersistentAppUi`<sup>Optional</sup> <a name="PersistentAppUi" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfiguration.property.persistentAppUi"></a>

```csharp
public string PersistentAppUi { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/emrcontainers_job_template#persistent_app_ui EmrcontainersJobTemplate#persistent_app_ui}.

---

##### `S3MonitoringConfiguration`<sup>Optional</sup> <a name="S3MonitoringConfiguration" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfiguration.property.s3MonitoringConfiguration"></a>

```csharp
public EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfiguration S3MonitoringConfiguration { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfiguration">EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfiguration</a>

s3_monitoring_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/emrcontainers_job_template#s3_monitoring_configuration EmrcontainersJobTemplate#s3_monitoring_configuration}

---

### EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfiguration <a name="EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfiguration" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfiguration {
    string LogGroupName,
    string LogStreamNamePrefix = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfiguration.property.logGroupName">LogGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/emrcontainers_job_template#log_group_name EmrcontainersJobTemplate#log_group_name}. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfiguration.property.logStreamNamePrefix">LogStreamNamePrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/emrcontainers_job_template#log_stream_name_prefix EmrcontainersJobTemplate#log_stream_name_prefix}. |

---

##### `LogGroupName`<sup>Required</sup> <a name="LogGroupName" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfiguration.property.logGroupName"></a>

```csharp
public string LogGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/emrcontainers_job_template#log_group_name EmrcontainersJobTemplate#log_group_name}.

---

##### `LogStreamNamePrefix`<sup>Optional</sup> <a name="LogStreamNamePrefix" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfiguration.property.logStreamNamePrefix"></a>

```csharp
public string LogStreamNamePrefix { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/emrcontainers_job_template#log_stream_name_prefix EmrcontainersJobTemplate#log_stream_name_prefix}.

---

### EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfiguration <a name="EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfiguration" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfiguration {
    string LogUri
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfiguration.property.logUri">LogUri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/emrcontainers_job_template#log_uri EmrcontainersJobTemplate#log_uri}. |

---

##### `LogUri`<sup>Required</sup> <a name="LogUri" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfiguration.property.logUri"></a>

```csharp
public string LogUri { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/emrcontainers_job_template#log_uri EmrcontainersJobTemplate#log_uri}.

---

### EmrcontainersJobTemplateJobTemplateDataJobDriver <a name="EmrcontainersJobTemplateJobTemplateDataJobDriver" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriver"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriver.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EmrcontainersJobTemplateJobTemplateDataJobDriver {
    EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriver SparkSqlJobDriver = null,
    EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriver SparkSubmitJobDriver = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriver.property.sparkSqlJobDriver">SparkSqlJobDriver</a></code> | <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriver">EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriver</a></code> | spark_sql_job_driver block. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriver.property.sparkSubmitJobDriver">SparkSubmitJobDriver</a></code> | <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriver">EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriver</a></code> | spark_submit_job_driver block. |

---

##### `SparkSqlJobDriver`<sup>Optional</sup> <a name="SparkSqlJobDriver" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriver.property.sparkSqlJobDriver"></a>

```csharp
public EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriver SparkSqlJobDriver { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriver">EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriver</a>

spark_sql_job_driver block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/emrcontainers_job_template#spark_sql_job_driver EmrcontainersJobTemplate#spark_sql_job_driver}

---

##### `SparkSubmitJobDriver`<sup>Optional</sup> <a name="SparkSubmitJobDriver" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriver.property.sparkSubmitJobDriver"></a>

```csharp
public EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriver SparkSubmitJobDriver { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriver">EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriver</a>

spark_submit_job_driver block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/emrcontainers_job_template#spark_submit_job_driver EmrcontainersJobTemplate#spark_submit_job_driver}

---

### EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriver <a name="EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriver" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriver"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriver.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriver {
    string EntryPoint = null,
    string SparkSqlParameters = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriver.property.entryPoint">EntryPoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/emrcontainers_job_template#entry_point EmrcontainersJobTemplate#entry_point}. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriver.property.sparkSqlParameters">SparkSqlParameters</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/emrcontainers_job_template#spark_sql_parameters EmrcontainersJobTemplate#spark_sql_parameters}. |

---

##### `EntryPoint`<sup>Optional</sup> <a name="EntryPoint" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriver.property.entryPoint"></a>

```csharp
public string EntryPoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/emrcontainers_job_template#entry_point EmrcontainersJobTemplate#entry_point}.

---

##### `SparkSqlParameters`<sup>Optional</sup> <a name="SparkSqlParameters" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriver.property.sparkSqlParameters"></a>

```csharp
public string SparkSqlParameters { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/emrcontainers_job_template#spark_sql_parameters EmrcontainersJobTemplate#spark_sql_parameters}.

---

### EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriver <a name="EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriver" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriver"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriver.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriver {
    string EntryPoint,
    string[] EntryPointArguments = null,
    string SparkSubmitParameters = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriver.property.entryPoint">EntryPoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/emrcontainers_job_template#entry_point EmrcontainersJobTemplate#entry_point}. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriver.property.entryPointArguments">EntryPointArguments</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/emrcontainers_job_template#entry_point_arguments EmrcontainersJobTemplate#entry_point_arguments}. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriver.property.sparkSubmitParameters">SparkSubmitParameters</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/emrcontainers_job_template#spark_submit_parameters EmrcontainersJobTemplate#spark_submit_parameters}. |

---

##### `EntryPoint`<sup>Required</sup> <a name="EntryPoint" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriver.property.entryPoint"></a>

```csharp
public string EntryPoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/emrcontainers_job_template#entry_point EmrcontainersJobTemplate#entry_point}.

---

##### `EntryPointArguments`<sup>Optional</sup> <a name="EntryPointArguments" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriver.property.entryPointArguments"></a>

```csharp
public string[] EntryPointArguments { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/emrcontainers_job_template#entry_point_arguments EmrcontainersJobTemplate#entry_point_arguments}.

---

##### `SparkSubmitParameters`<sup>Optional</sup> <a name="SparkSubmitParameters" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriver.property.sparkSubmitParameters"></a>

```csharp
public string SparkSubmitParameters { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/emrcontainers_job_template#spark_submit_parameters EmrcontainersJobTemplate#spark_submit_parameters}.

---

### EmrcontainersJobTemplateTimeouts <a name="EmrcontainersJobTemplateTimeouts" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EmrcontainersJobTemplateTimeouts {
    string Delete = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/emrcontainers_job_template#delete EmrcontainersJobTemplate#delete}. |

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/emrcontainers_job_template#delete EmrcontainersJobTemplate#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsList <a name="EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsList" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsList.get"></a>

```csharp
private EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsOutputReference <a name="EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsOutputReference" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsOutputReference.resetClassification">ResetClassification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsOutputReference.resetProperties">ResetProperties</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetClassification` <a name="ResetClassification" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsOutputReference.resetClassification"></a>

```csharp
private void ResetClassification()
```

##### `ResetProperties` <a name="ResetProperties" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsOutputReference.resetProperties"></a>

```csharp
private void ResetProperties()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsOutputReference.property.classificationInput">ClassificationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsOutputReference.property.propertiesInput">PropertiesInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsOutputReference.property.classification">Classification</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsOutputReference.property.properties">Properties</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ClassificationInput`<sup>Optional</sup> <a name="ClassificationInput" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsOutputReference.property.classificationInput"></a>

```csharp
public string ClassificationInput { get; }
```

- *Type:* string

---

##### `PropertiesInput`<sup>Optional</sup> <a name="PropertiesInput" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsOutputReference.property.propertiesInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> PropertiesInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Classification`<sup>Required</sup> <a name="Classification" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsOutputReference.property.classification"></a>

```csharp
public string Classification { get; }
```

- *Type:* string

---

##### `Properties`<sup>Required</sup> <a name="Properties" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsOutputReference.property.properties"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Properties { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationList <a name="EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationList" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationList.get"></a>

```csharp
private EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationOutputReference <a name="EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationOutputReference" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationOutputReference.putConfigurations">PutConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationOutputReference.resetConfigurations">ResetConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationOutputReference.resetProperties">ResetProperties</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutConfigurations` <a name="PutConfigurations" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationOutputReference.putConfigurations"></a>

```csharp
private void PutConfigurations(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationOutputReference.putConfigurations.parameter.value"></a>

- *Type:* object

---

##### `ResetConfigurations` <a name="ResetConfigurations" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationOutputReference.resetConfigurations"></a>

```csharp
private void ResetConfigurations()
```

##### `ResetProperties` <a name="ResetProperties" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationOutputReference.resetProperties"></a>

```csharp
private void ResetProperties()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationOutputReference.property.configurations">Configurations</a></code> | <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsList">EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationOutputReference.property.classificationInput">ClassificationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationOutputReference.property.configurationsInput">ConfigurationsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationOutputReference.property.propertiesInput">PropertiesInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationOutputReference.property.classification">Classification</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationOutputReference.property.properties">Properties</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Configurations`<sup>Required</sup> <a name="Configurations" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationOutputReference.property.configurations"></a>

```csharp
public EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsList Configurations { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsList">EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfigurationsList</a>

---

##### `ClassificationInput`<sup>Optional</sup> <a name="ClassificationInput" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationOutputReference.property.classificationInput"></a>

```csharp
public string ClassificationInput { get; }
```

- *Type:* string

---

##### `ConfigurationsInput`<sup>Optional</sup> <a name="ConfigurationsInput" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationOutputReference.property.configurationsInput"></a>

```csharp
public object ConfigurationsInput { get; }
```

- *Type:* object

---

##### `PropertiesInput`<sup>Optional</sup> <a name="PropertiesInput" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationOutputReference.property.propertiesInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> PropertiesInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Classification`<sup>Required</sup> <a name="Classification" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationOutputReference.property.classification"></a>

```csharp
public string Classification { get; }
```

- *Type:* string

---

##### `Properties`<sup>Required</sup> <a name="Properties" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationOutputReference.property.properties"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Properties { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfigurationOutputReference <a name="EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfigurationOutputReference" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfigurationOutputReference.resetLogStreamNamePrefix">ResetLogStreamNamePrefix</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLogStreamNamePrefix` <a name="ResetLogStreamNamePrefix" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfigurationOutputReference.resetLogStreamNamePrefix"></a>

```csharp
private void ResetLogStreamNamePrefix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfigurationOutputReference.property.logGroupNameInput">LogGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfigurationOutputReference.property.logStreamNamePrefixInput">LogStreamNamePrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfigurationOutputReference.property.logGroupName">LogGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfigurationOutputReference.property.logStreamNamePrefix">LogStreamNamePrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfiguration">EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LogGroupNameInput`<sup>Optional</sup> <a name="LogGroupNameInput" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfigurationOutputReference.property.logGroupNameInput"></a>

```csharp
public string LogGroupNameInput { get; }
```

- *Type:* string

---

##### `LogStreamNamePrefixInput`<sup>Optional</sup> <a name="LogStreamNamePrefixInput" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfigurationOutputReference.property.logStreamNamePrefixInput"></a>

```csharp
public string LogStreamNamePrefixInput { get; }
```

- *Type:* string

---

##### `LogGroupName`<sup>Required</sup> <a name="LogGroupName" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfigurationOutputReference.property.logGroupName"></a>

```csharp
public string LogGroupName { get; }
```

- *Type:* string

---

##### `LogStreamNamePrefix`<sup>Required</sup> <a name="LogStreamNamePrefix" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfigurationOutputReference.property.logStreamNamePrefix"></a>

```csharp
public string LogStreamNamePrefix { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfigurationOutputReference.property.internalValue"></a>

```csharp
public EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfiguration">EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfiguration</a>

---


### EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference <a name="EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference.putCloudWatchMonitoringConfiguration">PutCloudWatchMonitoringConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference.putS3MonitoringConfiguration">PutS3MonitoringConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference.resetCloudWatchMonitoringConfiguration">ResetCloudWatchMonitoringConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference.resetPersistentAppUi">ResetPersistentAppUi</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference.resetS3MonitoringConfiguration">ResetS3MonitoringConfiguration</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCloudWatchMonitoringConfiguration` <a name="PutCloudWatchMonitoringConfiguration" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference.putCloudWatchMonitoringConfiguration"></a>

```csharp
private void PutCloudWatchMonitoringConfiguration(EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference.putCloudWatchMonitoringConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfiguration">EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfiguration</a>

---

##### `PutS3MonitoringConfiguration` <a name="PutS3MonitoringConfiguration" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference.putS3MonitoringConfiguration"></a>

```csharp
private void PutS3MonitoringConfiguration(EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference.putS3MonitoringConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfiguration">EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfiguration</a>

---

##### `ResetCloudWatchMonitoringConfiguration` <a name="ResetCloudWatchMonitoringConfiguration" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference.resetCloudWatchMonitoringConfiguration"></a>

```csharp
private void ResetCloudWatchMonitoringConfiguration()
```

##### `ResetPersistentAppUi` <a name="ResetPersistentAppUi" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference.resetPersistentAppUi"></a>

```csharp
private void ResetPersistentAppUi()
```

##### `ResetS3MonitoringConfiguration` <a name="ResetS3MonitoringConfiguration" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference.resetS3MonitoringConfiguration"></a>

```csharp
private void ResetS3MonitoringConfiguration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference.property.cloudWatchMonitoringConfiguration">CloudWatchMonitoringConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfigurationOutputReference">EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference.property.s3MonitoringConfiguration">S3MonitoringConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfigurationOutputReference">EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference.property.cloudWatchMonitoringConfigurationInput">CloudWatchMonitoringConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfiguration">EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference.property.persistentAppUiInput">PersistentAppUiInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference.property.s3MonitoringConfigurationInput">S3MonitoringConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfiguration">EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference.property.persistentAppUi">PersistentAppUi</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfiguration">EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CloudWatchMonitoringConfiguration`<sup>Required</sup> <a name="CloudWatchMonitoringConfiguration" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference.property.cloudWatchMonitoringConfiguration"></a>

```csharp
public EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfigurationOutputReference CloudWatchMonitoringConfiguration { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfigurationOutputReference">EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfigurationOutputReference</a>

---

##### `S3MonitoringConfiguration`<sup>Required</sup> <a name="S3MonitoringConfiguration" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference.property.s3MonitoringConfiguration"></a>

```csharp
public EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfigurationOutputReference S3MonitoringConfiguration { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfigurationOutputReference">EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfigurationOutputReference</a>

---

##### `CloudWatchMonitoringConfigurationInput`<sup>Optional</sup> <a name="CloudWatchMonitoringConfigurationInput" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference.property.cloudWatchMonitoringConfigurationInput"></a>

```csharp
public EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfiguration CloudWatchMonitoringConfigurationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfiguration">EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationCloudWatchMonitoringConfiguration</a>

---

##### `PersistentAppUiInput`<sup>Optional</sup> <a name="PersistentAppUiInput" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference.property.persistentAppUiInput"></a>

```csharp
public string PersistentAppUiInput { get; }
```

- *Type:* string

---

##### `S3MonitoringConfigurationInput`<sup>Optional</sup> <a name="S3MonitoringConfigurationInput" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference.property.s3MonitoringConfigurationInput"></a>

```csharp
public EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfiguration S3MonitoringConfigurationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfiguration">EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfiguration</a>

---

##### `PersistentAppUi`<sup>Required</sup> <a name="PersistentAppUi" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference.property.persistentAppUi"></a>

```csharp
public string PersistentAppUi { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference.property.internalValue"></a>

```csharp
public EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfiguration">EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfiguration</a>

---


### EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfigurationOutputReference <a name="EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfigurationOutputReference" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfigurationOutputReference.property.logUriInput">LogUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfigurationOutputReference.property.logUri">LogUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfiguration">EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LogUriInput`<sup>Optional</sup> <a name="LogUriInput" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfigurationOutputReference.property.logUriInput"></a>

```csharp
public string LogUriInput { get; }
```

- *Type:* string

---

##### `LogUri`<sup>Required</sup> <a name="LogUri" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfigurationOutputReference.property.logUri"></a>

```csharp
public string LogUri { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfigurationOutputReference.property.internalValue"></a>

```csharp
public EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfiguration">EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationS3MonitoringConfiguration</a>

---


### EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesOutputReference <a name="EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesOutputReference" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesOutputReference.putApplicationConfiguration">PutApplicationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesOutputReference.putMonitoringConfiguration">PutMonitoringConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesOutputReference.resetApplicationConfiguration">ResetApplicationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesOutputReference.resetMonitoringConfiguration">ResetMonitoringConfiguration</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutApplicationConfiguration` <a name="PutApplicationConfiguration" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesOutputReference.putApplicationConfiguration"></a>

```csharp
private void PutApplicationConfiguration(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesOutputReference.putApplicationConfiguration.parameter.value"></a>

- *Type:* object

---

##### `PutMonitoringConfiguration` <a name="PutMonitoringConfiguration" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesOutputReference.putMonitoringConfiguration"></a>

```csharp
private void PutMonitoringConfiguration(EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesOutputReference.putMonitoringConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfiguration">EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfiguration</a>

---

##### `ResetApplicationConfiguration` <a name="ResetApplicationConfiguration" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesOutputReference.resetApplicationConfiguration"></a>

```csharp
private void ResetApplicationConfiguration()
```

##### `ResetMonitoringConfiguration` <a name="ResetMonitoringConfiguration" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesOutputReference.resetMonitoringConfiguration"></a>

```csharp
private void ResetMonitoringConfiguration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesOutputReference.property.applicationConfiguration">ApplicationConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationList">EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesOutputReference.property.monitoringConfiguration">MonitoringConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference">EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesOutputReference.property.applicationConfigurationInput">ApplicationConfigurationInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesOutputReference.property.monitoringConfigurationInput">MonitoringConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfiguration">EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverrides">EmrcontainersJobTemplateJobTemplateDataConfigurationOverrides</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ApplicationConfiguration`<sup>Required</sup> <a name="ApplicationConfiguration" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesOutputReference.property.applicationConfiguration"></a>

```csharp
public EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationList ApplicationConfiguration { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationList">EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationList</a>

---

##### `MonitoringConfiguration`<sup>Required</sup> <a name="MonitoringConfiguration" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesOutputReference.property.monitoringConfiguration"></a>

```csharp
public EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference MonitoringConfiguration { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference">EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfigurationOutputReference</a>

---

##### `ApplicationConfigurationInput`<sup>Optional</sup> <a name="ApplicationConfigurationInput" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesOutputReference.property.applicationConfigurationInput"></a>

```csharp
public object ApplicationConfigurationInput { get; }
```

- *Type:* object

---

##### `MonitoringConfigurationInput`<sup>Optional</sup> <a name="MonitoringConfigurationInput" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesOutputReference.property.monitoringConfigurationInput"></a>

```csharp
public EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfiguration MonitoringConfigurationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfiguration">EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesMonitoringConfiguration</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesOutputReference.property.internalValue"></a>

```csharp
public EmrcontainersJobTemplateJobTemplateDataConfigurationOverrides InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverrides">EmrcontainersJobTemplateJobTemplateDataConfigurationOverrides</a>

---


### EmrcontainersJobTemplateJobTemplateDataJobDriverOutputReference <a name="EmrcontainersJobTemplateJobTemplateDataJobDriverOutputReference" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EmrcontainersJobTemplateJobTemplateDataJobDriverOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverOutputReference.putSparkSqlJobDriver">PutSparkSqlJobDriver</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverOutputReference.putSparkSubmitJobDriver">PutSparkSubmitJobDriver</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverOutputReference.resetSparkSqlJobDriver">ResetSparkSqlJobDriver</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverOutputReference.resetSparkSubmitJobDriver">ResetSparkSubmitJobDriver</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSparkSqlJobDriver` <a name="PutSparkSqlJobDriver" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverOutputReference.putSparkSqlJobDriver"></a>

```csharp
private void PutSparkSqlJobDriver(EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriver Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverOutputReference.putSparkSqlJobDriver.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriver">EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriver</a>

---

##### `PutSparkSubmitJobDriver` <a name="PutSparkSubmitJobDriver" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverOutputReference.putSparkSubmitJobDriver"></a>

```csharp
private void PutSparkSubmitJobDriver(EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriver Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverOutputReference.putSparkSubmitJobDriver.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriver">EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriver</a>

---

##### `ResetSparkSqlJobDriver` <a name="ResetSparkSqlJobDriver" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverOutputReference.resetSparkSqlJobDriver"></a>

```csharp
private void ResetSparkSqlJobDriver()
```

##### `ResetSparkSubmitJobDriver` <a name="ResetSparkSubmitJobDriver" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverOutputReference.resetSparkSubmitJobDriver"></a>

```csharp
private void ResetSparkSubmitJobDriver()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverOutputReference.property.sparkSqlJobDriver">SparkSqlJobDriver</a></code> | <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriverOutputReference">EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriverOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverOutputReference.property.sparkSubmitJobDriver">SparkSubmitJobDriver</a></code> | <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriverOutputReference">EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriverOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverOutputReference.property.sparkSqlJobDriverInput">SparkSqlJobDriverInput</a></code> | <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriver">EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriver</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverOutputReference.property.sparkSubmitJobDriverInput">SparkSubmitJobDriverInput</a></code> | <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriver">EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriver</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriver">EmrcontainersJobTemplateJobTemplateDataJobDriver</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SparkSqlJobDriver`<sup>Required</sup> <a name="SparkSqlJobDriver" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverOutputReference.property.sparkSqlJobDriver"></a>

```csharp
public EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriverOutputReference SparkSqlJobDriver { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriverOutputReference">EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriverOutputReference</a>

---

##### `SparkSubmitJobDriver`<sup>Required</sup> <a name="SparkSubmitJobDriver" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverOutputReference.property.sparkSubmitJobDriver"></a>

```csharp
public EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriverOutputReference SparkSubmitJobDriver { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriverOutputReference">EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriverOutputReference</a>

---

##### `SparkSqlJobDriverInput`<sup>Optional</sup> <a name="SparkSqlJobDriverInput" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverOutputReference.property.sparkSqlJobDriverInput"></a>

```csharp
public EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriver SparkSqlJobDriverInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriver">EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriver</a>

---

##### `SparkSubmitJobDriverInput`<sup>Optional</sup> <a name="SparkSubmitJobDriverInput" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverOutputReference.property.sparkSubmitJobDriverInput"></a>

```csharp
public EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriver SparkSubmitJobDriverInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriver">EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriver</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverOutputReference.property.internalValue"></a>

```csharp
public EmrcontainersJobTemplateJobTemplateDataJobDriver InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriver">EmrcontainersJobTemplateJobTemplateDataJobDriver</a>

---


### EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriverOutputReference <a name="EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriverOutputReference" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriverOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriverOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriverOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriverOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriverOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriverOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriverOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriverOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriverOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriverOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriverOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriverOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriverOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriverOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriverOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriverOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriverOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriverOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriverOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriverOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriverOutputReference.resetEntryPoint">ResetEntryPoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriverOutputReference.resetSparkSqlParameters">ResetSparkSqlParameters</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriverOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriverOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriverOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriverOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriverOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriverOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriverOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriverOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriverOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriverOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriverOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriverOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriverOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriverOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriverOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriverOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriverOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriverOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriverOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriverOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriverOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriverOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriverOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriverOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEntryPoint` <a name="ResetEntryPoint" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriverOutputReference.resetEntryPoint"></a>

```csharp
private void ResetEntryPoint()
```

##### `ResetSparkSqlParameters` <a name="ResetSparkSqlParameters" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriverOutputReference.resetSparkSqlParameters"></a>

```csharp
private void ResetSparkSqlParameters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriverOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriverOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriverOutputReference.property.entryPointInput">EntryPointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriverOutputReference.property.sparkSqlParametersInput">SparkSqlParametersInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriverOutputReference.property.entryPoint">EntryPoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriverOutputReference.property.sparkSqlParameters">SparkSqlParameters</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriverOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriver">EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriver</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriverOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriverOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EntryPointInput`<sup>Optional</sup> <a name="EntryPointInput" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriverOutputReference.property.entryPointInput"></a>

```csharp
public string EntryPointInput { get; }
```

- *Type:* string

---

##### `SparkSqlParametersInput`<sup>Optional</sup> <a name="SparkSqlParametersInput" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriverOutputReference.property.sparkSqlParametersInput"></a>

```csharp
public string SparkSqlParametersInput { get; }
```

- *Type:* string

---

##### `EntryPoint`<sup>Required</sup> <a name="EntryPoint" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriverOutputReference.property.entryPoint"></a>

```csharp
public string EntryPoint { get; }
```

- *Type:* string

---

##### `SparkSqlParameters`<sup>Required</sup> <a name="SparkSqlParameters" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriverOutputReference.property.sparkSqlParameters"></a>

```csharp
public string SparkSqlParameters { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriverOutputReference.property.internalValue"></a>

```csharp
public EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriver InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriver">EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSqlJobDriver</a>

---


### EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriverOutputReference <a name="EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriverOutputReference" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriverOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriverOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriverOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriverOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriverOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriverOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriverOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriverOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriverOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriverOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriverOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriverOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriverOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriverOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriverOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriverOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriverOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriverOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriverOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriverOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriverOutputReference.resetEntryPointArguments">ResetEntryPointArguments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriverOutputReference.resetSparkSubmitParameters">ResetSparkSubmitParameters</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriverOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriverOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriverOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriverOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriverOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriverOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriverOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriverOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriverOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriverOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriverOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriverOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriverOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriverOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriverOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriverOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriverOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriverOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriverOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriverOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriverOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriverOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriverOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriverOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEntryPointArguments` <a name="ResetEntryPointArguments" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriverOutputReference.resetEntryPointArguments"></a>

```csharp
private void ResetEntryPointArguments()
```

##### `ResetSparkSubmitParameters` <a name="ResetSparkSubmitParameters" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriverOutputReference.resetSparkSubmitParameters"></a>

```csharp
private void ResetSparkSubmitParameters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriverOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriverOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriverOutputReference.property.entryPointArgumentsInput">EntryPointArgumentsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriverOutputReference.property.entryPointInput">EntryPointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriverOutputReference.property.sparkSubmitParametersInput">SparkSubmitParametersInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriverOutputReference.property.entryPoint">EntryPoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriverOutputReference.property.entryPointArguments">EntryPointArguments</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriverOutputReference.property.sparkSubmitParameters">SparkSubmitParameters</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriverOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriver">EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriver</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriverOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriverOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EntryPointArgumentsInput`<sup>Optional</sup> <a name="EntryPointArgumentsInput" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriverOutputReference.property.entryPointArgumentsInput"></a>

```csharp
public string[] EntryPointArgumentsInput { get; }
```

- *Type:* string[]

---

##### `EntryPointInput`<sup>Optional</sup> <a name="EntryPointInput" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriverOutputReference.property.entryPointInput"></a>

```csharp
public string EntryPointInput { get; }
```

- *Type:* string

---

##### `SparkSubmitParametersInput`<sup>Optional</sup> <a name="SparkSubmitParametersInput" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriverOutputReference.property.sparkSubmitParametersInput"></a>

```csharp
public string SparkSubmitParametersInput { get; }
```

- *Type:* string

---

##### `EntryPoint`<sup>Required</sup> <a name="EntryPoint" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriverOutputReference.property.entryPoint"></a>

```csharp
public string EntryPoint { get; }
```

- *Type:* string

---

##### `EntryPointArguments`<sup>Required</sup> <a name="EntryPointArguments" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriverOutputReference.property.entryPointArguments"></a>

```csharp
public string[] EntryPointArguments { get; }
```

- *Type:* string[]

---

##### `SparkSubmitParameters`<sup>Required</sup> <a name="SparkSubmitParameters" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriverOutputReference.property.sparkSubmitParameters"></a>

```csharp
public string SparkSubmitParameters { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriverOutputReference.property.internalValue"></a>

```csharp
public EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriver InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriver">EmrcontainersJobTemplateJobTemplateDataJobDriverSparkSubmitJobDriver</a>

---


### EmrcontainersJobTemplateJobTemplateDataOutputReference <a name="EmrcontainersJobTemplateJobTemplateDataOutputReference" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EmrcontainersJobTemplateJobTemplateDataOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataOutputReference.putConfigurationOverrides">PutConfigurationOverrides</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataOutputReference.putJobDriver">PutJobDriver</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataOutputReference.resetConfigurationOverrides">ResetConfigurationOverrides</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataOutputReference.resetJobTags">ResetJobTags</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutConfigurationOverrides` <a name="PutConfigurationOverrides" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataOutputReference.putConfigurationOverrides"></a>

```csharp
private void PutConfigurationOverrides(EmrcontainersJobTemplateJobTemplateDataConfigurationOverrides Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataOutputReference.putConfigurationOverrides.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverrides">EmrcontainersJobTemplateJobTemplateDataConfigurationOverrides</a>

---

##### `PutJobDriver` <a name="PutJobDriver" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataOutputReference.putJobDriver"></a>

```csharp
private void PutJobDriver(EmrcontainersJobTemplateJobTemplateDataJobDriver Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataOutputReference.putJobDriver.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriver">EmrcontainersJobTemplateJobTemplateDataJobDriver</a>

---

##### `ResetConfigurationOverrides` <a name="ResetConfigurationOverrides" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataOutputReference.resetConfigurationOverrides"></a>

```csharp
private void ResetConfigurationOverrides()
```

##### `ResetJobTags` <a name="ResetJobTags" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataOutputReference.resetJobTags"></a>

```csharp
private void ResetJobTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataOutputReference.property.configurationOverrides">ConfigurationOverrides</a></code> | <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesOutputReference">EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataOutputReference.property.jobDriver">JobDriver</a></code> | <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverOutputReference">EmrcontainersJobTemplateJobTemplateDataJobDriverOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataOutputReference.property.configurationOverridesInput">ConfigurationOverridesInput</a></code> | <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverrides">EmrcontainersJobTemplateJobTemplateDataConfigurationOverrides</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataOutputReference.property.executionRoleArnInput">ExecutionRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataOutputReference.property.jobDriverInput">JobDriverInput</a></code> | <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriver">EmrcontainersJobTemplateJobTemplateDataJobDriver</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataOutputReference.property.jobTagsInput">JobTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataOutputReference.property.releaseLabelInput">ReleaseLabelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataOutputReference.property.executionRoleArn">ExecutionRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataOutputReference.property.jobTags">JobTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataOutputReference.property.releaseLabel">ReleaseLabel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateData">EmrcontainersJobTemplateJobTemplateData</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConfigurationOverrides`<sup>Required</sup> <a name="ConfigurationOverrides" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataOutputReference.property.configurationOverrides"></a>

```csharp
public EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesOutputReference ConfigurationOverrides { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesOutputReference">EmrcontainersJobTemplateJobTemplateDataConfigurationOverridesOutputReference</a>

---

##### `JobDriver`<sup>Required</sup> <a name="JobDriver" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataOutputReference.property.jobDriver"></a>

```csharp
public EmrcontainersJobTemplateJobTemplateDataJobDriverOutputReference JobDriver { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriverOutputReference">EmrcontainersJobTemplateJobTemplateDataJobDriverOutputReference</a>

---

##### `ConfigurationOverridesInput`<sup>Optional</sup> <a name="ConfigurationOverridesInput" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataOutputReference.property.configurationOverridesInput"></a>

```csharp
public EmrcontainersJobTemplateJobTemplateDataConfigurationOverrides ConfigurationOverridesInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataConfigurationOverrides">EmrcontainersJobTemplateJobTemplateDataConfigurationOverrides</a>

---

##### `ExecutionRoleArnInput`<sup>Optional</sup> <a name="ExecutionRoleArnInput" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataOutputReference.property.executionRoleArnInput"></a>

```csharp
public string ExecutionRoleArnInput { get; }
```

- *Type:* string

---

##### `JobDriverInput`<sup>Optional</sup> <a name="JobDriverInput" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataOutputReference.property.jobDriverInput"></a>

```csharp
public EmrcontainersJobTemplateJobTemplateDataJobDriver JobDriverInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataJobDriver">EmrcontainersJobTemplateJobTemplateDataJobDriver</a>

---

##### `JobTagsInput`<sup>Optional</sup> <a name="JobTagsInput" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataOutputReference.property.jobTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> JobTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ReleaseLabelInput`<sup>Optional</sup> <a name="ReleaseLabelInput" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataOutputReference.property.releaseLabelInput"></a>

```csharp
public string ReleaseLabelInput { get; }
```

- *Type:* string

---

##### `ExecutionRoleArn`<sup>Required</sup> <a name="ExecutionRoleArn" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataOutputReference.property.executionRoleArn"></a>

```csharp
public string ExecutionRoleArn { get; }
```

- *Type:* string

---

##### `JobTags`<sup>Required</sup> <a name="JobTags" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataOutputReference.property.jobTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> JobTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ReleaseLabel`<sup>Required</sup> <a name="ReleaseLabel" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataOutputReference.property.releaseLabel"></a>

```csharp
public string ReleaseLabel { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateDataOutputReference.property.internalValue"></a>

```csharp
public EmrcontainersJobTemplateJobTemplateData InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateJobTemplateData">EmrcontainersJobTemplateJobTemplateData</a>

---


### EmrcontainersJobTemplateTimeoutsOutputReference <a name="EmrcontainersJobTemplateTimeoutsOutputReference" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EmrcontainersJobTemplateTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.emrcontainersJobTemplate.EmrcontainersJobTemplateTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



