# `verifiedpermissionsPolicyTemplate` Submodule <a name="`verifiedpermissionsPolicyTemplate` Submodule" id="@cdktf/provider-aws.verifiedpermissionsPolicyTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VerifiedpermissionsPolicyTemplate <a name="VerifiedpermissionsPolicyTemplate" id="@cdktf/provider-aws.verifiedpermissionsPolicyTemplate.VerifiedpermissionsPolicyTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/verifiedpermissions_policy_template aws_verifiedpermissions_policy_template}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.verifiedpermissionsPolicyTemplate.VerifiedpermissionsPolicyTemplate.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new VerifiedpermissionsPolicyTemplate(Construct Scope, string Id, VerifiedpermissionsPolicyTemplateConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicyTemplate.VerifiedpermissionsPolicyTemplate.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicyTemplate.VerifiedpermissionsPolicyTemplate.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicyTemplate.VerifiedpermissionsPolicyTemplate.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicyTemplate.VerifiedpermissionsPolicyTemplateConfig">VerifiedpermissionsPolicyTemplateConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.verifiedpermissionsPolicyTemplate.VerifiedpermissionsPolicyTemplate.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.verifiedpermissionsPolicyTemplate.VerifiedpermissionsPolicyTemplate.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.verifiedpermissionsPolicyTemplate.VerifiedpermissionsPolicyTemplate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.verifiedpermissionsPolicyTemplate.VerifiedpermissionsPolicyTemplateConfig">VerifiedpermissionsPolicyTemplateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicyTemplate.VerifiedpermissionsPolicyTemplate.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicyTemplate.VerifiedpermissionsPolicyTemplate.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicyTemplate.VerifiedpermissionsPolicyTemplate.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicyTemplate.VerifiedpermissionsPolicyTemplate.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicyTemplate.VerifiedpermissionsPolicyTemplate.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicyTemplate.VerifiedpermissionsPolicyTemplate.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicyTemplate.VerifiedpermissionsPolicyTemplate.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicyTemplate.VerifiedpermissionsPolicyTemplate.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicyTemplate.VerifiedpermissionsPolicyTemplate.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicyTemplate.VerifiedpermissionsPolicyTemplate.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicyTemplate.VerifiedpermissionsPolicyTemplate.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicyTemplate.VerifiedpermissionsPolicyTemplate.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicyTemplate.VerifiedpermissionsPolicyTemplate.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicyTemplate.VerifiedpermissionsPolicyTemplate.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicyTemplate.VerifiedpermissionsPolicyTemplate.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicyTemplate.VerifiedpermissionsPolicyTemplate.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicyTemplate.VerifiedpermissionsPolicyTemplate.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicyTemplate.VerifiedpermissionsPolicyTemplate.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicyTemplate.VerifiedpermissionsPolicyTemplate.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicyTemplate.VerifiedpermissionsPolicyTemplate.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicyTemplate.VerifiedpermissionsPolicyTemplate.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicyTemplate.VerifiedpermissionsPolicyTemplate.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicyTemplate.VerifiedpermissionsPolicyTemplate.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicyTemplate.VerifiedpermissionsPolicyTemplate.resetDescription">ResetDescription</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.verifiedpermissionsPolicyTemplate.VerifiedpermissionsPolicyTemplate.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.verifiedpermissionsPolicyTemplate.VerifiedpermissionsPolicyTemplate.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.verifiedpermissionsPolicyTemplate.VerifiedpermissionsPolicyTemplate.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.verifiedpermissionsPolicyTemplate.VerifiedpermissionsPolicyTemplate.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.verifiedpermissionsPolicyTemplate.VerifiedpermissionsPolicyTemplate.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.verifiedpermissionsPolicyTemplate.VerifiedpermissionsPolicyTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.verifiedpermissionsPolicyTemplate.VerifiedpermissionsPolicyTemplate.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.verifiedpermissionsPolicyTemplate.VerifiedpermissionsPolicyTemplate.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.verifiedpermissionsPolicyTemplate.VerifiedpermissionsPolicyTemplate.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.verifiedpermissionsPolicyTemplate.VerifiedpermissionsPolicyTemplate.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.verifiedpermissionsPolicyTemplate.VerifiedpermissionsPolicyTemplate.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.verifiedpermissionsPolicyTemplate.VerifiedpermissionsPolicyTemplate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.verifiedpermissionsPolicyTemplate.VerifiedpermissionsPolicyTemplate.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsPolicyTemplate.VerifiedpermissionsPolicyTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.verifiedpermissionsPolicyTemplate.VerifiedpermissionsPolicyTemplate.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsPolicyTemplate.VerifiedpermissionsPolicyTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.verifiedpermissionsPolicyTemplate.VerifiedpermissionsPolicyTemplate.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsPolicyTemplate.VerifiedpermissionsPolicyTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.verifiedpermissionsPolicyTemplate.VerifiedpermissionsPolicyTemplate.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsPolicyTemplate.VerifiedpermissionsPolicyTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.verifiedpermissionsPolicyTemplate.VerifiedpermissionsPolicyTemplate.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsPolicyTemplate.VerifiedpermissionsPolicyTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.verifiedpermissionsPolicyTemplate.VerifiedpermissionsPolicyTemplate.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsPolicyTemplate.VerifiedpermissionsPolicyTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.verifiedpermissionsPolicyTemplate.VerifiedpermissionsPolicyTemplate.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsPolicyTemplate.VerifiedpermissionsPolicyTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.verifiedpermissionsPolicyTemplate.VerifiedpermissionsPolicyTemplate.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsPolicyTemplate.VerifiedpermissionsPolicyTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.verifiedpermissionsPolicyTemplate.VerifiedpermissionsPolicyTemplate.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsPolicyTemplate.VerifiedpermissionsPolicyTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.verifiedpermissionsPolicyTemplate.VerifiedpermissionsPolicyTemplate.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.verifiedpermissionsPolicyTemplate.VerifiedpermissionsPolicyTemplate.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.verifiedpermissionsPolicyTemplate.VerifiedpermissionsPolicyTemplate.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.verifiedpermissionsPolicyTemplate.VerifiedpermissionsPolicyTemplate.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.verifiedpermissionsPolicyTemplate.VerifiedpermissionsPolicyTemplate.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.verifiedpermissionsPolicyTemplate.VerifiedpermissionsPolicyTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.verifiedpermissionsPolicyTemplate.VerifiedpermissionsPolicyTemplate.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.verifiedpermissionsPolicyTemplate.VerifiedpermissionsPolicyTemplate.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.verifiedpermissionsPolicyTemplate.VerifiedpermissionsPolicyTemplate.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.verifiedpermissionsPolicyTemplate.VerifiedpermissionsPolicyTemplate.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-aws.verifiedpermissionsPolicyTemplate.VerifiedpermissionsPolicyTemplate.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.verifiedpermissionsPolicyTemplate.VerifiedpermissionsPolicyTemplate.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.verifiedpermissionsPolicyTemplate.VerifiedpermissionsPolicyTemplate.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-aws.verifiedpermissionsPolicyTemplate.VerifiedpermissionsPolicyTemplate.resetDescription"></a>

