# `securitylakeCustomLogSource` Submodule <a name="`securitylakeCustomLogSource` Submodule" id="@cdktf/provider-aws.securitylakeCustomLogSource"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecuritylakeCustomLogSource <a name="SecuritylakeCustomLogSource" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.69.0/docs/resources/securitylake_custom_log_source aws_securitylake_custom_log_source}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SecuritylakeCustomLogSource(Construct Scope, string Id, SecuritylakeCustomLogSourceConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfig">SecuritylakeCustomLogSourceConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfig">SecuritylakeCustomLogSourceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.putConfiguration">PutConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.resetConfiguration">ResetConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.resetEventClasses">ResetEventClasses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.resetSourceVersion">ResetSourceVersion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutConfiguration` <a name="PutConfiguration" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.putConfiguration"></a>

```csharp
private void PutConfiguration(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.putConfiguration.parameter.value"></a>

- *Type:* object

---

##### `ResetConfiguration` <a name="ResetConfiguration" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.resetConfiguration"></a>

```csharp
private void ResetConfiguration()
```

##### `ResetEventClasses` <a name="ResetEventClasses" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.resetEventClasses"></a>

```csharp
private void ResetEventClasses()
```

##### `ResetSourceVersion` <a name="ResetSourceVersion" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.resetSourceVersion"></a>

```csharp
private void ResetSourceVersion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a SecuritylakeCustomLogSource resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

SecuritylakeCustomLogSource.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

SecuritylakeCustomLogSource.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

SecuritylakeCustomLogSource.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

SecuritylakeCustomLogSource.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a SecuritylakeCustomLogSource resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SecuritylakeCustomLogSource to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SecuritylakeCustomLogSource that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.69.0/docs/resources/securitylake_custom_log_source#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the SecuritylakeCustomLogSource to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.property.attributes">Attributes</a></code> | <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesList">SecuritylakeCustomLogSourceAttributesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.property.configuration">Configuration</a></code> | <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationList">SecuritylakeCustomLogSourceConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.property.providerDetails">ProviderDetails</a></code> | <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsList">SecuritylakeCustomLogSourceProviderDetailsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.property.configurationInput">ConfigurationInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.property.eventClassesInput">EventClassesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.property.sourceNameInput">SourceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.property.sourceVersionInput">SourceVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.property.eventClasses">EventClasses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.property.sourceName">SourceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.property.sourceVersion">SourceVersion</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Attributes`<sup>Required</sup> <a name="Attributes" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.property.attributes"></a>

