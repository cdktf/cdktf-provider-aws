# `athenaPreparedStatement` Submodule <a name="`athenaPreparedStatement` Submodule" id="@cdktf/provider-aws.athenaPreparedStatement"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AthenaPreparedStatement <a name="AthenaPreparedStatement" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/athena_prepared_statement aws_athena_prepared_statement}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AthenaPreparedStatement(Construct Scope, string Id, AthenaPreparedStatementConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatementConfig">AthenaPreparedStatementConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatementConfig">AthenaPreparedStatementConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.putTimeouts"></a>

```csharp
private void PutTimeouts(AthenaPreparedStatementTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatementTimeouts">AthenaPreparedStatementTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a AthenaPreparedStatement resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

AthenaPreparedStatement.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

AthenaPreparedStatement.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

AthenaPreparedStatement.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

AthenaPreparedStatement.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a AthenaPreparedStatement resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AthenaPreparedStatement to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AthenaPreparedStatement that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/athena_prepared_statement#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the AthenaPreparedStatement to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatementTimeoutsOutputReference">AthenaPreparedStatementTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.property.queryStatementInput">QueryStatementInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.property.workgroupInput">WorkgroupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.property.queryStatement">QueryStatement</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.property.workgroup">Workgroup</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.property.timeouts"></a>

```csharp
public AthenaPreparedStatementTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatementTimeoutsOutputReference">AthenaPreparedStatementTimeoutsOutputReference</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `QueryStatementInput`<sup>Optional</sup> <a name="QueryStatementInput" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.property.queryStatementInput"></a>

```csharp
public string QueryStatementInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `WorkgroupInput`<sup>Optional</sup> <a name="WorkgroupInput" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.property.workgroupInput"></a>

```csharp
public string WorkgroupInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `QueryStatement`<sup>Required</sup> <a name="QueryStatement" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.property.queryStatement"></a>

```csharp
public string QueryStatement { get; }
```

- *Type:* string

---

##### `Workgroup`<sup>Required</sup> <a name="Workgroup" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.property.workgroup"></a>

```csharp
public string Workgroup { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatement.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AthenaPreparedStatementConfig <a name="AthenaPreparedStatementConfig" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatementConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatementConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AthenaPreparedStatementConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    string QueryStatement,
    string Workgroup,
    string Description = null,
    string Id = null,
    AthenaPreparedStatementTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatementConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatementConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatementConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatementConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatementConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatementConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatementConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatementConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/athena_prepared_statement#name AthenaPreparedStatement#name}. |
| <code><a href="#@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatementConfig.property.queryStatement">QueryStatement</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/athena_prepared_statement#query_statement AthenaPreparedStatement#query_statement}. |
| <code><a href="#@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatementConfig.property.workgroup">Workgroup</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/athena_prepared_statement#workgroup AthenaPreparedStatement#workgroup}. |
| <code><a href="#@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatementConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/athena_prepared_statement#description AthenaPreparedStatement#description}. |
| <code><a href="#@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatementConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/athena_prepared_statement#id AthenaPreparedStatement#id}. |
| <code><a href="#@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatementConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatementTimeouts">AthenaPreparedStatementTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatementConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatementConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatementConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatementConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatementConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatementConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatementConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatementConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/athena_prepared_statement#name AthenaPreparedStatement#name}.

---

##### `QueryStatement`<sup>Required</sup> <a name="QueryStatement" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatementConfig.property.queryStatement"></a>

```csharp
public string QueryStatement { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/athena_prepared_statement#query_statement AthenaPreparedStatement#query_statement}.

---

##### `Workgroup`<sup>Required</sup> <a name="Workgroup" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatementConfig.property.workgroup"></a>

```csharp
public string Workgroup { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/athena_prepared_statement#workgroup AthenaPreparedStatement#workgroup}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatementConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/athena_prepared_statement#description AthenaPreparedStatement#description}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatementConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/athena_prepared_statement#id AthenaPreparedStatement#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatementConfig.property.timeouts"></a>

```csharp
public AthenaPreparedStatementTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatementTimeouts">AthenaPreparedStatementTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/athena_prepared_statement#timeouts AthenaPreparedStatement#timeouts}

---

### AthenaPreparedStatementTimeouts <a name="AthenaPreparedStatementTimeouts" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatementTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatementTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AthenaPreparedStatementTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatementTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/athena_prepared_statement#create AthenaPreparedStatement#create}. |
| <code><a href="#@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatementTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/athena_prepared_statement#delete AthenaPreparedStatement#delete}. |
| <code><a href="#@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatementTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/athena_prepared_statement#update AthenaPreparedStatement#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatementTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/athena_prepared_statement#create AthenaPreparedStatement#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatementTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/athena_prepared_statement#delete AthenaPreparedStatement#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatementTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/resources/athena_prepared_statement#update AthenaPreparedStatement#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### AthenaPreparedStatementTimeoutsOutputReference <a name="AthenaPreparedStatementTimeoutsOutputReference" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatementTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatementTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new AthenaPreparedStatementTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatementTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatementTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatementTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatementTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatementTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatementTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatementTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatementTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatementTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatementTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatementTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatementTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatementTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatementTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatementTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatementTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatementTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatementTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatementTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatementTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatementTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatementTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatementTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatementTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatementTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatementTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatementTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatementTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatementTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatementTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatementTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatementTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatementTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatementTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatementTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatementTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatementTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatementTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatementTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatementTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatementTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatementTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatementTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatementTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatementTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatementTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatementTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatementTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatementTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatementTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatementTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatementTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatementTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatementTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatementTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatementTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatementTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatementTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatementTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatementTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatementTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatementTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatementTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatementTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.athenaPreparedStatement.AthenaPreparedStatementTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



