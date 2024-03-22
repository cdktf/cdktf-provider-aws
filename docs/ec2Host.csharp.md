# `ec2Host` Submodule <a name="`ec2Host` Submodule" id="@cdktf/provider-aws.ec2Host"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2Host <a name="Ec2Host" id="@cdktf/provider-aws.ec2Host.Ec2Host"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/ec2_host aws_ec2_host}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ec2Host.Ec2Host.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Ec2Host(Construct Scope, string Id, Ec2HostConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2Host.Ec2Host.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.ec2Host.Ec2Host.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.ec2Host.Ec2Host.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.ec2Host.Ec2HostConfig">Ec2HostConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.ec2Host.Ec2Host.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.ec2Host.Ec2Host.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.ec2Host.Ec2Host.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.ec2Host.Ec2HostConfig">Ec2HostConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2Host.Ec2Host.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.ec2Host.Ec2Host.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Host.Ec2Host.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.ec2Host.Ec2Host.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.ec2Host.Ec2Host.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Host.Ec2Host.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Host.Ec2Host.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.ec2Host.Ec2Host.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.ec2Host.Ec2Host.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Host.Ec2Host.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Host.Ec2Host.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Host.Ec2Host.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Host.Ec2Host.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Host.Ec2Host.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Host.Ec2Host.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Host.Ec2Host.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Host.Ec2Host.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Host.Ec2Host.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Host.Ec2Host.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Host.Ec2Host.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Host.Ec2Host.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.ec2Host.Ec2Host.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.ec2Host.Ec2Host.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.ec2Host.Ec2Host.resetAssetId">ResetAssetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Host.Ec2Host.resetAutoPlacement">ResetAutoPlacement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Host.Ec2Host.resetHostRecovery">ResetHostRecovery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Host.Ec2Host.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Host.Ec2Host.resetInstanceFamily">ResetInstanceFamily</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Host.Ec2Host.resetInstanceType">ResetInstanceType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Host.Ec2Host.resetOutpostArn">ResetOutpostArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Host.Ec2Host.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Host.Ec2Host.resetTagsAll">ResetTagsAll</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ec2Host.Ec2Host.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.ec2Host.Ec2Host.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.ec2Host.Ec2Host.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.ec2Host.Ec2Host.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.ec2Host.Ec2Host.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.ec2Host.Ec2Host.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.ec2Host.Ec2Host.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.ec2Host.Ec2Host.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.ec2Host.Ec2Host.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.ec2Host.Ec2Host.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.ec2Host.Ec2Host.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.ec2Host.Ec2Host.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.ec2Host.Ec2Host.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ec2Host.Ec2Host.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.ec2Host.Ec2Host.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ec2Host.Ec2Host.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.ec2Host.Ec2Host.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ec2Host.Ec2Host.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.ec2Host.Ec2Host.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ec2Host.Ec2Host.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.ec2Host.Ec2Host.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ec2Host.Ec2Host.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.ec2Host.Ec2Host.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ec2Host.Ec2Host.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.ec2Host.Ec2Host.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ec2Host.Ec2Host.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.ec2Host.Ec2Host.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ec2Host.Ec2Host.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.ec2Host.Ec2Host.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ec2Host.Ec2Host.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.ec2Host.Ec2Host.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.ec2Host.Ec2Host.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.ec2Host.Ec2Host.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.ec2Host.Ec2Host.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.ec2Host.Ec2Host.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ec2Host.Ec2Host.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.ec2Host.Ec2Host.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.ec2Host.Ec2Host.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.ec2Host.Ec2Host.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.ec2Host.Ec2Host.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-aws.ec2Host.Ec2Host.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.ec2Host.Ec2Host.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.ec2Host.Ec2Host.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetAssetId` <a name="ResetAssetId" id="@cdktf/provider-aws.ec2Host.Ec2Host.resetAssetId"></a>

```csharp
private void ResetAssetId()
```

##### `ResetAutoPlacement` <a name="ResetAutoPlacement" id="@cdktf/provider-aws.ec2Host.Ec2Host.resetAutoPlacement"></a>

```csharp
private void ResetAutoPlacement()
```

##### `ResetHostRecovery` <a name="ResetHostRecovery" id="@cdktf/provider-aws.ec2Host.Ec2Host.resetHostRecovery"></a>

