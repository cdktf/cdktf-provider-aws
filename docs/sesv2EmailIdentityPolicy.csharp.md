# `sesv2EmailIdentityPolicy` Submodule <a name="`sesv2EmailIdentityPolicy` Submodule" id="@cdktf/provider-aws.sesv2EmailIdentityPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Sesv2EmailIdentityPolicy <a name="Sesv2EmailIdentityPolicy" id="@cdktf/provider-aws.sesv2EmailIdentityPolicy.Sesv2EmailIdentityPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/sesv2_email_identity_policy aws_sesv2_email_identity_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sesv2EmailIdentityPolicy.Sesv2EmailIdentityPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Sesv2EmailIdentityPolicy(Construct Scope, string Id, Sesv2EmailIdentityPolicyConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityPolicy.Sesv2EmailIdentityPolicy.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityPolicy.Sesv2EmailIdentityPolicy.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityPolicy.Sesv2EmailIdentityPolicy.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityPolicy.Sesv2EmailIdentityPolicyConfig">Sesv2EmailIdentityPolicyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.sesv2EmailIdentityPolicy.Sesv2EmailIdentityPolicy.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.sesv2EmailIdentityPolicy.Sesv2EmailIdentityPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.sesv2EmailIdentityPolicy.Sesv2EmailIdentityPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.sesv2EmailIdentityPolicy.Sesv2EmailIdentityPolicyConfig">Sesv2EmailIdentityPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityPolicy.Sesv2EmailIdentityPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityPolicy.Sesv2EmailIdentityPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityPolicy.Sesv2EmailIdentityPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityPolicy.Sesv2EmailIdentityPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityPolicy.Sesv2EmailIdentityPolicy.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityPolicy.Sesv2EmailIdentityPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityPolicy.Sesv2EmailIdentityPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityPolicy.Sesv2EmailIdentityPolicy.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityPolicy.Sesv2EmailIdentityPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityPolicy.Sesv2EmailIdentityPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityPolicy.Sesv2EmailIdentityPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityPolicy.Sesv2EmailIdentityPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityPolicy.Sesv2EmailIdentityPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityPolicy.Sesv2EmailIdentityPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityPolicy.Sesv2EmailIdentityPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityPolicy.Sesv2EmailIdentityPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityPolicy.Sesv2EmailIdentityPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityPolicy.Sesv2EmailIdentityPolicy.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityPolicy.Sesv2EmailIdentityPolicy.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityPolicy.Sesv2EmailIdentityPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityPolicy.Sesv2EmailIdentityPolicy.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityPolicy.Sesv2EmailIdentityPolicy.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityPolicy.Sesv2EmailIdentityPolicy.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityPolicy.Sesv2EmailIdentityPolicy.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.sesv2EmailIdentityPolicy.Sesv2EmailIdentityPolicy.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.sesv2EmailIdentityPolicy.Sesv2EmailIdentityPolicy.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.sesv2EmailIdentityPolicy.Sesv2EmailIdentityPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.sesv2EmailIdentityPolicy.Sesv2EmailIdentityPolicy.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.sesv2EmailIdentityPolicy.Sesv2EmailIdentityPolicy.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.sesv2EmailIdentityPolicy.Sesv2EmailIdentityPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.sesv2EmailIdentityPolicy.Sesv2EmailIdentityPolicy.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.sesv2EmailIdentityPolicy.Sesv2EmailIdentityPolicy.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.sesv2EmailIdentityPolicy.Sesv2EmailIdentityPolicy.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.sesv2EmailIdentityPolicy.Sesv2EmailIdentityPolicy.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.sesv2EmailIdentityPolicy.Sesv2EmailIdentityPolicy.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.sesv2EmailIdentityPolicy.Sesv2EmailIdentityPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.sesv2EmailIdentityPolicy.Sesv2EmailIdentityPolicy.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesv2EmailIdentityPolicy.Sesv2EmailIdentityPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.sesv2EmailIdentityPolicy.Sesv2EmailIdentityPolicy.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesv2EmailIdentityPolicy.Sesv2EmailIdentityPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.sesv2EmailIdentityPolicy.Sesv2EmailIdentityPolicy.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesv2EmailIdentityPolicy.Sesv2EmailIdentityPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.sesv2EmailIdentityPolicy.Sesv2EmailIdentityPolicy.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesv2EmailIdentityPolicy.Sesv2EmailIdentityPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.sesv2EmailIdentityPolicy.Sesv2EmailIdentityPolicy.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesv2EmailIdentityPolicy.Sesv2EmailIdentityPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.sesv2EmailIdentityPolicy.Sesv2EmailIdentityPolicy.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesv2EmailIdentityPolicy.Sesv2EmailIdentityPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.sesv2EmailIdentityPolicy.Sesv2EmailIdentityPolicy.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesv2EmailIdentityPolicy.Sesv2EmailIdentityPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.sesv2EmailIdentityPolicy.Sesv2EmailIdentityPolicy.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesv2EmailIdentityPolicy.Sesv2EmailIdentityPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.sesv2EmailIdentityPolicy.Sesv2EmailIdentityPolicy.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesv2EmailIdentityPolicy.Sesv2EmailIdentityPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.sesv2EmailIdentityPolicy.Sesv2EmailIdentityPolicy.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.sesv2EmailIdentityPolicy.Sesv2EmailIdentityPolicy.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.sesv2EmailIdentityPolicy.Sesv2EmailIdentityPolicy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.sesv2EmailIdentityPolicy.Sesv2EmailIdentityPolicy.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.sesv2EmailIdentityPolicy.Sesv2EmailIdentityPolicy.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.sesv2EmailIdentityPolicy.Sesv2EmailIdentityPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.sesv2EmailIdentityPolicy.Sesv2EmailIdentityPolicy.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.sesv2EmailIdentityPolicy.Sesv2EmailIdentityPolicy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.sesv2EmailIdentityPolicy.Sesv2EmailIdentityPolicy.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.sesv2EmailIdentityPolicy.Sesv2EmailIdentityPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-aws.sesv2EmailIdentityPolicy.Sesv2EmailIdentityPolicy.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.sesv2EmailIdentityPolicy.Sesv2EmailIdentityPolicy.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.sesv2EmailIdentityPolicy.Sesv2EmailIdentityPolicy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.sesv2EmailIdentityPolicy.Sesv2EmailIdentityPolicy.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityPolicy.Sesv2EmailIdentityPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityPolicy.Sesv2EmailIdentityPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityPolicy.Sesv2EmailIdentityPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityPolicy.Sesv2EmailIdentityPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a Sesv2EmailIdentityPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.sesv2EmailIdentityPolicy.Sesv2EmailIdentityPolicy.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

