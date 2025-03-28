# `ecrPullThroughCacheRule` Submodule <a name="`ecrPullThroughCacheRule` Submodule" id="@cdktf/provider-aws.ecrPullThroughCacheRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EcrPullThroughCacheRule <a name="EcrPullThroughCacheRule" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/ecr_pull_through_cache_rule aws_ecr_pull_through_cache_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EcrPullThroughCacheRule(Construct Scope, string Id, EcrPullThroughCacheRuleConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRuleConfig">EcrPullThroughCacheRuleConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRuleConfig">EcrPullThroughCacheRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.resetCredentialArn">ResetCredentialArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.resetCustomRoleArn">ResetCustomRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.resetUpstreamRepositoryPrefix">ResetUpstreamRepositoryPrefix</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetCredentialArn` <a name="ResetCredentialArn" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.resetCredentialArn"></a>

```csharp
private void ResetCredentialArn()
```

##### `ResetCustomRoleArn` <a name="ResetCustomRoleArn" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.resetCustomRoleArn"></a>

```csharp
private void ResetCustomRoleArn()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetUpstreamRepositoryPrefix` <a name="ResetUpstreamRepositoryPrefix" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.resetUpstreamRepositoryPrefix"></a>

```csharp
private void ResetUpstreamRepositoryPrefix()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a EcrPullThroughCacheRule resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

EcrPullThroughCacheRule.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

EcrPullThroughCacheRule.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

EcrPullThroughCacheRule.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

EcrPullThroughCacheRule.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a EcrPullThroughCacheRule resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the EcrPullThroughCacheRule to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing EcrPullThroughCacheRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/ecr_pull_through_cache_rule#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the EcrPullThroughCacheRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.registryId">RegistryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.credentialArnInput">CredentialArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.customRoleArnInput">CustomRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.ecrRepositoryPrefixInput">EcrRepositoryPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.upstreamRegistryUrlInput">UpstreamRegistryUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.upstreamRepositoryPrefixInput">UpstreamRepositoryPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.credentialArn">CredentialArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.customRoleArn">CustomRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.ecrRepositoryPrefix">EcrRepositoryPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.upstreamRegistryUrl">UpstreamRegistryUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.upstreamRepositoryPrefix">UpstreamRepositoryPrefix</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `RegistryId`<sup>Required</sup> <a name="RegistryId" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.registryId"></a>

```csharp
public string RegistryId { get; }
```

- *Type:* string

---

##### `CredentialArnInput`<sup>Optional</sup> <a name="CredentialArnInput" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.credentialArnInput"></a>

```csharp
public string CredentialArnInput { get; }
```

- *Type:* string

---

##### `CustomRoleArnInput`<sup>Optional</sup> <a name="CustomRoleArnInput" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.customRoleArnInput"></a>

```csharp
public string CustomRoleArnInput { get; }
```

- *Type:* string

---

##### `EcrRepositoryPrefixInput`<sup>Optional</sup> <a name="EcrRepositoryPrefixInput" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.ecrRepositoryPrefixInput"></a>

```csharp
public string EcrRepositoryPrefixInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `UpstreamRegistryUrlInput`<sup>Optional</sup> <a name="UpstreamRegistryUrlInput" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.upstreamRegistryUrlInput"></a>

```csharp
public string UpstreamRegistryUrlInput { get; }
```

- *Type:* string

---

##### `UpstreamRepositoryPrefixInput`<sup>Optional</sup> <a name="UpstreamRepositoryPrefixInput" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.upstreamRepositoryPrefixInput"></a>

```csharp
public string UpstreamRepositoryPrefixInput { get; }
```

- *Type:* string

---

##### `CredentialArn`<sup>Required</sup> <a name="CredentialArn" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.credentialArn"></a>

```csharp
public string CredentialArn { get; }
```

- *Type:* string

---

##### `CustomRoleArn`<sup>Required</sup> <a name="CustomRoleArn" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.customRoleArn"></a>

```csharp
public string CustomRoleArn { get; }
```

- *Type:* string

---

##### `EcrRepositoryPrefix`<sup>Required</sup> <a name="EcrRepositoryPrefix" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.ecrRepositoryPrefix"></a>

