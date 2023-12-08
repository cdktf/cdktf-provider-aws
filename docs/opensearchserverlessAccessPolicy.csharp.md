# `opensearchserverlessAccessPolicy` Submodule <a name="`opensearchserverlessAccessPolicy` Submodule" id="@cdktf/provider-aws.opensearchserverlessAccessPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OpensearchserverlessAccessPolicy <a name="OpensearchserverlessAccessPolicy" id="@cdktf/provider-aws.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/opensearchserverless_access_policy aws_opensearchserverless_access_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new OpensearchserverlessAccessPolicy(Construct Scope, string Id, OpensearchserverlessAccessPolicyConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicyConfig">OpensearchserverlessAccessPolicyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicyConfig">OpensearchserverlessAccessPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.resetDescription">ResetDescription</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-aws.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-aws.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.resetDescription"></a>

```csharp
private void ResetDescription()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a OpensearchserverlessAccessPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

OpensearchserverlessAccessPolicy.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

OpensearchserverlessAccessPolicy.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

OpensearchserverlessAccessPolicy.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

OpensearchserverlessAccessPolicy.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a OpensearchserverlessAccessPolicy resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-aws.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the OpensearchserverlessAccessPolicy to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-aws.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing OpensearchserverlessAccessPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/opensearchserverless_access_policy#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the OpensearchserverlessAccessPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.property.policyVersion">PolicyVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.property.policyInput">PolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.property.policy">Policy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.property.type">Type</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `PolicyVersion`<sup>Required</sup> <a name="PolicyVersion" id="@cdktf/provider-aws.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.property.policyVersion"></a>

```csharp
public string PolicyVersion { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-aws.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PolicyInput`<sup>Optional</sup> <a name="PolicyInput" id="@cdktf/provider-aws.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.property.policyInput"></a>

```csharp
public string PolicyInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-aws.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Policy`<sup>Required</sup> <a name="Policy" id="@cdktf/provider-aws.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.property.policy"></a>

```csharp
public string Policy { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OpensearchserverlessAccessPolicyConfig <a name="OpensearchserverlessAccessPolicyConfig" id="@cdktf/provider-aws.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicyConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new OpensearchserverlessAccessPolicyConfig {
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
    string Description = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicyConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicyConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicyConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicyConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicyConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicyConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/opensearchserverless_access_policy#name OpensearchserverlessAccessPolicy#name}. |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicyConfig.property.policy">Policy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/opensearchserverless_access_policy#policy OpensearchserverlessAccessPolicy#policy}. |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicyConfig.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/opensearchserverless_access_policy#type OpensearchserverlessAccessPolicy#type}. |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicyConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/opensearchserverless_access_policy#description OpensearchserverlessAccessPolicy#description}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicyConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicyConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicyConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicyConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/opensearchserverless_access_policy#name OpensearchserverlessAccessPolicy#name}.

---

##### `Policy`<sup>Required</sup> <a name="Policy" id="@cdktf/provider-aws.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicyConfig.property.policy"></a>

```csharp
public string Policy { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/opensearchserverless_access_policy#policy OpensearchserverlessAccessPolicy#policy}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicyConfig.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/opensearchserverless_access_policy#type OpensearchserverlessAccessPolicy#type}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-aws.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicyConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/opensearchserverless_access_policy#description OpensearchserverlessAccessPolicy#description}.

---