Sesv2EmailIdentityPolicy.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.sesv2EmailIdentityPolicy.Sesv2EmailIdentityPolicy.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.sesv2EmailIdentityPolicy.Sesv2EmailIdentityPolicy.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

Sesv2EmailIdentityPolicy.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.sesv2EmailIdentityPolicy.Sesv2EmailIdentityPolicy.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.sesv2EmailIdentityPolicy.Sesv2EmailIdentityPolicy.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

Sesv2EmailIdentityPolicy.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.sesv2EmailIdentityPolicy.Sesv2EmailIdentityPolicy.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.sesv2EmailIdentityPolicy.Sesv2EmailIdentityPolicy.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

Sesv2EmailIdentityPolicy.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a Sesv2EmailIdentityPolicy resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.sesv2EmailIdentityPolicy.Sesv2EmailIdentityPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-aws.sesv2EmailIdentityPolicy.Sesv2EmailIdentityPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Sesv2EmailIdentityPolicy to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-aws.sesv2EmailIdentityPolicy.Sesv2EmailIdentityPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Sesv2EmailIdentityPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/sesv2_email_identity_policy#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.sesv2EmailIdentityPolicy.Sesv2EmailIdentityPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the Sesv2EmailIdentityPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityPolicy.Sesv2EmailIdentityPolicy.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityPolicy.Sesv2EmailIdentityPolicy.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityPolicy.Sesv2EmailIdentityPolicy.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityPolicy.Sesv2EmailIdentityPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityPolicy.Sesv2EmailIdentityPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityPolicy.Sesv2EmailIdentityPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityPolicy.Sesv2EmailIdentityPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityPolicy.Sesv2EmailIdentityPolicy.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityPolicy.Sesv2EmailIdentityPolicy.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityPolicy.Sesv2EmailIdentityPolicy.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityPolicy.Sesv2EmailIdentityPolicy.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityPolicy.Sesv2EmailIdentityPolicy.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityPolicy.Sesv2EmailIdentityPolicy.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityPolicy.Sesv2EmailIdentityPolicy.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityPolicy.Sesv2EmailIdentityPolicy.property.emailIdentityInput">EmailIdentityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityPolicy.Sesv2EmailIdentityPolicy.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityPolicy.Sesv2EmailIdentityPolicy.property.policyInput">PolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityPolicy.Sesv2EmailIdentityPolicy.property.policyNameInput">PolicyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityPolicy.Sesv2EmailIdentityPolicy.property.emailIdentity">EmailIdentity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityPolicy.Sesv2EmailIdentityPolicy.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityPolicy.Sesv2EmailIdentityPolicy.property.policy">Policy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityPolicy.Sesv2EmailIdentityPolicy.property.policyName">PolicyName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.sesv2EmailIdentityPolicy.Sesv2EmailIdentityPolicy.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.sesv2EmailIdentityPolicy.Sesv2EmailIdentityPolicy.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.sesv2EmailIdentityPolicy.Sesv2EmailIdentityPolicy.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.sesv2EmailIdentityPolicy.Sesv2EmailIdentityPolicy.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.sesv2EmailIdentityPolicy.Sesv2EmailIdentityPolicy.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.sesv2EmailIdentityPolicy.Sesv2EmailIdentityPolicy.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.sesv2EmailIdentityPolicy.Sesv2EmailIdentityPolicy.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.sesv2EmailIdentityPolicy.Sesv2EmailIdentityPolicy.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.sesv2EmailIdentityPolicy.Sesv2EmailIdentityPolicy.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.sesv2EmailIdentityPolicy.Sesv2EmailIdentityPolicy.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.sesv2EmailIdentityPolicy.Sesv2EmailIdentityPolicy.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.sesv2EmailIdentityPolicy.Sesv2EmailIdentityPolicy.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.sesv2EmailIdentityPolicy.Sesv2EmailIdentityPolicy.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.sesv2EmailIdentityPolicy.Sesv2EmailIdentityPolicy.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `EmailIdentityInput`<sup>Optional</sup> <a name="EmailIdentityInput" id="@cdktf/provider-aws.sesv2EmailIdentityPolicy.Sesv2EmailIdentityPolicy.property.emailIdentityInput"></a>