```csharp
public string EcrRepositoryPrefix { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `UpstreamRegistryUrl`<sup>Required</sup> <a name="UpstreamRegistryUrl" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.upstreamRegistryUrl"></a>

```csharp
public string UpstreamRegistryUrl { get; }
```

- *Type:* string

---

##### `UpstreamRepositoryPrefix`<sup>Required</sup> <a name="UpstreamRepositoryPrefix" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.upstreamRepositoryPrefix"></a>

```csharp
public string UpstreamRepositoryPrefix { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRule.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### EcrPullThroughCacheRuleConfig <a name="EcrPullThroughCacheRuleConfig" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRuleConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new EcrPullThroughCacheRuleConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string EcrRepositoryPrefix,
    string UpstreamRegistryUrl,
    string CredentialArn = null,
    string CustomRoleArn = null,
    string Id = null,
    string UpstreamRepositoryPrefix = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRuleConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRuleConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRuleConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRuleConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRuleConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRuleConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRuleConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRuleConfig.property.ecrRepositoryPrefix">EcrRepositoryPrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/ecr_pull_through_cache_rule#ecr_repository_prefix EcrPullThroughCacheRule#ecr_repository_prefix}. |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRuleConfig.property.upstreamRegistryUrl">UpstreamRegistryUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/ecr_pull_through_cache_rule#upstream_registry_url EcrPullThroughCacheRule#upstream_registry_url}. |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRuleConfig.property.credentialArn">CredentialArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/ecr_pull_through_cache_rule#credential_arn EcrPullThroughCacheRule#credential_arn}. |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRuleConfig.property.customRoleArn">CustomRoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/ecr_pull_through_cache_rule#custom_role_arn EcrPullThroughCacheRule#custom_role_arn}. |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRuleConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/ecr_pull_through_cache_rule#id EcrPullThroughCacheRule#id}. |
| <code><a href="#@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRuleConfig.property.upstreamRepositoryPrefix">UpstreamRepositoryPrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/ecr_pull_through_cache_rule#upstream_repository_prefix EcrPullThroughCacheRule#upstream_repository_prefix}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRuleConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRuleConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRuleConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRuleConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRuleConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRuleConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRuleConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `EcrRepositoryPrefix`<sup>Required</sup> <a name="EcrRepositoryPrefix" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRuleConfig.property.ecrRepositoryPrefix"></a>

```csharp
public string EcrRepositoryPrefix { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/ecr_pull_through_cache_rule#ecr_repository_prefix EcrPullThroughCacheRule#ecr_repository_prefix}.

---

##### `UpstreamRegistryUrl`<sup>Required</sup> <a name="UpstreamRegistryUrl" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRuleConfig.property.upstreamRegistryUrl"></a>

```csharp
public string UpstreamRegistryUrl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/ecr_pull_through_cache_rule#upstream_registry_url EcrPullThroughCacheRule#upstream_registry_url}.

---

##### `CredentialArn`<sup>Optional</sup> <a name="CredentialArn" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRuleConfig.property.credentialArn"></a>

```csharp
public string CredentialArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/ecr_pull_through_cache_rule#credential_arn EcrPullThroughCacheRule#credential_arn}.

---

##### `CustomRoleArn`<sup>Optional</sup> <a name="CustomRoleArn" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRuleConfig.property.customRoleArn"></a>

```csharp
public string CustomRoleArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/ecr_pull_through_cache_rule#custom_role_arn EcrPullThroughCacheRule#custom_role_arn}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRuleConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/ecr_pull_through_cache_rule#id EcrPullThroughCacheRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `UpstreamRepositoryPrefix`<sup>Optional</sup> <a name="UpstreamRepositoryPrefix" id="@cdktf/provider-aws.ecrPullThroughCacheRule.EcrPullThroughCacheRuleConfig.property.upstreamRepositoryPrefix"></a>

```csharp
public string UpstreamRepositoryPrefix { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/ecr_pull_through_cache_rule#upstream_repository_prefix EcrPullThroughCacheRule#upstream_repository_prefix}.

---



