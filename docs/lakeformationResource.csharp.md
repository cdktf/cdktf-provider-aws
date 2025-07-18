# `lakeformationResource` Submodule <a name="`lakeformationResource` Submodule" id="@cdktf/provider-aws.lakeformationResource"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LakeformationResource <a name="LakeformationResource" id="@cdktf/provider-aws.lakeformationResource.LakeformationResource"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lakeformation_resource aws_lakeformation_resource}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lakeformationResource.LakeformationResource.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LakeformationResource(Construct Scope, string Id, LakeformationResourceConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationResource.LakeformationResource.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.lakeformationResource.LakeformationResource.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.lakeformationResource.LakeformationResource.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.lakeformationResource.LakeformationResourceConfig">LakeformationResourceConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.lakeformationResource.LakeformationResource.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.lakeformationResource.LakeformationResource.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.lakeformationResource.LakeformationResource.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.lakeformationResource.LakeformationResourceConfig">LakeformationResourceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationResource.LakeformationResource.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.lakeformationResource.LakeformationResource.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResource.LakeformationResource.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.lakeformationResource.LakeformationResource.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.lakeformationResource.LakeformationResource.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResource.LakeformationResource.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResource.LakeformationResource.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.lakeformationResource.LakeformationResource.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.lakeformationResource.LakeformationResource.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResource.LakeformationResource.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResource.LakeformationResource.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResource.LakeformationResource.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResource.LakeformationResource.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResource.LakeformationResource.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResource.LakeformationResource.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResource.LakeformationResource.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResource.LakeformationResource.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResource.LakeformationResource.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResource.LakeformationResource.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResource.LakeformationResource.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResource.LakeformationResource.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.lakeformationResource.LakeformationResource.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.lakeformationResource.LakeformationResource.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.lakeformationResource.LakeformationResource.resetHybridAccessEnabled">ResetHybridAccessEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResource.LakeformationResource.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResource.LakeformationResource.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResource.LakeformationResource.resetRoleArn">ResetRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResource.LakeformationResource.resetUseServiceLinkedRole">ResetUseServiceLinkedRole</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResource.LakeformationResource.resetWithFederation">ResetWithFederation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResource.LakeformationResource.resetWithPrivilegedAccess">ResetWithPrivilegedAccess</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.lakeformationResource.LakeformationResource.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.lakeformationResource.LakeformationResource.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.lakeformationResource.LakeformationResource.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.lakeformationResource.LakeformationResource.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.lakeformationResource.LakeformationResource.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.lakeformationResource.LakeformationResource.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.lakeformationResource.LakeformationResource.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.lakeformationResource.LakeformationResource.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.lakeformationResource.LakeformationResource.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.lakeformationResource.LakeformationResource.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.lakeformationResource.LakeformationResource.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.lakeformationResource.LakeformationResource.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.lakeformationResource.LakeformationResource.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lakeformationResource.LakeformationResource.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.lakeformationResource.LakeformationResource.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lakeformationResource.LakeformationResource.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.lakeformationResource.LakeformationResource.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lakeformationResource.LakeformationResource.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.lakeformationResource.LakeformationResource.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lakeformationResource.LakeformationResource.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.lakeformationResource.LakeformationResource.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lakeformationResource.LakeformationResource.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.lakeformationResource.LakeformationResource.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lakeformationResource.LakeformationResource.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.lakeformationResource.LakeformationResource.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lakeformationResource.LakeformationResource.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.lakeformationResource.LakeformationResource.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lakeformationResource.LakeformationResource.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.lakeformationResource.LakeformationResource.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lakeformationResource.LakeformationResource.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.lakeformationResource.LakeformationResource.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.lakeformationResource.LakeformationResource.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.lakeformationResource.LakeformationResource.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.lakeformationResource.LakeformationResource.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.lakeformationResource.LakeformationResource.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.lakeformationResource.LakeformationResource.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.lakeformationResource.LakeformationResource.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.lakeformationResource.LakeformationResource.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.lakeformationResource.LakeformationResource.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.lakeformationResource.LakeformationResource.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-aws.lakeformationResource.LakeformationResource.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.lakeformationResource.LakeformationResource.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.lakeformationResource.LakeformationResource.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetHybridAccessEnabled` <a name="ResetHybridAccessEnabled" id="@cdktf/provider-aws.lakeformationResource.LakeformationResource.resetHybridAccessEnabled"></a>

