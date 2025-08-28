# `quicksightIpRestriction` Submodule <a name="`quicksightIpRestriction` Submodule" id="@cdktf/provider-aws.quicksightIpRestriction"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### QuicksightIpRestriction <a name="QuicksightIpRestriction" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/quicksight_ip_restriction aws_quicksight_ip_restriction}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new QuicksightIpRestriction(Construct Scope, string Id, QuicksightIpRestrictionConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestrictionConfig">QuicksightIpRestrictionConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestrictionConfig">QuicksightIpRestrictionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.resetAwsAccountId">ResetAwsAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.resetIpRestrictionRuleMap">ResetIpRestrictionRuleMap</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.resetVpcEndpointIdRestrictionRuleMap">ResetVpcEndpointIdRestrictionRuleMap</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.resetVpcIdRestrictionRuleMap">ResetVpcIdRestrictionRuleMap</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetAwsAccountId` <a name="ResetAwsAccountId" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.resetAwsAccountId"></a>

```csharp
private void ResetAwsAccountId()
```

##### `ResetIpRestrictionRuleMap` <a name="ResetIpRestrictionRuleMap" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.resetIpRestrictionRuleMap"></a>

```csharp
private void ResetIpRestrictionRuleMap()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetVpcEndpointIdRestrictionRuleMap` <a name="ResetVpcEndpointIdRestrictionRuleMap" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.resetVpcEndpointIdRestrictionRuleMap"></a>

```csharp
private void ResetVpcEndpointIdRestrictionRuleMap()
```

##### `ResetVpcIdRestrictionRuleMap` <a name="ResetVpcIdRestrictionRuleMap" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.resetVpcIdRestrictionRuleMap"></a>

```csharp
private void ResetVpcIdRestrictionRuleMap()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a QuicksightIpRestriction resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

QuicksightIpRestriction.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

QuicksightIpRestriction.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

QuicksightIpRestriction.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

QuicksightIpRestriction.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a QuicksightIpRestriction resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the QuicksightIpRestriction to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing QuicksightIpRestriction that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/quicksight_ip_restriction#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the QuicksightIpRestriction to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.property.awsAccountIdInput">AwsAccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.property.ipRestrictionRuleMapInput">IpRestrictionRuleMapInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.property.vpcEndpointIdRestrictionRuleMapInput">VpcEndpointIdRestrictionRuleMapInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.property.vpcIdRestrictionRuleMapInput">VpcIdRestrictionRuleMapInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.property.awsAccountId">AwsAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.property.ipRestrictionRuleMap">IpRestrictionRuleMap</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.property.vpcEndpointIdRestrictionRuleMap">VpcEndpointIdRestrictionRuleMap</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.property.vpcIdRestrictionRuleMap">VpcIdRestrictionRuleMap</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AwsAccountIdInput`<sup>Optional</sup> <a name="AwsAccountIdInput" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.property.awsAccountIdInput"></a>

