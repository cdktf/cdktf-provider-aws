# `codeartifactDomainPermissionsPolicy` Submodule <a name="`codeartifactDomainPermissionsPolicy` Submodule" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CodeartifactDomainPermissionsPolicy <a name="CodeartifactDomainPermissionsPolicy" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codeartifact_domain_permissions_policy aws_codeartifact_domain_permissions_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CodeartifactDomainPermissionsPolicy(Construct Scope, string Id, CodeartifactDomainPermissionsPolicyConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicyConfig">CodeartifactDomainPermissionsPolicyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicyConfig">CodeartifactDomainPermissionsPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.resetDomainOwner">ResetDomainOwner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.resetPolicyDocument">ResetPolicyDocument</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.resetPolicyRevision">ResetPolicyRevision</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetDomainOwner` <a name="ResetDomainOwner" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.resetDomainOwner"></a>

```csharp
private void ResetDomainOwner()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetPolicyDocument` <a name="ResetPolicyDocument" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.resetPolicyDocument"></a>

```csharp
private void ResetPolicyDocument()
```

##### `ResetPolicyRevision` <a name="ResetPolicyRevision" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.resetPolicyRevision"></a>

```csharp
private void ResetPolicyRevision()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.resetRegion"></a>

```csharp
private void ResetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a CodeartifactDomainPermissionsPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

CodeartifactDomainPermissionsPolicy.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

CodeartifactDomainPermissionsPolicy.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

CodeartifactDomainPermissionsPolicy.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

CodeartifactDomainPermissionsPolicy.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a CodeartifactDomainPermissionsPolicy resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CodeartifactDomainPermissionsPolicy to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CodeartifactDomainPermissionsPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codeartifact_domain_permissions_policy#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the CodeartifactDomainPermissionsPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.property.resourceArn">ResourceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.property.domainInput">DomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.property.domainOwnerInput">DomainOwnerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.property.policyDocumentInput">PolicyDocumentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.property.policyRevisionInput">PolicyRevisionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.property.domain">Domain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.property.domainOwner">DomainOwner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.property.policyDocument">PolicyDocument</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.property.policyRevision">PolicyRevision</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.property.region">Region</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `ResourceArn`<sup>Required</sup> <a name="ResourceArn" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.property.resourceArn"></a>

```csharp
public string ResourceArn { get; }
```

- *Type:* string

---

##### `DomainInput`<sup>Optional</sup> <a name="DomainInput" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.property.domainInput"></a>

```csharp
public string DomainInput { get; }
```

- *Type:* string

---

##### `DomainOwnerInput`<sup>Optional</sup> <a name="DomainOwnerInput" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.property.domainOwnerInput"></a>

```csharp
public string DomainOwnerInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `PolicyDocumentInput`<sup>Optional</sup> <a name="PolicyDocumentInput" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.property.policyDocumentInput"></a>

```csharp
public string PolicyDocumentInput { get; }
```

- *Type:* string

---

##### `PolicyRevisionInput`<sup>Optional</sup> <a name="PolicyRevisionInput" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.property.policyRevisionInput"></a>

```csharp
public string PolicyRevisionInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.property.domain"></a>

```csharp
public string Domain { get; }
```

- *Type:* string

---

##### `DomainOwner`<sup>Required</sup> <a name="DomainOwner" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.property.domainOwner"></a>

```csharp
public string DomainOwner { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `PolicyDocument`<sup>Required</sup> <a name="PolicyDocument" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.property.policyDocument"></a>

```csharp
public string PolicyDocument { get; }
```

- *Type:* string

---

##### `PolicyRevision`<sup>Required</sup> <a name="PolicyRevision" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.property.policyRevision"></a>

```csharp
public string PolicyRevision { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicy.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CodeartifactDomainPermissionsPolicyConfig <a name="CodeartifactDomainPermissionsPolicyConfig" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicyConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new CodeartifactDomainPermissionsPolicyConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Domain,
    string DomainOwner = null,
    string Id = null,
    string PolicyDocument = null,
    string PolicyRevision = null,
    string Region = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicyConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicyConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicyConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicyConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicyConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicyConfig.property.domain">Domain</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codeartifact_domain_permissions_policy#domain CodeartifactDomainPermissionsPolicy#domain}. |
| <code><a href="#@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicyConfig.property.domainOwner">DomainOwner</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codeartifact_domain_permissions_policy#domain_owner CodeartifactDomainPermissionsPolicy#domain_owner}. |
| <code><a href="#@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicyConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codeartifact_domain_permissions_policy#id CodeartifactDomainPermissionsPolicy#id}. |
| <code><a href="#@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicyConfig.property.policyDocument">PolicyDocument</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codeartifact_domain_permissions_policy#policy_document CodeartifactDomainPermissionsPolicy#policy_document}. |
| <code><a href="#@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicyConfig.property.policyRevision">PolicyRevision</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codeartifact_domain_permissions_policy#policy_revision CodeartifactDomainPermissionsPolicy#policy_revision}. |
| <code><a href="#@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicyConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicyConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicyConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicyConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicyConfig.property.domain"></a>

```csharp
public string Domain { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codeartifact_domain_permissions_policy#domain CodeartifactDomainPermissionsPolicy#domain}.

---

##### `DomainOwner`<sup>Optional</sup> <a name="DomainOwner" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicyConfig.property.domainOwner"></a>

```csharp
public string DomainOwner { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codeartifact_domain_permissions_policy#domain_owner CodeartifactDomainPermissionsPolicy#domain_owner}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicyConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codeartifact_domain_permissions_policy#id CodeartifactDomainPermissionsPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `PolicyDocument`<sup>Optional</sup> <a name="PolicyDocument" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicyConfig.property.policyDocument"></a>

```csharp
public string PolicyDocument { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codeartifact_domain_permissions_policy#policy_document CodeartifactDomainPermissionsPolicy#policy_document}.

---

##### `PolicyRevision`<sup>Optional</sup> <a name="PolicyRevision" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicyConfig.property.policyRevision"></a>

```csharp
public string PolicyRevision { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codeartifact_domain_permissions_policy#policy_revision CodeartifactDomainPermissionsPolicy#policy_revision}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-aws.codeartifactDomainPermissionsPolicy.CodeartifactDomainPermissionsPolicyConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/codeartifact_domain_permissions_policy#region CodeartifactDomainPermissionsPolicy#region}

---



