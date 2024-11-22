# `opensearchserverlessSecurityConfig` Submodule <a name="`opensearchserverlessSecurityConfig` Submodule" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OpensearchserverlessSecurityConfig <a name="OpensearchserverlessSecurityConfig" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/opensearchserverless_security_config aws_opensearchserverless_security_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new OpensearchserverlessSecurityConfig(Construct Scope, string Id, OpensearchserverlessSecurityConfigConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigConfig">OpensearchserverlessSecurityConfigConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigConfig">OpensearchserverlessSecurityConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.putSamlOptions">PutSamlOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.resetSamlOptions">ResetSamlOptions</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutSamlOptions` <a name="PutSamlOptions" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.putSamlOptions"></a>

```csharp
private void PutSamlOptions(OpensearchserverlessSecurityConfigSamlOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.putSamlOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptions">OpensearchserverlessSecurityConfigSamlOptions</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetSamlOptions` <a name="ResetSamlOptions" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.resetSamlOptions"></a>

```csharp
private void ResetSamlOptions()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a OpensearchserverlessSecurityConfig resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

OpensearchserverlessSecurityConfig.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

OpensearchserverlessSecurityConfig.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

OpensearchserverlessSecurityConfig.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

OpensearchserverlessSecurityConfig.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a OpensearchserverlessSecurityConfig resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the OpensearchserverlessSecurityConfig to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing OpensearchserverlessSecurityConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/opensearchserverless_security_config#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the OpensearchserverlessSecurityConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.configVersion">ConfigVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.samlOptions">SamlOptions</a></code> | <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference">OpensearchserverlessSecurityConfigSamlOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.samlOptionsInput">SamlOptionsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.type">Type</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `ConfigVersion`<sup>Required</sup> <a name="ConfigVersion" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.configVersion"></a>

```csharp
public string ConfigVersion { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `SamlOptions`<sup>Required</sup> <a name="SamlOptions" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.samlOptions"></a>

```csharp
public OpensearchserverlessSecurityConfigSamlOptionsOutputReference SamlOptions { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference">OpensearchserverlessSecurityConfigSamlOptionsOutputReference</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `SamlOptionsInput`<sup>Optional</sup> <a name="SamlOptionsInput" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.samlOptionsInput"></a>

```csharp
public object SamlOptionsInput { get; }
```

- *Type:* object

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfig.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OpensearchserverlessSecurityConfigConfig <a name="OpensearchserverlessSecurityConfigConfig" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new OpensearchserverlessSecurityConfigConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    string Type,
    string Description = null,
    OpensearchserverlessSecurityConfigSamlOptions SamlOptions = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/opensearchserverless_security_config#name OpensearchserverlessSecurityConfig#name}. |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigConfig.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/opensearchserverless_security_config#type OpensearchserverlessSecurityConfig#type}. |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/opensearchserverless_security_config#description OpensearchserverlessSecurityConfig#description}. |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigConfig.property.samlOptions">SamlOptions</a></code> | <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptions">OpensearchserverlessSecurityConfigSamlOptions</a></code> | saml_options block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/opensearchserverless_security_config#name OpensearchserverlessSecurityConfig#name}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigConfig.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/opensearchserverless_security_config#type OpensearchserverlessSecurityConfig#type}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/opensearchserverless_security_config#description OpensearchserverlessSecurityConfig#description}.

---

##### `SamlOptions`<sup>Optional</sup> <a name="SamlOptions" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigConfig.property.samlOptions"></a>

```csharp
public OpensearchserverlessSecurityConfigSamlOptions SamlOptions { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptions">OpensearchserverlessSecurityConfigSamlOptions</a>

saml_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/opensearchserverless_security_config#saml_options OpensearchserverlessSecurityConfig#saml_options}

---

### OpensearchserverlessSecurityConfigSamlOptions <a name="OpensearchserverlessSecurityConfigSamlOptions" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new OpensearchserverlessSecurityConfigSamlOptions {
    string Metadata,
    string GroupAttribute = null,
    double SessionTimeout = null,
    string UserAttribute = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptions.property.metadata">Metadata</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/opensearchserverless_security_config#metadata OpensearchserverlessSecurityConfig#metadata}. |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptions.property.groupAttribute">GroupAttribute</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/opensearchserverless_security_config#group_attribute OpensearchserverlessSecurityConfig#group_attribute}. |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptions.property.sessionTimeout">SessionTimeout</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/opensearchserverless_security_config#session_timeout OpensearchserverlessSecurityConfig#session_timeout}. |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptions.property.userAttribute">UserAttribute</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/opensearchserverless_security_config#user_attribute OpensearchserverlessSecurityConfig#user_attribute}. |

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptions.property.metadata"></a>

```csharp
public string Metadata { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/opensearchserverless_security_config#metadata OpensearchserverlessSecurityConfig#metadata}.

---

##### `GroupAttribute`<sup>Optional</sup> <a name="GroupAttribute" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptions.property.groupAttribute"></a>

```csharp
public string GroupAttribute { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/opensearchserverless_security_config#group_attribute OpensearchserverlessSecurityConfig#group_attribute}.

---

##### `SessionTimeout`<sup>Optional</sup> <a name="SessionTimeout" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptions.property.sessionTimeout"></a>

```csharp
public double SessionTimeout { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/opensearchserverless_security_config#session_timeout OpensearchserverlessSecurityConfig#session_timeout}.

---

##### `UserAttribute`<sup>Optional</sup> <a name="UserAttribute" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptions.property.userAttribute"></a>

```csharp
public string UserAttribute { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/opensearchserverless_security_config#user_attribute OpensearchserverlessSecurityConfig#user_attribute}.

---

## Classes <a name="Classes" id="Classes"></a>

### OpensearchserverlessSecurityConfigSamlOptionsOutputReference <a name="OpensearchserverlessSecurityConfigSamlOptionsOutputReference" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new OpensearchserverlessSecurityConfigSamlOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.resetGroupAttribute">ResetGroupAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.resetSessionTimeout">ResetSessionTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.resetUserAttribute">ResetUserAttribute</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetGroupAttribute` <a name="ResetGroupAttribute" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.resetGroupAttribute"></a>

```csharp
private void ResetGroupAttribute()
```

##### `ResetSessionTimeout` <a name="ResetSessionTimeout" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.resetSessionTimeout"></a>

```csharp
private void ResetSessionTimeout()
```

##### `ResetUserAttribute` <a name="ResetUserAttribute" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.resetUserAttribute"></a>

```csharp
private void ResetUserAttribute()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.property.groupAttributeInput">GroupAttributeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.property.metadataInput">MetadataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.property.sessionTimeoutInput">SessionTimeoutInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.property.userAttributeInput">UserAttributeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.property.groupAttribute">GroupAttribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.property.metadata">Metadata</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.property.sessionTimeout">SessionTimeout</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.property.userAttribute">UserAttribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `GroupAttributeInput`<sup>Optional</sup> <a name="GroupAttributeInput" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.property.groupAttributeInput"></a>

```csharp
public string GroupAttributeInput { get; }
```

- *Type:* string

---

##### `MetadataInput`<sup>Optional</sup> <a name="MetadataInput" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.property.metadataInput"></a>

```csharp
public string MetadataInput { get; }
```

- *Type:* string

---

##### `SessionTimeoutInput`<sup>Optional</sup> <a name="SessionTimeoutInput" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.property.sessionTimeoutInput"></a>

```csharp
public double SessionTimeoutInput { get; }
```

- *Type:* double

---

##### `UserAttributeInput`<sup>Optional</sup> <a name="UserAttributeInput" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.property.userAttributeInput"></a>

```csharp
public string UserAttributeInput { get; }
```

- *Type:* string

---

##### `GroupAttribute`<sup>Required</sup> <a name="GroupAttribute" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.property.groupAttribute"></a>

```csharp
public string GroupAttribute { get; }
```

- *Type:* string

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.property.metadata"></a>

```csharp
public string Metadata { get; }
```

- *Type:* string

---

##### `SessionTimeout`<sup>Required</sup> <a name="SessionTimeout" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.property.sessionTimeout"></a>

```csharp
public double SessionTimeout { get; }
```

- *Type:* double

---

##### `UserAttribute`<sup>Required</sup> <a name="UserAttribute" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.property.userAttribute"></a>

```csharp
public string UserAttribute { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.opensearchserverlessSecurityConfig.OpensearchserverlessSecurityConfigSamlOptionsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



