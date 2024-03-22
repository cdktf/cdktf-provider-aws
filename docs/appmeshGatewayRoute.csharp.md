# `appmeshGatewayRoute` Submodule <a name="`appmeshGatewayRoute` Submodule" id="@cdktf/provider-aws.appmeshGatewayRoute"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppmeshGatewayRoute <a name="AppmeshGatewayRoute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/appmesh_gateway_route aws_appmesh_gateway_route}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppmeshGatewayRoute(Construct Scope, string Id, AppmeshGatewayRouteConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteConfig">AppmeshGatewayRouteConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteConfig">AppmeshGatewayRouteConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.putSpec">PutSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.resetMeshOwner">ResetMeshOwner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.resetTagsAll">ResetTagsAll</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutSpec` <a name="PutSpec" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.putSpec"></a>

```csharp
private void PutSpec(AppmeshGatewayRouteSpec Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.putSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpec">AppmeshGatewayRouteSpec</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetMeshOwner` <a name="ResetMeshOwner" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.resetMeshOwner"></a>

```csharp
private void ResetMeshOwner()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a AppmeshGatewayRoute resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

AppmeshGatewayRoute.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

AppmeshGatewayRoute.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

AppmeshGatewayRoute.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

AppmeshGatewayRoute.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a AppmeshGatewayRoute resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AppmeshGatewayRoute to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AppmeshGatewayRoute that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/appmesh_gateway_route#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the AppmeshGatewayRoute to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.createdDate">CreatedDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.lastUpdatedDate">LastUpdatedDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.resourceOwner">ResourceOwner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.spec">Spec</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference">AppmeshGatewayRouteSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.meshNameInput">MeshNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.meshOwnerInput">MeshOwnerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.specInput">SpecInput</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpec">AppmeshGatewayRouteSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.virtualGatewayNameInput">VirtualGatewayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.meshName">MeshName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.meshOwner">MeshOwner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.virtualGatewayName">VirtualGatewayName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `CreatedDate`<sup>Required</sup> <a name="CreatedDate" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.createdDate"></a>

```csharp
public string CreatedDate { get; }
```

- *Type:* string

---

##### `LastUpdatedDate`<sup>Required</sup> <a name="LastUpdatedDate" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.lastUpdatedDate"></a>

```csharp
public string LastUpdatedDate { get; }
```

- *Type:* string

---

##### `ResourceOwner`<sup>Required</sup> <a name="ResourceOwner" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.resourceOwner"></a>

```csharp
public string ResourceOwner { get; }
```

- *Type:* string

---

##### `Spec`<sup>Required</sup> <a name="Spec" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.spec"></a>

```csharp
public AppmeshGatewayRouteSpecOutputReference Spec { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference">AppmeshGatewayRouteSpecOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MeshNameInput`<sup>Optional</sup> <a name="MeshNameInput" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.meshNameInput"></a>

```csharp
public string MeshNameInput { get; }
```

- *Type:* string

---

##### `MeshOwnerInput`<sup>Optional</sup> <a name="MeshOwnerInput" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.meshOwnerInput"></a>

```csharp
public string MeshOwnerInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `SpecInput`<sup>Optional</sup> <a name="SpecInput" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.specInput"></a>

```csharp
public AppmeshGatewayRouteSpec SpecInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpec">AppmeshGatewayRouteSpec</a>

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `VirtualGatewayNameInput`<sup>Optional</sup> <a name="VirtualGatewayNameInput" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.virtualGatewayNameInput"></a>

```csharp
public string VirtualGatewayNameInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `MeshName`<sup>Required</sup> <a name="MeshName" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.meshName"></a>

```csharp
public string MeshName { get; }
```

- *Type:* string

---

##### `MeshOwner`<sup>Required</sup> <a name="MeshOwner" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.meshOwner"></a>

```csharp
public string MeshOwner { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `VirtualGatewayName`<sup>Required</sup> <a name="VirtualGatewayName" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.virtualGatewayName"></a>

```csharp
public string VirtualGatewayName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRoute.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AppmeshGatewayRouteConfig <a name="AppmeshGatewayRouteConfig" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppmeshGatewayRouteConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string MeshName,
    string Name,
    AppmeshGatewayRouteSpec Spec,
    string VirtualGatewayName,
    string Id = null,
    string MeshOwner = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteConfig.property.meshName">MeshName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/appmesh_gateway_route#mesh_name AppmeshGatewayRoute#mesh_name}. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/appmesh_gateway_route#name AppmeshGatewayRoute#name}. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteConfig.property.spec">Spec</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpec">AppmeshGatewayRouteSpec</a></code> | spec block. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteConfig.property.virtualGatewayName">VirtualGatewayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/appmesh_gateway_route#virtual_gateway_name AppmeshGatewayRoute#virtual_gateway_name}. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/appmesh_gateway_route#id AppmeshGatewayRoute#id}. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteConfig.property.meshOwner">MeshOwner</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/appmesh_gateway_route#mesh_owner AppmeshGatewayRoute#mesh_owner}. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/appmesh_gateway_route#tags AppmeshGatewayRoute#tags}. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/appmesh_gateway_route#tags_all AppmeshGatewayRoute#tags_all}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `MeshName`<sup>Required</sup> <a name="MeshName" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteConfig.property.meshName"></a>

```csharp
public string MeshName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/appmesh_gateway_route#mesh_name AppmeshGatewayRoute#mesh_name}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/appmesh_gateway_route#name AppmeshGatewayRoute#name}.

---

##### `Spec`<sup>Required</sup> <a name="Spec" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteConfig.property.spec"></a>

```csharp
public AppmeshGatewayRouteSpec Spec { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpec">AppmeshGatewayRouteSpec</a>

spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/appmesh_gateway_route#spec AppmeshGatewayRoute#spec}

---

##### `VirtualGatewayName`<sup>Required</sup> <a name="VirtualGatewayName" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteConfig.property.virtualGatewayName"></a>

```csharp
public string VirtualGatewayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/appmesh_gateway_route#virtual_gateway_name AppmeshGatewayRoute#virtual_gateway_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/appmesh_gateway_route#id AppmeshGatewayRoute#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MeshOwner`<sup>Optional</sup> <a name="MeshOwner" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteConfig.property.meshOwner"></a>

```csharp
public string MeshOwner { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/appmesh_gateway_route#mesh_owner AppmeshGatewayRoute#mesh_owner}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/appmesh_gateway_route#tags AppmeshGatewayRoute#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/appmesh_gateway_route#tags_all AppmeshGatewayRoute#tags_all}.

---

### AppmeshGatewayRouteSpec <a name="AppmeshGatewayRouteSpec" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpec.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppmeshGatewayRouteSpec {
    AppmeshGatewayRouteSpecGrpcRoute GrpcRoute = null,
    AppmeshGatewayRouteSpecHttp2Route Http2Route = null,
    AppmeshGatewayRouteSpecHttpRoute HttpRoute = null,
    double Priority = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpec.property.grpcRoute">GrpcRoute</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRoute">AppmeshGatewayRouteSpecGrpcRoute</a></code> | grpc_route block. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpec.property.http2Route">Http2Route</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2Route">AppmeshGatewayRouteSpecHttp2Route</a></code> | http2_route block. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpec.property.httpRoute">HttpRoute</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRoute">AppmeshGatewayRouteSpecHttpRoute</a></code> | http_route block. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpec.property.priority">Priority</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/appmesh_gateway_route#priority AppmeshGatewayRoute#priority}. |

---

##### `GrpcRoute`<sup>Optional</sup> <a name="GrpcRoute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpec.property.grpcRoute"></a>

```csharp
public AppmeshGatewayRouteSpecGrpcRoute GrpcRoute { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRoute">AppmeshGatewayRouteSpecGrpcRoute</a>

grpc_route block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/appmesh_gateway_route#grpc_route AppmeshGatewayRoute#grpc_route}

---

##### `Http2Route`<sup>Optional</sup> <a name="Http2Route" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpec.property.http2Route"></a>

```csharp
public AppmeshGatewayRouteSpecHttp2Route Http2Route { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2Route">AppmeshGatewayRouteSpecHttp2Route</a>

http2_route block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/appmesh_gateway_route#http2_route AppmeshGatewayRoute#http2_route}

---

##### `HttpRoute`<sup>Optional</sup> <a name="HttpRoute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpec.property.httpRoute"></a>

```csharp
public AppmeshGatewayRouteSpecHttpRoute HttpRoute { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRoute">AppmeshGatewayRouteSpecHttpRoute</a>

http_route block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/appmesh_gateway_route#http_route AppmeshGatewayRoute#http_route}

---

##### `Priority`<sup>Optional</sup> <a name="Priority" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpec.property.priority"></a>

```csharp
public double Priority { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/appmesh_gateway_route#priority AppmeshGatewayRoute#priority}.

---

### AppmeshGatewayRouteSpecGrpcRoute <a name="AppmeshGatewayRouteSpecGrpcRoute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRoute"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRoute.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppmeshGatewayRouteSpecGrpcRoute {
    AppmeshGatewayRouteSpecGrpcRouteAction Action,
    AppmeshGatewayRouteSpecGrpcRouteMatch Match
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRoute.property.action">Action</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteAction">AppmeshGatewayRouteSpecGrpcRouteAction</a></code> | action block. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRoute.property.match">Match</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatch">AppmeshGatewayRouteSpecGrpcRouteMatch</a></code> | match block. |

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRoute.property.action"></a>

```csharp
public AppmeshGatewayRouteSpecGrpcRouteAction Action { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteAction">AppmeshGatewayRouteSpecGrpcRouteAction</a>

action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/appmesh_gateway_route#action AppmeshGatewayRoute#action}

---

##### `Match`<sup>Required</sup> <a name="Match" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRoute.property.match"></a>

```csharp
public AppmeshGatewayRouteSpecGrpcRouteMatch Match { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatch">AppmeshGatewayRouteSpecGrpcRouteMatch</a>

match block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/appmesh_gateway_route#match AppmeshGatewayRoute#match}

---

### AppmeshGatewayRouteSpecGrpcRouteAction <a name="AppmeshGatewayRouteSpecGrpcRouteAction" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteAction.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppmeshGatewayRouteSpecGrpcRouteAction {
    AppmeshGatewayRouteSpecGrpcRouteActionTarget Target
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteAction.property.target">Target</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTarget">AppmeshGatewayRouteSpecGrpcRouteActionTarget</a></code> | target block. |

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteAction.property.target"></a>

```csharp
public AppmeshGatewayRouteSpecGrpcRouteActionTarget Target { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTarget">AppmeshGatewayRouteSpecGrpcRouteActionTarget</a>

target block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/appmesh_gateway_route#target AppmeshGatewayRoute#target}

---

### AppmeshGatewayRouteSpecGrpcRouteActionTarget <a name="AppmeshGatewayRouteSpecGrpcRouteActionTarget" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTarget.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppmeshGatewayRouteSpecGrpcRouteActionTarget {
    AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualService VirtualService,
    double Port = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTarget.property.virtualService">VirtualService</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualService">AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualService</a></code> | virtual_service block. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTarget.property.port">Port</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/appmesh_gateway_route#port AppmeshGatewayRoute#port}. |

---

##### `VirtualService`<sup>Required</sup> <a name="VirtualService" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTarget.property.virtualService"></a>

```csharp
public AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualService VirtualService { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualService">AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualService</a>

virtual_service block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/appmesh_gateway_route#virtual_service AppmeshGatewayRoute#virtual_service}

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTarget.property.port"></a>

```csharp
public double Port { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/appmesh_gateway_route#port AppmeshGatewayRoute#port}.

---

### AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualService <a name="AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualService" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualService"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualService.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualService {
    string VirtualServiceName
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualService.property.virtualServiceName">VirtualServiceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/appmesh_gateway_route#virtual_service_name AppmeshGatewayRoute#virtual_service_name}. |

---

##### `VirtualServiceName`<sup>Required</sup> <a name="VirtualServiceName" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualService.property.virtualServiceName"></a>

```csharp
public string VirtualServiceName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/appmesh_gateway_route#virtual_service_name AppmeshGatewayRoute#virtual_service_name}.

---

### AppmeshGatewayRouteSpecGrpcRouteMatch <a name="AppmeshGatewayRouteSpecGrpcRouteMatch" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatch.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppmeshGatewayRouteSpecGrpcRouteMatch {
    string ServiceName,
    double Port = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatch.property.serviceName">ServiceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/appmesh_gateway_route#service_name AppmeshGatewayRoute#service_name}. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatch.property.port">Port</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/appmesh_gateway_route#port AppmeshGatewayRoute#port}. |

---

##### `ServiceName`<sup>Required</sup> <a name="ServiceName" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatch.property.serviceName"></a>

```csharp
public string ServiceName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/appmesh_gateway_route#service_name AppmeshGatewayRoute#service_name}.

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatch.property.port"></a>

```csharp
public double Port { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/appmesh_gateway_route#port AppmeshGatewayRoute#port}.

---

### AppmeshGatewayRouteSpecHttp2Route <a name="AppmeshGatewayRouteSpecHttp2Route" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2Route"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2Route.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppmeshGatewayRouteSpecHttp2Route {
    AppmeshGatewayRouteSpecHttp2RouteAction Action,
    AppmeshGatewayRouteSpecHttp2RouteMatch Match
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2Route.property.action">Action</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteAction">AppmeshGatewayRouteSpecHttp2RouteAction</a></code> | action block. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2Route.property.match">Match</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatch">AppmeshGatewayRouteSpecHttp2RouteMatch</a></code> | match block. |

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2Route.property.action"></a>

```csharp
public AppmeshGatewayRouteSpecHttp2RouteAction Action { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteAction">AppmeshGatewayRouteSpecHttp2RouteAction</a>

action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/appmesh_gateway_route#action AppmeshGatewayRoute#action}

---

##### `Match`<sup>Required</sup> <a name="Match" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2Route.property.match"></a>

```csharp
public AppmeshGatewayRouteSpecHttp2RouteMatch Match { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatch">AppmeshGatewayRouteSpecHttp2RouteMatch</a>

match block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/appmesh_gateway_route#match AppmeshGatewayRoute#match}

---

### AppmeshGatewayRouteSpecHttp2RouteAction <a name="AppmeshGatewayRouteSpecHttp2RouteAction" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteAction.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppmeshGatewayRouteSpecHttp2RouteAction {
    AppmeshGatewayRouteSpecHttp2RouteActionTarget Target,
    AppmeshGatewayRouteSpecHttp2RouteActionRewrite Rewrite = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteAction.property.target">Target</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTarget">AppmeshGatewayRouteSpecHttp2RouteActionTarget</a></code> | target block. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteAction.property.rewrite">Rewrite</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewrite">AppmeshGatewayRouteSpecHttp2RouteActionRewrite</a></code> | rewrite block. |

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteAction.property.target"></a>

```csharp
public AppmeshGatewayRouteSpecHttp2RouteActionTarget Target { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTarget">AppmeshGatewayRouteSpecHttp2RouteActionTarget</a>

target block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/appmesh_gateway_route#target AppmeshGatewayRoute#target}

---

##### `Rewrite`<sup>Optional</sup> <a name="Rewrite" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteAction.property.rewrite"></a>

```csharp
public AppmeshGatewayRouteSpecHttp2RouteActionRewrite Rewrite { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewrite">AppmeshGatewayRouteSpecHttp2RouteActionRewrite</a>

rewrite block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/appmesh_gateway_route#rewrite AppmeshGatewayRoute#rewrite}

---

### AppmeshGatewayRouteSpecHttp2RouteActionRewrite <a name="AppmeshGatewayRouteSpecHttp2RouteActionRewrite" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewrite"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewrite.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppmeshGatewayRouteSpecHttp2RouteActionRewrite {
    AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostname Hostname = null,
    AppmeshGatewayRouteSpecHttp2RouteActionRewritePath Path = null,
    AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefix Prefix = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewrite.property.hostname">Hostname</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostname">AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostname</a></code> | hostname block. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewrite.property.path">Path</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePath">AppmeshGatewayRouteSpecHttp2RouteActionRewritePath</a></code> | path block. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewrite.property.prefix">Prefix</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefix">AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefix</a></code> | prefix block. |

---

##### `Hostname`<sup>Optional</sup> <a name="Hostname" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewrite.property.hostname"></a>

```csharp
public AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostname Hostname { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostname">AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostname</a>

hostname block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/appmesh_gateway_route#hostname AppmeshGatewayRoute#hostname}

---

##### `Path`<sup>Optional</sup> <a name="Path" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewrite.property.path"></a>

```csharp
public AppmeshGatewayRouteSpecHttp2RouteActionRewritePath Path { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePath">AppmeshGatewayRouteSpecHttp2RouteActionRewritePath</a>

path block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/appmesh_gateway_route#path AppmeshGatewayRoute#path}

---

##### `Prefix`<sup>Optional</sup> <a name="Prefix" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewrite.property.prefix"></a>

```csharp
public AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefix Prefix { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefix">AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefix</a>

prefix block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/appmesh_gateway_route#prefix AppmeshGatewayRoute#prefix}

---

### AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostname <a name="AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostname" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostname"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostname.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostname {
    string DefaultTargetHostname
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostname.property.defaultTargetHostname">DefaultTargetHostname</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/appmesh_gateway_route#default_target_hostname AppmeshGatewayRoute#default_target_hostname}. |

---

##### `DefaultTargetHostname`<sup>Required</sup> <a name="DefaultTargetHostname" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostname.property.defaultTargetHostname"></a>

```csharp
public string DefaultTargetHostname { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/appmesh_gateway_route#default_target_hostname AppmeshGatewayRoute#default_target_hostname}.

---

### AppmeshGatewayRouteSpecHttp2RouteActionRewritePath <a name="AppmeshGatewayRouteSpecHttp2RouteActionRewritePath" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePath"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePath.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppmeshGatewayRouteSpecHttp2RouteActionRewritePath {
    string Exact
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePath.property.exact">Exact</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/appmesh_gateway_route#exact AppmeshGatewayRoute#exact}. |

---

##### `Exact`<sup>Required</sup> <a name="Exact" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePath.property.exact"></a>

```csharp
public string Exact { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/appmesh_gateway_route#exact AppmeshGatewayRoute#exact}.

---

### AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefix <a name="AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefix" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefix"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefix.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefix {
    string DefaultPrefix = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefix.property.defaultPrefix">DefaultPrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/appmesh_gateway_route#default_prefix AppmeshGatewayRoute#default_prefix}. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefix.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/appmesh_gateway_route#value AppmeshGatewayRoute#value}. |

---

##### `DefaultPrefix`<sup>Optional</sup> <a name="DefaultPrefix" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefix.property.defaultPrefix"></a>

```csharp
public string DefaultPrefix { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/appmesh_gateway_route#default_prefix AppmeshGatewayRoute#default_prefix}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefix.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/appmesh_gateway_route#value AppmeshGatewayRoute#value}.

---

### AppmeshGatewayRouteSpecHttp2RouteActionTarget <a name="AppmeshGatewayRouteSpecHttp2RouteActionTarget" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTarget.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppmeshGatewayRouteSpecHttp2RouteActionTarget {
    AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualService VirtualService,
    double Port = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTarget.property.virtualService">VirtualService</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualService">AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualService</a></code> | virtual_service block. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTarget.property.port">Port</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/appmesh_gateway_route#port AppmeshGatewayRoute#port}. |

---

##### `VirtualService`<sup>Required</sup> <a name="VirtualService" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTarget.property.virtualService"></a>

```csharp
public AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualService VirtualService { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualService">AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualService</a>

virtual_service block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/appmesh_gateway_route#virtual_service AppmeshGatewayRoute#virtual_service}

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTarget.property.port"></a>

```csharp
public double Port { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/appmesh_gateway_route#port AppmeshGatewayRoute#port}.

---

### AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualService <a name="AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualService" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualService"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualService.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualService {
    string VirtualServiceName
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualService.property.virtualServiceName">VirtualServiceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/appmesh_gateway_route#virtual_service_name AppmeshGatewayRoute#virtual_service_name}. |

---

##### `VirtualServiceName`<sup>Required</sup> <a name="VirtualServiceName" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualService.property.virtualServiceName"></a>

```csharp
public string VirtualServiceName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/appmesh_gateway_route#virtual_service_name AppmeshGatewayRoute#virtual_service_name}.

---

### AppmeshGatewayRouteSpecHttp2RouteMatch <a name="AppmeshGatewayRouteSpecHttp2RouteMatch" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatch.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppmeshGatewayRouteSpecHttp2RouteMatch {
    object Header = null,
    AppmeshGatewayRouteSpecHttp2RouteMatchHostname Hostname = null,
    AppmeshGatewayRouteSpecHttp2RouteMatchPath Path = null,
    double Port = null,
    string Prefix = null,
    object QueryParameter = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatch.property.header">Header</a></code> | <code>object</code> | header block. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatch.property.hostname">Hostname</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostname">AppmeshGatewayRouteSpecHttp2RouteMatchHostname</a></code> | hostname block. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatch.property.path">Path</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchPath">AppmeshGatewayRouteSpecHttp2RouteMatchPath</a></code> | path block. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatch.property.port">Port</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/appmesh_gateway_route#port AppmeshGatewayRoute#port}. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatch.property.prefix">Prefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/appmesh_gateway_route#prefix AppmeshGatewayRoute#prefix}. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatch.property.queryParameter">QueryParameter</a></code> | <code>object</code> | query_parameter block. |

---

##### `Header`<sup>Optional</sup> <a name="Header" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatch.property.header"></a>

```csharp
public object Header { get; set; }
```

- *Type:* object

header block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/appmesh_gateway_route#header AppmeshGatewayRoute#header}

---

##### `Hostname`<sup>Optional</sup> <a name="Hostname" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatch.property.hostname"></a>

```csharp
public AppmeshGatewayRouteSpecHttp2RouteMatchHostname Hostname { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostname">AppmeshGatewayRouteSpecHttp2RouteMatchHostname</a>

hostname block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/appmesh_gateway_route#hostname AppmeshGatewayRoute#hostname}

---

##### `Path`<sup>Optional</sup> <a name="Path" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatch.property.path"></a>

```csharp
public AppmeshGatewayRouteSpecHttp2RouteMatchPath Path { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchPath">AppmeshGatewayRouteSpecHttp2RouteMatchPath</a>

path block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/appmesh_gateway_route#path AppmeshGatewayRoute#path}

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatch.property.port"></a>

```csharp
public double Port { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/appmesh_gateway_route#port AppmeshGatewayRoute#port}.

---

##### `Prefix`<sup>Optional</sup> <a name="Prefix" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatch.property.prefix"></a>

```csharp
public string Prefix { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/appmesh_gateway_route#prefix AppmeshGatewayRoute#prefix}.

---

##### `QueryParameter`<sup>Optional</sup> <a name="QueryParameter" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatch.property.queryParameter"></a>

```csharp
public object QueryParameter { get; set; }
```

- *Type:* object

query_parameter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/appmesh_gateway_route#query_parameter AppmeshGatewayRoute#query_parameter}

---

### AppmeshGatewayRouteSpecHttp2RouteMatchHeader <a name="AppmeshGatewayRouteSpecHttp2RouteMatchHeader" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeader"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeader.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppmeshGatewayRouteSpecHttp2RouteMatchHeader {
    string Name,
    object Invert = null,
    AppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatch Match = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeader.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/appmesh_gateway_route#name AppmeshGatewayRoute#name}. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeader.property.invert">Invert</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/appmesh_gateway_route#invert AppmeshGatewayRoute#invert}. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeader.property.match">Match</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatch">AppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatch</a></code> | match block. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeader.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/appmesh_gateway_route#name AppmeshGatewayRoute#name}.

---

##### `Invert`<sup>Optional</sup> <a name="Invert" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeader.property.invert"></a>

```csharp
public object Invert { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/appmesh_gateway_route#invert AppmeshGatewayRoute#invert}.

---

##### `Match`<sup>Optional</sup> <a name="Match" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeader.property.match"></a>

```csharp
public AppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatch Match { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatch">AppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatch</a>

match block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/appmesh_gateway_route#match AppmeshGatewayRoute#match}

---

### AppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatch <a name="AppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatch" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatch.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatch {
    string Exact = null,
    string Prefix = null,
    AppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchRange Range = null,
    string Regex = null,
    string Suffix = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatch.property.exact">Exact</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/appmesh_gateway_route#exact AppmeshGatewayRoute#exact}. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatch.property.prefix">Prefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/appmesh_gateway_route#prefix AppmeshGatewayRoute#prefix}. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatch.property.range">Range</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchRange">AppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchRange</a></code> | range block. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatch.property.regex">Regex</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/appmesh_gateway_route#regex AppmeshGatewayRoute#regex}. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatch.property.suffix">Suffix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/appmesh_gateway_route#suffix AppmeshGatewayRoute#suffix}. |

---

##### `Exact`<sup>Optional</sup> <a name="Exact" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatch.property.exact"></a>

```csharp
public string Exact { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/appmesh_gateway_route#exact AppmeshGatewayRoute#exact}.

---

##### `Prefix`<sup>Optional</sup> <a name="Prefix" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatch.property.prefix"></a>

```csharp
public string Prefix { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/appmesh_gateway_route#prefix AppmeshGatewayRoute#prefix}.

---

##### `Range`<sup>Optional</sup> <a name="Range" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatch.property.range"></a>

```csharp
public AppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchRange Range { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchRange">AppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchRange</a>

range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/appmesh_gateway_route#range AppmeshGatewayRoute#range}

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatch.property.regex"></a>

```csharp
public string Regex { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/appmesh_gateway_route#regex AppmeshGatewayRoute#regex}.

---

##### `Suffix`<sup>Optional</sup> <a name="Suffix" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatch.property.suffix"></a>

```csharp
public string Suffix { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/appmesh_gateway_route#suffix AppmeshGatewayRoute#suffix}.

---

### AppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchRange <a name="AppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchRange" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchRange"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchRange.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchRange {
    double End,
    double Start
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchRange.property.end">End</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/appmesh_gateway_route#end AppmeshGatewayRoute#end}. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchRange.property.start">Start</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/appmesh_gateway_route#start AppmeshGatewayRoute#start}. |

---

##### `End`<sup>Required</sup> <a name="End" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchRange.property.end"></a>

```csharp
public double End { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/appmesh_gateway_route#end AppmeshGatewayRoute#end}.

---

##### `Start`<sup>Required</sup> <a name="Start" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchRange.property.start"></a>

```csharp
public double Start { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/appmesh_gateway_route#start AppmeshGatewayRoute#start}.

---

### AppmeshGatewayRouteSpecHttp2RouteMatchHostname <a name="AppmeshGatewayRouteSpecHttp2RouteMatchHostname" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostname"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostname.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppmeshGatewayRouteSpecHttp2RouteMatchHostname {
    string Exact = null,
    string Suffix = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostname.property.exact">Exact</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/appmesh_gateway_route#exact AppmeshGatewayRoute#exact}. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostname.property.suffix">Suffix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/appmesh_gateway_route#suffix AppmeshGatewayRoute#suffix}. |

---

##### `Exact`<sup>Optional</sup> <a name="Exact" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostname.property.exact"></a>

```csharp
public string Exact { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/appmesh_gateway_route#exact AppmeshGatewayRoute#exact}.

---

##### `Suffix`<sup>Optional</sup> <a name="Suffix" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostname.property.suffix"></a>

```csharp
public string Suffix { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/appmesh_gateway_route#suffix AppmeshGatewayRoute#suffix}.

---

### AppmeshGatewayRouteSpecHttp2RouteMatchPath <a name="AppmeshGatewayRouteSpecHttp2RouteMatchPath" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchPath"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchPath.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppmeshGatewayRouteSpecHttp2RouteMatchPath {
    string Exact = null,
    string Regex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchPath.property.exact">Exact</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/appmesh_gateway_route#exact AppmeshGatewayRoute#exact}. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchPath.property.regex">Regex</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/appmesh_gateway_route#regex AppmeshGatewayRoute#regex}. |

---

##### `Exact`<sup>Optional</sup> <a name="Exact" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchPath.property.exact"></a>

```csharp
public string Exact { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/appmesh_gateway_route#exact AppmeshGatewayRoute#exact}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchPath.property.regex"></a>

```csharp
public string Regex { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/appmesh_gateway_route#regex AppmeshGatewayRoute#regex}.

---

### AppmeshGatewayRouteSpecHttp2RouteMatchQueryParameter <a name="AppmeshGatewayRouteSpecHttp2RouteMatchQueryParameter" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchQueryParameter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchQueryParameter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppmeshGatewayRouteSpecHttp2RouteMatchQueryParameter {
    string Name,
    AppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterMatch Match = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchQueryParameter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/appmesh_gateway_route#name AppmeshGatewayRoute#name}. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchQueryParameter.property.match">Match</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterMatch">AppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterMatch</a></code> | match block. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchQueryParameter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/appmesh_gateway_route#name AppmeshGatewayRoute#name}.

---

##### `Match`<sup>Optional</sup> <a name="Match" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchQueryParameter.property.match"></a>

```csharp
public AppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterMatch Match { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterMatch">AppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterMatch</a>

match block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/appmesh_gateway_route#match AppmeshGatewayRoute#match}

---

### AppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterMatch <a name="AppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterMatch" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterMatch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterMatch.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterMatch {
    string Exact = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterMatch.property.exact">Exact</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/appmesh_gateway_route#exact AppmeshGatewayRoute#exact}. |

---

##### `Exact`<sup>Optional</sup> <a name="Exact" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterMatch.property.exact"></a>

```csharp
public string Exact { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/appmesh_gateway_route#exact AppmeshGatewayRoute#exact}.

---

### AppmeshGatewayRouteSpecHttpRoute <a name="AppmeshGatewayRouteSpecHttpRoute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRoute"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRoute.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppmeshGatewayRouteSpecHttpRoute {
    AppmeshGatewayRouteSpecHttpRouteAction Action,
    AppmeshGatewayRouteSpecHttpRouteMatch Match
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRoute.property.action">Action</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteAction">AppmeshGatewayRouteSpecHttpRouteAction</a></code> | action block. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRoute.property.match">Match</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatch">AppmeshGatewayRouteSpecHttpRouteMatch</a></code> | match block. |

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRoute.property.action"></a>

```csharp
public AppmeshGatewayRouteSpecHttpRouteAction Action { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteAction">AppmeshGatewayRouteSpecHttpRouteAction</a>

action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/appmesh_gateway_route#action AppmeshGatewayRoute#action}

---

##### `Match`<sup>Required</sup> <a name="Match" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRoute.property.match"></a>

```csharp
public AppmeshGatewayRouteSpecHttpRouteMatch Match { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatch">AppmeshGatewayRouteSpecHttpRouteMatch</a>

match block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/appmesh_gateway_route#match AppmeshGatewayRoute#match}

---

### AppmeshGatewayRouteSpecHttpRouteAction <a name="AppmeshGatewayRouteSpecHttpRouteAction" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteAction.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppmeshGatewayRouteSpecHttpRouteAction {
    AppmeshGatewayRouteSpecHttpRouteActionTarget Target,
    AppmeshGatewayRouteSpecHttpRouteActionRewrite Rewrite = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteAction.property.target">Target</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTarget">AppmeshGatewayRouteSpecHttpRouteActionTarget</a></code> | target block. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteAction.property.rewrite">Rewrite</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewrite">AppmeshGatewayRouteSpecHttpRouteActionRewrite</a></code> | rewrite block. |

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteAction.property.target"></a>

```csharp
public AppmeshGatewayRouteSpecHttpRouteActionTarget Target { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTarget">AppmeshGatewayRouteSpecHttpRouteActionTarget</a>

target block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/appmesh_gateway_route#target AppmeshGatewayRoute#target}

---

##### `Rewrite`<sup>Optional</sup> <a name="Rewrite" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteAction.property.rewrite"></a>

```csharp
public AppmeshGatewayRouteSpecHttpRouteActionRewrite Rewrite { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewrite">AppmeshGatewayRouteSpecHttpRouteActionRewrite</a>

rewrite block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/appmesh_gateway_route#rewrite AppmeshGatewayRoute#rewrite}

---

### AppmeshGatewayRouteSpecHttpRouteActionRewrite <a name="AppmeshGatewayRouteSpecHttpRouteActionRewrite" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewrite"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewrite.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppmeshGatewayRouteSpecHttpRouteActionRewrite {
    AppmeshGatewayRouteSpecHttpRouteActionRewriteHostname Hostname = null,
    AppmeshGatewayRouteSpecHttpRouteActionRewritePath Path = null,
    AppmeshGatewayRouteSpecHttpRouteActionRewritePrefix Prefix = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewrite.property.hostname">Hostname</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostname">AppmeshGatewayRouteSpecHttpRouteActionRewriteHostname</a></code> | hostname block. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewrite.property.path">Path</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePath">AppmeshGatewayRouteSpecHttpRouteActionRewritePath</a></code> | path block. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewrite.property.prefix">Prefix</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefix">AppmeshGatewayRouteSpecHttpRouteActionRewritePrefix</a></code> | prefix block. |

---

##### `Hostname`<sup>Optional</sup> <a name="Hostname" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewrite.property.hostname"></a>

```csharp
public AppmeshGatewayRouteSpecHttpRouteActionRewriteHostname Hostname { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostname">AppmeshGatewayRouteSpecHttpRouteActionRewriteHostname</a>

hostname block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/appmesh_gateway_route#hostname AppmeshGatewayRoute#hostname}

---

##### `Path`<sup>Optional</sup> <a name="Path" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewrite.property.path"></a>

```csharp
public AppmeshGatewayRouteSpecHttpRouteActionRewritePath Path { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePath">AppmeshGatewayRouteSpecHttpRouteActionRewritePath</a>

path block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/appmesh_gateway_route#path AppmeshGatewayRoute#path}

---

##### `Prefix`<sup>Optional</sup> <a name="Prefix" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewrite.property.prefix"></a>

```csharp
public AppmeshGatewayRouteSpecHttpRouteActionRewritePrefix Prefix { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefix">AppmeshGatewayRouteSpecHttpRouteActionRewritePrefix</a>

prefix block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/appmesh_gateway_route#prefix AppmeshGatewayRoute#prefix}

---

### AppmeshGatewayRouteSpecHttpRouteActionRewriteHostname <a name="AppmeshGatewayRouteSpecHttpRouteActionRewriteHostname" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostname"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostname.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppmeshGatewayRouteSpecHttpRouteActionRewriteHostname {
    string DefaultTargetHostname
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostname.property.defaultTargetHostname">DefaultTargetHostname</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/appmesh_gateway_route#default_target_hostname AppmeshGatewayRoute#default_target_hostname}. |

---

##### `DefaultTargetHostname`<sup>Required</sup> <a name="DefaultTargetHostname" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostname.property.defaultTargetHostname"></a>

```csharp
public string DefaultTargetHostname { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/appmesh_gateway_route#default_target_hostname AppmeshGatewayRoute#default_target_hostname}.

---

### AppmeshGatewayRouteSpecHttpRouteActionRewritePath <a name="AppmeshGatewayRouteSpecHttpRouteActionRewritePath" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePath"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePath.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppmeshGatewayRouteSpecHttpRouteActionRewritePath {
    string Exact
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePath.property.exact">Exact</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/appmesh_gateway_route#exact AppmeshGatewayRoute#exact}. |

---

##### `Exact`<sup>Required</sup> <a name="Exact" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePath.property.exact"></a>

```csharp
public string Exact { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/appmesh_gateway_route#exact AppmeshGatewayRoute#exact}.

---

### AppmeshGatewayRouteSpecHttpRouteActionRewritePrefix <a name="AppmeshGatewayRouteSpecHttpRouteActionRewritePrefix" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefix"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefix.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppmeshGatewayRouteSpecHttpRouteActionRewritePrefix {
    string DefaultPrefix = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefix.property.defaultPrefix">DefaultPrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/appmesh_gateway_route#default_prefix AppmeshGatewayRoute#default_prefix}. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefix.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/appmesh_gateway_route#value AppmeshGatewayRoute#value}. |

---

##### `DefaultPrefix`<sup>Optional</sup> <a name="DefaultPrefix" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefix.property.defaultPrefix"></a>

```csharp
public string DefaultPrefix { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/appmesh_gateway_route#default_prefix AppmeshGatewayRoute#default_prefix}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefix.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/appmesh_gateway_route#value AppmeshGatewayRoute#value}.

---

### AppmeshGatewayRouteSpecHttpRouteActionTarget <a name="AppmeshGatewayRouteSpecHttpRouteActionTarget" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTarget.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppmeshGatewayRouteSpecHttpRouteActionTarget {
    AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualService VirtualService,
    double Port = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTarget.property.virtualService">VirtualService</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualService">AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualService</a></code> | virtual_service block. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTarget.property.port">Port</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/appmesh_gateway_route#port AppmeshGatewayRoute#port}. |

---

##### `VirtualService`<sup>Required</sup> <a name="VirtualService" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTarget.property.virtualService"></a>

```csharp
public AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualService VirtualService { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualService">AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualService</a>

virtual_service block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/appmesh_gateway_route#virtual_service AppmeshGatewayRoute#virtual_service}

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTarget.property.port"></a>

```csharp
public double Port { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/appmesh_gateway_route#port AppmeshGatewayRoute#port}.

---

### AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualService <a name="AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualService" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualService"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualService.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualService {
    string VirtualServiceName
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualService.property.virtualServiceName">VirtualServiceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/appmesh_gateway_route#virtual_service_name AppmeshGatewayRoute#virtual_service_name}. |

---

##### `VirtualServiceName`<sup>Required</sup> <a name="VirtualServiceName" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualService.property.virtualServiceName"></a>

```csharp
public string VirtualServiceName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/appmesh_gateway_route#virtual_service_name AppmeshGatewayRoute#virtual_service_name}.

---

### AppmeshGatewayRouteSpecHttpRouteMatch <a name="AppmeshGatewayRouteSpecHttpRouteMatch" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatch.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppmeshGatewayRouteSpecHttpRouteMatch {
    object Header = null,
    AppmeshGatewayRouteSpecHttpRouteMatchHostname Hostname = null,
    AppmeshGatewayRouteSpecHttpRouteMatchPath Path = null,
    double Port = null,
    string Prefix = null,
    object QueryParameter = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatch.property.header">Header</a></code> | <code>object</code> | header block. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatch.property.hostname">Hostname</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostname">AppmeshGatewayRouteSpecHttpRouteMatchHostname</a></code> | hostname block. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatch.property.path">Path</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchPath">AppmeshGatewayRouteSpecHttpRouteMatchPath</a></code> | path block. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatch.property.port">Port</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/appmesh_gateway_route#port AppmeshGatewayRoute#port}. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatch.property.prefix">Prefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/appmesh_gateway_route#prefix AppmeshGatewayRoute#prefix}. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatch.property.queryParameter">QueryParameter</a></code> | <code>object</code> | query_parameter block. |

---

##### `Header`<sup>Optional</sup> <a name="Header" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatch.property.header"></a>

```csharp
public object Header { get; set; }
```

- *Type:* object

header block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/appmesh_gateway_route#header AppmeshGatewayRoute#header}

---

##### `Hostname`<sup>Optional</sup> <a name="Hostname" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatch.property.hostname"></a>

```csharp
public AppmeshGatewayRouteSpecHttpRouteMatchHostname Hostname { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostname">AppmeshGatewayRouteSpecHttpRouteMatchHostname</a>

hostname block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/appmesh_gateway_route#hostname AppmeshGatewayRoute#hostname}

---

##### `Path`<sup>Optional</sup> <a name="Path" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatch.property.path"></a>

```csharp
public AppmeshGatewayRouteSpecHttpRouteMatchPath Path { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchPath">AppmeshGatewayRouteSpecHttpRouteMatchPath</a>

path block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/appmesh_gateway_route#path AppmeshGatewayRoute#path}

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatch.property.port"></a>

```csharp
public double Port { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/appmesh_gateway_route#port AppmeshGatewayRoute#port}.

---

##### `Prefix`<sup>Optional</sup> <a name="Prefix" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatch.property.prefix"></a>

```csharp
public string Prefix { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/appmesh_gateway_route#prefix AppmeshGatewayRoute#prefix}.

---

##### `QueryParameter`<sup>Optional</sup> <a name="QueryParameter" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatch.property.queryParameter"></a>

```csharp
public object QueryParameter { get; set; }
```

- *Type:* object

query_parameter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/appmesh_gateway_route#query_parameter AppmeshGatewayRoute#query_parameter}

---

### AppmeshGatewayRouteSpecHttpRouteMatchHeader <a name="AppmeshGatewayRouteSpecHttpRouteMatchHeader" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeader"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeader.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppmeshGatewayRouteSpecHttpRouteMatchHeader {
    string Name,
    object Invert = null,
    AppmeshGatewayRouteSpecHttpRouteMatchHeaderMatch Match = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeader.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/appmesh_gateway_route#name AppmeshGatewayRoute#name}. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeader.property.invert">Invert</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/appmesh_gateway_route#invert AppmeshGatewayRoute#invert}. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeader.property.match">Match</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderMatch">AppmeshGatewayRouteSpecHttpRouteMatchHeaderMatch</a></code> | match block. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeader.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/appmesh_gateway_route#name AppmeshGatewayRoute#name}.

---

##### `Invert`<sup>Optional</sup> <a name="Invert" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeader.property.invert"></a>

```csharp
public object Invert { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/appmesh_gateway_route#invert AppmeshGatewayRoute#invert}.

---

##### `Match`<sup>Optional</sup> <a name="Match" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeader.property.match"></a>

```csharp
public AppmeshGatewayRouteSpecHttpRouteMatchHeaderMatch Match { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderMatch">AppmeshGatewayRouteSpecHttpRouteMatchHeaderMatch</a>

match block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/appmesh_gateway_route#match AppmeshGatewayRoute#match}

---

### AppmeshGatewayRouteSpecHttpRouteMatchHeaderMatch <a name="AppmeshGatewayRouteSpecHttpRouteMatchHeaderMatch" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderMatch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderMatch.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppmeshGatewayRouteSpecHttpRouteMatchHeaderMatch {
    string Exact = null,
    string Prefix = null,
    AppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchRange Range = null,
    string Regex = null,
    string Suffix = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderMatch.property.exact">Exact</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/appmesh_gateway_route#exact AppmeshGatewayRoute#exact}. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderMatch.property.prefix">Prefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/appmesh_gateway_route#prefix AppmeshGatewayRoute#prefix}. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderMatch.property.range">Range</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchRange">AppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchRange</a></code> | range block. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderMatch.property.regex">Regex</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/appmesh_gateway_route#regex AppmeshGatewayRoute#regex}. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderMatch.property.suffix">Suffix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/appmesh_gateway_route#suffix AppmeshGatewayRoute#suffix}. |

---

##### `Exact`<sup>Optional</sup> <a name="Exact" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderMatch.property.exact"></a>

```csharp
public string Exact { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/appmesh_gateway_route#exact AppmeshGatewayRoute#exact}.

---

##### `Prefix`<sup>Optional</sup> <a name="Prefix" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderMatch.property.prefix"></a>

```csharp
public string Prefix { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/appmesh_gateway_route#prefix AppmeshGatewayRoute#prefix}.

---

##### `Range`<sup>Optional</sup> <a name="Range" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderMatch.property.range"></a>

```csharp
public AppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchRange Range { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchRange">AppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchRange</a>

range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/appmesh_gateway_route#range AppmeshGatewayRoute#range}

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderMatch.property.regex"></a>

```csharp
public string Regex { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/appmesh_gateway_route#regex AppmeshGatewayRoute#regex}.

---

##### `Suffix`<sup>Optional</sup> <a name="Suffix" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderMatch.property.suffix"></a>

```csharp
public string Suffix { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/appmesh_gateway_route#suffix AppmeshGatewayRoute#suffix}.

---

### AppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchRange <a name="AppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchRange" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchRange"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchRange.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchRange {
    double End,
    double Start
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchRange.property.end">End</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/appmesh_gateway_route#end AppmeshGatewayRoute#end}. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchRange.property.start">Start</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/appmesh_gateway_route#start AppmeshGatewayRoute#start}. |

---

##### `End`<sup>Required</sup> <a name="End" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchRange.property.end"></a>

```csharp
public double End { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/appmesh_gateway_route#end AppmeshGatewayRoute#end}.

---

##### `Start`<sup>Required</sup> <a name="Start" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchRange.property.start"></a>

```csharp
public double Start { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/appmesh_gateway_route#start AppmeshGatewayRoute#start}.

---

### AppmeshGatewayRouteSpecHttpRouteMatchHostname <a name="AppmeshGatewayRouteSpecHttpRouteMatchHostname" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostname"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostname.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppmeshGatewayRouteSpecHttpRouteMatchHostname {
    string Exact = null,
    string Suffix = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostname.property.exact">Exact</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/appmesh_gateway_route#exact AppmeshGatewayRoute#exact}. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostname.property.suffix">Suffix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/appmesh_gateway_route#suffix AppmeshGatewayRoute#suffix}. |

---

##### `Exact`<sup>Optional</sup> <a name="Exact" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostname.property.exact"></a>

```csharp
public string Exact { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/appmesh_gateway_route#exact AppmeshGatewayRoute#exact}.

---

##### `Suffix`<sup>Optional</sup> <a name="Suffix" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostname.property.suffix"></a>

```csharp
public string Suffix { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/appmesh_gateway_route#suffix AppmeshGatewayRoute#suffix}.

---

### AppmeshGatewayRouteSpecHttpRouteMatchPath <a name="AppmeshGatewayRouteSpecHttpRouteMatchPath" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchPath"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchPath.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppmeshGatewayRouteSpecHttpRouteMatchPath {
    string Exact = null,
    string Regex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchPath.property.exact">Exact</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/appmesh_gateway_route#exact AppmeshGatewayRoute#exact}. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchPath.property.regex">Regex</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/appmesh_gateway_route#regex AppmeshGatewayRoute#regex}. |

---

##### `Exact`<sup>Optional</sup> <a name="Exact" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchPath.property.exact"></a>

```csharp
public string Exact { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/appmesh_gateway_route#exact AppmeshGatewayRoute#exact}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchPath.property.regex"></a>

```csharp
public string Regex { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/appmesh_gateway_route#regex AppmeshGatewayRoute#regex}.

---

### AppmeshGatewayRouteSpecHttpRouteMatchQueryParameter <a name="AppmeshGatewayRouteSpecHttpRouteMatchQueryParameter" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchQueryParameter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchQueryParameter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppmeshGatewayRouteSpecHttpRouteMatchQueryParameter {
    string Name,
    AppmeshGatewayRouteSpecHttpRouteMatchQueryParameterMatch Match = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchQueryParameter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/appmesh_gateway_route#name AppmeshGatewayRoute#name}. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchQueryParameter.property.match">Match</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchQueryParameterMatch">AppmeshGatewayRouteSpecHttpRouteMatchQueryParameterMatch</a></code> | match block. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchQueryParameter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/appmesh_gateway_route#name AppmeshGatewayRoute#name}.

---

##### `Match`<sup>Optional</sup> <a name="Match" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchQueryParameter.property.match"></a>

```csharp
public AppmeshGatewayRouteSpecHttpRouteMatchQueryParameterMatch Match { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchQueryParameterMatch">AppmeshGatewayRouteSpecHttpRouteMatchQueryParameterMatch</a>

match block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/appmesh_gateway_route#match AppmeshGatewayRoute#match}

---

### AppmeshGatewayRouteSpecHttpRouteMatchQueryParameterMatch <a name="AppmeshGatewayRouteSpecHttpRouteMatchQueryParameterMatch" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchQueryParameterMatch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchQueryParameterMatch.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppmeshGatewayRouteSpecHttpRouteMatchQueryParameterMatch {
    string Exact = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchQueryParameterMatch.property.exact">Exact</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/appmesh_gateway_route#exact AppmeshGatewayRoute#exact}. |

---

##### `Exact`<sup>Optional</sup> <a name="Exact" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchQueryParameterMatch.property.exact"></a>

```csharp
public string Exact { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.42.0/docs/resources/appmesh_gateway_route#exact AppmeshGatewayRoute#exact}.

---

## Classes <a name="Classes" id="Classes"></a>

### AppmeshGatewayRouteSpecGrpcRouteActionOutputReference <a name="AppmeshGatewayRouteSpecGrpcRouteActionOutputReference" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppmeshGatewayRouteSpecGrpcRouteActionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionOutputReference.putTarget">PutTarget</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTarget` <a name="PutTarget" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionOutputReference.putTarget"></a>

```csharp
private void PutTarget(AppmeshGatewayRouteSpecGrpcRouteActionTarget Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionOutputReference.putTarget.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTarget">AppmeshGatewayRouteSpecGrpcRouteActionTarget</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionOutputReference.property.target">Target</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference">AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionOutputReference.property.targetInput">TargetInput</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTarget">AppmeshGatewayRouteSpecGrpcRouteActionTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteAction">AppmeshGatewayRouteSpecGrpcRouteAction</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionOutputReference.property.target"></a>

```csharp
public AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference Target { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference">AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference</a>

---

##### `TargetInput`<sup>Optional</sup> <a name="TargetInput" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionOutputReference.property.targetInput"></a>

```csharp
public AppmeshGatewayRouteSpecGrpcRouteActionTarget TargetInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTarget">AppmeshGatewayRouteSpecGrpcRouteActionTarget</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionOutputReference.property.internalValue"></a>

```csharp
public AppmeshGatewayRouteSpecGrpcRouteAction InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteAction">AppmeshGatewayRouteSpecGrpcRouteAction</a>

---


### AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference <a name="AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.putVirtualService">PutVirtualService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.resetPort">ResetPort</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutVirtualService` <a name="PutVirtualService" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.putVirtualService"></a>

```csharp
private void PutVirtualService(AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualService Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.putVirtualService.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualService">AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualService</a>

---

##### `ResetPort` <a name="ResetPort" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.resetPort"></a>

```csharp
private void ResetPort()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.property.virtualService">VirtualService</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference">AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.property.portInput">PortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.property.virtualServiceInput">VirtualServiceInput</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualService">AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTarget">AppmeshGatewayRouteSpecGrpcRouteActionTarget</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `VirtualService`<sup>Required</sup> <a name="VirtualService" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.property.virtualService"></a>

```csharp
public AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference VirtualService { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference">AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference</a>

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.property.portInput"></a>

```csharp
public double PortInput { get; }
```

- *Type:* double

---

##### `VirtualServiceInput`<sup>Optional</sup> <a name="VirtualServiceInput" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.property.virtualServiceInput"></a>

```csharp
public AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualService VirtualServiceInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualService">AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualService</a>

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference.property.internalValue"></a>

```csharp
public AppmeshGatewayRouteSpecGrpcRouteActionTarget InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTarget">AppmeshGatewayRouteSpecGrpcRouteActionTarget</a>

---


### AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference <a name="AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.property.virtualServiceNameInput">VirtualServiceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.property.virtualServiceName">VirtualServiceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualService">AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualService</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `VirtualServiceNameInput`<sup>Optional</sup> <a name="VirtualServiceNameInput" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.property.virtualServiceNameInput"></a>

```csharp
public string VirtualServiceNameInput { get; }
```

- *Type:* string

---

##### `VirtualServiceName`<sup>Required</sup> <a name="VirtualServiceName" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.property.virtualServiceName"></a>

```csharp
public string VirtualServiceName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference.property.internalValue"></a>

```csharp
public AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualService InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualService">AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualService</a>

---


### AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference <a name="AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.resetPort">ResetPort</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPort` <a name="ResetPort" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.resetPort"></a>

```csharp
private void ResetPort()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.property.portInput">PortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.property.serviceNameInput">ServiceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.property.serviceName">ServiceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatch">AppmeshGatewayRouteSpecGrpcRouteMatch</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.property.portInput"></a>

```csharp
public double PortInput { get; }
```

- *Type:* double

---

##### `ServiceNameInput`<sup>Optional</sup> <a name="ServiceNameInput" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.property.serviceNameInput"></a>

```csharp
public string ServiceNameInput { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `ServiceName`<sup>Required</sup> <a name="ServiceName" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.property.serviceName"></a>

```csharp
public string ServiceName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference.property.internalValue"></a>

```csharp
public AppmeshGatewayRouteSpecGrpcRouteMatch InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatch">AppmeshGatewayRouteSpecGrpcRouteMatch</a>

---


### AppmeshGatewayRouteSpecGrpcRouteOutputReference <a name="AppmeshGatewayRouteSpecGrpcRouteOutputReference" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppmeshGatewayRouteSpecGrpcRouteOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference.putAction">PutAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference.putMatch">PutMatch</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAction` <a name="PutAction" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference.putAction"></a>

```csharp
private void PutAction(AppmeshGatewayRouteSpecGrpcRouteAction Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference.putAction.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteAction">AppmeshGatewayRouteSpecGrpcRouteAction</a>

---

##### `PutMatch` <a name="PutMatch" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference.putMatch"></a>

```csharp
private void PutMatch(AppmeshGatewayRouteSpecGrpcRouteMatch Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference.putMatch.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatch">AppmeshGatewayRouteSpecGrpcRouteMatch</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference.property.action">Action</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionOutputReference">AppmeshGatewayRouteSpecGrpcRouteActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference.property.match">Match</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference">AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference.property.actionInput">ActionInput</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteAction">AppmeshGatewayRouteSpecGrpcRouteAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference.property.matchInput">MatchInput</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatch">AppmeshGatewayRouteSpecGrpcRouteMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRoute">AppmeshGatewayRouteSpecGrpcRoute</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference.property.action"></a>

```csharp
public AppmeshGatewayRouteSpecGrpcRouteActionOutputReference Action { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteActionOutputReference">AppmeshGatewayRouteSpecGrpcRouteActionOutputReference</a>

---

##### `Match`<sup>Required</sup> <a name="Match" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference.property.match"></a>

```csharp
public AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference Match { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference">AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference</a>

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference.property.actionInput"></a>

```csharp
public AppmeshGatewayRouteSpecGrpcRouteAction ActionInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteAction">AppmeshGatewayRouteSpecGrpcRouteAction</a>

---

##### `MatchInput`<sup>Optional</sup> <a name="MatchInput" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference.property.matchInput"></a>

```csharp
public AppmeshGatewayRouteSpecGrpcRouteMatch MatchInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteMatch">AppmeshGatewayRouteSpecGrpcRouteMatch</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference.property.internalValue"></a>

```csharp
public AppmeshGatewayRouteSpecGrpcRoute InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRoute">AppmeshGatewayRouteSpecGrpcRoute</a>

---


### AppmeshGatewayRouteSpecHttp2RouteActionOutputReference <a name="AppmeshGatewayRouteSpecHttp2RouteActionOutputReference" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppmeshGatewayRouteSpecHttp2RouteActionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.putRewrite">PutRewrite</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.putTarget">PutTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.resetRewrite">ResetRewrite</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRewrite` <a name="PutRewrite" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.putRewrite"></a>

```csharp
private void PutRewrite(AppmeshGatewayRouteSpecHttp2RouteActionRewrite Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.putRewrite.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewrite">AppmeshGatewayRouteSpecHttp2RouteActionRewrite</a>

---

##### `PutTarget` <a name="PutTarget" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.putTarget"></a>

```csharp
private void PutTarget(AppmeshGatewayRouteSpecHttp2RouteActionTarget Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.putTarget.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTarget">AppmeshGatewayRouteSpecHttp2RouteActionTarget</a>

---

##### `ResetRewrite` <a name="ResetRewrite" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.resetRewrite"></a>

```csharp
private void ResetRewrite()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.property.rewrite">Rewrite</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference">AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.property.target">Target</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference">AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.property.rewriteInput">RewriteInput</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewrite">AppmeshGatewayRouteSpecHttp2RouteActionRewrite</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.property.targetInput">TargetInput</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTarget">AppmeshGatewayRouteSpecHttp2RouteActionTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteAction">AppmeshGatewayRouteSpecHttp2RouteAction</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Rewrite`<sup>Required</sup> <a name="Rewrite" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.property.rewrite"></a>

```csharp
public AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference Rewrite { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference">AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference</a>

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.property.target"></a>

```csharp
public AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference Target { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference">AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference</a>

---

##### `RewriteInput`<sup>Optional</sup> <a name="RewriteInput" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.property.rewriteInput"></a>

```csharp
public AppmeshGatewayRouteSpecHttp2RouteActionRewrite RewriteInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewrite">AppmeshGatewayRouteSpecHttp2RouteActionRewrite</a>

---

##### `TargetInput`<sup>Optional</sup> <a name="TargetInput" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.property.targetInput"></a>

```csharp
public AppmeshGatewayRouteSpecHttp2RouteActionTarget TargetInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTarget">AppmeshGatewayRouteSpecHttp2RouteActionTarget</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference.property.internalValue"></a>

```csharp
public AppmeshGatewayRouteSpecHttp2RouteAction InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteAction">AppmeshGatewayRouteSpecHttp2RouteAction</a>

---


### AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference <a name="AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.property.defaultTargetHostnameInput">DefaultTargetHostnameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.property.defaultTargetHostname">DefaultTargetHostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostname">AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostname</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DefaultTargetHostnameInput`<sup>Optional</sup> <a name="DefaultTargetHostnameInput" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.property.defaultTargetHostnameInput"></a>

```csharp
public string DefaultTargetHostnameInput { get; }
```

- *Type:* string

---

##### `DefaultTargetHostname`<sup>Required</sup> <a name="DefaultTargetHostname" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.property.defaultTargetHostname"></a>

```csharp
public string DefaultTargetHostname { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference.property.internalValue"></a>

```csharp
public AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostname InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostname">AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostname</a>

---


### AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference <a name="AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.putHostname">PutHostname</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.putPath">PutPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.putPrefix">PutPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.resetHostname">ResetHostname</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.resetPath">ResetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.resetPrefix">ResetPrefix</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutHostname` <a name="PutHostname" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.putHostname"></a>

```csharp
private void PutHostname(AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostname Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.putHostname.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostname">AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostname</a>

---

##### `PutPath` <a name="PutPath" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.putPath"></a>

```csharp
private void PutPath(AppmeshGatewayRouteSpecHttp2RouteActionRewritePath Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.putPath.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePath">AppmeshGatewayRouteSpecHttp2RouteActionRewritePath</a>

---

##### `PutPrefix` <a name="PutPrefix" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.putPrefix"></a>

```csharp
private void PutPrefix(AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefix Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.putPrefix.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefix">AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefix</a>

---

##### `ResetHostname` <a name="ResetHostname" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.resetHostname"></a>

```csharp
private void ResetHostname()
```

##### `ResetPath` <a name="ResetPath" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.resetPath"></a>

```csharp
private void ResetPath()
```

##### `ResetPrefix` <a name="ResetPrefix" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.resetPrefix"></a>

```csharp
private void ResetPrefix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.property.hostname">Hostname</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference">AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.property.path">Path</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePathOutputReference">AppmeshGatewayRouteSpecHttp2RouteActionRewritePathOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.property.prefix">Prefix</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference">AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.property.hostnameInput">HostnameInput</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostname">AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostname</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.property.pathInput">PathInput</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePath">AppmeshGatewayRouteSpecHttp2RouteActionRewritePath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.property.prefixInput">PrefixInput</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefix">AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewrite">AppmeshGatewayRouteSpecHttp2RouteActionRewrite</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.property.hostname"></a>

```csharp
public AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference Hostname { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference">AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference</a>

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.property.path"></a>

```csharp
public AppmeshGatewayRouteSpecHttp2RouteActionRewritePathOutputReference Path { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePathOutputReference">AppmeshGatewayRouteSpecHttp2RouteActionRewritePathOutputReference</a>

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.property.prefix"></a>

```csharp
public AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference Prefix { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference">AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference</a>

---

##### `HostnameInput`<sup>Optional</sup> <a name="HostnameInput" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.property.hostnameInput"></a>

```csharp
public AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostname HostnameInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostname">AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostname</a>

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.property.pathInput"></a>

```csharp
public AppmeshGatewayRouteSpecHttp2RouteActionRewritePath PathInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePath">AppmeshGatewayRouteSpecHttp2RouteActionRewritePath</a>

---

##### `PrefixInput`<sup>Optional</sup> <a name="PrefixInput" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.property.prefixInput"></a>

```csharp
public AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefix PrefixInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefix">AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefix</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference.property.internalValue"></a>

```csharp
public AppmeshGatewayRouteSpecHttp2RouteActionRewrite InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewrite">AppmeshGatewayRouteSpecHttp2RouteActionRewrite</a>

---


### AppmeshGatewayRouteSpecHttp2RouteActionRewritePathOutputReference <a name="AppmeshGatewayRouteSpecHttp2RouteActionRewritePathOutputReference" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePathOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePathOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppmeshGatewayRouteSpecHttp2RouteActionRewritePathOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePathOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePathOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePathOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePathOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePathOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePathOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePathOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePathOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePathOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePathOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePathOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePathOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePathOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePathOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePathOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePathOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePathOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePathOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePathOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePathOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePathOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePathOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePathOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePathOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePathOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePathOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePathOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePathOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePathOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePathOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePathOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePathOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePathOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePathOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePathOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePathOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePathOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePathOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePathOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePathOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePathOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePathOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePathOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePathOutputReference.property.exactInput">ExactInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePathOutputReference.property.exact">Exact</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePathOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePath">AppmeshGatewayRouteSpecHttp2RouteActionRewritePath</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePathOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePathOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ExactInput`<sup>Optional</sup> <a name="ExactInput" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePathOutputReference.property.exactInput"></a>

```csharp
public string ExactInput { get; }
```

- *Type:* string

---

##### `Exact`<sup>Required</sup> <a name="Exact" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePathOutputReference.property.exact"></a>

```csharp
public string Exact { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePathOutputReference.property.internalValue"></a>

```csharp
public AppmeshGatewayRouteSpecHttp2RouteActionRewritePath InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePath">AppmeshGatewayRouteSpecHttp2RouteActionRewritePath</a>

---


### AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference <a name="AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.resetDefaultPrefix">ResetDefaultPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDefaultPrefix` <a name="ResetDefaultPrefix" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.resetDefaultPrefix"></a>

```csharp
private void ResetDefaultPrefix()
```

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.property.defaultPrefixInput">DefaultPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.property.defaultPrefix">DefaultPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefix">AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefix</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DefaultPrefixInput`<sup>Optional</sup> <a name="DefaultPrefixInput" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.property.defaultPrefixInput"></a>

```csharp
public string DefaultPrefixInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `DefaultPrefix`<sup>Required</sup> <a name="DefaultPrefix" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.property.defaultPrefix"></a>

```csharp
public string DefaultPrefix { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference.property.internalValue"></a>

```csharp
public AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefix InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefix">AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefix</a>

---


### AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference <a name="AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.putVirtualService">PutVirtualService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.resetPort">ResetPort</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutVirtualService` <a name="PutVirtualService" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.putVirtualService"></a>

```csharp
private void PutVirtualService(AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualService Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.putVirtualService.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualService">AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualService</a>

---

##### `ResetPort` <a name="ResetPort" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.resetPort"></a>

```csharp
private void ResetPort()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.property.virtualService">VirtualService</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference">AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.property.portInput">PortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.property.virtualServiceInput">VirtualServiceInput</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualService">AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTarget">AppmeshGatewayRouteSpecHttp2RouteActionTarget</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `VirtualService`<sup>Required</sup> <a name="VirtualService" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.property.virtualService"></a>

```csharp
public AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference VirtualService { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference">AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference</a>

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.property.portInput"></a>

```csharp
public double PortInput { get; }
```

- *Type:* double

---

##### `VirtualServiceInput`<sup>Optional</sup> <a name="VirtualServiceInput" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.property.virtualServiceInput"></a>

```csharp
public AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualService VirtualServiceInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualService">AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualService</a>

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference.property.internalValue"></a>

```csharp
public AppmeshGatewayRouteSpecHttp2RouteActionTarget InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTarget">AppmeshGatewayRouteSpecHttp2RouteActionTarget</a>

---


### AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference <a name="AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.property.virtualServiceNameInput">VirtualServiceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.property.virtualServiceName">VirtualServiceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualService">AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualService</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `VirtualServiceNameInput`<sup>Optional</sup> <a name="VirtualServiceNameInput" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.property.virtualServiceNameInput"></a>

```csharp
public string VirtualServiceNameInput { get; }
```

- *Type:* string

---

##### `VirtualServiceName`<sup>Required</sup> <a name="VirtualServiceName" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.property.virtualServiceName"></a>

```csharp
public string VirtualServiceName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference.property.internalValue"></a>

```csharp
public AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualService InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualService">AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualService</a>

---


### AppmeshGatewayRouteSpecHttp2RouteMatchHeaderList <a name="AppmeshGatewayRouteSpecHttp2RouteMatchHeaderList" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppmeshGatewayRouteSpecHttp2RouteMatchHeaderList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderList.get"></a>

```csharp
private AppmeshGatewayRouteSpecHttp2RouteMatchHeaderOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### AppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchOutputReference <a name="AppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchOutputReference" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchOutputReference.putRange">PutRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchOutputReference.resetExact">ResetExact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchOutputReference.resetPrefix">ResetPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchOutputReference.resetRange">ResetRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchOutputReference.resetSuffix">ResetSuffix</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRange` <a name="PutRange" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchOutputReference.putRange"></a>

```csharp
private void PutRange(AppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchRange Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchOutputReference.putRange.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchRange">AppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchRange</a>

---

##### `ResetExact` <a name="ResetExact" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchOutputReference.resetExact"></a>

```csharp
private void ResetExact()
```

##### `ResetPrefix` <a name="ResetPrefix" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchOutputReference.resetPrefix"></a>

```csharp
private void ResetPrefix()
```

##### `ResetRange` <a name="ResetRange" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchOutputReference.resetRange"></a>

```csharp
private void ResetRange()
```

##### `ResetRegex` <a name="ResetRegex" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchOutputReference.resetRegex"></a>

```csharp
private void ResetRegex()
```

##### `ResetSuffix` <a name="ResetSuffix" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchOutputReference.resetSuffix"></a>

```csharp
private void ResetSuffix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchOutputReference.property.range">Range</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference">AppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchOutputReference.property.exactInput">ExactInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchOutputReference.property.prefixInput">PrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchOutputReference.property.rangeInput">RangeInput</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchRange">AppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchOutputReference.property.regexInput">RegexInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchOutputReference.property.suffixInput">SuffixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchOutputReference.property.exact">Exact</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchOutputReference.property.prefix">Prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchOutputReference.property.regex">Regex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchOutputReference.property.suffix">Suffix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatch">AppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatch</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Range`<sup>Required</sup> <a name="Range" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchOutputReference.property.range"></a>

```csharp
public AppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference Range { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference">AppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference</a>

---

##### `ExactInput`<sup>Optional</sup> <a name="ExactInput" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchOutputReference.property.exactInput"></a>

```csharp
public string ExactInput { get; }
```

- *Type:* string

---

##### `PrefixInput`<sup>Optional</sup> <a name="PrefixInput" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchOutputReference.property.prefixInput"></a>

```csharp
public string PrefixInput { get; }
```

- *Type:* string

---

##### `RangeInput`<sup>Optional</sup> <a name="RangeInput" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchOutputReference.property.rangeInput"></a>

```csharp
public AppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchRange RangeInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchRange">AppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchRange</a>

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchOutputReference.property.regexInput"></a>

```csharp
public string RegexInput { get; }
```

- *Type:* string

---

##### `SuffixInput`<sup>Optional</sup> <a name="SuffixInput" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchOutputReference.property.suffixInput"></a>

```csharp
public string SuffixInput { get; }
```

- *Type:* string

---

##### `Exact`<sup>Required</sup> <a name="Exact" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchOutputReference.property.exact"></a>

```csharp
public string Exact { get; }
```

- *Type:* string

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchOutputReference.property.prefix"></a>

```csharp
public string Prefix { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchOutputReference.property.regex"></a>

```csharp
public string Regex { get; }
```

- *Type:* string

---

##### `Suffix`<sup>Required</sup> <a name="Suffix" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchOutputReference.property.suffix"></a>

```csharp
public string Suffix { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchOutputReference.property.internalValue"></a>

```csharp
public AppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatch InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatch">AppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatch</a>

---


### AppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference <a name="AppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.property.endInput">EndInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.property.startInput">StartInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.property.end">End</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.property.start">Start</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchRange">AppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchRange</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EndInput`<sup>Optional</sup> <a name="EndInput" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.property.endInput"></a>

```csharp
public double EndInput { get; }
```

- *Type:* double

---

##### `StartInput`<sup>Optional</sup> <a name="StartInput" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.property.startInput"></a>

```csharp
public double StartInput { get; }
```

- *Type:* double

---

##### `End`<sup>Required</sup> <a name="End" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.property.end"></a>

```csharp
public double End { get; }
```

- *Type:* double

---

##### `Start`<sup>Required</sup> <a name="Start" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.property.start"></a>

```csharp
public double Start { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.property.internalValue"></a>

```csharp
public AppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchRange InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchRange">AppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchRange</a>

---


### AppmeshGatewayRouteSpecHttp2RouteMatchHeaderOutputReference <a name="AppmeshGatewayRouteSpecHttp2RouteMatchHeaderOutputReference" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppmeshGatewayRouteSpecHttp2RouteMatchHeaderOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderOutputReference.putMatch">PutMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderOutputReference.resetInvert">ResetInvert</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderOutputReference.resetMatch">ResetMatch</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMatch` <a name="PutMatch" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderOutputReference.putMatch"></a>

```csharp
private void PutMatch(AppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatch Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderOutputReference.putMatch.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatch">AppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatch</a>

---

##### `ResetInvert` <a name="ResetInvert" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderOutputReference.resetInvert"></a>

```csharp
private void ResetInvert()
```

##### `ResetMatch` <a name="ResetMatch" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderOutputReference.resetMatch"></a>

```csharp
private void ResetMatch()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderOutputReference.property.match">Match</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchOutputReference">AppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderOutputReference.property.invertInput">InvertInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderOutputReference.property.matchInput">MatchInput</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatch">AppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderOutputReference.property.invert">Invert</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Match`<sup>Required</sup> <a name="Match" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderOutputReference.property.match"></a>

```csharp
public AppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchOutputReference Match { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchOutputReference">AppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchOutputReference</a>

---

##### `InvertInput`<sup>Optional</sup> <a name="InvertInput" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderOutputReference.property.invertInput"></a>

```csharp
public object InvertInput { get; }
```

- *Type:* object

---

##### `MatchInput`<sup>Optional</sup> <a name="MatchInput" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderOutputReference.property.matchInput"></a>

```csharp
public AppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatch MatchInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatch">AppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatch</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `Invert`<sup>Required</sup> <a name="Invert" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderOutputReference.property.invert"></a>

```csharp
public object Invert { get; }
```

- *Type:* object

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference <a name="AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.resetExact">ResetExact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.resetSuffix">ResetSuffix</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetExact` <a name="ResetExact" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.resetExact"></a>

```csharp
private void ResetExact()
```

##### `ResetSuffix` <a name="ResetSuffix" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.resetSuffix"></a>

```csharp
private void ResetSuffix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.property.exactInput">ExactInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.property.suffixInput">SuffixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.property.exact">Exact</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.property.suffix">Suffix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostname">AppmeshGatewayRouteSpecHttp2RouteMatchHostname</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ExactInput`<sup>Optional</sup> <a name="ExactInput" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.property.exactInput"></a>

```csharp
public string ExactInput { get; }
```

- *Type:* string

---

##### `SuffixInput`<sup>Optional</sup> <a name="SuffixInput" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.property.suffixInput"></a>

```csharp
public string SuffixInput { get; }
```

- *Type:* string

---

##### `Exact`<sup>Required</sup> <a name="Exact" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.property.exact"></a>

```csharp
public string Exact { get; }
```

- *Type:* string

---

##### `Suffix`<sup>Required</sup> <a name="Suffix" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.property.suffix"></a>

```csharp
public string Suffix { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference.property.internalValue"></a>

```csharp
public AppmeshGatewayRouteSpecHttp2RouteMatchHostname InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostname">AppmeshGatewayRouteSpecHttp2RouteMatchHostname</a>

---


### AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference <a name="AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.putHeader">PutHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.putHostname">PutHostname</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.putPath">PutPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.putQueryParameter">PutQueryParameter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.resetHeader">ResetHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.resetHostname">ResetHostname</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.resetPath">ResetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.resetPrefix">ResetPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.resetQueryParameter">ResetQueryParameter</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutHeader` <a name="PutHeader" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.putHeader"></a>

```csharp
private void PutHeader(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.putHeader.parameter.value"></a>

- *Type:* object

---

##### `PutHostname` <a name="PutHostname" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.putHostname"></a>

```csharp
private void PutHostname(AppmeshGatewayRouteSpecHttp2RouteMatchHostname Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.putHostname.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostname">AppmeshGatewayRouteSpecHttp2RouteMatchHostname</a>

---

##### `PutPath` <a name="PutPath" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.putPath"></a>

```csharp
private void PutPath(AppmeshGatewayRouteSpecHttp2RouteMatchPath Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.putPath.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchPath">AppmeshGatewayRouteSpecHttp2RouteMatchPath</a>

---

##### `PutQueryParameter` <a name="PutQueryParameter" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.putQueryParameter"></a>

```csharp
private void PutQueryParameter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.putQueryParameter.parameter.value"></a>

- *Type:* object

---

##### `ResetHeader` <a name="ResetHeader" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.resetHeader"></a>

```csharp
private void ResetHeader()
```

##### `ResetHostname` <a name="ResetHostname" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.resetHostname"></a>

```csharp
private void ResetHostname()
```

##### `ResetPath` <a name="ResetPath" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.resetPath"></a>

```csharp
private void ResetPath()
```

##### `ResetPort` <a name="ResetPort" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.resetPort"></a>

```csharp
private void ResetPort()
```

##### `ResetPrefix` <a name="ResetPrefix" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.resetPrefix"></a>

```csharp
private void ResetPrefix()
```

##### `ResetQueryParameter` <a name="ResetQueryParameter" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.resetQueryParameter"></a>

```csharp
private void ResetQueryParameter()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.property.header">Header</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderList">AppmeshGatewayRouteSpecHttp2RouteMatchHeaderList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.property.hostname">Hostname</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference">AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.property.path">Path</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchPathOutputReference">AppmeshGatewayRouteSpecHttp2RouteMatchPathOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.property.queryParameter">QueryParameter</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterList">AppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.property.headerInput">HeaderInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.property.hostnameInput">HostnameInput</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostname">AppmeshGatewayRouteSpecHttp2RouteMatchHostname</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.property.pathInput">PathInput</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchPath">AppmeshGatewayRouteSpecHttp2RouteMatchPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.property.portInput">PortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.property.prefixInput">PrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.property.queryParameterInput">QueryParameterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.property.prefix">Prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatch">AppmeshGatewayRouteSpecHttp2RouteMatch</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Header`<sup>Required</sup> <a name="Header" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.property.header"></a>

```csharp
public AppmeshGatewayRouteSpecHttp2RouteMatchHeaderList Header { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHeaderList">AppmeshGatewayRouteSpecHttp2RouteMatchHeaderList</a>

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.property.hostname"></a>

```csharp
public AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference Hostname { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference">AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference</a>

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.property.path"></a>

```csharp
public AppmeshGatewayRouteSpecHttp2RouteMatchPathOutputReference Path { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchPathOutputReference">AppmeshGatewayRouteSpecHttp2RouteMatchPathOutputReference</a>

---

##### `QueryParameter`<sup>Required</sup> <a name="QueryParameter" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.property.queryParameter"></a>

```csharp
public AppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterList QueryParameter { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterList">AppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterList</a>

---

##### `HeaderInput`<sup>Optional</sup> <a name="HeaderInput" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.property.headerInput"></a>

```csharp
public object HeaderInput { get; }
```

- *Type:* object

---

##### `HostnameInput`<sup>Optional</sup> <a name="HostnameInput" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.property.hostnameInput"></a>

```csharp
public AppmeshGatewayRouteSpecHttp2RouteMatchHostname HostnameInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchHostname">AppmeshGatewayRouteSpecHttp2RouteMatchHostname</a>

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.property.pathInput"></a>

```csharp
public AppmeshGatewayRouteSpecHttp2RouteMatchPath PathInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchPath">AppmeshGatewayRouteSpecHttp2RouteMatchPath</a>

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.property.portInput"></a>

```csharp
public double PortInput { get; }
```

- *Type:* double

---

##### `PrefixInput`<sup>Optional</sup> <a name="PrefixInput" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.property.prefixInput"></a>

```csharp
public string PrefixInput { get; }
```

- *Type:* string

---

##### `QueryParameterInput`<sup>Optional</sup> <a name="QueryParameterInput" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.property.queryParameterInput"></a>

```csharp
public object QueryParameterInput { get; }
```

- *Type:* object

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.property.prefix"></a>

```csharp
public string Prefix { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference.property.internalValue"></a>

```csharp
public AppmeshGatewayRouteSpecHttp2RouteMatch InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatch">AppmeshGatewayRouteSpecHttp2RouteMatch</a>

---


### AppmeshGatewayRouteSpecHttp2RouteMatchPathOutputReference <a name="AppmeshGatewayRouteSpecHttp2RouteMatchPathOutputReference" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchPathOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchPathOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppmeshGatewayRouteSpecHttp2RouteMatchPathOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchPathOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchPathOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchPathOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchPathOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchPathOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchPathOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchPathOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchPathOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchPathOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchPathOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchPathOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchPathOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchPathOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchPathOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchPathOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchPathOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchPathOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchPathOutputReference.resetExact">ResetExact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchPathOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchPathOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchPathOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchPathOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchPathOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchPathOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchPathOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchPathOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchPathOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchPathOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchPathOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchPathOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchPathOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchPathOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchPathOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchPathOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchPathOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchPathOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchPathOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchPathOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchPathOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchPathOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchPathOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchPathOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchPathOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetExact` <a name="ResetExact" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchPathOutputReference.resetExact"></a>

```csharp
private void ResetExact()
```

##### `ResetRegex` <a name="ResetRegex" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchPathOutputReference.resetRegex"></a>

```csharp
private void ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchPathOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchPathOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchPathOutputReference.property.exactInput">ExactInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchPathOutputReference.property.regexInput">RegexInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchPathOutputReference.property.exact">Exact</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchPathOutputReference.property.regex">Regex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchPathOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchPath">AppmeshGatewayRouteSpecHttp2RouteMatchPath</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchPathOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchPathOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ExactInput`<sup>Optional</sup> <a name="ExactInput" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchPathOutputReference.property.exactInput"></a>

```csharp
public string ExactInput { get; }
```

- *Type:* string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchPathOutputReference.property.regexInput"></a>

```csharp
public string RegexInput { get; }
```

- *Type:* string

---

##### `Exact`<sup>Required</sup> <a name="Exact" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchPathOutputReference.property.exact"></a>

```csharp
public string Exact { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchPathOutputReference.property.regex"></a>

```csharp
public string Regex { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchPathOutputReference.property.internalValue"></a>

```csharp
public AppmeshGatewayRouteSpecHttp2RouteMatchPath InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchPath">AppmeshGatewayRouteSpecHttp2RouteMatchPath</a>

---


### AppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterList <a name="AppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterList" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterList.get"></a>

```csharp
private AppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### AppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterMatchOutputReference <a name="AppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterMatchOutputReference" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterMatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterMatchOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterMatchOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterMatchOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterMatchOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterMatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterMatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterMatchOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterMatchOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterMatchOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterMatchOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterMatchOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterMatchOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterMatchOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterMatchOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterMatchOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterMatchOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterMatchOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterMatchOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterMatchOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterMatchOutputReference.resetExact">ResetExact</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterMatchOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterMatchOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterMatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterMatchOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterMatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterMatchOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterMatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterMatchOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterMatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterMatchOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterMatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterMatchOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterMatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterMatchOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterMatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterMatchOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterMatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterMatchOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterMatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterMatchOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterMatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterMatchOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterMatchOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterMatchOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetExact` <a name="ResetExact" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterMatchOutputReference.resetExact"></a>

```csharp
private void ResetExact()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterMatchOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterMatchOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterMatchOutputReference.property.exactInput">ExactInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterMatchOutputReference.property.exact">Exact</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterMatchOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterMatch">AppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterMatch</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterMatchOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterMatchOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ExactInput`<sup>Optional</sup> <a name="ExactInput" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterMatchOutputReference.property.exactInput"></a>

```csharp
public string ExactInput { get; }
```

- *Type:* string

---

##### `Exact`<sup>Required</sup> <a name="Exact" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterMatchOutputReference.property.exact"></a>

```csharp
public string Exact { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterMatchOutputReference.property.internalValue"></a>

```csharp
public AppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterMatch InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterMatch">AppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterMatch</a>

---


### AppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterOutputReference <a name="AppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterOutputReference" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterOutputReference.putMatch">PutMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterOutputReference.resetMatch">ResetMatch</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMatch` <a name="PutMatch" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterOutputReference.putMatch"></a>

```csharp
private void PutMatch(AppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterMatch Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterOutputReference.putMatch.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterMatch">AppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterMatch</a>

---

##### `ResetMatch` <a name="ResetMatch" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterOutputReference.resetMatch"></a>

```csharp
private void ResetMatch()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterOutputReference.property.match">Match</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterMatchOutputReference">AppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterMatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterOutputReference.property.matchInput">MatchInput</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterMatch">AppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Match`<sup>Required</sup> <a name="Match" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterOutputReference.property.match"></a>

```csharp
public AppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterMatchOutputReference Match { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterMatchOutputReference">AppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterMatchOutputReference</a>

---

##### `MatchInput`<sup>Optional</sup> <a name="MatchInput" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterOutputReference.property.matchInput"></a>

```csharp
public AppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterMatch MatchInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterMatch">AppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterMatch</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### AppmeshGatewayRouteSpecHttp2RouteOutputReference <a name="AppmeshGatewayRouteSpecHttp2RouteOutputReference" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppmeshGatewayRouteSpecHttp2RouteOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.putAction">PutAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.putMatch">PutMatch</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAction` <a name="PutAction" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.putAction"></a>

```csharp
private void PutAction(AppmeshGatewayRouteSpecHttp2RouteAction Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.putAction.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteAction">AppmeshGatewayRouteSpecHttp2RouteAction</a>

---

##### `PutMatch` <a name="PutMatch" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.putMatch"></a>

```csharp
private void PutMatch(AppmeshGatewayRouteSpecHttp2RouteMatch Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.putMatch.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatch">AppmeshGatewayRouteSpecHttp2RouteMatch</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.property.action">Action</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference">AppmeshGatewayRouteSpecHttp2RouteActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.property.match">Match</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference">AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.property.actionInput">ActionInput</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteAction">AppmeshGatewayRouteSpecHttp2RouteAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.property.matchInput">MatchInput</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatch">AppmeshGatewayRouteSpecHttp2RouteMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2Route">AppmeshGatewayRouteSpecHttp2Route</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.property.action"></a>

```csharp
public AppmeshGatewayRouteSpecHttp2RouteActionOutputReference Action { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteActionOutputReference">AppmeshGatewayRouteSpecHttp2RouteActionOutputReference</a>

---

##### `Match`<sup>Required</sup> <a name="Match" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.property.match"></a>

```csharp
public AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference Match { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference">AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference</a>

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.property.actionInput"></a>

```csharp
public AppmeshGatewayRouteSpecHttp2RouteAction ActionInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteAction">AppmeshGatewayRouteSpecHttp2RouteAction</a>

---

##### `MatchInput`<sup>Optional</sup> <a name="MatchInput" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.property.matchInput"></a>

```csharp
public AppmeshGatewayRouteSpecHttp2RouteMatch MatchInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteMatch">AppmeshGatewayRouteSpecHttp2RouteMatch</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference.property.internalValue"></a>

```csharp
public AppmeshGatewayRouteSpecHttp2Route InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2Route">AppmeshGatewayRouteSpecHttp2Route</a>

---


### AppmeshGatewayRouteSpecHttpRouteActionOutputReference <a name="AppmeshGatewayRouteSpecHttpRouteActionOutputReference" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppmeshGatewayRouteSpecHttpRouteActionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.putRewrite">PutRewrite</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.putTarget">PutTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.resetRewrite">ResetRewrite</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRewrite` <a name="PutRewrite" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.putRewrite"></a>

```csharp
private void PutRewrite(AppmeshGatewayRouteSpecHttpRouteActionRewrite Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.putRewrite.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewrite">AppmeshGatewayRouteSpecHttpRouteActionRewrite</a>

---

##### `PutTarget` <a name="PutTarget" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.putTarget"></a>

```csharp
private void PutTarget(AppmeshGatewayRouteSpecHttpRouteActionTarget Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.putTarget.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTarget">AppmeshGatewayRouteSpecHttpRouteActionTarget</a>

---

##### `ResetRewrite` <a name="ResetRewrite" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.resetRewrite"></a>

```csharp
private void ResetRewrite()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.property.rewrite">Rewrite</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference">AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.property.target">Target</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference">AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.property.rewriteInput">RewriteInput</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewrite">AppmeshGatewayRouteSpecHttpRouteActionRewrite</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.property.targetInput">TargetInput</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTarget">AppmeshGatewayRouteSpecHttpRouteActionTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteAction">AppmeshGatewayRouteSpecHttpRouteAction</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Rewrite`<sup>Required</sup> <a name="Rewrite" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.property.rewrite"></a>

```csharp
public AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference Rewrite { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference">AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference</a>

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.property.target"></a>

```csharp
public AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference Target { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference">AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference</a>

---

##### `RewriteInput`<sup>Optional</sup> <a name="RewriteInput" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.property.rewriteInput"></a>

```csharp
public AppmeshGatewayRouteSpecHttpRouteActionRewrite RewriteInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewrite">AppmeshGatewayRouteSpecHttpRouteActionRewrite</a>

---

##### `TargetInput`<sup>Optional</sup> <a name="TargetInput" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.property.targetInput"></a>

```csharp
public AppmeshGatewayRouteSpecHttpRouteActionTarget TargetInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTarget">AppmeshGatewayRouteSpecHttpRouteActionTarget</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference.property.internalValue"></a>

```csharp
public AppmeshGatewayRouteSpecHttpRouteAction InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteAction">AppmeshGatewayRouteSpecHttpRouteAction</a>

---


### AppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference <a name="AppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.property.defaultTargetHostnameInput">DefaultTargetHostnameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.property.defaultTargetHostname">DefaultTargetHostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostname">AppmeshGatewayRouteSpecHttpRouteActionRewriteHostname</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DefaultTargetHostnameInput`<sup>Optional</sup> <a name="DefaultTargetHostnameInput" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.property.defaultTargetHostnameInput"></a>

```csharp
public string DefaultTargetHostnameInput { get; }
```

- *Type:* string

---

##### `DefaultTargetHostname`<sup>Required</sup> <a name="DefaultTargetHostname" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.property.defaultTargetHostname"></a>

```csharp
public string DefaultTargetHostname { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference.property.internalValue"></a>

```csharp
public AppmeshGatewayRouteSpecHttpRouteActionRewriteHostname InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostname">AppmeshGatewayRouteSpecHttpRouteActionRewriteHostname</a>

---


### AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference <a name="AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.putHostname">PutHostname</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.putPath">PutPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.putPrefix">PutPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.resetHostname">ResetHostname</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.resetPath">ResetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.resetPrefix">ResetPrefix</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutHostname` <a name="PutHostname" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.putHostname"></a>

```csharp
private void PutHostname(AppmeshGatewayRouteSpecHttpRouteActionRewriteHostname Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.putHostname.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostname">AppmeshGatewayRouteSpecHttpRouteActionRewriteHostname</a>

---

##### `PutPath` <a name="PutPath" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.putPath"></a>

```csharp
private void PutPath(AppmeshGatewayRouteSpecHttpRouteActionRewritePath Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.putPath.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePath">AppmeshGatewayRouteSpecHttpRouteActionRewritePath</a>

---

##### `PutPrefix` <a name="PutPrefix" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.putPrefix"></a>

```csharp
private void PutPrefix(AppmeshGatewayRouteSpecHttpRouteActionRewritePrefix Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.putPrefix.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefix">AppmeshGatewayRouteSpecHttpRouteActionRewritePrefix</a>

---

##### `ResetHostname` <a name="ResetHostname" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.resetHostname"></a>

```csharp
private void ResetHostname()
```

##### `ResetPath` <a name="ResetPath" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.resetPath"></a>

```csharp
private void ResetPath()
```

##### `ResetPrefix` <a name="ResetPrefix" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.resetPrefix"></a>

```csharp
private void ResetPrefix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.property.hostname">Hostname</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference">AppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.property.path">Path</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePathOutputReference">AppmeshGatewayRouteSpecHttpRouteActionRewritePathOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.property.prefix">Prefix</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference">AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.property.hostnameInput">HostnameInput</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostname">AppmeshGatewayRouteSpecHttpRouteActionRewriteHostname</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.property.pathInput">PathInput</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePath">AppmeshGatewayRouteSpecHttpRouteActionRewritePath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.property.prefixInput">PrefixInput</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefix">AppmeshGatewayRouteSpecHttpRouteActionRewritePrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewrite">AppmeshGatewayRouteSpecHttpRouteActionRewrite</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.property.hostname"></a>

```csharp
public AppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference Hostname { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference">AppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference</a>

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.property.path"></a>

```csharp
public AppmeshGatewayRouteSpecHttpRouteActionRewritePathOutputReference Path { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePathOutputReference">AppmeshGatewayRouteSpecHttpRouteActionRewritePathOutputReference</a>

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.property.prefix"></a>

```csharp
public AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference Prefix { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference">AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference</a>

---

##### `HostnameInput`<sup>Optional</sup> <a name="HostnameInput" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.property.hostnameInput"></a>

```csharp
public AppmeshGatewayRouteSpecHttpRouteActionRewriteHostname HostnameInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteHostname">AppmeshGatewayRouteSpecHttpRouteActionRewriteHostname</a>

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.property.pathInput"></a>

```csharp
public AppmeshGatewayRouteSpecHttpRouteActionRewritePath PathInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePath">AppmeshGatewayRouteSpecHttpRouteActionRewritePath</a>

---

##### `PrefixInput`<sup>Optional</sup> <a name="PrefixInput" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.property.prefixInput"></a>

```csharp
public AppmeshGatewayRouteSpecHttpRouteActionRewritePrefix PrefixInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefix">AppmeshGatewayRouteSpecHttpRouteActionRewritePrefix</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference.property.internalValue"></a>

```csharp
public AppmeshGatewayRouteSpecHttpRouteActionRewrite InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewrite">AppmeshGatewayRouteSpecHttpRouteActionRewrite</a>

---


### AppmeshGatewayRouteSpecHttpRouteActionRewritePathOutputReference <a name="AppmeshGatewayRouteSpecHttpRouteActionRewritePathOutputReference" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePathOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePathOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppmeshGatewayRouteSpecHttpRouteActionRewritePathOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePathOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePathOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePathOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePathOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePathOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePathOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePathOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePathOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePathOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePathOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePathOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePathOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePathOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePathOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePathOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePathOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePathOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePathOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePathOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePathOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePathOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePathOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePathOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePathOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePathOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePathOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePathOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePathOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePathOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePathOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePathOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePathOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePathOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePathOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePathOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePathOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePathOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePathOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePathOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePathOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePathOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePathOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePathOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePathOutputReference.property.exactInput">ExactInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePathOutputReference.property.exact">Exact</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePathOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePath">AppmeshGatewayRouteSpecHttpRouteActionRewritePath</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePathOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePathOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ExactInput`<sup>Optional</sup> <a name="ExactInput" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePathOutputReference.property.exactInput"></a>

```csharp
public string ExactInput { get; }
```

- *Type:* string

---

##### `Exact`<sup>Required</sup> <a name="Exact" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePathOutputReference.property.exact"></a>

```csharp
public string Exact { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePathOutputReference.property.internalValue"></a>

```csharp
public AppmeshGatewayRouteSpecHttpRouteActionRewritePath InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePath">AppmeshGatewayRouteSpecHttpRouteActionRewritePath</a>

---


### AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference <a name="AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.resetDefaultPrefix">ResetDefaultPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDefaultPrefix` <a name="ResetDefaultPrefix" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.resetDefaultPrefix"></a>

```csharp
private void ResetDefaultPrefix()
```

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.property.defaultPrefixInput">DefaultPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.property.defaultPrefix">DefaultPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefix">AppmeshGatewayRouteSpecHttpRouteActionRewritePrefix</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DefaultPrefixInput`<sup>Optional</sup> <a name="DefaultPrefixInput" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.property.defaultPrefixInput"></a>

```csharp
public string DefaultPrefixInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `DefaultPrefix`<sup>Required</sup> <a name="DefaultPrefix" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.property.defaultPrefix"></a>

```csharp
public string DefaultPrefix { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference.property.internalValue"></a>

```csharp
public AppmeshGatewayRouteSpecHttpRouteActionRewritePrefix InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionRewritePrefix">AppmeshGatewayRouteSpecHttpRouteActionRewritePrefix</a>

---


### AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference <a name="AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.putVirtualService">PutVirtualService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.resetPort">ResetPort</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutVirtualService` <a name="PutVirtualService" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.putVirtualService"></a>

```csharp
private void PutVirtualService(AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualService Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.putVirtualService.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualService">AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualService</a>

---

##### `ResetPort` <a name="ResetPort" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.resetPort"></a>

```csharp
private void ResetPort()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.property.virtualService">VirtualService</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference">AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.property.portInput">PortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.property.virtualServiceInput">VirtualServiceInput</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualService">AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTarget">AppmeshGatewayRouteSpecHttpRouteActionTarget</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `VirtualService`<sup>Required</sup> <a name="VirtualService" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.property.virtualService"></a>

```csharp
public AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference VirtualService { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference">AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference</a>

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.property.portInput"></a>

```csharp
public double PortInput { get; }
```

- *Type:* double

---

##### `VirtualServiceInput`<sup>Optional</sup> <a name="VirtualServiceInput" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.property.virtualServiceInput"></a>

```csharp
public AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualService VirtualServiceInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualService">AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualService</a>

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference.property.internalValue"></a>

```csharp
public AppmeshGatewayRouteSpecHttpRouteActionTarget InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTarget">AppmeshGatewayRouteSpecHttpRouteActionTarget</a>

---


### AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference <a name="AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.property.virtualServiceNameInput">VirtualServiceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.property.virtualServiceName">VirtualServiceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualService">AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualService</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `VirtualServiceNameInput`<sup>Optional</sup> <a name="VirtualServiceNameInput" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.property.virtualServiceNameInput"></a>

```csharp
public string VirtualServiceNameInput { get; }
```

- *Type:* string

---

##### `VirtualServiceName`<sup>Required</sup> <a name="VirtualServiceName" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.property.virtualServiceName"></a>

```csharp
public string VirtualServiceName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference.property.internalValue"></a>

```csharp
public AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualService InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualService">AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualService</a>

---


### AppmeshGatewayRouteSpecHttpRouteMatchHeaderList <a name="AppmeshGatewayRouteSpecHttpRouteMatchHeaderList" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppmeshGatewayRouteSpecHttpRouteMatchHeaderList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderList.get"></a>

```csharp
private AppmeshGatewayRouteSpecHttpRouteMatchHeaderOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### AppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchOutputReference <a name="AppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchOutputReference" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchOutputReference.putRange">PutRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchOutputReference.resetExact">ResetExact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchOutputReference.resetPrefix">ResetPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchOutputReference.resetRange">ResetRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchOutputReference.resetSuffix">ResetSuffix</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRange` <a name="PutRange" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchOutputReference.putRange"></a>

```csharp
private void PutRange(AppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchRange Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchOutputReference.putRange.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchRange">AppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchRange</a>

---

##### `ResetExact` <a name="ResetExact" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchOutputReference.resetExact"></a>

```csharp
private void ResetExact()
```

##### `ResetPrefix` <a name="ResetPrefix" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchOutputReference.resetPrefix"></a>

```csharp
private void ResetPrefix()
```

##### `ResetRange` <a name="ResetRange" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchOutputReference.resetRange"></a>

```csharp
private void ResetRange()
```

##### `ResetRegex` <a name="ResetRegex" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchOutputReference.resetRegex"></a>

```csharp
private void ResetRegex()
```

##### `ResetSuffix` <a name="ResetSuffix" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchOutputReference.resetSuffix"></a>

```csharp
private void ResetSuffix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchOutputReference.property.range">Range</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference">AppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchOutputReference.property.exactInput">ExactInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchOutputReference.property.prefixInput">PrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchOutputReference.property.rangeInput">RangeInput</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchRange">AppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchOutputReference.property.regexInput">RegexInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchOutputReference.property.suffixInput">SuffixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchOutputReference.property.exact">Exact</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchOutputReference.property.prefix">Prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchOutputReference.property.regex">Regex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchOutputReference.property.suffix">Suffix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderMatch">AppmeshGatewayRouteSpecHttpRouteMatchHeaderMatch</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Range`<sup>Required</sup> <a name="Range" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchOutputReference.property.range"></a>

```csharp
public AppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference Range { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference">AppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference</a>

---

##### `ExactInput`<sup>Optional</sup> <a name="ExactInput" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchOutputReference.property.exactInput"></a>

```csharp
public string ExactInput { get; }
```

- *Type:* string

---

##### `PrefixInput`<sup>Optional</sup> <a name="PrefixInput" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchOutputReference.property.prefixInput"></a>

```csharp
public string PrefixInput { get; }
```

- *Type:* string

---

##### `RangeInput`<sup>Optional</sup> <a name="RangeInput" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchOutputReference.property.rangeInput"></a>

```csharp
public AppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchRange RangeInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchRange">AppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchRange</a>

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchOutputReference.property.regexInput"></a>

```csharp
public string RegexInput { get; }
```

- *Type:* string

---

##### `SuffixInput`<sup>Optional</sup> <a name="SuffixInput" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchOutputReference.property.suffixInput"></a>

```csharp
public string SuffixInput { get; }
```

- *Type:* string

---

##### `Exact`<sup>Required</sup> <a name="Exact" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchOutputReference.property.exact"></a>

```csharp
public string Exact { get; }
```

- *Type:* string

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchOutputReference.property.prefix"></a>

```csharp
public string Prefix { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchOutputReference.property.regex"></a>

```csharp
public string Regex { get; }
```

- *Type:* string

---

##### `Suffix`<sup>Required</sup> <a name="Suffix" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchOutputReference.property.suffix"></a>

```csharp
public string Suffix { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchOutputReference.property.internalValue"></a>

```csharp
public AppmeshGatewayRouteSpecHttpRouteMatchHeaderMatch InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderMatch">AppmeshGatewayRouteSpecHttpRouteMatchHeaderMatch</a>

---


### AppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference <a name="AppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.property.endInput">EndInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.property.startInput">StartInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.property.end">End</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.property.start">Start</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchRange">AppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchRange</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EndInput`<sup>Optional</sup> <a name="EndInput" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.property.endInput"></a>

```csharp
public double EndInput { get; }
```

- *Type:* double

---

##### `StartInput`<sup>Optional</sup> <a name="StartInput" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.property.startInput"></a>

```csharp
public double StartInput { get; }
```

- *Type:* double

---

##### `End`<sup>Required</sup> <a name="End" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.property.end"></a>

```csharp
public double End { get; }
```

- *Type:* double

---

##### `Start`<sup>Required</sup> <a name="Start" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.property.start"></a>

```csharp
public double Start { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.property.internalValue"></a>

```csharp
public AppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchRange InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchRange">AppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchRange</a>

---


### AppmeshGatewayRouteSpecHttpRouteMatchHeaderOutputReference <a name="AppmeshGatewayRouteSpecHttpRouteMatchHeaderOutputReference" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppmeshGatewayRouteSpecHttpRouteMatchHeaderOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderOutputReference.putMatch">PutMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderOutputReference.resetInvert">ResetInvert</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderOutputReference.resetMatch">ResetMatch</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMatch` <a name="PutMatch" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderOutputReference.putMatch"></a>

```csharp
private void PutMatch(AppmeshGatewayRouteSpecHttpRouteMatchHeaderMatch Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderOutputReference.putMatch.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderMatch">AppmeshGatewayRouteSpecHttpRouteMatchHeaderMatch</a>

---

##### `ResetInvert` <a name="ResetInvert" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderOutputReference.resetInvert"></a>

```csharp
private void ResetInvert()
```

##### `ResetMatch` <a name="ResetMatch" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderOutputReference.resetMatch"></a>

```csharp
private void ResetMatch()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderOutputReference.property.match">Match</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchOutputReference">AppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderOutputReference.property.invertInput">InvertInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderOutputReference.property.matchInput">MatchInput</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderMatch">AppmeshGatewayRouteSpecHttpRouteMatchHeaderMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderOutputReference.property.invert">Invert</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Match`<sup>Required</sup> <a name="Match" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderOutputReference.property.match"></a>

```csharp
public AppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchOutputReference Match { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchOutputReference">AppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchOutputReference</a>

---

##### `InvertInput`<sup>Optional</sup> <a name="InvertInput" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderOutputReference.property.invertInput"></a>

```csharp
public object InvertInput { get; }
```

- *Type:* object

---

##### `MatchInput`<sup>Optional</sup> <a name="MatchInput" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderOutputReference.property.matchInput"></a>

```csharp
public AppmeshGatewayRouteSpecHttpRouteMatchHeaderMatch MatchInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderMatch">AppmeshGatewayRouteSpecHttpRouteMatchHeaderMatch</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `Invert`<sup>Required</sup> <a name="Invert" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderOutputReference.property.invert"></a>

```csharp
public object Invert { get; }
```

- *Type:* object

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference <a name="AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.resetExact">ResetExact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.resetSuffix">ResetSuffix</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetExact` <a name="ResetExact" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.resetExact"></a>

```csharp
private void ResetExact()
```

##### `ResetSuffix` <a name="ResetSuffix" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.resetSuffix"></a>

```csharp
private void ResetSuffix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.property.exactInput">ExactInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.property.suffixInput">SuffixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.property.exact">Exact</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.property.suffix">Suffix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostname">AppmeshGatewayRouteSpecHttpRouteMatchHostname</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ExactInput`<sup>Optional</sup> <a name="ExactInput" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.property.exactInput"></a>

```csharp
public string ExactInput { get; }
```

- *Type:* string

---

##### `SuffixInput`<sup>Optional</sup> <a name="SuffixInput" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.property.suffixInput"></a>

```csharp
public string SuffixInput { get; }
```

- *Type:* string

---

##### `Exact`<sup>Required</sup> <a name="Exact" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.property.exact"></a>

```csharp
public string Exact { get; }
```

- *Type:* string

---

##### `Suffix`<sup>Required</sup> <a name="Suffix" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.property.suffix"></a>

```csharp
public string Suffix { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference.property.internalValue"></a>

```csharp
public AppmeshGatewayRouteSpecHttpRouteMatchHostname InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostname">AppmeshGatewayRouteSpecHttpRouteMatchHostname</a>

---


### AppmeshGatewayRouteSpecHttpRouteMatchOutputReference <a name="AppmeshGatewayRouteSpecHttpRouteMatchOutputReference" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppmeshGatewayRouteSpecHttpRouteMatchOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.putHeader">PutHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.putHostname">PutHostname</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.putPath">PutPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.putQueryParameter">PutQueryParameter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.resetHeader">ResetHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.resetHostname">ResetHostname</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.resetPath">ResetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.resetPrefix">ResetPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.resetQueryParameter">ResetQueryParameter</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutHeader` <a name="PutHeader" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.putHeader"></a>

```csharp
private void PutHeader(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.putHeader.parameter.value"></a>

- *Type:* object

---

##### `PutHostname` <a name="PutHostname" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.putHostname"></a>

```csharp
private void PutHostname(AppmeshGatewayRouteSpecHttpRouteMatchHostname Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.putHostname.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostname">AppmeshGatewayRouteSpecHttpRouteMatchHostname</a>

---

##### `PutPath` <a name="PutPath" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.putPath"></a>

```csharp
private void PutPath(AppmeshGatewayRouteSpecHttpRouteMatchPath Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.putPath.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchPath">AppmeshGatewayRouteSpecHttpRouteMatchPath</a>

---

##### `PutQueryParameter` <a name="PutQueryParameter" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.putQueryParameter"></a>

```csharp
private void PutQueryParameter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.putQueryParameter.parameter.value"></a>

- *Type:* object

---

##### `ResetHeader` <a name="ResetHeader" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.resetHeader"></a>

```csharp
private void ResetHeader()
```

##### `ResetHostname` <a name="ResetHostname" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.resetHostname"></a>

```csharp
private void ResetHostname()
```

##### `ResetPath` <a name="ResetPath" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.resetPath"></a>

```csharp
private void ResetPath()
```

##### `ResetPort` <a name="ResetPort" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.resetPort"></a>

```csharp
private void ResetPort()
```

##### `ResetPrefix` <a name="ResetPrefix" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.resetPrefix"></a>

```csharp
private void ResetPrefix()
```

##### `ResetQueryParameter` <a name="ResetQueryParameter" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.resetQueryParameter"></a>

```csharp
private void ResetQueryParameter()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.property.header">Header</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderList">AppmeshGatewayRouteSpecHttpRouteMatchHeaderList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.property.hostname">Hostname</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference">AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.property.path">Path</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchPathOutputReference">AppmeshGatewayRouteSpecHttpRouteMatchPathOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.property.queryParameter">QueryParameter</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchQueryParameterList">AppmeshGatewayRouteSpecHttpRouteMatchQueryParameterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.property.headerInput">HeaderInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.property.hostnameInput">HostnameInput</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostname">AppmeshGatewayRouteSpecHttpRouteMatchHostname</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.property.pathInput">PathInput</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchPath">AppmeshGatewayRouteSpecHttpRouteMatchPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.property.portInput">PortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.property.prefixInput">PrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.property.queryParameterInput">QueryParameterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.property.prefix">Prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatch">AppmeshGatewayRouteSpecHttpRouteMatch</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Header`<sup>Required</sup> <a name="Header" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.property.header"></a>

```csharp
public AppmeshGatewayRouteSpecHttpRouteMatchHeaderList Header { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHeaderList">AppmeshGatewayRouteSpecHttpRouteMatchHeaderList</a>

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.property.hostname"></a>

```csharp
public AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference Hostname { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference">AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference</a>

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.property.path"></a>

```csharp
public AppmeshGatewayRouteSpecHttpRouteMatchPathOutputReference Path { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchPathOutputReference">AppmeshGatewayRouteSpecHttpRouteMatchPathOutputReference</a>

---

##### `QueryParameter`<sup>Required</sup> <a name="QueryParameter" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.property.queryParameter"></a>

```csharp
public AppmeshGatewayRouteSpecHttpRouteMatchQueryParameterList QueryParameter { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchQueryParameterList">AppmeshGatewayRouteSpecHttpRouteMatchQueryParameterList</a>

---

##### `HeaderInput`<sup>Optional</sup> <a name="HeaderInput" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.property.headerInput"></a>

```csharp
public object HeaderInput { get; }
```

- *Type:* object

---

##### `HostnameInput`<sup>Optional</sup> <a name="HostnameInput" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.property.hostnameInput"></a>

```csharp
public AppmeshGatewayRouteSpecHttpRouteMatchHostname HostnameInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchHostname">AppmeshGatewayRouteSpecHttpRouteMatchHostname</a>

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.property.pathInput"></a>

```csharp
public AppmeshGatewayRouteSpecHttpRouteMatchPath PathInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchPath">AppmeshGatewayRouteSpecHttpRouteMatchPath</a>

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.property.portInput"></a>

```csharp
public double PortInput { get; }
```

- *Type:* double

---

##### `PrefixInput`<sup>Optional</sup> <a name="PrefixInput" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.property.prefixInput"></a>

```csharp
public string PrefixInput { get; }
```

- *Type:* string

---

##### `QueryParameterInput`<sup>Optional</sup> <a name="QueryParameterInput" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.property.queryParameterInput"></a>

```csharp
public object QueryParameterInput { get; }
```

- *Type:* object

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.property.prefix"></a>

```csharp
public string Prefix { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference.property.internalValue"></a>

```csharp
public AppmeshGatewayRouteSpecHttpRouteMatch InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatch">AppmeshGatewayRouteSpecHttpRouteMatch</a>

---


### AppmeshGatewayRouteSpecHttpRouteMatchPathOutputReference <a name="AppmeshGatewayRouteSpecHttpRouteMatchPathOutputReference" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchPathOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchPathOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppmeshGatewayRouteSpecHttpRouteMatchPathOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchPathOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchPathOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchPathOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchPathOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchPathOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchPathOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchPathOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchPathOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchPathOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchPathOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchPathOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchPathOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchPathOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchPathOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchPathOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchPathOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchPathOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchPathOutputReference.resetExact">ResetExact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchPathOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchPathOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchPathOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchPathOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchPathOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchPathOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchPathOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchPathOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchPathOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchPathOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchPathOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchPathOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchPathOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchPathOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchPathOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchPathOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchPathOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchPathOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchPathOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchPathOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchPathOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchPathOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchPathOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchPathOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchPathOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetExact` <a name="ResetExact" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchPathOutputReference.resetExact"></a>

```csharp
private void ResetExact()
```

##### `ResetRegex` <a name="ResetRegex" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchPathOutputReference.resetRegex"></a>

```csharp
private void ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchPathOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchPathOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchPathOutputReference.property.exactInput">ExactInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchPathOutputReference.property.regexInput">RegexInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchPathOutputReference.property.exact">Exact</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchPathOutputReference.property.regex">Regex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchPathOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchPath">AppmeshGatewayRouteSpecHttpRouteMatchPath</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchPathOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchPathOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ExactInput`<sup>Optional</sup> <a name="ExactInput" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchPathOutputReference.property.exactInput"></a>

```csharp
public string ExactInput { get; }
```

- *Type:* string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchPathOutputReference.property.regexInput"></a>

```csharp
public string RegexInput { get; }
```

- *Type:* string

---

##### `Exact`<sup>Required</sup> <a name="Exact" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchPathOutputReference.property.exact"></a>

```csharp
public string Exact { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchPathOutputReference.property.regex"></a>

```csharp
public string Regex { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchPathOutputReference.property.internalValue"></a>

```csharp
public AppmeshGatewayRouteSpecHttpRouteMatchPath InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchPath">AppmeshGatewayRouteSpecHttpRouteMatchPath</a>

---


### AppmeshGatewayRouteSpecHttpRouteMatchQueryParameterList <a name="AppmeshGatewayRouteSpecHttpRouteMatchQueryParameterList" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchQueryParameterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchQueryParameterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppmeshGatewayRouteSpecHttpRouteMatchQueryParameterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchQueryParameterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchQueryParameterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchQueryParameterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchQueryParameterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchQueryParameterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchQueryParameterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchQueryParameterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchQueryParameterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchQueryParameterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchQueryParameterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchQueryParameterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchQueryParameterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchQueryParameterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchQueryParameterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchQueryParameterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchQueryParameterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchQueryParameterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchQueryParameterList.get"></a>

```csharp
private AppmeshGatewayRouteSpecHttpRouteMatchQueryParameterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchQueryParameterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchQueryParameterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchQueryParameterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchQueryParameterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchQueryParameterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchQueryParameterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchQueryParameterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### AppmeshGatewayRouteSpecHttpRouteMatchQueryParameterMatchOutputReference <a name="AppmeshGatewayRouteSpecHttpRouteMatchQueryParameterMatchOutputReference" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchQueryParameterMatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchQueryParameterMatchOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppmeshGatewayRouteSpecHttpRouteMatchQueryParameterMatchOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchQueryParameterMatchOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchQueryParameterMatchOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchQueryParameterMatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchQueryParameterMatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchQueryParameterMatchOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchQueryParameterMatchOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchQueryParameterMatchOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchQueryParameterMatchOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchQueryParameterMatchOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchQueryParameterMatchOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchQueryParameterMatchOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchQueryParameterMatchOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchQueryParameterMatchOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchQueryParameterMatchOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchQueryParameterMatchOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchQueryParameterMatchOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchQueryParameterMatchOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchQueryParameterMatchOutputReference.resetExact">ResetExact</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchQueryParameterMatchOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchQueryParameterMatchOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchQueryParameterMatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchQueryParameterMatchOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchQueryParameterMatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchQueryParameterMatchOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchQueryParameterMatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchQueryParameterMatchOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchQueryParameterMatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchQueryParameterMatchOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchQueryParameterMatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchQueryParameterMatchOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchQueryParameterMatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchQueryParameterMatchOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchQueryParameterMatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchQueryParameterMatchOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchQueryParameterMatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchQueryParameterMatchOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchQueryParameterMatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchQueryParameterMatchOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchQueryParameterMatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchQueryParameterMatchOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchQueryParameterMatchOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchQueryParameterMatchOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetExact` <a name="ResetExact" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchQueryParameterMatchOutputReference.resetExact"></a>

```csharp
private void ResetExact()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchQueryParameterMatchOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchQueryParameterMatchOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchQueryParameterMatchOutputReference.property.exactInput">ExactInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchQueryParameterMatchOutputReference.property.exact">Exact</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchQueryParameterMatchOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchQueryParameterMatch">AppmeshGatewayRouteSpecHttpRouteMatchQueryParameterMatch</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchQueryParameterMatchOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchQueryParameterMatchOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ExactInput`<sup>Optional</sup> <a name="ExactInput" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchQueryParameterMatchOutputReference.property.exactInput"></a>

```csharp
public string ExactInput { get; }
```

- *Type:* string

---

##### `Exact`<sup>Required</sup> <a name="Exact" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchQueryParameterMatchOutputReference.property.exact"></a>

```csharp
public string Exact { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchQueryParameterMatchOutputReference.property.internalValue"></a>

```csharp
public AppmeshGatewayRouteSpecHttpRouteMatchQueryParameterMatch InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchQueryParameterMatch">AppmeshGatewayRouteSpecHttpRouteMatchQueryParameterMatch</a>

---


### AppmeshGatewayRouteSpecHttpRouteMatchQueryParameterOutputReference <a name="AppmeshGatewayRouteSpecHttpRouteMatchQueryParameterOutputReference" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchQueryParameterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchQueryParameterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppmeshGatewayRouteSpecHttpRouteMatchQueryParameterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchQueryParameterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchQueryParameterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchQueryParameterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchQueryParameterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchQueryParameterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchQueryParameterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchQueryParameterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchQueryParameterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchQueryParameterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchQueryParameterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchQueryParameterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchQueryParameterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchQueryParameterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchQueryParameterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchQueryParameterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchQueryParameterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchQueryParameterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchQueryParameterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchQueryParameterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchQueryParameterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchQueryParameterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchQueryParameterOutputReference.putMatch">PutMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchQueryParameterOutputReference.resetMatch">ResetMatch</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchQueryParameterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchQueryParameterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchQueryParameterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchQueryParameterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchQueryParameterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchQueryParameterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchQueryParameterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchQueryParameterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchQueryParameterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchQueryParameterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchQueryParameterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchQueryParameterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchQueryParameterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchQueryParameterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchQueryParameterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchQueryParameterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchQueryParameterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchQueryParameterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchQueryParameterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchQueryParameterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchQueryParameterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchQueryParameterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchQueryParameterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchQueryParameterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMatch` <a name="PutMatch" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchQueryParameterOutputReference.putMatch"></a>

```csharp
private void PutMatch(AppmeshGatewayRouteSpecHttpRouteMatchQueryParameterMatch Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchQueryParameterOutputReference.putMatch.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchQueryParameterMatch">AppmeshGatewayRouteSpecHttpRouteMatchQueryParameterMatch</a>

---

##### `ResetMatch` <a name="ResetMatch" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchQueryParameterOutputReference.resetMatch"></a>

```csharp
private void ResetMatch()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchQueryParameterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchQueryParameterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchQueryParameterOutputReference.property.match">Match</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchQueryParameterMatchOutputReference">AppmeshGatewayRouteSpecHttpRouteMatchQueryParameterMatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchQueryParameterOutputReference.property.matchInput">MatchInput</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchQueryParameterMatch">AppmeshGatewayRouteSpecHttpRouteMatchQueryParameterMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchQueryParameterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchQueryParameterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchQueryParameterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchQueryParameterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchQueryParameterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Match`<sup>Required</sup> <a name="Match" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchQueryParameterOutputReference.property.match"></a>

```csharp
public AppmeshGatewayRouteSpecHttpRouteMatchQueryParameterMatchOutputReference Match { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchQueryParameterMatchOutputReference">AppmeshGatewayRouteSpecHttpRouteMatchQueryParameterMatchOutputReference</a>

---

##### `MatchInput`<sup>Optional</sup> <a name="MatchInput" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchQueryParameterOutputReference.property.matchInput"></a>

```csharp
public AppmeshGatewayRouteSpecHttpRouteMatchQueryParameterMatch MatchInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchQueryParameterMatch">AppmeshGatewayRouteSpecHttpRouteMatchQueryParameterMatch</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchQueryParameterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchQueryParameterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchQueryParameterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### AppmeshGatewayRouteSpecHttpRouteOutputReference <a name="AppmeshGatewayRouteSpecHttpRouteOutputReference" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppmeshGatewayRouteSpecHttpRouteOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.putAction">PutAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.putMatch">PutMatch</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAction` <a name="PutAction" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.putAction"></a>

```csharp
private void PutAction(AppmeshGatewayRouteSpecHttpRouteAction Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.putAction.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteAction">AppmeshGatewayRouteSpecHttpRouteAction</a>

---

##### `PutMatch` <a name="PutMatch" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.putMatch"></a>

```csharp
private void PutMatch(AppmeshGatewayRouteSpecHttpRouteMatch Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.putMatch.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatch">AppmeshGatewayRouteSpecHttpRouteMatch</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.property.action">Action</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference">AppmeshGatewayRouteSpecHttpRouteActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.property.match">Match</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference">AppmeshGatewayRouteSpecHttpRouteMatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.property.actionInput">ActionInput</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteAction">AppmeshGatewayRouteSpecHttpRouteAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.property.matchInput">MatchInput</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatch">AppmeshGatewayRouteSpecHttpRouteMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRoute">AppmeshGatewayRouteSpecHttpRoute</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.property.action"></a>

```csharp
public AppmeshGatewayRouteSpecHttpRouteActionOutputReference Action { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteActionOutputReference">AppmeshGatewayRouteSpecHttpRouteActionOutputReference</a>

---

##### `Match`<sup>Required</sup> <a name="Match" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.property.match"></a>

```csharp
public AppmeshGatewayRouteSpecHttpRouteMatchOutputReference Match { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatchOutputReference">AppmeshGatewayRouteSpecHttpRouteMatchOutputReference</a>

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.property.actionInput"></a>

```csharp
public AppmeshGatewayRouteSpecHttpRouteAction ActionInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteAction">AppmeshGatewayRouteSpecHttpRouteAction</a>

---

##### `MatchInput`<sup>Optional</sup> <a name="MatchInput" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.property.matchInput"></a>

```csharp
public AppmeshGatewayRouteSpecHttpRouteMatch MatchInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteMatch">AppmeshGatewayRouteSpecHttpRouteMatch</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference.property.internalValue"></a>

```csharp
public AppmeshGatewayRouteSpecHttpRoute InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRoute">AppmeshGatewayRouteSpecHttpRoute</a>

---


### AppmeshGatewayRouteSpecOutputReference <a name="AppmeshGatewayRouteSpecOutputReference" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AppmeshGatewayRouteSpecOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.putGrpcRoute">PutGrpcRoute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.putHttp2Route">PutHttp2Route</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.putHttpRoute">PutHttpRoute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.resetGrpcRoute">ResetGrpcRoute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.resetHttp2Route">ResetHttp2Route</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.resetHttpRoute">ResetHttpRoute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.resetPriority">ResetPriority</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutGrpcRoute` <a name="PutGrpcRoute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.putGrpcRoute"></a>

```csharp
private void PutGrpcRoute(AppmeshGatewayRouteSpecGrpcRoute Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.putGrpcRoute.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRoute">AppmeshGatewayRouteSpecGrpcRoute</a>

---

##### `PutHttp2Route` <a name="PutHttp2Route" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.putHttp2Route"></a>

```csharp
private void PutHttp2Route(AppmeshGatewayRouteSpecHttp2Route Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.putHttp2Route.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2Route">AppmeshGatewayRouteSpecHttp2Route</a>

---

##### `PutHttpRoute` <a name="PutHttpRoute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.putHttpRoute"></a>

```csharp
private void PutHttpRoute(AppmeshGatewayRouteSpecHttpRoute Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.putHttpRoute.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRoute">AppmeshGatewayRouteSpecHttpRoute</a>

---

##### `ResetGrpcRoute` <a name="ResetGrpcRoute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.resetGrpcRoute"></a>

```csharp
private void ResetGrpcRoute()
```

##### `ResetHttp2Route` <a name="ResetHttp2Route" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.resetHttp2Route"></a>

```csharp
private void ResetHttp2Route()
```

##### `ResetHttpRoute` <a name="ResetHttpRoute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.resetHttpRoute"></a>

```csharp
private void ResetHttpRoute()
```

##### `ResetPriority` <a name="ResetPriority" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.resetPriority"></a>

```csharp
private void ResetPriority()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.property.grpcRoute">GrpcRoute</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference">AppmeshGatewayRouteSpecGrpcRouteOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.property.http2Route">Http2Route</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference">AppmeshGatewayRouteSpecHttp2RouteOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.property.httpRoute">HttpRoute</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference">AppmeshGatewayRouteSpecHttpRouteOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.property.grpcRouteInput">GrpcRouteInput</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRoute">AppmeshGatewayRouteSpecGrpcRoute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.property.http2RouteInput">Http2RouteInput</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2Route">AppmeshGatewayRouteSpecHttp2Route</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.property.httpRouteInput">HttpRouteInput</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRoute">AppmeshGatewayRouteSpecHttpRoute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.property.priorityInput">PriorityInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.property.priority">Priority</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpec">AppmeshGatewayRouteSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `GrpcRoute`<sup>Required</sup> <a name="GrpcRoute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.property.grpcRoute"></a>

```csharp
public AppmeshGatewayRouteSpecGrpcRouteOutputReference GrpcRoute { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRouteOutputReference">AppmeshGatewayRouteSpecGrpcRouteOutputReference</a>

---

##### `Http2Route`<sup>Required</sup> <a name="Http2Route" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.property.http2Route"></a>

```csharp
public AppmeshGatewayRouteSpecHttp2RouteOutputReference Http2Route { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2RouteOutputReference">AppmeshGatewayRouteSpecHttp2RouteOutputReference</a>

---

##### `HttpRoute`<sup>Required</sup> <a name="HttpRoute" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.property.httpRoute"></a>

```csharp
public AppmeshGatewayRouteSpecHttpRouteOutputReference HttpRoute { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRouteOutputReference">AppmeshGatewayRouteSpecHttpRouteOutputReference</a>

---

##### `GrpcRouteInput`<sup>Optional</sup> <a name="GrpcRouteInput" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.property.grpcRouteInput"></a>

```csharp
public AppmeshGatewayRouteSpecGrpcRoute GrpcRouteInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecGrpcRoute">AppmeshGatewayRouteSpecGrpcRoute</a>

---

##### `Http2RouteInput`<sup>Optional</sup> <a name="Http2RouteInput" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.property.http2RouteInput"></a>

```csharp
public AppmeshGatewayRouteSpecHttp2Route Http2RouteInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttp2Route">AppmeshGatewayRouteSpecHttp2Route</a>

---

##### `HttpRouteInput`<sup>Optional</sup> <a name="HttpRouteInput" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.property.httpRouteInput"></a>

```csharp
public AppmeshGatewayRouteSpecHttpRoute HttpRouteInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecHttpRoute">AppmeshGatewayRouteSpecHttpRoute</a>

---

##### `PriorityInput`<sup>Optional</sup> <a name="PriorityInput" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.property.priorityInput"></a>

```csharp
public double PriorityInput { get; }
```

- *Type:* double

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.property.priority"></a>

```csharp
public double Priority { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpecOutputReference.property.internalValue"></a>

```csharp
public AppmeshGatewayRouteSpec InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.appmeshGatewayRoute.AppmeshGatewayRouteSpec">AppmeshGatewayRouteSpec</a>

---