```csharp
public string AwsAccountIdInput { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `IpRestrictionRuleMapInput`<sup>Optional</sup> <a name="IpRestrictionRuleMapInput" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.property.ipRestrictionRuleMapInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> IpRestrictionRuleMapInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `VpcEndpointIdRestrictionRuleMapInput`<sup>Optional</sup> <a name="VpcEndpointIdRestrictionRuleMapInput" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.property.vpcEndpointIdRestrictionRuleMapInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> VpcEndpointIdRestrictionRuleMapInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `VpcIdRestrictionRuleMapInput`<sup>Optional</sup> <a name="VpcIdRestrictionRuleMapInput" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.property.vpcIdRestrictionRuleMapInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> VpcIdRestrictionRuleMapInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `AwsAccountId`<sup>Required</sup> <a name="AwsAccountId" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.property.awsAccountId"></a>

```csharp
public string AwsAccountId { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `IpRestrictionRuleMap`<sup>Required</sup> <a name="IpRestrictionRuleMap" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.property.ipRestrictionRuleMap"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> IpRestrictionRuleMap { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `VpcEndpointIdRestrictionRuleMap`<sup>Required</sup> <a name="VpcEndpointIdRestrictionRuleMap" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.property.vpcEndpointIdRestrictionRuleMap"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> VpcEndpointIdRestrictionRuleMap { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `VpcIdRestrictionRuleMap`<sup>Required</sup> <a name="VpcIdRestrictionRuleMap" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.property.vpcIdRestrictionRuleMap"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> VpcIdRestrictionRuleMap { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestriction.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### QuicksightIpRestrictionConfig <a name="QuicksightIpRestrictionConfig" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestrictionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestrictionConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new QuicksightIpRestrictionConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    object Enabled,
    string AwsAccountId = null,
    System.Collections.Generic.IDictionary<string, string> IpRestrictionRuleMap = null,
    string Region = null,
    System.Collections.Generic.IDictionary<string, string> VpcEndpointIdRestrictionRuleMap = null,
    System.Collections.Generic.IDictionary<string, string> VpcIdRestrictionRuleMap = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestrictionConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestrictionConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestrictionConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestrictionConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestrictionConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestrictionConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestrictionConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestrictionConfig.property.enabled">Enabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/quicksight_ip_restriction#enabled QuicksightIpRestriction#enabled}. |
| <code><a href="#@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestrictionConfig.property.awsAccountId">AwsAccountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/quicksight_ip_restriction#aws_account_id QuicksightIpRestriction#aws_account_id}. |
| <code><a href="#@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestrictionConfig.property.ipRestrictionRuleMap">IpRestrictionRuleMap</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/quicksight_ip_restriction#ip_restriction_rule_map QuicksightIpRestriction#ip_restriction_rule_map}. |
| <code><a href="#@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestrictionConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestrictionConfig.property.vpcEndpointIdRestrictionRuleMap">VpcEndpointIdRestrictionRuleMap</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/quicksight_ip_restriction#vpc_endpoint_id_restriction_rule_map QuicksightIpRestriction#vpc_endpoint_id_restriction_rule_map}. |
| <code><a href="#@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestrictionConfig.property.vpcIdRestrictionRuleMap">VpcIdRestrictionRuleMap</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/quicksight_ip_restriction#vpc_id_restriction_rule_map QuicksightIpRestriction#vpc_id_restriction_rule_map}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestrictionConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestrictionConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestrictionConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestrictionConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestrictionConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestrictionConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestrictionConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestrictionConfig.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/quicksight_ip_restriction#enabled QuicksightIpRestriction#enabled}.

---

##### `AwsAccountId`<sup>Optional</sup> <a name="AwsAccountId" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestrictionConfig.property.awsAccountId"></a>

```csharp
public string AwsAccountId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/quicksight_ip_restriction#aws_account_id QuicksightIpRestriction#aws_account_id}.

---

##### `IpRestrictionRuleMap`<sup>Optional</sup> <a name="IpRestrictionRuleMap" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestrictionConfig.property.ipRestrictionRuleMap"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> IpRestrictionRuleMap { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/quicksight_ip_restriction#ip_restriction_rule_map QuicksightIpRestriction#ip_restriction_rule_map}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestrictionConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/quicksight_ip_restriction#region QuicksightIpRestriction#region}

---

##### `VpcEndpointIdRestrictionRuleMap`<sup>Optional</sup> <a name="VpcEndpointIdRestrictionRuleMap" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestrictionConfig.property.vpcEndpointIdRestrictionRuleMap"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> VpcEndpointIdRestrictionRuleMap { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/quicksight_ip_restriction#vpc_endpoint_id_restriction_rule_map QuicksightIpRestriction#vpc_endpoint_id_restriction_rule_map}.

---

##### `VpcIdRestrictionRuleMap`<sup>Optional</sup> <a name="VpcIdRestrictionRuleMap" id="@cdktf/provider-aws.quicksightIpRestriction.QuicksightIpRestrictionConfig.property.vpcIdRestrictionRuleMap"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> VpcIdRestrictionRuleMap { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/quicksight_ip_restriction#vpc_id_restriction_rule_map QuicksightIpRestriction#vpc_id_restriction_rule_map}.

---



