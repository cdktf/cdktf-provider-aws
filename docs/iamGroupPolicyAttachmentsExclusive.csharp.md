# `iamGroupPolicyAttachmentsExclusive` Submodule <a name="`iamGroupPolicyAttachmentsExclusive` Submodule" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IamGroupPolicyAttachmentsExclusive <a name="IamGroupPolicyAttachmentsExclusive" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iam_group_policy_attachments_exclusive aws_iam_group_policy_attachments_exclusive}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new IamGroupPolicyAttachmentsExclusive(Construct Scope, string Id, IamGroupPolicyAttachmentsExclusiveConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusiveConfig">IamGroupPolicyAttachmentsExclusiveConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusiveConfig">IamGroupPolicyAttachmentsExclusiveConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a IamGroupPolicyAttachmentsExclusive resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

IamGroupPolicyAttachmentsExclusive.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

IamGroupPolicyAttachmentsExclusive.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

IamGroupPolicyAttachmentsExclusive.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

IamGroupPolicyAttachmentsExclusive.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a IamGroupPolicyAttachmentsExclusive resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IamGroupPolicyAttachmentsExclusive to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IamGroupPolicyAttachmentsExclusive that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iam_group_policy_attachments_exclusive#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the IamGroupPolicyAttachmentsExclusive to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.property.groupNameInput">GroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.property.policyArnsInput">PolicyArnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.property.groupName">GroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.property.policyArns">PolicyArns</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `GroupNameInput`<sup>Optional</sup> <a name="GroupNameInput" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.property.groupNameInput"></a>

```csharp
public string GroupNameInput { get; }
```

- *Type:* string

---

##### `PolicyArnsInput`<sup>Optional</sup> <a name="PolicyArnsInput" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.property.policyArnsInput"></a>

```csharp
public string[] PolicyArnsInput { get; }
```

- *Type:* string[]

---

##### `GroupName`<sup>Required</sup> <a name="GroupName" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.property.groupName"></a>

```csharp
public string GroupName { get; }
```

- *Type:* string

---

##### `PolicyArns`<sup>Required</sup> <a name="PolicyArns" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.property.policyArns"></a>

```csharp
public string[] PolicyArns { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusive.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IamGroupPolicyAttachmentsExclusiveConfig <a name="IamGroupPolicyAttachmentsExclusiveConfig" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusiveConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusiveConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new IamGroupPolicyAttachmentsExclusiveConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string GroupName,
    string[] PolicyArns
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusiveConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusiveConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusiveConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusiveConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusiveConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusiveConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusiveConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusiveConfig.property.groupName">GroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iam_group_policy_attachments_exclusive#group_name IamGroupPolicyAttachmentsExclusive#group_name}. |
| <code><a href="#@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusiveConfig.property.policyArns">PolicyArns</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iam_group_policy_attachments_exclusive#policy_arns IamGroupPolicyAttachmentsExclusive#policy_arns}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusiveConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusiveConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusiveConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusiveConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusiveConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusiveConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusiveConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `GroupName`<sup>Required</sup> <a name="GroupName" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusiveConfig.property.groupName"></a>

```csharp
public string GroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iam_group_policy_attachments_exclusive#group_name IamGroupPolicyAttachmentsExclusive#group_name}.

---

##### `PolicyArns`<sup>Required</sup> <a name="PolicyArns" id="@cdktf/provider-aws.iamGroupPolicyAttachmentsExclusive.IamGroupPolicyAttachmentsExclusiveConfig.property.policyArns"></a>

```csharp
public string[] PolicyArns { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iam_group_policy_attachments_exclusive#policy_arns IamGroupPolicyAttachmentsExclusive#policy_arns}.

---