```csharp
private void ResetHybridAccessEnabled()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.lakeformationResource.LakeformationResource.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-aws.lakeformationResource.LakeformationResource.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetRoleArn` <a name="ResetRoleArn" id="@cdktf/provider-aws.lakeformationResource.LakeformationResource.resetRoleArn"></a>

```csharp
private void ResetRoleArn()
```

##### `ResetUseServiceLinkedRole` <a name="ResetUseServiceLinkedRole" id="@cdktf/provider-aws.lakeformationResource.LakeformationResource.resetUseServiceLinkedRole"></a>

```csharp
private void ResetUseServiceLinkedRole()
```

##### `ResetWithFederation` <a name="ResetWithFederation" id="@cdktf/provider-aws.lakeformationResource.LakeformationResource.resetWithFederation"></a>

```csharp
private void ResetWithFederation()
```

##### `ResetWithPrivilegedAccess` <a name="ResetWithPrivilegedAccess" id="@cdktf/provider-aws.lakeformationResource.LakeformationResource.resetWithPrivilegedAccess"></a>

```csharp
private void ResetWithPrivilegedAccess()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationResource.LakeformationResource.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.lakeformationResource.LakeformationResource.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResource.LakeformationResource.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResource.LakeformationResource.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a LakeformationResource resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.lakeformationResource.LakeformationResource.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

LakeformationResource.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.lakeformationResource.LakeformationResource.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.lakeformationResource.LakeformationResource.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

LakeformationResource.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.lakeformationResource.LakeformationResource.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.lakeformationResource.LakeformationResource.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

LakeformationResource.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.lakeformationResource.LakeformationResource.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.lakeformationResource.LakeformationResource.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

LakeformationResource.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a LakeformationResource resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.lakeformationResource.LakeformationResource.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-aws.lakeformationResource.LakeformationResource.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the LakeformationResource to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-aws.lakeformationResource.LakeformationResource.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing LakeformationResource that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lakeformation_resource#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.lakeformationResource.LakeformationResource.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the LakeformationResource to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationResource.LakeformationResource.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.lakeformationResource.LakeformationResource.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResource.LakeformationResource.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResource.LakeformationResource.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResource.LakeformationResource.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResource.LakeformationResource.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResource.LakeformationResource.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResource.LakeformationResource.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResource.LakeformationResource.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResource.LakeformationResource.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResource.LakeformationResource.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResource.LakeformationResource.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResource.LakeformationResource.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResource.LakeformationResource.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResource.LakeformationResource.property.lastModified">LastModified</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResource.LakeformationResource.property.arnInput">ArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResource.LakeformationResource.property.hybridAccessEnabledInput">HybridAccessEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResource.LakeformationResource.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResource.LakeformationResource.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResource.LakeformationResource.property.roleArnInput">RoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResource.LakeformationResource.property.useServiceLinkedRoleInput">UseServiceLinkedRoleInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResource.LakeformationResource.property.withFederationInput">WithFederationInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResource.LakeformationResource.property.withPrivilegedAccessInput">WithPrivilegedAccessInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResource.LakeformationResource.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResource.LakeformationResource.property.hybridAccessEnabled">HybridAccessEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResource.LakeformationResource.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResource.LakeformationResource.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResource.LakeformationResource.property.roleArn">RoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResource.LakeformationResource.property.useServiceLinkedRole">UseServiceLinkedRole</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResource.LakeformationResource.property.withFederation">WithFederation</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResource.LakeformationResource.property.withPrivilegedAccess">WithPrivilegedAccess</a></code> | <code>object</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.lakeformationResource.LakeformationResource.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.lakeformationResource.LakeformationResource.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.lakeformationResource.LakeformationResource.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.lakeformationResource.LakeformationResource.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.lakeformationResource.LakeformationResource.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.lakeformationResource.LakeformationResource.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.lakeformationResource.LakeformationResource.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.lakeformationResource.LakeformationResource.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.lakeformationResource.LakeformationResource.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.lakeformationResource.LakeformationResource.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.lakeformationResource.LakeformationResource.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.lakeformationResource.LakeformationResource.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.lakeformationResource.LakeformationResource.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.lakeformationResource.LakeformationResource.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `LastModified`<sup>Required</sup> <a name="LastModified" id="@cdktf/provider-aws.lakeformationResource.LakeformationResource.property.lastModified"></a>

```csharp
public string LastModified { get; }
```

- *Type:* string

---

##### `ArnInput`<sup>Optional</sup> <a name="ArnInput" id="@cdktf/provider-aws.lakeformationResource.LakeformationResource.property.arnInput"></a>

```csharp
public string ArnInput { get; }
```

- *Type:* string

---

##### `HybridAccessEnabledInput`<sup>Optional</sup> <a name="HybridAccessEnabledInput" id="@cdktf/provider-aws.lakeformationResource.LakeformationResource.property.hybridAccessEnabledInput"></a>

```csharp
public object HybridAccessEnabledInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.lakeformationResource.LakeformationResource.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-aws.lakeformationResource.LakeformationResource.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktf/provider-aws.lakeformationResource.LakeformationResource.property.roleArnInput"></a>

