# `opensearchserverlessSecurityPolicy` Submodule <a name="`opensearchserverlessSecurityPolicy` Submodule" id="@cdktf/provider-aws.opensearchserverlessSecurityPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OpensearchserverlessSecurityPolicy <a name="OpensearchserverlessSecurityPolicy" id="@cdktf/provider-aws.opensearchserverlessSecurityPolicy.OpensearchserverlessSecurityPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/opensearchserverless_security_policy aws_opensearchserverless_security_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opensearchserverlessSecurityPolicy.OpensearchserverlessSecurityPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new OpensearchserverlessSecurityPolicy(Construct Scope, string Id, OpensearchserverlessSecurityPolicyConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityPolicy.OpensearchserverlessSecurityPolicy.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityPolicy.OpensearchserverlessSecurityPolicy.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityPolicy.OpensearchserverlessSecurityPolicy.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityPolicy.OpensearchserverlessSecurityPolicyConfig">OpensearchserverlessSecurityPolicyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.opensearchserverlessSecurityPolicy.OpensearchserverlessSecurityPolicy.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.opensearchserverlessSecurityPolicy.OpensearchserverlessSecurityPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.opensearchserverlessSecurityPolicy.OpensearchserverlessSecurityPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.opensearchserverlessSecurityPolicy.OpensearchserverlessSecurityPolicyConfig">OpensearchserverlessSecurityPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityPolicy.OpensearchserverlessSecurityPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityPolicy.OpensearchserverlessSecurityPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityPolicy.OpensearchserverlessSecurityPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityPolicy.OpensearchserverlessSecurityPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityPolicy.OpensearchserverlessSecurityPolicy.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityPolicy.OpensearchserverlessSecurityPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityPolicy.OpensearchserverlessSecurityPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityPolicy.OpensearchserverlessSecurityPolicy.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityPolicy.OpensearchserverlessSecurityPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityPolicy.OpensearchserverlessSecurityPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityPolicy.OpensearchserverlessSecurityPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityPolicy.OpensearchserverlessSecurityPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityPolicy.OpensearchserverlessSecurityPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityPolicy.OpensearchserverlessSecurityPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityPolicy.OpensearchserverlessSecurityPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityPolicy.OpensearchserverlessSecurityPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityPolicy.OpensearchserverlessSecurityPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityPolicy.OpensearchserverlessSecurityPolicy.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityPolicy.OpensearchserverlessSecurityPolicy.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityPolicy.OpensearchserverlessSecurityPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityPolicy.OpensearchserverlessSecurityPolicy.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityPolicy.OpensearchserverlessSecurityPolicy.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityPolicy.OpensearchserverlessSecurityPolicy.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityPolicy.OpensearchserverlessSecurityPolicy.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityPolicy.OpensearchserverlessSecurityPolicy.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.opensearchserverlessSecurityPolicy.OpensearchserverlessSecurityPolicy.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.opensearchserverlessSecurityPolicy.OpensearchserverlessSecurityPolicy.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.opensearchserverlessSecurityPolicy.OpensearchserverlessSecurityPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.opensearchserverlessSecurityPolicy.OpensearchserverlessSecurityPolicy.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.opensearchserverlessSecurityPolicy.OpensearchserverlessSecurityPolicy.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.opensearchserverlessSecurityPolicy.OpensearchserverlessSecurityPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.opensearchserverlessSecurityPolicy.OpensearchserverlessSecurityPolicy.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.opensearchserverlessSecurityPolicy.OpensearchserverlessSecurityPolicy.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.opensearchserverlessSecurityPolicy.OpensearchserverlessSecurityPolicy.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.opensearchserverlessSecurityPolicy.OpensearchserverlessSecurityPolicy.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.opensearchserverlessSecurityPolicy.OpensearchserverlessSecurityPolicy.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.opensearchserverlessSecurityPolicy.OpensearchserverlessSecurityPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.opensearchserverlessSecurityPolicy.OpensearchserverlessSecurityPolicy.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opensearchserverlessSecurityPolicy.OpensearchserverlessSecurityPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.opensearchserverlessSecurityPolicy.OpensearchserverlessSecurityPolicy.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opensearchserverlessSecurityPolicy.OpensearchserverlessSecurityPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.opensearchserverlessSecurityPolicy.OpensearchserverlessSecurityPolicy.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opensearchserverlessSecurityPolicy.OpensearchserverlessSecurityPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.opensearchserverlessSecurityPolicy.OpensearchserverlessSecurityPolicy.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opensearchserverlessSecurityPolicy.OpensearchserverlessSecurityPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.opensearchserverlessSecurityPolicy.OpensearchserverlessSecurityPolicy.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opensearchserverlessSecurityPolicy.OpensearchserverlessSecurityPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.opensearchserverlessSecurityPolicy.OpensearchserverlessSecurityPolicy.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opensearchserverlessSecurityPolicy.OpensearchserverlessSecurityPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.opensearchserverlessSecurityPolicy.OpensearchserverlessSecurityPolicy.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opensearchserverlessSecurityPolicy.OpensearchserverlessSecurityPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.opensearchserverlessSecurityPolicy.OpensearchserverlessSecurityPolicy.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opensearchserverlessSecurityPolicy.OpensearchserverlessSecurityPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.opensearchserverlessSecurityPolicy.OpensearchserverlessSecurityPolicy.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opensearchserverlessSecurityPolicy.OpensearchserverlessSecurityPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.opensearchserverlessSecurityPolicy.OpensearchserverlessSecurityPolicy.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.opensearchserverlessSecurityPolicy.OpensearchserverlessSecurityPolicy.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.opensearchserverlessSecurityPolicy.OpensearchserverlessSecurityPolicy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.opensearchserverlessSecurityPolicy.OpensearchserverlessSecurityPolicy.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.opensearchserverlessSecurityPolicy.OpensearchserverlessSecurityPolicy.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opensearchserverlessSecurityPolicy.OpensearchserverlessSecurityPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.opensearchserverlessSecurityPolicy.OpensearchserverlessSecurityPolicy.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.opensearchserverlessSecurityPolicy.OpensearchserverlessSecurityPolicy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.opensearchserverlessSecurityPolicy.OpensearchserverlessSecurityPolicy.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.opensearchserverlessSecurityPolicy.OpensearchserverlessSecurityPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-aws.opensearchserverlessSecurityPolicy.OpensearchserverlessSecurityPolicy.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.opensearchserverlessSecurityPolicy.OpensearchserverlessSecurityPolicy.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.opensearchserverlessSecurityPolicy.OpensearchserverlessSecurityPolicy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-aws.opensearchserverlessSecurityPolicy.OpensearchserverlessSecurityPolicy.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-aws.opensearchserverlessSecurityPolicy.OpensearchserverlessSecurityPolicy.resetRegion"></a>

