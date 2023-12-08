# `securitylakeDataLake` Submodule <a name="`securitylakeDataLake` Submodule" id="@cdktf/provider-aws.securitylakeDataLake"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecuritylakeDataLake <a name="SecuritylakeDataLake" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/securitylake_data_lake aws_securitylake_data_lake}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SecuritylakeDataLake(Construct Scope, string Id, SecuritylakeDataLakeConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfig">SecuritylakeDataLakeConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfig">SecuritylakeDataLakeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.putConfiguration">PutConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.resetConfiguration">ResetConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutConfiguration` <a name="PutConfiguration" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.putConfiguration"></a>

```csharp
private void PutConfiguration(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.putConfiguration.parameter.value"></a>

- *Type:* object

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.putTimeouts"></a>

```csharp
private void PutTimeouts(SecuritylakeDataLakeTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeTimeouts">SecuritylakeDataLakeTimeouts</a>

---

##### `ResetConfiguration` <a name="ResetConfiguration" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.resetConfiguration"></a>

```csharp
private void ResetConfiguration()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a SecuritylakeDataLake resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

SecuritylakeDataLake.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

SecuritylakeDataLake.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

SecuritylakeDataLake.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

SecuritylakeDataLake.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a SecuritylakeDataLake resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SecuritylakeDataLake to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SecuritylakeDataLake that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/securitylake_data_lake#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the SecuritylakeDataLake to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.property.configuration">Configuration</a></code> | <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationList">SecuritylakeDataLakeConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.property.s3BucketArn">S3BucketArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.property.tagsAll">TagsAll</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeTimeoutsOutputReference">SecuritylakeDataLakeTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.property.configurationInput">ConfigurationInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.property.metaStoreManagerRoleArnInput">MetaStoreManagerRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.property.metaStoreManagerRoleArn">MetaStoreManagerRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `Configuration`<sup>Required</sup> <a name="Configuration" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.property.configuration"></a>

```csharp
public SecuritylakeDataLakeConfigurationList Configuration { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationList">SecuritylakeDataLakeConfigurationList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `S3BucketArn`<sup>Required</sup> <a name="S3BucketArn" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.property.s3BucketArn"></a>

```csharp
public string S3BucketArn { get; }
```

- *Type:* string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.property.tagsAll"></a>

```csharp
public StringMap TagsAll { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.property.timeouts"></a>

```csharp
public SecuritylakeDataLakeTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeTimeoutsOutputReference">SecuritylakeDataLakeTimeoutsOutputReference</a>

---

##### `ConfigurationInput`<sup>Optional</sup> <a name="ConfigurationInput" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.property.configurationInput"></a>

```csharp
public object ConfigurationInput { get; }
```

- *Type:* object

---

##### `MetaStoreManagerRoleArnInput`<sup>Optional</sup> <a name="MetaStoreManagerRoleArnInput" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.property.metaStoreManagerRoleArnInput"></a>

```csharp
public string MetaStoreManagerRoleArnInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `MetaStoreManagerRoleArn`<sup>Required</sup> <a name="MetaStoreManagerRoleArn" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.property.metaStoreManagerRoleArn"></a>

```csharp
public string MetaStoreManagerRoleArn { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLake.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SecuritylakeDataLakeConfig <a name="SecuritylakeDataLakeConfig" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SecuritylakeDataLakeConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string MetaStoreManagerRoleArn,
    object Configuration = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    SecuritylakeDataLakeTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfig.property.metaStoreManagerRoleArn">MetaStoreManagerRoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/securitylake_data_lake#meta_store_manager_role_arn SecuritylakeDataLake#meta_store_manager_role_arn}. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfig.property.configuration">Configuration</a></code> | <code>object</code> | configuration block. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/securitylake_data_lake#tags SecuritylakeDataLake#tags}. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeTimeouts">SecuritylakeDataLakeTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `MetaStoreManagerRoleArn`<sup>Required</sup> <a name="MetaStoreManagerRoleArn" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfig.property.metaStoreManagerRoleArn"></a>

```csharp
public string MetaStoreManagerRoleArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/securitylake_data_lake#meta_store_manager_role_arn SecuritylakeDataLake#meta_store_manager_role_arn}.

---

##### `Configuration`<sup>Optional</sup> <a name="Configuration" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfig.property.configuration"></a>

```csharp
public object Configuration { get; set; }
```

- *Type:* object

configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/securitylake_data_lake#configuration SecuritylakeDataLake#configuration}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/securitylake_data_lake#tags SecuritylakeDataLake#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfig.property.timeouts"></a>

```csharp
public SecuritylakeDataLakeTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeTimeouts">SecuritylakeDataLakeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/securitylake_data_lake#timeouts SecuritylakeDataLake#timeouts}

---

### SecuritylakeDataLakeConfiguration <a name="SecuritylakeDataLakeConfiguration" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SecuritylakeDataLakeConfiguration {
    string Region,
    object EncryptionConfiguration = null,
    object LifecycleConfiguration = null,
    object ReplicationConfiguration = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfiguration.property.region">Region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/securitylake_data_lake#region SecuritylakeDataLake#region}. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfiguration.property.encryptionConfiguration">EncryptionConfiguration</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/securitylake_data_lake#encryption_configuration SecuritylakeDataLake#encryption_configuration}. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfiguration.property.lifecycleConfiguration">LifecycleConfiguration</a></code> | <code>object</code> | lifecycle_configuration block. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfiguration.property.replicationConfiguration">ReplicationConfiguration</a></code> | <code>object</code> | replication_configuration block. |

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfiguration.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/securitylake_data_lake#region SecuritylakeDataLake#region}.

---

##### `EncryptionConfiguration`<sup>Optional</sup> <a name="EncryptionConfiguration" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfiguration.property.encryptionConfiguration"></a>

```csharp
public object EncryptionConfiguration { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/securitylake_data_lake#encryption_configuration SecuritylakeDataLake#encryption_configuration}.

---

##### `LifecycleConfiguration`<sup>Optional</sup> <a name="LifecycleConfiguration" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfiguration.property.lifecycleConfiguration"></a>

```csharp
public object LifecycleConfiguration { get; set; }
```

- *Type:* object

lifecycle_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/securitylake_data_lake#lifecycle_configuration SecuritylakeDataLake#lifecycle_configuration}

---

##### `ReplicationConfiguration`<sup>Optional</sup> <a name="ReplicationConfiguration" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfiguration.property.replicationConfiguration"></a>

```csharp
public object ReplicationConfiguration { get; set; }
```

- *Type:* object

replication_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/securitylake_data_lake#replication_configuration SecuritylakeDataLake#replication_configuration}

---

### SecuritylakeDataLakeConfigurationEncryptionConfiguration <a name="SecuritylakeDataLakeConfigurationEncryptionConfiguration" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SecuritylakeDataLakeConfigurationEncryptionConfiguration {
    string KmsKeyId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfiguration.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/securitylake_data_lake#kms_key_id SecuritylakeDataLake#kms_key_id}. |

---

##### `KmsKeyId`<sup>Optional</sup> <a name="KmsKeyId" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfiguration.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/securitylake_data_lake#kms_key_id SecuritylakeDataLake#kms_key_id}.

---

### SecuritylakeDataLakeConfigurationLifecycleConfiguration <a name="SecuritylakeDataLakeConfigurationLifecycleConfiguration" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SecuritylakeDataLakeConfigurationLifecycleConfiguration {
    object Expiration = null,
    object Transition = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfiguration.property.expiration">Expiration</a></code> | <code>object</code> | expiration block. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfiguration.property.transition">Transition</a></code> | <code>object</code> | transition block. |

---

##### `Expiration`<sup>Optional</sup> <a name="Expiration" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfiguration.property.expiration"></a>

```csharp
public object Expiration { get; set; }
```

- *Type:* object

expiration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/securitylake_data_lake#expiration SecuritylakeDataLake#expiration}

---

##### `Transition`<sup>Optional</sup> <a name="Transition" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfiguration.property.transition"></a>

```csharp
public object Transition { get; set; }
```

- *Type:* object

transition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/securitylake_data_lake#transition SecuritylakeDataLake#transition}

---

### SecuritylakeDataLakeConfigurationLifecycleConfigurationExpiration <a name="SecuritylakeDataLakeConfigurationLifecycleConfigurationExpiration" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpiration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpiration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SecuritylakeDataLakeConfigurationLifecycleConfigurationExpiration {
    double Days = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpiration.property.days">Days</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/securitylake_data_lake#days SecuritylakeDataLake#days}. |

---

##### `Days`<sup>Optional</sup> <a name="Days" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpiration.property.days"></a>

```csharp
public double Days { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/securitylake_data_lake#days SecuritylakeDataLake#days}.

---

### SecuritylakeDataLakeConfigurationLifecycleConfigurationTransition <a name="SecuritylakeDataLakeConfigurationLifecycleConfigurationTransition" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransition.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SecuritylakeDataLakeConfigurationLifecycleConfigurationTransition {
    double Days = null,
    string StorageClass = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransition.property.days">Days</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/securitylake_data_lake#days SecuritylakeDataLake#days}. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransition.property.storageClass">StorageClass</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/securitylake_data_lake#storage_class SecuritylakeDataLake#storage_class}. |

---

##### `Days`<sup>Optional</sup> <a name="Days" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransition.property.days"></a>

```csharp
public double Days { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/securitylake_data_lake#days SecuritylakeDataLake#days}.

---

##### `StorageClass`<sup>Optional</sup> <a name="StorageClass" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransition.property.storageClass"></a>

```csharp
public string StorageClass { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/securitylake_data_lake#storage_class SecuritylakeDataLake#storage_class}.

---

### SecuritylakeDataLakeConfigurationReplicationConfiguration <a name="SecuritylakeDataLakeConfigurationReplicationConfiguration" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SecuritylakeDataLakeConfigurationReplicationConfiguration {
    string[] Regions = null,
    string RoleArn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfiguration.property.regions">Regions</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/securitylake_data_lake#regions SecuritylakeDataLake#regions}. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfiguration.property.roleArn">RoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/securitylake_data_lake#role_arn SecuritylakeDataLake#role_arn}. |

---

##### `Regions`<sup>Optional</sup> <a name="Regions" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfiguration.property.regions"></a>

```csharp
public string[] Regions { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/securitylake_data_lake#regions SecuritylakeDataLake#regions}.

---

##### `RoleArn`<sup>Optional</sup> <a name="RoleArn" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfiguration.property.roleArn"></a>

```csharp
public string RoleArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/securitylake_data_lake#role_arn SecuritylakeDataLake#role_arn}.

---

### SecuritylakeDataLakeTimeouts <a name="SecuritylakeDataLakeTimeouts" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SecuritylakeDataLakeTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeTimeouts.property.create">Create</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeTimeouts.property.delete">Delete</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeTimeouts.property.update">Update</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/securitylake_data_lake#create SecuritylakeDataLake#create}

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/securitylake_data_lake#delete SecuritylakeDataLake#delete}

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/securitylake_data_lake#update SecuritylakeDataLake#update}

---

## Classes <a name="Classes" id="Classes"></a>

### SecuritylakeDataLakeConfigurationEncryptionConfigurationList <a name="SecuritylakeDataLakeConfigurationEncryptionConfigurationList" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SecuritylakeDataLakeConfigurationEncryptionConfigurationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationList.get"></a>

```csharp
private SecuritylakeDataLakeConfigurationEncryptionConfigurationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SecuritylakeDataLakeConfigurationEncryptionConfigurationOutputReference <a name="SecuritylakeDataLakeConfigurationEncryptionConfigurationOutputReference" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SecuritylakeDataLakeConfigurationEncryptionConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationOutputReference.resetKmsKeyId">ResetKmsKeyId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKmsKeyId` <a name="ResetKmsKeyId" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationOutputReference.resetKmsKeyId"></a>

```csharp
private void ResetKmsKeyId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationOutputReference.property.kmsKeyIdInput">KmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationOutputReference.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KmsKeyIdInput`<sup>Optional</sup> <a name="KmsKeyIdInput" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationOutputReference.property.kmsKeyIdInput"></a>

```csharp
public string KmsKeyIdInput { get; }
```

- *Type:* string

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationOutputReference.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationList <a name="SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationList" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationList.get"></a>

```csharp
private SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationOutputReference <a name="SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationOutputReference" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationOutputReference.resetDays">ResetDays</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDays` <a name="ResetDays" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationOutputReference.resetDays"></a>

```csharp
private void ResetDays()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationOutputReference.property.daysInput">DaysInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationOutputReference.property.days">Days</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DaysInput`<sup>Optional</sup> <a name="DaysInput" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationOutputReference.property.daysInput"></a>

```csharp
public double DaysInput { get; }
```

- *Type:* double

---

##### `Days`<sup>Required</sup> <a name="Days" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationOutputReference.property.days"></a>

```csharp
public double Days { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SecuritylakeDataLakeConfigurationLifecycleConfigurationList <a name="SecuritylakeDataLakeConfigurationLifecycleConfigurationList" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SecuritylakeDataLakeConfigurationLifecycleConfigurationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationList.get"></a>

```csharp
private SecuritylakeDataLakeConfigurationLifecycleConfigurationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SecuritylakeDataLakeConfigurationLifecycleConfigurationOutputReference <a name="SecuritylakeDataLakeConfigurationLifecycleConfigurationOutputReference" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SecuritylakeDataLakeConfigurationLifecycleConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationOutputReference.putExpiration">PutExpiration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationOutputReference.putTransition">PutTransition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationOutputReference.resetExpiration">ResetExpiration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationOutputReference.resetTransition">ResetTransition</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutExpiration` <a name="PutExpiration" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationOutputReference.putExpiration"></a>

```csharp
private void PutExpiration(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationOutputReference.putExpiration.parameter.value"></a>

- *Type:* object

---

##### `PutTransition` <a name="PutTransition" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationOutputReference.putTransition"></a>

```csharp
private void PutTransition(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationOutputReference.putTransition.parameter.value"></a>

- *Type:* object

---

##### `ResetExpiration` <a name="ResetExpiration" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationOutputReference.resetExpiration"></a>

```csharp
private void ResetExpiration()
```

##### `ResetTransition` <a name="ResetTransition" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationOutputReference.resetTransition"></a>

```csharp
private void ResetTransition()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationOutputReference.property.expiration">Expiration</a></code> | <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationList">SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationOutputReference.property.transition">Transition</a></code> | <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionList">SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationOutputReference.property.expirationInput">ExpirationInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationOutputReference.property.transitionInput">TransitionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Expiration`<sup>Required</sup> <a name="Expiration" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationOutputReference.property.expiration"></a>

```csharp
public SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationList Expiration { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationList">SecuritylakeDataLakeConfigurationLifecycleConfigurationExpirationList</a>

---

##### `Transition`<sup>Required</sup> <a name="Transition" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationOutputReference.property.transition"></a>

```csharp
public SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionList Transition { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionList">SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionList</a>

---

##### `ExpirationInput`<sup>Optional</sup> <a name="ExpirationInput" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationOutputReference.property.expirationInput"></a>

```csharp
public object ExpirationInput { get; }
```

- *Type:* object

---

##### `TransitionInput`<sup>Optional</sup> <a name="TransitionInput" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationOutputReference.property.transitionInput"></a>

```csharp
public object TransitionInput { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionList <a name="SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionList" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionList.get"></a>

```csharp
private SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionOutputReference <a name="SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionOutputReference" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionOutputReference.resetDays">ResetDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionOutputReference.resetStorageClass">ResetStorageClass</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDays` <a name="ResetDays" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionOutputReference.resetDays"></a>

```csharp
private void ResetDays()
```

##### `ResetStorageClass` <a name="ResetStorageClass" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionOutputReference.resetStorageClass"></a>

```csharp
private void ResetStorageClass()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionOutputReference.property.daysInput">DaysInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionOutputReference.property.storageClassInput">StorageClassInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionOutputReference.property.days">Days</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionOutputReference.property.storageClass">StorageClass</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DaysInput`<sup>Optional</sup> <a name="DaysInput" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionOutputReference.property.daysInput"></a>

```csharp
public double DaysInput { get; }
```

- *Type:* double

---

##### `StorageClassInput`<sup>Optional</sup> <a name="StorageClassInput" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionOutputReference.property.storageClassInput"></a>

```csharp
public string StorageClassInput { get; }
```

- *Type:* string

---

##### `Days`<sup>Required</sup> <a name="Days" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionOutputReference.property.days"></a>

```csharp
public double Days { get; }
```

- *Type:* double

---

##### `StorageClass`<sup>Required</sup> <a name="StorageClass" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionOutputReference.property.storageClass"></a>

```csharp
public string StorageClass { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationTransitionOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SecuritylakeDataLakeConfigurationList <a name="SecuritylakeDataLakeConfigurationList" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SecuritylakeDataLakeConfigurationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationList.get"></a>

```csharp
private SecuritylakeDataLakeConfigurationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SecuritylakeDataLakeConfigurationOutputReference <a name="SecuritylakeDataLakeConfigurationOutputReference" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SecuritylakeDataLakeConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference.putEncryptionConfiguration">PutEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference.putLifecycleConfiguration">PutLifecycleConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference.putReplicationConfiguration">PutReplicationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference.resetEncryptionConfiguration">ResetEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference.resetLifecycleConfiguration">ResetLifecycleConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference.resetReplicationConfiguration">ResetReplicationConfiguration</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEncryptionConfiguration` <a name="PutEncryptionConfiguration" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference.putEncryptionConfiguration"></a>

```csharp
private void PutEncryptionConfiguration(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference.putEncryptionConfiguration.parameter.value"></a>

- *Type:* object

---

##### `PutLifecycleConfiguration` <a name="PutLifecycleConfiguration" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference.putLifecycleConfiguration"></a>

```csharp
private void PutLifecycleConfiguration(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference.putLifecycleConfiguration.parameter.value"></a>

- *Type:* object

---

##### `PutReplicationConfiguration` <a name="PutReplicationConfiguration" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference.putReplicationConfiguration"></a>

```csharp
private void PutReplicationConfiguration(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference.putReplicationConfiguration.parameter.value"></a>

- *Type:* object

---

##### `ResetEncryptionConfiguration` <a name="ResetEncryptionConfiguration" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference.resetEncryptionConfiguration"></a>

```csharp
private void ResetEncryptionConfiguration()
```

##### `ResetLifecycleConfiguration` <a name="ResetLifecycleConfiguration" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference.resetLifecycleConfiguration"></a>

```csharp
private void ResetLifecycleConfiguration()
```

##### `ResetReplicationConfiguration` <a name="ResetReplicationConfiguration" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference.resetReplicationConfiguration"></a>

```csharp
private void ResetReplicationConfiguration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference.property.encryptionConfiguration">EncryptionConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationList">SecuritylakeDataLakeConfigurationEncryptionConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference.property.lifecycleConfiguration">LifecycleConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationList">SecuritylakeDataLakeConfigurationLifecycleConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference.property.replicationConfiguration">ReplicationConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationList">SecuritylakeDataLakeConfigurationReplicationConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference.property.encryptionConfigurationInput">EncryptionConfigurationInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference.property.lifecycleConfigurationInput">LifecycleConfigurationInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference.property.replicationConfigurationInput">ReplicationConfigurationInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EncryptionConfiguration`<sup>Required</sup> <a name="EncryptionConfiguration" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference.property.encryptionConfiguration"></a>

```csharp
public SecuritylakeDataLakeConfigurationEncryptionConfigurationList EncryptionConfiguration { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationEncryptionConfigurationList">SecuritylakeDataLakeConfigurationEncryptionConfigurationList</a>

---

##### `LifecycleConfiguration`<sup>Required</sup> <a name="LifecycleConfiguration" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference.property.lifecycleConfiguration"></a>

```csharp
public SecuritylakeDataLakeConfigurationLifecycleConfigurationList LifecycleConfiguration { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationLifecycleConfigurationList">SecuritylakeDataLakeConfigurationLifecycleConfigurationList</a>

---

##### `ReplicationConfiguration`<sup>Required</sup> <a name="ReplicationConfiguration" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference.property.replicationConfiguration"></a>

```csharp
public SecuritylakeDataLakeConfigurationReplicationConfigurationList ReplicationConfiguration { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationList">SecuritylakeDataLakeConfigurationReplicationConfigurationList</a>

---

##### `EncryptionConfigurationInput`<sup>Optional</sup> <a name="EncryptionConfigurationInput" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference.property.encryptionConfigurationInput"></a>

```csharp
public object EncryptionConfigurationInput { get; }
```

- *Type:* object

---

##### `LifecycleConfigurationInput`<sup>Optional</sup> <a name="LifecycleConfigurationInput" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference.property.lifecycleConfigurationInput"></a>

```csharp
public object LifecycleConfigurationInput { get; }
```

- *Type:* object

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `ReplicationConfigurationInput`<sup>Optional</sup> <a name="ReplicationConfigurationInput" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference.property.replicationConfigurationInput"></a>

```csharp
public object ReplicationConfigurationInput { get; }
```

- *Type:* object

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SecuritylakeDataLakeConfigurationReplicationConfigurationList <a name="SecuritylakeDataLakeConfigurationReplicationConfigurationList" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SecuritylakeDataLakeConfigurationReplicationConfigurationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationList.get"></a>

```csharp
private SecuritylakeDataLakeConfigurationReplicationConfigurationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SecuritylakeDataLakeConfigurationReplicationConfigurationOutputReference <a name="SecuritylakeDataLakeConfigurationReplicationConfigurationOutputReference" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SecuritylakeDataLakeConfigurationReplicationConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationOutputReference.resetRegions">ResetRegions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationOutputReference.resetRoleArn">ResetRoleArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegions` <a name="ResetRegions" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationOutputReference.resetRegions"></a>

```csharp
private void ResetRegions()
```

##### `ResetRoleArn` <a name="ResetRoleArn" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationOutputReference.resetRoleArn"></a>

```csharp
private void ResetRoleArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationOutputReference.property.regionsInput">RegionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationOutputReference.property.roleArnInput">RoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationOutputReference.property.regions">Regions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationOutputReference.property.roleArn">RoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RegionsInput`<sup>Optional</sup> <a name="RegionsInput" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationOutputReference.property.regionsInput"></a>

```csharp
public string[] RegionsInput { get; }
```

- *Type:* string[]

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationOutputReference.property.roleArnInput"></a>

```csharp
public string RoleArnInput { get; }
```

- *Type:* string

---

##### `Regions`<sup>Required</sup> <a name="Regions" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationOutputReference.property.regions"></a>

```csharp
public string[] Regions { get; }
```

- *Type:* string[]

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationOutputReference.property.roleArn"></a>

```csharp
public string RoleArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeConfigurationReplicationConfigurationOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SecuritylakeDataLakeTimeoutsOutputReference <a name="SecuritylakeDataLakeTimeoutsOutputReference" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SecuritylakeDataLakeTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.securitylakeDataLake.SecuritylakeDataLakeTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