```csharp
public string RoleArnInput { get; }
```

- *Type:* string

---

##### `UseServiceLinkedRoleInput`<sup>Optional</sup> <a name="UseServiceLinkedRoleInput" id="@cdktf/provider-aws.lakeformationResource.LakeformationResource.property.useServiceLinkedRoleInput"></a>

```csharp
public object UseServiceLinkedRoleInput { get; }
```

- *Type:* object

---

##### `WithFederationInput`<sup>Optional</sup> <a name="WithFederationInput" id="@cdktf/provider-aws.lakeformationResource.LakeformationResource.property.withFederationInput"></a>

```csharp
public object WithFederationInput { get; }
```

- *Type:* object

---

##### `WithPrivilegedAccessInput`<sup>Optional</sup> <a name="WithPrivilegedAccessInput" id="@cdktf/provider-aws.lakeformationResource.LakeformationResource.property.withPrivilegedAccessInput"></a>

```csharp
public object WithPrivilegedAccessInput { get; }
```

- *Type:* object

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.lakeformationResource.LakeformationResource.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `HybridAccessEnabled`<sup>Required</sup> <a name="HybridAccessEnabled" id="@cdktf/provider-aws.lakeformationResource.LakeformationResource.property.hybridAccessEnabled"></a>

```csharp
public object HybridAccessEnabled { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.lakeformationResource.LakeformationResource.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-aws.lakeformationResource.LakeformationResource.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktf/provider-aws.lakeformationResource.LakeformationResource.property.roleArn"></a>

```csharp
public string RoleArn { get; }
```

- *Type:* string

---

##### `UseServiceLinkedRole`<sup>Required</sup> <a name="UseServiceLinkedRole" id="@cdktf/provider-aws.lakeformationResource.LakeformationResource.property.useServiceLinkedRole"></a>

```csharp
public object UseServiceLinkedRole { get; }
```

- *Type:* object

---

##### `WithFederation`<sup>Required</sup> <a name="WithFederation" id="@cdktf/provider-aws.lakeformationResource.LakeformationResource.property.withFederation"></a>

```csharp
public object WithFederation { get; }
```

- *Type:* object

---

##### `WithPrivilegedAccess`<sup>Required</sup> <a name="WithPrivilegedAccess" id="@cdktf/provider-aws.lakeformationResource.LakeformationResource.property.withPrivilegedAccess"></a>

```csharp
public object WithPrivilegedAccess { get; }
```

- *Type:* object

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationResource.LakeformationResource.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.lakeformationResource.LakeformationResource.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LakeformationResourceConfig <a name="LakeformationResourceConfig" id="@cdktf/provider-aws.lakeformationResource.LakeformationResourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lakeformationResource.LakeformationResourceConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new LakeformationResourceConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Arn,
    object HybridAccessEnabled = null,
    string Id = null,
    string Region = null,
    string RoleArn = null,
    object UseServiceLinkedRole = null,
    object WithFederation = null,
    object WithPrivilegedAccess = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationResource.LakeformationResourceConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResource.LakeformationResourceConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResource.LakeformationResourceConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResource.LakeformationResourceConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResource.LakeformationResourceConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResource.LakeformationResourceConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResource.LakeformationResourceConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationResource.LakeformationResourceConfig.property.arn">Arn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lakeformation_resource#arn LakeformationResource#arn}. |
| <code><a href="#@cdktf/provider-aws.lakeformationResource.LakeformationResourceConfig.property.hybridAccessEnabled">HybridAccessEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lakeformation_resource#hybrid_access_enabled LakeformationResource#hybrid_access_enabled}. |
| <code><a href="#@cdktf/provider-aws.lakeformationResource.LakeformationResourceConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lakeformation_resource#id LakeformationResource#id}. |
| <code><a href="#@cdktf/provider-aws.lakeformationResource.LakeformationResourceConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.lakeformationResource.LakeformationResourceConfig.property.roleArn">RoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lakeformation_resource#role_arn LakeformationResource#role_arn}. |
| <code><a href="#@cdktf/provider-aws.lakeformationResource.LakeformationResourceConfig.property.useServiceLinkedRole">UseServiceLinkedRole</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lakeformation_resource#use_service_linked_role LakeformationResource#use_service_linked_role}. |
| <code><a href="#@cdktf/provider-aws.lakeformationResource.LakeformationResourceConfig.property.withFederation">WithFederation</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lakeformation_resource#with_federation LakeformationResource#with_federation}. |
| <code><a href="#@cdktf/provider-aws.lakeformationResource.LakeformationResourceConfig.property.withPrivilegedAccess">WithPrivilegedAccess</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lakeformation_resource#with_privileged_access LakeformationResource#with_privileged_access}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.lakeformationResource.LakeformationResourceConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.lakeformationResource.LakeformationResourceConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.lakeformationResource.LakeformationResourceConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.lakeformationResource.LakeformationResourceConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.lakeformationResource.LakeformationResourceConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.lakeformationResource.LakeformationResourceConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.lakeformationResource.LakeformationResourceConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.lakeformationResource.LakeformationResourceConfig.property.arn"></a>

```csharp
public string Arn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lakeformation_resource#arn LakeformationResource#arn}.

