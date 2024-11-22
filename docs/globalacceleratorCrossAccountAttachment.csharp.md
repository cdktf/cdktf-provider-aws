# `globalacceleratorCrossAccountAttachment` Submodule <a name="`globalacceleratorCrossAccountAttachment` Submodule" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GlobalacceleratorCrossAccountAttachment <a name="GlobalacceleratorCrossAccountAttachment" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/globalaccelerator_cross_account_attachment aws_globalaccelerator_cross_account_attachment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new GlobalacceleratorCrossAccountAttachment(Construct Scope, string Id, GlobalacceleratorCrossAccountAttachmentConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentConfig">GlobalacceleratorCrossAccountAttachmentConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentConfig">GlobalacceleratorCrossAccountAttachmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.putResource">PutResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.resetPrincipals">ResetPrincipals</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.resetResource">ResetResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutResource` <a name="PutResource" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.putResource"></a>

```csharp
private void PutResource(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.putResource.parameter.value"></a>

- *Type:* object

---

##### `ResetPrincipals` <a name="ResetPrincipals" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.resetPrincipals"></a>

```csharp
private void ResetPrincipals()
```

##### `ResetResource` <a name="ResetResource" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.resetResource"></a>

```csharp
private void ResetResource()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GlobalacceleratorCrossAccountAttachment resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

GlobalacceleratorCrossAccountAttachment.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

GlobalacceleratorCrossAccountAttachment.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

GlobalacceleratorCrossAccountAttachment.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

GlobalacceleratorCrossAccountAttachment.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GlobalacceleratorCrossAccountAttachment resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GlobalacceleratorCrossAccountAttachment to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GlobalacceleratorCrossAccountAttachment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/globalaccelerator_cross_account_attachment#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GlobalacceleratorCrossAccountAttachment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.createdTime">CreatedTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.lastModifiedTime">LastModifiedTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.resource">Resource</a></code> | <code><a href="#@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourceList">GlobalacceleratorCrossAccountAttachmentResourceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.tagsAll">TagsAll</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.principalsInput">PrincipalsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.resourceInput">ResourceInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.principals">Principals</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `CreatedTime`<sup>Required</sup> <a name="CreatedTime" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.createdTime"></a>

```csharp
public string CreatedTime { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LastModifiedTime`<sup>Required</sup> <a name="LastModifiedTime" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.lastModifiedTime"></a>

```csharp
public string LastModifiedTime { get; }
```

- *Type:* string

---

##### `Resource`<sup>Required</sup> <a name="Resource" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.resource"></a>