```csharp
private void ResetDescription()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicyTemplate.VerifiedpermissionsPolicyTemplate.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicyTemplate.VerifiedpermissionsPolicyTemplate.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicyTemplate.VerifiedpermissionsPolicyTemplate.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicyTemplate.VerifiedpermissionsPolicyTemplate.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a VerifiedpermissionsPolicyTemplate resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.verifiedpermissionsPolicyTemplate.VerifiedpermissionsPolicyTemplate.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

VerifiedpermissionsPolicyTemplate.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.verifiedpermissionsPolicyTemplate.VerifiedpermissionsPolicyTemplate.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.verifiedpermissionsPolicyTemplate.VerifiedpermissionsPolicyTemplate.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

VerifiedpermissionsPolicyTemplate.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.verifiedpermissionsPolicyTemplate.VerifiedpermissionsPolicyTemplate.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.verifiedpermissionsPolicyTemplate.VerifiedpermissionsPolicyTemplate.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

VerifiedpermissionsPolicyTemplate.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.verifiedpermissionsPolicyTemplate.VerifiedpermissionsPolicyTemplate.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.verifiedpermissionsPolicyTemplate.VerifiedpermissionsPolicyTemplate.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

VerifiedpermissionsPolicyTemplate.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a VerifiedpermissionsPolicyTemplate resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.verifiedpermissionsPolicyTemplate.VerifiedpermissionsPolicyTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-aws.verifiedpermissionsPolicyTemplate.VerifiedpermissionsPolicyTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the VerifiedpermissionsPolicyTemplate to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-aws.verifiedpermissionsPolicyTemplate.VerifiedpermissionsPolicyTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing VerifiedpermissionsPolicyTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/verifiedpermissions_policy_template#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.verifiedpermissionsPolicyTemplate.VerifiedpermissionsPolicyTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the VerifiedpermissionsPolicyTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicyTemplate.VerifiedpermissionsPolicyTemplate.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicyTemplate.VerifiedpermissionsPolicyTemplate.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicyTemplate.VerifiedpermissionsPolicyTemplate.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicyTemplate.VerifiedpermissionsPolicyTemplate.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicyTemplate.VerifiedpermissionsPolicyTemplate.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicyTemplate.VerifiedpermissionsPolicyTemplate.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicyTemplate.VerifiedpermissionsPolicyTemplate.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicyTemplate.VerifiedpermissionsPolicyTemplate.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicyTemplate.VerifiedpermissionsPolicyTemplate.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicyTemplate.VerifiedpermissionsPolicyTemplate.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicyTemplate.VerifiedpermissionsPolicyTemplate.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicyTemplate.VerifiedpermissionsPolicyTemplate.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicyTemplate.VerifiedpermissionsPolicyTemplate.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicyTemplate.VerifiedpermissionsPolicyTemplate.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicyTemplate.VerifiedpermissionsPolicyTemplate.property.createdDate">CreatedDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicyTemplate.VerifiedpermissionsPolicyTemplate.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicyTemplate.VerifiedpermissionsPolicyTemplate.property.policyTemplateId">PolicyTemplateId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicyTemplate.VerifiedpermissionsPolicyTemplate.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicyTemplate.VerifiedpermissionsPolicyTemplate.property.policyStoreIdInput">PolicyStoreIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicyTemplate.VerifiedpermissionsPolicyTemplate.property.statementInput">StatementInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicyTemplate.VerifiedpermissionsPolicyTemplate.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicyTemplate.VerifiedpermissionsPolicyTemplate.property.policyStoreId">PolicyStoreId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicyTemplate.VerifiedpermissionsPolicyTemplate.property.statement">Statement</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.verifiedpermissionsPolicyTemplate.VerifiedpermissionsPolicyTemplate.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.verifiedpermissionsPolicyTemplate.VerifiedpermissionsPolicyTemplate.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.verifiedpermissionsPolicyTemplate.VerifiedpermissionsPolicyTemplate.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.verifiedpermissionsPolicyTemplate.VerifiedpermissionsPolicyTemplate.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.verifiedpermissionsPolicyTemplate.VerifiedpermissionsPolicyTemplate.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.verifiedpermissionsPolicyTemplate.VerifiedpermissionsPolicyTemplate.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.verifiedpermissionsPolicyTemplate.VerifiedpermissionsPolicyTemplate.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.verifiedpermissionsPolicyTemplate.VerifiedpermissionsPolicyTemplate.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.verifiedpermissionsPolicyTemplate.VerifiedpermissionsPolicyTemplate.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.verifiedpermissionsPolicyTemplate.VerifiedpermissionsPolicyTemplate.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.verifiedpermissionsPolicyTemplate.VerifiedpermissionsPolicyTemplate.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.verifiedpermissionsPolicyTemplate.VerifiedpermissionsPolicyTemplate.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.verifiedpermissionsPolicyTemplate.VerifiedpermissionsPolicyTemplate.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.verifiedpermissionsPolicyTemplate.VerifiedpermissionsPolicyTemplate.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CreatedDate`<sup>Required</sup> <a name="CreatedDate" id="@cdktf/provider-aws.verifiedpermissionsPolicyTemplate.VerifiedpermissionsPolicyTemplate.property.createdDate"></a>

