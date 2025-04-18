# `verifiedaccessInstance` Submodule <a name="`verifiedaccessInstance` Submodule" id="@cdktf/provider-aws.verifiedaccessInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VerifiedaccessInstance <a name="VerifiedaccessInstance" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/verifiedaccess_instance aws_verifiedaccess_instance}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new VerifiedaccessInstance(Construct Scope, string Id, VerifiedaccessInstanceConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstanceConfig">VerifiedaccessInstanceConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstanceConfig">VerifiedaccessInstanceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.resetCidrEndpointsCustomSubdomain">ResetCidrEndpointsCustomSubdomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.resetFipsEnabled">ResetFipsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.resetTagsAll">ResetTagsAll</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetCidrEndpointsCustomSubdomain` <a name="ResetCidrEndpointsCustomSubdomain" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.resetCidrEndpointsCustomSubdomain"></a>

```csharp
private void ResetCidrEndpointsCustomSubdomain()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetFipsEnabled` <a name="ResetFipsEnabled" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.resetFipsEnabled"></a>

```csharp
private void ResetFipsEnabled()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a VerifiedaccessInstance resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

VerifiedaccessInstance.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

VerifiedaccessInstance.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

VerifiedaccessInstance.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

VerifiedaccessInstance.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a VerifiedaccessInstance resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the VerifiedaccessInstance to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing VerifiedaccessInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/verifiedaccess_instance#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the VerifiedaccessInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.property.creationTime">CreationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.property.lastUpdatedTime">LastUpdatedTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.property.nameServers">NameServers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.property.verifiedAccessTrustProviders">VerifiedAccessTrustProviders</a></code> | <code><a href="#@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstanceVerifiedAccessTrustProvidersList">VerifiedaccessInstanceVerifiedAccessTrustProvidersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.property.cidrEndpointsCustomSubdomainInput">CidrEndpointsCustomSubdomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.property.fipsEnabledInput">FipsEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.property.cidrEndpointsCustomSubdomain">CidrEndpointsCustomSubdomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.property.fipsEnabled">FipsEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CreationTime`<sup>Required</sup> <a name="CreationTime" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.property.creationTime"></a>

```csharp
public string CreationTime { get; }
```

- *Type:* string

---

##### `LastUpdatedTime`<sup>Required</sup> <a name="LastUpdatedTime" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.property.lastUpdatedTime"></a>

```csharp
public string LastUpdatedTime { get; }
```

- *Type:* string

---

##### `NameServers`<sup>Required</sup> <a name="NameServers" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.property.nameServers"></a>

```csharp
public string[] NameServers { get; }
```

- *Type:* string[]

---

##### `VerifiedAccessTrustProviders`<sup>Required</sup> <a name="VerifiedAccessTrustProviders" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.property.verifiedAccessTrustProviders"></a>

```csharp
public VerifiedaccessInstanceVerifiedAccessTrustProvidersList VerifiedAccessTrustProviders { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstanceVerifiedAccessTrustProvidersList">VerifiedaccessInstanceVerifiedAccessTrustProvidersList</a>

---

##### `CidrEndpointsCustomSubdomainInput`<sup>Optional</sup> <a name="CidrEndpointsCustomSubdomainInput" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.property.cidrEndpointsCustomSubdomainInput"></a>

```csharp
public string CidrEndpointsCustomSubdomainInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `FipsEnabledInput`<sup>Optional</sup> <a name="FipsEnabledInput" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.property.fipsEnabledInput"></a>