```csharp
public GlobalacceleratorCrossAccountAttachmentResourceList Resource { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourceList">GlobalacceleratorCrossAccountAttachmentResourceList</a>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.tagsAll"></a>

```csharp
public StringMap TagsAll { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PrincipalsInput`<sup>Optional</sup> <a name="PrincipalsInput" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.principalsInput"></a>

```csharp
public string[] PrincipalsInput { get; }
```

- *Type:* string[]

---

##### `ResourceInput`<sup>Optional</sup> <a name="ResourceInput" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.resourceInput"></a>

```csharp
public object ResourceInput { get; }
```

- *Type:* object

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Principals`<sup>Required</sup> <a name="Principals" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.principals"></a>

```csharp
public string[] Principals { get; }
```

- *Type:* string[]

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachment.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GlobalacceleratorCrossAccountAttachmentConfig <a name="GlobalacceleratorCrossAccountAttachmentConfig" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new GlobalacceleratorCrossAccountAttachmentConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    string[] Principals = null,
    object Resource = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/globalaccelerator_cross_account_attachment#name GlobalacceleratorCrossAccountAttachment#name}. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentConfig.property.principals">Principals</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/globalaccelerator_cross_account_attachment#principals GlobalacceleratorCrossAccountAttachment#principals}. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentConfig.property.resource">Resource</a></code> | <code>object</code> | resource block. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/globalaccelerator_cross_account_attachment#tags GlobalacceleratorCrossAccountAttachment#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/globalaccelerator_cross_account_attachment#name GlobalacceleratorCrossAccountAttachment#name}.

---

##### `Principals`<sup>Optional</sup> <a name="Principals" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentConfig.property.principals"></a>

```csharp
public string[] Principals { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/globalaccelerator_cross_account_attachment#principals GlobalacceleratorCrossAccountAttachment#principals}.

---

##### `Resource`<sup>Optional</sup> <a name="Resource" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentConfig.property.resource"></a>

```csharp
public object Resource { get; set; }
```

- *Type:* object

resource block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/globalaccelerator_cross_account_attachment#resource GlobalacceleratorCrossAccountAttachment#resource}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/globalaccelerator_cross_account_attachment#tags GlobalacceleratorCrossAccountAttachment#tags}.

---

### GlobalacceleratorCrossAccountAttachmentResource <a name="GlobalacceleratorCrossAccountAttachmentResource" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResource.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new GlobalacceleratorCrossAccountAttachmentResource {
    string CidrBlock = null,
    string EndpointId = null,
    string Region = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResource.property.cidrBlock">CidrBlock</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/globalaccelerator_cross_account_attachment#cidr_block GlobalacceleratorCrossAccountAttachment#cidr_block}. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResource.property.endpointId">EndpointId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/globalaccelerator_cross_account_attachment#endpoint_id GlobalacceleratorCrossAccountAttachment#endpoint_id}. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResource.property.region">Region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/globalaccelerator_cross_account_attachment#region GlobalacceleratorCrossAccountAttachment#region}. |

---

##### `CidrBlock`<sup>Optional</sup> <a name="CidrBlock" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResource.property.cidrBlock"></a>

```csharp
public string CidrBlock { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/globalaccelerator_cross_account_attachment#cidr_block GlobalacceleratorCrossAccountAttachment#cidr_block}.

---

##### `EndpointId`<sup>Optional</sup> <a name="EndpointId" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResource.property.endpointId"></a>

```csharp
public string EndpointId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/globalaccelerator_cross_account_attachment#endpoint_id GlobalacceleratorCrossAccountAttachment#endpoint_id}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResource.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/globalaccelerator_cross_account_attachment#region GlobalacceleratorCrossAccountAttachment#region}.

---

## Classes <a name="Classes" id="Classes"></a>

### GlobalacceleratorCrossAccountAttachmentResourceList <a name="GlobalacceleratorCrossAccountAttachmentResourceList" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourceList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new GlobalacceleratorCrossAccountAttachmentResourceList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourceList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourceList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourceList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourceList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourceList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourceList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourceList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourceList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourceList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourceList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourceList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourceList.get"></a>

```csharp
private GlobalacceleratorCrossAccountAttachmentResourceOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourceList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourceList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourceList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourceList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourceList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourceList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourceList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GlobalacceleratorCrossAccountAttachmentResourceOutputReference <a name="GlobalacceleratorCrossAccountAttachmentResourceOutputReference" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new GlobalacceleratorCrossAccountAttachmentResourceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourceOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourceOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourceOutputReference.resetCidrBlock">ResetCidrBlock</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourceOutputReference.resetEndpointId">ResetEndpointId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourceOutputReference.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCidrBlock` <a name="ResetCidrBlock" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourceOutputReference.resetCidrBlock"></a>

```csharp
private void ResetCidrBlock()
```

##### `ResetEndpointId` <a name="ResetEndpointId" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourceOutputReference.resetEndpointId"></a>

```csharp
private void ResetEndpointId()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourceOutputReference.resetRegion"></a>

```csharp
private void ResetRegion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourceOutputReference.property.cidrBlockInput">CidrBlockInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourceOutputReference.property.endpointIdInput">EndpointIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourceOutputReference.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourceOutputReference.property.cidrBlock">CidrBlock</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourceOutputReference.property.endpointId">EndpointId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourceOutputReference.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourceOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CidrBlockInput`<sup>Optional</sup> <a name="CidrBlockInput" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourceOutputReference.property.cidrBlockInput"></a>

```csharp
public string CidrBlockInput { get; }
```

- *Type:* string

---

##### `EndpointIdInput`<sup>Optional</sup> <a name="EndpointIdInput" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourceOutputReference.property.endpointIdInput"></a>

```csharp
public string EndpointIdInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourceOutputReference.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `CidrBlock`<sup>Required</sup> <a name="CidrBlock" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourceOutputReference.property.cidrBlock"></a>

```csharp
public string CidrBlock { get; }
```

- *Type:* string

---

##### `EndpointId`<sup>Required</sup> <a name="EndpointId" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourceOutputReference.property.endpointId"></a>

```csharp
public string EndpointId { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourceOutputReference.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.globalacceleratorCrossAccountAttachment.GlobalacceleratorCrossAccountAttachmentResourceOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