```csharp
public string CreatedDate { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.verifiedpermissionsPolicyTemplate.VerifiedpermissionsPolicyTemplate.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `PolicyTemplateId`<sup>Required</sup> <a name="PolicyTemplateId" id="@cdktf/provider-aws.verifiedpermissionsPolicyTemplate.VerifiedpermissionsPolicyTemplate.property.policyTemplateId"></a>

```csharp
public string PolicyTemplateId { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-aws.verifiedpermissionsPolicyTemplate.VerifiedpermissionsPolicyTemplate.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `PolicyStoreIdInput`<sup>Optional</sup> <a name="PolicyStoreIdInput" id="@cdktf/provider-aws.verifiedpermissionsPolicyTemplate.VerifiedpermissionsPolicyTemplate.property.policyStoreIdInput"></a>

```csharp
public string PolicyStoreIdInput { get; }
```

- *Type:* string

---

##### `StatementInput`<sup>Optional</sup> <a name="StatementInput" id="@cdktf/provider-aws.verifiedpermissionsPolicyTemplate.VerifiedpermissionsPolicyTemplate.property.statementInput"></a>

```csharp
public string StatementInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-aws.verifiedpermissionsPolicyTemplate.VerifiedpermissionsPolicyTemplate.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `PolicyStoreId`<sup>Required</sup> <a name="PolicyStoreId" id="@cdktf/provider-aws.verifiedpermissionsPolicyTemplate.VerifiedpermissionsPolicyTemplate.property.policyStoreId"></a>

```csharp
public string PolicyStoreId { get; }
```

- *Type:* string

---

##### `Statement`<sup>Required</sup> <a name="Statement" id="@cdktf/provider-aws.verifiedpermissionsPolicyTemplate.VerifiedpermissionsPolicyTemplate.property.statement"></a>

```csharp
public string Statement { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicyTemplate.VerifiedpermissionsPolicyTemplate.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.verifiedpermissionsPolicyTemplate.VerifiedpermissionsPolicyTemplate.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### VerifiedpermissionsPolicyTemplateConfig <a name="VerifiedpermissionsPolicyTemplateConfig" id="@cdktf/provider-aws.verifiedpermissionsPolicyTemplate.VerifiedpermissionsPolicyTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.verifiedpermissionsPolicyTemplate.VerifiedpermissionsPolicyTemplateConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new VerifiedpermissionsPolicyTemplateConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string PolicyStoreId,
    string Statement,
    string Description = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicyTemplate.VerifiedpermissionsPolicyTemplateConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicyTemplate.VerifiedpermissionsPolicyTemplateConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicyTemplate.VerifiedpermissionsPolicyTemplateConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicyTemplate.VerifiedpermissionsPolicyTemplateConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicyTemplate.VerifiedpermissionsPolicyTemplateConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicyTemplate.VerifiedpermissionsPolicyTemplateConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicyTemplate.VerifiedpermissionsPolicyTemplateConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicyTemplate.VerifiedpermissionsPolicyTemplateConfig.property.policyStoreId">PolicyStoreId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/verifiedpermissions_policy_template#policy_store_id VerifiedpermissionsPolicyTemplate#policy_store_id}. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicyTemplate.VerifiedpermissionsPolicyTemplateConfig.property.statement">Statement</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/verifiedpermissions_policy_template#statement VerifiedpermissionsPolicyTemplate#statement}. |
| <code><a href="#@cdktf/provider-aws.verifiedpermissionsPolicyTemplate.VerifiedpermissionsPolicyTemplateConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/verifiedpermissions_policy_template#description VerifiedpermissionsPolicyTemplate#description}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.verifiedpermissionsPolicyTemplate.VerifiedpermissionsPolicyTemplateConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.verifiedpermissionsPolicyTemplate.VerifiedpermissionsPolicyTemplateConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.verifiedpermissionsPolicyTemplate.VerifiedpermissionsPolicyTemplateConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.verifiedpermissionsPolicyTemplate.VerifiedpermissionsPolicyTemplateConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.verifiedpermissionsPolicyTemplate.VerifiedpermissionsPolicyTemplateConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.verifiedpermissionsPolicyTemplate.VerifiedpermissionsPolicyTemplateConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.verifiedpermissionsPolicyTemplate.VerifiedpermissionsPolicyTemplateConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `PolicyStoreId`<sup>Required</sup> <a name="PolicyStoreId" id="@cdktf/provider-aws.verifiedpermissionsPolicyTemplate.VerifiedpermissionsPolicyTemplateConfig.property.policyStoreId"></a>

```csharp
public string PolicyStoreId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/verifiedpermissions_policy_template#policy_store_id VerifiedpermissionsPolicyTemplate#policy_store_id}.

---

##### `Statement`<sup>Required</sup> <a name="Statement" id="@cdktf/provider-aws.verifiedpermissionsPolicyTemplate.VerifiedpermissionsPolicyTemplateConfig.property.statement"></a>

```csharp
public string Statement { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/verifiedpermissions_policy_template#statement VerifiedpermissionsPolicyTemplate#statement}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-aws.verifiedpermissionsPolicyTemplate.VerifiedpermissionsPolicyTemplateConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/verifiedpermissions_policy_template#description VerifiedpermissionsPolicyTemplate#description}.

---



