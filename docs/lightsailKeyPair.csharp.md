# `lightsailKeyPair` Submodule <a name="`lightsailKeyPair` Submodule" id="@cdktf/provider-aws.lightsailKeyPair"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LightsailKeyPair <a name="LightsailKeyPair" id="@cdktf/provider-aws.lightsailKeyPair.LightsailKeyPair"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lightsail_key_pair aws_lightsail_key_pair}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lightsailKeyPair.LightsailKeyPair.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LightsailKeyPair(Construct Scope, string Id, LightsailKeyPairConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailKeyPair.LightsailKeyPair.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.lightsailKeyPair.LightsailKeyPair.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.lightsailKeyPair.LightsailKeyPair.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.lightsailKeyPair.LightsailKeyPairConfig">LightsailKeyPairConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.lightsailKeyPair.LightsailKeyPair.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.lightsailKeyPair.LightsailKeyPair.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-aws.lightsailKeyPair.LightsailKeyPair.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.lightsailKeyPair.LightsailKeyPairConfig">LightsailKeyPairConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailKeyPair.LightsailKeyPair.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.lightsailKeyPair.LightsailKeyPair.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailKeyPair.LightsailKeyPair.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.lightsailKeyPair.LightsailKeyPair.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.lightsailKeyPair.LightsailKeyPair.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailKeyPair.LightsailKeyPair.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailKeyPair.LightsailKeyPair.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.lightsailKeyPair.LightsailKeyPair.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.lightsailKeyPair.LightsailKeyPair.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailKeyPair.LightsailKeyPair.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailKeyPair.LightsailKeyPair.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailKeyPair.LightsailKeyPair.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailKeyPair.LightsailKeyPair.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailKeyPair.LightsailKeyPair.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailKeyPair.LightsailKeyPair.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailKeyPair.LightsailKeyPair.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailKeyPair.LightsailKeyPair.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailKeyPair.LightsailKeyPair.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailKeyPair.LightsailKeyPair.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailKeyPair.LightsailKeyPair.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailKeyPair.LightsailKeyPair.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.lightsailKeyPair.LightsailKeyPair.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.lightsailKeyPair.LightsailKeyPair.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.lightsailKeyPair.LightsailKeyPair.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailKeyPair.LightsailKeyPair.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailKeyPair.LightsailKeyPair.resetNamePrefix">ResetNamePrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailKeyPair.LightsailKeyPair.resetPgpKey">ResetPgpKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailKeyPair.LightsailKeyPair.resetPublicKey">ResetPublicKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailKeyPair.LightsailKeyPair.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailKeyPair.LightsailKeyPair.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailKeyPair.LightsailKeyPair.resetTagsAll">ResetTagsAll</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.lightsailKeyPair.LightsailKeyPair.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.lightsailKeyPair.LightsailKeyPair.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.lightsailKeyPair.LightsailKeyPair.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.lightsailKeyPair.LightsailKeyPair.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.lightsailKeyPair.LightsailKeyPair.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.lightsailKeyPair.LightsailKeyPair.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.lightsailKeyPair.LightsailKeyPair.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.lightsailKeyPair.LightsailKeyPair.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.lightsailKeyPair.LightsailKeyPair.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.lightsailKeyPair.LightsailKeyPair.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.lightsailKeyPair.LightsailKeyPair.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.lightsailKeyPair.LightsailKeyPair.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.lightsailKeyPair.LightsailKeyPair.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lightsailKeyPair.LightsailKeyPair.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.lightsailKeyPair.LightsailKeyPair.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lightsailKeyPair.LightsailKeyPair.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.lightsailKeyPair.LightsailKeyPair.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lightsailKeyPair.LightsailKeyPair.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.lightsailKeyPair.LightsailKeyPair.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lightsailKeyPair.LightsailKeyPair.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.lightsailKeyPair.LightsailKeyPair.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lightsailKeyPair.LightsailKeyPair.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.lightsailKeyPair.LightsailKeyPair.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lightsailKeyPair.LightsailKeyPair.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.lightsailKeyPair.LightsailKeyPair.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lightsailKeyPair.LightsailKeyPair.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.lightsailKeyPair.LightsailKeyPair.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lightsailKeyPair.LightsailKeyPair.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.lightsailKeyPair.LightsailKeyPair.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lightsailKeyPair.LightsailKeyPair.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.lightsailKeyPair.LightsailKeyPair.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.lightsailKeyPair.LightsailKeyPair.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.lightsailKeyPair.LightsailKeyPair.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.lightsailKeyPair.LightsailKeyPair.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.lightsailKeyPair.LightsailKeyPair.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lightsailKeyPair.LightsailKeyPair.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.lightsailKeyPair.LightsailKeyPair.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.lightsailKeyPair.LightsailKeyPair.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.lightsailKeyPair.LightsailKeyPair.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.lightsailKeyPair.LightsailKeyPair.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-aws.lightsailKeyPair.LightsailKeyPair.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.lightsailKeyPair.LightsailKeyPair.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.lightsailKeyPair.LightsailKeyPair.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.lightsailKeyPair.LightsailKeyPair.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-aws.lightsailKeyPair.LightsailKeyPair.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetNamePrefix` <a name="ResetNamePrefix" id="@cdktf/provider-aws.lightsailKeyPair.LightsailKeyPair.resetNamePrefix"></a>