```csharp
public SecuritylakeCustomLogSourceAttributesList Attributes { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesList">SecuritylakeCustomLogSourceAttributesList</a>

---

##### `Configuration`<sup>Required</sup> <a name="Configuration" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.property.configuration"></a>

```csharp
public SecuritylakeCustomLogSourceConfigurationList Configuration { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationList">SecuritylakeCustomLogSourceConfigurationList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ProviderDetails`<sup>Required</sup> <a name="ProviderDetails" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.property.providerDetails"></a>

```csharp
public SecuritylakeCustomLogSourceProviderDetailsList ProviderDetails { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsList">SecuritylakeCustomLogSourceProviderDetailsList</a>

---

##### `ConfigurationInput`<sup>Optional</sup> <a name="ConfigurationInput" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.property.configurationInput"></a>

```csharp
public object ConfigurationInput { get; }
```

- *Type:* object

---

##### `EventClassesInput`<sup>Optional</sup> <a name="EventClassesInput" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.property.eventClassesInput"></a>

```csharp
public string[] EventClassesInput { get; }
```

- *Type:* string[]

---

##### `SourceNameInput`<sup>Optional</sup> <a name="SourceNameInput" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.property.sourceNameInput"></a>

```csharp
public string SourceNameInput { get; }
```

- *Type:* string

---

##### `SourceVersionInput`<sup>Optional</sup> <a name="SourceVersionInput" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.property.sourceVersionInput"></a>

```csharp
public string SourceVersionInput { get; }
```

- *Type:* string

---

##### `EventClasses`<sup>Required</sup> <a name="EventClasses" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.property.eventClasses"></a>

```csharp
public string[] EventClasses { get; }
```

- *Type:* string[]

---

##### `SourceName`<sup>Required</sup> <a name="SourceName" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.property.sourceName"></a>

```csharp
public string SourceName { get; }
```

- *Type:* string

---

##### `SourceVersion`<sup>Required</sup> <a name="SourceVersion" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.property.sourceVersion"></a>

```csharp
public string SourceVersion { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSource.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SecuritylakeCustomLogSourceAttributes <a name="SecuritylakeCustomLogSourceAttributes" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributes.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SecuritylakeCustomLogSourceAttributes {

};
```


### SecuritylakeCustomLogSourceConfig <a name="SecuritylakeCustomLogSourceConfig" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SecuritylakeCustomLogSourceConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string SourceName,
    object Configuration = null,
    string[] EventClasses = null,
    string SourceVersion = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfig.property.sourceName">SourceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.69.0/docs/resources/securitylake_custom_log_source#source_name SecuritylakeCustomLogSource#source_name}. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfig.property.configuration">Configuration</a></code> | <code>object</code> | configuration block. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfig.property.eventClasses">EventClasses</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.69.0/docs/resources/securitylake_custom_log_source#event_classes SecuritylakeCustomLogSource#event_classes}. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfig.property.sourceVersion">SourceVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.69.0/docs/resources/securitylake_custom_log_source#source_version SecuritylakeCustomLogSource#source_version}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `SourceName`<sup>Required</sup> <a name="SourceName" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfig.property.sourceName"></a>

```csharp
public string SourceName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.69.0/docs/resources/securitylake_custom_log_source#source_name SecuritylakeCustomLogSource#source_name}.

---

##### `Configuration`<sup>Optional</sup> <a name="Configuration" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfig.property.configuration"></a>

```csharp
public object Configuration { get; set; }
```

- *Type:* object

configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.69.0/docs/resources/securitylake_custom_log_source#configuration SecuritylakeCustomLogSource#configuration}

---

##### `EventClasses`<sup>Optional</sup> <a name="EventClasses" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfig.property.eventClasses"></a>

```csharp
public string[] EventClasses { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.69.0/docs/resources/securitylake_custom_log_source#event_classes SecuritylakeCustomLogSource#event_classes}.

---

##### `SourceVersion`<sup>Optional</sup> <a name="SourceVersion" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfig.property.sourceVersion"></a>

```csharp
public string SourceVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.69.0/docs/resources/securitylake_custom_log_source#source_version SecuritylakeCustomLogSource#source_version}.

---

### SecuritylakeCustomLogSourceConfiguration <a name="SecuritylakeCustomLogSourceConfiguration" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SecuritylakeCustomLogSourceConfiguration {
    object CrawlerConfiguration = null,
    object ProviderIdentity = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfiguration.property.crawlerConfiguration">CrawlerConfiguration</a></code> | <code>object</code> | crawler_configuration block. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfiguration.property.providerIdentity">ProviderIdentity</a></code> | <code>object</code> | provider_identity block. |

---

##### `CrawlerConfiguration`<sup>Optional</sup> <a name="CrawlerConfiguration" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfiguration.property.crawlerConfiguration"></a>

```csharp
public object CrawlerConfiguration { get; set; }
```

- *Type:* object

crawler_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.69.0/docs/resources/securitylake_custom_log_source#crawler_configuration SecuritylakeCustomLogSource#crawler_configuration}

---

##### `ProviderIdentity`<sup>Optional</sup> <a name="ProviderIdentity" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfiguration.property.providerIdentity"></a>

```csharp
public object ProviderIdentity { get; set; }
```

- *Type:* object

provider_identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.69.0/docs/resources/securitylake_custom_log_source#provider_identity SecuritylakeCustomLogSource#provider_identity}

---

### SecuritylakeCustomLogSourceConfigurationCrawlerConfiguration <a name="SecuritylakeCustomLogSourceConfigurationCrawlerConfiguration" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SecuritylakeCustomLogSourceConfigurationCrawlerConfiguration {
    string RoleArn
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfiguration.property.roleArn">RoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.69.0/docs/resources/securitylake_custom_log_source#role_arn SecuritylakeCustomLogSource#role_arn}. |

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfiguration.property.roleArn"></a>

```csharp
public string RoleArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.69.0/docs/resources/securitylake_custom_log_source#role_arn SecuritylakeCustomLogSource#role_arn}.

---

### SecuritylakeCustomLogSourceConfigurationProviderIdentity <a name="SecuritylakeCustomLogSourceConfigurationProviderIdentity" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentity.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SecuritylakeCustomLogSourceConfigurationProviderIdentity {
    string ExternalId,
    string Principal
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentity.property.externalId">ExternalId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.69.0/docs/resources/securitylake_custom_log_source#external_id SecuritylakeCustomLogSource#external_id}. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentity.property.principal">Principal</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.69.0/docs/resources/securitylake_custom_log_source#principal SecuritylakeCustomLogSource#principal}. |

---

##### `ExternalId`<sup>Required</sup> <a name="ExternalId" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentity.property.externalId"></a>

```csharp
public string ExternalId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.69.0/docs/resources/securitylake_custom_log_source#external_id SecuritylakeCustomLogSource#external_id}.

---

##### `Principal`<sup>Required</sup> <a name="Principal" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentity.property.principal"></a>

```csharp
public string Principal { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.69.0/docs/resources/securitylake_custom_log_source#principal SecuritylakeCustomLogSource#principal}.

---

### SecuritylakeCustomLogSourceProviderDetails <a name="SecuritylakeCustomLogSourceProviderDetails" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SecuritylakeCustomLogSourceProviderDetails {

};
```


## Classes <a name="Classes" id="Classes"></a>

### SecuritylakeCustomLogSourceAttributesList <a name="SecuritylakeCustomLogSourceAttributesList" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SecuritylakeCustomLogSourceAttributesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesList.get"></a>

```csharp
private SecuritylakeCustomLogSourceAttributesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### SecuritylakeCustomLogSourceAttributesOutputReference <a name="SecuritylakeCustomLogSourceAttributesOutputReference" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SecuritylakeCustomLogSourceAttributesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesOutputReference.property.crawlerArn">CrawlerArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesOutputReference.property.databaseArn">DatabaseArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesOutputReference.property.tableArn">TableArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributes">SecuritylakeCustomLogSourceAttributes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CrawlerArn`<sup>Required</sup> <a name="CrawlerArn" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesOutputReference.property.crawlerArn"></a>

```csharp
public string CrawlerArn { get; }
```

- *Type:* string

---

##### `DatabaseArn`<sup>Required</sup> <a name="DatabaseArn" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesOutputReference.property.databaseArn"></a>

```csharp
public string DatabaseArn { get; }
```

- *Type:* string

---

##### `TableArn`<sup>Required</sup> <a name="TableArn" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesOutputReference.property.tableArn"></a>

```csharp
public string TableArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributesOutputReference.property.internalValue"></a>

```csharp
public SecuritylakeCustomLogSourceAttributes InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceAttributes">SecuritylakeCustomLogSourceAttributes</a>

---


### SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationList <a name="SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationList" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationList.get"></a>

```csharp
private SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationOutputReference <a name="SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationOutputReference" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationOutputReference.property.roleArnInput">RoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationOutputReference.property.roleArn">RoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationOutputReference.property.roleArnInput"></a>

```csharp
public string RoleArnInput { get; }
```

- *Type:* string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationOutputReference.property.roleArn"></a>

```csharp
public string RoleArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SecuritylakeCustomLogSourceConfigurationList <a name="SecuritylakeCustomLogSourceConfigurationList" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SecuritylakeCustomLogSourceConfigurationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationList.get"></a>

```csharp
private SecuritylakeCustomLogSourceConfigurationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SecuritylakeCustomLogSourceConfigurationOutputReference <a name="SecuritylakeCustomLogSourceConfigurationOutputReference" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SecuritylakeCustomLogSourceConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.putCrawlerConfiguration">PutCrawlerConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.putProviderIdentity">PutProviderIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.resetCrawlerConfiguration">ResetCrawlerConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.resetProviderIdentity">ResetProviderIdentity</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCrawlerConfiguration` <a name="PutCrawlerConfiguration" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.putCrawlerConfiguration"></a>

```csharp
private void PutCrawlerConfiguration(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.putCrawlerConfiguration.parameter.value"></a>

- *Type:* object

---

##### `PutProviderIdentity` <a name="PutProviderIdentity" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.putProviderIdentity"></a>

```csharp
private void PutProviderIdentity(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.putProviderIdentity.parameter.value"></a>

- *Type:* object

---

##### `ResetCrawlerConfiguration` <a name="ResetCrawlerConfiguration" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.resetCrawlerConfiguration"></a>

```csharp
private void ResetCrawlerConfiguration()
```

##### `ResetProviderIdentity` <a name="ResetProviderIdentity" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.resetProviderIdentity"></a>

```csharp
private void ResetProviderIdentity()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.property.crawlerConfiguration">CrawlerConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationList">SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.property.providerIdentity">ProviderIdentity</a></code> | <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityList">SecuritylakeCustomLogSourceConfigurationProviderIdentityList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.property.crawlerConfigurationInput">CrawlerConfigurationInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.property.providerIdentityInput">ProviderIdentityInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CrawlerConfiguration`<sup>Required</sup> <a name="CrawlerConfiguration" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.property.crawlerConfiguration"></a>

```csharp
public SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationList CrawlerConfiguration { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationList">SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationList</a>

---

##### `ProviderIdentity`<sup>Required</sup> <a name="ProviderIdentity" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.property.providerIdentity"></a>

```csharp
public SecuritylakeCustomLogSourceConfigurationProviderIdentityList ProviderIdentity { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityList">SecuritylakeCustomLogSourceConfigurationProviderIdentityList</a>

---

##### `CrawlerConfigurationInput`<sup>Optional</sup> <a name="CrawlerConfigurationInput" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.property.crawlerConfigurationInput"></a>

```csharp
public object CrawlerConfigurationInput { get; }
```

- *Type:* object

---

##### `ProviderIdentityInput`<sup>Optional</sup> <a name="ProviderIdentityInput" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.property.providerIdentityInput"></a>

```csharp
public object ProviderIdentityInput { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SecuritylakeCustomLogSourceConfigurationProviderIdentityList <a name="SecuritylakeCustomLogSourceConfigurationProviderIdentityList" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SecuritylakeCustomLogSourceConfigurationProviderIdentityList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityList.get"></a>

```csharp
private SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference <a name="SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference.property.externalIdInput">ExternalIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference.property.principalInput">PrincipalInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference.property.externalId">ExternalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference.property.principal">Principal</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ExternalIdInput`<sup>Optional</sup> <a name="ExternalIdInput" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference.property.externalIdInput"></a>

```csharp
public string ExternalIdInput { get; }
```

- *Type:* string

---

##### `PrincipalInput`<sup>Optional</sup> <a name="PrincipalInput" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference.property.principalInput"></a>

```csharp
public string PrincipalInput { get; }
```

- *Type:* string

---

##### `ExternalId`<sup>Required</sup> <a name="ExternalId" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference.property.externalId"></a>

```csharp
public string ExternalId { get; }
```

- *Type:* string

---

##### `Principal`<sup>Required</sup> <a name="Principal" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference.property.principal"></a>

```csharp
public string Principal { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SecuritylakeCustomLogSourceProviderDetailsList <a name="SecuritylakeCustomLogSourceProviderDetailsList" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SecuritylakeCustomLogSourceProviderDetailsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsList.get"></a>

```csharp
private SecuritylakeCustomLogSourceProviderDetailsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### SecuritylakeCustomLogSourceProviderDetailsOutputReference <a name="SecuritylakeCustomLogSourceProviderDetailsOutputReference" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new SecuritylakeCustomLogSourceProviderDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsOutputReference.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsOutputReference.property.roleArn">RoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetails">SecuritylakeCustomLogSourceProviderDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsOutputReference.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsOutputReference.property.roleArn"></a>

```csharp
public string RoleArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetailsOutputReference.property.internalValue"></a>

```csharp
public SecuritylakeCustomLogSourceProviderDetails InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.securitylakeCustomLogSource.SecuritylakeCustomLogSourceProviderDetails">SecuritylakeCustomLogSourceProviderDetails</a>

---