```csharp
private void ResetHostRecovery()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.ec2Host.Ec2Host.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetInstanceFamily` <a name="ResetInstanceFamily" id="@cdktf/provider-aws.ec2Host.Ec2Host.resetInstanceFamily"></a>

```csharp
private void ResetInstanceFamily()
```

##### `ResetInstanceType` <a name="ResetInstanceType" id="@cdktf/provider-aws.ec2Host.Ec2Host.resetInstanceType"></a>

```csharp
private void ResetInstanceType()
```

##### `ResetOutpostArn` <a name="ResetOutpostArn" id="@cdktf/provider-aws.ec2Host.Ec2Host.resetOutpostArn"></a>

```csharp
private void ResetOutpostArn()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.ec2Host.Ec2Host.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.ec2Host.Ec2Host.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2Host.Ec2Host.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.ec2Host.Ec2Host.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Host.Ec2Host.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Host.Ec2Host.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a Ec2Host resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.ec2Host.Ec2Host.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

Ec2Host.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.ec2Host.Ec2Host.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.ec2Host.Ec2Host.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

Ec2Host.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.ec2Host.Ec2Host.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.ec2Host.Ec2Host.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

Ec2Host.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.ec2Host.Ec2Host.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.ec2Host.Ec2Host.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

Ec2Host.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a Ec2Host resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.ec2Host.Ec2Host.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-aws.ec2Host.Ec2Host.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Ec2Host to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-aws.ec2Host.Ec2Host.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Ec2Host that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/ec2_host#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.ec2Host.Ec2Host.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the Ec2Host to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2Host.Ec2Host.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.ec2Host.Ec2Host.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Host.Ec2Host.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Host.Ec2Host.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Host.Ec2Host.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Host.Ec2Host.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Host.Ec2Host.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Host.Ec2Host.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Host.Ec2Host.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Host.Ec2Host.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Host.Ec2Host.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Host.Ec2Host.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Host.Ec2Host.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Host.Ec2Host.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Host.Ec2Host.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Host.Ec2Host.property.ownerId">OwnerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Host.Ec2Host.property.assetIdInput">AssetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Host.Ec2Host.property.autoPlacementInput">AutoPlacementInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Host.Ec2Host.property.availabilityZoneInput">AvailabilityZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Host.Ec2Host.property.hostRecoveryInput">HostRecoveryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Host.Ec2Host.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Host.Ec2Host.property.instanceFamilyInput">InstanceFamilyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Host.Ec2Host.property.instanceTypeInput">InstanceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Host.Ec2Host.property.outpostArnInput">OutpostArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Host.Ec2Host.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Host.Ec2Host.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Host.Ec2Host.property.assetId">AssetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Host.Ec2Host.property.autoPlacement">AutoPlacement</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Host.Ec2Host.property.availabilityZone">AvailabilityZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Host.Ec2Host.property.hostRecovery">HostRecovery</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Host.Ec2Host.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Host.Ec2Host.property.instanceFamily">InstanceFamily</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Host.Ec2Host.property.instanceType">InstanceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Host.Ec2Host.property.outpostArn">OutpostArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Host.Ec2Host.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Host.Ec2Host.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.ec2Host.Ec2Host.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.ec2Host.Ec2Host.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ec2Host.Ec2Host.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.ec2Host.Ec2Host.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.ec2Host.Ec2Host.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.ec2Host.Ec2Host.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.ec2Host.Ec2Host.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.ec2Host.Ec2Host.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.ec2Host.Ec2Host.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.ec2Host.Ec2Host.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.ec2Host.Ec2Host.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.ec2Host.Ec2Host.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.ec2Host.Ec2Host.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.ec2Host.Ec2Host.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.ec2Host.Ec2Host.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `OwnerId`<sup>Required</sup> <a name="OwnerId" id="@cdktf/provider-aws.ec2Host.Ec2Host.property.ownerId"></a>

```csharp
public string OwnerId { get; }
```

- *Type:* string

---

##### `AssetIdInput`<sup>Optional</sup> <a name="AssetIdInput" id="@cdktf/provider-aws.ec2Host.Ec2Host.property.assetIdInput"></a>

```csharp
public string AssetIdInput { get; }
```

- *Type:* string

---

##### `AutoPlacementInput`<sup>Optional</sup> <a name="AutoPlacementInput" id="@cdktf/provider-aws.ec2Host.Ec2Host.property.autoPlacementInput"></a>

```csharp
public string AutoPlacementInput { get; }
```

- *Type:* string

---

##### `AvailabilityZoneInput`<sup>Optional</sup> <a name="AvailabilityZoneInput" id="@cdktf/provider-aws.ec2Host.Ec2Host.property.availabilityZoneInput"></a>

```csharp
public string AvailabilityZoneInput { get; }
```

- *Type:* string

---

##### `HostRecoveryInput`<sup>Optional</sup> <a name="HostRecoveryInput" id="@cdktf/provider-aws.ec2Host.Ec2Host.property.hostRecoveryInput"></a>

```csharp
public string HostRecoveryInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.ec2Host.Ec2Host.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InstanceFamilyInput`<sup>Optional</sup> <a name="InstanceFamilyInput" id="@cdktf/provider-aws.ec2Host.Ec2Host.property.instanceFamilyInput"></a>

```csharp
public string InstanceFamilyInput { get; }
```

- *Type:* string

---

##### `InstanceTypeInput`<sup>Optional</sup> <a name="InstanceTypeInput" id="@cdktf/provider-aws.ec2Host.Ec2Host.property.instanceTypeInput"></a>

```csharp
public string InstanceTypeInput { get; }
```

- *Type:* string

---

##### `OutpostArnInput`<sup>Optional</sup> <a name="OutpostArnInput" id="@cdktf/provider-aws.ec2Host.Ec2Host.property.outpostArnInput"></a>

```csharp
public string OutpostArnInput { get; }
```

- *Type:* string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.ec2Host.Ec2Host.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.ec2Host.Ec2Host.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `AssetId`<sup>Required</sup> <a name="AssetId" id="@cdktf/provider-aws.ec2Host.Ec2Host.property.assetId"></a>

```csharp
public string AssetId { get; }
```

- *Type:* string

---

##### `AutoPlacement`<sup>Required</sup> <a name="AutoPlacement" id="@cdktf/provider-aws.ec2Host.Ec2Host.property.autoPlacement"></a>

```csharp
public string AutoPlacement { get; }
```

- *Type:* string

---

##### `AvailabilityZone`<sup>Required</sup> <a name="AvailabilityZone" id="@cdktf/provider-aws.ec2Host.Ec2Host.property.availabilityZone"></a>

```csharp
public string AvailabilityZone { get; }
```

- *Type:* string

---

##### `HostRecovery`<sup>Required</sup> <a name="HostRecovery" id="@cdktf/provider-aws.ec2Host.Ec2Host.property.hostRecovery"></a>

```csharp
public string HostRecovery { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.ec2Host.Ec2Host.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InstanceFamily`<sup>Required</sup> <a name="InstanceFamily" id="@cdktf/provider-aws.ec2Host.Ec2Host.property.instanceFamily"></a>

```csharp
public string InstanceFamily { get; }
```

- *Type:* string

---

##### `InstanceType`<sup>Required</sup> <a name="InstanceType" id="@cdktf/provider-aws.ec2Host.Ec2Host.property.instanceType"></a>

```csharp
public string InstanceType { get; }
```

- *Type:* string

---

##### `OutpostArn`<sup>Required</sup> <a name="OutpostArn" id="@cdktf/provider-aws.ec2Host.Ec2Host.property.outpostArn"></a>

```csharp
public string OutpostArn { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.ec2Host.Ec2Host.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.ec2Host.Ec2Host.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2Host.Ec2Host.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.ec2Host.Ec2Host.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2HostConfig <a name="Ec2HostConfig" id="@cdktf/provider-aws.ec2Host.Ec2HostConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ec2Host.Ec2HostConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Ec2HostConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AvailabilityZone,
    string AssetId = null,
    string AutoPlacement = null,
    string HostRecovery = null,
    string Id = null,
    string InstanceFamily = null,
    string InstanceType = null,
    string OutpostArn = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2Host.Ec2HostConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Host.Ec2HostConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Host.Ec2HostConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Host.Ec2HostConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Host.Ec2HostConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Host.Ec2HostConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Host.Ec2HostConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2Host.Ec2HostConfig.property.availabilityZone">AvailabilityZone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/ec2_host#availability_zone Ec2Host#availability_zone}. |
| <code><a href="#@cdktf/provider-aws.ec2Host.Ec2HostConfig.property.assetId">AssetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/ec2_host#asset_id Ec2Host#asset_id}. |
| <code><a href="#@cdktf/provider-aws.ec2Host.Ec2HostConfig.property.autoPlacement">AutoPlacement</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/ec2_host#auto_placement Ec2Host#auto_placement}. |
| <code><a href="#@cdktf/provider-aws.ec2Host.Ec2HostConfig.property.hostRecovery">HostRecovery</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/ec2_host#host_recovery Ec2Host#host_recovery}. |
| <code><a href="#@cdktf/provider-aws.ec2Host.Ec2HostConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/ec2_host#id Ec2Host#id}. |
| <code><a href="#@cdktf/provider-aws.ec2Host.Ec2HostConfig.property.instanceFamily">InstanceFamily</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/ec2_host#instance_family Ec2Host#instance_family}. |
| <code><a href="#@cdktf/provider-aws.ec2Host.Ec2HostConfig.property.instanceType">InstanceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/ec2_host#instance_type Ec2Host#instance_type}. |
| <code><a href="#@cdktf/provider-aws.ec2Host.Ec2HostConfig.property.outpostArn">OutpostArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/ec2_host#outpost_arn Ec2Host#outpost_arn}. |
| <code><a href="#@cdktf/provider-aws.ec2Host.Ec2HostConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/ec2_host#tags Ec2Host#tags}. |
| <code><a href="#@cdktf/provider-aws.ec2Host.Ec2HostConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/ec2_host#tags_all Ec2Host#tags_all}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.ec2Host.Ec2HostConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.ec2Host.Ec2HostConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.ec2Host.Ec2HostConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.ec2Host.Ec2HostConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.ec2Host.Ec2HostConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.ec2Host.Ec2HostConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.ec2Host.Ec2HostConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AvailabilityZone`<sup>Required</sup> <a name="AvailabilityZone" id="@cdktf/provider-aws.ec2Host.Ec2HostConfig.property.availabilityZone"></a>

```csharp
public string AvailabilityZone { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/ec2_host#availability_zone Ec2Host#availability_zone}.

---

##### `AssetId`<sup>Optional</sup> <a name="AssetId" id="@cdktf/provider-aws.ec2Host.Ec2HostConfig.property.assetId"></a>

```csharp
public string AssetId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/ec2_host#asset_id Ec2Host#asset_id}.

---

##### `AutoPlacement`<sup>Optional</sup> <a name="AutoPlacement" id="@cdktf/provider-aws.ec2Host.Ec2HostConfig.property.autoPlacement"></a>

```csharp
public string AutoPlacement { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/ec2_host#auto_placement Ec2Host#auto_placement}.

---

##### `HostRecovery`<sup>Optional</sup> <a name="HostRecovery" id="@cdktf/provider-aws.ec2Host.Ec2HostConfig.property.hostRecovery"></a>

```csharp
public string HostRecovery { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/ec2_host#host_recovery Ec2Host#host_recovery}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.ec2Host.Ec2HostConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/ec2_host#id Ec2Host#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InstanceFamily`<sup>Optional</sup> <a name="InstanceFamily" id="@cdktf/provider-aws.ec2Host.Ec2HostConfig.property.instanceFamily"></a>

```csharp
public string InstanceFamily { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/ec2_host#instance_family Ec2Host#instance_family}.

---

##### `InstanceType`<sup>Optional</sup> <a name="InstanceType" id="@cdktf/provider-aws.ec2Host.Ec2HostConfig.property.instanceType"></a>

```csharp
public string InstanceType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/ec2_host#instance_type Ec2Host#instance_type}.

---

##### `OutpostArn`<sup>Optional</sup> <a name="OutpostArn" id="@cdktf/provider-aws.ec2Host.Ec2HostConfig.property.outpostArn"></a>

```csharp
public string OutpostArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/ec2_host#outpost_arn Ec2Host#outpost_arn}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.ec2Host.Ec2HostConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/ec2_host#tags Ec2Host#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.ec2Host.Ec2HostConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/ec2_host#tags_all Ec2Host#tags_all}.

---



