# `sagemakerNotebookInstanceLifecycleConfiguration` Submodule <a name="`sagemakerNotebookInstanceLifecycleConfiguration` Submodule" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SagemakerNotebookInstanceLifecycleConfiguration <a name="SagemakerNotebookInstanceLifecycleConfiguration" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_notebook_instance_lifecycle_configuration aws_sagemaker_notebook_instance_lifecycle_configuration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SagemakerNotebookInstanceLifecycleConfiguration(Construct Scope, string Id, SagemakerNotebookInstanceLifecycleConfigurationConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfigurationConfig">SagemakerNotebookInstanceLifecycleConfigurationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfigurationConfig">SagemakerNotebookInstanceLifecycleConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.resetOnCreate">ResetOnCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.resetOnStart">ResetOnStart</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.resetTagsAll">ResetTagsAll</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetOnCreate` <a name="ResetOnCreate" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.resetOnCreate"></a>

```csharp
private void ResetOnCreate()
```

##### `ResetOnStart` <a name="ResetOnStart" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.resetOnStart"></a>

```csharp
private void ResetOnStart()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a SagemakerNotebookInstanceLifecycleConfiguration resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

SagemakerNotebookInstanceLifecycleConfiguration.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

SagemakerNotebookInstanceLifecycleConfiguration.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

SagemakerNotebookInstanceLifecycleConfiguration.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

SagemakerNotebookInstanceLifecycleConfiguration.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a SagemakerNotebookInstanceLifecycleConfiguration resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SagemakerNotebookInstanceLifecycleConfiguration to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SagemakerNotebookInstanceLifecycleConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_notebook_instance_lifecycle_configuration#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the SagemakerNotebookInstanceLifecycleConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.property.onCreateInput">OnCreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.property.onStartInput">OnStartInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.property.onCreate">OnCreate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.property.onStart">OnStart</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `OnCreateInput`<sup>Optional</sup> <a name="OnCreateInput" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.property.onCreateInput"></a>

```csharp
public string OnCreateInput { get; }
```

- *Type:* string

---

##### `OnStartInput`<sup>Optional</sup> <a name="OnStartInput" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.property.onStartInput"></a>

```csharp
public string OnStartInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `OnCreate`<sup>Required</sup> <a name="OnCreate" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.property.onCreate"></a>

```csharp
public string OnCreate { get; }
```

- *Type:* string

---

##### `OnStart`<sup>Required</sup> <a name="OnStart" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.property.onStart"></a>

```csharp
public string OnStart { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfiguration.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SagemakerNotebookInstanceLifecycleConfigurationConfig <a name="SagemakerNotebookInstanceLifecycleConfigurationConfig" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfigurationConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SagemakerNotebookInstanceLifecycleConfigurationConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Id = null,
    string Name = null,
    string OnCreate = null,
    string OnStart = null,
    string Region = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfigurationConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfigurationConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfigurationConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfigurationConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfigurationConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfigurationConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfigurationConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfigurationConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_notebook_instance_lifecycle_configuration#id SagemakerNotebookInstanceLifecycleConfiguration#id}. |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfigurationConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_notebook_instance_lifecycle_configuration#name SagemakerNotebookInstanceLifecycleConfiguration#name}. |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfigurationConfig.property.onCreate">OnCreate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_notebook_instance_lifecycle_configuration#on_create SagemakerNotebookInstanceLifecycleConfiguration#on_create}. |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfigurationConfig.property.onStart">OnStart</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_notebook_instance_lifecycle_configuration#on_start SagemakerNotebookInstanceLifecycleConfiguration#on_start}. |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfigurationConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfigurationConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_notebook_instance_lifecycle_configuration#tags SagemakerNotebookInstanceLifecycleConfiguration#tags}. |
| <code><a href="#@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfigurationConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_notebook_instance_lifecycle_configuration#tags_all SagemakerNotebookInstanceLifecycleConfiguration#tags_all}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfigurationConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfigurationConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfigurationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfigurationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfigurationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfigurationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfigurationConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfigurationConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_notebook_instance_lifecycle_configuration#id SagemakerNotebookInstanceLifecycleConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfigurationConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_notebook_instance_lifecycle_configuration#name SagemakerNotebookInstanceLifecycleConfiguration#name}.

---

##### `OnCreate`<sup>Optional</sup> <a name="OnCreate" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfigurationConfig.property.onCreate"></a>

```csharp
public string OnCreate { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_notebook_instance_lifecycle_configuration#on_create SagemakerNotebookInstanceLifecycleConfiguration#on_create}.

---

##### `OnStart`<sup>Optional</sup> <a name="OnStart" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfigurationConfig.property.onStart"></a>

```csharp
public string OnStart { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_notebook_instance_lifecycle_configuration#on_start SagemakerNotebookInstanceLifecycleConfiguration#on_start}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfigurationConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_notebook_instance_lifecycle_configuration#region SagemakerNotebookInstanceLifecycleConfiguration#region}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfigurationConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_notebook_instance_lifecycle_configuration#tags SagemakerNotebookInstanceLifecycleConfiguration#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.sagemakerNotebookInstanceLifecycleConfiguration.SagemakerNotebookInstanceLifecycleConfigurationConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_notebook_instance_lifecycle_configuration#tags_all SagemakerNotebookInstanceLifecycleConfiguration#tags_all}.

---



