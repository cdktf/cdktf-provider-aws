# `transferWorkflow` Submodule <a name="`transferWorkflow` Submodule" id="@cdktf/provider-aws.transferWorkflow"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TransferWorkflow <a name="TransferWorkflow" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow aws_transfer_workflow}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new TransferWorkflow(Construct Scope, string Id, TransferWorkflowConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflow.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflow.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflow.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowConfig">TransferWorkflowConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowConfig">TransferWorkflowConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflow.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflow.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflow.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflow.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflow.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflow.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflow.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflow.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflow.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflow.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflow.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflow.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflow.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflow.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflow.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflow.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflow.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflow.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflow.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflow.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflow.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflow.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflow.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflow.putOnExceptionSteps">PutOnExceptionSteps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflow.putSteps">PutSteps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflow.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflow.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflow.resetOnExceptionSteps">ResetOnExceptionSteps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflow.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflow.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflow.resetTagsAll">ResetTagsAll</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutOnExceptionSteps` <a name="PutOnExceptionSteps" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.putOnExceptionSteps"></a>

```csharp
private void PutOnExceptionSteps(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.putOnExceptionSteps.parameter.value"></a>

- *Type:* object

---

##### `PutSteps` <a name="PutSteps" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.putSteps"></a>

```csharp
private void PutSteps(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.putSteps.parameter.value"></a>

- *Type:* object

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetOnExceptionSteps` <a name="ResetOnExceptionSteps" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.resetOnExceptionSteps"></a>

```csharp
private void ResetOnExceptionSteps()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflow.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflow.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflow.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflow.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a TransferWorkflow resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

TransferWorkflow.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

TransferWorkflow.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

TransferWorkflow.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

TransferWorkflow.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a TransferWorkflow resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the TransferWorkflow to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing TransferWorkflow that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the TransferWorkflow to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflow.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflow.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflow.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflow.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflow.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflow.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflow.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflow.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflow.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflow.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflow.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflow.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflow.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflow.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflow.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflow.property.onExceptionSteps">OnExceptionSteps</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsList">TransferWorkflowOnExceptionStepsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflow.property.steps">Steps</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsList">TransferWorkflowStepsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflow.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflow.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflow.property.onExceptionStepsInput">OnExceptionStepsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflow.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflow.property.stepsInput">StepsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflow.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflow.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflow.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflow.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflow.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflow.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflow.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `OnExceptionSteps`<sup>Required</sup> <a name="OnExceptionSteps" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.property.onExceptionSteps"></a>

```csharp
public TransferWorkflowOnExceptionStepsList OnExceptionSteps { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsList">TransferWorkflowOnExceptionStepsList</a>

---

##### `Steps`<sup>Required</sup> <a name="Steps" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.property.steps"></a>

```csharp
public TransferWorkflowStepsList Steps { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsList">TransferWorkflowStepsList</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `OnExceptionStepsInput`<sup>Optional</sup> <a name="OnExceptionStepsInput" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.property.onExceptionStepsInput"></a>

```csharp
public object OnExceptionStepsInput { get; }
```

- *Type:* object

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `StepsInput`<sup>Optional</sup> <a name="StepsInput" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.property.stepsInput"></a>

```csharp
public object StepsInput { get; }
```

- *Type:* object

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflow.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflow.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### TransferWorkflowConfig <a name="TransferWorkflowConfig" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new TransferWorkflowConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    object Steps,
    string Description = null,
    string Id = null,
    object OnExceptionSteps = null,
    string Region = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowConfig.property.steps">Steps</a></code> | <code>object</code> | steps block. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#description TransferWorkflow#description}. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#id TransferWorkflow#id}. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowConfig.property.onExceptionSteps">OnExceptionSteps</a></code> | <code>object</code> | on_exception_steps block. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#tags TransferWorkflow#tags}. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#tags_all TransferWorkflow#tags_all}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Steps`<sup>Required</sup> <a name="Steps" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowConfig.property.steps"></a>

```csharp
public object Steps { get; set; }
```

- *Type:* object

steps block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#steps TransferWorkflow#steps}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#description TransferWorkflow#description}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#id TransferWorkflow#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `OnExceptionSteps`<sup>Optional</sup> <a name="OnExceptionSteps" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowConfig.property.onExceptionSteps"></a>

```csharp
public object OnExceptionSteps { get; set; }
```

- *Type:* object

on_exception_steps block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#on_exception_steps TransferWorkflow#on_exception_steps}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#region TransferWorkflow#region}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#tags TransferWorkflow#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#tags_all TransferWorkflow#tags_all}.

---

### TransferWorkflowOnExceptionSteps <a name="TransferWorkflowOnExceptionSteps" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionSteps"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionSteps.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new TransferWorkflowOnExceptionSteps {
    string Type,
    TransferWorkflowOnExceptionStepsCopyStepDetails CopyStepDetails = null,
    TransferWorkflowOnExceptionStepsCustomStepDetails CustomStepDetails = null,
    TransferWorkflowOnExceptionStepsDecryptStepDetails DecryptStepDetails = null,
    TransferWorkflowOnExceptionStepsDeleteStepDetails DeleteStepDetails = null,
    TransferWorkflowOnExceptionStepsTagStepDetails TagStepDetails = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionSteps.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#type TransferWorkflow#type}. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionSteps.property.copyStepDetails">CopyStepDetails</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetails">TransferWorkflowOnExceptionStepsCopyStepDetails</a></code> | copy_step_details block. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionSteps.property.customStepDetails">CustomStepDetails</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetails">TransferWorkflowOnExceptionStepsCustomStepDetails</a></code> | custom_step_details block. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionSteps.property.decryptStepDetails">DecryptStepDetails</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetails">TransferWorkflowOnExceptionStepsDecryptStepDetails</a></code> | decrypt_step_details block. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionSteps.property.deleteStepDetails">DeleteStepDetails</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetails">TransferWorkflowOnExceptionStepsDeleteStepDetails</a></code> | delete_step_details block. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionSteps.property.tagStepDetails">TagStepDetails</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetails">TransferWorkflowOnExceptionStepsTagStepDetails</a></code> | tag_step_details block. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionSteps.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#type TransferWorkflow#type}.

---

##### `CopyStepDetails`<sup>Optional</sup> <a name="CopyStepDetails" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionSteps.property.copyStepDetails"></a>

```csharp
public TransferWorkflowOnExceptionStepsCopyStepDetails CopyStepDetails { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetails">TransferWorkflowOnExceptionStepsCopyStepDetails</a>

copy_step_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#copy_step_details TransferWorkflow#copy_step_details}

---

##### `CustomStepDetails`<sup>Optional</sup> <a name="CustomStepDetails" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionSteps.property.customStepDetails"></a>

```csharp
public TransferWorkflowOnExceptionStepsCustomStepDetails CustomStepDetails { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetails">TransferWorkflowOnExceptionStepsCustomStepDetails</a>

custom_step_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#custom_step_details TransferWorkflow#custom_step_details}

---

##### `DecryptStepDetails`<sup>Optional</sup> <a name="DecryptStepDetails" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionSteps.property.decryptStepDetails"></a>

```csharp
public TransferWorkflowOnExceptionStepsDecryptStepDetails DecryptStepDetails { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetails">TransferWorkflowOnExceptionStepsDecryptStepDetails</a>

decrypt_step_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#decrypt_step_details TransferWorkflow#decrypt_step_details}

---

##### `DeleteStepDetails`<sup>Optional</sup> <a name="DeleteStepDetails" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionSteps.property.deleteStepDetails"></a>

```csharp
public TransferWorkflowOnExceptionStepsDeleteStepDetails DeleteStepDetails { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetails">TransferWorkflowOnExceptionStepsDeleteStepDetails</a>

delete_step_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#delete_step_details TransferWorkflow#delete_step_details}

---

##### `TagStepDetails`<sup>Optional</sup> <a name="TagStepDetails" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionSteps.property.tagStepDetails"></a>

```csharp
public TransferWorkflowOnExceptionStepsTagStepDetails TagStepDetails { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetails">TransferWorkflowOnExceptionStepsTagStepDetails</a>

tag_step_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#tag_step_details TransferWorkflow#tag_step_details}

---

### TransferWorkflowOnExceptionStepsCopyStepDetails <a name="TransferWorkflowOnExceptionStepsCopyStepDetails" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new TransferWorkflowOnExceptionStepsCopyStepDetails {
    TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocation DestinationFileLocation = null,
    string Name = null,
    string OverwriteExisting = null,
    string SourceFileLocation = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetails.property.destinationFileLocation">DestinationFileLocation</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocation">TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocation</a></code> | destination_file_location block. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetails.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#name TransferWorkflow#name}. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetails.property.overwriteExisting">OverwriteExisting</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#overwrite_existing TransferWorkflow#overwrite_existing}. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetails.property.sourceFileLocation">SourceFileLocation</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#source_file_location TransferWorkflow#source_file_location}. |

---

##### `DestinationFileLocation`<sup>Optional</sup> <a name="DestinationFileLocation" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetails.property.destinationFileLocation"></a>

```csharp
public TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocation DestinationFileLocation { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocation">TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocation</a>

destination_file_location block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#destination_file_location TransferWorkflow#destination_file_location}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetails.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#name TransferWorkflow#name}.

---

##### `OverwriteExisting`<sup>Optional</sup> <a name="OverwriteExisting" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetails.property.overwriteExisting"></a>

```csharp
public string OverwriteExisting { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#overwrite_existing TransferWorkflow#overwrite_existing}.

---

##### `SourceFileLocation`<sup>Optional</sup> <a name="SourceFileLocation" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetails.property.sourceFileLocation"></a>

```csharp
public string SourceFileLocation { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#source_file_location TransferWorkflow#source_file_location}.

---

### TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocation <a name="TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocation" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocation.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocation {
    TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocation EfsFileLocation = null,
    TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocation S3FileLocation = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocation.property.efsFileLocation">EfsFileLocation</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocation">TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocation</a></code> | efs_file_location block. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocation.property.s3FileLocation">S3FileLocation</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocation">TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocation</a></code> | s3_file_location block. |

---

##### `EfsFileLocation`<sup>Optional</sup> <a name="EfsFileLocation" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocation.property.efsFileLocation"></a>

```csharp
public TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocation EfsFileLocation { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocation">TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocation</a>

efs_file_location block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#efs_file_location TransferWorkflow#efs_file_location}

---

##### `S3FileLocation`<sup>Optional</sup> <a name="S3FileLocation" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocation.property.s3FileLocation"></a>

```csharp
public TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocation S3FileLocation { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocation">TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocation</a>

s3_file_location block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#s3_file_location TransferWorkflow#s3_file_location}

---

### TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocation <a name="TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocation" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocation.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocation {
    string FileSystemId = null,
    string Path = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocation.property.fileSystemId">FileSystemId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#file_system_id TransferWorkflow#file_system_id}. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocation.property.path">Path</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#path TransferWorkflow#path}. |

---

##### `FileSystemId`<sup>Optional</sup> <a name="FileSystemId" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocation.property.fileSystemId"></a>

```csharp
public string FileSystemId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#file_system_id TransferWorkflow#file_system_id}.

---

##### `Path`<sup>Optional</sup> <a name="Path" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocation.property.path"></a>

```csharp
public string Path { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#path TransferWorkflow#path}.

---

### TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocation <a name="TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocation" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocation.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocation {
    string Bucket = null,
    string Key = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocation.property.bucket">Bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#bucket TransferWorkflow#bucket}. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocation.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#key TransferWorkflow#key}. |

---

##### `Bucket`<sup>Optional</sup> <a name="Bucket" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocation.property.bucket"></a>

```csharp
public string Bucket { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#bucket TransferWorkflow#bucket}.

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocation.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#key TransferWorkflow#key}.

---

### TransferWorkflowOnExceptionStepsCustomStepDetails <a name="TransferWorkflowOnExceptionStepsCustomStepDetails" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new TransferWorkflowOnExceptionStepsCustomStepDetails {
    string Name = null,
    string SourceFileLocation = null,
    string Target = null,
    double TimeoutSeconds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetails.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#name TransferWorkflow#name}. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetails.property.sourceFileLocation">SourceFileLocation</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#source_file_location TransferWorkflow#source_file_location}. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetails.property.target">Target</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#target TransferWorkflow#target}. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetails.property.timeoutSeconds">TimeoutSeconds</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#timeout_seconds TransferWorkflow#timeout_seconds}. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetails.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#name TransferWorkflow#name}.

---

##### `SourceFileLocation`<sup>Optional</sup> <a name="SourceFileLocation" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetails.property.sourceFileLocation"></a>

```csharp
public string SourceFileLocation { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#source_file_location TransferWorkflow#source_file_location}.

---

##### `Target`<sup>Optional</sup> <a name="Target" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetails.property.target"></a>

```csharp
public string Target { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#target TransferWorkflow#target}.

---

##### `TimeoutSeconds`<sup>Optional</sup> <a name="TimeoutSeconds" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetails.property.timeoutSeconds"></a>

```csharp
public double TimeoutSeconds { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#timeout_seconds TransferWorkflow#timeout_seconds}.

---

### TransferWorkflowOnExceptionStepsDecryptStepDetails <a name="TransferWorkflowOnExceptionStepsDecryptStepDetails" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new TransferWorkflowOnExceptionStepsDecryptStepDetails {
    string Type,
    TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocation DestinationFileLocation = null,
    string Name = null,
    string OverwriteExisting = null,
    string SourceFileLocation = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetails.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#type TransferWorkflow#type}. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetails.property.destinationFileLocation">DestinationFileLocation</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocation">TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocation</a></code> | destination_file_location block. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetails.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#name TransferWorkflow#name}. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetails.property.overwriteExisting">OverwriteExisting</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#overwrite_existing TransferWorkflow#overwrite_existing}. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetails.property.sourceFileLocation">SourceFileLocation</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#source_file_location TransferWorkflow#source_file_location}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetails.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#type TransferWorkflow#type}.

---

##### `DestinationFileLocation`<sup>Optional</sup> <a name="DestinationFileLocation" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetails.property.destinationFileLocation"></a>

```csharp
public TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocation DestinationFileLocation { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocation">TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocation</a>

destination_file_location block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#destination_file_location TransferWorkflow#destination_file_location}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetails.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#name TransferWorkflow#name}.

---

##### `OverwriteExisting`<sup>Optional</sup> <a name="OverwriteExisting" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetails.property.overwriteExisting"></a>

```csharp
public string OverwriteExisting { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#overwrite_existing TransferWorkflow#overwrite_existing}.

---

##### `SourceFileLocation`<sup>Optional</sup> <a name="SourceFileLocation" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetails.property.sourceFileLocation"></a>

```csharp
public string SourceFileLocation { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#source_file_location TransferWorkflow#source_file_location}.

---

### TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocation <a name="TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocation" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocation.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocation {
    TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation EfsFileLocation = null,
    TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocation S3FileLocation = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocation.property.efsFileLocation">EfsFileLocation</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation">TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation</a></code> | efs_file_location block. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocation.property.s3FileLocation">S3FileLocation</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocation">TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocation</a></code> | s3_file_location block. |

---

##### `EfsFileLocation`<sup>Optional</sup> <a name="EfsFileLocation" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocation.property.efsFileLocation"></a>

```csharp
public TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation EfsFileLocation { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation">TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation</a>

efs_file_location block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#efs_file_location TransferWorkflow#efs_file_location}

---

##### `S3FileLocation`<sup>Optional</sup> <a name="S3FileLocation" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocation.property.s3FileLocation"></a>

```csharp
public TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocation S3FileLocation { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocation">TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocation</a>

s3_file_location block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#s3_file_location TransferWorkflow#s3_file_location}

---

### TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation <a name="TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation {
    string FileSystemId = null,
    string Path = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation.property.fileSystemId">FileSystemId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#file_system_id TransferWorkflow#file_system_id}. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation.property.path">Path</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#path TransferWorkflow#path}. |

---

##### `FileSystemId`<sup>Optional</sup> <a name="FileSystemId" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation.property.fileSystemId"></a>

```csharp
public string FileSystemId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#file_system_id TransferWorkflow#file_system_id}.

---

##### `Path`<sup>Optional</sup> <a name="Path" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation.property.path"></a>

```csharp
public string Path { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#path TransferWorkflow#path}.

---

### TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocation <a name="TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocation" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocation.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocation {
    string Bucket = null,
    string Key = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocation.property.bucket">Bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#bucket TransferWorkflow#bucket}. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocation.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#key TransferWorkflow#key}. |

---

##### `Bucket`<sup>Optional</sup> <a name="Bucket" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocation.property.bucket"></a>

```csharp
public string Bucket { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#bucket TransferWorkflow#bucket}.

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocation.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#key TransferWorkflow#key}.

---

### TransferWorkflowOnExceptionStepsDeleteStepDetails <a name="TransferWorkflowOnExceptionStepsDeleteStepDetails" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new TransferWorkflowOnExceptionStepsDeleteStepDetails {
    string Name = null,
    string SourceFileLocation = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetails.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#name TransferWorkflow#name}. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetails.property.sourceFileLocation">SourceFileLocation</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#source_file_location TransferWorkflow#source_file_location}. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetails.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#name TransferWorkflow#name}.

---

##### `SourceFileLocation`<sup>Optional</sup> <a name="SourceFileLocation" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetails.property.sourceFileLocation"></a>

```csharp
public string SourceFileLocation { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#source_file_location TransferWorkflow#source_file_location}.

---

### TransferWorkflowOnExceptionStepsTagStepDetails <a name="TransferWorkflowOnExceptionStepsTagStepDetails" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new TransferWorkflowOnExceptionStepsTagStepDetails {
    string Name = null,
    string SourceFileLocation = null,
    object Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetails.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#name TransferWorkflow#name}. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetails.property.sourceFileLocation">SourceFileLocation</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#source_file_location TransferWorkflow#source_file_location}. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetails.property.tags">Tags</a></code> | <code>object</code> | tags block. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetails.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#name TransferWorkflow#name}.

---

##### `SourceFileLocation`<sup>Optional</sup> <a name="SourceFileLocation" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetails.property.sourceFileLocation"></a>

```csharp
public string SourceFileLocation { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#source_file_location TransferWorkflow#source_file_location}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetails.property.tags"></a>

```csharp
public object Tags { get; set; }
```

- *Type:* object

tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#tags TransferWorkflow#tags}

---

### TransferWorkflowOnExceptionStepsTagStepDetailsTags <a name="TransferWorkflowOnExceptionStepsTagStepDetailsTags" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTags.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new TransferWorkflowOnExceptionStepsTagStepDetailsTags {
    string Key,
    string Value
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTags.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#key TransferWorkflow#key}. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTags.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#value TransferWorkflow#value}. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#key TransferWorkflow#key}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#value TransferWorkflow#value}.

---

### TransferWorkflowSteps <a name="TransferWorkflowSteps" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowSteps"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowSteps.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new TransferWorkflowSteps {
    string Type,
    TransferWorkflowStepsCopyStepDetails CopyStepDetails = null,
    TransferWorkflowStepsCustomStepDetails CustomStepDetails = null,
    TransferWorkflowStepsDecryptStepDetails DecryptStepDetails = null,
    TransferWorkflowStepsDeleteStepDetails DeleteStepDetails = null,
    TransferWorkflowStepsTagStepDetails TagStepDetails = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowSteps.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#type TransferWorkflow#type}. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowSteps.property.copyStepDetails">CopyStepDetails</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetails">TransferWorkflowStepsCopyStepDetails</a></code> | copy_step_details block. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowSteps.property.customStepDetails">CustomStepDetails</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetails">TransferWorkflowStepsCustomStepDetails</a></code> | custom_step_details block. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowSteps.property.decryptStepDetails">DecryptStepDetails</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetails">TransferWorkflowStepsDecryptStepDetails</a></code> | decrypt_step_details block. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowSteps.property.deleteStepDetails">DeleteStepDetails</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDeleteStepDetails">TransferWorkflowStepsDeleteStepDetails</a></code> | delete_step_details block. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowSteps.property.tagStepDetails">TagStepDetails</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetails">TransferWorkflowStepsTagStepDetails</a></code> | tag_step_details block. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowSteps.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#type TransferWorkflow#type}.

---

##### `CopyStepDetails`<sup>Optional</sup> <a name="CopyStepDetails" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowSteps.property.copyStepDetails"></a>

```csharp
public TransferWorkflowStepsCopyStepDetails CopyStepDetails { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetails">TransferWorkflowStepsCopyStepDetails</a>

copy_step_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#copy_step_details TransferWorkflow#copy_step_details}

---

##### `CustomStepDetails`<sup>Optional</sup> <a name="CustomStepDetails" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowSteps.property.customStepDetails"></a>

```csharp
public TransferWorkflowStepsCustomStepDetails CustomStepDetails { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetails">TransferWorkflowStepsCustomStepDetails</a>

custom_step_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#custom_step_details TransferWorkflow#custom_step_details}

---

##### `DecryptStepDetails`<sup>Optional</sup> <a name="DecryptStepDetails" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowSteps.property.decryptStepDetails"></a>

```csharp
public TransferWorkflowStepsDecryptStepDetails DecryptStepDetails { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetails">TransferWorkflowStepsDecryptStepDetails</a>

decrypt_step_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#decrypt_step_details TransferWorkflow#decrypt_step_details}

---

##### `DeleteStepDetails`<sup>Optional</sup> <a name="DeleteStepDetails" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowSteps.property.deleteStepDetails"></a>

```csharp
public TransferWorkflowStepsDeleteStepDetails DeleteStepDetails { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDeleteStepDetails">TransferWorkflowStepsDeleteStepDetails</a>

delete_step_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#delete_step_details TransferWorkflow#delete_step_details}

---

##### `TagStepDetails`<sup>Optional</sup> <a name="TagStepDetails" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowSteps.property.tagStepDetails"></a>

```csharp
public TransferWorkflowStepsTagStepDetails TagStepDetails { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetails">TransferWorkflowStepsTagStepDetails</a>

tag_step_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#tag_step_details TransferWorkflow#tag_step_details}

---

### TransferWorkflowStepsCopyStepDetails <a name="TransferWorkflowStepsCopyStepDetails" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new TransferWorkflowStepsCopyStepDetails {
    TransferWorkflowStepsCopyStepDetailsDestinationFileLocation DestinationFileLocation = null,
    string Name = null,
    string OverwriteExisting = null,
    string SourceFileLocation = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetails.property.destinationFileLocation">DestinationFileLocation</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocation">TransferWorkflowStepsCopyStepDetailsDestinationFileLocation</a></code> | destination_file_location block. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetails.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#name TransferWorkflow#name}. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetails.property.overwriteExisting">OverwriteExisting</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#overwrite_existing TransferWorkflow#overwrite_existing}. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetails.property.sourceFileLocation">SourceFileLocation</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#source_file_location TransferWorkflow#source_file_location}. |

---

##### `DestinationFileLocation`<sup>Optional</sup> <a name="DestinationFileLocation" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetails.property.destinationFileLocation"></a>

```csharp
public TransferWorkflowStepsCopyStepDetailsDestinationFileLocation DestinationFileLocation { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocation">TransferWorkflowStepsCopyStepDetailsDestinationFileLocation</a>

destination_file_location block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#destination_file_location TransferWorkflow#destination_file_location}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetails.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#name TransferWorkflow#name}.

---

##### `OverwriteExisting`<sup>Optional</sup> <a name="OverwriteExisting" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetails.property.overwriteExisting"></a>

```csharp
public string OverwriteExisting { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#overwrite_existing TransferWorkflow#overwrite_existing}.

---

##### `SourceFileLocation`<sup>Optional</sup> <a name="SourceFileLocation" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetails.property.sourceFileLocation"></a>

```csharp
public string SourceFileLocation { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#source_file_location TransferWorkflow#source_file_location}.

---

### TransferWorkflowStepsCopyStepDetailsDestinationFileLocation <a name="TransferWorkflowStepsCopyStepDetailsDestinationFileLocation" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocation.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new TransferWorkflowStepsCopyStepDetailsDestinationFileLocation {
    TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocation EfsFileLocation = null,
    TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocation S3FileLocation = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocation.property.efsFileLocation">EfsFileLocation</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocation">TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocation</a></code> | efs_file_location block. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocation.property.s3FileLocation">S3FileLocation</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocation">TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocation</a></code> | s3_file_location block. |

---

##### `EfsFileLocation`<sup>Optional</sup> <a name="EfsFileLocation" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocation.property.efsFileLocation"></a>

```csharp
public TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocation EfsFileLocation { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocation">TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocation</a>

efs_file_location block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#efs_file_location TransferWorkflow#efs_file_location}

---

##### `S3FileLocation`<sup>Optional</sup> <a name="S3FileLocation" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocation.property.s3FileLocation"></a>

```csharp
public TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocation S3FileLocation { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocation">TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocation</a>

s3_file_location block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#s3_file_location TransferWorkflow#s3_file_location}

---

### TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocation <a name="TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocation" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocation.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocation {
    string FileSystemId = null,
    string Path = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocation.property.fileSystemId">FileSystemId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#file_system_id TransferWorkflow#file_system_id}. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocation.property.path">Path</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#path TransferWorkflow#path}. |

---

##### `FileSystemId`<sup>Optional</sup> <a name="FileSystemId" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocation.property.fileSystemId"></a>

```csharp
public string FileSystemId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#file_system_id TransferWorkflow#file_system_id}.

---

##### `Path`<sup>Optional</sup> <a name="Path" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocation.property.path"></a>

```csharp
public string Path { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#path TransferWorkflow#path}.

---

### TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocation <a name="TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocation" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocation.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocation {
    string Bucket = null,
    string Key = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocation.property.bucket">Bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#bucket TransferWorkflow#bucket}. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocation.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#key TransferWorkflow#key}. |

---

##### `Bucket`<sup>Optional</sup> <a name="Bucket" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocation.property.bucket"></a>

```csharp
public string Bucket { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#bucket TransferWorkflow#bucket}.

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocation.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#key TransferWorkflow#key}.

---

### TransferWorkflowStepsCustomStepDetails <a name="TransferWorkflowStepsCustomStepDetails" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new TransferWorkflowStepsCustomStepDetails {
    string Name = null,
    string SourceFileLocation = null,
    string Target = null,
    double TimeoutSeconds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetails.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#name TransferWorkflow#name}. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetails.property.sourceFileLocation">SourceFileLocation</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#source_file_location TransferWorkflow#source_file_location}. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetails.property.target">Target</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#target TransferWorkflow#target}. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetails.property.timeoutSeconds">TimeoutSeconds</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#timeout_seconds TransferWorkflow#timeout_seconds}. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetails.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#name TransferWorkflow#name}.

---

##### `SourceFileLocation`<sup>Optional</sup> <a name="SourceFileLocation" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetails.property.sourceFileLocation"></a>

```csharp
public string SourceFileLocation { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#source_file_location TransferWorkflow#source_file_location}.

---

##### `Target`<sup>Optional</sup> <a name="Target" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetails.property.target"></a>

```csharp
public string Target { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#target TransferWorkflow#target}.

---

##### `TimeoutSeconds`<sup>Optional</sup> <a name="TimeoutSeconds" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetails.property.timeoutSeconds"></a>

```csharp
public double TimeoutSeconds { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#timeout_seconds TransferWorkflow#timeout_seconds}.

---

### TransferWorkflowStepsDecryptStepDetails <a name="TransferWorkflowStepsDecryptStepDetails" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new TransferWorkflowStepsDecryptStepDetails {
    string Type,
    TransferWorkflowStepsDecryptStepDetailsDestinationFileLocation DestinationFileLocation = null,
    string Name = null,
    string OverwriteExisting = null,
    string SourceFileLocation = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetails.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#type TransferWorkflow#type}. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetails.property.destinationFileLocation">DestinationFileLocation</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocation">TransferWorkflowStepsDecryptStepDetailsDestinationFileLocation</a></code> | destination_file_location block. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetails.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#name TransferWorkflow#name}. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetails.property.overwriteExisting">OverwriteExisting</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#overwrite_existing TransferWorkflow#overwrite_existing}. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetails.property.sourceFileLocation">SourceFileLocation</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#source_file_location TransferWorkflow#source_file_location}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetails.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#type TransferWorkflow#type}.

---

##### `DestinationFileLocation`<sup>Optional</sup> <a name="DestinationFileLocation" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetails.property.destinationFileLocation"></a>

```csharp
public TransferWorkflowStepsDecryptStepDetailsDestinationFileLocation DestinationFileLocation { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocation">TransferWorkflowStepsDecryptStepDetailsDestinationFileLocation</a>

destination_file_location block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#destination_file_location TransferWorkflow#destination_file_location}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetails.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#name TransferWorkflow#name}.

---

##### `OverwriteExisting`<sup>Optional</sup> <a name="OverwriteExisting" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetails.property.overwriteExisting"></a>

```csharp
public string OverwriteExisting { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#overwrite_existing TransferWorkflow#overwrite_existing}.

---

##### `SourceFileLocation`<sup>Optional</sup> <a name="SourceFileLocation" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetails.property.sourceFileLocation"></a>

```csharp
public string SourceFileLocation { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#source_file_location TransferWorkflow#source_file_location}.

---

### TransferWorkflowStepsDecryptStepDetailsDestinationFileLocation <a name="TransferWorkflowStepsDecryptStepDetailsDestinationFileLocation" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocation.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new TransferWorkflowStepsDecryptStepDetailsDestinationFileLocation {
    TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation EfsFileLocation = null,
    TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocation S3FileLocation = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocation.property.efsFileLocation">EfsFileLocation</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation">TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation</a></code> | efs_file_location block. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocation.property.s3FileLocation">S3FileLocation</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocation">TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocation</a></code> | s3_file_location block. |

---

##### `EfsFileLocation`<sup>Optional</sup> <a name="EfsFileLocation" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocation.property.efsFileLocation"></a>

```csharp
public TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation EfsFileLocation { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation">TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation</a>

efs_file_location block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#efs_file_location TransferWorkflow#efs_file_location}

---

##### `S3FileLocation`<sup>Optional</sup> <a name="S3FileLocation" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocation.property.s3FileLocation"></a>

```csharp
public TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocation S3FileLocation { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocation">TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocation</a>

s3_file_location block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#s3_file_location TransferWorkflow#s3_file_location}

---

### TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation <a name="TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation {
    string FileSystemId = null,
    string Path = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation.property.fileSystemId">FileSystemId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#file_system_id TransferWorkflow#file_system_id}. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation.property.path">Path</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#path TransferWorkflow#path}. |

---

##### `FileSystemId`<sup>Optional</sup> <a name="FileSystemId" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation.property.fileSystemId"></a>

```csharp
public string FileSystemId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#file_system_id TransferWorkflow#file_system_id}.

---

##### `Path`<sup>Optional</sup> <a name="Path" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation.property.path"></a>

```csharp
public string Path { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#path TransferWorkflow#path}.

---

### TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocation <a name="TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocation" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocation.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocation {
    string Bucket = null,
    string Key = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocation.property.bucket">Bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#bucket TransferWorkflow#bucket}. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocation.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#key TransferWorkflow#key}. |

---

##### `Bucket`<sup>Optional</sup> <a name="Bucket" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocation.property.bucket"></a>

```csharp
public string Bucket { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#bucket TransferWorkflow#bucket}.

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocation.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#key TransferWorkflow#key}.

---

### TransferWorkflowStepsDeleteStepDetails <a name="TransferWorkflowStepsDeleteStepDetails" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDeleteStepDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDeleteStepDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new TransferWorkflowStepsDeleteStepDetails {
    string Name = null,
    string SourceFileLocation = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDeleteStepDetails.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#name TransferWorkflow#name}. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDeleteStepDetails.property.sourceFileLocation">SourceFileLocation</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#source_file_location TransferWorkflow#source_file_location}. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDeleteStepDetails.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#name TransferWorkflow#name}.

---

##### `SourceFileLocation`<sup>Optional</sup> <a name="SourceFileLocation" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDeleteStepDetails.property.sourceFileLocation"></a>

```csharp
public string SourceFileLocation { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#source_file_location TransferWorkflow#source_file_location}.

---

### TransferWorkflowStepsTagStepDetails <a name="TransferWorkflowStepsTagStepDetails" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new TransferWorkflowStepsTagStepDetails {
    string Name = null,
    string SourceFileLocation = null,
    object Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetails.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#name TransferWorkflow#name}. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetails.property.sourceFileLocation">SourceFileLocation</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#source_file_location TransferWorkflow#source_file_location}. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetails.property.tags">Tags</a></code> | <code>object</code> | tags block. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetails.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#name TransferWorkflow#name}.

---

##### `SourceFileLocation`<sup>Optional</sup> <a name="SourceFileLocation" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetails.property.sourceFileLocation"></a>

```csharp
public string SourceFileLocation { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#source_file_location TransferWorkflow#source_file_location}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetails.property.tags"></a>

```csharp
public object Tags { get; set; }
```

- *Type:* object

tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#tags TransferWorkflow#tags}

---

### TransferWorkflowStepsTagStepDetailsTags <a name="TransferWorkflowStepsTagStepDetailsTags" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTags.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new TransferWorkflowStepsTagStepDetailsTags {
    string Key,
    string Value
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTags.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#key TransferWorkflow#key}. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTags.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#value TransferWorkflow#value}. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#key TransferWorkflow#key}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transfer_workflow#value TransferWorkflow#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference <a name="TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.resetFileSystemId">ResetFileSystemId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.resetPath">ResetPath</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFileSystemId` <a name="ResetFileSystemId" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.resetFileSystemId"></a>

```csharp
private void ResetFileSystemId()
```

##### `ResetPath` <a name="ResetPath" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.resetPath"></a>

```csharp
private void ResetPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.property.fileSystemIdInput">FileSystemIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.property.pathInput">PathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.property.fileSystemId">FileSystemId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocation">TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FileSystemIdInput`<sup>Optional</sup> <a name="FileSystemIdInput" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.property.fileSystemIdInput"></a>

```csharp
public string FileSystemIdInput { get; }
```

- *Type:* string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.property.pathInput"></a>

```csharp
public string PathInput { get; }
```

- *Type:* string

---

##### `FileSystemId`<sup>Required</sup> <a name="FileSystemId" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.property.fileSystemId"></a>

```csharp
public string FileSystemId { get; }
```

- *Type:* string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.property.internalValue"></a>

```csharp
public TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocation InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocation">TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocation</a>

---


### TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference <a name="TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.putEfsFileLocation">PutEfsFileLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.putS3FileLocation">PutS3FileLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.resetEfsFileLocation">ResetEfsFileLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.resetS3FileLocation">ResetS3FileLocation</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEfsFileLocation` <a name="PutEfsFileLocation" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.putEfsFileLocation"></a>

```csharp
private void PutEfsFileLocation(TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocation Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.putEfsFileLocation.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocation">TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocation</a>

---

##### `PutS3FileLocation` <a name="PutS3FileLocation" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.putS3FileLocation"></a>

```csharp
private void PutS3FileLocation(TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocation Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.putS3FileLocation.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocation">TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocation</a>

---

##### `ResetEfsFileLocation` <a name="ResetEfsFileLocation" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.resetEfsFileLocation"></a>

```csharp
private void ResetEfsFileLocation()
```

##### `ResetS3FileLocation` <a name="ResetS3FileLocation" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.resetS3FileLocation"></a>

```csharp
private void ResetS3FileLocation()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.property.efsFileLocation">EfsFileLocation</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference">TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.property.s3FileLocation">S3FileLocation</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference">TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.property.efsFileLocationInput">EfsFileLocationInput</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocation">TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.property.s3FileLocationInput">S3FileLocationInput</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocation">TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocation">TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EfsFileLocation`<sup>Required</sup> <a name="EfsFileLocation" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.property.efsFileLocation"></a>

```csharp
public TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference EfsFileLocation { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference">TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference</a>

---

##### `S3FileLocation`<sup>Required</sup> <a name="S3FileLocation" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.property.s3FileLocation"></a>

```csharp
public TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference S3FileLocation { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference">TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference</a>

---

##### `EfsFileLocationInput`<sup>Optional</sup> <a name="EfsFileLocationInput" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.property.efsFileLocationInput"></a>

```csharp
public TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocation EfsFileLocationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocation">TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocation</a>

---

##### `S3FileLocationInput`<sup>Optional</sup> <a name="S3FileLocationInput" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.property.s3FileLocationInput"></a>

```csharp
public TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocation S3FileLocationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocation">TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocation</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference.property.internalValue"></a>

```csharp
public TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocation InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocation">TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocation</a>

---


### TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference <a name="TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.resetBucket">ResetBucket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.resetKey">ResetKey</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBucket` <a name="ResetBucket" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.resetBucket"></a>

```csharp
private void ResetBucket()
```

##### `ResetKey` <a name="ResetKey" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.bucketInput">BucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.bucket">Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocation">TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.bucketInput"></a>

```csharp
public string BucketInput { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.bucket"></a>

```csharp
public string Bucket { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.internalValue"></a>

```csharp
public TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocation InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocation">TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocation</a>

---


### TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference <a name="TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.putDestinationFileLocation">PutDestinationFileLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.resetDestinationFileLocation">ResetDestinationFileLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.resetOverwriteExisting">ResetOverwriteExisting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.resetSourceFileLocation">ResetSourceFileLocation</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDestinationFileLocation` <a name="PutDestinationFileLocation" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.putDestinationFileLocation"></a>

```csharp
private void PutDestinationFileLocation(TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocation Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.putDestinationFileLocation.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocation">TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocation</a>

---

##### `ResetDestinationFileLocation` <a name="ResetDestinationFileLocation" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.resetDestinationFileLocation"></a>

```csharp
private void ResetDestinationFileLocation()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetOverwriteExisting` <a name="ResetOverwriteExisting" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.resetOverwriteExisting"></a>

```csharp
private void ResetOverwriteExisting()
```

##### `ResetSourceFileLocation` <a name="ResetSourceFileLocation" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.resetSourceFileLocation"></a>

```csharp
private void ResetSourceFileLocation()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.property.destinationFileLocation">DestinationFileLocation</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference">TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.property.destinationFileLocationInput">DestinationFileLocationInput</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocation">TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.property.overwriteExistingInput">OverwriteExistingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.property.sourceFileLocationInput">SourceFileLocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.property.overwriteExisting">OverwriteExisting</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.property.sourceFileLocation">SourceFileLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetails">TransferWorkflowOnExceptionStepsCopyStepDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DestinationFileLocation`<sup>Required</sup> <a name="DestinationFileLocation" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.property.destinationFileLocation"></a>

```csharp
public TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference DestinationFileLocation { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference">TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference</a>

---

##### `DestinationFileLocationInput`<sup>Optional</sup> <a name="DestinationFileLocationInput" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.property.destinationFileLocationInput"></a>

```csharp
public TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocation DestinationFileLocationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocation">TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocation</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `OverwriteExistingInput`<sup>Optional</sup> <a name="OverwriteExistingInput" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.property.overwriteExistingInput"></a>

```csharp
public string OverwriteExistingInput { get; }
```

- *Type:* string

---

##### `SourceFileLocationInput`<sup>Optional</sup> <a name="SourceFileLocationInput" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.property.sourceFileLocationInput"></a>

```csharp
public string SourceFileLocationInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `OverwriteExisting`<sup>Required</sup> <a name="OverwriteExisting" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.property.overwriteExisting"></a>

```csharp
public string OverwriteExisting { get; }
```

- *Type:* string

---

##### `SourceFileLocation`<sup>Required</sup> <a name="SourceFileLocation" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.property.sourceFileLocation"></a>

```csharp
public string SourceFileLocation { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference.property.internalValue"></a>

```csharp
public TransferWorkflowOnExceptionStepsCopyStepDetails InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetails">TransferWorkflowOnExceptionStepsCopyStepDetails</a>

---


### TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference <a name="TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.resetSourceFileLocation">ResetSourceFileLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.resetTarget">ResetTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.resetTimeoutSeconds">ResetTimeoutSeconds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetSourceFileLocation` <a name="ResetSourceFileLocation" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.resetSourceFileLocation"></a>

```csharp
private void ResetSourceFileLocation()
```

##### `ResetTarget` <a name="ResetTarget" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.resetTarget"></a>

```csharp
private void ResetTarget()
```

##### `ResetTimeoutSeconds` <a name="ResetTimeoutSeconds" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.resetTimeoutSeconds"></a>

```csharp
private void ResetTimeoutSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.property.sourceFileLocationInput">SourceFileLocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.property.targetInput">TargetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.property.timeoutSecondsInput">TimeoutSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.property.sourceFileLocation">SourceFileLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.property.target">Target</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.property.timeoutSeconds">TimeoutSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetails">TransferWorkflowOnExceptionStepsCustomStepDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `SourceFileLocationInput`<sup>Optional</sup> <a name="SourceFileLocationInput" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.property.sourceFileLocationInput"></a>

```csharp
public string SourceFileLocationInput { get; }
```

- *Type:* string

---

##### `TargetInput`<sup>Optional</sup> <a name="TargetInput" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.property.targetInput"></a>

```csharp
public string TargetInput { get; }
```

- *Type:* string

---

##### `TimeoutSecondsInput`<sup>Optional</sup> <a name="TimeoutSecondsInput" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.property.timeoutSecondsInput"></a>

```csharp
public double TimeoutSecondsInput { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `SourceFileLocation`<sup>Required</sup> <a name="SourceFileLocation" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.property.sourceFileLocation"></a>

```csharp
public string SourceFileLocation { get; }
```

- *Type:* string

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.property.target"></a>

```csharp
public string Target { get; }
```

- *Type:* string

---

##### `TimeoutSeconds`<sup>Required</sup> <a name="TimeoutSeconds" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.property.timeoutSeconds"></a>

```csharp
public double TimeoutSeconds { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference.property.internalValue"></a>

```csharp
public TransferWorkflowOnExceptionStepsCustomStepDetails InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetails">TransferWorkflowOnExceptionStepsCustomStepDetails</a>

---


### TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference <a name="TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.resetFileSystemId">ResetFileSystemId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.resetPath">ResetPath</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFileSystemId` <a name="ResetFileSystemId" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.resetFileSystemId"></a>

```csharp
private void ResetFileSystemId()
```

##### `ResetPath` <a name="ResetPath" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.resetPath"></a>

```csharp
private void ResetPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.property.fileSystemIdInput">FileSystemIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.property.pathInput">PathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.property.fileSystemId">FileSystemId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation">TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FileSystemIdInput`<sup>Optional</sup> <a name="FileSystemIdInput" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.property.fileSystemIdInput"></a>

```csharp
public string FileSystemIdInput { get; }
```

- *Type:* string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.property.pathInput"></a>

```csharp
public string PathInput { get; }
```

- *Type:* string

---

##### `FileSystemId`<sup>Required</sup> <a name="FileSystemId" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.property.fileSystemId"></a>

```csharp
public string FileSystemId { get; }
```

- *Type:* string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.property.internalValue"></a>

```csharp
public TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation">TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation</a>

---


### TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference <a name="TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.putEfsFileLocation">PutEfsFileLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.putS3FileLocation">PutS3FileLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.resetEfsFileLocation">ResetEfsFileLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.resetS3FileLocation">ResetS3FileLocation</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEfsFileLocation` <a name="PutEfsFileLocation" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.putEfsFileLocation"></a>

```csharp
private void PutEfsFileLocation(TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.putEfsFileLocation.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation">TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation</a>

---

##### `PutS3FileLocation` <a name="PutS3FileLocation" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.putS3FileLocation"></a>

```csharp
private void PutS3FileLocation(TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocation Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.putS3FileLocation.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocation">TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocation</a>

---

##### `ResetEfsFileLocation` <a name="ResetEfsFileLocation" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.resetEfsFileLocation"></a>

```csharp
private void ResetEfsFileLocation()
```

##### `ResetS3FileLocation` <a name="ResetS3FileLocation" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.resetS3FileLocation"></a>

```csharp
private void ResetS3FileLocation()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.property.efsFileLocation">EfsFileLocation</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference">TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.property.s3FileLocation">S3FileLocation</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference">TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.property.efsFileLocationInput">EfsFileLocationInput</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation">TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.property.s3FileLocationInput">S3FileLocationInput</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocation">TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocation">TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EfsFileLocation`<sup>Required</sup> <a name="EfsFileLocation" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.property.efsFileLocation"></a>

```csharp
public TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference EfsFileLocation { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference">TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference</a>

---

##### `S3FileLocation`<sup>Required</sup> <a name="S3FileLocation" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.property.s3FileLocation"></a>

```csharp
public TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference S3FileLocation { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference">TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference</a>

---

##### `EfsFileLocationInput`<sup>Optional</sup> <a name="EfsFileLocationInput" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.property.efsFileLocationInput"></a>

```csharp
public TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation EfsFileLocationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation">TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation</a>

---

##### `S3FileLocationInput`<sup>Optional</sup> <a name="S3FileLocationInput" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.property.s3FileLocationInput"></a>

```csharp
public TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocation S3FileLocationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocation">TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocation</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference.property.internalValue"></a>

```csharp
public TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocation InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocation">TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocation</a>

---


### TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference <a name="TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.resetBucket">ResetBucket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.resetKey">ResetKey</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBucket` <a name="ResetBucket" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.resetBucket"></a>

```csharp
private void ResetBucket()
```

##### `ResetKey` <a name="ResetKey" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.bucketInput">BucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.bucket">Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocation">TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.bucketInput"></a>

```csharp
public string BucketInput { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.bucket"></a>

```csharp
public string Bucket { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.internalValue"></a>

```csharp
public TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocation InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocation">TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocation</a>

---


### TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference <a name="TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.putDestinationFileLocation">PutDestinationFileLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.resetDestinationFileLocation">ResetDestinationFileLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.resetOverwriteExisting">ResetOverwriteExisting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.resetSourceFileLocation">ResetSourceFileLocation</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDestinationFileLocation` <a name="PutDestinationFileLocation" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.putDestinationFileLocation"></a>

```csharp
private void PutDestinationFileLocation(TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocation Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.putDestinationFileLocation.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocation">TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocation</a>

---

##### `ResetDestinationFileLocation` <a name="ResetDestinationFileLocation" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.resetDestinationFileLocation"></a>

```csharp
private void ResetDestinationFileLocation()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetOverwriteExisting` <a name="ResetOverwriteExisting" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.resetOverwriteExisting"></a>

```csharp
private void ResetOverwriteExisting()
```

##### `ResetSourceFileLocation` <a name="ResetSourceFileLocation" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.resetSourceFileLocation"></a>

```csharp
private void ResetSourceFileLocation()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.property.destinationFileLocation">DestinationFileLocation</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference">TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.property.destinationFileLocationInput">DestinationFileLocationInput</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocation">TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.property.overwriteExistingInput">OverwriteExistingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.property.sourceFileLocationInput">SourceFileLocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.property.overwriteExisting">OverwriteExisting</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.property.sourceFileLocation">SourceFileLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetails">TransferWorkflowOnExceptionStepsDecryptStepDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DestinationFileLocation`<sup>Required</sup> <a name="DestinationFileLocation" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.property.destinationFileLocation"></a>

```csharp
public TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference DestinationFileLocation { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference">TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference</a>

---

##### `DestinationFileLocationInput`<sup>Optional</sup> <a name="DestinationFileLocationInput" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.property.destinationFileLocationInput"></a>

```csharp
public TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocation DestinationFileLocationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocation">TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocation</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `OverwriteExistingInput`<sup>Optional</sup> <a name="OverwriteExistingInput" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.property.overwriteExistingInput"></a>

```csharp
public string OverwriteExistingInput { get; }
```

- *Type:* string

---

##### `SourceFileLocationInput`<sup>Optional</sup> <a name="SourceFileLocationInput" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.property.sourceFileLocationInput"></a>

```csharp
public string SourceFileLocationInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `OverwriteExisting`<sup>Required</sup> <a name="OverwriteExisting" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.property.overwriteExisting"></a>

```csharp
public string OverwriteExisting { get; }
```

- *Type:* string

---

##### `SourceFileLocation`<sup>Required</sup> <a name="SourceFileLocation" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.property.sourceFileLocation"></a>

```csharp
public string SourceFileLocation { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference.property.internalValue"></a>

```csharp
public TransferWorkflowOnExceptionStepsDecryptStepDetails InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetails">TransferWorkflowOnExceptionStepsDecryptStepDetails</a>

---


### TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference <a name="TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.resetSourceFileLocation">ResetSourceFileLocation</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetSourceFileLocation` <a name="ResetSourceFileLocation" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.resetSourceFileLocation"></a>

```csharp
private void ResetSourceFileLocation()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.property.sourceFileLocationInput">SourceFileLocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.property.sourceFileLocation">SourceFileLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetails">TransferWorkflowOnExceptionStepsDeleteStepDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `SourceFileLocationInput`<sup>Optional</sup> <a name="SourceFileLocationInput" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.property.sourceFileLocationInput"></a>

```csharp
public string SourceFileLocationInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `SourceFileLocation`<sup>Required</sup> <a name="SourceFileLocation" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.property.sourceFileLocation"></a>

```csharp
public string SourceFileLocation { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference.property.internalValue"></a>

```csharp
public TransferWorkflowOnExceptionStepsDeleteStepDetails InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetails">TransferWorkflowOnExceptionStepsDeleteStepDetails</a>

---


### TransferWorkflowOnExceptionStepsList <a name="TransferWorkflowOnExceptionStepsList" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new TransferWorkflowOnExceptionStepsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsList.get"></a>

```csharp
private TransferWorkflowOnExceptionStepsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### TransferWorkflowOnExceptionStepsOutputReference <a name="TransferWorkflowOnExceptionStepsOutputReference" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new TransferWorkflowOnExceptionStepsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.putCopyStepDetails">PutCopyStepDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.putCustomStepDetails">PutCustomStepDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.putDecryptStepDetails">PutDecryptStepDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.putDeleteStepDetails">PutDeleteStepDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.putTagStepDetails">PutTagStepDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.resetCopyStepDetails">ResetCopyStepDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.resetCustomStepDetails">ResetCustomStepDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.resetDecryptStepDetails">ResetDecryptStepDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.resetDeleteStepDetails">ResetDeleteStepDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.resetTagStepDetails">ResetTagStepDetails</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCopyStepDetails` <a name="PutCopyStepDetails" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.putCopyStepDetails"></a>

```csharp
private void PutCopyStepDetails(TransferWorkflowOnExceptionStepsCopyStepDetails Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.putCopyStepDetails.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetails">TransferWorkflowOnExceptionStepsCopyStepDetails</a>

---

##### `PutCustomStepDetails` <a name="PutCustomStepDetails" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.putCustomStepDetails"></a>

```csharp
private void PutCustomStepDetails(TransferWorkflowOnExceptionStepsCustomStepDetails Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.putCustomStepDetails.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetails">TransferWorkflowOnExceptionStepsCustomStepDetails</a>

---

##### `PutDecryptStepDetails` <a name="PutDecryptStepDetails" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.putDecryptStepDetails"></a>

```csharp
private void PutDecryptStepDetails(TransferWorkflowOnExceptionStepsDecryptStepDetails Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.putDecryptStepDetails.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetails">TransferWorkflowOnExceptionStepsDecryptStepDetails</a>

---

##### `PutDeleteStepDetails` <a name="PutDeleteStepDetails" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.putDeleteStepDetails"></a>

```csharp
private void PutDeleteStepDetails(TransferWorkflowOnExceptionStepsDeleteStepDetails Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.putDeleteStepDetails.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetails">TransferWorkflowOnExceptionStepsDeleteStepDetails</a>

---

##### `PutTagStepDetails` <a name="PutTagStepDetails" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.putTagStepDetails"></a>

```csharp
private void PutTagStepDetails(TransferWorkflowOnExceptionStepsTagStepDetails Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.putTagStepDetails.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetails">TransferWorkflowOnExceptionStepsTagStepDetails</a>

---

##### `ResetCopyStepDetails` <a name="ResetCopyStepDetails" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.resetCopyStepDetails"></a>

```csharp
private void ResetCopyStepDetails()
```

##### `ResetCustomStepDetails` <a name="ResetCustomStepDetails" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.resetCustomStepDetails"></a>

```csharp
private void ResetCustomStepDetails()
```

##### `ResetDecryptStepDetails` <a name="ResetDecryptStepDetails" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.resetDecryptStepDetails"></a>

```csharp
private void ResetDecryptStepDetails()
```

##### `ResetDeleteStepDetails` <a name="ResetDeleteStepDetails" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.resetDeleteStepDetails"></a>

```csharp
private void ResetDeleteStepDetails()
```

##### `ResetTagStepDetails` <a name="ResetTagStepDetails" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.resetTagStepDetails"></a>

```csharp
private void ResetTagStepDetails()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.property.copyStepDetails">CopyStepDetails</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference">TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.property.customStepDetails">CustomStepDetails</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference">TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.property.decryptStepDetails">DecryptStepDetails</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference">TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.property.deleteStepDetails">DeleteStepDetails</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference">TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.property.tagStepDetails">TagStepDetails</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference">TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.property.copyStepDetailsInput">CopyStepDetailsInput</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetails">TransferWorkflowOnExceptionStepsCopyStepDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.property.customStepDetailsInput">CustomStepDetailsInput</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetails">TransferWorkflowOnExceptionStepsCustomStepDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.property.decryptStepDetailsInput">DecryptStepDetailsInput</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetails">TransferWorkflowOnExceptionStepsDecryptStepDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.property.deleteStepDetailsInput">DeleteStepDetailsInput</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetails">TransferWorkflowOnExceptionStepsDeleteStepDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.property.tagStepDetailsInput">TagStepDetailsInput</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetails">TransferWorkflowOnExceptionStepsTagStepDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CopyStepDetails`<sup>Required</sup> <a name="CopyStepDetails" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.property.copyStepDetails"></a>

```csharp
public TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference CopyStepDetails { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference">TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference</a>

---

##### `CustomStepDetails`<sup>Required</sup> <a name="CustomStepDetails" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.property.customStepDetails"></a>

```csharp
public TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference CustomStepDetails { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference">TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference</a>

---

##### `DecryptStepDetails`<sup>Required</sup> <a name="DecryptStepDetails" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.property.decryptStepDetails"></a>

```csharp
public TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference DecryptStepDetails { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference">TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference</a>

---

##### `DeleteStepDetails`<sup>Required</sup> <a name="DeleteStepDetails" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.property.deleteStepDetails"></a>

```csharp
public TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference DeleteStepDetails { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference">TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference</a>

---

##### `TagStepDetails`<sup>Required</sup> <a name="TagStepDetails" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.property.tagStepDetails"></a>

```csharp
public TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference TagStepDetails { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference">TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference</a>

---

##### `CopyStepDetailsInput`<sup>Optional</sup> <a name="CopyStepDetailsInput" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.property.copyStepDetailsInput"></a>

```csharp
public TransferWorkflowOnExceptionStepsCopyStepDetails CopyStepDetailsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCopyStepDetails">TransferWorkflowOnExceptionStepsCopyStepDetails</a>

---

##### `CustomStepDetailsInput`<sup>Optional</sup> <a name="CustomStepDetailsInput" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.property.customStepDetailsInput"></a>

```csharp
public TransferWorkflowOnExceptionStepsCustomStepDetails CustomStepDetailsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsCustomStepDetails">TransferWorkflowOnExceptionStepsCustomStepDetails</a>

---

##### `DecryptStepDetailsInput`<sup>Optional</sup> <a name="DecryptStepDetailsInput" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.property.decryptStepDetailsInput"></a>

```csharp
public TransferWorkflowOnExceptionStepsDecryptStepDetails DecryptStepDetailsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDecryptStepDetails">TransferWorkflowOnExceptionStepsDecryptStepDetails</a>

---

##### `DeleteStepDetailsInput`<sup>Optional</sup> <a name="DeleteStepDetailsInput" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.property.deleteStepDetailsInput"></a>

```csharp
public TransferWorkflowOnExceptionStepsDeleteStepDetails DeleteStepDetailsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsDeleteStepDetails">TransferWorkflowOnExceptionStepsDeleteStepDetails</a>

---

##### `TagStepDetailsInput`<sup>Optional</sup> <a name="TagStepDetailsInput" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.property.tagStepDetailsInput"></a>

```csharp
public TransferWorkflowOnExceptionStepsTagStepDetails TagStepDetailsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetails">TransferWorkflowOnExceptionStepsTagStepDetails</a>

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference <a name="TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.resetSourceFileLocation">ResetSourceFileLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTags` <a name="PutTags" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.putTags"></a>

```csharp
private void PutTags(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.putTags.parameter.value"></a>

- *Type:* object

---

##### `ResetName` <a name="ResetName" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetSourceFileLocation` <a name="ResetSourceFileLocation" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.resetSourceFileLocation"></a>

```csharp
private void ResetSourceFileLocation()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.resetTags"></a>

```csharp
private void ResetTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.property.tags">Tags</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsList">TransferWorkflowOnExceptionStepsTagStepDetailsTagsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.property.sourceFileLocationInput">SourceFileLocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.property.tagsInput">TagsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.property.sourceFileLocation">SourceFileLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetails">TransferWorkflowOnExceptionStepsTagStepDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.property.tags"></a>

```csharp
public TransferWorkflowOnExceptionStepsTagStepDetailsTagsList Tags { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsList">TransferWorkflowOnExceptionStepsTagStepDetailsTagsList</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `SourceFileLocationInput`<sup>Optional</sup> <a name="SourceFileLocationInput" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.property.sourceFileLocationInput"></a>

```csharp
public string SourceFileLocationInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.property.tagsInput"></a>

```csharp
public object TagsInput { get; }
```

- *Type:* object

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `SourceFileLocation`<sup>Required</sup> <a name="SourceFileLocation" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.property.sourceFileLocation"></a>

```csharp
public string SourceFileLocation { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference.property.internalValue"></a>

```csharp
public TransferWorkflowOnExceptionStepsTagStepDetails InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetails">TransferWorkflowOnExceptionStepsTagStepDetails</a>

---


### TransferWorkflowOnExceptionStepsTagStepDetailsTagsList <a name="TransferWorkflowOnExceptionStepsTagStepDetailsTagsList" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new TransferWorkflowOnExceptionStepsTagStepDetailsTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsList.get"></a>

```csharp
private TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference <a name="TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference <a name="TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.resetFileSystemId">ResetFileSystemId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.resetPath">ResetPath</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFileSystemId` <a name="ResetFileSystemId" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.resetFileSystemId"></a>

```csharp
private void ResetFileSystemId()
```

##### `ResetPath` <a name="ResetPath" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.resetPath"></a>

```csharp
private void ResetPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.property.fileSystemIdInput">FileSystemIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.property.pathInput">PathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.property.fileSystemId">FileSystemId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocation">TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FileSystemIdInput`<sup>Optional</sup> <a name="FileSystemIdInput" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.property.fileSystemIdInput"></a>

```csharp
public string FileSystemIdInput { get; }
```

- *Type:* string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.property.pathInput"></a>

```csharp
public string PathInput { get; }
```

- *Type:* string

---

##### `FileSystemId`<sup>Required</sup> <a name="FileSystemId" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.property.fileSystemId"></a>

```csharp
public string FileSystemId { get; }
```

- *Type:* string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference.property.internalValue"></a>

```csharp
public TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocation InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocation">TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocation</a>

---


### TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference <a name="TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.putEfsFileLocation">PutEfsFileLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.putS3FileLocation">PutS3FileLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.resetEfsFileLocation">ResetEfsFileLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.resetS3FileLocation">ResetS3FileLocation</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEfsFileLocation` <a name="PutEfsFileLocation" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.putEfsFileLocation"></a>

```csharp
private void PutEfsFileLocation(TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocation Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.putEfsFileLocation.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocation">TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocation</a>

---

##### `PutS3FileLocation` <a name="PutS3FileLocation" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.putS3FileLocation"></a>

```csharp
private void PutS3FileLocation(TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocation Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.putS3FileLocation.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocation">TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocation</a>

---

##### `ResetEfsFileLocation` <a name="ResetEfsFileLocation" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.resetEfsFileLocation"></a>

```csharp
private void ResetEfsFileLocation()
```

##### `ResetS3FileLocation` <a name="ResetS3FileLocation" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.resetS3FileLocation"></a>

```csharp
private void ResetS3FileLocation()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.property.efsFileLocation">EfsFileLocation</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference">TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.property.s3FileLocation">S3FileLocation</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference">TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.property.efsFileLocationInput">EfsFileLocationInput</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocation">TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.property.s3FileLocationInput">S3FileLocationInput</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocation">TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocation">TransferWorkflowStepsCopyStepDetailsDestinationFileLocation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EfsFileLocation`<sup>Required</sup> <a name="EfsFileLocation" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.property.efsFileLocation"></a>

```csharp
public TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference EfsFileLocation { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference">TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference</a>

---

##### `S3FileLocation`<sup>Required</sup> <a name="S3FileLocation" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.property.s3FileLocation"></a>

```csharp
public TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference S3FileLocation { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference">TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference</a>

---

##### `EfsFileLocationInput`<sup>Optional</sup> <a name="EfsFileLocationInput" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.property.efsFileLocationInput"></a>

```csharp
public TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocation EfsFileLocationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocation">TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocation</a>

---

##### `S3FileLocationInput`<sup>Optional</sup> <a name="S3FileLocationInput" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.property.s3FileLocationInput"></a>

```csharp
public TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocation S3FileLocationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocation">TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocation</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference.property.internalValue"></a>

```csharp
public TransferWorkflowStepsCopyStepDetailsDestinationFileLocation InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocation">TransferWorkflowStepsCopyStepDetailsDestinationFileLocation</a>

---


### TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference <a name="TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.resetBucket">ResetBucket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.resetKey">ResetKey</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBucket` <a name="ResetBucket" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.resetBucket"></a>

```csharp
private void ResetBucket()
```

##### `ResetKey` <a name="ResetKey" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.bucketInput">BucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.bucket">Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocation">TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.bucketInput"></a>

```csharp
public string BucketInput { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.bucket"></a>

```csharp
public string Bucket { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.internalValue"></a>

```csharp
public TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocation InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocation">TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocation</a>

---


### TransferWorkflowStepsCopyStepDetailsOutputReference <a name="TransferWorkflowStepsCopyStepDetailsOutputReference" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new TransferWorkflowStepsCopyStepDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.putDestinationFileLocation">PutDestinationFileLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.resetDestinationFileLocation">ResetDestinationFileLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.resetOverwriteExisting">ResetOverwriteExisting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.resetSourceFileLocation">ResetSourceFileLocation</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDestinationFileLocation` <a name="PutDestinationFileLocation" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.putDestinationFileLocation"></a>

```csharp
private void PutDestinationFileLocation(TransferWorkflowStepsCopyStepDetailsDestinationFileLocation Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.putDestinationFileLocation.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocation">TransferWorkflowStepsCopyStepDetailsDestinationFileLocation</a>

---

##### `ResetDestinationFileLocation` <a name="ResetDestinationFileLocation" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.resetDestinationFileLocation"></a>

```csharp
private void ResetDestinationFileLocation()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetOverwriteExisting` <a name="ResetOverwriteExisting" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.resetOverwriteExisting"></a>

```csharp
private void ResetOverwriteExisting()
```

##### `ResetSourceFileLocation` <a name="ResetSourceFileLocation" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.resetSourceFileLocation"></a>

```csharp
private void ResetSourceFileLocation()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.property.destinationFileLocation">DestinationFileLocation</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference">TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.property.destinationFileLocationInput">DestinationFileLocationInput</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocation">TransferWorkflowStepsCopyStepDetailsDestinationFileLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.property.overwriteExistingInput">OverwriteExistingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.property.sourceFileLocationInput">SourceFileLocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.property.overwriteExisting">OverwriteExisting</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.property.sourceFileLocation">SourceFileLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetails">TransferWorkflowStepsCopyStepDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DestinationFileLocation`<sup>Required</sup> <a name="DestinationFileLocation" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.property.destinationFileLocation"></a>

```csharp
public TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference DestinationFileLocation { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference">TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference</a>

---

##### `DestinationFileLocationInput`<sup>Optional</sup> <a name="DestinationFileLocationInput" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.property.destinationFileLocationInput"></a>

```csharp
public TransferWorkflowStepsCopyStepDetailsDestinationFileLocation DestinationFileLocationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsDestinationFileLocation">TransferWorkflowStepsCopyStepDetailsDestinationFileLocation</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `OverwriteExistingInput`<sup>Optional</sup> <a name="OverwriteExistingInput" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.property.overwriteExistingInput"></a>

```csharp
public string OverwriteExistingInput { get; }
```

- *Type:* string

---

##### `SourceFileLocationInput`<sup>Optional</sup> <a name="SourceFileLocationInput" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.property.sourceFileLocationInput"></a>

```csharp
public string SourceFileLocationInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `OverwriteExisting`<sup>Required</sup> <a name="OverwriteExisting" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.property.overwriteExisting"></a>

```csharp
public string OverwriteExisting { get; }
```

- *Type:* string

---

##### `SourceFileLocation`<sup>Required</sup> <a name="SourceFileLocation" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.property.sourceFileLocation"></a>

```csharp
public string SourceFileLocation { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference.property.internalValue"></a>

```csharp
public TransferWorkflowStepsCopyStepDetails InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetails">TransferWorkflowStepsCopyStepDetails</a>

---


### TransferWorkflowStepsCustomStepDetailsOutputReference <a name="TransferWorkflowStepsCustomStepDetailsOutputReference" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new TransferWorkflowStepsCustomStepDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.resetSourceFileLocation">ResetSourceFileLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.resetTarget">ResetTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.resetTimeoutSeconds">ResetTimeoutSeconds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetSourceFileLocation` <a name="ResetSourceFileLocation" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.resetSourceFileLocation"></a>

```csharp
private void ResetSourceFileLocation()
```

##### `ResetTarget` <a name="ResetTarget" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.resetTarget"></a>

```csharp
private void ResetTarget()
```

##### `ResetTimeoutSeconds` <a name="ResetTimeoutSeconds" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.resetTimeoutSeconds"></a>

```csharp
private void ResetTimeoutSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.property.sourceFileLocationInput">SourceFileLocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.property.targetInput">TargetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.property.timeoutSecondsInput">TimeoutSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.property.sourceFileLocation">SourceFileLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.property.target">Target</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.property.timeoutSeconds">TimeoutSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetails">TransferWorkflowStepsCustomStepDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `SourceFileLocationInput`<sup>Optional</sup> <a name="SourceFileLocationInput" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.property.sourceFileLocationInput"></a>

```csharp
public string SourceFileLocationInput { get; }
```

- *Type:* string

---

##### `TargetInput`<sup>Optional</sup> <a name="TargetInput" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.property.targetInput"></a>

```csharp
public string TargetInput { get; }
```

- *Type:* string

---

##### `TimeoutSecondsInput`<sup>Optional</sup> <a name="TimeoutSecondsInput" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.property.timeoutSecondsInput"></a>

```csharp
public double TimeoutSecondsInput { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `SourceFileLocation`<sup>Required</sup> <a name="SourceFileLocation" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.property.sourceFileLocation"></a>

```csharp
public string SourceFileLocation { get; }
```

- *Type:* string

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.property.target"></a>

```csharp
public string Target { get; }
```

- *Type:* string

---

##### `TimeoutSeconds`<sup>Required</sup> <a name="TimeoutSeconds" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.property.timeoutSeconds"></a>

```csharp
public double TimeoutSeconds { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference.property.internalValue"></a>

```csharp
public TransferWorkflowStepsCustomStepDetails InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetails">TransferWorkflowStepsCustomStepDetails</a>

---


### TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference <a name="TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.resetFileSystemId">ResetFileSystemId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.resetPath">ResetPath</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFileSystemId` <a name="ResetFileSystemId" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.resetFileSystemId"></a>

```csharp
private void ResetFileSystemId()
```

##### `ResetPath` <a name="ResetPath" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.resetPath"></a>

```csharp
private void ResetPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.property.fileSystemIdInput">FileSystemIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.property.pathInput">PathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.property.fileSystemId">FileSystemId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation">TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FileSystemIdInput`<sup>Optional</sup> <a name="FileSystemIdInput" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.property.fileSystemIdInput"></a>

```csharp
public string FileSystemIdInput { get; }
```

- *Type:* string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.property.pathInput"></a>

```csharp
public string PathInput { get; }
```

- *Type:* string

---

##### `FileSystemId`<sup>Required</sup> <a name="FileSystemId" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.property.fileSystemId"></a>

```csharp
public string FileSystemId { get; }
```

- *Type:* string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference.property.internalValue"></a>

```csharp
public TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation">TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation</a>

---


### TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference <a name="TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.putEfsFileLocation">PutEfsFileLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.putS3FileLocation">PutS3FileLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.resetEfsFileLocation">ResetEfsFileLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.resetS3FileLocation">ResetS3FileLocation</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEfsFileLocation` <a name="PutEfsFileLocation" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.putEfsFileLocation"></a>

```csharp
private void PutEfsFileLocation(TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.putEfsFileLocation.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation">TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation</a>

---

##### `PutS3FileLocation` <a name="PutS3FileLocation" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.putS3FileLocation"></a>

```csharp
private void PutS3FileLocation(TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocation Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.putS3FileLocation.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocation">TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocation</a>

---

##### `ResetEfsFileLocation` <a name="ResetEfsFileLocation" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.resetEfsFileLocation"></a>

```csharp
private void ResetEfsFileLocation()
```

##### `ResetS3FileLocation` <a name="ResetS3FileLocation" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.resetS3FileLocation"></a>

```csharp
private void ResetS3FileLocation()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.property.efsFileLocation">EfsFileLocation</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference">TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.property.s3FileLocation">S3FileLocation</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference">TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.property.efsFileLocationInput">EfsFileLocationInput</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation">TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.property.s3FileLocationInput">S3FileLocationInput</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocation">TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocation">TransferWorkflowStepsDecryptStepDetailsDestinationFileLocation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EfsFileLocation`<sup>Required</sup> <a name="EfsFileLocation" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.property.efsFileLocation"></a>

```csharp
public TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference EfsFileLocation { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference">TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference</a>

---

##### `S3FileLocation`<sup>Required</sup> <a name="S3FileLocation" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.property.s3FileLocation"></a>

```csharp
public TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference S3FileLocation { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference">TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference</a>

---

##### `EfsFileLocationInput`<sup>Optional</sup> <a name="EfsFileLocationInput" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.property.efsFileLocationInput"></a>

```csharp
public TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation EfsFileLocationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation">TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation</a>

---

##### `S3FileLocationInput`<sup>Optional</sup> <a name="S3FileLocationInput" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.property.s3FileLocationInput"></a>

```csharp
public TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocation S3FileLocationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocation">TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocation</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference.property.internalValue"></a>

```csharp
public TransferWorkflowStepsDecryptStepDetailsDestinationFileLocation InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocation">TransferWorkflowStepsDecryptStepDetailsDestinationFileLocation</a>

---


### TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference <a name="TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.resetBucket">ResetBucket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.resetKey">ResetKey</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBucket` <a name="ResetBucket" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.resetBucket"></a>

```csharp
private void ResetBucket()
```

##### `ResetKey` <a name="ResetKey" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.bucketInput">BucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.bucket">Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocation">TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.bucketInput"></a>

```csharp
public string BucketInput { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.bucket"></a>

```csharp
public string Bucket { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference.property.internalValue"></a>

```csharp
public TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocation InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocation">TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocation</a>

---


### TransferWorkflowStepsDecryptStepDetailsOutputReference <a name="TransferWorkflowStepsDecryptStepDetailsOutputReference" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new TransferWorkflowStepsDecryptStepDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.putDestinationFileLocation">PutDestinationFileLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.resetDestinationFileLocation">ResetDestinationFileLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.resetOverwriteExisting">ResetOverwriteExisting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.resetSourceFileLocation">ResetSourceFileLocation</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDestinationFileLocation` <a name="PutDestinationFileLocation" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.putDestinationFileLocation"></a>

```csharp
private void PutDestinationFileLocation(TransferWorkflowStepsDecryptStepDetailsDestinationFileLocation Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.putDestinationFileLocation.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocation">TransferWorkflowStepsDecryptStepDetailsDestinationFileLocation</a>

---

##### `ResetDestinationFileLocation` <a name="ResetDestinationFileLocation" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.resetDestinationFileLocation"></a>

```csharp
private void ResetDestinationFileLocation()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetOverwriteExisting` <a name="ResetOverwriteExisting" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.resetOverwriteExisting"></a>

```csharp
private void ResetOverwriteExisting()
```

##### `ResetSourceFileLocation` <a name="ResetSourceFileLocation" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.resetSourceFileLocation"></a>

```csharp
private void ResetSourceFileLocation()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.property.destinationFileLocation">DestinationFileLocation</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference">TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.property.destinationFileLocationInput">DestinationFileLocationInput</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocation">TransferWorkflowStepsDecryptStepDetailsDestinationFileLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.property.overwriteExistingInput">OverwriteExistingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.property.sourceFileLocationInput">SourceFileLocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.property.overwriteExisting">OverwriteExisting</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.property.sourceFileLocation">SourceFileLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetails">TransferWorkflowStepsDecryptStepDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DestinationFileLocation`<sup>Required</sup> <a name="DestinationFileLocation" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.property.destinationFileLocation"></a>

```csharp
public TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference DestinationFileLocation { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference">TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference</a>

---

##### `DestinationFileLocationInput`<sup>Optional</sup> <a name="DestinationFileLocationInput" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.property.destinationFileLocationInput"></a>

```csharp
public TransferWorkflowStepsDecryptStepDetailsDestinationFileLocation DestinationFileLocationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsDestinationFileLocation">TransferWorkflowStepsDecryptStepDetailsDestinationFileLocation</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `OverwriteExistingInput`<sup>Optional</sup> <a name="OverwriteExistingInput" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.property.overwriteExistingInput"></a>

```csharp
public string OverwriteExistingInput { get; }
```

- *Type:* string

---

##### `SourceFileLocationInput`<sup>Optional</sup> <a name="SourceFileLocationInput" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.property.sourceFileLocationInput"></a>

```csharp
public string SourceFileLocationInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `OverwriteExisting`<sup>Required</sup> <a name="OverwriteExisting" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.property.overwriteExisting"></a>

```csharp
public string OverwriteExisting { get; }
```

- *Type:* string

---

##### `SourceFileLocation`<sup>Required</sup> <a name="SourceFileLocation" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.property.sourceFileLocation"></a>

```csharp
public string SourceFileLocation { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference.property.internalValue"></a>

```csharp
public TransferWorkflowStepsDecryptStepDetails InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetails">TransferWorkflowStepsDecryptStepDetails</a>

---


### TransferWorkflowStepsDeleteStepDetailsOutputReference <a name="TransferWorkflowStepsDeleteStepDetailsOutputReference" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new TransferWorkflowStepsDeleteStepDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.resetSourceFileLocation">ResetSourceFileLocation</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetSourceFileLocation` <a name="ResetSourceFileLocation" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.resetSourceFileLocation"></a>

```csharp
private void ResetSourceFileLocation()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.property.sourceFileLocationInput">SourceFileLocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.property.sourceFileLocation">SourceFileLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDeleteStepDetails">TransferWorkflowStepsDeleteStepDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `SourceFileLocationInput`<sup>Optional</sup> <a name="SourceFileLocationInput" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.property.sourceFileLocationInput"></a>

```csharp
public string SourceFileLocationInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `SourceFileLocation`<sup>Required</sup> <a name="SourceFileLocation" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.property.sourceFileLocation"></a>

```csharp
public string SourceFileLocation { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference.property.internalValue"></a>

```csharp
public TransferWorkflowStepsDeleteStepDetails InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDeleteStepDetails">TransferWorkflowStepsDeleteStepDetails</a>

---


### TransferWorkflowStepsList <a name="TransferWorkflowStepsList" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new TransferWorkflowStepsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsList.get"></a>

```csharp
private TransferWorkflowStepsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### TransferWorkflowStepsOutputReference <a name="TransferWorkflowStepsOutputReference" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new TransferWorkflowStepsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.putCopyStepDetails">PutCopyStepDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.putCustomStepDetails">PutCustomStepDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.putDecryptStepDetails">PutDecryptStepDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.putDeleteStepDetails">PutDeleteStepDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.putTagStepDetails">PutTagStepDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.resetCopyStepDetails">ResetCopyStepDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.resetCustomStepDetails">ResetCustomStepDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.resetDecryptStepDetails">ResetDecryptStepDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.resetDeleteStepDetails">ResetDeleteStepDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.resetTagStepDetails">ResetTagStepDetails</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCopyStepDetails` <a name="PutCopyStepDetails" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.putCopyStepDetails"></a>

```csharp
private void PutCopyStepDetails(TransferWorkflowStepsCopyStepDetails Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.putCopyStepDetails.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetails">TransferWorkflowStepsCopyStepDetails</a>

---

##### `PutCustomStepDetails` <a name="PutCustomStepDetails" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.putCustomStepDetails"></a>

```csharp
private void PutCustomStepDetails(TransferWorkflowStepsCustomStepDetails Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.putCustomStepDetails.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetails">TransferWorkflowStepsCustomStepDetails</a>

---

##### `PutDecryptStepDetails` <a name="PutDecryptStepDetails" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.putDecryptStepDetails"></a>

```csharp
private void PutDecryptStepDetails(TransferWorkflowStepsDecryptStepDetails Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.putDecryptStepDetails.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetails">TransferWorkflowStepsDecryptStepDetails</a>

---

##### `PutDeleteStepDetails` <a name="PutDeleteStepDetails" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.putDeleteStepDetails"></a>

```csharp
private void PutDeleteStepDetails(TransferWorkflowStepsDeleteStepDetails Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.putDeleteStepDetails.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDeleteStepDetails">TransferWorkflowStepsDeleteStepDetails</a>

---

##### `PutTagStepDetails` <a name="PutTagStepDetails" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.putTagStepDetails"></a>

```csharp
private void PutTagStepDetails(TransferWorkflowStepsTagStepDetails Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.putTagStepDetails.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetails">TransferWorkflowStepsTagStepDetails</a>

---

##### `ResetCopyStepDetails` <a name="ResetCopyStepDetails" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.resetCopyStepDetails"></a>

```csharp
private void ResetCopyStepDetails()
```

##### `ResetCustomStepDetails` <a name="ResetCustomStepDetails" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.resetCustomStepDetails"></a>

```csharp
private void ResetCustomStepDetails()
```

##### `ResetDecryptStepDetails` <a name="ResetDecryptStepDetails" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.resetDecryptStepDetails"></a>

```csharp
private void ResetDecryptStepDetails()
```

##### `ResetDeleteStepDetails` <a name="ResetDeleteStepDetails" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.resetDeleteStepDetails"></a>

```csharp
private void ResetDeleteStepDetails()
```

##### `ResetTagStepDetails` <a name="ResetTagStepDetails" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.resetTagStepDetails"></a>

```csharp
private void ResetTagStepDetails()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.property.copyStepDetails">CopyStepDetails</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference">TransferWorkflowStepsCopyStepDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.property.customStepDetails">CustomStepDetails</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference">TransferWorkflowStepsCustomStepDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.property.decryptStepDetails">DecryptStepDetails</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference">TransferWorkflowStepsDecryptStepDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.property.deleteStepDetails">DeleteStepDetails</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference">TransferWorkflowStepsDeleteStepDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.property.tagStepDetails">TagStepDetails</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference">TransferWorkflowStepsTagStepDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.property.copyStepDetailsInput">CopyStepDetailsInput</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetails">TransferWorkflowStepsCopyStepDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.property.customStepDetailsInput">CustomStepDetailsInput</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetails">TransferWorkflowStepsCustomStepDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.property.decryptStepDetailsInput">DecryptStepDetailsInput</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetails">TransferWorkflowStepsDecryptStepDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.property.deleteStepDetailsInput">DeleteStepDetailsInput</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDeleteStepDetails">TransferWorkflowStepsDeleteStepDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.property.tagStepDetailsInput">TagStepDetailsInput</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetails">TransferWorkflowStepsTagStepDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CopyStepDetails`<sup>Required</sup> <a name="CopyStepDetails" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.property.copyStepDetails"></a>

```csharp
public TransferWorkflowStepsCopyStepDetailsOutputReference CopyStepDetails { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetailsOutputReference">TransferWorkflowStepsCopyStepDetailsOutputReference</a>

---

##### `CustomStepDetails`<sup>Required</sup> <a name="CustomStepDetails" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.property.customStepDetails"></a>

```csharp
public TransferWorkflowStepsCustomStepDetailsOutputReference CustomStepDetails { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetailsOutputReference">TransferWorkflowStepsCustomStepDetailsOutputReference</a>

---

##### `DecryptStepDetails`<sup>Required</sup> <a name="DecryptStepDetails" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.property.decryptStepDetails"></a>

```csharp
public TransferWorkflowStepsDecryptStepDetailsOutputReference DecryptStepDetails { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetailsOutputReference">TransferWorkflowStepsDecryptStepDetailsOutputReference</a>

---

##### `DeleteStepDetails`<sup>Required</sup> <a name="DeleteStepDetails" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.property.deleteStepDetails"></a>

```csharp
public TransferWorkflowStepsDeleteStepDetailsOutputReference DeleteStepDetails { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDeleteStepDetailsOutputReference">TransferWorkflowStepsDeleteStepDetailsOutputReference</a>

---

##### `TagStepDetails`<sup>Required</sup> <a name="TagStepDetails" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.property.tagStepDetails"></a>

```csharp
public TransferWorkflowStepsTagStepDetailsOutputReference TagStepDetails { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference">TransferWorkflowStepsTagStepDetailsOutputReference</a>

---

##### `CopyStepDetailsInput`<sup>Optional</sup> <a name="CopyStepDetailsInput" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.property.copyStepDetailsInput"></a>

```csharp
public TransferWorkflowStepsCopyStepDetails CopyStepDetailsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCopyStepDetails">TransferWorkflowStepsCopyStepDetails</a>

---

##### `CustomStepDetailsInput`<sup>Optional</sup> <a name="CustomStepDetailsInput" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.property.customStepDetailsInput"></a>

```csharp
public TransferWorkflowStepsCustomStepDetails CustomStepDetailsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsCustomStepDetails">TransferWorkflowStepsCustomStepDetails</a>

---

##### `DecryptStepDetailsInput`<sup>Optional</sup> <a name="DecryptStepDetailsInput" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.property.decryptStepDetailsInput"></a>

```csharp
public TransferWorkflowStepsDecryptStepDetails DecryptStepDetailsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDecryptStepDetails">TransferWorkflowStepsDecryptStepDetails</a>

---

##### `DeleteStepDetailsInput`<sup>Optional</sup> <a name="DeleteStepDetailsInput" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.property.deleteStepDetailsInput"></a>

```csharp
public TransferWorkflowStepsDeleteStepDetails DeleteStepDetailsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsDeleteStepDetails">TransferWorkflowStepsDeleteStepDetails</a>

---

##### `TagStepDetailsInput`<sup>Optional</sup> <a name="TagStepDetailsInput" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.property.tagStepDetailsInput"></a>

```csharp
public TransferWorkflowStepsTagStepDetails TagStepDetailsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetails">TransferWorkflowStepsTagStepDetails</a>

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### TransferWorkflowStepsTagStepDetailsOutputReference <a name="TransferWorkflowStepsTagStepDetailsOutputReference" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new TransferWorkflowStepsTagStepDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.resetSourceFileLocation">ResetSourceFileLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTags` <a name="PutTags" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.putTags"></a>

```csharp
private void PutTags(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.putTags.parameter.value"></a>

- *Type:* object

---

##### `ResetName` <a name="ResetName" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetSourceFileLocation` <a name="ResetSourceFileLocation" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.resetSourceFileLocation"></a>

```csharp
private void ResetSourceFileLocation()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.resetTags"></a>

```csharp
private void ResetTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.property.tags">Tags</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsList">TransferWorkflowStepsTagStepDetailsTagsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.property.sourceFileLocationInput">SourceFileLocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.property.tagsInput">TagsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.property.sourceFileLocation">SourceFileLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetails">TransferWorkflowStepsTagStepDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.property.tags"></a>

```csharp
public TransferWorkflowStepsTagStepDetailsTagsList Tags { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsList">TransferWorkflowStepsTagStepDetailsTagsList</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `SourceFileLocationInput`<sup>Optional</sup> <a name="SourceFileLocationInput" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.property.sourceFileLocationInput"></a>

```csharp
public string SourceFileLocationInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.property.tagsInput"></a>

```csharp
public object TagsInput { get; }
```

- *Type:* object

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `SourceFileLocation`<sup>Required</sup> <a name="SourceFileLocation" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.property.sourceFileLocation"></a>

```csharp
public string SourceFileLocation { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsOutputReference.property.internalValue"></a>

```csharp
public TransferWorkflowStepsTagStepDetails InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetails">TransferWorkflowStepsTagStepDetails</a>

---


### TransferWorkflowStepsTagStepDetailsTagsList <a name="TransferWorkflowStepsTagStepDetailsTagsList" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new TransferWorkflowStepsTagStepDetailsTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsList.get"></a>

```csharp
private TransferWorkflowStepsTagStepDetailsTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### TransferWorkflowStepsTagStepDetailsTagsOutputReference <a name="TransferWorkflowStepsTagStepDetailsTagsOutputReference" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new TransferWorkflowStepsTagStepDetailsTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.transferWorkflow.TransferWorkflowStepsTagStepDetailsTagsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