```csharp
public object FipsEnabledInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `CidrEndpointsCustomSubdomain`<sup>Required</sup> <a name="CidrEndpointsCustomSubdomain" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.property.cidrEndpointsCustomSubdomain"></a>

```csharp
public string CidrEndpointsCustomSubdomain { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `FipsEnabled`<sup>Required</sup> <a name="FipsEnabled" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.property.fipsEnabled"></a>

```csharp
public object FipsEnabled { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstance.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### VerifiedaccessInstanceConfig <a name="VerifiedaccessInstanceConfig" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstanceConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new VerifiedaccessInstanceConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CidrEndpointsCustomSubdomain = null,
    string Description = null,
    object FipsEnabled = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstanceConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstanceConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstanceConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstanceConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstanceConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstanceConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstanceConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstanceConfig.property.cidrEndpointsCustomSubdomain">CidrEndpointsCustomSubdomain</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/verifiedaccess_instance#cidr_endpoints_custom_subdomain VerifiedaccessInstance#cidr_endpoints_custom_subdomain}. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstanceConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/verifiedaccess_instance#description VerifiedaccessInstance#description}. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstanceConfig.property.fipsEnabled">FipsEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/verifiedaccess_instance#fips_enabled VerifiedaccessInstance#fips_enabled}. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstanceConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/verifiedaccess_instance#id VerifiedaccessInstance#id}. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstanceConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/verifiedaccess_instance#tags VerifiedaccessInstance#tags}. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstanceConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/verifiedaccess_instance#tags_all VerifiedaccessInstance#tags_all}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstanceConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstanceConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstanceConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstanceConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstanceConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstanceConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstanceConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CidrEndpointsCustomSubdomain`<sup>Optional</sup> <a name="CidrEndpointsCustomSubdomain" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstanceConfig.property.cidrEndpointsCustomSubdomain"></a>

```csharp
public string CidrEndpointsCustomSubdomain { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/verifiedaccess_instance#cidr_endpoints_custom_subdomain VerifiedaccessInstance#cidr_endpoints_custom_subdomain}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstanceConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/verifiedaccess_instance#description VerifiedaccessInstance#description}.

---

##### `FipsEnabled`<sup>Optional</sup> <a name="FipsEnabled" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstanceConfig.property.fipsEnabled"></a>

```csharp
public object FipsEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/verifiedaccess_instance#fips_enabled VerifiedaccessInstance#fips_enabled}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstanceConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/verifiedaccess_instance#id VerifiedaccessInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstanceConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/verifiedaccess_instance#tags VerifiedaccessInstance#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstanceConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/verifiedaccess_instance#tags_all VerifiedaccessInstance#tags_all}.

---

### VerifiedaccessInstanceVerifiedAccessTrustProviders <a name="VerifiedaccessInstanceVerifiedAccessTrustProviders" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstanceVerifiedAccessTrustProviders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstanceVerifiedAccessTrustProviders.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new VerifiedaccessInstanceVerifiedAccessTrustProviders {

};
```


## Classes <a name="Classes" id="Classes"></a>

### VerifiedaccessInstanceVerifiedAccessTrustProvidersList <a name="VerifiedaccessInstanceVerifiedAccessTrustProvidersList" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstanceVerifiedAccessTrustProvidersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstanceVerifiedAccessTrustProvidersList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new VerifiedaccessInstanceVerifiedAccessTrustProvidersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstanceVerifiedAccessTrustProvidersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstanceVerifiedAccessTrustProvidersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstanceVerifiedAccessTrustProvidersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstanceVerifiedAccessTrustProvidersList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstanceVerifiedAccessTrustProvidersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstanceVerifiedAccessTrustProvidersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstanceVerifiedAccessTrustProvidersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstanceVerifiedAccessTrustProvidersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstanceVerifiedAccessTrustProvidersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstanceVerifiedAccessTrustProvidersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstanceVerifiedAccessTrustProvidersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstanceVerifiedAccessTrustProvidersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstanceVerifiedAccessTrustProvidersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstanceVerifiedAccessTrustProvidersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstanceVerifiedAccessTrustProvidersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstanceVerifiedAccessTrustProvidersList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstanceVerifiedAccessTrustProvidersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstanceVerifiedAccessTrustProvidersList.get"></a>

```csharp
private VerifiedaccessInstanceVerifiedAccessTrustProvidersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstanceVerifiedAccessTrustProvidersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstanceVerifiedAccessTrustProvidersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstanceVerifiedAccessTrustProvidersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstanceVerifiedAccessTrustProvidersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstanceVerifiedAccessTrustProvidersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### VerifiedaccessInstanceVerifiedAccessTrustProvidersOutputReference <a name="VerifiedaccessInstanceVerifiedAccessTrustProvidersOutputReference" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstanceVerifiedAccessTrustProvidersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstanceVerifiedAccessTrustProvidersOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new VerifiedaccessInstanceVerifiedAccessTrustProvidersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstanceVerifiedAccessTrustProvidersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstanceVerifiedAccessTrustProvidersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstanceVerifiedAccessTrustProvidersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstanceVerifiedAccessTrustProvidersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstanceVerifiedAccessTrustProvidersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstanceVerifiedAccessTrustProvidersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstanceVerifiedAccessTrustProvidersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstanceVerifiedAccessTrustProvidersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstanceVerifiedAccessTrustProvidersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstanceVerifiedAccessTrustProvidersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstanceVerifiedAccessTrustProvidersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstanceVerifiedAccessTrustProvidersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstanceVerifiedAccessTrustProvidersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstanceVerifiedAccessTrustProvidersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstanceVerifiedAccessTrustProvidersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstanceVerifiedAccessTrustProvidersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstanceVerifiedAccessTrustProvidersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstanceVerifiedAccessTrustProvidersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstanceVerifiedAccessTrustProvidersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstanceVerifiedAccessTrustProvidersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstanceVerifiedAccessTrustProvidersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstanceVerifiedAccessTrustProvidersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstanceVerifiedAccessTrustProvidersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstanceVerifiedAccessTrustProvidersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstanceVerifiedAccessTrustProvidersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstanceVerifiedAccessTrustProvidersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstanceVerifiedAccessTrustProvidersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstanceVerifiedAccessTrustProvidersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstanceVerifiedAccessTrustProvidersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstanceVerifiedAccessTrustProvidersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstanceVerifiedAccessTrustProvidersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstanceVerifiedAccessTrustProvidersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstanceVerifiedAccessTrustProvidersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstanceVerifiedAccessTrustProvidersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstanceVerifiedAccessTrustProvidersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstanceVerifiedAccessTrustProvidersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstanceVerifiedAccessTrustProvidersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstanceVerifiedAccessTrustProvidersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstanceVerifiedAccessTrustProvidersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstanceVerifiedAccessTrustProvidersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstanceVerifiedAccessTrustProvidersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstanceVerifiedAccessTrustProvidersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstanceVerifiedAccessTrustProvidersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstanceVerifiedAccessTrustProvidersOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstanceVerifiedAccessTrustProvidersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstanceVerifiedAccessTrustProvidersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstanceVerifiedAccessTrustProvidersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstanceVerifiedAccessTrustProvidersOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstanceVerifiedAccessTrustProvidersOutputReference.property.deviceTrustProviderType">DeviceTrustProviderType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstanceVerifiedAccessTrustProvidersOutputReference.property.trustProviderType">TrustProviderType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstanceVerifiedAccessTrustProvidersOutputReference.property.userTrustProviderType">UserTrustProviderType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstanceVerifiedAccessTrustProvidersOutputReference.property.verifiedAccessTrustProviderId">VerifiedAccessTrustProviderId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstanceVerifiedAccessTrustProvidersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstanceVerifiedAccessTrustProviders">VerifiedaccessInstanceVerifiedAccessTrustProviders</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstanceVerifiedAccessTrustProvidersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstanceVerifiedAccessTrustProvidersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstanceVerifiedAccessTrustProvidersOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DeviceTrustProviderType`<sup>Required</sup> <a name="DeviceTrustProviderType" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstanceVerifiedAccessTrustProvidersOutputReference.property.deviceTrustProviderType"></a>

```csharp
public string DeviceTrustProviderType { get; }
```

- *Type:* string

---

##### `TrustProviderType`<sup>Required</sup> <a name="TrustProviderType" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstanceVerifiedAccessTrustProvidersOutputReference.property.trustProviderType"></a>

```csharp
public string TrustProviderType { get; }
```

- *Type:* string

---

##### `UserTrustProviderType`<sup>Required</sup> <a name="UserTrustProviderType" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstanceVerifiedAccessTrustProvidersOutputReference.property.userTrustProviderType"></a>

```csharp
public string UserTrustProviderType { get; }
```

- *Type:* string

---

##### `VerifiedAccessTrustProviderId`<sup>Required</sup> <a name="VerifiedAccessTrustProviderId" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstanceVerifiedAccessTrustProvidersOutputReference.property.verifiedAccessTrustProviderId"></a>

```csharp
public string VerifiedAccessTrustProviderId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstanceVerifiedAccessTrustProvidersOutputReference.property.internalValue"></a>

```csharp
public VerifiedaccessInstanceVerifiedAccessTrustProviders InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.verifiedaccessInstance.VerifiedaccessInstanceVerifiedAccessTrustProviders">VerifiedaccessInstanceVerifiedAccessTrustProviders</a>

---