```csharp
private void ResetNamePrefix()
```

##### `ResetPgpKey` <a name="ResetPgpKey" id="@cdktf/provider-aws.lightsailKeyPair.LightsailKeyPair.resetPgpKey"></a>

```csharp
private void ResetPgpKey()
```

##### `ResetPublicKey` <a name="ResetPublicKey" id="@cdktf/provider-aws.lightsailKeyPair.LightsailKeyPair.resetPublicKey"></a>

```csharp
private void ResetPublicKey()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-aws.lightsailKeyPair.LightsailKeyPair.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.lightsailKeyPair.LightsailKeyPair.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.lightsailKeyPair.LightsailKeyPair.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailKeyPair.LightsailKeyPair.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.lightsailKeyPair.LightsailKeyPair.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailKeyPair.LightsailKeyPair.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailKeyPair.LightsailKeyPair.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a LightsailKeyPair resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.lightsailKeyPair.LightsailKeyPair.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

LightsailKeyPair.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.lightsailKeyPair.LightsailKeyPair.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.lightsailKeyPair.LightsailKeyPair.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

LightsailKeyPair.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.lightsailKeyPair.LightsailKeyPair.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.lightsailKeyPair.LightsailKeyPair.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

LightsailKeyPair.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.lightsailKeyPair.LightsailKeyPair.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.lightsailKeyPair.LightsailKeyPair.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

LightsailKeyPair.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a LightsailKeyPair resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.lightsailKeyPair.LightsailKeyPair.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-aws.lightsailKeyPair.LightsailKeyPair.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the LightsailKeyPair to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-aws.lightsailKeyPair.LightsailKeyPair.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing LightsailKeyPair that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lightsail_key_pair#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.lightsailKeyPair.LightsailKeyPair.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the LightsailKeyPair to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailKeyPair.LightsailKeyPair.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.lightsailKeyPair.LightsailKeyPair.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailKeyPair.LightsailKeyPair.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailKeyPair.LightsailKeyPair.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailKeyPair.LightsailKeyPair.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailKeyPair.LightsailKeyPair.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailKeyPair.LightsailKeyPair.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailKeyPair.LightsailKeyPair.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailKeyPair.LightsailKeyPair.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailKeyPair.LightsailKeyPair.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailKeyPair.LightsailKeyPair.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailKeyPair.LightsailKeyPair.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailKeyPair.LightsailKeyPair.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailKeyPair.LightsailKeyPair.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailKeyPair.LightsailKeyPair.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailKeyPair.LightsailKeyPair.property.encryptedFingerprint">EncryptedFingerprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailKeyPair.LightsailKeyPair.property.encryptedPrivateKey">EncryptedPrivateKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailKeyPair.LightsailKeyPair.property.fingerprint">Fingerprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailKeyPair.LightsailKeyPair.property.privateKey">PrivateKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailKeyPair.LightsailKeyPair.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailKeyPair.LightsailKeyPair.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailKeyPair.LightsailKeyPair.property.namePrefixInput">NamePrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailKeyPair.LightsailKeyPair.property.pgpKeyInput">PgpKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailKeyPair.LightsailKeyPair.property.publicKeyInput">PublicKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailKeyPair.LightsailKeyPair.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailKeyPair.LightsailKeyPair.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailKeyPair.LightsailKeyPair.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailKeyPair.LightsailKeyPair.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailKeyPair.LightsailKeyPair.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailKeyPair.LightsailKeyPair.property.namePrefix">NamePrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailKeyPair.LightsailKeyPair.property.pgpKey">PgpKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailKeyPair.LightsailKeyPair.property.publicKey">PublicKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailKeyPair.LightsailKeyPair.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailKeyPair.LightsailKeyPair.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailKeyPair.LightsailKeyPair.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.lightsailKeyPair.LightsailKeyPair.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.lightsailKeyPair.LightsailKeyPair.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.lightsailKeyPair.LightsailKeyPair.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.lightsailKeyPair.LightsailKeyPair.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.lightsailKeyPair.LightsailKeyPair.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.lightsailKeyPair.LightsailKeyPair.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.lightsailKeyPair.LightsailKeyPair.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.lightsailKeyPair.LightsailKeyPair.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.lightsailKeyPair.LightsailKeyPair.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.lightsailKeyPair.LightsailKeyPair.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.lightsailKeyPair.LightsailKeyPair.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.lightsailKeyPair.LightsailKeyPair.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.lightsailKeyPair.LightsailKeyPair.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.lightsailKeyPair.LightsailKeyPair.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.lightsailKeyPair.LightsailKeyPair.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `EncryptedFingerprint`<sup>Required</sup> <a name="EncryptedFingerprint" id="@cdktf/provider-aws.lightsailKeyPair.LightsailKeyPair.property.encryptedFingerprint"></a>

```csharp
public string EncryptedFingerprint { get; }
```

- *Type:* string

---

##### `EncryptedPrivateKey`<sup>Required</sup> <a name="EncryptedPrivateKey" id="@cdktf/provider-aws.lightsailKeyPair.LightsailKeyPair.property.encryptedPrivateKey"></a>

```csharp
public string EncryptedPrivateKey { get; }
```

- *Type:* string

---

##### `Fingerprint`<sup>Required</sup> <a name="Fingerprint" id="@cdktf/provider-aws.lightsailKeyPair.LightsailKeyPair.property.fingerprint"></a>

```csharp
public string Fingerprint { get; }
```

- *Type:* string

---

##### `PrivateKey`<sup>Required</sup> <a name="PrivateKey" id="@cdktf/provider-aws.lightsailKeyPair.LightsailKeyPair.property.privateKey"></a>

```csharp
public string PrivateKey { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.lightsailKeyPair.LightsailKeyPair.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.lightsailKeyPair.LightsailKeyPair.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NamePrefixInput`<sup>Optional</sup> <a name="NamePrefixInput" id="@cdktf/provider-aws.lightsailKeyPair.LightsailKeyPair.property.namePrefixInput"></a>

```csharp
public string NamePrefixInput { get; }
```

- *Type:* string

---

##### `PgpKeyInput`<sup>Optional</sup> <a name="PgpKeyInput" id="@cdktf/provider-aws.lightsailKeyPair.LightsailKeyPair.property.pgpKeyInput"></a>

```csharp
public string PgpKeyInput { get; }
```

- *Type:* string

---

##### `PublicKeyInput`<sup>Optional</sup> <a name="PublicKeyInput" id="@cdktf/provider-aws.lightsailKeyPair.LightsailKeyPair.property.publicKeyInput"></a>

```csharp
public string PublicKeyInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-aws.lightsailKeyPair.LightsailKeyPair.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.lightsailKeyPair.LightsailKeyPair.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.lightsailKeyPair.LightsailKeyPair.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.lightsailKeyPair.LightsailKeyPair.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.lightsailKeyPair.LightsailKeyPair.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NamePrefix`<sup>Required</sup> <a name="NamePrefix" id="@cdktf/provider-aws.lightsailKeyPair.LightsailKeyPair.property.namePrefix"></a>

```csharp
public string NamePrefix { get; }
```

- *Type:* string

---

##### `PgpKey`<sup>Required</sup> <a name="PgpKey" id="@cdktf/provider-aws.lightsailKeyPair.LightsailKeyPair.property.pgpKey"></a>

```csharp
public string PgpKey { get; }
```

- *Type:* string

---

##### `PublicKey`<sup>Required</sup> <a name="PublicKey" id="@cdktf/provider-aws.lightsailKeyPair.LightsailKeyPair.property.publicKey"></a>

```csharp
public string PublicKey { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-aws.lightsailKeyPair.LightsailKeyPair.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.lightsailKeyPair.LightsailKeyPair.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.lightsailKeyPair.LightsailKeyPair.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailKeyPair.LightsailKeyPair.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.lightsailKeyPair.LightsailKeyPair.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LightsailKeyPairConfig <a name="LightsailKeyPairConfig" id="@cdktf/provider-aws.lightsailKeyPair.LightsailKeyPairConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lightsailKeyPair.LightsailKeyPairConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LightsailKeyPairConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Id = null,
    string Name = null,
    string NamePrefix = null,
    string PgpKey = null,
    string PublicKey = null,
    string Region = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailKeyPair.LightsailKeyPairConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailKeyPair.LightsailKeyPairConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailKeyPair.LightsailKeyPairConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailKeyPair.LightsailKeyPairConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailKeyPair.LightsailKeyPairConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailKeyPair.LightsailKeyPairConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailKeyPair.LightsailKeyPairConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailKeyPair.LightsailKeyPairConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lightsail_key_pair#id LightsailKeyPair#id}. |
| <code><a href="#@cdktf/provider-aws.lightsailKeyPair.LightsailKeyPairConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lightsail_key_pair#name LightsailKeyPair#name}. |
| <code><a href="#@cdktf/provider-aws.lightsailKeyPair.LightsailKeyPairConfig.property.namePrefix">NamePrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lightsail_key_pair#name_prefix LightsailKeyPair#name_prefix}. |
| <code><a href="#@cdktf/provider-aws.lightsailKeyPair.LightsailKeyPairConfig.property.pgpKey">PgpKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lightsail_key_pair#pgp_key LightsailKeyPair#pgp_key}. |
| <code><a href="#@cdktf/provider-aws.lightsailKeyPair.LightsailKeyPairConfig.property.publicKey">PublicKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lightsail_key_pair#public_key LightsailKeyPair#public_key}. |
| <code><a href="#@cdktf/provider-aws.lightsailKeyPair.LightsailKeyPairConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.lightsailKeyPair.LightsailKeyPairConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lightsail_key_pair#tags LightsailKeyPair#tags}. |
| <code><a href="#@cdktf/provider-aws.lightsailKeyPair.LightsailKeyPairConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lightsail_key_pair#tags_all LightsailKeyPair#tags_all}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.lightsailKeyPair.LightsailKeyPairConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.lightsailKeyPair.LightsailKeyPairConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.lightsailKeyPair.LightsailKeyPairConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.lightsailKeyPair.LightsailKeyPairConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.lightsailKeyPair.LightsailKeyPairConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.lightsailKeyPair.LightsailKeyPairConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.lightsailKeyPair.LightsailKeyPairConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.lightsailKeyPair.LightsailKeyPairConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lightsail_key_pair#id LightsailKeyPair#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-aws.lightsailKeyPair.LightsailKeyPairConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lightsail_key_pair#name LightsailKeyPair#name}.

---

##### `NamePrefix`<sup>Optional</sup> <a name="NamePrefix" id="@cdktf/provider-aws.lightsailKeyPair.LightsailKeyPairConfig.property.namePrefix"></a>

```csharp
public string NamePrefix { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lightsail_key_pair#name_prefix LightsailKeyPair#name_prefix}.

---

##### `PgpKey`<sup>Optional</sup> <a name="PgpKey" id="@cdktf/provider-aws.lightsailKeyPair.LightsailKeyPairConfig.property.pgpKey"></a>

```csharp
public string PgpKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lightsail_key_pair#pgp_key LightsailKeyPair#pgp_key}.

---

##### `PublicKey`<sup>Optional</sup> <a name="PublicKey" id="@cdktf/provider-aws.lightsailKeyPair.LightsailKeyPairConfig.property.publicKey"></a>

```csharp
public string PublicKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lightsail_key_pair#public_key LightsailKeyPair#public_key}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-aws.lightsailKeyPair.LightsailKeyPairConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lightsail_key_pair#region LightsailKeyPair#region}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.lightsailKeyPair.LightsailKeyPairConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lightsail_key_pair#tags LightsailKeyPair#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.lightsailKeyPair.LightsailKeyPairConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lightsail_key_pair#tags_all LightsailKeyPair#tags_all}.

---



