# `finspaceKxEnvironment` Submodule <a name="`finspaceKxEnvironment` Submodule" id="@cdktf/provider-aws.finspaceKxEnvironment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FinspaceKxEnvironment <a name="FinspaceKxEnvironment" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.38.0/docs/resources/finspace_kx_environment aws_finspace_kx_environment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new FinspaceKxEnvironment(Construct Scope, string Id, FinspaceKxEnvironmentConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentConfig">FinspaceKxEnvironmentConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentConfig">FinspaceKxEnvironmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.putCustomDnsConfiguration">PutCustomDnsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.putTransitGatewayConfiguration">PutTransitGatewayConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.resetCustomDnsConfiguration">ResetCustomDnsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.resetTransitGatewayConfiguration">ResetTransitGatewayConfiguration</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCustomDnsConfiguration` <a name="PutCustomDnsConfiguration" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.putCustomDnsConfiguration"></a>

```csharp
private void PutCustomDnsConfiguration(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.putCustomDnsConfiguration.parameter.value"></a>

- *Type:* object

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.putTimeouts"></a>

```csharp
private void PutTimeouts(FinspaceKxEnvironmentTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTimeouts">FinspaceKxEnvironmentTimeouts</a>

---

##### `PutTransitGatewayConfiguration` <a name="PutTransitGatewayConfiguration" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.putTransitGatewayConfiguration"></a>

```csharp
private void PutTransitGatewayConfiguration(FinspaceKxEnvironmentTransitGatewayConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.putTransitGatewayConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfiguration">FinspaceKxEnvironmentTransitGatewayConfiguration</a>

---

##### `ResetCustomDnsConfiguration` <a name="ResetCustomDnsConfiguration" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.resetCustomDnsConfiguration"></a>

```csharp
private void ResetCustomDnsConfiguration()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetTransitGatewayConfiguration` <a name="ResetTransitGatewayConfiguration" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.resetTransitGatewayConfiguration"></a>

```csharp
private void ResetTransitGatewayConfiguration()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a FinspaceKxEnvironment resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

FinspaceKxEnvironment.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

FinspaceKxEnvironment.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

FinspaceKxEnvironment.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

FinspaceKxEnvironment.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a FinspaceKxEnvironment resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the FinspaceKxEnvironment to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing FinspaceKxEnvironment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.38.0/docs/resources/finspace_kx_environment#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the FinspaceKxEnvironment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.property.availabilityZones">AvailabilityZones</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.property.createdTimestamp">CreatedTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.property.customDnsConfiguration">CustomDnsConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationList">FinspaceKxEnvironmentCustomDnsConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.property.infrastructureAccountId">InfrastructureAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.property.lastModifiedTimestamp">LastModifiedTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTimeoutsOutputReference">FinspaceKxEnvironmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.property.transitGatewayConfiguration">TransitGatewayConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationOutputReference">FinspaceKxEnvironmentTransitGatewayConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.property.customDnsConfigurationInput">CustomDnsConfigurationInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.property.kmsKeyIdInput">KmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.property.transitGatewayConfigurationInput">TransitGatewayConfigurationInput</a></code> | <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfiguration">FinspaceKxEnvironmentTransitGatewayConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `AvailabilityZones`<sup>Required</sup> <a name="AvailabilityZones" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.property.availabilityZones"></a>

```csharp
public string[] AvailabilityZones { get; }
```

- *Type:* string[]

---

##### `CreatedTimestamp`<sup>Required</sup> <a name="CreatedTimestamp" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.property.createdTimestamp"></a>

```csharp
public string CreatedTimestamp { get; }
```

- *Type:* string

---

##### `CustomDnsConfiguration`<sup>Required</sup> <a name="CustomDnsConfiguration" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.property.customDnsConfiguration"></a>

```csharp
public FinspaceKxEnvironmentCustomDnsConfigurationList CustomDnsConfiguration { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationList">FinspaceKxEnvironmentCustomDnsConfigurationList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InfrastructureAccountId`<sup>Required</sup> <a name="InfrastructureAccountId" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.property.infrastructureAccountId"></a>

```csharp
public string InfrastructureAccountId { get; }
```

- *Type:* string

---

##### `LastModifiedTimestamp`<sup>Required</sup> <a name="LastModifiedTimestamp" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.property.lastModifiedTimestamp"></a>

```csharp
public string LastModifiedTimestamp { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.property.timeouts"></a>

```csharp
public FinspaceKxEnvironmentTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTimeoutsOutputReference">FinspaceKxEnvironmentTimeoutsOutputReference</a>

---

##### `TransitGatewayConfiguration`<sup>Required</sup> <a name="TransitGatewayConfiguration" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.property.transitGatewayConfiguration"></a>

```csharp
public FinspaceKxEnvironmentTransitGatewayConfigurationOutputReference TransitGatewayConfiguration { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationOutputReference">FinspaceKxEnvironmentTransitGatewayConfigurationOutputReference</a>

---

##### `CustomDnsConfigurationInput`<sup>Optional</sup> <a name="CustomDnsConfigurationInput" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.property.customDnsConfigurationInput"></a>

```csharp
public object CustomDnsConfigurationInput { get; }
```

- *Type:* object

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `KmsKeyIdInput`<sup>Optional</sup> <a name="KmsKeyIdInput" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.property.kmsKeyIdInput"></a>

```csharp
public string KmsKeyIdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `TransitGatewayConfigurationInput`<sup>Optional</sup> <a name="TransitGatewayConfigurationInput" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.property.transitGatewayConfigurationInput"></a>

```csharp
public FinspaceKxEnvironmentTransitGatewayConfiguration TransitGatewayConfigurationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfiguration">FinspaceKxEnvironmentTransitGatewayConfiguration</a>

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironment.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### FinspaceKxEnvironmentConfig <a name="FinspaceKxEnvironmentConfig" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new FinspaceKxEnvironmentConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string KmsKeyId,
    string Name,
    object CustomDnsConfiguration = null,
    string Description = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null,
    FinspaceKxEnvironmentTimeouts Timeouts = null,
    FinspaceKxEnvironmentTransitGatewayConfiguration TransitGatewayConfiguration = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentConfig.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.38.0/docs/resources/finspace_kx_environment#kms_key_id FinspaceKxEnvironment#kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.38.0/docs/resources/finspace_kx_environment#name FinspaceKxEnvironment#name}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentConfig.property.customDnsConfiguration">CustomDnsConfiguration</a></code> | <code>object</code> | custom_dns_configuration block. |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.38.0/docs/resources/finspace_kx_environment#description FinspaceKxEnvironment#description}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.38.0/docs/resources/finspace_kx_environment#tags FinspaceKxEnvironment#tags}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.38.0/docs/resources/finspace_kx_environment#tags_all FinspaceKxEnvironment#tags_all}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTimeouts">FinspaceKxEnvironmentTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentConfig.property.transitGatewayConfiguration">TransitGatewayConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfiguration">FinspaceKxEnvironmentTransitGatewayConfiguration</a></code> | transit_gateway_configuration block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentConfig.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.38.0/docs/resources/finspace_kx_environment#kms_key_id FinspaceKxEnvironment#kms_key_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.38.0/docs/resources/finspace_kx_environment#name FinspaceKxEnvironment#name}.

---

##### `CustomDnsConfiguration`<sup>Optional</sup> <a name="CustomDnsConfiguration" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentConfig.property.customDnsConfiguration"></a>

```csharp
public object CustomDnsConfiguration { get; set; }
```

- *Type:* object

custom_dns_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.38.0/docs/resources/finspace_kx_environment#custom_dns_configuration FinspaceKxEnvironment#custom_dns_configuration}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.38.0/docs/resources/finspace_kx_environment#description FinspaceKxEnvironment#description}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.38.0/docs/resources/finspace_kx_environment#tags FinspaceKxEnvironment#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.38.0/docs/resources/finspace_kx_environment#tags_all FinspaceKxEnvironment#tags_all}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentConfig.property.timeouts"></a>

```csharp
public FinspaceKxEnvironmentTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTimeouts">FinspaceKxEnvironmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.38.0/docs/resources/finspace_kx_environment#timeouts FinspaceKxEnvironment#timeouts}

---

##### `TransitGatewayConfiguration`<sup>Optional</sup> <a name="TransitGatewayConfiguration" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentConfig.property.transitGatewayConfiguration"></a>

```csharp
public FinspaceKxEnvironmentTransitGatewayConfiguration TransitGatewayConfiguration { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfiguration">FinspaceKxEnvironmentTransitGatewayConfiguration</a>

transit_gateway_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.38.0/docs/resources/finspace_kx_environment#transit_gateway_configuration FinspaceKxEnvironment#transit_gateway_configuration}

---

### FinspaceKxEnvironmentCustomDnsConfiguration <a name="FinspaceKxEnvironmentCustomDnsConfiguration" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new FinspaceKxEnvironmentCustomDnsConfiguration {
    string CustomDnsServerIp,
    string CustomDnsServerName
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfiguration.property.customDnsServerIp">CustomDnsServerIp</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.38.0/docs/resources/finspace_kx_environment#custom_dns_server_ip FinspaceKxEnvironment#custom_dns_server_ip}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfiguration.property.customDnsServerName">CustomDnsServerName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.38.0/docs/resources/finspace_kx_environment#custom_dns_server_name FinspaceKxEnvironment#custom_dns_server_name}. |

---

##### `CustomDnsServerIp`<sup>Required</sup> <a name="CustomDnsServerIp" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfiguration.property.customDnsServerIp"></a>

```csharp
public string CustomDnsServerIp { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.38.0/docs/resources/finspace_kx_environment#custom_dns_server_ip FinspaceKxEnvironment#custom_dns_server_ip}.

---

##### `CustomDnsServerName`<sup>Required</sup> <a name="CustomDnsServerName" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfiguration.property.customDnsServerName"></a>

```csharp
public string CustomDnsServerName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.38.0/docs/resources/finspace_kx_environment#custom_dns_server_name FinspaceKxEnvironment#custom_dns_server_name}.

---

### FinspaceKxEnvironmentTimeouts <a name="FinspaceKxEnvironmentTimeouts" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new FinspaceKxEnvironmentTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.38.0/docs/resources/finspace_kx_environment#create FinspaceKxEnvironment#create}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.38.0/docs/resources/finspace_kx_environment#delete FinspaceKxEnvironment#delete}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.38.0/docs/resources/finspace_kx_environment#update FinspaceKxEnvironment#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.38.0/docs/resources/finspace_kx_environment#create FinspaceKxEnvironment#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.38.0/docs/resources/finspace_kx_environment#delete FinspaceKxEnvironment#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.38.0/docs/resources/finspace_kx_environment#update FinspaceKxEnvironment#update}.

---

### FinspaceKxEnvironmentTransitGatewayConfiguration <a name="FinspaceKxEnvironmentTransitGatewayConfiguration" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new FinspaceKxEnvironmentTransitGatewayConfiguration {
    string RoutableCidrSpace,
    string TransitGatewayId,
    object AttachmentNetworkAclConfiguration = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfiguration.property.routableCidrSpace">RoutableCidrSpace</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.38.0/docs/resources/finspace_kx_environment#routable_cidr_space FinspaceKxEnvironment#routable_cidr_space}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfiguration.property.transitGatewayId">TransitGatewayId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.38.0/docs/resources/finspace_kx_environment#transit_gateway_id FinspaceKxEnvironment#transit_gateway_id}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfiguration.property.attachmentNetworkAclConfiguration">AttachmentNetworkAclConfiguration</a></code> | <code>object</code> | attachment_network_acl_configuration block. |

---

##### `RoutableCidrSpace`<sup>Required</sup> <a name="RoutableCidrSpace" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfiguration.property.routableCidrSpace"></a>

```csharp
public string RoutableCidrSpace { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.38.0/docs/resources/finspace_kx_environment#routable_cidr_space FinspaceKxEnvironment#routable_cidr_space}.

---

##### `TransitGatewayId`<sup>Required</sup> <a name="TransitGatewayId" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfiguration.property.transitGatewayId"></a>

```csharp
public string TransitGatewayId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.38.0/docs/resources/finspace_kx_environment#transit_gateway_id FinspaceKxEnvironment#transit_gateway_id}.

---

##### `AttachmentNetworkAclConfiguration`<sup>Optional</sup> <a name="AttachmentNetworkAclConfiguration" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfiguration.property.attachmentNetworkAclConfiguration"></a>

```csharp
public object AttachmentNetworkAclConfiguration { get; set; }
```

- *Type:* object

attachment_network_acl_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.38.0/docs/resources/finspace_kx_environment#attachment_network_acl_configuration FinspaceKxEnvironment#attachment_network_acl_configuration}

---

### FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfiguration <a name="FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfiguration" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfiguration {
    string CidrBlock,
    string Protocol,
    string RuleAction,
    double RuleNumber,
    FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCode IcmpTypeCode = null,
    FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRange PortRange = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfiguration.property.cidrBlock">CidrBlock</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.38.0/docs/resources/finspace_kx_environment#cidr_block FinspaceKxEnvironment#cidr_block}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfiguration.property.protocol">Protocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.38.0/docs/resources/finspace_kx_environment#protocol FinspaceKxEnvironment#protocol}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfiguration.property.ruleAction">RuleAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.38.0/docs/resources/finspace_kx_environment#rule_action FinspaceKxEnvironment#rule_action}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfiguration.property.ruleNumber">RuleNumber</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.38.0/docs/resources/finspace_kx_environment#rule_number FinspaceKxEnvironment#rule_number}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfiguration.property.icmpTypeCode">IcmpTypeCode</a></code> | <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCode">FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCode</a></code> | icmp_type_code block. |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfiguration.property.portRange">PortRange</a></code> | <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRange">FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRange</a></code> | port_range block. |

---

##### `CidrBlock`<sup>Required</sup> <a name="CidrBlock" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfiguration.property.cidrBlock"></a>

```csharp
public string CidrBlock { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.38.0/docs/resources/finspace_kx_environment#cidr_block FinspaceKxEnvironment#cidr_block}.

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfiguration.property.protocol"></a>

```csharp
public string Protocol { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.38.0/docs/resources/finspace_kx_environment#protocol FinspaceKxEnvironment#protocol}.

---

##### `RuleAction`<sup>Required</sup> <a name="RuleAction" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfiguration.property.ruleAction"></a>

```csharp
public string RuleAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.38.0/docs/resources/finspace_kx_environment#rule_action FinspaceKxEnvironment#rule_action}.

---

##### `RuleNumber`<sup>Required</sup> <a name="RuleNumber" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfiguration.property.ruleNumber"></a>

```csharp
public double RuleNumber { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.38.0/docs/resources/finspace_kx_environment#rule_number FinspaceKxEnvironment#rule_number}.

---

##### `IcmpTypeCode`<sup>Optional</sup> <a name="IcmpTypeCode" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfiguration.property.icmpTypeCode"></a>

```csharp
public FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCode IcmpTypeCode { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCode">FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCode</a>

icmp_type_code block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.38.0/docs/resources/finspace_kx_environment#icmp_type_code FinspaceKxEnvironment#icmp_type_code}

---

##### `PortRange`<sup>Optional</sup> <a name="PortRange" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfiguration.property.portRange"></a>

```csharp
public FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRange PortRange { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRange">FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRange</a>

port_range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.38.0/docs/resources/finspace_kx_environment#port_range FinspaceKxEnvironment#port_range}

---

### FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCode <a name="FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCode" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCode"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCode.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCode {
    double Code,
    double Type
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCode.property.code">Code</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.38.0/docs/resources/finspace_kx_environment#code FinspaceKxEnvironment#code}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCode.property.type">Type</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.38.0/docs/resources/finspace_kx_environment#type FinspaceKxEnvironment#type}. |

---

##### `Code`<sup>Required</sup> <a name="Code" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCode.property.code"></a>

```csharp
public double Code { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.38.0/docs/resources/finspace_kx_environment#code FinspaceKxEnvironment#code}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCode.property.type"></a>

```csharp
public double Type { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.38.0/docs/resources/finspace_kx_environment#type FinspaceKxEnvironment#type}.

---

### FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRange <a name="FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRange" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRange"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRange.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRange {
    double From,
    double To
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRange.property.from">From</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.38.0/docs/resources/finspace_kx_environment#from FinspaceKxEnvironment#from}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRange.property.to">To</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.38.0/docs/resources/finspace_kx_environment#to FinspaceKxEnvironment#to}. |

---

##### `From`<sup>Required</sup> <a name="From" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRange.property.from"></a>

```csharp
public double From { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.38.0/docs/resources/finspace_kx_environment#from FinspaceKxEnvironment#from}.

---

##### `To`<sup>Required</sup> <a name="To" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRange.property.to"></a>

```csharp
public double To { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.38.0/docs/resources/finspace_kx_environment#to FinspaceKxEnvironment#to}.

---

## Classes <a name="Classes" id="Classes"></a>

### FinspaceKxEnvironmentCustomDnsConfigurationList <a name="FinspaceKxEnvironmentCustomDnsConfigurationList" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new FinspaceKxEnvironmentCustomDnsConfigurationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationList.get"></a>

```csharp
private FinspaceKxEnvironmentCustomDnsConfigurationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### FinspaceKxEnvironmentCustomDnsConfigurationOutputReference <a name="FinspaceKxEnvironmentCustomDnsConfigurationOutputReference" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new FinspaceKxEnvironmentCustomDnsConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationOutputReference.property.customDnsServerIpInput">CustomDnsServerIpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationOutputReference.property.customDnsServerNameInput">CustomDnsServerNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationOutputReference.property.customDnsServerIp">CustomDnsServerIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationOutputReference.property.customDnsServerName">CustomDnsServerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CustomDnsServerIpInput`<sup>Optional</sup> <a name="CustomDnsServerIpInput" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationOutputReference.property.customDnsServerIpInput"></a>

```csharp
public string CustomDnsServerIpInput { get; }
```

- *Type:* string

---

##### `CustomDnsServerNameInput`<sup>Optional</sup> <a name="CustomDnsServerNameInput" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationOutputReference.property.customDnsServerNameInput"></a>

```csharp
public string CustomDnsServerNameInput { get; }
```

- *Type:* string

---

##### `CustomDnsServerIp`<sup>Required</sup> <a name="CustomDnsServerIp" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationOutputReference.property.customDnsServerIp"></a>

```csharp
public string CustomDnsServerIp { get; }
```

- *Type:* string

---

##### `CustomDnsServerName`<sup>Required</sup> <a name="CustomDnsServerName" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationOutputReference.property.customDnsServerName"></a>

```csharp
public string CustomDnsServerName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentCustomDnsConfigurationOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### FinspaceKxEnvironmentTimeoutsOutputReference <a name="FinspaceKxEnvironmentTimeoutsOutputReference" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new FinspaceKxEnvironmentTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCodeOutputReference <a name="FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCodeOutputReference" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCodeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCodeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCodeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCodeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCodeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCodeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCodeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCodeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCodeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCodeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCodeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCodeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCodeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCodeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCodeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCodeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCodeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCodeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCodeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCodeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCodeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCodeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCodeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCodeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCodeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCodeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCodeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCodeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCodeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCodeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCodeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCodeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCodeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCodeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCodeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCodeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCodeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCodeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCodeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCodeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCodeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCodeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCodeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCodeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCodeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCodeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCodeOutputReference.property.codeInput">CodeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCodeOutputReference.property.typeInput">TypeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCodeOutputReference.property.code">Code</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCodeOutputReference.property.type">Type</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCodeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCode">FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCode</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCodeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCodeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CodeInput`<sup>Optional</sup> <a name="CodeInput" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCodeOutputReference.property.codeInput"></a>

```csharp
public double CodeInput { get; }
```

- *Type:* double

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCodeOutputReference.property.typeInput"></a>

```csharp
public double TypeInput { get; }
```

- *Type:* double

---

##### `Code`<sup>Required</sup> <a name="Code" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCodeOutputReference.property.code"></a>

```csharp
public double Code { get; }
```

- *Type:* double

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCodeOutputReference.property.type"></a>

```csharp
public double Type { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCodeOutputReference.property.internalValue"></a>

```csharp
public FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCode InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCode">FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCode</a>

---


### FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationList <a name="FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationList" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationList.get"></a>

```csharp
private FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference <a name="FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.putIcmpTypeCode">PutIcmpTypeCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.putPortRange">PutPortRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.resetIcmpTypeCode">ResetIcmpTypeCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.resetPortRange">ResetPortRange</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutIcmpTypeCode` <a name="PutIcmpTypeCode" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.putIcmpTypeCode"></a>

```csharp
private void PutIcmpTypeCode(FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCode Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.putIcmpTypeCode.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCode">FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCode</a>

---

##### `PutPortRange` <a name="PutPortRange" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.putPortRange"></a>

```csharp
private void PutPortRange(FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRange Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.putPortRange.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRange">FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRange</a>

---

##### `ResetIcmpTypeCode` <a name="ResetIcmpTypeCode" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.resetIcmpTypeCode"></a>

```csharp
private void ResetIcmpTypeCode()
```

##### `ResetPortRange` <a name="ResetPortRange" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.resetPortRange"></a>

```csharp
private void ResetPortRange()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.property.icmpTypeCode">IcmpTypeCode</a></code> | <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCodeOutputReference">FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCodeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.property.portRange">PortRange</a></code> | <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRangeOutputReference">FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.property.cidrBlockInput">CidrBlockInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.property.icmpTypeCodeInput">IcmpTypeCodeInput</a></code> | <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCode">FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.property.portRangeInput">PortRangeInput</a></code> | <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRange">FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.property.protocolInput">ProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.property.ruleActionInput">RuleActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.property.ruleNumberInput">RuleNumberInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.property.cidrBlock">CidrBlock</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.property.protocol">Protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.property.ruleAction">RuleAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.property.ruleNumber">RuleNumber</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IcmpTypeCode`<sup>Required</sup> <a name="IcmpTypeCode" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.property.icmpTypeCode"></a>

```csharp
public FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCodeOutputReference IcmpTypeCode { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCodeOutputReference">FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCodeOutputReference</a>

---

##### `PortRange`<sup>Required</sup> <a name="PortRange" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.property.portRange"></a>

```csharp
public FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRangeOutputReference PortRange { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRangeOutputReference">FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRangeOutputReference</a>

---

##### `CidrBlockInput`<sup>Optional</sup> <a name="CidrBlockInput" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.property.cidrBlockInput"></a>

```csharp
public string CidrBlockInput { get; }
```

- *Type:* string

---

##### `IcmpTypeCodeInput`<sup>Optional</sup> <a name="IcmpTypeCodeInput" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.property.icmpTypeCodeInput"></a>

```csharp
public FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCode IcmpTypeCodeInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCode">FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCode</a>

---

##### `PortRangeInput`<sup>Optional</sup> <a name="PortRangeInput" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.property.portRangeInput"></a>

```csharp
public FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRange PortRangeInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRange">FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRange</a>

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.property.protocolInput"></a>

```csharp
public string ProtocolInput { get; }
```

- *Type:* string

---

##### `RuleActionInput`<sup>Optional</sup> <a name="RuleActionInput" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.property.ruleActionInput"></a>

```csharp
public string RuleActionInput { get; }
```

- *Type:* string

---

##### `RuleNumberInput`<sup>Optional</sup> <a name="RuleNumberInput" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.property.ruleNumberInput"></a>

```csharp
public double RuleNumberInput { get; }
```

- *Type:* double

---

##### `CidrBlock`<sup>Required</sup> <a name="CidrBlock" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.property.cidrBlock"></a>

```csharp
public string CidrBlock { get; }
```

- *Type:* string

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.property.protocol"></a>

```csharp
public string Protocol { get; }
```

- *Type:* string

---

##### `RuleAction`<sup>Required</sup> <a name="RuleAction" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.property.ruleAction"></a>

```csharp
public string RuleAction { get; }
```

- *Type:* string

---

##### `RuleNumber`<sup>Required</sup> <a name="RuleNumber" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.property.ruleNumber"></a>

```csharp
public double RuleNumber { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRangeOutputReference <a name="FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRangeOutputReference" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRangeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRangeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRangeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRangeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRangeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRangeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRangeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRangeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRangeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRangeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRangeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRangeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRangeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRangeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRangeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRangeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRangeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRangeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRangeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRangeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRangeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRangeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRangeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRangeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRangeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRangeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRangeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRangeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRangeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRangeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRangeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRangeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRangeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRangeOutputReference.property.fromInput">FromInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRangeOutputReference.property.toInput">ToInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRangeOutputReference.property.from">From</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRangeOutputReference.property.to">To</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRangeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRange">FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRange</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRangeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRangeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FromInput`<sup>Optional</sup> <a name="FromInput" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRangeOutputReference.property.fromInput"></a>

```csharp
public double FromInput { get; }
```

- *Type:* double

---

##### `ToInput`<sup>Optional</sup> <a name="ToInput" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRangeOutputReference.property.toInput"></a>

```csharp
public double ToInput { get; }
```

- *Type:* double

---

##### `From`<sup>Required</sup> <a name="From" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRangeOutputReference.property.from"></a>

```csharp
public double From { get; }
```

- *Type:* double

---

##### `To`<sup>Required</sup> <a name="To" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRangeOutputReference.property.to"></a>

```csharp
public double To { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRangeOutputReference.property.internalValue"></a>

```csharp
public FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRange InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRange">FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRange</a>

---


### FinspaceKxEnvironmentTransitGatewayConfigurationOutputReference <a name="FinspaceKxEnvironmentTransitGatewayConfigurationOutputReference" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new FinspaceKxEnvironmentTransitGatewayConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationOutputReference.putAttachmentNetworkAclConfiguration">PutAttachmentNetworkAclConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationOutputReference.resetAttachmentNetworkAclConfiguration">ResetAttachmentNetworkAclConfiguration</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAttachmentNetworkAclConfiguration` <a name="PutAttachmentNetworkAclConfiguration" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationOutputReference.putAttachmentNetworkAclConfiguration"></a>

```csharp
private void PutAttachmentNetworkAclConfiguration(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationOutputReference.putAttachmentNetworkAclConfiguration.parameter.value"></a>

- *Type:* object

---

##### `ResetAttachmentNetworkAclConfiguration` <a name="ResetAttachmentNetworkAclConfiguration" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationOutputReference.resetAttachmentNetworkAclConfiguration"></a>

```csharp
private void ResetAttachmentNetworkAclConfiguration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationOutputReference.property.attachmentNetworkAclConfiguration">AttachmentNetworkAclConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationList">FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationOutputReference.property.attachmentNetworkAclConfigurationInput">AttachmentNetworkAclConfigurationInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationOutputReference.property.routableCidrSpaceInput">RoutableCidrSpaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationOutputReference.property.transitGatewayIdInput">TransitGatewayIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationOutputReference.property.routableCidrSpace">RoutableCidrSpace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationOutputReference.property.transitGatewayId">TransitGatewayId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfiguration">FinspaceKxEnvironmentTransitGatewayConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AttachmentNetworkAclConfiguration`<sup>Required</sup> <a name="AttachmentNetworkAclConfiguration" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationOutputReference.property.attachmentNetworkAclConfiguration"></a>

```csharp
public FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationList AttachmentNetworkAclConfiguration { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationList">FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationList</a>

---

##### `AttachmentNetworkAclConfigurationInput`<sup>Optional</sup> <a name="AttachmentNetworkAclConfigurationInput" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationOutputReference.property.attachmentNetworkAclConfigurationInput"></a>

```csharp
public object AttachmentNetworkAclConfigurationInput { get; }
```

- *Type:* object

---

##### `RoutableCidrSpaceInput`<sup>Optional</sup> <a name="RoutableCidrSpaceInput" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationOutputReference.property.routableCidrSpaceInput"></a>

```csharp
public string RoutableCidrSpaceInput { get; }
```

- *Type:* string

---

##### `TransitGatewayIdInput`<sup>Optional</sup> <a name="TransitGatewayIdInput" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationOutputReference.property.transitGatewayIdInput"></a>

```csharp
public string TransitGatewayIdInput { get; }
```

- *Type:* string

---

##### `RoutableCidrSpace`<sup>Required</sup> <a name="RoutableCidrSpace" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationOutputReference.property.routableCidrSpace"></a>

```csharp
public string RoutableCidrSpace { get; }
```

- *Type:* string

---

##### `TransitGatewayId`<sup>Required</sup> <a name="TransitGatewayId" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationOutputReference.property.transitGatewayId"></a>

```csharp
public string TransitGatewayId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfigurationOutputReference.property.internalValue"></a>

```csharp
public FinspaceKxEnvironmentTransitGatewayConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.finspaceKxEnvironment.FinspaceKxEnvironmentTransitGatewayConfiguration">FinspaceKxEnvironmentTransitGatewayConfiguration</a>

---