---

##### `HybridAccessEnabled`<sup>Optional</sup> <a name="HybridAccessEnabled" id="@cdktf/provider-aws.lakeformationResource.LakeformationResourceConfig.property.hybridAccessEnabled"></a>

```csharp
public object HybridAccessEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lakeformation_resource#hybrid_access_enabled LakeformationResource#hybrid_access_enabled}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.lakeformationResource.LakeformationResourceConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lakeformation_resource#id LakeformationResource#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-aws.lakeformationResource.LakeformationResourceConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lakeformation_resource#region LakeformationResource#region}

---

##### `RoleArn`<sup>Optional</sup> <a name="RoleArn" id="@cdktf/provider-aws.lakeformationResource.LakeformationResourceConfig.property.roleArn"></a>

```csharp
public string RoleArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lakeformation_resource#role_arn LakeformationResource#role_arn}.

---

##### `UseServiceLinkedRole`<sup>Optional</sup> <a name="UseServiceLinkedRole" id="@cdktf/provider-aws.lakeformationResource.LakeformationResourceConfig.property.useServiceLinkedRole"></a>

```csharp
public object UseServiceLinkedRole { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lakeformation_resource#use_service_linked_role LakeformationResource#use_service_linked_role}.

---

##### `WithFederation`<sup>Optional</sup> <a name="WithFederation" id="@cdktf/provider-aws.lakeformationResource.LakeformationResourceConfig.property.withFederation"></a>

```csharp
public object WithFederation { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lakeformation_resource#with_federation LakeformationResource#with_federation}.

---

##### `WithPrivilegedAccess`<sup>Optional</sup> <a name="WithPrivilegedAccess" id="@cdktf/provider-aws.lakeformationResource.LakeformationResourceConfig.property.withPrivilegedAccess"></a>

```csharp
public object WithPrivilegedAccess { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lakeformation_resource#with_privileged_access LakeformationResource#with_privileged_access}.

---