```csharp
public string EmailIdentityInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.sesv2EmailIdentityPolicy.Sesv2EmailIdentityPolicy.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `PolicyInput`<sup>Optional</sup> <a name="PolicyInput" id="@cdktf/provider-aws.sesv2EmailIdentityPolicy.Sesv2EmailIdentityPolicy.property.policyInput"></a>

```csharp
public string PolicyInput { get; }
```

- *Type:* string

---

##### `PolicyNameInput`<sup>Optional</sup> <a name="PolicyNameInput" id="@cdktf/provider-aws.sesv2EmailIdentityPolicy.Sesv2EmailIdentityPolicy.property.policyNameInput"></a>

```csharp
public string PolicyNameInput { get; }
```

- *Type:* string

---

##### `EmailIdentity`<sup>Required</sup> <a name="EmailIdentity" id="@cdktf/provider-aws.sesv2EmailIdentityPolicy.Sesv2EmailIdentityPolicy.property.emailIdentity"></a>

```csharp
public string EmailIdentity { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.sesv2EmailIdentityPolicy.Sesv2EmailIdentityPolicy.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Policy`<sup>Required</sup> <a name="Policy" id="@cdktf/provider-aws.sesv2EmailIdentityPolicy.Sesv2EmailIdentityPolicy.property.policy"></a>

```csharp
public string Policy { get; }
```

- *Type:* string

---

##### `PolicyName`<sup>Required</sup> <a name="PolicyName" id="@cdktf/provider-aws.sesv2EmailIdentityPolicy.Sesv2EmailIdentityPolicy.property.policyName"></a>

```csharp
public string PolicyName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityPolicy.Sesv2EmailIdentityPolicy.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.sesv2EmailIdentityPolicy.Sesv2EmailIdentityPolicy.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Sesv2EmailIdentityPolicyConfig <a name="Sesv2EmailIdentityPolicyConfig" id="@cdktf/provider-aws.sesv2EmailIdentityPolicy.Sesv2EmailIdentityPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sesv2EmailIdentityPolicy.Sesv2EmailIdentityPolicyConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new Sesv2EmailIdentityPolicyConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string EmailIdentity,
    string Policy,
    string PolicyName,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityPolicy.Sesv2EmailIdentityPolicyConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityPolicy.Sesv2EmailIdentityPolicyConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityPolicy.Sesv2EmailIdentityPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityPolicy.Sesv2EmailIdentityPolicyConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityPolicy.Sesv2EmailIdentityPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityPolicy.Sesv2EmailIdentityPolicyConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityPolicy.Sesv2EmailIdentityPolicyConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityPolicy.Sesv2EmailIdentityPolicyConfig.property.emailIdentity">EmailIdentity</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/sesv2_email_identity_policy#email_identity Sesv2EmailIdentityPolicy#email_identity}. |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityPolicy.Sesv2EmailIdentityPolicyConfig.property.policy">Policy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/sesv2_email_identity_policy#policy Sesv2EmailIdentityPolicy#policy}. |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityPolicy.Sesv2EmailIdentityPolicyConfig.property.policyName">PolicyName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/sesv2_email_identity_policy#policy_name Sesv2EmailIdentityPolicy#policy_name}. |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentityPolicy.Sesv2EmailIdentityPolicyConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/sesv2_email_identity_policy#id Sesv2EmailIdentityPolicy#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.sesv2EmailIdentityPolicy.Sesv2EmailIdentityPolicyConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.sesv2EmailIdentityPolicy.Sesv2EmailIdentityPolicyConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.sesv2EmailIdentityPolicy.Sesv2EmailIdentityPolicyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.sesv2EmailIdentityPolicy.Sesv2EmailIdentityPolicyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.sesv2EmailIdentityPolicy.Sesv2EmailIdentityPolicyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.sesv2EmailIdentityPolicy.Sesv2EmailIdentityPolicyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.sesv2EmailIdentityPolicy.Sesv2EmailIdentityPolicyConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `EmailIdentity`<sup>Required</sup> <a name="EmailIdentity" id="@cdktf/provider-aws.sesv2EmailIdentityPolicy.Sesv2EmailIdentityPolicyConfig.property.emailIdentity"></a>

```csharp
public string EmailIdentity { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/sesv2_email_identity_policy#email_identity Sesv2EmailIdentityPolicy#email_identity}.

---

##### `Policy`<sup>Required</sup> <a name="Policy" id="@cdktf/provider-aws.sesv2EmailIdentityPolicy.Sesv2EmailIdentityPolicyConfig.property.policy"></a>

```csharp
public string Policy { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/sesv2_email_identity_policy#policy Sesv2EmailIdentityPolicy#policy}.

---

##### `PolicyName`<sup>Required</sup> <a name="PolicyName" id="@cdktf/provider-aws.sesv2EmailIdentityPolicy.Sesv2EmailIdentityPolicyConfig.property.policyName"></a>

```csharp
public string PolicyName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/sesv2_email_identity_policy#policy_name Sesv2EmailIdentityPolicy#policy_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.sesv2EmailIdentityPolicy.Sesv2EmailIdentityPolicyConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/sesv2_email_identity_policy#id Sesv2EmailIdentityPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