```csharp
private void ResetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityPolicy.OpensearchserverlessSecurityPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityPolicy.OpensearchserverlessSecurityPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityPolicy.OpensearchserverlessSecurityPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityPolicy.OpensearchserverlessSecurityPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a OpensearchserverlessSecurityPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.opensearchserverlessSecurityPolicy.OpensearchserverlessSecurityPolicy.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

OpensearchserverlessSecurityPolicy.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.opensearchserverlessSecurityPolicy.OpensearchserverlessSecurityPolicy.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.opensearchserverlessSecurityPolicy.OpensearchserverlessSecurityPolicy.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

OpensearchserverlessSecurityPolicy.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.opensearchserverlessSecurityPolicy.OpensearchserverlessSecurityPolicy.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.opensearchserverlessSecurityPolicy.OpensearchserverlessSecurityPolicy.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

OpensearchserverlessSecurityPolicy.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.opensearchserverlessSecurityPolicy.OpensearchserverlessSecurityPolicy.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.opensearchserverlessSecurityPolicy.OpensearchserverlessSecurityPolicy.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

OpensearchserverlessSecurityPolicy.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a OpensearchserverlessSecurityPolicy resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.opensearchserverlessSecurityPolicy.OpensearchserverlessSecurityPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-aws.opensearchserverlessSecurityPolicy.OpensearchserverlessSecurityPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the OpensearchserverlessSecurityPolicy to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-aws.opensearchserverlessSecurityPolicy.OpensearchserverlessSecurityPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing OpensearchserverlessSecurityPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/opensearchserverless_security_policy#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.opensearchserverlessSecurityPolicy.OpensearchserverlessSecurityPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the OpensearchserverlessSecurityPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityPolicy.OpensearchserverlessSecurityPolicy.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityPolicy.OpensearchserverlessSecurityPolicy.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityPolicy.OpensearchserverlessSecurityPolicy.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityPolicy.OpensearchserverlessSecurityPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityPolicy.OpensearchserverlessSecurityPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityPolicy.OpensearchserverlessSecurityPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityPolicy.OpensearchserverlessSecurityPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityPolicy.OpensearchserverlessSecurityPolicy.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityPolicy.OpensearchserverlessSecurityPolicy.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityPolicy.OpensearchserverlessSecurityPolicy.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityPolicy.OpensearchserverlessSecurityPolicy.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityPolicy.OpensearchserverlessSecurityPolicy.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityPolicy.OpensearchserverlessSecurityPolicy.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityPolicy.OpensearchserverlessSecurityPolicy.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityPolicy.OpensearchserverlessSecurityPolicy.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityPolicy.OpensearchserverlessSecurityPolicy.property.policyVersion">PolicyVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityPolicy.OpensearchserverlessSecurityPolicy.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityPolicy.OpensearchserverlessSecurityPolicy.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityPolicy.OpensearchserverlessSecurityPolicy.property.policyInput">PolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityPolicy.OpensearchserverlessSecurityPolicy.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityPolicy.OpensearchserverlessSecurityPolicy.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityPolicy.OpensearchserverlessSecurityPolicy.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityPolicy.OpensearchserverlessSecurityPolicy.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityPolicy.OpensearchserverlessSecurityPolicy.property.policy">Policy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityPolicy.OpensearchserverlessSecurityPolicy.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityPolicy.OpensearchserverlessSecurityPolicy.property.type">Type</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.opensearchserverlessSecurityPolicy.OpensearchserverlessSecurityPolicy.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.opensearchserverlessSecurityPolicy.OpensearchserverlessSecurityPolicy.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.opensearchserverlessSecurityPolicy.OpensearchserverlessSecurityPolicy.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.opensearchserverlessSecurityPolicy.OpensearchserverlessSecurityPolicy.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.opensearchserverlessSecurityPolicy.OpensearchserverlessSecurityPolicy.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.opensearchserverlessSecurityPolicy.OpensearchserverlessSecurityPolicy.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.opensearchserverlessSecurityPolicy.OpensearchserverlessSecurityPolicy.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.opensearchserverlessSecurityPolicy.OpensearchserverlessSecurityPolicy.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.opensearchserverlessSecurityPolicy.OpensearchserverlessSecurityPolicy.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.opensearchserverlessSecurityPolicy.OpensearchserverlessSecurityPolicy.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.opensearchserverlessSecurityPolicy.OpensearchserverlessSecurityPolicy.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.opensearchserverlessSecurityPolicy.OpensearchserverlessSecurityPolicy.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.opensearchserverlessSecurityPolicy.OpensearchserverlessSecurityPolicy.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.opensearchserverlessSecurityPolicy.OpensearchserverlessSecurityPolicy.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.opensearchserverlessSecurityPolicy.OpensearchserverlessSecurityPolicy.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `PolicyVersion`<sup>Required</sup> <a name="PolicyVersion" id="@cdktf/provider-aws.opensearchserverlessSecurityPolicy.OpensearchserverlessSecurityPolicy.property.policyVersion"></a>

```csharp
public string PolicyVersion { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-aws.opensearchserverlessSecurityPolicy.OpensearchserverlessSecurityPolicy.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.opensearchserverlessSecurityPolicy.OpensearchserverlessSecurityPolicy.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PolicyInput`<sup>Optional</sup> <a name="PolicyInput" id="@cdktf/provider-aws.opensearchserverlessSecurityPolicy.OpensearchserverlessSecurityPolicy.property.policyInput"></a>

```csharp
public string PolicyInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-aws.opensearchserverlessSecurityPolicy.OpensearchserverlessSecurityPolicy.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-aws.opensearchserverlessSecurityPolicy.OpensearchserverlessSecurityPolicy.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.opensearchserverlessSecurityPolicy.OpensearchserverlessSecurityPolicy.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.opensearchserverlessSecurityPolicy.OpensearchserverlessSecurityPolicy.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Policy`<sup>Required</sup> <a name="Policy" id="@cdktf/provider-aws.opensearchserverlessSecurityPolicy.OpensearchserverlessSecurityPolicy.property.policy"></a>

```csharp
public string Policy { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-aws.opensearchserverlessSecurityPolicy.OpensearchserverlessSecurityPolicy.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.opensearchserverlessSecurityPolicy.OpensearchserverlessSecurityPolicy.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityPolicy.OpensearchserverlessSecurityPolicy.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.opensearchserverlessSecurityPolicy.OpensearchserverlessSecurityPolicy.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OpensearchserverlessSecurityPolicyConfig <a name="OpensearchserverlessSecurityPolicyConfig" id="@cdktf/provider-aws.opensearchserverlessSecurityPolicy.OpensearchserverlessSecurityPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opensearchserverlessSecurityPolicy.OpensearchserverlessSecurityPolicyConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new OpensearchserverlessSecurityPolicyConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    string Policy,
    string Type,
    string Description = null,
    string Region = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityPolicy.OpensearchserverlessSecurityPolicyConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityPolicy.OpensearchserverlessSecurityPolicyConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityPolicy.OpensearchserverlessSecurityPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityPolicy.OpensearchserverlessSecurityPolicyConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityPolicy.OpensearchserverlessSecurityPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityPolicy.OpensearchserverlessSecurityPolicyConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityPolicy.OpensearchserverlessSecurityPolicyConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityPolicy.OpensearchserverlessSecurityPolicyConfig.property.name">Name</a></code> | <code>string</code> | Name of the policy. |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityPolicy.OpensearchserverlessSecurityPolicyConfig.property.policy">Policy</a></code> | <code>string</code> | JSON policy document to use as the content for the new policy. |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityPolicy.OpensearchserverlessSecurityPolicyConfig.property.type">Type</a></code> | <code>string</code> | Type of security policy. One of `encryption` or `network`. |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityPolicy.OpensearchserverlessSecurityPolicyConfig.property.description">Description</a></code> | <code>string</code> | Description of the policy. Typically used to store information about the permissions defined in the policy. |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityPolicy.OpensearchserverlessSecurityPolicyConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.opensearchserverlessSecurityPolicy.OpensearchserverlessSecurityPolicyConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.opensearchserverlessSecurityPolicy.OpensearchserverlessSecurityPolicyConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.opensearchserverlessSecurityPolicy.OpensearchserverlessSecurityPolicyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.opensearchserverlessSecurityPolicy.OpensearchserverlessSecurityPolicyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.opensearchserverlessSecurityPolicy.OpensearchserverlessSecurityPolicyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.opensearchserverlessSecurityPolicy.OpensearchserverlessSecurityPolicyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.opensearchserverlessSecurityPolicy.OpensearchserverlessSecurityPolicyConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.opensearchserverlessSecurityPolicy.OpensearchserverlessSecurityPolicyConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/opensearchserverless_security_policy#name OpensearchserverlessSecurityPolicy#name}

---

##### `Policy`<sup>Required</sup> <a name="Policy" id="@cdktf/provider-aws.opensearchserverlessSecurityPolicy.OpensearchserverlessSecurityPolicyConfig.property.policy"></a>

```csharp
public string Policy { get; set; }
```

- *Type:* string

JSON policy document to use as the content for the new policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/opensearchserverless_security_policy#policy OpensearchserverlessSecurityPolicy#policy}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.opensearchserverlessSecurityPolicy.OpensearchserverlessSecurityPolicyConfig.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Type of security policy. One of `encryption` or `network`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/opensearchserverless_security_policy#type OpensearchserverlessSecurityPolicy#type}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-aws.opensearchserverlessSecurityPolicy.OpensearchserverlessSecurityPolicyConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Description of the policy. Typically used to store information about the permissions defined in the policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/opensearchserverless_security_policy#description OpensearchserverlessSecurityPolicy#description}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-aws.opensearchserverlessSecurityPolicy.OpensearchserverlessSecurityPolicyConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/opensearchserverless_security_policy#region OpensearchserverlessSecurityPolicy#region}

---



